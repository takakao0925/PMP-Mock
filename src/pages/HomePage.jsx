import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sampleQuestions } from '../data/sampleQuestions.js'
import { flaggedQuestions } from '../data/flaggedQuestions.js'
import { EXAM_SPEC, QUICK_QUIZ_SPEC, createExamSession } from '../engine/examEngine.js'
import { bi } from '../components/exam/AnswerReveal.jsx'
import {
  clearHistory,
  clearIssueReports,
  clearProgress,
  exportHistoryFile,
  exportIssueReportsFile,
  importHistoryFromJson,
  loadAuditDecisions,
  loadHistory,
  loadIssueReports,
  loadProgress,
} from '../engine/storage.js'

const DOMAIN_LABELS = {
  People: 'People',
  Process: 'Process',
  BusinessEnvironment: 'Business Environment',
}

const MODE_LABELS = {
  standard: '標準模式',
  quick: '小考模式',
}

export default function HomePage() {
  const navigate = useNavigate()
  const [breakInput, setBreakInput] = useState(EXAM_SPEC.breakAfterQuestions.join(', '))
  const [breakDuration, setBreakDuration] = useState(10)
  // 用 state 保存,捨棄進度/清除歷史時直接更新畫面,不用整頁重新整理(避免重整過程中的閃爍或殘留問題)
  const [progress, setProgress] = useState(() => loadProgress())
  const [history, setHistory] = useState(() => loadHistory())
  const [issueReports, setIssueReports] = useState(() => loadIssueReports())
  const [importMessage, setImportMessage] = useState(null)
  const [historyTab, setHistoryTab] = useState('standard')
  const [auditDecisions, setAuditDecisions] = useState(() => loadAuditDecisions())
  const fileInputRef = useRef(null)

  // 已經決定過(加入題庫/刪除)的題目不再顯示於待審核清單;「維持標記」不記錄決定,下次還會出現
  const pendingFlaggedQuestions = useMemo(() => {
    const decidedIds = new Set(auditDecisions.map((d) => d.questionId))
    return flaggedQuestions.filter((q) => !decidedIds.has(q.id))
  }, [auditDecisions])

  // 舊資料(這個功能上線前的歷史紀錄)沒有 mode 欄位,一律視為標準模式
  const historyByMode = useMemo(() => {
    const standard = []
    const quick = []
    for (const r of history) {
      if (r.mode === 'quick') quick.push(r)
      else standard.push(r)
    }
    return { standard, quick }
  }, [history])
  const visibleHistory = historyByMode[historyTab]

  function parseBreakpoints() {
    return breakInput
      .split(',')
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => Number.isInteger(n) && n > 0)
  }

  function startStandardExam() {
    const spec = {
      ...EXAM_SPEC,
      breakAfterQuestions: parseBreakpoints(),
      breakDurationMinutes: breakDuration,
    }
    const session = createExamSession(sampleQuestions, spec)
    navigate('/exam', { state: { newSession: session } })
  }

  function startQuickQuiz() {
    const session = createExamSession(sampleQuestions, QUICK_QUIZ_SPEC)
    navigate('/exam', { state: { newSession: session } })
  }

  function continueExam() {
    navigate('/exam')
  }

  function discardProgress() {
    clearProgress()
    setProgress(null)
  }

  function handleImportFile(e) {
    const file = e.target.files?.[0]
    e.target.value = '' // 允許重複選同一個檔案再匯入一次
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const { addedCount, totalCount } = importHistoryFromJson(reader.result)
        setHistory(loadHistory())
        setImportMessage(
          addedCount > 0 ? `已匯入 ${addedCount} 筆新紀錄(目前共 ${totalCount} 筆)。` : '這個檔案裡的紀錄都已經在歷史裡了。',
        )
      } catch (err) {
        setImportMessage(`匯入失敗:${err.message}`)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">PMP 模擬考系統</h1>
        <p className="text-gray-500">
          純前端本機運作,題庫混合抽自 PMBOK 7th / 8th 標籤題目,不分版本、僅依 ECO domain 配分出題。
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-gray-900">標準模式(對應 8th 版新制正式考試)</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-gray-400">題數</dt>
              <dd className="font-medium text-gray-800">{EXAM_SPEC.totalQuestions} 題</dd>
            </div>
            <div>
              <dt className="text-gray-400">時間</dt>
              <dd className="font-medium text-gray-800">{EXAM_SPEC.durationMinutes} 分鐘</dd>
            </div>
            {Object.entries(EXAM_SPEC.domainWeights).map(([domain, weight]) => (
              <div key={domain}>
                <dt className="text-gray-400">{DOMAIN_LABELS[domain]}</dt>
                <dd className="font-medium text-gray-800">{Math.round(weight * 100)}%</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-700">
            目前題庫僅有 {sampleQuestions.length} 題(實際出題數會依現有題庫自動調整,不會重複出題)。
          </p>
          <button
            type="button"
            onClick={startStandardExam}
            className="mt-4 w-full rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            開始標準模式考試
          </button>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-gray-900">小考模式(快速練習)</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-gray-400">題數</dt>
              <dd className="font-medium text-gray-800">{QUICK_QUIZ_SPEC.totalQuestions} 題</dd>
            </div>
            <div>
              <dt className="text-gray-400">時間</dt>
              <dd className="font-medium text-gray-800">{QUICK_QUIZ_SPEC.durationMinutes} 分鐘</dd>
            </div>
            {Object.entries(QUICK_QUIZ_SPEC.domainWeights).map(([domain, weight]) => (
              <div key={domain}>
                <dt className="text-gray-400">{DOMAIN_LABELS[domain]}</dt>
                <dd className="font-medium text-gray-800">{Math.round(weight * 100)}%</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-md bg-blue-50 px-3 py-2 text-xs text-blue-700">
            介面、題型、計分方式跟標準模式完全一樣,只是題數少、免中途休息,適合零碎時間快速練習。
          </p>
          <button
            type="button"
            onClick={startQuickQuiz}
            className="mt-4 w-full rounded-md bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700"
          >
            開始小考({QUICK_QUIZ_SPEC.totalQuestions} 題)
          </button>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">中途休息設定(僅適用於標準模式)</h2>
        <div className="flex flex-wrap items-end gap-4">
          <label className="flex flex-col gap-1 text-sm text-gray-600">
            強制休息題號(逗號分隔)
            <input
              type="text"
              value={breakInput}
              onChange={(e) => setBreakInput(e.target.value)}
              className="w-56 rounded-md border border-gray-300 px-3 py-1.5"
              placeholder="例如 62, 124"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-gray-600">
            休息時長(分鐘)
            <input
              type="number"
              min="1"
              value={breakDuration}
              onChange={(e) => setBreakDuration(parseInt(e.target.value, 10) || 1)}
              className="w-28 rounded-md border border-gray-300 px-3 py-1.5"
            />
          </label>
        </div>
      </section>

      {progress && (
        <section className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={continueExam}
            className="rounded-md border border-blue-600 px-5 py-2.5 font-medium text-blue-600 hover:bg-blue-50"
          >
            繼續上次考試({MODE_LABELS[progress.spec?.mode || 'standard']}・第 {progress.currentIndex + 1} 題)
          </button>
          <button
            type="button"
            onClick={discardProgress}
            className="rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-500 hover:bg-gray-50"
          >
            捨棄上次進度
          </button>
        </section>
      )}

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">歷史成績</h2>
          <div className="flex items-center gap-3 text-xs">
            <button type="button" onClick={exportHistoryFile} disabled={history.length === 0} className="text-gray-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40">
              匯出備份
            </button>
            <button type="button" onClick={() => fileInputRef.current?.click()} className="text-gray-500 hover:text-blue-600">
              匯入備份
            </button>
            <input ref={fileInputRef} type="file" accept="application/json" onChange={handleImportFile} className="hidden" />
            {history.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  clearHistory()
                  setHistory([])
                }}
                className="text-gray-400 hover:text-red-500"
              >
                清除全部歷史紀錄
              </button>
            )}
          </div>
        </div>
        <p className="mb-3 text-xs text-gray-400">
          成績存在瀏覽器本機(localStorage),換瀏覽器、清除瀏覽資料、或本機開發 port 跑掉都會讀不到——記得定期「匯出備份」保存 JSON 檔,需要時用「匯入備份」還原。
        </p>
        {importMessage && <p className="mb-3 text-xs text-blue-600">{importMessage}</p>}

        <div className="mb-3 flex gap-1 border-b border-gray-200">
          {['standard', 'quick'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setHistoryTab(tab)}
              className={`px-3 py-1.5 text-sm font-medium ${
                historyTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {MODE_LABELS[tab]}({historyByMode[tab].length})
            </button>
          ))}
        </div>

        {visibleHistory.length === 0 ? (
          <p className="text-sm text-gray-400">這個分類還沒有歷史成績。</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {visibleHistory.map((r) => (
              <li key={r.examId} className="flex items-center justify-between py-2 text-sm">
                <span className="text-gray-500">{new Date(r.finishedAt).toLocaleString()}</span>
                <span className="font-medium text-gray-800">
                  {r.correctCount}/{r.totalQuestions}({r.scorePercent}%)
                </span>
                <button
                  type="button"
                  onClick={() => navigate('/results', { state: { result: r } })}
                  className="text-blue-600 hover:underline"
                >
                  查看詳情
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          📋 稽核標記的爭議題目 {pendingFlaggedQuestions.length > 0 && `(${pendingFlaggedQuestions.length})`}
        </h2>
        <p className="mb-3 text-xs text-gray-400">
          稽核人員把內容依據不確定的題目放進 quiz/Quiz-w-Issue.md;點開下面的題目可以像正式作答一樣看題、送出答案看正解,
          再決定「加入題庫」「維持標記」或「刪除」。
        </p>
        {pendingFlaggedQuestions.length === 0 ? (
          <p className="text-sm text-gray-400">目前沒有待審核的爭議題目。</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {pendingFlaggedQuestions.map((q) => (
              <li key={q.id} className="flex items-center justify-between gap-3 py-2 text-sm">
                <div className="min-w-0 flex-1">
                  <span className="mr-2 rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-500">{q.id}</span>
                  <span className="text-gray-700">{bi(q.stem)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/audit/${q.id}`)}
                  className="shrink-0 text-blue-600 hover:underline"
                >
                  查看
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">題目問題回報</h2>
          <div className="flex items-center gap-3 text-xs">
            <button
              type="button"
              onClick={exportIssueReportsFile}
              disabled={issueReports.length === 0}
              className="text-gray-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              匯出 Report-Issue.md
            </button>
            {issueReports.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  clearIssueReports()
                  setIssueReports([])
                }}
                className="text-gray-400 hover:text-red-500"
              >
                清除回報紀錄
              </button>
            )}
          </div>
        </div>
        <p className="mb-3 text-xs text-gray-400">
          在考試結果的題目複習裡點「🔔 回報題目問題」會先存在這裡;匯出後把 Report-Issue.md 存到
          quiz/ 資料夾即可交給我處理。
        </p>
        {issueReports.length === 0 ? (
          <p className="text-sm text-gray-400">尚無回報紀錄。</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {issueReports.map((r) => (
              <li key={r.questionId} className="py-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{r.questionId}</span>
                  <span className="text-xs text-gray-400">{new Date(r.reportedAt).toLocaleString()}</span>
                </div>
                <p className="mt-0.5 text-gray-500">{r.stem}</p>
                {r.note && <p className="mt-0.5 text-amber-700">備註:{r.note}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
