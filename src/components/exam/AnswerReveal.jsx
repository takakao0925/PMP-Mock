import { pickText } from '../../utils/i18n.js'

// 顯示用:英文為主,若中英文不同則附上中文翻譯
export function bi(localized) {
  if (!localized) return ''
  const en = pickText(localized, 'en')
  const zh = pickText(localized, 'zh')
  return en === zh ? en : `${en}(${zh})`
}

/**
 * single_choice / multiple_response / hotspot:本來就是「一組選項挑正解」的結構,
 * 攤成一列列選項給 OptionRow 渲染 — 紅點只標你實際選到的錯答案,其餘未選到的錯誤選項維持中性灰,不上色。
 */
export function buildOptionRows(question, userAnswer, explanation) {
  switch (question.questionType) {
    case 'single_choice':
    case 'hotspot': {
      const getLabel = question.questionType === 'hotspot' ? (o) => o.label : (o) => o.text
      return question.options.map((opt) => {
        const isCorrect = opt.id === question.correctAnswer
        const isWrongPick = opt.id === userAnswer && !isCorrect
        return {
          key: opt.id,
          label: bi(getLabel(opt)),
          state: isCorrect ? 'correct' : isWrongPick ? 'wrong-pick' : 'neutral',
          explanation: isCorrect ? explanation : null,
        }
      })
    }

    case 'multiple_response': {
      const correctSet = new Set(question.correctAnswer)
      const userSet = new Set(Array.isArray(userAnswer) ? userAnswer : [])
      const rows = question.options.map((opt) => {
        const isCorrect = correctSet.has(opt.id)
        const isWrongPick = userSet.has(opt.id) && !isCorrect
        return { key: opt.id, label: bi(opt.text), state: isCorrect ? 'correct' : isWrongPick ? 'wrong-pick' : 'neutral' }
      })
      const lastCorrect = [...rows].reverse().find((r) => r.state === 'correct')
      if (lastCorrect) lastCorrect.explanation = explanation
      return rows
    }

    default:
      return []
  }
}

/**
 * matching / dropdown:每個 prompt/blank 是各自獨立的子題,不是同一組選項的替代答案。
 * 攤成單一扁平清單會讓一題看起來像有好幾個「正確答案」互相競爭,所以改成每個子題各自一個框,
 * 框內同時放你的錯答案(紅點,若有錯)與正確答案(綠點),詳解統一放在所有子題框之後。
 */
export function buildPairGroups(question, userAnswer) {
  if (question.questionType === 'matching') {
    const { prompts, choices } = question.options
    return prompts.map((p) => {
      const userChoiceId = userAnswer?.[p.id]
      const correctChoiceId = question.correctAnswer[p.id]
      const userChoice = choices.find((c) => c.id === userChoiceId)
      const correctChoice = choices.find((c) => c.id === correctChoiceId)
      return {
        key: p.id,
        promptLabel: bi(p.text),
        isWrong: userChoiceId !== correctChoiceId,
        userLabel: userChoice ? bi(userChoice.text) : '(未配對)',
        correctLabel: bi(correctChoice.text),
      }
    })
  }

  if (question.questionType === 'dropdown') {
    return question.blanks.map((b, i) => {
      const userOptId = userAnswer?.[b.id]
      const correctOptId = question.correctAnswer[b.id]
      const userOpt = b.options.find((o) => o.id === userOptId)
      const correctOpt = b.options.find((o) => o.id === correctOptId)
      return {
        key: b.id,
        promptLabel: `空格 ${i + 1}`,
        isWrong: userOptId !== correctOptId,
        userLabel: userOpt ? bi(userOpt.text) : '(未選)',
        correctLabel: bi(correctOpt.text),
      }
    })
  }

  return []
}

