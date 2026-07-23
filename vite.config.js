import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => ({
  // GitHub Pages 把這個 repo 部署在 /PMP-Mock/ 這個子路徑下,不是網域根目錄,
  // 打包後的資源路徑(JS/CSS)要對齊,不然會抓錯。只有 `npm run dev` 才維持根目錄
  // (本機開發網址不用跟著變),build 跟 preview 都要用實際部署路徑,
  // 用 npm_lifecycle_event(而不是 vite 的 command)判斷,因為 preview 在 vite
  // 內部跟 dev 共用同一種 command('serve'),用 command 沒辦法分辨兩者。
  base: process.env.npm_lifecycle_event === 'dev' ? '/' : '/PMP-Mock/',
  plugins: [react(), tailwindcss()],
  // 固定 port:localStorage 的進度/成績綁定在「來源(origin)」上,若 port 每次跑都不一樣
  // 就會被視為不同網站、讀不到之前的資料。strictPort 讓 port 被占用時直接報錯,
  // 而不是靜默切換到別的 port 導致資料看起來「消失」。
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
}))
