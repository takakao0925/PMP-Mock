import { useLocation, useNavigate } from 'react-router-dom'
import { deleteHistoryEntry, loadHistory } from '../engine/storage.js'
import ReviewAccordion from '../components/exam/ReviewAccordion.jsx'

const DOMAIN_LABELS = {
  People: 'People',
  Process: 'Process',
  BusinessEnvironment: 'Business Environment',
}

function Bar({ ratio, colorClass }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
      <div className={`h-full rounded-full ${colorClass}`} style={{ width: `${Math.round(ratio * 100)}%` }} />
    </div>
  )
}

export default function ResultsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state?.result || loadHistory()[0]

  if (!result) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center text-gray-500">
        沒有可顯示的成績。
        <div className="mt-4">
          <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
            返回首頁
          </button>
        </div>
      </div>
    )
  }

  const { correctCount, totalQuestions, scorePercent, domainAccuracy, editionDistributionAmongCorrect } = result
  const editionTotal = editionDistributionAmongCorrect.pmbok7 + editionDistributionAmongCorrect.pmbok8

  function handleDelete() {
    if (!window.confirm('確定要刪除這筆歷史紀錄嗎?刪除後無法復原。')) return
    deleteHistoryEntry(result.examId)
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">考試結果</h1>
        <p className="text-sm text-gray-400">完成於 {new Date(result.finishedAt).toLocaleString()}</p>
      </header>

      <section className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm text-gray-400">總分</p>
        <p className="mt-1 text-5xl font-bold text-blue-600">{scorePercent}%</p>
        <p className="mt-2 text-gray-500">
          答對 {correctCount} / {totalQuestions} 題
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">依領域(Domain)正確率</h2>
        <div className="space-y-4">
          {Object.entries(domainAccuracy).map(([domain, stat]) => (
            <div key={domain}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium text-gray-700">{DOMAIN_LABELS[domain]}</span>
                <span className="text-gray-500">
                  {stat.correct}/{stat.total}({Math.round(stat.accuracy * 100)}%)
                </span>
              </div>
              <Bar ratio={stat.accuracy} colorClass="bg-blue-500" />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-semibold text-gray-900">答對題目的版本標籤分布</h2>
        <p className="mb-4 text-xs text-gray-400">僅供參考,不影響評分(混合出題,不分版本)</p>
        {editionTotal === 0 ? (
          <p className="text-sm text-gray-400">本次沒有答對的題目。</p>
        ) : (
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium text-gray-700">PMBOK 7th</span>
                <span className="text-gray-500">{editionDistributionAmongCorrect.pmbok7}</span>
              </div>
              <Bar ratio={editionDistributionAmongCorrect.pmbok7 / editionTotal} colorClass="bg-emerald-500" />
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium text-gray-700">PMBOK 8th</span>
                <span className="text-gray-500">{editionDistributionAmongCorrect.pmbok8}</span>
              </div>
              <Bar ratio={editionDistributionAmongCorrect.pmbok8 / editionTotal} colorClass="bg-violet-500" />
            </div>
          </div>
        )}
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-semibold text-gray-900">答錯、標記與超時題目複習</h2>
        <p className="mb-3 text-xs text-gray-400">點擊展開查看你的答案、正確答案與詳解</p>
        <ReviewAccordion items={result.reviewItems} />
      </section>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          返回首頁
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-md border border-red-300 px-5 py-2.5 font-medium text-red-600 hover:bg-red-50"
        >
          刪除這筆紀錄
        </button>
      </div>
    </div>
  )
}
