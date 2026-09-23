import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionRenderer from '../components/questions/QuestionRenderer.jsx'
import Timer from '../components/exam/Timer.jsx'
import NavigationPanel from '../components/exam/NavigationPanel.jsx'
import BreakScreen from '../components/exam/BreakScreen.jsx'
import QuestionCountdown from '../components/exam/QuestionCountdown.jsx'
import { ConfirmDialog, PromptDialog } from '../components/common/Dialogs.jsx'
import { isQuestionLocked, scoreExam, shouldBreakAfter, tickQuestionTiming } from '../engine/examEngine.js'
import {
  addIssueReport,
  clearProgress,
  isQuestionReported,
  loadProgress,
  removeIssueReport,
  saveProgress,
  saveResultToHistory,
} from '../engine/storage.js'
import { getTimeRecommendation } from '../schema/questionSchema.js'
import { DEFAULT_LANG, pickText } from '../utils/i18n.js'

/**
 * 情境題組(case study)共用背景敘述面板。同一組的 5-6 道子題會連續出現,這裡用 <details>
 * 讓使用者每題都能重新展開/收合閱讀情境,不需要額外的 state 記住「這題有沒有展開過」。
 * 標題順便顯示「這組第 X/Y 題」,幫助使用者知道自己在案例題組裡的進度。
 */
function CaseContextPanel({ question, allQuestions, lang }) {
  const siblings = allQuestions.filter((q) => q.caseId === question.caseId)
  const indexInCase = siblings.findIndex((q) => q.id === question.id)
  return (
    <details open className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 open:pb-5">
      <summary className="cursor-pointer text-sm font-semibold text-indigo-800">
        📋 案例情境(這組第 {indexInCase + 1} / {siblings.length} 題,可收合)
      </summary>
      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-indigo-900">
        {pickText(question.caseContext, lang)}
      </p>
    </details>
  )
}

