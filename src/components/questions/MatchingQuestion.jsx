import { DndContext, PointerSensor, useDraggable, useDroppable, useSensor, useSensors } from '@dnd-kit/core'
import { pickText } from '../../utils/i18n.js'

function DraggableChoice({ choice, lang, onQuickAssign }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: choice.id })
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onQuickAssign}
      className={`cursor-grab select-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:border-blue-300 ${
        isDragging ? 'z-10 opacity-50' : ''
      }`}
    >
      {pickText(choice.text, lang)}
    </div>
  )
}

function DroppableSlot({ prompt, assignedChoice, lang, onRemove }) {
  const { setNodeRef, isOver } = useDroppable({ id: prompt.id })

  return (
    <div className="flex items-center gap-3">
      <div className="w-44 shrink-0 text-sm font-medium text-gray-700">{pickText(prompt.text, lang)}</div>
      <div
        ref={setNodeRef}
        className={`min-h-11 flex-1 rounded-md border-2 border-dashed p-2 transition-colors ${
          isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
        }`}
      >
        {assignedChoice ? (
          <div className="flex items-center justify-between rounded bg-blue-100 px-3 py-2 text-sm text-blue-900">
            <span>{pickText(assignedChoice.text, lang)}</span>
            <button
              type="button"
              onClick={onRemove}
              className="ml-2 text-blue-500 hover:text-blue-700"
              aria-label="移除配對"
            >
              ✕
            </button>
          </div>
        ) : (
          <span className="text-sm text-gray-400">
            {lang === 'zh' ? '拖曳選項到此處,或點選下方選項自動配對' : 'Drag an option here, or click one below to auto-fill'}
          </span>
        )}
      </div>
    </div>
  )
}

export default function MatchingQuestion({ question, answer, onAnswerChange, lang }) {
  const current = answer || {}
  const { prompts, choices } = question.options
  const assignedChoiceIds = new Set(Object.values(current))
  const bankChoices = choices.filter((c) => !assignedChoiceIds.has(c.id))
  const firstEmptyPromptId = prompts.find((p) => !current[p.id])?.id

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }))

  function assign(promptId, choiceId) {
    const next = { ...current }
    for (const [pid, cid] of Object.entries(next)) {
      if (cid === choiceId) delete next[pid]
    }
    next[promptId] = choiceId
    onAnswerChange(next)
  }

  function handleDragEnd(event) {
    const { active, over } = event
    if (!over) return
    assign(over.id, active.id)
  }

  function quickAssign(choiceId) {
    if (!firstEmptyPromptId) return
    assign(firstEmptyPromptId, choiceId)
  }

  function removeAssignment(promptId) {
    const next = { ...current }
    delete next[promptId]
    onAnswerChange(next)
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="space-y-4">
        <div className="space-y-3">
          {prompts.map((p) => (
            <DroppableSlot
              key={p.id}
              prompt={p}
              lang={lang}
              assignedChoice={choices.find((c) => c.id === current[p.id])}
              onRemove={() => removeAssignment(p.id)}
            />
          ))}
        </div>
        <div>
          <p className="mb-2 text-sm text-gray-500">
            {lang === 'zh'
              ? '選項池(可拖曳到左側對應項目,或直接點選以配對到第一個空位):'
              : 'Option pool (drag to a slot on the left, or click to auto-fill the first empty slot):'}
          </p>
          <div className="flex flex-wrap gap-2">
            {bankChoices.map((c) => (
              <DraggableChoice key={c.id} choice={c} lang={lang} onQuickAssign={() => quickAssign(c.id)} />
            ))}
            {bankChoices.length === 0 && (
              <span className="text-sm text-gray-400">{lang === 'zh' ? '已全部配對完成' : 'All matched'}</span>
            )}
          </div>
        </div>
      </div>
    </DndContext>
  )
}
