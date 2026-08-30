# Schedule — PMP 題庫

> 共 108 題。ECO 領域配分僅供出題參考,實際考試不分版本混合抽題。

### Q1. `match-001` — 拖拉配對題

**題目 ID**: `match-001`

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

**題目 ID**: `hs-001`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which both merge into Task D. Task A takes 3 days, Task B takes 5 days, Task C takes 8 days, and Task D takes 4 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).
- 中: 下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後皆匯流至 Task D。Task A 需時 3 天、Task B 需時 5 天、Task C 需時 8 天、Task D 需時 4 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task A (3 days) / Task A(3天) [x=5,y=40,w=20,h=20]
- (n2) Task B (5 days) / Task B(5天) ✅ **正解** [x=30,y=10,w=20,h=20]
- (n3) Task C (8 days) / Task C(8天) [x=30,y=70,w=20,h=20]
- (n4) Task D (4 days) / Task D(4天) [x=60,y=40,w=20,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n2 → n4
- n3 → n4

**詳解**

此為菱形網路圖:Task A 是兩條路徑共同的起點,Task D 是兩條路徑共同的匯流點,Task B 與 Task C 則是中間並行的兩條分支。路徑一 A→B→D = 3+5+4 = 12 天;路徑二 A→C→D = 3+8+4 = 15 天,較長,為要徑。因此 A、C、D 皆位於要徑上、總浮時為 0;只有 B 不在要徑上,總浮時 = 15−12 = 3 天。A 與 D 分別是兩條路徑共用的起點與匯流點,兩條路徑都得經過它們,所以恆為要徑上的 0 浮時節點;真正可能出現浮時的只有並行分支 B、C 之中工期較短的那一條。

---

### Q3. `sch-001` — 單選題

**題目 ID**: `sch-001`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: During Sequence Activities, the team determines that the concrete foundation must be fully cured before the structural walls can be erected — a physical constraint inherent to the nature of the work itself. Which type of dependency does this represent?
- 中: 在排序活動(Sequence Activities)過程中,團隊發現混凝土地基必須完全硬化後才能豎立結構牆——這是工作本質固有的實體限制。這屬於哪一種依賴關係?

**選項**

- (a) Discretionary dependency / 選擇性依賴(Discretionary)
- (b) External dependency / 外部依賴(External)
- (c) Mandatory dependency / 強制性依賴(Mandatory) ✅ **正解**
- (d) Internal dependency / 內部依賴(Internal)

**詳解**

強制性依賴(Mandatory Dependency)源自合約條款或工作本質固有的實體限制,例如地基必須先完成才能蓋牆,這種先後順序無法協商或調整,故答案為 (c)。選擇性依賴是基於最佳實務的偏好順序;外部依賴來自組織外部因素;內部依賴則是團隊可控制的順序安排。

---

### Q4. `sch-002` — 單選題

**題目 ID**: `sch-002`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: An activity has the following three-point estimates: Optimistic = 4 days, Most Likely = 6 days, Pessimistic = 14 days. Using the PERT Beta distribution formula, what is the expected duration of this activity?
- 中: 某活動的三點估算如下:樂觀值(O)= 4 天、最可能值(M)= 6 天、悲觀值(P)= 14 天。使用 PERT Beta 分佈公式,此活動的預期工期為何?

**選項**

- (a) 6 days / 6 天
- (b) 6.5 days / 6.5 天
- (c) 7 days / 7 天 ✅ **正解**
- (d) 8 days / 8 天

**詳解**

Beta 分佈公式:預期工期 = (O+4M+P)/6 = (4+4×6+14)/6 = (4+24+14)/6 = 42/6 = 7 天。因為 Beta 分佈給予最可能值(M)4 倍權重,計算結果比單純平均數更貼近最可能情境,故答案為 (c)。

---

### Q5. `sch-003` — 多選題

**題目 ID**: `sch-003`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements about Discretionary Dependencies are correct? Select two.
- 中: 關於選擇性依賴(Discretionary Dependency),下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) They are based on best practices or preferences within a particular application area / 它們是基於特定應用領域的最佳實務或偏好而制定 ✅ **正解**
- (b) They are fully documented and can be adjusted if the team decides another sequence is more efficient / 它們會被完整記錄,若團隊認為另一種順序更有效率,可以調整 ✅ **正解**
- (c) They arise from contractual obligations with an external vendor / 它們源自與外部供應商的合約義務
- (d) They are always mandated by the project charter / 它們永遠由專案章程強制規定
- (e) They cannot be changed once the schedule baseline is approved / 一旦時程基準核准後就不能更改

**詳解**

選擇性依賴(Discretionary Dependency)是團隊基於經驗、最佳實務或偏好所選擇的活動順序(如「先設計後採購」的慣例做法),理論上可以調整,應被記錄以說明選擇理由,故 (a)(b) 正確。(c) 描述的是外部依賴;(d)(e) 則是強制性依賴或已核准基準常見的錯誤敘述,選擇性依賴並非不可變更。

---

### Q6. `sch-004` — 下拉選單題

**題目 ID**: `sch-004`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: In network diagramming, when the design team starts writing the test plan two days before the design document is fully finished, this represents a {{blank1}} of 2 days. When the painting crew must wait 3 days after painting for the paint to dry before installing fixtures, this represents a {{blank2}} of 3 days.
- 中: 在網路圖中,當設計團隊在設計文件尚未完全結束前提前 2 天開始撰寫測試計畫,這代表 2 天的{{blank1}};當油漆團隊上漆後必須等待 3 天讓油漆乾燥才能安裝配件,這代表 3 天的{{blank2}}。

**blank1**

- (a) Lag / 落後量(Lag)
- (b) Lead / 提前量(Lead) ✅ **正解**

**blank2**

- (a) Lag / 落後量(Lag) ✅ **正解**
- (b) Lead / 提前量(Lead)


**詳解**

Lead(提前量)讓後續活動與前置活動重疊、提前開始,故測試計畫提前 2 天開始屬於 Lead。Lag(落後量)是刻意延遲後續活動開始的等待期間,如等待油漆乾燥的 3 天屬於 Lag。許多考生會將兩者的正負號與方向記反,需特別注意。

---

### Q7. `sch-005` — 點擊熱區題

**題目 ID**: `sch-005`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which both merge into Task D. Task A takes 4 days, Task B takes 6 days, Task C takes 9 days, and Task D takes 5 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).
- 中: 下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後皆匯流至 Task D。Task A 需時 4 天、Task B 需時 6 天、Task C 需時 9 天、Task D 需時 5 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task A (4 days) / Task A(4天) [x=5,y=40,w=20,h=20]
- (n2) Task B (6 days) / Task B(6天) ✅ **正解** [x=30,y=10,w=20,h=20]
- (n3) Task C (9 days) / Task C(9天) [x=30,y=70,w=20,h=20]
- (n4) Task D (5 days) / Task D(5天) [x=60,y=40,w=20,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n2 → n4
- n3 → n4

**詳解**

路徑一 A→B→D = 4+6+5 = 15 天;路徑二 A→C→D = 4+9+5 = 18 天,較長,為要徑(Critical Path)。因此 A、C、D 總浮時皆為 0,只有 B 不在要徑上,總浮時 = 18−15 = 3 天。A、D 分別是兩條路徑共用的起點與匯流點,恆為要徑上的 0 浮時節點。

---

### Q8. `sch-006` — 單選題

**題目 ID**: `sch-006`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: The project is two weeks behind schedule. To catch up, the PM considers fast tracking two originally sequential activities. Several team members privately tell a colleague they fear this will cause rework and burnout, but no one has raised it with the PM directly. What should the PM do FIRST?
- 中: 專案已落後兩週。為了趕上進度,專案經理考慮將原本循序的兩項活動改為快速跟進(Fast Tracking)平行執行。幾位團隊成員私下向同事表示擔心這會造成返工與過勞,但沒有人直接向專案經理反映。專案經理應「優先」採取什麼行動?

**選項**

- (a) Proceed with fast tracking immediately since schedule pressure is real and time cannot be wasted / 立即執行快速跟進,因為時程壓力真實存在,不能浪費時間
- (b) Openly discuss the fast-tracking plan and its risks with the team to surface concerns and confirm feasibility before committing / 主動與團隊公開討論快速跟進計畫及其風險,在正式執行前先徵詢疑慮並確認可行性 ✅ **正解**
- (c) Report the team's dissatisfaction to the sponsor and request a schedule extension / 向贊助人回報團隊的不滿並要求延長時程
- (d) Ignore the informal comments since they were not raised through official channels / 忽略非正式的意見,因為沒有透過正式管道反映

**詳解**

快速跟進(Fast Tracking)會提高返工風險,團隊私下的疑慮是重要訊號。專案經理應優先主動與團隊公開溝通、共同評估風險與可行性,而非片面決定或忽視非正式回饋,這體現了團隊領導與利害關係人溝通的核心職責,故答案為 (b)。

---

### Q9. `sch-007` — 多選題

**題目 ID**: `sch-007`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly describe the relationship between Total Float and Free Float? Select two.
- 中: 關於總浮時(Total Float)與自由浮時(Free Float)的關係,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) Total Float is the amount of time an activity can be delayed without delaying the project finish date / 總浮時是活動可延遲而不影響專案完工日的時間量 ✅ **正解**
- (b) Free Float is the amount of time an activity can be delayed without delaying the early start of the immediately following activity / 自由浮時是活動可延遲而不影響下一個活動最早開始時間的時間量 ✅ **正解**
- (c) Free Float is always greater than or equal to Total Float for the same activity / 對同一活動而言,自由浮時永遠大於或等於總浮時
- (d) Total Float can be calculated using only the Backward Pass, without needing the Forward Pass / 總浮時只需要逆推法(Backward Pass)即可算出,不需要順推法(Forward Pass)
- (e) Free Float can exceed Total Float for the same activity / 對同一活動而言,自由浮時可以超過總浮時

**詳解**

總浮時(Total Float)= LS−ES(或 LF−EF),代表不影響專案完工日的可延遲時間,需要順推法與逆推法兩者才能算出,故 (a) 正確、(d) 錯誤。自由浮時(Free Float)= 後續活動 ES − 目前活動 EF,代表不影響下一活動最早開始的可延遲時間,故 (b) 正確。由於自由浮時只考慮下一個活動、總浮時考慮整個專案完工日,自由浮時恆小於或等於總浮時,不可能大於總浮時,故 (c)(e) 錯誤。

---

### Q10. `sch-008` — 拖拉配對題

**題目 ID**: `sch-008`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each CPM (Critical Path Method) term to the description that best fits it.
- 中: 請將下列要徑法(CPM)相關名詞拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Forward Pass / 順推法(Forward Pass)
- p2: Backward Pass / 逆推法(Backward Pass)
- p3: Float (Slack) / 浮時(Float / Slack)
- p4: Critical Path / 要徑(Critical Path)

**選項池(拖曳目標)**

- c1: Calculates the Early Start (ES) and Early Finish (EF) dates by moving from the project start toward the end / 從專案起點往終點推算,得出最早開始(ES)與最早完成(EF)日期
- c2: Calculates the Late Start (LS) and Late Finish (LF) dates by moving from the project end back toward the start / 從專案終點往起點回推,得出最晚開始(LS)與最晚完成(LF)日期
- c3: The difference between Late Start and Early Start (or Late Finish and Early Finish) of an activity / 活動的最晚開始減最早開始(或最晚完成減最早完成)之差
- c4: The longest path through the network diagram, with zero total float / 網路圖中最長的路徑,總浮時為零

**✅ 正確配對**

- p1 → c1: Forward Pass → Calculates the Early Start (ES) and Early Finish (EF) dates by moving from the project start toward the end（順推法(Forward Pass) → 從專案起點往終點推算,得出最早開始(ES)與最早完成(EF)日期）
- p2 → c2: Backward Pass → Calculates the Late Start (LS) and Late Finish (LF) dates by moving from the project end back toward the start（逆推法(Backward Pass) → 從專案終點往起點回推,得出最晚開始(LS)與最晚完成(LF)日期）
- p3 → c3: Float (Slack) → The difference between Late Start and Early Start (or Late Finish and Early Finish) of an activity（浮時(Float / Slack) → 活動的最晚開始減最早開始(或最晚完成減最早完成)之差）
- p4 → c4: Critical Path → The longest path through the network diagram, with zero total float（要徑(Critical Path) → 網路圖中最長的路徑,總浮時為零）

**詳解**

CPM(要徑法)透過順推法(Forward Pass)求出 ES/EF,再透過逆推法(Backward Pass)求出 LS/LF,兩者之差即為浮時(Float);浮時為零的最長路徑即為要徑(Critical Path),決定專案最短完工時間。

---

### Q11. `sch-009` — 點擊熱區題

**題目 ID**: `sch-009`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The four cards below list items related to Develop Schedule. Click the item that is an OUTPUT of the Develop Schedule process (the other three are inputs).
- 中: 下方四張卡片列出與發展時程(Develop Schedule)相關的項目。請點選「發展時程」流程的「輸出(Output)」項目(其餘三項皆為輸入)。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Activity Duration Estimates (input) / 活動工期估算(輸入) [x=10,y=15,w=35,h=25]
- (n2) Project Schedule Network Diagrams (input) / 專案時程網路圖(輸入) [x=55,y=15,w=35,h=25]
- (n3) Schedule Baseline (output) / 時程基準(輸出) ✅ **正解** [x=10,y=60,w=35,h=25]
- (n4) Resource Requirements (input) / 資源需求(輸入) [x=55,y=60,w=35,h=25]

**詳解**

發展時程(Develop Schedule)以活動清單、活動工期估算、網路圖與資源需求等作為輸入,經分析後產出時程基準(Schedule Baseline)與專案時程(Project Schedule);時程基準是後續監控時程績效比對的核准版本。

---

### Q12. `sch-010` — 單選題

**題目 ID**: `sch-010`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: A construction project cannot begin site excavation until the municipal government issues an environmental permit — a process the project team does not control and cannot expedite by adjusting internal work sequencing. What type of dependency does this represent?
- 中: 某營建專案在市政府核發環境許可前無法開始基地開挖——這個核准過程並非專案團隊所能控制,也無法透過調整內部工作順序來加快。這屬於哪一種依賴關係?

**選項**

- (a) Internal dependency / 內部依賴(Internal)
- (b) Discretionary dependency / 選擇性依賴(Discretionary)
- (c) External dependency / 外部依賴(External) ✅ **正解**
- (d) Finish-to-Finish logical relationship / 完成到完成(FF)邏輯關係

**詳解**

外部依賴(External Dependency)是依賴組織外部因素的順序限制,例如政府核准、法規審查等,不受專案團隊控制。此情境中政府核發環境許可正是典型的外部依賴範例,故答案為 (c)。內部依賴是團隊可控制的順序;選擇性依賴是基於偏好的順序;FS/FF 等屬於邏輯關係類型,與依賴來源的分類不同軸。

---

### Q13. `sch-011` — 下拉選單題

**題目 ID**: `sch-011`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: An activity has Optimistic = 8 days, Most Likely = 10 days, Pessimistic = 18 days. Using the PERT Beta distribution, the expected duration is {{blank1}} days, and the standard deviation is {{blank2}} days.
- 中: 某活動的樂觀值(O)= 8 天、最可能值(M)= 10 天、悲觀值(P)= 18 天。使用 PERT Beta 分佈,其預期工期為 {{blank1}} 天,標準差為 {{blank2}} 天。

**blank1**

- (a) 10 / 10
- (b) 11 / 11 ✅ **正解**
- (c) 12 / 12

**blank2**

- (a) 1.33 / 1.33
- (b) 1.67 / 1.67 ✅ **正解**
- (c) 2.0 / 2.0


**詳解**

預期工期 = (O+4M+P)/6 = (8+40+18)/6 = 66/6 = 11 天。標準差 = (P−O)/6 = (18−8)/6 = 10/6 ≈ 1.67 天;標準差用於評估此估算的不確定性,悲觀值與樂觀值差距愈大,標準差愈大、估算愈不確定。

---

### Q14. `sch-012` — 多選題

**題目 ID**: `sch-012`

難度: `hard` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: The sponsor demands the schedule be compressed by three weeks with no additional budget. The only qualified developer for a key activity is already fully allocated to another critical task. Select two appropriate actions for the PM to take.
- 中: 贊助人要求在不增加預算的情況下將時程壓縮三週。唯一具備資格執行某關鍵活動的開發人員已經被完全分配到另一項要徑任務上。請選擇專案經理應採取的兩項適當行動。

**選項**

- (a) Negotiate with the functional manager to temporarily reallocate the specialist or adjust assignment priorities / 與職能經理協商,暫時重新調配該專家或調整任務優先順序 ✅ **正解**
- (b) Evaluate whether re-sequencing or fast tracking non-resource-constrained activities can reduce duration without added cost / 評估是否能透過重新排序或對非資源受限活動進行快速跟進,在不增加成本的情況下縮短工期 ✅ **正解**
- (c) Unilaterally instruct the developer to work on both tasks simultaneously without informing their manager / 未告知該員工的經理,擅自指示其同時執行兩項任務
- (d) Approve unlimited overtime for the entire team without assessing burnout risk / 未評估過勞風險就核准全體團隊無上限加班
- (e) Simply tell the sponsor compression is impossible and take no further action / 直接告訴贊助人無法壓縮,不採取任何進一步行動

**詳解**

面對零預算的時程壓縮要求且遇到資源衝突,專案經理應主動與職能經理協商資源調配,並評估快速跟進等不增加成本的壓縮技術,故 (a)(b) 正確。擅自指派、無限制加班或消極不作為都不符合專業責任與利害關係人溝通的要求,故 (c)(d)(e) 錯誤。

---

### Q15. `sch-013` — 點擊熱區題

