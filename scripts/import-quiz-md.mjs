// 把 quiz/*.md(Report-Issue.md 除外)解析回 src/data/sampleQuestions.js。
// 這是 export-quiz-md.mjs 的反向腳本 —— 採用 md 編輯流程後,quiz/*.md 才是題庫的可編輯來源,
// sampleQuestions.js 變成「產生出來的檔案」,執行這支腳本後會被整份覆蓋重寫。
//
// 用法: npm run import:quiz
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERFORMANCE_DOMAINS_PMBOK8 } from '../src/schema/questionSchema.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const QUIZ_DIR = path.join(__dirname, '..', 'quiz')
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'sampleQuestions.js')

const TYPE_LABELS = {
  single_choice: '單選題',
  multiple_response: '多選題',
  matching: '拖拉配對題',
  hotspot: '點擊熱區題',
  dropdown: '下拉選單題',
  case_set: '情境題組',
}
const LABEL_TO_TYPE = Object.fromEntries(Object.entries(TYPE_LABELS).map(([k, v]) => [v, k]))

// ---------- 小工具 ----------

function isValidIdent(k) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k)
}

function jsValue(v, indent) {
  const pad = '  '.repeat(indent)
  const padIn = '  '.repeat(indent + 1)
  if (v === null || v === undefined) return 'null'
  if (typeof v === 'string') return JSON.stringify(v)
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]'
    const items = v.map((item) => padIn + jsValue(item, indent + 1)).join(',\n')
    return `[\n${items},\n${pad}]`
  }
  const keys = Object.keys(v)
  if (keys.length === 0) return '{}'
  const items = keys
    .map((k) => `${padIn}${isValidIdent(k) ? k : JSON.stringify(k)}: ${jsValue(v[k], indent + 1)}`)
    .join(',\n')
  return `{\n${items},\n${pad}}`
}

// 新增的 hotspot 題目若沒有座標,依選項數量自動排成簡單網格,避免使用者得手算百分比座標
function autoLayoutPositions(n) {
  const cols = Math.min(n, n <= 4 ? 2 : 3)
  const rows = Math.ceil(n / cols)
  const width = Math.max(15, Math.floor(90 / cols) - 5)
  const height = Math.max(15, Math.floor(80 / rows) - 5)
  const positions = []
  for (let i = 0; i < n; i++) {
    const col = i % cols
    const row = Math.floor(i / cols)
    positions.push({
      x: 5 + col * (95 / cols),
      y: 5 + row * (85 / rows),
      width,
      height,
    })
  }
  return positions
}

// ---------- 區塊解析 ----------

function extractStem(block) {
  const m = block.match(/^- EN: (.+)\n- 中: (.+)$/m)
  if (!m) throw new Error('找不到題幹(- EN: / - 中:)')
  return { en: m[1].trim(), zh: m[2].trim() }
}

function extractExplanation(block) {
  const m = block.match(/\*\*詳解\*\*\n\n([\s\S]*?)\n\n---/)
  if (!m) throw new Error('找不到詳解區塊')
  return m[1].trim()
}

// 「(id) EN / ZH ✅ **正解** [x=..,y=..,w=..,h=..]」格式的選項列(single_choice/multiple_response/hotspot/dropdown 共用)
function parseOptionLines(text) {
  const re =
    /^- \((\w+)\)\s*(.+?) \/ (.+?)(\s*✅\s*\*\*正解\*\*)?(?:\s*\[x=([\d.]+),y=([\d.]+),w=([\d.]+),h=([\d.]+)\])?\s*$/gm
  const results = []
  let m
  while ((m = re.exec(text))) {
    results.push({
      id: m[1],
      en: m[2].trim(),
      zh: m[3].trim(),
      isCorrect: !!m[4],
      coords: m[5] !== undefined ? { x: Number(m[5]), y: Number(m[6]), width: Number(m[7]), height: Number(m[8]) } : null,
    })
  }
  return results
}

