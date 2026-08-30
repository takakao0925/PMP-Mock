# 暫時抽離的題目 — 課程筆記查無依據

> 這份檔案(現名 `Issue.md`,原名 `Quiz-w-Issue.md`)**不會被 `npm run import:quiz` 讀取**
> (腳本只認 Governance/Scope/Schedule/Finance/Stakeholders/Resources/Risk 這 7 個固定檔名,
> 跟 `Report-Issue.md` 一樣會被自動略過),所以這裡的題目不會出現在正式題庫或考試抽題裡。
> ⚠️ 但 `scripts/import-issue-quiz.mjs`(`npm run import:flagged`,稽核複審 UI 用來讀取這份
> 檔案的腳本)目前還寫死找 `Quiz-w-Issue.md` 這個舊檔名,改名後應該會找不到檔案而失敗,
> 這個路徑之後需要修一下。
>
> 抽離原因:2026/07/26 第三輪稽核時,子代理逐字搜尋當時最新的課程筆記、對應領域摘要、
> `pmbok-outline.md` 三份參考資料,查不到這幾個主題的依據。內容本身沒有事實錯誤,只是
> 不確定是否為你這次課程/考試範圍內的內容。
>
> **2026-08-26 更新**:French & Raven 五種權力基礎 + Vroom's Expectancy Theory 這組主題
> (原本 7 題:res-045~050、res-068)經稽核確認,核心概念**已經出現在最新的
> `20260824-PMP-course-note.md` 課程筆記裡**(只是筆記沒有點名學者姓名),已剪回
> `Resources.md` 對應位置。目前這份檔案只剩 **3 題**:Hersey-Blanchard 情境領導模型
> (2 題,課程筆記仍查無依據)與 Mitchell/Agle/Wood 利害關係人類型學(1 題,同樣查無依據)。
>
> **處理方式**:確認這些主題「要考」→ 把對應區塊剪回原本的檔案(Resources.md / Stakeholders.md)
> 對應位置即可,格式完全沒動過,題目 ID 也沒變。確認「不考」→ 直接刪除這份檔案裡對應的區塊。

---

## 主題 2:Hersey-Blanchard 情境領導模型(2 題:res-059、res-060)

> 原本在 Resources.md 的 Q61、Q62 位置。

### Q61. `res-059` — 單選題

**題目 ID**: `res-059`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Resources` ｜ ECO domain: `People`

**稽核備註**：屬於「Hersey-Blanchard 情境領導模型」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。

**題幹**

- EN: A brand-new team member is highly enthusiastic about the assignment but has very little relevant technical skill or experience with the specific task. According to the Situational Leadership model (Hersey-Blanchard), which leadership style should the project manager primarily apply with this individual?
- 中: 一位剛加入的團隊成員對這項任務充滿熱忱,但在該特定任務上幾乎沒有相關技術能力或經驗。根據情境領導模型(Situational Leadership, Hersey-Blanchard),專案經理對這位成員應主要採用哪一種領導風格?

**選項**

- (a) Directing — providing close, specific guidance and instructions / 指導型(Directing)——提供密切、具體的指引與指示 ✅ **正解**
- (b) Delegating — handing over full autonomy with minimal oversight / 授權型(Delegating)——交出完全自主權,極少監督
- (c) Supporting — facilitating and encouraging with minimal direction / 支持型(Supporting)——以鼓勵與促進為主,極少指導
- (d) Laissez-faire — providing no involvement at all / 放任型(Laissez-faire)——完全不介入

**詳解**

情境領導模型主張領導風格應依團隊成員的能力(competence)與意願(commitment)調整。對於能力低、但意願/熱忱高的新成員,應採用 Directing(指導型)風格,提供密切且具體的指引;隨著能力逐漸提升,才逐步轉向 Coaching(教練型)、Supporting(支持型),最終在能力與意願皆高時採用 Delegating(授權型)。放任型並非情境領導模型中的正式風格,且完全不介入對新手而言風險過高。

---

### Q62. `res-060` — 下拉選單題

**題目 ID**: `res-060`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Resources` ｜ ECO domain: `People`

