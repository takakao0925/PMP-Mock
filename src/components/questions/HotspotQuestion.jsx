import { pickText } from '../../utils/i18n.js'

// 骨架階段以百分比座標定位的可點擊區塊模擬熱區,不依賴外部圖片素材。
// 第二階段若有正式圖表素材,可將 background 換成實際圖片並保留座標邏輯。
// 若題目提供 edges(節點間依賴關係),會另外疊一層 SVG 畫出帶箭頭的連線。
function center(opt) {
  return { x: opt.x + opt.width / 2, y: opt.y + opt.height / 2 }
}

export default function HotspotQuestion({ question, answer, onAnswerChange, lang }) {
  const edges = question.edges || []
  const optionsById = Object.fromEntries(question.options.map((opt) => [opt.id, opt]))

  return (
    <div className="space-y-3">
      <div className="relative h-56 w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
        {edges.length > 0 && (
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="hotspot-arrowhead"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="#9CA3AF" />
              </marker>
            </defs>
            {edges.map((edge, i) => {
              const from = optionsById[edge.from]
              const to = optionsById[edge.to]
              if (!from || !to) return null
              const a = center(from)
              const b = center(to)
              return (
                <line
                  key={i}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="#9CA3AF"
                  strokeWidth="0.6"
                  vectorEffect="non-scaling-stroke"
                  markerEnd="url(#hotspot-arrowhead)"
                />
              )
            })}
          </svg>
        )}
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
