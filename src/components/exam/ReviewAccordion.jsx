import { useState } from 'react'
import { addIssueReport, isQuestionReported, removeIssueReport } from '../../engine/storage.js'
import { PromptDialog } from '../common/Dialogs.jsx'
import AnswerReveal, { bi } from './AnswerReveal.jsx'

const TYPE_LABELS = {
  single_choice: '單選題',
  multiple_response: '多選題',
  matching: '拖拉配對題',
  hotspot: '點擊熱區題',
  dropdown: '下拉選單題',
  case_set: '情境題組',
}

function ReviewAccordionItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const [reported, setReported] = useState(() => isQuestionReported(item.id))
  const [showReportPrompt, setShowReportPrompt] = useState(false)
  const isUnanswered = item.userAnswer === undefined || item.userAnswer === null

  // 題號旁邊的小 icon 只顯示一個,優先序:答錯 > 標記 > 超時
  const headerIcon = !item.isCorrect ? '❌' : item.flagged ? '🚩' : item.timedOut ? '⏰' : null

  function toggleReport() {
    if (reported) {
      removeIssueReport(item.id)
      setReported(false)
      return
    }
    setShowReportPrompt(true)
  }

  function handleReportSubmit(note) {
    addIssueReport({ questionId: item.id, stem: bi(item.stem), note })
    setReported(true)
    setShowReportPrompt(false)
  }

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <div className="flex min-w-0 flex-1 items-center gap-2">
          {headerIcon && <span className="shrink-0 text-sm">{headerIcon}</span>}
          <span className="shrink-0 text-xs text-gray-400">#{index + 1}</span>
          <span className="truncate text-sm text-gray-800">{bi(item.stem)}</span>
        </div>
        <span className="shrink-0 text-xs text-gray-400">{open ? '收合 ▲' : '展開 ▼'}</span>
      </button>

      {open && (
        <div className="space-y-3 pb-4 pl-1 pr-2 text-sm">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-gray-100 px-2 py-1 font-medium text-gray-600">
              {TYPE_LABELS[item.questionType]}
            </span>
            <span className="rounded-full bg-indigo-50 px-2 py-1 font-medium text-indigo-600">{item.domain}</span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{item.performanceDomain}</span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{item.edition}</span>
            {item.timedOut && (
              <span className="rounded-full bg-orange-50 px-2 py-1 font-medium text-orange-600">⏰ 超時</span>
            )}
            {item.flagged && <span className="rounded-full bg-amber-50 px-2 py-1 font-medium text-amber-600">🚩 已標記</span>}
            {!item.isCorrect && <span className="rounded-full bg-red-50 px-2 py-1 font-medium text-red-600">❌ 答錯</span>}
            {isUnanswered && <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">未作答</span>}
            <button
              type="button"
              onClick={toggleReport}
              className={`ml-auto rounded-full px-2 py-1 font-medium ${
                reported ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
              title="回報這題題庫內容本身有問題(不是你答錯,是題目/選項/詳解可能有誤)"
            >
              🔔 {reported ? '已回報題目問題' : '回報題目問題'}
            </button>
          </div>

          <p className="whitespace-pre-line font-medium text-gray-900">{bi(item.stem)}</p>

          <AnswerReveal question={item} userAnswer={item.userAnswer} />
        </div>
      )}

      <PromptDialog
        open={showReportPrompt}
        title="回報題目問題"
        message="這題有什麼問題?(選填,例如:選項有誤、詳解矛盾、翻譯怪怪的)"
        placeholder="選填,可以直接送出"
        onSubmit={handleReportSubmit}
        onCancel={() => setShowReportPrompt(false)}
      />
    </div>
  )
}

export default function ReviewAccordion({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-sm text-gray-400">這次沒有答錯、標記或超時的題目,太厲害了。</p>
  }

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, idx) => (
        <ReviewAccordionItem key={`${item.id}-${idx}`} item={item} index={idx} />
      ))}
    </div>
  )
}