// hotspot 題型的正解/錯答是空間位置(座標),純文字清單看不出原本的圖面配置,
// 這裡重現當初的圖面,並在對應區塊用紅/綠框標示,不然使用者看不懂複習內容在講什麼。
export function HotspotDiagram({ question, userAnswer }) {
  return (
    <div className="relative h-56 w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
      {question.options.map((opt) => {
        const isCorrect = opt.id === question.correctAnswer
        const isWrongPick = opt.id === userAnswer && !isCorrect
        const boxClass = isCorrect
          ? 'border-green-500 bg-green-100 text-green-800 font-semibold'
          : isWrongPick
            ? 'border-red-500 bg-red-100 text-red-800 font-semibold'
            : 'border-gray-300 bg-white text-gray-500'
        return (
          <div
            key={opt.id}
            className={`absolute flex items-center justify-center rounded-md border-2 px-2 text-center text-sm ${boxClass}`}
            style={{ left: `${opt.x}%`, top: `${opt.y}%`, width: `${opt.width}%`, height: `${opt.height}%` }}
          >
            {(isCorrect || isWrongPick) && <span className="mr-1">{isCorrect ? '🟢' : '🔴'}</span>}
            {bi(opt.label)}
          </div>
        )
      })}
    </div>
  )
}

export function Dot({ color }) {
  const styles = color === 'green' ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500'
  return <span className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 ${styles}`} />
}

export function OptionRow({ label, state, explanation, questionId }) {
  const boxClass =
    state === 'correct'
      ? 'border-green-300 bg-green-50'
      : state === 'wrong-pick'
        ? 'border-red-300 bg-red-50'
        : 'border-gray-200'
  const textClass = state === 'correct' ? 'font-semibold text-gray-900' : 'text-gray-700'

  return (
    <div className={`rounded-lg border p-3 ${boxClass}`}>
      <div className="flex items-start gap-2.5">
        {state === 'neutral' ? (
          <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-gray-300 bg-white" />
        ) : (
          <Dot color={state === 'correct' ? 'green' : 'red'} />
        )}
        <span className={textClass}>{label}</span>
      </div>
      {explanation && (
        <div className="mt-2 pl-[26px]">
          <p className="mb-0.5 text-xs font-semibold text-gray-500">
            詳解 <span className="font-mono font-normal text-gray-400">· {questionId}</span>
          </p>
          <p className="text-sm text-gray-600">{explanation}</p>
        </div>
      )}
    </div>
  )
}

export function PairGroup({ promptLabel, userLabel, correctLabel, isWrong }) {
  return (
    <div className="rounded-lg border border-gray-200 p-3">
      <p className="mb-2 text-sm font-medium text-gray-500">{promptLabel}</p>
      {isWrong && (
        <div className="mb-1.5 flex items-start gap-2.5">
          <Dot color="red" />
          <span className="text-gray-700">{userLabel}</span>
        </div>
      )}
      <div className="flex items-start gap-2.5">
        <Dot color="green" />
        <span className="font-semibold text-gray-900">{correctLabel}</span>
      </div>
    </div>
  )
}

export function ExplanationBox({ text, questionId }) {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
      <p className="mb-1 text-xs font-semibold text-blue-700">
        詳解 <span className="font-mono font-normal text-blue-400">· {questionId}</span>
      </p>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

/**
 * 交卷/送出答案後的「正解揭曉」畫面 — 題目複習(ReviewAccordion)與稽核複審(AuditReviewPage)共用。
 * 只負責畫出選項紅綠標示 + 詳解,不含標記/計分/回報等跟考試流程綁定的東西。
 */
export default function AnswerReveal({ question, userAnswer }) {
  const isPairType = question.questionType === 'matching' || question.questionType === 'dropdown'
  const optionRows = isPairType ? [] : buildOptionRows(question, userAnswer, question.explanation)
  const pairGroups = isPairType ? buildPairGroups(question, userAnswer) : []

  return (
    <div className="space-y-2">
      {question.questionType === 'hotspot' && <HotspotDiagram question={question} userAnswer={userAnswer} />}
      {optionRows.map((row) => (
        <OptionRow key={row.key} label={row.label} state={row.state} explanation={row.explanation} questionId={question.id} />
      ))}
      {pairGroups.map(({ key, ...g }) => (
        <PairGroup key={key} {...g} />
      ))}
      {isPairType && <ExplanationBox text={question.explanation} questionId={question.id} />}
    </div>
  )
}