**題目 ID**: `sch-013`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network with Task S followed by three parallel tasks — P, Q, and R — which all merge into Task T. Task S takes 2 days, Task P takes 4 days, Task Q takes 7 days, Task R takes 10 days, and Task T takes 3 days. Among the three parallel tasks, click the one with the LARGEST Total Float.
- 中: 下圖網路中,Task S 之後分為三條並行任務——P、Q、R,三者完成後皆匯流至 Task T。Task S 需時 2 天、Task P 需時 4 天、Task Q 需時 7 天、Task R 需時 10 天、Task T 需時 3 天。在三條並行任務中,請點選「總浮時(Total Float)最大」的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task S (2 days) / Task S(2天) [x=5,y=40,w=18,h=20]
- (n2) Task P (4 days) / Task P(4天) ✅ **正解** [x=30,y=5,w=18,h=20]
- (n3) Task Q (7 days) / Task Q(7天) [x=30,y=40,w=18,h=20]
- (n4) Task R (10 days) / Task R(10天) [x=30,y=75,w=18,h=20]
- (n5) Task T (3 days) / Task T(3天) [x=60,y=40,w=18,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n1 → n4
- n2 → n5
- n3 → n5
- n4 → n5

**詳解**

三條路徑:S→P→T = 2+4+3 = 9 天;S→Q→T = 2+7+3 = 12 天;S→R→T = 2+10+3 = 15 天,最長,為要徑,故 S、R、T 總浮時為 0。P 的總浮時 = 15−9 = 6 天;Q 的總浮時 = 15−12 = 3 天。三條並行任務中,P 的總浮時最大(6 天),代表它離要徑最遠、延遲彈性最高。

---

### Q16. `sch-014` — 單選題

**題目 ID**: `sch-014`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Activity M has an Early Finish (EF) of Day 10. Its successor, Activity N, has an Early Start (ES) of Day 14. What is the Free Float of Activity M?
- 中: 活動 M 的最早完成(EF)為第 10 天,其後續活動 N 的最早開始(ES)為第 14 天。活動 M 的自由浮時(Free Float)為何?

**選項**

- (a) 3 days / 3 天
- (b) 4 days / 4 天 ✅ **正解**
- (c) 5 days / 5 天
- (d) 10 days / 10 天

**詳解**

自由浮時(Free Float)= 後續活動最早開始(ES)− 目前活動最早完成(EF)= 14 − 10 = 4 天,代表活動 M 最多可延遲 4 天,而不會影響活動 N 的最早開始時間。

---

### Q17. `sch-015` — 拖拉配對題

**題目 ID**: `sch-015`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each of the 4 Develop Schedule steps to the description that best fits it.
- 中: 請將發展時程(Develop Schedule)的 4 個步驟拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Define Activities / 定義活動(Define Activities)
- p2: Sequence Activities / 排序活動(Sequence Activities)
- p3: Estimate Activity Duration / 估算活動工期(Estimate Activity Duration)
- p4: Develop Schedule / 發展時程(Develop Schedule)

**選項池(拖曳目標)**

- c1: Decompose work packages further into schedule activities / 將工作包(Work Package)進一步分解為時程活動
- c2: Determine and document the logical relationships (dependencies) among activities / 決定並記錄活動之間的邏輯關係(依賴關係)
- c3: Approximate the number of work periods needed to complete each activity / 估算完成每項活動所需的工作期間數
- c4: Analyze activity sequences, durations, and resource requirements to produce the schedule baseline / 分析活動順序、工期與資源需求,產出時程基準

**✅ 正確配對**

- p1 → c1: Define Activities → Decompose work packages further into schedule activities（定義活動(Define Activities) → 將工作包(Work Package)進一步分解為時程活動）
- p2 → c2: Sequence Activities → Determine and document the logical relationships (dependencies) among activities（排序活動(Sequence Activities) → 決定並記錄活動之間的邏輯關係(依賴關係)）
- p3 → c3: Estimate Activity Duration → Approximate the number of work periods needed to complete each activity（估算活動工期(Estimate Activity Duration) → 估算完成每項活動所需的工作期間數）
- p4 → c4: Develop Schedule → Analyze activity sequences, durations, and resource requirements to produce the schedule baseline（發展時程(Develop Schedule) → 分析活動順序、工期與資源需求,產出時程基準）

**詳解**

發展時程共四個步驟,依序為:①定義活動(將工作包分解為活動)②排序活動(決定邏輯關係)③估算活動工期④發展時程(分析上述結果產出時程基準與專案時程)。此順序是 Schedule 領域的核心流程主軸。

---

### Q18. `sch-016` — 拖拉配對題

**題目 ID**: `sch-016`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each float/buffer term to the description that best fits it.
- 中: 請將下列浮時/緩衝相關名詞拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Total Float / 總浮時(Total Float)
- p2: Free Float / 自由浮時(Free Float)
- p3: Project Buffer / 專案緩衝(Project Buffer)
- p4: Feeding Buffer / 匯入緩衝(Feeding Buffer)

**選項池(拖曳目標)**

- c1: The amount of time an activity can be delayed without delaying the project's overall finish date / 活動可延遲而不影響專案整體完工日的時間量
- c2: The amount of time an activity can be delayed without delaying the early start of its immediate successor / 活動可延遲而不影響其後續活動最早開始時間的時間量
- c3: A time reserve placed at the end of the critical chain to protect the project finish date from variability along the chain / 置於要徑鏈末端,用以保護專案完工日不受鏈上變異影響的時間儲備
- c4: A time reserve inserted where a non-critical chain feeds into the critical chain, to protect it from delays on the feeding path / 置於非要徑鏈匯入要徑鏈之處的時間儲備,用以保護要徑鏈不受匯入路徑延遲影響

**✅ 正確配對**

- p1 → c1: Total Float → The amount of time an activity can be delayed without delaying the project's overall finish date（總浮時(Total Float) → 活動可延遲而不影響專案整體完工日的時間量）
- p2 → c2: Free Float → The amount of time an activity can be delayed without delaying the early start of its immediate successor（自由浮時(Free Float) → 活動可延遲而不影響其後續活動最早開始時間的時間量）
- p3 → c3: Project Buffer → A time reserve placed at the end of the critical chain to protect the project finish date from variability along the chain（專案緩衝(Project Buffer) → 置於要徑鏈末端,用以保護專案完工日不受鏈上變異影響的時間儲備）
- p4 → c4: Feeding Buffer → A time reserve inserted where a non-critical chain feeds into the critical chain, to protect it from delays on the feeding path（匯入緩衝(Feeding Buffer) → 置於非要徑鏈匯入要徑鏈之處的時間儲備,用以保護要徑鏈不受匯入路徑延遲影響）

**詳解**

Total Float 與 Free Float 是 CPM 中的浮時觀念,前者相對於專案完工日,後者相對於下一個活動;Project Buffer 與 Feeding Buffer 則是 Critical Chain Method(要徑鏈法)中以「整體緩衝」取代個別活動安全時間的做法,兩組概念常在考題中被混淆比較。

---

### Q19. `sch-017` — 下拉選單題

**題目 ID**: `sch-017`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: Two activities, Design Review and Code Refactor, both require the same senior architect who is only available part-time. Under the Critical Chain Method, the PM should insert a {{blank1}} at the point where the resource-constrained non-critical chain feeds into the critical chain, rather than {{blank2}}.
- 中: 設計審查與程式碼重構兩項活動都需要同一位僅能兼職支援的資深架構師。依要徑鏈法(Critical Chain Method),專案經理應在資源受限的非要徑鏈匯入要徑鏈之處插入{{blank1}},而不是{{blank2}}。

**blank1**

- (a) Feeding Buffer / 匯入緩衝(Feeding Buffer) ✅ **正解**
- (b) Project Buffer / 專案緩衝(Project Buffer)

**blank2**

- (a) adding individual safety margins to each activity's own duration estimate / 在每個活動各自的工期估算中加入安全邊際 ✅ **正解**
- (b) removing the resource constraint entirely from the schedule / 完全移除時程中的資源限制


**詳解**

Critical Chain Method 在 CPM 基礎上額外考慮資源限制,並在資源受限的非要徑鏈匯入要徑鏈處插入匯入緩衝(Feeding Buffer),在要徑鏈末端插入專案緩衝(Project Buffer),藉由集中的緩衝保護整體工期,而非像傳統做法在每個活動上各自加安全時間(容易因學生症候群而被浪費)。

---

### Q20. `sch-018` — 點擊熱區題

**題目 ID**: `sch-018`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network: Task A is followed by two parallel tasks, Task B and Task C, which merge into Task D. Task A takes 6 days, Task B takes 4 days, Task C takes 10 days, and Task D takes 7 days. Regardless of which parallel branch turns out to be longer, click the node where both parallel branches always reconnect into a single path (the merge point).
- 中: 下圖網路中,Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後匯流至 Task D。Task A 需時 6 天、Task B 需時 4 天、Task C 需時 10 天、Task D 需時 7 天。無論哪一條並行分支較長,請點選「兩條並行分支必定重新匯合」的節點(匯流點)。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task A (6 days) / Task A(6天) [x=5,y=40,w=20,h=20]
- (n2) Task B (4 days) / Task B(4天) [x=30,y=10,w=20,h=20]
- (n3) Task C (10 days) / Task C(10天) [x=30,y=70,w=20,h=20]
- (n4) Task D (7 days) / Task D(7天) ✅ **正解** [x=60,y=40,w=20,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n2 → n4
- n3 → n4

**詳解**

路徑一 A→B→D = 6+4+7 = 17 天;路徑二 A→C→D = 6+10+7 = 23 天,較長,為要徑。Task D 是兩條並行分支(B、C)共同匯流的節點,無論哪一分支較長,兩條路徑都必須經過它,因此 Task D(與起點 Task A 同理)恆為要徑上總浮時為 0 的節點;只有中間並行分支中較短的一條(此例為 B)才可能出現總浮時。

---

### Q21. `sch-019` — 單選題

**題目 ID**: `sch-019`

難度: `hard` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: A competitor is expected to launch a similar product in 10 weeks. To capture first-mover advantage, leadership asks the PM to shorten the timeline by crashing the critical-path activity "Integration Testing," which currently takes 8 days. Adding extra testers costs $2,000 more per day saved, reducing it to 6 days. What is the total additional crashing cost required?
- 中: 預期競爭對手將在 10 週後推出類似產品。為搶佔市場先機,領導層要求專案經理透過趕工(Crashing)要徑活動「整合測試」來縮短時程,該活動目前需時 8 天。增派測試人員每縮短 1 天需額外花費 $2,000,可將工期縮短至 6 天。所需的總額外趕工成本為何?

**選項**

- (a) $2,000 / $2,000
- (b) $4,000 / $4,000 ✅ **正解**
- (c) $8,000 / $8,000
- (d) $10,000 / $10,000

**詳解**

趕工成本 = 每天成本 × 壓縮天數 = $2,000 × (8−6) = $2,000 × 2 = $4,000。此決策由外部市場競爭情勢(競爭對手即將推出產品)所驅動,屬於商業環境考量下評估趕工(Crashing)成本效益的典型情境。

---

### Q22. `sch-020` — 多選題

**題目 ID**: `sch-020`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Which two statements about External Dependencies are correct? Select two.
- 中: 關於外部依賴(External Dependency),下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) They depend on factors outside the project's control, such as a permit from a regulatory agency or a supplier's delivery schedule / 它們取決於專案控制範圍之外的因素,例如監管機關的許可或供應商的交貨時程 ✅ **正解**
- (b) The project team can usually negotiate or accelerate them directly since they originate from the organization's own internal processes / 由於它們源自組織自身的內部流程,專案團隊通常可以直接協商或加快進度
- (c) They should be documented and monitored closely because they can introduce schedule risk beyond the team's direct influence / 應被詳細記錄並密切監控,因為它們可能帶來團隊無法直接掌控的時程風險 ✅ **正解**
- (d) They are the same as Discretionary Dependencies because both involve some degree of choice / 它們與選擇性依賴相同,因為兩者都涉及某種程度的選擇
- (e) They only occur in agile projects and never in predictive (waterfall) projects / 它們只發生在敏捷專案中,絕不會出現在預測型(瀑布)專案中

**詳解**

外部依賴(External Dependency)源自組織外部、專案團隊無法控制的因素,如政府核准、供應商交期,故 (a) 正確;因不受團隊直接控制,更需詳實記錄並密切監控其風險,故 (c) 正確。(b) 描述錯誤,因外部因素通常無法由團隊直接加速;(d) 混淆了外部依賴與選擇性依賴;(e) 外部依賴在預測型與敏捷專案中皆可能出現,與開發方法無關。

---

### Q23. `sch-021` — 單選題

**題目 ID**: `sch-021`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The team decides that the activity "Write Test Cases" can begin as soon as the activity "Requirements Review" begins, rather than waiting for it to finish, since both activities only need the initial draft of requirements. Which type of logical relationship does this represent?
- 中: 團隊決定「撰寫測試案例」活動可以在「需求審查」活動一開始就同步展開,而不需等待需求審查結束,因為兩項活動都只需要需求的初稿即可。這屬於哪一種邏輯關係?

**選項**

- (a) Finish-to-Start (FS) / 完成到開始(FS)
- (b) Start-to-Start (SS) / 開始到開始(SS) ✅ **正解**
- (c) Finish-to-Finish (FF) / 完成到完成(FF)
- (d) Start-to-Finish (SF) / 開始到完成(SF)

**詳解**

Start-to-Start(SS,開始到開始)關係代表後續活動只要前置活動一開始就能跟著開始,不需等待前置活動完成。本題中「撰寫測試案例」與「需求審查」同步展開,正是典型的 SS 關係,故答案為 (b)。FS 是最常見的「完成才能開始」;FF 要求兩者同時完成;SF 是最少見的關係類型,與本題描述不符。

---

### Q24. `sch-022` — 單選題

**題目 ID**: `sch-022`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: The project's sole database administrator (DBA) is simultaneously assigned to three concurrent critical-path tasks. To resolve this over-allocation, the PM performs resource leveling, which extends the project finish date by 5 days beyond the originally committed date. The sponsor, unaware of the resource constraint, insists the original date must be kept. What should the PM do FIRST?
- 中: 專案唯一的資料庫管理員(DBA)同時被指派到三項並行的要徑任務上。為解決此資源超額分配問題,專案經理執行資源撫平(Resource Leveling),導致專案完工日比原本承諾的日期延後 5 天。贊助人並不知道這個資源限制,堅持要維持原訂日期。專案經理應「優先」採取什麼行動?

**選項**

- (a) Instruct the DBA to work on all three tasks simultaneously through unpaid overtime to avoid changing the schedule / 指示 DBA 透過無償加班同時處理三項任務,以避免更動時程
- (b) Present the resource conflict and its schedule impact to the sponsor, and jointly discuss options such as adding a second DBA, adjusting scope, or accepting the delay / 向贊助人說明資源衝突及其對時程的影響,並共同討論增派第二位 DBA、調整範疇或接受延遲等選項 ✅ **正解**
- (c) Quietly push back the finish date in the schedule tool without notifying the sponsor / 在時程工具中悄悄延後完工日,不通知贊助人
- (d) Tell the DBA to unofficially deprioritize two of the three tasks without informing their functional manager / 未告知職能經理,私下要求 DBA 自行降低其中兩項任務的優先順序

**詳解**

資源超額分配是真實存在的限制,資源撫平雖然能解決衝突卻會延長工期。專案經理應優先以透明方式向贊助人說明資源衝突的原因與時程影響,並共同評估增派資源、調整範疇或接受延遲等選項,這體現利害關係人溝通與當責領導,故答案為 (b)。隱瞞、強迫超時工作或繞過職能經理的做法都不符合專業責任。

---

### Q25. `sch-023` — 單選題

**題目 ID**: `sch-023`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Activities A, B, and C are sequential (Finish-to-Start). Activity A takes 5 days. A mandatory 2-day lag is required between the finish of A and the start of B, to allow a concrete curing period. Activity B takes 4 days. Activity C follows B immediately with no lag and takes 6 days. What is the total duration of the path A-B-C?
- 中: 活動 A、B、C 依序為完成到開始(FS)關係。活動 A 需時 5 天。A 完成後到 B 開始之間,因混凝土養護期而有強制性的 2 天落後量(Lag)。活動 B 需時 4 天。活動 C 緊接在 B 之後、無落後量,需時 6 天。路徑 A-B-C 的總工期為何?

**選項**

- (a) 15 days / 15 天
- (b) 17 days / 17 天 ✅ **正解**
- (c) 19 days / 19 天
- (d) 21 days / 21 天

**詳解**

總工期 = A 的工期 + Lag + B 的工期 + C 的工期 = 5 + 2 + 4 + 6 = 17 天。計算路徑總工期時,Lag(落後量)必須和活動工期一樣被計入總天數,許多考生會漏算 Lag 而得出 15 天的錯誤答案。

---

### Q26. `sch-024` — 單選題

**題目 ID**: `sch-024`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: An activity has Optimistic = 6 days, Most Likely = 9 days, Pessimistic = 18 days. Using the Triangular Distribution formula (NOT the Beta distribution), what is the expected duration of this activity?
- 中: 某活動的樂觀值(O)= 6 天、最可能值(M)= 9 天、悲觀值(P)= 18 天。請使用三角分佈(Triangular Distribution)公式(注意不是 Beta 分佈),計算此活動的預期工期。

**選項**

- (a) 10 days / 10 天
- (b) 11 days / 11 天 ✅ **正解**
- (c) 12 days / 12 天
- (d) 9 days / 9 天

**詳解**

三角分佈公式:預期工期 = (O+M+P)/3 = (6+9+18)/3 = 33/3 = 11 天。若誤用 Beta 分佈公式 (O+4M+P)/6 = (6+36+18)/6 = 60/6 = 10 天,會得到選項 (a) 這個常見誤答,故答題時務必看清楚題目指定的是哪一種分佈公式。

---

### Q27. `sch-025` — 單選題

**題目 ID**: `sch-025`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A Scrum team has a stable velocity of 24 story points per 2-week sprint. The remaining product backlog is estimated at 132 story points. Assuming velocity stays constant, how many additional sprints should the team forecast to complete the remaining backlog?
- 中: 某 Scrum 團隊每個 2 週衝刺(Sprint)的穩定產出速度(Velocity)為 24 個故事點。剩餘產品待辦清單估算為 132 個故事點。假設產出速度維持不變,團隊應預測還需要多少個衝刺才能完成剩餘待辦清單?

**選項**

- (a) 5 sprints / 5 個衝刺
- (b) 5.5 sprints / 5.5 個衝刺
- (c) 6 sprints / 6 個衝刺 ✅ **正解**
- (d) 7 sprints / 7 個衝刺

**詳解**

所需衝刺數 = 剩餘待辦點數 ÷ 速度 = 132 ÷ 24 = 5.5 個衝刺。由於衝刺是不可分割的固定時間箱(Timebox),無法只執行半個衝刺,必須無條件進位為 6 個衝刺,故答案為 (c)。

---

### Q28. `sch-026` — 單選題

**題目 ID**: `sch-026`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: The client contract includes a liquidated damages clause requiring the vendor to pay $5,000 per day for each day of late delivery. The project is currently forecast to finish 4 days late because of a critical-path activity. The PM can crash that activity at an extra cost of $3,000 per day saved. What should the PM recommend?
- 中: 客戶合約中訂有違約賠償條款,要求廠商每延遲交付一天須支付 $5,000。專案目前因一項要徑活動的延誤,預測將延遲完工 4 天。專案經理可對該活動進行趕工(Crashing),每縮短一天需額外花費 $3,000。專案經理應建議何種做法?

**選項**

- (a) Accept the 4-day delay and pay the $20,000 penalty, since crashing has an additional cost / 接受 4 天延遲並支付 $20,000 違約金,因為趕工需要額外成本
- (b) Crash the critical-path activity for a total of $12,000, since it costs less than the $20,000 contractual penalty / 對該要徑活動進行趕工,總成本 $12,000,因為這比 $20,000 的合約違約金更划算 ✅ **正解**
- (c) Ignore the contract clause since it was negotiated by the procurement department, not the PM / 忽略此合約條款,因為它是由採購部門協商而非專案經理
- (d) Fast track the activity instead without evaluating cost, since fast tracking is always free / 改用快速跟進而不評估成本,因為快速跟進永遠不花錢

**詳解**

趕工成本 = $3,000 × 4 天 = $12,000;違約罰款 = $5,000 × 4 天 = $20,000。$12,000 低於 $20,000,故建議趕工可為專案節省 $8,000。此決策由合約中的違約賠償條款(外部法律/商業約束)所驅動,屬於商業環境考量下的時程壓縮成本效益分析,故答案為 (b)。忽略合約條款不符合專業責任;快速跟進雖通常不直接增加成本,但並非「永遠免費」,仍須評估返工風險。

---

### Q29. `sch-027` — 單選題

**題目 ID**: `sch-027`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which statement correctly describes a Milestone in a project schedule?
- 中: 下列關於專案時程中「里程碑(Milestone)」的敘述,何者正確?

**選項**

- (a) A milestone has zero duration and marks a significant point or event in the project / 里程碑工期為零,用以標記專案中的重要時間點或事件 ✅ **正解**
- (b) A milestone must always have a duration of at least one day / 里程碑必須至少有一天的工期
- (c) Milestones are only used in agile projects and never in predictive projects / 里程碑只用於敏捷專案,絕不會用於預測型專案
- (d) Milestones represent activities that require dedicated resources to execute / 里程碑代表需要投入專屬資源才能執行的活動

**詳解**

里程碑(Milestone)是時程中工期為零的重要時間點或事件標記,例如「設計核准」「階段關卡通過」等,本身不消耗資源、不代表實際工作,故答案為 (a)。里程碑清單(Milestone List)是發展時程過程的重要參考,在預測型與敏捷專案中皆會使用(敏捷專案常用來標記發布或關鍵檢核點)。

---

### Q30. `sch-028` — 多選題

**題目 ID**: `sch-028`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly distinguish Crashing from Fast Tracking? Select two.
- 中: 下列哪兩項敘述能正確區分趕工(Crashing)與快速跟進(Fast Tracking)?請選擇兩項。

**選項**

- (a) Crashing always adds cost, because it involves adding resources to critical-path activities / 趕工一定會增加成本,因為它需要在要徑活動上投入額外資源 ✅ **正解**
- (b) Fast tracking overlaps activities that were originally sequential, which may increase the risk of rework / 快速跟進讓原本循序的活動重疊執行,可能提高返工風險 ✅ **正解**
- (c) Fast tracking always reduces the overall project cost / 快速跟進一定會降低專案總成本
- (d) Crashing changes the logical sequence of activities so that they run in parallel / 趕工會改變活動的邏輯順序,使其變成並行執行
- (e) Both techniques guarantee a shorter schedule without any added risk or cost / 這兩種技術都能保證縮短時程而不增加任何風險或成本

**詳解**

趕工(Crashing)透過加派資源(如加班費、額外人力)縮短要徑工期,一定會增加成本,故 (a) 正確。快速跟進(Fast Tracking)讓原本循序的活動改為並行執行,不一定增加成本,但會提高協調困難與返工風險,故 (b) 正確。(c) 錯誤,快速跟進不一定降低成本;(d) 描述的其實是快速跟進而非趕工;(e) 錯誤,兩種技術都有其代價,並非毫無風險或成本。

---

### Q31. `sch-029` — 多選題

**題目 ID**: `sch-029`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements about precedence relationships (SS, FF, SF) are correct? Select two.
- 中: 關於邏輯關係(SS、FF、SF)的敘述,下列哪兩項正確?請選擇兩項。

**選項**

- (a) In a Start-to-Start (SS) relationship, the successor activity cannot start until the predecessor activity has started / 在開始到開始(SS)關係中,後續活動必須等前置活動開始後才能開始 ✅ **正解**
- (b) In a Finish-to-Finish (FF) relationship, the successor activity cannot finish until the predecessor activity has finished / 在完成到完成(FF)關係中,後續活動必須等前置活動完成後才能完成 ✅ **正解**
- (c) Start-to-Finish (SF) is the most commonly used relationship type in construction scheduling / 開始到完成(SF)是營建排程中最常使用的關係類型
- (d) Finish-to-Start (FS) requires the successor activity to start before the predecessor activity finishes / 完成到開始(FS)要求後續活動在前置活動完成之前就開始
- (e) SS and FF relationships can never be applied to the same pair of activities at the same time / SS 與 FF 關係絕對不能同時套用在同一對活動上

**詳解**

SS(開始到開始)要求後續活動的開始受前置活動開始的約束,故 (a) 正確;FF(完成到完成)要求後續活動的完成受前置活動完成的約束,故 (b) 正確。(c) 錯誤,SF 是四種關係中最少見的一種,並非最常用;(d) 描述錯誤,FS 是「前置活動完成後,後續活動才能開始」,而非之前;(e) 錯誤,SS 與 FF 可以同時套用在同一對活動上(即活動需同時重疊開始又同步結束),用來表示兩活動幾乎全程平行進行。

---

### Q32. `sch-030` — 多選題

**題目 ID**: `sch-030`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: During Iteration (Sprint) Planning, which two practices best reflect a healthy, self-organizing agile team? Select two.
- 中: 在迭代(衝刺)規劃(Iteration/Sprint Planning)過程中,下列哪兩項作法最能體現健康、自組織的敏捷團隊?請選擇兩項。

**選項**

- (a) The team collaboratively selects and commits to backlog items they believe they can complete within the iteration, based on their historical velocity / 團隊依據過往的產出速度(Velocity),共同選擇並承諾在本次迭代內可完成的待辦項目 ✅ **正解**
- (b) The team members who will do the work estimate and commit to it together, rather than having a single manager assign the commitment / 由實際執行工作的團隊成員共同估算並承諾工作量,而非由單一經理指派承諾 ✅ **正解**
- (c) The iteration length should be changed every sprint depending on how much work is in the backlog / 迭代長度應依待辦清單的工作量,每個衝刺都隨意更動
- (d) Once iteration planning is finalized, the team must never discuss or clarify scope again until the iteration review / 迭代規劃一旦定案,團隊在迭代審查前絕不能再討論或釐清範疇
- (e) The Scrum Master should override the team's estimate to guarantee a fixed number of items is completed every iteration, regardless of team input / Scrum Master 應凌駕團隊估算,不顧團隊意見,強制保證每次迭代都完成固定數量的項目

**詳解**

自組織團隊的核心精神是由實際執行工作的人共同估算與承諾工作量,並依據穩定的產出速度做出合理承諾,故 (a)(b) 正確。(c) 錯誤,迭代長度應維持固定時間箱(Timebox)以利速度可預測,不應隨意變動;(d) 過於絕對,團隊仍可在迭代中澄清細節,只是應避免任意變更範疇;(e) 違反自組織團隊與賦權團隊(Build Empowered Teams)的原則,故皆非正確答案。

---

### Q33. `sch-031` — 多選題

**題目 ID**: `sch-031`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly describe the Schedule Management Plan? Select two.
- 中: 關於時程管理計畫(Schedule Management Plan),下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) It defines the scheduling methodology and tools to be used, such as the Critical Path Method / 它定義將使用的排程方法論與工具,例如要徑法(CPM) ✅ **正解**
- (b) It establishes the level of accuracy and units of measure for duration estimates / 它訂定工期估算的準確度與衡量單位 ✅ **正解**
- (c) It contains the actual start and finish dates of every activity once work begins / 它記載工作開始後每項活動的實際開始與完成日期
- (d) It is created only after the project's schedule baseline has already been approved / 它只能在專案時程基準已核准之後才能制定
- (e) It replaces the need for creating a Work Breakdown Structure / 它可以取代建立工作分解結構(WBS)的需要

**詳解**

時程管理計畫(Schedule Management Plan)是規劃階段產出的子計畫,定義排程方法論、工具、工期估算的準確度與衡量單位、控制門檻等規則,故 (a)(b) 正確。(c) 描述的是實際執行後的時程資料而非計畫本身;(d) 錯誤,時程管理計畫是在發展時程、產出基準「之前」就先制定,用以指導後續排程工作;(e) 錯誤,時程管理計畫與 WBS 是不同的規劃產出,不能互相取代。

---

### Q34. `sch-032` — 拖拉配對題

**題目 ID**: `sch-032`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each of the 4 Precedence Diagramming Method (PDM) relationship types to the description that best fits it.
- 中: 請將下列 4 種前導圖示法(PDM)邏輯關係拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Finish-to-Start (FS) / 完成到開始(FS)
- p2: Start-to-Start (SS) / 開始到開始(SS)
- p3: Finish-to-Finish (FF) / 完成到完成(FF)
- p4: Start-to-Finish (SF) / 開始到完成(SF)

