// 此檔案由 `npm run import:quiz` 從 quiz/*.md 自動產生,請直接修改 quiz/*.md 後重新匯入,
// 不要手動編輯這個檔案 —— 下次匯入會整份覆蓋。
//
// 考生會看到的文字一律用 { en, zh } 雙語結構(對應正式 PMP 考試「英文為主 + 可切換輔助語言」的介面)。
// explanation(詳解)固定繁中,僅供交卷後複習用,不隨考試語言切換。

export const sampleQuestions = [
  {
    id: "sc-002",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "In the PMBOK 8th edition, the former Integration Management concept primarily maps to which performance domain?",
      zh: "在 PMBOK 8th 版中,原本的 Integration(整合管理)概念主要對應到哪一個績效領域?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Scope",
          zh: "Scope",
        },
      },
      {
        id: "b",
        text: {
          en: "Governance",
          zh: "Governance",
        },
      },
      {
        id: "c",
        text: {
          en: "Resources",
          zh: "Resources",
        },
      },
      {
        id: "d",
        text: {
          en: "Stakeholders",
          zh: "Stakeholders",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "依 PMBOK 8th 版對照表,舊制 Integration Management 對應到新制的 Governance 績效領域。",
  },
  {
    id: "mr-002",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Planning",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "In the Planning performance domain, which of the following are characteristics of good planning activities? (Select three.)",
      zh: "在規劃(Planning)績效領域中,下列哪些是良好規劃活動應具備的特性?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Planning is an ongoing, iterative activity",
          zh: "規劃是持續且反覆進行的活動",
        },
      },
      {
        id: "b",
        text: {
          en: "Once the project starts, the plan should no longer change",
          zh: "一旦專案啟動,規劃內容不應再變更",
        },
      },
      {
        id: "c",
        text: {
          en: "The degree of planning should be tailored to project complexity and uncertainty",
          zh: "規劃程度應依專案複雜度與不確定性裁適(tailor)",
        },
      },
      {
        id: "d",
        text: {
          en: "Planning requires participation from the team and stakeholders",
          zh: "規劃需要團隊與利害關係人共同參與",
        },
      },
      {
        id: "e",
        text: {
          en: "Planning only needs to be done independently by the project manager",
          zh: "規劃只需由專案經理獨立完成即可",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
      "d",
    ],
    selectCount: 3,
    explanation: "規劃應是持續進行、依情境裁適、並由團隊與利害關係人共同參與的活動,而非一次性且由 PM 獨自完成。",
  },
  {
    id: "dd-002",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Development Approach and Life Cycle",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "If project requirements are clear and the risk of change is low, a {{blank1}} development approach is suitable; if requirements are highly uncertain and frequent feedback is needed, a {{blank2}} development approach is more suitable.",
      zh: "若專案需求明確且變動風險低,適合採用 {{blank1}} 開發方法;若需求高度不確定且需要頻繁回饋,則較適合採用 {{blank2}} 開發方法。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Predictive",
              zh: "預測型(Predictive)",
            },
          },
          {
            id: "b",
            text: {
              en: "Adaptive",
              zh: "適應型(Adaptive)",
            },
          },
        ],
      },
      {
        id: "blank2",
        options: [
          {
            id: "a",
            text: {
              en: "Predictive",
              zh: "預測型(Predictive)",
            },
          },
          {
            id: "b",
            text: {
              en: "Adaptive",
              zh: "適應型(Adaptive)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "需求明確、變動少適合預測型(瀑布式);需求不確定、需頻繁回饋則適合適應型(Agile/迭代式)開發方法。",
  },
  {
    id: "sc-003",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project manager joins an organization that uses a directive PMO. The PMO mandates the methodology and templates to be used, assigns project managers to projects, and requires project managers to report progress directly to the PMO. This project manager would prefer to use a different delivery approach. What should the project manager do?",
      zh: "一位專案經理加入一個採用指導型 PMO(Directive PMO)的組織。該 PMO 強制規定必須使用的方法論與範本,負責指派專案經理到各專案,並要求專案經理直接向 PMO 回報進度。這位專案經理比較希望採用不同的交付方法。這位專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Use the preferred approach, since the project manager is accountable for delivery.",
          zh: "採用自己偏好的方法,因為專案經理對交付成果負最終責任。",
        },
      },
      {
        id: "b",
        text: {
          en: "Follow the mandated methodology, since this PMO directs the project and the project manager reports to it.",
          zh: "遵循被強制規定的方法論,因為這個 PMO 直接主導專案,且專案經理須向其回報。",
        },
      },
      {
        id: "c",
        text: {
          en: "Adopt the mandated templates but apply the preferred delivery approach wherever possible.",
          zh: "採用被規定的範本,但盡可能在能夠的地方套用自己偏好的交付方法。",
        },
      },
      {
        id: "d",
        text: {
          en: "Request that the PMO grant an exception for this particular project.",
          zh: "請求 PMO 為這個專案特別給予例外許可。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "指導型 PMO(Directive PMO)會直接指派專案經理、強制規定方法論,並要求專案經理向其回報,代表 PMO 對專案握有直接控制權。在這種情境下,專案經理應在 PMO 訂定的框架內執行,而非以個人偏好取代組織規定。這是三種 PMO 類型(支持型 Supportive、控制型 Controlling、指導型 Directive)中控制程度最高的一種。",
  },
  {
    id: "sc-004",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project team is comparing several options and selects the one with the best financial return, without considering the project's environmental or social effects. According to the sustainability principle, what should the team do?",
      zh: "專案團隊在比較數個方案時,選擇了財務報酬最佳的方案,卻沒有考量該方案對環境或社會的影響。依據永續性原則,這個團隊應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Proceed with the option that delivers the best financial return.",
          zh: "直接採用財務報酬最佳的方案。",
        },
      },
      {
        id: "b",
        text: {
          en: "Choose the option with the lowest upfront cost to protect the budget.",
          zh: "選擇前期成本最低的方案以保護預算。",
        },
      },
      {
        id: "c",
        text: {
          en: "Postpone environmental and social considerations until after delivery.",
          zh: "將環境與社會層面的考量延後到交付之後再處理。",
        },
      },
      {
        id: "d",
        text: {
          en: "Balance social, environmental, and economic outcomes when comparing the options.",
          zh: "在比較方案時,同時權衡社會、環境與經濟三方面的成果。",
        },
      },
    ],
    correctAnswer: "d",
    explanation: "這反映了「整合永續性(Integrate Sustainability)」原則。永續性強調三重基線(triple bottom line),也就是同時平衡社會、環境與經濟三個面向的成果。方案比較不應只看財務報酬,而應該綜合評估這三個面向。",
  },
  {
    id: "sc-005",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In PMBOK 8th edition, which performance domain covers defining and decomposing project deliverables into a work breakdown structure?",
      zh: "在 PMBOK 8th 版中,哪一個績效領域涵蓋定義專案交付標的,並將其分解為工作分解結構(WBS)?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Governance",
          zh: "Governance",
        },
      },
      {
        id: "b",
        text: {
          en: "Scope",
          zh: "Scope",
        },
      },
      {
        id: "c",
        text: {
          en: "Schedule",
          zh: "Schedule",
        },
      },
      {
        id: "d",
        text: {
          en: "Resources",
          zh: "Resources",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Scope 績效領域涵蓋範疇定義、需求蒐集與 WBS 分解等活動,對應舊制的 Scope Management 知識領域。",
  },
  {
    id: "match-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each of the 5 Focus Areas to the activity description that best fits it.",
      zh: "請將下列 5 大 Focus Areas 拖曳配對到最符合的活動描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Initiating",
            zh: "啟動(Initiating)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Planning",
            zh: "規劃(Planning)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Executing",
            zh: "執行(Executing)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Monitoring & Controlling",
            zh: "監控(Monitoring & Controlling)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Closing",
            zh: "結束(Closing)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Approve the project charter and formally authorize the project to begin",
            zh: "核准專案章程,正式授權專案展開",
          },
        },
        {
          id: "c2",
          text: {
            en: "Coordinate resources to complete the work defined in the plan",
            zh: "協調資源完成規劃中定義的工作",
          },
        },
        {
          id: "c3",
          text: {
            en: "Track deviations between actual progress and baseline, and take corrective action",
            zh: "追蹤實際進度與基準的偏差並採取修正行動",
          },
        },
        {
          id: "c4",
          text: {
            en: "Establish scope, schedule, and cost baselines",
            zh: "制定範疇、時程與成本基準",
          },
        },
        {
          id: "c5",
          text: {
            en: "Obtain final acceptance and release project resources",
            zh: "取得最終驗收並釋出專案資源",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c4",
      p3: "c2",
      p4: "c3",
      p5: "c5",
    },
    explanation: "PMBOK 8th 版重新引入的 5 大 Focus Areas 對應舊制流程群組: Initiating(啟動)、Planning(規劃)、Executing(執行)、Monitoring & Controlling(監控)、Closing(結束)。",
  },
  {
    id: "hs-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which both merge into Task D. Task A takes 3 days, Task B takes 5 days, Task C takes 8 days, and Task D takes 4 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).",
      zh: "下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後皆匯流至 Task D。Task A 需時 3 天、Task B 需時 5 天、Task C 需時 8 天、Task D 需時 4 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Task A (3 days)",
          zh: "Task A(3天)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Task B (5 days)",
          zh: "Task B(5天)",
        },
        x: 30,
        y: 10,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Task C (8 days)",
          zh: "Task C(8天)",
        },
        x: 30,
        y: 70,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Task D (4 days)",
          zh: "Task D(4天)",
        },
        x: 60,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n2",
    explanation: "此為菱形網路圖:Task A 是兩條路徑共同的起點,Task D 是兩條路徑共同的匯流點,Task B 與 Task C 則是中間並行的兩條分支。路徑一 A→B→D = 3+5+4 = 12 天;路徑二 A→C→D = 3+8+4 = 15 天,較長,為要徑。因此 A、C、D 皆位於要徑上、總浮時為 0;只有 B 不在要徑上,總浮時 = 15−12 = 3 天。A 與 D 分別是兩條路徑共用的起點與匯流點,兩條路徑都得經過它們,所以恆為要徑上的 0 浮時節點;真正可能出現浮時的只有並行分支 B、C 之中工期較短的那一條。",
  },
  {
    id: "calc-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $50,000, EV = $45,000, and AC = $40,000. What is the Cost Performance Index (CPI)?",
      zh: "某專案 PV(計畫值)= $50,000,EV(實獲值)= $45,000,AC(實際成本)= $40,000。請問成本績效指標(CPI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "1.125",
          zh: "1.125",
        },
      },
      {
        id: "b",
        text: {
          en: "0.89",
          zh: "0.89",
        },
      },
      {
        id: "c",
        text: {
          en: "1.11",
          zh: "1.11",
        },
      },
      {
        id: "d",
        text: {
          en: "0.80",
          zh: "0.80",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "CPI = EV / AC = 45,000 / 40,000 = 1.125。CPI > 1 表示成本績效優於預算(花費比賺得的價值少)。",
  },
  {
    id: "mr-001",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which two of the following are key practices for effective stakeholder engagement? (Select two.)",
      zh: "下列哪兩項是有效利害關係人參與(Stakeholder Engagement)的關鍵作法?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Communicate with stakeholders only at project start and closeout",
          zh: "僅在專案啟動與結束時與利害關係人溝通",
        },
      },
      {
        id: "b",
        text: {
          en: "Continuously assess changes in stakeholder engagement levels",
          zh: "持續評估利害關係人的參與程度變化",
        },
      },
      {
        id: "c",
        text: {
          en: "Tailor communication strategy based on stakeholder power and interest",
          zh: "依利害關係人的影響力與利益調整溝通策略",
        },
      },
      {
        id: "d",
        text: {
          en: "Treat all stakeholders with the same communication approach",
          zh: "將所有利害關係人一律用同一種溝通方式對待",
        },
      },
    ],
    correctAnswer: [
      "b",
      "c",
    ],
    selectCount: 2,
    explanation: "有效的利害關係人參與需要持續監控其參與程度,並依據影響力/利益調整客製化的溝通與互動策略。",
  },
  {
    id: "match-002",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each stakeholder engagement strategy to the scenario it best fits.",
      zh: "請將下列利害關係人參與策略拖曳配對到對應的情境描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Monitor",
            zh: "監控(Monitor)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Keep Informed",
            zh: "隨時告知(Keep Informed)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Keep Satisfied",
            zh: "保持滿意(Keep Satisfied)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Manage Closely",
            zh: "密切管理(Manage Closely)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Low power, low interest — monitor with minimal effort",
            zh: "低影響力、低利益,僅需最小程度關注",
          },
        },
        {
          id: "c2",
          text: {
            en: "Low power, high interest — keep informed regularly",
            zh: "低影響力、高利益,需定期提供資訊",
          },
        },
        {
          id: "c3",
          text: {
            en: "High power, low interest — keep satisfied to avoid unwanted interference",
            zh: "高影響力、低利益,需維持其滿意度以免介入干預",
          },
        },
        {
          id: "c4",
          text: {
            en: "High power, high interest — manage closely with frequent collaboration",
            zh: "高影響力、高利益,需密切合作與頻繁溝通",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
    },
    explanation: "此為利害關係人權力/利益方格(Power/Interest Grid)四個象限對應的典型參與策略。",
  },
  {
    id: "sc-001",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Team",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "Two senior engineers on a project team disagree over which technical approach to use. The disagreement is becoming heated and has begun to affect the morale of other team members who are trying to stay focused on their work. What should the project manager do first?",
      zh: "專案團隊中兩位資深工程師對於該採用哪種技術方案意見不合。這場爭執逐漸變得激烈,並開始影響其他努力專注於工作的團隊成員士氣。身為專案經理,你應該優先怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Select one technical approach and direct the team to proceed with it.",
          zh: "自行選定一個技術方案,並指示團隊照辦。",
        },
      },
      {
        id: "b",
        text: {
          en: "Meet privately with both engineers to help them clarify their positions and reach agreement.",
          zh: "與兩位工程師私下會談,協助他們釐清立場並達成共識。",
        },
      },
      {
        id: "c",
        text: {
          en: "Escalate the disagreement to their functional manager for a decision.",
          zh: "將此爭議上報給他們的職能經理裁決。",
        },
      },
      {
        id: "d",
        text: {
          en: "Take no action and allow the team to resolve the disagreement on their own.",
          zh: "不採取任何行動,讓團隊自行解決爭議。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "專案經理應促成雙方進行協作式溝通,而非逕自裁決或完全放手不管。這正是「協作/共同解決問題(Collaborate/Problem Solve)」衝突處理技巧的展現,透過共同討論尋求雙方都能接受的結果。上報或片面決定都會削弱團隊對解決方案的主動歸屬感。",
  },
  {
    id: "dd-001",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "Several team members report that an uneven workload distribution has left some of them overloaded while others have spare capacity. As the project manager, you should first {{blank1}}, and if the imbalance continues, {{blank2}}.",
      zh: "多位團隊成員反映工作量分配不均,導致部分成員負荷過重,而其他成員卻仍有餘裕。身為專案經理,你應該優先 {{blank1}},若失衡情況持續,則 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Review the current resource allocation and workload across the team",
              zh: "檢視目前全團隊的資源分配與工作量",
            },
          },
          {
            id: "b",
            text: {
              en: "Directly blame the members who complained",
              zh: "直接責備抱怨的成員",
            },
          },
        ],
      },
      {
        id: "blank2",
        options: [
          {
            id: "a",
            text: {
              en: "Rebalance task assignments to even out the workload",
              zh: "重新調整任務分配以平衡負荷",
            },
          },
          {
            id: "b",
            text: {
              en: "Require all members to work overtime",
              zh: "要求所有成員加班趕工",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "面對資源負荷不均,PM 應先檢視實際工作量分配,再依情況重新調整任務,而非究責或一味要求加班。",
  },
  {
    id: "hs-002",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Uncertainty",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Below are four risk response strategy cards. Click the strategy most suitable for a positive risk (opportunity).",
      zh: "下方列出四種風險回應策略卡片,請點選最適合用於「正面風險(機會)」的策略。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "Avoid",
          zh: "避免(Avoid)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r2",
        label: {
          en: "Exploit",
          zh: "利用(Exploit)",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r3",
        label: {
          en: "Transfer",
          zh: "移轉(Transfer)",
        },
        x: 51,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r4",
        label: {
          en: "Mitigate",
          zh: "減緩(Mitigate)",
        },
        x: 74,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "r2",
    explanation: "Avoid/Transfer/Mitigate 為負面風險(威脅)常見策略;Exploit(利用)則是針對正面風險(機會)、確保機會發生的策略。",
  }
]
