// 把 quiz/*.md(Report-Issue.md、Quiz-w-Issue.md 除外)解析回 src/data/sampleQuestions.js。
// 這是 export-quiz-md.mjs 的反向腳本 —— 採用 md 編輯流程後,quiz/*.md 才是題庫的可編輯來源,
// sampleQuestions.js 變成「產生出來的檔案」,執行這支腳本後會被整份覆蓋重寫。
//
// 用法: npm run import:quiz
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PERFORMANCE_DOMAINS_PMBOK8 } from '../src/schema/questionSchema.js'
import { jsValue, parseQuizMdContent } from './lib/quiz-md-parser.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const QUIZ_DIR = path.join(__dirname, '..', 'quiz')
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'sampleQuestions.js')

// ---------- 主流程 ----------

const allQuestions = []
const errors = []

for (const domain of PERFORMANCE_DOMAINS_PMBOK8) {
  const filePath = path.join(QUIZ_DIR, `${domain}.md`)
  if (!fs.existsSync(filePath)) continue
  const content = fs.readFileSync(filePath, 'utf-8')
  const { questions, errors: fileErrors } = parseQuizMdContent(content, `${domain}.md`)
  allQuestions.push(...questions)
  errors.push(...fileErrors)
}

// 去重複 id:保留先出現的那筆,後面重複的整筆跳過(不是中止整個匯入)
const seenIds = new Set()
const deduped = []
for (const q of allQuestions) {
  if (seenIds.has(q.id)) {
    errors.push(`重複的題目 id "${q.id}",已跳過後面出現的那筆`)
    continue
  }
  seenIds.add(q.id)
  deduped.push(q)
}

// 格式錯誤或重複 id 的題目會被跳過並列在下面,但不會擋住其他能正常解析的題目寫入 —
// 題庫量大、多人/多次分批編輯時,單一題目格式有誤不該讓整批匯入失敗。
if (errors.length > 0) {
  console.warn(`⚠ 有 ${errors.length} 個問題被跳過(其餘題目正常匯入):\n`)
  for (const e of errors) console.warn(`  - ${e}`)
  console.warn('')
}

const header = `// 此檔案由 \`npm run import:quiz\` 從 quiz/*.md 自動產生,請直接修改 quiz/*.md 後重新匯入,
// 不要手動編輯這個檔案 —— 下次匯入會整份覆蓋。
//
// 考生會看到的文字一律用 { en, zh } 雙語結構(對應正式 PMP 考試「英文為主 + 可切換輔助語言」的介面)。
// explanation(詳解)固定繁中,僅供交卷後複習用,不隨考試語言切換。

export const sampleQuestions = [
`

const body = deduped.map((q) => '  ' + jsValue(q, 1)).join(',\n')
const footer = '\n]\n'

fs.writeFileSync(OUT_FILE, header + body + footer)
console.log(`已將 ${deduped.length} 題從 quiz/*.md 匯入到 ${path.relative(process.cwd(), OUT_FILE)}`)
if (errors.length > 0) {
  console.log(`(另有 ${errors.length} 個問題題目被跳過,詳見上方警告)`)
  process.exit(1)
}