**選項池(拖曳目標)**

- c1: The predecessor activity must finish before the successor activity can start; this is the most commonly used relationship / 前置活動必須完成,後續活動才能開始;這是最常用的關係類型
- c2: The predecessor activity must start before the successor activity can start / 前置活動必須開始,後續活動才能開始
- c3: The predecessor activity must finish before the successor activity can finish / 前置活動必須完成,後續活動才能完成
- c4: The predecessor activity must start before the successor activity can finish; this is the least commonly used relationship / 前置活動必須開始,後續活動才能完成;這是最少使用的關係類型

**✅ 正確配對**

- p1 → c1: Finish-to-Start (FS) → The predecessor activity must finish before the successor activity can start; this is the most commonly used relationship（完成到開始(FS) → 前置活動必須完成,後續活動才能開始;這是最常用的關係類型）
- p2 → c2: Start-to-Start (SS) → The predecessor activity must start before the successor activity can start（開始到開始(SS) → 前置活動必須開始,後續活動才能開始）
- p3 → c3: Finish-to-Finish (FF) → The predecessor activity must finish before the successor activity can finish（完成到完成(FF) → 前置活動必須完成,後續活動才能完成）
- p4 → c4: Start-to-Finish (SF) → The predecessor activity must start before the successor activity can finish; this is the least commonly used relationship（開始到完成(SF) → 前置活動必須開始,後續活動才能完成;這是最少使用的關係類型）

**詳解**

PDM 四種邏輯關係中,FS(完成到開始)最常見,如「地基完成才能蓋牆」;SS(開始到開始)與 FF(完成到完成)常用於需要重疊或同步收尾的活動;SF(開始到完成)最少見,常見於「即時生產(JIT)」情境,如新班次開始後舊班次才結束交接。

---

### Q35. `sch-033` — 拖拉配對題

**題目 ID**: `sch-033`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each schedule technique to the description that best fits it.
- 中: 請將下列時程相關技術拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Crashing / 趕工(Crashing)
- p2: Fast Tracking / 快速跟進(Fast Tracking)
- p3: Rolling Wave Planning / 滾動式規劃(Rolling Wave Planning)
- p4: Progressive Elaboration / 漸進明細化(Progressive Elaboration)

**選項池(拖曳目標)**

- c1: Adding resources to critical-path activities to shorten the schedule, typically increasing cost / 在要徑活動上投入更多資源以縮短工期,通常會增加成本
- c2: Performing activities that were originally sequential in parallel, increasing the risk of rework / 將原本循序的活動改為並行執行,提高返工風險
- c3: Planning near-term work in detail while planning future work at a higher level, refining it as it approaches / 對近期工作詳細規劃,遠期工作則以較高層次規劃,待接近時再逐步細化
- c4: Continuously improving and detailing a plan as more information and more accurate estimates become available throughout the project / 隨著專案進展取得更多資訊與更準確的估算,持續改善並細化計畫

**✅ 正確配對**

- p1 → c1: Crashing → Adding resources to critical-path activities to shorten the schedule, typically increasing cost（趕工(Crashing) → 在要徑活動上投入更多資源以縮短工期,通常會增加成本）
- p2 → c2: Fast Tracking → Performing activities that were originally sequential in parallel, increasing the risk of rework（快速跟進(Fast Tracking) → 將原本循序的活動改為並行執行,提高返工風險）
- p3 → c3: Rolling Wave Planning → Planning near-term work in detail while planning future work at a higher level, refining it as it approaches（滾動式規劃(Rolling Wave Planning) → 對近期工作詳細規劃,遠期工作則以較高層次規劃,待接近時再逐步細化）
- p4 → c4: Progressive Elaboration → Continuously improving and detailing a plan as more information and more accurate estimates become available throughout the project（漸進明細化(Progressive Elaboration) → 隨著專案進展取得更多資訊與更準確的估算,持續改善並細化計畫）

**詳解**

Crashing 與 Fast Tracking 是兩種時程壓縮技術,分別以「加資源增成本」與「並行增風險」為代價縮短工期。Rolling Wave Planning(滾動式規劃)是漸進明細化(Progressive Elaboration)這個更廣泛概念在時程規劃上的具體應用:滾動式規劃專指「近細遠粗、逐步展開」的規劃節奏,而漸進明細化是貫穿整個專案生命週期、隨資訊增加而持續精煉計畫的通用原則,兩者常被混淆,需注意範圍大小的差異。

---

### Q36. `sch-034` — 拖拉配對題

**題目 ID**: `sch-034`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each of the 4 schedule terms to the description that best fits it.
- 中: 請將下列 4 個時程相關名詞拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Resource Leveling / 資源撫平(Resource Leveling)
- p2: Resource Smoothing / 資源平準(Resource Smoothing)
- p3: Schedule Compression / 時程壓縮(Schedule Compression)
- p4: Schedule Network Analysis / 時程網路分析(Schedule Network Analysis)

**選項池(拖曳目標)**

- c1: Adjusts activity start/finish dates to balance resource demand against limited supply; this may change the critical path and often extends the schedule / 調整活動的開始與完成日期,以平衡資源需求與有限供給;可能改變要徑並經常延長工期
- c2: Adjusts activities only within their existing float, so the critical path is not changed and the project end date is not delayed / 僅在活動現有的浮時範圍內調整,不改變要徑、也不延遲專案完工日
- c3: Shortens the schedule duration without reducing the project scope, typically through techniques such as crashing and fast tracking / 在不縮減專案範疇的前提下縮短時程,通常透過趕工與快速跟進等技術達成
- c4: A general technique used to generate the project schedule model, such as the Critical Path Method or what-if scenario analysis / 用於產出專案時程模型的通用技術,例如要徑法或情境模擬分析

**✅ 正確配對**

- p1 → c1: Resource Leveling → Adjusts activity start/finish dates to balance resource demand against limited supply; this may change the critical path and often extends the schedule（資源撫平(Resource Leveling) → 調整活動的開始與完成日期,以平衡資源需求與有限供給;可能改變要徑並經常延長工期）
- p2 → c2: Resource Smoothing → Adjusts activities only within their existing float, so the critical path is not changed and the project end date is not delayed（資源平準(Resource Smoothing) → 僅在活動現有的浮時範圍內調整,不改變要徑、也不延遲專案完工日）
- p3 → c3: Schedule Compression → Shortens the schedule duration without reducing the project scope, typically through techniques such as crashing and fast tracking（時程壓縮(Schedule Compression) → 在不縮減專案範疇的前提下縮短時程,通常透過趕工與快速跟進等技術達成）
- p4 → c4: Schedule Network Analysis → A general technique used to generate the project schedule model, such as the Critical Path Method or what-if scenario analysis（時程網路分析(Schedule Network Analysis) → 用於產出專案時程模型的通用技術,例如要徑法或情境模擬分析）

**詳解**

資源撫平(Resource Leveling)為解決真正的資源超額分配問題,可能犧牲工期、改變要徑;資源平準(Resource Smoothing)則保守地僅在浮時範圍內微調,確保完工日不受影響但不一定能完全解決資源衝突。時程壓縮(Crashing/Fast Tracking 的統稱)與時程網路分析(CPM 等技術的統稱)則是更上層的分類概念,考題常要求辨識這些名詞彼此的從屬關係。

---

### Q37. `sch-035` — 下拉選單題

**題目 ID**: `sch-035`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: Two engineers, Alice and Bob, are both scheduled to work full-time on Task X and Task Y during the same week, but the team has only one engineer available with that specialty. If the PM delays Task Y's start until Alice becomes free — extending the project's finish date — this technique is called {{blank1}}. If instead the PM only shifts Task Y within its existing float so that the project finish date is unchanged, this technique is called {{blank2}}.
- 中: 工程師 Alice 與 Bob 原本都被排定在同一週全職執行 Task X 與 Task Y,但團隊在該專業領域只有一位工程師可用。若專案經理將 Task Y 的開始時間延後,直到 Alice 有空為止,導致專案完工日延長,這種技術稱為 {{blank1}};若專案經理僅在 Task Y 現有的浮時範圍內調整、不影響專案完工日,這種技術稱為 {{blank2}}。

**blank1**

- (a) Resource Leveling / 資源撫平(Resource Leveling) ✅ **正解**
- (b) Resource Smoothing / 資源平準(Resource Smoothing)

**blank2**

- (a) Resource Leveling / 資源撫平(Resource Leveling)
- (b) Resource Smoothing / 資源平準(Resource Smoothing) ✅ **正解**


**詳解**

資源撫平(Resource Leveling)是為解決真正的資源衝突(兩人共搶同一位工程師)而調整時程,不受限於浮時,可能延長專案完工日,對應 blank1。資源平準(Resource Smoothing)則只在活動的既有浮時範圍內微調,確保完工日不變,對應 blank2。本題情境涉及團隊成員間的資源分配協調與溝通,故 ECO domain 判斷為 People(此為較細緻的判斷,若著重技術面亦可視為 Process,屬於可能有爭議的分類)。

---

### Q38. `sch-036` — 下拉選單題

**題目 ID**: `sch-036`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: Activity K has an Early Start (ES) of Day 5 and a duration of 6 days. Its Late Start (LS) is Day 9. The Early Finish (EF) of Activity K is Day {{blank1}}, and its Total Float is {{blank2}} days.
- 中: 活動 K 的最早開始(ES)為第 5 天,工期為 6 天。其最晚開始(LS)為第 9 天。活動 K 的最早完成(EF)為第 {{blank1}} 天,其總浮時(Total Float)為 {{blank2}} 天。

**blank1**

- (a) 10 / 10
- (b) 11 / 11 ✅ **正解**
- (c) 12 / 12

**blank2**

- (a) 3 / 3
- (b) 4 / 4 ✅ **正解**
- (c) 5 / 5


**詳解**

最早完成(EF)= ES + 工期 = 5 + 6 = 11 天。總浮時(Total Float)= LS − ES = 9 − 5 = 4 天;若改用 LF−EF 驗算,LF = LS + 工期 = 9 + 6 = 15,LF − EF = 15 − 11 = 4 天,結果一致,可互相驗證答案正確性。

---

### Q39. `sch-037` — 下拉選單題

**題目 ID**: `sch-037`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: A pharmaceutical project must submit manufacturing documentation to a regulatory agency for review. The agency requires a mandatory 10-business-day waiting period after submission before production can begin — a compliance requirement the project team cannot skip or shorten. This represents a {{blank1}} of 10 days. Separately, the packaging design team is allowed to begin drafting labels 3 days before the formulation is finalized, since label drafts only need the preliminary ingredient list. This represents a {{blank2}} of 3 days.
- 中: 某製藥專案須向監管機關提交製造文件審查。該機關要求提交後須強制等待 10 個工作天才能開始生產——這是團隊無法略過或縮短的法規遵循要求。這代表 10 天的 {{blank1}};另外,包裝設計團隊被允許在配方定案前 3 天就開始草擬標籤,因為標籤草稿只需要初步的成分清單。這代表 3 天的 {{blank2}}。

**blank1**

- (a) Lag / 落後量(Lag) ✅ **正解**
- (b) Lead / 提前量(Lead)

**blank2**

- (a) Lag / 落後量(Lag)
- (b) Lead / 提前量(Lead) ✅ **正解**


**詳解**

強制的法規審查等待期屬於刻意延遲後續活動開始的等待時間,是 Lag(落後量),對應 blank1;包裝團隊提前開始草擬標籤、與前置活動重疊,則是 Lead(提前量),對應 blank2。此情境的等待期由外部監管機關的法規遵循要求所驅動,屬於商業環境考量下的時程限制,故 ECO domain 判斷為 BusinessEnvironment。

---

### Q40. `sch-038` — 點擊熱區題

**題目 ID**: `sch-038`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which merge into Task D, followed in series by Task E. Task A takes 3 days, Task B takes 5 days, Task C takes 9 days, Task D takes 4 days, and Task E takes 6 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).
- 中: 下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者匯流至 Task D,D 之後接續串行的 Task E。Task A 需時 3 天、Task B 需時 5 天、Task C 需時 9 天、Task D 需時 4 天、Task E 需時 6 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task A (3 days) / Task A(3天) [x=5,y=45,w=16,h=18]
- (n2) Task B (5 days) / Task B(5天) ✅ **正解** [x=25,y=15,w=16,h=18]
- (n3) Task C (9 days) / Task C(9天) [x=25,y=75,w=16,h=18]
- (n4) Task D (4 days) / Task D(4天) [x=48,y=45,w=16,h=18]
- (n5) Task E (6 days) / Task E(6天) [x=72,y=45,w=16,h=18]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n2 → n4
- n3 → n4
- n4 → n5

**詳解**

兩條並行路徑在 D 匯流後,共同接續 E。路徑一 A→B→D→E = 3+5+4+6 = 18 天;路徑二 A→C→D→E = 3+9+4+6 = 22 天,較長,為要徑。因此 A、C、D、E 總浮時皆為 0,只有 B 不在要徑上,總浮時 = 22−18 = 4 天。由於 D、E 是兩條路徑共同經過的後續節點,其浮時只取決於前面並行區段(B 與 C)的差距,故 B 的浮時計算方式與只有 A-B(C)-D 三段時相同,不受後面串接的 E 影響。

---

### Q41. `sch-039` — 點擊熱區題

**題目 ID**: `sch-039`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The four cards below list items related to Sequence Activities. Click the item that is an OUTPUT of the Sequence Activities process (the other three are inputs).
- 中: 下方四張卡片列出與排序活動(Sequence Activities)相關的項目。請點選「排序活動」流程的「輸出(Output)」項目(其餘三項皆為輸入)。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Activity List (input) / 活動清單(輸入) [x=10,y=15,w=35,h=25]
- (n2) Project Schedule Network Diagrams (output) / 專案時程網路圖(輸出) ✅ **正解** [x=55,y=15,w=35,h=25]
- (n3) Milestone List (input) / 里程碑清單(輸入) [x=10,y=60,w=35,h=25]
- (n4) Enterprise Environmental Factors (input) / 事業環境因素(輸入) [x=55,y=60,w=35,h=25]

**詳解**

排序活動(Sequence Activities)以活動清單、里程碑清單、事業環境因素等作為輸入,分析活動之間的邏輯關係(依賴類型、Lead/Lag)後,產出專案時程網路圖(Project Schedule Network Diagrams),作為後續發展時程(Develop Schedule)的重要輸入。

---

### Q42. `sch-040` — 點擊熱區題

