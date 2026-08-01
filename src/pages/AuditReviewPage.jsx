import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { flaggedQuestions } from '../data/flaggedQuestions.js'
import QuestionRenderer from '../components/questions/QuestionRenderer.jsx'
import AnswerReveal from '../components/exam/AnswerReveal.jsx'
import { ConfirmDialog } from '../components/common/Dialogs.jsx'
import { isAnswerCorrect } from '../engine/examEngine.js'
import { saveAuditDecision } from '../engine/storage.js'
import { DEFAULT_LANG } from '../utils/i18n.js'

export default function AuditReviewPage() {
  const { questionId } = useParams()
  const navigate = useNavigate()
  const question = flaggedQuestions.find((q) => q.id === questionId)

  const [answer, setAnswer] = useState(undefined)
  const [submitted, setSubmitted] = useState(false)
  const [lang, setLang] = useState(DEFAULT_LANG)
  // 三個決定都要先跳確認彈窗才會真的離開頁面,避免看答案時不小心點到就被帶回首頁
  const [pendingDecision, setPendingDecision] = useState(null) // 'add' | 'keep' | 'delete' | null

  if (!question) {
    return (
      <div className="mx-auto max-w-2xl space-y-4 px-4 py-10">
        <p className="text-gray-500">找不到這題(可能已經處理過了)。</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          返回首頁
        </button>
      </div>
    )
  }

  const isCorrect = submitted ? isAnswerCorrect(question, answer) : null

  function confirmPendingDecision() {
    if (pendingDecision === 'add') saveAuditDecision({ questionId: question.id, decision: 'add', question })
    if (pendingDecision === 'delete') saveAuditDecision({ questionId: question.id, decision: 'delete', question })
    // 'keep' 不記錄任何東西,單純離開頁面
    navigate('/')
  }

  const DECISION_CONFIG = {
    add: { title: '確定要加入題庫嗎?', message: '代表這題沒有爭議,稍後我會把它搬回對應的 quiz/<Domain>.md。', confirmLabel: '確定加入' },
    keep: { title: '確定要維持標記嗎?', message: '這題會繼續留在待審核清單,之後你還可以再回來處理。', confirmLabel: '確定維持標記' },
    delete: { title: '確定要刪除這題嗎?', message: `題目 ID: ${question.id}\n刪掉後不會復原。`, confirmLabel: '確定刪除', danger: true },
  }
  const activeDialog = pendingDecision ? DECISION_CONFIG[pendingDecision] : null

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">稽核複審</h1>
        <span className="rounded-md bg-gray-100 px-2 py-1 font-mono text-xs text-gray-500">題目 ID: {question.id}</span>
      </header>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <QuestionRenderer question={question} answer={answer} onAnswerChange={submitted ? () => {} : setAnswer} lang={lang} onToggleLang={setLang} />
      </div>

      {!submitted ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            提交答案
          </button>
        </div>
      ) : (
        <>
          <div
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {isCorrect ? '✅ 你答對了' : '❌ 你答錯了(或未作答)'} — 正確答案與詳解如下
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <AnswerReveal question={question} userAnswer={answer} />
          </div>

          {question.auditNote && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="mb-1 text-xs font-semibold text-amber-700">🔍 為什麼這題被標記為爭議題目</p>
              <p className="text-sm text-amber-800">{question.auditNote}</p>
            </div>
          )}

          <div className="flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={() => setPendingDecision('add')}
              className="rounded-md bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
            >
              加入題庫
            </button>
            <button
              type="button"
              onClick={() => setPendingDecision('keep')}
              className="rounded-md border border-amber-400 bg-amber-50 px-4 py-2 font-medium text-amber-700 hover:bg-amber-100"
            >
              維持標記
            </button>
            <button
              type="button"
              onClick={() => setPendingDecision('delete')}
              className="rounded-md border border-red-300 px-4 py-2 font-medium text-red-600 hover:bg-red-50"
            >
              刪除
            </button>
          </div>
        </>
      )}

      <ConfirmDialog
        open={!!activeDialog}
        title={activeDialog?.title}
        message={activeDialog?.message}
        confirmLabel={activeDialog?.confirmLabel}
        danger={activeDialog?.danger}
        onConfirm={confirmPendingDecision}
        onCancel={() => setPendingDecision(null)}
      />
    </div>
  )
}