// 「- id: EN / ZH」格式(matching 的 prompts/choices 清單)
function parseIdColonLines(text) {
  const re = /^- (\w+): (.+?) \/ (.+?)$/gm
  const results = []
  let m
  while ((m = re.exec(text))) {
    results.push({ id: m[1], text: { en: m[2].trim(), zh: m[3].trim() } })
  }
  return results
}

function parseBlock(block, domainFile) {
  const headerMatch = block.match(/^### Q\d+\.\s*`([^`]+)`\s*—\s*(.+)$/m)
  if (!headerMatch) throw new Error('找不到題目標頭(### Qn. `id` — 題型)')
  const id = headerMatch[1].trim()
  const typeLabel = headerMatch[2].trim()
  const questionType = LABEL_TO_TYPE[typeLabel]
  if (!questionType) throw new Error(`無法辨識的題型標籤: "${typeLabel}"(id: ${id})`)

  const metaMatch = block.match(
    /難度:\s*`([^`]+)`\s*｜\s*建議作答時間分類:\s*`([^`]+)`\s*｜\s*版本標籤:\s*`([^`]+)`\s*｜\s*原始 performanceDomain:\s*`([^`]+)`\s*｜\s*ECO domain:\s*`([^`]+)`/,
  )
  if (!metaMatch) throw new Error(`找不到 metadata 列(id: ${id})`)
  const [, difficulty, timeCategory, edition, performanceDomain, domain] = metaMatch

  const stem = extractStem(block)
  const explanation = extractExplanation(block)

  const detailIdx = block.indexOf('**詳解**')
  const stemLineEnd = block.indexOf('- 中:')
  const body = block.slice(stemLineEnd, detailIdx)

  const q = {
    id,
    edition,
    domain,
    performanceDomain,
    questionType,
    difficulty,
    timeCategory,
    stem,
  }

  if (questionType === 'single_choice') {
    const opts = parseOptionLines(body)
    if (opts.length === 0) throw new Error(`single_choice 沒有解析到選項(id: ${id})`)
    q.options = opts.map((o) => ({ id: o.id, text: { en: o.en, zh: o.zh } }))
    const correct = opts.find((o) => o.isCorrect)
    if (!correct) throw new Error(`single_choice 沒有標記 ✅ 正解(id: ${id})`)
    q.correctAnswer = correct.id
  } else if (questionType === 'multiple_response') {
    const opts = parseOptionLines(body)
    if (opts.length === 0) throw new Error(`multiple_response 沒有解析到選項(id: ${id})`)
    q.options = opts.map((o) => ({ id: o.id, text: { en: o.en, zh: o.zh } }))
    const correctIds = opts.filter((o) => o.isCorrect).map((o) => o.id)
    if (correctIds.length === 0) throw new Error(`multiple_response 沒有標記 ✅ 正解(id: ${id})`)
    q.correctAnswer = correctIds
    q.selectCount = correctIds.length
  } else if (questionType === 'hotspot') {
    const opts = parseOptionLines(body)
    if (opts.length === 0) throw new Error(`hotspot 沒有解析到選項(id: ${id})`)
    const needsAutoLayout = opts.some((o) => !o.coords)
    const positions = needsAutoLayout ? autoLayoutPositions(opts.length) : opts.map((o) => o.coords)
    q.options = opts.map((o, i) => ({
      id: o.id,
      label: { en: o.en, zh: o.zh },
      ...positions[i],
    }))
    const correct = opts.find((o) => o.isCorrect)
    if (!correct) throw new Error(`hotspot 沒有標記 ✅ 正解(id: ${id})`)
    q.correctAnswer = correct.id
  } else if (questionType === 'matching') {
    const promptsSection = body.split('**選項池')[0]
    const choicesAndRestSection = body.split('**選項池')[1] || ''
    const choicesSection = choicesAndRestSection.split('**✅ 正確配對**')[0]
    const mappingSection = choicesAndRestSection.split('**✅ 正確配對**')[1] || ''

    const prompts = parseIdColonLines(promptsSection)
    const choices = parseIdColonLines(choicesSection)
    if (prompts.length === 0 || choices.length === 0) {
      throw new Error(`matching 的 prompts/choices 解析不完整(id: ${id})`)
    }
    q.options = { prompts, choices }

    const correctAnswer = {}
    const mapRe = /^- (\w+) → (\w+):/gm
    let mm
    while ((mm = mapRe.exec(mappingSection))) {
      correctAnswer[mm[1]] = mm[2]
    }
    if (Object.keys(correctAnswer).length === 0) throw new Error(`matching 沒有解析到正確配對(id: ${id})`)
    q.correctAnswer = correctAnswer
  } else if (questionType === 'dropdown') {
    const blankSectionRe = /\*\*(\w+)\*\*\n\n((?:- .+\n?)+)/g
    const blanks = []
    const correctAnswer = {}
    let bm
    while ((bm = blankSectionRe.exec(body))) {
      const blankId = bm[1]
      const opts = parseOptionLines(bm[2])
      if (opts.length === 0) continue
      blanks.push({ id: blankId, options: opts.map((o) => ({ id: o.id, text: { en: o.en, zh: o.zh } })) })
      const correct = opts.find((o) => o.isCorrect)
      if (!correct) throw new Error(`dropdown 的 ${blankId} 沒有標記 ✅ 正解(id: ${id})`)
      correctAnswer[blankId] = correct.id
    }
    if (blanks.length === 0) throw new Error(`dropdown 沒有解析到任何 blank(id: ${id})`)
    q.blanks = blanks
    q.correctAnswer = correctAnswer
  } else {
    throw new Error(`目前匯入腳本尚不支援題型 ${questionType}(id: ${id})`)
  }

  q.explanation = explanation
  return q
}

// ---------- 主流程 ----------

const allQuestions = []
const errors = []

for (const domain of PERFORMANCE_DOMAINS_PMBOK8) {
  const filePath = path.join(QUIZ_DIR, `${domain}.md`)
  if (!fs.existsSync(filePath)) continue
  const content = fs.readFileSync(filePath, 'utf-8')
  const blocks = content.split(/\n(?=### Q\d+\.)/).filter((b) => b.trim().startsWith('### Q'))

  for (const block of blocks) {
    try {
      allQuestions.push(parseBlock(block, domain))
    } catch (err) {
      errors.push(`[${domain}.md] ${err.message}`)
    }
  }
}

if (errors.length > 0) {
  console.error('匯入時發現以下問題,已中止(沒有寫入任何檔案),請修正 quiz/*.md 後再重試:\n')
  for (const e of errors) console.error(`  - ${e}`)
  process.exit(1)
}

const ids = allQuestions.map((q) => q.id)
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
if (dupes.length > 0) {
  console.error(`發現重複的題目 id,已中止:${[...new Set(dupes)].join(', ')}`)
  process.exit(1)
}

const header = `// 此檔案由 \`npm run import:quiz\` 從 quiz/*.md 自動產生,請直接修改 quiz/*.md 後重新匯入,
// 不要手動編輯這個檔案 —— 下次匯入會整份覆蓋。
//
// 考生會看到的文字一律用 { en, zh } 雙語結構(對應正式 PMP 考試「英文為主 + 可切換輔助語言」的介面)。
// explanation(詳解)固定繁中,僅供交卷後複習用,不隨考試語言切換。

export const sampleQuestions = [
`

const body = allQuestions.map((q) => '  ' + jsValue(q, 1)).join(',\n')
const footer = '\n]\n'

fs.writeFileSync(OUT_FILE, header + body + footer)
console.log(`已將 ${allQuestions.length} 題從 quiz/*.md 匯入到 ${path.relative(process.cwd(), OUT_FILE)}`)
