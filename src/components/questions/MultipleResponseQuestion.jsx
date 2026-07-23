import { pickText } from '../../utils/i18n.js'

export default function MultipleResponseQuestion({ question, answer, onAnswerChange, lang }) {
  const selectedIds = answer || []

  function toggle(optId) {
    if (selectedIds.includes(optId)) {
      onAnswerChange(selectedIds.filter((id) => id !== optId))
    } else {
      onAnswerChange([...selectedIds, optId])
    }
  }

  return (
    <div className="space-y-3">
      {question.selectCount && (
        <p className="text-sm text-gray-500">
          {lang === 'zh'
            ? `請選擇 ${question.selectCount} 項(已選 ${selectedIds.length} 項)`
            : `Select ${question.selectCount} option(s) (${selectedIds.length} selected)`}
        </p>
      )}
      {question.options.map((opt) => {
        const checked = selectedIds.includes(opt.id)
        return (
          <label
            key={opt.id}
            className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
              checked ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <input type="checkbox" className="mt-1" checked={checked} onChange={() => toggle(opt.id)} />
            <span className="text-gray-800">{pickText(opt.text, lang)}</span>
          </label>
        )
      })}
    </div>
  )
}
