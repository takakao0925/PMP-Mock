import { Fragment } from 'react'
import { pickText } from '../../utils/i18n.js'

// stem 內以 {{blankId}} 標記填空位置(兩語言都需標記),對應 question.blanks 中的下拉選單
export default function DropdownQuestion({ question, answer, onAnswerChange, lang }) {
  const current = answer || {}
  const stemText = pickText(question.stem, lang)
  const parts = stemText.split(/(\{\{\w+\}\})/g)

  function setBlank(blankId, optionId) {
    onAnswerChange({ ...current, [blankId]: optionId })
  }

  return (
    <p className="text-lg leading-9 text-gray-900">
      {parts.map((part, idx) => {
        const match = part.match(/^\{\{(\w+)\}\}$/)
        if (!match) return <Fragment key={idx}>{part}</Fragment>

        const blankId = match[1]
        const blank = question.blanks.find((b) => b.id === blankId)
        if (!blank) return <Fragment key={idx}>{part}</Fragment>

        return (
          <select
            key={idx}
            className="mx-1 rounded-md border border-gray-300 bg-white px-2 py-1 text-base align-middle focus:border-blue-500 focus:outline-none"
            value={current[blankId] || ''}
            onChange={(e) => setBlank(blankId, e.target.value)}
          >
            <option value="" disabled>
              {lang === 'zh' ? '請選擇' : 'Select'}
            </option>
            {blank.options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {pickText(opt.text, lang)}
              </option>
            ))}
          </select>
        )
      })}
    </p>
  )
}