**題目 ID**: `sch-040`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network with Kickoff followed by three parallel tasks — Design, Development, and Test Environment Setup — which all merge into Integration. Kickoff takes 1 day, Design takes 5 days, Development takes 12 days, Test Environment Setup takes 8 days, and Integration takes 2 days. Among the three parallel tasks, click the one that lies on the Critical Path (i.e., has zero Total Float).
- 中: 下圖網路中,Kickoff 之後分為三條並行任務——Design、Development、Test Environment Setup,三者完成後皆匯流至 Integration。Kickoff 需時 1 天、Design 需時 5 天、Development 需時 12 天、Test Environment Setup 需時 8 天、Integration 需時 2 天。在三條並行任務中,請點選「位於要徑(Critical Path)上」、也就是總浮時為零的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Kickoff (1 day) / Kickoff(1天) [x=5,y=40,w=16,h=20]
- (n2) Design (5 days) / Design(5天) [x=28,y=8,w=16,h=20]
- (n3) Development (12 days) / Development(12天) ✅ **正解** [x=28,y=40,w=16,h=20]
- (n4) Test Environment Setup (8 days) / Test Environment Setup(8天) [x=28,y=75,w=16,h=20]
- (n5) Integration (2 days) / Integration(2天) [x=58,y=40,w=16,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n1 → n4
- n2 → n5
- n3 → n5
- n4 → n5

**詳解**

三條路徑:Kickoff→Design→Integration = 1+5+2 = 8 天;Kickoff→Development→Integration = 1+12+2 = 15 天;Kickoff→Test Environment Setup→Integration = 1+8+2 = 11 天。三者中以 Development 所在路徑最長(15 天),為要徑,故 Development 總浮時為 0,是三條並行任務中唯一位於要徑上的任務。Design 的總浮時 = 15−8 = 7 天;Test Environment Setup 的總浮時 = 15−11 = 4 天。

---

### Q43. `sch-041` — 點擊熱區題

**題目 ID**: `sch-041`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: In the network below, Task X (Architecture Design, 4 days) and Task Y (Database Review, 3 days) both start right after the project Start milestone and merge into Integration (5 days). Purely by logic, Task X is on the critical path (9 days total) and Task Y has 1 day of float. However, both tasks require the project's sole Solutions Architect, who can only work on one at a time; the team decides the Architect will complete Task X first, then Task Y — adding a resource-driven dependency from X to Y. Click the task whose resource-leveled delay pushes the project's new critical path to 12 days.
- 中: 下圖網路中,Task X(架構設計,4 天)與 Task Y(資料庫審查,3 天)在專案 Start 里程碑後都能立即開始,並匯流至 Integration(5 天)。若純粹依邏輯關係計算,Task X 位於要徑上(總計 9 天),Task Y 則有 1 天浮時。然而兩項任務都需要專案唯一的解決方案架構師(Solutions Architect),此人一次只能執行一項任務;團隊決定架構師先完成 Task X 再進行 Task Y——這在網路圖中新增了一條由 X 指向 Y 的資源驅動依賴。請點選「因資源撫平而延後開始、使專案新要徑變為 12 天」的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Start (0 days) / Start(0天) [x=5,y=45,w=14,h=18]
- (n2) Task X: Architecture Design (4 days) / Task X:架構設計(4天) [x=28,y=15,w=18,h=18]
- (n3) Task Y: Database Review (3 days) / Task Y:資料庫審查(3天) ✅ **正解** [x=28,y=75,w=18,h=18]
- (n4) Integration (5 days) / Integration(5天) [x=58,y=45,w=18,h=18]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n2 → n4
- n3 → n4
- n2 → n3

**詳解**

僅依邏輯關係計算:Start→X→Integration = 0+4+5 = 9 天(要徑);Start→Y→Integration = 0+3+5 = 8 天,Y 的總浮時 = 9−8 = 1 天。但因 X 與 Y 共用唯一的架構師,資源撫平(Resource Leveling)強制新增 X→Y 的相依性,使 Y 的最早開始時間從第 0 天推遲到 X 完成的第 4 天:Y 的 EF = 4+3 = 7 天,Integration 的 ES 變為 max(X 的 EF=4, Y 的 EF=7) = 7 天,EF = 7+5 = 12 天。新要徑變為 Start→X→Y→Integration = 0+4+3+5 = 12 天,比原本純邏輯要徑的 9 天多出 3 天。造成此延長的關鍵正是 Task Y 因資源撫平而被迫延後開始,故答案為 Task Y。此題示範了資源限制如何在網路圖邏輯之外,額外改變實際要徑與專案工期。

---

### Q44. `sch-042` — 單選題

**題目 ID**: `sch-042`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A project team represents each activity as an arrow, with nodes representing the start and finish points of activities, and can only model Finish-to-Start relationships (using dummy activities to show complex dependencies). What network diagramming method is being used?
- 中: 某專案團隊將每個活動畫成一支箭頭,節點代表活動的開始與結束時間點,且只能表達完成到開始(FS)的關係(需用虛工作 Dummy Activity 來表示複雜的相依性)。這是使用哪一種網路圖示法?

**選項**

- (a) Precedence Diagramming Method (PDM) / 前導圖示法(PDM)
- (b) Arrow Diagramming Method (ADM) / 箭線圖示法(ADM) ✅ **正解**
- (c) Critical Chain Method / 要徑鏈法
- (d) Bar (Gantt) Chart / 甘特圖(Bar Chart)

**詳解**

箭線圖示法(Arrow Diagramming Method, ADM)以「箭頭」代表活動、節點代表事件(開始/結束時點),只能表達 FS 邏輯關係,遇到較複雜的相依關係須額外繪製不消耗時間與資源的「虛工作(Dummy Activity)」來維持圖形正確性,故答案為 (b)。現行專案管理軟體幾乎都改用前導圖示法(PDM),以節點代表活動本身,並可直接表達 FS/SS/FF/SF 四種關係,不需要虛工作。

---

### Q45. `sch-043` — 多選題

**題目 ID**: `sch-043`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly distinguish the Arrow Diagramming Method (ADM) from the Precedence Diagramming Method (PDM)? Select two.
- 中: 下列哪兩項敘述能正確區分箭線圖示法(ADM)與前導圖示法(PDM)?請選擇兩項。

**選項**

- (a) PDM represents activities on nodes and can directly show all four logical relationship types (FS, SS, FF, SF) / PDM 以節點代表活動,可直接表達 FS、SS、FF、SF 四種邏輯關係 ✅ **正解**
- (b) ADM can only represent Finish-to-Start relationships and sometimes requires dummy activities to preserve correct logic / ADM 只能表達完成到開始(FS)關係,有時需要虛工作(Dummy Activity)以維持邏輯正確性 ✅ **正解**
- (c) PDM is an older technique that has been fully replaced by ADM in modern scheduling software / PDM 是較舊的技術,已被 ADM 在現代排程軟體中完全取代
- (d) ADM represents activities on nodes, while PDM represents activities on arrows / ADM 以節點代表活動,PDM 以箭頭代表活動
- (e) Dummy activities in ADM consume both time and resources just like real activities / ADM 中的虛工作(Dummy Activity)跟真實活動一樣會消耗時間與資源

**詳解**

PDM(前導圖示法)以節點代表活動,可直接表達 FS/SS/FF/SF 四種關係,是現行專案管理軟體的主流做法,故 (a) 正確。ADM(箭線圖示法)以箭頭代表活動、只能表達 FS 關係,遇複雜相依需靠不消耗時間與資源的虛工作維持圖形邏輯,故 (b) 正確。(c) 描述方向相反,是 PDM 取代 ADM 而非反之;(d) 描述的活動/節點對應方式剛好相反;(e) 錯誤,虛工作純粹是邏輯輔助線,工期為零、不消耗資源。

---

### Q46. `sch-044` — 下拉選單題

**題目 ID**: `sch-044`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: The team estimates that, since a very similar UI module in a past project took 10 days to build, this new UI module will also take about 10 days — this is an example of {{blank1}} estimating. Later, the team measures that a technical writer produces 2 pages of documentation per day on average, and uses this rate to calculate that 40 pages of documentation will take 20 days — this is an example of {{blank2}} estimating.
- 中: 團隊估算,由於過去某專案中一個非常相似的 UI 模組花了 10 天完成,因此這次的新 UI 模組也大約需要 10 天——這是 {{blank1}} 估算法的範例。之後,團隊量測到某技術文件撰寫人員平均每天可產出 2 頁文件,並用此速率計算出 40 頁文件需要 20 天——這是 {{blank2}} 估算法的範例。

**blank1**

- (a) Analogous / 類比(Analogous) ✅ **正解**
- (b) Parametric / 參數(Parametric)

**blank2**

- (a) Analogous / 類比(Analogous)
- (b) Parametric / 參數(Parametric) ✅ **正解**


**詳解**

類比估算(Analogous Estimating)直接借用過去相似活動或專案的實際數據作為估算基礎,速度快、成本低但精確度較低,故第一個情境屬於 blank1 = Analogous。參數估算(Parametric Estimating)則利用歷史資料與其他變數之間的統計關係(如「每頁 2 天」的產出率)以數學方式計算估算值,通常比類比估算更精確,故第二個情境屬於 blank2 = Parametric(40 頁 ÷ 每天 2 頁 = 20 天)。

---

### Q47. `sch-045` — 點擊熱區題

**題目 ID**: `sch-045`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The four cards below list items related to Define Activities. Click the item that is an OUTPUT of the Define Activities process (the other three are inputs).
- 中: 下方四張卡片列出與定義活動(Define Activities)相關的項目。請點選「定義活動」流程的「輸出(Output)」項目(其餘三項皆為輸入)。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Schedule Management Plan (input) / 時程管理計畫(輸入) [x=10,y=15,w=35,h=25]
- (n2) Scope Baseline (input) / 範疇基準(輸入) [x=55,y=15,w=35,h=25]
- (n3) Activity List (output) / 活動清單(輸出) ✅ **正解** [x=10,y=60,w=35,h=25]
- (n4) Enterprise Environmental Factors (input) / 事業環境因素(輸入) [x=55,y=60,w=35,h=25]

**詳解**

定義活動(Define Activities)以時程管理計畫、範疇基準(內含 WBS 與工作包)、事業環境因素等作為輸入,將工作包進一步分解為時程活動後,產出活動清單(Activity List)、活動屬性(Activity Attributes)與里程碑清單(Milestone List);本題所列輸出項目為活動清單,故答案為 (n3)。

---

### Q48. `sch-046` — 拖拉配對題

**題目 ID**: `sch-046`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each duration estimating technique to the description that best fits it.
- 中: 請將下列工期估算技術拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Analogous Estimating / 類比估算(Analogous Estimating)
- p2: Parametric Estimating / 參數估算(Parametric Estimating)
- p3: Bottom-up Estimating / 由下而上估算(Bottom-up Estimating)
- p4: Three-Point Estimating / 三點估算(Three-Point Estimating)

**選項池(拖曳目標)**

- c1: Uses actual duration data from a similar past activity or project as the basis for the new estimate; fast and low-cost but less precise / 直接使用過去相似活動或專案的實際工期資料作為新估算的基礎;速度快、成本低但精確度較低
- c2: Uses a statistical relationship between historical data and other variables (such as hours per unit) to calculate the estimate / 利用歷史資料與其他變數(如每單位所需工時)之間的統計關係來計算估算值
- c3: Estimates each individual activity or work package in detail, then aggregates (rolls up) the results into a total; more accurate but more time-consuming / 詳細估算每個個別活動或工作包,再將結果彙總(roll up)為總數;較精確但耗時較長
- c4: Uses optimistic, most likely, and pessimistic values to account for estimation uncertainty and risk / 使用樂觀值、最可能值、悲觀值來反映估算的不確定性與風險

**✅ 正確配對**

- p1 → c1: Analogous Estimating → Uses actual duration data from a similar past activity or project as the basis for the new estimate; fast and low-cost but less precise（類比估算(Analogous Estimating) → 直接使用過去相似活動或專案的實際工期資料作為新估算的基礎;速度快、成本低但精確度較低）
- p2 → c2: Parametric Estimating → Uses a statistical relationship between historical data and other variables (such as hours per unit) to calculate the estimate（參數估算(Parametric Estimating) → 利用歷史資料與其他變數(如每單位所需工時)之間的統計關係來計算估算值）
- p3 → c3: Bottom-up Estimating → Estimates each individual activity or work package in detail, then aggregates (rolls up) the results into a total; more accurate but more time-consuming（由下而上估算(Bottom-up Estimating) → 詳細估算每個個別活動或工作包,再將結果彙總(roll up)為總數;較精確但耗時較長）
- p4 → c4: Three-Point Estimating → Uses optimistic, most likely, and pessimistic values to account for estimation uncertainty and risk（三點估算(Three-Point Estimating) → 使用樂觀值、最可能值、悲觀值來反映估算的不確定性與風險）

**詳解**

四種常見工期估算技術中,類比估算最快速但最不精確;參數估算利用統計關係,精確度介於中間;由下而上估算最精確但最耗時;三點估算則專門用來反映估算的不確定性,可再搭配 Beta 或 Triangular 分佈計算預期工期與標準差。

---

### Q49. `sch-047` — 單選題

**題目 ID**: `sch-047`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Midway through execution, the project team updates the working schedule almost weekly to reflect actual progress and re-forecasted dates. When preparing the monthly performance report and calculating Schedule Variance, which version of the schedule should actual progress be compared against?
- 中: 專案執行到一半,團隊幾乎每週都會更新工作中的時程,以反映實際進度與重新預測的日期。在準備月度績效報告、計算時程變異(Schedule Variance)時,應將實際進度與哪一個版本的時程進行比較?

**選項**

- (a) The most recently updated working Project Schedule / 最近一次更新的工作專案時程
- (b) The approved Schedule Baseline / 已核准的時程基準(Schedule Baseline) ✅ **正解**
- (c) The initial draft schedule created before stakeholder review / 利害關係人審查前建立的初版草稿時程
- (d) Next month's forecasted schedule / 下個月的預測時程

**詳解**

時程基準(Schedule Baseline)是經正式核准、用來衡量實際績效的版本,一旦核准後除非透過正式變更管理程序,否則不會隨意更動;而專案時程(Project Schedule)則是持續更新、反映當前執行狀況的工作版本。計算時程變異等績效指標時,比較的對象應是基準而非最新的工作時程,否則會失去衡量偏差的意義,故答案為 (b)。

---

### Q50. `sch-048` — 多選題

**題目 ID**: `sch-048`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: A project status report shows SPI = 0.82 and CPI = 1.10 for the current period. Which two conclusions can correctly be drawn from these two indices? Select two.
- 中: 某專案績效報告顯示本期 SPI = 0.82、CPI = 1.10。從這兩個指標可以正確得出下列哪兩項結論?請選擇兩項。

**選項**

- (a) The project is currently behind schedule, since SPI is less than 1.0 / 專案目前落後進度,因為 SPI 小於 1.0 ✅ **正解**
- (b) The project is currently spending less than planned for the work completed, since CPI is greater than 1.0 / 專案目前花費低於已完成工作的計畫值,因為 CPI 大於 1.0 ✅ **正解**
- (c) The project is ahead of schedule and should reduce its pace to save cost / 專案進度超前,應放慢腳步以節省成本
- (d) The project is overspending its budget and must immediately freeze all hiring / 專案正在超支預算,必須立即凍結所有招募
- (e) These two indices alone are sufficient to conclude the root cause of the delay is a lack of skilled resources / 光憑這兩個指標就足以斷定延遲的根本原因是缺乏合格資源

**詳解**

SPI(時程績效指標)= EV/PV,小於 1.0 代表落後計畫進度,故 (a) 正確;CPI(成本績效指標)= EV/AC,大於 1.0 代表花費效率良好、低於預算,故 (b) 正確。此組合(SPI<1、CPI≥1)常見於「進度落後但成本控制良好」的情境,提示問題可能出在資源數量或排程安排,而非成本浪費——但 (e) 過度推論,兩個指標本身無法直接證明根本原因為資源不足,仍需進一步調查;(c)(d) 與數據意涵相反或過度反應,故皆非正確答案。

---

### Q51. `sch-049` — 單選題

**題目 ID**: `sch-049`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Activity Q currently has an Early Start (ES) of Day 15 and a duration of 7 days (Early Finish = Day 22). Due to a newly imposed contractual deadline, the Late Finish (LF) allowed for this activity is now only Day 20. What is Activity Q's Total Float, and what does the result imply?
- 中: 活動 Q 目前的最早開始(ES)為第 15 天,工期為 7 天(最早完成 EF = 第 22 天)。由於新加入的合約截止日限制,此活動現在允許的最晚完成(LF)只剩第 20 天。活動 Q 的總浮時(Total Float)為何?這個結果代表什麼意涵?

**選項**

- (a) Total Float = −2 days; the schedule is already behind what is needed to meet the new deadline, and compression is required / 總浮時 = −2 天;目前進度已落後於達成新截止日所需的進度,需要進行時程壓縮 ✅ **正解**
- (b) Total Float = 2 days; the activity is comfortably ahead of schedule / 總浮時 = 2 天;此活動進度綽綽有餘
- (c) Total Float = 0 days; the activity is exactly on the critical path with no issue / 總浮時 = 0 天;此活動剛好在要徑上,沒有問題
- (d) Total Float = 7 days; the activity has abundant slack / 總浮時 = 7 天;此活動有充裕的浮時

**詳解**

新的最晚開始(LS)= LF − 工期 = 20 − 7 = 13 天。總浮時 = LS − ES = 13 − 15 = −2 天。負浮時(Negative Float)代表依現有邏輯與工期,此活動最早完成的時間點已經晚於新截止日要求的最晚完成時間,意味著在不採取行動的情況下專案將無法如期完成,專案經理必須透過趕工(Crashing)或快速跟進(Fast Tracking)等時程壓縮技術來消除負浮時,故答案為 (a)。

---

### Q52. `sch-050` — 點擊熱區題

**題目 ID**: `sch-050`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The four cards below list items related to Estimate Activity Duration. Click the item that is an OUTPUT of the Estimate Activity Duration process (the other three are inputs).
- 中: 下方四張卡片列出與估算活動工期(Estimate Activity Duration)相關的項目。請點選「估算活動工期」流程的「輸出(Output)」項目(其餘三項皆為輸入)。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Activity List (input) / 活動清單(輸入) [x=10,y=15,w=35,h=25]
- (n2) Resource Requirements (input) / 資源需求(輸入) [x=55,y=15,w=35,h=25]
- (n3) Risk Register (input) / 風險登記冊(輸入) [x=10,y=60,w=35,h=25]
- (n4) Duration Estimates (output) / 工期估算(輸出) ✅ **正解** [x=55,y=60,w=35,h=25]

**詳解**

估算活動工期(Estimate Activity Duration)以活動清單、資源需求、風險登記冊等作為輸入,運用類比、參數、三點、由下而上等估算技術,產出各活動的工期估算(Duration Estimates)作為主要輸出,供後續發展時程(Develop Schedule)使用,故答案為 (n4)。

---

### Q53. `sch-051` — 下拉選單題

**題目 ID**: `sch-051`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: On the team's Kanban board, {{blank1}} measures the total elapsed time from when a work item is added to the backlog until it is completed, while {{blank2}} measures only the elapsed time from when work actually begins on the item until it is completed.
- 中: 在團隊的看板(Kanban Board)上,{{blank1}} 衡量的是從一項工作項目被加入待辦清單開始,到完成為止的總經過時間;而 {{blank2}} 僅衡量從該項目實際開始執行到完成為止的經過時間。

**blank1**

- (a) Lead Time / 前置時間(Lead Time) ✅ **正解**
- (b) Cycle Time / 週期時間(Cycle Time)

**blank2**

- (a) Lead Time / 前置時間(Lead Time)
- (b) Cycle Time / 週期時間(Cycle Time) ✅ **正解**


**詳解**

前置時間(Lead Time)衡量從需求進入待辦清單到最終完成的完整經過時間,反映客戶實際感受到的等待時間;週期時間(Cycle Time)則只計算從團隊實際開始動工到完成的區間,反映團隊執行效率。兩者常在看板方法(Kanban)的流動效率分析中被比較,縮短週期時間通常有助於縮短前置時間,但兩者定義的起點不同,容易混淆。

---

### Q54. `sch-052` — 多選題

**題目 ID**: `sch-052`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Which two statements correctly describe the effect of Work-in-Progress (WIP) limits on a Kanban team's flow? Select two.
- 中: 關於在製品限制(WIP Limit)對看板(Kanban)團隊工作流的影響,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) WIP limits cap the number of items allowed in a workflow stage at one time, which helps make bottlenecks visible / WIP 限制設定同一時間某工作階段可容許的項目數量上限,有助於讓瓶頸現形 ✅ **正解**
- (b) Lowering WIP limits typically reduces multitasking and context switching, which tends to shorten cycle time / 降低 WIP 限制通常能減少多工切換,進而縮短週期時間 ✅ **正解**
- (c) WIP limits guarantee the team's velocity will double every iteration / WIP 限制能保證團隊的產出速度每次迭代都會加倍
- (d) Once set at project kickoff, WIP limits must never be adjusted for the rest of the project / WIP 限制一旦在專案啟動時設定,專案剩餘期間絕不能再調整
- (e) Continuously increasing WIP limits without limit always improves flow efficiency / 無限制地持續提高 WIP 限制,永遠能改善流動效率

**詳解**

WIP 限制透過限制每個工作階段同時進行的項目數量,迫使團隊在項目卡關時先解決瓶頸而非持續塞入新工作,使瓶頸更容易被發現,故 (a) 正確;減少同時進行的項目也能降低多工切換造成的效率損失,通常有助於縮短週期時間,故 (b) 正確。(c) 過度誇大 WIP 限制的效果;(d) 錯誤,WIP 限制應依團隊實際流動狀況持續檢視調整;(e) 錯誤,WIP 限制過高會失去限制在製品、及早暴露瓶頸的意義,反而可能降低流動效率。

---

### Q55. `sch-053` — 單選題

**題目 ID**: `sch-053`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Based on the last several iterations, a Scrum team's velocity has ranged between 18 and 24 story points per 2-week sprint. The remaining product backlog is estimated at 150 story points. When communicating a release forecast to stakeholders, which sprint range should the team present (rounding each case up to a whole sprint)?
- 中: 根據過去幾次迭代,某 Scrum 團隊每個 2 週衝刺的產出速度(Velocity)介於 18 到 24 個故事點之間。剩餘產品待辦清單估算為 150 個故事點。在向利害關係人溝通發布預測時,團隊應提出哪一個衝刺數區間(各情境皆無條件進位為整數衝刺)?

**選項**

- (a) 5 to 7 sprints / 5 到 7 個衝刺
- (b) 6 to 8 sprints / 6 到 8 個衝刺
- (c) 7 to 9 sprints / 7 到 9 個衝刺 ✅ **正解**
- (d) 8 to 10 sprints / 8 到 10 個衝刺

**詳解**

最佳情境(以較高速度 24 點計算):150 ÷ 24 = 6.25,無條件進位為 7 個衝刺。最差情境(以較低速度 18 點計算):150 ÷ 18 ≈ 8.33,無條件進位為 9 個衝刺。因此應向利害關係人溝通「約 7 到 9 個衝刺」的預測區間,而非單一精確數字,以誠實反映速度本身存在的變異性,故答案為 (c)。

---

### Q56. `sch-054` — 拖拉配對題

**題目 ID**: `sch-054`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Drag and match each agile schedule-related artifact to the description that best fits it.
- 中: 請將下列敏捷時程相關產出物拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Burndown Chart / 燃盡圖(Burndown Chart)
- p2: Burnup Chart / 燃起圖(Burnup Chart)
- p3: Release Plan / 發布計畫(Release Plan)
- p4: Iteration (Sprint) Backlog / 迭代(衝刺)待辦清單(Iteration Backlog)

**選項池(拖曳目標)**

- c1: Shows the amount of remaining work trending downward over the course of an iteration or release / 呈現迭代或發布期間內,剩餘工作量隨時間逐漸減少的趨勢
- c2: Shows completed work trending upward against the total scope line, making scope changes clearly visible / 呈現已完成工作量隨時間上升的趨勢,並對照總範疇線,讓範疇變動清楚可見
- c3: A higher-level roadmap mapping features or epics to future iterations or releases / 將功能或史詩(Epic)對應到未來迭代或發布的高層級路徑圖
- c4: The set of backlog items and tasks the team has committed to complete within the current iteration / 團隊承諾在本次迭代內完成的待辦項目與任務集合

**✅ 正確配對**

- p1 → c1: Burndown Chart → Shows the amount of remaining work trending downward over the course of an iteration or release（燃盡圖(Burndown Chart) → 呈現迭代或發布期間內,剩餘工作量隨時間逐漸減少的趨勢）
- p2 → c2: Burnup Chart → Shows completed work trending upward against the total scope line, making scope changes clearly visible（燃起圖(Burnup Chart) → 呈現已完成工作量隨時間上升的趨勢,並對照總範疇線,讓範疇變動清楚可見）
- p3 → c3: Release Plan → A higher-level roadmap mapping features or epics to future iterations or releases（發布計畫(Release Plan) → 將功能或史詩(Epic)對應到未來迭代或發布的高層級路徑圖）
- p4 → c4: Iteration (Sprint) Backlog → The set of backlog items and tasks the team has committed to complete within the current iteration（迭代(衝刺)待辦清單(Iteration Backlog) → 團隊承諾在本次迭代內完成的待辦項目與任務集合）

**詳解**

燃盡圖與燃起圖都是敏捷團隊常用的時程視覺化工具:燃盡圖著重呈現「剩餘工作」的下降趨勢,燃起圖則同時呈現「已完成工作」與「總範疇線」,能清楚呈現範疇變動;發布計畫是較高層次、跨多個迭代的路徑圖,而迭代待辦清單則是單一迭代內的具體工作承諾,四者分屬不同層級的時程溝通工具。

---

### Q57. `sch-055` — 單選題

**題目 ID**: `sch-055`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Midway through a sprint, the Product Owner adds a significant amount of new scope to the iteration. The team wants a chart that clearly shows both the work completed so far AND any increase in total scope, so stakeholders can see why progress appears slower without assuming the team underperformed. Which chart should the team use?
- 中: 衝刺進行到一半,產品負責人(PO)為本次迭代新增了大量範疇。團隊希望使用一種圖表,能同時清楚呈現「已完成的工作量」以及「總範疇的增加」,讓利害關係人能理解進度看似變慢的原因,而不會誤以為是團隊表現不佳。團隊應使用哪一種圖表?

**選項**

- (a) Burndown Chart / 燃盡圖(Burndown Chart)
- (b) Burnup Chart / 燃起圖(Burnup Chart) ✅ **正解**
- (c) Resource Histogram / 資源直方圖(Resource Histogram)
- (d) Milestone Chart / 里程碑圖(Milestone Chart)

**詳解**

燃起圖(Burnup Chart)同時繪製「已完成工作」與「總範疇」兩條線,當範疇增加時,總範疇線會明顯上移,讓利害關係人能一眼看出進度變慢是因範疇擴大而非團隊生產力下降;燃盡圖只呈現剩餘工作量的單一下降趨勢線,範疇擴增時容易讓人誤以為團隊完全沒有進展,故本情境應選擇燃起圖,答案為 (b)。

---

### Q58. `sch-056` — 點擊熱區題

**題目 ID**: `sch-056`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network: Task A is followed by two parallel tasks, Task B and Task C, which merge into Task D. Task A takes 4 days, Task C takes 5 days, and Task D takes 6 days. Task B takes 7 days, but there is also a mandatory 2-day lag between the finish of Task A and the start of Task B (for material curing) that must be added to the B path's total duration. Click the task that has Total Float (i.e., is NOT on the Critical Path).
- 中: 下圖網路中,Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後匯流至 Task D。Task A 需時 4 天、Task C 需時 5 天、Task D 需時 6 天。Task B 需時 7 天,但在 Task A 完成到 Task B 開始之間,還有一個因材料養護而產生的強制性 2 天落後量(Lag),必須計入 B 路徑的總工期。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Task A (4 days) / Task A(4天) [x=5,y=40,w=20,h=20]
- (n2) Task B (7 days, +2-day lag after A) / Task B(7天,A 完成後有 2 天落後量) [x=30,y=10,w=20,h=20]
- (n3) Task C (5 days) / Task C(5天) ✅ **正解** [x=30,y=70,w=20,h=20]
- (n4) Task D (6 days) / Task D(6天) [x=60,y=40,w=20,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n2 → n4
- n3 → n4

**詳解**

路徑一 A→(2 天 Lag)→B→D = 4+2+7+6 = 19 天,為要徑;路徑二 A→C→D = 4+5+6 = 15 天。計算 Lag 路徑總工期時,落後量必須和活動工期一樣被計入,因此 B 所在路徑總長為 19 天。由於路徑一較長,A、B、D 皆為要徑上總浮時為 0 的節點,只有 Task C 不在要徑上,其總浮時 = 19−15 = 4 天,故答案為 (n3)。本題特別考驗「將 Lag 計入路徑總工期」的細節,若漏算 2 天 Lag,會誤以為兩條路徑等長而算錯。

---

### Q59. `sch-057` — 下拉選單題

**題目 ID**: `sch-057`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: The sponsor has approved additional budget to recover a schedule slip, but the regulatory contract prohibits changing the required sequence of the remaining inspection activities. In this situation, the PM should apply {{blank1}} to the critical-path activities rather than {{blank2}}, since the latter would require re-sequencing work that the contract does not allow.
- 中: 贊助人已核准額外預算以挽回落後的時程,但法規合約禁止變更剩餘檢驗活動所要求的順序。在此情況下,專案經理應對要徑活動採取 {{blank1}},而非 {{blank2}},因為後者需要重新排序工作,而合約不允許這麼做。

**blank1**

- (a) Crashing / 趕工(Crashing) ✅ **正解**
- (b) Fast Tracking / 快速跟進(Fast Tracking)

**blank2**

- (a) Crashing / 趕工(Crashing)
- (b) Fast Tracking / 快速跟進(Fast Tracking) ✅ **正解**


**詳解**

趕工(Crashing)透過投入額外資源(如加班、增派人力)縮短要徑工期,不需改變活動之間的邏輯順序,適合本情境「預算有彈性但順序不可變更」的限制,對應 blank1。快速跟進(Fast Tracking)則需要將原本循序的活動改為並行執行,等於變更了活動順序,在合約禁止改變檢驗順序的情況下並不適用,對應 blank2。此決策由合約與法規要求(外部商業環境限制)所驅動。

---

### Q60. `sch-058` — 單選題

**題目 ID**: `sch-058`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: During a status meeting, two senior team members openly disagree: one insists on fast tracking two activities to save a week, while the other warns this will likely cause costly rework given the module's complexity. The disagreement is becoming tense and affecting team morale. What should the PM do FIRST?
- 中: 在狀態會議中,兩位資深團隊成員公開意見分歧:一位堅持快速跟進兩項活動以節省一週時間,另一位則警告依此模組的複雜度,這麼做很可能造成高成本的返工。爭論逐漸緊張並影響團隊士氣。專案經理應「優先」採取什麼行動?

**選項**

- (a) Side with the more senior of the two team members to quickly end the disagreement / 支持兩人中較資深的一方,以盡快結束爭論
- (b) Facilitate a structured discussion that weighs the schedule benefit against the rework risk, using available data (such as past rework rates), to reach a shared decision / 主持一場結構化討論,權衡時程效益與返工風險,運用現有數據(如過去的返工率),共同達成決策 ✅ **正解**
- (c) Unilaterally decide to fast track immediately, since schedule pressure outweighs other concerns / 立即單方面決定執行快速跟進,因為時程壓力優先於其他考量
- (d) Postpone the decision indefinitely to avoid further conflict between the two team members / 無限期擱置此決策,以避免兩人進一步衝突

**詳解**

團隊內部對於時程壓縮技術的風險評估出現分歧時,專案經理應優先扮演促進者(Facilitator)的角色,主持結構化討論、引入客觀數據(如歷史返工率)協助團隊共同權衡效益與風險,而非片面偏袒一方、獨斷決定或迴避問題,這體現了團隊領導與衝突管理的核心職責,故答案為 (b)。

---

### Q61. `sch-059` — 多選題

**題目 ID**: `sch-059`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly describe What-If Scenario Analysis as a schedule network analysis technique? Select two.
- 中: 關於情境模擬分析(What-If Scenario Analysis)作為一種時程網路分析技術,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) It evaluates the feasibility of the project schedule under adverse conditions, such as a key resource becoming unavailable or a major deliverable being delayed / 它評估在不利情況下(如關鍵資源無法取得或重大交付物延遲)專案時程的可行性 ✅ **正解**
- (b) Its results can be used to prepare contingency and response plans to overcome or mitigate the impact of unexpected situations / 其結果可用於制定應變計畫,以克服或減輕突發狀況的衝擊 ✅ **正解**
- (c) It requires halting all project work until the analysis is fully finalized / 它要求在分析完全定案之前暫停所有專案工作
- (d) It can only be applied to agile projects and never to predictive (waterfall) projects / 它只能應用於敏捷專案,絕不能用於預測型(瀑布)專案
- (e) It completely replaces the need to perform Critical Path Method analysis / 它能完全取代要徑法(CPM)分析的需要

