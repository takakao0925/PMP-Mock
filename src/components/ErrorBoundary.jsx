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
    window.location.assign('/')
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
