# Schedule — PMP 題庫

> 共 2 題。ECO 領域配分僅供出題參考,實際考試不分版本混合抽題。

### Q1. `match-001` — 拖拉配對題

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each of the 5 Focus Areas to the activity description that best fits it.
- 中: 請將下列 5 大 Focus Areas 拖曳配對到最符合的活動描述。

**配對項目(拖曳來源)**

- p1: Initiating / 啟動(Initiating)
- p2: Planning / 規劃(Planning)
- p3: Executing / 執行(Executing)
- p4: Monitoring & Controlling / 監控(Monitoring & Controlling)
- p5: Closing / 結束(Closing)

**選項池(拖曳目標)**

- c1: Approve the project charter and formally authorize the project to begin / 核准專案章程,正式授權專案展開
- c2: Coordinate resources to complete the work defined in the plan / 協調資源完成規劃中定義的工作
- c3: Track deviations between actual progress and baseline, and take corrective action / 追蹤實際進度與基準的偏差並採取修正行動
- c4: Establish scope, schedule, and cost baselines / 制定範疇、時程與成本基準
- c5: Obtain final acceptance and release project resources / 取得最終驗收並釋出專案資源

**✅ 正確配對**

- p1 → c1: Initiating → Approve the project charter and formally authorize the project to begin（啟動(Initiating) → 核准專案章程,正式授權專案展開）
- p2 → c4: Planning → Establish scope, schedule, and cost baselines（規劃(Planning) → 制定範疇、時程與成本基準）
- p3 → c2: Executing → Coordinate resources to complete the work defined in the plan（執行(Executing) → 協調資源完成規劃中定義的工作）
- p4 → c3: Monitoring & Controlling → Track deviations between actual progress and baseline, and take corrective action（監控(Monitoring & Controlling) → 追蹤實際進度與基準的偏差並採取修正行動）
- p5 → c5: Closing → Obtain final acceptance and release project resources（結束(Closing) → 取得最終驗收並釋出專案資源）

**詳解**

PMBOK 8th 版重新引入的 5 大 Focus Areas 對應舊制流程群組: Initiating(啟動)、Planning(規劃)、Executing(執行)、Monitoring & Controlling(監控)、Closing(結束)。

---

### Q2. `hs-001` — 點擊熱區題

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which both merge into Task D. Task A takes 3 days, Task B takes 5 days, Task C takes 8 days, and Task D takes 4 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).
- 中: 下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後皆匯流至 Task D。Task A 需時 3 天、Task B 需時 5 天、Task C 需時 8 天、Task D 需時 4 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task A (3 days) / Task A(3天) [x=5,y=40,w=20,h=20]
- (n2) Task B (5 days) / Task B(5天) ✅ **正解** [x=30,y=10,w=20,h=20]
- (n3) Task C (8 days) / Task C(8天) [x=30,y=70,w=20,h=20]
- (n4) Task D (4 days) / Task D(4天) [x=60,y=40,w=20,h=20]

**詳解**

此為菱形網路圖:Task A 是兩條路徑共同的起點,Task D 是兩條路徑共同的匯流點,Task B 與 Task C 則是中間並行的兩條分支。路徑一 A→B→D = 3+5+4 = 12 天;路徑二 A→C→D = 3+8+4 = 15 天,較長,為要徑。因此 A、C、D 皆位於要徑上、總浮時為 0;只有 B 不在要徑上,總浮時 = 15−12 = 3 天。A 與 D 分別是兩條路徑共用的起點與匯流點,兩條路徑都得經過它們,所以恆為要徑上的 0 浮時節點;真正可能出現浮時的只有並行分支 B、C 之中工期較短的那一條。

---