**詳解**

情境模擬分析透過模擬「若發生某種不利情況會如何」來評估時程的韌性與可行性,例如假設某關鍵資源突然無法取得,故 (a) 正確;其結果可協助團隊事先準備應變計畫,故 (b) 正確。(c) 錯誤,分析過程不需要暫停專案工作;(d) 錯誤,此技術在預測型與敏捷專案中皆可應用;(e) 錯誤,情境模擬分析是 CPM 之外的補充技術,並非取代關係。

---

### Q62. `sch-060` — 單選題

**題目 ID**: `sch-060`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Activity W has an Early Finish (EF) of Day 18 and a Late Finish (LF) of Day 25. What is Activity W's Total Float?
- 中: 活動 W 的最早完成(EF)為第 18 天,最晚完成(LF)為第 25 天。活動 W 的總浮時(Total Float)為何?

**選項**

- (a) 5 days / 5 天
- (b) 6 days / 6 天
- (c) 7 days / 7 天 ✅ **正解**
- (d) 8 days / 8 天

**詳解**

總浮時(Total Float)= LF − EF = 25 − 18 = 7 天(此公式與 LS − ES 等價,只是分別用完成日與開始日計算,結果一致)。代表活動 W 最多可延遲 7 天,而不會影響專案整體完工日期。

---

### Q63. `sch-061` — 拖拉配對題

**題目 ID**: `sch-061`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each scenario to the type of dependency it best represents.
- 中: 請將下列情境拖曳配對到其最符合的依賴關係類型。

**配對項目(拖曳來源)**

- p1: Mandatory Dependency / 強制性依賴(Mandatory)
- p2: Discretionary Dependency / 選擇性依賴(Discretionary)
- p3: External Dependency / 外部依賴(External)
- p4: Internal Dependency / 內部依賴(Internal)

**選項池(拖曳目標)**

- c1: User acceptance testing cannot start until the software build is compiled, due to the inherent nature of the work / 使用者驗收測試必須等軟體建置編譯完成後才能開始,這是工作本質固有的限制
- c2: The team chooses to complete all backend API development before starting frontend integration, based on organizational best practice, even though the two could technically be done in parallel / 團隊依組織最佳實務,選擇先完成所有後端 API 開發再進行前端整合,儘管技術上兩者可以並行
- c3: A hardware installation activity must wait for a customs clearance certificate issued by a foreign government trade office / 硬體安裝活動必須等待外國政府貿易機關核發的海關通關證明
- c4: The QA lead decides that code review must finish before regression testing begins — an order fully within the project team's control / QA 主管決定程式碼審查必須先完成才能開始回歸測試——此順序完全由專案團隊自行掌控

**✅ 正確配對**

- p1 → c1: Mandatory Dependency → User acceptance testing cannot start until the software build is compiled, due to the inherent nature of the work（強制性依賴(Mandatory) → 使用者驗收測試必須等軟體建置編譯完成後才能開始,這是工作本質固有的限制）
- p2 → c2: Discretionary Dependency → The team chooses to complete all backend API development before starting frontend integration, based on organizational best practice, even though the two could technically be done in parallel（選擇性依賴(Discretionary) → 團隊依組織最佳實務,選擇先完成所有後端 API 開發再進行前端整合,儘管技術上兩者可以並行）
- p3 → c3: External Dependency → A hardware installation activity must wait for a customs clearance certificate issued by a foreign government trade office（外部依賴(External) → 硬體安裝活動必須等待外國政府貿易機關核發的海關通關證明）
- p4 → c4: Internal Dependency → The QA lead decides that code review must finish before regression testing begins — an order fully within the project team's control（內部依賴(Internal) → QA 主管決定程式碼審查必須先完成才能開始回歸測試——此順序完全由專案團隊自行掌控）

**詳解**

四種依賴關係的判斷關鍵在於「限制的來源」:強制性依賴來自工作本質或合約的實體限制;選擇性依賴是團隊基於最佳實務的偏好選擇,理論上可調整;外部依賴來自組織外部、團隊無法控制的因素(如政府核准);內部依賴則是團隊可自行決定、可控制的順序安排,四者常在情境題中容易混淆,須仔細分辨限制究竟來自何處、是否可協商。

---

### Q64. `sch-062` — 點擊熱區題

**題目 ID**: `sch-062`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network: Start is followed by Design Spec, then Core Build, which then splits into two final deliverables that do NOT reconverge — User Manual and Regression Test Suite. The project is considered complete only when both final deliverables are finished. Design Spec takes 6 days, Core Build takes 9 days, User Manual takes 4 days, and Regression Test Suite takes 8 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).
- 中: 下圖網路中,Start 之後接續 Design Spec,再接續 Core Build,Core Build 之後分成兩項「不會再匯流」的最終交付物——User Manual 與 Regression Test Suite。專案須等兩項最終交付物皆完成才算結束。Design Spec 需時 6 天、Core Build 需時 9 天、User Manual 需時 4 天、Regression Test Suite 需時 8 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Start (0 days) / Start(0天) [x=5,y=45,w=16,h=18]
- (n2) Design Spec (6 days) / Design Spec(6天) [x=25,y=45,w=18,h=18]
- (n3) Core Build (9 days) / Core Build(9天) [x=47,y=45,w=18,h=18]
- (n4) User Manual (4 days) / User Manual(4天) ✅ **正解** [x=72,y=15,w=20,h=18]
- (n5) Regression Test Suite (8 days) / Regression Test Suite(8天) [x=72,y=70,w=22,h=18]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n2 → n3
- n3 → n4
- n3 → n5

**詳解**

兩條路徑在 Core Build 之後各自獨立收尾,不再匯流:路徑一 Start→Design Spec→Core Build→User Manual = 0+6+9+4 = 19 天;路徑二 Start→Design Spec→Core Build→Regression Test Suite = 0+6+9+8 = 23 天,較長,為要徑。由於專案要等兩項交付物都完成才算結束,完工日取決於「較晚完成」的那一條路徑,故 Start、Design Spec、Core Build、Regression Test Suite 皆為總浮時 0 的要徑節點;User Manual 的總浮時 = 23−19 = 4 天,是唯一不在要徑上的任務,故答案為 (n4)。本題示範了「終點不匯流、各自獨立收尾」的網路結構,與常見的菱形匯流圖不同。

---

### Q65. `sch-063` — 單選題

**題目 ID**: `sch-063`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Several activities across two different workstreams all require the same limited testing device. The PM identifies the resource-constrained longest path through the network (considering both logical dependencies AND resource availability), and protects the project finish date by inserting a single buffer at the end of this path, rather than adding individual safety margins to each activity along it. What technique is being applied?
- 中: 兩條不同工作流中的多項活動都需要同一台有限的測試設備。專案經理找出同時考量邏輯相依性「與」資源可用性後的資源受限最長路徑,並在此路徑末端插入單一緩衝來保護專案完工日,而非在路徑上每個活動各自加入安全邊際。這是採用哪一種技術?

**選項**

- (a) Critical Path Method (CPM) / 要徑法(CPM)
- (b) Critical Chain Method / 要徑鏈法(Critical Chain Method) ✅ **正解**
- (c) Resource Smoothing / 資源平準(Resource Smoothing)
- (d) Fast Tracking / 快速跟進(Fast Tracking)

**詳解**

要徑鏈法(Critical Chain Method)在 CPM 的邏輯基礎上,額外考慮資源限制,找出「資源受限的最長路徑(Critical Chain)」,並在鏈的末端插入集中的緩衝(Project Buffer)來保護完工日,而非讓每個活動各自預留安全時間(容易因學生症候群而被浪費),與本題描述完全吻合,故答案為 (b)。CPM 只考慮邏輯與工期,不考慮資源限制;資源平準只在浮時範圍內微調且不使用緩衝概念;快速跟進是改變活動順序的壓縮技術,皆與本題描述不符。

---

### Q66. `sch-064` — 多選題

**題目 ID**: `sch-064`

