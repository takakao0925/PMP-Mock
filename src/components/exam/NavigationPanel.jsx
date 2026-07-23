export default function NavigationPanel({ questions, answers, flags, currentIndex, onJump }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-8 gap-2 sm:grid-cols-10">
        {questions.map((q, idx) => {
          const answered = answers[q.id] !== undefined
          const flagged = !!flags[q.id]
          const isCurrent = idx === currentIndex

          let classes = 'border-gray-300 bg-white text-gray-600'
          if (answered) classes = 'border-green-400 bg-green-50 text-green-700'
          if (flagged) classes = 'border-amber-400 bg-amber-50 text-amber-700'
          if (isCurrent) classes = 'border-blue-600 bg-blue-600 text-white'

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onJump(idx)}
              className={`relative h-9 w-9 rounded-md border text-xs font-medium transition-colors ${classes}`}
              title={`第 ${idx + 1} 題${answered ? '(已作答)' : ''}${flagged ? '(已標記)' : ''}`}
            >
              {idx + 1}
              {flagged && <span className="absolute -right-1 -top-1 text-[10px]">🚩</span>}
            </button>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded border border-green-400 bg-green-50" /> 已作答
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded border border-amber-400 bg-amber-50" /> 已標記
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded border border-gray-300 bg-white" /> 未作答
        </span>
      </div>
    </div>
  )
}
