import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('App crashed:', error, info)
  }

  handleReset = () => {
    this.setState({ error: null })
    // 跟 main.jsx 的路由選擇邏輯一致:BASE_URL 是絕對路徑(dev/GitHub Pages)才能直接
    // assign 回去;build:local 用 HashRouter,file:// 底下不能 assign('/')(會被當成
    // 不安全的跨來源載入擋下),改成清空 hash 後原地重新整理即可回到首頁。
    if (import.meta.env.BASE_URL.startsWith('/')) {
      window.location.assign(import.meta.env.BASE_URL)
    } else {
      window.location.hash = '/'
      window.location.reload()
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 bg-gray-50 px-4 text-center">
          <h1 className="text-xl font-semibold text-gray-900">發生未預期的錯誤</h1>
          <p className="text-sm text-gray-500">{String(this.state.error?.message || this.state.error)}</p>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            返回首頁
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
