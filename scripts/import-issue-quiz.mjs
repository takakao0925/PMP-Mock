// 把 quiz/Quiz-w-Issue.md(稽核抽離、目前有爭議的題目)解析成 src/data/flaggedQuestions.js,
// 讓「題目問題回報」頁面能直接在網頁裡瀏覽/作答/決定這些題目,而不用打開 md 檔看。
// 跟 import-quiz-md.mjs 共用同一套區塊解析邏輯(scripts/lib/quiz-md-parser.mjs)。
//
// 用法: npm run import:flagged
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { jsValue, parseQuizMdContent } from './lib/quiz-md-parser.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC_FILE = path.join(__dirname, '..', 'quiz', 'Quiz-w-Issue.md')
const OUT_FILE = path.join(__dirname, '..', 'src', 'data', 'flaggedQuestions.js')

let questions = []
let errors = []

if (fs.existsSync(SRC_FILE)) {
  const content = fs.readFileSync(SRC_FILE, 'utf-8')
  ;({ questions, errors } = parseQuizMdContent(content, 'Quiz-w-Issue.md'))
}

if (errors.length > 0) {
  console.warn(`⚠ 有 ${errors.length} 個問題被跳過(其餘題目正常匯入):\n`)
  for (const e of errors) console.warn(`  - ${e}`)
  console.warn('')
}

const header = `// 此檔案由 \`npm run import:flagged\` 從 quiz/Quiz-w-Issue.md 自動產生,請直接修改
// quiz/Quiz-w-Issue.md 後重新匯入,不要手動編輯這個檔案 —— 下次匯入會整份覆蓋。
//
// 這些題目是稽核抽離、目前有爭議(內容依據不確定)的題目,不在正式抽題題庫內
// (sampleQuestions.js 不包含這些題目)。使用者在「題目問題回報」頁可以逐一檢視、
// 決定「加入題庫」「維持標記」「刪除」,決定會記錄在 localStorage,實際套用到
// quiz/*.md 檔案需要另外手動處理。

export const flaggedQuestions = [
`

const body = questions.map((q) => '  ' + jsValue(q, 1)).join(',\n')
const footer = '\n]\n'

fs.writeFileSync(OUT_FILE, header + body + footer)
console.log(`已將 ${questions.length} 題有爭議的題目從 quiz/Quiz-w-Issue.md 匯入到 ${path.relative(process.cwd(), OUT_FILE)}`)
if (errors.length > 0) {
  console.log(`(另有 ${errors.length} 個問題題目被跳過,詳見上方警告)`)
  process.exit(1)
}
