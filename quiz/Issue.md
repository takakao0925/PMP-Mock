# 暫時抽離的題目 — 課程筆記查無依據

> 這份檔案(現名 `Issue.md`,原名 `Quiz-w-Issue.md`)**不會被 `npm run import:quiz` 讀取**
> (腳本只認 Governance/Scope/Schedule/Finance/Stakeholders/Resources/Risk 這 7 個固定檔名,
> 跟 `Report-Issue.md` 一樣會被自動略過),所以這裡的題目不會出現在正式題庫或考試抽題裡。
> `scripts/import-issue-quiz.mjs`(`npm run import:flagged`)會讀取這份檔案,產生
> `src/data/flaggedQuestions.js` 供稽核複審 UI 使用。
>
> 抽離原因:2026/07/26 第三輪稽核時,子代理逐字搜尋當時最新的課程筆記、對應領域摘要、
> `pmbok-outline.md` 三份參考資料,查不到這幾個主題的依據。內容本身沒有事實錯誤,只是
> 不確定是否為你這次課程/考試範圍內的內容。
>
> **2026-08-26 更新**:French & Raven 五種權力基礎 + Vroom's Expectancy Theory 這組主題
> (原本 7 題:res-045~050、res-068)經稽核確認,核心概念已經出現在課程筆記裡,已剪回
> `Resources.md` 對應位置。
>
> **2026-10-01 更新**:Hersey-Blanchard 情境領導模型(res-059、res-060)經確認要考,已剪回
> `Resources.md`(現為 Q61、Q62)。Mitchell/Agle/Wood 利害關係人類型學(stk-067)經確認
> 不考,已直接刪除。這份檔案目前**沒有待處理的題目**。
>
> **處理方式**:確認主題「要考」→ 把對應區塊剪回原本的檔案(Resources.md / Stakeholders.md)
> 對應位置即可,格式完全沒動過,題目 ID 也沒變。確認「不考」→ 直接刪除這份檔案裡對應的區塊。
