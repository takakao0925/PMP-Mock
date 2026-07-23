import { useState } from 'react'
import { pickText } from '../../utils/i18n.js'
import { addIssueReport, isQuestionReported, removeIssueReport } from '../../engine/storage.js'

const TYPE_LABELS = {
  single_choice: '單選題',
  multiple_response: '多選題',
  matching: '拖拉配對題',
  hotspot: '點擊熱區題',
  dropdown: '下拉選單題',
  case_set: '情境題組',
}

// 顯示用:英文為主,若中英文不同則附上中文翻譯
function bi(localized) {
  if (!localized) return ''
  const en = pickText(localized, 'en')
  const zh = pickText(localized, 'zh')
  return en === zh ? en : `${en}(${zh})`
}

/**
 * single_choice / multiple_response / hotspot:本來就是「一組選項挑正解」的結構,
 * 攤成一列列選項給 OptionRow 渲染 — 紅點只標你實際選到的錯答案,其餘未選到的錯誤選項維持中性灰,不上色。
 */
function buildOptionRows(question, userAnswer, explanation) {
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
function buildPairGroups(question, userAnswer) {
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
function HotspotDiagram({ question, userAnswer }) {
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

function Dot({ color }) {
  const styles = color === 'green' ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500'
  return <span className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 ${styles}`} />
}

function OptionRow({ label, state, explanation }) {
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
      {explanation && <p className="mt-2 pl-[26px] text-sm text-gray-600">{explanation}</p>}
    </div>
  )
}

function PairGroup({ promptLabel, userLabel, correctLabel, isWrong }) {
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

function ExplanationBox({ text }) {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
      <p className="mb-1 text-xs font-semibold text-blue-700">詳解</p>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

function ReviewAccordionItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const [reported, setReported] = useState(() => isQuestionReported(item.id))
  const isUnanswered = item.userAnswer === undefined || item.userAnswer === null
  const isPairType = item.questionType === 'matching' || item.questionType === 'dropdown'
  const optionRows = isPairType ? [] : buildOptionRows(item, item.userAnswer, item.explanation)
  const pairGroups = isPairType ? buildPairGroups(item, item.userAnswer) : []

  // 題號旁邊的小 icon 只顯示一個,優先序:答錯 > 標記 > 超時
  const headerIcon = !item.isCorrect ? '❌' : item.flagged ? '🚩' : item.timedOut ? '⏰' : null

  function toggleReport() {
    if (reported) {
      removeIssueReport(item.id)
      setReported(false)
      return
    }
    const note = window.prompt('這題有什麼問題?(選填,例如:選項有誤、詳解矛盾、翻譯怪怪的)')
    if (note === null) return // 使用者取消
    addIssueReport({ questionId: item.id, stem: bi(item.stem), note })
    setReported(true)
  }

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <div className="flex min-w-0 flex-1 items-center gap-2">
          {headerIcon && <span className="shrink-0 text-sm">{headerIcon}</span>}
          <span className="shrink-0 text-xs text-gray-400">#{index + 1}</span>
          <span className="truncate text-sm text-gray-800">{bi(item.stem)}</span>
        </div>
        <span className="shrink-0 text-xs text-gray-400">{open ? '收合 ▲' : '展開 ▼'}</span>
      </button>

      {open && (
        <div className="space-y-3 pb-4 pl-1 pr-2 text-sm">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-gray-100 px-2 py-1 font-medium text-gray-600">
              {TYPE_LABELS[item.questionType]}
            </span>
            <span className="rounded-full bg-indigo-50 px-2 py-1 font-medium text-indigo-600">{item.domain}</span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{item.performanceDomain}</span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">{item.edition}</span>
            {item.timedOut && (
              <span className="rounded-full bg-orange-50 px-2 py-1 font-medium text-orange-600">⏰ 超時</span>
            )}
            {item.flagged && <span className="rounded-full bg-amber-50 px-2 py-1 font-medium text-amber-600">🚩 已標記</span>}
            {!item.isCorrect && <span className="rounded-full bg-red-50 px-2 py-1 font-medium text-red-600">❌ 答錯</span>}
            {isUnanswered && <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-500">未作答</span>}
            <button
              type="button"
              onClick={toggleReport}
              className={`ml-auto rounded-full px-2 py-1 font-medium ${
                reported ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
              title="回報這題題庫內容本身有問題(不是你答錯,是題目/選項/詳解可能有誤)"
            >
              🔔 {reported ? '已回報題目問題' : '回報題目問題'}
            </button>
          </div>

          <p className="whitespace-pre-line font-medium text-gray-900">{bi(item.stem)}</p>

          {item.questionType === 'hotspot' && <HotspotDiagram question={item} userAnswer={item.userAnswer} />}

          <div className="space-y-2">
            {optionRows.map((row) => (
              <OptionRow key={row.key} label={row.label} state={row.state} explanation={row.explanation} />
            ))}
            {pairGroups.map(({ key, ...g }) => (
              <PairGroup key={key} {...g} />
            ))}
            {isPairType && <ExplanationBox text={item.explanation} />}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ReviewAccordion({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-sm text-gray-400">這次沒有答錯、標記或超時的題目,太厲害了。</p>
  }

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, idx) => (
        <ReviewAccordionItem key={`${item.id}-${idx}`} item={item} index={idx} />
      ))}
    </div>
  )
}
