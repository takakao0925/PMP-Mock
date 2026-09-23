// PMI 2026/09/02 新制:考試分成多個區段(見 sectionBoundaries,例如 [40, 100] 代表
// 1-40 是 Section 1、41-100 是 Section 2、其餘是最後一段),區段之間用分隔線與標籤標示,
// 已完成的區段題目會被鎖定(isLocked),顯示鎖頭圖示且點不進去。
function buildSectionRanges(totalQuestions, sectionBoundaries) {
  const boundaries = [...(sectionBoundaries || [])].filter((n) => n > 0 && n < totalQuestions)
  const starts = [1, ...boundaries.map((n) => n + 1)]
  return starts.map((start, i) => ({
    section: i + 1,
    start,
    end: i + 1 < starts.length ? boundaries[i] : totalQuestions,
  }))
}

export default function NavigationPanel({ questions, answers, flags, currentIndex, onJump, isLocked, sectionBoundaries }) {
  const ranges = buildSectionRanges(questions.length, sectionBoundaries)
  const hasSections = ranges.length > 1

  return (
    <div className="space-y-4">
      {ranges.map((range) => (
        <div key={range.section} className="space-y-2">
          {hasSections && (
            <p className="text-xs font-semibold text-gray-400">
              Section {range.section}(第 {range.start}~{range.end} 題)
            </p>
          )}
          <div className="grid grid-cols-8 gap-2 sm:grid-cols-10">
            {questions.slice(range.start - 1, range.end).map((q, i) => {
              const idx = range.start - 1 + i
              const answered = answers[q.id] !== undefined
              const flagged = !!flags[q.id]
              const isCurrent = idx === currentIndex
              const locked = isLocked?.(idx)

              let classes = 'border-gray-300 bg-white text-gray-600'
              if (answered) classes = 'border-green-400 bg-green-50 text-green-700'
              if (flagged) classes = 'border-amber-400 bg-amber-50 text-amber-700'
              if (isCurrent) classes = 'border-blue-600 bg-blue-600 text-white'
              if (locked) classes = 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed'

              return (
                <button
                  key={q.id}
                  type="button"
                  disabled={locked}
                  onClick={() => onJump(idx)}
                  className={`relative h-9 w-9 rounded-md border text-xs font-medium transition-colors ${classes}`}
                  title={
                    locked
                      ? `第 ${idx + 1} 題(此區段已鎖定,無法返回修改)`
                      : `第 ${idx + 1} 題${answered ? '(已作答)' : ''}${flagged ? '(已標記)' : ''}`
                  }
                >
                  {locked ? '🔒' : idx + 1}
                  {!locked && flagged && <span className="absolute -right-1 -top-1 text-[10px]">🚩</span>}
                </button>
              )
            })}
          </div>
        </div>
      ))}
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
        {hasSections && (
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded border border-gray-200 bg-gray-100" /> 🔒 已鎖定(上一區段)
          </span>
        )}
      </div>
    </div>
  )
}
