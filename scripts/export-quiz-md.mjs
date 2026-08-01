// 把 src/data/sampleQuestions.js 匯出成方便瀏覽檢查的 Markdown,依 PMBOK 8th 版 7 大績效領域分檔。
// 之後題庫內容增加時,重新執行 `npm run export:quiz` 即可重新產生。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { sampleQuestions } from '../src/data/sampleQuestions.js'
import { PERFORMANCE_DOMAINS_PMBOK8 } from '../src/schema/questionSchema.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'quiz')

const TYPE_LABELS = {
  single_choice: '單選題',
  multiple_response: '多選題',
  matching: '拖拉配對題',
  hotspot: '點擊熱區題',
  dropdown: '下拉選單題',
  case_set: '情境題組',
}

// 題庫裡帶 pmbok7 標籤的題目,performanceDomain 是 7th 版八大績效領域名稱,
// 不是 8th 版的 7 個分類 —— 這裡只用來決定要歸檔到哪個 8th 版章節,不影響題目本身的資料。
const LEGACY_DOMAIN_TO_8TH = {
  Stakeholders: 'Stakeholders',
  Team: 'Resources',
  'Development Approach and Life Cycle': 'Governance',
  Planning: 'Governance',
  'Project Work': 'Resources',
  Delivery: 'Scope',
  Measurement: 'Finance',
  Uncertainty: 'Risk',
}

function resolve8thDomain(q) {
  // 新題目一律用現代(8th 版)領域名稱標記 performanceDomain,不分 edition —— 直接採用即可。
  // 只有極少數最早期手寫的 pmbok7 題目仍用舊制八大績效領域名稱,才需要查 LEGACY_DOMAIN_TO_8TH。
  if (PERFORMANCE_DOMAINS_PMBOK8.includes(q.performanceDomain)) return q.performanceDomain
  return LEGACY_DOMAIN_TO_8TH[q.performanceDomain] || 'Governance'
}

function renderOptionsBlock(q) {
  const lines = []
  if (q.questionType === 'single_choice' || q.questionType === 'multiple_response') {
    const correctSet = q.questionType === 'single_choice' ? new Set([q.correctAnswer]) : new Set(q.correctAnswer)
    lines.push('**選項**')
    lines.push('')
    for (const opt of q.options) {
      const mark = correctSet.has(opt.id) ? ' ✅ **正解**' : ''
      lines.push(`- (${opt.id}) ${opt.text.en} / ${opt.text.zh}${mark}`)
    }
  } else if (q.questionType === 'hotspot') {
    lines.push('**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)')
    lines.push('')
    for (const opt of q.options) {
      const mark = opt.id === q.correctAnswer ? ' ✅ **正解**' : ''
      lines.push(
        `- (${opt.id}) ${opt.label.en} / ${opt.label.zh}${mark} [x=${opt.x},y=${opt.y},w=${opt.width},h=${opt.height}]`,
      )
    }
    if (q.edges && q.edges.length > 0) {
      lines.push('')
      lines.push(
        '**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**',
      )
      lines.push('')
      for (const edge of q.edges) lines.push(`- ${edge.from} → ${edge.to}`)
    }
  } else if (q.questionType === 'matching') {
    const { prompts, choices } = q.options
    lines.push('**配對項目(拖曳來源)**')
    lines.push('')
    for (const p of prompts) lines.push(`- ${p.id}: ${p.text.en} / ${p.text.zh}`)
    lines.push('')
    lines.push('**選項池(拖曳目標)**')
    lines.push('')
    for (const c of choices) lines.push(`- ${c.id}: ${c.text.en} / ${c.text.zh}`)
    lines.push('')
    lines.push('**✅ 正確配對**')
    lines.push('')
    for (const [pid, cid] of Object.entries(q.correctAnswer)) {
      const p = prompts.find((x) => x.id === pid)
      const c = choices.find((x) => x.id === cid)
      lines.push(`- ${pid} → ${cid}: ${p.text.en} → ${c.text.en}（${p.text.zh} → ${c.text.zh}）`)
    }
  } else if (q.questionType === 'dropdown') {
    lines.push('**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**')
    lines.push('')
    lines.push(`- EN: ${q.stem.en}`)
    lines.push(`- 中: ${q.stem.zh}`)
    lines.push('')
    for (const b of q.blanks) {
      lines.push(`**${b.id}**`)
      lines.push('')
      for (const opt of b.options) {
        const mark = opt.id === q.correctAnswer[b.id] ? ' ✅ **正解**' : ''
        lines.push(`- (${opt.id}) ${opt.text.en} / ${opt.text.zh}${mark}`)
      }
      lines.push('')
    }
  }
  return lines
}

function renderQuestion(q, num) {
  const lines = []
  lines.push(`### Q${num}. \`${q.id}\` — ${TYPE_LABELS[q.questionType] || q.questionType}`)
  lines.push('')
  // 獨立一行、明顯標示題目 ID,討論/回報問題時直接引用這組 ID 就好,不用數第幾題
  lines.push(`**題目 ID**: \`${q.id}\``)
  lines.push('')
  lines.push(
    `難度: \`${q.difficulty}\` ｜ 建議作答時間分類: \`${q.timeCategory}\` ｜ 版本標籤: \`${q.edition}\` ｜ 原始 performanceDomain: \`${q.performanceDomain}\` ｜ ECO domain: \`${q.domain}\``,
  )
  lines.push('')
  if (q.questionType !== 'dropdown') {
    lines.push('**題幹**')
    lines.push('')
    lines.push(`- EN: ${q.stem.en}`)
    lines.push(`- 中: ${q.stem.zh}`)
    lines.push('')
  }
  lines.push(...renderOptionsBlock(q))
  lines.push('')
  lines.push(`**詳解**`)
  lines.push('')
  lines.push(q.explanation)
  lines.push('')
  lines.push('---')
  lines.push('')
  return lines.join('\n')
}

fs.mkdirSync(OUT_DIR, { recursive: true })

const byDomain = Object.fromEntries(PERFORMANCE_DOMAINS_PMBOK8.map((d) => [d, []]))
for (const q of sampleQuestions) {
  const domain = resolve8thDomain(q)
  if (!byDomain[domain]) byDomain[domain] = []
  byDomain[domain].push(q)
}

let totalWritten = 0
for (const domain of PERFORMANCE_DOMAINS_PMBOK8) {
  const questions = byDomain[domain] || []
  const lines = [`# ${domain} — PMP 題庫`, '']
  if (questions.length === 0) {
    lines.push('> 目前這個章節還沒有題目。')
    lines.push('')
  } else {
    lines.push(`> 共 ${questions.length} 題。ECO 領域配分僅供出題參考,實際考試不分版本混合抽題。`)
    lines.push('')
    questions.forEach((q, i) => lines.push(renderQuestion(q, i + 1)))
  }
  const filePath = path.join(OUT_DIR, `${domain}.md`)
  fs.writeFileSync(filePath, lines.join('\n'))
  totalWritten += questions.length
  console.log(`寫入 ${filePath}(${questions.length} 題)`)
}

console.log(`\n完成,共 ${totalWritten} / ${sampleQuestions.length} 題已分類匯出。`)