難度: `hard` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Which two statements correctly explain why the Critical Chain Method uses shared buffers instead of relying on individual safety margins added to each activity? Select two.
- 中: 關於要徑鏈法(Critical Chain Method)為何使用共用緩衝、而非仰賴在每個活動中各自加入安全邊際,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) When individual activities each carry hidden safety margins, team members often delay starting work until close to the deadline (Student Syndrome), consuming the safety margin without producing an earlier finish / 當每個活動各自隱藏安全邊際時,團隊成員常會拖到接近截止日才開始動工(學生症候群),把安全邊際耗盡卻沒有提早完成 ✅ **正解**
- (b) Work also tends to expand to fill the time available (Parkinson's Law), so individual safety margins are frequently wasted rather than banked as schedule gains / 工作也傾向填滿可用的時間(帕金森定律),因此個別的安全邊際經常被浪費,而非轉化為時程上的實質獲益 ✅ **正解**
- (c) Individual safety margins on each activity always produce a shorter overall project duration than a single shared buffer / 每個活動各自的安全邊際,總是能比單一共用緩衝產生更短的專案總工期
- (d) Using a shared buffer guarantees that every individual activity will now finish ahead of its own estimate / 使用共用緩衝能保證每一項個別活動現在都會提前完成
- (e) Parkinson's Law and Student Syndrome only occur in agile projects and never in predictive projects / 帕金森定律與學生症候群只會發生在敏捷專案中,絕不會出現在預測型專案

**詳解**

學生症候群(Student Syndrome)指人們傾向拖到最後期限逼近才開始全力投入,個別安全邊際因此常被無謂消耗,故 (a) 正確;帕金森定律(Parkinson's Law)指工作會膨脹填滿所分配到的全部時間,即使提早也不會提早完成,故 (b) 正確。這兩個行為現象正是要徑鏈法選擇「集中緩衝」而非「個別安全邊際」的核心理由。(c)(d) 描述與要徑鏈法的實證邏輯相反;(e) 錯誤,這兩種人性行為現象不限於敏捷或預測型專案,是普遍存在的人類行為傾向。

---

### Q67. `sch-065` — 拖拉配對題

**題目 ID**: `sch-065`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Drag and match each schedule presentation format to the description that best fits it.
- 中: 請將下列時程呈現格式拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Bar (Gantt) Chart / 甘特圖(Bar Chart)
- p2: Milestone Chart / 里程碑圖(Milestone Chart)
- p3: Project Schedule Network Diagram / 專案時程網路圖
- p4: Time-Scaled Logic Diagram / 時間刻度邏輯圖

**選項池(拖曳目標)**

- c1: Shows each activity as a horizontal bar plotted against calendar time; easy to read progress but does not emphasize logical dependencies well / 以水平長條對照日曆時間呈現每項活動;容易讀取進度,但不太能凸顯邏輯相依關係
- c2: Shows only major checkpoints with planned and actual dates, useful for concise reporting to executives and sponsors / 只顯示主要檢核點的計畫與實際日期,適合向高階主管與贊助人做簡潔報告
- c3: Shows the logical sequence and dependencies among activities, typically using boxes (nodes) and connecting arrows / 以方框(節點)與連接箭頭呈現活動之間的邏輯順序與相依關係
- c4: Combines network logic with a calendar time scale, so the length of each activity bar is proportional to its duration / 將網路邏輯與日曆時間刻度結合,使每個活動長條的長度與其工期成正比

**✅ 正確配對**

- p1 → c1: Bar (Gantt) Chart → Shows each activity as a horizontal bar plotted against calendar time; easy to read progress but does not emphasize logical dependencies well（甘特圖(Bar Chart) → 以水平長條對照日曆時間呈現每項活動;容易讀取進度,但不太能凸顯邏輯相依關係）
- p2 → c2: Milestone Chart → Shows only major checkpoints with planned and actual dates, useful for concise reporting to executives and sponsors（里程碑圖(Milestone Chart) → 只顯示主要檢核點的計畫與實際日期,適合向高階主管與贊助人做簡潔報告）
- p3 → c3: Project Schedule Network Diagram → Shows the logical sequence and dependencies among activities, typically using boxes (nodes) and connecting arrows（專案時程網路圖 → 以方框(節點)與連接箭頭呈現活動之間的邏輯順序與相依關係）
- p4 → c4: Time-Scaled Logic Diagram → Combines network logic with a calendar time scale, so the length of each activity bar is proportional to its duration（時間刻度邏輯圖 → 將網路邏輯與日曆時間刻度結合,使每個活動長條的長度與其工期成正比）

**詳解**

甘特圖直觀易讀但較弱於呈現相依關係;里程碑圖精簡扼要,適合對高階利害關係人溝通重大時間點;專案時程網路圖清楚呈現邏輯相依但不一定按比例呈現時間長短;時間刻度邏輯圖則結合兩者優點,兼顧邏輯關係與時間比例,四種格式適用於不同的溝通對象與目的,是專案經理依受眾裁適(Tailoring)報告方式的重要工具。

---

### Q68. `sch-066` — 下拉選單題

**題目 ID**: `sch-066`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: Activity R has a Total Float of 9 days and a Free Float of 3 days. This means Activity R can be delayed by up to {{blank1}} days without delaying the project's overall finish date, but only up to {{blank2}} days without delaying the early start of its immediate successor activity.
- 中: 活動 R 的總浮時(Total Float)為 9 天,自由浮時(Free Float)為 3 天。這代表活動 R 最多可延遲 {{blank1}} 天而不會影響專案整體完工日,但最多只能延遲 {{blank2}} 天而不會影響其後續活動的最早開始時間。

**blank1**

- (a) 3 / 3
- (b) 6 / 6
- (c) 9 / 9 ✅ **正解**

**blank2**

- (a) 3 / 3 ✅ **正解**
- (b) 6 / 6
- (c) 9 / 9


**詳解**

總浮時(Total Float)= 9 天,代表活動 R 相對於「專案整體完工日」最多可延遲的時間,對應 blank1 = 9。自由浮時(Free Float)= 3 天,代表活動 R 相對於「下一個活動最早開始時間」最多可延遲的時間,對應 blank2 = 3。由於自由浮時只考慮下一個活動、範圍較小,總浮時考慮整個專案完工日、範圍較大,故自由浮時恆小於或等於總浮時,本題 3 ≤ 9 的關係也符合此一般性原則。

---

### Q69. `sch-067` — 單選題

**題目 ID**: `sch-067`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which of the following is an output of the Monitor and Control Schedule process, used to compare actual progress against the schedule baseline and predict future schedule performance?
- 中: 下列何者是監控時程(Monitor and Control Schedule)流程的輸出,用來比對實際進度與時程基準,並預測未來的時程績效?

**選項**

- (a) Schedule Forecasts / 時程預測(Schedule Forecasts) ✅ **正解**
- (b) Activity List / 活動清單(Activity List)
- (c) Resource Calendars / 資源日曆(Resource Calendars)
- (d) Project Charter / 專案章程(Project Charter)

**詳解**

監控時程(Monitor and Control Schedule)以工作績效資料、時程基準等作為輸入,比對實際進度與基準的落差,產出時程預測(Schedule Forecasts,如預估完工日期)、工作績效資訊、變更請求等,協助團隊及早發現偏差並採取修正行動,故答案為 (a)。活動清單、資源日曆與專案章程分別屬於規劃前期或更早流程的產出,並非監控時程流程的輸出。

---

### Q70. `sch-068` — 多選題

**題目 ID**: `sch-068`

難度: `hard` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: SPI has dropped to 0.80 for two consecutive reporting periods. The client relationship is already tense due to a prior scope disagreement, and the client team tends to react defensively whenever schedule issues come up. Select two appropriate actions for the PM to take.
- 中: SPI 已連續兩期下滑至 0.80。客戶關係已因先前的範疇爭議而處於緊張狀態,每當提及時程問題,客戶團隊往往會出現防衛性反應。請選擇專案經理應採取的兩項適當行動。

**選項**

- (a) Prepare transparent, data-based schedule forecasts and proactively schedule a calm, solution-focused conversation with the client to discuss root causes and options / 準備透明、以數據為基礎的時程預測,主動安排一場冷靜、聚焦於解決方案的對話,與客戶討論根本原因與可行選項 ✅ **正解**
- (b) Analyze whether the delay stems from resource constraints, estimation errors, or dependency issues before proposing a recovery plan / 在提出復原計畫前,先分析延遲的根本原因是資源限制、估算錯誤還是相依性問題 ✅ **正解**
- (c) Avoid mentioning the SPI figures to the client until the situation improves on its own / 在情況自行好轉之前,避免向客戶提及 SPI 數字
- (d) Blame the client's earlier scope-change requests as the sole cause during the next status meeting / 在下次狀態會議中,將延遲完全歸咎於客戶先前的範疇變更要求
- (e) Unilaterally extend the schedule baseline without client approval to hide the variance / 未經客戶核准,單方面延長時程基準以掩蓋績效差異

**詳解**

面對緊繃的客戶關係與連續下滑的時程績效,專案經理應優先以透明數據主動溝通,並在提出解方前先釐清延遲的根本原因(資源、估算或相依性問題),故 (a)(b) 正確。隱瞞績效數字、片面指責客戶或未經核准擅自更動基準,都會進一步破壞信任、違反專業責任與利害關係人溝通的核心原則,故 (c)(d)(e) 皆為不適當的做法。

---

### Q71. `sch-069` — 點擊熱區題

**題目 ID**: `sch-069`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network with Start followed by three parallel tasks — UX Design, Backend Dev, and QA Prep — which all merge into Merge. Start takes 1 day, UX Design takes 6 days, Backend Dev takes 11 days, QA Prep takes 4 days, and Merge takes 3 days. Among the three parallel tasks, click the one with the SMALLEST Total Float that is still greater than zero (i.e., excluding the one on the Critical Path).
- 中: 下圖網路中,Start 之後分為三條並行任務——UX Design、Backend Dev、QA Prep,三者完成後皆匯流至 Merge。Start 需時 1 天、UX Design 需時 6 天、Backend Dev 需時 11 天、QA Prep 需時 4 天、Merge 需時 3 天。在三條並行任務中,請點選「總浮時大於零、且數值最小」的任務(即排除位於要徑上的那一項)。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Start (1 day) / Start(1天) [x=5,y=40,w=18,h=20]
- (n2) UX Design (6 days) / UX Design(6天) ✅ **正解** [x=30,y=5,w=18,h=20]
- (n3) Backend Dev (11 days) / Backend Dev(11天) [x=30,y=40,w=18,h=20]
- (n4) QA Prep (4 days) / QA Prep(4天) [x=30,y=75,w=18,h=20]
- (n5) Merge (3 days) / Merge(3天) [x=60,y=40,w=18,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n1 → n4
- n2 → n5
- n3 → n5
- n4 → n5

**詳解**

三條路徑:Start→UX Design→Merge = 1+6+3 = 10 天;Start→Backend Dev→Merge = 1+11+3 = 15 天,最長,為要徑;Start→QA Prep→Merge = 1+4+3 = 8 天。UX Design 的總浮時 = 15−10 = 5 天;QA Prep 的總浮時 = 15−8 = 7 天。在兩條非要徑的並行任務中,UX Design 的總浮時(5 天)小於 QA Prep(7 天),故「大於零且數值最小」的任務是 UX Design,答案為 (n2)。本題刻意反轉常見的「找最大浮時」問法,測試考生是否能仔細比較多條路徑的浮時大小,而非只找出要徑。

---

### Q72. `sch-070` — 單選題

**題目 ID**: `sch-070`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A project schedule is drawn so that the network logic (activity boxes and dependency arrows) is laid out against a calendar time scale, with the length of each activity's box proportional to its duration — allowing both logical relationships and durations to be read visually at once. What is this schedule presentation format called?
- 中: 某專案時程圖的繪製方式,是將網路邏輯(活動方框與相依箭頭)對照日曆時間刻度排列,且每個活動方框的長度與其工期成正比——讓邏輯關係與工期長短能同時以視覺方式呈現。這種時程呈現格式稱為什麼?

**選項**

- (a) Milestone Chart / 里程碑圖(Milestone Chart)
- (b) Time-Scaled Logic Diagram / 時間刻度邏輯圖(Time-Scaled Logic Diagram) ✅ **正解**
- (c) Resource Histogram / 資源直方圖(Resource Histogram)
- (d) Control Chart / 管制圖(Control Chart)

**詳解**

時間刻度邏輯圖(Time-Scaled Logic Diagram)結合了網路圖的邏輯相依關係與甘特圖的時間比例呈現方式,活動方框長度對應其工期,同時保留箭頭表示的相依關係,兼具兩種呈現法的優點,故答案為 (b)。里程碑圖只標示重要時間點,不呈現活動工期或相依關係;資源直方圖呈現的是資源負荷而非時程邏輯;管制圖則是品質管理中用於監控製程穩定性的工具,與時程呈現無關。

---

### Q73. `sch-071` — 單選題

**題目 ID**: `sch-071`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: During the Daily Standup (Daily Scrum), the team meets for a strict 15-minute timebox so that each member briefly answers three questions: what did I complete yesterday, what will I do today, and what obstacles are blocking me. What is the PRIMARY purpose of this event?
- 中: 在每日站立會議(Daily Standup / Daily Scrum)中,團隊嚴格控制在 15 分鐘的時間箱內,讓每位成員簡短回答三個問題:昨天完成了什麼、今天要做什麼、遇到什麼障礙。此活動的「主要」目的為何?

**選項**

- (a) To give the Scrum Master a detailed status report so they can update the project schedule baseline / 讓 Scrum Master 取得詳細狀態報告,以便更新專案時程基準
- (b) To let the team synchronize their work and surface impediments to each other on a daily cadence, not to report status upward to management / 讓團隊每日同步彼此的工作進度、並互相揭露障礙,而非向管理層做進度報告 ✅ **正解**
- (c) To formally reassign story points among team members based on yesterday's output / 依據昨日產出,正式在團隊成員間重新分配故事點
- (d) To replace the Sprint Review by demonstrating completed work to stakeholders every day / 取代 Sprint Review,每天向利害關係人展示已完成的工作

**詳解**

每日站立會議的主要目的是團隊內部同步工作進度、互相揭露障礙,以利團隊自我調整,而非向上做正式進度報告,故答案為 (b)。(a) 誤將此會議當成給 Scrum Master 或管理層的狀態報告;(c) 錯誤,重新分配故事點並非站立會議的目的;(d) 錯誤,展示成果給利害關係人是 Sprint Review 的功能,不應由每日站立會議取代。

---

### Q74. `sch-072` — 多選題

**題目 ID**: `sch-072`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly distinguish the Sprint Review from the Sprint Retrospective? Select two.
- 中: 關於 Sprint Review(衝刺審查)與 Sprint Retrospective(衝刺回顧)的差異,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) The Sprint Review's timebox scales with sprint length, generally capped at around one hour per week of the sprint (e.g., up to two hours for a two-week sprint), and includes stakeholders inspecting the increment / Sprint Review 的時間箱會依衝刺長度縮放,大致以每週上限約一小時為原則(例如兩週衝刺上限約兩小時),且會邀請利害關係人一同檢視增量成果 ✅ **正解**
- (b) The Sprint Retrospective is an internal team event focused on inspecting how the team worked together and identifying process improvements for the next sprint / Sprint Retrospective 是團隊內部活動,聚焦於檢視團隊協作方式,並找出下一個衝刺可改善的流程做法 ✅ **正解**
- (c) The Sprint Retrospective is where stakeholders formally accept or reject the working increment / Sprint Retrospective 是利害關係人正式驗收或拒絕可用增量的場合
- (d) The Sprint Review should exclude the Product Owner to avoid biasing stakeholder feedback / Sprint Review 應排除產品負責人(Product Owner)參與,以避免影響利害關係人的回饋
- (e) Both events are optional and may be skipped whenever the team feels confident about its progress / 只要團隊對進度有信心,這兩項活動都可以省略不辦

**詳解**

Sprint Review 邀請利害關係人共同檢視可用增量,時間箱依衝刺長度按比例訂定(約每週一小時);Sprint Retrospective 則是團隊內部檢討協作與流程、規劃改善行動的場合,兩者目的不同,故 (a)(b) 正確。(c) 描述的驗收行為屬於 Sprint Review 而非 Retrospective;(d) 錯誤,產品負責人通常應參與 Sprint Review;(e) 錯誤,這兩項都是 Scrum 中建議固定舉辦的時間箱活動,不應隨意省略。

---

### Q75. `sch-073` — 單選題

**題目 ID**: `sch-073`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A Kanban team measures its flow over several weeks and finds an average of 12 items in progress (WIP) at any given time, with an average cycle time of 4 days per item. Using Little's Law (WIP = Throughput × Cycle Time), what is the team's average throughput?
- 中: 某看板團隊觀察數週後發現,在製品(WIP)平均為 12 項,每項平均週期時間(Cycle Time)為 4 天。依據 Little's Law(WIP = 產出率 Throughput × 週期時間 Cycle Time),此團隊的平均產出率(Throughput)為何?

**選項**

- (a) 1 item per day / 每天 1 項
- (b) 3 items per day / 每天 3 項 ✅ **正解**
- (c) 4 items per day / 每天 4 項
- (d) 48 items per day / 每天 48 項

**詳解**

Little's Law 公式為 WIP = Throughput × Cycle Time,移項可得 Throughput = WIP ÷ Cycle Time = 12 ÷ 4 = 3 項/天,故答案為 (b)。(d) 誤將公式做乘法(12×4=48);(a)(c) 則是常見的除法或代入錯誤。

---

### Q76. `sch-074` — 多選題

**題目 ID**: `sch-074`

難度: `hard` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A team reviews its Cumulative Flow Diagram (CFD), which plots the cumulative count of items in each workflow stage (To Do, In Progress, Done) over time as stacked bands. Which two statements correctly describe how to read this diagram? Select two.
- 中: 團隊檢視其累積流圖(Cumulative Flow Diagram, CFD),此圖以堆疊色帶呈現每個工作階段(待辦、進行中、完成)隨時間累積的項目數量。關於此圖的判讀,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) The vertical distance between two adjacent bands at a given point in time represents the number of items (WIP) currently sitting in that stage / 在某一時間點,兩條相鄰色帶之間的「垂直距離」代表目前停留在該階段的項目數量(WIP) ✅ **正解**
- (b) The horizontal distance between two adjacent bands represents the average time (lead/cycle time) items are spending in that stage / 兩條相鄰色帶之間的「水平距離」代表項目停留在該階段的平均時間(前置時間/週期時間) ✅ **正解**
- (c) A band that steadily widens over time indicates the stage is keeping pace and is not a bottleneck / 色帶隨時間持續變寬,代表該階段的處理速度跟得上,並非瓶頸
- (d) The CFD can only be produced for Kanban boards and has no meaningful use on a Scrum sprint board / CFD 只能用於看板(Kanban),對 Scrum 衝刺看板毫無意義
- (e) If the "Done" band's slope becomes flatter, this always means the team's throughput is increasing / 「完成」色帶的斜率若變得更平緩,永遠代表團隊的產出率正在提升

**詳解**

CFD 的核心判讀原則是:同一時間點兩色帶間的垂直距離 = 該階段 WIP;兩色帶間的水平距離 = 項目在該階段停留的前置或週期時間,故 (a)(b) 正確。(c) 錯誤,色帶持續變寬通常代表項目堆積、正是瓶頸警訊,而非跟得上進度;(d) 錯誤,CFD 同樣可套用於 Scrum 的衝刺看板;(e) 錯誤,完成色帶斜率變平緩通常代表產出「趨緩」而非提升,方向恰好相反。

---

### Q77. `sch-075` — 拖拉配對題

**題目 ID**: `sch-075`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Drag and match each iteration/spike type to the description that best fits it.
- 中: 請將下列每種迭代/尖峰(Spike)類型拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Iteration 0 / 第零次迭代(Iteration 0)
- p2: Development Iteration / 開發迭代(Dev Iteration)
- p3: H (Hardening) Iteration / H(強化)迭代
- p4: Architecture Spike / 架構尖峰(Architecture Spike)
- p5: Risk-Based Spike / 風險導向尖峰(Risk-Based Spike)

**選項池(拖曳目標)**

- c1: A short preparatory iteration used to set up the environment, tools, initial backlog, and team logistics before development work begins / 一段短暫的前置迭代,用於在開發工作展開前,建置環境、工具、初始待辦清單與團隊運作方式
- c2: A regular iteration in which the team builds, integrates, and tests working product increments / 團隊建置、整合並測試可用產品增量的常規迭代
- c3: An iteration inserted (often before a release) to perform final integration, regression testing, and technical debt cleanup across the whole system / (通常於發布前)安排的迭代,用於執行最終整合、迴歸測試,並清理整個系統的技術債
- c4: A short, timeboxed investigation used to explore an unproven technical approach or design option before committing to it / 一段短暫、有時間箱限制的探索性工作,用於在正式投入之前,先驗證未經證實的技術做法或設計選項
- c5: A short, timeboxed investigation aimed specifically at reducing uncertainty around a high-risk area of the product / 一段短暫、有時間箱限制的探索性工作,專門用於降低產品中高風險領域的不確定性

**✅ 正確配對**

- p1 → c1: Iteration 0 → A short preparatory iteration used to set up the environment, tools, initial backlog, and team logistics before development work begins（第零次迭代(Iteration 0) → 一段短暫的前置迭代,用於在開發工作展開前,建置環境、工具、初始待辦清單與團隊運作方式）
- p2 → c2: Development Iteration → A regular iteration in which the team builds, integrates, and tests working product increments（開發迭代(Dev Iteration) → 團隊建置、整合並測試可用產品增量的常規迭代）
- p3 → c3: H (Hardening) Iteration → An iteration inserted (often before a release) to perform final integration, regression testing, and technical debt cleanup across the whole system（H(強化)迭代 → (通常於發布前)安排的迭代,用於執行最終整合、迴歸測試,並清理整個系統的技術債）
- p4 → c4: Architecture Spike → A short, timeboxed investigation used to explore an unproven technical approach or design option before committing to it（架構尖峰(Architecture Spike) → 一段短暫、有時間箱限制的探索性工作,用於在正式投入之前,先驗證未經證實的技術做法或設計選項）
- p5 → c5: Risk-Based Spike → A short, timeboxed investigation aimed specifically at reducing uncertainty around a high-risk area of the product（風險導向尖峰(Risk-Based Spike) → 一段短暫、有時間箱限制的探索性工作,專門用於降低產品中高風險領域的不確定性）

**詳解**

Iteration 0 是開發前的準備迭代,聚焦於環境與工具建置;Dev Iteration 是產出可用增量的常規迭代;H(強化)迭代常安排在發布前,用於系統整合、迴歸測試與技術債清理;Spike 則是短期、有時間箱的探索性工作,Architecture Spike 聚焦於驗證技術/設計方案的可行性,Risk-Based Spike 則聚焦於降低特定高風險領域的不確定性,兩者目的不同但形式類似,考生常混淆,需依情境判斷探索的重點是「技術可行性」還是「風險降低」。

---

### Q78. `sch-076` — 單選題

**題目 ID**: `sch-076`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: A newly formed agile team has had different members rotate in and out every sprint for its first four sprints. Its velocity has swung wildly: 14, 31, 9, and 26 story points. Stakeholders ask the PM to use this data to forecast the release date. What should the PM advise?
- 中: 一個新成立的敏捷團隊,在前四個衝刺中每次都有不同成員輪替加入或離開。其產出速度(Velocity)劇烈震盪:14、31、9、26 個故事點。利害關係人要求專案經理用這些數據預測發布日期。專案經理應如何建議?

**選項**

- (a) Average the four numbers and present that as a reliable forecast, since velocity is always accurate regardless of team stability / 將四個數字取平均,直接作為可靠預測呈現,因為產出速度不論團隊是否穩定都一定準確
- (b) Explain that velocity is only a reliable forecasting input once the team's composition and working agreements stabilize, and recommend using a range based on more sprints of stable-team data before committing to a date / 說明唯有在團隊組成與工作默契趨於穩定後,產出速度才會是可靠的預測依據,並建議累積更多穩定團隊的衝刺數據,以區間方式呈現,再承諾具體日期 ✅ **正解**
- (c) Ignore velocity entirely and switch to estimating remaining work in ideal hours instead / 完全捨棄產出速度,改用理想工時來估算剩餘工作
- (d) Recommend comparing this team's velocity directly against another team's velocity to validate whether 14–31 points is a normal range / 建議直接拿這個團隊的產出速度與另一個團隊的產出速度比較,以驗證 14~31 是否為正常範圍

**詳解**

產出速度(Velocity)是團隊自身歷史數據的度量,唯有在團隊成員與工作方式趨於穩定後才具有預測參考價值;團隊組成頻繁變動會使速度劇烈波動、難以作為可靠預測依據,應待累積更多穩定期的數據後,以區間而非單一數字溝通預測,故答案為 (b)。(a) 過度簡化且忽略團隊不穩定的影響;(c) 並非必要,只是需更謹慎使用速度數據;(d) 錯誤,速度是團隊專屬的相對度量單位,不同團隊間不可直接比較。

---

### Q79. `sch-077` — 拖拉配對題

**題目 ID**: `sch-077`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each agile event to its typical timebox guideline.
- 中: 請將下列每個敏捷活動拖曳配對到其典型的時間箱(Timebox)準則。

**配對項目(拖曳來源)**

- p1: Daily Standup (Daily Scrum) / 每日站立會議
- p2: Sprint Planning / 衝刺規劃
- p3: Sprint Review / 衝刺審查
- p4: Sprint Retrospective / 衝刺回顧

**選項池(拖曳目標)**

- c1: Strictly timeboxed to about 15 minutes, held at the same time and place each working day / 嚴格限制在約 15 分鐘內,每個工作日在同一時間、同一地點舉行
- c2: Timeboxed roughly in proportion to sprint length, e.g., up to about 8 hours for a one-month sprint / 時間箱大致依衝刺長度按比例訂定,例如一個月衝刺上限約 8 小時
- c3: Timeboxed at roughly one hour per week of the sprint, e.g., up to about 2 hours for a two-week sprint, with stakeholders inspecting the increment / 時間箱大致以每週一小時為原則,例如兩週衝刺上限約 2 小時,由利害關係人一同檢視增量
- c4: A shorter meeting held after the review and before the next planning, focused on team process improvement / 在審查之後、下一次規劃之前舉行的較短會議,聚焦於團隊流程改善

**✅ 正確配對**

- p1 → c1: Daily Standup (Daily Scrum) → Strictly timeboxed to about 15 minutes, held at the same time and place each working day（每日站立會議 → 嚴格限制在約 15 分鐘內,每個工作日在同一時間、同一地點舉行）
- p2 → c2: Sprint Planning → Timeboxed roughly in proportion to sprint length, e.g., up to about 8 hours for a one-month sprint（衝刺規劃 → 時間箱大致依衝刺長度按比例訂定,例如一個月衝刺上限約 8 小時）
- p3 → c3: Sprint Review → Timeboxed at roughly one hour per week of the sprint, e.g., up to about 2 hours for a two-week sprint, with stakeholders inspecting the increment（衝刺審查 → 時間箱大致以每週一小時為原則,例如兩週衝刺上限約 2 小時,由利害關係人一同檢視增量）
- p4 → c4: Sprint Retrospective → A shorter meeting held after the review and before the next planning, focused on team process improvement（衝刺回顧 → 在審查之後、下一次規劃之前舉行的較短會議,聚焦於團隊流程改善）

**詳解**

每日站立會議嚴格控制在 15 分鐘;衝刺規劃的時間箱大致依衝刺長度按比例訂定(例如一個月衝刺上限約 8 小時);衝刺審查則大致以每週一小時為原則(兩週衝刺約上限 2 小時),邀請利害關係人參與;衝刺回顧通常安排在審查之後、下一次規劃之前,時間較短,聚焦於團隊自身的流程改善,而非對外展示成果。這些時間箱準則有助於控制會議成本、避免會議無限膨脹。

---

### Q80. `sch-078` — 下拉選單題

**題目 ID**: `sch-078`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: A team's sprint is two weeks long, so its Sprint Review is timeboxed to about {{blank1}}, and everyone arrives prepared knowing the meeting will not run indefinitely. In contrast, when a work item is given no timebox or deadline pressure at all, {{blank2}} tends to occur, where team members delay starting meaningful work until the last responsible moment nears.
- 中: 某團隊的衝刺長度為兩週,因此其衝刺審查(Sprint Review)的時間箱大約訂為 {{blank1}},大家都知道會議不會無限拖延,因此提前準備。相對地,當一項工作完全沒有時間箱或期限壓力時,則容易出現 {{blank2}},也就是團隊成員會拖到最後責任時刻逼近才真正開始投入。

**blank1**

- (a) 15 minutes / 15 分鐘
- (b) 2 hours / 2 小時 ✅ **正解**
- (c) 2 days / 2 天

**blank2**

- (a) Parkinson's Law / 帕金森定律(Parkinson's Law)
- (b) Student Syndrome / 學生症候群(Student Syndrome) ✅ **正解**
- (c) Little's Law / Little 定律(Little's Law)


**詳解**

Sprint Review 的時間箱大致以每週一小時為原則,兩週衝刺約為 2 小時,故 blank1 選 (b)。學生症候群(Student Syndrome)是指人們傾向拖到最後責任時刻才真正開始投入工作,與「工作會膨脹填滿所分配到的全部時間」的帕金森定律(Parkinson's Law)概念相近卻不完全相同:前者強調「延遲開始」,後者強調「即使提早開始也不會提早完成」,故 blank2 應選 (b) 而非 (a)。Little's Law 則是描述 WIP、產出率與週期時間關係的公式,與此處描述的拖延行為無關。

---

### Q81. `sch-079` — 點擊熱區題

**題目 ID**: `sch-079`

難度: `hard` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The team's Kanban board has a WIP limit of 3 items for the "In Progress" column. The board currently shows: To Do (5 items), In Progress (5 items), Review (2 items), Done (8 items). Click the column that is currently violating its WIP limit.
- 中: 團隊看板的「進行中(In Progress)」欄位設有 WIP 限制為 3 項。目前看板狀態為:待辦(5 項)、進行中(5 項)、審查(2 項)、完成(8 項)。請點選目前違反 WIP 限制的欄位。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) To Do (5 items) / 待辦(5 項) [x=5,y=40,w=20,h=20]
- (n2) In Progress (5 items, WIP limit 3) / 進行中(5 項,WIP 限制 3) ✅ **正解** [x=30,y=40,w=20,h=20]
- (n3) Review (2 items) / 審查(2 項) [x=55,y=40,w=20,h=20]
- (n4) Done (8 items) / 完成(8 項) [x=80,y=40,w=18,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n2 → n3
- n3 → n4

**詳解**

題目設定「進行中」欄位的 WIP 限制為 3 項,但目前實際有 5 項卡片停留在該欄位,已超出限制上限 2 項,代表該階段可能發生瓶頸,團隊應優先協助完成進行中的項目,而非拉入新工作,故正解為「進行中」欄位(n2)。待辦、審查、完成欄位在題目中並未被賦予 WIP 限制,也未超出限制,故非本題答案。

---

### Q82. `sch-080` — 單選題

**題目 ID**: `sch-080`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A project has a Budget at Completion (BAC) of $400,000. According to the schedule baseline, 45% of the work should have been completed by today, but the team has actually completed only 38% of the work. What is the Schedule Variance (SV), and what does it indicate?
- 中: 某專案的完工預算(BAC)為 $400,000。依時程基準,今天應完成 45% 的工作,但團隊實際只完成了 38% 的工作。時程變異(SV)為何?這代表什麼意涵?

**選項**

- (a) SV = −$28,000; the project is behind schedule / SV = −$28,000;專案進度落後 ✅ **正解**
- (b) SV = +$28,000; the project is ahead of schedule / SV = +$28,000;專案進度超前
- (c) SV = −$180,000; the project is severely behind schedule / SV = −$180,000;專案嚴重落後進度
- (d) SV = $0; the project is exactly on schedule / SV = $0;專案剛好符合進度

**詳解**

PV(計畫值)= 計畫完成% × BAC = 45% × 400,000 = $180,000。EV(實獲值)= 實際完成% × BAC = 38% × 400,000 = $152,000。SV = EV − PV = 152,000 − 180,000 = −$28,000。SV 為負值代表專案目前落後於時程基準,故答案為 (a)。(c) 誤將 PV 本身當作 SV;(b) 正負號相反;(d) 忽略了計畫與實際完成度之間 7% 的落差。

---

### Q83. `sch-081` — 拖拉配對題

**題目 ID**: `sch-081`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Drag and match each collaboration game to the description that best fits it.
- 中: 請將下列協作遊戲(Collaboration Game)拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Remember the Future / 回憶未來(Remember the Future)
- p2: Prune the Product Tree / 修剪產品樹(Prune the Product Tree)
- p3: Speedboat / 快艇(Speedboat)

**選項池(拖曳目標)**

- c1: Stakeholders are asked to imagine the project has already succeeded and describe what that success looks like, helping the team understand stakeholders' definition of success early on / 邀請利害關係人想像專案已經成功,並描述成功的樣貌,協助團隊及早理解利害關係人對成功的定義
- c2: Stakeholders write candidate features on cards and place them onto a drawn tree, grouping related features on the same branch and positioning features that depend on others higher up, helping visualize and organize the feature set / 利害關係人將候選功能寫在卡片上並貼到畫好的樹上,將相關功能歸類在同一樹枝,需依賴其他功能的項目則位置較高,協助視覺化並整理功能集合
- c3: Participants draw a boat with sails (driving forces) and anchors (obstacles or risks) to help surface what is propelling the project forward and what is holding it back / 參與者畫出一艘船,搭配風帆(推動力)與船錨(阻礙或風險),協助釐清哪些因素正在推動專案前進、哪些正在拖累專案

**✅ 正確配對**

- p1 → c1: Remember the Future → Stakeholders are asked to imagine the project has already succeeded and describe what that success looks like, helping the team understand stakeholders' definition of success early on（回憶未來(Remember the Future) → 邀請利害關係人想像專案已經成功,並描述成功的樣貌,協助團隊及早理解利害關係人對成功的定義）
- p2 → c2: Prune the Product Tree → Stakeholders write candidate features on cards and place them onto a drawn tree, grouping related features on the same branch and positioning features that depend on others higher up, helping visualize and organize the feature set（修剪產品樹(Prune the Product Tree) → 利害關係人將候選功能寫在卡片上並貼到畫好的樹上,將相關功能歸類在同一樹枝,需依賴其他功能的項目則位置較高,協助視覺化並整理功能集合）
- p3 → c3: Speedboat → Participants draw a boat with sails (driving forces) and anchors (obstacles or risks) to help surface what is propelling the project forward and what is holding it back（快艇(Speedboat) → 參與者畫出一艘船,搭配風帆(推動力)與船錨(阻礙或風險),協助釐清哪些因素正在推動專案前進、哪些正在拖累專案）

**詳解**

協作遊戲(Collaboration Games)是敏捷團隊常用於激發利害關係人參與、蒐集需求與排序優先順序的引導技巧。回憶未來透過「假設已成功」的想像,協助團隊提早釐清成功的定義;修剪產品樹透過視覺化的樹狀結構,協助整理與分類功能需求;快艇則透過風帆與船錨的比喻,協助團隊辨識推動與阻礙專案的因素,三者皆強調以低科技、高互動的方式促進團隊與利害關係人之間的溝通與共識。

---

### Q84. `sch-082` — 單選題

**題目 ID**: `sch-082`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Three activities — M, N, and P — are all on the critical path and can each be crashed by at least one day. Crashing Activity M costs an extra $1,800 per day saved, Activity N costs an extra $2,500 per day saved, and Activity P costs an extra $1,200 per day saved. The PM only needs to save one day at the lowest possible additional cost. Which activity should be crashed first?
- 中: 活動 M、N、P 皆位於要徑上,且每項都至少可被趕工(Crashing)一天。趕工活動 M 每縮短一天需額外花費 $1,800,活動 N 每縮短一天需額外花費 $2,500,活動 P 每縮短一天需額外花費 $1,200。專案經理只需以最低的額外成本節省一天,應優先趕工哪一項活動?

**選項**

- (a) Activity M / 活動 M
- (b) Activity N / 活動 N
- (c) Activity P / 活動 P ✅ **正解**
- (d) It does not matter, since all three are on the critical path / 沒有差別,因為三項都在要徑上

**詳解**

在多項要徑活動皆可壓縮的情況下,應優先選擇「成本斜率(Cost Slope)」最低、也就是每縮短一天所需額外成本最少的活動進行趕工,才能以最低總成本達成壓縮目標。活動 P 每天僅需額外 $1,200,低於活動 M 的 $1,800 與活動 N 的 $2,500,故應優先趕工活動 P,答案為 (c)。雖然三項活動都在要徑上、延遲都會影響完工日,但這不代表趕工哪一項的成本效益相同,仍須比較各自的成本斜率。

---

### Q85. `sch-083` — 多選題

**題目 ID**: `sch-083`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Which two statements correctly describe a Resource Histogram? Select two.
- 中: 關於資源直方圖(Resource Histogram),下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) It is a bar chart showing how much of a given resource (such as a person or role) is required or allocated across time periods, making over-allocation easy to spot / 它是一種長條圖,呈現特定資源(如某人或某角色)在各時間區段所需或已分配的數量,能讓資源超額分配的情況一目了然 ✅ **正解**
- (b) When the histogram shows a resource loaded above its maximum available capacity in a given period, this signals a resource conflict that resource leveling or smoothing may need to address / 當直方圖顯示某資源在特定期間的負荷超過其最大可用產能時,代表出現資源衝突,可能需要透過資源撫平或資源平準來處理 ✅ **正解**
- (c) It always shows cost data rather than resource-hours or headcount / 它一定顯示成本資料,而非資源工時或人力數量
- (d) It replaces the need for a network diagram when developing the schedule / 在發展時程時,它可以取代網路圖的需要
- (e) It can only be produced for individually named people, never for role-based resource pools / 它只能針對具名的個人繪製,絕不能用於以角色為單位的資源池

