import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// build:local(雙擊打開的單一 HTML 檔)用 file:// 協定載入,BrowserRouter 依賴的 History API
// 在 file:// 底下完全不能用:window.location.pathname 會變成整個磁碟路徑(如
// "/C:/Users/.../index.html"),導致 react-router 找不到匹配的路由;pushState/replaceState
// 操作 file:// URL 又會被瀏覽器當成「不安全的跨來源載入」直接擋下。因此 BASE_URL 不是
// 絕對路徑(即 build:local 的 './')時一律改用 HashRouter(用網址 # 後面的片段做路由,
// 不觸碰實際檔案路徑),dev/GitHub Pages(BASE_URL 是 '/' 開頭的絕對路徑)才用 BrowserRouter。
const isAbsoluteBase = import.meta.env.BASE_URL.startsWith('/')
const Router = isAbsoluteBase ? BrowserRouter : HashRouter
const routerProps = isAbsoluteBase ? { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' } : {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Router {...routerProps}>
        <App />
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
