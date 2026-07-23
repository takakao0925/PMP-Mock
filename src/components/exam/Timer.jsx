function formatDuration(totalSeconds) {
  const s = Math.max(0, totalSeconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

export default function Timer({ remainingSeconds }) {
  const isLow = remainingSeconds <= 5 * 60
  return (
    <div
      className={`rounded-md px-3 py-1.5 font-mono text-lg font-semibold tabular-nums ${
        isLow ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-800'
      }`}
    >
      {formatDuration(remainingSeconds)}
    </div>
  )
}
