import SingleChoiceQuestion from './SingleChoiceQuestion.jsx'
import MultipleResponseQuestion from './MultipleResponseQuestion.jsx'
import MatchingQuestion from './MatchingQuestion.jsx'
import HotspotQuestion from './HotspotQuestion.jsx'
import DropdownQuestion from './DropdownQuestion.jsx'
import { pickText } from '../../utils/i18n.js'

const RENDERERS = {
  single_choice: SingleChoiceQuestion,
  multiple_response: MultipleResponseQuestion,
  matching: MatchingQuestion,
  hotspot: HotspotQuestion,
  dropdown: DropdownQuestion,
}

const TYPE_LABELS = {
  single_choice: '單選題',
  multiple_response: '多選題',
  matching: '拖拉配對題',
  hotspot: '點擊熱區題',
  dropdown: '下拉選單題',
  case_set: '情境題組',
}

const DOMAIN_LABELS = {
  People: 'People',
  Process: 'Process',
  BusinessEnvironment: 'Business Environment',
}

export default function QuestionRenderer({ question, answer, onAnswerChange, lang, onToggleLang }) {
  const Renderer = RENDERERS[question.questionType]

  if (!Renderer) {
    return (
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-800">
        尚未支援的題型: {question.questionType}
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-gray-100 px-2 py-1 font-medium text-gray-600">
            {TYPE_LABELS[question.questionType]}
          </span>
          <span className="rounded-full bg-indigo-50 px-2 py-1 font-medium text-indigo-600">
            {DOMAIN_LABELS[question.domain]}
          </span>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{question.performanceDomain}</span>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{question.edition}</span>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{question.difficulty}</span>
        </div>
        <div className="flex overflow-hidden rounded-md border border-gray-300 text-xs font-medium">
          <button
            type="button"
            onClick={() => onToggleLang?.('en')}
            className={`px-2.5 py-1 ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => onToggleLang?.('zh')}
            className={`px-2.5 py-1 ${lang === 'zh' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            繁體中文
          </button>
        </div>
      </div>
      <p className="whitespace-pre-line text-lg font-medium text-gray-900">
        {question.questionType === 'dropdown' ? null : pickText(question.stem, lang)}
      </p>
      <Renderer question={question} answer={answer} onAnswerChange={onAnswerChange} lang={lang} />
    </div>
  )
}
