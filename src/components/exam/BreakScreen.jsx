function formatMinSec(totalSeconds) {
  const s = Math.max(0, totalSeconds)
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

export default function BreakScreen({ remainingBreakSeconds, onEndBreak }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-gray-200 bg-white py-20 text-center shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900">休息時間</h2>
      <p className="max-w-md text-gray-500">考試計時已暫停。休息結束後將自動返回考試,你也可以提前結束休息。</p>
      <div className="font-mono text-4xl font-bold tabular-nums text-blue-600">
        {formatMinSec(remainingBreakSeconds)}
      </div>
      <button
        type="button"
        onClick={onEndBreak}
        className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      >
        提前結束休息,回到考試
      </button>
    </div>
  )
}
