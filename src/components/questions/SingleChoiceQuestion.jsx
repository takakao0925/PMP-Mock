import { pickText } from '../../utils/i18n.js'

export default function SingleChoiceQuestion({ question, answer, onAnswerChange, lang }) {
  return (
    <div className="space-y-3">
      {question.options.map((opt) => {
        const selected = answer === opt.id
        return (
          <label
            key={opt.id}
            className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
              selected
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <input
              type="radio"
              name={question.id}
              className="mt-1"
              checked={selected}
              onChange={() => onAnswerChange(opt.id)}
            />
            <span className="text-gray-800">{pickText(opt.text, lang)}</span>
          </label>
        )
      })}
    </div>
  )
}