**詳解**

資源直方圖以長條圖呈現特定資源(可能是具名個人,也可能是角色/資源池)在各時間區段的需求量或分配量,是辨識資源超額分配、及早發現資源衝突的重要視覺化工具,故 (a)(b) 正確。它呈現的通常是工時或人力數量而非成本資料,也不能取代網路圖對邏輯相依關係的呈現,更不限於只能用於具名個人,故 (c)(d)(e) 皆為錯誤敘述。

---

### Q86. `sch-084` — 下拉選單題

**題目 ID**: `sch-084`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: A Kanban team observes an average Work in Progress (WIP) of 20 items and a throughput of 4 items per day. Using Little's Law (WIP = Throughput × Cycle Time), the team's average Cycle Time is {{blank1}} days. If the team later reduces its average WIP to 12 items while throughput stays at 4 items per day, the new average Cycle Time would be {{blank2}} days.
- 中: 某看板團隊觀察到平均在製品(WIP)為 20 項,產出率(Throughput)為每天 4 項。依據 Little's Law(WIP = Throughput × Cycle Time),此團隊的平均週期時間(Cycle Time)為 {{blank1}} 天。若團隊之後將平均 WIP 降低至 12 項,產出率仍維持每天 4 項,則新的平均週期時間為 {{blank2}} 天。

**blank1**

- (a) 3 / 3
- (b) 5 / 5 ✅ **正解**
- (c) 8 / 8

**blank2**

- (a) 3 / 3 ✅ **正解**
- (b) 5 / 5
- (c) 8 / 8


**詳解**

Little's Law 公式為 WIP = Throughput × Cycle Time,移項可得 Cycle Time = WIP ÷ Throughput。第一種情境:20 ÷ 4 = 5 天,對應 blank1。第二種情境:團隊降低 WIP 至 12 項後,12 ÷ 4 = 3 天,對應 blank2。此結果也說明:在產出率不變的前提下,降低在製品數量能有效縮短每個項目的平均週期時間,這是看板方法限制 WIP 的核心理論依據。

---

### Q87. `sch-085` — 點擊熱區題

**題目 ID**: `sch-085`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: The four cards below name different schedule- or resource-related visualization tools. Click the one that displays, as a bar chart across time periods, how much of a given resource (such as a person or role) is required or allocated — making it easy to spot when that resource is loaded above its available capacity.
- 中: 下方四張卡片列出不同的時程/資源視覺化工具。請點選「以長條圖呈現特定資源(如某人或某角色)在各時間區段所需或已分配數量,讓資源負荷超過可用產能時容易被發現」的工具。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Resource Histogram / 資源直方圖(Resource Histogram) ✅ **正解** [x=10,y=15,w=35,h=25]
- (n2) Cumulative Flow Diagram / 累積流圖(CFD) [x=55,y=15,w=35,h=25]
- (n3) Milestone Chart / 里程碑圖(Milestone Chart) [x=10,y=60,w=35,h=25]
- (n4) Time-Scaled Logic Diagram / 時間刻度邏輯圖 [x=55,y=60,w=35,h=25]

**詳解**

資源直方圖(Resource Histogram)以長條圖呈現特定資源在各時間區段的需求或分配量,是辨識資源超額分配、及早採取資源撫平或平準措施的常用工具;累積流圖呈現的是工作項目在各工作階段隨時間累積的數量,用於觀察流動效率與瓶頸;里程碑圖只呈現重要檢核點日期;時間刻度邏輯圖則結合網路邏輯與時間比例,皆非本題描述的資源負荷視覺化工具。

---

### Q88. `sch-086` — 單選題

**題目 ID**: `sch-086`

難度: `medium` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: A Kanban team's average throughput is 5 items per day, and its average cycle time per item is 6 days. Using Little's Law (WIP = Throughput × Cycle Time), what is the team's average Work in Progress (WIP)?
- 中: 某看板團隊的平均產出率(Throughput)為每天 5 項,每項平均週期時間(Cycle Time)為 6 天。依據 Little's Law(WIP = Throughput × Cycle Time),此團隊的平均在製品(WIP)為何?

**選項**

- (a) 1.2 items / 1.2 項
- (b) 11 items / 11 項
- (c) 30 items / 30 項 ✅ **正解**
- (d) 0.83 items / 0.83 項

**詳解**

Little's Law 公式:WIP = Throughput × Cycle Time = 5 × 6 = 30 項,故答案為 (c)。(a) 誤將公式做除法(5÷6≈0.83 的相近錯誤);(b) 是加法的錯誤結果(5+6=11);(d) 則是 Throughput 除以 Cycle Time 的錯誤操作,皆非正確公式的應用方式。

---

### Q89. `sch-087` — 拖拉配對題

**題目 ID**: `sch-087`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Drag and match each backlog prioritization technique to the description that best fits it.
- 中: 請將下列待辦清單優先排序技巧拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: MoSCoW Prioritization / MoSCoW 優先排序法
- p2: Dot Voting / 點點投票法(Dot Voting)
- p3: 100-Point Method / 百點法(Monopoly Money)
- p4: Kano Analysis / 卡諾分析(Kano Analysis)

**選項池(拖曳目標)**

- c1: Sorts items into four categories — Must have, Should have, Could have, and Won't have this time — to clarify what is essential versus optional / 將項目分成四類——必須有、應該有、可以有、這次不會有——以釐清何者為必要、何者為可有可無
- c2: Each participant receives a limited number of sticky dots and places them directly on the backlog items they consider most important / 每位參與者獲得有限數量的貼紙圓點,直接貼在自己認為最重要的待辦項目上
- c3: Each participant is given a fixed pool of points (or play money) to distribute across competing items according to how much they value them / 每位參與者獲得固定總額的點數(或遊戲貨幣),依自己重視的程度分配到不同的候選項目上
- c4: Plots each feature by degree of functionality/investment against resulting customer satisfaction, distinguishing basic expected features from those that delight customers / 依「功能實現程度/投入」與「客戶滿意度」兩軸繪製各功能,區分出基本必要功能與能讓客戶驚喜的功能

**✅ 正確配對**

- p1 → c1: MoSCoW Prioritization → Sorts items into four categories — Must have, Should have, Could have, and Won't have this time — to clarify what is essential versus optional（MoSCoW 優先排序法 → 將項目分成四類——必須有、應該有、可以有、這次不會有——以釐清何者為必要、何者為可有可無）
- p2 → c2: Dot Voting → Each participant receives a limited number of sticky dots and places them directly on the backlog items they consider most important（點點投票法(Dot Voting) → 每位參與者獲得有限數量的貼紙圓點,直接貼在自己認為最重要的待辦項目上）
- p3 → c3: 100-Point Method → Each participant is given a fixed pool of points (or play money) to distribute across competing items according to how much they value them（百點法(Monopoly Money) → 每位參與者獲得固定總額的點數(或遊戲貨幣),依自己重視的程度分配到不同的候選項目上）
- p4 → c4: Kano Analysis → Plots each feature by degree of functionality/investment against resulting customer satisfaction, distinguishing basic expected features from those that delight customers（卡諾分析(Kano Analysis) → 依「功能實現程度/投入」與「客戶滿意度」兩軸繪製各功能,區分出基本必要功能與能讓客戶驚喜的功能）

**詳解**

MoSCoW 以四個類別快速區分必要性;點點投票法與百點法都是讓利害關係人以有限資源(圓點或點數)分配偏好的排序方式,差別在於點點投票通常較粗略、百點法則能表達更細緻的相對重視程度;卡諾分析則以兩軸模型分析功能對客戶滿意度的影響,協助團隊辨識哪些功能屬於「基本門檻」、哪些屬於「加分驚喜」。四者皆是敏捷團隊用以決定待辦清單優先順序的常見技巧。

---

### Q90. `sch-088` — 單選題

**題目 ID**: `sch-088`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: An activity has the following three-point estimates: Optimistic = 5 days, Most Likely = 9 days, Pessimistic = 17 days. What is the standard deviation of this activity's duration estimate?
- 中: 某活動的三點估算如下:樂觀值(O)= 5 天、最可能值(M)= 9 天、悲觀值(P)= 17 天。此活動工期估算的標準差為何?

**選項**

- (a) 1.33 days / 1.33 天
- (b) 1.67 days / 1.67 天
- (c) 2.0 days / 2.0 天 ✅ **正解**
- (d) 2.4 days / 2.4 天

**詳解**

標準差公式 = (P−O)/6 = (17−5)/6 = 12/6 = 2.0 天,故答案為 (c)。標準差愈大,代表悲觀值與樂觀值之間的差距愈大,此活動工期估算的不確定性也愈高;許多考生容易誤用 (P−O)/2 或漏記除以 6,而得出 (a)(b)(d) 等錯誤答案。

---

### Q91. `sch-089` — 多選題

**題目 ID**: `sch-089`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Which two statements correctly describe Monte Carlo Simulation as used in schedule risk analysis? Select two.
- 中: 關於蒙地卡羅模擬(Monte Carlo Simulation)在時程風險分析中的應用,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) It runs the schedule network model many times using randomly varied input values (such as three-point duration estimates) to produce a probability distribution of possible finish dates / 它使用隨機變動的輸入值(如三點工期估算)反覆執行時程網路模型多次,產出可能完工日期的機率分布 ✅ **正解**
- (b) Its output can express confidence levels, such as an 80% probability of finishing by a certain date, rather than a single fixed date / 其輸出結果可以表達信心水準,例如「有 80% 機率在某日期前完工」,而非單一固定日期 ✅ **正解**
- (c) It guarantees the project will finish on the single most likely date shown by the simulation / 它保證專案一定會在模擬結果顯示的最可能日期完工
- (d) It can only be used on small projects with fewer than ten activities / 它只能用於少於十項活動的小型專案
- (e) It replaces the need to ever perform a forward and backward pass (CPM) on the network diagram / 它能完全取代在網路圖上執行順推法與逆推法(CPM)的需要

**詳解**

蒙地卡羅模擬透過大量隨機模擬,反映工期估算本身的不確定性,產出的是完工日期的機率分布而非單一保證日期,可用來向利害關係人溝通「多少信心水準能在某日期前完工」,故 (a)(b) 正確。(c) 錯誤,模擬結果是機率分布而非保證;(d) 錯誤,此技術常用於大型複雜專案,活動數量並無此類限制;(e) 錯誤,蒙地卡羅模擬是 CPM 分析之外的補充技術,並非取代關係。

---

### Q92. `sch-090` — 下拉選單題

**題目 ID**: `sch-090`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: In Feature-Driven Development (FDD), the team first works with domain experts to build a high-level overall model of the system; this step is called {{blank1}}. The team then decomposes that model into a prioritized list of small, client-valued features; this step is called {{blank2}}.
- 中: 在功能驅動開發(FDD)中,團隊首先與領域專家合作,建立系統的高階整體模型,此步驟稱為 {{blank1}};接著團隊將此模型拆解為一份依優先順序排列、以客戶價值為中心的小型功能清單,此步驟稱為 {{blank2}}。

**blank1**

- (a) Develop Overall Model / 建立整體模型(Develop Overall Model) ✅ **正解**
- (b) Build Feature List / 建立功能清單(Build Feature List)

**blank2**

- (a) Develop Overall Model / 建立整體模型(Develop Overall Model)
- (b) Build Feature List / 建立功能清單(Build Feature List) ✅ **正解**


**詳解**

FDD 五大流程依序為:①建立整體模型(Develop Overall Model,由領域專家協助定義核心概念與設計基石)②建立功能清單(Build Feature List,拆解模型並依相似性分組排序)③依功能規劃(Plan by Feature)④依功能設計(Design by Feature)⑤依功能建置(Build by Feature)。本題描述的第一步驟是整體模型的建立,對應 blank1;第二步驟則是將模型拆解為功能清單,對應 blank2。

---

### Q93. `sch-091` — 單選題

**題目 ID**: `sch-091`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: While drafting the Schedule Management Plan, the PM compares several possible scheduling approaches — for example, a purely predictive network-diagram approach versus a hybrid approach using rolling-wave iterations — weighing each option's cost, schedule, resource, and risk trade-offs before selecting a methodology. What data analysis technique is the PM using?
- 中: 在草擬時程管理計畫時,專案經理比較數種可能的排程方法——例如純預測型的網路圖方法,對比使用滾動式規劃迭代的混合式方法——並權衡各選項在成本、時程、資源與風險上的取捨,才決定採用的方法論。專案經理使用的是哪一種數據分析技術?

**選項**

- (a) Alternative Analysis / 替代方案分析(Alternative Analysis) ✅ **正解**
- (b) Variance Analysis / 變異分析(Variance Analysis)
- (c) Trend Analysis / 趨勢分析(Trend Analysis)
- (d) Reserve Analysis / 儲備分析(Reserve Analysis)

**詳解**

替代方案分析(Alternative Analysis)是針對特定目標,評估並比較多種可行途徑或方案的成本、時程、資源與風險等條件,協助決策者選出最合適方案的技術,常用於制定時程管理計畫、財務管理計畫等規劃階段,故答案為 (a)。變異分析用於比較實際與計畫的差異;趨勢分析需觀察一段時間的績效模式;儲備分析則是評估風險應留多少時間或預算緩衝,三者皆與本題描述的「事前比較多種方法論選項」不同。

---

### Q94. `sch-092` — 拖拉配對題

**題目 ID**: `sch-092`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: Drag and match each Earned Value term related to schedule performance to the description that best fits it.
- 中: 請將下列與時程績效相關的實獲值(EVM)名詞拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Planned Value (PV) / 計畫值(PV)
- p2: Earned Value (EV) / 實獲值(EV)
- p3: Schedule Variance (SV) / 時程變異(SV)
- p4: Schedule Performance Index (SPI) / 時程績效指標(SPI)

**選項池(拖曳目標)**

- c1: The budgeted value of the work that was scheduled to be completed by a given point in time (Planned % Complete × BAC) / 到特定時間點為止,「應該」完成的工作所對應的預算值(計畫完成% × BAC)
- c2: The budgeted value of the work that has actually been completed by a given point in time (Actual % Complete × BAC) / 到特定時間點為止,「實際」已完成的工作所對應的預算值(實際完成% × BAC)
- c3: EV minus PV; a negative result indicates the project is behind its planned schedule / EV 減 PV;結果為負代表專案落後於計畫時程
- c4: EV divided by PV; a result below 1.0 indicates the project is behind its planned schedule / EV 除以 PV;結果小於 1.0 代表專案落後於計畫時程

**✅ 正確配對**

- p1 → c1: Planned Value (PV) → The budgeted value of the work that was scheduled to be completed by a given point in time (Planned % Complete × BAC)（計畫值(PV) → 到特定時間點為止,「應該」完成的工作所對應的預算值(計畫完成% × BAC)）
- p2 → c2: Earned Value (EV) → The budgeted value of the work that has actually been completed by a given point in time (Actual % Complete × BAC)（實獲值(EV) → 到特定時間點為止,「實際」已完成的工作所對應的預算值(實際完成% × BAC)）
- p3 → c3: Schedule Variance (SV) → EV minus PV; a negative result indicates the project is behind its planned schedule（時程變異(SV) → EV 減 PV;結果為負代表專案落後於計畫時程）
- p4 → c4: Schedule Performance Index (SPI) → EV divided by PV; a result below 1.0 indicates the project is behind its planned schedule（時程績效指標(SPI) → EV 除以 PV;結果小於 1.0 代表專案落後於計畫時程）

**詳解**

PV(計畫值)與 EV(實獲值)是實獲值管理(EVM)的兩個基礎量測值,分別代表「應完成」與「實際完成」的工作預算價值;以兩者為基礎,SV(時程變異,相減)與 SPI(時程績效指標,相除)則是用來評估時程績效的中層指標,負的 SV 或小於 1.0 的 SPI 皆代表專案落後於時程基準,是監控時程(Monitor and Control Schedule)過程中常用的核心公式。

---

### Q95. `sch-093` — 單選題

**題目 ID**: `sch-093`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: A product owner takes the long-term Product Roadmap and works with the team to break it into a sequence of concrete releases, each containing a set of iterations aimed at delivering specific business capabilities to market. What is this activity called?
- 中: 產品負責人將長期的產品路徑圖(Product Roadmap)拆解為一系列具體的發布(Release),每個發布包含數個迭代,旨在將特定的商業能力推向市場。這項活動稱為什麼?

**選項**

- (a) Agile Release Planning / 敏捷發布規劃(Agile Release Planning) ✅ **正解**
- (b) Rolling Wave Planning / 滾動式規劃(Rolling Wave Planning)
- (c) Backlog Refinement / 待辦清單精煉(Backlog Refinement)
- (d) Sprint Planning / 衝刺規劃(Sprint Planning)

**詳解**

敏捷發布規劃(Agile Release Planning)是將高層級的產品路徑圖,拆解為一連串具體發布與迭代的規劃活動,協助團隊將長期願景轉化為可執行的短期交付步驟,故答案為 (a)。滾動式規劃是「近細遠粗」的漸進明細化規劃節奏,並非專指路徑圖拆解;待辦清單精煉是持續為待辦項目補充細節、估算與排序的活動;衝刺規劃則是單一迭代層級的規劃,範圍皆比敏捷發布規劃更小或性質不同。

---

### Q96. `sch-094` — 點擊熱區題

**題目 ID**: `sch-094`

難度: `hard` ｜ 建議作答時間分類: `calculation` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: The diagram below shows a network with Kickoff followed by three parallel tasks — Beta, Gamma, and Delta — which all merge into Wrap-up. Kickoff takes 4 days, Beta takes 10 days, Gamma takes 7 days, Delta takes 2 days, and Wrap-up takes 5 days. Among the three parallel tasks, click the one whose Total Float is exactly 8 days.
- 中: 下圖網路中,Kickoff 之後分為三條並行任務——Beta、Gamma、Delta,三者完成後皆匯流至 Wrap-up。Kickoff 需時 4 天、Beta 需時 10 天、Gamma 需時 7 天、Delta 需時 2 天、Wrap-up 需時 5 天。在三條並行任務中,請點選「總浮時恰好為 8 天」的任務。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) Kickoff (4 days) / Kickoff(4天) [x=5,y=40,w=16,h=20]
- (n2) Beta (10 days) / Beta(10天) [x=28,y=8,w=16,h=20]
- (n3) Gamma (7 days) / Gamma(7天) [x=28,y=40,w=16,h=20]
- (n4) Delta (2 days) / Delta(2天) ✅ **正解** [x=28,y=75,w=16,h=20]
- (n5) Wrap-up (5 days) / Wrap-up(5天) [x=58,y=40,w=16,h=20]

**節點連線(edges,方向性依賴關係,例如網路圖箭頭;有連線的圖面題出考題時不會打亂座標)**

- n1 → n2
- n1 → n3
- n1 → n4
- n2 → n5
- n3 → n5
- n4 → n5

**詳解**

三條路徑:Kickoff→Beta→Wrap-up = 4+10+5 = 19 天,最長,為要徑;Kickoff→Gamma→Wrap-up = 4+7+5 = 16 天,總浮時 = 19−16 = 3 天;Kickoff→Delta→Wrap-up = 4+2+5 = 11 天,總浮時 = 19−11 = 8 天。三條並行任務中,總浮時恰好為 8 天的是 Delta,故答案為 (n4)。Beta 所在路徑最長,總浮時為 0,是要徑上的任務。

---

### Q97. `sch-095` — 多選題

**題目 ID**: `sch-095`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Which two statements correctly describe how Wideband Delphi and Planning Poker each help reduce bias when a team assigns story points? Select two.
- 中: 關於團隊在分配故事點時,寬頻德爾菲法(Wideband Delphi)與撲克牌估算法(Planning Poker)如何協助降低偏誤,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) In Wideband Delphi, estimates are gathered anonymously across multiple rounds so that team members are not unduly influenced by more vocal or senior colleagues (the bandwagon effect) / 在寬頻德爾菲法中,估算會經多輪匿名蒐集,使團隊成員不會過度受較資深或較敢發言的同事影響(從眾效應) ✅ **正解**
- (b) In Planning Poker, team members reveal their estimate cards simultaneously, which helps prevent an early, visible estimate from anchoring everyone else's judgment / 在撲克牌估算法中,團隊成員同時亮出估算卡牌,有助於避免提早亮出的估算值錨定其他人的判斷 ✅ **正解**
- (c) Affinity Estimating requires every item to be discussed individually and assigned a precise numeric point value before it can be grouped / 相對估算分組法(Affinity Estimating)要求每個項目都必須先被個別討論並賦予精確的數字點數,才能分組
- (d) Both techniques guarantee that every team member's estimate will be numerically identical once the round is complete / 這兩種技巧都能保證一輪結束後,每位團隊成員的估算數字必定完全相同
- (e) T-shirt sizing (S/M/L/XL) is a form of precise numeric estimation with no relative comparison involved / 衣服尺寸估算法(S/M/L/XL)是一種精確的數字估算方式,不涉及相對比較

**詳解**

寬頻德爾菲法透過多輪匿名蒐集估算,降低從眾效應(Bandwagon Effect)的影響,故 (a) 正確;撲克牌估算法讓成員同時亮牌,避免第一個公開的估算值錨定其他人的判斷,故 (b) 正確。(c) 錯誤,相對估算分組法(Affinity Estimating)的特色正是「不逐一詳細討論」,而是依相對大小快速分組;(d) 錯誤,這兩種技巧的目的是促成收斂與共識,而非保證數字完全一致,遇分歧仍需討論;(e) 錯誤,衣服尺寸估算法是相對、粗略的估算方式,並非精確數字估算。

---

### Q98. `sch-096` — 單選題

**題目 ID**: `sch-096`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `Process`