export default function ExamPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [session, setSession] = useState(() => location.state?.newSession || loadProgress())
  // 考試語言:PMP 正式考試以英文為主,可切換一個輔助語言(此處為繁中);每題預設回到英文
  const [lang, setLang] = useState(DEFAULT_LANG)
  // 這題是否已被標註「內容可能有問題」——換題時要重新從 localStorage 讀,不是使用者偏好不能延續
  const [reported, setReported] = useState(false)
  // 原生 window.confirm()/prompt() 在部分瀏覽器/預覽環境下不會跳出(交卷點了沒反應就是這個原因),
  // 改用畫面內的彈窗元件,行為才可控
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)
  const [showReportPrompt, setShowReportPrompt] = useState(false)

  // location.state.newSession 只應在「開始新考試」那一次生效。瀏覽器記憶體會把 state
  // 留在該筆歷史紀錄上,若不清掉,使用者中途重新整理頁面時會誤觸發重抽一份全新考試、蓋掉現有進度。
  useEffect(() => {
    if (location.state?.newSession) {
      navigate(location.pathname, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 進度持久化
  useEffect(() => {
    if (!session) {
      navigate('/')
      return
    }
    saveProgress(session)
  }, [session, navigate])

  // 每秒計時:一般作答時倒數考試時間,休息時倒數休息時間
  useEffect(() => {
    if (!session || session.status !== 'in_progress') return
    const id = setInterval(() => {
      setSession((prev) => {
        if (!prev || prev.status !== 'in_progress') return prev
        if (prev.onBreak) {
          const nextBreak = prev.breakRemainingSeconds - 1
          if (nextBreak <= 0) return { ...prev, onBreak: false, breakRemainingSeconds: 0 }
          return { ...prev, breakRemainingSeconds: nextBreak }
        }
        const { questionElapsedSeconds, timedOutQuestionIds } = tickQuestionTiming(prev)
        if (prev.remainingSeconds <= 1) {
          return { ...prev, remainingSeconds: 0, status: 'finished', questionElapsedSeconds, timedOutQuestionIds }
        }
        return { ...prev, remainingSeconds: prev.remainingSeconds - 1, questionElapsedSeconds, timedOutQuestionIds }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [session?.id, session?.status])

  // 語言切換會延續到下一題,不會每題重置回英文(使用者可自行再切回英文)

  // 每切換題目,重新從 localStorage 讀這題有沒有被標註過問題
  const currentQuestionId = session?.questions?.[session?.currentIndex]?.id
  useEffect(() => {
    if (currentQuestionId) setReported(isQuestionReported(currentQuestionId))
  }, [currentQuestionId])

  // 交卷後統計並導向結果頁(僅觸發一次)
  useEffect(() => {
    if (session?.status === 'finished') {
      const result = scoreExam(session)
      saveResultToHistory(result)
      clearProgress()
      navigate('/results', { state: { result } })
    }
  }, [session?.status])

  if (!session || session.status !== 'in_progress') return null

  const currentQuestion = session.questions[session.currentIndex]
  const currentAnswer = session.answers[currentQuestion.id]
  const isLastQuestion = session.currentIndex >= session.questions.length - 1
  const timeRecommendation = getTimeRecommendation(currentQuestion.timeCategory)

  function updateSession(updater) {
    setSession((prev) => (prev ? updater(prev) : prev))
  }

  function handleAnswerChange(value) {
    updateSession((prev) => ({
      ...prev,
      answers: { ...prev.answers, [prev.questions[prev.currentIndex].id]: value },
    }))
  }

  function toggleFlag() {
    updateSession((prev) => {
      const qid = prev.questions[prev.currentIndex].id
      const flags = { ...prev.flags }
      if (flags[qid]) delete flags[qid]
      else flags[qid] = true
      return { ...prev, flags }
    })
  }

  function goPrev() {
    updateSession((prev) => {
      const prevIndex = Math.max(0, prev.currentIndex - 1)
      // 區段鎖定(PMI 2026/09/02 新制):上一題如果落在已鎖定的區段內,不能倒退過去
      if (isQuestionLocked(prevIndex + 1, prev)) return prev
      return { ...prev, currentIndex: prevIndex }
    })
  }

  function goNext() {
    updateSession((prev) => {
      const finishedNumber = prev.currentIndex + 1
      const nextIndex = Math.min(prev.questions.length - 1, prev.currentIndex + 1)
      if (nextIndex === prev.currentIndex) return prev
      if (shouldBreakAfter(finishedNumber, prev)) {
        return {
          ...prev,
          currentIndex: nextIndex,
          onBreak: true,
          breaksTaken: [...prev.breaksTaken, finishedNumber],
          breakRemainingSeconds: (prev.spec.breakDurationMinutes || 10) * 60,
        }
      }
      return { ...prev, currentIndex: nextIndex }
    })
  }

  function jumpTo(idx) {
    updateSession((prev) => {
      // 區段鎖定(PMI 2026/09/02 新制):不能跳回已鎖定區段的題目
      if (isQuestionLocked(idx + 1, prev)) return prev
      return { ...prev, currentIndex: idx }
    })
  }

  function endBreak() {
    updateSession((prev) => ({ ...prev, onBreak: false, breakRemainingSeconds: 0 }))
  }

  function toggleReport() {
    if (reported) {
      removeIssueReport(currentQuestion.id)
      setReported(false)
      return
    }
    setShowReportPrompt(true)
  }

  function handleReportSubmit(note) {
    addIssueReport({ questionId: currentQuestion.id, stem: pickText(currentQuestion.stem, 'en'), note })
    setReported(true)
    setShowReportPrompt(false)
  }

  function submitExam() {
    setShowSubmitConfirm(true)
  }

  function confirmSubmitExam() {
    setShowSubmitConfirm(false)
    updateSession((prev) => ({ ...prev, status: 'finished' }))
  }

  const unansweredCount = session ? session.questions.length - Object.keys(session.answers).length : 0

  if (session.onBreak) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-10">
        <BreakScreen remainingBreakSeconds={session.breakRemainingSeconds} onEndBreak={endBreak} />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>
            第 <span className="font-semibold text-gray-900">{session.currentIndex + 1}</span> /{' '}
            {session.questions.length} 題
          </span>
          <QuestionCountdown
            remainingSeconds={timeRecommendation.max - (session.questionElapsedSeconds[currentQuestion.id] || 0)}
            warnThreshold={timeRecommendation.min}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleFlag}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium ${
              session.flags[currentQuestion.id]
                ? 'border-amber-400 bg-amber-50 text-amber-700'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {session.flags[currentQuestion.id] ? '🚩 已標記' : '標記此題'}
          </button>
          <Timer remainingSeconds={session.remainingSeconds} />
        </div>
      </header>

      {currentQuestion.caseId && (
        <CaseContextPanel question={currentQuestion} allQuestions={session.questions} lang={lang} />
      )}

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <QuestionRenderer
          question={currentQuestion}
          answer={currentAnswer}
          onAnswerChange={handleAnswerChange}
          lang={lang}
          onToggleLang={setLang}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          disabled={session.currentIndex === 0 || isQuestionLocked(session.currentIndex, session)}
          title={isQuestionLocked(session.currentIndex, session) ? '上一段已鎖定,無法返回修改答案' : undefined}
          className="rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40"
        >
          上一題
        </button>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={submitExam}
            className="rounded-md border border-red-300 px-4 py-2 font-medium text-red-600 hover:bg-red-50"
          >
            交卷
          </button>
          {!isLastQuestion && (
            <button
              type="button"
              onClick={goNext}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              下一題
            </button>
          )}
        </div>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">題目導覽</h3>
        <NavigationPanel
          questions={session.questions}
          answers={session.answers}
          flags={session.flags}
          currentIndex={session.currentIndex}
          onJump={jumpTo}
          isLocked={(idx) => isQuestionLocked(idx + 1, session)}
          sectionBoundaries={session.spec.breakAfterQuestions}
        />
      </section>

      <button
        type="button"
        onClick={toggleReport}
        title="這題內容可能有問題?點這裡標註,不影響作答與計分"
        className={`fixed bottom-4 left-4 rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors ${
          reported ? 'bg-gray-300 text-gray-600' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
        }`}
      >
        {reported ? '⚠ 已標註問題' : '⚠ 標註問題'}
      </button>

      <ConfirmDialog
        open={showSubmitConfirm}
        title="確定要交卷嗎?"
        message={unansweredCount > 0 ? `還有 ${unansweredCount} 題未作答,確定要交卷嗎?` : undefined}
        confirmLabel="交卷"
        onConfirm={confirmSubmitExam}
        onCancel={() => setShowSubmitConfirm(false)}
      />

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
