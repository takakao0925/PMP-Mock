function formatSigned(totalSeconds) {
  const sign = totalSeconds < 0 ? '-' : ''
  const abs = Math.abs(totalSeconds)
  const m = Math.floor(abs / 60)
  const s = abs % 60
  return `${sign}${m}:${String(s).padStart(2, '0')}`
}

// 單題建議作答倒數:黑字 → 剩餘 <= warnThreshold(建議秒數下限)轉橘字 → 剩餘 < 0 轉紅字並持續倒數負值(超時)
export default function QuestionCountdown({ remainingSeconds, warnThreshold }) {
  const colorClass =
    remainingSeconds < 0 ? 'text-red-600' : remainingSeconds <= warnThreshold ? 'text-orange-500' : 'text-gray-500'

  return (
    <span className={`font-mono text-sm font-semibold tabular-nums ${colorClass}`}>
      {formatSigned(remainingSeconds)}
    </span>
  )
}
