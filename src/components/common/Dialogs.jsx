import { useState } from 'react'

/**
 * 取代 window.confirm() —— 部分瀏覽器/預覽環境對原生 confirm() 的支援不穩定
 * (使用者回報「點交卷沒反應」,判斷就是 confirm() 對話框沒能正常跳出來),
 * 改用畫面內的彈窗,行為完全可控。
 */
export function ConfirmDialog({ open, title = '確定嗎?', message, confirmLabel = '確定', cancelLabel = '取消', danger, onConfirm, onCancel }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-5 shadow-xl">
        <h3 className="mb-2 text-base font-semibold text-gray-900">{title}</h3>
        {message && <p className="mb-4 whitespace-pre-line text-sm text-gray-600">{message}</p>}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
              danger ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

/** 取代 window.prompt() —— 同樣原因,原生 prompt() 在部分環境不可靠 */
export function PromptDialog({ open, title = '請輸入', message, placeholder, confirmLabel = '送出', cancelLabel = '取消', onSubmit, onCancel }) {
  const [value, setValue] = useState('')

  if (!open) return null

  function handleSubmit() {
    onSubmit(value)
    setValue('')
  }

  function handleCancel() {
    setValue('')
    onCancel()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-5 shadow-xl">
        <h3 className="mb-2 text-base font-semibold text-gray-900">{title}</h3>
        {message && <p className="mb-3 text-sm text-gray-600">{message}</p>}
        <textarea
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
