import { pickText } from '../../utils/i18n.js'

// 骨架階段以百分比座標定位的可點擊區塊模擬熱區,不依賴外部圖片素材。
// 第二階段若有正式圖表素材,可將 background 換成實際圖片並保留座標邏輯。
export default function HotspotQuestion({ question, answer, onAnswerChange, lang }) {
  return (
    <div className="space-y-3">
      <div className="relative h-56 w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        {question.options.map((opt) => {
          const selected = answer === opt.id
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onAnswerChange(opt.id)}
              className={`absolute flex items-center justify-center rounded-md border-2 px-2 text-center text-sm font-medium transition-colors ${
                selected
                  ? 'border-blue-600 bg-blue-100 text-blue-800'
                  : 'border-gray-400 bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                left: `${opt.x}%`,
                top: `${opt.y}%`,
                width: `${opt.width}%`,
                height: `${opt.height}%`,
              }}
            >
              {pickText(opt.label, lang)}
            </button>
          )
        })}
      </div>
      <p className="text-sm text-gray-500">
        {lang === 'zh' ? '點選圖上的區塊以作答。' : 'Click a region on the diagram to answer.'}
      </p>
    </div>
  )
}
