// 共用的 quiz md 區塊解析邏輯,原本寫在 import-quiz-md.mjs 裡,
// 因為 import-issue-quiz.mjs(解析 quiz/Quiz-w-Issue.md)也需要同一套解析規則而抽出來共用。
// 格式規格請參考 quiz/Schedule.md 的 match-001 / hs-001 範本。

export const TYPE_LABELS = {
  single_choice: '單選題',
  multiple_response: '多選題',
  matching: '拖拉配對題',
  hotspot: '點擊熱區題',
  dropdown: '下拉選單題',
  case_set: '情境題組',
}
export const LABEL_TO_TYPE = Object.fromEntries(Object.entries(TYPE_LABELS).map(([k, v]) => [v, k]))

export function isValidIdent(k) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k)
}

export function jsValue(v, indent) {
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
export function autoLayoutPositions(n) {
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

// EN/ZH 分隔用 " / " 是理想格式,但大量題目(尤其純數字選項、或英文本身已內嵌中文註解的寫法)
// 常常沒有標準的「空白-斜線-空白」分隔。三層 fallback,依序嘗試,盡量搶救格式不夠嚴謹的題目:
// 1) 標準的 " / "(最安全,不會誤判內容裡巧合出現的斜線)
// 2) 沒有空白包住的 "/"(例如 "CV(Cost Variance,成本變異)/ CV(成本變異)")
// 3) 完全沒有斜線:兩語言用同一個字串(常見於純數字/公式選項,如 "$233,333")
export function splitEnZh(raw) {
  const text = raw.trim()
  let m = text.match(/^(.+?)\s\/\s(.+)$/)
  if (m) return { en: m[1].trim(), zh: m[2].trim() }
  m = text.match(/^(.+?)\/(.+)$/)
  if (m) return { en: m[1].trim(), zh: m[2].trim() }
  return { en: text, zh: text }
}

// 「(id) <EN/ZH 文字> ✅ **正解** [x=..,y=..,w=..,h=..]」格式的選項列(single_choice/multiple_response/hotspot/dropdown 共用)
export function parseOptionLines(text) {
  const re =
    /^- \((\w+)\)\s*(.+?)(\s*✅\s*\*\*正解\*\*)?(?:\s*\[x=([\d.]+),y=([\d.]+),w=([\d.]+),h=([\d.]+)\])?\s*$/gm
  const results = []
  let m
  while ((m = re.exec(text))) {
    const { en, zh } = splitEnZh(m[2])
    results.push({
      id: m[1],
      en,
      zh,
      isCorrect: !!m[3],
      coords: m[4] !== undefined ? { x: Number(m[4]), y: Number(m[5]), width: Number(m[6]), height: Number(m[7]) } : null,
    })
  }
  return results
}

// 「- id: <EN/ZH 文字>」格式(matching 的 prompts/choices 清單)
export function parseIdColonLines(text) {
  const re = /^- (\w+): (.+)$/gm
  const results = []
  let m
  while ((m = re.exec(text))) {
    const { en, zh } = splitEnZh(m[2])
    results.push({ id: m[1], text: { en, zh } })
  }
  return results
}

export function parseBlock(block) {
  const headerMatch = block.match(/^### Q\d+\.\s*`([^`]+)`\s*—\s*(.+)$/m)
  if (!headerMatch) throw new Error('找不到題目標頭(### Qn. `id` — 題型)')
  const id = headerMatch[1].trim()
  const typeLabelRaw = headerMatch[2].trim()
  // 題型標籤後面偶爾會有補充說明,例如「下拉選單題(Vroom's Expectancy Theory)」,只取到左括號前
  const typeLabel = typeLabelRaw.split('(')[0].trim()
  const questionType = LABEL_TO_TYPE[typeLabel]
  if (!questionType) throw new Error(`無法辨識的題型標籤: "${typeLabelRaw}"(id: ${id})`)

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

  // 選填欄位,只有 quiz/Quiz-w-Issue.md(稽核抽離的爭議題目)才會有,一般 quiz/<Domain>.md 沒有這行
  const auditNoteMatch = block.match(/\*\*稽核備註\*\*[:：]\s*(.+)/)

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

    const edgesSection = body.split('**節點連線')[1]
    if (edgesSection) {
      const edges = []
      const edgeRe = /^- (\w+) → (\w+)\s*$/gm
      let em
      while ((em = edgeRe.exec(edgesSection))) edges.push({ from: em[1], to: em[2] })
      if (edges.length > 0) q.edges = edges
    }
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
  if (auditNoteMatch) q.auditNote = auditNoteMatch[1].trim()
  return q
}

/** 把整份 md 檔內容切成一個個「### Qn. ...」區塊並逐一解析,回傳 {questions, errors} */
export function parseQuizMdContent(content, sourceLabel) {
  const blocks = content.split(/\n(?=### Q\d+\.)/).filter((b) => b.trim().startsWith('### Q'))
  const questions = []
  const errors = []
  for (const block of blocks) {
    try {
      questions.push(parseBlock(block))
    } catch (err) {
      errors.push(`[${sourceLabel}] ${err.message}`)
    }
  }
  return { questions, errors }
}