**稽核備註**：屬於「Hersey-Blanchard 情境領導模型」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: A veteran team member has repeatedly demonstrated both strong technical competence and high commitment on similar tasks. Following the Situational Leadership model, the project manager should primarily adopt {{blank1}} with this individual, while reserving closer involvement for {{blank2}}.
- 中: 一位資深團隊成員在類似任務上多次展現出高度的技術能力與投入意願。依循情境領導模型,專案經理對這位成員應主要採用 {{blank1}},並將較密切的介入保留給 {{blank2}}。

**blank1**

- (a) A Delegating style, granting autonomy over how the work gets done / 授權型(Delegating)風格,給予其自行決定如何完成工作的自主權 ✅ **正解**
- (b) A Directing style, specifying each step in detail / 指導型(Directing)風格,詳細規定每一個步驟

**blank2**

- (a) Less experienced or less confident team members who need more guidance / 經驗較淺或信心較不足、需要更多指引的團隊成員 ✅ **正解**
- (b) Every team member equally, regardless of their skill or experience / 無論技能或經驗高低,對每位成員一視同仁


**詳解**

對於能力與意願皆高的資深成員,情境領導模型建議採用 Delegating(授權型)風格,給予高度自主權;較密切的指導與介入則應保留給能力或信心尚待建立的成員,而非不分對象一律採用同一種領導風格。

---

## 主題 3:Mitchell/Agle/Wood 利害關係人類型學(1 題:stk-067)

> 原本在 Stakeholders.md 的 Q69 位置。

### Q69. `stk-067` — 點擊熱區題

**題目 ID**: `stk-067`

難度: `hard` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Stakeholders` ｜ ECO domain: `People`

**稽核備註**：屬於「Mitchell/Agle/Wood 利害關係人類型學」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。

**題幹**

- EN: Under Mitchell, Agle, and Wood's stakeholder typology (an extension of the Salience Model), a stakeholder possessing all three attributes — power, urgency, and legitimacy — simultaneously is classified as a "Definitive" stakeholder and should receive the highest priority. Click the card describing this "Definitive" stakeholder type.
- 中: 依Mitchell、Agle與Wood提出的利害關係人類型學(顯著性模型的延伸),同時具備權力(Power)、急迫性(Urgency)、正當性(Legitimacy)三項屬性的利害關係人被歸類為「確定型(Definitive)」利害關係人,應獲得最高優先關注。請點選描述此「確定型(Definitive)」利害關係人類型的卡片。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Possesses power and legitimacy, but lacks urgency / 具備權力與正當性,但缺乏急迫性 [x=5,y=5,w=40,h=35]
- (n2) Possesses power, urgency, and legitimacy simultaneously / 同時具備權力、急迫性與正當性 ✅ **正解** [x=52.5,y=5,w=40,h=35]
- (n3) Possesses urgency and legitimacy, but lacks power / 具備急迫性與正當性,但缺乏權力 [x=5,y=47.5,w=40,h=35]
- (n4) Possesses power and urgency, but lacks legitimacy / 具備權力與急迫性,但缺乏正當性 [x=52.5,y=47.5,w=40,h=35]

**詳解**

Mitchell等人提出的顯著性模型延伸類型學中,同時具備權力、急迫性、正當性三項屬性者稱為「確定型(Definitive)」利害關係人,應獲得PM最優先的關注與資源投入;僅具權力與正當性(缺急迫性)稱為「支配型(Dominant)」;僅具急迫性與正當性(缺權力)稱為「依賴型(Dependent)」;僅具權力與急迫性(缺正當性)稱為「危險型(Dangerous)」,因其可能運用權力採取急迫但未必正當的行動。

---