**題幹**

- EN: An organization wants a way to choose and tailor its own "way of working" (WoW) by drawing on practices from Scrum, Kanban, SAFe, and even traditional predictive approaches, rather than adopting a single prescribed method. Which of the following best describes what they are looking for?
- 中: 某組織希望有一種方式,能夠融合 Scrum、看板、SAFe 甚至傳統預測型做法中的實務,自行選擇並客製化組織的「工作方式(WoW)」,而非採用單一固定方法論。下列何者最能描述他們正在尋找的方法?

**選項**

- (a) Disciplined Agile (DA) / 紀律敏捷(Disciplined Agile) ✅ **正解**
- (b) Extreme Programming (XP) / 極限編程(XP)
- (c) PRINCE2 / PRINCE2
- (d) The Scrum Guide / Scrum 指南

**詳解**

紀律敏捷(Disciplined Agile, DA)是一套「工具」而非單一「方法論」,融合了 Agile、Lean、Kanban、SAFe 與傳統做法,協助組織依專案特性選擇並客製化自己的工作方式(Way of Working, WoW),強調「沒有一種方法適用所有情境」,故答案為 (a)。極限編程(XP)、Scrum 指南本身各自是具體且較為固定的單一方法論;PRINCE2 則是一套結構化的專案管理方法論,皆非本題所描述「協助選擇並融合多種方法」的工具型框架。

---

### Q99. `sch-097` — 拖拉配對題

**題目 ID**: `sch-097`

難度: `hard` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Drag and match each framework or method to the description that best fits it.
- 中: 請將下列框架或方法拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: SAFe (Scaled Agile Framework) / SAFe(規模化敏捷框架)
- p2: Disciplined Agile (DA) / 紀律敏捷(DA)
- p3: Crystal / Crystal 方法
- p4: FDD (Feature-Driven Development) / 功能驅動開發(FDD)

**選項池(拖曳目標)**

- c1: A framework for large enterprises that blends agile, lean, and DevOps principles to align multiple teams around common business objectives, typically requiring significant leadership commitment and training to adopt / 適用於大型企業的框架,融合敏捷、精實與 DevOps 原則,協助多團隊對齊共同商業目標,採用時通常需要高強度的領導投入與訓練
- c2: A toolkit, rather than a single fixed method, that helps an organization choose and tailor its own way of working by drawing on agile, lean, Kanban, and even traditional practices / 一套工具而非單一固定方法,協助組織融合敏捷、精實、看板甚至傳統做法,自行選擇並客製化工作方式
- c3: A family of lightweight methods whose specific practices scale up or down based on team size and project criticality, prioritizing people, interaction, and communication over heavy process / 一系列輕量級方法家族,依團隊規模與專案重要性調整具體實務作法,重視人員、互動與溝通勝過繁重流程
- c4: A method centered on an upfront overall model and a prioritized feature list, suited to large, complex systems that need architectural discipline alongside iterative feature delivery / 一種以事前建立整體模型與功能優先清單為核心的方法,適用於需要架構紀律、同時採迭代式功能交付的大型複雜系統

**✅ 正確配對**

- p1 → c1: SAFe (Scaled Agile Framework) → A framework for large enterprises that blends agile, lean, and DevOps principles to align multiple teams around common business objectives, typically requiring significant leadership commitment and training to adopt（SAFe(規模化敏捷框架) → 適用於大型企業的框架,融合敏捷、精實與 DevOps 原則,協助多團隊對齊共同商業目標,採用時通常需要高強度的領導投入與訓練）
- p2 → c2: Disciplined Agile (DA) → A toolkit, rather than a single fixed method, that helps an organization choose and tailor its own way of working by drawing on agile, lean, Kanban, and even traditional practices（紀律敏捷(DA) → 一套工具而非單一固定方法,協助組織融合敏捷、精實、看板甚至傳統做法,自行選擇並客製化工作方式）
- p3 → c3: Crystal → A family of lightweight methods whose specific practices scale up or down based on team size and project criticality, prioritizing people, interaction, and communication over heavy process（Crystal 方法 → 一系列輕量級方法家族,依團隊規模與專案重要性調整具體實務作法,重視人員、互動與溝通勝過繁重流程）
- p4 → c4: FDD (Feature-Driven Development) → A method centered on an upfront overall model and a prioritized feature list, suited to large, complex systems that need architectural discipline alongside iterative feature delivery（功能驅動開發(FDD) → 一種以事前建立整體模型與功能優先清單為核心的方法,適用於需要架構紀律、同時採迭代式功能交付的大型複雜系統）

**詳解**

SAFe 適合需要多團隊對齊、高規範的大型企業環境;紀律敏捷(DA)是協助組織融合多種方法、客製化工作方式的工具型框架;Crystal 是依團隊規模分級(如 Clear、Yellow、Orange 等)的輕量級方法家族,強調人員互動勝過流程;FDD 則透過事前整體模型與功能清單,兼顧架構紀律與迭代交付,適用於大型複雜系統。四者皆是因應不同組織規模與情境而發展出的方法論或框架,是「因材施教(Tailoring)」精神的具體展現。

---

### Q100. `sch-098` — 下拉選單題

**題目 ID**: `sch-098`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: A team takes its high-level Product Roadmap and breaks it down into a series of concrete {{blank1}}, each of which is further broken down into specific {{blank2}} that the team will work through sprint by sprint. This overall breakdown process is known as Agile Release Planning.
- 中: 團隊將高層級的產品路徑圖(Product Roadmap)拆解為一系列具體的 {{blank1}},每個 {{blank1}} 再進一步拆解為團隊會逐個衝刺完成的具體 {{blank2}}。這整個拆解過程稱為敏捷發布規劃(Agile Release Planning)。

**blank1**

- (a) Releases / 發布(Releases) ✅ **正解**
- (b) Story Points / 故事點(Story Points)

**blank2**

- (a) Releases / 發布(Releases)
- (b) Iterations (Sprints) / 迭代(衝刺,Iterations/Sprints) ✅ **正解**


**詳解**

敏捷發布規劃(Agile Release Planning)將產品路徑圖由上而下拆解:先拆解為數個發布(Release),每個發布再進一步拆解為數個迭代(Iteration/Sprint),團隊即依此逐個迭代完成工作,故 blank1 應選「發布(Releases)」,blank2 應選「迭代(Iterations/Sprints)」。故事點是用於估算個別待辦項目工作量的單位,並非發布規劃拆解出的層級,不適用於本題的兩個空格。

---

### Q101. `sch-099` — 單選題

**題目 ID**: `sch-099`

難度: `medium` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: During Develop Schedule, the risk register identifies several specific, analyzed risks — such as a known but uncertain permit delay — that could affect the project finish date. To protect the finish date against these already-identified risks, without changing the deterministic duration estimates of the activities themselves, what should the PM add to the schedule?
- 中: 在發展時程過程中,風險登記冊列出數項已被具體分析的風險——例如已知但不確定的許可延遲——可能影響專案完工日。為了在不更動各活動本身確定性工期估算的前提下,保護完工日不受這些「已識別」風險的影響,專案經理應在時程中加入什麼?

**選項**

- (a) A contingency reserve (schedule buffer) sized based on the identified risks in the risk register / 依風險登記冊中已識別的風險訂定規模的權變儲備(時程緩衝) ✅ **正解**
- (b) Unlimited crashing applied to every activity in the schedule / 對時程中每項活動都進行無上限的趕工
- (c) A management reserve controlled directly by the sponsor, outside the PM's authority / 由贊助人直接掌控、專案經理權限之外的管理儲備
- (d) Nothing, since three-point estimates already fully account for all possible risk / 不需要加入任何東西,因為三點估算已完全涵蓋所有可能的風險

**詳解**

針對已被識別且分析過的已知風險(Known-Unknowns),應加入權變儲備(Contingency Reserve,亦即時程緩衝),其規模通常依風險登記冊中的具體風險評估訂定,且屬於專案經理權限範圍內、納入時程基準管理,故答案為 (a)。無上限趕工並非因應已識別風險的做法,且會大幅增加成本;管理儲備(Management Reserve)則是用來因應「未知的未知」(Unknown-Unknowns),通常由管理層掌控、不納入基準;三點估算雖能反映活動本身的不確定性,但無法涵蓋風險登記冊中具體識別出的個別風險事件,仍需額外的權變儲備。

---

### Q102. `sch-100` — 多選題

**題目 ID**: `sch-100`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹**

- EN: Which two statements correctly describe when Feature-Driven Development (FDD) tends to be a good fit? Select two.
- 中: 關於功能驅動開發(FDD)適合採用的情境,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) It suits large, complex systems that benefit from an upfront overall model and strong architectural/design discipline / 它適合需要事前建立整體模型與強架構/設計紀律的大型複雜系統 ✅ **正解**
- (b) It combines short, regular feature-level iterations with a domain-expert-driven overall model, making it useful when predictability and structured planning matter alongside iterative delivery / 它結合短期規律的功能層級迭代與由領域專家主導的整體模型,適合同時重視可預測性、結構化規劃與迭代交付的情境 ✅ **正解**
- (c) It is intended primarily for very small teams building a minimum viable product with minimal upfront design / 它主要是為打造最小可行產品(MVP)的極小型團隊設計,幾乎不需要事前設計
- (d) It eliminates the need for any feature list or planning once the overall model is complete / 一旦整體模型完成,就不再需要任何功能清單或規劃
- (e) It cannot be combined with iterative, incremental delivery of working software / 它無法與可用軟體的迭代增量交付方式並用

**詳解**

FDD 適合大型、複雜系統,透過事前建立整體模型與依功能規劃/設計/建置,兼顧架構紀律與迭代交付的可預測性,故 (a)(b) 正確。(c) 錯誤,FDD 並非為極小型 MVP 團隊設計,反而更適合大型團隊與複雜系統;(d) 錯誤,建立功能清單、依功能規劃等後續步驟仍是 FDD 流程中不可或缺的部分;(e) 錯誤,FDD 本身即整合了敏捷開發與迭代增量交付的精神,並非與之互斥。

---

### Q103. `sch-101` — 拖拉配對題

**題目 ID**: `sch-101`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Drag and match each story point estimation technique to the description that best fits it.
- 中: 請將下列故事點估算技巧拖曳配對到最符合的描述。

**配對項目(拖曳來源)**

- p1: Planning Poker / 撲克牌估算法(Planning Poker)
- p2: Affinity Estimating / 相對估算分組法(Affinity Estimating)
- p3: Wideband Delphi / 寬頻德爾菲法(Wideband Delphi)
- p4: T-Shirt Sizing / 衣服尺寸估算法(T-Shirt Sizing)

**選項池(拖曳目標)**

- c1: Team members each privately select a Fibonacci-based numeric card and reveal their estimates simultaneously, discussing any large gaps before converging / 每位團隊成員各自私下選擇一張以費波那契數列為基礎的數字卡牌,同時亮牌,若估算差距過大則進一步討論後收斂
- c2: Team members quietly sort work items into relative-size groupings based on how they compare to one another, without discussing each item individually in detail / 團隊成員安靜地依工作項目彼此的相對大小進行分組,不逐一詳細討論個別項目
- c3: Estimates are collected anonymously across multiple rounds, with team members revising their estimates after seeing the group's (also anonymous) spread, to avoid one person's opinion dominating / 估算會經多輪匿名蒐集,團隊成員在看到(同樣匿名的)團體估算分布後修正自己的估算,以避免單一人的意見主導結果
- c4: Items are sorted into broad relative categories such as S, M, L, and XL rather than being assigned precise numeric values / 項目被歸類到 S、M、L、XL 等粗略的相對類別中,而非被賦予精確的數字

**✅ 正確配對**

- p1 → c1: Planning Poker → Team members each privately select a Fibonacci-based numeric card and reveal their estimates simultaneously, discussing any large gaps before converging（撲克牌估算法(Planning Poker) → 每位團隊成員各自私下選擇一張以費波那契數列為基礎的數字卡牌,同時亮牌,若估算差距過大則進一步討論後收斂）
- p2 → c2: Affinity Estimating → Team members quietly sort work items into relative-size groupings based on how they compare to one another, without discussing each item individually in detail（相對估算分組法(Affinity Estimating) → 團隊成員安靜地依工作項目彼此的相對大小進行分組,不逐一詳細討論個別項目）
- p3 → c3: Wideband Delphi → Estimates are collected anonymously across multiple rounds, with team members revising their estimates after seeing the group's (also anonymous) spread, to avoid one person's opinion dominating（寬頻德爾菲法(Wideband Delphi) → 估算會經多輪匿名蒐集,團隊成員在看到(同樣匿名的)團體估算分布後修正自己的估算,以避免單一人的意見主導結果）
- p4 → c4: T-Shirt Sizing → Items are sorted into broad relative categories such as S, M, L, and XL rather than being assigned precise numeric values（衣服尺寸估算法(T-Shirt Sizing) → 項目被歸類到 S、M、L、XL 等粗略的相對類別中,而非被賦予精確的數字）

**詳解**

四種故事點估算技巧皆強調相對比較而非絕對精確數字:撲克牌估算法透過同時亮牌避免錨定效應;相對估算分組法讓團隊快速依相對大小分組,不逐一細究;寬頻德爾菲法以多輪匿名蒐集降低從眾效應;衣服尺寸估算法則以最粗略的類別(S/M/L/XL)快速排序。這些技巧共同的精神是:與其追求不切實際的絕對精確度,不如善用團隊對相對規模的直覺判斷。

---

### Q104. `sch-102` — 下拉選單題

**題目 ID**: `sch-102`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `BusinessEnvironment`

**題幹樣板(含填空標記,兩語言都要標記 {{blankId}})**

- EN: To protect the schedule against risks that have already been identified and analyzed in the risk register (known-unknowns), the PM adds a {{blank1}} to the schedule, which remains within the PM's authority. To protect against risks that could not have been foreseen at all (unknown-unknowns), a separate {{blank2}}, typically controlled at a higher organizational level, is set aside instead.
- 中: 為了保護時程不受已於風險登記冊中被識別並分析過的風險(已知的未知)影響,專案經理會在時程中加入 {{blank1}},此項儲備仍屬於專案經理的權限範圍;而為了因應完全無法預見的風險(未知的未知),則會另外預留 {{blank2}},通常由組織較高層級掌控。

**blank1**

- (a) Contingency Reserve / 權變儲備(Contingency Reserve) ✅ **正解**
- (b) Management Reserve / 管理儲備(Management Reserve)

**blank2**

- (a) Contingency Reserve / 權變儲備(Contingency Reserve)
- (b) Management Reserve / 管理儲備(Management Reserve) ✅ **正解**


**詳解**

權變儲備(Contingency Reserve)是針對風險登記冊中已識別、已分析過的已知風險(Known-Unknowns)所預留的緩衝,屬於專案經理權限範圍內,通常納入時程或成本基準管理,對應 blank1。管理儲備(Management Reserve)則是為因應完全無法預見的未知風險(Unknown-Unknowns)而預留,通常由贊助人或管理層掌控,不納入基準,需經正式變更程序才能動用,對應 blank2。兩者雖然都是「緩衝」的概念,但適用對象、管理權限與是否納入基準皆不相同,是考試中容易混淆的一組名詞。

---

### Q105. `sch-103` — 單選題

**題目 ID**: `sch-103`

難度: `hard` ｜ 建議作答時間分類: `predictive_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: The project is currently 10 days behind the approved schedule baseline. Ahead of the steering committee meeting, a senior manager privately asks the PM to report the project as "on track" in the summary slide, promising that the delay will "surely be recovered" next month. What should the PM do?
- 中: 專案目前落後於核准時程基準 10 天。在指導委員會會議前,一位資深經理私下要求專案經理在摘要投影片上將專案回報為「進度正常」,並保證下個月「一定能追回」延遲。專案經理應如何做?

**選項**

- (a) Report the project as on track as requested, since the manager is confident it will recover / 依要求回報進度正常,因為經理有信心能追回進度
- (b) Report the actual schedule status transparently, including the variance, root cause, and a recovery plan, regardless of the informal request / 誠實透明地回報實際時程狀況,包含變異、根本原因與復原計畫,不受此非正式要求影響 ✅ **正解**
- (c) Report the project as on track in the meeting, but privately tell a few trusted stakeholders the truth / 在會議中回報進度正常,但私下告訴少數信任的利害關係人真相
- (d) Decline to attend the steering committee meeting to avoid the conflict / 拒絕出席指導委員會會議以迴避此衝突

**詳解**

依照專業責任與誠實原則,專案經理應誠實、透明地回報專案實際狀況,包含時程變異、根本原因分析與具體的復原計畫,即使這與某位經理私下的非正式要求相牴觸,也不應為求好看而隱瞞或美化真實績效,故答案為 (b)。依要求虛報進度、對不同對象選擇性揭露真相,或迴避正式報告場合,皆違背誠實揭露與利害關係人溝通的專業責任,可能造成更大的信任危機與決策失誤。

---

### Q106. `sch-104` — 點擊熱區題

**題目 ID**: `sch-104`

難度: `easy` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok7` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: The four cards below give possible reasons agile teams often use a Fibonacci-like sequence (1, 2, 3, 5, 8, 13, 21...) rather than a simple linear scale (1, 2, 3, 4, 5...) when assigning story points. Click the card that correctly explains this choice.
- 中: 下方四張卡片列出敏捷團隊在分配故事點時,常使用費波那契數列(1、2、3、5、8、13、21…)而非簡單線性數列(1、2、3、4、5…)的可能原因。請點選正確解釋此做法的卡片。

**熱區選項**(方括號是畫面上的座標百分比,新增題目不填也沒關係,匯入時會自動排版)

- (n1) The widening gaps between larger numbers reflect that estimates naturally become less precise as item size and uncertainty grow, discouraging false precision on large items / 數字間隔隨數值增大而擴大,反映項目規模與不確定性愈大時,估算自然愈不精確,避免對大型項目做出虛假的精確估算 ✅ **正解** [x=10,y=15,w=35,h=25]
- (n2) It guarantees that every story will be completed within exactly that many days / 它保證每個故事都會剛好在對應的天數內完成 [x=55,y=15,w=35,h=25]
- (n3) It is required by the Scrum Guide as the only permitted estimation scale / 這是 Scrum 指南規定唯一允許使用的估算數列 [x=10,y=60,w=35,h=25]
- (n4) It ensures the team's velocity will be identical in every sprint / 它能確保團隊的產出速度在每個衝刺都完全相同 [x=55,y=60,w=35,h=25]

**詳解**

費波那契類數列(如 1、2、3、5、8、13、21)隨數值增大,相鄰數字間的間距也隨之擴大,恰好反映出:項目規模愈大,估算的不確定性通常也愈高,團隊不應該、也難以對大型項目做出過度精確的估算,故答案為 (n1)。故事點本身只是相對規模的估算單位,不代表保證的完成天數;Scrum 指南也未硬性規定必須使用費波那契數列(團隊可依共識選擇任何相對估算尺度,如衣服尺寸);故事點與產出速度也無法保證每次迭代完全相同,產出速度本身即存在自然波動。

---

### Q107. `sch-105` — 多選題

**題目 ID**: `sch-105`

難度: `medium` ｜ 建議作答時間分類: `definition` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Which two statements correctly describe the use of Kano Analysis for prioritizing product features? Select two.
- 中: 關於使用卡諾分析(Kano Analysis)為產品功能排序優先順序,下列哪兩項敘述正確?請選擇兩項。

**選項**

- (a) It plots features along two axes — degree of functionality/investment and resulting customer satisfaction — to reveal which features yield disproportionate satisfaction gains / 它以「功能實現程度/投入」與「客戶滿意度」兩軸繪製功能,以呈現哪些功能能帶來不成比例的滿意度提升 ✅ **正解**
- (b) It helps distinguish basic expected features from features that delight customers, informing which increments of work stakeholders may value most / 它有助於區分基本必要功能與能讓客戶驚喜的功能,協助判斷利害關係人可能最重視哪些工作增量 ✅ **正解**
- (c) It assigns Fibonacci-based numeric estimates to each feature's implementation effort / 它會為每項功能的實作工作量賦予以費波那契數列為基礎的數字估算
- (d) It is only used at project closure to evaluate lessons learned, never during backlog prioritization / 它只用於專案結束時評估經驗教訓,絕不會用於待辦清單排序
- (e) It guarantees that features with the highest satisfaction score always require the least implementation effort / 它保證滿意度分數最高的功能,一定需要最少的實作工作量

**詳解**

卡諾分析以「功能實現程度」與「客戶滿意度」兩軸,協助團隊區分基本必要功能(不滿足會導致強烈不滿,滿足卻不特別加分)與能帶來超乎預期滿意度的功能,故 (a)(b) 正確。(c) 錯誤,賦予費波那契數字估算屬於故事點估算技巧(如撲克牌估算法),並非卡諾分析的功能;(d) 錯誤,卡諾分析通常用於規劃階段協助待辦清單排序,而非僅限於專案結束時的回顧;(e) 錯誤,滿意度高的功能不必然代表實作工作量最低,兩者並無必然的反向關係。

---

### Q108. `sch-106` — 單選題

**題目 ID**: `sch-106`

難度: `medium` ｜ 建議作答時間分類: `agile_scenario` ｜ 版本標籤: `pmbok8` ｜ 原始 performanceDomain: `Schedule` ｜ ECO domain: `People`

**題幹**

- EN: Two days before the Sprint Review, the team is already fully committed to its sprint backlog based on its historical velocity. A stakeholder asks the PM to add "just one more small item" directly into the current sprint, without going through the Product Owner or discussing capacity with the team. What should the PM do?
- 中: 距離衝刺審查(Sprint Review)還有兩天,團隊已依歷史產出速度全力承諾完成本次衝刺待辦清單。一位利害關係人要求專案經理直接在本次衝刺中「多加一個小項目」,未經產品負責人同意,也未與團隊討論產能。專案經理應如何做?

**選項**

- (a) Add the item immediately since it is described as small, to keep the stakeholder happy / 因為對方說是小項目,立即加入以讓利害關係人滿意
- (b) Redirect the stakeholder to raise the request with the Product Owner for prioritization in the product backlog, and protect the team's current sprint commitment from unplanned mid-sprint additions / 引導該利害關係人將需求提交給產品負責人,由其在產品待辦清單中排序,並保護團隊目前的衝刺承諾不受計畫外的中途插入影響 ✅ **正解**
- (c) Add the item and instruct the team to work unpaid overtime to absorb the extra work / 加入該項目,並指示團隊以無償加班來吸收額外工作量
- (d) Silently remove a different committed item from the sprint without telling the team, to make room for the new one / 未告知團隊,私下從衝刺中移除另一項已承諾的項目,以騰出空間給新項目

**詳解**

依服務型領導(Servant Leadership)精神,專案經理應保護團隊的衝刺承諾不受計畫外中途插入的干擾,並尊重產品負責人對產品待辦清單的排序權責,將新需求導回正式管道由產品負責人評估與排序,故答案為 (b)。未經評估直接插入項目、以無償加班強迫吸收額外工作,或未告知團隊便私自調整承諾範圍,皆違背保護團隊、尊重團隊自組織與透明溝通的核心原則。

---
