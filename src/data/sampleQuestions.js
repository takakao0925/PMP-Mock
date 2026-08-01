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
    id: "gov-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which document is the primary output of the Initiate Project or Phase process, formally authorizing the project manager to apply organizational resources to project activities?",
      zh: "「啟動專案或階段(Initiate Project or Phase)」流程的主要產出是下列哪一份文件,正式授權專案經理將組織資源投入於專案活動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Business Case",
          zh: "商業論證(Business Case)",
        },
      },
      {
        id: "b",
        text: {
          en: "Project Charter",
          zh: "專案章程(Project Charter)",
        },
      },
      {
        id: "c",
        text: {
          en: "Project Management Plan",
          zh: "專案管理計畫(Project Management Plan)",
        },
      },
      {
        id: "d",
        text: {
          en: "Benefits Management Plan",
          zh: "效益管理計畫(Benefits Management Plan)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "啟動專案或階段(Initiate Project or Phase)流程的核心產出是專案章程(Project Charter),由贊助人(Sponsor)正式簽署授權,賦予專案經理動用組織資源的權力。商業論證與效益管理計畫屬於商業文件(Business Documents),是啟動此流程的輸入而非產出。",
  },
  {
    id: "gov-002",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two documents are classified as \"Business Documents\" and serve as inputs when developing the Project Charter? (Select two.)",
      zh: "下列哪兩份文件被歸類為「商業文件(Business Documents)」,是研擬專案章程時的輸入?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Business Case",
          zh: "商業論證(Business Case)",
        },
      },
      {
        id: "b",
        text: {
          en: "Benefits Management Plan",
          zh: "效益管理計畫(Benefits Management Plan)",
        },
      },
      {
        id: "c",
        text: {
          en: "Issue Log",
          zh: "問題記錄(Issue Log)",
        },
      },
      {
        id: "d",
        text: {
          en: "Lessons Learned Register",
          zh: "經驗教訓登錄表(Lessons Learned Register)",
        },
      },
      {
        id: "e",
        text: {
          en: "Project Closure Checklist",
          zh: "專案結案檢查表(Project Closure Checklist)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "商業文件(Business Documents)包含商業論證(Business Case,說明專案存在的商業理由)與效益管理計畫(Benefits Management Plan),兩者皆是啟動專案、研擬專案章程時的重要輸入。問題記錄、經驗教訓登錄表與結案檢查表則分別是執行、知識管理與收尾流程的產出,並非啟動階段的輸入文件。",
  },
  {
    id: "gov-003",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "{{blank1}} explains why the project exists and describes its expected business benefits, while {{blank2}} is the formal document that authorizes the project manager and defines the scope of their authority.",
      zh: "{{blank1}} 說明專案存在的商業理由,並描述其預期的商業效益;而 {{blank2}} 則是正式授權專案經理、並界定其職權範圍的文件。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "The Business Case",
              zh: "商業論證(Business Case)",
            },
          },
          {
            id: "b",
            text: {
              en: "The Project Charter",
              zh: "專案章程(Project Charter)",
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
              en: "The Business Case",
              zh: "商業論證(Business Case)",
            },
          },
          {
            id: "b",
            text: {
              en: "The Project Charter",
              zh: "專案章程(Project Charter)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "商業論證(Business Case)回答「為什麼要做這個專案」,由商業角度證成專案存在的價值;專案章程(Project Charter)則回答「誰有權力做、做的範圍是什麼」,是正式的授權文件。兩者經常被誤認為同一份文件,但用途與內容截然不同。",
  },
  {
    id: "gov-004",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "The project sponsor has not yet signed the project charter, but the project manager has already asked several team members to begin preliminary work and has committed budget to an external vendor. What is the most significant problem with this situation?",
      zh: "專案贊助人(Sponsor)尚未簽署專案章程,但專案經理已要求數名團隊成員展開前期工作,並已對外部供應商承諾了預算。這個情況最主要的問題是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project manager is acting without formal authority, since resources should not be committed before the charter is approved.",
          zh: "專案經理在沒有正式授權的情況下行動,因為在章程核准前不應動用資源承諾。",
        },
      },
      {
        id: "b",
        text: {
          en: "The vendor should have been selected only after the project management plan was finalized.",
          zh: "供應商應該等專案管理計畫定案後才選定。",
        },
      },
      {
        id: "c",
        text: {
          en: "The team members should have refused to perform any work without a signed contract.",
          zh: "團隊成員應該在沒有簽約的情況下拒絕執行任何工作。",
        },
      },
      {
        id: "d",
        text: {
          en: "The sponsor is responsible for managing vendor commitments, not the project manager.",
          zh: "贊助人才是負責管理供應商承諾的人,而非專案經理。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "沒有正式簽署的專案章程(Project Charter),專案經理就沒有經正式授權動用組織資源的權力。在此情境中,提前指派團隊工作並對外承諾預算,都是在缺乏正式授權下的行動,違反了「沒有章程就沒有正式權力」的治理原則,可能使贊助人與組織承擔未經授權的風險。",
  },
  {
    id: "gov-005",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each of the 5 Governance processes to its primary output.",
      zh: "請將下列 5 個 Governance 流程拖曳配對到最符合的主要產出。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Initiate Project or Phase",
            zh: "啟動專案或階段(Initiate Project or Phase)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Integrate and Align Project Plans",
            zh: "整合並校準專案計畫(Integrate and Align Project Plans)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Manage Project Execution",
            zh: "管理專案執行(Manage Project Execution)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Assess and Implement Changes",
            zh: "評估並執行變更(Assess and Implement Changes)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Close Project or Phase",
            zh: "結束專案或階段(Close Project or Phase)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Formally authorize the project and grant the project manager authority to use resources",
            zh: "正式授權專案,並賦予專案經理動用資源的權力",
          },
        },
        {
          id: "c2",
          text: {
            en: "Combine all subsidiary plans (scope, schedule, cost, etc.) into one consistent Project Management Plan",
            zh: "將範疇、時程、成本等各子計畫整合為單一一致的專案管理計畫",
          },
        },
        {
          id: "c3",
          text: {
            en: "Produce deliverables and work performance data while carrying out the planned work",
            zh: "在執行規劃工作的同時產出交付物與工作績效資料",
          },
        },
        {
          id: "c4",
          text: {
            en: "Have the Change Control Board approve, reject, or defer a change request",
            zh: "由變更控制委員會核准、拒絕或延後一項變更請求",
          },
        },
        {
          id: "c5",
          text: {
            en: "Obtain formal acceptance and update organizational process assets during closeout",
            zh: "在結案時取得正式驗收並更新組織流程資產",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "這五個流程對應 Governance 績效領域中橫跨啟動到收尾的核心活動:啟動專案或階段產出專案章程;整合並校準專案計畫產出單一專案管理計畫;管理專案執行產出交付物與工作績效資料;評估並執行變更由 CCB 決定變更請求的核准與否;結束專案或階段則取得正式驗收並更新 OPA。",
  },
  {
    id: "gov-006",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Click the option below that is the best example of Tacit Knowledge, as opposed to Explicit Knowledge.",
      zh: "請點選下列選項中,最能代表「內隱知識(Tacit Knowledge)」(相對於外顯知識)的例子。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "A written lessons learned register stored in the project repository",
          zh: "存放在專案儲存庫中的書面經驗教訓登錄表",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "A senior engineer's personal intuition and judgment developed over years of experience",
          zh: "一位資深工程師經過多年經驗累積而成的個人直覺與判斷力",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "A documented process template used by the PMO",
          zh: "PMO 使用的書面流程範本",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "A project schedule saved as a PDF file",
          zh: "以 PDF 檔案儲存的專案時程表",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "內隱知識(Tacit Knowledge)是個人化、難以用文字完整表達的知識,例如經驗、直覺與判斷力;外顯知識(Explicit Knowledge)則是可以透過文件、範本等方式清楚記錄與傳遞的知識。書面登錄表、範本與檔案都屬於外顯知識。",
  },
  {
    id: "gov-007",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which of the following is LEAST likely to be a direct output of the Manage Project Execution process?",
      zh: "下列何者最不可能是「管理專案執行(Manage Project Execution)」流程的直接產出?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Deliverables",
          zh: "交付物(Deliverables)",
        },
      },
      {
        id: "b",
        text: {
          en: "Work Performance Data",
          zh: "工作績效資料(Work Performance Data)",
        },
      },
      {
        id: "c",
        text: {
          en: "Updates to the Issue Log",
          zh: "問題記錄(Issue Log)的更新",
        },
      },
      {
        id: "d",
        text: {
          en: "Project Charter",
          zh: "專案章程(Project Charter)",
        },
      },
    ],
    correctAnswer: "d",
    explanation: "專案章程(Project Charter)是「啟動專案或階段(Initiate Project or Phase)」流程的產出,用來正式授權專案;而管理專案執行流程則是依照計畫指導與管理專案工作,產出交付物、工作績效資料,並處理問題記錄。",
  },
  {
    id: "gov-008",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "{{blank1}} is process-oriented, focuses on preventing defects before they occur, and belongs to the Governance performance domain; {{blank2}} is product-oriented, focuses on detecting defects in the deliverable, and belongs to the Scope performance domain.",
      zh: "{{blank1}} 是流程導向,著重在缺陷發生前加以預防,歸屬於 Governance 績效領域;{{blank2}} 則是產品導向,著重於檢測交付物中的缺陷,歸屬於 Scope 績效領域。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Quality Assurance (QA)",
              zh: "品質保證(QA)",
            },
          },
          {
            id: "b",
            text: {
              en: "Quality Control (QC)",
              zh: "品質管制(QC)",
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
              en: "Quality Assurance (QA)",
              zh: "品質保證(QA)",
            },
          },
          {
            id: "b",
            text: {
              en: "Quality Control (QC)",
              zh: "品質管制(QC)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "PMBOK 8th 版將品質拆分為兩個績效領域:品質保證(QA,Manage Quality Assurance)屬於 Governance,強調流程稽核與預防問題;品質管制/確認範疇(QC/Validate Scope)屬於 Scope,強調檢測產品缺陷。兩者常被誤認為同一領域的一體兩面。",
  },
  {
    id: "gov-009",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each PMO type to the description that best fits its degree of control over projects.",
      zh: "請將下列每種 PMO 類型拖曳配對到最符合其對專案控制程度的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Supportive PMO",
            zh: "支持型 PMO(Supportive PMO)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Controlling PMO",
            zh: "控制型 PMO(Controlling PMO)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Directive PMO",
            zh: "指導型 PMO(Directive PMO)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Plays a consultative role, providing templates, best practices, and training, with a low degree of control over projects",
            zh: "扮演諮詢角色,提供範本、最佳實務與訓練,對專案的控制程度低",
          },
        },
        {
          id: "c2",
          text: {
            en: "Requires projects to comply with specific frameworks, methodologies, templates, and governance, with a moderate degree of control",
            zh: "要求專案遵循特定框架、方法論、範本與治理規範,對專案的控制程度中等",
          },
        },
        {
          id: "c3",
          text: {
            en: "Directly manages projects by assigning project managers and taking direct control, with the highest degree of control",
            zh: "直接指派專案經理並掌控專案,對專案的控制程度最高",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
    },
    explanation: "三種 PMO(專案管理辦公室)類型依控制程度由低到高排序:支持型(Supportive)僅提供諮詢與範本;控制型(Controlling)要求遵循特定治理框架;指導型(Directive)則直接指派並控制專案,是控制程度最高的一種。",
  },
  {
    id: "gov-010",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are examples of Organizational Process Assets (OPA), as opposed to Enterprise Environmental Factors (EEF)? (Select three.)",
      zh: "下列哪三項屬於「組織流程資產(OPA)」的例子,而非「事業環境因素(EEF)」?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Organizational templates and standard procedures",
          zh: "組織範本與標準作業程序",
        },
      },
      {
        id: "b",
        text: {
          en: "Historical project records and lessons learned repositories",
          zh: "歷史專案紀錄與經驗教訓資料庫",
        },
      },
      {
        id: "c",
        text: {
          en: "Government regulations and industry standards",
          zh: "政府法規與產業標準",
        },
      },
      {
        id: "d",
        text: {
          en: "Established organizational policies and governance frameworks",
          zh: "既有的組織政策與治理框架",
        },
      },
      {
        id: "e",
        text: {
          en: "Market conditions and currency exchange rates",
          zh: "市場狀況與匯率",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "d",
    ],
    selectCount: 3,
    explanation: "組織流程資產(OPA)是組織內部可控的資產,例如範本、標準作業程序、歷史紀錄、經驗教訓資料庫與既有政策;事業環境因素(EEF)則是組織外部、通常不可控的條件,例如政府法規、產業標準、市場狀況與匯率。兩者都是 Governance 各流程的共通輸入,但性質相反。",
  },
  {
    id: "gov-011",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A highly experienced team member who holds deep, undocumented know-how about a critical system is about to leave the project. What should the project manager do first to protect the project?",
      zh: "一位持有大量未被文件化、關鍵系統相關知識的資深團隊成員即將離開專案。為了保護專案,專案經理應該優先採取什麼行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Ask the team member to write a brief resignation summary before leaving.",
          zh: "請該成員在離開前寫一份簡短的離職摘要。",
        },
      },
      {
        id: "b",
        text: {
          en: "Arrange a structured knowledge-transfer session so the tacit knowledge can be shared with remaining team members.",
          zh: "安排一場結構化的知識轉移會議,讓這位成員的內隱知識能傳遞給其他團隊成員。",
        },
      },
      {
        id: "c",
        text: {
          en: "Accept the loss of knowledge as an unavoidable part of team turnover.",
          zh: "接受知識流失是團隊人員異動中無可避免的一部分。",
        },
      },
      {
        id: "d",
        text: {
          en: "Request the sponsor to delay the departure until the project ends.",
          zh: "請贊助人延遲該成員離職,直到專案結束。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "這屬於「管理專案知識(Manage Project Knowledge)」流程的情境,內隱知識(Tacit Knowledge,如經驗與直覺)難以單靠書面文件保存,最有效的方式是透過結構化的知識轉移(如交接會議、師徒制)讓知識傳遞給團隊其他成員,以避免組織知識流失。",
  },
  {
    id: "gov-012",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Two projects in the same organization both require the same specialized engineer at the same time. The project manager has already discussed the conflict directly with the other project's manager, but neither is willing to give up the resource. What should the project manager do next?",
      zh: "同一組織內的兩個專案在同一時間都需要同一位專業工程師。這位專案經理已經直接與另一個專案的經理討論過這項衝突,但雙方都不願意讓出這項資源。這位專案經理接下來應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Escalate the resource conflict to the PMO or a governance body such as a steering committee for resolution.",
          zh: "將這項資源衝突上報至 PMO 或指導委員會等治理層級,以尋求解決方案。",
        },
      },
      {
        id: "b",
        text: {
          en: "Offer the engineer a bonus to work overtime on both projects simultaneously.",
          zh: "提供工程師額外獎金,讓他同時兼顧兩個專案的工作。",
        },
      },
      {
        id: "c",
        text: {
          en: "Unilaterally reassign the engineer to their own project without further discussion.",
          zh: "未經進一步討論,單方面將工程師調派到自己的專案。",
        },
      },
      {
        id: "d",
        text: {
          en: "Wait until one of the two projects naturally falls behind schedule.",
          zh: "等待其中一個專案自然落後進度後再處理。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "當專案目標與其他專案產生資源衝突,且雙方專案經理層級已無法自行協調時,應依治理原則將爭議上報至更高層級(如 PMO 或指導委員會)裁決,而非由 PM 自行片面決定或消極等待,這正是升級路徑(escalation path)的正確運用。",
  },
  {
    id: "gov-013",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following statements correctly describe the role of the Change Control Board (CCB)? (Select three.)",
      zh: "下列哪三項敘述正確描述了變更控制委員會(Change Control Board, CCB)的角色?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It reviews formal change requests and decides whether to approve, reject, or defer them.",
          zh: "審查正式的變更請求,並決定核准、拒絕或延後。",
        },
      },
      {
        id: "b",
        text: {
          en: "It is typically composed of key stakeholders such as the sponsor and relevant functional leads.",
          zh: "通常由贊助人與相關職能主管等關鍵利害關係人組成。",
        },
      },
      {
        id: "c",
        text: {
          en: "Its decisions are recorded and used to update the project management plan and documents as needed.",
          zh: "其決策會被記錄下來,並依需要用於更新專案管理計畫與相關文件。",
        },
      },
      {
        id: "d",
        text: {
          en: "It must approve every minor tailoring decision made during a daily agile stand-up.",
          zh: "必須核准敏捷每日站會中所做的每一項細微裁適決定。",
        },
      },
      {
        id: "e",
        text: {
          en: "It replaces the project manager's authority to manage the project on a daily basis.",
          zh: "它取代了專案經理日常管理專案的職權。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "CCB 的職責是審核正式提出的變更請求並做出核准/拒絕/延後的決策,成員通常包含贊助人與關鍵利害關係人,決策結果需記錄並反映於專案文件更新。CCB 並非取代 PM 的日常管理職權,也不會介入敏捷團隊每日站會中的細微裁適決定,這類調適式專案的小型調整通常透過迭代回顧來吸收。",
  },
  {
    id: "gov-014",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During a phone call, a customer casually asks the project manager to add a new feature to the current release, saying \"it should be quick.\" The project is being run using a predictive approach. What should the project manager do first?",
      zh: "在一通電話中,客戶隨口要求專案經理在目前這一版釋出中新增一項功能,並表示「應該很快就能做完」。這個專案採用預測式(Predictive)方法進行。專案經理應該優先怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Agree immediately, since maintaining a good customer relationship is the priority.",
          zh: "立即答應,因為維持良好的客戶關係是優先考量。",
        },
      },
      {
        id: "b",
        text: {
          en: "Decline the request outright, since informal requests should never be accepted.",
          zh: "直接拒絕這項要求,因為非正式的要求絕對不應被接受。",
        },
      },
      {
        id: "c",
        text: {
          en: "Log the request as a formal change request and perform an impact analysis before any decision is made.",
          zh: "將這項要求記錄為正式變更請求,並在做出任何決定前先進行影響分析。",
        },
      },
      {
        id: "d",
        text: {
          en: "Implement the feature first and inform the sponsor afterward.",
          zh: "先實作這項功能,之後再通知贊助人。",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "在預測式(Predictive)專案中,即使是口頭提出的變更要求,也應先正式記錄為變更請求(Change Request)並評估其對範疇、時程、成本與風險的影響(Impact Analysis),再依循評估並執行變更(Assess and Implement Changes)流程做出決定,而不是立即答應或立即拒絕。",
  },
  {
    id: "gov-015",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "In a predictive project, changes are typically managed through a formal {{blank1}} that is submitted, evaluated, and approved before implementation. In an adaptive project, changes are typically absorbed through {{blank2}}, such as backlog reprioritization, without needing a formal board for every change.",
      zh: "在預測式專案中,變更通常透過一套正式的 {{blank1}} 來管理,先提出、評估後才核准實施;在調適式專案中,變更則通常透過 {{blank2}}(例如待辦清單重新排序)來吸收,不需要針對每一項變更都經過正式委員會。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "change request process reviewed by a Change Control Board",
              zh: "變更請求流程,並由變更控制委員會審查",
            },
          },
          {
            id: "b",
            text: {
              en: "daily stand-up discussion",
              zh: "每日站會討論",
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
              en: "a Change Control Board review",
              zh: "變更控制委員會審查",
            },
          },
          {
            id: "b",
            text: {
              en: "iteration or sprint reviews",
              zh: "迭代(Iteration)或短衝(Sprint)回顧",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "預測式(瀑布式)專案的變更需要正式書面變更請求並走完整的 CCB 審核流程;調適式(敏捷式)專案則透過每次迭代/短衝內建的檢視回饋來吸收變更,較少倚賴正式 CCB。若把兩種變更管控方式套用錯情境,是常見的考試陷阱。",
  },
  {
    id: "gov-016",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project team has just delivered the final product to the customer. Which three actions should the project manager take to properly close the project? (Select three.)",
      zh: "專案團隊剛完成最終產品並交付給客戶。專案經理應採取下列哪三項行動,才能正確地結束專案?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Obtain formal acceptance and sign-off from the customer.",
          zh: "取得客戶的正式驗收與簽收。",
        },
      },
      {
        id: "b",
        text: {
          en: "Conduct a lessons learned session with the team and document the results.",
          zh: "與團隊召開經驗教訓會議並記錄結果。",
        },
      },
      {
        id: "c",
        text: {
          en: "Update organizational process assets with project records and historical data.",
          zh: "以專案紀錄與歷史資料更新組織流程資產。",
        },
      },
      {
        id: "d",
        text: {
          en: "Consider the project complete as soon as the product is technically finished.",
          zh: "只要產品技術上完成,就視為專案已經結束。",
        },
      },
      {
        id: "e",
        text: {
          en: "Immediately reassign the team to a new project without any closure activities.",
          zh: "立即將團隊調派至新專案,不進行任何收尾活動。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "結束專案或階段(Close Project or Phase)流程要求正式取得客戶驗收(Formal Acceptance)、完成經驗教訓(Lessons Learned)並更新組織流程資產(OPA),才算真正完成收尾;產品技術上完成不等於專案結束,直接跳過收尾活動、將團隊調離也不符合正式收尾的要求。",
  },
  {
    id: "gov-017",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In the PMBOK 8th edition, how is procurement management primarily addressed?",
      zh: "在 PMBOK 8th 版中,採購管理主要是以何種方式被處理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It remains a fully independent performance domain, unchanged from the 6th edition.",
          zh: "它仍然是一個完全獨立的績效領域,與第六版相同,沒有變動。",
        },
      },
      {
        id: "b",
        text: {
          en: "It is demoted to an appendix (Appendix X4) and is no longer a standalone performance domain, though sourcing strategy planning still falls under Governance.",
          zh: "它被降級為附錄(Appendix X4),不再是獨立的績效領域,但規劃採購策略的流程仍歸屬於 Governance 領域。",
        },
      },
      {
        id: "c",
        text: {
          en: "It is completely removed from PMBOK content with no further mention.",
          zh: "它已從 PMBOK 內容中完全移除,不再有任何相關描述。",
        },
      },
      {
        id: "d",
        text: {
          en: "It is merged entirely into the Stakeholders performance domain.",
          zh: "它被完全併入 Stakeholders 績效領域。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "PMBOK 8th 版將採購管理(Procurement Management)整體降級至附錄 X4,不再是正式的績效領域,但「規劃採購策略(Plan Sourcing Strategy)」這項流程仍存在於 Focus Area 的 Planning 階段,並歸屬於 Governance 領域,並非完全移除採購相關內容。",
  },
  {
    id: "gov-018",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each contract type to the sourcing scenario it best fits.",
      zh: "請將下列每種合約類型拖曳配對到最符合的採購情境。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Fixed Price",
            zh: "固定價格(Fixed Price)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Cost Reimbursable",
            zh: "成本補償(Cost Reimbursable)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Time & Material",
            zh: "工料計酬(Time & Material)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Scope is well-defined and stable, so the seller agrees to deliver the work for a set total price",
            zh: "範疇明確且穩定,賣方同意以固定總價交付工作",
          },
        },
        {
          id: "c2",
          text: {
            en: "Scope is uncertain or evolving, so the buyer reimburses the seller's actual allowable costs plus a fee",
            zh: "範疇不確定或可能演變,買方依賣方實際可核銷成本再加上費用進行補償",
          },
        },
        {
          id: "c3",
          text: {
            en: "Work involves short-term staff augmentation where the exact effort is not known in advance, so payment is based on hourly or unit rates",
            zh: "工作涉及短期人力補充,且確切工作量事先未知,依時薪或單位費率計酬",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
    },
    explanation: "規劃採購策略(Plan Sourcing Strategy)流程需依專案範疇的明確程度選擇合適的合約類型:範疇明確穩定適合固定價格(Fixed Price);範疇不確定、風險由買方承擔較多時適合成本補償(Cost Reimbursable);短期人力支援、工作量難以事先估計時則適合工料計酬(Time & Material)。",
  },
  {
    id: "gov-019",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following statements correctly differentiate change management between predictive and adaptive projects? (Select two.)",
      zh: "下列哪兩項敘述正確區分了預測式與調適式專案在變更管理上的差異?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Predictive projects typically require a formal, documented change request routed through a Change Control Board.",
          zh: "預測式專案通常需要正式書面的變更請求,並經由變更控制委員會處理。",
        },
      },
      {
        id: "b",
        text: {
          en: "Adaptive projects typically absorb changes through iteration or sprint reviews and backlog reprioritization rather than a formal board for every change.",
          zh: "調適式專案通常透過迭代或短衝回顧與待辦清單重新排序來吸收變更,而非針對每項變更都經過正式委員會。",
        },
      },
      {
        id: "c",
        text: {
          en: "Adaptive projects always require Change Control Board approval before any backlog item can be reprioritized.",
          zh: "調適式專案一律都需要變更控制委員會核准後,才能重新排序待辦清單項目。",
        },
      },
      {
        id: "d",
        text: {
          en: "Predictive projects have no defined mechanism for managing scope changes.",
          zh: "預測式專案並沒有明確的機制來管理範疇變更。",
        },
      },
      {
        id: "e",
        text: {
          en: "Neither approach permits any change to project scope once a baseline is established.",
          zh: "兩種方法在建立基準後都完全不允許對專案範疇做任何變更。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "預測式專案的變更管控較正式,依賴書面變更請求與 CCB 審核;調適式專案則透過每次迭代/短衝內建的檢視與待辦清單重新排序來吸收變更,較少倚賴正式委員會逐項審批。兩者都有變更管理機制,只是正式程度不同,並非完全禁止變更或毫無機制。",
  },
  {
    id: "gov-020",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram below shows a project's reporting and governance structure: a Team Member reports to the Project Manager, who reports to the PMO, which in turn reports to the Steering Committee. A cross-project resource conflict cannot be resolved between project managers. Click the role the project manager should escalate the conflict to first, following the escalation path shown.",
      zh: "下圖顯示某專案的回報與治理結構:團隊成員向專案經理回報,專案經理向 PMO 回報,PMO 再向指導委員會(Steering Committee)回報。當跨專案的資源衝突無法在專案經理之間解決時,請依照下圖所示的升級路徑,點選專案經理應優先上報的對象。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Team Member",
          zh: "團隊成員(Team Member)",
        },
        x: 5,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Project Manager",
          zh: "專案經理(Project Manager)",
        },
        x: 30,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "PMO",
          zh: "PMO",
        },
        x: 55,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Steering Committee",
          zh: "指導委員會(Steering Committee)",
        },
        x: 80,
        y: 40,
        width: 18,
        height: 20,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "依照圖中的回報與治理層級,專案經理(n2)的下一個升級對象是 PMO(n3),而非直接跳過 PMO 上報至指導委員會(n4)。遵循正確的升級路徑(escalation path)逐層上報,是治理領域中處理跨專案衝突的重要原則;越級上報或完全不上報都不符合正常的治理程序。",
  },
  {
    id: "gov-021",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "What is the primary purpose of the \"Integrate and Align Project Plans\" process?",
      zh: "「整合並校準專案計畫(Integrate and Align Project Plans)」流程的主要目的是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "To combine subsidiary plans, such as scope, schedule, cost, resource, risk, and stakeholder plans, into a single, consistent Project Management Plan.",
          zh: "將範疇、時程、成本、資源、風險、利害關係人等子計畫整合為單一、一致的專案管理計畫。",
        },
      },
      {
        id: "b",
        text: {
          en: "To formally authorize the project and appoint the project manager.",
          zh: "正式授權專案並指派專案經理。",
        },
      },
      {
        id: "c",
        text: {
          en: "To evaluate and approve or reject individual change requests.",
          zh: "評估並核准或拒絕個別的變更請求。",
        },
      },
      {
        id: "d",
        text: {
          en: "To select the appropriate contract type for external vendors.",
          zh: "為外部供應商選擇合適的合約類型。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "整合並校準專案計畫流程的核心目的,是將範疇、時程、財務、資源、風險、利害關係人等各子計畫整合為一份彼此不衝突、內容一致的專案管理計畫(Project Management Plan)。正式授權專案是啟動流程的工作,核准變更請求則屬於評估並執行變更流程。",
  },
  {
    id: "gov-022",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Click the organizational structure type in which the project manager typically holds the highest level of authority over project resources.",
      zh: "請點選在下列組織結構類型中,專案經理通常對專案資源擁有最高職權的一種。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Functional Organization",
          zh: "職能型組織(Functional Organization)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Weak Matrix Organization",
          zh: "弱矩陣型組織(Weak Matrix Organization)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Strong Matrix Organization",
          zh: "強矩陣型組織(Strong Matrix Organization)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Projectized Organization",
          zh: "專案型組織(Projectized Organization)",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n4",
    explanation: "在專案型組織(Projectized Organization)中,團隊成員通常全職投入單一專案,且直接向專案經理回報,專案經理對資源與職權的掌控程度最高;職能型組織中職權集中在職能經理手上,矩陣型組織則依強弱程度介於兩者之間,這也是判斷自身職權範圍時的重要依據(對應 ECO Process 領域中「建立專案治理架構」這項任務)。",
  },
  {
    id: "gov-023",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "What is the primary purpose of a phase-gate (stage-gate) review within a project's governance framework?",
      zh: "在專案治理架構中,「階段關卡審查(Phase Gate / Stage Gate Review)」的主要目的是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "To formally authorize the initial project charter",
          zh: "正式核准最初的專案章程",
        },
      },
      {
        id: "b",
        text: {
          en: "To evaluate whether the project should continue, be redirected, or be terminated before entering the next phase",
          zh: "在進入下一階段前,評估專案應該繼續、調整方向或終止",
        },
      },
      {
        id: "c",
        text: {
          en: "To reassign the project manager to a new project",
          zh: "將專案經理重新指派到新專案",
        },
      },
      {
        id: "d",
        text: {
          en: "To replace the need for a formal change control process",
          zh: "取代正式變更控制流程的需求",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "階段關卡審查是治理架構中的關鍵決策點,由治理機構(如指導委員會或贊助人)在專案跨入下一階段前檢視進度、商業論證是否依然成立,並決定專案應繼續、調整方向或終止。它並非用來核准初始章程,也不能取代正式的變更控制流程,更與重新指派專案經理無關。",
  },
  {
    id: "gov-024",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Midway through a predictive project, the project manager learns that a new government regulation now requires additional safety certification for the product being built — a requirement that was not part of the original scope. What should the project manager do first?",
      zh: "在一個預測式專案進行到一半時,專案經理得知一項新的政府法規,要求正在開發的產品必須取得額外的安全認證——這項要求並非原始範疇的一部分。專案經理應該優先怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Ignore the regulation until the next scheduled audit.",
          zh: "忽略這項法規,直到下一次排定的稽核再處理。",
        },
      },
      {
        id: "b",
        text: {
          en: "Submit a formal change request documenting the regulatory requirement and assess its impact on scope, schedule, and cost before proceeding.",
          zh: "提交正式變更請求記錄這項法規要求,並在採取行動前評估其對範疇、時程與成本的影響。",
        },
      },
      {
        id: "c",
        text: {
          en: "Unilaterally add the certification work to the schedule without informing the sponsor.",
          zh: "未通知贊助人,逕自將認證工作加入時程。",
        },
      },
      {
        id: "d",
        text: {
          en: "Escalate directly to the government agency to request an exemption.",
          zh: "直接向政府機關申請豁免。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "新的法規要求屬於外部強制性依賴,一旦發現即應正式記錄為變更請求(Change Request),並評估其對範疇、時程與成本的衝擊(Impact Analysis),再依「評估並執行變更」流程處理,而不是忽視、片面新增工作,或繞過贊助人與治理程序自行對外交涉。",
  },
  {
    id: "gov-025",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "In an adaptive project, the project manager notices that the Scrum team has started skipping the sprint review with stakeholders because \"it slows things down,\" and is deploying changes directly to production without any demonstration or approval. What should the project manager do?",
      zh: "在一個調適式專案中,專案經理發現 Scrum 團隊因為覺得「拖慢速度」,已經開始略過與利害關係人的短衝審查(Sprint Review),並在沒有任何展示或核准的情況下直接將變更部署到正式環境。專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Allow the practice to continue since the team is delivering faster.",
          zh: "允許這種做法繼續,因為團隊交付速度變快了。",
        },
      },
      {
        id: "b",
        text: {
          en: "Reinforce with the team why the sprint review and stakeholder governance touchpoints exist, and re-establish the cadence.",
          zh: "向團隊重新說明短衝審查與利害關係人治理節點存在的原因,並重新建立審查節奏。",
        },
      },
      {
        id: "c",
        text: {
          en: "Escalate immediately to the sponsor to have the entire team replaced.",
          zh: "立即上報贊助人,要求撤換整個團隊。",
        },
      },
      {
        id: "d",
        text: {
          en: "Formally document the team as non-compliant and take no further action.",
          zh: "正式記錄團隊為不合規,但不採取進一步行動。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "即使在調適式專案中,治理節點(如短衝審查)仍是確保透明度、利害關係人回饋與風險可控的重要機制,不能因求快而完全略過。專案經理應優先透過溝通與教練協助團隊理解其存在意義,並重建這個節奏,而非放任不管、過度懲罰或消極記錄了事。",
  },
  {
    id: "gov-026",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project has been formally closed, and the final product was accepted by the customer six months ago. The original business case projected a 20% increase in operational efficiency. Who is typically responsible for tracking whether this projected benefit is actually realized?",
      zh: "某專案已正式結案,最終產品已在六個月前由客戶驗收。當初的商業論證預估此專案能帶來 20% 的營運效率提升。通常由誰負責追蹤這項預估效益是否真正實現?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project manager, who remains accountable indefinitely after closure.",
          zh: "由專案經理負責,且結案後責任無限期延續。",
        },
      },
      {
        id: "b",
        text: {
          en: "The project team, since they built the product.",
          zh: "由專案團隊負責,因為產品是他們建置的。",
        },
      },
      {
        id: "c",
        text: {
          en: "The sponsor or a designated business owner, as part of ongoing benefits management beyond the project's lifecycle.",
          zh: "由贊助人或指定的業務負責人負責,屬於超出專案生命週期的持續性效益管理工作。",
        },
      },
      {
        id: "d",
        text: {
          en: "No one, since benefits realization is outside any governance responsibility.",
          zh: "沒有人負責,因為效益實現不在任何治理責任範圍內。",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "效益管理(Benefits Management)通常延續到專案正式結案之後,由贊助人或指定的業務負責人依效益管理計畫持續追蹤實際效益是否達成;專案經理與團隊的職責通常隨結案而結束,效益實現仍屬組織治理範疇的一部分,並非無人負責。",
  },
  {
    id: "gov-027",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "At a stage-gate review, the project team presents strong progress, but a key deliverable slipped by two weeks and the risk exposure has increased. Per typical governance structures, who holds the authority to decide whether the project proceeds to the next stage?",
      zh: "在一次階段關卡審查中,專案團隊呈現了良好的進度,但一項關鍵交付物延遲了兩週,且風險暴露程度也上升。依照典型的治理結構,誰握有決定專案是否能進入下一階段的權限?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project manager alone, since they run daily operations.",
          zh: "僅由專案經理決定,因為他負責日常營運。",
        },
      },
      {
        id: "b",
        text: {
          en: "The governance body designated for this decision, such as a steering committee or sponsor, per the governance framework.",
          zh: "依治理框架指定的治理機構,例如指導委員會或贊助人。",
        },
      },
      {
        id: "c",
        text: {
          en: "The project team by majority vote.",
          zh: "由專案團隊多數決決定。",
        },
      },
      {
        id: "d",
        text: {
          en: "The customer, regardless of internal governance arrangements.",
          zh: "不論內部治理安排為何,一律由客戶決定。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "是否通過階段關卡屬於治理層級的決策,通常由專案治理框架中指定的機構(如指導委員會、贊助人)依既定的決策權限與門檻做出決定,而非由專案經理單方面決定、團隊表決,或逕自由客戶決定。這體現治理架構中明確界定決策權限的重要性。",
  },
  {
    id: "gov-028",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "To meet an aggressive deadline, the sponsor instructs the project manager to skip a mandatory regulatory compliance review before releasing the product, promising to \"handle it later.\" What is the most appropriate action for the project manager?",
      zh: "為了趕上緊迫的截止日期,贊助人指示專案經理在產品上市前跳過一項強制性的法規合規審查,並承諾「之後再處理」。專案經理最適當的做法是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Comply with the sponsor's instruction since the sponsor has the highest authority on the project.",
          zh: "遵照贊助人的指示,因為贊助人在專案中擁有最高職權。",
        },
      },
      {
        id: "b",
        text: {
          en: "Raise the compliance risk with the sponsor, and if unresolved, escalate through the organization's governance or ethics channel rather than proceeding.",
          zh: "向贊助人提出合規風險,若未能解決,則透過組織的治理或倫理管道上報,而非逕行跳過。",
        },
      },
      {
        id: "c",
        text: {
          en: "Quietly proceed with the review without informing the sponsor.",
          zh: "不告知贊助人,私下悄悄完成審查。",
        },
      },
      {
        id: "d",
        text: {
          en: "Delay the entire project indefinitely without communicating the reason.",
          zh: "無限期延遲整個專案,且不說明原因。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "法規合規審查屬於強制性義務,不因贊助人的指示而可省略。專案經理有責任向贊助人清楚說明風險,若贊助人仍堅持違反法規,應透過組織的治理或倫理上報機制處理,這也符合 PMI 職業道德準則中對誠實與合規的要求;單純服從、隱瞞行事或消極拖延都不是恰當做法。",
  },
  {
    id: "gov-029",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are characteristics of an effective project governance framework? (Select three.)",
      zh: "下列哪三項是有效的專案治理框架應具備的特性?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Clearly defined decision-making authority and escalation paths",
          zh: "明確界定的決策權限與升級路徑",
        },
      },
      {
        id: "b",
        text: {
          en: "A structure that is tailored to the size, complexity, and risk of the project",
          zh: "依專案規模、複雜度與風險裁適的架構",
        },
      },
      {
        id: "c",
        text: {
          en: "Regular review points, such as phase gates, to assess whether the project remains aligned with business objectives",
          zh: "定期的審查節點(如階段關卡),用以評估專案是否仍與商業目標對齊",
        },
      },
      {
        id: "d",
        text: {
          en: "A single, fixed governance structure applied identically to every project regardless of size",
          zh: "不論專案規模一律套用單一固定的治理架構",
        },
      },
      {
        id: "e",
        text: {
          en: "Governance activities performed only once, at project initiation",
          zh: "治理活動只在專案啟動時執行一次即可",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "有效的治理框架應明確界定決策權限與升級路徑、依專案特性裁適(tailor),並設有定期審查節點(如階段關卡)持續檢視專案是否仍符合商業目標。治理並非一體適用的固定架構,也不是只在啟動時執行一次,而應貫穿整個專案生命週期。",
  },
  {
    id: "gov-030",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are valid purposes of conducting an audit (e.g., a quality or compliance audit) during a project? (Select three.)",
      zh: "在專案期間進行稽核(例如品質稽核或合規稽核)有下列哪三項正當目的?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "To verify that the project is following organizational policies, standards, and regulatory requirements",
          zh: "確認專案是否遵循組織政策、標準與法規要求",
        },
      },
      {
        id: "b",
        text: {
          en: "To identify inefficient or non-value-adding processes so they can be improved",
          zh: "找出效率不彰或無附加價值的流程以利改善",
        },
      },
      {
        id: "c",
        text: {
          en: "To share good practices with other projects across the organization",
          zh: "將良好實務分享給組織內其他專案",
        },
      },
      {
        id: "d",
        text: {
          en: "To assign blame to specific individuals for project delays",
          zh: "針對專案延遲追究特定個人的責任",
        },
      },
      {
        id: "e",
        text: {
          en: "To replace the need for a project management plan",
          zh: "取代專案管理計畫存在的必要性",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "稽核(Audit)的目的是確認合規性、找出可改善的流程,並將良好實務推廣至組織其他專案,是一種結構化、獨立的檢視活動;稽核並非用來究責特定個人,也不能取代專案管理計畫的存在。",
  },
  {
    id: "gov-031",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager discovers that a quality inspector has been falsifying safety inspection records to make the schedule appear on track. Which three actions should the project manager take? (Select three.)",
      zh: "專案經理發現一位品質檢查員長期偽造安全檢查紀錄,讓時程看起來如期進行。專案經理應採取下列哪三項行動?(請選擇三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Immediately stop relying on the falsified records and verify the actual safety status of the affected work",
          zh: "立即停止倚賴偽造的紀錄,並確認相關工作的實際安全狀況",
        },
      },
      {
        id: "b",
        text: {
          en: "Report the falsification through the organization's formal ethics or governance channel",
          zh: "透過組織正式的倫理或治理管道通報這項偽造行為",
        },
      },
      {
        id: "c",
        text: {
          en: "Document the issue and its resolution for accountability and future reference",
          zh: "記錄這項問題與後續處理過程,以利當責與未來參考",
        },
      },
      {
        id: "d",
        text: {
          en: "Quietly correct the records without telling anyone, to avoid delaying the schedule",
          zh: "悄悄自行更正紀錄,不告訴任何人,以避免延誤時程",
        },
      },
      {
        id: "e",
        text: {
          en: "Continue using the falsified records since correcting them would cause schedule delays",
          zh: "繼續使用偽造的紀錄,因為更正會造成時程延誤",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "偽造安全檢查紀錄是嚴重的誠信與合規問題,專案經理應立即停止倚賴不實資料、確認真實安全狀況,透過正式的倫理/治理管道通報,並完整記錄處理過程以利當責追溯。為了趕時程而隱瞞、自行掩蓋或繼續使用偽造資料,都違反 PMI 職業道德準則中的誠實原則,也讓治理機制形同虛設。",
  },
  {
    id: "gov-032",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "When performing a make-or-buy analysis as part of Plan Sourcing Strategy, which two factors should the project team consider? (Select two.)",
      zh: "在「規劃採購策略」流程中進行自製或外購分析(Make-or-Buy Analysis)時,專案團隊應考量下列哪兩項因素?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Whether the organization has the internal capability and capacity to perform the work",
          zh: "組織是否具備內部能力與產能來執行這項工作",
        },
      },
      {
        id: "b",
        text: {
          en: "The total cost of producing internally versus purchasing externally, including hidden costs such as management overhead",
          zh: "內部生產與外部採購的總成本比較,包括管理費用等隱藏成本",
        },
      },
      {
        id: "c",
        text: {
          en: "The personal preference of the project manager for working with a particular vendor",
          zh: "專案經理對特定供應商的個人偏好",
        },
      },
      {
        id: "d",
        text: {
          en: "Whether the vendor's marketing materials look professional",
          zh: "供應商的行銷資料是否看起來專業",
        },
      },
      {
        id: "e",
        text: {
          en: "The vendor's astrological sign",
          zh: "供應商的星座",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "自製或外購分析(Make-or-Buy Analysis)應理性評估組織內部能力/產能,以及自製與外購的總成本(含隱藏成本),藉此決定合適的採購策略與合約類型;個人偏好或與工作能力無關的因素不應作為決策依據。",
  },
  {
    id: "gov-033",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each governance role to the responsibility that best fits it.",
      zh: "請將下列每個治理角色拖曳配對到最符合的職責。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Sponsor",
            zh: "贊助人(Sponsor)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Steering Committee",
            zh: "指導委員會(Steering Committee)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Change Control Board (CCB)",
            zh: "變更控制委員會(CCB)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Project Manager",
            zh: "專案經理(Project Manager)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Formally authorizes the project charter and champions the project at the executive level",
            zh: "正式核准專案章程,並在高階主管層級為專案發聲",
          },
        },
        {
          id: "c2",
          text: {
            en: "Provides cross-project oversight and resolves conflicts that cannot be settled between individual project managers",
            zh: "提供跨專案的監督,並解決個別專案經理間無法自行解決的衝突",
          },
        },
        {
          id: "c3",
          text: {
            en: "Reviews and decides on formal change requests that affect the project baseline",
            zh: "審查並決定會影響專案基準的正式變更請求",
          },
        },
        {
          id: "c4",
          text: {
            en: "Executes day-to-day management of the project within the authority granted by the charter",
            zh: "在章程授予的職權範圍內,執行專案的日常管理",
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
    explanation: "贊助人核准章程並在高層代言專案;指導委員會提供跨專案監督並處理專案間的衝突;CCB 審核影響基準的正式變更請求;專案經理則在章程授權範圍內執行日常管理。清楚劃分各角色的決策權限,是治理架構有效運作的關鍵。",
  },
  {
    id: "gov-034",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each type of compliance requirement to the example that best fits it.",
      zh: "請將下列每種合規要求類型拖曳配對到最符合的例子。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Legal",
            zh: "Regulatory Requirement / 法規要求(Legal/Regulatory)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Contractual Obligation",
            zh: "合約義務(Contractual)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Organizational Policy",
            zh: "組織政策(Organizational Policy)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Industry Standard",
            zh: "產業標準(Industry Standard)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "A government agency requires environmental impact approval before construction begins",
            zh: "政府機關要求施工前須取得環境影響核准",
          },
        },
        {
          id: "c2",
          text: {
            en: "The signed agreement with a vendor specifies a penalty clause for late delivery",
            zh: "與供應商簽署的合約中訂有延遲交付的罰則條款",
          },
        },
        {
          id: "c3",
          text: {
            en: "The company's internal procurement policy requires three competing bids for purchases above a certain amount",
            zh: "公司內部採購政策要求超過一定金額的採購須取得三家競標報價",
          },
        },
        {
          id: "c4",
          text: {
            en: "A recognized industry body publishes a voluntary best-practice framework for data security that the project chooses to adopt",
            zh: "某公認產業組織發布了一套自願採用的資料安全最佳實務框架,專案選擇採用",
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
    explanation: "法規要求源自政府或法律的強制規定(如環評核准),屬於強制性、不可協商;合約義務源自雙方簽署的合約條款(如違約罰則);組織政策是公司內部訂定的規範(如採購競標門檻);產業標準則多為自願採用的最佳實務框架。四者雖然都會限制專案的作法,但強制力與來源截然不同,考題常混淆合約義務與組織政策,或混淆法規要求與產業標準。",
  },
  {
    id: "gov-035",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "{{blank1}} is conducted by staff within the performing organization and is typically used to self-review whether processes follow internal standards. {{blank2}} is conducted by an independent party outside the organization and is typically used to verify compliance with regulations or contractual requirements, offering greater objectivity.",
      zh: "{{blank1}} 由執行組織內部的人員進行,通常用於自我檢視流程是否遵循內部標準;{{blank2}} 則由組織外部的獨立第三方進行,通常用於驗證是否符合法規或合約要求,較具客觀性。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Internal Audit",
              zh: "內部稽核(Internal Audit)",
            },
          },
          {
            id: "b",
            text: {
              en: "External Audit",
              zh: "外部稽核(External Audit)",
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
              en: "Internal Audit",
              zh: "內部稽核(Internal Audit)",
            },
          },
          {
            id: "b",
            text: {
              en: "External Audit",
              zh: "外部稽核(External Audit)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "內部稽核由組織內部人員(如內部品保團隊)執行,聚焦於流程自我檢視與持續改善;外部稽核則由組織外部的獨立第三方(如法規機關或客戶指派的稽核方)執行,較具客觀性與公信力,常用於驗證法規遵循或合約條款履行狀況。兩者都是 Governance 領域中確保合規與品質的重要機制。",
  },
  {
    id: "gov-036",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "For a small, low-risk, well-understood project, the governance framework should typically be {{blank1}}; for a large, high-risk, or highly complex project involving multiple stakeholders, the governance framework should typically be {{blank2}}.",
      zh: "對於規模小、風險低、需求明確的專案,治理框架通常應該較為 {{blank1}};對於規模大、風險高或涉及多方利害關係人、高度複雜的專案,治理框架則通常應該較為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "lightweight, with fewer formal review points",
              zh: "精簡輕量,審查節點較少",
            },
          },
          {
            id: "b",
            text: {
              en: "heavy, with extensive formal review points",
              zh: "繁重嚴謹,審查節點眾多",
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
              en: "lightweight, with fewer formal review points",
              zh: "精簡輕量,審查節點較少",
            },
          },
          {
            id: "b",
            text: {
              en: "more rigorous, with more formal review and oversight points",
              zh: "較為嚴謹,設有更多正式審查與監督節點",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "治理框架應依專案規模、風險與複雜度裁適(tailor):小型、低風險、需求明確的專案適合精簡的治理,以免造成不必要的行政負擔;大型、高風險或利害關係人眾多的複雜專案,則需要較嚴謹的治理架構與更多正式審查節點,以有效控管風險並確保與商業目標對齊。裁適原則同樣適用於治理層面,並非治理框架一律愈重愈好。",
  },
  {
    id: "gov-037",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Click the item below that is the best example of an Enterprise Environmental Factor (EEF), as opposed to an Organizational Process Asset (OPA).",
      zh: "請點選下列選項中,最能代表「事業環境因素(EEF)」(相對於組織流程資產 OPA)的例子。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "A newly enacted industry-wide data privacy regulation that applies to all companies in the sector",
          zh: "新頒布、適用於整個產業所有公司的資料隱私法規",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "The organization's standard project charter template",
          zh: "組織的標準專案章程範本",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "A lessons learned repository maintained by the PMO",
          zh: "由 PMO 維護的經驗教訓資料庫",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "The company's internal change control procedure",
          zh: "公司內部的變更控制程序",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n1",
    explanation: "事業環境因素(EEF)是組織外部、通常不受組織直接控制的條件,例如產業法規;組織流程資產(OPA)則是組織內部可控的資產,如範本、經驗教訓資料庫與內部程序。三個干擾選項皆屬於組織內部可控的 OPA,只有新頒布的產業法規屬於外部不可控的 EEF。",
  },
  {
    id: "gov-038",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram below shows a governance reporting structure: the Project Team reports to the Project Manager, who reports to the Sponsor, who in turn reports to the Portfolio Governance Board. After two consecutive phase-gate reviews show that the business case is no longer valid, click the role that holds the authority to make the final decision to formally terminate the project.",
      zh: "下圖顯示某治理回報結構:專案團隊向專案經理回報,專案經理向贊助人回報,贊助人再向組合投資治理委員會(Portfolio Governance Board)回報。在連續兩次階段關卡審查顯示商業論證已不再成立後,請點選握有最終權限、可正式終止此專案的角色。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Project Team",
          zh: "專案團隊(Project Team)",
        },
        x: 5,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Project Manager",
          zh: "專案經理(Project Manager)",
        },
        x: 30,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Sponsor",
          zh: "贊助人(Sponsor)",
        },
        x: 55,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Portfolio Governance Board",
          zh: "組合投資治理委員會(Portfolio Governance Board)",
        },
        x: 80,
        y: 40,
        width: 18,
        height: 20,
      },
    ],
    correctAnswer: "n4",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "專案是否因商業論證不再成立而正式終止,屬於高層次的治理決策,通常由組織的組合投資治理委員會(或同等級的治理機構)依循升級路徑做出最終裁決,而非由專案經理或贊助人單方面決定。這也呼應「連續未通過階段關卡審查應上報至更高治理層級」的原則;專案經理與贊助人在此結構中是回報路徑上的中介角色,而非最終決策者。",
  },
  {
    id: "gov-039",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A team member updates a design document in the shared repository to reflect a typo correction and reformats a section for clarity. The scope, cost, and schedule baselines are not affected, but the document's version number is incremented and the revision history is logged. Which system is primarily being used to manage this update?",
      zh: "某團隊成員在共用檔案庫中更新一份設計文件,修正了一個錯字並重新排版某段落以提升清晰度。此次更新並未影響範疇、成本或時程基準,但文件的版本號被遞增,修訂紀錄也被記錄下來。這個更新主要是透過哪一個系統來管理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The Change Control System, since any document update must go through the CCB",
          zh: "變更控制系統,因為任何文件更新都必須經過 CCB",
        },
      },
      {
        id: "b",
        text: {
          en: "The Configuration Management System, which tracks versions and revisions of project artifacts",
          zh: "組態管理系統,用於追蹤專案產出物的版本與修訂",
        },
      },
      {
        id: "c",
        text: {
          en: "The Risk Register, since document errors are a form of risk",
          zh: "風險登錄表,因為文件錯誤屬於一種風險",
        },
      },
      {
        id: "d",
        text: {
          en: "The Issue Log, since a typo is an unresolved issue",
          zh: "問題記錄,因為錯字屬於尚待解決的問題",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "正解為 (b)。組態管理系統(Configuration Management System)負責追蹤專案產出物(如文件、設計、產品組態)的版本與修訂歷程,適用於不影響基準的例行性更新。變更控制系統(Change Control System)則專門處理會影響範疇、時程或成本基準的正式變更請求,需經 CCB 審核,並非所有文件更新都需要走這個流程,因此 (a) 錯誤。此案例與風險或問題記錄無關,(c)、(d) 皆不相關。",
  },
  {
    id: "gov-040",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "At a scheduled phase-gate review, the project manager reports that the projected return on investment has fallen from the originally approved 18% to 4%, primarily due to a shift in market conditions, even though the project remains on schedule and within budget. What should the project manager do?",
      zh: "在一次排定的階段關卡審查中,專案經理報告由於市場情勢轉變,原核准的投資報酬率已從 18% 降至 4%,儘管專案目前仍在時程與預算範圍內。專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Continue the project as planned, since schedule and budget performance are both healthy",
          zh: "依原計畫繼續執行專案,因為時程與預算表現都良好",
        },
      },
      {
        id: "b",
        text: {
          en: "Independently decide to terminate the project to avoid wasting further resources",
          zh: "自行決定終止專案,以避免浪費更多資源",
        },
      },
      {
        id: "c",
        text: {
          en: "Present the revised business case and financial projection to the governance body so it can formally decide whether to continue, redirect, or terminate the project",
          zh: "向治理機構提出修正後的商業論證與財務預測,由其正式決定專案應繼續、調整方向或終止",
        },
      },
      {
        id: "d",
        text: {
          en: "Quietly adjust the project's success criteria so the ROI figure no longer appears as a problem",
          zh: "悄悄調整專案的成功標準,讓 ROI 數字不再顯示為問題",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "正解為 (c)。階段關卡審查的核心目的之一是重新驗證商業論證是否仍然成立;當投資報酬率大幅滑落,即使時程與預算表現良好,仍應將此重大變化提報給治理機構(如指導委員會),由其依據完整資訊做出繼續、調整或終止的正式決定。(a) 忽略了商業價值已大幅改變的事實;(b) 專案經理無權單方面決定終止專案,這通常超出其職權範圍;(d) 竄改成功標準以掩蓋問題違反治理誠信原則,是不當行為。",
  },
  {
    id: "gov-041",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "According to the project's Delegation of Authority (DOA) matrix, the project manager may approve vendor change orders up to $10,000 without further approval. A critical vendor change order for $45,000 is needed urgently to avoid a schedule delay. What should the project manager do?",
      zh: "根據專案的職權授權矩陣(Delegation of Authority, DOA),專案經理可在未經進一步核准的情況下,自行核准至多 $10,000 的供應商變更單。目前有一筆金額 $45,000 的關鍵供應商變更單,需緊急處理以避免時程延遲。專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Approve the change order immediately since the urgency justifies exceeding the normal limit",
          zh: "立即核准該變更單,因為緊急情況足以合理化超出一般限額",
        },
      },
      {
        id: "b",
        text: {
          en: "Split the change order into smaller amounts, each under $10,000, so it can be approved without escalation",
          zh: "將變更單拆分成多筆低於 $10,000 的金額,以便無需上報即可核准",
        },
      },
      {
        id: "c",
        text: {
          en: "Escalate the change order to the appropriate authority (e.g., sponsor or steering committee) for approval, while clearly communicating the urgency and schedule impact",
          zh: "將此變更單依權限升級至適當的核准者(如贊助人或指導委員會),並清楚溝通其急迫性與時程影響",
        },
      },
      {
        id: "d",
        text: {
          en: "Delay the decision until the next regularly scheduled steering committee meeting, regardless of the schedule impact",
          zh: "延後決策至下次定期指導委員會會議,不論其對時程的影響",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "正解為 (c)。DOA 矩陣明確界定專案經理的核准權限上限,超出權限的支出必須依治理架構升級給有權核准的角色,同時應清楚傳達急迫性以爭取加速審查,而不是自行超權核准。(a) 違反 DOA 矩陣的授權界線;(b) 刻意拆分金額以規避核准程序是一種操弄治理控制的行為,屬於不誠信作法;(d) 未考慮情況的急迫性,可能造成不必要的時程損失,治理架構通常也允許緊急事項加速審查而非機械式等待例會。",
  },
  {
    id: "gov-042",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project is being staffed through a Time & Material contract with an external seller. Several weeks in, the project manager notices that the seller's invoiced hours have been steadily increasing without a corresponding increase in visible progress. What governance action should the project manager take?",
      zh: "某專案透過工料計酬(Time & Material)合約聘用外部賣方人力。幾週後,專案經理發現賣方請款的工時持續增加,但可見的進度卻沒有相應提升。專案經理應採取什麼治理行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Terminate the contract immediately without further investigation",
          zh: "未經進一步調查就立即終止合約",
        },
      },
      {
        id: "b",
        text: {
          en: "Increase oversight by requiring detailed timesheets tied to specific deliverables, and consider adding a not-to-exceed cap if not already in place",
          zh: "加強監督,要求詳列時間表並對應具體交付物,並考慮加入(若尚未設定)工時上限條款",
        },
      },
      {
        id: "c",
        text: {
          en: "Do nothing, since Time & Material contracts do not require oversight of hours worked",
          zh: "不採取任何行動,因為工料計酬合約本來就不需監督工時",
        },
      },
      {
        id: "d",
        text: {
          en: "Switch the contract type to Fixed Price mid-project without renegotiating scope",
          zh: "在專案進行中直接將合約類型改為固定價格,且不重新協商範疇",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "正解為 (b)。工料計酬(T&M)合約因工作量與工時事先未知,對買方而言風險相對較高,治理上需要加強監督機制,例如要求工時對應具體交付物,並常搭配「工時與金額上限(not-to-exceed)」條款以控管風險。(a) 過於躁進,應先加強監督與調查;(c) 錯誤地認為 T&M 合約不需監督,恰恰相反;(d) 未經正式變更程序與範疇重新協商就片面更改合約類型,不符合治理與採購管理原則。",
  },
  {
    id: "gov-043",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During vendor selection, the project manager realizes that one of the bidding companies is owned by a close family member. No one else on the evaluation team is aware of this relationship. What is the most appropriate action for the project manager to take?",
      zh: "在供應商評選過程中,專案經理發現其中一家投標公司是由其近親所擁有,而評選團隊中沒有其他人知道這層關係。專案經理最適當的作法是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Say nothing and simply vote against that vendor to avoid the appearance of favoritism",
          zh: "保持沉默,只是在評選時投票反對該供應商,以避免偏袒的觀感",
        },
      },
      {
        id: "b",
        text: {
          en: "Disclose the relationship to the sponsor or appropriate governance/ethics channel and recuse themselves from the evaluation and decision",
          zh: "向贊助人或適當的治理/道德管道揭露此關係,並主動迴避該項評選與決策",
        },
      },
      {
        id: "c",
        text: {
          en: "Continue participating normally in the evaluation, since the relationship has not influenced their opinion",
          zh: "照常參與評選,因為這層關係並未影響其個人看法",
        },
      },
      {
        id: "d",
        text: {
          en: "Quietly ensure that vendor does not win, without informing anyone",
          zh: "不告知任何人,私下確保該供應商不會得標",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "正解為 (b)。專案經理發現潛在的利益衝突時,依據專業道德與治理原則,應主動、透明地揭露此關係給適當的治理或道德管道(如贊助人、合規部門),並自行迴避相關評選與決策,以維持過程的公正性與可信度。(a)、(d) 隱瞞關係並暗中操作,違反誠信與透明原則,即使動機良善也不恰當;(c) 即使自認不受影響,單純的利益衝突「外觀」本身就足以損害治理公信力,必須揭露與迴避,而非自行判斷是否有偏頗。",
  },
  {
    id: "gov-044",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A program consists of three related projects, each with its own project manager. Two of the project managers both need the same specialized data migration team during the same two-week window, and their combined demand exceeds the team's capacity. Both project managers report that their own project's business case depends on hitting this window. Who should make the final decision on how the shared resource is allocated between the two projects?",
      zh: "某專案集包含三個相關專案,各自有其專案經理。其中兩位專案經理都需要同一批專屬的資料遷移團隊,且都排在同一個為期兩週的時段,兩者需求加總已超出該團隊的產能。兩位專案經理都表示自己專案的商業論證都仰賴在這個時段完成遷移。誰應該對這項共享資源該如何在兩個專案間分配做出最終決定?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Each project manager should independently decide for their own project, since they know their project best",
          zh: "各專案經理應各自為自己的專案獨立決定,因為他們最了解自己的專案",
        },
      },
      {
        id: "b",
        text: {
          en: "The data migration team lead should decide based on whichever request arrived first",
          zh: "資料遷移團隊負責人應依先到先得的原則決定",
        },
      },
      {
        id: "c",
        text: {
          en: "The program manager (or program governance level), who has visibility across all component projects and their relative priority to overall program benefits",
          zh: "專案集經理(或專案集治理層級),因其對所有組成專案及其對整體專案集效益的相對優先順序具有全局視野",
        },
      },
      {
        id: "d",
        text: {
          en: "The two project managers should flip a coin to avoid delay in decision-making",
          zh: "兩位專案經理應以擲硬幣方式決定,以避免決策延誤",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "正解為 (c)。當資源衝突發生在同一專案集內的多個專案之間、且個別專案經理無法自行解決時,應上報至專案集經理或專案集治理層級,由其依據對所有組成專案整體效益與優先順序的全局視野做出資源分配決策。(a) 各自決定容易導致衝突無法解決或造成不公;(b)、(d) 皆非依據治理原則與整體效益考量的合理決策方式,而是隨機或片面的作法。",
  },
  {
    id: "gov-045",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A critical production system fails during a project rollout, causing a safety risk that must be fixed within hours. The organization's standard Change Control Board only meets weekly, and convening an emergency session would take longer than the situation allows. What should the project manager do?",
      zh: "在專案上線過程中,某關鍵正式環境系統發生故障,造成必須在數小時內修復的安全風險。組織標準的變更控制委員會(CCB)僅每週開會一次,即使召開緊急會議所需時間也超過情況允許的範圍。專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Wait for the next regularly scheduled CCB meeting before making any change, regardless of the safety risk",
          zh: "不論安全風險為何,都等到下次例行 CCB 會議才進行任何變更",
        },
      },
      {
        id: "b",
        text: {
          en: "Implement the fix under the organization's documented emergency change procedure, then formally document and seek retroactive ratification from the CCB as soon as possible",
          zh: "依組織文件化的緊急變更程序實施修復,並盡快正式記錄並向 CCB 尋求追溯性追認",
        },
      },
      {
        id: "c",
        text: {
          en: "Make the fix without documenting it, since the situation was an emergency",
          zh: "直接進行修復且不加以記錄,因為這是緊急狀況",
        },
      },
      {
        id: "d",
        text: {
          en: "Refuse to authorize any fix without full CCB approval, even though this delays resolving a safety risk",
          zh: "即使會延遲解決安全風險,仍拒絕在未獲 CCB 完整核准前授權任何修復",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "正解為 (b)。治理良好的變更管控機制通常包含針對安全或營運緊急事件的「緊急變更程序」,允許在合理文件化與事後追認(retroactive ratification)的前提下,先行實施必要的修復,以避免因僵化的例行流程而延誤處理真正的緊急風險。(a)、(d) 過度僵化,可能因延誤處理而擴大安全風險,並非治理的本意;(c) 即使情況緊急,仍必須保留適當的文件紀錄以利事後追溯與課責,完全不記錄不符合治理原則。",
  },
  {
    id: "gov-046",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project delivers a data processing platform used simultaneously by teams in two countries with different, and in some respects conflicting, data privacy regulations. What is the most appropriate governance approach for the project manager to take regarding compliance?",
      zh: "某專案交付一套資料處理平台,同時供兩個國家的團隊使用,而這兩國的資料隱私法規有所不同,且部分規定彼此衝突。專案經理在合規性方面最適當的治理作法是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Comply only with the regulation of the country where the project team is physically located",
          zh: "只遵循專案團隊實際所在國家的法規",
        },
      },
      {
        id: "b",
        text: {
          en: "Pick whichever regulation is easiest to implement technically",
          zh: "選擇技術上最容易實作的那一套法規",
        },
      },
      {
        id: "c",
        text: {
          en: "Engage the organization's legal/compliance function to define a governance approach that satisfies the stricter applicable requirement in each relevant jurisdiction",
          zh: "與組織的法務/合規部門合作,制定能同時滿足各相關司法管轄區中較嚴格適用要求的治理作法",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the conflict and proceed with the original design, addressing regulatory issues only if a complaint is filed",
          zh: "忽略此衝突,依原設計繼續執行,只有在收到申訴時才處理法規問題",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "正解為 (c)。當專案涉及跨國、跨法規環境且要求可能衝突時,專案經理不應自行判斷法規適用性,而應諮詢組織的法務/合規職能,依循「就高不就低」(通常採較嚴格標準)的原則,制定能同時滿足各司法管轄區要求的治理架構與合規做法,這也呼應事業環境因素(EEF)中法規限制對治理的直接影響。(a)、(b)、(d) 皆忽略了跨國合規的複雜性與潛在法律風險,可能使組織暴露於重大合規風險之中。",
  },
  {
    id: "gov-047",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "An organization has adopted the PMBOK 8th edition principle of \"Integrate Sustainability.\" As a result, the governance framework now requires which of the following at each phase-gate review?",
      zh: "某組織已採納 PMBOK 8th 版「整合永續性(Integrate Sustainability)」原則。因此,其治理框架現在要求在每次階段關卡審查中納入下列何者?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A review of only the project's financial return, since sustainability is a separate initiative unrelated to governance",
          zh: "僅審查專案的財務報酬,因為永續性是與治理無關的獨立倡議",
        },
      },
      {
        id: "b",
        text: {
          en: "An assessment of the project's environmental, social, and long-term organizational impact alongside traditional scope/schedule/cost performance",
          zh: "在傳統的範疇/時程/成本績效之外,同時評估專案對環境、社會與組織長期的影響",
        },
      },
      {
        id: "c",
        text: {
          en: "A complete halt to all projects until a separate sustainability audit is conducted by an external party",
          zh: "在外部單位完成獨立的永續性稽核前,暫停所有專案",
        },
      },
      {
        id: "d",
        text: {
          en: "Removal of the phase-gate review process entirely in favor of continuous sustainability monitoring",
          zh: "完全取消階段關卡審查流程,改以持續性的永續監控取代",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "正解為 (b)。PMBOK 8th 版將「整合永續性」列為核心原則之一,反映治理框架應將環境、社會與組織長期影響的考量,與傳統的範疇、時程、成本績效一併納入治理審查(如階段關卡review),而非將永續性視為與專案治理無關的獨立議題。(a) 忽略了此原則對治理框架的實質影響;(c)、(d) 皆為過度極端的做法,並非該原則的合理落實方式。",
  },
  {
    id: "gov-048",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A seller disputes the project team's rejection of a delivered component, claiming it meets the contract's acceptance criteria, and is threatening to halt further work until payment is released. The disagreement is beyond the project manager's authority to resolve directly with the seller. What should the project manager do?",
      zh: "賣方對專案團隊拒收其交付組件的決定提出異議,聲稱該組件已符合合約的驗收標準,並揚言在款項撥付前將停止後續工作。此爭議已超出專案經理可直接與賣方協商解決的職權範圍。專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Immediately authorize payment to keep the seller working, without resolving the underlying dispute",
          zh: "為了讓賣方持續工作,立即授權付款,而不解決根本爭議",
        },
      },
      {
        id: "b",
        text: {
          en: "Personally decide who is right based on their own technical judgment and communicate the final decision to the seller",
          zh: "依自己的技術判斷親自裁定誰是誰非,並將最終決定告知賣方",
        },
      },
      {
        id: "c",
        text: {
          en: "Engage the organization's contract/procurement governance function (e.g., procurement or legal department) to formally assess the dispute against the contract terms",
          zh: "請組織的採購/合約治理職能(如採購或法務部門)依合約條款正式評估此爭議 ✅ **正解**",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the seller's claim and proceed to terminate the contract unilaterally",
          zh: "無視賣方的主張,逕自單方面終止合約",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "正解為 (c)。合約爭議(如驗收標準認定不一致)通常涉及合約條款的正式解釋與潛在法律責任,超出專案經理個人職權範圍時,應依循治理架構升級至組織的採購或法務等合約治理職能,由其依合約條款正式評估與處理,而非由專案經理個人裁定或片面行動。(a) 未解決根本爭議就付款可能造成後續風險;(b)、(d) 皆屬專案經理越權行事,可能引發合約與法律糾紛。",
  },
  {
    id: "gov-049",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are typically included in a well-formed Project Charter? (Select three.)",
      zh: "下列何者通常會包含在一份完整的專案章程(Project Charter)中?(請選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The name of the project manager and the level of authority assigned to them",
          zh: "專案經理姓名及其被授予的職權層級",
        },
      },
      {
        id: "b",
        text: {
          en: "A high-level summary of the business case and justification for undertaking the project",
          zh: "商業論證與專案立案理由的高階摘要",
        },
      },
      {
        id: "c",
        text: {
          en: "Measurable, high-level project objectives and success criteria",
          zh: "可衡量的高階專案目標與成功標準",
        },
      },
      {
        id: "d",
        text: {
          en: "A fully detailed Work Breakdown Structure (WBS) down to the work package level",
          zh: "完整細分到工作包層級的工作分解結構(WBS)",
        },
      },
      {
        id: "e",
        text: {
          en: "Line-item detail of every planned cost transaction for the entire project",
          zh: "專案全期每一筆計畫成本交易的逐項明細",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "專案章程(Project Charter)是啟動階段的高階正式授權文件,通常包含專案經理的姓名與職權層級、商業論證的高階摘要,以及可衡量的高階目標與成功標準。(d) 完整細分至工作包層級的 WBS 屬於規劃階段的詳細產出,並非章程內容;(e) 逐項成本交易明細也屬於後續詳細規劃與執行階段的財務管理內容,章程只需高階概算,不會包含如此細節。",
  },
  {
    id: "gov-050",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following would typically be defined as part of a project's governance approach (governance plan)? (Select three.)",
      zh: "下列何者通常會被定義為專案治理作法(治理計畫)的一部分?(請選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Decision-making authority levels and escalation paths for issues beyond the project manager's authority",
          zh: "決策授權層級,以及超出專案經理職權範圍問題的升級路徑",
        },
      },
      {
        id: "b",
        text: {
          en: "The schedule and criteria for phase-gate or stage-gate reviews",
          zh: "階段關卡審查的排程與標準",
        },
      },
      {
        id: "c",
        text: {
          en: "Roles and responsibilities for oversight bodies such as the sponsor, steering committee, and CCB",
          zh: "監督機構(如贊助人、指導委員會、CCB)的角色與職責",
        },
      },
      {
        id: "d",
        text: {
          en: "The detailed technical design specification of the product being built",
          zh: "所建置產品的詳細技術設計規格",
        },
      },
      {
        id: "e",
        text: {
          en: "The specific inspection checklist used to detect product defects during quality control",
          zh: "品質管制階段用於偵測產品缺陷的具體檢驗清單",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "治理計畫(governance approach)聚焦於決策權限、升級路徑、審查節點排程,以及各監督角色(贊助人、指導委員會、CCB)的職責劃分,確保專案決策有清楚的架構可循。(d) 產品技術設計規格屬於範疇/技術管理內容,並非治理計畫的核心;(e) 品質檢驗清單屬於品質管制(QC)在 Scope 領域的產品導向活動,而非治理層級的架構性內容。",
  },
  {
    id: "gov-051",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Which three of the following situations most clearly warrant escalating an issue to a higher governance level, rather than the project manager resolving it alone? (Select three.)",
      zh: "下列哪三種情況最明確地需要將問題升級至更高的治理層級,而非由專案經理獨自解決?(請選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The issue exceeds the tolerance thresholds (e.g., cost, schedule, or risk) defined in the project charter or governance plan",
          zh: "該問題超出專案章程或治理計畫中定義的容忍門檻(如成本、時程或風險)",
        },
      },
      {
        id: "b",
        text: {
          en: "The issue affects other projects or the broader portfolio's priorities, not just this single project",
          zh: "該問題影響其他專案或更廣泛的專案組合優先順序,而不僅限於本專案",
        },
      },
      {
        id: "c",
        text: {
          en: "The issue calls into question whether the project's business case is still valid",
          zh: "該問題使人質疑專案的商業論證是否仍然成立",
        },
      },
      {
        id: "d",
        text: {
          en: "A team member requests a minor adjustment to the format of a routine internal status report",
          zh: "某團隊成員要求對例行內部狀態報告的格式做小幅調整",
        },
      },
      {
        id: "e",
        text: {
          en: "The project manager personally disagrees with a technical approach chosen by a team member, though it remains within agreed quality standards",
          zh: "專案經理個人不認同某位團隊成員選擇的技術作法,儘管該作法仍符合既定的品質標準",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "超出章程/治理計畫定義的容忍門檻、影響其他專案或專案組合的優先順序,以及使商業論證的有效性受到質疑,都是明確需要升級至更高治理層級處理的情況,因為這些已超出專案經理個人職權或視野範圍。(d)、(e) 皆屬於專案經理職權範圍內、可自行處理的日常事務,不需要升級。",
  },
  {
    id: "gov-052",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are typically recorded as part of an Issue Log during Manage Project Execution? (Select three.)",
      zh: "下列何者通常會在「管理專案執行」過程中被記錄於問題記錄(Issue Log)中?(請選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A clear description of the issue and its potential impact",
          zh: "對問題及其潛在影響的清楚描述",
        },
      },
      {
        id: "b",
        text: {
          en: "The individual or role assigned as the owner responsible for resolving the issue",
          zh: "被指派負責解決該問題的個人或角色",
        },
      },
      {
        id: "c",
        text: {
          en: "A target date by which the issue is expected to be resolved",
          zh: "預期解決該問題的目標日期",
        },
      },
      {
        id: "d",
        text: {
          en: "The probability and impact score used to rank the issue against other future uncertainties",
          zh: "用於將該項目與其他未來不確定性排序比較的機率與衝擊評分",
        },
      },
      {
        id: "e",
        text: {
          en: "The full text of the original signed contract with the vendor associated with the issue",
          zh: "與該問題相關之供應商簽訂合約的完整原文",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "問題記錄(Issue Log)通常記錄問題描述、影響、負責解決的擁有者,以及預期解決的目標日期,用於追蹤已經發生、需要處理的具體事項。(d) 機率與衝擊評分是風險登錄表(Risk Register)用於評估「尚未發生」的不確定性的工具,問題(issue)是已經發生的事項,不需要機率評分;(e) 合約全文屬於採購文件管理範疇,不會記錄在問題記錄中。",
  },
  {
    id: "gov-053",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager discovers, partway through vendor selection, that they have a financial interest in one of the bidding companies. Which three actions align with proper ethical governance practice in this situation? (Select three.)",
      zh: "專案經理在供應商評選過程中,發現自己對其中一家投標公司具有財務利益關係。下列哪三項作法符合此情況下正確的道德治理實務?(請選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Formally disclose the conflict of interest to the sponsor or the organization's ethics/compliance function",
          zh: "向贊助人或組織的道德/合規職能正式揭露此利益衝突",
        },
      },
      {
        id: "b",
        text: {
          en: "Recuse themselves from evaluating or influencing the decision regarding that vendor",
          zh: "主動迴避該供應商相關的評選或決策影響",
        },
      },
      {
        id: "c",
        text: {
          en: "Document the disclosure and recusal in accordance with the organization's code of conduct",
          zh: "依組織的職業道德規範記錄揭露與迴避事宜",
        },
      },
      {
        id: "d",
        text: {
          en: "Continue leading the evaluation as normal since disclosing it might delay the vendor selection schedule",
          zh: "照常主導評選,因為揭露此事可能會延誤供應商評選時程",
        },
      },
      {
        id: "e",
        text: {
          en: "Wait until after the contract is awarded to mention the conflict, only if someone else notices it first",
          zh: "等到合約決標後,若有其他人先發現才提及此利益衝突",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "發現利益衝突時,正確的治理實務是及早、主動地正式揭露給適當管道(如贊助人或道德/合規部門)、自行迴避相關決策,並依組織規範完整記錄整個過程,以維護決策的公正性與可信度。(d) 為了避免延誤而隱瞞利益衝突,違反誠信原則;(e) 被動等待被發現才承認,同樣是不透明、不誠信的作法,均不符合適當的道德治理實務。",
  },
  {
    id: "gov-054",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Which three of the following situations would most appropriately justify using an organization's emergency/expedited change procedure instead of waiting for the next regularly scheduled CCB meeting? (Select three.)",
      zh: "下列哪三種情況最適合使用組織的緊急/加速變更程序,而非等待下一次例行排定的 CCB 會議?(請選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A defect poses an immediate safety hazard to users or workers",
          zh: "某項缺陷對使用者或工作人員造成立即的安全危害",
        },
      },
      {
        id: "b",
        text: {
          en: "A production system outage is actively disrupting critical business operations",
          zh: "正式環境系統當機正持續中斷關鍵業務營運",
        },
      },
      {
        id: "c",
        text: {
          en: "A newly effective regulatory deadline requires an immediate compliance fix to avoid legal penalty",
          zh: "新生效的法規期限要求立即進行合規修正,以避免法律處罰",
        },
      },
      {
        id: "d",
        text: {
          en: "A stakeholder would simply prefer a different color scheme on a non-critical report",
          zh: "某利害關係人只是比較偏好某份非關鍵報告使用不同的配色",
        },
      },
      {
        id: "e",
        text: {
          en: "The project manager personally wants to avoid the paperwork involved in the standard change request process",
          zh: "專案經理個人只是想省去標準變更請求流程所需的文書作業",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "緊急/加速變更程序的設計目的,是為了因應安全危害、正式環境重大中斷、緊迫法規期限等真正需要立即處理、且延遲將造成重大損害的情況。(d) 純粹是偏好性質的非關鍵調整,不具緊急性,應走一般標準變更流程;(e) 專案經理為了圖方便而規避正常程序,並非正當理由,反而違反治理紀律。",
  },
  {
    id: "gov-055",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each item below to the category it best belongs to.",
      zh: "請將下列每個項目拖曳配對到最符合的分類。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "A newly enacted national data protection law affecting all companies in the industry",
            zh: "新頒布、影響整個產業所有公司的國家資料保護法",
          },
        },
        {
          id: "p2",
          text: {
            en: "The organization's standard change request form template",
            zh: "組織的標準變更請求表單範本",
          },
        },
        {
          id: "p3",
          text: {
            en: "The project's approved business case document",
            zh: "專案已核准的商業論證文件",
          },
        },
        {
          id: "p4",
          text: {
            en: "The project's issue log tracking open items",
            zh: "專案用於追蹤未結事項的問題記錄",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Enterprise Environmental Factor (EEF) — external, generally uncontrollable condition",
            zh: "事業環境因素(EEF)——外部、通常不可控的條件",
          },
        },
        {
          id: "c2",
          text: {
            en: "Organizational Process Asset (OPA) — internal, reusable organizational template or asset",
            zh: "組織流程資產(OPA)——內部、可重複使用的組織範本或資產",
          },
        },
        {
          id: "c3",
          text: {
            en: "Business Document — justifies why the project exists",
            zh: "商業文件——說明專案存在的理由",
          },
        },
        {
          id: "c4",
          text: {
            en: "Project Document — created and maintained specifically for this project",
            zh: "專案文件——專為本專案建立與維護",
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
    explanation: "新頒布的國家法規屬於組織外部、不可控的事業環境因素(EEF);組織的標準表單範本屬於內部可重複使用的組織流程資產(OPA);商業論證是說明專案存在理由的商業文件;問題記錄則是專為特定專案建立與維護的專案文件。清楚分辨這四類輸入的性質,是理解 Governance 領域眾多流程共通輸入的基礎。",
  },
  {
    id: "gov-056",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Drag and match each contract type to the risk/incentive scenario it best fits.",
      zh: "請將下列每種合約類型拖曳配對到最符合的風險/誘因情境。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Fixed Price (FP)",
            zh: "固定價格(FP)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Cost Plus Incentive Fee (CPIF)",
            zh: "成本加誘因費用(CPIF)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Cost Plus Fixed Fee (CPFF)",
            zh: "成本加固定費用(CPFF)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The seller bears most of the cost risk, since they must absorb any cost overrun themselves under the agreed total price",
            zh: "賣方承擔大部分成本風險,因為任何成本超支都須由賣方在既定總價下自行吸收",
          },
        },
        {
          id: "c2",
          text: {
            en: "The seller has a financial incentive to control costs and improve performance, because a portion of their fee varies based on achieving defined cost or performance targets",
            zh: "賣方有財務誘因去控管成本並提升績效,因為部分費用會依是否達成既定成本或績效目標而變動",
          },
        },
        {
          id: "c3",
          text: {
            en: "The seller's fee remains fixed regardless of performance, while the buyer bears essentially all of the cost risk",
            zh: "賣方的費用不論績效如何皆維持固定,而買方則承擔幾乎全部的成本風險",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
    },
    explanation: "固定價格(FP)合約下,賣方以約定總價交付,任何成本超支風險主要由賣方承擔;成本加誘因費用(CPIF)合約則納入績效誘因機制,賣方費用會依成本控管或績效目標達成情況而變動,兼顧買賣雙方誘因;成本加固定費用(CPFF)合約中,賣方的費用固定不受績效影響,但買方需承擔幾乎全部的實際成本風險。三種合約代表買賣雙方風險與誘因分配光譜上的不同位置,是規劃採購策略(Plan Sourcing Strategy)時選擇合約類型的重要考量。",
  },
  {
    id: "gov-057",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each governance level to the scope of decision-making it is best associated with.",
      zh: "請將下列每個治理層級拖曳配對到最符合其決策範圍的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Project Governance",
            zh: "專案治理(Project Governance)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Program Governance",
            zh: "專案集治理(Program Governance)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Portfolio Governance",
            zh: "投資組合治理(Portfolio Governance)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Organizational Governance",
            zh: "組織治理(Organizational Governance)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Oversees decisions within a single project, such as approving its charter and managing its own change requests",
            zh: "監督單一專案內的決策,例如核准該專案的章程與管理其自身的變更請求",
          },
        },
        {
          id: "c2",
          text: {
            en: "Coordinates related projects to realize combined benefits and resolves resource or priority conflicts among them",
            zh: "協調相關專案以實現整合效益,並解決專案間的資源或優先順序衝突",
          },
        },
        {
          id: "c3",
          text: {
            en: "Selects, prioritizes, and balances an organization's collection of projects and programs against overall strategic objectives",
            zh: "依據整體策略目標,選擇、排序並平衡組織的專案與專案集組合",
          },
        },
        {
          id: "c4",
          text: {
            en: "Sets the overarching policies, ethical standards, and compliance requirements that apply across the entire organization",
            zh: "制定適用於整個組織的整體政策、道德標準與合規要求",
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
    explanation: "治理層級由小到大依序為:專案治理聚焦單一專案內的決策(如章程核准、變更管理);專案集治理協調多個相關專案以實現整合效益,並處理專案間的資源或優先順序衝突;投資組合治理則依組織策略選擇並平衡整個專案與專案集組合;組織治理則是最高層級,制定適用全組織的政策、道德與合規標準,為以上所有較低層級的治理提供依循框架。理解這四個層級的範圍差異,有助於判斷特定衝突或決策應該上報至哪一層級處理。",
  },
  {
    id: "gov-058",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Change Control Board (CCB) disposition to the scenario that best fits it.",
      zh: "請將下列每種變更控制委員會(CCB)的決議結果拖曳配對到最符合的情境。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Approved",
            zh: "核准(Approved)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Rejected",
            zh: "拒絕(Rejected)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Deferred",
            zh: "延後(Deferred)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Withdrawn",
            zh: "撤回(Withdrawn)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The change aligns with project objectives, its cost and schedule impact is acceptable, and the CCB authorizes updating the baseline",
            zh: "該變更符合專案目標,其成本與時程影響可接受,CCB 授權更新基準",
          },
        },
        {
          id: "c2",
          text: {
            en: "The change would undermine the project's core objectives or exceed acceptable risk, so the CCB does not authorize it",
            zh: "該變更將損及專案核心目標或超出可接受風險,CCB 不授權該變更",
          },
        },
        {
          id: "c3",
          text: {
            en: "The CCB needs more information (e.g., a fuller impact analysis or budget confirmation) before it can decide, so a decision is postponed to a future meeting",
            zh: "CCB 在做出決定前需要更多資訊(如更完整的衝擊分析或預算確認),因此決定延後至未來會議",
          },
        },
        {
          id: "c4",
          text: {
            en: "The requester decides the change request is no longer needed and pulls it from consideration before the CCB rules on it",
            zh: "提出者認定該變更請求已無必要,並在 CCB 做出裁決前主動將其撤回",
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
    explanation: "CCB 對變更請求的決議結果通常包括:核准(變更符合目標且影響可接受,可更新基準)、拒絕(變更損及目標或風險過高)、延後(資訊不足,需要更多分析後再議)、以及撤回(提出者自行撤回,通常發生在 CCB 尚未做出裁決之前)。清楚分辨這四種結果有助於理解評估並執行變更(Assess and Implement Changes)流程的完整決策光譜,而非僅有「核准」或「拒絕」兩種二元結果。",
  },
  {
    id: "gov-059",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "As the project team performs the planned work, raw, unanalyzed observations and measurements (e.g., \"42 of 100 test cases executed\") are first collected as {{blank1}}; once these are compared against the baseline and analyzed for meaning (e.g., \"testing is 3 days behind schedule\"), they become {{blank2}}, which governance bodies then use to make informed decisions.",
      zh: "當專案團隊執行規劃中的工作時,原始、未經分析的觀察與量測數據(例如「100 個測試案例中已執行 42 個」)最初被蒐集為 {{blank1}};一旦這些資料與基準比對並分析出其意義(例如「測試進度落後 3 天」),便成為 {{blank2}},治理機構接著會運用這些資訊做出明智的決策。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Work Performance Data",
              zh: "工作績效資料(Work Performance Data)",
            },
          },
          {
            id: "b",
            text: {
              en: "Work Performance Information",
              zh: "工作績效資訊(Work Performance Information)",
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
              en: "Work Performance Data",
              zh: "工作績效資料(Work Performance Data)",
            },
          },
          {
            id: "b",
            text: {
              en: "Work Performance Information",
              zh: "工作績效資訊(Work Performance Information)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "在管理專案執行(Manage Project Execution)流程中,團隊工作產出的原始觀察與量測數據稱為工作績效資料(Work Performance Data),尚未經過任何分析或比對;當這些資料被彙整、與基準比對並分析出意涵後,便轉化為工作績效資訊(Work Performance Information),提供治理機構(如贊助人、指導委員會)在審查時據以做出決策。理解「資料→資訊→報告」的逐層轉化流程,是掌握治理報告鏈的基礎。",
  },
  {
    id: "gov-060",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Under a Fixed Price contract, cost overrun risk falls primarily on the {{blank1}}; under a Cost-Reimbursable contract, cost overrun risk falls primarily on the {{blank2}}.",
      zh: "在固定價格合約下,成本超支的風險主要落在 {{blank1}} 身上;在成本補償合約下,成本超支的風險則主要落在 {{blank2}} 身上。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Seller",
              zh: "賣方(Seller)",
            },
          },
          {
            id: "b",
            text: {
              en: "Buyer",
              zh: "買方(Buyer)",
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
              en: "Seller",
              zh: "賣方(Seller)",
            },
          },
          {
            id: "b",
            text: {
              en: "Buyer",
              zh: "買方(Buyer)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "固定價格(Fixed Price)合約以約定總價交付,任何實際成本超出約定總價的部分,通常須由賣方自行吸收,因此成本風險主要由賣方承擔;成本補償(Cost-Reimbursable)合約則由買方依賣方實際可核銷成本加計費用進行補償,若成本超出預期,主要由買方承擔額外支出的風險。規劃採購策略(Plan Sourcing Strategy)時,合約類型的選擇本質上就是買賣雙方風險分配的決策。",
  },
  {
    id: "gov-061",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A written standard operating procedure describing step-by-step how to configure a server is an example of {{blank1}}; a senior engineer's intuitive sense of which configuration settings tend to cause instability, built up over years of experience but never written down, is an example of {{blank2}}.",
      zh: "一份逐步說明如何設定伺服器的書面標準作業程序,是 {{blank1}} 的例子;而一位資深工程師憑多年經驗累積、對哪些設定容易造成系統不穩定的直覺判斷,但從未寫下來,則是 {{blank2}} 的例子。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Explicit Knowledge",
              zh: "外顯知識(Explicit Knowledge)",
            },
          },
          {
            id: "b",
            text: {
              en: "Tacit Knowledge",
              zh: "內隱知識(Tacit Knowledge)",
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
              en: "Explicit Knowledge",
              zh: "外顯知識(Explicit Knowledge)",
            },
          },
          {
            id: "b",
            text: {
              en: "Tacit Knowledge",
              zh: "內隱知識(Tacit Knowledge)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "書面化、可文件化並容易傳遞的知識(如標準作業程序)屬於外顯知識(Explicit Knowledge);而個人透過經驗累積、難以用文字完整表達、常以直覺或經驗法則呈現的知識,則屬於內隱知識(Tacit Knowledge)。管理專案知識(Manage Project Knowledge)流程需同時運用這兩類知識,並特別留意內隱知識容易隨人員離開而流失,需透過師徒制、經驗分享會議等方式加以保存與傳遞。",
  },
  {
    id: "gov-062",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "The internal control principle of {{blank1}} ensures that no single individual has end-to-end control over a critical transaction (e.g., the same person cannot both approve a vendor payment and process it), which reduces the risk of fraud or error; this control is typically documented as part of the project's {{blank2}}.",
      zh: "內部控制原則中的 {{blank1}} 確保沒有單一個人能對關鍵交易擁有從頭到尾的完整控制權(例如同一人不能同時核准供應商付款並執行付款),藉此降低舞弊或錯誤的風險;此項控制通常會記載於專案的 {{blank2}} 之中。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Segregation of Duties",
              zh: "職務分工(Segregation of Duties)",
            },
          },
          {
            id: "b",
            text: {
              en: "Scope Baseline",
              zh: "範疇基準(Scope Baseline)",
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
              en: "Risk Register",
              zh: "風險登錄表(Risk Register)",
            },
          },
          {
            id: "b",
            text: {
              en: "Governance Plan",
              zh: "Internal Control Procedures / 治理計畫/內部控制程序(Governance Plan / Internal Control Procedures)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "職務分工(Segregation of Duties)是常見的內部控制原則,透過將關鍵交易(如核准與執行付款)的職責分散給不同人員,降低舞弊或錯誤發生且未被發現的風險。這類控制措施通常會納入專案的治理計畫或內部控制程序中,作為治理架構確保誠信與合規的具體機制之一,而非記錄在風險登錄表或範疇基準這類文件中。",
  },
  {
    id: "gov-063",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram below shows a change management reporting structure: a Team Member submits a proposed change to the Project Manager, who forwards formal change requests to a review body, whose decision is then reported to the Sponsor for awareness. Click the role in this structure that has the authority to formally approve or reject a change request affecting the project baseline.",
      zh: "下圖顯示某變更管理回報結構:團隊成員向專案經理提出變更提案,專案經理再將正式變更請求轉呈給某審查機構,其決議結果最終回報給贊助人知悉。請點選此結構中,握有正式核准或拒絕「會影響專案基準之變更請求」權限的角色。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Team Member",
          zh: "團隊成員(Team Member)",
        },
        x: 5,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Project Manager",
          zh: "專案經理(Project Manager)",
        },
        x: 28,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Change Control Board (CCB)",
          zh: "變更控制委員會(CCB)",
        },
        x: 51,
        y: 40,
        width: 22,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Sponsor (informed only)",
          zh: "贊助人(僅知會)",
        },
        x: 78,
        y: 40,
        width: 18,
        height: 20,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "在此結構中,團隊成員與專案經理都只是變更請求的提出與轉呈者,真正握有正式核准或拒絕、決定是否更新專案基準權限的角色是變更控制委員會(CCB);贊助人在此圖中僅為「知會」對象,接收決議結果,並非做出決策的角色。考生需留意題幹中「僅知會(informed only)」的用詞,避免誤選握有回報路徑末端位置、但實際上不具決策權的角色。",
  },
  {
    id: "gov-064",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Click the item below that is the best example of an Organizational Process Asset (OPA), as opposed to an Enterprise Environmental Factor (EEF).",
      zh: "請點選下列選項中,最能代表「組織流程資產(OPA)」(相對於事業環境因素 EEF)的例子。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "A sudden currency exchange rate fluctuation affecting an international procurement contract",
          zh: "影響國際採購合約的突發匯率波動",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "The organization's historical database of lessons learned from past projects",
          zh: "組織累積的過往專案經驗教訓歷史資料庫",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "A competitor's new product launch that shifts market conditions",
          zh: "競爭對手推出新產品,改變市場情勢",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "A country's newly revised labor law affecting contractor staffing",
          zh: "某國新修訂的勞動法規,影響承包人力配置",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "組織流程資產(OPA)是組織內部累積、可控且可重複使用的資產,例如經驗教訓歷史資料庫;而事業環境因素(EEF)則是組織外部、通常不可控的條件,例如匯率波動、市場競爭情勢或政府法規變動。三個干擾選項皆屬於外部不可控的 EEF,只有組織內部的經驗教訓資料庫屬於 OPA。",
  },
  {
    id: "gov-065",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram below shows four organizational structure types with brief descriptions. Click the structure in which the project manager has only limited authority, functional managers control the budget and resources, and the project manager acts more like a coordinator or expediter than a true decision-maker.",
      zh: "下圖顯示四種組織結構類型與其簡短描述。請點選在此結構下,專案經理職權有限、功能經理掌控預算與資源,而專案經理較像是協調者或聯絡人,而非真正決策者的結構。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Functional Organization — no formal PM role; functional managers run all work",
          zh: "功能型組織——無正式 PM 角色,功能經理主導所有工作",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Weak Matrix — a coordinator-style PM with limited authority; functional managers control resources",
          zh: "弱矩陣型——PM 職權有限,較像協調者,功能經理掌控資源",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Strong Matrix — a PM with significant authority over resources and budget",
          zh: "強矩陣型——PM 對資源與預算擁有相當大的職權",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Projectized Organization — the PM has full authority; teams are dedicated to the project",
          zh: "專案型組織——PM 擁有完全職權,團隊專職於該專案",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "弱矩陣型(Weak Matrix)組織結構中,專案經理的職權有限,主要扮演協調者(coordinator)或聯絡人(expediter)的角色,實際的資源與預算控制權仍掌握在功能經理手中;相對地,功能型組織甚至沒有正式的 PM 角色,強矩陣與專案型組織則讓 PM 擁有愈來愈高的職權。理解不同組織結構下 PM 職權高低的差異,有助於判斷 PM 在治理架構中能自行決策的範圍與必須升級的情況。",
  },
  {
    id: "gov-066",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Governance",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram below shows a project's normal reporting chain: Team Member reports to Project Manager, who reports to Sponsor. A team member suspects that both the project manager and the sponsor are colluding to conceal a serious safety-related fraud. Click the role or channel the team member should use to report this concern, bypassing the normal chain shown.",
      zh: "下圖顯示某專案的正常回報鏈:團隊成員向專案經理回報,專案經理向贊助人回報。某團隊成員懷疑專案經理與贊助人聯手隱瞞一起與安全相關的重大舞弊事件。請點選該團隊成員應該用來通報此疑慮、且能繞過圖中所示正常回報鏈的角色或管道。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Project Manager (normal chain)",
          zh: "專案經理(正常回報鏈)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Sponsor (normal chain)",
          zh: "贊助人(正常回報鏈)",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Organizational Ethics/Compliance Office or Audit Committee (independent channel)",
          zh: "組織道德/合規辦公室或稽核委員會(獨立管道)",
        },
        x: 52,
        y: 40,
        width: 26,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "A close personal friend outside the organization",
          zh: "組織外部的私人好友",
        },
        x: 82,
        y: 40,
        width: 16,
        height: 20,
      },
    ],
    correctAnswer: "n3",
    explanation: "當疑似舞弊或不當行為涉及正常回報鏈上的角色本身(如本例中專案經理與贊助人皆涉入)時,適當的治理作法是透過獨立於該回報鏈之外的管道通報,例如組織的道德/合規辦公室或稽核委員會,而非繼續依循可能已受影響、不再客觀的正常回報鏈,也不應僅私下告知組織外部的個人。這反映治理架構中「獨立申訴/舉報管道」的重要性,用以因應正常層級本身可能失靈的情況。",
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
    id: "scp-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which of the following best distinguishes Gold Plating from Scope Creep?",
      zh: "下列何者最能區分「鍍金(Gold Plating)」與「範疇潛變(Scope Creep)」?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Gold plating is initiated by the customer, while scope creep is initiated by the project team.",
          zh: "鍍金是由客戶發起,而範疇潛變是由專案團隊發起。",
        },
      },
      {
        id: "b",
        text: {
          en: "Gold plating is unauthorized extra work added by the team, while scope creep is uncontrolled scope expansion typically driven by the customer or stakeholders.",
          zh: "鍍金是團隊自行加入的未經授權額外工作,而範疇潛變是通常由客戶或利害關係人驅動的未受控範疇擴增。",
        },
      },
      {
        id: "c",
        text: {
          en: "Both terms refer to the same phenomenon and are used interchangeably in PMBOK.",
          zh: "兩者是同一現象,在 PMBOK 中可互換使用。",
        },
      },
      {
        id: "d",
        text: {
          en: "Gold plating always improves customer satisfaction, so it does not need to be avoided.",
          zh: "鍍金總是能提升客戶滿意度,因此不需要避免。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "範疇潛變(Scope Creep)通常源自客戶或利害關係人未經核准就不斷增加需求;鍍金(Gold Plating)則是團隊或 PM 主動、出於好意但未經授權地增加額外功能。兩者都屬於未受控的範疇變化,但發起方不同,是 Scope 領域常見的易混淆點。",
  },
  {
    id: "scp-002",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A developer on the team adds an extra animated transition to the app UI that was never requested, believing it will delight the customer. This adds two unplanned days of work. What should the project manager do first?",
      zh: "團隊中一位開發人員在應用程式介面中自行加入一個從未被要求的動畫轉場效果,認為這會讓客戶驚豔,結果多花了兩天未經規劃的工作。專案經理應該優先怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Praise the developer for going above and beyond, since customer satisfaction may improve.",
          zh: "讚揚開發人員超乎預期的付出,因為客戶滿意度可能因此提升。",
        },
      },
      {
        id: "b",
        text: {
          en: "Recognize this as gold plating, explain to the team why unauthorized extra work is discouraged, and assess the schedule impact.",
          zh: "認定這是鍍金行為,向團隊說明為何不鼓勵未經授權的額外工作,並評估對時程的影響。",
        },
      },
      {
        id: "c",
        text: {
          en: "Immediately submit a change request to formally add this feature to the scope baseline.",
          zh: "立即提出變更請求,將此功能正式納入範疇基準。",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore it since the extra work only took two days.",
          zh: "因為只多花兩天,直接忽略此事。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "即使出於好意,鍍金(Gold Plating)仍會造成未經授權的成本與時程風險,專案經理應與團隊溝通並評估影響,而非予以鼓勵或逕行忽略;由於此功能未經需求驗證,也不適合直接走變更管控納入基準。",
  },
  {
    id: "scp-003",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During UAT, the customer repeatedly asks the team to add \"just one more small feature\" that was never documented in the original requirements, insisting each time that it is necessary. What should the project manager recognize and do?",
      zh: "在 UAT(使用者驗收測試)期間,客戶不斷要求團隊「再加一個小功能」,而這些功能從未出現在原始需求文件中,並堅稱每次都有其必要性。專案經理應該如何認知並處理此情況?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "This is scope creep; the PM should route each request through the formal change control process before any work begins.",
          zh: "這是範疇潛變,PM 應在動工前將每項請求送交正式變更管控流程。",
        },
      },
      {
        id: "b",
        text: {
          en: "This is gold plating since it involves extra, unrequested work.",
          zh: "這是鍍金,因為涉及額外、未被要求的工作。",
        },
      },
      {
        id: "c",
        text: {
          en: "Since the requests are small, the PM should let the team quietly implement them to keep the customer happy.",
          zh: "因為請求很小,PM 應讓團隊悄悄實作以維持客戶滿意。",
        },
      },
      {
        id: "d",
        text: {
          en: "The PM should refuse to discuss further requests with the customer for the remainder of the project.",
          zh: "PM 應拒絕在專案剩餘期間與客戶討論任何進一步請求。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "客戶未經核准持續要求增加需求,屬於範疇潛變(Scope Creep)的典型情境;無論請求大小,都應正式走變更管控流程評估影響後再決定是否動工,而非默默動工或一味拒絕溝通。",
  },
  {
    id: "scp-004",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the THREE elements that should be explicitly included in a Project Scope Statement.",
      zh: "請選出應明確包含在「專案範疇說明書(Project Scope Statement)」中的三項元素。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "In-scope and out-of-scope deliverables",
          zh: "範疇內與範疇外的交付標的",
        },
      },
      {
        id: "b",
        text: {
          en: "Acceptance criteria",
          zh: "驗收標準",
        },
      },
      {
        id: "c",
        text: {
          en: "Assumptions and constraints",
          zh: "假設與限制",
        },
      },
      {
        id: "d",
        text: {
          en: "Detailed activity duration estimates",
          zh: "詳細的活動工期估算",
        },
      },
      {
        id: "e",
        text: {
          en: "Individual team member performance appraisals",
          zh: "個別團隊成員的績效考核",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "依據 Define Scope 流程,Project Scope Statement 須清楚列出 In Scope(範疇內)、Out of Scope(範疇外)、Assumptions(假設)、Constraints(限制)與 Acceptance Criteria(驗收標準)。活動工期估算屬於 Schedule 領域,團隊績效考核屬於 Resources 領域,皆非範疇說明書內容。",
  },
  {
    id: "scp-005",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A software module has just been completed by the development team, and the client is now formally reviewing it against the agreed acceptance criteria to sign off. This activity is called {{blank1}}, and it belongs to the {{blank2}} performance domain.",
      zh: "開發團隊剛完成一個軟體模組,客戶正依據議定的驗收標準進行正式審查以簽署驗收。此活動稱為 {{blank1}},並屬於 {{blank2}} 績效領域。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Control Quality (technical defect inspection only)",
              zh: "品質管制(僅技術性缺陷檢驗)",
            },
          },
          {
            id: "b",
            text: {
              en: "Validate Scope",
              zh: "確認範疇(Validate Scope)",
            },
          },
          {
            id: "c",
            text: {
              en: "Plan Scope Management",
              zh: "規劃範疇管理",
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
              en: "Stakeholders",
              zh: "Stakeholders",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "客戶正式檢視、驗收交付物屬於 Validate Scope(確認範疇)流程,產出 Accepted Deliverables,歸屬 Scope 績效領域;這與屬於 Governance 領域、著重流程預防的品質保證(QA)不同,核心分辨方式是 QA 管流程、Validate Scope 管產品與交付物本身。",
  },
  {
    id: "scp-006",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The project deliverables have been completed and tested internally, but the customer has delayed signing the formal acceptance documentation for three weeks, citing scheduling conflicts on their end. The team considers the scope complete and wants to proceed to closing. What should the project manager do?",
      zh: "專案交付標的已完成並在內部測試通過,但客戶以其內部行程衝突為由,延遲三週未簽署正式驗收文件。團隊認為範疇已完成,想直接進入結束階段。專案經理應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Proceed to close the project since the deliverables meet all technical requirements.",
          zh: "直接結束專案,因為交付標的已符合所有技術需求。",
        },
      },
      {
        id: "b",
        text: {
          en: "Continue to formally pursue Validate Scope with the customer; scope is not complete until acceptance criteria are confirmed and deliverables are formally accepted.",
          zh: "持續正式推動與客戶的確認範疇(Validate Scope)流程;在驗收標準獲得確認、交付標的正式被接受之前,範疇並未真正完成。",
        },
      },
      {
        id: "c",
        text: {
          en: "Ask the sponsor to sign off instead, bypassing the customer entirely.",
          zh: "改請贊助人簽署,完全繞過客戶。",
        },
      },
      {
        id: "d",
        text: {
          en: "Log the delay as a risk in the risk register and take no further action.",
          zh: "將延遲記錄於風險登記冊中,不再採取其他行動。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Validate Scope(確認範疇)著重「客戶是否正式接受」,未經正式驗收不算範疇完成,即使內部測試通過也不能取代客戶的正式簽署;專案經理應持續積極推動驗收,而非略過客戶或消極等待。",
  },
  {
    id: "scp-007",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Scope process to the primary output it produces.",
      zh: "請將下列每個範疇流程拖曳配對到其主要產出。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Plan Scope Management",
            zh: "規劃範疇管理(Plan Scope Management)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Elicit and Analyze Requirements",
            zh: "引出並分析需求(Elicit and Analyze Requirements)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Define Scope",
            zh: "定義範疇(Define Scope)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Develop Scope Structure",
            zh: "發展範疇結構(Develop Scope Structure)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Validate Scope",
            zh: "確認範疇(Validate Scope)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Requirements Traceability Matrix",
            zh: "需求追溯矩陣(RTM)",
          },
        },
        {
          id: "c2",
          text: {
            en: "Work Breakdown Structure and WBS Dictionary",
            zh: "工作分解結構(WBS)與 WBS 字典",
          },
        },
        {
          id: "c3",
          text: {
            en: "Scope Management Plan and Requirements Management Plan",
            zh: "範疇管理計畫與需求管理計畫",
          },
        },
        {
          id: "c4",
          text: {
            en: "Project Scope Statement",
            zh: "專案範疇說明書",
          },
        },
        {
          id: "c5",
          text: {
            en: "Accepted Deliverables",
            zh: "已驗收交付物",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c3",
      p2: "c1",
      p3: "c4",
      p4: "c2",
      p5: "c5",
    },
    explanation: "規劃範疇管理產出範疇管理計畫與需求管理計畫;引出並分析需求產出需求文件與需求追溯矩陣;定義範疇將需求轉化為專案範疇說明書;發展範疇結構(對應舊制 Create WBS)產出 WBS 與 WBS 字典;確認範疇由客戶或贊助人正式驗收,產出已驗收交付物。",
  },
  {
    id: "scp-008",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A Work Package is the smallest unit of the WBS — granular enough to reliably estimate, assign, and track, but not so fine that it becomes a micromanaged task list, nor so coarse that it cannot be estimated at all. Click the description below that best reflects an appropriately granular Work Package.",
      zh: "工作包(Work Package)是 WBS 的最小單位——顆粒度須足夠細,能可靠地估算、指派與追蹤,但又不能細到變成微觀管理的任務清單,也不能粗到無法估算。請點選下列最能反映「適當顆粒度」工作包的描述。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Build the entire mobile application",
          zh: "建置整個行動應用程式",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Design and implement the user login module",
          zh: "設計並實作使用者登入模組",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Click the blue submit button on line 42 of the source code",
          zh: "點擊原始碼第 42 行的藍色送出按鈕",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Handle all customer communications for the entire project",
          zh: "處理整個專案的所有客戶溝通事宜",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "工作包顆粒度需適中:選項 (n1) 與 (n4) 範圍過大、難以直接估算與指派(過粗);選項 (n3) 已細到程式碼層級的個別動作(過細,屬任務而非工作包);只有 (n2) 具備明確、可估算、可指派、可追蹤的適當顆粒度,符合 100% Rule 下工作包應有的定義方式。",
  },
  {
    id: "scp-009",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A WBS Level 2 deliverable \"Software Development\" is decomposed into 4 work packages estimated at 120, 80, 150, and 100 hours. The parent deliverable's baselined scope is documented at 500 hours. According to the 100% Rule, what does this discrepancy indicate?",
      zh: "WBS 第二層交付標的「軟體開發」被分解為 4 個工作包,估算工時分別為 120、80、150、100 小時。該上層交付標的的基準範疇文件記載為 500 小時。依據百分百法則(100% Rule),這個落差代表什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The decomposition is correct, since the four work packages sum to 450 hours which is close enough to 500.",
          zh: "分解是正確的,因為四個工作包總和 450 小時已經很接近 500 小時。",
        },
      },
      {
        id: "b",
        text: {
          en: "The decomposition violates the 100% Rule; the sum of the work packages (450 hours) does not equal 100% of the parent deliverable's scope (500 hours) — some scope may be missing or unaccounted for.",
          zh: "此分解違反了百分百法則;工作包總和(450 小時)並未等於上層交付標的範疇的 100%(500 小時)——可能有部分範疇遺漏或未被涵蓋。",
        },
      },
      {
        id: "c",
        text: {
          en: "The 100% Rule only applies to cost baselines, not to WBS hour estimates.",
          zh: "百分百法則只適用於成本基準,不適用於 WBS 工時估算。",
        },
      },
      {
        id: "d",
        text: {
          en: "The discrepancy is acceptable because contingency reserves automatically absorb the gap.",
          zh: "這個落差可以接受,因為應急準備金會自動吸收這個差額。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "100% Rule 是指 WBS 各層級的工作包加總,必須等於其上層交付標的範疇的 100%,不多也不少;此題中 450 小時 ≠ 500 小時,代表分解不完整、有 50 小時的範疇可能遺漏,這是常見的陷阱敘述——切勿將此規則誤解為「專案完成度百分比」。",
  },
  {
    id: "scp-010",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project manager is gathering input from a diverse group of external stakeholders to understand product requirements early in the project, before detailed specifications exist. Select the THREE techniques from the list that are appropriate tools for eliciting and analyzing requirements.",
      zh: "專案經理正在專案初期、詳細規格尚未確立前,向多元的外部利害關係人蒐集意見以了解產品需求。請從下列選項中選出三項適合用於「引出並分析需求」的技術。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Interviews",
          zh: "訪談(Interviews)",
        },
      },
      {
        id: "b",
        text: {
          en: "Focus groups",
          zh: "焦點團體(Focus Groups)",
        },
      },
      {
        id: "c",
        text: {
          en: "Prototypes",
          zh: "原型(Prototypes)",
        },
      },
      {
        id: "d",
        text: {
          en: "Earned value analysis",
          zh: "實獲值分析(Earned Value Analysis)",
        },
      },
      {
        id: "e",
        text: {
          en: "Critical path method",
          zh: "要徑法(Critical Path Method)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "引出並分析需求(Elicit and Analyze Requirements)常用工具包含訪談、焦點團體、腦力激盪、原型與標竿比較,用於蒐集利害關係人需求。實獲值分析屬於 Finance 領域的績效衡量工具,要徑法屬於 Schedule 領域的時程分析工具,皆非需求蒐集技術。",
  },
  {
    id: "scp-011",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "On an adaptive (agile) project, the product owner reprioritizes and adds detail to backlog items at the start of each iteration, rather than defining all requirements upfront. What best describes this practice?",
      zh: "在調適式(敏捷)專案中,產品負責人在每次迭代開始時重新排序並補充待辦清單項目的細節,而不是一開始就定義所有需求。這最能反映下列哪一項?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Scope creep, since new items keep appearing on the backlog.",
          zh: "範疇潛變,因為待辦清單不斷出現新項目。",
        },
      },
      {
        id: "b",
        text: {
          en: "Progressive elaboration of scope through the Product Backlog, refined iteration by iteration.",
          zh: "透過產品待辦清單(Product Backlog)對範疇進行漸進明確化,逐次迭代細化。",
        },
      },
      {
        id: "c",
        text: {
          en: "A violation of the approved Scope Management Plan.",
          zh: "違反了核准的範疇管理計畫。",
        },
      },
      {
        id: "d",
        text: {
          en: "Gold plating performed by the product owner.",
          zh: "產品負責人所做的鍍金行為。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "在調適式專案中,範疇並非一次定案,而是透過 Product Backlog 逐個 Iteration 重新排序與細化,這是正常且預期的漸進明確化(Progressive Elaboration)過程,與未經核准的範疇潛變或鍍金並不相同。",
  },
  {
    id: "scp-012",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The document that provides detailed information about each individual WBS component — including a description of the work, the responsible party, and its acceptance criteria — is called the {{blank1}}, which is distinct from the {{blank2}}, the smallest schedulable unit of scope itself.",
      zh: "提供每個 WBS 組成部分詳細資訊(包含工作描述、負責人與驗收標準)的文件,稱為 {{blank1}},此文件不同於範疇本身的最小可排程單位 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "WBS Dictionary",
              zh: "WBS 字典(WBS Dictionary)",
            },
          },
          {
            id: "b",
            text: {
              en: "Requirements Traceability Matrix",
              zh: "需求追溯矩陣(RTM)",
            },
          },
          {
            id: "c",
            text: {
              en: "Scope Baseline",
              zh: "範疇基準(Scope Baseline)",
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
              en: "Activity",
              zh: "活動(Activity)",
            },
          },
          {
            id: "b",
            text: {
              en: "Work Package",
              zh: "工作包(Work Package)",
            },
          },
          {
            id: "c",
            text: {
              en: "Milestone",
              zh: "里程碑(Milestone)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "WBS 字典(WBS Dictionary)說明每個工作包的細節,例如工作描述、負責人與驗收標準;工作包(Work Package)是 Scope 領域 WBS 的最小單位,與後續在 Schedule 領域才會被進一步分解出的活動(Activity)不同,考生常誤把兩者視為同一層級。",
  },
  {
    id: "scp-013",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A stakeholder requests a significant change to a previously approved requirement. Before approving the change, the project manager wants to fully understand its downstream impact. Select the TWO actions that make appropriate use of the Requirements Traceability Matrix (RTM) in this situation.",
      zh: "一位利害關係人要求對先前已核准的需求進行重大變更。在核准此變更之前,專案經理希望充分了解其下游影響。請選出兩項能適當運用需求追溯矩陣(RTM)來處理此情境的行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Trace the requirement forward to identify which deliverables, test cases, and work packages would be affected by the change.",
          zh: "向前追溯該需求,找出哪些交付標的、測試案例與工作包會受到此變更影響。",
        },
      },
      {
        id: "b",
        text: {
          en: "Use the RTM to identify other requirements linked to the same business objective, to assess ripple effects.",
          zh: "利用 RTM 找出與同一業務目標相關聯的其他需求,以評估連鎖影響。",
        },
      },
      {
        id: "c",
        text: {
          en: "Use the RTM to recalculate the project's critical path duration.",
          zh: "利用 RTM 重新計算專案的要徑工期。",
        },
      },
      {
        id: "d",
        text: {
          en: "Use the RTM to determine the team's remaining budget reserve.",
          zh: "利用 RTM 判斷團隊剩餘的預算儲備。",
        },
      },
      {
        id: "e",
        text: {
          en: "Use the RTM to reassign the requirement to a different stakeholder without further review.",
          zh: "利用 RTM 將該需求逕行改派給另一位利害關係人,不再進一步審查。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "需求追溯矩陣(RTM)用來追蹤每項需求從來源到交付、測試的對應關係,確保沒有需求被遺漏,也常用於評估變更對其他需求與交付標的的影響;它並非時程或預算分析工具,也不能取代正式的變更審查程序。",
  },
  {
    id: "scp-014",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the TWO statements that correctly describe Rolling Wave Planning.",
      zh: "請選出兩項正確描述「滾動式規劃(Rolling Wave Planning)」的敘述。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Near-term work is planned in detail, while work further in the future is planned only at a high level.",
          zh: "近期工作規劃得較細,遠期工作先以較粗的階層規劃。",
        },
      },
      {
        id: "b",
        text: {
          en: "It is a progressive elaboration technique commonly used when detailed information for later scope or schedule is not yet available.",
          zh: "這是一種漸進明確化技術,常用於範疇或時程初期資訊不足時。",
        },
      },
      {
        id: "c",
        text: {
          en: "It requires the entire project scope to be fully decomposed into work packages before execution begins.",
          zh: "它要求在執行開始前,必須將整個專案範疇完全分解為工作包。",
        },
      },
      {
        id: "d",
        text: {
          en: "It is only used in predictive (waterfall) projects and never applies to adaptive projects.",
          zh: "它只用於預測式(瀑布式)專案,絕不適用於調適式專案。",
        },
      },
      {
        id: "e",
        text: {
          en: "It replaces the need for maintaining a Scope Baseline entirely.",
          zh: "它完全取代了維護範疇基準的需求。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "滾動式規劃是近期工作規劃得較細、遠期工作先用較粗階層規劃,隨專案推進逐步細化的漸進明確化技術,常用於範疇與時程規劃初期資訊不足時,在預測式與調適式專案中都可能出現此概念,也不會取代範疇基準的必要性。",
  },
  {
    id: "scp-015",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Drag and match each scenario description below to whether it represents Scope Creep or Gold Plating.",
      zh: "請將下列每則情境描述拖曳配對到「範疇潛變(Scope Creep)」或「鍍金(Gold Plating)」。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "A customer keeps emailing the team asking for \"just one more small addition\" each week, without going through change control.",
            zh: "客戶每週不斷寄信要求「再加一個小功能」,從未走過變更管控流程。",
          },
        },
        {
          id: "p2",
          text: {
            en: "A developer adds a fancy loading animation the client never asked for, because they thought it would look nicer.",
            zh: "開發人員自行加入一個客戶從未要求的酷炫載入動畫,因為認為這樣比較好看。",
          },
        },
        {
          id: "p3",
          text: {
            en: "The sponsor verbally instructs the team to expand a report's data fields beyond the approved requirements, without submitting a change request.",
            zh: "贊助人口頭指示團隊將報表欄位擴增至超出已核准需求的範圍,且未提出變更請求。",
          },
        },
        {
          id: "p4",
          text: {
            en: "A business analyst voluntarily includes an extra summary dashboard in the deliverable, believing it adds value, without informing the PM.",
            zh: "業務分析師自行在交付標的中加入一個額外的摘要儀表板,認為這樣能增加價值,且未告知 PM。",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Scope Creep",
            zh: "範疇潛變",
          },
        },
        {
          id: "c2",
          text: {
            en: "Gold Plating",
            zh: "鍍金",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c1",
      p4: "c2",
    },
    explanation: "區分兩者的關鍵在於「發起方」:範疇潛變通常源自客戶或利害關係人未經核准持續增加需求(p1、p3 皆由客戶端/贊助人發起);鍍金則是團隊成員主動、出於好意但未經授權地增加額外功能(p2、p4 皆由團隊成員自行發起)。",
  },
  {
    id: "scp-016",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "The diagram shows a partial WBS decomposition: Project splits into Deliverable 1 and Deliverable 2. Deliverable 1 has already been further broken down into Work Package 1.1 and Work Package 1.2, but Deliverable 2 has not yet been decomposed further. Click the node that is still too coarse to reliably estimate, assign, and track, and therefore still needs further decomposition.",
      zh: "下圖為部分 WBS 分解結構:Project 拆分為 Deliverable 1 與 Deliverable 2。Deliverable 1 已進一步分解為 Work Package 1.1 與 Work Package 1.2,但 Deliverable 2 尚未進一步分解。請點選仍然過於粗略、無法可靠估算/指派/追蹤,因此仍需進一步分解的節點。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Project",
          zh: "Project",
        },
        x: 40,
        y: 5,
        width: 20,
        height: 15,
      },
      {
        id: "n2",
        label: {
          en: "Deliverable 1",
          zh: "Deliverable 1",
        },
        x: 15,
        y: 35,
        width: 25,
        height: 15,
      },
      {
        id: "n3",
        label: {
          en: "Deliverable 2",
          zh: "Deliverable 2",
        },
        x: 60,
        y: 35,
        width: 25,
        height: 15,
      },
      {
        id: "n4",
        label: {
          en: "Work Package 1.1",
          zh: "Work Package 1.1",
        },
        x: 5,
        y: 65,
        width: 20,
        height: 15,
      },
      {
        id: "n5",
        label: {
          en: "Work Package 1.2",
          zh: "Work Package 1.2",
        },
        x: 30,
        y: 65,
        width: 20,
        height: 15,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n2",
        to: "n5",
      },
    ],
    explanation: "分解(Decomposition)是由上而下拆解 WBS 的核心技術,工作包(Work Package)是 WBS 的最小單位。Deliverable 1 已分解至工作包層級(1.1、1.2),顆粒度已適當;Deliverable 2 尚未分解,仍是較大的交付標的層級,依 100% Rule 精神,尚未分解到最小單位前無法可靠估算與指派,因此需要繼續分解。",
  },
  {
    id: "scp-017",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Ensuring project processes are being followed correctly to prevent defects is called {{blank1}}, and belongs to the {{blank2}} performance domain; formally inspecting whether the finished product meets acceptance criteria instead belongs to the Scope domain's Validate Scope process.",
      zh: "確保專案流程被正確遵循以預防缺陷,稱為 {{blank1}},屬於 {{blank2}} 績效領域;而正式檢視成品是否符合驗收標準,則屬於 Scope 領域的確認範疇(Validate Scope)流程。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Quality Assurance (QA)",
              zh: "品質保證(Quality Assurance, QA)",
            },
          },
          {
            id: "b",
            text: {
              en: "Quality Control (QC)",
              zh: "品質管制(Quality Control, QC)",
            },
          },
          {
            id: "c",
            text: {
              en: "Requirements Elicitation",
              zh: "需求引出(Requirements Elicitation)",
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
              en: "Stakeholders",
              zh: "Stakeholders",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "8th 版中「品質保證(QA)」著重流程預防,歸屬 Governance 領域;而傳統品質管制中檢測缺陷的技術性檢驗,連同客戶驗收產品的「確認範疇(Validate Scope)」,則被整合進 Scope 領域的產品導向部分。核心分辨方式:QA 管流程,QC/Validate Scope 管產品與交付物本身。",
  },
  {
    id: "scp-018",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During a sprint review, the project manager discovers that a senior developer quietly added a premium data-export feature that was never part of the approved requirements, consuming three extra days of the sprint. The client is unaware of the addition. Select the TWO most appropriate actions for the project manager to take.",
      zh: "在 sprint review 中,專案經理發現一位資深開發人員悄悄加入了一個從未列入核准需求的進階資料匯出功能,額外耗費三天的 sprint 時間,而客戶對此毫不知情。請選出專案經理應採取的兩項最適當行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Have a direct conversation with the developer explaining why gold plating is discouraged, even when well-intentioned, due to unbudgeted cost, schedule, and risk impact.",
          zh: "直接與該開發人員溝通,說明即使出於好意,鍍金行為仍不被鼓勵,因為會造成未經預算規劃的成本、時程與風險影響。",
        },
      },
      {
        id: "b",
        text: {
          en: "Assess whether the extra feature should be removed, formally proposed as a change, or reworked to fit within the approved scope and schedule.",
          zh: "評估這項額外功能應該移除、正式提出變更請求,或調整以符合已核准的範疇與時程。",
        },
      },
      {
        id: "c",
        text: {
          en: "Immediately terminate the developer's involvement in the project.",
          zh: "立即終止該開發人員在專案中的參與。",
        },
      },
      {
        id: "d",
        text: {
          en: "Tell the client the feature is free and let them keep it without any documentation.",
          zh: "告訴客戶此功能是免費贈送,讓他們保留而不做任何文件記錄。",
        },
      },
      {
        id: "e",
        text: {
          en: "Ignore it, since the client will likely be pleased once they discover it.",
          zh: "忽略此事,因為客戶發現後大概會很高興。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "鍍金(Gold Plating)即使出於好意,仍會造成未經授權的成本、時程與風險衝擊,專案經理應與當事人溝通行為的不當之處,並評估該功能應移除、正式走變更管控,或調整以符合基準,而非放任、隱瞞或採取過度懲罰性的反應。",
  },
  {
    id: "scp-019",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project sponsor asks the project manager why the Work Package \"Develop Login Module\" in the WBS has not yet been broken into daily-level tasks with assigned start and finish dates. What should the project manager explain?",
      zh: "專案贊助人詢問專案經理,為何 WBS 中的工作包「開發登入模組」尚未被拆解成具有指派起訖日期的每日任務。專案經理應該如何說明?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Work Packages are further decomposed into Activities during Schedule domain processes, not within the Scope domain's WBS.",
          zh: "工作包會在 Schedule 領域的流程中被進一步分解為活動(Activity),而非在 Scope 領域的 WBS 中完成。",
        },
      },
      {
        id: "b",
        text: {
          en: "This is an error; all work packages must include daily task-level dates as part of the WBS itself.",
          zh: "這是一個錯誤;所有工作包都必須在 WBS 本身中就包含每日任務層級的日期。",
        },
      },
      {
        id: "c",
        text: {
          en: "Work Packages and Activities are the same thing, so no further breakdown is necessary.",
          zh: "工作包與活動是同一件事,因此不需要進一步拆解。",
        },
      },
      {
        id: "d",
        text: {
          en: "Only adaptive projects require decomposing work packages into activities.",
          zh: "只有調適式專案才需要將工作包分解為活動。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "工作包(Work Package)是 Scope 領域 WBS 的最小單位;後續需要在 Schedule 領域的流程中,才會被進一步分解為活動(Activity)並排入時程、指派起訖日期。這是 Scope 與 Schedule 兩領域職責分工的常見易混淆點,不分專案方法皆適用。",
  },
  {
    id: "scp-020",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A stakeholder says: \"I need a document that tells me, in plain language, what's included in this project, what's explicitly excluded, what assumptions we're making, and what conditions must be met to accept the final deliverable.\" Click the document that matches this description.",
      zh: "一位利害關係人說:「我需要一份文件,能用白話文告訴我這個專案包含什麼、明確排除什麼、我們做了哪些假設,以及最終交付標的要符合什麼條件才能被接受。」請點選符合此描述的文件。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Requirements Traceability Matrix",
          zh: "需求追溯矩陣",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Project Scope Statement",
          zh: "專案範疇說明書",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "WBS Dictionary",
          zh: "WBS 字典",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Risk Register",
          zh: "風險登記冊",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "專案範疇說明書(Project Scope Statement)是文字描述範疇邊界的說明書,清楚列出 In Scope(範疇內)、Out of Scope(範疇外)、Assumptions(假設)、Constraints(限制)與 Acceptance Criteria(驗收標準),正好對應此利害關係人所描述的需求;RTM 是需求清單的追蹤矩陣,WBS 字典說明個別工作包細節,風險登記冊記錄風險項目,皆非此情境所需文件。",
  },
  {
    id: "scp-021",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project document lists, in a hierarchical breakdown, every work package that together represents 100% of the project's deliverables. Which document is this?",
      zh: "有一份專案文件以階層式分解的方式,列出所有工作包,其總和代表專案交付標的的 100%。這是哪一份文件?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Project Scope Statement",
          zh: "專案範疇說明書",
        },
      },
      {
        id: "b",
        text: {
          en: "Requirements Documentation",
          zh: "需求文件",
        },
      },
      {
        id: "c",
        text: {
          en: "Work Breakdown Structure (WBS)",
          zh: "工作分解結構(WBS)",
        },
      },
      {
        id: "d",
        text: {
          en: "Requirements Traceability Matrix",
          zh: "需求追溯矩陣",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "WBS 是階層式的「拆解圖」,將範疇拆解為工作包,並依 100% Rule 涵蓋全部範疇不多不少;Scope Statement 是文字描述範疇邊界的「說明書」,Requirements Documentation 是利害關係人需求的「清單」,RTM 則是追蹤需求對應關係的矩陣,三者常被誤用互換,考題常要求辨認某段敘述對應哪一份文件。",
  },
  {
    id: "scp-022",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A stakeholder says the product \"must support biometric login and process at least 500 transactions per second.\" Another stakeholder says \"the project team will complete all development within 10 two-week iterations.\" Which of these two statements describes Product Scope rather than Project Scope?",
      zh: "一位利害關係人說產品「必須支援生物辨識登入,且每秒至少處理 500 筆交易」。另一位利害關係人說「專案團隊將在 10 個為期兩週的迭代內完成所有開發工作」。這兩句敘述中,哪一句描述的是產品範疇(Product Scope)而非專案範疇(Project Scope)?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The first statement, since it describes the features and functions of the product/service/result itself.",
          zh: "第一句,因為它描述的是產品/服務/結果本身應具備的特性與功能。",
        },
      },
      {
        id: "b",
        text: {
          en: "The second statement, since it describes what the product does.",
          zh: "第二句,因為它描述產品的功能。",
        },
      },
      {
        id: "c",
        text: {
          en: "Both statements describe product scope.",
          zh: "兩句都是描述產品範疇。",
        },
      },
      {
        id: "d",
        text: {
          en: "Neither statement describes product scope; both describe project scope.",
          zh: "兩句都不是描述產品範疇,兩句都是描述專案範疇。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Product Scope(產品範疇)指產品、服務或結果本身應具備的特性與功能(如生物辨識登入、每秒交易量),依產品需求衡量;Project Scope(專案範疇)則是為交付該產品所需完成的工作(如迭代次數、開發活動),依專案管理計畫衡量。第一句描述功能規格,屬產品範疇;第二句描述完成工作的節奏與方式,屬專案範疇。",
  },
  {
    id: "scp-023",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which document defines the criteria for how project and product scope will be defined, developed, monitored, controlled, and validated throughout the project — as distinct from the document that defines how requirements will be collected, analyzed, and documented?",
      zh: "哪一份文件定義了整個專案中「範疇要如何被定義、發展、監控、控制與確認」的準則——有別於定義「需求要如何被蒐集、分析與記錄」的文件?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Scope Management Plan",
          zh: "範疇管理計畫(Scope Management Plan)",
        },
      },
      {
        id: "b",
        text: {
          en: "Requirements Management Plan",
          zh: "需求管理計畫(Requirements Management Plan)",
        },
      },
      {
        id: "c",
        text: {
          en: "Project Scope Statement",
          zh: "專案範疇說明書",
        },
      },
      {
        id: "d",
        text: {
          en: "Scope Baseline",
          zh: "範疇基準",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "範疇管理計畫(Scope Management Plan)說明整個專案範疇要如何被定義、發展、監控、控制與確認;需求管理計畫(Requirements Management Plan)則專門說明需求要如何被蒐集、分析、記錄與追蹤。兩者皆是 Plan Scope Management 流程的產出,但職責不同,是常見易混淆的一組文件。",
  },
  {
    id: "scp-024",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the THREE elements that a WBS Dictionary entry for a given Work Package should typically include.",
      zh: "請選出「WBS 字典(WBS Dictionary)」中某工作包條目通常應包含的三項元素。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A description of the work to be performed for that work package",
          zh: "該工作包待完成工作的描述",
        },
      },
      {
        id: "b",
        text: {
          en: "The responsible organization or individual assigned to the work package",
          zh: "負責該工作包的組織或個人",
        },
      },
      {
        id: "c",
        text: {
          en: "Acceptance criteria specific to that work package",
          zh: "該工作包專屬的驗收標準",
        },
      },
      {
        id: "d",
        text: {
          en: "The annual performance review score of the assigned team member",
          zh: "被指派團隊成員的年度績效考核分數",
        },
      },
      {
        id: "e",
        text: {
          en: "The overall project's critical path duration",
          zh: "整個專案的要徑工期",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "WBS 字典針對每個工作包提供詳細資訊,包含工作描述、負責組織/個人、驗收標準、里程碑、所需資源等,用以補充 WBS 圖形本身無法呈現的細節。團隊成員績效考核屬於 Resources 領域,要徑工期屬於 Schedule 領域,皆非 WBS 字典的內容。",
  },
  {
    id: "scp-025",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A functional manager stops the project manager in the hallway and casually mentions that the finance department \"really needs\" an extra reporting field added to the deliverable, but does not follow up in writing or submit anything formally. What should the project manager do first?",
      zh: "一位職能經理在走廊上隨口向專案經理提到,財務部門「真的很需要」在交付標的中加入一個額外的報表欄位,但並未以書面方式跟進,也沒有提出任何正式文件。專案經理應該優先怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Quietly add the field to the deliverable since it came from a manager and seems reasonable.",
          zh: "因為是經理提出且聽起來合理,悄悄將此欄位加入交付標的。",
        },
      },
      {
        id: "b",
        text: {
          en: "Ask the functional manager to formally document the request so it can be assessed against the scope baseline and routed through change control if warranted.",
          zh: "請該職能經理將此請求正式文件化,以便對照範疇基準進行評估,並視情況送交變更管控流程。",
        },
      },
      {
        id: "c",
        text: {
          en: "Ignore the comment entirely since it was not submitted in writing.",
          zh: "因為未以書面提出,直接忽略此意見。",
        },
      },
      {
        id: "d",
        text: {
          en: "Immediately update the WBS Dictionary to reflect the new field.",
          zh: "立即更新 WBS 字典以反映此新欄位。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "即使請求出於善意且來自經理層級,未經正式記錄與變更管控的範疇異動仍可能演變為範疇潛變;專案經理應引導對方將需求正式文件化,依循 Monitor and Control Scope 的變更管控程序評估影響,而非逕行動工或直接忽略。",
  },
  {
    id: "scp-026",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "While decomposing a deliverable, the team stops breaking a component down further once they conclude that \"the remaining work can be reliably estimated, assigned to a single responsible owner, and completed within a reasonably short reporting period.\" What are they applying?",
      zh: "在分解某項交付標的時,團隊在判定「剩餘工作已能可靠估算、可指派給單一負責人,且能在合理短的報告週期內完成」後,便停止進一步分解。他們正在應用什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The 100% Rule, which governs how much total scope must be included.",
          zh: "百分百法則(100% Rule),用來規範應涵蓋多少總範疇。",
        },
      },
      {
        id: "b",
        text: {
          en: "The general stopping criteria for decomposition, used to determine when a component has reached an appropriately granular Work Package.",
          zh: "分解作業的一般停止準則,用來判斷某項組成是否已達到適當顆粒度的工作包。",
        },
      },
      {
        id: "c",
        text: {
          en: "Rolling Wave Planning, which only applies to schedule activities, not WBS components.",
          zh: "滾動式規劃,僅適用於時程活動,不適用於 WBS 組成項目。",
        },
      },
      {
        id: "d",
        text: {
          en: "The Scope Validation criteria used by the customer to accept deliverables.",
          zh: "客戶用來驗收交付標的的範疇確認準則。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "分解(Decomposition)並非無止盡地拆解,而是拆到「可可靠估算、可指派單一負責人、可在合理短週期內完成並追蹤」的工作包層級即停止,這是分解作業的一般停止準則;100% Rule 規範的是總和涵蓋率而非何時停止分解的判斷依據,兩者常被混淆。",
  },
  {
    id: "scp-027",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Select the TWO documents that are the primary outputs of the Elicit and Analyze Requirements process.",
      zh: "請選出「引出並分析需求(Elicit and Analyze Requirements)」流程的兩項主要產出文件。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Requirements Documentation",
          zh: "需求文件",
        },
      },
      {
        id: "b",
        text: {
          en: "Requirements Traceability Matrix (RTM)",
          zh: "需求追溯矩陣(RTM)",
        },
      },
      {
        id: "c",
        text: {
          en: "Scope Baseline",
          zh: "範疇基準",
        },
      },
      {
        id: "d",
        text: {
          en: "Work Breakdown Structure",
          zh: "工作分解結構(WBS)",
        },
      },
      {
        id: "e",
        text: {
          en: "Project Charter",
          zh: "專案章程",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "引出並分析需求流程蒐集並分析利害關係人需求,主要產出需求文件(Requirements Documentation)與需求追溯矩陣(RTM);範疇基準與 WBS 是後續 Define Scope、Develop Scope Structure 流程的產出,專案章程則是 Governance 領域啟動階段的產出,皆非此流程的直接輸出。",
  },
  {
    id: "scp-028",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Midway through a sprint, a key stakeholder emails the product owner asking for a new capability to be added to the current sprint's committed work, claiming it is \"extremely urgent.\" What is the most appropriate way for this to be handled?",
      zh: "在 sprint 進行到一半時,一位重要利害關係人寄信給產品負責人,要求在本次 sprint 已承諾的工作中加入一項新功能,並聲稱這「非常緊急」。此情況最適當的處理方式為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The developer receiving the most direct message should add it immediately since the stakeholder called it urgent.",
          zh: "收到訊息的開發人員應立即加入,因為利害關係人稱其緊急。",
        },
      },
      {
        id: "b",
        text: {
          en: "The product owner should evaluate the request, and if it is not truly urgent enough to disrupt the current sprint, add it to the Product Backlog for prioritization in a future iteration.",
          zh: "產品負責人應評估此請求,若並非緊急到需要打斷本次 sprint,則將其加入產品待辦清單,留待未來迭代排序處理。",
        },
      },
      {
        id: "c",
        text: {
          en: "The team should ignore the request since sprint scope can never change under any circumstances.",
          zh: "團隊應忽略此請求,因為 sprint 範疇在任何情況下都絕不能變動。",
        },
      },
      {
        id: "d",
        text: {
          en: "The scrum master should unilaterally decide to extend the sprint length to accommodate the new request.",
          zh: "Scrum Master 應片面決定延長 sprint 時長以容納此新請求。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "在調適式專案中,已承諾的 sprint 範疇原則上應受保護以維持團隊可預測性;新需求應由產品負責人評估其真正急迫性,一般情況下加入 Product Backlog 依優先順序於未來迭代處理,而非任意由個別開發人員逕行加入,也不應僵化到完全不評估、或片面延長 sprint。",
  },
  {
    id: "scp-029",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Scope-related task to the description that best fits it.",
      zh: "請將下列每項範疇相關任務拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Assess and manage requirements",
            zh: "評估與管理需求",
          },
        },
        {
          id: "p2",
          text: {
            en: "Break down scope",
            zh: "拆解範疇",
          },
        },
        {
          id: "p3",
          text: {
            en: "Monitor and validate scope",
            zh: "監控與確認範疇",
          },
        },
        {
          id: "p4",
          text: {
            en: "Prevent or manage scope changes",
            zh: "預防或處理範疇變更",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Interview stakeholders and analyze their needs to produce documented, traceable requirements.",
            zh: "訪談利害關係人並分析其需求,以產出可追溯的文件化需求。",
          },
        },
        {
          id: "c2",
          text: {
            en: "Decompose deliverables into a hierarchical structure of work packages using the 100% Rule.",
            zh: "依 100% Rule 將交付標的分解為工作包的階層結構。",
          },
        },
        {
          id: "c3",
          text: {
            en: "Compare actual deliverables against acceptance criteria and obtain formal customer sign-off.",
            zh: "將實際交付標的與驗收標準比對,並取得客戶正式簽署。",
          },
        },
        {
          id: "c4",
          text: {
            en: "Compare work performance against the scope baseline and route unauthorized deviations through formal change control.",
            zh: "將工作績效與範疇基準比對,並將未經授權的偏差送交正式變更管控。",
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
    explanation: "這四項對應 Scope 領域的核心任務分工:評估與管理需求對應 Elicit and Analyze Requirements(訪談、分析、產出需求文件);拆解範疇對應 Develop Scope Structure(依 100% Rule 建立 WBS);監控與確認範疇對應 Validate Scope(客戶正式驗收);預防或處理範疇變更對應 Monitor and Control Scope(比對基準、變更管控),四者合起來涵蓋 Scope 領域從蒐集到收尾的完整生命週期。",
  },
  {
    id: "scp-030",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A WBS Level 2 deliverable \"Data Migration\" is decomposed into 3 work packages estimated at 200, 150, and 180 hours, for a total of 530 hours. The deliverable's baselined scope, however, is documented at only 480 hours, and no change request has been approved to expand it. What does this most likely indicate?",
      zh: "WBS 第二層交付標的「資料遷移」被分解為 3 個工作包,估算工時分別為 200、150、180 小時,總計 530 小時。然而該交付標的的基準範疇文件僅記載 480 小時,且並無任何已核准的變更請求擴增此範疇。這最可能代表什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "This is acceptable because exceeding the baseline by a small margin is always allowed under the 100% Rule.",
          zh: "這是可以接受的,因為依 100% Rule,超出基準一小段幅度總是被允許的。",
        },
      },
      {
        id: "b",
        text: {
          en: "The work packages may include unauthorized additional scope (such as gold plating) beyond what was baselined, and the discrepancy should be investigated before proceeding.",
          zh: "工作包可能包含超出基準範圍的未經授權額外範疇(例如鍍金),此落差應在繼續執行前先進行調查。",
        },
      },
      {
        id: "c",
        text: {
          en: "The 100% Rule does not apply when work packages exceed the parent's baseline, only when they fall short of it.",
          zh: "當工作包總和超出上層基準時不適用 100% Rule,只有低於基準時才適用。",
        },
      },
      {
        id: "d",
        text: {
          en: "The extra 50 hours should automatically be absorbed into the schedule reserve without further review.",
          zh: "多出的 50 小時應自動由時程儲備吸收,不需進一步審查。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "100% Rule 要求各層級工作包加總必須等於上層範疇的 100%,不多也不少。本題工作包總和(530 小時)超出已核准基準(480 小時)且無對應的核准變更,代表可能存在未經授權納入的額外範疇(例如鍍金或範疇潛變),應先調查落差來源,而非視為理所當然可被儲備吸收或忽略——這與常見「總和不足」的陷阱方向相反,但同樣違反 100% Rule。",
  },
  {
    id: "scp-031",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the THREE items that are appropriate outputs of the Monitor and Control Scope process when an unauthorized deviation from the scope baseline is detected.",
      zh: "當偵測到與範疇基準有未經授權的偏差時,請選出「監控範疇(Monitor and Control Scope)」流程適當的三項產出。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Work performance information describing the nature and extent of the scope variance",
          zh: "描述範疇偏差性質與程度的工作績效資訊",
        },
      },
      {
        id: "b",
        text: {
          en: "Change requests to address the deviation, such as corrective action or a formal scope change",
          zh: "用以處理該偏差的變更請求,例如矯正行動或正式範疇變更",
        },
      },
      {
        id: "c",
        text: {
          en: "Updates to the scope baseline, once any related change request is approved",
          zh: "一旦相關變更請求獲核准後,對範疇基準的更新",
        },
      },
      {
        id: "d",
        text: {
          en: "An updated cost baseline approved without going through integrated change control",
          zh: "未經整合變更管控即核准的成本基準更新",
        },
      },
      {
        id: "e",
        text: {
          en: "Revised resource calendars for individual team members",
          zh: "個別團隊成員的修訂資源日曆",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Monitor and Control Scope 比對實際績效與範疇基準,常見產出包含工作績效資訊(描述偏差)、變更請求(處理偏差),以及變更獲核准後對範疇基準的更新。成本基準的變更必須經過整合變更管控,不能繞過核准直接更新;資源日曆屬於 Resources 領域的產出,皆非此流程直接產出。",
  },
  {
    id: "scp-032",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each statement below to whether it describes Product Scope or Project Scope.",
      zh: "請將下列每則敘述拖曳配對到「產品範疇(Product Scope)」或「專案範疇(Project Scope)」。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "\"The mobile banking app must support fingerprint authentication and process transfers in under 2 seconds.\"",
            zh: "「行動銀行 App 必須支援指紋驗證,並在 2 秒內完成轉帳處理。」",
          },
        },
        {
          id: "p2",
          text: {
            en: "\"The team will complete all coding, testing, and deployment activities across 6 planned releases.\"",
            zh: "「團隊將在 6 次規劃好的發布中完成所有程式撰寫、測試與部署活動。」",
          },
        },
        {
          id: "p3",
          text: {
            en: "\"The annual report must include five specific regulatory-mandated data sections.\"",
            zh: "「年度報告必須包含五個法規要求的特定資料章節。」",
          },
        },
        {
          id: "p4",
          text: {
            en: "\"All quality reviews and stakeholder sign-off meetings must be completed before the project is closed.\"",
            zh: "「所有品質審查與利害關係人簽署會議必須在專案結束前完成。」",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Product Scope",
            zh: "產品範疇",
          },
        },
        {
          id: "c2",
          text: {
            en: "Project Scope",
            zh: "專案範疇",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c1",
      p4: "c2",
    },
    explanation: "產品範疇描述產品/服務/結果本身應具備的特性與功能(指紋驗證、轉帳速度、法規要求的報告章節),依產品需求衡量;專案範疇描述為交付產品所需完成的工作與活動(發布次數、審查與簽署會議),依專案管理計畫衡量。此區分也呼應範疇需與商業價值、法規要求對齊的精神。",
  },
  {
    id: "scp-033",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project team finalizes the Project Scope Statement for a new medical device based entirely on features requested by the internal engineering team, without reviewing applicable regulatory approval requirements for the target market. Late in development, the team discovers the device cannot be legally sold without additional safety documentation that was never scoped. What should the project manager have ensured during Define Scope?",
      zh: "專案團隊完全依據內部工程團隊所提出的功能需求,完成一款新醫療器材的專案範疇說明書,卻未檢視目標市場適用的法規核准要求。開發後期,團隊才發現若缺乏從未被納入範疇的額外安全文件,該產品將無法合法銷售。專案經理在「定義範疇」階段應確保什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "That the Project Scope Statement was reviewed against relevant external regulatory and business environment factors, not just internal engineering requests, before being baselined.",
          zh: "專案範疇說明書在被納入基準前,已對照相關外部法規與商業環境因素進行檢視,而不只是內部工程需求。",
        },
      },
      {
        id: "b",
        text: {
          en: "That the WBS Dictionary contained more detailed technical specifications for each work package.",
          zh: "WBS 字典中包含更詳細的每個工作包技術規格。",
        },
      },
      {
        id: "c",
        text: {
          en: "That the team used more prototypes during requirements elicitation.",
          zh: "團隊在需求引出階段使用更多原型。",
        },
      },
      {
        id: "d",
        text: {
          en: "That the sponsor personally approved every individual engineering requirement.",
          zh: "贊助人親自核准每一項個別的工程需求。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "定義範疇(Define Scope)不應只反映內部團隊的技術願望清單,還須考量外部商業環境因素,例如法規、市場准入條件等,確保範疇與合規、商業價值真正對齊;更多原型或更細的技術規格文件,以及逐項核准需求,都無法彌補一開始未將法規要求納入範疇考量的根本問題。",
  },
  {
    id: "scp-034",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During a sprint review, the project manager learns that a developer quietly added premium functionality that was never part of the approved backlog item, consuming unplanned effort, while the client remains unaware. Select the TWO best next actions.",
      zh: "在 sprint review 中,專案經理得知一位開發人員悄悄加入了從未列入已核准待辦項目的進階功能,耗用了未經規劃的心力,而客戶對此毫不知情。請選出最恰當的兩項下一步行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Discuss with the developer why adding unrequested functionality outside the committed backlog item creates unplanned risk and effort, even when well-intentioned.",
          zh: "與該開發人員討論,說明即使出於好意,在已承諾的待辦項目之外加入未被要求的功能,仍會造成未經規劃的風險與心力耗用。",
        },
      },
      {
        id: "b",
        text: {
          en: "Bring the item to the product owner to decide whether it should be removed, formally added to the backlog for proper prioritization, or reworked.",
          zh: "將此項目提交給產品負責人,決定應予以移除、正式加入待辦清單以進行適當排序,或加以調整。",
        },
      },
      {
        id: "c",
        text: {
          en: "Present the extra functionality to the client as a bonus without disclosing that it was unplanned and untested against acceptance criteria.",
          zh: "將此額外功能作為贈品呈現給客戶,而不揭露這是未經規劃、也未依驗收標準測試的功能。",
        },
      },
      {
        id: "d",
        text: {
          en: "Remove the developer from all future sprints as a disciplinary measure.",
          zh: "將該開發人員從未來所有 sprint 中除名作為懲處措施。",
        },
      },
      {
        id: "e",
        text: {
          en: "Say nothing, since the sprint review already happened and it is too late to address it.",
          zh: "保持沉默,因為 sprint review 已經結束,處理已經太遲。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "即使在調適式環境中,未經核准加入待辦項目之外的功能仍屬鍍金(Gold Plating),應與當事人溝通其風險,並交由產品負責人依正常排序機制決定去留,而不是隱瞞、包裝成贈品呈現給客戶(可能帶來未經驗證的品質風險),也不應採取過度懲罰或消極不作為的反應。",
  },
  {
    id: "scp-035",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each requirement elicitation technique to the scenario in which it would be most appropriately used.",
      zh: "請將下列每項需求引出技術拖曳配對到最適合使用它的情境。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Interviews",
            zh: "訪談(Interviews)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Focus Groups",
            zh: "焦點團體(Focus Groups)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Prototypes",
            zh: "原型(Prototypes)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Benchmarking",
            zh: "標竿比較(Benchmarking)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "One-on-one conversations with key executive sponsors to understand their individual strategic priorities in depth.",
            zh: "與關鍵高階贊助人進行一對一深入對話,以了解其個別策略優先順序。",
          },
        },
        {
          id: "c2",
          text: {
            en: "A moderated session with 8 pre-qualified end users discussing their reactions to a proposed feature set together.",
            zh: "由主持人引導 8 位經預先篩選的終端使用者,共同討論對擬議功能集的反應。",
          },
        },
        {
          id: "c3",
          text: {
            en: "An early, simplified working model of the new interface shown to users to gather feedback before full development.",
            zh: "在完整開發前,向使用者展示新介面的早期簡化可運作模型以蒐集回饋。",
          },
        },
        {
          id: "c4",
          text: {
            en: "Comparing the organization's planned process against practices used by industry-leading competitors.",
            zh: "將組織規劃中的流程與業界領先競爭者所採用的做法進行比較。",
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
    explanation: "訪談適合一對一深入了解個別關鍵人物(如高階贊助人)的觀點;焦點團體適合由主持人引導一群經篩選的使用者進行團體討論;原型適合以簡化可運作模型及早蒐集使用者回饋,降低後續變更成本;標竿比較則是與外部組織/競爭者的實務做法進行比較。四者皆為引出並分析需求常用工具,但適用情境不同,考題常要求依情境反推使用哪一種技術。",
  },
  {
    id: "scp-036",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A team defines detailed technical requirements for a new HR system based purely on individual department wish-lists, without checking whether the resulting features align with the company's approved digital-transformation business case. Three months into development, the sponsor halts the project, stating the scope does not support the intended business outcomes. What should the project manager have done differently during Define Scope?",
      zh: "團隊完全依據各部門個別的願望清單,定義新人資系統的詳細技術需求,卻未檢查這些功能是否與公司已核准的數位轉型商業論證(Business Case)相符。開發三個月後,贊助人喊停專案,表示此範疇無法支持預期的商業成果。專案經理在「定義範疇」階段本應如何不同地處理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Validate that in-scope items were traceable to and supportive of the approved business case and organizational strategy, not just department wish-lists, before finalizing the scope baseline.",
          zh: "在定案範疇基準前,應確認範疇內項目可追溯並支持已核准的商業論證與組織策略,而不只是部門願望清單。",
        },
      },
      {
        id: "b",
        text: {
          en: "Include more detailed acceptance criteria for each individual department's requested feature.",
          zh: "為每個部門要求的功能項目納入更詳細的驗收標準。",
        },
      },
      {
        id: "c",
        text: {
          en: "Ask each department to submit their wish-list in writing rather than verbally.",
          zh: "要求各部門以書面形式而非口頭提交其願望清單。",
        },
      },
      {
        id: "d",
        text: {
          en: "Add a contingency reserve to the schedule to absorb the risk of scope misalignment.",
          zh: "在時程中加入應急準備金,以吸收範疇不一致的風險。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "定義範疇時,範疇內容須能追溯並支持組織已核准的商業論證與策略目標,而不只是彙整各部門技術願望清單;僅改善驗收標準的細緻度、要求書面提交,或以時程儲備因應風險,都無法解決範疇一開始就未與商業價值對齊的根本問題,這正是 Scope 領域中商業環境面向的核心考點。",
  },
  {
    id: "scp-037",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The {{blank1}} consists of the approved Project Scope Statement, the WBS, and the WBS Dictionary; once approved, changes to it can only be made through {{blank2}}.",
      zh: "{{blank1}} 由已核准的專案範疇說明書、WBS 與 WBS 字典所組成;一旦核准後,其變更只能透過 {{blank2}} 進行。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Requirements Documentation",
              zh: "需求文件",
            },
          },
          {
            id: "b",
            text: {
              en: "Scope Baseline",
              zh: "範疇基準(Scope Baseline)",
            },
          },
          {
            id: "c",
            text: {
              en: "Scope Management Plan",
              zh: "範疇管理計畫",
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
              en: "Formal integrated change control",
              zh: "正式的整合變更管控",
            },
          },
          {
            id: "b",
            text: {
              en: "A verbal agreement between the PM and the sponsor",
              zh: "專案經理與贊助人之間的口頭協議",
            },
          },
          {
            id: "c",
            text: {
              en: "Informal team consensus during a status meeting",
              zh: "狀態會議中的團隊非正式共識",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "範疇基準(Scope Baseline)由已核准的專案範疇說明書、WBS 與 WBS 字典三者組成,是衡量範疇績效的基準線;一旦核准,任何變更都必須經過正式的整合變更管控流程,不能僅憑口頭協議或非正式共識隨意調整。",
  },
  {
    id: "scp-038",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the THREE criteria that indicate a WBS component has been decomposed enough to be treated as a Work Package.",
      zh: "請選出三項顯示某 WBS 組成項目已被充分分解、可視為工作包(Work Package)的準則。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The remaining work can be reliably estimated in terms of cost and duration.",
          zh: "剩餘工作在成本與工期上都能被可靠估算。",
        },
      },
      {
        id: "b",
        text: {
          en: "The work can be assigned to a single responsible owner.",
          zh: "該工作能被指派給單一負責人。",
        },
      },
      {
        id: "c",
        text: {
          en: "The work can realistically be completed within a reasonably short reporting period.",
          zh: "該工作能在合理短的報告週期內實際完成。",
        },
      },
      {
        id: "d",
        text: {
          en: "The work must take exactly 8 hours to complete, no more and no less.",
          zh: "該工作必須恰好耗費 8 小時完成,不多也不少。",
        },
      },
      {
        id: "e",
        text: {
          en: "The work must always be assigned directly to the project sponsor.",
          zh: "該工作必須永遠直接指派給專案贊助人。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "判斷是否已分解到工作包層級的一般準則包括:能可靠估算成本與工期、能指派給單一負責人、能在合理短的報告週期內完成與追蹤。並沒有規定工作包必須恰好耗費固定小時數,也不會規定一律指派給贊助人——贊助人通常不會是執行層級工作包的負責人。",
  },
  {
    id: "scp-039",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The technique of progressively breaking deliverables down into smaller, more manageable components until reaching the Work Package level is called {{blank1}}. The principle requiring that the sum of the work at each WBS level equals exactly 100% of the scope represented by its parent — no more, no less — is known as {{blank2}}.",
      zh: "將交付標的逐步拆解為更小、更易管理的組成,直到達到工作包層級的技術稱為 {{blank1}}。而要求 WBS 每一層級的工作加總必須恰好等於其上層範疇 100%(不多也不少)的原則,則稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Rolling Wave Planning",
              zh: "滾動式規劃",
            },
          },
          {
            id: "b",
            text: {
              en: "Decomposition",
              zh: "分解(Decomposition)",
            },
          },
          {
            id: "c",
            text: {
              en: "Progressive Elaboration",
              zh: "漸進明確化",
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
              en: "The 100% Rule",
              zh: "百分百法則(100% Rule)",
            },
          },
          {
            id: "b",
            text: {
              en: "The Scope Baseline",
              zh: "範疇基準",
            },
          },
          {
            id: "c",
            text: {
              en: "The Critical Path Method",
              zh: "要徑法",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "分解(Decomposition)是由上而下逐步拆解交付標的至工作包層級的核心技術;100% Rule 則規範每一層級的工作包加總必須完整涵蓋上層範疇的 100%,兩者搭配使用以確保 WBS 既完整又具備適當顆粒度。滾動式規劃與漸進明確化雖相關,但描述的是「隨時間逐步細化」而非「拆解至工作包」或「加總須為 100%」的具體技術與原則本身。",
  },
  {
    id: "scp-040",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram shows a partial WBS decomposition with hour estimates. Deliverable \"Testing\" (baselined at 100 hours) is decomposed into two child work packages: \"Unit Testing\" (40 hours) and \"Integration Testing\" (40 hours), with no approved change request for the remaining scope. Click the node whose decomposition currently violates the 100% Rule.",
      zh: "下圖為含工時估算的部分 WBS 分解結構。交付標的「測試」(基準工時 100 小時)被分解為兩個子工作包:「單元測試」(40 小時)與「整合測試」(40 小時),且並無任何已核准的變更請求處理剩餘範疇。請點選目前分解違反 100% Rule 的節點。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Testing (baselined at 100 hours)",
          zh: "測試(基準工時 100 小時)",
        },
        x: 35,
        y: 8,
        width: 30,
        height: 18,
      },
      {
        id: "n2",
        label: {
          en: "Unit Testing (40 hours)",
          zh: "單元測試(40 小時)",
        },
        x: 10,
        y: 55,
        width: 30,
        height: 18,
      },
      {
        id: "n3",
        label: {
          en: "Integration Testing (40 hours)",
          zh: "整合測試(40 小時)",
        },
        x: 60,
        y: 55,
        width: 30,
        height: 18,
      },
    ],
    correctAnswer: "n1",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
    ],
    explanation: "依 100% Rule,子層級工作包加總必須等於上層交付標的的 100%。「單元測試」(40 小時)加「整合測試」(40 小時)僅合計 80 小時,未達「測試」交付標的基準的 100 小時,顯示有 20 小時的範疇可能遺漏或尚未分解。違反規則的判斷對象是「測試」這個上層交付標的的分解不完整,而非個別已分解完成、工時已明確的子工作包本身。",
  },
  {
    id: "scp-041",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "On an adaptive project, the prioritized, evolving list of features, enhancements, and requirements that represents the project's scope over time is called the {{blank1}}. The recurring activity in which the team and product owner review, clarify, and add detail to upcoming items on this list is known as {{blank2}}.",
      zh: "在調適式專案中,代表專案範疇隨時間演變的優先排序清單(涵蓋功能、增強項目與需求)稱為 {{blank1}}。團隊與產品負責人定期檢視、釐清並補充此清單中即將處理項目細節的活動,稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Scope Baseline",
              zh: "範疇基準",
            },
          },
          {
            id: "b",
            text: {
              en: "Product Backlog",
              zh: "產品待辦清單(Product Backlog)",
            },
          },
          {
            id: "c",
            text: {
              en: "WBS Dictionary",
              zh: "WBS 字典",
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
              en: "Backlog Refinement (Grooming)",
              zh: "待辦清單精煉(Backlog Refinement / Grooming)",
            },
          },
          {
            id: "b",
            text: {
              en: "Validate Scope",
              zh: "確認範疇(Validate Scope)",
            },
          },
          {
            id: "c",
            text: {
              en: "Integrated Change Control",
              zh: "整合變更管控",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "在調適式專案中,Product Backlog(產品待辦清單)是隨時間演變、代表範疇的優先排序清單;團隊與產品負責人定期進行 Backlog Refinement(待辦清單精煉,亦稱 Grooming),持續檢視、釐清並補充即將處理項目的細節,這是漸進明確化範疇的具體實踐方式,不同於用於正式驗收的確認範疇,也不同於用於處理已基準範疇正式變更的整合變更管控。",
  },
  {
    id: "scp-042",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "The diagram shows the sequence of Scope processes in order: Plan Scope Management, Elicit and Analyze Requirements, Define Scope, Develop Scope Structure, and Validate Scope. Click the process whose primary output is Accepted Deliverables.",
      zh: "下圖依序顯示範疇領域的流程順序:規劃範疇管理、引出並分析需求、定義範疇、發展範疇結構、確認範疇。請點選其主要產出為「已驗收交付物」的流程。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Plan Scope Management",
          zh: "規劃範疇管理",
        },
        x: 2,
        y: 40,
        width: 17,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Elicit and Analyze Requirements",
          zh: "引出並分析需求",
        },
        x: 21,
        y: 40,
        width: 17,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Define Scope",
          zh: "定義範疇",
        },
        x: 40,
        y: 40,
        width: 17,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Develop Scope Structure",
          zh: "發展範疇結構",
        },
        x: 59,
        y: 40,
        width: 17,
        height: 20,
      },
      {
        id: "n5",
        label: {
          en: "Validate Scope",
          zh: "確認範疇",
        },
        x: 78,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n5",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n4",
        to: "n5",
      },
    ],
    explanation: "確認範疇(Validate Scope)由客戶或贊助人正式檢視、驗收交付標的,主要產出為「已驗收交付物(Accepted Deliverables)」;其餘流程分別產出範疇管理計畫與需求管理計畫、需求文件與 RTM、專案範疇說明書、WBS 與 WBS 字典,皆非「已驗收交付物」本身。",
  },
  {
    id: "scp-043",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which statement correctly explains how completion is measured for Product Scope versus Project Scope?",
      zh: "下列何者正確說明「產品範疇」與「專案範疇」的完成度分別依據什麼來衡量?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Product scope completion is measured against the product requirements, while project scope completion is measured against the project management plan.",
          zh: "產品範疇的完成度依「產品需求」衡量,而專案範疇的完成度依「專案管理計畫」衡量。",
        },
      },
      {
        id: "b",
        text: {
          en: "Both product scope and project scope are measured against the same acceptance criteria document.",
          zh: "產品範疇與專案範疇都依同一份驗收標準文件來衡量。",
        },
      },
      {
        id: "c",
        text: {
          en: "Product scope completion is measured against the schedule baseline, while project scope completion is measured against the cost baseline.",
          zh: "產品範疇的完成度依時程基準衡量,而專案範疇的完成度依成本基準衡量。",
        },
      },
      {
        id: "d",
        text: {
          en: "Product scope completion is measured against stakeholder satisfaction surveys only, while project scope has no measurable completion criteria.",
          zh: "產品範疇的完成度只依利害關係人滿意度調查衡量,而專案範疇沒有可衡量的完成準則。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Product Scope(產品範疇)完成度是依「產品需求(product requirements)」來衡量,是否具備所有約定的特性與功能;Project Scope(專案範疇)完成度則依「專案管理計畫(project management plan)」衡量,是否完成計畫中定義的所有工作。混淆二者的衡量基準是常見陷阱,(b)(c)(d) 皆非正確的衡量依據。",
  },
  {
    id: "scp-044",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the THREE techniques that a project team may use to prioritize or analyze the relative importance of collected requirements.",
      zh: "請選出團隊可用來對已蒐集需求進行優先排序或相對重要性分析的三項技術。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "MoSCoW analysis (Must have",
          zh: "Should have / Could have / Won't have) / MoSCoW 分析(必須有/應該有/可以有/這次不會有)",
        },
      },
      {
        id: "b",
        text: {
          en: "The Kano model (categorizing features as basic, performance, or excitement attributes)",
          zh: "Kano 模型(將功能分類為基本、效能或驚喜屬性)",
        },
      },
      {
        id: "c",
        text: {
          en: "Weighted ranking",
          zh: "scoring against agreed criteria / 依議定準則進行加權評分排序",
        },
      },
      {
        id: "d",
        text: {
          en: "Earned Value Analysis",
          zh: "實獲值分析(Earned Value Analysis)",
        },
      },
      {
        id: "e",
        text: {
          en: "Critical Path Method",
          zh: "要徑法(Critical Path Method)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "MoSCoW、Kano Model、加權評分排序都是常見的需求優先排序/分析技術,協助團隊在資源有限時決定先做哪些需求;實獲值分析屬於 Finance 領域的績效衡量工具,要徑法屬於 Schedule 領域的時程分析工具,皆非需求優先排序技術。",
  },
  {
    id: "scp-045",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A requirement prioritization technique that sorts items into four categories — Must have, Should have, Could have, and Won't have this time — is called {{blank1}}. It is commonly applied as part of the {{blank2}} process, after requirements have been initially collected.",
      zh: "一種將需求歸類為四個類別——必須有、應該有、可以有、這次不會有——的需求優先排序技術稱為 {{blank1}}。它通常在需求初步蒐集完成後,作為 {{blank2}} 流程的一部分來應用。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "MoSCoW",
              zh: "MoSCoW",
            },
          },
          {
            id: "b",
            text: {
              en: "Kano Model",
              zh: "Kano 模型",
            },
          },
          {
            id: "c",
            text: {
              en: "100% Rule",
              zh: "百分百法則",
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
              en: "Develop Scope Structure",
              zh: "發展範疇結構",
            },
          },
          {
            id: "b",
            text: {
              en: "Elicit and Analyze Requirements",
              zh: "引出並分析需求",
            },
          },
          {
            id: "c",
            text: {
              en: "Validate Scope",
              zh: "確認範疇",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "MoSCoW 是常見的需求優先排序技術,將需求分為 Must have(必須有)、Should have(應該有)、Could have(可以有)、Won't have this time(這次不會有)四類;它通常運用於「引出並分析需求(Elicit and Analyze Requirements)」流程中,在蒐集需求後協助排序,而非用於拆解範疇結構或客戶驗收確認。",
  },
  {
    id: "scp-046",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Marketing, engineering, and customer support each have conflicting ideas about what a new feature should do. The project manager brings representatives from all three groups into a single structured, moderated session to reach cross-functional consensus on the requirement in one sitting. What technique is being used?",
      zh: "行銷、工程與客服部門對於某新功能應具備的內容各有不同、彼此衝突的想法。專案經理將三方代表召集到一場結構化、由主持人引導的單一會議中,以求在一次會議內達成跨部門共識。這是使用了什麼技術?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A facilitated workshop bringing cross-functional stakeholders together to reach consensus on requirements.",
          zh: "引導式工作坊,將跨職能利害關係人集合在一起以對需求達成共識。",
        },
      },
      {
        id: "b",
        text: {
          en: "A one-on-one interview with the most senior stakeholder present.",
          zh: "與在場最資深的利害關係人進行一對一訪談。",
        },
      },
      {
        id: "c",
        text: {
          en: "Benchmarking against a competitor's published product roadmap.",
          zh: "與競爭者公開的產品藍圖進行標竿比較。",
        },
      },
      {
        id: "d",
        text: {
          en: "A formal Validate Scope walkthrough with the customer.",
          zh: "與客戶進行正式的確認範疇審查。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "引出並分析需求常用的「引導式工作坊(Facilitated Workshop)」,是將跨部門/跨職能的關鍵利害關係人集合在一次結構化會議中,現場對焦解決衝突並達成需求共識,效率高於個別訪談;此情境並非一對一訪談、並非標竿比較,也不是客戶驗收交付物的確認範疇活動。",
  },
  {
    id: "scp-047",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each requirement elicitation technique to the description that best fits it.",
      zh: "請將下列每項需求引出技術拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Document Analysis",
            zh: "文件分析(Document Analysis)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Context Diagram",
            zh: "情境圖(Context Diagram)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Affinity Diagram",
            zh: "親和圖(Affinity Diagram)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Nominal Group Technique",
            zh: "名目群體技術(Nominal Group Technique)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Reviewing existing contracts, business plans, and process flows to extract clues about requirements not yet explicitly stated.",
            zh: "檢視現有合約、營運計畫與流程文件,從中找出尚未被明確陳述的需求線索。",
          },
        },
        {
          id: "c2",
          text: {
            en: "A visual model showing how the product interacts with people, systems, and external entities, and defining its boundaries.",
            zh: "一張視覺化模型,呈現產品如何與人員、系統及外部實體互動,並定義其邊界。",
          },
        },
        {
          id: "c3",
          text: {
            en: "Sorting a large number of raw ideas generated by the team into related groups for review and analysis.",
            zh: "將團隊產生的大量原始想法依相關性分組,以利檢視與分析。",
          },
        },
        {
          id: "c4",
          text: {
            en: "A structured brainstorming variant where ideas are voted on and ranked to reach a prioritized group decision.",
            zh: "一種結構化腦力激盪變體,對想法進行投票排序以達成優先順序的群體決策。",
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
    explanation: "文件分析從既有文件中挖掘隱含需求;情境圖(關聯圖)視覺化呈現產品與外部環境的互動邊界;親和圖將大量發散想法歸類分組以便分析;名目群體技術是結構化腦力激盪,透過投票排序達成群體共識。四者皆是引出並分析需求常用的補充技術,適用情境不同。",
  },
  {
    id: "scp-048",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Midway through the project, a stakeholder insists a certain reporting feature \"was always supposed to be included.\" The project manager pulls up the approved Project Scope Statement to settle the dispute. Click the section of the Scope Statement the project manager should check first to determine whether the feature was explicitly excluded.",
      zh: "專案進行到一半,一位利害關係人堅稱某個報表功能「本來就應該包含在內」。專案經理調出已核准的專案範疇說明書來釐清爭議。請點選專案經理應優先查閱、以判斷該功能是否已被明確排除的區塊。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Acceptance Criteria",
          zh: "驗收標準",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Out of Scope",
          zh: "範疇外(排除項目)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Assumptions",
          zh: "假設",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Constraints",
          zh: "限制",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "專案範疇說明書中的「範疇外(Out of Scope)」區塊明確列出哪些項目不包含在本專案交付範圍內,是判斷爭議功能是否被排除的第一手依據;驗收標準說明如何驗收已納入範疇的項目、假設是團隊認定為真但未證實的前提、限制是專案受到的外在或內在限制條件,皆非用來認定「是否被排除」的直接依據。",
  },
  {
    id: "scp-049",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During project execution, the project manager discovers that a team lead unilaterally approved a stakeholder's request to expand a deliverable's data fields beyond the scope baseline, without any documented review. What should the project manager establish or reinforce to prevent this from recurring?",
      zh: "在專案執行期間,專案經理發現一位小組長片面核准了一位利害關係人擴增交付標的資料欄位、超出範疇基準的請求,且完全沒有任何書面審查紀錄。專案經理應建立或強化下列何者,以防止此情況再度發生?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A clear expectation that all scope deviation requests, regardless of who raises them, must be routed through the Change Control Board (CCB) or formal change control process for evaluation before implementation.",
          zh: "明確要求所有範疇偏差請求,無論由誰提出,都必須先送交變更管控委員會(CCB)或正式變更管控流程評估,才能實施。",
        },
      },
      {
        id: "b",
        text: {
          en: "A rule that only the project sponsor may ever speak directly with stakeholders about requirements.",
          zh: "規定只有專案贊助人才能直接與利害關係人討論需求。",
        },
      },
      {
        id: "c",
        text: {
          en: "A policy removing the team lead's authority to communicate with any stakeholder for the remainder of the project.",
          zh: "一項政策,取消該小組長在專案剩餘期間與任何利害關係人溝通的權限。",
        },
      },
      {
        id: "d",
        text: {
          en: "A blanket freeze on all further stakeholder requests until the project closes.",
          zh: "全面凍結所有後續利害關係人請求,直到專案結束。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "任何範疇偏差,無論由誰核准或提出,都必須先經過變更管控委員會(Change Control Board, CCB)或正式變更管控流程評估,取得核准後才能實施,以避免個人片面決定造成未受控的範疇擴增;完全禁止溝通、凍結所有請求或限制溝通對象,都無法解決「未經審查即核准變更」的根本問題,也不利於專案運作。",
  },
  {
    id: "scp-050",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A product owner is coaching the team on how to write high-quality user stories for the Product Backlog. Select the THREE characteristics that the INVEST criteria say a well-formed user story should have.",
      zh: "產品負責人正在指導團隊如何為產品待辦清單撰寫高品質的使用者故事(User Story)。請選出 INVEST 準則中,一個寫得好的使用者故事應具備的三項特性。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Independent — it can be developed and delivered without excessive dependency on other stories.",
          zh: "獨立(Independent)——能在不過度依賴其他故事的情況下開發與交付。",
        },
      },
      {
        id: "b",
        text: {
          en: "Estimable — the team can reasonably estimate the effort required.",
          zh: "可估算(Estimable)——團隊能合理估算所需心力。",
        },
      },
      {
        id: "c",
        text: {
          en: "Small — it can be completed within a single iteration.",
          zh: "小巧(Small)——能在單一迭代內完成。",
        },
      },
      {
        id: "d",
        text: {
          en: "Must specify the exact number of story points before it can be added to the backlog.",
          zh: "必須在加入待辦清單前就指定精確的故事點數。",
        },
      },
      {
        id: "e",
        text: {
          en: "Must be written and approved by the project sponsor personally.",
          zh: "必須由專案贊助人親自撰寫並核准。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "INVEST 準則描述良好使用者故事應具備的六項特性:Independent(獨立)、Negotiable(可協商)、Valuable(有價值)、Estimable(可估算)、Small(小巧)、Testable(可測試)。它並未要求撰寫時就須精確訂定故事點數(故事點數通常在後續估算會議中才決定),也不要求必須由贊助人親自撰寫。",
  },
  {
    id: "scp-051",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Before a team commits to pulling a backlog item into a sprint, they check that it is clearly written, sized, and understood — this checklist is known as the {{blank1}}. After the work is finished, the team confirms it meets a separate, agreed checklist of completion criteria such as passing tests and code review, known as the {{blank2}}.",
      zh: "在團隊將待辦項目拉入 sprint 之前,他們會確認該項目已被清楚撰寫、評估過大小且團隊已理解,這份檢查清單稱為 {{blank1}}。工作完成後,團隊會確認其符合另一份議定的完成準則清單(例如通過測試與程式碼審查),稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Definition of Ready (DoR)",
              zh: "就緒定義(Definition of Ready, DoR)",
            },
          },
          {
            id: "b",
            text: {
              en: "Definition of Done (DoD)",
              zh: "完成定義(Definition of Done, DoD)",
            },
          },
          {
            id: "c",
            text: {
              en: "Acceptance Criteria specific to that story only",
              zh: "僅適用於該單一故事的驗收標準",
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
              en: "Definition of Ready (DoR)",
              zh: "就緒定義(Definition of Ready, DoR)",
            },
          },
          {
            id: "b",
            text: {
              en: "Definition of Done (DoD)",
              zh: "完成定義(Definition of Done, DoD)",
            },
          },
          {
            id: "c",
            text: {
              en: "Scope Baseline",
              zh: "範疇基準(Scope Baseline)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "就緒定義(Definition of Ready, DoR)是團隊在把項目拉入 sprint 前的檢查標準,確認項目已足夠清楚、可估算;完成定義(Definition of Done, DoD)則是團隊完成工作後用來確認是否真正完成的共同標準(如測試通過、程式碼審查完成)。兩者都是敏捷專案中用以維持品質與範疇一致性的機制,但適用時機不同,常與個別使用者故事的驗收標準(Acceptance Criteria)混淆——後者是針對單一故事的具體條件,DoD 則是團隊層級、跨故事共通的完成標準。",
  },
  {
    id: "scp-052",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "agile_scenario",
    stem: {
      en: "During requirements analysis for a hotel booking app, stakeholders don't explicitly mention that \"search results must load\" as a feature — they simply assume it works, and would be extremely dissatisfied if it didn't, even though its presence alone doesn't excite them. Under the Kano model, which category does this requirement best fit?",
      zh: "在飯店訂房 App 的需求分析過程中,利害關係人並未明確提及「搜尋結果必須能正常顯示」是一項功能——他們單純假設它理所當然會運作,若沒有會極度不滿,但即使有了也不會特別驚豔。依 Kano 模型,此需求最符合哪一類別?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Excitement (delighter) attribute, since it exceeds customer expectations.",
          zh: "驚喜(Excitement/Delighter)屬性,因為它超出客戶期望。",
        },
      },
      {
        id: "b",
        text: {
          en: "Basic (must-be) attribute, since its absence causes significant dissatisfaction but its presence is simply expected, not exciting.",
          zh: "基本(Basic/Must-be)屬性,因為它的缺乏會造成嚴重不滿,但存在只是理所當然,並不會令人驚豔。",
        },
      },
      {
        id: "c",
        text: {
          en: "Performance attribute, since satisfaction increases linearly with how well it is implemented.",
          zh: "效能(Performance)屬性,因為滿意度會隨其實作優劣呈線性提升。",
        },
      },
      {
        id: "d",
        text: {
          en: "Indifferent attribute, since customers do not care whether it is present or not.",
          zh: "無差異(Indifferent)屬性,因為客戶並不在乎它是否存在。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Kano 模型將需求分為 Basic/must-be(基本,缺乏會引發強烈不滿,但存在只被視為理所當然)、Performance(效能,滿意度隨實作程度線性提升)、Excitement/Delighter(驚喜,超出預期帶來驚豔但缺乏不會不滿)。本題描述的正是典型的 Basic(must-be)需求:客戶視為理所當然、不特別提及,但一旦缺失就會嚴重不滿。這在需求蒐集時容易被忽略,因為利害關係人往往「假設它本來就會存在」而不主動提出。",
  },
  {
    id: "scp-053",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each document below to whether it is part of the Scope Baseline or not.",
      zh: "請將下列每份文件拖曳配對到「屬於範疇基準」或「不屬於範疇基準」。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Project Scope Statement",
            zh: "專案範疇說明書",
          },
        },
        {
          id: "p2",
          text: {
            en: "Work Breakdown Structure (WBS)",
            zh: "工作分解結構(WBS)",
          },
        },
        {
          id: "p3",
          text: {
            en: "WBS Dictionary",
            zh: "WBS 字典",
          },
        },
        {
          id: "p4",
          text: {
            en: "Requirements Documentation",
            zh: "需求文件",
          },
        },
        {
          id: "p5",
          text: {
            en: "Requirements Traceability Matrix (RTM)",
            zh: "需求追溯矩陣(RTM)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Part of the Scope Baseline",
            zh: "屬於範疇基準(Scope Baseline)",
          },
        },
        {
          id: "c2",
          text: {
            en: "Not part of the Scope Baseline (a separate project document)",
            zh: "不屬於範疇基準(是另一份獨立的專案文件)",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c1",
      p3: "c1",
      p4: "c2",
      p5: "c2",
    },
    explanation: "範疇基準(Scope Baseline)僅由已核准的「專案範疇說明書」、「WBS」與「WBS 字典」三者組成,是衡量範疇績效的基準線;需求文件與需求追溯矩陣雖然與範疇密切相關,且同樣是重要的專案文件,卻不屬於範疇基準本身的正式組成部分,這是常見的混淆點。",
  },
  {
    id: "scp-054",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram lists four candidate WBS components along with their estimated durations. Click the one that represents an appropriately granular Work Package — reliably estimable and trackable, but not so large it can't be managed nor so small it becomes a micromanaged task list.",
      zh: "下圖列出四個候選 WBS 組成項目及其估算工期。請點選代表「適當顆粒度工作包」的項目——能可靠估算與追蹤,但不會大到無法管理,也不會小到變成微觀管理的任務清單。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Entire \"Data Center Migration\" program spanning 5 separate projects (estimated 18 months)",
          zh: "整個橫跨 5 個獨立專案的「資料中心遷移」計畫群(估計 18 個月)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "\"Configure and test failover for the payment database cluster\" (estimated 3 weeks)",
          zh: "「設定並測試付款資料庫叢集的容錯移轉」(估計 3 週)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "\"Click 'Save' after updating one server's hostname label\" (estimated 5 minutes)",
          zh: "「更新單一伺服器主機名稱標籤後按下『儲存』」(估計 5 分鐘)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "\"Entire Data Center Migration project\" (estimated 9 months)",
          zh: "「整個資料中心遷移專案」(估計 9 個月)",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "(n1)、(n4) 顆粒度過大,涵蓋整個計畫群或整個專案,無法直接可靠估算、指派給單一負責人或在合理短週期內追蹤,過於粗略;(n3) 顆粒度過細,已是單一操作步驟層級的個別動作,屬任務而非工作包。只有 (n2) 具備明確範圍、可在合理短週期(3 週)內完成、可指派給單一負責人並可靠估算的特性,符合工作包應有的顆粒度。",
  },
  {
    id: "scp-055",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Each component in a WBS is assigned a unique code (e.g., 1.2.3) that identifies its position in the hierarchy. What is the primary purpose of this WBS coding scheme?",
      zh: "WBS 中每個組成項目都被賦予一個唯一的編碼(例如 1.2.3),用以標示其在階層結構中的位置。此 WBS 編碼架構的主要目的是什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "To provide a unique reference (a \"Code of Accounts\") that supports consistent identification, cost tracking, and reporting for each WBS component across the project.",
          zh: "提供一個唯一參照(即「會計代碼,Code of Accounts」),以利在整個專案中對每個 WBS 組成項目進行一致的識別、成本追蹤與報告。",
        },
      },
      {
        id: "b",
        text: {
          en: "To determine the sequence in which activities must be executed on the project schedule.",
          zh: "用來決定專案時程中活動必須執行的先後順序。",
        },
      },
      {
        id: "c",
        text: {
          en: "To calculate the project's critical path automatically.",
          zh: "用來自動計算專案的要徑。",
        },
      },
      {
        id: "d",
        text: {
          en: "To assign individual performance bonuses to team members based on their WBS code.",
          zh: "依團隊成員的 WBS 編碼分配個人績效獎金。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "WBS 編碼架構(常稱為 Code of Accounts)提供每個組成項目一個唯一識別碼,便於在整個專案中一致地識別、追蹤成本與績效報告;它並不決定活動執行順序(那屬於 Sequence Activities,Schedule 領域)、不會自動算出要徑,也與績效獎金分配無關。",
  },
  {
    id: "scp-056",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which THREE of the following are early warning signs that scope creep may be occurring on a project?",
      zh: "下列何者是專案可能正發生範疇潛變(Scope Creep)的三項早期警訊?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Stakeholders repeatedly making informal requests for \"small additions\" outside the formal change control process.",
          zh: "利害關係人反覆透過非正式管道要求「小幅增加」,不走正式變更管控流程。",
        },
      },
      {
        id: "b",
        text: {
          en: "The number of features in the deliverable steadily growing without any corresponding update to the scope baseline.",
          zh: "交付標的的功能數量持續增加,卻沒有對應更新範疇基準。",
        },
      },
      {
        id: "c",
        text: {
          en: "Team members increasingly saying \"while we're at it, let's also add...\" without submitting a change request.",
          zh: "團隊成員愈來愈常說「順便再加個…」卻未提出變更請求。",
        },
      },
      {
        id: "d",
        text: {
          en: "The team consistently finishing planned work packages ahead of schedule.",
          zh: "團隊持續提前完成已規劃的工作包。",
        },
      },
      {
        id: "e",
        text: {
          en: "The project's cost variance (CV) trending positive.",
          zh: "專案的成本差異(CV)趨勢為正值。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "範疇潛變的早期警訊通常包含:利害關係人持續透過非正式管道要求增加需求、交付物功能範圍不斷擴增卻未反映在範疇基準上,以及團隊成員未經核准就順手加碼(這同時也可能是鍍金的訊號)。相對地,提前完成工作包或成本差異為正,通常代表績效良好,並非範疇潛變的警訊。",
  },
  {
    id: "scp-057",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Deliverables that have passed technical inspection for correctness and completeness during Control Quality are called {{blank1}}. These then become an input to {{blank2}}, where the customer or sponsor formally reviews them against acceptance criteria and, if satisfied, they become Accepted Deliverables.",
      zh: "在品質管制(Control Quality)過程中通過技術性正確性與完整性檢驗的交付標的,稱為 {{blank1}}。這些交付標的接著會成為 {{blank2}} 的輸入,由客戶或贊助人依驗收標準正式審查,若通過即成為已驗收交付物。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Verified Deliverables",
              zh: "已查證交付物(Verified Deliverables)",
            },
          },
          {
            id: "b",
            text: {
              en: "Accepted Deliverables",
              zh: "已驗收交付物(Accepted Deliverables)",
            },
          },
          {
            id: "c",
            text: {
              en: "Work Performance Data",
              zh: "工作績效資料(Work Performance Data)",
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
              en: "Define Scope",
              zh: "定義範疇",
            },
          },
          {
            id: "b",
            text: {
              en: "Validate Scope",
              zh: "確認範疇",
            },
          },
          {
            id: "c",
            text: {
              en: "Plan Scope Management",
              zh: "規劃範疇管理",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "品質管制(Control Quality)檢驗交付標的的技術正確性與完整性後,產出「已查證交付物(Verified Deliverables)」;這些交付物接著作為「確認範疇(Validate Scope)」流程的輸入,由客戶或贊助人依驗收標準正式審查、簽署,通過後才成為「已驗收交付物(Accepted Deliverables)」。技術查證(QC)與客戶正式驗收(Validate Scope)是兩個先後銜接、但職責不同的步驟。",
  },
  {
    id: "scp-058",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project team notices that multiple slightly different versions of the Project Scope Statement have been circulating among stakeholders, some reflecting unapproved edits made informally by different team members. What should the project manager implement to prevent this from happening again?",
      zh: "專案團隊發現有好幾個版本略有差異的專案範疇說明書在利害關係人之間流傳,其中一些反映了不同團隊成員私下所做、未經核准的編輯。專案經理應建立什麼機制以防止此情況再度發生?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A formal Configuration Management System to control document versions, ensuring only approved, baselined versions are distributed and any change goes through proper review.",
          zh: "一套正式的組態管理系統(Configuration Management System),用以控管文件版本,確保只有已核准、納入基準的版本會被發佈,且任何變更都須經過適當審查。",
        },
      },
      {
        id: "b",
        text: {
          en: "Allow any team member to freely edit and redistribute the scope statement as they see fit.",
          zh: "允許任何團隊成員自行編輯並重新發佈範疇說明書。",
        },
      },
      {
        id: "c",
        text: {
          en: "Delete all but the most recently edited version, regardless of who approved it.",
          zh: "刪除除了最新編輯版本以外的所有版本,不論是否經過核准。",
        },
      },
      {
        id: "d",
        text: {
          en: "Stop distributing the Project Scope Statement to stakeholders entirely.",
          zh: "完全停止向利害關係人發佈專案範疇說明書。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "組態管理系統(Configuration Management System)用以控管文件版本與變更歷程,確保只有經核准的基準版本會被正式發佈與使用,任何修改都須先經審查與核准,這正是防止文件版本混亂與未經授權變更擴散的正確做法;放任自由編輯、片面留下最新版本或乾脆不發佈文件,都無法解決版本管控失序的根本問題。",
  },
  {
    id: "scp-059",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "agile_scenario",
    stem: {
      en: "Drag and match each scenario below to whether it represents Scope Creep, Gold Plating, or a Legitimate Approved Change.",
      zh: "請將下列每則情境拖曳配對到「範疇潛變」、「鍍金」或「合法且已核准的變更」。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "A client sends an informal email asking the team to \"just quickly add\" an extra report field, without going through change control.",
            zh: "客戶寄送非正式電子郵件,要求團隊「順便快速加上」一個額外報表欄位,並未走變更管控流程。",
          },
        },
        {
          id: "p2",
          text: {
            en: "A tester adds extra validation logic to a form that was never requested, believing it improves robustness, without telling anyone.",
            zh: "一位測試人員自行在表單中加入從未被要求的額外驗證邏輯,認為這能提升穩健性,且未告知任何人。",
          },
        },
        {
          id: "p3",
          text: {
            en: "The team submits a change request to add a new feature, the CCB reviews the cost and schedule impact, and the sponsor formally approves it before work begins.",
            zh: "團隊提出變更請求以新增功能,CCB 審查成本與時程影響後,贊助人在動工前正式核准。",
          },
        },
        {
          id: "p4",
          text: {
            en: "A sponsor verbally tells the team to expand a deliverable's functionality beyond what was baselined, without any documented review.",
            zh: "贊助人口頭指示團隊將交付標的功能擴增至超出基準範圍,且未經任何書面審查。",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Scope Creep",
            zh: "範疇潛變",
          },
        },
        {
          id: "c2",
          text: {
            en: "Gold Plating",
            zh: "鍍金",
          },
        },
        {
          id: "c3",
          text: {
            en: "Legitimate Approved Change",
            zh: "合法且已核准的變更",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c1",
    },
    explanation: "範疇潛變(p1、p4)源自客戶或贊助人未經核准就持續要求或指示擴增範疇;鍍金(p2)是團隊成員主動、出於好意但未經授權地增加額外功能;唯有 p3 完整走過提出變更請求、CCB 審查影響、正式核准的流程,才是合法且已核准的變更,也是唯一應被允許動工的情境。此題加入第三個類別,提醒考生:並非所有範疇異動都是問題,關鍵在於是否經過正式變更管控。",
  },
  {
    id: "scp-060",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram shows four project documents in sequence: Project Charter, Requirements Documentation, Project Scope Statement, and WBS. Click the document that primarily serves as an input the team uses to write the Project Scope Statement during Define Scope — as distinct from the Scope Statement itself or later outputs.",
      zh: "下圖依序顯示四份專案文件:專案章程、需求文件、專案範疇說明書、WBS。請點選在「定義範疇(Define Scope)」過程中,團隊主要用來撰寫專案範疇說明書的輸入文件——有別於範疇說明書本身或後續產出。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Project Charter",
          zh: "專案章程",
        },
        x: 2,
        y: 40,
        width: 22,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Requirements Documentation",
          zh: "需求文件",
        },
        x: 27,
        y: 40,
        width: 22,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Project Scope Statement",
          zh: "專案範疇說明書",
        },
        x: 52,
        y: 40,
        width: 22,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "WBS",
          zh: "WBS",
        },
        x: 77,
        y: 40,
        width: 21,
        height: 20,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "需求文件(Requirements Documentation)是「引出並分析需求」流程的產出,接著作為「定義範疇(Define Scope)」的主要輸入,團隊據此撰寫專案範疇說明書;專案章程雖也提供初步、高層級的範疇描述,但屬於更早期啟動階段的文件,細節遠不如需求文件完整;專案範疇說明書是 Define Scope 的產出本身,WBS 則是後續「發展範疇結構」流程才產出的文件,皆非此題所問的直接輸入。",
  },
  {
    id: "scp-061",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which statement correctly contrasts how scope is typically defined and managed in a predictive (waterfall) project versus an adaptive (agile) project?",
      zh: "下列何者正確對比「預測式(瀑布式)」專案與「調適式(敏捷)」專案中,範疇通常是如何被定義與管理的?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "In a predictive project, scope is largely detailed upfront in a baselined Scope Statement and WBS; in an adaptive project, scope is progressively elaborated through an evolving Product Backlog.",
          zh: "在預測式專案中,範疇通常會事先詳細定義於納入基準的範疇說明書與 WBS 中;在調適式專案中,範疇則透過持續演變的產品待辦清單漸進明確化。",
        },
      },
      {
        id: "b",
        text: {
          en: "In a predictive project, scope is never documented in writing; in an adaptive project, scope must always be frozen before the first iteration begins.",
          zh: "在預測式專案中,範疇從不以書面記錄;在調適式專案中,範疇必須在第一個迭代開始前就完全凍結。",
        },
      },
      {
        id: "c",
        text: {
          en: "Both approaches require the exact same level of upfront detail before any work can begin.",
          zh: "兩種方式在動工前都要求完全相同程度的事前細節。",
        },
      },
      {
        id: "d",
        text: {
          en: "Predictive projects use a Product Backlog, while adaptive projects use a Scope Baseline.",
          zh: "預測式專案使用產品待辦清單,調適式專案使用範疇基準。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "預測式專案通常在規劃階段就將範疇詳細定義並納入基準(範疇說明書、WBS、WBS 字典);調適式專案則透過持續演變、逐次迭代精煉的產品待辦清單來漸進明確化範疇,不要求一開始就定案所有細節。選項 (d) 恰好把兩種方式的工具對調,是常見的陷阱敘述。",
  },
  {
    id: "scp-062",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the TWO statements that correctly describe the relationship between Verified Deliverables and Accepted Deliverables.",
      zh: "請選出兩項正確描述「已查證交付物」與「已驗收交付物」關係的敘述。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Verified Deliverables are an output of Control Quality, confirming technical correctness and completeness.",
          zh: "已查證交付物是「品質管制」的產出,確認技術上的正確性與完整性。",
        },
      },
      {
        id: "b",
        text: {
          en: "Accepted Deliverables are an output of Validate Scope, confirming formal customer or sponsor sign-off against acceptance criteria.",
          zh: "已驗收交付物是「確認範疇」的產出,確認客戶或贊助人依驗收標準正式簽署。",
        },
      },
      {
        id: "c",
        text: {
          en: "Verified Deliverables require the customer's formal signature before they can be produced.",
          zh: "已查證交付物在產出前必須先取得客戶的正式簽署。",
        },
      },
      {
        id: "d",
        text: {
          en: "Accepted Deliverables are produced directly by the Control Quality process, without any customer involvement.",
          zh: "已驗收交付物是由「品質管制」流程直接產出,不需要客戶參與。",
        },
      },
      {
        id: "e",
        text: {
          en: "Verified Deliverables and Accepted Deliverables are two different names for exactly the same document.",
          zh: "已查證交付物與已驗收交付物是同一份文件的兩種不同稱呼。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "已查證交付物(Verified Deliverables)是品質管制(Control Quality)技術性檢驗後的產出,尚不需要客戶簽署;已驗收交付物(Accepted Deliverables)則是確認範疇(Validate Scope)流程中,客戶或贊助人正式簽署後才產生的產出。兩者是先後銜接、但性質不同的兩個概念,並非同一份文件,也不是「已查證交付物」需要客戶簽署或「已驗收交付物」不需客戶參與。",
  },
  {
    id: "scp-063",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Translating a product's high-level business objectives into tangible, well-defined requirements and deliverables — for example, by examining the product's design and functions through systems engineering or value engineering methods — is a technique known as {{blank1}}. It is most commonly applied during the {{blank2}} process, as documented requirements are converted into a formal scope statement.",
      zh: "透過檢視產品的設計與功能(例如運用系統工程或價值工程等方法),將產品的高層級商業目標轉化為具體、清楚定義的需求與交付標的,這項技術稱為 {{blank1}}。它最常應用於 {{blank2}} 流程,將已文件化的需求轉化為正式的範疇說明書。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Product Analysis",
              zh: "產品分析(Product Analysis)",
            },
          },
          {
            id: "b",
            text: {
              en: "Benchmarking",
              zh: "標竿比較(Benchmarking)",
            },
          },
          {
            id: "c",
            text: {
              en: "Decomposition",
              zh: "分解(Decomposition)",
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
              en: "Elicit and Analyze Requirements",
              zh: "引出並分析需求",
            },
          },
          {
            id: "b",
            text: {
              en: "Define Scope",
              zh: "定義範疇",
            },
          },
          {
            id: "c",
            text: {
              en: "Develop Scope Structure",
              zh: "發展範疇結構",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "產品分析(Product Analysis)是將產品的商業目標轉化為具體需求與交付標的的技術,常運用系統工程、價值工程、產品拆解分析等方法;此技術主要應用於「定義範疇(Define Scope)」流程,將已蒐集的需求轉化為正式的專案範疇說明書。這與標竿比較(用於蒐集需求階段的比較分析)及分解(用於發展範疇結構階段拆解為工作包)不同,考生常混淆三者的適用流程。",
  },
  {
    id: "scp-064",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A Project Scope Statement was approved without clearly documented Acceptance Criteria for one of the major deliverables, since the team assumed \"the client will know it when they see it.\" At delivery, the client refuses to sign off, arguing the deliverable does not meet unstated expectations. What did the project manager most likely fail to ensure during Define Scope?",
      zh: "某項主要交付標的的專案範疇說明書在核准時,並未清楚記載驗收標準,因為團隊認為「客戶看到就會知道是否滿意」。交付時,客戶以交付標的不符合未言明的期望為由拒絕簽署驗收。專案經理在定義範疇階段最可能未能確保什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "That explicit, measurable acceptance criteria were negotiated and documented with the client for each major deliverable before the scope was baselined.",
          zh: "在範疇納入基準前,已與客戶協商並明確記載每項主要交付標的可衡量的驗收標準。",
        },
      },
      {
        id: "b",
        text: {
          en: "That the WBS Dictionary included more granular cost estimates for each work package.",
          zh: "WBS 字典中包含每個工作包更細緻的成本估算。",
        },
      },
      {
        id: "c",
        text: {
          en: "That the schedule contained sufficient contingency reserve to absorb late-stage disputes.",
          zh: "時程中含有足夠的應急準備金,以吸收後期爭議。",
        },
      },
      {
        id: "d",
        text: {
          en: "That the sponsor personally inspected every deliverable before development began.",
          zh: "贊助人在開發開始前親自檢查了每項交付標的。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "缺乏明確、可衡量的驗收標準(Acceptance Criteria),是造成 Validate Scope 階段爭議與客戶拒絕簽署的常見根本原因;定義範疇階段就應與客戶協商並記載清楚、可衡量的驗收標準,而不能仰賴「客戶看到就知道」這種主觀假設。更細的成本估算、時程儲備或贊助人事先檢查,都無法取代明確驗收標準本身的必要性。",
  },
  {
    id: "scp-065",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select the THREE valid tools/techniques for the Elicit and Analyze Requirements process.",
      zh: "請選出三項適用於「引出並分析需求」流程的有效工具/技術。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Document Analysis",
          zh: "文件分析(Document Analysis)",
        },
      },
      {
        id: "b",
        text: {
          en: "Context Diagram",
          zh: "情境圖(Context Diagram)",
        },
      },
      {
        id: "c",
        text: {
          en: "Affinity Diagram",
          zh: "親和圖(Affinity Diagram)",
        },
      },
      {
        id: "d",
        text: {
          en: "Control Chart",
          zh: "管制圖(Control Chart)",
        },
      },
      {
        id: "e",
        text: {
          en: "Precedence Diagramming Method (PDM)",
          zh: "優先圖示法(PDM)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "文件分析、情境圖、親和圖皆是引出並分析需求常用的補充技術,協助從既有文件、產品邊界互動或發散想法中萃取並整理需求;管制圖是品質管理中用於監控流程穩定度的統計工具,優先圖示法是 Schedule 領域用來排序活動依賴關係的技術,皆非需求引出工具。",
  },
  {
    id: "scp-066",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Scope",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Midway through development, a new government regulation is enacted that requires an additional data-privacy safeguard not included in the approved scope baseline. Select the TWO most appropriate actions for the project manager to take.",
      zh: "開發進行到一半時,政府頒布一項新法規,要求增加一項未包含在已核准範疇基準中的資料隱私保護措施。請選出專案經理應採取的兩項最適當行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Assess the impact of the new regulatory requirement on scope, schedule, and cost, and submit a formal change request to update the scope baseline accordingly.",
          zh: "評估此新法規要求對範疇、時程與成本的影響,並提出正式變更請求以相應更新範疇基準。",
        },
      },
      {
        id: "b",
        text: {
          en: "Communicate the situation and its business/compliance implications to the sponsor and relevant stakeholders before proceeding.",
          zh: "在採取進一步行動前,向贊助人與相關利害關係人溝通此情況及其對商業/法規遵循的影響。",
        },
      },
      {
        id: "c",
        text: {
          en: "Ignore the new regulation since it was not part of the originally approved scope and the team is not legally obligated to revisit approved baselines.",
          zh: "忽略此新法規,因為它不在最初核准的範疇內,團隊在法律上並無義務重新檢視已核准的基準。",
        },
      },
      {
        id: "d",
        text: {
          en: "Instruct the team to quietly implement the safeguard without updating any documentation, to avoid delaying the schedule.",
          zh: "指示團隊悄悄實作此保護措施,不更新任何文件,以避免延誤時程。",
        },
      },
      {
        id: "e",
        text: {
          en: "Refuse to implement the safeguard until the customer pays for it out of pocket.",
          zh: "拒絕實作此保護措施,除非客戶自行額外付費。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "外部法規變化屬於必須納入範疇管理考量的商業環境因素;專案經理應先評估對範疇、時程、成本的衝擊,並透過正式變更管控更新範疇基準,同時將情況與影響及早知會贊助人與相關利害關係人。忽略法規要求可能使專案或組織面臨法律風險,而未經文件記錄逕行實作,或以強硬態度要求客戶額外付費,都不是專案經理應優先採取的做法(付費安排屬後續合約/變更協商範疇,不應作為第一步的立場)。",
  },
  {
    id: "scp-067",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The Project Scope Statement notes: \"The vendor's API will remain backward-compatible throughout the project\" as one item, and \"The project must use the organization's existing cloud infrastructure\" as another. Which of these best represents a Constraint rather than an Assumption?",
      zh: "專案範疇說明書中記載兩項:「供應商的 API 在整個專案期間將保持向下相容」,以及「本專案必須使用組織現有的雲端基礎設施」。這兩項中,何者最能代表「限制(Constraint)」而非「假設(Assumption)」?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "\"The project must use the organization's existing cloud infrastructure\" — this is a Constraint, a restriction or boundary condition the project must operate within.",
          zh: "「本專案必須使用組織現有的雲端基礎設施」——這是限制,是專案必須在其中運作的限制或邊界條件。",
        },
      },
      {
        id: "b",
        text: {
          en: "\"The vendor's API will remain backward-compatible throughout the project\" — this is a Constraint.",
          zh: "「供應商的 API 在整個專案期間將保持向下相容」——這是限制。",
        },
      },
      {
        id: "c",
        text: {
          en: "Both statements are Assumptions, not Constraints.",
          zh: "兩項敘述都是假設,不是限制。",
        },
      },
      {
        id: "d",
        text: {
          en: "Neither statement belongs in a Project Scope Statement.",
          zh: "兩項敘述都不應出現在專案範疇說明書中。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "限制(Constraint)是專案必須遵守的既定邊界條件或限制(例如「必須使用現有雲端基礎設施」是組織強加的既定限制);假設(Assumption)則是團隊認定為真、但尚未證實的前提(例如「供應商 API 將保持向下相容」是團隊假定會成立的條件,一旦不成立便會帶來風險)。兩者都應明確記載於範疇說明書中,但性質不同,考題常要求辨別某段敘述屬於哪一類。",
  },
  {
    id: "scp-068",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Scope",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Scope-related responsibility to the role that most typically performs it.",
      zh: "請將下列每項範疇相關職責拖曳配對到最典型執行該職責的角色。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Formally reviews completed deliverables against acceptance criteria and signs off during Validate Scope.",
            zh: "在確認範疇過程中,依驗收標準正式審查已完成的交付標的並簽署。",
          },
        },
        {
          id: "p2",
          text: {
            en: "Elicits, documents, and analyzes detailed requirements from stakeholders, and maintains the Requirements Traceability Matrix.",
            zh: "向利害關係人引出、記錄並分析詳細需求,並維護需求追溯矩陣。",
          },
        },
        {
          id: "p3",
          text: {
            en: "Reviews and formally approves or rejects change requests that would modify the approved scope baseline.",
            zh: "審查並正式核准或駁回將修改已核准範疇基準的變更請求。",
          },
        },
        {
          id: "p4",
          text: {
            en: "Facilitates the overall Define Scope effort, ensuring the Project Scope Statement reflects stakeholder needs and organizational strategy.",
            zh: "主導整體定義範疇工作,確保專案範疇說明書反映利害關係人需求與組織策略。",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Customer",
            zh: "Sponsor (during Validate Scope) / 客戶/贊助人(於確認範疇階段)",
          },
        },
        {
          id: "c2",
          text: {
            en: "Business Analyst (or Product Owner)",
            zh: "業務分析師(或產品負責人)",
          },
        },
        {
          id: "c3",
          text: {
            en: "Change Control Board (CCB)",
            zh: "變更管控委員會(CCB)",
          },
        },
        {
          id: "c4",
          text: {
            en: "Project Manager",
            zh: "專案經理",
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
    explanation: "客戶或贊助人在確認範疇階段依驗收標準正式檢視並簽署交付標的;業務分析師(或敏捷情境下的產品負責人)負責引出、記錄與分析需求並維護 RTM;變更管控委員會(CCB)負責審查並核准/駁回會影響範疇基準的變更請求;專案經理則主導定義範疇的整體工作,確保範疇說明書真正反映利害關係人需求與組織策略對齊。四者角色分工不同,是 Scope 領域 People 面向常見的考點。",
  },
  {
    id: "scp-069",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The diagram shows a Requirements Traceability Matrix (RTM) chain: Business Need leads to a documented Requirement, which leads to a WBS Deliverable, which leads to a node that provides evidence the requirement was actually verified. Click the node that provides this verification evidence.",
      zh: "下圖顯示需求追溯矩陣(RTM)的追溯鏈:商業需求 導向 已記錄的需求,再導向 WBS 交付標的,再導向能提供該需求確實已被查證證據的節點。請點選提供此查證證據的節點。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Business Need",
          zh: "商業需求",
        },
        x: 2,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Documented Requirement",
          zh: "已記錄的需求",
        },
        x: 25,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "WBS Deliverable",
          zh: "WBS 交付標的",
        },
        x: 48,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Test Case Result",
          zh: "測試案例結果",
        },
        x: 71,
        y: 40,
        width: 25,
        height: 20,
      },
    ],
    correctAnswer: "n4",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "需求追溯矩陣(RTM)追蹤每項需求從來源(商業需求)、記錄(需求文件)、對應的交付標的,一路到能證明該需求確實被驗證的證據,例如測試案例結果(Test Case Result);這是 RTM 確保「沒有需求被遺漏、每項需求都能被追溯驗證」的核心用途,商業需求、已記錄需求、WBS 交付標的本身僅是追溯鏈中的前段節點,並非驗證證據。",
  },
  {
    id: "scp-070",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Scope",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Before finalizing the Project Scope Statement, the team systematically compares several different technical approaches — building a custom module in-house, licensing a third-party component, and outsourcing development — to determine which best fits the project's constraints and objectives. What technique is being applied?",
      zh: "在定案專案範疇說明書之前,團隊有系統地比較數種不同的技術做法——自行開發客製模組、授權第三方元件,以及委外開發——以判斷哪一種最符合專案的限制與目標。這是應用了什麼技術?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Alternatives Analysis, a technique used during Define Scope to evaluate different ways of accomplishing the project's work before finalizing scope.",
          zh: "替代方案分析(Alternatives Analysis),用於定義範疇過程中,在定案範疇前評估完成專案工作的不同方式。",
        },
      },
      {
        id: "b",
        text: {
          en: "The 100% Rule, used to ensure WBS components sum to the parent's full scope.",
          zh: "百分百法則,用來確保 WBS 組成加總等於上層範疇全部。",
        },
      },
      {
        id: "c",
        text: {
          en: "Rolling Wave Planning, used to progressively elaborate distant future work.",
          zh: "滾動式規劃,用於漸進明確化較遠期的工作。",
        },
      },
      {
        id: "d",
        text: {
          en: "Validate Scope, used to obtain formal customer acceptance of completed deliverables.",
          zh: "確認範疇,用於取得客戶對已完成交付標的的正式驗收。",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "替代方案分析(Alternatives Analysis)是定義範疇(Define Scope)過程中常用的技術,用於系統性比較不同的做法(例如自製 vs. 外購 vs. 委外)以決定最適合的範疇內容;100% Rule 與分解用於發展範疇結構、滾動式規劃用於漸進明確化規劃深度、確認範疇則是交付後客戶驗收的流程,皆與此題「定案範疇前比較做法」的情境不同。",
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
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "此為菱形網路圖:Task A 是兩條路徑共同的起點,Task D 是兩條路徑共同的匯流點,Task B 與 Task C 則是中間並行的兩條分支。路徑一 A→B→D = 3+5+4 = 12 天;路徑二 A→C→D = 3+8+4 = 15 天,較長,為要徑。因此 A、C、D 皆位於要徑上、總浮時為 0;只有 B 不在要徑上,總浮時 = 15−12 = 3 天。A 與 D 分別是兩條路徑共用的起點與匯流點,兩條路徑都得經過它們,所以恆為要徑上的 0 浮時節點;真正可能出現浮時的只有並行分支 B、C 之中工期較短的那一條。",
  },
  {
    id: "sch-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "During Sequence Activities, the team determines that the concrete foundation must be fully cured before the structural walls can be erected — a physical constraint inherent to the nature of the work itself. Which type of dependency does this represent?",
      zh: "在排序活動(Sequence Activities)過程中,團隊發現混凝土地基必須完全硬化後才能豎立結構牆——這是工作本質固有的實體限制。這屬於哪一種依賴關係?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Discretionary dependency",
          zh: "選擇性依賴(Discretionary)",
        },
      },
      {
        id: "b",
        text: {
          en: "External dependency",
          zh: "外部依賴(External)",
        },
      },
      {
        id: "c",
        text: {
          en: "Mandatory dependency",
          zh: "強制性依賴(Mandatory)",
        },
      },
      {
        id: "d",
        text: {
          en: "Internal dependency",
          zh: "內部依賴(Internal)",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "強制性依賴(Mandatory Dependency)源自合約條款或工作本質固有的實體限制,例如地基必須先完成才能蓋牆,這種先後順序無法協商或調整,故答案為 (c)。選擇性依賴是基於最佳實務的偏好順序;外部依賴來自組織外部因素;內部依賴則是團隊可控制的順序安排。",
  },
  {
    id: "sch-002",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "An activity has the following three-point estimates: Optimistic = 4 days, Most Likely = 6 days, Pessimistic = 14 days. Using the PERT Beta distribution formula, what is the expected duration of this activity?",
      zh: "某活動的三點估算如下:樂觀值(O)= 4 天、最可能值(M)= 6 天、悲觀值(P)= 14 天。使用 PERT Beta 分佈公式,此活動的預期工期為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "6 days",
          zh: "6 天",
        },
      },
      {
        id: "b",
        text: {
          en: "6.5 days",
          zh: "6.5 天",
        },
      },
      {
        id: "c",
        text: {
          en: "7 days",
          zh: "7 天",
        },
      },
      {
        id: "d",
        text: {
          en: "8 days",
          zh: "8 天",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "Beta 分佈公式:預期工期 = (O+4M+P)/6 = (4+4×6+14)/6 = (4+24+14)/6 = 42/6 = 7 天。因為 Beta 分佈給予最可能值(M)4 倍權重,計算結果比單純平均數更貼近最可能情境,故答案為 (c)。",
  },
  {
    id: "sch-003",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two statements about Discretionary Dependencies are correct? Select two.",
      zh: "關於選擇性依賴(Discretionary Dependency),下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "They are based on best practices or preferences within a particular application area",
          zh: "它們是基於特定應用領域的最佳實務或偏好而制定",
        },
      },
      {
        id: "b",
        text: {
          en: "They are fully documented and can be adjusted if the team decides another sequence is more efficient",
          zh: "它們會被完整記錄,若團隊認為另一種順序更有效率,可以調整",
        },
      },
      {
        id: "c",
        text: {
          en: "They arise from contractual obligations with an external vendor",
          zh: "它們源自與外部供應商的合約義務",
        },
      },
      {
        id: "d",
        text: {
          en: "They are always mandated by the project charter",
          zh: "它們永遠由專案章程強制規定",
        },
      },
      {
        id: "e",
        text: {
          en: "They cannot be changed once the schedule baseline is approved",
          zh: "一旦時程基準核准後就不能更改",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "選擇性依賴(Discretionary Dependency)是團隊基於經驗、最佳實務或偏好所選擇的活動順序(如「先設計後採購」的慣例做法),理論上可以調整,應被記錄以說明選擇理由,故 (a)(b) 正確。(c) 描述的是外部依賴;(d)(e) 則是強制性依賴或已核准基準常見的錯誤敘述,選擇性依賴並非不可變更。",
  },
  {
    id: "sch-004",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In network diagramming, when the design team starts writing the test plan two days before the design document is fully finished, this represents a {{blank1}} of 2 days. When the painting crew must wait 3 days after painting for the paint to dry before installing fixtures, this represents a {{blank2}} of 3 days.",
      zh: "在網路圖中,當設計團隊在設計文件尚未完全結束前提前 2 天開始撰寫測試計畫,這代表 2 天的{{blank1}};當油漆團隊上漆後必須等待 3 天讓油漆乾燥才能安裝配件,這代表 3 天的{{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Lag",
              zh: "落後量(Lag)",
            },
          },
          {
            id: "b",
            text: {
              en: "Lead",
              zh: "提前量(Lead)",
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
              en: "Lag",
              zh: "落後量(Lag)",
            },
          },
          {
            id: "b",
            text: {
              en: "Lead",
              zh: "提前量(Lead)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "Lead(提前量)讓後續活動與前置活動重疊、提前開始,故測試計畫提前 2 天開始屬於 Lead。Lag(落後量)是刻意延遲後續活動開始的等待期間,如等待油漆乾燥的 3 天屬於 Lag。許多考生會將兩者的正負號與方向記反,需特別注意。",
  },
  {
    id: "sch-005",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which both merge into Task D. Task A takes 4 days, Task B takes 6 days, Task C takes 9 days, and Task D takes 5 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).",
      zh: "下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後皆匯流至 Task D。Task A 需時 4 天、Task B 需時 6 天、Task C 需時 9 天、Task D 需時 5 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Task A (4 days)",
          zh: "Task A(4天)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Task B (6 days)",
          zh: "Task B(6天)",
        },
        x: 30,
        y: 10,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Task C (9 days)",
          zh: "Task C(9天)",
        },
        x: 30,
        y: 70,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Task D (5 days)",
          zh: "Task D(5天)",
        },
        x: 60,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "路徑一 A→B→D = 4+6+5 = 15 天;路徑二 A→C→D = 4+9+5 = 18 天,較長,為要徑(Critical Path)。因此 A、C、D 總浮時皆為 0,只有 B 不在要徑上,總浮時 = 18−15 = 3 天。A、D 分別是兩條路徑共用的起點與匯流點,恆為要徑上的 0 浮時節點。",
  },
  {
    id: "sch-006",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The project is two weeks behind schedule. To catch up, the PM considers fast tracking two originally sequential activities. Several team members privately tell a colleague they fear this will cause rework and burnout, but no one has raised it with the PM directly. What should the PM do FIRST?",
      zh: "專案已落後兩週。為了趕上進度,專案經理考慮將原本循序的兩項活動改為快速跟進(Fast Tracking)平行執行。幾位團隊成員私下向同事表示擔心這會造成返工與過勞,但沒有人直接向專案經理反映。專案經理應「優先」採取什麼行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Proceed with fast tracking immediately since schedule pressure is real and time cannot be wasted",
          zh: "立即執行快速跟進,因為時程壓力真實存在,不能浪費時間",
        },
      },
      {
        id: "b",
        text: {
          en: "Openly discuss the fast-tracking plan and its risks with the team to surface concerns and confirm feasibility before committing",
          zh: "主動與團隊公開討論快速跟進計畫及其風險,在正式執行前先徵詢疑慮並確認可行性",
        },
      },
      {
        id: "c",
        text: {
          en: "Report the team's dissatisfaction to the sponsor and request a schedule extension",
          zh: "向贊助人回報團隊的不滿並要求延長時程",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the informal comments since they were not raised through official channels",
          zh: "忽略非正式的意見,因為沒有透過正式管道反映",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "快速跟進(Fast Tracking)會提高返工風險,團隊私下的疑慮是重要訊號。專案經理應優先主動與團隊公開溝通、共同評估風險與可行性,而非片面決定或忽視非正式回饋,這體現了團隊領導與利害關係人溝通的核心職責,故答案為 (b)。",
  },
  {
    id: "sch-007",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Which two statements correctly describe the relationship between Total Float and Free Float? Select two.",
      zh: "關於總浮時(Total Float)與自由浮時(Free Float)的關係,下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Total Float is the amount of time an activity can be delayed without delaying the project finish date",
          zh: "總浮時是活動可延遲而不影響專案完工日的時間量",
        },
      },
      {
        id: "b",
        text: {
          en: "Free Float is the amount of time an activity can be delayed without delaying the early start of the immediately following activity",
          zh: "自由浮時是活動可延遲而不影響下一個活動最早開始時間的時間量",
        },
      },
      {
        id: "c",
        text: {
          en: "Free Float is always greater than or equal to Total Float for the same activity",
          zh: "對同一活動而言,自由浮時永遠大於或等於總浮時",
        },
      },
      {
        id: "d",
        text: {
          en: "Total Float can be calculated using only the Backward Pass, without needing the Forward Pass",
          zh: "總浮時只需要逆推法(Backward Pass)即可算出,不需要順推法(Forward Pass)",
        },
      },
      {
        id: "e",
        text: {
          en: "Free Float can exceed Total Float for the same activity",
          zh: "對同一活動而言,自由浮時可以超過總浮時",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "總浮時(Total Float)= LS−ES(或 LF−EF),代表不影響專案完工日的可延遲時間,需要順推法與逆推法兩者才能算出,故 (a) 正確、(d) 錯誤。自由浮時(Free Float)= 後續活動 ES − 目前活動 EF,代表不影響下一活動最早開始的可延遲時間,故 (b) 正確。由於自由浮時只考慮下一個活動、總浮時考慮整個專案完工日,自由浮時恆小於或等於總浮時,不可能大於總浮時,故 (c)(e) 錯誤。",
  },
  {
    id: "sch-008",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each CPM (Critical Path Method) term to the description that best fits it.",
      zh: "請將下列要徑法(CPM)相關名詞拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Forward Pass",
            zh: "順推法(Forward Pass)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Backward Pass",
            zh: "逆推法(Backward Pass)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Float (Slack)",
            zh: "浮時(Float / Slack)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Critical Path",
            zh: "要徑(Critical Path)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Calculates the Early Start (ES) and Early Finish (EF) dates by moving from the project start toward the end",
            zh: "從專案起點往終點推算,得出最早開始(ES)與最早完成(EF)日期",
          },
        },
        {
          id: "c2",
          text: {
            en: "Calculates the Late Start (LS) and Late Finish (LF) dates by moving from the project end back toward the start",
            zh: "從專案終點往起點回推,得出最晚開始(LS)與最晚完成(LF)日期",
          },
        },
        {
          id: "c3",
          text: {
            en: "The difference between Late Start and Early Start (or Late Finish and Early Finish) of an activity",
            zh: "活動的最晚開始減最早開始(或最晚完成減最早完成)之差",
          },
        },
        {
          id: "c4",
          text: {
            en: "The longest path through the network diagram, with zero total float",
            zh: "網路圖中最長的路徑,總浮時為零",
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
    explanation: "CPM(要徑法)透過順推法(Forward Pass)求出 ES/EF,再透過逆推法(Backward Pass)求出 LS/LF,兩者之差即為浮時(Float);浮時為零的最長路徑即為要徑(Critical Path),決定專案最短完工時間。",
  },
  {
    id: "sch-009",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The four cards below list items related to Develop Schedule. Click the item that is an OUTPUT of the Develop Schedule process (the other three are inputs).",
      zh: "下方四張卡片列出與發展時程(Develop Schedule)相關的項目。請點選「發展時程」流程的「輸出(Output)」項目(其餘三項皆為輸入)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Activity Duration Estimates (input)",
          zh: "活動工期估算(輸入)",
        },
        x: 10,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n2",
        label: {
          en: "Project Schedule Network Diagrams (input)",
          zh: "專案時程網路圖(輸入)",
        },
        x: 55,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n3",
        label: {
          en: "Schedule Baseline (output)",
          zh: "時程基準(輸出)",
        },
        x: 10,
        y: 60,
        width: 35,
        height: 25,
      },
      {
        id: "n4",
        label: {
          en: "Resource Requirements (input)",
          zh: "資源需求(輸入)",
        },
        x: 55,
        y: 60,
        width: 35,
        height: 25,
      },
    ],
    correctAnswer: "n3",
    explanation: "發展時程(Develop Schedule)以活動清單、活動工期估算、網路圖與資源需求等作為輸入,經分析後產出時程基準(Schedule Baseline)與專案時程(Project Schedule);時程基準是後續監控時程績效比對的核准版本。",
  },
  {
    id: "sch-010",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A construction project cannot begin site excavation until the municipal government issues an environmental permit — a process the project team does not control and cannot expedite by adjusting internal work sequencing. What type of dependency does this represent?",
      zh: "某營建專案在市政府核發環境許可前無法開始基地開挖——這個核准過程並非專案團隊所能控制,也無法透過調整內部工作順序來加快。這屬於哪一種依賴關係?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Internal dependency",
          zh: "內部依賴(Internal)",
        },
      },
      {
        id: "b",
        text: {
          en: "Discretionary dependency",
          zh: "選擇性依賴(Discretionary)",
        },
      },
      {
        id: "c",
        text: {
          en: "External dependency",
          zh: "外部依賴(External)",
        },
      },
      {
        id: "d",
        text: {
          en: "Finish-to-Finish logical relationship",
          zh: "完成到完成(FF)邏輯關係",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "外部依賴(External Dependency)是依賴組織外部因素的順序限制,例如政府核准、法規審查等,不受專案團隊控制。此情境中政府核發環境許可正是典型的外部依賴範例,故答案為 (c)。內部依賴是團隊可控制的順序;選擇性依賴是基於偏好的順序;FS/FF 等屬於邏輯關係類型,與依賴來源的分類不同軸。",
  },
  {
    id: "sch-011",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "An activity has Optimistic = 8 days, Most Likely = 10 days, Pessimistic = 18 days. Using the PERT Beta distribution, the expected duration is {{blank1}} days, and the standard deviation is {{blank2}} days.",
      zh: "某活動的樂觀值(O)= 8 天、最可能值(M)= 10 天、悲觀值(P)= 18 天。使用 PERT Beta 分佈,其預期工期為 {{blank1}} 天,標準差為 {{blank2}} 天。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "10",
              zh: "10",
            },
          },
          {
            id: "b",
            text: {
              en: "11",
              zh: "11",
            },
          },
          {
            id: "c",
            text: {
              en: "12",
              zh: "12",
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
              en: "1.33",
              zh: "1.33",
            },
          },
          {
            id: "b",
            text: {
              en: "1.67",
              zh: "1.67",
            },
          },
          {
            id: "c",
            text: {
              en: "2.0",
              zh: "2.0",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "預期工期 = (O+4M+P)/6 = (8+40+18)/6 = 66/6 = 11 天。標準差 = (P−O)/6 = (18−8)/6 = 10/6 ≈ 1.67 天;標準差用於評估此估算的不確定性,悲觀值與樂觀值差距愈大,標準差愈大、估算愈不確定。",
  },
  {
    id: "sch-012",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The sponsor demands the schedule be compressed by three weeks with no additional budget. The only qualified developer for a key activity is already fully allocated to another critical task. Select two appropriate actions for the PM to take.",
      zh: "贊助人要求在不增加預算的情況下將時程壓縮三週。唯一具備資格執行某關鍵活動的開發人員已經被完全分配到另一項要徑任務上。請選擇專案經理應採取的兩項適當行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Negotiate with the functional manager to temporarily reallocate the specialist or adjust assignment priorities",
          zh: "與職能經理協商,暫時重新調配該專家或調整任務優先順序",
        },
      },
      {
        id: "b",
        text: {
          en: "Evaluate whether re-sequencing or fast tracking non-resource-constrained activities can reduce duration without added cost",
          zh: "評估是否能透過重新排序或對非資源受限活動進行快速跟進,在不增加成本的情況下縮短工期",
        },
      },
      {
        id: "c",
        text: {
          en: "Unilaterally instruct the developer to work on both tasks simultaneously without informing their manager",
          zh: "未告知該員工的經理,擅自指示其同時執行兩項任務",
        },
      },
      {
        id: "d",
        text: {
          en: "Approve unlimited overtime for the entire team without assessing burnout risk",
          zh: "未評估過勞風險就核准全體團隊無上限加班",
        },
      },
      {
        id: "e",
        text: {
          en: "Simply tell the sponsor compression is impossible and take no further action",
          zh: "直接告訴贊助人無法壓縮,不採取任何進一步行動",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "面對零預算的時程壓縮要求且遇到資源衝突,專案經理應主動與職能經理協商資源調配,並評估快速跟進等不增加成本的壓縮技術,故 (a)(b) 正確。擅自指派、無限制加班或消極不作為都不符合專業責任與利害關係人溝通的要求,故 (c)(d)(e) 錯誤。",
  },
  {
    id: "sch-013",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a network with Task S followed by three parallel tasks — P, Q, and R — which all merge into Task T. Task S takes 2 days, Task P takes 4 days, Task Q takes 7 days, Task R takes 10 days, and Task T takes 3 days. Among the three parallel tasks, click the one with the LARGEST Total Float.",
      zh: "下圖網路中,Task S 之後分為三條並行任務——P、Q、R,三者完成後皆匯流至 Task T。Task S 需時 2 天、Task P 需時 4 天、Task Q 需時 7 天、Task R 需時 10 天、Task T 需時 3 天。在三條並行任務中,請點選「總浮時(Total Float)最大」的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Task S (2 days)",
          zh: "Task S(2天)",
        },
        x: 5,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Task P (4 days)",
          zh: "Task P(4天)",
        },
        x: 30,
        y: 5,
        width: 18,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Task Q (7 days)",
          zh: "Task Q(7天)",
        },
        x: 30,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Task R (10 days)",
          zh: "Task R(10天)",
        },
        x: 30,
        y: 75,
        width: 18,
        height: 20,
      },
      {
        id: "n5",
        label: {
          en: "Task T (3 days)",
          zh: "Task T(3天)",
        },
        x: 60,
        y: 40,
        width: 18,
        height: 20,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n1",
        to: "n4",
      },
      {
        from: "n2",
        to: "n5",
      },
      {
        from: "n3",
        to: "n5",
      },
      {
        from: "n4",
        to: "n5",
      },
    ],
    explanation: "三條路徑:S→P→T = 2+4+3 = 9 天;S→Q→T = 2+7+3 = 12 天;S→R→T = 2+10+3 = 15 天,最長,為要徑,故 S、R、T 總浮時為 0。P 的總浮時 = 15−9 = 6 天;Q 的總浮時 = 15−12 = 3 天。三條並行任務中,P 的總浮時最大(6 天),代表它離要徑最遠、延遲彈性最高。",
  },
  {
    id: "sch-014",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Activity M has an Early Finish (EF) of Day 10. Its successor, Activity N, has an Early Start (ES) of Day 14. What is the Free Float of Activity M?",
      zh: "活動 M 的最早完成(EF)為第 10 天,其後續活動 N 的最早開始(ES)為第 14 天。活動 M 的自由浮時(Free Float)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "3 days",
          zh: "3 天",
        },
      },
      {
        id: "b",
        text: {
          en: "4 days",
          zh: "4 天",
        },
      },
      {
        id: "c",
        text: {
          en: "5 days",
          zh: "5 天",
        },
      },
      {
        id: "d",
        text: {
          en: "10 days",
          zh: "10 天",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "自由浮時(Free Float)= 後續活動最早開始(ES)− 目前活動最早完成(EF)= 14 − 10 = 4 天,代表活動 M 最多可延遲 4 天,而不會影響活動 N 的最早開始時間。",
  },
  {
    id: "sch-015",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each of the 4 Develop Schedule steps to the description that best fits it.",
      zh: "請將發展時程(Develop Schedule)的 4 個步驟拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Define Activities",
            zh: "定義活動(Define Activities)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Sequence Activities",
            zh: "排序活動(Sequence Activities)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Estimate Activity Duration",
            zh: "估算活動工期(Estimate Activity Duration)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Develop Schedule",
            zh: "發展時程(Develop Schedule)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Decompose work packages further into schedule activities",
            zh: "將工作包(Work Package)進一步分解為時程活動",
          },
        },
        {
          id: "c2",
          text: {
            en: "Determine and document the logical relationships (dependencies) among activities",
            zh: "決定並記錄活動之間的邏輯關係(依賴關係)",
          },
        },
        {
          id: "c3",
          text: {
            en: "Approximate the number of work periods needed to complete each activity",
            zh: "估算完成每項活動所需的工作期間數",
          },
        },
        {
          id: "c4",
          text: {
            en: "Analyze activity sequences, durations, and resource requirements to produce the schedule baseline",
            zh: "分析活動順序、工期與資源需求,產出時程基準",
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
    explanation: "發展時程共四個步驟,依序為:①定義活動(將工作包分解為活動)②排序活動(決定邏輯關係)③估算活動工期④發展時程(分析上述結果產出時程基準與專案時程)。此順序是 Schedule 領域的核心流程主軸。",
  },
  {
    id: "sch-016",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each float/buffer term to the description that best fits it.",
      zh: "請將下列浮時/緩衝相關名詞拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Total Float",
            zh: "總浮時(Total Float)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Free Float",
            zh: "自由浮時(Free Float)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Project Buffer",
            zh: "專案緩衝(Project Buffer)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Feeding Buffer",
            zh: "匯入緩衝(Feeding Buffer)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The amount of time an activity can be delayed without delaying the project's overall finish date",
            zh: "活動可延遲而不影響專案整體完工日的時間量",
          },
        },
        {
          id: "c2",
          text: {
            en: "The amount of time an activity can be delayed without delaying the early start of its immediate successor",
            zh: "活動可延遲而不影響其後續活動最早開始時間的時間量",
          },
        },
        {
          id: "c3",
          text: {
            en: "A time reserve placed at the end of the critical chain to protect the project finish date from variability along the chain",
            zh: "置於要徑鏈末端,用以保護專案完工日不受鏈上變異影響的時間儲備",
          },
        },
        {
          id: "c4",
          text: {
            en: "A time reserve inserted where a non-critical chain feeds into the critical chain, to protect it from delays on the feeding path",
            zh: "置於非要徑鏈匯入要徑鏈之處的時間儲備,用以保護要徑鏈不受匯入路徑延遲影響",
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
    explanation: "Total Float 與 Free Float 是 CPM 中的浮時觀念,前者相對於專案完工日,後者相對於下一個活動;Project Buffer 與 Feeding Buffer 則是 Critical Chain Method(要徑鏈法)中以「整體緩衝」取代個別活動安全時間的做法,兩組概念常在考題中被混淆比較。",
  },
  {
    id: "sch-017",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Two activities, Design Review and Code Refactor, both require the same senior architect who is only available part-time. Under the Critical Chain Method, the PM should insert a {{blank1}} at the point where the resource-constrained non-critical chain feeds into the critical chain, rather than {{blank2}}.",
      zh: "設計審查與程式碼重構兩項活動都需要同一位僅能兼職支援的資深架構師。依要徑鏈法(Critical Chain Method),專案經理應在資源受限的非要徑鏈匯入要徑鏈之處插入{{blank1}},而不是{{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Feeding Buffer",
              zh: "匯入緩衝(Feeding Buffer)",
            },
          },
          {
            id: "b",
            text: {
              en: "Project Buffer",
              zh: "專案緩衝(Project Buffer)",
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
              en: "adding individual safety margins to each activity's own duration estimate",
              zh: "在每個活動各自的工期估算中加入安全邊際",
            },
          },
          {
            id: "b",
            text: {
              en: "removing the resource constraint entirely from the schedule",
              zh: "完全移除時程中的資源限制",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "Critical Chain Method 在 CPM 基礎上額外考慮資源限制,並在資源受限的非要徑鏈匯入要徑鏈處插入匯入緩衝(Feeding Buffer),在要徑鏈末端插入專案緩衝(Project Buffer),藉由集中的緩衝保護整體工期,而非像傳統做法在每個活動上各自加安全時間(容易因學生症候群而被浪費)。",
  },
  {
    id: "sch-018",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a network: Task A is followed by two parallel tasks, Task B and Task C, which merge into Task D. Task A takes 6 days, Task B takes 4 days, Task C takes 10 days, and Task D takes 7 days. Regardless of which parallel branch turns out to be longer, click the node where both parallel branches always reconnect into a single path (the merge point).",
      zh: "下圖網路中,Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後匯流至 Task D。Task A 需時 6 天、Task B 需時 4 天、Task C 需時 10 天、Task D 需時 7 天。無論哪一條並行分支較長,請點選「兩條並行分支必定重新匯合」的節點(匯流點)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Task A (6 days)",
          zh: "Task A(6天)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Task B (4 days)",
          zh: "Task B(4天)",
        },
        x: 30,
        y: 10,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Task C (10 days)",
          zh: "Task C(10天)",
        },
        x: 30,
        y: 70,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Task D (7 days)",
          zh: "Task D(7天)",
        },
        x: 60,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n4",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "路徑一 A→B→D = 6+4+7 = 17 天;路徑二 A→C→D = 6+10+7 = 23 天,較長,為要徑。Task D 是兩條並行分支(B、C)共同匯流的節點,無論哪一分支較長,兩條路徑都必須經過它,因此 Task D(與起點 Task A 同理)恆為要徑上總浮時為 0 的節點;只有中間並行分支中較短的一條(此例為 B)才可能出現總浮時。",
  },
  {
    id: "sch-019",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A competitor is expected to launch a similar product in 10 weeks. To capture first-mover advantage, leadership asks the PM to shorten the timeline by crashing the critical-path activity \"Integration Testing,\" which currently takes 8 days. Adding extra testers costs $2,000 more per day saved, reducing it to 6 days. What is the total additional crashing cost required?",
      zh: "預期競爭對手將在 10 週後推出類似產品。為搶佔市場先機,領導層要求專案經理透過趕工(Crashing)要徑活動「整合測試」來縮短時程,該活動目前需時 8 天。增派測試人員每縮短 1 天需額外花費 $2,000,可將工期縮短至 6 天。所需的總額外趕工成本為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$2,000",
          zh: "$2,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$4,000",
          zh: "$4,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$8,000",
          zh: "$8,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$10,000",
          zh: "$10,000",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "趕工成本 = 每天成本 × 壓縮天數 = $2,000 × (8−6) = $2,000 × 2 = $4,000。此決策由外部市場競爭情勢(競爭對手即將推出產品)所驅動,屬於商業環境考量下評估趕工(Crashing)成本效益的典型情境。",
  },
  {
    id: "sch-020",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two statements about External Dependencies are correct? Select two.",
      zh: "關於外部依賴(External Dependency),下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "They depend on factors outside the project's control, such as a permit from a regulatory agency or a supplier's delivery schedule",
          zh: "它們取決於專案控制範圍之外的因素,例如監管機關的許可或供應商的交貨時程",
        },
      },
      {
        id: "b",
        text: {
          en: "The project team can usually negotiate or accelerate them directly since they originate from the organization's own internal processes",
          zh: "由於它們源自組織自身的內部流程,專案團隊通常可以直接協商或加快進度",
        },
      },
      {
        id: "c",
        text: {
          en: "They should be documented and monitored closely because they can introduce schedule risk beyond the team's direct influence",
          zh: "應被詳細記錄並密切監控,因為它們可能帶來團隊無法直接掌控的時程風險",
        },
      },
      {
        id: "d",
        text: {
          en: "They are the same as Discretionary Dependencies because both involve some degree of choice",
          zh: "它們與選擇性依賴相同,因為兩者都涉及某種程度的選擇",
        },
      },
      {
        id: "e",
        text: {
          en: "They only occur in agile projects and never in predictive (waterfall) projects",
          zh: "它們只發生在敏捷專案中,絕不會出現在預測型(瀑布)專案中",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "外部依賴(External Dependency)源自組織外部、專案團隊無法控制的因素,如政府核准、供應商交期,故 (a) 正確;因不受團隊直接控制,更需詳實記錄並密切監控其風險,故 (c) 正確。(b) 描述錯誤,因外部因素通常無法由團隊直接加速;(d) 混淆了外部依賴與選擇性依賴;(e) 外部依賴在預測型與敏捷專案中皆可能出現,與開發方法無關。",
  },
  {
    id: "sch-021",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The team decides that the activity \"Write Test Cases\" can begin as soon as the activity \"Requirements Review\" begins, rather than waiting for it to finish, since both activities only need the initial draft of requirements. Which type of logical relationship does this represent?",
      zh: "團隊決定「撰寫測試案例」活動可以在「需求審查」活動一開始就同步展開,而不需等待需求審查結束,因為兩項活動都只需要需求的初稿即可。這屬於哪一種邏輯關係?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Finish-to-Start (FS)",
          zh: "完成到開始(FS)",
        },
      },
      {
        id: "b",
        text: {
          en: "Start-to-Start (SS)",
          zh: "開始到開始(SS)",
        },
      },
      {
        id: "c",
        text: {
          en: "Finish-to-Finish (FF)",
          zh: "完成到完成(FF)",
        },
      },
      {
        id: "d",
        text: {
          en: "Start-to-Finish (SF)",
          zh: "開始到完成(SF)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Start-to-Start(SS,開始到開始)關係代表後續活動只要前置活動一開始就能跟著開始,不需等待前置活動完成。本題中「撰寫測試案例」與「需求審查」同步展開,正是典型的 SS 關係,故答案為 (b)。FS 是最常見的「完成才能開始」;FF 要求兩者同時完成;SF 是最少見的關係類型,與本題描述不符。",
  },
  {
    id: "sch-022",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The project's sole database administrator (DBA) is simultaneously assigned to three concurrent critical-path tasks. To resolve this over-allocation, the PM performs resource leveling, which extends the project finish date by 5 days beyond the originally committed date. The sponsor, unaware of the resource constraint, insists the original date must be kept. What should the PM do FIRST?",
      zh: "專案唯一的資料庫管理員(DBA)同時被指派到三項並行的要徑任務上。為解決此資源超額分配問題,專案經理執行資源撫平(Resource Leveling),導致專案完工日比原本承諾的日期延後 5 天。贊助人並不知道這個資源限制,堅持要維持原訂日期。專案經理應「優先」採取什麼行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Instruct the DBA to work on all three tasks simultaneously through unpaid overtime to avoid changing the schedule",
          zh: "指示 DBA 透過無償加班同時處理三項任務,以避免更動時程",
        },
      },
      {
        id: "b",
        text: {
          en: "Present the resource conflict and its schedule impact to the sponsor, and jointly discuss options such as adding a second DBA, adjusting scope, or accepting the delay",
          zh: "向贊助人說明資源衝突及其對時程的影響,並共同討論增派第二位 DBA、調整範疇或接受延遲等選項",
        },
      },
      {
        id: "c",
        text: {
          en: "Quietly push back the finish date in the schedule tool without notifying the sponsor",
          zh: "在時程工具中悄悄延後完工日,不通知贊助人",
        },
      },
      {
        id: "d",
        text: {
          en: "Tell the DBA to unofficially deprioritize two of the three tasks without informing their functional manager",
          zh: "未告知職能經理,私下要求 DBA 自行降低其中兩項任務的優先順序",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "資源超額分配是真實存在的限制,資源撫平雖然能解決衝突卻會延長工期。專案經理應優先以透明方式向贊助人說明資源衝突的原因與時程影響,並共同評估增派資源、調整範疇或接受延遲等選項,這體現利害關係人溝通與當責領導,故答案為 (b)。隱瞞、強迫超時工作或繞過職能經理的做法都不符合專業責任。",
  },
  {
    id: "sch-023",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Activities A, B, and C are sequential (Finish-to-Start). Activity A takes 5 days. A mandatory 2-day lag is required between the finish of A and the start of B, to allow a concrete curing period. Activity B takes 4 days. Activity C follows B immediately with no lag and takes 6 days. What is the total duration of the path A-B-C?",
      zh: "活動 A、B、C 依序為完成到開始(FS)關係。活動 A 需時 5 天。A 完成後到 B 開始之間,因混凝土養護期而有強制性的 2 天落後量(Lag)。活動 B 需時 4 天。活動 C 緊接在 B 之後、無落後量,需時 6 天。路徑 A-B-C 的總工期為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "15 days",
          zh: "15 天",
        },
      },
      {
        id: "b",
        text: {
          en: "17 days",
          zh: "17 天",
        },
      },
      {
        id: "c",
        text: {
          en: "19 days",
          zh: "19 天",
        },
      },
      {
        id: "d",
        text: {
          en: "21 days",
          zh: "21 天",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "總工期 = A 的工期 + Lag + B 的工期 + C 的工期 = 5 + 2 + 4 + 6 = 17 天。計算路徑總工期時,Lag(落後量)必須和活動工期一樣被計入總天數,許多考生會漏算 Lag 而得出 15 天的錯誤答案。",
  },
  {
    id: "sch-024",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "An activity has Optimistic = 6 days, Most Likely = 9 days, Pessimistic = 18 days. Using the Triangular Distribution formula (NOT the Beta distribution), what is the expected duration of this activity?",
      zh: "某活動的樂觀值(O)= 6 天、最可能值(M)= 9 天、悲觀值(P)= 18 天。請使用三角分佈(Triangular Distribution)公式(注意不是 Beta 分佈),計算此活動的預期工期。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "10 days",
          zh: "10 天",
        },
      },
      {
        id: "b",
        text: {
          en: "11 days",
          zh: "11 天",
        },
      },
      {
        id: "c",
        text: {
          en: "12 days",
          zh: "12 天",
        },
      },
      {
        id: "d",
        text: {
          en: "9 days",
          zh: "9 天",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "三角分佈公式:預期工期 = (O+M+P)/3 = (6+9+18)/3 = 33/3 = 11 天。若誤用 Beta 分佈公式 (O+4M+P)/6 = (6+36+18)/6 = 60/6 = 10 天,會得到選項 (a) 這個常見誤答,故答題時務必看清楚題目指定的是哪一種分佈公式。",
  },
  {
    id: "sch-025",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A Scrum team has a stable velocity of 24 story points per 2-week sprint. The remaining product backlog is estimated at 132 story points. Assuming velocity stays constant, how many additional sprints should the team forecast to complete the remaining backlog?",
      zh: "某 Scrum 團隊每個 2 週衝刺(Sprint)的穩定產出速度(Velocity)為 24 個故事點。剩餘產品待辦清單估算為 132 個故事點。假設產出速度維持不變,團隊應預測還需要多少個衝刺才能完成剩餘待辦清單?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "5 sprints",
          zh: "5 個衝刺",
        },
      },
      {
        id: "b",
        text: {
          en: "5.5 sprints",
          zh: "5.5 個衝刺",
        },
      },
      {
        id: "c",
        text: {
          en: "6 sprints",
          zh: "6 個衝刺",
        },
      },
      {
        id: "d",
        text: {
          en: "7 sprints",
          zh: "7 個衝刺",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "所需衝刺數 = 剩餘待辦點數 ÷ 速度 = 132 ÷ 24 = 5.5 個衝刺。由於衝刺是不可分割的固定時間箱(Timebox),無法只執行半個衝刺,必須無條件進位為 6 個衝刺,故答案為 (c)。",
  },
  {
    id: "sch-026",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The client contract includes a liquidated damages clause requiring the vendor to pay $5,000 per day for each day of late delivery. The project is currently forecast to finish 4 days late because of a critical-path activity. The PM can crash that activity at an extra cost of $3,000 per day saved. What should the PM recommend?",
      zh: "客戶合約中訂有違約賠償條款,要求廠商每延遲交付一天須支付 $5,000。專案目前因一項要徑活動的延誤,預測將延遲完工 4 天。專案經理可對該活動進行趕工(Crashing),每縮短一天需額外花費 $3,000。專案經理應建議何種做法?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Accept the 4-day delay and pay the $20,000 penalty, since crashing has an additional cost",
          zh: "接受 4 天延遲並支付 $20,000 違約金,因為趕工需要額外成本",
        },
      },
      {
        id: "b",
        text: {
          en: "Crash the critical-path activity for a total of $12,000, since it costs less than the $20,000 contractual penalty",
          zh: "對該要徑活動進行趕工,總成本 $12,000,因為這比 $20,000 的合約違約金更划算",
        },
      },
      {
        id: "c",
        text: {
          en: "Ignore the contract clause since it was negotiated by the procurement department, not the PM",
          zh: "忽略此合約條款,因為它是由採購部門協商而非專案經理",
        },
      },
      {
        id: "d",
        text: {
          en: "Fast track the activity instead without evaluating cost, since fast tracking is always free",
          zh: "改用快速跟進而不評估成本,因為快速跟進永遠不花錢",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "趕工成本 = $3,000 × 4 天 = $12,000;違約罰款 = $5,000 × 4 天 = $20,000。$12,000 低於 $20,000,故建議趕工可為專案節省 $8,000。此決策由合約中的違約賠償條款(外部法律/商業約束)所驅動,屬於商業環境考量下的時程壓縮成本效益分析,故答案為 (b)。忽略合約條款不符合專業責任;快速跟進雖通常不直接增加成本,但並非「永遠免費」,仍須評估返工風險。",
  },
  {
    id: "sch-027",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which statement correctly describes a Milestone in a project schedule?",
      zh: "下列關於專案時程中「里程碑(Milestone)」的敘述,何者正確?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A milestone has zero duration and marks a significant point or event in the project",
          zh: "里程碑工期為零,用以標記專案中的重要時間點或事件",
        },
      },
      {
        id: "b",
        text: {
          en: "A milestone must always have a duration of at least one day",
          zh: "里程碑必須至少有一天的工期",
        },
      },
      {
        id: "c",
        text: {
          en: "Milestones are only used in agile projects and never in predictive projects",
          zh: "里程碑只用於敏捷專案,絕不會用於預測型專案",
        },
      },
      {
        id: "d",
        text: {
          en: "Milestones represent activities that require dedicated resources to execute",
          zh: "里程碑代表需要投入專屬資源才能執行的活動",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "里程碑(Milestone)是時程中工期為零的重要時間點或事件標記,例如「設計核准」「階段關卡通過」等,本身不消耗資源、不代表實際工作,故答案為 (a)。里程碑清單(Milestone List)是發展時程過程的重要參考,在預測型與敏捷專案中皆會使用(敏捷專案常用來標記發布或關鍵檢核點)。",
  },
  {
    id: "sch-028",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two statements correctly distinguish Crashing from Fast Tracking? Select two.",
      zh: "下列哪兩項敘述能正確區分趕工(Crashing)與快速跟進(Fast Tracking)?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Crashing always adds cost, because it involves adding resources to critical-path activities",
          zh: "趕工一定會增加成本,因為它需要在要徑活動上投入額外資源",
        },
      },
      {
        id: "b",
        text: {
          en: "Fast tracking overlaps activities that were originally sequential, which may increase the risk of rework",
          zh: "快速跟進讓原本循序的活動重疊執行,可能提高返工風險",
        },
      },
      {
        id: "c",
        text: {
          en: "Fast tracking always reduces the overall project cost",
          zh: "快速跟進一定會降低專案總成本",
        },
      },
      {
        id: "d",
        text: {
          en: "Crashing changes the logical sequence of activities so that they run in parallel",
          zh: "趕工會改變活動的邏輯順序,使其變成並行執行",
        },
      },
      {
        id: "e",
        text: {
          en: "Both techniques guarantee a shorter schedule without any added risk or cost",
          zh: "這兩種技術都能保證縮短時程而不增加任何風險或成本",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "趕工(Crashing)透過加派資源(如加班費、額外人力)縮短要徑工期,一定會增加成本,故 (a) 正確。快速跟進(Fast Tracking)讓原本循序的活動改為並行執行,不一定增加成本,但會提高協調困難與返工風險,故 (b) 正確。(c) 錯誤,快速跟進不一定降低成本;(d) 描述的其實是快速跟進而非趕工;(e) 錯誤,兩種技術都有其代價,並非毫無風險或成本。",
  },
  {
    id: "sch-029",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two statements about precedence relationships (SS, FF, SF) are correct? Select two.",
      zh: "關於邏輯關係(SS、FF、SF)的敘述,下列哪兩項正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "In a Start-to-Start (SS) relationship, the successor activity cannot start until the predecessor activity has started",
          zh: "在開始到開始(SS)關係中,後續活動必須等前置活動開始後才能開始",
        },
      },
      {
        id: "b",
        text: {
          en: "In a Finish-to-Finish (FF) relationship, the successor activity cannot finish until the predecessor activity has finished",
          zh: "在完成到完成(FF)關係中,後續活動必須等前置活動完成後才能完成",
        },
      },
      {
        id: "c",
        text: {
          en: "Start-to-Finish (SF) is the most commonly used relationship type in construction scheduling",
          zh: "開始到完成(SF)是營建排程中最常使用的關係類型",
        },
      },
      {
        id: "d",
        text: {
          en: "Finish-to-Start (FS) requires the successor activity to start before the predecessor activity finishes",
          zh: "完成到開始(FS)要求後續活動在前置活動完成之前就開始",
        },
      },
      {
        id: "e",
        text: {
          en: "SS and FF relationships can never be applied to the same pair of activities at the same time",
          zh: "SS 與 FF 關係絕對不能同時套用在同一對活動上",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "SS(開始到開始)要求後續活動的開始受前置活動開始的約束,故 (a) 正確;FF(完成到完成)要求後續活動的完成受前置活動完成的約束,故 (b) 正確。(c) 錯誤,SF 是四種關係中最少見的一種,並非最常用;(d) 描述錯誤,FS 是「前置活動完成後,後續活動才能開始」,而非之前;(e) 錯誤,SS 與 FF 可以同時套用在同一對活動上(即活動需同時重疊開始又同步結束),用來表示兩活動幾乎全程平行進行。",
  },
  {
    id: "sch-030",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During Iteration (Sprint) Planning, which two practices best reflect a healthy, self-organizing agile team? Select two.",
      zh: "在迭代(衝刺)規劃(Iteration/Sprint Planning)過程中,下列哪兩項作法最能體現健康、自組織的敏捷團隊?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The team collaboratively selects and commits to backlog items they believe they can complete within the iteration, based on their historical velocity",
          zh: "團隊依據過往的產出速度(Velocity),共同選擇並承諾在本次迭代內可完成的待辦項目",
        },
      },
      {
        id: "b",
        text: {
          en: "The team members who will do the work estimate and commit to it together, rather than having a single manager assign the commitment",
          zh: "由實際執行工作的團隊成員共同估算並承諾工作量,而非由單一經理指派承諾",
        },
      },
      {
        id: "c",
        text: {
          en: "The iteration length should be changed every sprint depending on how much work is in the backlog",
          zh: "迭代長度應依待辦清單的工作量,每個衝刺都隨意更動",
        },
      },
      {
        id: "d",
        text: {
          en: "Once iteration planning is finalized, the team must never discuss or clarify scope again until the iteration review",
          zh: "迭代規劃一旦定案,團隊在迭代審查前絕不能再討論或釐清範疇",
        },
      },
      {
        id: "e",
        text: {
          en: "The Scrum Master should override the team's estimate to guarantee a fixed number of items is completed every iteration, regardless of team input",
          zh: "Scrum Master 應凌駕團隊估算,不顧團隊意見,強制保證每次迭代都完成固定數量的項目",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "自組織團隊的核心精神是由實際執行工作的人共同估算與承諾工作量,並依據穩定的產出速度做出合理承諾,故 (a)(b) 正確。(c) 錯誤,迭代長度應維持固定時間箱(Timebox)以利速度可預測,不應隨意變動;(d) 過於絕對,團隊仍可在迭代中澄清細節,只是應避免任意變更範疇;(e) 違反自組織團隊與賦權團隊(Build Empowered Teams)的原則,故皆非正確答案。",
  },
  {
    id: "sch-031",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which two statements correctly describe the Schedule Management Plan? Select two.",
      zh: "關於時程管理計畫(Schedule Management Plan),下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It defines the scheduling methodology and tools to be used, such as the Critical Path Method",
          zh: "它定義將使用的排程方法論與工具,例如要徑法(CPM)",
        },
      },
      {
        id: "b",
        text: {
          en: "It establishes the level of accuracy and units of measure for duration estimates",
          zh: "它訂定工期估算的準確度與衡量單位",
        },
      },
      {
        id: "c",
        text: {
          en: "It contains the actual start and finish dates of every activity once work begins",
          zh: "它記載工作開始後每項活動的實際開始與完成日期",
        },
      },
      {
        id: "d",
        text: {
          en: "It is created only after the project's schedule baseline has already been approved",
          zh: "它只能在專案時程基準已核准之後才能制定",
        },
      },
      {
        id: "e",
        text: {
          en: "It replaces the need for creating a Work Breakdown Structure",
          zh: "它可以取代建立工作分解結構(WBS)的需要",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "時程管理計畫(Schedule Management Plan)是規劃階段產出的子計畫,定義排程方法論、工具、工期估算的準確度與衡量單位、控制門檻等規則,故 (a)(b) 正確。(c) 描述的是實際執行後的時程資料而非計畫本身;(d) 錯誤,時程管理計畫是在發展時程、產出基準「之前」就先制定,用以指導後續排程工作;(e) 錯誤,時程管理計畫與 WBS 是不同的規劃產出,不能互相取代。",
  },
  {
    id: "sch-032",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each of the 4 Precedence Diagramming Method (PDM) relationship types to the description that best fits it.",
      zh: "請將下列 4 種前導圖示法(PDM)邏輯關係拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Finish-to-Start (FS)",
            zh: "完成到開始(FS)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Start-to-Start (SS)",
            zh: "開始到開始(SS)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Finish-to-Finish (FF)",
            zh: "完成到完成(FF)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Start-to-Finish (SF)",
            zh: "開始到完成(SF)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The predecessor activity must finish before the successor activity can start; this is the most commonly used relationship",
            zh: "前置活動必須完成,後續活動才能開始;這是最常用的關係類型",
          },
        },
        {
          id: "c2",
          text: {
            en: "The predecessor activity must start before the successor activity can start",
            zh: "前置活動必須開始,後續活動才能開始",
          },
        },
        {
          id: "c3",
          text: {
            en: "The predecessor activity must finish before the successor activity can finish",
            zh: "前置活動必須完成,後續活動才能完成",
          },
        },
        {
          id: "c4",
          text: {
            en: "The predecessor activity must start before the successor activity can finish; this is the least commonly used relationship",
            zh: "前置活動必須開始,後續活動才能完成;這是最少使用的關係類型",
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
    explanation: "PDM 四種邏輯關係中,FS(完成到開始)最常見,如「地基完成才能蓋牆」;SS(開始到開始)與 FF(完成到完成)常用於需要重疊或同步收尾的活動;SF(開始到完成)最少見,常見於「即時生產(JIT)」情境,如新班次開始後舊班次才結束交接。",
  },
  {
    id: "sch-033",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each schedule technique to the description that best fits it.",
      zh: "請將下列時程相關技術拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Crashing",
            zh: "趕工(Crashing)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Fast Tracking",
            zh: "快速跟進(Fast Tracking)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Rolling Wave Planning",
            zh: "滾動式規劃(Rolling Wave Planning)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Progressive Elaboration",
            zh: "漸進明細化(Progressive Elaboration)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Adding resources to critical-path activities to shorten the schedule, typically increasing cost",
            zh: "在要徑活動上投入更多資源以縮短工期,通常會增加成本",
          },
        },
        {
          id: "c2",
          text: {
            en: "Performing activities that were originally sequential in parallel, increasing the risk of rework",
            zh: "將原本循序的活動改為並行執行,提高返工風險",
          },
        },
        {
          id: "c3",
          text: {
            en: "Planning near-term work in detail while planning future work at a higher level, refining it as it approaches",
            zh: "對近期工作詳細規劃,遠期工作則以較高層次規劃,待接近時再逐步細化",
          },
        },
        {
          id: "c4",
          text: {
            en: "Continuously improving and detailing a plan as more information and more accurate estimates become available throughout the project",
            zh: "隨著專案進展取得更多資訊與更準確的估算,持續改善並細化計畫",
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
    explanation: "Crashing 與 Fast Tracking 是兩種時程壓縮技術,分別以「加資源增成本」與「並行增風險」為代價縮短工期。Rolling Wave Planning(滾動式規劃)是漸進明細化(Progressive Elaboration)這個更廣泛概念在時程規劃上的具體應用:滾動式規劃專指「近細遠粗、逐步展開」的規劃節奏,而漸進明細化是貫穿整個專案生命週期、隨資訊增加而持續精煉計畫的通用原則,兩者常被混淆,需注意範圍大小的差異。",
  },
  {
    id: "sch-034",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each of the 4 schedule terms to the description that best fits it.",
      zh: "請將下列 4 個時程相關名詞拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Resource Leveling",
            zh: "資源撫平(Resource Leveling)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Resource Smoothing",
            zh: "資源平準(Resource Smoothing)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Schedule Compression",
            zh: "時程壓縮(Schedule Compression)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Schedule Network Analysis",
            zh: "時程網路分析(Schedule Network Analysis)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Adjusts activity start/finish dates to balance resource demand against limited supply; this may change the critical path and often extends the schedule",
            zh: "調整活動的開始與完成日期,以平衡資源需求與有限供給;可能改變要徑並經常延長工期",
          },
        },
        {
          id: "c2",
          text: {
            en: "Adjusts activities only within their existing float, so the critical path is not changed and the project end date is not delayed",
            zh: "僅在活動現有的浮時範圍內調整,不改變要徑、也不延遲專案完工日",
          },
        },
        {
          id: "c3",
          text: {
            en: "Shortens the schedule duration without reducing the project scope, typically through techniques such as crashing and fast tracking",
            zh: "在不縮減專案範疇的前提下縮短時程,通常透過趕工與快速跟進等技術達成",
          },
        },
        {
          id: "c4",
          text: {
            en: "A general technique used to generate the project schedule model, such as the Critical Path Method or what-if scenario analysis",
            zh: "用於產出專案時程模型的通用技術,例如要徑法或情境模擬分析",
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
    explanation: "資源撫平(Resource Leveling)為解決真正的資源超額分配問題,可能犧牲工期、改變要徑;資源平準(Resource Smoothing)則保守地僅在浮時範圍內微調,確保完工日不受影響但不一定能完全解決資源衝突。時程壓縮(Crashing/Fast Tracking 的統稱)與時程網路分析(CPM 等技術的統稱)則是更上層的分類概念,考題常要求辨識這些名詞彼此的從屬關係。",
  },
  {
    id: "sch-035",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Two engineers, Alice and Bob, are both scheduled to work full-time on Task X and Task Y during the same week, but the team has only one engineer available with that specialty. If the PM delays Task Y's start until Alice becomes free — extending the project's finish date — this technique is called {{blank1}}. If instead the PM only shifts Task Y within its existing float so that the project finish date is unchanged, this technique is called {{blank2}}.",
      zh: "工程師 Alice 與 Bob 原本都被排定在同一週全職執行 Task X 與 Task Y,但團隊在該專業領域只有一位工程師可用。若專案經理將 Task Y 的開始時間延後,直到 Alice 有空為止,導致專案完工日延長,這種技術稱為 {{blank1}};若專案經理僅在 Task Y 現有的浮時範圍內調整、不影響專案完工日,這種技術稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Resource Leveling",
              zh: "資源撫平(Resource Leveling)",
            },
          },
          {
            id: "b",
            text: {
              en: "Resource Smoothing",
              zh: "資源平準(Resource Smoothing)",
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
              en: "Resource Leveling",
              zh: "資源撫平(Resource Leveling)",
            },
          },
          {
            id: "b",
            text: {
              en: "Resource Smoothing",
              zh: "資源平準(Resource Smoothing)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "資源撫平(Resource Leveling)是為解決真正的資源衝突(兩人共搶同一位工程師)而調整時程,不受限於浮時,可能延長專案完工日,對應 blank1。資源平準(Resource Smoothing)則只在活動的既有浮時範圍內微調,確保完工日不變,對應 blank2。本題情境涉及團隊成員間的資源分配協調與溝通,故 ECO domain 判斷為 People(此為較細緻的判斷,若著重技術面亦可視為 Process,屬於可能有爭議的分類)。",
  },
  {
    id: "sch-036",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Activity K has an Early Start (ES) of Day 5 and a duration of 6 days. Its Late Start (LS) is Day 9. The Early Finish (EF) of Activity K is Day {{blank1}}, and its Total Float is {{blank2}} days.",
      zh: "活動 K 的最早開始(ES)為第 5 天,工期為 6 天。其最晚開始(LS)為第 9 天。活動 K 的最早完成(EF)為第 {{blank1}} 天,其總浮時(Total Float)為 {{blank2}} 天。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "10",
              zh: "10",
            },
          },
          {
            id: "b",
            text: {
              en: "11",
              zh: "11",
            },
          },
          {
            id: "c",
            text: {
              en: "12",
              zh: "12",
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
              en: "3",
              zh: "3",
            },
          },
          {
            id: "b",
            text: {
              en: "4",
              zh: "4",
            },
          },
          {
            id: "c",
            text: {
              en: "5",
              zh: "5",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "最早完成(EF)= ES + 工期 = 5 + 6 = 11 天。總浮時(Total Float)= LS − ES = 9 − 5 = 4 天;若改用 LF−EF 驗算,LF = LS + 工期 = 9 + 6 = 15,LF − EF = 15 − 11 = 4 天,結果一致,可互相驗證答案正確性。",
  },
  {
    id: "sch-037",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A pharmaceutical project must submit manufacturing documentation to a regulatory agency for review. The agency requires a mandatory 10-business-day waiting period after submission before production can begin — a compliance requirement the project team cannot skip or shorten. This represents a {{blank1}} of 10 days. Separately, the packaging design team is allowed to begin drafting labels 3 days before the formulation is finalized, since label drafts only need the preliminary ingredient list. This represents a {{blank2}} of 3 days.",
      zh: "某製藥專案須向監管機關提交製造文件審查。該機關要求提交後須強制等待 10 個工作天才能開始生產——這是團隊無法略過或縮短的法規遵循要求。這代表 10 天的 {{blank1}};另外,包裝設計團隊被允許在配方定案前 3 天就開始草擬標籤,因為標籤草稿只需要初步的成分清單。這代表 3 天的 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Lag",
              zh: "落後量(Lag)",
            },
          },
          {
            id: "b",
            text: {
              en: "Lead",
              zh: "提前量(Lead)",
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
              en: "Lag",
              zh: "落後量(Lag)",
            },
          },
          {
            id: "b",
            text: {
              en: "Lead",
              zh: "提前量(Lead)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "強制的法規審查等待期屬於刻意延遲後續活動開始的等待時間,是 Lag(落後量),對應 blank1;包裝團隊提前開始草擬標籤、與前置活動重疊,則是 Lead(提前量),對應 blank2。此情境的等待期由外部監管機關的法規遵循要求所驅動,屬於商業環境考量下的時程限制,故 ECO domain 判斷為 BusinessEnvironment。",
  },
  {
    id: "sch-038",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a project network: Task A is followed by two parallel tasks, Task B and Task C, which merge into Task D, followed in series by Task E. Task A takes 3 days, Task B takes 5 days, Task C takes 9 days, Task D takes 4 days, and Task E takes 6 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).",
      zh: "下圖為一個專案網路圖:Task A 之後分為兩條並行任務 Task B 與 Task C,兩者匯流至 Task D,D 之後接續串行的 Task E。Task A 需時 3 天、Task B 需時 5 天、Task C 需時 9 天、Task D 需時 4 天、Task E 需時 6 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Task A (3 days)",
          zh: "Task A(3天)",
        },
        x: 5,
        y: 45,
        width: 16,
        height: 18,
      },
      {
        id: "n2",
        label: {
          en: "Task B (5 days)",
          zh: "Task B(5天)",
        },
        x: 25,
        y: 15,
        width: 16,
        height: 18,
      },
      {
        id: "n3",
        label: {
          en: "Task C (9 days)",
          zh: "Task C(9天)",
        },
        x: 25,
        y: 75,
        width: 16,
        height: 18,
      },
      {
        id: "n4",
        label: {
          en: "Task D (4 days)",
          zh: "Task D(4天)",
        },
        x: 48,
        y: 45,
        width: 16,
        height: 18,
      },
      {
        id: "n5",
        label: {
          en: "Task E (6 days)",
          zh: "Task E(6天)",
        },
        x: 72,
        y: 45,
        width: 16,
        height: 18,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n4",
        to: "n5",
      },
    ],
    explanation: "兩條並行路徑在 D 匯流後,共同接續 E。路徑一 A→B→D→E = 3+5+4+6 = 18 天;路徑二 A→C→D→E = 3+9+4+6 = 22 天,較長,為要徑。因此 A、C、D、E 總浮時皆為 0,只有 B 不在要徑上,總浮時 = 22−18 = 4 天。由於 D、E 是兩條路徑共同經過的後續節點,其浮時只取決於前面並行區段(B 與 C)的差距,故 B 的浮時計算方式與只有 A-B(C)-D 三段時相同,不受後面串接的 E 影響。",
  },
  {
    id: "sch-039",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The four cards below list items related to Sequence Activities. Click the item that is an OUTPUT of the Sequence Activities process (the other three are inputs).",
      zh: "下方四張卡片列出與排序活動(Sequence Activities)相關的項目。請點選「排序活動」流程的「輸出(Output)」項目(其餘三項皆為輸入)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Activity List (input)",
          zh: "活動清單(輸入)",
        },
        x: 10,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n2",
        label: {
          en: "Project Schedule Network Diagrams (output)",
          zh: "專案時程網路圖(輸出)",
        },
        x: 55,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n3",
        label: {
          en: "Milestone List (input)",
          zh: "里程碑清單(輸入)",
        },
        x: 10,
        y: 60,
        width: 35,
        height: 25,
      },
      {
        id: "n4",
        label: {
          en: "Enterprise Environmental Factors (input)",
          zh: "事業環境因素(輸入)",
        },
        x: 55,
        y: 60,
        width: 35,
        height: 25,
      },
    ],
    correctAnswer: "n2",
    explanation: "排序活動(Sequence Activities)以活動清單、里程碑清單、事業環境因素等作為輸入,分析活動之間的邏輯關係(依賴類型、Lead/Lag)後,產出專案時程網路圖(Project Schedule Network Diagrams),作為後續發展時程(Develop Schedule)的重要輸入。",
  },
  {
    id: "sch-040",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a network with Kickoff followed by three parallel tasks — Design, Development, and Test Environment Setup — which all merge into Integration. Kickoff takes 1 day, Design takes 5 days, Development takes 12 days, Test Environment Setup takes 8 days, and Integration takes 2 days. Among the three parallel tasks, click the one that lies on the Critical Path (i.e., has zero Total Float).",
      zh: "下圖網路中,Kickoff 之後分為三條並行任務——Design、Development、Test Environment Setup,三者完成後皆匯流至 Integration。Kickoff 需時 1 天、Design 需時 5 天、Development 需時 12 天、Test Environment Setup 需時 8 天、Integration 需時 2 天。在三條並行任務中,請點選「位於要徑(Critical Path)上」、也就是總浮時為零的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Kickoff (1 day)",
          zh: "Kickoff(1天)",
        },
        x: 5,
        y: 40,
        width: 16,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Design (5 days)",
          zh: "Design(5天)",
        },
        x: 28,
        y: 8,
        width: 16,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Development (12 days)",
          zh: "Development(12天)",
        },
        x: 28,
        y: 40,
        width: 16,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Test Environment Setup (8 days)",
          zh: "Test Environment Setup(8天)",
        },
        x: 28,
        y: 75,
        width: 16,
        height: 20,
      },
      {
        id: "n5",
        label: {
          en: "Integration (2 days)",
          zh: "Integration(2天)",
        },
        x: 58,
        y: 40,
        width: 16,
        height: 20,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n1",
        to: "n4",
      },
      {
        from: "n2",
        to: "n5",
      },
      {
        from: "n3",
        to: "n5",
      },
      {
        from: "n4",
        to: "n5",
      },
    ],
    explanation: "三條路徑:Kickoff→Design→Integration = 1+5+2 = 8 天;Kickoff→Development→Integration = 1+12+2 = 15 天;Kickoff→Test Environment Setup→Integration = 1+8+2 = 11 天。三者中以 Development 所在路徑最長(15 天),為要徑,故 Development 總浮時為 0,是三條並行任務中唯一位於要徑上的任務。Design 的總浮時 = 15−8 = 7 天;Test Environment Setup 的總浮時 = 15−11 = 4 天。",
  },
  {
    id: "sch-041",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "In the network below, Task X (Architecture Design, 4 days) and Task Y (Database Review, 3 days) both start right after the project Start milestone and merge into Integration (5 days). Purely by logic, Task X is on the critical path (9 days total) and Task Y has 1 day of float. However, both tasks require the project's sole Solutions Architect, who can only work on one at a time; the team decides the Architect will complete Task X first, then Task Y — adding a resource-driven dependency from X to Y. Click the task whose resource-leveled delay pushes the project's new critical path to 12 days.",
      zh: "下圖網路中,Task X(架構設計,4 天)與 Task Y(資料庫審查,3 天)在專案 Start 里程碑後都能立即開始,並匯流至 Integration(5 天)。若純粹依邏輯關係計算,Task X 位於要徑上(總計 9 天),Task Y 則有 1 天浮時。然而兩項任務都需要專案唯一的解決方案架構師(Solutions Architect),此人一次只能執行一項任務;團隊決定架構師先完成 Task X 再進行 Task Y——這在網路圖中新增了一條由 X 指向 Y 的資源驅動依賴。請點選「因資源撫平而延後開始、使專案新要徑變為 12 天」的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start (0 days)",
          zh: "Start(0天)",
        },
        x: 5,
        y: 45,
        width: 14,
        height: 18,
      },
      {
        id: "n2",
        label: {
          en: "Task X: Architecture Design (4 days)",
          zh: "Task X:架構設計(4天)",
        },
        x: 28,
        y: 15,
        width: 18,
        height: 18,
      },
      {
        id: "n3",
        label: {
          en: "Task Y: Database Review (3 days)",
          zh: "Task Y:資料庫審查(3天)",
        },
        x: 28,
        y: 75,
        width: 18,
        height: 18,
      },
      {
        id: "n4",
        label: {
          en: "Integration (5 days)",
          zh: "Integration(5天)",
        },
        x: 58,
        y: 45,
        width: 18,
        height: 18,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n2",
        to: "n3",
      },
    ],
    explanation: "僅依邏輯關係計算:Start→X→Integration = 0+4+5 = 9 天(要徑);Start→Y→Integration = 0+3+5 = 8 天,Y 的總浮時 = 9−8 = 1 天。但因 X 與 Y 共用唯一的架構師,資源撫平(Resource Leveling)強制新增 X→Y 的相依性,使 Y 的最早開始時間從第 0 天推遲到 X 完成的第 4 天:Y 的 EF = 4+3 = 7 天,Integration 的 ES 變為 max(X 的 EF=4, Y 的 EF=7) = 7 天,EF = 7+5 = 12 天。新要徑變為 Start→X→Y→Integration = 0+4+3+5 = 12 天,比原本純邏輯要徑的 9 天多出 3 天。造成此延長的關鍵正是 Task Y 因資源撫平而被迫延後開始,故答案為 Task Y。此題示範了資源限制如何在網路圖邏輯之外,額外改變實際要徑與專案工期。",
  },
  {
    id: "sch-042",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project team represents each activity as an arrow, with nodes representing the start and finish points of activities, and can only model Finish-to-Start relationships (using dummy activities to show complex dependencies). What network diagramming method is being used?",
      zh: "某專案團隊將每個活動畫成一支箭頭,節點代表活動的開始與結束時間點,且只能表達完成到開始(FS)的關係(需用虛工作 Dummy Activity 來表示複雜的相依性)。這是使用哪一種網路圖示法?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Precedence Diagramming Method (PDM)",
          zh: "前導圖示法(PDM)",
        },
      },
      {
        id: "b",
        text: {
          en: "Arrow Diagramming Method (ADM)",
          zh: "箭線圖示法(ADM)",
        },
      },
      {
        id: "c",
        text: {
          en: "Critical Chain Method",
          zh: "要徑鏈法",
        },
      },
      {
        id: "d",
        text: {
          en: "Bar (Gantt) Chart",
          zh: "甘特圖(Bar Chart)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "箭線圖示法(Arrow Diagramming Method, ADM)以「箭頭」代表活動、節點代表事件(開始/結束時點),只能表達 FS 邏輯關係,遇到較複雜的相依關係須額外繪製不消耗時間與資源的「虛工作(Dummy Activity)」來維持圖形正確性,故答案為 (b)。現行專案管理軟體幾乎都改用前導圖示法(PDM),以節點代表活動本身,並可直接表達 FS/SS/FF/SF 四種關係,不需要虛工作。",
  },
  {
    id: "sch-043",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two statements correctly distinguish the Arrow Diagramming Method (ADM) from the Precedence Diagramming Method (PDM)? Select two.",
      zh: "下列哪兩項敘述能正確區分箭線圖示法(ADM)與前導圖示法(PDM)?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "PDM represents activities on nodes and can directly show all four logical relationship types (FS, SS, FF, SF)",
          zh: "PDM 以節點代表活動,可直接表達 FS、SS、FF、SF 四種邏輯關係",
        },
      },
      {
        id: "b",
        text: {
          en: "ADM can only represent Finish-to-Start relationships and sometimes requires dummy activities to preserve correct logic",
          zh: "ADM 只能表達完成到開始(FS)關係,有時需要虛工作(Dummy Activity)以維持邏輯正確性",
        },
      },
      {
        id: "c",
        text: {
          en: "PDM is an older technique that has been fully replaced by ADM in modern scheduling software",
          zh: "PDM 是較舊的技術,已被 ADM 在現代排程軟體中完全取代",
        },
      },
      {
        id: "d",
        text: {
          en: "ADM represents activities on nodes, while PDM represents activities on arrows",
          zh: "ADM 以節點代表活動,PDM 以箭頭代表活動",
        },
      },
      {
        id: "e",
        text: {
          en: "Dummy activities in ADM consume both time and resources just like real activities",
          zh: "ADM 中的虛工作(Dummy Activity)跟真實活動一樣會消耗時間與資源",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "PDM(前導圖示法)以節點代表活動,可直接表達 FS/SS/FF/SF 四種關係,是現行專案管理軟體的主流做法,故 (a) 正確。ADM(箭線圖示法)以箭頭代表活動、只能表達 FS 關係,遇複雜相依需靠不消耗時間與資源的虛工作維持圖形邏輯,故 (b) 正確。(c) 描述方向相反,是 PDM 取代 ADM 而非反之;(d) 描述的活動/節點對應方式剛好相反;(e) 錯誤,虛工作純粹是邏輯輔助線,工期為零、不消耗資源。",
  },
  {
    id: "sch-044",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The team estimates that, since a very similar UI module in a past project took 10 days to build, this new UI module will also take about 10 days — this is an example of {{blank1}} estimating. Later, the team measures that a technical writer produces 2 pages of documentation per day on average, and uses this rate to calculate that 40 pages of documentation will take 20 days — this is an example of {{blank2}} estimating.",
      zh: "團隊估算,由於過去某專案中一個非常相似的 UI 模組花了 10 天完成,因此這次的新 UI 模組也大約需要 10 天——這是 {{blank1}} 估算法的範例。之後,團隊量測到某技術文件撰寫人員平均每天可產出 2 頁文件,並用此速率計算出 40 頁文件需要 20 天——這是 {{blank2}} 估算法的範例。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Analogous",
              zh: "類比(Analogous)",
            },
          },
          {
            id: "b",
            text: {
              en: "Parametric",
              zh: "參數(Parametric)",
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
              en: "Analogous",
              zh: "類比(Analogous)",
            },
          },
          {
            id: "b",
            text: {
              en: "Parametric",
              zh: "參數(Parametric)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "類比估算(Analogous Estimating)直接借用過去相似活動或專案的實際數據作為估算基礎,速度快、成本低但精確度較低,故第一個情境屬於 blank1 = Analogous。參數估算(Parametric Estimating)則利用歷史資料與其他變數之間的統計關係(如「每頁 2 天」的產出率)以數學方式計算估算值,通常比類比估算更精確,故第二個情境屬於 blank2 = Parametric(40 頁 ÷ 每天 2 頁 = 20 天)。",
  },
  {
    id: "sch-045",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The four cards below list items related to Define Activities. Click the item that is an OUTPUT of the Define Activities process (the other three are inputs).",
      zh: "下方四張卡片列出與定義活動(Define Activities)相關的項目。請點選「定義活動」流程的「輸出(Output)」項目(其餘三項皆為輸入)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Schedule Management Plan (input)",
          zh: "時程管理計畫(輸入)",
        },
        x: 10,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n2",
        label: {
          en: "Scope Baseline (input)",
          zh: "範疇基準(輸入)",
        },
        x: 55,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n3",
        label: {
          en: "Activity List (output)",
          zh: "活動清單(輸出)",
        },
        x: 10,
        y: 60,
        width: 35,
        height: 25,
      },
      {
        id: "n4",
        label: {
          en: "Enterprise Environmental Factors (input)",
          zh: "事業環境因素(輸入)",
        },
        x: 55,
        y: 60,
        width: 35,
        height: 25,
      },
    ],
    correctAnswer: "n3",
    explanation: "定義活動(Define Activities)以時程管理計畫、範疇基準(內含 WBS 與工作包)、事業環境因素等作為輸入,將工作包進一步分解為時程活動後,產出活動清單(Activity List)、活動屬性(Activity Attributes)與里程碑清單(Milestone List);本題所列輸出項目為活動清單,故答案為 (n3)。",
  },
  {
    id: "sch-046",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each duration estimating technique to the description that best fits it.",
      zh: "請將下列工期估算技術拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Analogous Estimating",
            zh: "類比估算(Analogous Estimating)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Parametric Estimating",
            zh: "參數估算(Parametric Estimating)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Bottom-up Estimating",
            zh: "由下而上估算(Bottom-up Estimating)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Three-Point Estimating",
            zh: "三點估算(Three-Point Estimating)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Uses actual duration data from a similar past activity or project as the basis for the new estimate; fast and low-cost but less precise",
            zh: "直接使用過去相似活動或專案的實際工期資料作為新估算的基礎;速度快、成本低但精確度較低",
          },
        },
        {
          id: "c2",
          text: {
            en: "Uses a statistical relationship between historical data and other variables (such as hours per unit) to calculate the estimate",
            zh: "利用歷史資料與其他變數(如每單位所需工時)之間的統計關係來計算估算值",
          },
        },
        {
          id: "c3",
          text: {
            en: "Estimates each individual activity or work package in detail, then aggregates (rolls up) the results into a total; more accurate but more time-consuming",
            zh: "詳細估算每個個別活動或工作包,再將結果彙總(roll up)為總數;較精確但耗時較長",
          },
        },
        {
          id: "c4",
          text: {
            en: "Uses optimistic, most likely, and pessimistic values to account for estimation uncertainty and risk",
            zh: "使用樂觀值、最可能值、悲觀值來反映估算的不確定性與風險",
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
    explanation: "四種常見工期估算技術中,類比估算最快速但最不精確;參數估算利用統計關係,精確度介於中間;由下而上估算最精確但最耗時;三點估算則專門用來反映估算的不確定性,可再搭配 Beta 或 Triangular 分佈計算預期工期與標準差。",
  },
  {
    id: "sch-047",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Midway through execution, the project team updates the working schedule almost weekly to reflect actual progress and re-forecasted dates. When preparing the monthly performance report and calculating Schedule Variance, which version of the schedule should actual progress be compared against?",
      zh: "專案執行到一半,團隊幾乎每週都會更新工作中的時程,以反映實際進度與重新預測的日期。在準備月度績效報告、計算時程變異(Schedule Variance)時,應將實際進度與哪一個版本的時程進行比較?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The most recently updated working Project Schedule",
          zh: "最近一次更新的工作專案時程",
        },
      },
      {
        id: "b",
        text: {
          en: "The approved Schedule Baseline",
          zh: "已核准的時程基準(Schedule Baseline)",
        },
      },
      {
        id: "c",
        text: {
          en: "The initial draft schedule created before stakeholder review",
          zh: "利害關係人審查前建立的初版草稿時程",
        },
      },
      {
        id: "d",
        text: {
          en: "Next month's forecasted schedule",
          zh: "下個月的預測時程",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "時程基準(Schedule Baseline)是經正式核准、用來衡量實際績效的版本,一旦核准後除非透過正式變更管理程序,否則不會隨意更動;而專案時程(Project Schedule)則是持續更新、反映當前執行狀況的工作版本。計算時程變異等績效指標時,比較的對象應是基準而非最新的工作時程,否則會失去衡量偏差的意義,故答案為 (b)。",
  },
  {
    id: "sch-048",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project status report shows SPI = 0.82 and CPI = 1.10 for the current period. Which two conclusions can correctly be drawn from these two indices? Select two.",
      zh: "某專案績效報告顯示本期 SPI = 0.82、CPI = 1.10。從這兩個指標可以正確得出下列哪兩項結論?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project is currently behind schedule, since SPI is less than 1.0",
          zh: "專案目前落後進度,因為 SPI 小於 1.0",
        },
      },
      {
        id: "b",
        text: {
          en: "The project is currently spending less than planned for the work completed, since CPI is greater than 1.0",
          zh: "專案目前花費低於已完成工作的計畫值,因為 CPI 大於 1.0",
        },
      },
      {
        id: "c",
        text: {
          en: "The project is ahead of schedule and should reduce its pace to save cost",
          zh: "專案進度超前,應放慢腳步以節省成本",
        },
      },
      {
        id: "d",
        text: {
          en: "The project is overspending its budget and must immediately freeze all hiring",
          zh: "專案正在超支預算,必須立即凍結所有招募",
        },
      },
      {
        id: "e",
        text: {
          en: "These two indices alone are sufficient to conclude the root cause of the delay is a lack of skilled resources",
          zh: "光憑這兩個指標就足以斷定延遲的根本原因是缺乏合格資源",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "SPI(時程績效指標)= EV/PV,小於 1.0 代表落後計畫進度,故 (a) 正確;CPI(成本績效指標)= EV/AC,大於 1.0 代表花費效率良好、低於預算,故 (b) 正確。此組合(SPI<1、CPI≥1)常見於「進度落後但成本控制良好」的情境,提示問題可能出在資源數量或排程安排,而非成本浪費——但 (e) 過度推論,兩個指標本身無法直接證明根本原因為資源不足,仍需進一步調查;(c)(d) 與數據意涵相反或過度反應,故皆非正確答案。",
  },
  {
    id: "sch-049",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Activity Q currently has an Early Start (ES) of Day 15 and a duration of 7 days (Early Finish = Day 22). Due to a newly imposed contractual deadline, the Late Finish (LF) allowed for this activity is now only Day 20. What is Activity Q's Total Float, and what does the result imply?",
      zh: "活動 Q 目前的最早開始(ES)為第 15 天,工期為 7 天(最早完成 EF = 第 22 天)。由於新加入的合約截止日限制,此活動現在允許的最晚完成(LF)只剩第 20 天。活動 Q 的總浮時(Total Float)為何?這個結果代表什麼意涵?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Total Float = −2 days; the schedule is already behind what is needed to meet the new deadline, and compression is required",
          zh: "總浮時 = −2 天;目前進度已落後於達成新截止日所需的進度,需要進行時程壓縮",
        },
      },
      {
        id: "b",
        text: {
          en: "Total Float = 2 days; the activity is comfortably ahead of schedule",
          zh: "總浮時 = 2 天;此活動進度綽綽有餘",
        },
      },
      {
        id: "c",
        text: {
          en: "Total Float = 0 days; the activity is exactly on the critical path with no issue",
          zh: "總浮時 = 0 天;此活動剛好在要徑上,沒有問題",
        },
      },
      {
        id: "d",
        text: {
          en: "Total Float = 7 days; the activity has abundant slack",
          zh: "總浮時 = 7 天;此活動有充裕的浮時",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "新的最晚開始(LS)= LF − 工期 = 20 − 7 = 13 天。總浮時 = LS − ES = 13 − 15 = −2 天。負浮時(Negative Float)代表依現有邏輯與工期,此活動最早完成的時間點已經晚於新截止日要求的最晚完成時間,意味著在不採取行動的情況下專案將無法如期完成,專案經理必須透過趕工(Crashing)或快速跟進(Fast Tracking)等時程壓縮技術來消除負浮時,故答案為 (a)。",
  },
  {
    id: "sch-050",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The four cards below list items related to Estimate Activity Duration. Click the item that is an OUTPUT of the Estimate Activity Duration process (the other three are inputs).",
      zh: "下方四張卡片列出與估算活動工期(Estimate Activity Duration)相關的項目。請點選「估算活動工期」流程的「輸出(Output)」項目(其餘三項皆為輸入)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Activity List (input)",
          zh: "活動清單(輸入)",
        },
        x: 10,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n2",
        label: {
          en: "Resource Requirements (input)",
          zh: "資源需求(輸入)",
        },
        x: 55,
        y: 15,
        width: 35,
        height: 25,
      },
      {
        id: "n3",
        label: {
          en: "Risk Register (input)",
          zh: "風險登記冊(輸入)",
        },
        x: 10,
        y: 60,
        width: 35,
        height: 25,
      },
      {
        id: "n4",
        label: {
          en: "Duration Estimates (output)",
          zh: "工期估算(輸出)",
        },
        x: 55,
        y: 60,
        width: 35,
        height: 25,
      },
    ],
    correctAnswer: "n4",
    explanation: "估算活動工期(Estimate Activity Duration)以活動清單、資源需求、風險登記冊等作為輸入,運用類比、參數、三點、由下而上等估算技術,產出各活動的工期估算(Duration Estimates)作為主要輸出,供後續發展時程(Develop Schedule)使用,故答案為 (n4)。",
  },
  {
    id: "sch-051",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "On the team's Kanban board, {{blank1}} measures the total elapsed time from when a work item is added to the backlog until it is completed, while {{blank2}} measures only the elapsed time from when work actually begins on the item until it is completed.",
      zh: "在團隊的看板(Kanban Board)上,{{blank1}} 衡量的是從一項工作項目被加入待辦清單開始,到完成為止的總經過時間;而 {{blank2}} 僅衡量從該項目實際開始執行到完成為止的經過時間。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Lead Time",
              zh: "前置時間(Lead Time)",
            },
          },
          {
            id: "b",
            text: {
              en: "Cycle Time",
              zh: "週期時間(Cycle Time)",
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
              en: "Lead Time",
              zh: "前置時間(Lead Time)",
            },
          },
          {
            id: "b",
            text: {
              en: "Cycle Time",
              zh: "週期時間(Cycle Time)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "前置時間(Lead Time)衡量從需求進入待辦清單到最終完成的完整經過時間,反映客戶實際感受到的等待時間;週期時間(Cycle Time)則只計算從團隊實際開始動工到完成的區間,反映團隊執行效率。兩者常在看板方法(Kanban)的流動效率分析中被比較,縮短週期時間通常有助於縮短前置時間,但兩者定義的起點不同,容易混淆。",
  },
  {
    id: "sch-052",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which two statements correctly describe the effect of Work-in-Progress (WIP) limits on a Kanban team's flow? Select two.",
      zh: "關於在製品限制(WIP Limit)對看板(Kanban)團隊工作流的影響,下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "WIP limits cap the number of items allowed in a workflow stage at one time, which helps make bottlenecks visible",
          zh: "WIP 限制設定同一時間某工作階段可容許的項目數量上限,有助於讓瓶頸現形",
        },
      },
      {
        id: "b",
        text: {
          en: "Lowering WIP limits typically reduces multitasking and context switching, which tends to shorten cycle time",
          zh: "降低 WIP 限制通常能減少多工切換,進而縮短週期時間",
        },
      },
      {
        id: "c",
        text: {
          en: "WIP limits guarantee the team's velocity will double every iteration",
          zh: "WIP 限制能保證團隊的產出速度每次迭代都會加倍",
        },
      },
      {
        id: "d",
        text: {
          en: "Once set at project kickoff, WIP limits must never be adjusted for the rest of the project",
          zh: "WIP 限制一旦在專案啟動時設定,專案剩餘期間絕不能再調整",
        },
      },
      {
        id: "e",
        text: {
          en: "Continuously increasing WIP limits without limit always improves flow efficiency",
          zh: "無限制地持續提高 WIP 限制,永遠能改善流動效率",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "WIP 限制透過限制每個工作階段同時進行的項目數量,迫使團隊在項目卡關時先解決瓶頸而非持續塞入新工作,使瓶頸更容易被發現,故 (a) 正確;減少同時進行的項目也能降低多工切換造成的效率損失,通常有助於縮短週期時間,故 (b) 正確。(c) 過度誇大 WIP 限制的效果;(d) 錯誤,WIP 限制應依團隊實際流動狀況持續檢視調整;(e) 錯誤,WIP 限制過高會失去限制在製品、及早暴露瓶頸的意義,反而可能降低流動效率。",
  },
  {
    id: "sch-053",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Based on the last several iterations, a Scrum team's velocity has ranged between 18 and 24 story points per 2-week sprint. The remaining product backlog is estimated at 150 story points. When communicating a release forecast to stakeholders, which sprint range should the team present (rounding each case up to a whole sprint)?",
      zh: "根據過去幾次迭代,某 Scrum 團隊每個 2 週衝刺的產出速度(Velocity)介於 18 到 24 個故事點之間。剩餘產品待辦清單估算為 150 個故事點。在向利害關係人溝通發布預測時,團隊應提出哪一個衝刺數區間(各情境皆無條件進位為整數衝刺)?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "5 to 7 sprints",
          zh: "5 到 7 個衝刺",
        },
      },
      {
        id: "b",
        text: {
          en: "6 to 8 sprints",
          zh: "6 到 8 個衝刺",
        },
      },
      {
        id: "c",
        text: {
          en: "7 to 9 sprints",
          zh: "7 到 9 個衝刺",
        },
      },
      {
        id: "d",
        text: {
          en: "8 to 10 sprints",
          zh: "8 到 10 個衝刺",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "最佳情境(以較高速度 24 點計算):150 ÷ 24 = 6.25,無條件進位為 7 個衝刺。最差情境(以較低速度 18 點計算):150 ÷ 18 ≈ 8.33,無條件進位為 9 個衝刺。因此應向利害關係人溝通「約 7 到 9 個衝刺」的預測區間,而非單一精確數字,以誠實反映速度本身存在的變異性,故答案為 (c)。",
  },
  {
    id: "sch-054",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each agile schedule-related artifact to the description that best fits it.",
      zh: "請將下列敏捷時程相關產出物拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Burndown Chart",
            zh: "燃盡圖(Burndown Chart)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Burnup Chart",
            zh: "燃起圖(Burnup Chart)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Release Plan",
            zh: "發布計畫(Release Plan)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Iteration (Sprint) Backlog",
            zh: "迭代(衝刺)待辦清單(Iteration Backlog)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Shows the amount of remaining work trending downward over the course of an iteration or release",
            zh: "呈現迭代或發布期間內,剩餘工作量隨時間逐漸減少的趨勢",
          },
        },
        {
          id: "c2",
          text: {
            en: "Shows completed work trending upward against the total scope line, making scope changes clearly visible",
            zh: "呈現已完成工作量隨時間上升的趨勢,並對照總範疇線,讓範疇變動清楚可見",
          },
        },
        {
          id: "c3",
          text: {
            en: "A higher-level roadmap mapping features or epics to future iterations or releases",
            zh: "將功能或史詩(Epic)對應到未來迭代或發布的高層級路徑圖",
          },
        },
        {
          id: "c4",
          text: {
            en: "The set of backlog items and tasks the team has committed to complete within the current iteration",
            zh: "團隊承諾在本次迭代內完成的待辦項目與任務集合",
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
    explanation: "燃盡圖與燃起圖都是敏捷團隊常用的時程視覺化工具:燃盡圖著重呈現「剩餘工作」的下降趨勢,燃起圖則同時呈現「已完成工作」與「總範疇線」,能清楚呈現範疇變動;發布計畫是較高層次、跨多個迭代的路徑圖,而迭代待辦清單則是單一迭代內的具體工作承諾,四者分屬不同層級的時程溝通工具。",
  },
  {
    id: "sch-055",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Midway through a sprint, the Product Owner adds a significant amount of new scope to the iteration. The team wants a chart that clearly shows both the work completed so far AND any increase in total scope, so stakeholders can see why progress appears slower without assuming the team underperformed. Which chart should the team use?",
      zh: "衝刺進行到一半,產品負責人(PO)為本次迭代新增了大量範疇。團隊希望使用一種圖表,能同時清楚呈現「已完成的工作量」以及「總範疇的增加」,讓利害關係人能理解進度看似變慢的原因,而不會誤以為是團隊表現不佳。團隊應使用哪一種圖表?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Burndown Chart",
          zh: "燃盡圖(Burndown Chart)",
        },
      },
      {
        id: "b",
        text: {
          en: "Burnup Chart",
          zh: "燃起圖(Burnup Chart)",
        },
      },
      {
        id: "c",
        text: {
          en: "Resource Histogram",
          zh: "資源直方圖(Resource Histogram)",
        },
      },
      {
        id: "d",
        text: {
          en: "Milestone Chart",
          zh: "里程碑圖(Milestone Chart)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "燃起圖(Burnup Chart)同時繪製「已完成工作」與「總範疇」兩條線,當範疇增加時,總範疇線會明顯上移,讓利害關係人能一眼看出進度變慢是因範疇擴大而非團隊生產力下降;燃盡圖只呈現剩餘工作量的單一下降趨勢線,範疇擴增時容易讓人誤以為團隊完全沒有進展,故本情境應選擇燃起圖,答案為 (b)。",
  },
  {
    id: "sch-056",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a network: Task A is followed by two parallel tasks, Task B and Task C, which merge into Task D. Task A takes 4 days, Task C takes 5 days, and Task D takes 6 days. Task B takes 7 days, but there is also a mandatory 2-day lag between the finish of Task A and the start of Task B (for material curing) that must be added to the B path's total duration. Click the task that has Total Float (i.e., is NOT on the Critical Path).",
      zh: "下圖網路中,Task A 之後分為兩條並行任務 Task B 與 Task C,兩者完成後匯流至 Task D。Task A 需時 4 天、Task C 需時 5 天、Task D 需時 6 天。Task B 需時 7 天,但在 Task A 完成到 Task B 開始之間,還有一個因材料養護而產生的強制性 2 天落後量(Lag),必須計入 B 路徑的總工期。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Task A (4 days)",
          zh: "Task A(4天)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Task B (7 days, +2-day lag after A)",
          zh: "Task B(7天,A 完成後有 2 天落後量)",
        },
        x: 30,
        y: 10,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Task C (5 days)",
          zh: "Task C(5天)",
        },
        x: 30,
        y: 70,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Task D (6 days)",
          zh: "Task D(6天)",
        },
        x: 60,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "路徑一 A→(2 天 Lag)→B→D = 4+2+7+6 = 19 天,為要徑;路徑二 A→C→D = 4+5+6 = 15 天。計算 Lag 路徑總工期時,落後量必須和活動工期一樣被計入,因此 B 所在路徑總長為 19 天。由於路徑一較長,A、B、D 皆為要徑上總浮時為 0 的節點,只有 Task C 不在要徑上,其總浮時 = 19−15 = 4 天,故答案為 (n3)。本題特別考驗「將 Lag 計入路徑總工期」的細節,若漏算 2 天 Lag,會誤以為兩條路徑等長而算錯。",
  },
  {
    id: "sch-057",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The sponsor has approved additional budget to recover a schedule slip, but the regulatory contract prohibits changing the required sequence of the remaining inspection activities. In this situation, the PM should apply {{blank1}} to the critical-path activities rather than {{blank2}}, since the latter would require re-sequencing work that the contract does not allow.",
      zh: "贊助人已核准額外預算以挽回落後的時程,但法規合約禁止變更剩餘檢驗活動所要求的順序。在此情況下,專案經理應對要徑活動採取 {{blank1}},而非 {{blank2}},因為後者需要重新排序工作,而合約不允許這麼做。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Crashing",
              zh: "趕工(Crashing)",
            },
          },
          {
            id: "b",
            text: {
              en: "Fast Tracking",
              zh: "快速跟進(Fast Tracking)",
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
              en: "Crashing",
              zh: "趕工(Crashing)",
            },
          },
          {
            id: "b",
            text: {
              en: "Fast Tracking",
              zh: "快速跟進(Fast Tracking)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "趕工(Crashing)透過投入額外資源(如加班、增派人力)縮短要徑工期,不需改變活動之間的邏輯順序,適合本情境「預算有彈性但順序不可變更」的限制,對應 blank1。快速跟進(Fast Tracking)則需要將原本循序的活動改為並行執行,等於變更了活動順序,在合約禁止改變檢驗順序的情況下並不適用,對應 blank2。此決策由合約與法規要求(外部商業環境限制)所驅動。",
  },
  {
    id: "sch-058",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During a status meeting, two senior team members openly disagree: one insists on fast tracking two activities to save a week, while the other warns this will likely cause costly rework given the module's complexity. The disagreement is becoming tense and affecting team morale. What should the PM do FIRST?",
      zh: "在狀態會議中,兩位資深團隊成員公開意見分歧:一位堅持快速跟進兩項活動以節省一週時間,另一位則警告依此模組的複雜度,這麼做很可能造成高成本的返工。爭論逐漸緊張並影響團隊士氣。專案經理應「優先」採取什麼行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Side with the more senior of the two team members to quickly end the disagreement",
          zh: "支持兩人中較資深的一方,以盡快結束爭論",
        },
      },
      {
        id: "b",
        text: {
          en: "Facilitate a structured discussion that weighs the schedule benefit against the rework risk, using available data (such as past rework rates), to reach a shared decision",
          zh: "主持一場結構化討論,權衡時程效益與返工風險,運用現有數據(如過去的返工率),共同達成決策",
        },
      },
      {
        id: "c",
        text: {
          en: "Unilaterally decide to fast track immediately, since schedule pressure outweighs other concerns",
          zh: "立即單方面決定執行快速跟進,因為時程壓力優先於其他考量",
        },
      },
      {
        id: "d",
        text: {
          en: "Postpone the decision indefinitely to avoid further conflict between the two team members",
          zh: "無限期擱置此決策,以避免兩人進一步衝突",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "團隊內部對於時程壓縮技術的風險評估出現分歧時,專案經理應優先扮演促進者(Facilitator)的角色,主持結構化討論、引入客觀數據(如歷史返工率)協助團隊共同權衡效益與風險,而非片面偏袒一方、獨斷決定或迴避問題,這體現了團隊領導與衝突管理的核心職責,故答案為 (b)。",
  },
  {
    id: "sch-059",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two statements correctly describe What-If Scenario Analysis as a schedule network analysis technique? Select two.",
      zh: "關於情境模擬分析(What-If Scenario Analysis)作為一種時程網路分析技術,下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It evaluates the feasibility of the project schedule under adverse conditions, such as a key resource becoming unavailable or a major deliverable being delayed",
          zh: "它評估在不利情況下(如關鍵資源無法取得或重大交付物延遲)專案時程的可行性",
        },
      },
      {
        id: "b",
        text: {
          en: "Its results can be used to prepare contingency and response plans to overcome or mitigate the impact of unexpected situations",
          zh: "其結果可用於制定應變計畫,以克服或減輕突發狀況的衝擊",
        },
      },
      {
        id: "c",
        text: {
          en: "It requires halting all project work until the analysis is fully finalized",
          zh: "它要求在分析完全定案之前暫停所有專案工作",
        },
      },
      {
        id: "d",
        text: {
          en: "It can only be applied to agile projects and never to predictive (waterfall) projects",
          zh: "它只能應用於敏捷專案,絕不能用於預測型(瀑布)專案",
        },
      },
      {
        id: "e",
        text: {
          en: "It completely replaces the need to perform Critical Path Method analysis",
          zh: "它能完全取代要徑法(CPM)分析的需要",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "情境模擬分析透過模擬「若發生某種不利情況會如何」來評估時程的韌性與可行性,例如假設某關鍵資源突然無法取得,故 (a) 正確;其結果可協助團隊事先準備應變計畫,故 (b) 正確。(c) 錯誤,分析過程不需要暫停專案工作;(d) 錯誤,此技術在預測型與敏捷專案中皆可應用;(e) 錯誤,情境模擬分析是 CPM 之外的補充技術,並非取代關係。",
  },
  {
    id: "sch-060",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Activity W has an Early Finish (EF) of Day 18 and a Late Finish (LF) of Day 25. What is Activity W's Total Float?",
      zh: "活動 W 的最早完成(EF)為第 18 天,最晚完成(LF)為第 25 天。活動 W 的總浮時(Total Float)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "5 days",
          zh: "5 天",
        },
      },
      {
        id: "b",
        text: {
          en: "6 days",
          zh: "6 天",
        },
      },
      {
        id: "c",
        text: {
          en: "7 days",
          zh: "7 天",
        },
      },
      {
        id: "d",
        text: {
          en: "8 days",
          zh: "8 天",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "總浮時(Total Float)= LF − EF = 25 − 18 = 7 天(此公式與 LS − ES 等價,只是分別用完成日與開始日計算,結果一致)。代表活動 W 最多可延遲 7 天,而不會影響專案整體完工日期。",
  },
  {
    id: "sch-061",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each scenario to the type of dependency it best represents.",
      zh: "請將下列情境拖曳配對到其最符合的依賴關係類型。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Mandatory Dependency",
            zh: "強制性依賴(Mandatory)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Discretionary Dependency",
            zh: "選擇性依賴(Discretionary)",
          },
        },
        {
          id: "p3",
          text: {
            en: "External Dependency",
            zh: "外部依賴(External)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Internal Dependency",
            zh: "內部依賴(Internal)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "User acceptance testing cannot start until the software build is compiled, due to the inherent nature of the work",
            zh: "使用者驗收測試必須等軟體建置編譯完成後才能開始,這是工作本質固有的限制",
          },
        },
        {
          id: "c2",
          text: {
            en: "The team chooses to complete all backend API development before starting frontend integration, based on organizational best practice, even though the two could technically be done in parallel",
            zh: "團隊依組織最佳實務,選擇先完成所有後端 API 開發再進行前端整合,儘管技術上兩者可以並行",
          },
        },
        {
          id: "c3",
          text: {
            en: "A hardware installation activity must wait for a customs clearance certificate issued by a foreign government trade office",
            zh: "硬體安裝活動必須等待外國政府貿易機關核發的海關通關證明",
          },
        },
        {
          id: "c4",
          text: {
            en: "The QA lead decides that code review must finish before regression testing begins — an order fully within the project team's control",
            zh: "QA 主管決定程式碼審查必須先完成才能開始回歸測試——此順序完全由專案團隊自行掌控",
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
    explanation: "四種依賴關係的判斷關鍵在於「限制的來源」:強制性依賴來自工作本質或合約的實體限制;選擇性依賴是團隊基於最佳實務的偏好選擇,理論上可調整;外部依賴來自組織外部、團隊無法控制的因素(如政府核准);內部依賴則是團隊可自行決定、可控制的順序安排,四者常在情境題中容易混淆,須仔細分辨限制究竟來自何處、是否可協商。",
  },
  {
    id: "sch-062",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a network: Start is followed by Design Spec, then Core Build, which then splits into two final deliverables that do NOT reconverge — User Manual and Regression Test Suite. The project is considered complete only when both final deliverables are finished. Design Spec takes 6 days, Core Build takes 9 days, User Manual takes 4 days, and Regression Test Suite takes 8 days. Click the task that has Total Float (i.e., is NOT on the Critical Path).",
      zh: "下圖網路中,Start 之後接續 Design Spec,再接續 Core Build,Core Build 之後分成兩項「不會再匯流」的最終交付物——User Manual 與 Regression Test Suite。專案須等兩項最終交付物皆完成才算結束。Design Spec 需時 6 天、Core Build 需時 9 天、User Manual 需時 4 天、Regression Test Suite 需時 8 天。請點選「有總浮時(Total Float)」、也就是不在要徑(Critical Path)上的任務。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start (0 days)",
          zh: "Start(0天)",
        },
        x: 5,
        y: 45,
        width: 16,
        height: 18,
      },
      {
        id: "n2",
        label: {
          en: "Design Spec (6 days)",
          zh: "Design Spec(6天)",
        },
        x: 25,
        y: 45,
        width: 18,
        height: 18,
      },
      {
        id: "n3",
        label: {
          en: "Core Build (9 days)",
          zh: "Core Build(9天)",
        },
        x: 47,
        y: 45,
        width: 18,
        height: 18,
      },
      {
        id: "n4",
        label: {
          en: "User Manual (4 days)",
          zh: "User Manual(4天)",
        },
        x: 72,
        y: 15,
        width: 20,
        height: 18,
      },
      {
        id: "n5",
        label: {
          en: "Regression Test Suite (8 days)",
          zh: "Regression Test Suite(8天)",
        },
        x: 72,
        y: 70,
        width: 22,
        height: 18,
      },
    ],
    correctAnswer: "n4",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n3",
        to: "n5",
      },
    ],
    explanation: "兩條路徑在 Core Build 之後各自獨立收尾,不再匯流:路徑一 Start→Design Spec→Core Build→User Manual = 0+6+9+4 = 19 天;路徑二 Start→Design Spec→Core Build→Regression Test Suite = 0+6+9+8 = 23 天,較長,為要徑。由於專案要等兩項交付物都完成才算結束,完工日取決於「較晚完成」的那一條路徑,故 Start、Design Spec、Core Build、Regression Test Suite 皆為總浮時 0 的要徑節點;User Manual 的總浮時 = 23−19 = 4 天,是唯一不在要徑上的任務,故答案為 (n4)。本題示範了「終點不匯流、各自獨立收尾」的網路結構,與常見的菱形匯流圖不同。",
  },
  {
    id: "sch-063",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Several activities across two different workstreams all require the same limited testing device. The PM identifies the resource-constrained longest path through the network (considering both logical dependencies AND resource availability), and protects the project finish date by inserting a single buffer at the end of this path, rather than adding individual safety margins to each activity along it. What technique is being applied?",
      zh: "兩條不同工作流中的多項活動都需要同一台有限的測試設備。專案經理找出同時考量邏輯相依性「與」資源可用性後的資源受限最長路徑,並在此路徑末端插入單一緩衝來保護專案完工日,而非在路徑上每個活動各自加入安全邊際。這是採用哪一種技術?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Critical Path Method (CPM)",
          zh: "要徑法(CPM)",
        },
      },
      {
        id: "b",
        text: {
          en: "Critical Chain Method",
          zh: "要徑鏈法(Critical Chain Method)",
        },
      },
      {
        id: "c",
        text: {
          en: "Resource Smoothing",
          zh: "資源平準(Resource Smoothing)",
        },
      },
      {
        id: "d",
        text: {
          en: "Fast Tracking",
          zh: "快速跟進(Fast Tracking)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "要徑鏈法(Critical Chain Method)在 CPM 的邏輯基礎上,額外考慮資源限制,找出「資源受限的最長路徑(Critical Chain)」,並在鏈的末端插入集中的緩衝(Project Buffer)來保護完工日,而非讓每個活動各自預留安全時間(容易因學生症候群而被浪費),與本題描述完全吻合,故答案為 (b)。CPM 只考慮邏輯與工期,不考慮資源限制;資源平準只在浮時範圍內微調且不使用緩衝概念;快速跟進是改變活動順序的壓縮技術,皆與本題描述不符。",
  },
  {
    id: "sch-064",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Which two statements correctly explain why the Critical Chain Method uses shared buffers instead of relying on individual safety margins added to each activity? Select two.",
      zh: "關於要徑鏈法(Critical Chain Method)為何使用共用緩衝、而非仰賴在每個活動中各自加入安全邊際,下列哪兩項敘述正確?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "When individual activities each carry hidden safety margins, team members often delay starting work until close to the deadline (Student Syndrome), consuming the safety margin without producing an earlier finish",
          zh: "當每個活動各自隱藏安全邊際時,團隊成員常會拖到接近截止日才開始動工(學生症候群),把安全邊際耗盡卻沒有提早完成",
        },
      },
      {
        id: "b",
        text: {
          en: "Work also tends to expand to fill the time available (Parkinson's Law), so individual safety margins are frequently wasted rather than banked as schedule gains",
          zh: "工作也傾向填滿可用的時間(帕金森定律),因此個別的安全邊際經常被浪費,而非轉化為時程上的實質獲益",
        },
      },
      {
        id: "c",
        text: {
          en: "Individual safety margins on each activity always produce a shorter overall project duration than a single shared buffer",
          zh: "每個活動各自的安全邊際,總是能比單一共用緩衝產生更短的專案總工期",
        },
      },
      {
        id: "d",
        text: {
          en: "Using a shared buffer guarantees that every individual activity will now finish ahead of its own estimate",
          zh: "使用共用緩衝能保證每一項個別活動現在都會提前完成",
        },
      },
      {
        id: "e",
        text: {
          en: "Parkinson's Law and Student Syndrome only occur in agile projects and never in predictive projects",
          zh: "帕金森定律與學生症候群只會發生在敏捷專案中,絕不會出現在預測型專案",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "學生症候群(Student Syndrome)指人們傾向拖到最後期限逼近才開始全力投入,個別安全邊際因此常被無謂消耗,故 (a) 正確;帕金森定律(Parkinson's Law)指工作會膨脹填滿所分配到的全部時間,即使提早也不會提早完成,故 (b) 正確。這兩個行為現象正是要徑鏈法選擇「集中緩衝」而非「個別安全邊際」的核心理由。(c)(d) 描述與要徑鏈法的實證邏輯相反;(e) 錯誤,這兩種人性行為現象不限於敏捷或預測型專案,是普遍存在的人類行為傾向。",
  },
  {
    id: "sch-065",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Schedule",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each schedule presentation format to the description that best fits it.",
      zh: "請將下列時程呈現格式拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Bar (Gantt) Chart",
            zh: "甘特圖(Bar Chart)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Milestone Chart",
            zh: "里程碑圖(Milestone Chart)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Project Schedule Network Diagram",
            zh: "專案時程網路圖",
          },
        },
        {
          id: "p4",
          text: {
            en: "Time-Scaled Logic Diagram",
            zh: "時間刻度邏輯圖",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Shows each activity as a horizontal bar plotted against calendar time; easy to read progress but does not emphasize logical dependencies well",
            zh: "以水平長條對照日曆時間呈現每項活動;容易讀取進度,但不太能凸顯邏輯相依關係",
          },
        },
        {
          id: "c2",
          text: {
            en: "Shows only major checkpoints with planned and actual dates, useful for concise reporting to executives and sponsors",
            zh: "只顯示主要檢核點的計畫與實際日期,適合向高階主管與贊助人做簡潔報告",
          },
        },
        {
          id: "c3",
          text: {
            en: "Shows the logical sequence and dependencies among activities, typically using boxes (nodes) and connecting arrows",
            zh: "以方框(節點)與連接箭頭呈現活動之間的邏輯順序與相依關係",
          },
        },
        {
          id: "c4",
          text: {
            en: "Combines network logic with a calendar time scale, so the length of each activity bar is proportional to its duration",
            zh: "將網路邏輯與日曆時間刻度結合,使每個活動長條的長度與其工期成正比",
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
    explanation: "甘特圖直觀易讀但較弱於呈現相依關係;里程碑圖精簡扼要,適合對高階利害關係人溝通重大時間點;專案時程網路圖清楚呈現邏輯相依但不一定按比例呈現時間長短;時間刻度邏輯圖則結合兩者優點,兼顧邏輯關係與時間比例,四種格式適用於不同的溝通對象與目的,是專案經理依受眾裁適(Tailoring)報告方式的重要工具。",
  },
  {
    id: "sch-066",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Activity R has a Total Float of 9 days and a Free Float of 3 days. This means Activity R can be delayed by up to {{blank1}} days without delaying the project's overall finish date, but only up to {{blank2}} days without delaying the early start of its immediate successor activity.",
      zh: "活動 R 的總浮時(Total Float)為 9 天,自由浮時(Free Float)為 3 天。這代表活動 R 最多可延遲 {{blank1}} 天而不會影響專案整體完工日,但最多只能延遲 {{blank2}} 天而不會影響其後續活動的最早開始時間。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "3",
              zh: "3",
            },
          },
          {
            id: "b",
            text: {
              en: "6",
              zh: "6",
            },
          },
          {
            id: "c",
            text: {
              en: "9",
              zh: "9",
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
              en: "3",
              zh: "3",
            },
          },
          {
            id: "b",
            text: {
              en: "6",
              zh: "6",
            },
          },
          {
            id: "c",
            text: {
              en: "9",
              zh: "9",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "c",
      blank2: "a",
    },
    explanation: "總浮時(Total Float)= 9 天,代表活動 R 相對於「專案整體完工日」最多可延遲的時間,對應 blank1 = 9。自由浮時(Free Float)= 3 天,代表活動 R 相對於「下一個活動最早開始時間」最多可延遲的時間,對應 blank2 = 3。由於自由浮時只考慮下一個活動、範圍較小,總浮時考慮整個專案完工日、範圍較大,故自由浮時恆小於或等於總浮時,本題 3 ≤ 9 的關係也符合此一般性原則。",
  },
  {
    id: "sch-067",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which of the following is an output of the Monitor and Control Schedule process, used to compare actual progress against the schedule baseline and predict future schedule performance?",
      zh: "下列何者是監控時程(Monitor and Control Schedule)流程的輸出,用來比對實際進度與時程基準,並預測未來的時程績效?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Schedule Forecasts",
          zh: "時程預測(Schedule Forecasts)",
        },
      },
      {
        id: "b",
        text: {
          en: "Activity List",
          zh: "活動清單(Activity List)",
        },
      },
      {
        id: "c",
        text: {
          en: "Resource Calendars",
          zh: "資源日曆(Resource Calendars)",
        },
      },
      {
        id: "d",
        text: {
          en: "Project Charter",
          zh: "專案章程(Project Charter)",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "監控時程(Monitor and Control Schedule)以工作績效資料、時程基準等作為輸入,比對實際進度與基準的落差,產出時程預測(Schedule Forecasts,如預估完工日期)、工作績效資訊、變更請求等,協助團隊及早發現偏差並採取修正行動,故答案為 (a)。活動清單、資源日曆與專案章程分別屬於規劃前期或更早流程的產出,並非監控時程流程的輸出。",
  },
  {
    id: "sch-068",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Schedule",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "SPI has dropped to 0.80 for two consecutive reporting periods. The client relationship is already tense due to a prior scope disagreement, and the client team tends to react defensively whenever schedule issues come up. Select two appropriate actions for the PM to take.",
      zh: "SPI 已連續兩期下滑至 0.80。客戶關係已因先前的範疇爭議而處於緊張狀態,每當提及時程問題,客戶團隊往往會出現防衛性反應。請選擇專案經理應採取的兩項適當行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Prepare transparent, data-based schedule forecasts and proactively schedule a calm, solution-focused conversation with the client to discuss root causes and options",
          zh: "準備透明、以數據為基礎的時程預測,主動安排一場冷靜、聚焦於解決方案的對話,與客戶討論根本原因與可行選項",
        },
      },
      {
        id: "b",
        text: {
          en: "Analyze whether the delay stems from resource constraints, estimation errors, or dependency issues before proposing a recovery plan",
          zh: "在提出復原計畫前,先分析延遲的根本原因是資源限制、估算錯誤還是相依性問題",
        },
      },
      {
        id: "c",
        text: {
          en: "Avoid mentioning the SPI figures to the client until the situation improves on its own",
          zh: "在情況自行好轉之前,避免向客戶提及 SPI 數字",
        },
      },
      {
        id: "d",
        text: {
          en: "Blame the client's earlier scope-change requests as the sole cause during the next status meeting",
          zh: "在下次狀態會議中,將延遲完全歸咎於客戶先前的範疇變更要求",
        },
      },
      {
        id: "e",
        text: {
          en: "Unilaterally extend the schedule baseline without client approval to hide the variance",
          zh: "未經客戶核准,單方面延長時程基準以掩蓋績效差異",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "面對緊繃的客戶關係與連續下滑的時程績效,專案經理應優先以透明數據主動溝通,並在提出解方前先釐清延遲的根本原因(資源、估算或相依性問題),故 (a)(b) 正確。隱瞞績效數字、片面指責客戶或未經核准擅自更動基準,都會進一步破壞信任、違反專業責任與利害關係人溝通的核心原則,故 (c)(d)(e) 皆為不適當的做法。",
  },
  {
    id: "sch-069",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below shows a network with Start followed by three parallel tasks — UX Design, Backend Dev, and QA Prep — which all merge into Merge. Start takes 1 day, UX Design takes 6 days, Backend Dev takes 11 days, QA Prep takes 4 days, and Merge takes 3 days. Among the three parallel tasks, click the one with the SMALLEST Total Float that is still greater than zero (i.e., excluding the one on the Critical Path).",
      zh: "下圖網路中,Start 之後分為三條並行任務——UX Design、Backend Dev、QA Prep,三者完成後皆匯流至 Merge。Start 需時 1 天、UX Design 需時 6 天、Backend Dev 需時 11 天、QA Prep 需時 4 天、Merge 需時 3 天。在三條並行任務中,請點選「總浮時大於零、且數值最小」的任務(即排除位於要徑上的那一項)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start (1 day)",
          zh: "Start(1天)",
        },
        x: 5,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "UX Design (6 days)",
          zh: "UX Design(6天)",
        },
        x: 30,
        y: 5,
        width: 18,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Backend Dev (11 days)",
          zh: "Backend Dev(11天)",
        },
        x: 30,
        y: 40,
        width: 18,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "QA Prep (4 days)",
          zh: "QA Prep(4天)",
        },
        x: 30,
        y: 75,
        width: 18,
        height: 20,
      },
      {
        id: "n5",
        label: {
          en: "Merge (3 days)",
          zh: "Merge(3天)",
        },
        x: 60,
        y: 40,
        width: 18,
        height: 20,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n1",
        to: "n4",
      },
      {
        from: "n2",
        to: "n5",
      },
      {
        from: "n3",
        to: "n5",
      },
      {
        from: "n4",
        to: "n5",
      },
    ],
    explanation: "三條路徑:Start→UX Design→Merge = 1+6+3 = 10 天;Start→Backend Dev→Merge = 1+11+3 = 15 天,最長,為要徑;Start→QA Prep→Merge = 1+4+3 = 8 天。UX Design 的總浮時 = 15−10 = 5 天;QA Prep 的總浮時 = 15−8 = 7 天。在兩條非要徑的並行任務中,UX Design 的總浮時(5 天)小於 QA Prep(7 天),故「大於零且數值最小」的任務是 UX Design,答案為 (n2)。本題刻意反轉常見的「找最大浮時」問法,測試考生是否能仔細比較多條路徑的浮時大小,而非只找出要徑。",
  },
  {
    id: "sch-070",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Schedule",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project schedule is drawn so that the network logic (activity boxes and dependency arrows) is laid out against a calendar time scale, with the length of each activity's box proportional to its duration — allowing both logical relationships and durations to be read visually at once. What is this schedule presentation format called?",
      zh: "某專案時程圖的繪製方式,是將網路邏輯(活動方框與相依箭頭)對照日曆時間刻度排列,且每個活動方框的長度與其工期成正比——讓邏輯關係與工期長短能同時以視覺方式呈現。這種時程呈現格式稱為什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Milestone Chart",
          zh: "里程碑圖(Milestone Chart)",
        },
      },
      {
        id: "b",
        text: {
          en: "Time-Scaled Logic Diagram",
          zh: "時間刻度邏輯圖(Time-Scaled Logic Diagram)",
        },
      },
      {
        id: "c",
        text: {
          en: "Resource Histogram",
          zh: "資源直方圖(Resource Histogram)",
        },
      },
      {
        id: "d",
        text: {
          en: "Control Chart",
          zh: "管制圖(Control Chart)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "時間刻度邏輯圖(Time-Scaled Logic Diagram)結合了網路圖的邏輯相依關係與甘特圖的時間比例呈現方式,活動方框長度對應其工期,同時保留箭頭表示的相依關係,兼具兩種呈現法的優點,故答案為 (b)。里程碑圖只標示重要時間點,不呈現活動工期或相依關係;資源直方圖呈現的是資源負荷而非時程邏輯;管制圖則是品質管理中用於監控製程穩定性的工具,與時程呈現無關。",
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
    id: "fin-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $60,000, EV = $54,000, and AC = $50,000 at the status date. What is the Cost Performance Index (CPI)?",
      zh: "某專案於狀態日的 PV(計畫值)= $60,000、EV(實獲值)= $54,000、AC(實際成本)= $50,000。請問成本績效指標(CPI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "0.90",
          zh: "0.90",
        },
      },
      {
        id: "b",
        text: {
          en: "1.20",
          zh: "1.20",
        },
      },
      {
        id: "c",
        text: {
          en: "1.08",
          zh: "1.08",
        },
      },
      {
        id: "d",
        text: {
          en: "0.83",
          zh: "0.83",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "CPI = EV / AC = 54,000 / 50,000 = 1.08。CPI > 1 表示每花費 1 元實際成本,獲得超過 1 元的實獲值,成本績效優於預算。",
  },
  {
    id: "fin-002",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $80,000, EV = $68,000, and AC = $72,000. What is the Schedule Performance Index (SPI)?",
      zh: "某專案 PV(計畫值)= $80,000、EV(實獲值)= $68,000、AC(實際成本)= $72,000。請問時程績效指標(SPI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "0.85",
          zh: "0.85",
        },
      },
      {
        id: "b",
        text: {
          en: "0.94",
          zh: "0.94",
        },
      },
      {
        id: "c",
        text: {
          en: "1.18",
          zh: "1.18",
        },
      },
      {
        id: "d",
        text: {
          en: "1.06",
          zh: "1.06",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "SPI = EV / PV = 68,000 / 80,000 = 0.85。SPI < 1 表示截至目前實際完成的工作價值低於計畫應完成的工作價值,專案進度落後於計畫。",
  },
  {
    id: "fin-003",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $120,000, EV = $100,000, and AC = $115,000. What is the Cost Variance (CV), and what does it indicate?",
      zh: "某專案 PV(計畫值)= $120,000、EV(實獲值)= $100,000、AC(實際成本)= $115,000。請問成本變異(CV)為何,代表什麼意義?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "CV = +$15,000,專案低於預算(under budget)",
          zh: "CV = +$15,000,專案低於預算(under budget)",
        },
      },
      {
        id: "b",
        text: {
          en: "CV = −$15,000,專案超出預算(over budget)",
          zh: "CV = −$15,000,專案超出預算(over budget)",
        },
      },
      {
        id: "c",
        text: {
          en: "CV = −$20,000,專案超出預算(over budget)",
          zh: "CV = −$20,000,專案超出預算(over budget)",
        },
      },
      {
        id: "d",
        text: {
          en: "CV = +$5,000,專案低於預算(under budget)",
          zh: "CV = +$5,000,專案低於預算(under budget)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "CV = EV − AC = 100,000 − 115,000 = −15,000。CV 為負值表示實際花費(AC)超過已完成工作的價值(EV),即專案目前超出預算。",
  },
  {
    id: "fin-004",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Among the following EVM metrics, which two are expressed as performance indices (ratios), rather than absolute dollar variances? Select two.",
      zh: "下列 EVM 指標中,哪兩項是以「績效指數(比值)」而非「絕對金額差異」表示?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "CV(Cost Variance,成本變異)",
          zh: "CV(成本變異)",
        },
      },
      {
        id: "b",
        text: {
          en: "SV(Schedule Variance,時程變異)",
          zh: "SV(時程變異)",
        },
      },
      {
        id: "c",
        text: {
          en: "CPI(Cost Performance Index,成本績效指標)",
          zh: "CPI(成本績效指標)",
        },
      },
      {
        id: "d",
        text: {
          en: "SPI(Schedule Performance Index,時程績效指標)",
          zh: "SPI(時程績效指標)",
        },
      },
      {
        id: "e",
        text: {
          en: "VAC(Variance at Completion,完工變異)",
          zh: "VAC(完工變異)",
        },
      },
    ],
    correctAnswer: [
      "c",
      "d",
    ],
    selectCount: 2,
    explanation: "CPI = EV/AC、SPI = EV/PV,兩者皆為「比值」,以 1 為基準判斷績效優劣(>1 佳、<1 差)。CV、SV、VAC 則皆為「差值」,以正負號判斷優劣(正值好、負值差),單位是金額而非比值。",
  },
  {
    id: "fin-005",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $500,000. At the status date, EV = $160,000 and AC = $200,000. Assuming the current cost performance trend continues for the remainder of the project, what is the Estimate at Completion (EAC)?",
      zh: "某專案 BAC(完工預算)= $500,000。於狀態日,EV(實獲值)= $160,000、AC(實際成本)= $200,000。假設目前的成本績效趨勢在專案剩餘期間持續不變,請問完工估算(EAC)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$525,000",
          zh: "$525,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$560,000",
          zh: "$560,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$625,000",
          zh: "$625,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$700,000",
          zh: "$700,000",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "先求 CPI = EV / AC = 160,000 / 200,000 = 0.8。EAC = BAC / CPI = 500,000 / 0.8 = 625,000。此公式假設「未來績效與目前績效一致」,是最常見的 EAC 計算情境。",
  },
  {
    id: "fin-006",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The cost management plan defines two types of reserves. The reserve intended to cover identified ({{blank1}}) risks is included within the Cost Baseline and can typically be used at the project manager's own discretion. The reserve intended to cover unidentified ({{blank2}}) risks lies outside the Cost Baseline and requires approval from the sponsor or higher-level management before it can be used.",
      zh: "成本管理計畫定義了兩種準備金。用來因應已識別({{blank1}})風險的準備金包含在成本基準(Cost Baseline)內,通常由專案經理自行決定動用;用來因應未識別({{blank2}})風險的準備金則在成本基準之外,須經贊助人或更高階管理層核准後才能動用。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "known-unknown(已知的未知)",
              zh: "已知的未知(known-unknown)",
            },
          },
          {
            id: "b",
            text: {
              en: "unknown-unknown(未知的未知)",
              zh: "未知的未知(unknown-unknown)",
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
              en: "known-unknown(已知的未知)",
              zh: "已知的未知(known-unknown)",
            },
          },
          {
            id: "b",
            text: {
              en: "unknown-unknown(未知的未知)",
              zh: "未知的未知(unknown-unknown)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "Contingency Reserve(應變準備金)因應 Known-Unknown(已識別風險),包含在 Cost Baseline 內,PM 可自行動用;Management Reserve(管理準備金)因應 Unknown-Unknown(未識別風險),不包含在 Cost Baseline 內,需 Sponsor 核准才能動用。",
  },
  {
    id: "fin-007",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $300,000. At the status date, EV = $90,000 and AC = $100,000. Assuming the current cost performance continues, what is the Estimate to Complete (ETC)? Round to the nearest dollar.",
      zh: "某專案 BAC(完工預算)= $300,000。於狀態日,EV(實獲值)= $90,000、AC(實際成本)= $100,000。假設目前成本績效持續不變,請問尚須完成估算(ETC)為何?(四捨五入至整數)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$200,000",
          zh: "$200,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$233,333",
          zh: "$233,333",
        },
      },
      {
        id: "c",
        text: {
          en: "$300,000",
          zh: "$300,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$166,667",
          zh: "$166,667",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "CPI = EV/AC = 90,000/100,000 = 0.9。EAC = BAC/CPI = 300,000/0.9 = 333,333(四捨五入)。ETC = EAC − AC = 333,333 − 100,000 = 233,333。",
  },
  {
    id: "fin-008",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each EVM term to its correct formula.",
      zh: "請將下列 EVM 名詞拖曳配對到正確的公式。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "CV(Cost Variance,成本變異)",
            zh: "CV(Cost Variance,成本變異)",
          },
        },
        {
          id: "p2",
          text: {
            en: "SV(Schedule Variance,時程變異)",
            zh: "SV(Schedule Variance,時程變異)",
          },
        },
        {
          id: "p3",
          text: {
            en: "CPI(Cost Performance Index,成本績效指標)",
            zh: "CPI(Cost Performance Index,成本績效指標)",
          },
        },
        {
          id: "p4",
          text: {
            en: "SPI(Schedule Performance Index,時程績效指標)",
            zh: "SPI(Schedule Performance Index,時程績效指標)",
          },
        },
        {
          id: "p5",
          text: {
            en: "TCPI(To-Complete Performance Index,完工尚須績效指標)",
            zh: "TCPI(To-Complete Performance Index,完工尚須績效指標)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "EV − AC",
            zh: "EV − AC",
          },
        },
        {
          id: "c2",
          text: {
            en: "EV − PV",
            zh: "EV − PV",
          },
        },
        {
          id: "c3",
          text: {
            en: "EV",
            zh: "AC",
          },
        },
        {
          id: "c4",
          text: {
            en: "EV",
            zh: "PV",
          },
        },
        {
          id: "c5",
          text: {
            en: "(BAC − EV)",
            zh: "(BAC − AC)",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "EVM 公式體系以 PV、EV、AC 三個基礎值為核心:差值型指標 CV = EV−AC、SV = EV−PV;比值型指標 CPI = EV/AC、SPI = EV/PV;而 TCPI = (BAC−EV)/(BAC−AC) 則表示在剩餘預算下,剩餘工作須達到的效率水準才能如期在 BAC 內完工。",
  },
  {
    id: "fin-009",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project's BAC is $400,000. Based on current performance trends, the forecasted Estimate at Completion (EAC) is $460,000. The sponsor wants to know whether the project will still deliver within its approved business case tolerance. What is the Variance at Completion (VAC), and what does it imply for the business case?",
      zh: "某專案 BAC(完工預算)= $400,000。根據目前績效趨勢,預測的完工估算(EAC)為 $460,000。贊助人想了解專案是否仍能在核准的商業論證容忍範圍內完成。請問完工變異(VAC)為何?這對商業論證代表什麼意義?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "VAC = +$60,000,專案預期將低於預算完成,商業論證的預期效益不受影響",
          zh: "VAC = +$60,000,專案預期將低於預算完成,商業論證的預期效益不受影響",
        },
      },
      {
        id: "b",
        text: {
          en: "VAC = −$60,000,專案預期將超支完成,可能需要重新檢視商業論證的成本效益假設",
          zh: "VAC = −$60,000,專案預期將超支完成,可能需要重新檢視商業論證的成本效益假設",
        },
      },
      {
        id: "c",
        text: {
          en: "VAC = −$60,000,專案預期將提前完成",
          zh: "VAC = −$60,000,專案預期將提前完成",
        },
      },
      {
        id: "d",
        text: {
          en: "VAC = +$60,000,專案預期將超支完成",
          zh: "VAC = +$60,000,專案預期將超支完成",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "VAC = BAC − EAC = 400,000 − 460,000 = −60,000。VAC 為負值表示專案完工時預期將超出原始核准預算 60,000 元,贊助人應評估此超支是否仍在商業論證(Business Case)可接受的效益容忍範圍內,必要時提出正式變更請求或重新核准預算。",
  },
  {
    id: "fin-010",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $200,000, EV = $170,000, and AC = $150,000. Select the two statements that correctly describe the project's current status. Select two.",
      zh: "某專案 PV(計畫值)= $200,000、EV(實獲值)= $170,000、AC(實際成本)= $150,000。請選出兩項正確描述專案目前狀態的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project is currently under budget (CPI ≈ 1.13 > 1).",
          zh: "專案目前低於預算(CPI ≈ 1.13 > 1)。",
        },
      },
      {
        id: "b",
        text: {
          en: "The project is currently ahead of schedule (SPI > 1).",
          zh: "專案目前進度超前(SPI > 1)。",
        },
      },
      {
        id: "c",
        text: {
          en: "The project is currently behind schedule (SPI = 0.85 < 1).",
          zh: "專案目前進度落後(SPI = 0.85 < 1)。",
        },
      },
      {
        id: "d",
        text: {
          en: "The project is currently over budget (CPI < 1).",
          zh: "專案目前超出預算(CPI < 1)。",
        },
      },
      {
        id: "e",
        text: {
          en: "Both cost and schedule performance are exactly on plan.",
          zh: "成本與時程績效皆完全符合計畫。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "CPI = EV/AC = 170,000/150,000 ≈ 1.13(>1,低於預算、成本效率佳);SPI = EV/PV = 170,000/200,000 = 0.85(<1,進度落後於計畫)。此為常見的「省錢但落後」情境,常發生於資源不足或人力短缺時。",
  },
  {
    id: "fin-011",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Click the term that equals the Cost Baseline plus the Management Reserve.",
      zh: "請點選「等於成本基準(Cost Baseline)加上管理準備金(Management Reserve)」的名詞。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Cost Baseline",
          zh: "成本基準(Cost Baseline)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Contingency Reserve",
          zh: "應變準備金(Contingency Reserve)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Management Reserve",
          zh: "管理準備金(Management Reserve)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Project Budget",
          zh: "專案預算(Project Budget)",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n4",
    explanation: "Cost Baseline(成本基準)= 各工作包成本估算加總 + Contingency Reserve(應變準備金);Project Budget(專案預算)= Cost Baseline + Management Reserve(管理準備金)。因此專案預算是包含管理準備金在內的最終總金額,是財務層級關係中最上層的數字。",
  },
  {
    id: "fin-012",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $250,000. At the status date, EV = $100,000 and AC = $120,000. Assuming the project must still finish within the original BAC, what is the To-Complete Performance Index (TCPI)?",
      zh: "某專案 BAC(完工預算)= $250,000。於狀態日,EV(實獲值)= $100,000、AC(實際成本)= $120,000。假設專案仍須在原始 BAC 內完工,請問完工尚須績效指標(TCPI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "0.87",
          zh: "0.87",
        },
      },
      {
        id: "b",
        text: {
          en: "1.00",
          zh: "1.00",
        },
      },
      {
        id: "c",
        text: {
          en: "1.15",
          zh: "1.15",
        },
      },
      {
        id: "d",
        text: {
          en: "1.30",
          zh: "1.30",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "TCPI = (BAC − EV) / (BAC − AC) = (250,000 − 100,000) / (250,000 − 120,000) = 150,000 / 130,000 ≈ 1.15。TCPI > 1 表示剩餘工作必須以比目前更高的效率執行,才能在原訂 BAC 內完工。",
  },
  {
    id: "fin-013",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During execution, a risk that was already documented in the risk register occurs and causes extra cost. The project manager should draw funds from the {{blank1}} to cover it. Later, a completely unforeseen risk occurs that was never identified. Funding this additional cost requires approval from {{blank2}}.",
      zh: "執行期間,一項已記錄於風險登錄冊中的已知風險發生,造成額外成本。專案經理應動用 {{blank1}} 來因應。之後,一項完全未預期、從未被識別過的風險發生,因應此額外成本須取得 {{blank2}} 的核准。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "the Contingency Reserve(應變準備金)",
              zh: "應變準備金(Contingency Reserve)",
            },
          },
          {
            id: "b",
            text: {
              en: "the Management Reserve(管理準備金)",
              zh: "管理準備金(Management Reserve)",
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
              en: "the project team(專案團隊)",
              zh: "專案團隊(project team)",
            },
          },
          {
            id: "b",
            text: {
              en: "the sponsor or higher-level management(贊助人或更高階管理層)",
              zh: "贊助人或更高階管理層(sponsor or higher-level management)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "已知風險(Known-Unknown)發生時動用 Contingency Reserve(應變準備金),PM 可自行決定;完全未預期的風險(Unknown-Unknown)發生時須動用 Management Reserve(管理準備金),因其不在 Cost Baseline 內,須經 Sponsor 或更高階管理層核准才能動用。",
  },
  {
    id: "fin-014",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which cost estimating technique multiplies a unit cost (e.g., cost per hour, cost per square meter) by the quantity of work to derive a cost estimate?",
      zh: "哪一種成本估算技術是以「單位成本」(如每小時成本、每平方公尺成本)乘以「工作量」來推算成本估算?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Analogous Estimating(類比估算)",
          zh: "類比估算(Analogous Estimating)",
        },
      },
      {
        id: "b",
        text: {
          en: "Parametric Estimating(參數估算)",
          zh: "參數估算(Parametric Estimating)",
        },
      },
      {
        id: "c",
        text: {
          en: "Bottom-up Estimating(由下而上估算)",
          zh: "由下而上估算(Bottom-up Estimating)",
        },
      },
      {
        id: "d",
        text: {
          en: "Three-Point Estimating(三點估算)",
          zh: "三點估算(Three-Point Estimating)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Parametric Estimating(參數估算)運用歷史資料中的統計關係,以單位成本 × 數量計算成本估算,速度與精準度介於類比估算與由下而上估算之間。",
  },
  {
    id: "fin-015",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A proposed project's business case shows an implementation cost of $500,000 and expected lifecycle benefits of $900,000. Select the two statements that are correct based on this information. Select two.",
      zh: "某提案專案的商業論證顯示,實施成本為 $500,000,預期生命週期效益為 $900,000。請根據此資訊選出兩項正確的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The net benefit is $400,000.",
          zh: "淨效益為 $400,000。",
        },
      },
      {
        id: "b",
        text: {
          en: "The benefit-cost ratio (BCR) is approximately 1.8.",
          zh: "效益成本比(BCR)約為 1.8。",
        },
      },
      {
        id: "c",
        text: {
          en: "The return on investment (ROI) is negative.",
          zh: "投資報酬率(ROI)為負值。",
        },
      },
      {
        id: "d",
        text: {
          en: "The cost-benefit ratio is approximately 1.8.",
          zh: "成本效益比約為 1.8。",
        },
      },
      {
        id: "e",
        text: {
          en: "The project should be rejected because costs exceed benefits.",
          zh: "因成本超過效益,應否決此專案。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "淨效益 = 效益 − 成本 = 900,000 − 500,000 = 400,000。BCR(效益成本比)= 效益 / 成本 = 900,000 / 500,000 = 1.8(>1 表示效益大於成本,具財務可行性)。ROI = 淨效益 / 成本 = 400,000 / 500,000 = 0.8(80%,為正值);成本效益比(成本/效益)= 500,000/900,000 ≈ 0.56,並非 1.8,選項 (d) 為刻意混淆的誘答。",
  },
  {
    id: "fin-016",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $90,000, EV = $81,000, and AC = $90,000 at the status date. Which statement best describes the project's current status?",
      zh: "某專案於狀態日 PV(計畫值)= $90,000、EV(實獲值)= $81,000、AC(實際成本)= $90,000。下列何者最能描述專案目前的狀態?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project is under budget and ahead of schedule.",
          zh: "專案低於預算且進度超前。",
        },
      },
      {
        id: "b",
        text: {
          en: "The project is over budget and behind schedule (CPI = SPI = 0.9).",
          zh: "專案超出預算且進度落後(CPI = SPI = 0.9)。",
        },
      },
      {
        id: "c",
        text: {
          en: "The project is over budget but ahead of schedule.",
          zh: "專案超出預算但進度超前。",
        },
      },
      {
        id: "d",
        text: {
          en: "The project is exactly on budget and on schedule.",
          zh: "專案完全符合預算與時程計畫。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "CPI = EV/AC = 81,000/90,000 = 0.9;SPI = EV/PV = 81,000/90,000 = 0.9。CPI 與 SPI 皆小於 1,屬於「雙重落後」情境:CV = EV−AC = −9,000(超出預算),SV = EV−PV = −9,000(進度落後),成本與時程績效同時不佳。",
  },
  {
    id: "fin-017",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each cost estimating technique to its correct description.",
      zh: "請將下列成本估算技術拖曳配對到正確的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Analogous Estimating(類比估算)",
            zh: "Analogous Estimating(類比估算)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Parametric Estimating(參數估算)",
            zh: "Parametric Estimating(參數估算)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Bottom-up Estimating(由下而上估算)",
            zh: "Bottom-up Estimating(由下而上估算)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Three-Point Estimating(三點估算)",
            zh: "Three-Point Estimating(三點估算)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Uses cost data from a similar past project to quickly derive an estimate; fast but relatively low accuracy",
            zh: "利用過去類似專案的成本資料快速推算;速度快但精準度較低",
          },
        },
        {
          id: "c2",
          text: {
            en: "Uses a statistical relationship between historical data and other variables, such as unit cost × quantity",
            zh: "運用歷史資料間的統計關係推算,如單位成本 × 數量",
          },
        },
        {
          id: "c3",
          text: {
            en: "Estimates the cost of each individual work package and aggregates them into a total; high accuracy but time-consuming",
            zh: "針對各工作包分別估算後加總;精準度高但耗時較長",
          },
        },
        {
          id: "c4",
          text: {
            en: "Uses optimistic, most likely, and pessimistic cost estimates to calculate a weighted or average estimate",
            zh: "使用樂觀、最可能、悲觀三種成本估算值計算加權或平均估算值",
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
    explanation: "四種成本估算技術的精準度由低到高依序為 Analogous(類比)< Parametric(參數)< Bottom-up(由下而上),但所需時間與成本也依此遞增;Three-Point Estimating(三點估算)則是借用 PERT 概念,以三個估計值反映成本的不確定性區間。",
  },
  {
    id: "fin-018",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram shows how project financial components combine to form the overall Project Budget. Work Package Cost Estimates and the Contingency Reserve combine to form the Cost Baseline; the Cost Baseline and the Management Reserve then combine to form the Project Budget. Click the component that can only be accessed with the sponsor's (or higher-level management's) approval.",
      zh: "下圖顯示專案財務組成如何組合成最終的專案預算(Project Budget)。工作包成本估算與應變準備金(Contingency Reserve)組合成成本基準(Cost Baseline);成本基準再與管理準備金(Management Reserve)組合成專案預算。請點選「僅能在贊助人(或更高階管理層)核准後才能動用」的組成項目。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Work Package Cost Estimates",
          zh: "工作包成本估算",
        },
        x: 5,
        y: 15,
        width: 22,
        height: 18,
      },
      {
        id: "n2",
        label: {
          en: "Contingency Reserve",
          zh: "應變準備金",
        },
        x: 5,
        y: 60,
        width: 22,
        height: 18,
      },
      {
        id: "n3",
        label: {
          en: "Cost Baseline",
          zh: "成本基準",
        },
        x: 37,
        y: 38,
        width: 22,
        height: 18,
      },
      {
        id: "n4",
        label: {
          en: "Management Reserve",
          zh: "管理準備金",
        },
        x: 37,
        y: 80,
        width: 22,
        height: 18,
      },
      {
        id: "n5",
        label: {
          en: "Project Budget",
          zh: "專案預算",
        },
        x: 70,
        y: 55,
        width: 22,
        height: 18,
      },
    ],
    correctAnswer: "n4",
    edges: [
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n5",
      },
      {
        from: "n4",
        to: "n5",
      },
    ],
    explanation: "工作包成本估算加上應變準備金(因應已知風險 Known-Unknown)構成成本基準(Cost Baseline);成本基準再加上管理準備金(因應未知風險 Unknown-Unknown)構成專案預算(Project Budget)。管理準備金不包含在成本基準內,且須經贊助人或更高階管理層核准才能動用,是圖中唯一需要額外核准層級的組成項目。",
  },
  {
    id: "fin-019",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During budget planning, a functional manager disputes the hourly labor rate used in your bottom-up cost estimate and refuses to commit staff at that rate. You need the resources on schedule and want to preserve a good working relationship for future projects. What should you do first?",
      zh: "在預算規劃期間,一位職能經理對你在由下而上成本估算中使用的每小時人力費率有異議,拒絕以此費率承諾派遣人員。你需要準時取得這些資源,同時希望維持未來合作的良好關係。你應該先採取什麼行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Escalate immediately to the sponsor to force the functional manager to comply.",
          zh: "立即升級至贊助人,強迫職能經理配合。",
        },
      },
      {
        id: "b",
        text: {
          en: "Meet with the functional manager to understand the basis for the rate discrepancy and negotiate a mutually acceptable rate.",
          zh: "與職能經理會面,了解費率差異的原因,並協商雙方都能接受的費率。",
        },
      },
      {
        id: "c",
        text: {
          en: "Remove the disputed resource from the estimate without discussion.",
          zh: "未經討論即從估算中移除該項有爭議的資源。",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the objection and proceed with the original rate.",
          zh: "忽略異議,依原費率繼續進行。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "面對職能經理對費率的異議,PM 應先透過溝通與協商(negotiation)了解費率差異的根本原因,尋求雙方可接受的解決方案,而非立即升級或片面決定,這符合在財務規劃中與利害關係人協商預算、同時維護關係的原則。",
  },
  {
    id: "fin-020",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $150,000, EV = $135,000, and AC = $120,000 at the status date. The Cost Performance Index (CPI) is {{blank1}}, and the Schedule Performance Index (SPI) is {{blank2}}.",
      zh: "某專案於狀態日 PV(計畫值)= $150,000、EV(實獲值)= $135,000、AC(實際成本)= $120,000。成本績效指標(CPI)為 {{blank1}},時程績效指標(SPI)為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
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
              en: "0.90",
              zh: "0.90",
            },
          },
          {
            id: "d",
            text: {
              en: "1.11",
              zh: "1.11",
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
              en: "0.90",
              zh: "0.90",
            },
          },
          {
            id: "d",
            text: {
              en: "1.11",
              zh: "1.11",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "c",
    },
    explanation: "CPI = EV/AC = 135,000/120,000 = 1.125(>1,成本效率佳,低於預算);SPI = EV/PV = 135,000/150,000 = 0.9(<1,進度落後於計畫)。此為「省錢但落後」的常見情境組合。",
  },
  {
    id: "fin-021",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "At the project status date, a cumulative cost S-curve chart plots three lines: PV (planned budget), EV (earned value), and AC (actual cost). In this report, the AC line is plotted above both the PV line and the EV line. Click the line that indicates the project is currently over budget.",
      zh: "於專案狀態日,累積成本 S 曲線圖上繪製了三條線:PV(計畫預算)、EV(實獲值)、AC(實際成本)。在此報表中,AC 線繪製的位置高於 PV 線與 EV 線。請點選「代表專案目前超出預算」的曲線。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "PV line",
          zh: "PV 曲線(計畫值)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "EV line",
          zh: "EV 曲線(實獲值)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "AC line",
          zh: "AC 曲線(實際成本)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n3",
    explanation: "判斷是否超出預算應比較 AC 與 EV(而非 AC 與 PV):CV = EV − AC,若 AC 高於 EV,代表花費的實際成本超過已完成工作的價值,CV 為負值,即超出預算。AC 線位於 EV 線之上,正是超支的圖形化表現;PV 線僅代表原始計畫進度,並非判斷超支與否的比較基準。",
  },
  {
    id: "fin-022",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A proposed project requires an initial investment of $100,000. It is expected to generate cash inflows of $40,000 in Year 1, $50,000 in Year 2, and $60,000 in Year 3. Using a discount rate of 10%, what is the project's Net Present Value (NPV)? (Round to the nearest dollar.)",
      zh: "某提案專案需要 $100,000 的初始投資,預期第 1 年產生現金流入 $40,000、第 2 年 $50,000、第 3 年 $60,000。以 10% 折現率計算,此專案的淨現值(NPV)為何?(四捨五入至整數)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$22,765",
          zh: "$22,765",
        },
      },
      {
        id: "b",
        text: {
          en: "$50,000",
          zh: "$50,000",
        },
      },
      {
        id: "c",
        text: {
          en: "−$22,765",
          zh: "−$22,765",
        },
      },
      {
        id: "d",
        text: {
          en: "$122,765",
          zh: "$122,765",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "先將各年現金流折現至現值:Year1 = 40,000/1.1 ≈ 36,364;Year2 = 50,000/1.1² = 50,000/1.21 ≈ 41,322;Year3 = 60,000/1.1³ = 60,000/1.331 ≈ 45,079。三年折現值加總 ≈ 122,765。NPV = 折現值總和 − 初始投資 = 122,765 − 100,000 ≈ 22,765。NPV 為正值,代表此投資預期能為組織創造超過資金成本的價值,具財務可行性。選項 (b) 是誤將名目現金流加總後直接扣除投資(未折現);選項 (d) 是忘記扣除初始投資。",
  },
  {
    id: "fin-023",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project requires an initial investment of $200,000. Expected annual net cash inflows are: Year 1 = $60,000, Year 2 = $80,000, Year 3 = $90,000, Year 4 = $70,000. Using the (non-discounted) Payback Period method, how long will it take to recover the initial investment?",
      zh: "某專案需要 $200,000 的初始投資,預期各年淨現金流入為:第 1 年 $60,000、第 2 年 $80,000、第 3 年 $90,000、第 4 年 $70,000。以(未折現的)回收期法計算,需要多久才能回收初始投資?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "2.67 years",
          zh: "2.67 年",
        },
      },
      {
        id: "b",
        text: {
          en: "3.00 years",
          zh: "3.00 年",
        },
      },
      {
        id: "c",
        text: {
          en: "2.00 years",
          zh: "2.00 年",
        },
      },
      {
        id: "d",
        text: {
          en: "3.67 years",
          zh: "3.67 年",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "累積現金流:第 1 年末 = 60,000(尚缺 140,000);第 2 年末 = 60,000+80,000 = 140,000(尚缺 60,000);第 3 年現金流入 90,000,只需其中 60,000/90,000 ≈ 0.67 年即可補足缺口。回收期 = 2 + 0.67 ≈ 2.67 年。回收期法計算簡單、直覺,但未考慮貨幣的時間價值,也忽略回收期之後的現金流,因此常與 NPV、IRR 搭配使用而非單獨作為決策依據。",
  },
  {
    id: "fin-024",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Your organization's required rate of return (cost of capital / hurdle rate) is 8%. Project A has an Internal Rate of Return (IRR) of 15%, and Project B has an IRR of 6%. The two projects are independent (not mutually exclusive) and both are affordable. Based on the IRR decision rule, what should you recommend?",
      zh: "貴組織所要求的最低報酬率(資金成本 / 障礙率)為 8%。Project A 的內部報酬率(IRR)為 15%,Project B 的 IRR 為 6%。兩專案彼此獨立(非互斥)且皆在可負擔範圍內。根據 IRR 決策原則,你應該建議什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Accept both Project A and Project B, since both generate a positive return.",
          zh: "兩者皆接受,因為兩者報酬率皆為正值。",
        },
      },
      {
        id: "b",
        text: {
          en: "Accept Project A only, because its IRR (15%) exceeds the hurdle rate; reject Project B, because its IRR (6%) is below the hurdle rate.",
          zh: "只接受 Project A,因其 IRR(15%)高於障礙率;拒絕 Project B,因其 IRR(6%)低於障礙率。",
        },
      },
      {
        id: "c",
        text: {
          en: "Accept Project B only, because a lower IRR indicates lower risk and is therefore preferable.",
          zh: "只接受 Project B,因為較低的 IRR 代表風險較低,故較為理想。",
        },
      },
      {
        id: "d",
        text: {
          en: "Reject both projects, because neither IRR exactly equals the hurdle rate.",
          zh: "兩者皆拒絕,因為兩者的 IRR 皆未剛好等於障礙率。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "IRR 決策原則:當 IRR 高於組織要求的最低報酬率(障礙率/資金成本)時,該投資的預期報酬超過取得資金的成本,值得投資;IRR 低於障礙率則代表投資報酬不足以覆蓋資金成本,應拒絕。Project A 的 IRR(15%)> 8%,應接受;Project B 的 IRR(6%)< 8%,應拒絕。IRR 的高低反映預期報酬率而非風險高低,選項 (c) 的推論錯誤。",
  },
  {
    id: "fin-025",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $350,000. At the status date, EV = $70,000 and AC = $80,000. The team discovers that a major technical assumption behind the original cost estimate was invalid, so the original estimating basis is no longer reliable for forecasting the remaining work. The team performs a fresh bottom-up estimate of the remaining work and determines that the Estimate to Complete (ETC) is $150,000. What is the Estimate at Completion (EAC)?",
      zh: "某專案 BAC(完工預算)= $350,000。於狀態日,EV(實獲值)= $70,000、AC(實際成本)= $80,000。團隊發現原始成本估算所依據的一項重大技術假設並不成立,原本的估算基礎已不再適用於預測剩餘工作。團隊針對剩餘工作重新進行由下而上估算,得出尚須完成估算(ETC)為 $150,000。請問完工估算(EAC)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$230,000",
          zh: "$230,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$400,000",
          zh: "$400,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$360,000",
          zh: "$360,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$350,000",
          zh: "$350,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "當原始估算的假設已不再有效時,不應再套用「假設績效延續」的 EAC = BAC/CPI 公式,而應採用 Bottom-up ETC:EAC = AC + Bottom-up ETC = 80,000 + 150,000 = 230,000。選項 (b) 為誤用標準公式 BAC/CPI(= 350,000 ÷ (70,000/80,000) = 400,000);選項 (c) 為誤用「績效恢復正常」公式 AC+(BAC−EV)(= 80,000+280,000 = 360,000),這兩者都假設過去的績效模式仍具參考價值,不適用於本題「原估算基礎已失效」的情境。",
  },
  {
    id: "fin-026",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "A project required a total investment of $250,000 and generated a net profit (benefit minus cost) of $75,000. What is the Return on Investment (ROI)?",
      zh: "某專案總投資為 $250,000,產生淨利(效益減成本)為 $75,000。請問投資報酬率(ROI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "30%",
          zh: "30%",
        },
      },
      {
        id: "b",
        text: {
          en: "25%",
          zh: "25%",
        },
      },
      {
        id: "c",
        text: {
          en: "33%",
          zh: "33%",
        },
      },
      {
        id: "d",
        text: {
          en: "3.3%",
          zh: "3.3%",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "ROI = 淨利(Net Profit)/ 投資成本 = 75,000 / 250,000 = 0.30 = 30%。ROI 是衡量投資效率最基本的財務指標之一,常用於商業論證中比較不同方案的相對報酬率。",
  },
  {
    id: "fin-027",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Two mutually exclusive projects are being compared: Project X has an NPV of $50,000 and a Payback Period of 2 years; Project Y has an NPV of $80,000 and a Payback Period of 4 years. Select the two statements that are correct. Select two.",
      zh: "兩個互斥專案正在比較中:Project X 的 NPV 為 $50,000、回收期為 2 年;Project Y 的 NPV 為 $80,000、回收期為 4 年。請選出兩項正確的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Based on NPV, Project Y should be preferred because it is expected to create more value for the organization.",
          zh: "依 NPV 判斷,應優先選擇 Project Y,因其預期為組織創造較多價值。",
        },
      },
      {
        id: "b",
        text: {
          en: "Based on the Payback Period method alone, Project X appears more attractive because it recovers the initial investment faster.",
          zh: "若單以回收期法判斷,Project X 較具吸引力,因其能較快回收初始投資。",
        },
      },
      {
        id: "c",
        text: {
          en: "NPV and Payback Period will always recommend the same project.",
          zh: "NPV 與回收期法永遠會建議相同的專案。",
        },
      },
      {
        id: "d",
        text: {
          en: "A shorter payback period always indicates a more profitable project overall.",
          zh: "較短的回收期永遠代表整體獲利能力較高的專案。",
        },
      },
      {
        id: "e",
        text: {
          en: "IRR is measured in dollar terms, while NPV is expressed as a percentage.",
          zh: "IRR 是以金額表示,而 NPV 是以百分比表示。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "NPV 以貨幣金額衡量專案為組織創造的淨價值,數值越高越值得投資,故依 NPV 應選 Project Y。回收期法只衡量「多快回本」,不考慮回收期之後的現金流與貨幣時間價值,故依回收期法 Project X 看似較佳,但這不代表它整體獲利能力較高——兩種方法的結論可能不一致(選項 (c)(d) 為常見誤解)。實際上 IRR 是以百分比(報酬率)表示,NPV 才是以金額表示,選項 (e) 敘述相反。",
  },
  {
    id: "fin-028",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project incurs $20,000 per month in equipment lease payments regardless of production volume, and $15 per unit in raw material cost that scales directly with the number of units produced. The equipment lease payment is an example of a {{blank1}}; the raw material cost is an example of a {{blank2}}.",
      zh: "某專案每月產生 $20,000 的設備租賃費用,不論產量多少皆固定支出;另有每單位 $15 的原物料成本,會隨產出數量直接變動。設備租賃費用屬於 {{blank1}};原物料成本屬於 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Fixed Cost(固定成本)",
              zh: "固定成本(Fixed Cost)",
            },
          },
          {
            id: "b",
            text: {
              en: "Variable Cost(變動成本)",
              zh: "變動成本(Variable Cost)",
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
              en: "Fixed Cost(固定成本)",
              zh: "固定成本(Fixed Cost)",
            },
          },
          {
            id: "b",
            text: {
              en: "Variable Cost(變動成本)",
              zh: "變動成本(Variable Cost)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "Fixed Cost(固定成本)不隨產出數量變動,如設備租賃、保險費;Variable Cost(變動成本)則隨產出數量或工作量成比例變動,如按件計酬的原物料。成本估算時區分兩者有助於預測不同產量情境下的總成本變化。",
  },
  {
    id: "fin-029",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "The performing organization releases project funds on a periodic basis (e.g., quarterly), and in certain periods the project's planned cumulative cost exceeds the cumulative funds released so far. Which technique is used to reconcile planned spending against these organizational funding limits, often by resequencing project work?",
      zh: "執行組織以固定週期(例如每季)撥款,在某些期間專案的計畫累積成本會超過目前已撥付的累積資金。請問哪一種技術用來將計畫支出與組織的撥款限制進行調節,通常透過重新排序專案工作來達成?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Reserve Analysis(準備金分析)",
          zh: "準備金分析(Reserve Analysis)",
        },
      },
      {
        id: "b",
        text: {
          en: "Funding Limit Reconciliation(撥款限制調節)",
          zh: "撥款限制調節(Funding Limit Reconciliation)",
        },
      },
      {
        id: "c",
        text: {
          en: "Cost Aggregation(成本加總)",
          zh: "成本加總(Cost Aggregation)",
        },
      },
      {
        id: "d",
        text: {
          en: "Trend Analysis(趨勢分析)",
          zh: "趨勢分析(Trend Analysis)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Funding Limit Reconciliation(撥款限制調節)是 Determine Budget(發展預算)過程中的技術,用來將專案計畫支出與組織分期撥款的限制對齊,若計畫支出在特定期間超過可用資金,須調整活動排程(如加入時間限制)以平順支出曲線。Reserve Analysis 用於決定準備金金額;Cost Aggregation 是將各層級成本加總為 Cost Baseline;Trend Analysis 則用於分析績效隨時間變化的趨勢,三者皆非本題描述的技術。",
  },
  {
    id: "fin-030",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each cost concept to its correct definition.",
      zh: "請將下列成本概念拖曳配對到正確的定義。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Sunk Cost(沉沒成本)",
            zh: "Sunk Cost(沉沒成本)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Opportunity Cost(機會成本)",
            zh: "Opportunity Cost(機會成本)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Direct Cost(直接成本)",
            zh: "Direct Cost(直接成本)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Indirect Cost(間接成本)",
            zh: "Indirect Cost(間接成本)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Money that has already been spent and cannot be recovered; it should not influence future project decisions",
            zh: "已經花費且無法收回的金錢;不應影響未來的專案決策",
          },
        },
        {
          id: "c2",
          text: {
            en: "The value of the next best alternative that is given up when choosing one option over another",
            zh: "選擇某一方案時,所放棄的次佳替代方案之價值",
          },
        },
        {
          id: "c3",
          text: {
            en: "A cost incurred specifically for a project, such as team salaries or project-specific materials, and billed directly to that project",
            zh: "專為某專案發生的成本,如團隊薪資或專案專屬材料,直接歸屬該專案",
          },
        },
        {
          id: "c4",
          text: {
            en: "A shared overhead cost, such as facility rent or utilities, that is allocated across multiple projects rather than billed to one alone",
            zh: "共用的營運費用,如廠房租金或水電費,分攤至多個專案而非單一專案",
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
    explanation: "Sunk Cost(沉沒成本)是已發生且無法收回的支出,理性決策應忽略沉沒成本、只看未來的成本與效益;Opportunity Cost(機會成本)是選擇一個方案而放棄另一方案時所犧牲的價值;Direct Cost(直接成本)可直接歸屬單一專案,如專案團隊薪資;Indirect Cost(間接成本)則是跨專案分攤的共同費用,如組織的一般行政管銷費用。",
  },
  {
    id: "fin-031",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project has already spent $2 million. A forward-looking financial analysis shows that completing the remaining work will cost an additional $1.5 million but generate only $900,000 in remaining benefits. The sponsor insists on continuing the project, arguing, \"We have already invested too much to stop now.\" As the project manager, what should you do?",
      zh: "某專案已花費 $2 百萬。一份前瞻性財務分析顯示,完成剩餘工作還需再投入 $1.5 百萬,但僅能產生 $900,000 的剩餘效益。贊助人堅持要繼續此專案,理由是「我們已經投入太多,現在不能停下來」。身為專案經理,你應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Agree with the sponsor, since abandoning the project now would waste the $2 million already spent.",
          zh: "同意贊助人的看法,因為現在放棄會浪費已花費的 $2 百萬。",
        },
      },
      {
        id: "b",
        text: {
          en: "Present the forward-looking analysis showing that the remaining $1.5 million cost exceeds the remaining $900,000 in benefits, and recommend that the continuation decision be based on future costs and benefits rather than on money already spent.",
          zh: "提出前瞻性分析,說明剩餘成本 $1.5 百萬已超過剩餘效益 $900,000,並建議依據未來的成本與效益(而非已花費的金錢)來決定是否繼續。",
        },
      },
      {
        id: "c",
        text: {
          en: "Recommend continuing the project regardless of the analysis, until the full original budget has been spent.",
          zh: "不論分析結果為何,建議繼續執行至原始預算全數用盡為止。",
        },
      },
      {
        id: "d",
        text: {
          en: "Unilaterally halt the project without informing the sponsor of the analysis.",
          zh: "未告知贊助人分析結果,逕自片面終止專案。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "已花費的 $2 百萬屬於 Sunk Cost(沉沒成本),不應影響未來的繼續/終止決策;理性的財務決策應僅比較「未來」的成本與效益。本題剩餘成本($1.5 百萬)已超過剩餘效益($900,000),PM 應以數據向贊助人清楚說明此前瞻性分析結果,協助贊助人基於未來效益(而非沉沒成本謬誤)做出決策,而非片面同意、片面終止,或忽略分析結果盲目繼續。",
  },
  {
    id: "fin-032",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The chart shows a project's planned cumulative cost (S-curve) against the organization's periodic funding limit, which releases $150,000 in a lump sum at the start of each quarter (a step function). The planned cumulative cost line rises above the cumulative funding line partway through Q2, meaning the organization has not yet released enough funds to cover the planned spending at that point. Click the point on the timeline where the project team must apply funding limit reconciliation (e.g., resequence activities) to stay within released funds.",
      zh: "下圖顯示專案的計畫累積成本曲線(S 曲線)與組織的分期撥款限制(每季初一次撥付 $150,000 的階梯函數)之對比。計畫累積成本曲線在 Q2 進行到一半時就超過了累積撥款曲線,代表此時組織尚未撥付足夠資金來支應計畫支出。請點選時間軸上「專案團隊必須進行撥款限制調節(例如重新排序活動)以維持在已撥款範圍內」的那個點。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Q1",
          zh: "Q1(計畫成本仍低於累積撥款)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 30,
      },
      {
        id: "n2",
        label: {
          en: "Q2",
          zh: "Q2(計畫成本超過累積撥款)",
        },
        x: 30,
        y: 10,
        width: 20,
        height: 30,
      },
      {
        id: "n3",
        label: {
          en: "Q3",
          zh: "Q3",
        },
        x: 55,
        y: 40,
        width: 20,
        height: 30,
      },
      {
        id: "n4",
        label: {
          en: "Q4",
          zh: "Q4",
        },
        x: 80,
        y: 40,
        width: 20,
        height: 30,
      },
    ],
    correctAnswer: "n2",
    explanation: "撥款限制調節(Funding Limit Reconciliation)的目的,是確保專案的計畫支出不超過組織在任一時點已實際撥付的資金。當計畫累積成本曲線在 Q2 超過累積撥款曲線時,代表此刻若照原計畫執行將面臨資金短缺,團隊必須在 Q2 這個時點重新排序或延後部分活動,使支出曲線平順地落在撥款曲線之下,而非等到 Q3、Q4 資金到位後才處理。",
  },
  {
    id: "fin-033",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $600,000. At the status date, PV = $360,000, EV = $300,000, and AC = $330,000. Both the cost performance and the schedule performance observed so far are expected to influence the cost of the remaining work. Using the composite forecasting formula EAC = AC + [(BAC − EV) / (CPI × SPI)], what is the Estimate at Completion (EAC)?",
      zh: "某專案 BAC(完工預算)= $600,000。於狀態日,PV(計畫值)= $360,000、EV(實獲值)= $300,000、AC(實際成本)= $330,000。假設目前的成本績效與時程績效都將影響剩餘工作的成本。使用複合預測公式 EAC = AC + [(BAC − EV) / (CPI × SPI)],請問完工估算(EAC)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$726,000",
          zh: "$726,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$660,000",
          zh: "$660,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$630,000",
          zh: "$630,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$720,000",
          zh: "$720,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "先求 CPI = EV/AC = 300,000/330,000 ≈ 0.9091,SPI = EV/PV = 300,000/360,000 ≈ 0.8333。CPI × SPI ≈ 0.7576。(BAC − EV) = 600,000 − 300,000 = 300,000。300,000 ÷ 0.7576 = 396,000。EAC = AC + 396,000 = 330,000 + 396,000 = 726,000。此複合公式同時考量成本與時程績效對剩餘工作的雙重影響,常用於進度落後且超支、兩者皆會拖累完工成本的情境。選項 (b) 為單純套用 BAC/CPI(僅考量成本);選項 (d) 為單純套用 BAC/SPI(僅考量時程);選項 (c) 為套用「績效恢復正常」公式 AC+(BAC−EV),皆非本題要求的複合公式。",
  },
  {
    id: "fin-034",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "An activity has the following three-point cost estimates: Optimistic = $8,000, Most Likely = $10,000, Pessimistic = $18,000. Using the PERT (Beta distribution) weighted-average formula, what is the expected cost of this activity?",
      zh: "某活動的三點成本估算如下:樂觀值(O)= $8,000、最可能值(M)= $10,000、悲觀值(P)= $18,000。使用 PERT(Beta 分佈)加權平均公式,此活動的預期成本為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$11,000",
          zh: "$11,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$12,000",
          zh: "$12,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$10,000",
          zh: "$10,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$13,000",
          zh: "$13,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "PERT 加權平均公式:預期成本 = (O + 4M + P) / 6 = (8,000 + 4×10,000 + 18,000) / 6 = (8,000 + 40,000 + 18,000) / 6 = 66,000 / 6 = 11,000。選項 (b) $12,000 是三角分佈(簡單平均)的結果:(O+M+P)/3 = 36,000/3 = 12,000,並非 PERT 加權平均;PERT 公式給予「最可能值」4 倍權重,更貼近實務中成本分佈集中於最可能值附近的特性。",
  },
  {
    id: "fin-035",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Two vendor proposals are being evaluated. Vendor A: upfront implementation cost $200,000, plus 10-year total maintenance cost $150,000 (total life-cycle cost $350,000). Vendor B: upfront implementation cost $150,000, plus 10-year total maintenance cost $250,000 (total life-cycle cost $400,000). The sponsor prefers Vendor B because its lower upfront cost fits this year's capital budget more easily. As the project manager applying life-cycle costing, what should you do?",
      zh: "目前正在評估兩份供應商提案。Vendor A:前期導入成本 $200,000,加上 10 年總維護成本 $150,000(生命週期總成本 $350,000)。Vendor B:前期導入成本 $150,000,加上 10 年總維護成本 $250,000(生命週期總成本 $400,000)。贊助人偏好 Vendor B,因其較低的前期成本較容易符合今年度的資本預算。身為採用生命週期成本法的專案經理,你應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Approve Vendor B immediately, since it satisfies the sponsor's preference and this year's budget constraint.",
          zh: "立即核准 Vendor B,因其符合贊助人偏好與今年度預算限制。",
        },
      },
      {
        id: "b",
        text: {
          en: "Present the total life-cycle cost comparison to the sponsor, showing that Vendor A's higher upfront cost is offset by significantly lower maintenance costs, resulting in a $50,000 lower total cost of ownership over 10 years, and let the sponsor make an informed decision.",
          zh: "向贊助人提出生命週期總成本比較,說明 Vendor A 雖前期成本較高,但維護成本顯著較低,10 年總持有成本反而低 $50,000,讓贊助人在充分資訊下做出決策。",
        },
      },
      {
        id: "c",
        text: {
          en: "Select Vendor A unilaterally without informing the sponsor, since its total cost is lower.",
          zh: "未告知贊助人即片面選定 Vendor A,因其總成本較低。",
        },
      },
      {
        id: "d",
        text: {
          en: "Recommend whichever vendor has the lowest maintenance cost, regardless of upfront cost.",
          zh: "不論前期成本高低,一律建議選擇維護成本最低的供應商。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Life-Cycle Costing(生命週期成本法)評估的是產品/服務從導入到報廢的「總持有成本」,而非僅看前期採購價格。本題 Vendor A 的生命週期總成本($350,000)低於 Vendor B($400,000),但贊助人僅關注前期預算限制。PM 應以數據呈現完整的生命週期成本比較,幫助贊助人做出更符合組織長期利益的決策,而非片面服從偏好、片面決定,或忽略前期成本的預算限制現實。",
  },
  {
    id: "fin-036",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following are included within the Cost Baseline? Select two.",
      zh: "下列何者包含在成本基準(Cost Baseline)之內?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The aggregated cost estimates of all work packages",
          zh: "所有工作包的成本估算加總",
        },
      },
      {
        id: "b",
        text: {
          en: "The Contingency Reserve, which covers identified (known-unknown) risks",
          zh: "應變準備金,用於因應已識別(known-unknown)風險",
        },
      },
      {
        id: "c",
        text: {
          en: "The Management Reserve, which covers unidentified (unknown-unknown) risks",
          zh: "管理準備金,用於因應未識別(unknown-unknown)風險",
        },
      },
      {
        id: "d",
        text: {
          en: "Profit margin added by a contracted seller for its own business purposes",
          zh: "承包賣方為自身營利目的所加計的利潤",
        },
      },
      {
        id: "e",
        text: {
          en: "Corporate overhead costs allocated by the finance department after project closure",
          zh: "專案結案後由財務部門分攤的公司營運費用",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "Cost Baseline(成本基準)= 各工作包成本估算加總 + Contingency Reserve(應變準備金),兩者皆屬於已核准、用於衡量績效的基準。Management Reserve(管理準備金)雖屬於 Project Budget(專案預算)的一部分,但不包含在 Cost Baseline 內;賣方利潤與結案後才分攤的公司營運費用皆與專案成本基準的定義無關。",
  },
  {
    id: "fin-037",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $300,000, EV = $310,000, and AC = $340,000 at the status date. Select the two statements that correctly describe the project's current status. Select two.",
      zh: "某專案於狀態日 PV(計畫值)= $300,000、EV(實獲值)= $310,000、AC(實際成本)= $340,000。請選出兩項正確描述專案目前狀態的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project is currently over budget (CV = −$30,000).",
          zh: "專案目前超出預算(CV = −$30,000)。",
        },
      },
      {
        id: "b",
        text: {
          en: "The project is currently ahead of schedule (SV = +$10,000).",
          zh: "專案目前進度超前(SV = +$10,000)。",
        },
      },
      {
        id: "c",
        text: {
          en: "CPI is greater than 1, indicating good cost efficiency.",
          zh: "CPI 大於 1,代表成本效率良好。",
        },
      },
      {
        id: "d",
        text: {
          en: "SPI is less than 1, indicating the project is behind schedule.",
          zh: "SPI 小於 1,代表專案進度落後。",
        },
      },
      {
        id: "e",
        text: {
          en: "The project is exactly on budget and exactly on schedule.",
          zh: "專案完全符合預算與時程計畫。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "CV = EV−AC = 310,000−340,000 = −30,000(超出預算);SV = EV−PV = 310,000−300,000 = +10,000(進度超前)。CPI = EV/AC = 310,000/340,000 ≈ 0.91(<1,成本效率不佳,並非選項 (c) 所述);SPI = EV/PV = 310,000/300,000 ≈ 1.03(>1,進度超前,而非選項 (d) 所述落後)。此為「超支但超前」的常見情境組合,常發生於趕工(Crashing)或加班投入額外資源以追趕進度時。",
  },
  {
    id: "fin-038",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "When the project team expects future cost performance to continue at the same rate observed to date, the forecasting formula is EAC = {{blank1}}. When the current cost variance is instead regarded as atypical, and the team expects performance to return to the original plan for the remainder of the work, the forecasting formula is EAC = {{blank2}}.",
      zh: "當專案團隊預期未來的成本績效將延續目前觀察到的趨勢時,預測公式為 EAC = {{blank1}}。反之,若目前的成本變異被視為特例,且團隊預期剩餘工作將恢復依原計畫執行時,預測公式為 EAC = {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "BAC",
              zh: "CPI / BAC / CPI",
            },
          },
          {
            id: "b",
            text: {
              en: "AC + (BAC − EV)",
              zh: "AC + (BAC − EV)",
            },
          },
          {
            id: "c",
            text: {
              en: "AC + Bottom-up ETC",
              zh: "AC + 由下而上 ETC",
            },
          },
          {
            id: "d",
            text: {
              en: "BAC − AC",
              zh: "BAC − AC",
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
              en: "BAC",
              zh: "CPI / BAC / CPI",
            },
          },
          {
            id: "b",
            text: {
              en: "AC + (BAC − EV)",
              zh: "AC + (BAC − EV)",
            },
          },
          {
            id: "c",
            text: {
              en: "AC × CPI",
              zh: "AC × CPI",
            },
          },
          {
            id: "d",
            text: {
              en: "EV − AC",
              zh: "EV − AC",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "EAC = BAC/CPI 假設「未來績效與目前累積績效一致」,是最常見的預測情境;EAC = AC+(BAC−EV) 則假設「目前的差異只是特例,剩餘工作將恢復依原計畫(即以 1 的效率)執行」,兩者是 EVM 預測中最基本、也最常互相混淆的兩種公式,差別在於對「未來績效趨勢」的假設不同。",
  },
  {
    id: "fin-039",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "When evaluating a single independent investment opportunity, the project should generally be accepted if its Net Present Value (NPV) is {{blank1}} zero, and if its Internal Rate of Return (IRR) is {{blank2}} the organization's required rate of return (cost of capital).",
      zh: "在評估單一獨立投資機會時,通常若其淨現值(NPV){{blank1}}零,且其內部報酬率(IRR){{blank2}}組織所要求的最低報酬率(資金成本),該專案就應被接受。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "greater than(大於)",
              zh: "大於(greater than)",
            },
          },
          {
            id: "b",
            text: {
              en: "less than(小於)",
              zh: "小於(less than)",
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
              en: "greater than(大於)",
              zh: "大於(greater than)",
            },
          },
          {
            id: "b",
            text: {
              en: "less than(小於)",
              zh: "小於(less than)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "NPV > 0 代表投資創造的現金流現值超過投入成本,具財務可行性;IRR > 組織要求的最低報酬率(資金成本/障礙率)代表該投資的預期報酬超過取得資金的成本,同樣值得投資。兩項指標雖計算方式不同,但決策方向一致:數值越有利(NPV 越正、IRR 越高於門檻),投資吸引力越大。",
  },
  {
    id: "fin-040",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each EAC (Estimate at Completion) forecasting formula to the scenario in which it should be used.",
      zh: "請將下列完工估算(EAC)預測公式拖曳配對到應使用該公式的情境。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "EAC = BAC",
            zh: "CPI / EAC = BAC / CPI",
          },
        },
        {
          id: "p2",
          text: {
            en: "EAC = AC + (BAC − EV)",
            zh: "EAC = AC + (BAC − EV)",
          },
        },
        {
          id: "p3",
          text: {
            en: "EAC = AC + Bottom-up ETC",
            zh: "EAC = AC + 由下而上 ETC",
          },
        },
        {
          id: "p4",
          text: {
            en: "EAC = AC + (BAC − EV)",
            zh: "(CPI × SPI) / EAC = AC + (BAC − EV) / (CPI × SPI)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Future cost performance is expected to continue at the same rate observed to date (the most commonly used assumption)",
            zh: "預期未來的成本績效將延續目前觀察到的趨勢(最常用的假設)",
          },
        },
        {
          id: "c2",
          text: {
            en: "The current cost variance is viewed as atypical, and the team expects to perform according to the original plan for the remainder of the work",
            zh: "目前的成本變異被視為特例,團隊預期剩餘工作將依原計畫執行",
          },
        },
        {
          id: "c3",
          text: {
            en: "The original estimating assumptions are no longer valid, so the remaining work must be estimated from the bottom up",
            zh: "原始估算假設已不再適用,剩餘工作須重新進行由下而上估算",
          },
        },
        {
          id: "c4",
          text: {
            en: "Both cost and schedule performance are expected to influence the cost of the remaining work",
            zh: "成本與時程績效皆預期會影響剩餘工作的成本",
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
    explanation: "EAC 預測公式並非只有一種,須依情境選用:BAC/CPI 適用於「過去績效趨勢將延續」;AC+(BAC−EV) 適用於「目前差異是特例,未來將恢復正常」;Bottom-up ETC 適用於「原估算基礎已失效,須重新估算」;AC+(BAC−EV)/(CPI×SPI) 則適用於「成本與時程績效都會共同影響剩餘工作成本」的複合情境。四種公式反映考生須理解 EAC 背後的假設,而非死記單一公式。",
  },
  {
    id: "fin-041",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "An organization has limited capital and can fund only one of the following four proposed projects. Based on the Net Present Value (NPV) method, click the project that should be selected.",
      zh: "某組織資金有限,只能從下列四個提案專案中資助一個。根據淨現值(NPV)法,請點選應被選中的專案。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Project A, NPV = $45,000",
          zh: "Project A,NPV = $45,000",
        },
        x: 5,
        y: 5,
        width: 42,
        height: 40,
      },
      {
        id: "n2",
        label: {
          en: "Project B, NPV = $72,000",
          zh: "Project B,NPV = $72,000",
        },
        x: 52.5,
        y: 5,
        width: 42,
        height: 40,
      },
      {
        id: "n3",
        label: {
          en: "Project C, NPV = −$10,000",
          zh: "Project C,NPV = −$10,000",
        },
        x: 5,
        y: 52.5,
        width: 42,
        height: 40,
      },
      {
        id: "n4",
        label: {
          en: "Project D, NPV = $60,000",
          zh: "Project D,NPV = $60,000",
        },
        x: 52.5,
        y: 52.5,
        width: 42,
        height: 40,
      },
    ],
    correctAnswer: "n2",
    explanation: "在資金有限、只能選擇單一專案的情況下,NPV 法的決策原則是選擇 NPV 最高的方案,因為 NPV 直接以金額表示該專案預期為組織創造的淨價值。四個提案中 Project B 的 NPV($72,000)最高,應優先選擇;Project C 的 NPV 為負值,代表預期成本超過效益,應予拒絕。",
  },
  {
    id: "fin-042",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The chart shows a project's cumulative net cash flow over time. The line starts at −$500,000 at project kickoff (representing the initial investment), continues to decline slightly during execution as additional costs are incurred, and then rises sharply after the product launches and begins generating revenue. Click the point on the chart where the cumulative net cash flow crosses from negative to positive — the point at which the initial investment is fully recovered (the payback point).",
      zh: "下圖顯示專案的累積淨現金流隨時間的變化。曲線在專案啟動時為 −$500,000(代表初始投資),執行期間因持續投入成本而略微下降,產品上市開始產生營收後則急遽上升。請點選圖上「累積淨現金流由負轉正」的那個點——也就是初始投資完全回收的時間點(回收點)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Month 3",
          zh: "第 3 個月(仍深陷負值)",
        },
        x: 5,
        y: 55,
        width: 20,
        height: 30,
      },
      {
        id: "n2",
        label: {
          en: "Month 6",
          zh: "第 6 個月(產品上市,仍為負值但開始回升)",
        },
        x: 30,
        y: 35,
        width: 20,
        height: 30,
      },
      {
        id: "n3",
        label: {
          en: "Month 9",
          zh: "第 9 個月(累積淨現金流由負轉正)",
        },
        x: 55,
        y: 15,
        width: 20,
        height: 30,
      },
      {
        id: "n4",
        label: {
          en: "Month 12",
          zh: "第 12 個月(已明顯轉為正值)",
        },
        x: 80,
        y: 5,
        width: 20,
        height: 30,
      },
    ],
    correctAnswer: "n3",
    explanation: "回收期(Payback Period)是指累積淨現金流由負轉正、初始投資被完全回收的時間點。曲線在啟動時為 −$500,000,執行期間因持續支出而微幅下降,產品上市(第 6 個月)後營收開始挹注、曲線回升,但此時仍未轉正;真正跨越零軸、投資完全回收的時間點落在第 9 個月,這才是回收期法所定義的「回收點」;第 12 個月雖已明顯轉正,但並非投資「剛好」回收的那個臨界點。",
  },
  {
    id: "fin-043",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $70,000, EV = $63,000, and AC = $60,000. What is the Cost Performance Index (CPI)?",
      zh: "某專案 PV(計畫值)= $70,000、EV(實獲值)= $63,000、AC(實際成本)= $60,000。請問成本績效指標(CPI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "1.05",
          zh: "1.05",
        },
      },
      {
        id: "b",
        text: {
          en: "0.90",
          zh: "0.90",
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
          en: "0.95",
          zh: "0.95",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "CPI = EV / AC = 63,000 / 60,000 = 1.05。CPI > 1 表示每花費 1 元實際成本,獲得超過 1 元的實獲值,成本績效優於預算。選項 (b) 0.90 是誤將 EV/PV(即 SPI = 63,000/70,000 = 0.9)當成 CPI 計算,是常見的公式混淆陷阱。",
  },
  {
    id: "fin-044",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $95,000, EV = $76,000, and AC = $80,000. What is the Schedule Performance Index (SPI)?",
      zh: "某專案 PV(計畫值)= $95,000、EV(實獲值)= $76,000、AC(實際成本)= $80,000。請問時程績效指標(SPI)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "0.80",
          zh: "0.80",
        },
      },
      {
        id: "b",
        text: {
          en: "0.95",
          zh: "0.95",
        },
      },
      {
        id: "c",
        text: {
          en: "1.05",
          zh: "1.05",
        },
      },
      {
        id: "d",
        text: {
          en: "1.25",
          zh: "1.25",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "SPI = EV / PV = 76,000 / 95,000 = 0.80。SPI < 1 表示專案進度落後於計畫。選項 (b) 0.95 是誤將 EV/AC(即 CPI = 76,000/80,000 = 0.95)當成 SPI 計算,考生須注意 SPI 的分母永遠是 PV,而非 AC。",
  },
  {
    id: "fin-045",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $140,000, EV = $125,000, and AC = $130,000. What is the Schedule Variance (SV), and what does it indicate?",
      zh: "某專案 PV(計畫值)= $140,000、EV(實獲值)= $125,000、AC(實際成本)= $130,000。請問時程變異(SV)為何,代表什麼意義?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "SV = −$15,000,專案進度落後(behind schedule)",
          zh: "SV = −$15,000,專案進度落後(behind schedule)",
        },
      },
      {
        id: "b",
        text: {
          en: "SV = +$15,000,專案進度超前(ahead of schedule)",
          zh: "SV = +$15,000,專案進度超前(ahead of schedule)",
        },
      },
      {
        id: "c",
        text: {
          en: "SV = −$5,000,專案進度落後(behind schedule)",
          zh: "SV = −$5,000,專案進度落後(behind schedule)",
        },
      },
      {
        id: "d",
        text: {
          en: "SV = +$5,000,專案進度超前(ahead of schedule)",
          zh: "SV = +$5,000,專案進度超前(ahead of schedule)",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "SV = EV − PV = 125,000 − 140,000 = −15,000。SV 為負值表示截至目前實際完成的工作價值低於計畫應完成的價值,專案進度落後於計畫。選項 (c) 是誤將 EV−AC(= 125,000−130,000 = −5,000,此為 CV 而非 SV)當成 SV 計算,考生須留意 SV 是拿 EV 與 PV 比較,而非 AC。",
  },
  {
    id: "fin-046",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $800,000. At the status date, EV = $240,000 and AC = $300,000. Assuming the current cost performance trend continues for the remainder of the project, what is the Estimate at Completion (EAC)?",
      zh: "某專案 BAC(完工預算)= $800,000。於狀態日,EV(實獲值)= $240,000、AC(實際成本)= $300,000。假設目前的成本績效趨勢在專案剩餘期間持續不變,請問完工估算(EAC)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$1,000,000",
          zh: "$1,000,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$860,000",
          zh: "$860,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$640,000",
          zh: "$640,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$1,100,000",
          zh: "$1,100,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "先求 CPI = EV / AC = 240,000 / 300,000 = 0.8。EAC = BAC / CPI = 800,000 / 0.8 = 1,000,000。選項 (b) $860,000 是誤用「績效恢復正常」公式 AC+(BAC−EV) = 300,000+560,000 = 860,000;選項 (c) $640,000 是誤將 CPI 與 BAC 相乘(BAC×CPI)而非相除,兩者皆為公式套用錯誤的常見誘答。",
  },
  {
    id: "fin-047",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $450,000. At the status date, EV = $180,000 and AC = $150,000. Assuming the current cost performance continues, what is the Estimate to Complete (ETC)?",
      zh: "某專案 BAC(完工預算)= $450,000。於狀態日,EV(實獲值)= $180,000、AC(實際成本)= $150,000。假設目前成本績效持續不變,請問尚須完成估算(ETC)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$225,000",
          zh: "$225,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$270,000",
          zh: "$270,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$375,000",
          zh: "$375,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$300,000",
          zh: "$300,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "CPI = EV/AC = 180,000/150,000 = 1.2。EAC = BAC/CPI = 450,000/1.2 = 375,000。ETC = EAC − AC = 375,000 − 150,000 = 225,000。選項 (b) $270,000 是誤將 BAC−EV(剩餘應完成的預算工作量,未考慮實際績效)當成 ETC;選項 (c) $375,000 其實是 EAC 而非 ETC,考生須分清楚兩者定義:EAC 是「完工總估算」,ETC 是「完工尚須投入」。",
  },
  {
    id: "fin-048",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $600,000. At the status date, EV = $200,000 and AC = $250,000. Assuming the project must still finish within the original BAC, what is the To-Complete Performance Index (TCPI)? (Round to two decimal places.)",
      zh: "某專案 BAC(完工預算)= $600,000。於狀態日,EV(實獲值)= $200,000、AC(實際成本)= $250,000。假設專案仍須在原始 BAC 內完工,請問完工尚須績效指標(TCPI)為何?(四捨五入至小數點後兩位)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "1.14",
          zh: "1.14",
        },
      },
      {
        id: "b",
        text: {
          en: "1.00",
          zh: "1.00",
        },
      },
      {
        id: "c",
        text: {
          en: "0.88",
          zh: "0.88",
        },
      },
      {
        id: "d",
        text: {
          en: "1.25",
          zh: "1.25",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "TCPI = (BAC − EV) / (BAC − AC) = (600,000 − 200,000) / (600,000 − 250,000) = 400,000 / 350,000 ≈ 1.14。TCPI > 1 表示剩餘工作必須以比目前更高的效率執行,才能在原訂 BAC 內完工;選項 (c) 0.88 是將分子分母顛倒(350,000/400,000)所得的錯誤結果。",
  },
  {
    id: "fin-049",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A proposed project requires an initial investment of $180,000. It is expected to generate cash inflows of $80,000 in Year 1, $70,000 in Year 2, and $90,000 in Year 3. Using a discount rate of 12%, what is the project's Net Present Value (NPV)? (Round to the nearest dollar.)",
      zh: "某提案專案需要 $180,000 的初始投資,預期第 1 年產生現金流入 $80,000、第 2 年 $70,000、第 3 年 $90,000。以 12% 折現率計算,此專案的淨現值(NPV)為何?(四捨五入至整數)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$11,292",
          zh: "$11,292",
        },
      },
      {
        id: "b",
        text: {
          en: "$60,000",
          zh: "$60,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$191,292",
          zh: "$191,292",
        },
      },
      {
        id: "d",
        text: {
          en: "−$11,292",
          zh: "−$11,292",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "先將各年現金流折現至現值:Year1 = 80,000/1.12 ≈ 71,429;Year2 = 70,000/1.12² = 70,000/1.2544 ≈ 55,804;Year3 = 90,000/1.12³ = 90,000/1.404928 ≈ 64,060。三年折現值加總 ≈ 191,292。NPV = 折現值總和 − 初始投資 = 191,292 − 180,000 ≈ 11,292。NPV 為正值,代表此投資具財務可行性。選項 (b) 是誤將名目現金流加總後直接扣除投資(未折現);選項 (c) 是忘記扣除初始投資;選項 (d) 為正負號顛倒的誘答。",
  },
  {
    id: "fin-050",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project requires an initial investment of $240,000. Expected annual net cash inflows are: Year 1 = $50,000, Year 2 = $70,000, Year 3 = $90,000, Year 4 = $100,000. Using the (non-discounted) Payback Period method, how long will it take to recover the initial investment?",
      zh: "某專案需要 $240,000 的初始投資,預期各年淨現金流入為:第 1 年 $50,000、第 2 年 $70,000、第 3 年 $90,000、第 4 年 $100,000。以(未折現的)回收期法計算,需要多久才能回收初始投資?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "3.3 years",
          zh: "3.3 年",
        },
      },
      {
        id: "b",
        text: {
          en: "3.0 years",
          zh: "3.0 年",
        },
      },
      {
        id: "c",
        text: {
          en: "4.0 years",
          zh: "4.0 年",
        },
      },
      {
        id: "d",
        text: {
          en: "2.33 years",
          zh: "2.33 年",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "累積現金流:第 1 年末 = 50,000(尚缺 190,000);第 2 年末 = 50,000+70,000 = 120,000(尚缺 120,000);第 3 年末 = 120,000+90,000 = 210,000(尚缺 30,000);第 4 年現金流入 100,000,只需其中 30,000/100,000 = 0.3 年即可補足缺口。回收期 = 3 + 0.3 = 3.3 年。",
  },
  {
    id: "fin-051",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During Determine Budget, the sponsor asks you to cut the total project budget by 15% while keeping the scope unchanged. Your bottom-up cost estimate already reflects the minimum realistic cost of the defined scope, and no further contingency remains to absorb the cut. What should you do?",
      zh: "在發展預算(Determine Budget)期間,贊助人要求你在範疇不變的前提下,將專案總預算刪減 15%。你的由下而上成本估算已反映既定範疇下最基本、實際可行的成本,已無多餘的應變準備金可以吸收這項刪減。你應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Silently absorb the cut by quietly reducing the quality of deliverables without informing the sponsor.",
          zh: "未告知贊助人,悄悄降低交付成果的品質以吸收刪減金額。",
        },
      },
      {
        id: "b",
        text: {
          en: "Present the sponsor with the trade-offs among scope, schedule, and budget (the triple constraint) based on the cost estimate data, and request a formal change if scope cannot also be reduced.",
          zh: "依成本估算數據向贊助人呈現範疇、時程與預算(三重限制)之間的取捨關係,若範疇無法同時縮減,則提出正式變更請求。",
        },
      },
      {
        id: "c",
        text: {
          en: "Refuse the sponsor's request outright and continue executing with the original budget.",
          zh: "直接拒絕贊助人的要求,繼續依原預算執行。",
        },
      },
      {
        id: "d",
        text: {
          en: "Reduce the Contingency Reserve to zero without analysis in order to absorb the cut.",
          zh: "未經分析即將應變準備金歸零以吸收刪減金額。",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "當贊助人要求刪減預算但範疇不變時,PM 應以數據(成本估算、範疇/時程/預算三重限制的關聯)向贊助人清楚說明取捨,協助其做出知情決策,並透過正式變更請求(Change Request)處理任何隨之而來的範疇或時程調整,而非片面隱瞞、片面拒絕,或未經分析就任意刪減準備金。",
  },
  {
    id: "fin-052",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $550,000. At the status date, EV = $220,000 and AC = $200,000. The team determines that the current cost variance was caused by a one-time pricing error that will not recur, and expects the remaining work to be executed exactly according to the original budgeted rates. What is the Estimate at Completion (EAC)?",
      zh: "某專案 BAC(完工預算)= $550,000。於狀態日,EV(實獲值)= $220,000、AC(實際成本)= $200,000。團隊判斷目前的成本變異是由一次性的計價錯誤所致,不會再發生,並預期剩餘工作將完全依原始預算費率執行。請問完工估算(EAC)為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$530,000",
          zh: "$530,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$500,000",
          zh: "$500,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$330,000",
          zh: "$330,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$550,000",
          zh: "$550,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "由於目前的變異被視為一次性特例、剩餘工作將恢復依原計畫執行,應使用 EAC = AC + (BAC − EV) = 200,000 + (550,000 − 220,000) = 200,000 + 330,000 = 530,000。選項 (b) $500,000 是誤用「績效延續」公式 BAC/CPI(CPI = 220,000/200,000 = 1.1,550,000/1.1 = 500,000),但本題情境明確排除此假設;選項 (c) $330,000 只是 BAC−EV,忘記加上已花費的 AC。",
  },
  {
    id: "fin-053",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "An activity has the following three-point cost estimates: Optimistic = $15,000, Most Likely = $20,000, Pessimistic = $35,000. Using the PERT (Beta distribution) weighted-average formula, what is the expected cost of this activity? (Round to the nearest dollar.)",
      zh: "某活動的三點成本估算如下:樂觀值(O)= $15,000、最可能值(M)= $20,000、悲觀值(P)= $35,000。使用 PERT(Beta 分佈)加權平均公式,此活動的預期成本為何?(四捨五入至整數)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$21,667",
          zh: "$21,667",
        },
      },
      {
        id: "b",
        text: {
          en: "$23,333",
          zh: "$23,333",
        },
      },
      {
        id: "c",
        text: {
          en: "$20,000",
          zh: "$20,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$25,000",
          zh: "$25,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "PERT 加權平均公式:預期成本 = (O + 4M + P) / 6 = (15,000 + 4×20,000 + 35,000) / 6 = (15,000 + 80,000 + 35,000) / 6 = 130,000 / 6 ≈ 21,667。選項 (b) $23,333 是三角分佈(簡單平均)的結果:(O+M+P)/3 = 70,000/3 ≈ 23,333,並非 PERT 加權平均;PERT 公式給予「最可能值」4 倍權重,而非等權重平均。",
  },
  {
    id: "fin-054",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project has BAC = $500,000. At the status date, EV = $200,000 and AC = $220,000. Rather than requiring the project to finish within the original BAC, management has set a revised, realistic completion cost target (a new EAC) of $480,000. Using TCPI = (BAC − EV) / (EAC − AC), what efficiency must the remaining work achieve to hit this revised target?",
      zh: "某專案 BAC(完工預算)= $500,000。於狀態日,EV(實獲值)= $200,000、AC(實際成本)= $220,000。管理層並未要求專案在原始 BAC 內完工,而是設定了一個更務實的修正後完工目標(新 EAC)= $480,000。使用 TCPI = (BAC − EV) / (EAC − AC),剩餘工作須達到何種效率才能命中此修正目標?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "1.15",
          zh: "1.15",
        },
      },
      {
        id: "b",
        text: {
          en: "1.07",
          zh: "1.07",
        },
      },
      {
        id: "c",
        text: {
          en: "0.87",
          zh: "0.87",
        },
      },
      {
        id: "d",
        text: {
          en: "1.00",
          zh: "1.00",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "當管理層設定了一個不同於原始 BAC 的新完工目標(新 EAC)時,TCPI 應以該新 EAC 取代 BAC 作為分母基礎:TCPI = (BAC − EV) / (EAC − AC) = (500,000 − 200,000) / (480,000 − 220,000) = 300,000 / 260,000 ≈ 1.15。選項 (b) 1.07 是誤用標準公式 (BAC−EV)/(BAC−AC) = 300,000/280,000 ≈ 1.07,忽略了題目已明確給出新的完工目標而非原始 BAC,這是進階題目常考的公式變體。",
  },
  {
    id: "fin-055",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $180,000, EV = $200,000, and AC = $170,000. Select the two statements that correctly describe the project's current status. Select two.",
      zh: "某專案 PV(計畫值)= $180,000、EV(實獲值)= $200,000、AC(實際成本)= $170,000。請選出兩項正確描述專案目前狀態的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The project is currently under budget (CPI ≈ 1.18 > 1).",
          zh: "專案目前低於預算(CPI ≈ 1.18 > 1)。",
        },
      },
      {
        id: "b",
        text: {
          en: "The project is currently ahead of schedule (SPI ≈ 1.11 > 1).",
          zh: "專案目前進度超前(SPI ≈ 1.11 > 1)。",
        },
      },
      {
        id: "c",
        text: {
          en: "The project is currently over budget (CPI < 1).",
          zh: "專案目前超出預算(CPI < 1)。",
        },
      },
      {
        id: "d",
        text: {
          en: "The project is currently behind schedule (SPI < 1).",
          zh: "專案目前進度落後(SPI < 1)。",
        },
      },
      {
        id: "e",
        text: {
          en: "Both cost and schedule performance are exactly on plan.",
          zh: "成本與時程績效皆完全符合計畫。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "CPI = EV/AC = 200,000/170,000 ≈ 1.18(>1,低於預算、成本效率佳);SPI = EV/PV = 200,000/180,000 ≈ 1.11(>1,進度超前於計畫)。此為「省錢又超前」的最理想情境組合,常見於高效團隊或資源投入得當的專案。",
  },
  {
    id: "fin-056",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "When evaluating an investment opportunity, which two of the following techniques explicitly account for the time value of money? Select two.",
      zh: "在評估投資機會時,下列哪兩項技術有明確考量貨幣的時間價值?請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Net Present Value (NPV)",
          zh: "淨現值(NPV)",
        },
      },
      {
        id: "b",
        text: {
          en: "Internal Rate of Return (IRR)",
          zh: "內部報酬率(IRR)",
        },
      },
      {
        id: "c",
        text: {
          en: "The (non-discounted) simple Payback Period",
          zh: "(未折現的)簡單回收期法",
        },
      },
      {
        id: "d",
        text: {
          en: "Return on Investment (ROI), as commonly calculated using undiscounted net profit",
          zh: "投資報酬率(ROI),以未折現的淨利計算",
        },
      },
      {
        id: "e",
        text: {
          en: "The Benefit-Cost Ratio (BCR), when computed using undiscounted totals",
          zh: "效益成本比(BCR),以未折現的總額計算",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "NPV 將未來現金流依折現率換算為現值後再加總,IRR 則是求出使 NPV 為零的折現率,兩者皆明確考量貨幣的時間價值(即現在的一元比未來的一元更有價值)。簡單回收期法、以未折現數字計算的 ROI 與 BCR 雖是常用的財務指標,但若未經折現處理,則未反映貨幣的時間價值,是這些方法的已知限制。",
  },
  {
    id: "fin-057",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Regarding Funding Limit Reconciliation, select the two statements that are correct. Select two.",
      zh: "關於撥款限制調節(Funding Limit Reconciliation),請選出兩項正確的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It may require resequencing project work so that planned spending does not exceed the funds released to date.",
          zh: "可能需要重新排序專案工作,使計畫支出不超過目前已撥付的資金。",
        },
      },
      {
        id: "b",
        text: {
          en: "Applying it changes only the timing of expenditures, not the total cost of the project.",
          zh: "執行此技術只會改變支出的時間點,不會改變專案的總成本。",
        },
      },
      {
        id: "c",
        text: {
          en: "It eliminates the organization's need to maintain a Management Reserve.",
          zh: "執行此技術後,組織便不再需要保留管理準備金。",
        },
      },
      {
        id: "d",
        text: {
          en: "It is performed only once, during project Initiating, and is never revisited afterward.",
          zh: "此技術只在專案啟動(Initiating)時執行一次,之後不再重新檢視。",
        },
      },
      {
        id: "e",
        text: {
          en: "It guarantees that the project will finish ahead of the original schedule.",
          zh: "執行此技術可保證專案會提前於原訂時程完工。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "Funding Limit Reconciliation(撥款限制調節)是 Determine Budget(發展預算)過程中的技術,目的是將計畫支出與組織分期撥款的限制對齊;若計畫支出在特定期間超過可用資金,須重新排序或延後部分活動,但這只調整支出的「時間分布」,不會改變專案的總成本。此技術與是否保留管理準備金無關,也不保證會提前完工,且應隨撥款狀況變化持續檢視,而非僅在啟動階段執行一次。",
  },
  {
    id: "fin-058",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Project M has an IRR of 18%, and Project N has an IRR of 14%. The organization's required rate of return (hurdle rate) is 10%. The two projects are mutually exclusive — the organization can fund only one. Select the two statements that are correct. Select two.",
      zh: "Project M 的內部報酬率(IRR)為 18%,Project N 的 IRR 為 14%。組織所要求的最低報酬率(障礙率)為 10%。兩專案彼此互斥——組織只能資助其中一個。請選出兩項正確的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Both projects clear the hurdle rate and would be financially acceptable as standalone investments.",
          zh: "兩專案的 IRR 皆高於障礙率,若單獨評估皆具財務可行性。",
        },
      },
      {
        id: "b",
        text: {
          en: "Because Project M has the higher IRR, financial theory guarantees that it will also have the higher NPV.",
          zh: "因為 Project M 的 IRR 較高,財務理論保證它的 NPV 也一定較高。",
        },
      },
      {
        id: "c",
        text: {
          en: "Since the projects are mutually exclusive, the organization should choose based on IRR ranking alone, without comparing NPV.",
          zh: "由於兩專案互斥,組織應僅依 IRR 排名做決定,不須比較 NPV。",
        },
      },
      {
        id: "d",
        text: {
          en: "When ranking mutually exclusive projects, NPV is generally considered a more reliable decision criterion than IRR.",
          zh: "在為互斥專案排序時,NPV 通常被認為是比 IRR 更可靠的決策依據。",
        },
      },
      {
        id: "e",
        text: {
          en: "Because both IRRs exceed the hurdle rate, the organization should fund both projects.",
          zh: "因為兩者的 IRR 皆高於障礙率,組織應該同時資助兩個專案。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "d",
    ],
    selectCount: 2,
    explanation: "兩專案的 IRR 皆高於 10% 的障礙率,若彼此獨立皆值得投資。但由於現金流的規模與時間分布不同,IRR 較高並不保證 NPV 也較高(選項 (b) 為常見的財務理論陷阱);面對互斥專案,財務理論上普遍建議以 NPV(直接反映創造的價值金額)作為主要排序依據,而非單憑 IRR 排名。此外,「互斥」代表只能擇一,選項 (e) 同時資助兩者的敘述自相矛盾。",
  },
  {
    id: "fin-059",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Regarding the Management Reserve, select the two statements that are correct. Select two.",
      zh: "關於管理準備金(Management Reserve),請選出兩項正確的敘述。請選擇兩項。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It is part of the overall Project Budget but is not part of the Cost Baseline.",
          zh: "它屬於整體專案預算的一部分,但不屬於成本基準的一部分。",
        },
      },
      {
        id: "b",
        text: {
          en: "Using it requires approval from the sponsor or higher-level management.",
          zh: "動用它須經贊助人或更高階管理層核准。",
        },
      },
      {
        id: "c",
        text: {
          en: "It is intended to cover risks that were already identified and documented in the risk register.",
          zh: "它是用來因應已識別並記錄於風險登錄冊中的風險。",
        },
      },
      {
        id: "d",
        text: {
          en: "It is automatically replenished at the start of each new reporting period.",
          zh: "它會在每個新的報告期間開始時自動補足。",
        },
      },
      {
        id: "e",
        text: {
          en: "The Performance Measurement Baseline (PMB) includes the Management Reserve.",
          zh: "績效衡量基準(PMB)包含管理準備金。",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "Management Reserve(管理準備金)因應未識別風險(Unknown-Unknown),屬於 Project Budget 但不包含在 Cost Baseline(即 PMB,績效衡量基準)之內,動用時須經贊助人或更高階管理層核准。它並非用於已識別風險(那是 Contingency Reserve 的功能),也不會自動於每期補足——一旦動用即減少剩餘的準備金額度,除非經正式變更程序重新編列。",
  },
  {
    id: "fin-060",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each financial evaluation metric to its correct definition.",
      zh: "請將下列財務評估指標拖曳配對到正確的定義。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Net Present Value (NPV)",
            zh: "淨現值(NPV)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Internal Rate of Return (IRR)",
            zh: "內部報酬率(IRR)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Return on Investment (ROI)",
            zh: "投資報酬率(ROI)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Benefit-Cost Ratio (BCR)",
            zh: "效益成本比(BCR)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Payback Period",
            zh: "回收期",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The discount rate at which a project's NPV equals zero",
            zh: "使專案 NPV 等於零的折現率",
          },
        },
        {
          id: "c2",
          text: {
            en: "The sum of a project's discounted future cash inflows minus its initial investment, expressed in monetary terms",
            zh: "專案未來現金流入折現值加總後減去初始投資,以金額表示",
          },
        },
        {
          id: "c3",
          text: {
            en: "Net profit divided by the cost of the investment, expressed as a percentage",
            zh: "淨利除以投資成本,以百分比表示",
          },
        },
        {
          id: "c4",
          text: {
            en: "The ratio of expected benefits to expected costs",
            zh: "預期效益與預期成本的比值",
          },
        },
        {
          id: "c5",
          text: {
            en: "The length of time required for cumulative cash inflows to equal the initial investment",
            zh: "累積現金流入等於初始投資所需的時間長度",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c2",
      p2: "c1",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "NPV 以貨幣金額表示投資創造的淨價值;IRR 是使 NPV 為零的折現率,反映投資的預期報酬率;ROI 以百分比衡量投資效率;BCR 是效益與成本的比值,用於商業論證的財務可行性評估;Payback Period 則只回答「多久回本」,不考慮回收期之後的現金流與貨幣時間價值。五者是商業論證(Business Case)中最常見的財務評估指標,考生須清楚分辨各自的表示單位與計算邏輯。",
  },
  {
    id: "fin-061",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each element of the Cost Management Plan to its correct purpose.",
      zh: "請將下列成本管理計畫(Cost Management Plan)的組成要素拖曳配對到正確的用途。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Units of Measure",
            zh: "計量單位",
          },
        },
        {
          id: "p2",
          text: {
            en: "Level of Precision",
            zh: "精確度",
          },
        },
        {
          id: "p3",
          text: {
            en: "Control Thresholds",
            zh: "控制門檻",
          },
        },
        {
          id: "p4",
          text: {
            en: "Rules of Performance Measurement",
            zh: "績效衡量規則",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Defines the unit used for resource estimates, such as staff hours, staff days, or a lump sum",
            zh: "定義資源估算所用的單位,如人時、人天或總價",
          },
        },
        {
          id: "c2",
          text: {
            en: "Defines the degree of rounding used for activity cost estimates, such as to the nearest $100 or $1,000",
            zh: "定義活動成本估算的四捨五入精確程度,如至百元或千元",
          },
        },
        {
          id: "c3",
          text: {
            en: "Defines the agreed variance limits (e.g., ±10%) that trigger action when actual performance deviates from the baseline",
            zh: "定義觸發因應行動的允許變異範圍(如 ±10%)",
          },
        },
        {
          id: "c4",
          text: {
            en: "Defines how EVM measures, such as which technique will be used to calculate percent complete, will be applied",
            zh: "定義如何運用 EVM 量測方法,如計算完成百分比所採用的技術",
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
    explanation: "Cost Management Plan(成本管理計畫)是 Plan Financial Management(規劃財務管理)過程的核心產出,其中定義了計量單位(如人時或總價)、精確度(估算的四捨五入程度)、控制門檻(觸發因應行動的允許變異範圍)以及績效衡量規則(如採用哪種 EVM 技術計算完成百分比)等要素,為後續的成本估算、預算發展與監控財務提供一致的規則基礎。",
  },
  {
    id: "fin-062",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each combination of CPI and SPI results to the project status it describes.",
      zh: "請將下列 CPI 與 SPI 的組合結果拖曳配對到其代表的專案狀態。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "CPI > 1 and SPI > 1",
            zh: "CPI > 1 且 SPI > 1",
          },
        },
        {
          id: "p2",
          text: {
            en: "CPI > 1 and SPI < 1",
            zh: "CPI > 1 且 SPI < 1",
          },
        },
        {
          id: "p3",
          text: {
            en: "CPI < 1 and SPI > 1",
            zh: "CPI < 1 且 SPI > 1",
          },
        },
        {
          id: "p4",
          text: {
            en: "CPI < 1 and SPI < 1",
            zh: "CPI < 1 且 SPI < 1",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Under budget and ahead of schedule — the most favorable combination",
            zh: "低於預算且進度超前——最理想的組合",
          },
        },
        {
          id: "c2",
          text: {
            en: "Under budget but behind schedule — often caused by insufficient staffing or resource shortages",
            zh: "低於預算但進度落後——常因人力或資源不足所致",
          },
        },
        {
          id: "c3",
          text: {
            en: "Over budget but ahead of schedule — often caused by crashing the schedule with extra resources or overtime",
            zh: "超出預算但進度超前——常因趕工投入額外資源或加班所致",
          },
        },
        {
          id: "c4",
          text: {
            en: "Over budget and behind schedule — the least favorable combination, requiring immediate corrective action",
            zh: "超出預算且進度落後——最不理想的組合,須立即採取矯正行動",
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
    explanation: "CPI 與 SPI 的四種組合各自對應不同的專案健康狀況:雙優(省錢又超前)、CPI 佳但 SPI 差(省錢但落後,常見於人力不足)、CPI 差但 SPI 佳(超支但超前,常見於趕工)、雙差(超支又落後,最需立即介入)。考生應熟悉這四種組合背後的常見成因,而非只會死記公式數字。",
  },
  {
    id: "fin-063",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each financial evaluation method to its correct accept/reject decision rule.",
      zh: "請將下列財務評估方法拖曳配對到正確的接受/拒絕決策原則。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "NPV decision rule",
            zh: "NPV 決策原則",
          },
        },
        {
          id: "p2",
          text: {
            en: "IRR decision rule",
            zh: "IRR 決策原則",
          },
        },
        {
          id: "p3",
          text: {
            en: "Payback Period decision rule",
            zh: "回收期決策原則",
          },
        },
        {
          id: "p4",
          text: {
            en: "BCR decision rule",
            zh: "BCR 決策原則",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Accept if NPV is greater than zero; reject if NPV is less than zero",
            zh: "若 NPV 大於零則接受;若 NPV 小於零則拒絕",
          },
        },
        {
          id: "c2",
          text: {
            en: "Accept if IRR is greater than the organization's required rate of return (hurdle rate); reject if it is lower",
            zh: "若 IRR 大於組織要求的最低報酬率(障礙率)則接受;若低於則拒絕",
          },
        },
        {
          id: "c3",
          text: {
            en: "Accept if the investment is recovered within the organization's maximum acceptable payback period; reject if it takes longer",
            zh: "若能在組織可接受的最長回收期內回收投資則接受;若超過則拒絕",
          },
        },
        {
          id: "c4",
          text: {
            en: "Accept if BCR is greater than 1 (benefits exceed costs); reject if BCR is less than 1",
            zh: "若 BCR 大於 1(效益超過成本)則接受;若小於 1 則拒絕",
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
    explanation: "四種財務評估方法各有其接受/拒絕的判斷基準:NPV 以零為門檻,IRR 以組織的障礙率為門檻,回收期法以組織可接受的最長回收時間為門檻,BCR 則以 1(效益等於成本)為門檻。實務上組織常同時參考多種指標,因為單一方法各有其限制(如回收期法忽略貨幣時間價值)。",
  },
  {
    id: "fin-064",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Your organization's required rate of return (hurdle rate) is 10%. Four independent proposed projects have the following IRRs: Project W = 14%, Project X = 9%, Project Y = 17%, Project Z = 12%. Click the one project that should be rejected based on the IRR decision rule.",
      zh: "貴組織要求的最低報酬率(障礙率)為 10%。四個獨立的提案專案 IRR 分別為:Project W = 14%、Project X = 9%、Project Y = 17%、Project Z = 12%。請根據 IRR 決策原則,點選應被拒絕的那個專案。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Project W, IRR = 14%",
          zh: "Project W,IRR = 14%",
        },
        x: 5,
        y: 5,
        width: 42,
        height: 40,
      },
      {
        id: "n2",
        label: {
          en: "Project X, IRR = 9%",
          zh: "Project X,IRR = 9%",
        },
        x: 52.5,
        y: 5,
        width: 42,
        height: 40,
      },
      {
        id: "n3",
        label: {
          en: "Project Y, IRR = 17%",
          zh: "Project Y,IRR = 17%",
        },
        x: 5,
        y: 52.5,
        width: 42,
        height: 40,
      },
      {
        id: "n4",
        label: {
          en: "Project Z, IRR = 12%",
          zh: "Project Z,IRR = 12%",
        },
        x: 52.5,
        y: 52.5,
        width: 42,
        height: 40,
      },
    ],
    correctAnswer: "n2",
    explanation: "IRR 決策原則:當專案的 IRR 高於組織要求的最低報酬率(障礙率)時應接受,低於障礙率則應拒絕。四個專案中,只有 Project X 的 IRR(9%)低於 10% 的障礙率,代表其預期報酬不足以覆蓋資金成本,應予拒絕;其餘三個專案的 IRR 皆高於障礙率,皆具財務可行性。",
  },
  {
    id: "fin-065",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A cumulative cost S-curve chart plots three lines: PV (planned budget), EV (earned value), and AC (actual cost). In this report, the EV line is plotted above the PV line. Click the line that, when compared to PV, indicates the project is currently ahead of schedule.",
      zh: "一張累積成本 S 曲線圖上繪製了三條線:PV(計畫預算)、EV(實獲值)、AC(實際成本)。在此報表中,EV 線繪製的位置高於 PV 線。請點選「與 PV 相比時,代表專案目前進度超前」的曲線。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "PV line",
          zh: "PV 曲線(計畫值)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "EV line",
          zh: "EV 曲線(實獲值)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "AC line",
          zh: "AC 曲線(實際成本)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "判斷進度超前或落後應比較 EV 與 PV(而非 AC):SV = EV − PV,若 EV 高於 PV,代表截至目前實際完成的工作價值超過計畫應完成的價值,SV 為正值,即進度超前。EV 線位於 PV 線之上,正是進度超前的圖形化表現;AC 線代表實際花費,是用來與 EV 比較判斷預算表現(CV = EV − AC),並非判斷進度超前或落後的比較基準。",
  },
  {
    id: "fin-066",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The diagram shows a three-point cost estimate: Optimistic, Most Likely, and Pessimistic. Click the point that is given four times the weight of the other two points in the PERT (Beta distribution) weighted-average formula.",
      zh: "下圖顯示三點成本估算:樂觀值、最可能值、悲觀值。請點選在 PERT(Beta 分佈)加權平均公式中,被賦予「其他兩點 4 倍權重」的那個點。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Optimistic (O)",
          zh: "樂觀值(O)",
        },
        x: 5,
        y: 40,
        width: 25,
        height: 30,
      },
      {
        id: "n2",
        label: {
          en: "Most Likely (M)",
          zh: "最可能值(M)",
        },
        x: 37.5,
        y: 10,
        width: 25,
        height: 30,
      },
      {
        id: "n3",
        label: {
          en: "Pessimistic (P)",
          zh: "悲觀值(P)",
        },
        x: 70,
        y: 40,
        width: 25,
        height: 30,
      },
    ],
    correctAnswer: "n2",
    explanation: "PERT 加權平均公式為 (O + 4M + P) / 6,其中 Most Likely(最可能值,M)被賦予 4 倍的權重,而 Optimistic(樂觀值,O)與 Pessimistic(悲觀值,P)則各佔 1 倍權重,反映實務上成本分佈通常集中在最可能值附近的特性,這也是 PERT 加權平均與簡單三角分佈平均(O+M+P)/3 的關鍵差異。",
  },
  {
    id: "fin-067",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project's cost timeline runs from Month 1 to Month 12. The project status date (\"Today\") falls at the end of Month 8. Click the segment of the timeline that represents Sunk Cost — money already spent that should NOT influence the go/no-go decision for the remainder of the project.",
      zh: "某專案的成本時間軸從第 1 個月延伸到第 12 個月。專案的狀態日(「今天」)落在第 8 個月月底。請點選時間軸上「代表沉沒成本(Sunk Cost)」的那個區段——也就是已經花費、不應影響剩餘工作續行/終止決策的金錢。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Month 1–8 spending (before the status date)",
          zh: "第 1–8 個月支出(狀態日之前)",
        },
        x: 5,
        y: 30,
        width: 35,
        height: 40,
      },
      {
        id: "n2",
        label: {
          en: "\"Today\"",
          zh: "status date marker (end of Month 8) / 「今天」/ 狀態日標記(第 8 個月月底)",
        },
        x: 42.5,
        y: 30,
        width: 15,
        height: 40,
      },
      {
        id: "n3",
        label: {
          en: "Month 9–12 planned future spending",
          zh: "第 9–12 個月的計畫未來支出",
        },
        x: 60,
        y: 30,
        width: 35,
        height: 40,
      },
    ],
    correctAnswer: "n1",
    explanation: "Sunk Cost(沉沒成本)是指已經花費且無法收回的金錢,理性的續行/終止決策應只比較「未來」的成本與效益,而忽略已經發生的沉沒成本。第 1–8 個月的支出已經發生,無論專案未來繼續或終止都無法收回,屬於沉沒成本;第 9–12 個月的計畫支出則是「未來」成本,才是決策時真正應該納入考量的部分。",
  },
  {
    id: "fin-068",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A project's work package cost estimates total $840,000. The Contingency Reserve is $60,000, and the Management Reserve is $100,000. The Cost Baseline is {{blank1}}, and the total Project Budget is {{blank2}}.",
      zh: "某專案的工作包成本估算總額為 $840,000。應變準備金(Contingency Reserve)為 $60,000,管理準備金(Management Reserve)為 $100,000。成本基準(Cost Baseline)為 {{blank1}},專案預算(Project Budget)總額為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "$780,000",
              zh: "$780,000",
            },
          },
          {
            id: "b",
            text: {
              en: "$900,000",
              zh: "$900,000",
            },
          },
          {
            id: "c",
            text: {
              en: "$940,000",
              zh: "$940,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$1,000,000",
              zh: "$1,000,000",
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
              en: "$900,000",
              zh: "$900,000",
            },
          },
          {
            id: "b",
            text: {
              en: "$960,000",
              zh: "$960,000",
            },
          },
          {
            id: "c",
            text: {
              en: "$1,000,000",
              zh: "$1,000,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$1,040,000",
              zh: "$1,040,000",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "c",
    },
    explanation: "Cost Baseline(成本基準)= 工作包成本估算加總 + Contingency Reserve = 840,000 + 60,000 = 900,000。Project Budget(專案預算)= Cost Baseline + Management Reserve = 900,000 + 100,000 = 1,000,000。此題以實際數字驗證成本基準與專案預算的層級加總關係。",
  },
  {
    id: "fin-069",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A company already spent $50,000 developing a prototype that turned out to be unusable; this amount is a {{blank1}}. By choosing to continue funding this project, the company gives up the chance to invest that capital in a different initiative expected to return $80,000; this forgone amount is a {{blank2}}.",
      zh: "某公司已花費 $50,000 開發一項結果證明無法使用的原型;此金額屬於 {{blank1}}。若該公司選擇繼續投入此專案,就等於放棄將此資金投入另一項預期報酬為 $80,000 的其他方案的機會;這筆放棄的金額屬於 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Sunk Cost(沉沒成本)",
              zh: "沉沒成本(Sunk Cost)",
            },
          },
          {
            id: "b",
            text: {
              en: "Opportunity Cost(機會成本)",
              zh: "機會成本(Opportunity Cost)",
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
              en: "Sunk Cost(沉沒成本)",
              zh: "沉沒成本(Sunk Cost)",
            },
          },
          {
            id: "b",
            text: {
              en: "Opportunity Cost(機會成本)",
              zh: "機會成本(Opportunity Cost)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "Sunk Cost(沉沒成本)是已經花費且無法收回的金錢,理性決策不應受其影響;Opportunity Cost(機會成本)則是選擇某一方案時,所放棄的次佳替代方案之價值。本題中已花費且無法回收的原型開發費用屬於沉沒成本,而繼續投入本專案所放棄的其他方案報酬則屬於機會成本,兩者是財務決策中最容易混淆的一組概念。",
  },
  {
    id: "fin-070",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Machine X has a purchase price of $80,000 and an annual operating cost of $12,000 for its 5-year useful life. Machine Y has a purchase price of $50,000 and an annual operating cost of $20,000 for the same 5-year period. Using life-cycle costing, the total life-cycle cost of Machine X is {{blank1}}, and the total life-cycle cost of Machine Y is {{blank2}}.",
      zh: "Machine X 的購置價格為 $80,000,5 年使用年限內每年運維成本 $12,000。Machine Y 的購置價格為 $50,000,同樣 5 年期間每年運維成本 $20,000。以生命週期成本法計算,Machine X 的生命週期總成本為 {{blank1}},Machine Y 的生命週期總成本為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "$92,000",
              zh: "$92,000",
            },
          },
          {
            id: "b",
            text: {
              en: "$140,000",
              zh: "$140,000",
            },
          },
          {
            id: "c",
            text: {
              en: "$150,000",
              zh: "$150,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$60,000",
              zh: "$60,000",
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
              en: "$100,000",
              zh: "$100,000",
            },
          },
          {
            id: "b",
            text: {
              en: "$140,000",
              zh: "$140,000",
            },
          },
          {
            id: "c",
            text: {
              en: "$150,000",
              zh: "$150,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$70,000",
              zh: "$70,000",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "c",
    },
    explanation: "生命週期總成本 = 購置價格 + (年運維成本 × 使用年限)。Machine X = 80,000 + (12,000 × 5) = 80,000 + 60,000 = 140,000。Machine Y = 50,000 + (20,000 × 5) = 50,000 + 100,000 = 150,000。雖然 Machine Y 的前期購置價格較低,但其較高的年運維成本使其生命週期總持有成本反而高於 Machine X,這正是生命週期成本法(Life-Cycle Costing)強調「不能只看前期價格」的核心觀念。",
  },
  {
    id: "fin-071",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Finance",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "A project has PV = $175,000, EV = $160,000, and AC = $185,000 at the status date. The Cost Variance (CV) is {{blank1}}, indicating the project is currently {{blank2}} budget.",
      zh: "某專案於狀態日 PV(計畫值)= $175,000、EV(實獲值)= $160,000、AC(實際成本)= $185,000。成本變異(CV)為 {{blank1}},代表專案目前{{blank2}}預算。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "−$25,000",
              zh: "−$25,000",
            },
          },
          {
            id: "b",
            text: {
              en: "+$25,000",
              zh: "+$25,000",
            },
          },
          {
            id: "c",
            text: {
              en: "−$15,000",
              zh: "−$15,000",
            },
          },
          {
            id: "d",
            text: {
              en: "+$15,000",
              zh: "+$15,000",
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
              en: "under(低於)",
              zh: "低於(under)",
            },
          },
          {
            id: "b",
            text: {
              en: "over(超出)",
              zh: "超出(over)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "CV = EV − AC = 160,000 − 185,000 = −25,000。CV 為負值表示實際花費(AC)超過已完成工作的價值(EV),即專案目前超出預算(over budget)。選項 (c)/(d) 的 −$15,000 是誤將 EV−PV(= 160,000−175,000 = −15,000,此為 SV 而非 CV)當成 CV 計算。",
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
    id: "stk-001",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which communication method is most appropriate for distributing a large volume of reference material, such as a project glossary or technical specifications, that team members can access as needed?",
      zh: "若要發布大量參考資料(如專案術語表或技術規格文件),讓團隊成員依需要自行取用,下列何種溝通方法最合適?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Interactive communication",
          zh: "互動式溝通(Interactive)",
        },
      },
      {
        id: "b",
        text: {
          en: "Push communication",
          zh: "推播式溝通(Push)",
        },
      },
      {
        id: "c",
        text: {
          en: "Pull communication",
          zh: "拉取式溝通(Pull)",
        },
      },
      {
        id: "d",
        text: {
          en: "Formal verbal communication",
          zh: "正式口頭溝通",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "Pull(拉取式)溝通適合大量、非急迫的參考資料,由接收者主動取用,例如知識庫、公告欄或文件庫;Push(推播式)適合一般性資訊主動發送;Interactive(互動式)則用於重要且緊急、需雙向即時互動的訊息。",
  },
  {
    id: "stk-002",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A key stakeholder who was previously supportive of the project has started missing status meetings and delaying approvals. What should the project manager do first?",
      zh: "一位原本支持專案的關鍵利害關係人,近期開始缺席狀態會議並延遲核准事項。專案經理應優先採取下列何種行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Escalate immediately to the sponsor for disciplinary action",
          zh: "立即上報贊助人要求紀律處分",
        },
      },
      {
        id: "b",
        text: {
          en: "Investigate the underlying cause of the changed engagement level before acting",
          zh: "先調查參與程度改變的根本原因,再採取行動",
        },
      },
      {
        id: "c",
        text: {
          en: "Remove the stakeholder from the stakeholder register",
          zh: "將該利害關係人自登錄表中移除",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the change since meeting attendance is not a formal project metric",
          zh: "忽略此變化,因會議出席率並非正式專案指標",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "PM應先找出利害關係人態度轉變的根本原因(可能是溝通不足或利益受損),再調整參與(Engagement)策略,而非直接懲處或忽視,這符合Manage Stakeholder Engagement主動了解並回應的精神。",
  },
  {
    id: "stk-003",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which two of the following actions are appropriate when a project team grows from 6 to 10 members partway through the project? (Select two.)",
      zh: "若專案團隊人數在專案執行期間由6人成長至10人,下列哪兩項是恰當的作法?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Recalculate the number of communication channels to anticipate increased communication complexity",
          zh: "重新計算溝通管道數,以預估溝通複雜度的增加",
        },
      },
      {
        id: "b",
        text: {
          en: "Keep the original Communications Management Plan unchanged",
          zh: "維持原本的溝通管理計畫不變",
        },
      },
      {
        id: "c",
        text: {
          en: "Update the Communications Management Plan to reflect new stakeholders' information needs",
          zh: "更新溝通管理計畫以反映新利害關係人的資訊需求",
        },
      },
      {
        id: "d",
        text: {
          en: "Assume all new members have the same communication needs as the original team",
          zh: "假設所有新成員的溝通需求與原團隊成員相同",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "團隊人數增加會使溝通管道數以N(N-1)/2成長,PM應重新計算並更新溝通管理計畫,依新成員的資訊需求調整溝通方式,而非假設不變。",
  },
  {
    id: "stk-004",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "A stakeholder is currently at the {{blank1}} engagement level (aware of the project but opposed to its outcomes). To move this stakeholder toward becoming supportive, the project manager should first focus on making them {{blank2}}.",
      zh: "某利害關係人目前處於 {{blank1}} 參與程度(知道專案存在但反對其結果)。若要使其朝向支持轉變,專案經理應先設法使其變為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Unaware",
              zh: "不知情(Unaware)",
            },
          },
          {
            id: "b",
            text: {
              en: "Resistant",
              zh: "抗拒(Resistant)",
            },
          },
          {
            id: "c",
            text: {
              en: "Supportive",
              zh: "支持(Supportive)",
            },
          },
          {
            id: "d",
            text: {
              en: "Leading",
              zh: "主導(Leading)",
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
              en: "Neutral",
              zh: "中立(Neutral)",
            },
          },
          {
            id: "b",
            text: {
              en: "Leading",
              zh: "主導(Leading)",
            },
          },
          {
            id: "c",
            text: {
              en: "Unaware",
              zh: "不知情(Unaware)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "Engagement程度依序為Unaware→Resistant→Neutral→Supportive→Leading。已知專案但反對屬於Resistant;要往Supportive移動,應先設法讓其轉為中立(Neutral)再逐步提升,而非期望其跳躍式直接變為支持。",
  },
  {
    id: "stk-005",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Stakeholders performance domain process to its primary output.",
      zh: "請將下列利害關係人績效領域流程拖曳配對到其主要產出。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Identify Stakeholders",
            zh: "識別利害關係人(Identify Stakeholders)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Plan Stakeholder Engagement",
            zh: "規劃利害關係人參與(Plan Stakeholder Engagement)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Plan Communications Management",
            zh: "規劃溝通管理(Plan Communications Management)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Manage Communications",
            zh: "管理溝通(Manage Communications)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Stakeholder Register",
            zh: "利害關係人登錄表(Stakeholder Register)",
          },
        },
        {
          id: "c2",
          text: {
            en: "Stakeholder Engagement Plan",
            zh: "利害關係人參與計畫(Stakeholder Engagement Plan)",
          },
        },
        {
          id: "c3",
          text: {
            en: "Communications Management Plan",
            zh: "溝通管理計畫(Communications Management Plan)",
          },
        },
        {
          id: "c4",
          text: {
            en: "Project Communications",
            zh: "專案溝通紀錄(Project Communications)",
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
    explanation: "識別利害關係人產出登錄表(名冊+分析);規劃利害關係人參與(Stakeholder Engagement)產出利害關係人參與計畫(Stakeholder Engagement Plan)(如何讓利害關係人從目前狀態移動到期望狀態);規劃溝通管理產出溝通管理計畫;管理溝通則依計畫實際發送資訊,產出專案溝通紀錄。",
  },
  {
    id: "stk-006",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project team consists of 9 members. How many communication channels exist among the team?",
      zh: "某專案團隊共有9位成員,團隊成員之間共有多少條溝通管道?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "18",
          zh: "18",
        },
      },
      {
        id: "b",
        text: {
          en: "36",
          zh: "36",
        },
      },
      {
        id: "c",
        text: {
          en: "45",
          zh: "45",
        },
      },
      {
        id: "d",
        text: {
          en: "72",
          zh: "72",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "溝通管道數公式為N(N-1)/2,N=9時為9×8/2=36條。此公式用來評估溝通複雜度隨團隊人數增加呈指數成長。",
  },
  {
    id: "stk-007",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A team currently has 7 members, giving 21 communication channels. Click the card showing the correct number of communication channels after 3 more members join (total 10 members).",
      zh: "團隊目前有7位成員,共有21條溝通管道。若再加入3位成員(共10人),請點選顯示正確溝通管道數的卡片。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "30 channels",
          zh: "30條管道",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "40 channels",
          zh: "40條管道",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "45 channels",
          zh: "45條管道",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "55 channels",
          zh: "55條管道",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n3",
    explanation: "加入後總人數為10人,套用公式N(N-1)/2=10×9/2=45條。此類題型應以新的N值重新計算總管道數,而非在原21條基礎上直接相加估算。",
  },
  {
    id: "stk-008",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following best distinguish the Stakeholder Register from the Stakeholder Engagement Plan? (Select two.)",
      zh: "下列哪兩項最能區分「利害關係人登錄表」與「利害關係人參與計畫(Stakeholder Engagement Plan)」?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The Stakeholder Register records who stakeholders are and their characteristics",
          zh: "利害關係人登錄表記錄利害關係人是誰及其特徵",
        },
      },
      {
        id: "b",
        text: {
          en: "The Stakeholder Engagement Plan defines actions to move stakeholders toward a desired engagement level",
          zh: "參與計畫定義使利害關係人朝期望參與程度移動的行動",
        },
      },
      {
        id: "c",
        text: {
          en: "They are two names for the same document",
          zh: "兩者是同一份文件的不同名稱",
        },
      },
      {
        id: "d",
        text: {
          en: "Only the Stakeholder Register is updated throughout the project",
          zh: "只有登錄表會在專案全程持續更新",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "登錄表是「名冊+分析」,回答利害關係人是誰、有何特徵;參與計畫是「行動計畫」,規劃如何讓其從目前狀態移動到期望狀態。兩者皆需持續更新,並非同一份文件。",
  },
  {
    id: "stk-009",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Two senior stakeholders with high power and high interest have expressed conflicting directions for a key deliverable, and each has separately instructed different team members. What should the project manager do?",
      zh: "兩位高權力、高利益的資深利害關係人針對某項關鍵交付物提出相互矛盾的方向,且各自私下指示不同的團隊成員。專案經理應如何處理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Follow the instructions of whichever stakeholder has more formal authority",
          zh: "遵從職權較高的那位利害關係人指示",
        },
      },
      {
        id: "b",
        text: {
          en: "Ask the team to decide which instruction to follow",
          zh: "讓團隊自行決定要遵從哪一項指示",
        },
      },
      {
        id: "c",
        text: {
          en: "Facilitate a joint discussion to align both stakeholders on a single direction",
          zh: "促成雙方共同討論以達成一致方向",
        },
      },
      {
        id: "d",
        text: {
          en: "Proceed with the original plan and disregard both instructions",
          zh: "依原計畫進行,忽略兩者的指示",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "面對兩位高權力利害關係人意見衝突,PM應依Manage Closely(密切管理)策略主動促成雙方溝通對齊,而非各自回應造成矛盾指示,也不應片面聽從其中一方或直接忽視。",
  },
  {
    id: "stk-010",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A critical scope change needs urgent negotiation with a resistant stakeholder within the same day. The project manager should use {{blank1}} communication, such as a face-to-face meeting or phone call, rather than {{blank2}} communication such as an email report.",
      zh: "某項重大範疇變更需在當天與一位抗拒的利害關係人緊急協商。專案經理應採用 {{blank1}} 溝通(如面對面會議或電話),而非 {{blank2}} 溝通(如email報告)。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Interactive",
              zh: "互動式(Interactive)",
            },
          },
          {
            id: "b",
            text: {
              en: "Push",
              zh: "推播式(Push)",
            },
          },
          {
            id: "c",
            text: {
              en: "Pull",
              zh: "拉取式(Pull)",
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
              en: "Interactive",
              zh: "互動式(Interactive)",
            },
          },
          {
            id: "b",
            text: {
              en: "Push",
              zh: "推播式(Push)",
            },
          },
          {
            id: "c",
            text: {
              en: "Pull",
              zh: "拉取式(Pull)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "重要且緊急的訊息(如衝突協商、重大變更討論)應使用Interactive溝通以雙向即時確認理解;Push溝通(如email報告)適合一般性、非急迫的資訊傳遞。",
  },
  {
    id: "stk-011",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Salience Model dimension to its description.",
      zh: "請將下列顯著性模型(Salience Model)的維度拖曳配對到對應描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Power",
            zh: "權力(Power)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Urgency",
            zh: "急迫性(Urgency)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Legitimacy",
            zh: "正當性(Legitimacy)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The stakeholder's ability to influence project outcomes",
            zh: "利害關係人影響專案結果的能力",
          },
        },
        {
          id: "c2",
          text: {
            en: "The need for immediate attention due to time sensitivity or criticality",
            zh: "因時間敏感或關鍵性而需立即關注的程度",
          },
        },
        {
          id: "c3",
          text: {
            en: "The appropriateness or formal validity of the stakeholder's involvement in the project",
            zh: "利害關係人參與專案的正當性或正式有效性",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
    },
    explanation: "Salience Model是Power/Interest Grid之外另一種利害關係人分類工具,依權力(Power)、急迫性(Urgency)、正當性(Legitimacy)三個維度評估利害關係人的顯著程度,協助識別容易被忽略但實際重要的利害關係人。",
  },
  {
    id: "stk-012",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A government regulatory agency is not directly involved in daily project work but has the authority to halt the project if compliance standards are not met. How should this agency be classified?",
      zh: "某政府監管機關並未直接參與專案日常工作,但擁有若不符合合規標準即可要求專案停止的權力。此機關應如何被歸類?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Not a stakeholder, since it is not involved in daily work",
          zh: "非利害關係人,因未參與日常工作",
        },
      },
      {
        id: "b",
        text: {
          en: "A stakeholder, since it can affect or be affected by the project's outcome",
          zh: "屬於利害關係人,因其能影響或受專案結果影響",
        },
      },
      {
        id: "c",
        text: {
          en: "A team member, since it has formal authority",
          zh: "屬於團隊成員,因其擁有正式職權",
        },
      },
      {
        id: "d",
        text: {
          en: "A vendor, since it enforces external requirements",
          zh: "屬於供應商,因其執行外部要求",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "利害關係人定義為任何會影響專案或受專案影響的個人或團體。監管機關雖不直接參與執行,但具備影響專案(甚至停止專案)的能力,屬於外部高權力利害關係人,應納入識別範圍並依Power/Interest Grid評估。",
  },
  {
    id: "stk-013",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which two of the following activities belong to Manage Stakeholder Engagement rather than Monitor Stakeholder Engagement? (Select two.)",
      zh: "下列哪兩項活動屬於「管理利害關係人參與」而非「監控利害關係人參與」?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Actively communicating with stakeholders to increase support and reduce resistance",
          zh: "主動與利害關係人溝通以提升支持度、降低抗拒",
        },
      },
      {
        id: "b",
        text: {
          en: "Reviewing whether current engagement levels match the plan",
          zh: "檢視目前參與程度是否符合計畫",
        },
      },
      {
        id: "c",
        text: {
          en: "Negotiating with a stakeholder to address a specific concern",
          zh: "與利害關係人協商以解決特定疑慮",
        },
      },
      {
        id: "d",
        text: {
          en: "Determining whether the Engagement Plan needs adjustment",
          zh: "判斷參與計畫是否需要調整",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "Manage Stakeholder Engagement屬於Executing(執行)流程,強調主動採取行動(如溝通、協商);Monitor Stakeholder Engagement屬於Monitoring & Controlling,強調檢視成效並視需要調整計畫,兩者常被誤認為同一流程。",
  },
  {
    id: "stk-014",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In the basic communication model, click the element that represents the factor that can distort or interfere with the message as it travels from sender to receiver.",
      zh: "在基本溝通模型中,請點選代表訊息從發送者傳遞到接收者過程中,可能造成訊息失真或干擾的因素。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Encode",
          zh: "編碼(Encode)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Medium",
          zh: "媒介(Medium)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Noise",
          zh: "干擾(Noise)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Feedback",
          zh: "回饋(Feedback)",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n3",
    explanation: "基本溝通模型為Sender→Encode→Message→Medium→Decode→Receiver→Feedback。其中Noise(干擾)是任何可能造成訊息在傳遞過程中失真或誤解的因素,例如語言差異、環境干擾或技術問題。",
  },
  {
    id: "stk-015",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Midway through the project, the team discovers that a regional regulatory body — not identified during initiation — has significant authority over the project's final deliverable. What should the project manager do?",
      zh: "專案執行到一半時,團隊發現一個在啟動階段未被識別的地區監管機構,對專案最終交付物擁有重大影響力。專案經理應如何處理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Ignore it since stakeholder identification is only performed at initiation",
          zh: "忽略此機構,因利害關係人識別僅於啟動階段執行一次",
        },
      },
      {
        id: "b",
        text: {
          en: "Update the Stakeholder Register and reassess the engagement strategy to include this stakeholder",
          zh: "更新利害關係人登錄表,並重新評估參與(Engagement)策略以納入此利害關係人",
        },
      },
      {
        id: "c",
        text: {
          en: "Escalate to the sponsor to cancel the project",
          zh: "上報贊助人要求取消專案",
        },
      },
      {
        id: "d",
        text: {
          en: "Wait until the next phase gate to address it",
          zh: "等到下一個階段關卡再處理",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Identify Stakeholders應貫穿整個專案生命週期,而非只在啟動階段執行一次。發現新的重大利害關係人時,應立即更新登錄表並依其權力/利益重新評估參與(Engagement)策略,避免後續合規風險。",
  },
  {
    id: "stk-016",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project team grows from 8 members to 12 members. The number of communication channels increases by {{blank1}}.",
      zh: "專案團隊人數由8人成長至12人,溝通管道數增加了 {{blank1}} 條。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "28",
              zh: "28",
            },
          },
          {
            id: "b",
            text: {
              en: "38",
              zh: "38",
            },
          },
          {
            id: "c",
            text: {
              en: "66",
              zh: "66",
            },
          },
          {
            id: "d",
            text: {
              en: "94",
              zh: "94",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
    },
    explanation: "需分別計算新舊N值的公式再相減:舊團隊8人管道數=8×7/2=28條;新團隊12人管道數=12×11/2=66條;增加數=66−28=38條,而非直接使用66或套用單一公式的總數作答。",
  },
  {
    id: "stk-017",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Drag and match each communication method to the scenario where it is most appropriate.",
      zh: "請將下列溝通方法拖曳配對到最適合使用的情境。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Interactive",
            zh: "互動式(Interactive)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Push",
            zh: "推播式(Push)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Pull",
            zh: "拉取式(Pull)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Urgently negotiating a scope conflict with a resistant stakeholder in real time",
            zh: "即時且緊急地與抗拒的利害關係人協商範疇衝突",
          },
        },
        {
          id: "c2",
          text: {
            en: "Sending a routine weekly status report to the project team",
            zh: "發送例行性每週狀態報告給專案團隊",
          },
        },
        {
          id: "c3",
          text: {
            en: "Hosting reference documentation in a shared knowledge base for on-demand access",
            zh: "將參考文件存放於共享知識庫供隨需取用",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
    },
    explanation: "重要且緊急的訊息應使用Interactive(雙向即時);一般性、例行性資訊使用Push(單向發送);大量非急迫的參考資料使用Pull(接收者主動取用)。此配對呼應依訊息重要性與急迫性選擇溝通方法的原則。",
  },
  {
    id: "stk-018",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A stakeholder who was previously Supportive of the project has become Resistant after a recent scope change removed a feature they had requested. The project manager confirms the stakeholder's concern is valid. What is the most appropriate next step?",
      zh: "一位原本處於「支持(Supportive)」狀態的利害關係人,在近期一項範疇變更刪除了其原先要求的功能後,轉為「抗拒(Resistant)」。專案經理確認其疑慮確實合理。下列何者為最適當的下一步?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Explain that the decision is final and cannot be revisited",
          zh: "說明決策已定案,無法再討論",
        },
      },
      {
        id: "b",
        text: {
          en: "Engage the stakeholder to understand their concern and explore options within project constraints",
          zh: "與該利害關係人溝通以了解其疑慮,並在專案限制內探討可行的因應方案",
        },
      },
      {
        id: "c",
        text: {
          en: "Avoid further contact with the stakeholder to prevent conflict",
          zh: "避免再與該利害關係人接觸以免衝突",
        },
      },
      {
        id: "d",
        text: {
          en: "Immediately reinstate the removed feature regardless of impact",
          zh: "不論影響為何,立即恢復被刪除的功能",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "利害關係人態度由支持轉為抗拒,常見根本原因是利益受損。PM應主動了解疑慮並在專案限制(範疇、時程、成本)內尋求因應方案,而非逃避溝通或未經評估就片面恢復原功能。",
  },
  {
    id: "stk-019",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A global project team spans multiple time zones and cultural backgrounds. Which two practices help ensure effective stakeholder communication in this context? (Select two.)",
      zh: "某全球專案團隊橫跨多個時區與文化背景。下列哪兩項作法有助於確保此情境下的有效利害關係人溝通?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Schedule all meetings in the project manager's local time zone for consistency",
          zh: "為求一致性,所有會議一律以專案經理所在時區安排",
        },
      },
      {
        id: "b",
        text: {
          en: "Combine synchronous meetings with asynchronous, pull-based documentation to accommodate time zone differences",
          zh: "結合同步會議與非同步、拉取式文件,以因應時區差異",
        },
      },
      {
        id: "c",
        text: {
          en: "Tailor communication style and formality to respect the cultural norms of each stakeholder group",
          zh: "依各利害關係人群體的文化規範調整溝通風格與正式程度",
        },
      },
      {
        id: "d",
        text: {
          en: "Assume a single communication method works equally well for all cultural groups",
          zh: "假設單一溝通方法適用於所有文化群體",
        },
      },
    ],
    correctAnswer: [
      "b",
      "c",
    ],
    selectCount: 2,
    explanation: "跨文化/跨時區情境應避免因時區差異僅依賴純同步會議,宜結合非同步/拉取式文件因應;同時應依文化規範調整溝通風格與正式程度,而非採取一體適用的單一方法。",
  },
  {
    id: "stk-020",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Click the card that correctly describes the primary purpose of the Stakeholder Engagement Plan (as distinct from the Stakeholder Register).",
      zh: "請點選正確描述「利害關係人參與計畫(Stakeholder Engagement Plan)」主要目的的卡片(有別於利害關係人登錄表)。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "A list of all identified stakeholders and their contact information",
          zh: "所有已識別利害關係人及其聯絡資訊的清單",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Strategies and actions to move stakeholders from their current engagement level to a desired level",
          zh: "使利害關係人從目前參與程度移動至期望程度的策略與行動",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "A record of all communications sent during the project",
          zh: "專案期間所有已發送溝通的紀錄",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "A formula for calculating the number of communication channels",
          zh: "計算溝通管道數的公式",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "Stakeholder Register是「名冊+分析」;Stakeholder Engagement Plan則是「行動計畫」,定義每位利害關係人目前參與程度與期望達到的程度,並規劃如何促成此轉變,兩者常被誤認為同一份文件。",
  },
  {
    id: "stk-021",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During a Scrum retrospective, two team members keep restating their opposing positions about the root cause of a recurring blocker, and the discussion goes in circles without resolution. Which conflict resolution technique should the Scrum Master use to reach an outcome that both members will fully own and support?",
      zh: "在一次Scrum回顧會議中,兩位團隊成員針對某個反覆出現阻礙的根本原因,不斷重申彼此對立的立場,討論陷入僵局毫無進展。Scrum Master應採用下列哪一種衝突解決技巧,以達成雙方都能完全認同並支持的結果?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Withdraw/Avoid — postpone the topic to reduce tension in the meeting",
          zh: "撤退/迴避(Withdraw/Avoid)——擱置此議題以緩解會議中的緊張氣氛",
        },
      },
      {
        id: "b",
        text: {
          en: "Force/Direct — impose a decision to save time and move on",
          zh: "強制/命令(Force/Direct)——直接下決定以節省時間、繼續前進",
        },
      },
      {
        id: "c",
        text: {
          en: "Collaborate/Problem Solve — facilitate open dialogue to explore alternatives until both members genuinely agree on a solution",
          zh: "合作/解決問題(Collaborate/Problem Solve)——促進雙方公開對話,探討替代方案直到雙方真正認同解決方案",
        },
      },
      {
        id: "d",
        text: {
          en: "Compromise/Reconcile — have each member give up part of their position to reach a middle ground",
          zh: "妥協/調和(Compromise/Reconcile)——讓雙方各退一步達成折衷方案",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "Collaborate/Problem Solve(合作/解決問題)透過整合多方觀點達成雙方都真心認同並願意承擔的雙贏結果,最適合用於需要團隊真正認同、長久見效的情境,例如回顧會議中對改善行動的共識。Force雖然快速但容易造成怨懟;Compromise只讓雙方各得到部分滿足,未必是最佳長期方案;Withdraw只是擱置問題並未真正解決。由於回顧會議的目的是團隊真正擁有(own)改善行動,故Collaborate最為合適。",
  },
  {
    id: "stk-022",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "During project initiation, which two of the following techniques are appropriate for identifying stakeholders and understanding their expectations?",
      zh: "在專案啟動階段,下列哪兩項技巧適合用於識別利害關係人並了解其期望?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Conducting stakeholder analysis using tools such as the Power/Interest Grid",
          zh: "運用如權力/利益方格(Power/Interest Grid)等工具進行利害關係人分析",
        },
      },
      {
        id: "b",
        text: {
          en: "Reviewing organizational process assets and enterprise environmental factors, such as org charts and industry stakeholder lists",
          zh: "檢視組織過程資產與事業環境因素,例如組織圖與產業利害關係人清單",
        },
      },
      {
        id: "c",
        text: {
          en: "Only interviewing the project sponsor, since the sponsor represents all other stakeholders",
          zh: "只需訪談專案贊助人,因為贊助人可代表所有其他利害關係人",
        },
      },
      {
        id: "d",
        text: {
          en: "Waiting until the project charter is fully approved before identifying any stakeholders",
          zh: "等到專案章程完全核准後才開始識別利害關係人",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "Identify Stakeholders應運用利害關係人分析工具(如Power/Interest Grid)並參考組織過程資產與事業環境因素(如組織圖、產業利害關係人清單)以全面識別。僅訪談贊助人無法涵蓋所有利害關係人的觀點,且識別工作應盡早開始並貫穿整個專案生命週期,而非等章程核准後才進行。",
  },
  {
    id: "stk-023",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each direction of stakeholder influence to its description.",
      zh: "請將下列利害關係人影響力方向拖曳配對到對應描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Upward",
            zh: "向上(Upward)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Downward",
            zh: "向下(Downward)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Outward",
            zh: "向外(Outward)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Sideward",
            zh: "平行(Sideward)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Senior management, sponsors, and steering committee members who provide authority, resources, and strategic direction",
            zh: "提供職權、資源與策略方向的高階管理層、贊助人與指導委員會成員",
          },
        },
        {
          id: "c2",
          text: {
            en: "Team members who contribute knowledge, skills, and effort to accomplish the project work",
            zh: "貢獻知識、技能與努力以完成專案工作的團隊成員",
          },
        },
        {
          id: "c3",
          text: {
            en: "External parties such as suppliers, government agencies, the public, and end users who sit outside the direct organizational hierarchy",
            zh: "供應商、政府機關、大眾及最終使用者等位於組織直接層級之外的外部團體",
          },
        },
        {
          id: "c4",
          text: {
            en: "Peer project managers or functional managers who compete with the project for shared resources",
            zh: "與本專案共同競爭共享資源的其他專案經理或職能經理等平行同儕",
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
    explanation: "Directions of Influence(影響力方向)模型將利害關係人依其與專案的相對位置分為四類:向上(Upward,如高階管理層、贊助人)、向下(Downward,如專案團隊成員)、向外(Outward,如供應商、政府機關、大眾等組織外部團體)、平行(Sideward,如其他PM或職能經理等同儕)。此模型補充Power/Interest Grid與Salience Model,協助PM辨識不同層級關係人所需採取的溝通與影響策略。",
  },
  {
    id: "stk-024",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A functional manager controls a shared testing environment that this project depends on, giving them significant organizational power. However, the manager has shown very little personal interest in the outcome of this particular project and rarely responds to updates. According to the Power/Interest Grid, this stakeholder falls into the {{blank1}} quadrant, and the project manager should primarily focus on {{blank2}} rather than sending frequent detailed updates.",
      zh: "某職能經理掌控本專案所依賴的共用測試環境,因此擁有相當高的組織權力,但對這個專案的結果表現出很低的個人興趣,鮮少回應相關更新。依照權力/利益方格(Power/Interest Grid),此利害關係人屬於 {{blank1}} 象限,專案經理應主要專注於 {{blank2}},而非頻繁發送詳細更新。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Manage Closely",
              zh: "密切管理(Manage Closely)",
            },
          },
          {
            id: "b",
            text: {
              en: "Keep Satisfied",
              zh: "保持滿意(Keep Satisfied)",
            },
          },
          {
            id: "c",
            text: {
              en: "Monitor",
              zh: "監控(Monitor)",
            },
          },
          {
            id: "d",
            text: {
              en: "Keep Informed",
              zh: "隨時告知(Keep Informed)",
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
              en: "ensuring the manager's essential needs regarding the testing environment are met, without overwhelming them with routine details",
              zh: "確保該經理在測試環境方面的必要需求獲得滿足,同時避免以例行細節造成其負擔",
            },
          },
          {
            id: "b",
            text: {
              en: "sending the same daily detailed reports given to high-interest stakeholders",
              zh: "如同對高利益利害關係人一樣每日發送詳細報告",
            },
          },
          {
            id: "c",
            text: {
              en: "excluding the manager from all communications since interest is low",
              zh: "因其興趣低而將該經理排除在所有溝通之外",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "高權力、低利益的利害關係人應採取「保持滿意(Keep Satisfied)」策略:確保其關鍵需求(如測試環境的可用性)獲得滿足,避免其因不滿而動用權力介入或阻礙專案,但不需要如高利益利害關係人般頻繁提供詳細資訊,以免造成不必要的負擔;完全排除溝通則可能忽略其在關鍵時刻施加影響力的風險。",
  },
  {
    id: "stk-025",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A local community leader has no formal authority over the project's decisions (low power) but is very interested in and vocal about the project's environmental impact (high interest), frequently asking for updates. Click the card showing the engagement strategy that best fits this stakeholder according to the Power/Interest Grid.",
      zh: "某社區意見領袖對本專案決策沒有正式職權(低權力),但對專案的環境影響非常關心且經常表達意見(高利益),並頻繁要求提供最新資訊。請依權力/利益方格,點選最符合此利害關係人的參與策略卡片。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Manage Closely",
          zh: "密切管理",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Keep Informed",
          zh: "隨時告知",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Keep Satisfied",
          zh: "保持滿意",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Monitor",
          zh: "監控",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "低權力、高利益的利害關係人(如高度關心但無正式職權的社區意見領袖)應採取「隨時告知(Keep Informed)」策略,定期提供資訊回應其關切,但不需投入如高權力高利益者般密集的雙向合作資源;「密切管理」適用於高權力高利益者;「保持滿意」適用於高權力低利益者;「監控」適用於低權力低利益者。",
  },
  {
    id: "stk-026",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "When selecting the communication technology to include in the Communications Management Plan, which of the following factors should carry the LEAST weight in the decision?",
      zh: "在制定溝通管理計畫時選擇溝通科技,下列哪一項因素在決策中應佔的權重最小?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The urgency of the need for information",
          zh: "資訊需求的急迫程度",
        },
      },
      {
        id: "b",
        text: {
          en: "Availability and reliability of the technology within the project environment",
          zh: "該科技在專案環境中的可用性與穩定性",
        },
      },
      {
        id: "c",
        text: {
          en: "Ease of use and the team's familiarity with the technology",
          zh: "易用性及團隊對該科技的熟悉程度",
        },
      },
      {
        id: "d",
        text: {
          en: "A single team member's personal brand preference for a particular software vendor",
          zh: "單一團隊成員對特定軟體廠商的個人品牌偏好",
        },
      },
    ],
    correctAnswer: "d",
    explanation: "選擇溝通科技應考量資訊需求的急迫性、在專案環境中的可用性與穩定性,以及易用性與團隊熟悉度等專案層級因素;單一成員對特定廠商品牌的個人偏好並非決策的關鍵考量,應以整體專案與利害關係人需求為依歸,而非個人喜好。",
  },
  {
    id: "stk-027",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following are typically defined within the Communications Management Plan?",
      zh: "下列哪兩項通常會在溝通管理計畫中被定義?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The method, format, and frequency for distributing information to each stakeholder group",
          zh: "針對各利害關係人群體發送資訊所採用的方法、格式與頻率",
        },
      },
      {
        id: "b",
        text: {
          en: "The escalation process for resolving issues that cannot be settled at the project team level",
          zh: "無法在專案團隊層級解決之議題的升級處理流程",
        },
      },
      {
        id: "c",
        text: {
          en: "The detailed cost baseline used to measure project financial performance",
          zh: "用於衡量專案財務績效的詳細成本基準",
        },
      },
      {
        id: "d",
        text: {
          en: "The full risk register listing all identified project risks",
          zh: "列出所有已識別專案風險的完整風險登錄表",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "溝通管理計畫應定義各利害關係人的資訊需求、溝通方法/格式/頻率,以及當議題無法在團隊層級解決時的升級處理流程;成本基準屬於財務(成本)管理範疇,風險登錄表屬於風險管理範疇,均非溝通管理計畫的核心內容。",
  },
  {
    id: "stk-028",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "predictive_scenario",
    stem: {
      en: "During a virtual steering committee meeting, the video connection repeatedly freezes and several stakeholders miss key portions of the presenter's explanation. In the basic communication model, this connectivity problem is best classified as {{blank1}}. To confirm stakeholders actually understood the message despite the disruption, the presenter should specifically request {{blank2}} from them.",
      zh: "在一場虛擬指導委員會會議中,視訊連線多次凍結,導致部分利害關係人漏聽簡報者說明的關鍵內容。在基本溝通模型中,此連線問題最適合歸類為 {{blank1}}。為確認利害關係人在此干擾下是否確實理解訊息,簡報者應特別向他們徵求 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Encode",
              zh: "編碼(Encode)",
            },
          },
          {
            id: "b",
            text: {
              en: "Medium",
              zh: "媒介(Medium)",
            },
          },
          {
            id: "c",
            text: {
              en: "Noise",
              zh: "干擾(Noise)",
            },
          },
          {
            id: "d",
            text: {
              en: "Decode",
              zh: "解碼(Decode)",
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
              en: "Feedback",
              zh: "回饋(Feedback)",
            },
          },
          {
            id: "b",
            text: {
              en: "A formal change request",
              zh: "正式變更申請",
            },
          },
          {
            id: "c",
            text: {
              en: "A new stakeholder register entry",
              zh: "新的利害關係人登錄表項目",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "c",
      blank2: "a",
    },
    explanation: "Noise(干擾)是任何在訊息傳遞過程中造成失真或妨礙理解的因素,視訊凍結即屬此類;為確認訊息確實被正確理解,簡報者應主動徵求回饋(Feedback),這是溝通模型中用以驗證接收者理解程度的關鍵環節。",
  },
  {
    id: "stk-029",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The diagram below shows a simplified communication model with four elements connected in sequence. Click the element that represents the receiver's response confirming that the message was understood, sent back toward the original sender.",
      zh: "下圖為簡化的溝通模型,四個元素依序連接。請點選代表接收者確認已理解訊息,並回傳給原發送者的回應元素。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Encode",
          zh: "編碼(Encode)",
        },
        x: 2,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Medium",
          zh: "媒介(Medium)",
        },
        x: 27,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Decode",
          zh: "解碼(Decode)",
        },
        x: 52,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Feedback",
          zh: "回饋(Feedback)",
        },
        x: 77,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n4",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "完整溝通模型流程為Sender(發送者)將訊息編碼(Encode)後透過媒介(Medium)傳遞,由Receiver(接收者)解碼(Decode)後,再以回饋(Feedback)確認理解程度並回傳給原發送者,形成完整的溝通迴路。四個環節中,Feedback是唯一代表接收者確認理解、回傳給發送者的元素。",
  },
  {
    id: "stk-030",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During an active sprint, an external business stakeholder contacts a developer directly and asks the team to add a new feature immediately, bypassing the Product Owner. What should the developer do?",
      zh: "在進行中的衝刺(Sprint)期間,一位外部業務利害關係人直接聯繫某位開發人員,要求團隊立即新增一項功能,並未透過產品負責人(Product Owner)。該開發人員應如何處理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Immediately begin working on the new feature since it comes from a business stakeholder",
          zh: "因為是業務利害關係人的要求,應立即著手開發該功能",
        },
      },
      {
        id: "b",
        text: {
          en: "Redirect the stakeholder to submit the request to the Product Owner for backlog prioritization, and protect the current sprint scope",
          zh: "引導該利害關係人將需求提交給產品負責人以納入待辦清單排序評估,並維持目前衝刺範疇不變",
        },
      },
      {
        id: "c",
        text: {
          en: "Refuse to communicate with the stakeholder at all going forward",
          zh: "從此拒絕與該利害關係人有任何溝通",
        },
      },
      {
        id: "d",
        text: {
          en: "Add the feature to the sprint but tell no one on the team",
          zh: "將該功能加入衝刺,但不告知團隊其他成員",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "在Scrum中,產品負責人是與利害關係人溝通需求優先順序的單一窗口。開發人員應引導該利害關係人透過正式管道(向PO提出並納入待辦清單評估),而非繞過流程直接變更衝刺範疇,這也保護了團隊當前衝刺承諾不被干擾;完全拒絕溝通或私下處理皆非恰當作法。",
  },
  {
    id: "stk-031",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A local community group has no formal authority or decision-making power over a construction project, but its members are directly and urgently affected by potential noise and environmental impact, and regulators recognize their concerns as valid and appropriate to raise. Using the Salience Model, which two attributes strongly characterize this stakeholder group?",
      zh: "某社區團體對某建設專案並無正式職權或決策權力,但其成員因潛在噪音與環境影響而直接且急迫地受到波及,且其疑慮被監管機關認定為合理且適當提出。依顯著性模型(Salience Model),下列哪兩項屬性最能描述此利害關係人群體?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Urgency, because the impact requires immediate attention due to time sensitivity",
          zh: "急迫性,因其影響具時間敏感性而需立即關注",
        },
      },
      {
        id: "b",
        text: {
          en: "Power, because they can directly halt project decisions",
          zh: "權力,因其能直接阻止專案決策",
        },
      },
      {
        id: "c",
        text: {
          en: "Legitimacy, because their involvement is recognized as appropriate and valid",
          zh: "正當性,因其參與被認定為合理有效",
        },
      },
      {
        id: "d",
        text: {
          en: "None of the three attributes apply, since they lack decision authority",
          zh: "三項屬性皆不適用,因其缺乏決策職權",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "依題意,此社區團體不具正式職權(Power),但因影響具時間敏感性而具急迫性(Urgency),且其關切被監管機關認定為正當合理的參與(Legitimacy)。這正是Salience Model用來補充Power/Interest Grid的價值:協助PM辨識出雖無正式權力、卻因急迫性與正當性而不容忽視的利害關係人群體。",
  },
  {
    id: "stk-032",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each stakeholder engagement level to the project manager action most appropriate for moving that stakeholder toward greater support.",
      zh: "請將下列利害關係人參與程度拖曳配對到最適合用來使其朝向更支持方向移動的專案經理行動。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Unaware",
            zh: "不知情(Unaware)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Resistant",
            zh: "抗拒(Resistant)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Neutral",
            zh: "中立(Neutral)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Supportive",
            zh: "支持(Supportive)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Leading",
            zh: "主導(Leading)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Share basic project information to build initial awareness of the project's existence and objectives",
            zh: "提供基本專案資訊,建立其對專案存在與目標的初步認知",
          },
        },
        {
          id: "c2",
          text: {
            en: "Investigate the root cause of resistance and address specific concerns through dialogue and negotiation",
            zh: "調查抗拒的根本原因,透過對話與協商解決具體疑慮",
          },
        },
        {
          id: "c3",
          text: {
            en: "Keep informed and build trust through consistent, transparent communication without over-persuading",
            zh: "透過持續且透明的溝通保持告知並建立信任,避免過度說服",
          },
        },
        {
          id: "c4",
          text: {
            en: "Leverage as an advocate to reinforce project value with other stakeholders",
            zh: "借助其影響力作為擁護者,向其他利害關係人強化專案價值",
          },
        },
        {
          id: "c5",
          text: {
            en: "Empower to actively co-lead engagement efforts and champion the project among peers",
            zh: "賦權使其能主動共同帶領參與工作,並在同儕間倡導專案",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "Engagement程度由低至高依序為Unaware→Resistant→Neutral→Supportive→Leading。PM針對不同程度應採取對應行動:對Unaware先建立基本認知;對Resistant應先找出根本原因並協商化解疑慮;對Neutral透過持續透明溝通累積信任(避免操之過急強力說服);對Supportive善用其影響力作為擁護者;對Leading則進一步賦權,使其主動帶領其他利害關係人參與,而非僅維持現狀不作為。",
  },
  {
    id: "stk-033",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The project manager and the sponsor disagree on whether to approve a schedule extension that exceeds the project manager's delegated authority, and the two cannot reach agreement through direct discussion. The project manager should {{blank1}}, following the escalation path defined in the {{blank2}}.",
      zh: "專案經理與贊助人對於是否核准一項超出專案經理授權範圍的時程延展有不同意見,雙方經直接討論仍無法達成共識。專案經理應 {{blank1}},並依照 {{blank2}} 中所定義的升級處理路徑進行。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "unilaterally approve the schedule extension without further approval",
              zh: "未經進一步核准即片面核准時程延展",
            },
          },
          {
            id: "b",
            text: {
              en: "escalate the issue to the next governance level, such as a steering committee or PMO",
              zh: "將議題上呈至下一個治理層級,例如指導委員會或PMO",
            },
          },
          {
            id: "c",
            text: {
              en: "wait indefinitely without taking further action",
              zh: "不採取進一步行動,無限期等待",
            },
          },
          {
            id: "d",
            text: {
              en: "remove the sponsor from the stakeholder register to avoid further conflict",
              zh: "將贊助人自利害關係人登錄表中移除以避免衝突",
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
              en: "Risk Register",
              zh: "風險登錄表",
            },
          },
          {
            id: "b",
            text: {
              en: "Communications Management Plan",
              zh: "溝通管理計畫",
            },
          },
          {
            id: "c",
            text: {
              en: "Scope Baseline",
              zh: "範疇基準",
            },
          },
          {
            id: "d",
            text: {
              en: "Team Charter",
              zh: "團隊章程",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "當議題超出專案經理授權範圍且雙方無法透過直接討論解決時,應依溝通管理計畫中預先定義的升級處理路徑(Escalation Path),將議題上呈至更高治理層級(如指導委員會或PMO)處理,而非片面決定、消極等待或移除利害關係人。",
  },
  {
    id: "stk-034",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following are early warning signs that a stakeholder's engagement level may be declining?",
      zh: "下列哪兩項是利害關係人參與程度可能正在下降的早期警訊?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Increasingly missing scheduled meetings and delaying required approvals",
          zh: "越來越常缺席排定的會議並延遲必要的核准",
        },
      },
      {
        id: "b",
        text: {
          en: "Responding to communications more slowly than before, with shorter and less detailed feedback",
          zh: "對溝通的回應比以往更慢,且提供的回饋越來越簡短、缺乏細節",
        },
      },
      {
        id: "c",
        text: {
          en: "Proactively volunteering to lead a new working group related to the project",
          zh: "主動自願帶領一個與專案相關的新工作小組",
        },
      },
      {
        id: "d",
        text: {
          en: "Submitting more detailed and frequent suggestions for improvement",
          zh: "提交更詳細且更頻繁的改善建議",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "缺席會議、延遲核准,以及回應變慢、回饋簡化,都是利害關係人參與程度下降的常見早期警訊,PM應主動留意並調查原因;主動請纓帶領工作小組或提供更多詳細建議則通常代表參與程度提升而非下降。",
  },
  {
    id: "stk-035",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A cost overrun has exceeded the threshold the project manager is authorized to approve, and negotiation with the immediate stakeholder has not resolved it. Based on the escalation hierarchy shown below, click the role to which the project manager should escalate this issue next.",
      zh: "某項成本超支已超出專案經理有權核准的門檻,且與直接相關利害關係人協商後仍未能解決。依下圖所示的升級層級,請點選專案經理接下來應將此議題上呈的角色。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Team Member",
          zh: "團隊成員",
        },
        x: 2,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Project Manager",
          zh: "專案經理",
        },
        x: 27,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Sponsor",
          zh: "贊助人",
        },
        x: 52,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Steering Committee",
          zh: "指導委員會",
        },
        x: 77,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "升級層級一般為:團隊成員 → 專案經理 → 贊助人 → 指導委員會。當議題(如超出專案經理授權門檻的成本超支)在專案經理層級無法解決時,下一步應上呈給贊助人(Sponsor)處理,而非跳過贊助人直接找指導委員會,也不應停留在自己層級不採取行動。",
  },
  {
    id: "stk-036",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Project Team A has 6 members and Project Team B has 5 members. The two teams are merged into a single 11-member team for a joint initiative. By how many communication channels does the total number of channels increase, compared to the sum of the two teams' channels when they were separate?",
      zh: "專案團隊A有6位成員,專案團隊B有5位成員。因合作案將兩隊合併為一個11人團隊。相較於兩隊分開時各自溝通管道數的總和,合併後溝通管道總數增加了多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "11",
          zh: "11",
        },
      },
      {
        id: "b",
        text: {
          en: "25",
          zh: "25",
        },
      },
      {
        id: "c",
        text: {
          en: "30",
          zh: "30",
        },
      },
      {
        id: "d",
        text: {
          en: "55",
          zh: "55",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "分開時管道數各自為:A隊 = 6×5/2 = 15條,B隊 = 5×4/2 = 10條,合計25條;合併後為11人團隊 = 11×10/2 = 55條。增加數 = 55 − 25 = 30條。此題重點在於團隊合併後應以合併後的總人數重新套用公式計算,而非簡單將兩隊人數或原有管道數相加估算,合併帶來的溝通複雜度增加往往超乎直覺。",
  },
  {
    id: "stk-037",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A distributed agile team spans Asia-Pacific, Europe, and the Americas. Several members report feeling excluded because major decisions are made only during a single synchronous daily stand-up scheduled at a time convenient for one region. Click the card describing the most appropriate communication approach for this situation.",
      zh: "某分散式敏捷團隊橫跨亞太、歐洲與美洲。多位成員反映,由於重大決策僅在一個對特定區域方便的單一同步每日站立會議中做出,他們感覺被排除在外。請點選最適合此情境的溝通作法卡片。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Require all members to attend a single daily stand-up at a fixed time regardless of local hours",
          zh: "要求所有成員一律出席固定時間的單一每日站立會議,不論當地時間為何",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Combine asynchronous written updates with rotating meeting times so the inconvenience is shared fairly across regions",
          zh: "結合非同步書面更新與輪流調整的會議時間,讓不便之處在各區域間公平分攤",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Communicate all decisions solely through email to avoid scheduling meetings entirely",
          zh: "完全僅透過email溝通所有決策,以避免安排會議",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Cancel synchronous meetings entirely and rely only on pre-recorded video updates",
          zh: "完全取消同步會議,僅依賴預錄影片更新",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "跨時區/跨文化的分散式團隊,應結合非同步書面更新(如共享看板留言)與輪流調整會議時間,讓時區帶來的不便在各區域間公平分攤,同時保留必要的同步討論;固定單一時區時間、完全依賴email、或完全取消同步溝通,皆可能造成部分成員被排除或重要決策缺乏即時互動確認。",
  },
  {
    id: "stk-038",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Two team members from different functional departments in a matrix organization report that their functional managers have assigned them conflicting priorities, threatening the project's deadline. What should the project manager do first?",
      zh: "在矩陣式組織中,兩位來自不同職能部門的團隊成員反映,其職能經理指派給他們相互衝突的優先順序,可能危及專案期限。專案經理應優先採取下列何種行動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Instruct the team members to disregard their functional managers' priorities",
          zh: "指示團隊成員不理會其職能經理指派的優先順序",
        },
      },
      {
        id: "b",
        text: {
          en: "Escalate immediately to senior management to reprimand the functional managers",
          zh: "立即上報高階管理層,要求對職能經理予以懲處",
        },
      },
      {
        id: "c",
        text: {
          en: "Directly discuss and negotiate with the functional managers to align resource priorities with project needs",
          zh: "直接與職能經理協商討論,將資源優先順序與專案需求對齊",
        },
      },
      {
        id: "d",
        text: {
          en: "Remove the two team members from the project and request replacements",
          zh: "將該兩位團隊成員自專案移除並要求替補人力",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "在矩陣組織中,職能經理與PM對同一資源可能有不同優先順序的需求,屬於PM需運用「平行(Sideward)」影響力管理的典型情境。PM應直接與職能經理溝通協商,尋求資源優先順序的共識,而非要求團隊成員自行忽視職能經理指示、越級上報懲處,或直接更換人力,這些做法都可能損害長期工作關係,且無法根本解決資源衝突。",
  },
  {
    id: "stk-039",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each base of power to its description.",
      zh: "請將下列權力基礎拖曳配對到對應描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Formal/Legitimate",
            zh: "法定職權(Formal/Legitimate)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Reward",
            zh: "獎賞權(Reward)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Expert",
            zh: "專家權(Expert)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Referent",
            zh: "參照權(Referent)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Coercive",
            zh: "強制權(Coercive)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Power derived from one's official position or title within the organizational hierarchy",
            zh: "源自於在組織層級中正式職位或頭銜的權力",
          },
        },
        {
          id: "c2",
          text: {
            en: "Power based on the ability to give something of value, such as bonuses, recognition, or desirable assignments",
            zh: "基於能給予有價值事物(如獎金、表揚或理想的工作指派)的權力",
          },
        },
        {
          id: "c3",
          text: {
            en: "Power based on specialized knowledge, skill, or perceived expertise in a particular subject area",
            zh: "基於特定領域的專業知識、技能或被認可的專業程度的權力",
          },
        },
        {
          id: "c4",
          text: {
            en: "Power derived from being respected, admired, or seen as a role model by others",
            zh: "源自被他人尊敬、仰慕或視為榜樣的權力",
          },
        },
        {
          id: "c5",
          text: {
            en: "Power based on the ability to impose penalties or negative consequences",
            zh: "基於施加懲罰或負面後果能力的權力",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "五種常見權力基礎:法定職權(源自正式職位)、獎賞權(能給予獎勵)、專家權(具備專業知識)、參照權(受他人尊敬仰慕而產生的影響力)、強制權(能施加懲罰)。PM應優先善用專家權與參照權建立長期信任的影響力,強制權雖存在但過度使用易損害團隊關係與利害關係人信任。",
  },
  {
    id: "stk-040",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which of the following is LEAST likely to be found in a Stakeholder Register?",
      zh: "下列何者最不可能出現在利害關係人登錄表(Stakeholder Register)中?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Stakeholder's name, role, and department",
          zh: "利害關係人的姓名、職稱與所屬部門",
        },
      },
      {
        id: "b",
        text: {
          en: "Stakeholder's classification, such as internal/external or power/interest level",
          zh: "利害關係人的分類,例如內部/外部或權力/利益程度",
        },
      },
      {
        id: "c",
        text: {
          en: "Stakeholder's key requirements, expectations, and potential influence on the project",
          zh: "利害關係人的主要需求、期望及對專案的潛在影響",
        },
      },
      {
        id: "d",
        text: {
          en: "A detailed breakdown of project deliverables and their acceptance criteria",
          zh: "專案交付物的詳細分解與驗收標準",
        },
      },
    ],
    correctAnswer: "d",
    explanation: "利害關係人登錄表通常記錄利害關係人的姓名/職稱/部門等識別資訊、分類(如內部外部、權力利益程度),以及需求/期望/潛在影響等分析內容;而交付物的詳細分解與驗收標準屬於範疇管理文件(如WBS、需求文件)的內容,並非利害關係人登錄表的內容。",
  },
  {
    id: "stk-041",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "During a tense discussion with a frustrated client about a missed milestone, the project manager pauses and restates the client's concerns in her own words before responding. Which interpersonal skill is the project manager primarily demonstrating?",
      zh: "在與一位對於錯過里程碑感到不滿的客戶進行緊張的討論時,專案經理停頓下來,並先用自己的話重述客戶的疑慮,才開始回應。專案經理主要展現的是下列哪一項人際互動技巧?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Active listening",
          zh: "主動傾聽(Active Listening)",
        },
      },
      {
        id: "b",
        text: {
          en: "Political awareness",
          zh: "政治敏感度(Political Awareness)",
        },
      },
      {
        id: "c",
        text: {
          en: "Assertiveness",
          zh: "果斷力(Assertiveness)",
        },
      },
      {
        id: "d",
        text: {
          en: "Delegation",
          zh: "授權(Delegation)",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "主動傾聽(Active Listening)的具體表現之一,就是在回應前先用自己的話重述對方所說的內容,以確認正確理解對方的疑慮與情緒,這有助於降低衝突、建立信任;政治敏感度是理解組織內部權力關係,果斷力是清楚表達自身立場,授權是將任務指派給他人,皆非此情境所展現的技巧。",
  },
  {
    id: "stk-042",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "According to common project management research (e.g., Thamhain & Wilemon), which of the following is generally the MOST frequent source of conflict on projects?",
      zh: "根據常見的專案管理研究(如Thamhain & Wilemon),下列何者通常是專案中最常見的衝突來源?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Personality differences among team members",
          zh: "團隊成員間的個性差異",
        },
      },
      {
        id: "b",
        text: {
          en: "Schedule conflicts and disagreements over priorities",
          zh: "時程衝突與優先順序的意見分歧",
        },
      },
      {
        id: "c",
        text: {
          en: "Disagreements about project cost estimates",
          zh: "對專案成本估算的分歧",
        },
      },
      {
        id: "d",
        text: {
          en: "Disputes over administrative procedures",
          zh: "對行政程序的爭議",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "多項研究顯示,時程(Schedule)相關的衝突與優先順序分歧通常是專案中最常見的衝突來源,其次為資源與人力分配、技術意見及個性摩擦等。雖然個性衝突常被誤認為最大宗,但實務上時程/優先順序才是更普遍的來源。",
  },
  {
    id: "stk-043",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During a heated conversation with an upset client, the project manager notices her own pulse rising and consciously pauses to control her tone before responding calmly. This is primarily an example of which emotional intelligence competency?",
      zh: "在與一位情緒激動的客戶進行激烈對話時,專案經理察覺自己心跳加快,並有意識地暫停以控制語氣後才平靜回應。這主要展現的是下列哪一項情商(EI)能力?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Self-awareness and self-management",
          zh: "自我覺察與自我管理",
        },
      },
      {
        id: "b",
        text: {
          en: "Social awareness",
          zh: "社會覺察",
        },
      },
      {
        id: "c",
        text: {
          en: "Relationship management",
          zh: "關係管理",
        },
      },
      {
        id: "d",
        text: {
          en: "Political awareness",
          zh: "政治敏感度",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "情商(Emotional Intelligence)包含自我覺察(察覺自身情緒)與自我管理(調節情緒反應以維持專業表現)。本情境中PM先察覺自身生理與情緒反應,再刻意控制語氣,屬於自我覺察與自我管理;社會覺察是理解他人情緒,關係管理是運用情商建立與維繫關係,政治敏感度則是理解組織內部權力結構,皆非本情境的重點。",
  },
  {
    id: "stk-044",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A vendor insists on a fixed position (\"We will only accept Net-30 payment terms\") without explaining why, causing negotiations to stall. Which approach should the project manager take to move the negotiation forward?",
      zh: "某供應商堅持一項固定立場(「我們只接受30天付款條件」)卻未說明原因,導致談判陷入僵局。專案經理應採取下列何種作法以推進談判?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Accept the vendor's position immediately to avoid further delay",
          zh: "立即接受供應商的立場以避免進一步延誤",
        },
      },
      {
        id: "b",
        text: {
          en: "Explore the underlying interests behind the vendor's position, such as cash flow needs, to find a mutually acceptable solution",
          zh: "探索供應商立場背後的根本利益(如現金流需求),尋求雙方都能接受的解決方案",
        },
      },
      {
        id: "c",
        text: {
          en: "Threaten to terminate the contract if the vendor does not change its position",
          zh: "威脅若供應商不改變立場即終止合約",
        },
      },
      {
        id: "d",
        text: {
          en: "Refuse to continue any further negotiation with the vendor",
          zh: "拒絕與該供應商進行任何進一步談判",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "利益導向談判(Interest-based negotiation)強調探究立場背後的根本利益(如現金流考量),而非僅在表面立場上拉鋸,較容易找到雙方都能接受的雙贏方案;直接接受、威脅終止合約或拒絕談判皆無助於建設性解決僵局,且可能損害供應商這類外部商業關係。",
  },
  {
    id: "stk-045",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "A project manager uses a tool that marks each stakeholder's Current (C) engagement level and Desired (D) engagement level along the Unaware-Resistant-Neutral-Supportive-Leading scale, to visually highlight the gap that engagement actions need to close. What is this tool called?",
      zh: "專案經理使用一項工具,在「不知情-抗拒-中立-支持-主導」量表上標記每位利害關係人的目前(C)參與程度與期望(D)參與程度,以視覺化呈現參與行動需要縮小的落差。此工具稱為下列何者?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Stakeholder Register",
          zh: "利害關係人登錄表",
        },
      },
      {
        id: "b",
        text: {
          en: "Power/Interest Grid",
          zh: "權力/利益方格",
        },
      },
      {
        id: "c",
        text: {
          en: "Stakeholder Engagement Assessment Matrix",
          zh: "利害關係人參與評估矩陣",
        },
      },
      {
        id: "d",
        text: {
          en: "RACI Chart",
          zh: "RACI 責任分派矩陣",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "Stakeholder Engagement Assessment Matrix(利害關係人參與評估矩陣)是Plan Stakeholder Engagement常用工具之一,以C(Current,目前)與D(Desired,期望)標記每位利害關係人在五個參與程度上的位置,協助PM聚焦於縮小落差所需的行動;登錄表僅記錄基本資訊與分析,權力/利益方格依權力與利益分象限,RACI圖表則用於界定任務責任分工,均非此工具。",
  },
  {
    id: "stk-046",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A newly formed distributed agile team frequently experiences misunderstandings, such as some members interrupting others during video calls and unclear expectations about response times to chat messages. What should the team do first to address this?",
      zh: "一個新組成的分散式敏捷團隊經常發生誤解,例如某些成員在視訊會議中打斷他人發言,且對聊天訊息的回覆時間缺乏明確期望。團隊應優先採取下列何種作法來解決此問題?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Wait for a formal escalation before addressing the behavior",
          zh: "等到有正式升級申訴後才處理此行為",
        },
      },
      {
        id: "b",
        text: {
          en: "Collaboratively establish and agree on team ground rules covering meeting conduct and response expectations",
          zh: "共同建立並議定涵蓋會議行為與回覆期望的團隊工作約定(Ground Rules)",
        },
      },
      {
        id: "c",
        text: {
          en: "Have the project manager unilaterally issue a written policy without team input",
          zh: "由專案經理單方面發布書面政策,不徵詢團隊意見",
        },
      },
      {
        id: "d",
        text: {
          en: "Reassign the team members who caused the most misunderstandings",
          zh: "重新調派造成最多誤解的團隊成員",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "團隊應共同建立並議定Ground Rules(工作約定/團隊規範),明訂會議行為(如不打斷他人發言)與溝通回覆期望等,這類規範通常記錄於Team Charter中並由團隊共同承諾遵守,比PM單方面發布政策更能獲得認同與遵循;等待正式申訴或重新調派人力皆非根本解決之道。",
  },
  {
    id: "stk-047",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A department director publicly agrees with the project's direction in steering committee meetings, but the project manager learns through informal channels that this director has been privately encouraging staff to deprioritize the project's requests. What is the most appropriate next step?",
      zh: "某部門主管在指導委員會會議上公開表示支持專案方向,但專案經理透過非正式管道得知,該主管私下鼓勵其員工降低本專案要求的優先順序。下列何者為最適當的下一步?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Publicly confront the director during the next steering committee meeting",
          zh: "在下次指導委員會會議上公開質問該主管",
        },
      },
      {
        id: "b",
        text: {
          en: "Privately engage the director one-on-one to understand the underlying concerns driving this behavior",
          zh: "私下與該主管一對一溝通,了解驅動此行為背後的真正疑慮",
        },
      },
      {
        id: "c",
        text: {
          en: "Report the director's behavior to the director's own staff to undermine their credibility",
          zh: "向該主管的下屬報告其行為,以削弱其信譽",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the informal information since it was not raised through a formal channel",
          zh: "忽略此非正式管道取得的資訊,因其並非透過正式管道提出",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "面對表裡不一的隱性抗拒型利害關係人,PM應先私下一對一了解其真正疑慮或利益考量(可能涉及資源競爭或政治因素),而非在公開場合質問造成難堪、透過下屬打擊其信譽,或完全忽視非正式管道取得但具參考價值的資訊;私下溝通更有機會找出根本原因並修復關係。",
  },
  {
    id: "stk-048",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "In a Scrum project, stakeholders can view real-time sprint progress at any time via a shared Kanban board and burndown chart displayed in the team's workspace, without the team needing to actively send anything. Which communication method does this represent?",
      zh: "在Scrum專案中,利害關係人可隨時透過團隊工作區展示的共享看板與燃盡圖查看即時衝刺進度,而團隊無需主動發送任何內容。這代表哪一種溝通方法?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Push communication",
          zh: "推播式溝通(Push)",
        },
      },
      {
        id: "b",
        text: {
          en: "Pull communication",
          zh: "拉取式溝通(Pull)",
        },
      },
      {
        id: "c",
        text: {
          en: "Interactive communication",
          zh: "互動式溝通(Interactive)",
        },
      },
      {
        id: "d",
        text: {
          en: "Formal written communication",
          zh: "正式書面溝通",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "敏捷專案常用的資訊發射源(Information Radiator,如看板、燃盡圖)讓利害關係人自行前往查看即時資訊,屬於Pull(拉取式)溝通的典型應用,團隊無需主動推送;Push需主動發送,Interactive需雙向即時互動,皆與此情境不符。",
  },
  {
    id: "stk-049",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A stakeholder has formally documented in the requirements specification that the system must support 500 concurrent users, but has also informally hinted, without documenting it, that she expects the interface to feel as intuitive as a popular consumer app. From a stakeholder management perspective, the second item is best described as which of the following?",
      zh: "某利害關係人已在需求規格文件中正式記載系統須支援500位同時上線使用者,但她也曾以非正式方式暗示(並未記錄)希望介面能如同一款熱門消費性應用程式般直覺易用。從利害關係人管理角度,第二項最適合被歸類為下列何者?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A formal scope requirement",
          zh: "正式範疇需求",
        },
      },
      {
        id: "b",
        text: {
          en: "An unstated expectation that the project manager should proactively surface and clarify",
          zh: "一項應由專案經理主動釐清並揭露的未言明期望",
        },
      },
      {
        id: "c",
        text: {
          en: "A risk that should be added directly to the risk register without discussion",
          zh: "應直接加入風險登錄表、無需討論的風險",
        },
      },
      {
        id: "d",
        text: {
          en: "An irrelevant comment that can be disregarded",
          zh: "可忽略的不相關評論",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "已文件化的需求屬於正式範疇需求;而未文件化但影響滿意度的隱性想法則是「未言明的期望(Unstated Expectation)」,PM應主動透過溝通與提問將其顯性化並納入討論,而非逕自忽略或未經確認就當作風險登錄,這是利害關係人管理中容易被忽略卻攸關專案成功認定的重要環節。",
  },
  {
    id: "stk-050",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A large transformation program has identified over 300 stakeholders across multiple business units and external partners. Given limited project management time, what is the most effective approach to stakeholder engagement?",
      zh: "某大型轉型專案已識別出橫跨多個事業單位與外部合作夥伴的300多位利害關係人。在專案管理時間有限的情況下,下列何者是最有效的利害關係人參與作法?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Attempt to engage each of the 300+ stakeholders with the exact same level of individual attention",
          zh: "對全部300多位利害關係人投入完全相同程度的個別關注",
        },
      },
      {
        id: "b",
        text: {
          en: "Segment and prioritize stakeholders using classification tools, then tailor engagement intensity to each tier",
          zh: "運用分類工具將利害關係人分層並排定優先順序,再依各層級調整參與投入程度",
        },
      },
      {
        id: "c",
        text: {
          en: "Engage only the stakeholders from the project's own business unit and disregard external partners",
          zh: "只與本專案所屬事業單位的利害關係人互動,不理會外部合作夥伴",
        },
      },
      {
        id: "d",
        text: {
          en: "Delegate all stakeholder engagement entirely to the sponsor without project manager involvement",
          zh: "將所有利害關係人參與工作完全委由贊助人處理,專案經理不參與",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "面對數量龐大、橫跨多個事業單位與外部合作夥伴的利害關係人群體,應運用分類工具(如Power/Interest Grid、Salience Model)將其分層排序,依各層級的重要性調整參與投入程度,而非對所有人投入相同資源、忽略外部關係人,或完全將工作委由贊助人處理而自己置身事外。",
  },
  {
    id: "stk-051",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A Scrum Master notices that the team is hesitant to communicate a significant impediment directly to the Product Owner, fearing blame. Consistent with servant leadership, what should the Scrum Master do?",
      zh: "Scrum Master注意到團隊因擔心被究責,而不敢直接向產品負責人溝通一項重大阻礙。依服務型領導(Servant Leadership)精神,Scrum Master應如何處理?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Report the impediment to the Product Owner on the team's behalf and shield them from any future direct interaction",
          zh: "代表團隊向產品負責人回報此阻礙,並讓團隊往後都不必直接互動",
        },
      },
      {
        id: "b",
        text: {
          en: "Coach and support the team to communicate the impediment transparently themselves, while facilitating a safe environment for that conversation",
          zh: "教練並支持團隊自行透明地溝通此阻礙,同時促成一個讓該對話得以安全進行的環境",
        },
      },
      {
        id: "c",
        text: {
          en: "Instruct the team to hide the impediment until it resolves itself",
          zh: "指示團隊隱瞞此阻礙,直到問題自行解決",
        },
      },
      {
        id: "d",
        text: {
          en: "Escalate directly to senior management without involving the team or Product Owner",
          zh: "未讓團隊或產品負責人參與,直接上呈高階管理層",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "服務型領導強調賦權團隊、移除阻礙、營造心理安全的環境,而非代替團隊承擔所有溝通或使團隊產生依賴;Scrum Master應教練團隊建立透明溝通的勇氣與能力,並協助建立安全對話的環境,而非隱瞞問題或跳過應有溝通管道直接上呈高層。",
  },
  {
    id: "stk-052",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following are commonly cited sources of conflict on projects? (Select two.)",
      zh: "下列哪兩項是專案中常被提及的常見衝突來源?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Disagreements over schedule priorities and resource allocation",
          zh: "對時程優先順序與資源分配的意見分歧",
        },
      },
      {
        id: "b",
        text: {
          en: "The existence of an approved project charter",
          zh: "已核准的專案章程存在此一事實",
        },
      },
      {
        id: "c",
        text: {
          en: "Differing technical opinions among team members with specialized expertise",
          zh: "具備專業知識的團隊成員間技術意見分歧",
        },
      },
      {
        id: "d",
        text: {
          en: "The project manager holding a PMP certification",
          zh: "專案經理持有PMP證照",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "時程/優先順序與資源分配的分歧,以及團隊成員間的技術意見分歧,都是專案中常見且已被研究證實的衝突來源;而專案章程的存在或PM是否持有證照本身並非衝突來源。",
  },
  {
    id: "stk-053",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which two of the following practices help improve communication effectiveness on a virtual, distributed project team? (Select two.)",
      zh: "下列哪兩項作法有助於提升虛擬分散式專案團隊的溝通成效?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Using video calls for sensitive or nuanced discussions to preserve tone and non-verbal cues",
          zh: "針對敏感或需細膩理解的討論使用視訊會議,以保留語氣與非語言線索",
        },
      },
      {
        id: "b",
        text: {
          en: "Documenting key decisions in a shared written record accessible to all time zones",
          zh: "將重要決策記錄於所有時區成員皆可取用的共享書面紀錄",
        },
      },
      {
        id: "c",
        text: {
          en: "Relying exclusively on brief text messages for all discussions, including conflict resolution",
          zh: "所有討論(包含衝突處理)一律僅依賴簡短文字訊息",
        },
      },
      {
        id: "d",
        text: {
          en: "Assuming silence in a text channel means full agreement from every stakeholder",
          zh: "假設文字頻道中的沉默代表所有利害關係人皆完全同意",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "虛擬團隊應在敏感或需要細膩理解的討論中優先使用視訊以保留語氣與非語言線索,並將重要決策記錄於共享書面紀錄供跨時區成員查閱;完全依賴簡短文字處理複雜或衝突性討論,或誤將沉默視為同意,皆容易造成誤解與遺漏。",
  },
  {
    id: "stk-054",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A stakeholder has moved from Neutral to Resistant engagement. Which two of the following behaviors would likely indicate this active resistance, requiring the project manager to negotiate? (Select two.)",
      zh: "某利害關係人已從「中立」轉為「抗拒」的參與程度。下列哪兩項行為可能顯示此種主動抗拒,需要專案經理進行協商?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Publicly raising objections to project decisions in steering committee meetings",
          zh: "在指導委員會會議上公開對專案決策提出異議",
        },
      },
      {
        id: "b",
        text: {
          en: "Actively lobbying peers to withhold support or resources from the project",
          zh: "主動遊說同儕不提供專案支持或資源",
        },
      },
      {
        id: "c",
        text: {
          en: "Asking clarifying questions about the project timeline out of curiosity",
          zh: "出於好奇詢問專案時程的釐清問題",
        },
      },
      {
        id: "d",
        text: {
          en: "Attending all scheduled meetings and providing constructive suggestions",
          zh: "出席所有排定的會議並提供建設性建議",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "主動抗拒的利害關係人通常會公開表達異議,或私下遊說他人不支持專案,這些行為顯示需要PM主動協商化解疑慮;單純的釐清提問或建設性參與則通常代表中立甚至支持的態度,而非抗拒。",
  },
  {
    id: "stk-055",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "When analyzing a stakeholder to inform the Stakeholder Engagement Plan, which two of the following are appropriate to capture? (Select two.)",
      zh: "在分析某利害關係人以擬定利害關係人參與計畫時,下列哪兩項適合被記錄?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The stakeholder's key interests, expectations, and potential impact on project objectives",
          zh: "該利害關係人的主要利益、期望及對專案目標的潛在影響",
        },
      },
      {
        id: "b",
        text: {
          en: "The stakeholder's preferred engagement approach and any known sensitivities relevant to the project",
          zh: "該利害關係人偏好的參與方式,以及與專案相關的已知敏感議題",
        },
      },
      {
        id: "c",
        text: {
          en: "The stakeholder's personal salary and unrelated private financial details",
          zh: "該利害關係人的個人薪資及與專案無關的私人財務細節",
        },
      },
      {
        id: "d",
        text: {
          en: "Unverified personal rumors about the stakeholder unrelated to the project",
          zh: "與專案無關、未經證實的關於該利害關係人的個人謠言",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "利害關係人分析應聚焦於與專案相關的資訊,例如其利益、期望、對專案的潛在影響,以及偏好的參與方式與相關敏感議題,以利擬定合適的參與策略;與專案無關的個人薪資、私人財務細節或未經證實的謠言,不僅無助於專案管理,更可能涉及不當侵犯隱私,不應納入分析。",
  },
  {
    id: "stk-056",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following are valid techniques for identifying project stakeholders during Identify Stakeholders? (Select two.)",
      zh: "下列哪兩項是「識別利害關係人」過程中用於找出專案利害關係人的有效技巧?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Brainstorming and checklist analysis using historical stakeholder lists from similar past projects",
          zh: "運用過去類似專案的歷史利害關係人清單進行腦力激盪與檢核表分析",
        },
      },
      {
        id: "b",
        text: {
          en: "Conducting questionnaires and interviews with known stakeholders to discover other stakeholders they are aware of",
          zh: "對已知利害關係人進行問卷調查與訪談,以發掘他們所知悉的其他利害關係人",
        },
      },
      {
        id: "c",
        text: {
          en: "Identifying only the stakeholders who happen to attend the project kickoff meeting",
          zh: "只識別剛好出席專案啟動會議的利害關係人",
        },
      },
      {
        id: "d",
        text: {
          en: "Relying solely on the organizational chart without seeking any additional input",
          zh: "僅依賴組織圖,不再尋求任何額外資訊",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "識別利害關係人可運用腦力激盪、檢核表分析(參考過去類似專案清單),以及對已知利害關係人進行問卷調查與訪談,以「滾雪球」方式發掘更多利害關係人;僅依賴啟動會議出席名單或單一組織圖,容易遺漏未直接參與會議或組織圖之外的重要利害關係人(如外部團體)。",
  },
  {
    id: "stk-057",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Which two of the following statements accurately describe the Compromise/Reconcile conflict resolution technique? (Select two.)",
      zh: "下列哪兩項敘述正確描述了「妥協/調和(Compromise/Reconcile)」衝突解決技巧?(請選擇兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Each party gives up something to reach a solution that provides some degree of satisfaction to both",
          zh: "雙方各自讓步一部分,以達成讓雙方都獲得某種程度滿足的解決方案",
        },
      },
      {
        id: "b",
        text: {
          en: "It always produces a solution that both parties genuinely and fully support",
          zh: "一定能產生雙方都真心且完全認同支持的解決方案",
        },
      },
      {
        id: "c",
        text: {
          en: "It is sometimes described as a lose-lose approach because neither party gets everything they wanted",
          zh: "有時被稱為雙輸(lose-lose)作法,因為雙方都無法得到自己原本想要的全部",
        },
      },
      {
        id: "d",
        text: {
          en: "It requires unlimited time and is only suitable when there is no schedule pressure",
          zh: "需要無限的時間,只適用於毫無時程壓力的情況",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "妥協/調和(Compromise/Reconcile)讓雙方各退一步以達成部分滿足彼此的方案,因雙方都未能完全得到原本想要的結果,有時被稱為「雙輸」作法(相對於Collaborate的雙贏);它不保證雙方真心完全認同(這是Collaborate的特徵),也常被用在時間有限、需要快速達成暫時共識的情況,而非僅限無時程壓力時使用。",
  },
  {
    id: "stk-058",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each conflict resolution technique to its description.",
      zh: "請將下列衝突解決技巧拖曳配對到對應描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Withdraw/Avoid",
            zh: "撤退/迴避(Withdraw/Avoid)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Smooth/Accommodate",
            zh: "緩和/包容(Smooth/Accommodate)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Compromise/Reconcile",
            zh: "妥協/調和(Compromise/Reconcile)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Force/Direct",
            zh: "強制/命令(Force/Direct)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Collaborate/Problem Solve",
            zh: "合作/解決問題(Collaborate/Problem Solve)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Retreating from an actual or potential conflict situation, postponing the issue for better preparation or letting someone else resolve it",
            zh: "從實際或潛在衝突情境中退出,將議題延後以便更充分準備,或讓其他人來解決",
          },
        },
        {
          id: "c2",
          text: {
            en: "Emphasizing areas of agreement rather than areas of difference, yielding one's own position to maintain harmony",
            zh: "強調彼此的共同點而非差異點,為維持和諧而讓出自己的立場",
          },
        },
        {
          id: "c3",
          text: {
            en: "Finding a solution that brings a degree of satisfaction to all parties by each side giving up something",
            zh: "透過雙方各自讓步,尋求能讓各方都獲得某種程度滿足的解決方案",
          },
        },
        {
          id: "c4",
          text: {
            en: "Pushing one's viewpoint at the expense of others, offering only win-lose solutions, typically enforced through positional power",
            zh: "犧牲他人觀點以強推己方立場,僅提供輸贏分明的解決方案,通常透過職位權力強制執行",
          },
        },
        {
          id: "c5",
          text: {
            en: "Incorporating multiple viewpoints from differing perspectives to reach consensus and commitment through open dialogue",
            zh: "透過公開對話整合來自不同觀點的多方意見,以達成共識與承諾",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "PMBOK列出五種常見衝突解決技巧:撤退/迴避(暫時擱置或讓他人處理)、緩和/包容(強調共識、犧牲自身立場維持和諧)、妥協/調和(雙方各退一步)、強制/命令(以職權強推己方立場,屬輸贏模式)、合作/解決問題(整合多方觀點達成真正共識,通常被視為最持久有效的方式)。PM應依情境選擇合適技巧,長期而言Collaborate通常能建立最穩固的承諾與關係。",
  },
  {
    id: "stk-059",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each project reporting type to its description.",
      zh: "請將下列專案報告類型拖曳配對到對應描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Status Report",
            zh: "狀態報告(Status Report)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Progress Report",
            zh: "進度報告(Progress Report)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Forecast Report",
            zh: "預測報告(Forecast Report)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Dashboard",
            zh: "儀表板(Dashboard)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "A snapshot of where the project stands at a specific point in time, such as current scope, schedule, and cost status",
            zh: "呈現專案在特定時間點的現況快照,例如目前的範疇、時程與成本狀態",
          },
        },
        {
          id: "c2",
          text: {
            en: "A summary of what has been accomplished since the last reporting period",
            zh: "摘要自上次報告期間以來已完成的工作",
          },
        },
        {
          id: "c3",
          text: {
            en: "A projection of future project performance and outcomes, such as estimate at completion (EAC)",
            zh: "對未來專案績效與結果的預測,例如完工估算(EAC)",
          },
        },
        {
          id: "c4",
          text: {
            en: "A visual, at-a-glance summary of key project metrics, often using graphical indicators such as red/yellow/green",
            zh: "以視覺化方式一目了然呈現關鍵專案指標摘要,常使用紅/黃/綠等圖形化指標",
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
    explanation: "狀態報告呈現特定時間點的現況快照;進度報告摘要一段期間內已完成的工作;預測報告則對未來績效進行推估(如EAC完工估算);儀表板以圖形化方式(如紅黃綠燈號)一目了然呈現關鍵指標。四者都是Manage Communications常見的報告呈現形式,考生應能分辨其著重的時間視角(過去/現在/未來)與呈現方式的差異。",
  },
  {
    id: "stk-060",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Drag and match each Scrum event to the description of its stakeholder-communication purpose.",
      zh: "請將下列Scrum事件拖曳配對到其在利害關係人溝通目的上的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Daily Standup",
            zh: "每日站立會議(Daily Standup)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Sprint Review",
            zh: "衝刺審查會議(Sprint Review)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Sprint Retrospective",
            zh: "衝刺回顧會議(Sprint Retrospective)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Product Backlog Refinement",
            zh: "產品待辦清單精煉會議(Backlog Refinement)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Team members synchronize daily among themselves on progress and impediments; primarily an internal team communication, not a stakeholder-facing event",
            zh: "團隊成員每日彼此同步進度與阻礙,主要是內部團隊溝通,而非面向利害關係人的活動",
          },
        },
        {
          id: "c2",
          text: {
            en: "The team demonstrates the completed increment to external stakeholders and gathers their feedback to adapt the backlog",
            zh: "團隊向外部利害關係人展示已完成的增量成果並蒐集回饋,以調整待辦清單",
          },
        },
        {
          id: "c3",
          text: {
            en: "The team privately reflects on its own process and interpersonal dynamics to identify improvements, generally without external stakeholders present",
            zh: "團隊私下反思自身流程與人際互動,找出改善機會,通常不邀請外部利害關係人參與",
          },
        },
        {
          id: "c4",
          text: {
            en: "The Product Owner clarifies upcoming backlog items with the team and sometimes with subject matter expert stakeholders, to prepare items for future sprints",
            zh: "產品負責人與團隊(有時包含領域專家利害關係人)一同釐清未來待辦事項,以為後續衝刺做準備",
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
    explanation: "每日站立會議是團隊內部同步進度與阻礙的活動,一般不邀請外部利害關係人;衝刺審查會議是團隊向利害關係人展示成果並蒐集回饋、驅動待辦清單調整的關鍵溝通場合;衝刺回顧會議聚焦團隊內部流程改善,通常僅團隊成員參與;產品待辦清單精煉會議則由PO主導,視需要邀請領域專家利害關係人協助釐清未來項目。理解每個敏捷儀式的利害關係人參與程度,有助於判斷該場合是否適合傳遞特定溝通內容。",
  },
  {
    id: "stk-061",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Drag and match each common source of project conflict to its description.",
      zh: "請將下列常見的專案衝突來源拖曳配對到對應描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Schedule",
            zh: "時程(Schedule)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Resources",
            zh: "資源(Resources)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Technical Opinions",
            zh: "技術意見(Technical Opinions)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Priorities",
            zh: "優先順序(Priorities)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Personality",
            zh: "個性(Personality)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Disagreement over deadlines, sequencing, or how much time an activity should take",
            zh: "對截止日期、順序安排或某項活動應花多少時間的意見分歧",
          },
        },
        {
          id: "c2",
          text: {
            en: "Competition among activities or projects for the same limited people, equipment, or budget",
            zh: "不同活動或專案之間對同樣有限的人力、設備或預算的競爭",
          },
        },
        {
          id: "c3",
          text: {
            en: "Differing professional judgments among specialists about the best technical approach or solution",
            zh: "專家之間對最佳技術做法或解決方案的專業判斷分歧",
          },
        },
        {
          id: "c4",
          text: {
            en: "Disagreement about which work should be done first when multiple objectives compete for attention",
            zh: "當多個目標同時競爭關注時,對何者應優先進行的意見分歧",
          },
        },
        {
          id: "c5",
          text: {
            en: "Friction arising from differences in working styles, communication preferences, or temperament rather than project content",
            zh: "源自工作風格、溝通偏好或性情差異,而非專案內容本身所產生的摩擦",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "常見的專案衝突來源可分為:時程(截止日期與順序安排的分歧)、資源(對有限人力/設備/預算的競爭)、技術意見(專家間對做法的專業判斷不同)、優先順序(多目標競爭下何者優先的分歧),以及個性(源自工作風格或性情差異的摩擦,而非專案內容本身)。研究顯示時程與優先順序通常是最頻繁的來源,而個性衝突雖然常被誤認為最常見,但實際發生頻率通常低於前述工作相關的來源。",
  },
  {
    id: "stk-062",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "On the Stakeholder Engagement Assessment Matrix, a stakeholder's Current (C) engagement level is marked as Resistant, while the Desired (D) level is marked as Supportive. This indicates a {{blank1}} that the project manager should address primarily through {{blank2}}.",
      zh: "在利害關係人參與評估矩陣上,某利害關係人的目前(C)參與程度被標記為「抗拒(Resistant)」,而期望(D)參與程度被標記為「支持(Supportive)」。這顯示存在一個 {{blank1}},專案經理應主要透過 {{blank2}} 來處理。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "two-level positive gap (C is two levels below D)",
              zh: "兩個等級的正向落差(C比D低兩個等級)",
            },
          },
          {
            id: "b",
            text: {
              en: "no gap, since C and D are the same",
              zh: "沒有落差,因為C與D相同",
            },
          },
          {
            id: "c",
            text: {
              en: "negative gap indicating over-engagement",
              zh: "顯示過度參與的負向落差",
            },
          },
          {
            id: "d",
            text: {
              en: "one-level positive gap",
              zh: "一個等級的正向落差",
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
              en: "escalating the stakeholder to senior management for disciplinary action",
              zh: "將該利害關係人上呈高階管理層要求紀律處分",
            },
          },
          {
            id: "b",
            text: {
              en: "investigating the root cause of resistance and taking targeted actions to move the stakeholder toward neutral, then supportive",
              zh: "調查抗拒的根本原因,並採取針對性行動使其先朝中立、再朝支持方向移動",
            },
          },
          {
            id: "c",
            text: {
              en: "removing the stakeholder from the register since the gap cannot realistically be closed",
              zh: "因落差不切實際無法縮小,將該利害關係人自登錄表移除",
            },
          },
          {
            id: "d",
            text: {
              en: "no action, since gaps naturally close over time without intervention",
              zh: "不採取任何行動,因為落差會隨時間自然縮小",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "Engagement程度順序為Unaware→Resistant→Neutral→Supportive→Leading;Resistant到Supportive之間跨越Neutral,共差兩個等級,屬於明顯的正向落差(C低於D)。面對此落差,PM應調查抗拒的根本原因並採取針對性行動,循序漸進先使其朝中立、再朝支持方向移動,而非期待其一步到位、放棄該利害關係人,或消極等待落差自然消失。",
  },
  {
    id: "stk-063",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "In a negotiation with a difficult stakeholder, focusing on {{blank1}} rather than {{blank2}} is more likely to uncover a mutually acceptable solution that both parties can genuinely support.",
      zh: "在與一位難以應付的利害關係人談判時,聚焦於 {{blank1}} 而非 {{blank2}},更有機會找出雙方都能真心接受的解決方案。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "underlying interests and needs",
              zh: "根本利益與需求",
            },
          },
          {
            id: "b",
            text: {
              en: "rigid stated positions",
              zh: "僵化的既定立場",
            },
          },
          {
            id: "c",
            text: {
              en: "who has more formal authority",
              zh: "誰擁有較高的正式職權",
            },
          },
          {
            id: "d",
            text: {
              en: "past unrelated grievances",
              zh: "過去不相關的舊怨",
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
              en: "underlying interests and needs",
              zh: "根本利益與需求",
            },
          },
          {
            id: "b",
            text: {
              en: "rigid stated positions",
              zh: "僵化的既定立場",
            },
          },
          {
            id: "c",
            text: {
              en: "mutual long-term relationship",
              zh: "雙方長期關係",
            },
          },
          {
            id: "d",
            text: {
              en: "shared project objectives",
              zh: "共同的專案目標",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "利益導向談判(Interest-based negotiation)強調探究雙方立場背後的根本利益與需求,較容易找出真正雙贏的解決方案;若僅在表面、僵化的既定立場上拉鋸(Positional bargaining),往往導致僵局或勉強妥協,無法真正化解根本疑慮。",
  },
  {
    id: "stk-064",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "When a project manager repeatedly uses the {{blank1}} conflict resolution technique to quickly end disagreements by imposing her own viewpoint, a common long-term drawback is {{blank2}}.",
      zh: "若專案經理反覆使用 {{blank1}} 這種衝突解決技巧,透過強推自己的觀點來快速結束爭執,常見的長期缺點是 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Collaborate/Problem Solve",
              zh: "合作/解決問題(Collaborate/Problem Solve)",
            },
          },
          {
            id: "b",
            text: {
              en: "Force/Direct",
              zh: "強制/命令(Force/Direct)",
            },
          },
          {
            id: "c",
            text: {
              en: "Withdraw/Avoid",
              zh: "撤退/迴避(Withdraw/Avoid)",
            },
          },
          {
            id: "d",
            text: {
              en: "Smooth/Accommodate",
              zh: "緩和/包容(Smooth/Accommodate)",
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
              en: "team members becoming more creative and engaged over time",
              zh: "團隊成員隨時間變得更有創意且更投入",
            },
          },
          {
            id: "b",
            text: {
              en: "resentment and reduced trust among team members whose viewpoints are consistently overridden",
              zh: "觀點持續被否決的團隊成員產生怨懟並降低對PM的信任",
            },
          },
          {
            id: "c",
            text: {
              en: "an immediate improvement in overall team morale",
              zh: "整體團隊士氣立即獲得改善",
            },
          },
          {
            id: "d",
            text: {
              en: "elimination of all future conflicts on the project",
              zh: "消除專案未來所有的衝突",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "Force/Direct(強制/命令)雖能快速結束當下爭執,但長期反覆使用容易讓觀點持續被否決的團隊成員累積怨懟、降低對PM的信任與參與意願,並不會提升士氣或消除未來衝突,因此通常僅適合用於時間緊迫、需要立即決斷且無法透過討論解決的情況。",
  },
  {
    id: "stk-065",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A report that projects the project's estimated cost at completion based on current performance trends is called a {{blank1}}, whereas a report summarizing work accomplished during the most recent reporting period is called a {{blank2}}.",
      zh: "依目前績效趨勢預測專案完工估算成本的報告稱為 {{blank1}},而摘要最近一次報告期間內已完成工作的報告則稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Status Report",
              zh: "狀態報告",
            },
          },
          {
            id: "b",
            text: {
              en: "Forecast Report",
              zh: "預測報告",
            },
          },
          {
            id: "c",
            text: {
              en: "Risk Report",
              zh: "風險報告",
            },
          },
          {
            id: "d",
            text: {
              en: "Lessons Learned Register",
              zh: "經驗教訓登錄表",
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
              en: "Progress Report",
              zh: "進度報告",
            },
          },
          {
            id: "b",
            text: {
              en: "Forecast Report",
              zh: "預測報告",
            },
          },
          {
            id: "c",
            text: {
              en: "Charter",
              zh: "專案章程",
            },
          },
          {
            id: "d",
            text: {
              en: "Stakeholder Register",
              zh: "利害關係人登錄表",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "a",
    },
    explanation: "預測報告(Forecast Report)著眼未來,依目前績效趨勢推估完工時的成本或時程結果(如EAC);進度報告(Progress Report)則著眼過去至今,摘要最近一段期間已完成的工作,兩者的時間視角不同,常在考題中互相替換造成混淆。",
  },
  {
    id: "stk-066",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Click the card that best describes the \"Smooth/Accommodate\" conflict resolution technique.",
      zh: "請點選最能描述「緩和/包容(Smooth/Accommodate)」衝突解決技巧的卡片。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Emphasizing areas of agreement and yielding one's own position to preserve harmony with the other party",
          zh: "強調彼此的共識並讓出自己的立場,以維持與對方的和諧關係",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Pushing one's own viewpoint at the expense of others, resulting in a win-lose outcome",
          zh: "犧牲他人觀點以強推己方立場,導致輸贏分明的結果",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Retreating from the conflict and postponing it for later resolution",
          zh: "從衝突中退出並將其延後日後解決",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Integrating multiple viewpoints to reach a solution both parties fully commit to",
          zh: "整合多方觀點以達成雙方都完全承諾的解決方案",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n1",
    explanation: "緩和/包容(Smooth/Accommodate)強調彼此的共同點、淡化差異,並犧牲自身立場以維持表面和諧,雖能暫時降低緊張氣氛,但可能未真正解決根本問題;n2描述的是強制/命令(Force/Direct);n3描述的是撤退/迴避(Withdraw/Avoid);n4描述的是合作/解決問題(Collaborate/Problem Solve)。",
  },
  {
    id: "stk-068",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "Two team members have a personal conflict that they cannot resolve between themselves despite direct discussion. Based on the escalation hierarchy shown below, click the role to which this conflict should be escalated next.",
      zh: "兩位團隊成員之間存在個人衝突,即使經過直接討論仍無法自行解決。依下圖所示的升級層級,請點選此衝突接下來應上呈的角色。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Team Member (peer)",
          zh: "團隊成員(同儕)",
        },
        x: 2,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n2",
        label: {
          en: "Project Manager",
          zh: "專案經理",
        },
        x: 27,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n3",
        label: {
          en: "Sponsor",
          zh: "贊助人",
        },
        x: 52,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "n4",
        label: {
          en: "Steering Committee",
          zh: "指導委員會",
        },
        x: 77,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n2",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
    ],
    explanation: "升級層級一般為:團隊成員 → 專案經理 → 贊助人 → 指導委員會。兩位團隊成員自行討論無法解決的個人衝突,屬於團隊管理層級的議題,應先上呈給專案經理處理(運用其人際技巧介入協調),而非跳過PM直接上呈贊助人或指導委員會,這類高層級升級應保留給超出PM職權(如成本、範疇重大變更)的議題。",
  },
  {
    id: "stk-069",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Click the card that best describes the primary purpose of a project Kickoff Meeting.",
      zh: "請點選最能描述專案「啟動會議(Kickoff Meeting)」主要目的的卡片。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Formally launch the project, align stakeholders on objectives, and build initial team commitment",
          zh: "正式啟動專案,使利害關係人對目標達成共識,並建立團隊初步的承諾感",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Review detailed technical designs line-by-line for approval",
          zh: "逐行審查詳細技術設計以取得核准",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Negotiate the final contract price with a vendor",
          zh: "與供應商協商最終合約價格",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Formally close out the project and release resources",
          zh: "正式結案並釋出專案資源",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n1",
    explanation: "啟動會議(Kickoff Meeting)的主要目的是正式宣告專案展開,讓利害關係人與團隊對專案目標、範疇與角色達成共識,並建立初步的團隊承諾與士氣;逐項技術設計審查、供應商合約議價,或正式結案釋出資源,分別屬於其他階段或活動的重點,並非啟動會議的核心目的。",
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
    id: "res-001",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In a RACI matrix, which role designation indicates the person who is ultimately answerable for the correct and thorough completion of a task, even though someone else may perform the work?",
      zh: "在 RACI 責任分派矩陣中,哪一個角色代表即使實際工作由他人執行,仍須對任務的正確與完整完成負最終責任的人?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Responsible",
          zh: "執行者(Responsible)",
        },
      },
      {
        id: "b",
        text: {
          en: "Accountable",
          zh: "負責者(Accountable)",
        },
      },
      {
        id: "c",
        text: {
          en: "Consulted",
          zh: "諮詢者(Consulted)",
        },
      },
      {
        id: "d",
        text: {
          en: "Informed",
          zh: "被告知者(Informed)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "RACI 矩陣中 Accountable 是對結果最終負責、簽核的人,理論上一項任務只應有一位 Accountable;Responsible 則是實際動手執行工作的人,可有多位。本題測試兩者角色歸屬的辨識,是資源管理領域常見的易混淆點。",
  },
  {
    id: "res-002",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A newly formed project team has started debating openly about who should own which responsibilities, and some members are challenging the project manager's initial task assignments. Which stage of team development is this team most likely experiencing?",
      zh: "一個剛組建的專案團隊開始公開爭論誰該負責哪些工作,部分成員也對專案經理最初的任務分配提出質疑。這個團隊最有可能正處於塔克曼(Tuckman)團隊發展的哪個階段?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Forming",
          zh: "形成期(Forming)",
        },
      },
      {
        id: "b",
        text: {
          en: "Storming",
          zh: "風暴期(Storming)",
        },
      },
      {
        id: "c",
        text: {
          en: "Norming",
          zh: "規範期(Norming)",
        },
      },
      {
        id: "d",
        text: {
          en: "Performing",
          zh: "表現期(Performing)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "團隊成員公開爭執角色與職責、挑戰既有安排,是 Tuckman 團隊發展階段中 Storming(風暴期)的典型特徵,常與逐漸建立默契的 Norming(規範期)混淆。此階段 PM 應促進開放溝通,協助團隊建立共識,而非直接下達命令壓制爭論。",
  },
  {
    id: "res-003",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "agile_scenario",
    stem: {
      en: "Several team members complain about poor office lighting, unreliable equipment, and lack of nearby parking. According to Herzberg's Two-Factor Theory, which two of the following are hygiene factors that could be causing this dissatisfaction? Select two.",
      zh: "多位團隊成員抱怨辦公室照明不佳、設備不可靠,以及附近缺乏停車位。根據赫茲伯格雙因子理論(Herzberg's Two-Factor Theory),下列何者屬於可能導致此不滿的保健因子(Hygiene Factors)?(選兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Working conditions",
          zh: "工作環境條件",
        },
      },
      {
        id: "b",
        text: {
          en: "Sense of achievement",
          zh: "成就感",
        },
      },
      {
        id: "c",
        text: {
          en: "Company policy and administration",
          zh: "公司政策與行政管理",
        },
      },
      {
        id: "d",
        text: {
          en: "Recognition",
          zh: "受到認可",
        },
      },
      {
        id: "e",
        text: {
          en: "Opportunities for growth",
          zh: "成長機會",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "Herzberg 雙因子理論中,工作環境條件與公司政策行政屬於保健因子(Hygiene Factors)——缺乏會導致不滿,但改善未必帶來長期激勵。成就感、認可、成長機會則屬於激勵因子(Motivators),是考生常誤判的重點。",
  },
  {
    id: "res-004",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Tuckman team development stage to the behavior description that best fits it.",
      zh: "請將下列塔克曼(Tuckman)團隊發展階段拖曳配對到最符合的行為描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Forming",
            zh: "形成期(Forming)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Storming",
            zh: "風暴期(Storming)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Norming",
            zh: "規範期(Norming)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Performing",
            zh: "表現期(Performing)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Adjourning",
            zh: "解散期(Adjourning)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Team members are polite, cautious, and rely heavily on the project manager for direction",
            zh: "團隊成員彬彬有禮、謹慎小心,高度仰賴專案經理指引方向",
          },
        },
        {
          id: "c2",
          text: {
            en: "Conflicts arise over roles, approaches, and authority as members assert their views",
            zh: "成員為了角色、做法與權責主張己見,引發衝突",
          },
        },
        {
          id: "c3",
          text: {
            en: "The team establishes working agreements and starts trusting one another",
            zh: "團隊建立共同工作默契,並開始互相信任",
          },
        },
        {
          id: "c4",
          text: {
            en: "The team works interdependently and efficiently with minimal supervision",
            zh: "團隊高效且相互依賴地運作,只需極少監督",
          },
        },
        {
          id: "c5",
          text: {
            en: "The team completes the work and disbands, often with mixed emotions",
            zh: "團隊完成工作並解散,成員常帶有複雜情緒",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "Tuckman 團隊發展五階段依序為 Forming(形成期,謹慎有禮、依賴 PM)→Storming(風暴期,角色與權責衝突)→Norming(規範期,建立默契與信任)→Performing(表現期,高效自主運作)→Adjourning(解散期,完成任務後解散)。",
  },
  {
    id: "res-005",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "A key developer on your team has just been pulled onto another urgent project by the functional manager, jeopardizing your schedule. As the project manager, you should first {{blank1}}, and if the resource cannot be restored, {{blank2}}.",
      zh: "一位關鍵開發人員剛被職能經理調去支援另一個緊急專案,這將危及你的專案時程。身為專案經理,你應該優先 {{blank1}},若該資源無法恢復,則 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Negotiate directly with the functional manager to understand priorities and explore options",
              zh: "直接與職能經理協商,了解優先順序並探索可行方案",
            },
          },
          {
            id: "b",
            text: {
              en: "Complain to the sponsor immediately without discussing with the functional manager",
              zh: "未與職能經理討論就立刻向贊助人抱怨",
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
              en: "Escalate through appropriate channels and update the resource management plan",
              zh: "透過適當管道上報,並更新資源管理計畫",
            },
          },
          {
            id: "b",
            text: {
              en: "Silently absorb the impact and say nothing to stakeholders",
              zh: "默默承受影響,不告知任何利害關係人",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "面對資源被調動,PM 應先與職能經理協商釐清情況,而非越級抱怨;若協商無效才透過正式管道上報並更新相關文件,讓利害關係人知悉影響,而非默默承受進度風險。",
  },
  {
    id: "res-006",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "A team member recently received a significant pay raise, but she has become increasingly bored and disengaged with her repetitive tasks. Which theory best explains why the raise alone is unlikely to re-motivate her?",
      zh: "一位團隊成員最近獲得大幅加薪,但她對重複性的工作任務卻越來越感到無聊、投入度下降。下列哪個理論最能解釋為何單靠加薪難以重新激勵她?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Herzberg's Two-Factor Theory — pay is a hygiene factor, not a motivator",
          zh: "赫茲伯格雙因子理論——薪資屬於保健因子而非激勵因子",
        },
      },
      {
        id: "b",
        text: {
          en: "Maslow's Hierarchy of Needs — she has reached self-actualization",
          zh: "馬斯洛需求層級——她已達到自我實現",
        },
      },
      {
        id: "c",
        text: {
          en: "Theory X — she is inherently unmotivated by nature",
          zh: "X 理論——她天生缺乏工作動機",
        },
      },
      {
        id: "d",
        text: {
          en: "McClelland's Theory of Needs — she has a strong need for power",
          zh: "麥克利蘭需求理論——她有強烈的權力需求",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "根據 Herzberg 雙因子理論,薪資屬於保健因子(Hygiene Factor),缺乏會導致不滿,但增加未必能帶來長期激勵;真正能激勵她的是激勵因子(Motivators),例如更具挑戰性或有意義的任務、成就感與成長機會。",
  },
  {
    id: "res-007",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "According to McClelland's Theory of Needs, which three of the following are the dominant needs that drive individual motivation? Select three.",
      zh: "根據麥克利蘭需求理論(McClelland's Theory of Needs),下列何者為驅動個人動機的三種主導需求?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Achievement",
          zh: "成就",
        },
      },
      {
        id: "b",
        text: {
          en: "Affiliation",
          zh: "親和",
        },
      },
      {
        id: "c",
        text: {
          en: "Power",
          zh: "權力",
        },
      },
      {
        id: "d",
        text: {
          en: "Security",
          zh: "安全感",
        },
      },
      {
        id: "e",
        text: {
          en: "Self-actualization",
          zh: "自我實現",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "McClelland 需求理論主張人的行為主要由三種主導需求驅動:Achievement(成就)、Affiliation(親和)、Power(權力)。Security 與 Self-actualization 則屬於 Maslow 需求層級理論的概念,並非 McClelland 理論。",
  },
  {
    id: "res-008",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each motivation theory to its core concept.",
      zh: "請將下列激勵理論拖曳配對到其核心概念。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Maslow's Hierarchy of Needs",
            zh: "馬斯洛需求層級",
          },
        },
        {
          id: "p2",
          text: {
            en: "Herzberg's Two-Factor Theory",
            zh: "赫茲伯格雙因子理論",
          },
        },
        {
          id: "p3",
          text: {
            en: "McClelland's Theory of Needs",
            zh: "麥克利蘭需求理論",
          },
        },
        {
          id: "p4",
          text: {
            en: "Theory X and Theory Y",
            zh: "X 理論與 Y 理論",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Needs are arranged in a five-level pyramid from physiological to self-actualization",
            zh: "需求依五個層級排列,從生理需求到自我實現",
          },
        },
        {
          id: "c2",
          text: {
            en: "Hygiene factors prevent dissatisfaction, while motivators drive true motivation",
            zh: "保健因子避免不滿,激勵因子才能真正激勵",
          },
        },
        {
          id: "c3",
          text: {
            en: "Individuals are driven by dominant needs for achievement, affiliation, or power",
            zh: "個人受成就、親和或權力等主導需求驅動",
          },
        },
        {
          id: "c4",
          text: {
            en: "Assumes people are either inherently lazy and need control, or self-driven and seek responsibility",
            zh: "假設人性本懶需嚴格控管,或本勤能自我驅動並樂於承擔責任",
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
    explanation: "四種激勵理論核心概念分別為:Maslow 五層級需求金字塔;Herzberg 保健因子/激勵因子二分法;McClelland 成就/親和/權力三種主導需求;Theory X/Y 對人性本質的兩種相反假設。",
  },
  {
    id: "res-009",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During planning, the project manager identifies that a construction activity requires 3 electricians, 2 cranes, and specific safety certifications. Which document should the project manager primarily reference or update to capture this information?",
      zh: "在規劃階段,專案經理發現某項營建活動需要 3 名電工、2 台起重機以及特定的安全證照。專案經理應主要參考或更新哪一份文件來記錄這項資訊?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Resource Requirements (part of Estimate Resources outputs)",
          zh: "資源需求(估算資源流程的產出)",
        },
      },
      {
        id: "b",
        text: {
          en: "Team Charter",
          zh: "團隊章程",
        },
      },
      {
        id: "c",
        text: {
          en: "Stakeholder Register",
          zh: "利害關係人登錄冊",
        },
      },
      {
        id: "d",
        text: {
          en: "Risk Register",
          zh: "風險登錄冊",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "記錄完成活動所需人力與實體資源種類與數量,屬於 Estimate Resources(估算資源)流程的產出——Resource Requirements(資源需求),通常與 Resource Breakdown Structure(RBS)一併產出。Team Charter 則是 Plan Resource Management 的產出,記錄團隊共同約定的價值觀與運作方式。",
  },
  {
    id: "res-010",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A critical deadline is only two hours away, and two team members are in a heated disagreement over a technical decision that must be made immediately. There is no time for lengthy discussion. Click the conflict resolution technique the project manager should apply.",
      zh: "距離關鍵截止時間只剩兩小時,兩位團隊成員正對一項必須立即拍板的技術決策激烈爭執,沒有時間進行冗長討論。請點選專案經理此時應採用的衝突處理技巧。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Withdraw/Avoid",
          zh: "迴避(Withdraw/Avoid)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Smooth/Accommodate",
          zh: "緩和/包容(Smooth/Accommodate)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Compromise",
          zh: "妥協(Compromise)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Force/Direct",
          zh: "強制(Force/Direct)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Collaborate/Problem Solve",
          zh: "合作/共同解決(Collaborate/Problem Solve)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n4",
    explanation: "在時間極度緊迫、必須立即做出決策的情境下,Force/Direct(強制)是最適合的技巧——由具權力者直接下決定以爭取時效。Collaborate(合作)雖通常是最佳長期解方,但耗時較長,不適合此情境。",
  },
  {
    id: "res-011",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager leads a virtual team spread across four time zones and three cultural backgrounds. Over the past month, several members have missed key updates, and two members privately report feeling excluded from decisions made during synchronous meetings scheduled at times inconvenient for them. What should the project manager do first to address this?",
      zh: "一位專案經理領導一個橫跨四個時區、三種文化背景的虛擬團隊。過去一個月,多位成員錯過重要更新,兩位成員私下反映,由於同步會議時間對他們不便,他們感覺被排除在決策之外。專案經理應優先採取什麼行動來處理此問題?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Require all members to attend meetings at the current fixed time regardless of time zone",
          zh: "要求所有成員無論時區皆須在現行固定時間出席會議",
        },
      },
      {
        id: "b",
        text: {
          en: "Reassess communication methods and meeting schedules to ensure equitable participation across time zones",
          zh: "重新檢視溝通方式與會議時程安排,確保跨時區成員能公平參與",
        },
      },
      {
        id: "c",
        text: {
          en: "Replace the affected members with local team members",
          zh: "以當地團隊成員取代受影響的成員",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the concerns since virtual team challenges are unavoidable",
          zh: "忽略這些意見,因為虛擬團隊的挑戰在所難免",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "虛擬團隊在資源獲取與團隊建立上有時區、文化與溝通媒介等額外挑戰。PM 應主動重新檢視溝通方式(如非同步溝通、輪流調整會議時間)以確保所有成員能公平參與決策,而非強制統一時間或忽視問題。",
  },
  {
    id: "res-012",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which two of the following statements reflect assumptions of Theory Y, as opposed to Theory X? Select two.",
      zh: "下列哪兩項敘述符合 Y 理論(Theory Y)的假設,而非 X 理論(Theory X)?(選兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "People inherently dislike work and must be closely controlled",
          zh: "人天生厭惡工作,必須被嚴密控管",
        },
      },
      {
        id: "b",
        text: {
          en: "Under the right conditions, people will seek out responsibility",
          zh: "在適當條件下,人會主動尋求承擔責任",
        },
      },
      {
        id: "c",
        text: {
          en: "Employees are naturally self-motivated and can exercise self-direction",
          zh: "員工天生具自我激勵能力,能自我引導",
        },
      },
      {
        id: "d",
        text: {
          en: "Workers require strict supervision and threats to perform",
          zh: "員工需要嚴格監督與威脅才能有效表現",
        },
      },
      {
        id: "e",
        text: {
          en: "People are motivated purely by financial rewards",
          zh: "人只受金錢報酬驅動",
        },
      },
    ],
    correctAnswer: [
      "b",
      "c",
    ],
    selectCount: 2,
    explanation: "Theory Y 假設人性本勤,員工能自我激勵、自我引導,並在適當條件下主動承擔責任;Theory X 則假設人性本懶,需要嚴格控管與監督才能有效表現。(a)(d)(e) 屬於 Theory X 或不符合任一理論的敘述。",
  },
  {
    id: "res-013",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Two stakeholders with equal authority strongly disagree on a minor requirement, and both need to maintain a good working relationship going forward. Given moderate time pressure, the project manager should guide them toward {{blank1}}, in which both parties {{blank2}}.",
      zh: "兩位權力對等的利害關係人針對一項次要需求強烈對立,且雙方未來仍需維持良好合作關係。在中等時間壓力下,專案經理應引導雙方採用 {{blank1}},在此技巧中雙方 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Compromise",
              zh: "妥協(Compromise)",
            },
          },
          {
            id: "b",
            text: {
              en: "Force/Direct",
              zh: "強制(Force/Direct)",
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
              en: "Each give up something to reach a mutually acceptable, temporary solution",
              zh: "各自讓步一部分,以達成雙方都能接受的暫時性解決方案",
            },
          },
          {
            id: "b",
            text: {
              en: "Wait until the issue disappears on its own",
              zh: "等待問題自行消失",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "在雙方權力相當、需維持關係且時間有限的情境下,Compromise(妥協)是務實的中間選擇——雙方各退一步達成暫時性共識,適合次要且非原則性的爭議。",
  },
  {
    id: "res-014",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A control chart tracking a resource performance metric shows the last seven consecutive data points all falling above the center line, even though every point remains within the upper and lower control limits. According to the Rule of Seven, what should the project manager conclude?",
      zh: "一張追蹤資源績效指標的管制圖顯示,最近連續七個資料點皆落在中心線上方,即使每個點都仍落在管制上下限之內。根據連續七點法則(Rule of Seven),專案經理應得出什麼結論?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The process is in control because all points are within the control limits",
          zh: "流程受控,因為所有點都在管制界線內",
        },
      },
      {
        id: "b",
        text: {
          en: "The process shows a non-random trend and should be investigated",
          zh: "流程呈現非隨機趨勢,應予以調查",
        },
      },
      {
        id: "c",
        text: {
          en: "No action is needed until a point falls outside the control limits",
          zh: "除非有點落在管制界線外,否則無需採取行動",
        },
      },
      {
        id: "d",
        text: {
          en: "The data points should be discarded as measurement errors",
          zh: "這些資料點應視為量測誤差而捨棄",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Rule of Seven(連續七點法則)指出,即使所有資料點都在管制界線內,只要連續七點落在中心線同一側,就視為異常訊號,代表流程可能存在非隨機的系統性因素,需要調查,而非單純以「是否超出管制界線」作為唯一判斷依據。值得注意的是,連續七點法則與管制圖本質上屬於品質管理(Quality/Control Quality)的統計製程管制工具,此處是借用於資源績效情境作為練習,並非資源管理領域原生的技術。",
  },
  {
    id: "res-015",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Resources-related process to its primary output.",
      zh: "請將下列資源相關流程拖曳配對到其主要產出。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Plan Resource Management",
            zh: "規劃資源管理",
          },
        },
        {
          id: "p2",
          text: {
            en: "Estimate Resources",
            zh: "估算資源",
          },
        },
        {
          id: "p3",
          text: {
            en: "Acquire Resources",
            zh: "獲取資源",
          },
        },
        {
          id: "p4",
          text: {
            en: "Control Resources",
            zh: "控制資源(Control Resources)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Resource Management Plan and Team Charter",
            zh: "資源管理計畫與團隊章程",
          },
        },
        {
          id: "c2",
          text: {
            en: "Resource Requirements and Resource Breakdown Structure",
            zh: "資源需求與資源分解結構(RBS)",
          },
        },
        {
          id: "c3",
          text: {
            en: "Physical and team resources assigned to the project",
            zh: "指派給專案的實體與團隊資源",
          },
        },
        {
          id: "c4",
          text: {
            en: "Work performance information and change requests confirming resource utilization versus plan",
            zh: "工作績效資訊與變更請求,確認資源使用狀況是否符合計畫",
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
    explanation: "Plan Resource Management 產出資源管理計畫與團隊章程;Estimate Resources 產出資源需求與 RBS;Acquire Resources 產出實際指派的資源;Control Resources 則透過監督實際資源使用情形,產出工作績效資訊與變更請求,確認資源使用狀況是否符合計畫,是否需要介入調整。",
  },
  {
    id: "res-016",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "During a team retrospective, the project manager asks everyone to temporarily set aside criticism and speak only about the potential benefits and optimistic possibilities of a proposed idea. Which Six Thinking Hats color represents this mode of thinking?",
      zh: "在團隊回顧會議中,專案經理請所有人暫時放下批判,只針對提案的潛在效益與樂觀可能性發言。這符合六頂思考帽(Six Thinking Hats)中的哪一頂帽子?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Black Hat",
          zh: "黑帽(Black,批判)",
        },
      },
      {
        id: "b",
        text: {
          en: "Yellow Hat",
          zh: "黃帽(Yellow,樂觀)",
        },
      },
      {
        id: "c",
        text: {
          en: "Red Hat",
          zh: "紅帽(Red,情感)",
        },
      },
      {
        id: "d",
        text: {
          en: "Blue Hat",
          zh: "藍帽(Blue,流程管理)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Six Thinking Hats(六頂思考帽)由 De Bono 提出,是團體決策工具,其中 Yellow Hat(黃帽)代表樂觀、聚焦效益的思考角度;Black Hat 代表批判,Red Hat 代表情感直覺,Blue Hat 代表流程管理與統籌討論。",
  },
  {
    id: "res-017",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A normally reliable team member has recently missed several deadlines and seems withdrawn during meetings. Applying emotional intelligence (EI), which two actions should the project manager take first? Select two.",
      zh: "一位平時表現可靠的團隊成員最近多次錯過截止日,在會議中也顯得沉默疏離。運用情緒智商(Emotional Intelligence, EI)的角度,專案經理應優先採取下列哪兩項行動?(選兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Privately and empathetically ask the team member if something is affecting their work",
          zh: "私下並以同理心詢問該成員是否有什麼事影響了工作",
        },
      },
      {
        id: "b",
        text: {
          en: "Publicly point out the missed deadlines in the next team meeting",
          zh: "在下次團隊會議上公開指出其錯過的截止日",
        },
      },
      {
        id: "c",
        text: {
          en: "Listen actively and remain open to adjusting workload or support if needed",
          zh: "積極傾聽,並保持開放態度視需要調整工作量或提供支援",
        },
      },
      {
        id: "d",
        text: {
          en: "Immediately escalate the performance issue to HR",
          zh: "立即將績效問題上報人資部門",
        },
      },
      {
        id: "e",
        text: {
          en: "Assume the team member is simply unmotivated and reassign their tasks without discussion",
          zh: "直接假設該成員缺乏動機,未經討論即重新分配其任務",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "情緒智商強調自我覺察、同理心與社交技巧。面對行為轉變的成員,PM 應先私下同理詢問、積極傾聽,了解背後原因後再視情況調整支援,而非公開指責、驟下結論或立即升級處理,這些都會損害信任與士氣。",
  },
  {
    id: "res-018",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A team has recently completed its final deliverables, received formal client acceptance, and is now being released to other assignments; some members express both pride and sadness about the team disbanding. Click the Tuckman stage this describes.",
      zh: "一個團隊剛完成最終交付項目,獲得客戶正式驗收,現正被釋出去支援其他任務;部分成員對團隊即將解散感到既驕傲又不捨。請點選這符合塔克曼(Tuckman)的哪個階段。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Forming",
          zh: "形成期(Forming)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Storming",
          zh: "風暴期(Storming)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Norming",
          zh: "規範期(Norming)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Performing",
          zh: "表現期(Performing)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Adjourning",
          zh: "解散期(Adjourning)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n5",
    explanation: "團隊完成交付、獲得驗收並釋出資源、成員對解散帶有複雜情緒,正是 Tuckman 團隊發展階段中的 Adjourning(解散期)——團隊生命週期的最後階段。",
  },
  {
    id: "res-019",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project charter specifies that a particular senior architect will be assigned to the project due to her unique expertise, before any other resource planning has taken place. This scenario best illustrates which resource acquisition consideration?",
      zh: "專案章程中明確指定某位資深架構師因其獨特專業能力而必須被指派到此專案,而此決定發生在其他資源規劃之前。這個情境最能說明哪一種資源獲取考量?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Pre-assignment",
          zh: "預先指派(Pre-assignment)",
        },
      },
      {
        id: "b",
        text: {
          en: "Negotiation",
          zh: "協商(Negotiation)",
        },
      },
      {
        id: "c",
        text: {
          en: "Virtual Teams",
          zh: "虛擬團隊(Virtual Teams)",
        },
      },
      {
        id: "d",
        text: {
          en: "Multi-criteria Decision Analysis",
          zh: "多準則決策分析",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Pre-assignment(預先指派)是指在專案規劃前,某些人力資源已因特定專業能力或合約承諾而被預先確定指派,常見於章程或合約中明訂特定人選的情境。Negotiation 則是指 PM 需與職能經理或其他專案協商爭取資源。",
  },
  {
    id: "res-020",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Your project urgently needs a specialized cloud security architect that no one on the current team has the skills for, and the organization does not have anyone internally available. Which three of the following are appropriate considerations under the Acquire Resources process to address this? Select three.",
      zh: "你的專案急需一位具備專業技能的雲端安全架構師,現有團隊中無人具備該技能,組織內部也沒有可用人選。下列哪三項屬於獲取資源(Acquire Resources)流程中可用來因應此情況的考量?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Negotiate with other functional or project managers for a qualified internal resource",
          zh: "與其他職能經理或專案經理協商,爭取具資格的內部資源",
        },
      },
      {
        id: "b",
        text: {
          en: "Consider acquiring the resource externally, such as through contracting",
          zh: "考慮透過外部途徑取得資源,例如簽約聘僱",
        },
      },
      {
        id: "c",
        text: {
          en: "Evaluate whether a virtual/remote arrangement could widen the talent pool",
          zh: "評估是否可透過虛擬/遠端安排擴大人才選擇範圍",
        },
      },
      {
        id: "d",
        text: {
          en: "Apply the Rule of Seven to determine whether the shortage is statistically significant",
          zh: "套用連續七點法則判斷此短缺是否具統計顯著性",
        },
      },
      {
        id: "e",
        text: {
          en: "Wait for the next control chart review cycle before taking any action",
          zh: "等到下一次管制圖檢視週期再採取行動",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Acquire Resources 流程常見考量包括與其他管理者協商(Negotiation)、外部採購/簽約取得資源,以及透過虛擬團隊(Virtual Teams)擴大人才選擇範圍。Rule of Seven 與管制圖屬於 Control Resources 流程的統計工具,與資源獲取無關,是本題的干擾選項。",
  },
  {
    id: "res-021",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The project sponsor tells the project manager, \"I just need you to keep the schedule on track and report status every week — don't worry about inspiring the team, that's not your job.\" The project manager privately disagrees, believing that setting a compelling vision and motivating the team toward it is just as critical as tracking tasks. Which statement best captures the distinction being debated here?",
      zh: "專案贊助人告訴專案經理:「你只需要顧好時程進度,每週回報狀態就好——不用擔心激勵團隊,那不是你的工作。」專案經理私下並不認同,他認為建立令人信服的願景並激勵團隊朝向願景邁進,和追蹤任務進度同樣重要。下列敘述何者最能說明此處雙方爭論的核心區別?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Management focuses on directing and controlling tasks to consistent results, while leadership focuses on establishing vision and inspiring people to achieve it — both are needed on a project",
          zh: "管理著重於指揮與控管任務以達成一致的結果,而領導則著重於建立願景並激勵人們達成願景——專案中兩者皆不可或缺",
        },
      },
      {
        id: "b",
        text: {
          en: "Leadership is only relevant to executives, while project managers should focus exclusively on management",
          zh: "領導力只與高階主管有關,專案經理應完全專注於管理",
        },
      },
      {
        id: "c",
        text: {
          en: "Management and leadership are interchangeable terms describing the same set of activities",
          zh: "管理與領導是可互換的同義詞,描述相同的一組活動",
        },
      },
      {
        id: "d",
        text: {
          en: "Leadership is unnecessary once a schedule baseline has been established",
          zh: "一旦建立時程基準,領導力就不再需要",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "PMI 強調 PM 需兼具管理(Management,聚焦流程、控管、一致性產出)與領導(Leadership,聚焦願景、激勵、變革)兩種能力,兩者互補而非互斥。贊助人將領導與管理視為對立、可有可無,是常見的誤解;有效的專案經理必須依情境靈活運用兩者。",
  },
  {
    id: "res-022",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A project manager working in a weak matrix organization needs a data analyst for three weeks but has almost no formal authority to compel the functional manager to release the resource. Which statement best explains why this situation occurs?",
      zh: "一位在弱矩陣型組織中工作的專案經理需要一位資料分析師支援三週,卻幾乎沒有正式職權可以要求職能經理釋出該資源。下列何者最能解釋此情況發生的原因?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "In a weak matrix, authority over resources remains primarily with the functional manager, and the project manager acts more as a coordinator or expediter",
          zh: "在弱矩陣型組織中,資源職權主要仍歸屬職能經理,專案經理的角色較接近協調者或聯絡人",
        },
      },
      {
        id: "b",
        text: {
          en: "Weak matrix organizations always grant the project manager full authority over all resources",
          zh: "弱矩陣型組織一律賦予專案經理對所有資源的完全職權",
        },
      },
      {
        id: "c",
        text: {
          en: "This only happens in projectized organizations",
          zh: "這種情況只會發生在專案型組織",
        },
      },
      {
        id: "d",
        text: {
          en: "The project manager should have unilateral authority regardless of organizational structure",
          zh: "無論組織結構為何,專案經理都應擁有單方面的職權",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "組織結構是影響 PM 職權與資源可用性的重要環境因素。在弱矩陣型組織中,職能經理保有大部分資源控制權,PM 通常只是協調者(coordinator/expediter),職權有限;職權會隨結構往平衡矩陣、強矩陣、專案型組織逐漸增強。",
  },
  {
    id: "res-023",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager assigns the team's top-performing database administrator to lead a critical stakeholder negotiation, reasoning that \"she's excellent at her job, so she'll surely be excellent at this too.\" The negotiation goes poorly because the DBA has no experience or training in negotiation. What cognitive bias does this scenario illustrate?",
      zh: "專案經理指派團隊中表現最出色的資料庫管理師去主導一場關鍵的利害關係人談判,理由是「她工作表現這麼優秀,這件事她一定也能做得很好」。結果談判進行得並不順利,因為這位資料庫管理師完全沒有談判相關的經驗或訓練。這個情境說明了哪一種認知偏誤?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Halo Effect — assuming competence in one area implies competence in unrelated areas",
          zh: "光環效應(Halo Effect)——誤以為在某一領域的能力優異,代表在不相關領域也同樣優異",
        },
      },
      {
        id: "b",
        text: {
          en: "Confirmation Bias — only seeking information that confirms existing beliefs",
          zh: "確認偏誤——只尋找能證實既有信念的資訊",
        },
      },
      {
        id: "c",
        text: {
          en: "Anchoring Bias — over-relying on the first piece of information encountered",
          zh: "定錨效應——過度依賴最先取得的資訊",
        },
      },
      {
        id: "d",
        text: {
          en: "Groupthink — suppressing dissent to maintain team harmony",
          zh: "團體迷思——為維持團隊和諧而壓抑異見",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Halo Effect(光環效應)是指因某人在一個領域表現優異,就推論其在其他不相關領域也同樣勝任,是資源指派時常見的認知陷阱。專案經理應根據實際所需技能(如談判能力)來評估與指派資源,而非僅憑既有領域的優異表現。",
  },
  {
    id: "res-024",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project manager spends much of her time removing obstacles for the team, asking team members what support they need, and pushing decision-making authority down to the people closest to the work, rather than directing their day-to-day tasks. Which leadership style is she practicing?",
      zh: "一位專案經理花費大量時間為團隊排除障礙,詢問成員需要什麼支援,並將決策權下放給最貼近實際工作的人,而非親自指揮團隊成員的日常工作內容。她所展現的是哪一種領導風格?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Autocratic leadership",
          zh: "專制型領導(Autocratic)",
        },
      },
      {
        id: "b",
        text: {
          en: "Transactional leadership",
          zh: "交易型領導(Transactional)",
        },
      },
      {
        id: "c",
        text: {
          en: "Servant leadership",
          zh: "服務型領導(Servant Leadership)",
        },
      },
      {
        id: "d",
        text: {
          en: "Laissez-faire leadership",
          zh: "放任型領導(Laissez-faire)",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "Servant Leadership(服務型領導)強調 PM 以服務團隊為優先,透過移除障礙、賦權與支援,協助團隊成員發揮潛力,而非由上而下指揮。這與 8th 版核心原則「Build Empowered Teams(打造賦權團隊)」精神高度呼應,是現代專案管理提倡的領導風格。放任型領導則是完全不介入、缺乏必要支援,與本情境中主動排除障礙的行為不同。",
  },
  {
    id: "res-025",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Consistent with the principle of building empowered teams, a project manager wants a self-organizing team to determine on its own how to break down and sequence the work needed to meet a sprint goal. What is the project manager's most appropriate role in this situation?",
      zh: "依循「打造賦權團隊」(Build Empowered Teams)的原則,專案經理希望讓自組織團隊自行決定如何拆解與排序工作,以達成 Sprint 目標。在此情境下,專案經理最適當的角色為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Assign specific tasks to each team member personally to ensure efficiency",
          zh: "親自將具體任務指派給每位成員,以確保效率",
        },
      },
      {
        id: "b",
        text: {
          en: "Set clear boundaries and goals, provide necessary resources and support, and trust the team to determine the how",
          zh: "設定清楚的界線與目標、提供必要資源與支援,並信任團隊自行決定執行方式",
        },
      },
      {
        id: "c",
        text: {
          en: "Step back entirely and avoid any involvement with the team's work",
          zh: "完全抽身,不涉入團隊的任何工作",
        },
      },
      {
        id: "d",
        text: {
          en: "Review and approve every task-level decision before the team proceeds",
          zh: "在團隊行動前逐一審核並核准每個任務層級的決策",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "打造賦權團隊(Build Empowered Teams)並非放任不管(選項 c),也不是事必躬親、逐一指派或審核(選項 a、d)。PM 應設定清楚的目標與界線、提供資源與支援,並信任團隊自行決定如何完成工作,這正是自組織團隊(self-organizing team)運作的核心精神。",
  },
  {
    id: "res-026",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A construction project needs a specialized crane for only six weeks of a two-year project. Purchasing the crane would tie up significant capital for equipment that will sit idle most of the time, while leasing it would cost more per week but require no long-term commitment. Which consideration is most relevant to the project manager's decision under Acquire Resources?",
      zh: "一項營建專案僅在兩年工期中的六週需要一台特殊起重機。購買這台起重機會佔用大量資金,而且這台設備大部分時間都閒置;租賃的話每週成本較高,但不需長期承諾。在「獲取資源」(Acquire Resources)流程下,下列哪一項考量對專案經理的決策最相關?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Comparing the total cost and utilization trade-off between purchasing and leasing the physical resource for the actual period of need",
          zh: "比較購買與租賃這項實體資源在實際需求期間的總成本與使用率取捨",
        },
      },
      {
        id: "b",
        text: {
          en: "Always purchasing equipment outright to avoid any vendor negotiation",
          zh: "一律直接購買設備,以避免任何供應商協商",
        },
      },
      {
        id: "c",
        text: {
          en: "Ignoring cost since physical resources are outside the scope of resource management",
          zh: "忽略成本考量,因為實體資源不屬於資源管理範疇",
        },
      },
      {
        id: "d",
        text: {
          en: "Assigning the decision entirely to the project sponsor without analysis",
          zh: "完全將此決策交給贊助人決定,不進行任何分析",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "實體資源(如設備、材料)的獲取決策需權衡購買與租賃(或外部承租/簽約)在使用期間與總成本上的優劣,這是 Acquire Resources 流程中常見的商業性考量,尤其當設備使用時間遠短於專案週期時,租賃通常比購置更具成本效益。此類決策屬於商業環境(Business Environment)考量下的資源決策。",
  },
  {
    id: "res-027",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project schedule assumes a particular test engineer will be available full-time in March, but that engineer has already booked two weeks of pre-approved vacation during that month. Which document, if properly maintained, would have flagged this conflict earlier during planning?",
      zh: "專案時程假設某位測試工程師在三月將全職投入專案,但該工程師已提前核准三月有兩週的休假。若有一份文件被妥善維護,原本應該能在規劃階段就及早發現這項衝突,是哪一份文件?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Resource Calendar",
          zh: "資源日曆(Resource Calendar)",
        },
      },
      {
        id: "b",
        text: {
          en: "Risk Register",
          zh: "風險登錄冊",
        },
      },
      {
        id: "c",
        text: {
          en: "Stakeholder Register",
          zh: "利害關係人登錄冊",
        },
      },
      {
        id: "d",
        text: {
          en: "Team Charter",
          zh: "團隊章程",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Resource Calendar(資源日曆)記錄每項資源(含人力)的可用時間、休假、班表等資訊,是估算資源與規劃時程時的重要輸入。若在規劃階段妥善維護資源日曆,即可及早發現人力在特定期間不可用的衝突,避免時程假設與實際可用性脫節。",
  },
  {
    id: "res-028",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager wants to implement a recognition program for a culturally diverse, multinational team. One team member privately mentions that being publicly praised in front of the whole team makes her deeply uncomfortable, while another team member says he thrives on public recognition. What is the best approach for the project manager to take?",
      zh: "專案經理想為一個文化多元的跨國團隊建立表揚機制。一位成員私下表示,在全體團隊面前被公開表揚會讓她感到非常不自在,而另一位成員則表示自己很喜歡公開受到肯定。專案經理最適當的做法為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Tailor recognition methods to individual and cultural preferences rather than applying one uniform approach to everyone",
          zh: "依個人與文化偏好調整表揚方式,而非對所有人套用單一固定做法",
        },
      },
      {
        id: "b",
        text: {
          en: "Only use public recognition in team meetings since it is the standard practice",
          zh: "只採用公開表揚,因為這是標準做法",
        },
      },
      {
        id: "c",
        text: {
          en: "Eliminate all forms of recognition to avoid any discomfort",
          zh: "取消所有形式的表揚,以避免任何人感到不自在",
        },
      },
      {
        id: "d",
        text: {
          en: "Recognize only the team member who is comfortable with public praise",
          zh: "只表揚那位對公開讚揚感到自在的成員",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "有效的獎勵與表揚制度應考量個人差異與文化背景,採取彈性且因人而異的方式(例如私下感謝信、公開表揚、實質獎勵等並存),而非「一視同仁」套用單一做法,也不能因噎廢食完全取消或只顧及部分成員感受。",
  },
  {
    id: "res-029",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are typically established within a Team Charter to guide how the team will work together? Select three.",
      zh: "下列何者通常會在團隊章程(Team Charter)中制定,用以指引團隊如何共同運作?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Team values and ground rules",
          zh: "團隊價值觀與基本規範",
        },
      },
      {
        id: "b",
        text: {
          en: "Communication guidelines and decision-making process",
          zh: "溝通準則與決策方式",
        },
      },
      {
        id: "c",
        text: {
          en: "Conflict management approach the team agrees to follow",
          zh: "團隊共同同意採行的衝突管理方式",
        },
      },
      {
        id: "d",
        text: {
          en: "The detailed project budget and cost baseline",
          zh: "詳細的專案預算與成本基準",
        },
      },
      {
        id: "e",
        text: {
          en: "The full network diagram showing task dependencies",
          zh: "完整顯示任務相依關係的網路圖",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Team Charter(團隊章程)是 Plan Resource Management 流程的產出,記錄團隊共同約定的價值觀、基本規範、溝通準則、決策方式與衝突處理方式等運作規範。成本基準與網路圖分別屬於財務(Finance)與時程(Schedule)領域的產出,不屬於團隊章程內容。",
  },
  {
    id: "res-030",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager has ample time to resolve a disagreement between two team members and wants an approach that prioritizes preserving their long-term working relationship above winning on the specific issue. Which two conflict-handling approaches are most consistent with this relationship-preserving priority? Select two.",
      zh: "專案經理有充裕時間解決兩位團隊成員之間的歧見,並希望採用的處理方式能以維護雙方長期合作關係為優先,而非在該項議題上爭出輸贏。下列哪兩種衝突處理方式最符合這種以關係為優先的考量?(選兩項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Collaborate/Problem Solve — jointly examine the underlying interests to reach a mutually beneficial solution",
          zh: "合作/共同解決——共同檢視根本利益,達成互利的解決方案",
        },
      },
      {
        id: "b",
        text: {
          en: "Force/Direct — one party imposes a decision using positional power",
          zh: "強制——一方運用職權地位強行做出決定",
        },
      },
      {
        id: "c",
        text: {
          en: "Smooth/Accommodate — emphasize areas of agreement while downplaying differences to preserve harmony",
          zh: "緩和/包容——強調共識之處、淡化分歧,以維持和諧",
        },
      },
      {
        id: "d",
        text: {
          en: "Withdraw/Avoid — postpone the issue or retreat from the disagreement entirely",
          zh: "迴避——擱置問題或完全退出爭執",
        },
      },
      {
        id: "e",
        text: {
          en: "Compromise — each party gives up something for a temporary, partially satisfying solution",
          zh: "妥協——雙方各退一步,達成暫時且部分滿意的解決方案",
        },
      },
    ],
    correctAnswer: [
      "a",
      "c",
    ],
    selectCount: 2,
    explanation: "在時間充裕且以維護長期關係為優先的情境下,Collaborate/Problem Solve(合作/共同解決)透過共同檢視根本利益達成雙贏,最能同時解決問題又維護關係;Smooth/Accommodate(緩和/包容)則透過強調共識、淡化分歧來保護關係與和諧,也符合關係優先的考量。Force 會犧牲關係、Withdraw 完全不處理問題、Compromise 僅達成部分滿意的暫時方案,相對而言都不如前兩者更貼合「以關係為優先」的條件。",
  },
  {
    id: "res-031",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are recognized project leadership styles that a project manager might adapt depending on the team and situation? Select three.",
      zh: "下列何者屬於專案經理可能依團隊與情境調整採用的領導風格?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Transformational leadership — inspiring the team with a shared vision and encouraging innovation",
          zh: "轉型領導——以共同願景激勵團隊並鼓勵創新",
        },
      },
      {
        id: "b",
        text: {
          en: "Transactional leadership — managing through clear structure, rewards, and performance-based exchanges",
          zh: "交易型領導——透過明確架構、獎勵與績效交換來管理",
        },
      },
      {
        id: "c",
        text: {
          en: "Laissez-faire leadership — allowing the team significant autonomy with minimal direct interference",
          zh: "放任型領導——給予團隊高度自主權、極少直接介入",
        },
      },
      {
        id: "d",
        text: {
          en: "Rule of Seven leadership — leading through statistical control chart analysis",
          zh: "「連續七點法則」領導——透過統計管制圖分析來領導",
        },
      },
      {
        id: "e",
        text: {
          en: "Critical Path leadership — leading exclusively by enforcing the longest sequence of dependent tasks",
          zh: "「要徑」領導——僅透過強制執行最長相依任務序列來領導",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "常見的專案領導風格包括轉型領導(激勵願景與創新)、交易型領導(以結構與獎勵驅動績效)、放任型領導(高度授權、極少介入)等,PM 應依團隊成熟度與情境彈性調整。選項 (d)(e) 為干擾選項,分別將品質管理工具(Rule of Seven)與時程管理概念(Critical Path)誤植為領導風格,並非真實存在的領導風格分類。",
  },
  {
    id: "res-032",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project manager is setting up a newly formed virtual team spread across multiple countries. Which three of the following practices would most help the team build trust and work effectively despite the physical distance? Select three.",
      zh: "專案經理正在組建一個橫跨多國的新虛擬團隊。下列哪三項做法最能協助團隊在物理距離之下建立信任並有效運作?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Establish clear communication norms, including preferred tools and expected response times",
          zh: "建立明確的溝通準則,包括慣用工具與預期回應時間",
        },
      },
      {
        id: "b",
        text: {
          en: "Rotate meeting times periodically so the inconvenience of off-hour meetings is shared fairly across time zones",
          zh: "定期輪替會議時間,讓非上班時段開會的不便能公平分攤於各時區成員",
        },
      },
      {
        id: "c",
        text: {
          en: "Use video calls when possible to build rapport and pick up on non-verbal cues",
          zh: "盡可能使用視訊通話,以建立情感連結並捕捉非語言線索",
        },
      },
      {
        id: "d",
        text: {
          en: "Schedule all meetings exclusively at the project manager's local convenient time",
          zh: "所有會議一律排在專案經理當地方便的時間",
        },
      },
      {
        id: "e",
        text: {
          en: "Minimize any team-building activities since virtual teams do not need them",
          zh: "盡量減少任何團隊建立活動,因為虛擬團隊不需要這些",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "虛擬團隊面臨時區、文化與溝通媒介的額外挑戰,建立明確溝通準則、公平輪替會議時間、善用視訊建立信任感,都是有效的因應做法。只顧 PM 自身方便安排會議、或忽視團隊建立活動,都會加劇虛擬團隊的疏離感與不公平感。",
  },
  {
    id: "res-033",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "As part of Control Resources for physical resources on a manufacturing project, which three of the following activities would the project manager most appropriately perform? Select three.",
      zh: "在製造業專案中,身為「控制資源」(Control Resources)流程對實體資源的一部分,下列哪三項活動最適合由專案經理執行?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Monitor actual material and equipment usage against the resource management plan",
          zh: "監控實際材料與設備使用狀況是否符合資源管理計畫",
        },
      },
      {
        id: "b",
        text: {
          en: "Track equipment maintenance schedules to ensure availability when needed",
          zh: "追蹤設備維護排程,確保設備在需要時可用",
        },
      },
      {
        id: "c",
        text: {
          en: "Take corrective action, such as reallocating equipment, when a shortage or surplus is identified",
          zh: "當發現短缺或過剩時採取修正行動,例如重新調度設備",
        },
      },
      {
        id: "d",
        text: {
          en: "Personally repair any malfunctioning equipment regardless of technical expertise",
          zh: "無論是否具備技術能力,親自修理任何故障設備",
        },
      },
      {
        id: "e",
        text: {
          en: "Ignore minor resource utilization variances since only major issues under Control Resources matter",
          zh: "忽略微小的資源使用差異,因為控制資源流程只需關注重大問題",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Control Resources(控制資源)流程涉及監督實際資源使用是否符合計畫、追蹤實體資源(如設備)的狀態與可用性,並在發現偏差時採取修正行動(如重新調度)。PM 並非要親自動手維修設備(非其專業職責),也不應忽略微小差異,因為趨勢性的小偏差(如 Rule of Seven 所示)也可能是需要調查的訊號。",
  },
  {
    id: "res-034",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each leadership style to the description that best fits it.",
      zh: "請將下列領導風格拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Servant Leadership",
            zh: "服務型領導",
          },
        },
        {
          id: "p2",
          text: {
            en: "Autocratic Leadership",
            zh: "專制型領導",
          },
        },
        {
          id: "p3",
          text: {
            en: "Transformational Leadership",
            zh: "轉型領導",
          },
        },
        {
          id: "p4",
          text: {
            en: "Transactional Leadership",
            zh: "交易型領導",
          },
        },
        {
          id: "p5",
          text: {
            en: "Laissez-faire Leadership",
            zh: "放任型領導",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The leader prioritizes serving the team by removing obstacles and empowering members",
            zh: "領導者優先服務團隊,透過排除障礙與賦權來領導",
          },
        },
        {
          id: "c2",
          text: {
            en: "The leader makes decisions unilaterally with little or no input from the team",
            zh: "領導者單方面做出決策,極少或完全不徵詢團隊意見",
          },
        },
        {
          id: "c3",
          text: {
            en: "The leader inspires the team with a compelling vision and encourages innovation and change",
            zh: "領導者以令人信服的願景激勵團隊,並鼓勵創新與變革",
          },
        },
        {
          id: "c4",
          text: {
            en: "The leader motivates through clear rewards, structure, and performance-based exchanges",
            zh: "領導者透過明確的獎勵、架構與績效交換來激勵團隊",
          },
        },
        {
          id: "c5",
          text: {
            en: "The leader gives the team almost complete autonomy with minimal direct guidance",
            zh: "領導者給予團隊近乎完全的自主權,極少直接指導",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "五種常見領導風格的核心特徵:服務型領導以服務團隊、賦權排障為核心;專制型領導由領導者單方面決策;轉型領導以願景激勵創新變革;交易型領導以獎勵與績效交換驅動;放任型領導則給予團隊高度自主、極少介入。PM 應依團隊成熟度與情境彈性選用。",
  },
  {
    id: "res-035",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each organizational structure type to the level of project manager authority typically associated with it.",
      zh: "請將下列組織結構類型拖曳配對到其通常對應的專案經理職權程度。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Functional Organization",
            zh: "職能型組織",
          },
        },
        {
          id: "p2",
          text: {
            en: "Weak Matrix",
            zh: "弱矩陣",
          },
        },
        {
          id: "p3",
          text: {
            en: "Balanced Matrix",
            zh: "平衡矩陣",
          },
        },
        {
          id: "p4",
          text: {
            en: "Strong Matrix",
            zh: "強矩陣",
          },
        },
        {
          id: "p5",
          text: {
            en: "Projectized Organization",
            zh: "專案型組織",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Little to none — the project manager may not even hold that title",
            zh: "幾乎沒有職權——甚至可能沒有「專案經理」這個職稱",
          },
        },
        {
          id: "c2",
          text: {
            en: "Limited — the project manager acts mainly as a coordinator or expediter",
            zh: "有限職權——專案經理主要扮演協調者或聯絡人的角色",
          },
        },
        {
          id: "c3",
          text: {
            en: "Low to moderate — authority is shared between the project and functional managers",
            zh: "低至中等——職權由專案經理與職能經理共同分享",
          },
        },
        {
          id: "c4",
          text: {
            en: "Moderate to high — the project manager has more formal authority than the functional manager",
            zh: "中至高——專案經理比職能經理擁有更多正式職權",
          },
        },
        {
          id: "c5",
          text: {
            en: "High to almost total — the project manager has full authority over the project and its resources",
            zh: "高至近乎完全——專案經理對專案及其資源擁有完全職權",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "組織結構是決定 PM 職權高低的重要環境因素,職權由職能型(幾乎無職權)、弱矩陣(協調者角色)、平衡矩陣(職權共享)、強矩陣(職權高於職能經理),到專案型組織(近乎完全職權)依序遞增。此排序也直接影響 PM 在資源獲取與團隊建立上的難易度。",
  },
  {
    id: "res-036",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Six Thinking Hats color to the mode of thinking it represents.",
      zh: "請將六頂思考帽(Six Thinking Hats)的每種顏色拖曳配對到其代表的思考模式。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "White Hat",
            zh: "白帽",
          },
        },
        {
          id: "p2",
          text: {
            en: "Red Hat",
            zh: "紅帽",
          },
        },
        {
          id: "p3",
          text: {
            en: "Black Hat",
            zh: "黑帽",
          },
        },
        {
          id: "p4",
          text: {
            en: "Yellow Hat",
            zh: "黃帽",
          },
        },
        {
          id: "p5",
          text: {
            en: "Green Hat",
            zh: "綠帽",
          },
        },
        {
          id: "p6",
          text: {
            en: "Blue Hat",
            zh: "藍帽",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Focus on available facts, data, and information",
            zh: "聚焦於現有事實、數據與資訊",
          },
        },
        {
          id: "c2",
          text: {
            en: "Express feelings, intuition, and emotional reactions without justification",
            zh: "表達感受、直覺與情緒反應,不需說明理由",
          },
        },
        {
          id: "c3",
          text: {
            en: "Identify risks, weaknesses, and reasons an idea might fail",
            zh: "找出風險、弱點,以及構想可能失敗的原因",
          },
        },
        {
          id: "c4",
          text: {
            en: "Focus on optimism, benefits, and value of an idea",
            zh: "聚焦於樂觀面、效益與構想的價值",
          },
        },
        {
          id: "c5",
          text: {
            en: "Generate creative alternatives and new ideas",
            zh: "產生創意替代方案與新構想",
          },
        },
        {
          id: "c6",
          text: {
            en: "Manage the thinking process itself and summarize the discussion",
            zh: "管理思考過程本身並總結討論",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
      p6: "c6",
    },
    explanation: "六頂思考帽由 De Bono 提出,是團體決策/腦力激盪工具:White(事實數據)、Red(情感直覺)、Black(批判風險)、Yellow(樂觀效益)、Green(創意)、Blue(流程管理與總結)。透過輪流切換帽子角度,協助團隊從多元角度檢視構想,避免討論陷入單一思維模式。",
  },
  {
    id: "res-037",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager notices she is about to assign the team's strongest coder to lead client-facing negotiations simply because he is the strongest coder. Before making the assignment, she should first {{blank1}}, and then {{blank2}}.",
      zh: "專案經理注意到自己即將僅因某位成員是團隊中最強的程式設計師,就指派他主導對客戶的談判。在做出這項指派之前,她應該先 {{blank1}},接著 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Recognize this reasoning may be a Halo Effect and identify the actual skills the negotiation role requires",
              zh: "意識到這樣的推論可能是光環效應,並釐清談判角色實際所需的技能",
            },
          },
          {
            id: "b",
            text: {
              en: "Proceed with the assignment since strong performers are usually strong at everything",
              zh: "直接進行指派,因為表現優異的人通常各方面都很優秀",
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
              en: "Evaluate whether the coder or another team member actually has negotiation skills or interest, and assign accordingly",
              zh: "評估這位程式設計師或其他成員是否真的具備談判技能或意願,並據此指派",
            },
          },
          {
            id: "b",
            text: {
              en: "Assign the role randomly without evaluating anyone's actual skills",
              zh: "不評估任何人的實際技能,隨機指派角色",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "本題描述典型的光環效應(Halo Effect)陷阱。PM 應先自我覺察這種以偏概全的推論,再依實際所需技能(而非既有領域的優異表現)重新評估合適人選,才能做出更準確的資源指派決策。",
  },
  {
    id: "res-038",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Your project and another project in the same organization both need the only available high-precision testing rig next month, and the other project's manager is unwilling to share the schedule. As the project manager, you should first {{blank1}}, and if no agreement can be reached, {{blank2}}.",
      zh: "你的專案與組織內另一個專案下個月都需要用到唯一可用的高精度測試機台,而對方專案經理不願意協調共用排程。身為專案經理,你應該先 {{blank1}},若雙方無法達成協議,則 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Negotiate directly with the other project manager to find a schedule that works for both projects",
              zh: "直接與另一位專案經理協商,尋找雙方都能接受的排程方式",
            },
          },
          {
            id: "b",
            text: {
              en: "Quietly reschedule your own project's testing without informing anyone",
              zh: "不通知任何人,自行悄悄調整自己專案的測試排程",
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
              en: "Escalate to a common manager or the PMO for a resource prioritization decision",
              zh: "上報至共同的上級主管或 PMO,由其做出資源優先順序的裁決",
            },
          },
          {
            id: "b",
            text: {
              en: "Simply proceed with both projects using the equipment simultaneously without coordination",
              zh: "不做任何協調,讓兩個專案同時使用該設備",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "面對稀缺實體資源的爭奪,PM 應先嘗試與對方專案經理協商找出雙贏排程;若協商無效,則應透過正式管道(如共同主管或 PMO)上報,由具權限者依組織優先順序裁決,而非自行其是或放任衝突不管。",
  },
  {
    id: "res-039",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A newly self-organizing agile team keeps waiting for the project manager to assign individual tasks each sprint instead of pulling work themselves. To build a truly empowered team, the project manager should first {{blank1}}, and over time {{blank2}}.",
      zh: "一個剛開始自組織運作的敏捷團隊,每個 Sprint 都還在等專案經理指派個別任務,而不是自己主動認領工作。為了打造真正賦權的團隊,專案經理應該先 {{blank1}},並隨著時間 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Clarify the sprint goal and boundaries, then explicitly invite the team to self-select tasks",
              zh: "釐清 Sprint 目標與界線,並明確邀請團隊自行認領任務",
            },
          },
          {
            id: "b",
            text: {
              en: "Continue assigning tasks directly since the team clearly prefers it that way",
              zh: "繼續直接指派任務,因為團隊顯然偏好這種方式",
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
              en: "Gradually step back from task-level involvement as the team demonstrates growing ownership",
              zh: "隨著團隊展現出愈來愈強的當責感,逐漸從任務層級的介入中退出",
            },
          },
          {
            id: "b",
            text: {
              en: "Increase direct control to ensure the team never makes a mistake",
              zh: "加強直接控管,確保團隊永遠不會犯錯",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "打造賦權自組織團隊是漸進過程:PM 應先設定清楚目標與界線並主動邀請團隊自行認領工作,而非因團隊習慣被動就持續指派;隨著團隊展現當責感,PM 應逐步退出任務層級的細部介入,而非反其道而行加強控管,後者將扼殺團隊自組織的發展。",
  },
  {
    id: "res-040",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A quality assurance lead is the only person who must sign off on and take ultimate ownership of a deliverable's correctness, even though several team members actually perform the testing work. Click the RACI designation that applies to the quality assurance lead in this scenario.",
      zh: "品質保證主管是唯一必須簽核、並對交付項目正確性負最終責任的人,即使實際測試工作是由多位團隊成員執行。請點選此情境中品質保證主管所適用的 RACI 角色。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Responsible",
          zh: "執行者(Responsible)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Accountable",
          zh: "負責者(Accountable)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Consulted",
          zh: "諮詢者(Consulted)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Informed",
          zh: "被告知者(Informed)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Support",
          zh: "支援者(Support,擴充版 RACI 才有的角色)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "情境中品質保證主管是最終簽核、負責結果正確性的人,對應 RACI 中的 Accountable(負責者);實際執行測試工作的多位團隊成員則是 Responsible(執行者)。Support 是部分擴充版 RACI(如 RASCI)才會出現的角色,標準 RACI 矩陣中並不包含,屬於干擾選項。",
  },
  {
    id: "res-041",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In this organization, project team members report directly and full-time to the project manager for the duration of the project, and the project manager has near-total authority over budget and resource decisions. Click the organizational structure type this describes.",
      zh: "在這個組織中,專案團隊成員於專案期間全職且直接向專案經理報告,專案經理對預算與資源決策擁有近乎完全的職權。請點選此情境所描述的組織結構類型。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Functional Organization",
          zh: "職能型組織",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Weak Matrix",
          zh: "弱矩陣",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Balanced Matrix",
          zh: "平衡矩陣",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Strong Matrix",
          zh: "強矩陣",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Projectized Organization",
          zh: "專案型組織",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n5",
    explanation: "專案型組織(Projectized Organization)中,團隊成員全職向 PM 報告,PM 對專案資源與預算擁有近乎完全的職權,團隊在專案結束後才解散或重新分配。這與職能型(PM 幾乎無職權)、弱/平衡/強矩陣(職權介於兩者之間、與職能經理共享)明顯不同。",
  },
  {
    id: "res-042",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Following an unexpected round of layoffs at the company, several remaining team members repeatedly ask the project manager whether their own positions are secure, and their productivity has noticeably dropped as a result. According to Maslow's Hierarchy of Needs, which level of need is currently unmet for these team members?",
      zh: "公司在一波非預期的裁員之後,幾位留任的團隊成員不斷詢問專案經理自己的職位是否穩定,他們的生產力也因此明顯下降。根據馬斯洛需求層級理論(Maslow's Hierarchy of Needs),這些團隊成員目前未被滿足的是哪一層需求?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Physiological needs",
          zh: "生理需求(Physiological)",
        },
      },
      {
        id: "b",
        text: {
          en: "Safety needs",
          zh: "安全需求(Safety)",
        },
      },
      {
        id: "c",
        text: {
          en: "Esteem needs",
          zh: "尊重需求(Esteem)",
        },
      },
      {
        id: "d",
        text: {
          en: "Self-actualization needs",
          zh: "自我實現需求(Self-actualization)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Maslow 需求層級理論中,Safety(安全需求)涵蓋工作保障、財務穩定與人身安全等面向。裁員後對職位穩定性的焦慮正是安全需求未被滿足的典型表現,會直接影響專注力與生產力。生理需求指基本生存條件;尊重需求關乎被認可與自尊;自我實現則是最高層級、追求潛能發揮,皆與本情境的職位不安全感無直接關聯。",
  },
  {
    id: "res-043",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A project manager works within an organization that emphasizes long-term employment relationships, consensus-based decision-making, and a holistic concern for employees' well-being both inside and outside of work. Which motivation-related theory best describes this management philosophy?",
      zh: "一位專案經理所處的組織強調長期雇用關係、以共識為基礎的決策方式,以及對員工工作內外整體福祉的關懷。下列哪一項與激勵相關的理論最能描述這種管理哲學?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Theory X",
          zh: "X 理論",
        },
      },
      {
        id: "b",
        text: {
          en: "Theory Y",
          zh: "Y 理論",
        },
      },
      {
        id: "c",
        text: {
          en: "Theory Z",
          zh: "Z 理論",
        },
      },
      {
        id: "d",
        text: {
          en: "Herzberg's Two-Factor Theory",
          zh: "赫茲伯格雙因子理論",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "Theory Z(Z 理論,由 Ouchi 提出)受日式管理風格啟發,強調長期雇用、集體共識決策,以及對員工整體福祉的關懷,與偏西方管理思維、聚焦個人本性假設的 Theory X(人性本懶)、Theory Y(人性本勤)不同。Herzberg 雙因子理論則聚焦保健因子與激勵因子的區分,並非本情境描述的管理哲學重點。",
  },
  {
    id: "res-044",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "According to Daniel Goleman's model of Emotional Intelligence (EI), which three of the following are recognized components of EI? Select three.",
      zh: "根據高曼(Daniel Goleman)的情緒智商(EI)模型,下列何者屬於 EI 的組成要素?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Self-Awareness",
          zh: "自我覺察",
        },
      },
      {
        id: "b",
        text: {
          en: "Self-Regulation",
          zh: "自我調節",
        },
      },
      {
        id: "c",
        text: {
          en: "Empathy",
          zh: "同理心",
        },
      },
      {
        id: "d",
        text: {
          en: "Technical Certification",
          zh: "技術證照",
        },
      },
      {
        id: "e",
        text: {
          en: "Positional Authority",
          zh: "職位權力",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Goleman 的情緒智商模型包含自我覺察、自我調節、內在動機、同理心、社交技巧等要素,核心在於認識並管理自身與他人情緒的能力。技術證照與職位權力屬於專業能力或職權範疇,與情緒智商的概念無關,是本題的干擾選項。",
  },
  {
    id: "res-051",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The only certified crane operator available is required by two activities scheduled to occur at the same time, one of which lies on the critical path with zero float. To resolve this over-allocation, the project manager adjusts the activities' start and finish dates based on resource availability, which as a result pushes back the original project end date. Which technique is being applied?",
      zh: "專案中唯一持有證照的起重機操作員,被兩個排定在同一時間的活動同時需要,其中一個活動位於要徑上、浮時為零。為解決此資源超額分配問題,專案經理依資源可用性調整了活動的起訖日期,結果導致原訂專案完工日期延後。這是採用了哪一種技術?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Resource Smoothing",
          zh: "資源平滑(Resource Smoothing)",
        },
      },
      {
        id: "b",
        text: {
          en: "Resource Leveling",
          zh: "資源撫平(Resource Leveling)",
        },
      },
      {
        id: "c",
        text: {
          en: "Fast Tracking",
          zh: "趕工壓縮時程(Fast Tracking)",
        },
      },
      {
        id: "d",
        text: {
          en: "Crashing",
          zh: "趕工加速(Crashing)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Resource Leveling(資源撫平/平衡)是依資源可用性調整活動起訖日期以解決資源衝突,由於衝突發生在浮時為零的要徑活動上,調整勢必影響要徑本身,可能導致專案完工日期延後。Resource Smoothing(資源平滑)則僅在活動的可用浮時內調整,不會改變要徑與完工日期,但本情境的衝突剛好發生在無浮時的要徑活動上,因此無法僅靠平滑解決。Fast Tracking 與 Crashing 屬於時程壓縮技術,並非用於解決資源衝突。",
  },
  {
    id: "res-052",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "Two non-critical activities with several days of float both require the same specialized inspector at overlapping times. The project manager adjusts only these activities within their available float, which resolves the conflict without changing the project's critical path or end date. Which technique is being applied?",
      zh: "兩項具有數天浮時、非要徑上的活動,在重疊的時間點都需要同一位專業檢驗員支援。專案經理僅在這些活動的可用浮時範圍內進行調整,在不改變要徑或完工日期的情況下解決了此衝突。這是採用了哪一種技術?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Resource Leveling",
          zh: "資源撫平(Resource Leveling)",
        },
      },
      {
        id: "b",
        text: {
          en: "Resource Smoothing",
          zh: "資源平滑(Resource Smoothing)",
        },
      },
      {
        id: "c",
        text: {
          en: "Crashing",
          zh: "趕工加速(Crashing)",
        },
      },
      {
        id: "d",
        text: {
          en: "Alternative Analysis",
          zh: "替代方案分析(Alternative Analysis)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Resource Smoothing(資源平滑)僅在活動既有的浮時範圍內調整,因此不會改變要徑或專案完工日期,但可能無法完全解決所有資源衝突(若浮時不足)。Resource Leveling(資源撫平)則可能超出浮時範圍調整,進而影響要徑與完工日期,通常用於更嚴重、涉及要徑的資源衝突。",
  },
  {
    id: "res-053",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A contract stipulates that the project's delivery date is fixed and under no circumstances can be delayed. The project manager discovers a resource conflict involving two non-critical activities that still have several days of float remaining. Click the technique the project manager should apply to resolve the conflict without risking the fixed delivery date.",
      zh: "合約明訂專案交付日期為固定日期,無論任何情況都不得延後。專案經理發現兩項非要徑活動之間有資源衝突,而這兩項活動仍有數天的浮時。請點選專案經理應採用的技術,以在不冒著延誤固定交付日期風險的前提下解決此衝突。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Resource Leveling",
          zh: "資源撫平(Resource Leveling)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Resource Smoothing",
          zh: "資源平滑(Resource Smoothing)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Crashing",
          zh: "趕工加速(Crashing)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Fast Tracking",
          zh: "快速跟進(Fast Tracking)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Resource Calendar",
          zh: "資源日曆(Resource Calendar)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "由於衝突發生在仍有浮時的非要徑活動上,且交付日期不得變動,Resource Smoothing(資源平滑)是最適合的技術——僅在既有浮時內調整活動,確保要徑與完工日期不受影響。Resource Leveling 可能超出浮時、影響要徑與完工日期,在本情境的固定交付日限制下風險過高;Crashing 與 Fast Tracking 是時程壓縮技術,並非用於解決資源衝突;Resource Calendar 僅是記錄資源可用時間的文件,本身不是解決衝突的技術。",
  },
  {
    id: "res-054",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A resource conflict involves two non-critical activities that each still have several days of float remaining, and the project sponsor insists the project end date must not change. The project manager should apply {{blank1}}, which will {{blank2}}.",
      zh: "一項資源衝突涉及兩項仍有數天浮時的非要徑活動,而專案贊助人堅持專案完工日期不得變動。專案經理應採用 {{blank1}},其效果是 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Resource Smoothing, adjusting the activities only within their available float",
              zh: "資源平滑(Resource Smoothing),僅在活動的可用浮時範圍內調整",
            },
          },
          {
            id: "b",
            text: {
              en: "Resource Leveling, regardless of how much float is available",
              zh: "資源撫平(Resource Leveling),不論可用浮時多寡",
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
              en: "Keep the critical path and project end date unchanged, though the over-allocation may not be fully resolved",
              zh: "維持要徑與專案完工日期不變,但資源超額分配問題未必能完全解決",
            },
          },
          {
            id: "b",
            text: {
              en: "Guarantee the over-allocation is completely eliminated even if the critical path changes",
              zh: "保證完全消除超額分配問題,即使要徑因此改變",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "在浮時充足且完工日期不得變動的前提下,應採用 Resource Smoothing(資源平滑),僅在活動既有浮時內調整,確保要徑與完工日期不受影響;但代價是若浮時不足以完全消除衝突,超額分配問題可能無法完全解決。若貿然採用 Resource Leveling 超出浮時調整,雖然更可能徹底解決衝突,卻可能牴觸贊助人對完工日期不得變動的要求。",
  },
  {
    id: "res-055",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each resource management concept to its description.",
      zh: "請將下列資源管理概念拖曳配對到其描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Resource Leveling",
            zh: "資源撫平",
          },
        },
        {
          id: "p2",
          text: {
            en: "Resource Smoothing",
            zh: "資源平滑",
          },
        },
        {
          id: "p3",
          text: {
            en: "Resource Histogram",
            zh: "資源直方圖",
          },
        },
        {
          id: "p4",
          text: {
            en: "Resource Calendar",
            zh: "資源日曆",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Adjusts start and finish dates based on resource constraints, which may extend the project end date or change the critical path",
            zh: "依資源限制調整起訖日期,可能延後專案完工日期或改變要徑",
          },
        },
        {
          id: "c2",
          text: {
            en: "Adjusts activities only within their available float, keeping the project end date and critical path unchanged",
            zh: "僅在活動的可用浮時內調整,維持專案完工日期與要徑不變",
          },
        },
        {
          id: "c3",
          text: {
            en: "A bar chart showing resource usage over time, useful for spotting over- or under-allocation",
            zh: "顯示資源隨時間使用狀況的長條圖,便於發現資源分配過多或不足",
          },
        },
        {
          id: "c4",
          text: {
            en: "Identifies the working days, shifts, and availability periods for a given resource",
            zh: "記錄特定資源的工作天數、班次與可用期間",
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
    explanation: "資源撫平與資源平滑都是解決資源衝突的優化技術,差別在於是否可能超出浮時、影響要徑與完工日期;資源直方圖是視覺化呈現資源使用狀況的圖表工具;資源日曆則記錄資源本身的可用時間資訊,是估算與規劃資源時的重要輸入,四者概念雖相關但用途各不相同,容易混淆。",
  },
  {
    id: "res-056",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The project manager creates a hierarchical breakdown of all the people, equipment, and material resources needed for the project, organized by category and type, similar in structure to a WBS but for resources instead of deliverables. Which document is this?",
      zh: "專案經理建立了一份依類別與類型分層呈現的架構,涵蓋專案所需的所有人力、設備與材料資源,結構上類似 WBS,只是分解的對象是資源而非交付項目。這是哪一份文件?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Resource Breakdown Structure (RBS)",
          zh: "資源分解結構(RBS)",
        },
      },
      {
        id: "b",
        text: {
          en: "Work Breakdown Structure (WBS)",
          zh: "工作分解結構(WBS)",
        },
      },
      {
        id: "c",
        text: {
          en: "Organizational Breakdown Structure (OBS)",
          zh: "組織分解結構(OBS)",
        },
      },
      {
        id: "d",
        text: {
          en: "RACI Matrix",
          zh: "RACI 責任分派矩陣",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Resource Breakdown Structure(RBS,資源分解結構)是 Estimate Resources 流程的產出之一,依類別與類型將專案所需人力與實體資源階層化呈現。WBS 分解的是可交付成果與工作範疇;OBS 呈現的是組織單位與工作包的對應關係;RACI 矩陣則是記錄角色責任分派,三者皆與資源分解結構的用途不同。",
  },
  {
    id: "res-057",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are recognized techniques used during the Estimate Resources process? Select three.",
      zh: "下列何者屬於「估算資源」(Estimate Resources)流程中常用的技術?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Analogous Estimating",
          zh: "類比估算(Analogous Estimating)",
        },
      },
      {
        id: "b",
        text: {
          en: "Parametric Estimating",
          zh: "參數估算(Parametric Estimating)",
        },
      },
      {
        id: "c",
        text: {
          en: "Bottom-up Estimating",
          zh: "由下而上估算(Bottom-up Estimating)",
        },
      },
      {
        id: "d",
        text: {
          en: "Critical Path Method",
          zh: "要徑法(Critical Path Method)",
        },
      },
      {
        id: "e",
        text: {
          en: "Cost-Benefit Analysis",
          zh: "成本效益分析(Cost-Benefit Analysis)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Estimate Resources(估算資源)流程常用的估算技術包括類比估算(參考過去類似專案)、參數估算(運用統計或演算關係)與由下而上估算(逐項估算工作包後彙總)。要徑法屬於時程管理(Schedule)領域的網路分析技術;成本效益分析則常用於商業論證與決策分析,皆非資源估算的典型技術。",
  },
  {
    id: "res-058",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Estimate Resources technique to its description.",
      zh: "請將下列「估算資源」流程技術拖曳配對到其描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Analogous Estimating",
            zh: "類比估算",
          },
        },
        {
          id: "p2",
          text: {
            en: "Parametric Estimating",
            zh: "參數估算",
          },
        },
        {
          id: "p3",
          text: {
            en: "Bottom-up Estimating",
            zh: "由下而上估算",
          },
        },
        {
          id: "p4",
          text: {
            en: "Alternative Analysis",
            zh: "替代方案分析",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Uses resource data from a similar past project as a quick reference point",
            zh: "參考過去類似專案的資源資料作為快速估算依據",
          },
        },
        {
          id: "c2",
          text: {
            en: "Uses a statistical or algorithmic relationship between historical data and other variables to calculate resource needs",
            zh: "運用歷史資料與其他變數之間的統計或演算關係來計算資源需求",
          },
        },
        {
          id: "c3",
          text: {
            en: "Estimates resource needs for individual, detailed work packages or activities and aggregates them upward",
            zh: "針對個別、細節的工作包或活動估算資源需求,再向上彙總",
          },
        },
        {
          id: "c4",
          text: {
            en: "Evaluates different ways of accomplishing the work, such as varying skill levels, equipment types, or make-or-buy options",
            zh: "評估完成工作的不同方式,例如不同技能水準、設備類型或自製或外購選項",
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
    explanation: "估算資源流程常用四種技術:類比估算速度快但精確度較低;參數估算依賴歷史數據與統計關係;由下而上估算最精確但耗時較長;替代方案分析則用於比較不同完成工作方式(如技能水準、設備、自製或外購)的優劣,協助選出最適合的資源配置方案。",
  },
  {
    id: "res-061",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "Ahead of a critical two-week sprint, the project manager temporarily relocates several normally distributed team members into a shared physical workspace to encourage spontaneous collaboration and faster decision-making. Which Develop Team technique is being used?",
      zh: "在一個關鍵的兩週衝刺開始前,專案經理暫時將原本分散辦公的幾位團隊成員安排到同一個共用實體工作空間,以促進自發性的協作與更快速的決策。這是採用了哪一種「發展團隊」(Develop Team)技術?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Virtual Teams",
          zh: "虛擬團隊(Virtual Teams)",
        },
      },
      {
        id: "b",
        text: {
          en: "Colocation",
          zh: "同地辦公(Colocation)",
        },
      },
      {
        id: "c",
        text: {
          en: "Ground Rules",
          zh: "基本規範(Ground Rules)",
        },
      },
      {
        id: "d",
        text: {
          en: "Recognition and Rewards",
          zh: "認可與獎勵(Recognition and Rewards)",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Colocation(同地辦公,又稱「戰情室」war room)是將多數或全部核心團隊成員安排在同一實體空間工作的做法,目的在於提升面對面溝通與協作效率,常用於關鍵衝刺或決策密集階段。Virtual Teams 則恰好相反,是允許成員異地遠距協作;Ground Rules 與 Recognition and Rewards 分別是規範行為與激勵團隊的技術,與本情境的實體空間安排無關。",
  },
  {
    id: "res-062",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Which three of the following are recognized tools and techniques of the Develop Team process? Select three.",
      zh: "下列何者屬於「發展團隊」(Develop Team)流程中常見的工具與技術?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Training",
          zh: "訓練(Training)",
        },
      },
      {
        id: "b",
        text: {
          en: "Team-building activities",
          zh: "團隊建立活動(Team-building Activities)",
        },
      },
      {
        id: "c",
        text: {
          en: "Recognition and rewards",
          zh: "認可與獎勵(Recognition and Rewards)",
        },
      },
      {
        id: "d",
        text: {
          en: "Procurement negotiations with external vendors",
          zh: "與外部供應商的採購協商",
        },
      },
      {
        id: "e",
        text: {
          en: "Cost-benefit analysis",
          zh: "成本效益分析(Cost-Benefit Analysis)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Develop Team(發展團隊)流程的常見工具與技術包括訓練、團隊建立活動、認可與獎勵,此外還有基本規範、同地辦公、虛擬團隊、溝通科技等,皆用於提升團隊能力、凝聚力與士氣。採購協商屬於獲取資源或採購管理範疇,成本效益分析則屬於決策分析工具,皆非發展團隊流程的典型技術。",
  },
  {
    id: "res-063",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Develop Team tool or technique to its description.",
      zh: "請將下列「發展團隊」工具或技術拖曳配對到其描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Training",
            zh: "訓練",
          },
        },
        {
          id: "p2",
          text: {
            en: "Team-building Activities",
            zh: "團隊建立活動",
          },
        },
        {
          id: "p3",
          text: {
            en: "Ground Rules",
            zh: "基本規範",
          },
        },
        {
          id: "p4",
          text: {
            en: "Colocation",
            zh: "同地辦公",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Helps team members acquire the technical skills or interpersonal capabilities needed to complete the work",
            zh: "協助團隊成員取得完成工作所需的技術能力或人際互動能力",
          },
        },
        {
          id: "c2",
          text: {
            en: "Activities ranging from a brief agenda item to a facilitated off-site experience, designed to improve working relationships",
            zh: "從簡短的議程項目到有引導的異地體驗活動不等,用來改善成員間的合作關係",
          },
        },
        {
          id: "c3",
          text: {
            en: "Clear expectations about acceptable behavior, established early and reinforced throughout the project",
            zh: "針對可接受行為所訂立的明確期望,於專案初期建立並持續貫徹",
          },
        },
        {
          id: "c4",
          text: {
            en: "Placing most or all of the most active team members in the same physical location to enhance communication",
            zh: "將大多數或全部主要核心成員安排在同一實體地點,以強化溝通",
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
    explanation: "Develop Team 流程的常見工具包括:訓練(提升技術或人際能力)、團隊建立活動(改善合作關係)、基本規範(建立行為期望並持續貫徹)、同地辦公(安排核心成員同一實體空間以強化溝通)。四者各自解決不同面向的團隊發展需求,考題常測驗是否能正確區分其定義與用途。",
  },
  {
    id: "res-064",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "During a team meeting, one member repeatedly interrupts and dismisses others' ideas, violating the ground rules on respectful communication that the team agreed to at project kickoff. What should the project manager do first?",
      zh: "在一場團隊會議中,某位成員一再打斷並否定其他人的意見,違反了團隊在專案啟動時共同約定的尊重溝通基本規範。專案經理應優先怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Address the behavior privately and promptly, reminding the individual of the team's agreed ground rules",
          zh: "私下且即時地處理這項行為,提醒該成員團隊共同約定的基本規範",
        },
      },
      {
        id: "b",
        text: {
          en: "Publicly reprimand the individual in front of the entire team during the meeting",
          zh: "在會議中當著全體團隊的面公開斥責該成員",
        },
      },
      {
        id: "c",
        text: {
          en: "Ignore the behavior since ground rules are only a formality",
          zh: "忽略這項行為,因為基本規範只是形式上的東西",
        },
      },
      {
        id: "d",
        text: {
          en: "Immediately remove the individual from the project without further discussion",
          zh: "未經進一步討論,立即將該成員調離專案",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "基本規範一旦建立,就應被持續貫徹執行。面對違反規範的行為,PM 應私下且即時地提醒當事人,以維護規範的效力並保留對方顏面,而非當眾羞辱、放任不管或未經溝通就採取過度的懲罰性行動,後者都可能損害團隊信任與心理安全感。",
  },
  {
    id: "res-065",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Which three of the following are commonly recognized sources of conflict on a project team? Select three.",
      zh: "下列何者屬於專案團隊中常見的衝突來源?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Scheduling conflicts and competing priorities",
          zh: "時程衝突與優先順序競爭",
        },
      },
      {
        id: "b",
        text: {
          en: "Differing technical opinions and approaches",
          zh: "技術意見與做法上的分歧",
        },
      },
      {
        id: "c",
        text: {
          en: "Competition for limited resources",
          zh: "對有限資源的競爭",
        },
      },
      {
        id: "d",
        text: {
          en: "Team members having different personal hobbies outside of work",
          zh: "團隊成員在工作之外有不同的個人興趣嗜好",
        },
      },
      {
        id: "e",
        text: {
          en: "Weather conditions at the project site",
          zh: "專案現場的天氣狀況",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "常見的專案團隊衝突來源包括時程與優先順序的競爭、技術意見分歧,以及對有限資源(人力、設備、預算)的爭奪,此外還有職權不明、行政程序等因素。個人興趣嗜好與天氣狀況一般不會是團隊衝突的直接來源,是本題的干擾選項。",
  },
  {
    id: "res-066",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project requires a highly specialized cybersecurity certification skill set that no one in the organization currently possesses, and this expertise will not be needed again once the project ends. The project manager decides to engage an external vendor to provide this capability rather than build it internally. Click the resource acquisition approach this describes.",
      zh: "專案需要一項高度專業的資安認證技能,組織內目前沒有任何人具備,而且這項專業能力在專案結束後也不會再被需要。專案經理決定委由外部廠商提供此能力,而非在組織內部自行培養。請點選這描述的是哪一種資源獲取做法。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Insourcing",
          zh: "內部自製(Insourcing)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Outsourcing",
          zh: "外包(Outsourcing)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Pre-assignment",
          zh: "預先指派(Pre-assignment)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Virtual Teams",
          zh: "虛擬團隊(Virtual Teams)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Negotiation",
          zh: "協商(Negotiation)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "當所需專業能力組織內部沒有、且屬於一次性的短期需求時,透過外部廠商取得資源(Outsourcing,外包)通常比投入資源自行培養(Insourcing)更具成本效益。Pre-assignment 是指資源在規劃前已被預先指定;Virtual Teams 指跨地域的遠距團隊安排;Negotiation 則是與其他管理者協商爭取內部資源,皆非本情境「委外取得一次性稀缺專業」的最佳描述。",
  },
  {
    id: "res-067",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "When deciding between insourcing (building capability internally) and outsourcing (contracting externally) for a specialized resource need, which three of the following are relevant business considerations? Select three.",
      zh: "在針對某項專業資源需求決定要「內部自製」(Insourcing)或「外包」(Outsourcing)時,下列何者屬於相關的商業考量?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The comparative cost of building internal capability versus contracting externally",
          zh: "建立內部能力與委外簽約兩者的相對成本比較",
        },
      },
      {
        id: "b",
        text: {
          en: "Whether the required expertise is rare or unavailable within the organization",
          zh: "所需的專業能力在組織內部是否稀有或不存在",
        },
      },
      {
        id: "c",
        text: {
          en: "The long-term strategic value of retaining the capability in-house versus a one-time need",
          zh: "長期保留該能力於組織內部的策略價值,相較於僅是一次性需求",
        },
      },
      {
        id: "d",
        text: {
          en: "The color scheme used in the project's marketing materials",
          zh: "專案行銷素材所使用的配色方案",
        },
      },
      {
        id: "e",
        text: {
          en: "The pattern observed on a control chart under the Rule of Seven",
          zh: "管制圖上依連續七點法則觀察到的型態",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "內部自製與外包的決策通常需權衡:兩種方式的相對成本、所需專業能力在組織內是否稀有或欠缺,以及該能力對組織的長期策略價值(若日後仍會持續需要,培養內部能力可能更划算;若僅為一次性需求,外包通常更具效益)。行銷素材配色與管制圖統計型態皆與此商業決策無關,是干擾選項。",
  },
  {
    id: "res-069",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A project manager wants to recognize the team's joint effort in delivering a major milestone. In the past, publicly singling out individual \"top performers\" caused resentment and reduced collaboration among peers. What is the best approach for the project manager to take this time?",
      zh: "專案經理想要表揚團隊在完成一項重大里程碑上的共同努力。過去經驗顯示,公開單獨表揚個別「表現最佳」的成員,曾引發同儕間的不滿,並降低協作意願。這次專案經理最適當的做法為何?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Recognize the team's collective achievement, while privately acknowledging notable individual contributions as appropriate",
          zh: "表揚團隊整體的共同成就,並視情況私下肯定值得注意的個人貢獻",
        },
      },
      {
        id: "b",
        text: {
          en: "Publicly rank team members from best to worst performer at the milestone celebration",
          zh: "在里程碑慶祝活動上公開將團隊成員依表現排名",
        },
      },
      {
        id: "c",
        text: {
          en: "Eliminate all forms of recognition going forward to avoid any risk of resentment",
          zh: "從此取消所有形式的表揚,以避免任何引發不滿的風險",
        },
      },
      {
        id: "d",
        text: {
          en: "Recognize only the single highest performer, as was done previously",
          zh: "一如既往,只表揚唯一表現最佳的成員",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "當團隊過去因公開的個人排名式表揚而產生嫌隙時,PM 應改以表揚團隊整體共同成就為主,同時保留私下肯定特定個人貢獻的彈性,而非因噎廢食完全取消表揚,也不應重蹈覆轍持續採用容易引發不滿的做法。獎勵與表揚方式應依團隊實際狀況與過往經驗調整,以維護整體士氣與協作氛圍。",
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
  },
  {
    id: "rsk-001",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "In the four risk classification quadrants, which one is NOT considered part of risk management and instead belongs to Scope management?",
      zh: "在風險分類四象限中,下列哪一項並不屬於風險管理範疇,而是屬於範疇(Scope)管理的一部分?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Known-Known",
          zh: "已知-已知(Known-Known)",
        },
      },
      {
        id: "b",
        text: {
          en: "Known-Unknown",
          zh: "已知-未知(Known-Unknown)",
        },
      },
      {
        id: "c",
        text: {
          en: "Unknown-Known",
          zh: "未知-已知(Unknown-Known)",
        },
      },
      {
        id: "d",
        text: {
          en: "Unknown-Unknown",
          zh: "未知-未知(Unknown-Unknown)",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Known-Known(已知-已知)代表已經確認的事實與需求,屬於範疇管理的一部分而非風險;其餘三象限(Known-Unknown 古典風險、Unknown-Known 隱藏事實、Unknown-Unknown 突發風險)才與風險管理直接相關。",
  },
  {
    id: "rsk-002",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 25% probability of occurring. If it occurs, it will cause a $80,000 cost overrun. What is the Expected Monetary Value (EMV) of this risk?",
      zh: "某風險發生機率為 25%,一旦發生將造成 8 萬美金的成本超支。此風險的期望貨幣價值(EMV)為多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "-$5,000",
          zh: "-$5,000",
        },
      },
      {
        id: "b",
        text: {
          en: "-$20,000",
          zh: "-$20,000",
        },
      },
      {
        id: "c",
        text: {
          en: "-$80,000",
          zh: "-$80,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$20,000",
          zh: "$20,000",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "EMV = 機率 × 衝擊金額 = 25% × (-$80,000) = -$20,000。因為是威脅(負面風險),EMV 為負值,代表預期損失金額。",
  },
  {
    id: "rsk-003",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A project faces a risk with a 40% probability of causing a $100,000 loss. The PM is considering a mitigation action costing $15,000 that would reduce the probability to 10% (the impact stays at $100,000 if it still occurs). Compare the net expected value of \"do nothing\" versus \"mitigate,\" and determine which option the PM should choose.",
      zh: "專案面臨一項風險,有 40% 機率造成 10 萬美金損失。PM 正考慮花費 1.5 萬美金採取減緩措施,可將發生機率降至 10%(若仍發生,衝擊金額不變)。請比較「不採取行動」與「採取減緩措施」的淨期望值,並判斷 PM 應選擇哪個方案。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Do nothing: net EV = -$40,000; choose to do nothing",
          zh: "不採取行動:淨期望值 -$40,000,應選擇不採取行動",
        },
      },
      {
        id: "b",
        text: {
          en: "Mitigate: net EV = -$25,000; choose to mitigate",
          zh: "採取減緩措施:淨期望值 -$25,000,應選擇減緩",
        },
      },
      {
        id: "c",
        text: {
          en: "Mitigate: net EV = -$15,000; choose to mitigate",
          zh: "採取減緩措施:淨期望值 -$15,000,應選擇減緩",
        },
      },
      {
        id: "d",
        text: {
          en: "Both options have equal expected value",
          zh: "兩者期望值相同,選哪個都可以",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "不採取行動 EMV = 40% × (-$100,000) = -$40,000。採取減緩措施淨期望值 = 減緩成本 $15,000 +剩餘風險期望值(10% × $100,000 = $10,000)= -$25,000。因為 -$25,000 優於(損失小於)-$40,000,故應選擇採取減緩措施。",
  },
  {
    id: "rsk-004",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "An opportunity has a 30% probability of occurring. If it occurs, it will generate a $50,000 bonus for early delivery. What is the Expected Monetary Value (EMV) of this opportunity?",
      zh: "某機會有 30% 機率發生,一旦發生將因提前交付獲得 5 萬美金獎金。此機會的期望貨幣價值(EMV)為多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$50,000",
          zh: "$50,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$15,000",
          zh: "$15,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$30,000",
          zh: "$30,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$5,000",
          zh: "$5,000",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "EMV = 30% × $50,000 = $15,000。因為是機會(正面風險),EMV 為正值,代表預期收益金額。",
  },
  {
    id: "rsk-005",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "An organization states: \"We are generally willing to accept moderate risk in pursuit of higher returns, but any single risk causing more than $500,000 in loss must trigger escalation.\" Which two risk-related terms does this statement illustrate, respectively?",
      zh: "某組織聲明:「我們整體上願意為追求更高報酬而承擔中等程度的風險,但任何單一風險若造成超過 50 萬美金損失,必須觸發升級機制。」此聲明分別說明了哪兩個風險相關名詞?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Risk Appetite, then Risk Threshold",
          zh: "風險胃納(Risk Appetite),接著是風險門檻(Risk Threshold)",
        },
      },
      {
        id: "b",
        text: {
          en: "Risk Tolerance, then Risk Exposure",
          zh: "風險容忍度(Risk Tolerance),接著是風險曝險(Risk Exposure)",
        },
      },
      {
        id: "c",
        text: {
          en: "Risk Threshold, then Risk Appetite",
          zh: "風險門檻(Risk Threshold),接著是風險胃納(Risk Appetite)",
        },
      },
      {
        id: "d",
        text: {
          en: "Risk Exposure, then Risk Tolerance",
          zh: "風險曝險(Risk Exposure),接著是風險容忍度(Risk Tolerance)",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "「整體上願意承擔中等風險」描述的是組織對風險的整體態度傾向,即風險胃納(Risk Appetite);「超過 50 萬美金必須觸發升級」則是可量化的具體界線,即風險門檻(Risk Threshold)。",
  },
  {
    id: "rsk-006",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A key vendor's component has a history of quality defects that could delay the schedule. The PM decides to switch entirely to a different, proven vendor, eliminating this risk source rather than trying to reduce its likelihood. Which threat response strategy is this?",
      zh: "某關鍵供應商的元件過去有品質瑕疵紀錄,可能導致時程延遲。PM 決定完全更換為另一家已驗證信譽良好的供應商,徹底排除此風險來源,而非嘗試降低其發生機率。這是哪一種威脅回應策略?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Avoid",
          zh: "避免(Avoid)",
        },
      },
      {
        id: "b",
        text: {
          en: "Mitigate",
          zh: "減輕(Mitigate)",
        },
      },
      {
        id: "c",
        text: {
          en: "Transfer",
          zh: "轉移(Transfer)",
        },
      },
      {
        id: "d",
        text: {
          en: "Accept",
          zh: "接受(Accept)",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "更換供應商徹底消除了風險成因,屬於避免(Avoid)策略;若只是要求原供應商加強品管以降低瑕疵機率,則屬於減輕(Mitigate)。兩者常在情境中混淆,關鍵在於風險成因是否被徹底消除。",
  },
  {
    id: "rsk-007",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The PM is comparing two contracting options for a subsystem. Option A (fixed-price in-house build) costs $200,000 with certainty. Option B (outsourcing) has a 50% chance of costing $150,000 and a 50% chance of costing $280,000. Which option has the lower expected cost, and by how much?",
      zh: "PM 正在比較兩個子系統的採購方案。方案 A(內部固定價格建置)確定成本為 20 萬美金。方案 B(外包)有 50% 機率成本為 15 萬美金,50% 機率成本為 28 萬美金。哪個方案的期望成本較低?低多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Option A is lower by $15,000",
          zh: "方案 A 較低,低 1.5 萬美金",
        },
      },
      {
        id: "b",
        text: {
          en: "Option B is lower by $15,000",
          zh: "方案 B 較低,低 1.5 萬美金",
        },
      },
      {
        id: "c",
        text: {
          en: "Option A is lower by $30,000",
          zh: "方案 A 較低,低 3 萬美金",
        },
      },
      {
        id: "d",
        text: {
          en: "Both options have equal expected cost",
          zh: "兩方案期望成本相同",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "方案 B 期望成本 = 50% × $150,000 + 50% × $280,000 = $75,000 + $140,000 = $215,000。方案 A 為確定成本 $200,000。$215,000 − $200,000 = $15,000,故方案 A 期望成本較低 1.5 萬美金。",
  },
  {
    id: "rsk-008",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three strategies below that apply ONLY to negative risks (threats), and are not used for positive risks (opportunities).",
      zh: "請選出下列僅適用於「負面風險(威脅)」、不適用於正面風險(機會)的三種策略。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Avoid",
          zh: "避免(Avoid)",
        },
      },
      {
        id: "b",
        text: {
          en: "Transfer",
          zh: "轉移(Transfer)",
        },
      },
      {
        id: "c",
        text: {
          en: "Mitigate",
          zh: "減輕(Mitigate)",
        },
      },
      {
        id: "d",
        text: {
          en: "Accept",
          zh: "接受(Accept)",
        },
      },
      {
        id: "e",
        text: {
          en: "Escalate",
          zh: "上呈(Escalate)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Avoid、Transfer、Mitigate 僅用於威脅(負面風險);Accept 與 Escalate 則是威脅與機會共用的策略。",
  },
  {
    id: "rsk-009",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three strategies below that apply ONLY to positive risks (opportunities).",
      zh: "請選出下列僅適用於「正面風險(機會)」的三種策略。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Exploit",
          zh: "利用(Exploit)",
        },
      },
      {
        id: "b",
        text: {
          en: "Share",
          zh: "分享(Share)",
        },
      },
      {
        id: "c",
        text: {
          en: "Enhance",
          zh: "增強(Enhance)",
        },
      },
      {
        id: "d",
        text: {
          en: "Accept",
          zh: "接受(Accept)",
        },
      },
      {
        id: "e",
        text: {
          en: "Escalate",
          zh: "上呈(Escalate)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "Exploit、Share、Enhance 僅用於機會(正面風險),分別對應威脅策略中的 Avoid、Transfer、Mitigate;Accept 與 Escalate 則是兩者共用的策略。",
  },
  {
    id: "rsk-010",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "easy",
    timeCategory: "agile_scenario",
    stem: {
      en: "During a retrospective, several team members admit they didn't report a technical risk earlier because they feared being blamed. Select two actions the PM should take to address this.",
      zh: "在回顧會議中,數名團隊成員坦承他們之前因擔心被究責而沒有及早回報一項技術風險。請選出 PM 應採取的兩項行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Establish a blame-free environment that rewards early risk disclosure",
          zh: "建立無究責文化,獎勵及早揭露風險的行為",
        },
      },
      {
        id: "b",
        text: {
          en: "Encourage open communication channels so concerns can be raised early",
          zh: "鼓勵開放的溝通管道,讓疑慮能及早被提出",
        },
      },
      {
        id: "c",
        text: {
          en: "Require written justification before anyone may flag a risk",
          zh: "要求任何人回報風險前須先提交書面理由",
        },
      },
      {
        id: "d",
        text: {
          en: "Reduce the frequency of status meetings to avoid alarming the team",
          zh: "減少狀態會議頻率以避免造成團隊恐慌",
        },
      },
      {
        id: "e",
        text: {
          en: "Publicly reprimand the team member responsible for the risk",
          zh: "公開斥責造成此風險的團隊成員",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "團隊不敢回報風險通常反映心理安全感不足。PM 應建立無究責(blame-free)文化並鼓勵開放溝通,才能提升風險胃納與及早識別能力;究責、限制溝通或減少會議都會讓問題惡化。",
  },
  {
    id: "rsk-011",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A new environmental regulation might be enacted mid-project, significantly increasing compliance costs. Select three appropriate actions for the PM to take.",
      zh: "一項新的環保法規可能在專案執行期間頒布,將大幅提高合規成本。請選出 PM 應採取的三項適當行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Classify this as an external-category risk in the Risk Breakdown Structure (RBS)",
          zh: "在風險分解結構(RBS)中將其歸類為外部類別風險",
        },
      },
      {
        id: "b",
        text: {
          en: "Engage legal/regulatory affairs stakeholders to monitor the pending legislation",
          zh: "與法務/法規事務利害關係人合作,持續追蹤該法案進展",
        },
      },
      {
        id: "c",
        text: {
          en: "Escalate to the sponsor if the potential cost impact exceeds the PM's authority",
          zh: "若潛在成本衝擊超出 PM 職權範圍,應上呈給發起人",
        },
      },
      {
        id: "d",
        text: {
          en: "Ignore the regulation until it is officially enacted since it is not yet certain",
          zh: "因法規尚未確定生效,暫時忽略不予理會",
        },
      },
      {
        id: "e",
        text: {
          en: "Immediately cancel the project to avoid any regulatory exposure",
          zh: "立即終止專案以避免任何法規風險",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "外部法規變動屬於 RBS 中的外部類別風險,應主動監控並與法務利害關係人合作;若衝擊超出 PM 權限範圍應 Escalate(上呈)。忽略未定案的風險或直接終止專案都不是恰當的風險回應。",
  },
  {
    id: "rsk-012",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select two true statements about Unknown-Unknown (emergent) risks.",
      zh: "請選出關於「未知-未知(Unknown-Unknown)」突發風險的兩項正確敘述。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "They cannot be identified in advance through normal risk identification techniques",
          zh: "無法透過一般風險識別技術事先辨識",
        },
      },
      {
        id: "b",
        text: {
          en: "Management reserve, not contingency reserve, is the appropriate funding source for them",
          zh: "管理準備金(而非應變準備金)才是適合的資金來源",
        },
      },
      {
        id: "c",
        text: {
          en: "They should be added to the Risk Register during Plan Risk Management",
          zh: "應在規劃風險管理階段就登錄於風險登錄表中",
        },
      },
      {
        id: "d",
        text: {
          en: "They are addressed the same way as Known-Unknown risks using probability and impact assessment",
          zh: "處理方式與已知-未知風險相同,皆用機率衝擊評估",
        },
      },
      {
        id: "e",
        text: {
          en: "They only occur in agile projects",
          zh: "只會發生在敏捷專案中",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "Unknown-Unknown 屬於突發風險,無法事先辨識,因此不會出現在事先建立的風險登錄表中,也無法用機率衝擊矩陣評估;因應方式是動用管理準備金(Management Reserve)並展現組織韌性(Resilience),而非應變準備金。此現象與專案採用的開發方法無關。",
  },
  {
    id: "rsk-013",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each threat (negative risk) response strategy to its corresponding opportunity (positive risk) counterpart that shares the same underlying logic.",
      zh: "請將下列每一種「威脅(負面風險)」回應策略,拖曳配對到採用相同邏輯的對應「機會(正面風險)」策略。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Avoid — eliminate the risk cause entirely",
            zh: "避免(Avoid)——徹底消除風險成因",
          },
        },
        {
          id: "p2",
          text: {
            en: "Transfer — shift ownership of the risk to a third party",
            zh: "轉移(Transfer)——將風險責任轉移給第三方",
          },
        },
        {
          id: "p3",
          text: {
            en: "Mitigate — reduce the probability or impact",
            zh: "減輕(Mitigate)——降低發生機率或衝擊",
          },
        },
        {
          id: "p4",
          text: {
            en: "Accept — take no proactive action, or reserve contingency",
            zh: "接受(Accept)——不主動處理或保留應變準備金",
          },
        },
        {
          id: "p5",
          text: {
            en: "Escalate — report beyond the PM's authority",
            zh: "上呈(Escalate)——上報超出 PM 職權範圍的風險",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Exploit — ensure the opportunity definitely happens",
            zh: "利用(Exploit)——確保機會一定發生",
          },
        },
        {
          id: "c2",
          text: {
            en: "Share — partner with a third party to jointly capture the benefit",
            zh: "分享(Share)——與第三方合作共享收益",
          },
        },
        {
          id: "c3",
          text: {
            en: "Enhance — increase the probability or impact",
            zh: "增強(Enhance)——提高發生機率或衝擊",
          },
        },
        {
          id: "c4",
          text: {
            en: "Accept — take no proactive action, or capture the benefit if it occurs",
            zh: "接受(Accept)——不主動處理,機會發生時再受益",
          },
        },
        {
          id: "c5",
          text: {
            en: "Escalate — report beyond the PM's authority",
            zh: "上呈(Escalate)——上報超出 PM 職權範圍的機會",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "威脅與機會的五種回應策略彼此一一對應,採用相同邏輯但方向相反:Avoid↔Exploit(徹底消除↔確保發生)、Transfer↔Share(轉移責任↔共享收益)、Mitigate↔Enhance(降低↔提高機率衝擊);Accept↔Accept 與 Escalate↔Escalate 則是威脅與機會共用、名稱相同的策略。",
  },
  {
    id: "rsk-014",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each of the 4 risk classification quadrants to the description that best fits it.",
      zh: "請將下列 4 個風險分類象限拖曳配對到最符合的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Known-Known",
            zh: "已知-已知(Known-Known)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Known-Unknown",
            zh: "已知-未知(Known-Unknown)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Unknown-Known",
            zh: "未知-已知(Unknown-Known)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Unknown-Unknown",
            zh: "未知-未知(Unknown-Unknown)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Facts and requirements already confirmed by the team; not a risk, managed as part of Scope",
            zh: "團隊已確認的事實與需求,不屬於風險,屬於範疇管理的一部分",
          },
        },
        {
          id: "c2",
          text: {
            en: "A classic risk with assessable probability and impact, managed through standard risk management",
            zh: "具可評估機率與衝擊的古典風險,透過一般風險管理處理",
          },
        },
        {
          id: "c3",
          text: {
            en: "Knowledge that exists somewhere (e.g., in the organization or industry) but the team is not yet aware of it; uncovered through information gathering",
            zh: "存在於某處(如組織或業界)但團隊尚未知曉的隱藏事實,需透過蒐集資訊發掘",
          },
        },
        {
          id: "c4",
          text: {
            en: "An emergent event outside all prior identification; addressed via management reserve and resilience",
            zh: "超出事先識別範圍的突發事件,需靠管理準備金與韌性因應",
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
    explanation: "四象限中只有 Known-Known(已知-已知)不是風險,而是範疇管理範圍內已確認的事實;其餘三象限(Known-Unknown、Unknown-Known、Unknown-Unknown)皆與風險管理直接相關,分別對應古典風險、隱藏事實、突發風險。",
  },
  {
    id: "rsk-015",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The document that records the detailed status, owner, and analysis of each individual risk is called the {{blank1}}, while the summary document that presents overall project risk exposure to senior stakeholders is called the {{blank2}}.",
      zh: "記錄每一項風險詳細狀態、負責人與分析結果的文件稱為 {{blank1}},而彙總呈現專案整體風險曝險狀況給高層利害關係人閱讀的文件則稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Risk Report",
              zh: "風險報告(Risk Report)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Register",
              zh: "風險登錄表(Risk Register)",
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
              en: "Risk Register",
              zh: "風險登錄表(Risk Register)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Report",
              zh: "風險報告(Risk Report)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "Risk Register(風險登錄表)是逐項風險的詳細登錄;Risk Report(風險報告)則是彙總呈現整體風險狀況給高層閱讀的彙總文件,兩者常被誤認為同一份文件。",
  },
  {
    id: "rsk-016",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 20% probability of occurring and, if it occurs, would cause a $60,000 cost impact. The Expected Monetary Value (EMV) of this risk is {{blank1}}.",
      zh: "某風險發生機率為 20%,一旦發生將造成 6 萬美金的成本衝擊。此風險的期望貨幣價值(EMV)為 {{blank1}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "-$12,000",
              zh: "-$12,000",
            },
          },
          {
            id: "b",
            text: {
              en: "-$60,000",
              zh: "-$60,000",
            },
          },
          {
            id: "c",
            text: {
              en: "-$20,000",
              zh: "-$20,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$12,000",
              zh: "$12,000",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
    },
    explanation: "EMV = 機率 × 衝擊金額 = 20% × (-$60,000) = -$12,000。",
  },
  {
    id: "rsk-017",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "The team decides to take no formal action on a low-priority risk and will only react if it occurs, without setting aside any reserve — this is {{blank1}}. In contrast, if the team sets aside a $10,000 contingency reserve specifically for this risk in advance, this is {{blank2}}.",
      zh: "團隊決定對一項低優先級風險不採取正式行動,僅在風險真的發生時才反應,且未預留任何準備金——這稱為 {{blank1}}。相反地,若團隊事先為此風險預留 1 萬美金的應變準備金,則稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Passive Acceptance",
              zh: "被動接受(Passive Acceptance)",
            },
          },
          {
            id: "b",
            text: {
              en: "Active Acceptance",
              zh: "主動接受(Active Acceptance)",
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
              en: "Passive Acceptance",
              zh: "被動接受(Passive Acceptance)",
            },
          },
          {
            id: "b",
            text: {
              en: "Active Acceptance",
              zh: "主動接受(Active Acceptance)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "主動接受(Active Acceptance)會預留應變準備金(Contingency Reserve)因應風險發生;被動接受(Passive Acceptance)則完全不採取事前準備,僅在風險發生時才反應。",
  },
  {
    id: "rsk-018",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Below are four risk classification quadrant cards. Click the one that is NOT considered a risk and is instead managed as part of Scope.",
      zh: "下方列出四張風險分類象限卡片,請點選其中「不屬於風險、而是屬於範疇(Scope)管理一部分」的那一張。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "Known-Known",
          zh: "已知-已知(Known-Known)",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "r2",
        label: {
          en: "Known-Unknown",
          zh: "已知-未知(Known-Unknown)",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "r3",
        label: {
          en: "Unknown-Known",
          zh: "未知-已知(Unknown-Known)",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "r4",
        label: {
          en: "Unknown-Unknown",
          zh: "未知-未知(Unknown-Unknown)",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "r1",
    explanation: "Known-Known(已知-已知)代表已確認的事實與需求,屬於範疇管理範圍而非風險;其餘三象限才與風險管理直接相關。",
  },
  {
    id: "rsk-019",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below is a decision tree. From the Start node, the PM can choose Option A (build in-house) or Option B (outsource, fixed $90,000). If Option A is chosen, there is a 60% chance the cost is $70,000 and a 40% chance the cost is $150,000. Click the node the PM should choose because it has the lower expected cost.",
      zh: "下圖為一個決策樹:從起點(Start)節點,PM 可選擇方案 A(內部建置)或方案 B(外包,固定成本 9 萬美金)。若選擇方案 A,有 60% 機率成本為 7 萬美金、40% 機率成本為 15 萬美金。請點選 PM 應選擇的節點,因為其期望成本較低。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start",
          zh: "起點(Start)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Option A: Build in-house",
          zh: "方案 A:內部建置(In-house)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Option B: Outsource, fixed $90,000",
          zh: "方案 B:外包,固定成本 9 萬美金",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Outcome: 60% chance, $70,000",
          zh: "結果:60% 機率,成本 7 萬美金",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Outcome: 40% chance, $150,000",
          zh: "結果:40% 機率,成本 15 萬美金",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n2",
        to: "n4",
      },
      {
        from: "n2",
        to: "n5",
      },
    ],
    explanation: "方案 A 期望成本 = 60% × $70,000 + 40% × $150,000 = $42,000 + $60,000 = $102,000。方案 B 為固定成本 $90,000,低於方案 A 的期望成本 $102,000,故 PM 應選擇方案 B(外包)節點。",
  },
  {
    id: "rsk-020",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 20% probability of causing a $50,000 loss. An insurance policy that fully covers this risk costs a fixed premium of $8,000. Compare the expected cost of accepting the risk versus purchasing insurance, and determine which option minimizes expected cost.",
      zh: "某風險有 20% 機率造成 5 萬美金損失。一份可完全涵蓋此風險的保險保單,固定保費為 8,000 美金。請比較「接受風險」與「購買保險」的期望成本,並判斷哪個選項的期望成本較低。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Accept the risk: expected cost $10,000, cheaper than insurance",
          zh: "接受風險:期望成本 $10,000,比保險便宜",
        },
      },
      {
        id: "b",
        text: {
          en: "Buy insurance: expected cost $8,000, cheaper than accepting the risk",
          zh: "購買保險:期望成本 $8,000,比接受風險便宜",
        },
      },
      {
        id: "c",
        text: {
          en: "Both options have the same expected cost",
          zh: "兩者期望成本相同",
        },
      },
      {
        id: "d",
        text: {
          en: "Accept the risk: expected cost equals the full impact of $50,000",
          zh: "接受風險:期望成本等於全額衝擊 $50,000",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "接受風險的 EMV = 20% × (-$50,000) = -$10,000,即預期損失 1 萬美金。購買保險的成本是固定的 $8,000(不論風險是否發生)。因為 $8,000 低於 $10,000,購買保險的期望成本較低,可省下 $2,000。",
  },
  {
    id: "rsk-021",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The PM asks the team to rate each identified risk as High, Medium, or Low using a Probability and Impact Matrix, without assigning any specific dollar figures. Which activity is the PM performing?",
      zh: "PM 要求團隊使用機率衝擊矩陣(Probability and Impact Matrix)將每項已識別風險評為高、中、低,而不指派任何具體金額。PM 正在執行哪項活動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Perform Quantitative Risk Analysis",
          zh: "執行定量風險分析",
        },
      },
      {
        id: "b",
        text: {
          en: "Perform Qualitative Risk Analysis",
          zh: "執行定性風險分析",
        },
      },
      {
        id: "c",
        text: {
          en: "Plan Risk Responses",
          zh: "規劃風險回應",
        },
      },
      {
        id: "d",
        text: {
          en: "Monitor Risks",
          zh: "監控風險",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "使用機率衝擊矩陣依機率與衝擊評分,將風險排序為高/中/低優先級、不涉及具體金額數值,屬於定性風險分析(Qualitative Risk Analysis)。定量風險分析則會用 EMV、決策樹等數值化方法評估整體專案風險曝險。",
  },
  {
    id: "rsk-022",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The PM is considering testing a new material before deciding whether to use it in construction. Testing costs $10,000. If tested, there is a 70% chance the material passes (production proceeds at $50,000) and a 30% chance it fails (requiring an alternate material at $90,000). If the PM skips testing and uses the alternate material directly, the guaranteed cost is $85,000. Compare the expected cost of \"test first\" versus \"skip testing,\" and determine which option the PM should choose.",
      zh: "PM 正考慮在營建中使用一種新材料前先進行測試。測試成本為 1 萬美金。若測試,有 70% 機率材料通過(後續生產成本 5 萬美金)、30% 機率未通過(須改用替代材料,成本 9 萬美金)。若 PM 跳過測試直接使用替代材料,保證成本為 8.5 萬美金。請比較「先測試」與「跳過測試」的期望成本,並判斷 PM 應選擇哪個方案。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Test first: expected cost $72,000; cheaper than skipping testing",
          zh: "先測試:期望成本 $72,000,比跳過測試便宜",
        },
      },
      {
        id: "b",
        text: {
          en: "Skip testing: expected cost $85,000; cheaper than testing first",
          zh: "跳過測試:期望成本 $85,000,比先測試便宜",
        },
      },
      {
        id: "c",
        text: {
          en: "Test first: expected cost $62,000; cheaper than skipping testing",
          zh: "先測試:期望成本 $62,000,比跳過測試便宜",
        },
      },
      {
        id: "d",
        text: {
          en: "Both options have equal expected cost",
          zh: "兩方案期望成本相同",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "先測試的期望成本 = 測試成本 $10,000 + (70% × $50,000 + 30% × $90,000) = $10,000 + ($35,000 + $27,000) = $10,000 + $62,000 = $72,000。跳過測試為保證成本 $85,000。因為 $72,000 低於 $85,000,PM 應選擇先測試。此題須注意先加總測試成本,再與條件機率下的後續成本相加,不能只比較後續分支金額。",
  },
  {
    id: "rsk-023",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The PM includes a clause in the subcontractor's contract stating that the subcontractor is fully financially liable for any delay costs caused by late delivery of components. The risk of late delivery itself is not eliminated or reduced by this clause. Which threat response strategy does this represent?",
      zh: "PM 在分包商合約中加入一項條款,規定若元件延遲交付造成延誤成本,分包商須負完全財務責任。此條款並未消除或降低延遲交付本身發生的可能性。這代表哪一種威脅回應策略?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Avoid",
          zh: "避免(Avoid)",
        },
      },
      {
        id: "b",
        text: {
          en: "Mitigate",
          zh: "減輕(Mitigate)",
        },
      },
      {
        id: "c",
        text: {
          en: "Transfer",
          zh: "轉移(Transfer)",
        },
      },
      {
        id: "d",
        text: {
          en: "Accept",
          zh: "接受(Accept)",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "此條款只是將風險發生後的財務後果轉嫁給分包商承擔,風險本身發生的機率並未改變,屬於轉移(Transfer)策略;若是徹底消除延遲交付的可能性(如換用有現貨庫存的供應商)才是 Avoid,若是降低延遲發生的機率或衝擊(如要求提前備料)則是 Mitigate。",
  },
  {
    id: "rsk-024",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The project has three identified risks: Risk 1 has a 30% probability and a $20,000 impact; Risk 2 has a 20% probability and a $15,000 impact; Risk 3 has a 10% probability and a $50,000 impact. Using the sum of each risk's EMV, what contingency reserve should the PM set aside to cover these risks?",
      zh: "專案有三項已識別風險:風險 1 機率 30%、衝擊 2 萬美金;風險 2 機率 20%、衝擊 1.5 萬美金;風險 3 機率 10%、衝擊 5 萬美金。以三項風險 EMV 加總計算,PM 應預留多少應變準備金以因應這些風險?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$14,000",
          zh: "$14,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$85,000",
          zh: "$85,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$20,000",
          zh: "$20,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$6,000",
          zh: "$6,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "各風險 EMV:風險 1 = 30% × $20,000 = $6,000;風險 2 = 20% × $15,000 = $3,000;風險 3 = 10% × $50,000 = $5,000。三者加總 = $6,000 + $3,000 + $5,000 = $14,000,即為應預留的應變準備金(Contingency Reserve)。",
  },
  {
    id: "rsk-025",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A new tariff policy affecting the entire industry could increase the cost of imported components across all companies in the sector, not just this project. In the Risk Breakdown Structure (RBS), which category best classifies this risk?",
      zh: "一項新的關稅政策將影響整個產業,可能提高該產業所有公司的進口元件成本,並非只影響本專案。在風險分解結構(RBS)中,此風險應歸類於哪一類別?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Technical risk",
          zh: "技術類風險",
        },
      },
      {
        id: "b",
        text: {
          en: "External risk",
          zh: "外部類風險",
        },
      },
      {
        id: "c",
        text: {
          en: "Organizational risk",
          zh: "組織類風險",
        },
      },
      {
        id: "d",
        text: {
          en: "Project management risk",
          zh: "專案管理類風險",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "影響整個產業、源自組織之外的市場與法規因素(如關稅政策),屬於 RBS 中的外部類別(External)風險;技術類風險涉及需求或技術本身,組織類風險涉及內部資源與優先順序衝突,專案管理類風險涉及估算與規劃實務缺失,皆與此情境不符。",
  },
  {
    id: "rsk-026",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 15% probability of causing a $200,000 loss. The PM purchases an insurance policy for a $20,000 premium that covers up to $150,000 of the loss if it occurs (the company retains responsibility for the remaining $50,000 if the risk occurs). What is the total expected cost of this insurance strategy (premium plus expected residual loss)?",
      zh: "某風險有 15% 機率造成 20 萬美金損失。PM 購買一份保費 2 萬美金的保單,若風險發生最多可理賠 15 萬美金(公司仍須自行承擔剩餘 5 萬美金)。此保險策略的總期望成本(保費加上殘餘期望損失)為多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$27,500",
          zh: "$27,500",
        },
      },
      {
        id: "b",
        text: {
          en: "$20,000",
          zh: "$20,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$30,000",
          zh: "$30,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$7,500",
          zh: "$7,500",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "殘餘風險期望損失 = 15% × $50,000(未獲理賠部分)= $7,500。總期望成本 = 保費 $20,000 + $7,500 = $27,500。相較於完全不投保的 EMV = 15% × $200,000 = $30,000,投保仍可將期望成本降低 $2,500,但公司仍保有殘餘風險(Residual Risk),並非完全轉移。",
  },
  {
    id: "rsk-027",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three techniques below that are used in Quantitative Risk Analysis rather than Qualitative Risk Analysis.",
      zh: "請選出下列三項用於「定量風險分析」而非「定性風險分析」的技術。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Expected Monetary Value (EMV) Analysis",
          zh: "期望貨幣價值分析(EMV)",
        },
      },
      {
        id: "b",
        text: {
          en: "Decision Tree Analysis",
          zh: "決策樹分析",
        },
      },
      {
        id: "c",
        text: {
          en: "Sensitivity Analysis (e.g., Tornado Diagram)",
          zh: "敏感度分析(如龍捲風圖)",
        },
      },
      {
        id: "d",
        text: {
          en: "Probability and Impact Matrix",
          zh: "機率衝擊矩陣",
        },
      },
      {
        id: "e",
        text: {
          en: "Risk Categorization using the RBS",
          zh: "使用風險分解結構(RBS)進行風險分類",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "EMV 分析、決策樹分析、敏感度分析(龍捲風圖)皆屬於定量分析工具,以數值化方法評估風險對專案目標的整體衝擊;機率衝擊矩陣與 RBS 風險分類則屬於定性分析工具,用於排序優先級與歸類來源,而非算出具體金額或機率分佈。",
  },
  {
    id: "rsk-028",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "The team runs two-week sprints. Instead of maintaining a formal Risk Register updated only at phase gates, the Scrum Master wants to embed continuous risk awareness into the agile ceremonies. Select two practices that are appropriate for this adaptive approach.",
      zh: "團隊採用兩週一次的衝刺(Sprint)。Scrum Master 希望不再只在正式階段關卡才更新風險登錄表,而是將持續性的風險意識融入既有的敏捷儀式中。請選出兩項適合這種調適型方法的做法。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Add a recurring \"top risks\" item to the daily standup",
          zh: "在每日站會中新增一個「風險排行」的固定討論項目",
        },
      },
      {
        id: "b",
        text: {
          en: "Review and re-prioritize risks during sprint retrospectives",
          zh: "在衝刺回顧會議中檢視並重新排序風險",
        },
      },
      {
        id: "c",
        text: {
          en: "Wait until the next formal phase gate to update the risk list",
          zh: "等到下一個正式階段關卡才更新風險清單",
        },
      },
      {
        id: "d",
        text: {
          en: "Ban discussion of new risks mid-sprint to protect the sprint goal",
          zh: "為保護衝刺目標,禁止在衝刺期間討論新風險",
        },
      },
      {
        id: "e",
        text: {
          en: "Only the Scrum Master is allowed to identify risks",
          zh: "只有 Scrum Master 才能識別風險",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "敏捷專案強調持續、頻繁地識別與檢視風險,將其融入既有儀式(每日站會、回顧會議)而非等待正式關卡才處理;禁止在衝刺期間討論新風險或限制只有特定角色能識別風險,都違反團隊共同承擔風險與透明溝通的敏捷精神。",
  },
  {
    id: "rsk-029",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A risk owner has been assigned to a specific identified risk in the Risk Register. Select two responsibilities that correctly belong to this role.",
      zh: "某位風險負責人(Risk Owner)被指派負責風險登錄表中一項特定的已識別風險。請選出兩項正確屬於此角色的職責。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Monitor the risk's triggers and report status changes",
          zh: "監控該風險的觸發徵兆並回報狀態變化",
        },
      },
      {
        id: "b",
        text: {
          en: "Execute the agreed response strategy for that specific risk when needed",
          zh: "於需要時執行該項風險已核准的回應策略",
        },
      },
      {
        id: "c",
        text: {
          en: "Approve the overall project budget",
          zh: "核准整個專案的預算",
        },
      },
      {
        id: "d",
        text: {
          en: "Sign the project charter on behalf of the sponsor",
          zh: "代表發起人簽署專案章程",
        },
      },
      {
        id: "e",
        text: {
          en: "Independently cancel the entire project if the risk materializes",
          zh: "若風險發生,可自行終止整個專案",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "風險負責人(Risk Owner)的職責範圍限於其被指派的特定風險:持續監控觸發徵兆、於需要時執行已核准的回應措施並回報狀態;核准整體專案預算、代表發起人簽署章程、或自行終止專案等,皆屬於 PM 或發起人層級的職權,超出風險負責人的角色範圍。",
  },
  {
    id: "rsk-030",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "After implementing a mitigation response, the PM notes two things: (1) a small chance of the original risk still occurring at a reduced impact remains, and (2) the mitigation action itself introduced a brand-new risk that did not exist before. Select two correct statements about this situation.",
      zh: "執行一項減緩(Mitigate)回應措施後,PM 注意到兩件事:(1) 原始風險仍有小機率會以較低衝擊發生;(2) 此減緩措施本身衍生出一個先前不存在的全新風險。請選出關於此情況的兩項正確敘述。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The remaining chance of the original risk is called Residual Risk",
          zh: "原始風險仍殘留發生的可能性稱為殘餘風險(Residual Risk)",
        },
      },
      {
        id: "b",
        text: {
          en: "The new risk introduced by the response itself is called Secondary Risk",
          zh: "由回應措施本身衍生出的新風險稱為次級風險(Secondary Risk)",
        },
      },
      {
        id: "c",
        text: {
          en: "Both risks should be ignored since the original response was already approved",
          zh: "兩者都應忽略,因為原回應措施已核准",
        },
      },
      {
        id: "d",
        text: {
          en: "The secondary risk does not need to be tracked since it is automatically lower priority",
          zh: "次級風險不需要追蹤,因為它一定優先級較低",
        },
      },
      {
        id: "e",
        text: {
          en: "The existence of residual risk means the mitigation action completely failed",
          zh: "殘餘風險的存在代表該減緩措施完全失效",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "Residual Risk(殘餘風險)指回應措施執行後仍然殘留的原始風險;Secondary Risk(次級風險)指回應措施本身直接造成的新風險。兩者都應被記錄並視需要進一步分析與回應,而非因為原措施已核准或優先級假設就忽略追蹤;殘餘風險的存在只是代表 Mitigate 降低而非完全消除風險,不代表措施失效。",
  },
  {
    id: "rsk-031",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Mid-project, the cumulative exposure of the top identified risks now exceeds the organization's defined Risk Threshold of $300,000. Select two actions the PM should take.",
      zh: "專案執行到一半,主要已識別風險的累計曝險已超過組織設定的風險門檻(Risk Threshold)30 萬美金。請選出 PM 應採取的兩項行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Escalate the situation to the sponsor or governance body for a decision",
          zh: "將此情況上呈給發起人或治理層級以做出決策",
        },
      },
      {
        id: "b",
        text: {
          en: "Reassess the risk response plan and consider additional or alternative responses",
          zh: "重新評估風險回應計畫,考慮額外或替代的回應措施",
        },
      },
      {
        id: "c",
        text: {
          en: "Continue executing the original plan unchanged since the threshold is only a guideline",
          zh: "因為門檻只是參考,故繼續照原計畫執行不做任何調整",
        },
      },
      {
        id: "d",
        text: {
          en: "Conceal the breach from the sponsor to avoid appearing incompetent",
          zh: "為避免顯得無能,對發起人隱瞞此門檻突破的情況",
        },
      },
      {
        id: "e",
        text: {
          en: "Immediately terminate the project without further analysis",
          zh: "未經進一步分析即立即終止專案",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "風險曝險超過組織設定的門檻(Risk Threshold)代表已達到必須正式因應的界線,PM 應主動上呈治理層級(Escalate)並重新評估風險回應計畫,考慮追加或替代措施;忽視門檻、隱瞞資訊給發起人,或未經分析即終止專案,都不是恰當的做法,也違反與利害關係人透明溝通的原則。",
  },
  {
    id: "rsk-032",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each risk analysis technique to the definition that best fits it.",
      zh: "請將下列每一項風險分析技術拖曳配對到最符合的定義。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Probability and Impact Matrix",
            zh: "機率衝擊矩陣",
          },
        },
        {
          id: "p2",
          text: {
            en: "Sensitivity Analysis (Tornado Diagram)",
            zh: "敏感度分析(龍捲風圖)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Expected Monetary Value (EMV) Analysis",
            zh: "期望貨幣價值分析",
          },
        },
        {
          id: "p4",
          text: {
            en: "Decision Tree Analysis",
            zh: "決策樹分析",
          },
        },
        {
          id: "p5",
          text: {
            en: "Risk Data Quality Assessment",
            zh: "風險資料品質評估",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "A qualitative tool that ranks each risk as high, medium, or low based on likelihood and impact scores",
            zh: "一種定性工具,依機率與衝擊評分將每項風險排序為高、中、低",
          },
        },
        {
          id: "c2",
          text: {
            en: "A quantitative technique showing which variables have the greatest potential impact on project outcomes, typically displayed as horizontal bars sorted by magnitude",
            zh: "一種定量技術,顯示哪些變數對專案結果衝擊最大,通常以依大小排序的水平長條圖呈現",
          },
        },
        {
          id: "c3",
          text: {
            en: "Multiplies probability by monetary impact to produce a single expected value for a risk",
            zh: "將機率乘以貨幣衝擊,計算出該風險的單一期望值",
          },
        },
        {
          id: "c4",
          text: {
            en: "A graphical decision-support technique that models sequential decisions and their probabilistic outcomes to identify the option with the best expected value",
            zh: "一種圖形化決策輔助技術,將連續的決策與其機率結果建模,找出期望值最佳的方案",
          },
        },
        {
          id: "c5",
          text: {
            en: "Evaluates how accurate, reliable, and complete the risk data is before relying on it for analysis",
            zh: "評估風險資料在用於分析前的準確性、可靠性與完整性",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "定性分析工具(機率衝擊矩陣、風險資料品質評估)用於排序優先級與檢核資料品質,不產生具體金額;定量分析工具(EMV、決策樹、敏感度分析)則以數值化方法評估風險對專案目標的整體衝擊,協助在多方案間選擇期望值最佳者。",
  },
  {
    id: "rsk-033",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Drag and match each scenario description below to the risk response strategy it demonstrates.",
      zh: "請將下列每一段情境描述拖曳配對到其所展現的風險回應策略。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "The PM cancels a risky pilot feature entirely and reverts to the proven design, eliminating any chance the associated risk can occur",
            zh: "PM 完全取消一項風險較高的先導功能,回復到已驗證的設計,徹底消除該風險發生的可能性",
          },
        },
        {
          id: "p2",
          text: {
            en: "The PM purchases a performance bond so that if the contractor fails to deliver, the bonding company compensates the project",
            zh: "PM 購買履約保證金,若承包商未能履約,由保證公司補償專案損失",
          },
        },
        {
          id: "p3",
          text: {
            en: "The PM adds an extra round of code review specifically to reduce the likelihood of critical defects reaching production",
            zh: "PM 增加一輪額外的程式碼審查,專門用來降低關鍵缺陷流入正式環境的機率",
          },
        },
        {
          id: "p4",
          text: {
            en: "The PM assigns the most experienced senior architect to the project specifically to increase the chance that an ambitious performance target is achieved",
            zh: "PM 特別指派最資深的架構師加入專案,以提高達成一項高難度效能目標的機率",
          },
        },
        {
          id: "p5",
          text: {
            en: "The PM partners with an established local firm so both companies jointly benefit if the project wins access to a new regional market",
            zh: "PM 與一家在地知名企業合作,若專案成功打入新區域市場,雙方共同受益",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Avoid",
            zh: "避免(Avoid)",
          },
        },
        {
          id: "c2",
          text: {
            en: "Transfer",
            zh: "轉移(Transfer)",
          },
        },
        {
          id: "c3",
          text: {
            en: "Mitigate",
            zh: "減輕(Mitigate)",
          },
        },
        {
          id: "c4",
          text: {
            en: "Enhance",
            zh: "增強(Enhance)",
          },
        },
        {
          id: "c5",
          text: {
            en: "Share",
            zh: "分享(Share)",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "情境化考題容易混淆:完全消除風險發生可能性(取消功能)= Avoid;讓第三方承擔財務後果(履約保證金)= Transfer;降低機率或衝擊但風險仍可能發生(增加審查)= Mitigate;針對機會提高其發生機率或衝擊(指派資深人力提高達標機率)= Enhance;與第三方合作共享機會帶來的利益(策略聯盟共同受益)= Share。",
  },
  {
    id: "rsk-034",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each risk-related term to its definition.",
      zh: "請將下列每一個風險相關名詞拖曳配對到其定義。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Risk Appetite",
            zh: "風險胃納",
          },
        },
        {
          id: "p2",
          text: {
            en: "Risk Threshold",
            zh: "風險門檻",
          },
        },
        {
          id: "p3",
          text: {
            en: "Risk Tolerance",
            zh: "風險容忍度",
          },
        },
        {
          id: "p4",
          text: {
            en: "Risk Exposure",
            zh: "風險曝險",
          },
        },
        {
          id: "p5",
          text: {
            en: "Resilience",
            zh: "韌性",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "The general attitude or degree of risk an organization or individual is willing to accept in pursuit of value",
            zh: "組織或個人為追求價值而願意承受風險的整體態度或程度",
          },
        },
        {
          id: "c2",
          text: {
            en: "A measurable level of risk exposure, above which the risk becomes unacceptable and must be escalated or formally addressed",
            zh: "一個可量化的風險曝險水準,超過此界線風險即成為不可接受,須上呈或正式處理",
          },
        },
        {
          id: "c3",
          text: {
            en: "The acceptable range of variation around a specific risk dimension (e.g., schedule or cost) that an organization is willing to withstand",
            zh: "組織在特定風險面向(如時程或成本)上願意承受的可接受變動範圍",
          },
        },
        {
          id: "c4",
          text: {
            en: "The current, actual degree to which the project is exposed to identified risk at a given point in time",
            zh: "專案在特定時間點上實際暴露於已識別風險的程度",
          },
        },
        {
          id: "c5",
          text: {
            en: "The capacity to absorb an unexpected shock and adapt quickly so the project can continue moving forward",
            zh: "面對突發衝擊時能夠吸收衝擊並快速調適,使專案得以持續前進的能力",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "這五個名詞常在考題中混用:Risk Appetite 是組織對風險的整體態度傾向;Risk Threshold 是明確可量化的界線,超過即觸發正式處理或升級;Risk Tolerance 是特定面向上的可接受變動範圍;Risk Exposure 是當下實際暴露的風險程度;Resilience 則是面對突發衝擊後的恢復與調適能力,呼應 Unknown-Unknown 突發風險的因應方式。",
  },
  {
    id: "rsk-035",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 35% probability of occurring and would cause a $40,000 loss if it does. The EMV of this risk is {{blank1}}. If a mitigation action costing $10,000 would reduce the probability to 5% (impact unchanged), the PM should {{blank2}} because it lowers the net expected cost.",
      zh: "某風險發生機率為 35%,一旦發生將造成 4 萬美金損失。此風險的 EMV 為 {{blank1}}。若一項花費 1 萬美金的減緩措施可將發生機率降至 5%(衝擊不變),PM 應該 {{blank2}},因為此措施能降低淨期望成本。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "-$14,000",
              zh: "-$14,000",
            },
          },
          {
            id: "b",
            text: {
              en: "-$40,000",
              zh: "-$40,000",
            },
          },
          {
            id: "c",
            text: {
              en: "-$6,000",
              zh: "-$6,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$14,000",
              zh: "$14,000",
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
              en: "Accept the risk without taking any action",
              zh: "接受風險且不採取任何行動",
            },
          },
          {
            id: "b",
            text: {
              en: "Implement the mitigation action",
              zh: "採取此減緩措施",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "EMV = 35% × (-$40,000) = -$14,000,即預期損失 1.4 萬美金。採取減緩措施後淨期望成本 = 減緩成本 $10,000 + 剩餘風險期望值(5% × $40,000 = $2,000)= $12,000,低於不採取行動的 $14,000,故 PM 應採取此減緩措施。",
  },
  {
    id: "rsk-036",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "The PM decides to mitigate a data-loss risk by adding an automated backup system. After implementation, there is still a small chance that data loss occurs despite the backup — this remaining exposure is called {{blank1}}. However, the new backup system itself introduces a possibility that did not exist before: backup files could be corrupted — this new risk is called {{blank2}}.",
      zh: "PM 決定透過新增自動備份系統來減緩資料遺失風險。實施後,仍有小機率會發生資料遺失,這項殘留的風險曝露稱為 {{blank1}}。然而,此備份系統本身卻帶來了一個先前不存在的新風險:備份檔案可能損毀,這項新風險稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Secondary Risk",
              zh: "次級風險(Secondary Risk)",
            },
          },
          {
            id: "b",
            text: {
              en: "Residual Risk",
              zh: "殘餘風險(Residual Risk)",
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
              en: "Residual Risk",
              zh: "殘餘風險(Residual Risk)",
            },
          },
          {
            id: "b",
            text: {
              en: "Secondary Risk",
              zh: "次級風險(Secondary Risk)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "Residual Risk(殘餘風險)是回應措施執行後仍然殘留的原始風險;Secondary Risk(次級風險)是回應措施本身直接衍生出的新風險。兩者都應記錄於風險登錄表並視需要評估是否要進一步回應。",
  },
  {
    id: "rsk-037",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "During Plan Risk Responses, the PM sets aside $50,000 specifically earmarked for identified risks already in the Risk Register — this is called the {{blank1}}. Separately, the organization holds an additional $100,000 outside the PM's control, reserved for unforeseen events and released only with sponsor approval — this is called the {{blank2}}.",
      zh: "在規劃風險回應過程中,PM 預留了 5 萬美金,專門用於因應已登錄在風險登錄表中的已識別風險——這稱為 {{blank1}}。另外,組織持有額外的 10 萬美金,不在 PM 的控制範圍內,專門用於因應未預期的突發事件,且須經發起人核准才能動用——這稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Management Reserve",
              zh: "管理準備金(Management Reserve)",
            },
          },
          {
            id: "b",
            text: {
              en: "Contingency Reserve",
              zh: "應變準備金(Contingency Reserve)",
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
              en: "Contingency Reserve",
              zh: "應變準備金(Contingency Reserve)",
            },
          },
          {
            id: "b",
            text: {
              en: "Management Reserve",
              zh: "管理準備金(Management Reserve)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "b",
      blank2: "b",
    },
    explanation: "Contingency Reserve(應變準備金)由 PM 掌控,用於因應已識別的風險,屬於成本基準的一部分;Management Reserve(管理準備金)則由組織/發起人掌控,用於因應未預期的突發風險(Unknown-Unknown),不屬於成本基準,須經正式核准才能動用。",
  },
  {
    id: "rsk-038",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Below are four identified risk cards showing probability and impact. Click the risk the PM should prioritize FIRST for response planning because it has the highest Expected Monetary Value (EMV) of loss.",
      zh: "下方列出四張已識別風險卡片,分別標示機率與衝擊。請點選 PM 應優先規劃回應措施的風險,因為它具有最高的期望貨幣價值(EMV)損失。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "40% probability, $50,000 impact",
          zh: "機率 40%,衝擊 5 萬美金",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r2",
        label: {
          en: "10% probability, $180,000 impact",
          zh: "機率 10%,衝擊 18 萬美金",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r3",
        label: {
          en: "15% probability, $150,000 impact",
          zh: "機率 15%,衝擊 15 萬美金",
        },
        x: 51,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r4",
        label: {
          en: "60% probability, $30,000 impact",
          zh: "機率 60%,衝擊 3 萬美金",
        },
        x: 74,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "r3",
    explanation: "分別計算四項風險的 EMV:r1 = 40% × $50,000 = $20,000;r2 = 10% × $180,000 = $18,000;r3 = 15% × $150,000 = $22,500;r4 = 60% × $30,000 = $18,000。r3 的 EMV 最高($22,500),故 PM 應優先針對 r3 規劃風險回應,而非僅憑機率或衝擊金額單一數字判斷優先順序。",
  },
  {
    id: "rsk-039",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The team identifies an opportunity: adopting a new open-source library could significantly cut development time, but the team is not fully confident it will work as expected. The PM decides to run a small trial specifically to increase the confidence and likelihood that this opportunity is realized. Click the response strategy card that matches this action.",
      zh: "團隊識別出一個機會:採用一套新的開源函式庫有機會大幅縮短開發時間,但團隊對其效果尚無十足把握。PM 決定執行一次小規模試驗,目的是提高此機會被實現的信心與機率。請點選符合此行動的回應策略卡片。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "Exploit",
          zh: "利用(Exploit)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r2",
        label: {
          en: "Enhance",
          zh: "增強(Enhance)",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r3",
        label: {
          en: "Share",
          zh: "分享(Share)",
        },
        x: 51,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r4",
        label: {
          en: "Accept",
          zh: "接受(Accept)",
        },
        x: 74,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "r2",
    explanation: "此行動的目的是「提高機會發生的機率或信心」,而非直接確保機會百分之百發生,故屬於 Enhance(增強);Exploit(利用)通常代表更直接、確保機會一定發生的積極手段(如直接指派最佳資源全力執行以保證結果);Share 是與第三方合作共享收益,Accept 是不主動處理,兩者皆不符合情境中「透過試驗提升機率」的描述。",
  },
  {
    id: "rsk-040",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below is a decision tree. From the Start node, the PM can choose Option A (upgrade existing equipment, fixed cost $60,000) or Option B (buy new equipment). If Option B is chosen, there is a 70% chance the cost is $40,000 and a 30% chance the cost is $120,000 (due to installation complications). Click the node the PM should choose because it has the lower expected cost.",
      zh: "下圖為一決策樹:從起點(Start)節點,PM 可選擇方案 A(升級現有設備,固定成本 6 萬美金)或方案 B(採購新設備)。若選擇方案 B,有 70% 機率成本為 4 萬美金、30% 機率成本為 12 萬美金(因安裝出現複雜狀況)。請點選 PM 應選擇的節點,因為其期望成本較低。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start",
          zh: "起點(Start)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Option A: Upgrade existing equipment, fixed $60,000",
          zh: "方案 A:升級現有設備,固定成本 6 萬美金",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Option B: Buy new equipment",
          zh: "方案 B:採購新設備",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Outcome: 70% chance, $40,000",
          zh: "結果:70% 機率,成本 4 萬美金",
        },
        x: 55,
        y: 47.5,
        width: 20,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Outcome: 30% chance, $120,000",
          zh: "結果:30% 機率,成本 12 萬美金",
        },
        x: 77,
        y: 47.5,
        width: 20,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n3",
        to: "n5",
      },
    ],
    explanation: "方案 B 期望成本 = 70% × $40,000 + 30% × $120,000 = $28,000 + $36,000 = $64,000。方案 A 為固定成本 $60,000,低於方案 B 的期望成本 $64,000,故 PM 應選擇方案 A(升級現有設備)節點。",
  },
  {
    id: "rsk-041",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below is a decision tree. From the Start node, the PM can choose to Skip Testing (proceed directly with a new supplier at a guaranteed cost of $95,000) or Run a Pilot Test (cost $8,000). If the pilot test is run, there is a 60% chance the supplier passes (production cost $70,000) and a 40% chance the supplier fails (switching to a backup supplier costs $110,000). Click the node the PM should choose because it has the lower total expected cost.",
      zh: "下圖為一決策樹:從起點(Start)節點,PM 可選擇「跳過測試」(直接採用新供應商,保證成本 9.5 萬美金)或「執行前導測試」(成本 8,000 美金)。若執行前導測試,有 60% 機率供應商通過測試(生產成本 7 萬美金)、40% 機率供應商未通過(須改用備用供應商,成本 11 萬美金)。請點選 PM 應選擇的節點,因為其總期望成本較低。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start",
          zh: "起點(Start)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Skip Testing: guaranteed $95,000",
          zh: "跳過測試:保證成本 9.5 萬美金",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Run Pilot Test: cost $8,000",
          zh: "執行前導測試:成本 8,000 美金",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Outcome: 60% chance, $70,000 (pass)",
          zh: "結果:60% 機率,成本 7 萬美金(通過)",
        },
        x: 55,
        y: 47.5,
        width: 20,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Outcome: 40% chance, $110,000 (fail)",
          zh: "結果:40% 機率,成本 11 萬美金(未通過)",
        },
        x: 77,
        y: 47.5,
        width: 20,
        height: 35,
      },
    ],
    correctAnswer: "n3",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n3",
        to: "n5",
      },
    ],
    explanation: "跳過測試為固定成本 $95,000。執行前導測試的期望成本 = 測試成本 $8,000 + (60% × $70,000 + 40% × $110,000) = $8,000 + ($42,000 + $44,000) = $8,000 + $86,000 = $94,000。因為 $94,000 低於 $95,000,PM 應選擇「執行前導測試」節點。此題訓練考生正確結合「已知固定成本」與「條件機率分支期望值」加總計算,而非僅比較單一分支數字。",
  },
  {
    id: "rsk-042",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 45% probability of occurring. If it occurs, it will cause a $60,000 cost overrun. What is the Expected Monetary Value (EMV) of this risk?",
      zh: "某風險發生機率為 45%,一旦發生將造成 6 萬美金的成本超支。此風險的期望貨幣價值(EMV)為多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "-$27,000",
          zh: "-$27,000",
        },
      },
      {
        id: "b",
        text: {
          en: "-$60,000",
          zh: "-$60,000",
        },
      },
      {
        id: "c",
        text: {
          en: "-$13,500",
          zh: "-$13,500",
        },
      },
      {
        id: "d",
        text: {
          en: "$27,000",
          zh: "$27,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "EMV = 機率 × 衝擊金額 = 45% × (-$60,000) = -$27,000。因為是威脅(負面風險),EMV 為負值,代表預期損失金額;(c) 誤將機率減半計算,(d) 誤將符號設為正值。",
  },
  {
    id: "rsk-043",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 20% probability of causing a $50,000 loss. The PM is considering a mitigation action costing $12,000 that would reduce the probability to 5% (the impact stays at $50,000 if it still occurs). Compare the net expected value of \"do nothing\" versus \"mitigate,\" and determine which option the PM should choose.",
      zh: "某風險有 20% 機率造成 5 萬美金損失。PM 正考慮花費 1.2 萬美金採取減緩措施,可將發生機率降至 5%(若仍發生,衝擊金額不變)。請比較「不採取行動」與「採取減緩措施」的淨期望值,並判斷 PM 應選擇哪個方案。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Do nothing: net EV = -$10,000; choose to do nothing since it has the lower expected cost",
          zh: "不採取行動:淨期望值 -$10,000,因期望成本較低而應選擇不採取行動",
        },
      },
      {
        id: "b",
        text: {
          en: "Mitigate: net EV = -$14,500; choose to mitigate since it has the lower expected cost",
          zh: "採取減緩措施:淨期望值 -$14,500,因期望成本較低而應選擇減緩",
        },
      },
      {
        id: "c",
        text: {
          en: "Mitigate: net EV = -$2,500; choose to mitigate since it has the lower expected cost",
          zh: "採取減緩措施:淨期望值 -$2,500,因期望成本較低而應選擇減緩",
        },
      },
      {
        id: "d",
        text: {
          en: "Both options have equal expected value",
          zh: "兩者期望值相同",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "不採取行動 EMV = 20% × (-$50,000) = -$10,000。採取減緩措施淨期望值 = 減緩成本 $12,000 + 剩餘風險期望值(5% × $50,000 = $2,500)= -$14,500。因為 -$10,000 優於(損失小於)-$14,500,此案例中減緩措施的成本反而高於它所節省的期望損失,故 PM 應選擇不採取行動,而非想當然爾地認為減緩一定比較好;(c) 誤將減緩成本 $12,000 遺漏未加總計算。",
  },
  {
    id: "rsk-044",
    edition: "pmbok7",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "calculation",
    stem: {
      en: "The team identifies an opportunity to enter a new market segment. There is a 55% probability of success, which would generate $40,000 in additional revenue. What is the Expected Monetary Value (EMV) of this opportunity?",
      zh: "團隊識別出一個進入新市場區隔的機會,成功機率為 55%,一旦成功將帶來 4 萬美金額外營收。此機會的期望貨幣價值(EMV)為多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$22,000",
          zh: "$22,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$40,000",
          zh: "$40,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$18,000",
          zh: "$18,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$55,000",
          zh: "$55,000",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "EMV = 55% × $40,000 = $22,000。因為是機會(正面風險),EMV 為正值,代表預期收益金額;(c) 誤用互補機率 45% 計算,(d) 誤將機率百分比直接當成金額。",
  },
  {
    id: "rsk-045",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The PM is comparing two options for a subsystem. Option A (in-house build) costs $250,000 with certainty. Option B (outsourcing) has a 60% chance of costing $180,000 and a 40% chance of costing $320,000. Which option has the lower expected cost, and by how much?",
      zh: "PM 正在比較子系統的兩個方案。方案 A(內部建置)確定成本為 25 萬美金。方案 B(外包)有 60% 機率成本為 18 萬美金,40% 機率成本為 32 萬美金。哪個方案的期望成本較低?低多少?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Option B is lower by $14,000",
          zh: "方案 B 較低,低 1.4 萬美金",
        },
      },
      {
        id: "b",
        text: {
          en: "Option A is lower by $14,000",
          zh: "方案 A 較低,低 1.4 萬美金",
        },
      },
      {
        id: "c",
        text: {
          en: "Option B is lower by $28,000",
          zh: "方案 B 較低,低 2.8 萬美金",
        },
      },
      {
        id: "d",
        text: {
          en: "Both options have equal expected cost",
          zh: "兩方案期望成本相同",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "方案 B 期望成本 = 60% × $180,000 + 40% × $320,000 = $108,000 + $128,000 = $236,000。方案 A 為確定成本 $250,000。$250,000 − $236,000 = $14,000,故方案 B 期望成本較低 1.4 萬美金。",
  },
  {
    id: "rsk-046",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "The project has three identified risks: Risk 1 has a 25% probability and a $24,000 impact; Risk 2 has a 15% probability and a $40,000 impact; Risk 3 has a 5% probability and a $100,000 impact. Using the sum of each risk's EMV, what contingency reserve should the PM set aside to cover these risks?",
      zh: "專案有三項已識別風險:風險 1 機率 25%、衝擊 2.4 萬美金;風險 2 機率 15%、衝擊 4 萬美金;風險 3 機率 5%、衝擊 10 萬美金。以三項風險 EMV 加總計算,PM 應預留多少應變準備金以因應這些風險?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "$17,000",
          zh: "$17,000",
        },
      },
      {
        id: "b",
        text: {
          en: "$164,000",
          zh: "$164,000",
        },
      },
      {
        id: "c",
        text: {
          en: "$27,000",
          zh: "$27,000",
        },
      },
      {
        id: "d",
        text: {
          en: "$8,500",
          zh: "$8,500",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "各風險 EMV:風險 1 = 25% × $24,000 = $6,000;風險 2 = 15% × $40,000 = $6,000;風險 3 = 5% × $100,000 = $5,000。三者加總 = $6,000 + $6,000 + $5,000 = $17,000,即為應預留的應變準備金(Contingency Reserve);(b) 誤將三項衝擊金額直接加總而未乘以機率。",
  },
  {
    id: "rsk-047",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "A team member reports that the production server crashed yesterday, causing three hours of data loss. Is this appropriately logged as a new entry in the Risk Register?",
      zh: "團隊成員回報,正式環境的伺服器昨天當機,造成三小時的資料遺失。這是否適合登錄為風險登錄表(Risk Register)中的一項新風險?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "No — this has already happened, so it is an Issue requiring immediate resolution, not a Risk",
          zh: "不適合——此事件已經發生,屬於需要立即處理的問題(Issue),而非風險",
        },
      },
      {
        id: "b",
        text: {
          en: "Yes — it should be logged with an estimated probability and impact like any other risk",
          zh: "適合——應如同其他風險一樣估計機率與衝擊後登錄",
        },
      },
      {
        id: "c",
        text: {
          en: "Yes — but only after Perform Qualitative Risk Analysis is completed",
          zh: "適合——但須先完成定性風險分析後才能登錄",
        },
      },
      {
        id: "d",
        text: {
          en: "No — such events should simply be ignored since they are outside the PM's control",
          zh: "不適合——此類事件應直接忽略,因為超出 PM 控制範圍",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "Risk(風險)是尚未發生、具不確定性的未來事件;Issue(問題)則是已經發生、需要立即處理的既定事實。伺服器已經當機且已造成損失,屬於既成事實,應作為 Issue 透過問題日誌(Issue Log)處理並立即解決,而非登錄為風險;忽略不處理同樣不恰當。",
  },
  {
    id: "rsk-048",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Partway through the project, the PMO conducts a formal, independent examination of whether the project's overall risk management process itself — not any single risk — is being followed effectively and adding value. Which activity is this?",
      zh: "專案執行到一半,PMO 對專案「整體風險管理流程本身」(而非任何單一風險)是否被有效遵循並產生價值,進行一次正式且獨立的檢視。這是哪一項活動?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Risk Reassessment",
          zh: "風險再評估",
        },
      },
      {
        id: "b",
        text: {
          en: "Risk Audit",
          zh: "風險稽核",
        },
      },
      {
        id: "c",
        text: {
          en: "Perform Qualitative Risk Analysis",
          zh: "執行定性風險分析",
        },
      },
      {
        id: "d",
        text: {
          en: "Plan Risk Responses",
          zh: "規劃風險回應",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Risk Audit(風險稽核)檢視的是整體風險管理流程本身的有效性與價值,通常由 PMO 或稽核人員獨立執行;Risk Reassessment(風險再評估)則是重新評估個別已識別風險的機率、衝擊與優先順序,並識別新風險,兩者層級不同,容易混淆。",
  },
  {
    id: "rsk-049",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "In the Risk Management Plan, the PM defines that \"if the vendor's on-time delivery rate for the past three shipments falls below 80%, this indicates the late-delivery risk is about to occur.\" What is this specific indicator called?",
      zh: "在風險管理計畫中,PM 定義:「若供應商過去三次出貨的準時交付率低於 80%,即代表延遲交付風險即將發生。」這項具體指標稱為什麼?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Risk Threshold",
          zh: "風險門檻",
        },
      },
      {
        id: "b",
        text: {
          en: "Risk Trigger (Warning Sign)",
          zh: "風險觸發徵兆(Risk Trigger)",
        },
      },
      {
        id: "c",
        text: {
          en: "Risk Appetite",
          zh: "風險胃納",
        },
      },
      {
        id: "d",
        text: {
          en: "Contingency Reserve",
          zh: "應變準備金",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "Risk Trigger(觸發徵兆/警訊)是預先定義的具體指標,用來提示某項風險即將發生或已經發生,以利及早啟動回應措施;Risk Threshold 是可接受的風險量化界線,並非用來預示風險發生的指標,兩者概念不同。",
  },
  {
    id: "rsk-050",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The PM discovers that a senior developer has been privately managing a significant technical risk for weeks — implementing workarounds on their own — without informing the PM or updating the Risk Register, believing they could handle it independently. What should the PM do?",
      zh: "PM 發現一位資深開發人員已私下處理一項重大技術風險數週——自行實施變通方案——卻未告知 PM 或更新風險登錄表,認為自己能獨立處理。PM 應該怎麼做?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Praise the developer for resourcefulness and take no further action since the risk seems handled",
          zh: "讚賞該開發人員的應變能力,且因風險似乎已被處理而不採取進一步行動",
        },
      },
      {
        id: "b",
        text: {
          en: "Require the risk and its response to be documented in the Risk Register and communicated transparently to relevant stakeholders",
          zh: "要求將該風險及其回應措施記錄於風險登錄表,並向相關利害關係人透明溝通",
        },
      },
      {
        id: "c",
        text: {
          en: "Reprimand the developer publicly for not following the chain of command",
          zh: "公開斥責該開發人員未遵循指揮鏈",
        },
      },
      {
        id: "d",
        text: {
          en: "Reassign the risk to a different team member without discussing it with the developer",
          zh: "未與該開發人員討論,直接將此風險改指派給其他團隊成員",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "即使個別團隊成員有能力處理風險,風險資訊仍須透明化並登錄於風險登錄表,才能讓 PM 掌握整體風險曝險、支援後續決策與跨團隊溝通;私下處理風險而不揭露會造成資訊落差與潛在的隱藏風險。公開究責或忽略此行為都無助於建立透明的風險溝通文化。",
  },
  {
    id: "rsk-051",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A multinational project spans three business units. The enterprise PMO requires every project's risk threshold to align with the portfolio-level risk appetite defined by the board of directors. Which statement best reflects this situation?",
      zh: "一項跨國專案橫跨三個事業單位。企業 PMO 要求每個專案的風險門檻,都須與董事會所定義的組合層級(Portfolio)風險胃納保持一致。下列哪項敘述最能反映此情況?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Project-level risk decisions should be made in isolation and always override portfolio-level risk appetite",
          zh: "專案層級的風險決策應獨立做出,並永遠優先於組合層級的風險胃納",
        },
      },
      {
        id: "b",
        text: {
          en: "Project risk management should operate within, and be consistent with, the broader organizational and portfolio risk appetite",
          zh: "專案風險管理應在更廣泛的組織與組合層級風險胃納範圍內運作,並與之保持一致",
        },
      },
      {
        id: "c",
        text: {
          en: "Risk appetite is only relevant for financial reporting and has no bearing on project execution decisions",
          zh: "風險胃納僅與財務報告相關,與專案執行決策無關",
        },
      },
      {
        id: "d",
        text: {
          en: "Each business unit should independently define its own risk threshold without reference to enterprise policy",
          zh: "各事業單位應各自獨立定義風險門檻,不需參考企業政策",
        },
      },
    ],
    correctAnswer: "b",
    explanation: "專案風險管理不是孤立存在的,而應與組織策略及組合層級的風險胃納保持一致(整體觀,Holistic View),這樣才能確保個別專案的風險決策符合企業整體可承受的風險程度;忽視、凌駕或各自為政的做法都會破壞治理一致性。",
  },
  {
    id: "rsk-052",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three techniques below that are primarily used during Identify Risks, rather than during Quantitative Risk Analysis.",
      zh: "請選出下列三項主要用於「識別風險」、而非「定量風險分析」的技術。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Brainstorming",
          zh: "腦力激盪",
        },
      },
      {
        id: "b",
        text: {
          en: "Checklist Analysis (based on historical information/RBS)",
          zh: "檢核表分析(依據歷史資訊/RBS)",
        },
      },
      {
        id: "c",
        text: {
          en: "SWOT Analysis",
          zh: "SWOT 分析",
        },
      },
      {
        id: "d",
        text: {
          en: "Expected Monetary Value (EMV) Analysis",
          zh: "期望貨幣價值分析(EMV)",
        },
      },
      {
        id: "e",
        text: {
          en: "Decision Tree Analysis",
          zh: "決策樹分析",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "腦力激盪、檢核表分析、SWOT 分析皆是識別風險(Identify Risks)階段用來找出威脅與機會的技術;EMV 分析與決策樹分析則屬於定量風險分析工具,用於已識別風險的數值化評估,而非用來發掘新風險。",
  },
  {
    id: "rsk-053",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "The PM discovers that recent risk status reports sent to the sponsor have quietly omitted two high-severity risks to avoid causing alarm. Select two actions the PM should take going forward.",
      zh: "PM 發現近期送交發起人的風險狀態報告,悄悄省略了兩項高嚴重度風險以避免引起恐慌。請選出 PM 未來應採取的兩項行動。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Report risk status transparently and completely to stakeholders, including unfavorable information",
          zh: "向利害關係人透明且完整地回報風險狀態,包含不利的資訊",
        },
      },
      {
        id: "b",
        text: {
          en: "Maintain a single, current risk register that is accessible to key stakeholders rather than a filtered summary",
          zh: "維護一份單一、即時更新且對關鍵利害關係人開放的風險登錄表,而非經過篩選的摘要",
        },
      },
      {
        id: "c",
        text: {
          en: "Continue omitting high-severity risks from reports until they are fully resolved",
          zh: "持續省略高嚴重度風險,直到其完全解決才回報",
        },
      },
      {
        id: "d",
        text: {
          en: "Wait for the sponsor to discover the risks independently during a formal audit",
          zh: "等待發起人在正式稽核中自行發現這些風險",
        },
      },
      {
        id: "e",
        text: {
          en: "Only summarize risks verbally and avoid putting them in writing",
          zh: "僅以口頭方式摘要風險,避免留下書面紀錄",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "向利害關係人透明且完整地溝通風險狀態(包含不利消息),並維護一份即時、可存取的風險登錄表,是建立信任與有效治理的基礎;刻意隱瞞、拖延回報或避免留下書面紀錄都會損害利害關係人對專案的信任,且可能使風險升級到難以處理的地步。",
  },
  {
    id: "rsk-054",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three accurate statements about Contingency Reserve.",
      zh: "請選出下列三項關於「應變準備金(Contingency Reserve)」的正確敘述。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It is included as part of the project's cost (and/or schedule) baseline",
          zh: "它屬於專案成本(及/或時程)基準的一部分",
        },
      },
      {
        id: "b",
        text: {
          en: "It is controlled and can be used by the PM",
          zh: "由 PM 掌控並可動用",
        },
      },
      {
        id: "c",
        text: {
          en: "It is tied to specific risks already identified and documented in the Risk Register",
          zh: "與風險登錄表中已識別並記錄的特定風險相對應",
        },
      },
      {
        id: "d",
        text: {
          en: "It requires sponsor or board approval before it can be used",
          zh: "動用前須經發起人或董事會核准",
        },
      },
      {
        id: "e",
        text: {
          en: "It exists entirely outside the project's cost baseline",
          zh: "完全存在於專案成本基準之外",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "應變準備金(Contingency Reserve)由 PM 掌控、屬於成本(或時程)基準的一部分,用於因應風險登錄表中已識別的特定風險;需要發起人/董事會核准才能動用、且存在於成本基準之外的特性,描述的其實是管理準備金(Management Reserve),兩者常被混淆。",
  },
  {
    id: "rsk-055",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three examples below that best represent external, environment-driven risk sources (as opposed to internal project management risk sources).",
      zh: "請選出下列三項最能代表「外部、環境驅動」風險來源的例子(相對於內部專案管理風險來源)。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Currency exchange rate fluctuation",
          zh: "匯率波動",
        },
      },
      {
        id: "b",
        text: {
          en: "A new government regulation or policy change",
          zh: "新的政府法規或政策變動",
        },
      },
      {
        id: "c",
        text: {
          en: "Shifting market or competitive conditions",
          zh: "市場或競爭情勢的轉變",
        },
      },
      {
        id: "d",
        text: {
          en: "Inaccurate cost estimating by the project team",
          zh: "專案團隊的成本估算不準確",
        },
      },
      {
        id: "e",
        text: {
          en: "An incomplete Work Breakdown Structure (WBS) decomposition",
          zh: "工作分解結構(WBS)分解不完整",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "匯率波動、政府法規變動、市場競爭情勢轉變皆源自組織外部的企業環境因素(EEF),屬於外部類風險;成本估算不準確與 WBS 分解不完整則是專案管理實務本身的缺失,屬於內部的專案管理類風險,兩者在 RBS 分類上並不相同。",
  },
  {
    id: "rsk-056",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A Scrum team wants to make risk visibility a natural part of how it manages the backlog and tracks progress, rather than a separate formal process. Select two practices that support this.",
      zh: "某 Scrum 團隊希望讓風險的可見性自然融入既有的待辦清單管理與進度追蹤方式中,而非另立一套正式流程。請選出兩項支持此做法的實務。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Order the backlog so that higher-risk items are addressed earlier to reduce uncertainty sooner (a risk-adjusted backlog)",
          zh: "將待辦清單排序,讓高風險項目較早處理,以及早降低不確定性(風險調整式待辦清單)",
        },
      },
      {
        id: "b",
        text: {
          en: "Treat unexpected deviations in velocity or burndown trends as an early signal of emerging schedule risk",
          zh: "將速度或燃盡圖趨勢的異常偏差視為時程風險浮現的早期訊號",
        },
      },
      {
        id: "c",
        text: {
          en: "Route all risk identification exclusively through the PM, outside the delivery team",
          zh: "所有風險識別一律只透過 PM 處理,排除在交付團隊之外",
        },
      },
      {
        id: "d",
        text: {
          en: "Automatically assign the lowest priority to any story tagged as risk-related",
          zh: "任何被標記為風險相關的故事,一律自動指派最低優先級",
        },
      },
      {
        id: "e",
        text: {
          en: "Postpone all discussion of newly discovered risks until the end of the release",
          zh: "將所有新發現風險的討論,延後到整個發佈結束才進行",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
    ],
    selectCount: 2,
    explanation: "敏捷團隊透過風險調整式待辦排序、以及將速度/燃盡圖異常視為風險早期訊號,把風險意識自然融入既有節奏中;將風險識別侷限於 PM 一人、自動降低風險故事優先級,或延後至發佈結束才討論,皆違反敏捷團隊共同承擔風險、及早透明因應的精神。",
  },
  {
    id: "rsk-057",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "multiple_response",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Select three items that belong in the Risk Register, as distinct from the Risk Report.",
      zh: "請選出下列三項屬於「風險登錄表(Risk Register)」、而非「風險報告(Risk Report)」的內容。",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A list of individually identified risks along with their root causes",
          zh: "逐項已識別風險的清單及其根本原因",
        },
      },
      {
        id: "b",
        text: {
          en: "The designated risk owner assigned to each individual risk",
          zh: "每項風險所指派的風險負責人",
        },
      },
      {
        id: "c",
        text: {
          en: "The agreed-upon response strategy planned for each specific risk",
          zh: "針對每項特定風險所核准的回應策略",
        },
      },
      {
        id: "d",
        text: {
          en: "A summary-level overview of overall project risk exposure for executive stakeholders",
          zh: "彙總呈現給高層利害關係人的整體專案風險曝險概況",
        },
      },
      {
        id: "e",
        text: {
          en: "A narrative of the top overall risk trends presented to the steering committee",
          zh: "呈現給指導委員會的整體重大風險趨勢敘述",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "風險登錄表(Risk Register)記錄逐項風險的細節,包括根本原因、負責人與已核准的回應策略;風險報告(Risk Report)則是彙總呈現整體專案風險曝險狀況與重大趨勢給高層閱讀的彙總文件,兩者層級與用途不同,常被誤認為同一份文件。",
  },
  {
    id: "rsk-058",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each Risk process to the output it is primarily responsible for producing.",
      zh: "請將下列每一個風險管理流程,拖曳配對到其主要負責產出的成果。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Plan Risk Management",
            zh: "規劃風險管理",
          },
        },
        {
          id: "p2",
          text: {
            en: "Identify Risks",
            zh: "識別風險",
          },
        },
        {
          id: "p3",
          text: {
            en: "Perform Risk Analysis (Qualitative & Quantitative)",
            zh: "執行風險分析(定性與定量)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Plan Risk Responses",
            zh: "規劃風險回應",
          },
        },
        {
          id: "p5",
          text: {
            en: "Monitor Risks",
            zh: "監控風險",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Produces the Risk Management Plan, defining risk categories, probability/impact scales, and roles",
            zh: "產出風險管理計畫,定義風險分類、機率/衝擊量表與角色",
          },
        },
        {
          id: "c2",
          text: {
            en: "Produces the initial Risk Register listing each identified risk and its basic characteristics",
            zh: "產出初始風險登錄表,列出每項已識別風險及其基本特徵",
          },
        },
        {
          id: "c3",
          text: {
            en: "Updates the Risk Register with priority rankings and flags risks warranting numeric/quantitative evaluation",
            zh: "更新風險登錄表,加入優先順序排序,並標記需要數值化定量評估的風險",
          },
        },
        {
          id: "c4",
          text: {
            en: "Documents agreed response strategies, along with any resulting residual and secondary risks",
            zh: "記錄已核准的回應策略,以及因此產生的殘餘風險與次級風險",
          },
        },
        {
          id: "c5",
          text: {
            en: "Produces work performance information, change requests, and Risk Register updates through reassessment and audits",
            zh: "產出工作績效資訊、變更請求,並透過再評估與稽核更新風險登錄表",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "風險管理六大流程各有明確產出:規劃風險管理定義遊戲規則(風險管理計畫);識別風險建立初始風險登錄表;執行風險分析(定性/定量)為風險排序並標記需進一步量化的項目;規劃風險回應核准策略並記錄殘餘/次級風險;監控風險則持續產出績效資訊、變更請求並透過再評估/稽核更新登錄表。",
  },
  {
    id: "rsk-059",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each role to its correct risk-related responsibility.",
      zh: "請將下列每一個角色,拖曳配對到其正確的風險相關職責。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Project Manager (PM)",
            zh: "專案經理",
          },
        },
        {
          id: "p2",
          text: {
            en: "Risk Owner",
            zh: "風險負責人",
          },
        },
        {
          id: "p3",
          text: {
            en: "Sponsor",
            zh: "發起人",
          },
        },
        {
          id: "p4",
          text: {
            en: "Team Members",
            zh: "團隊成員",
          },
        },
        {
          id: "p5",
          text: {
            en: "PMO",
            zh: "Risk Manager (where one exists) / PMO/風險管理專責人員(若組織設有此角色)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Orchestrates the overall risk management process and ensures the Risk Management Plan is followed",
            zh: "統籌整體風險管理流程,確保風險管理計畫被落實遵循",
          },
        },
        {
          id: "c2",
          text: {
            en: "Monitors the assigned risk's triggers and executes the approved response when needed",
            zh: "監控被指派風險的觸發徵兆,並於需要時執行已核准的回應措施",
          },
        },
        {
          id: "c3",
          text: {
            en: "Approves use of the Management Reserve and makes decisions on risks escalated beyond the PM's authority",
            zh: "核准動用管理準備金,並針對超出 PM 職權範圍而上呈的風險做出決策",
          },
        },
        {
          id: "c4",
          text: {
            en: "Identifies emerging risks encountered during hands-on execution and reports them promptly",
            zh: "在實際執行工作時識別新出現的風險,並即時回報",
          },
        },
        {
          id: "c5",
          text: {
            en: "Maintains organizational risk management standards and facilitates risk audits across multiple projects",
            zh: "維護組織層級的風險管理標準,並在多個專案間協助進行風險稽核",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "風險管理涉及多層級角色分工:PM 統籌整體流程;風險負責人監控並執行特定風險的回應;發起人核准管理準備金動用與超出 PM 職權的升級決策;團隊成員在執行工作中識別新風險並即時回報;PMO/風險管理專責人員(若存在)則維護組織層級標準並協助跨專案稽核,各角色職責範圍不應混淆。",
  },
  {
    id: "rsk-060",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Drag and match each scenario below to the classification that best describes it.",
      zh: "請將下列每一段情境,拖曳配對到最符合的分類。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "A new vendor discount is available only this quarter, but it is uncertain whether the discounted materials will meet quality specifications",
            zh: "一項供應商折扣僅限本季提供,但尚不確定折扣材料是否符合品質規格",
          },
        },
        {
          id: "p2",
          text: {
            en: "The production server already crashed yesterday, causing three hours of data loss",
            zh: "正式環境伺服器昨天已經當機,造成三小時資料遺失",
          },
        },
        {
          id: "p3",
          text: {
            en: "There is a 40% chance a hurricane will delay delivery of key materials",
            zh: "有 40% 機率颶風將延遲關鍵材料的交付",
          },
        },
        {
          id: "p4",
          text: {
            en: "There is a 30% chance a favorable exchange-rate movement will reduce procurement cost",
            zh: "有 30% 機率有利的匯率變動將降低採購成本",
          },
        },
        {
          id: "p5",
          text: {
            en: "An entirely unforeseen nationwide regulatory shutdown of a specific industry sub-sector occurs with zero prior warning signs",
            zh: "一項完全無預警的全國性法規,突然關閉了某特定產業次領域,事前毫無任何徵兆",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Threat — a negative-impact uncertain future event",
            zh: "威脅——具負面衝擊的不確定未來事件",
          },
        },
        {
          id: "c2",
          text: {
            en: "Opportunity — a positive-impact uncertain future event",
            zh: "機會——具正面衝擊的不確定未來事件",
          },
        },
        {
          id: "c3",
          text: {
            en: "Dual risk — an uncertain event carrying both potential negative and positive impacts",
            zh: "雙重風險——同時帶有潛在負面與正面衝擊的不確定事件",
          },
        },
        {
          id: "c4",
          text: {
            en: "Issue — an event that has already occurred and requires immediate handling, not future uncertainty",
            zh: "問題(Issue)——已經發生、需立即處理的既定事實,而非未來不確定性",
          },
        },
        {
          id: "c5",
          text: {
            en: "Emergent (Unknown-Unknown) risk — entirely outside the scope of prior risk identification",
            zh: "突發(未知-未知)風險——完全超出事先識別範圍",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c3",
      p2: "c4",
      p3: "c1",
      p4: "c2",
      p5: "c5",
    },
    explanation: "供應商折扣情境同時存在品質不佳的威脅與省錢的機會,屬於雙重風險;伺服器已當機屬於既成事實的 Issue,而非風險;颶風延遲是負面衝擊的威脅;匯率有利變動是正面衝擊的機會;完全無預警、事前毫無徵兆的法規驟變則是超出識別範圍的突發(Unknown-Unknown)風險,只能靠管理準備金與韌性因應。",
  },
  {
    id: "rsk-061",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each risk-related document or reserve to its definition.",
      zh: "請將下列每一項風險相關文件或準備金,拖曳配對到其定義。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Risk Management Plan",
            zh: "風險管理計畫",
          },
        },
        {
          id: "p2",
          text: {
            en: "Risk Register",
            zh: "風險登錄表",
          },
        },
        {
          id: "p3",
          text: {
            en: "Risk Report",
            zh: "風險報告",
          },
        },
        {
          id: "p4",
          text: {
            en: "Contingency Reserve",
            zh: "應變準備金",
          },
        },
        {
          id: "p5",
          text: {
            en: "Management Reserve",
            zh: "管理準備金",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Defines how risk management will be structured and performed for the project, including risk categories and probability/impact definitions",
            zh: "定義專案風險管理如何架構與執行,包括風險分類與機率/衝擊定義",
          },
        },
        {
          id: "c2",
          text: {
            en: "A detailed log of each individually identified risk, its owner, and its planned response",
            zh: "逐項已識別風險的詳細登錄,包含負責人與規劃回應措施",
          },
        },
        {
          id: "c3",
          text: {
            en: "A summary-level document presenting overall project risk exposure to senior stakeholders",
            zh: "彙總呈現專案整體風險曝險狀況給高層利害關係人的文件",
          },
        },
        {
          id: "c4",
          text: {
            en: "Funds or time set aside for identified risks; part of the cost/schedule baseline and controlled by the PM",
            zh: "為已識別風險預留的資金或時間;屬於成本/時程基準的一部分,由 PM 掌控",
          },
        },
        {
          id: "c5",
          text: {
            en: "Funds or time set aside for unforeseen risks; outside the baseline and requires sponsor approval to use",
            zh: "為未預期風險預留的資金或時間;在基準之外,須經發起人核准才能動用",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "風險管理計畫定義遊戲規則;風險登錄表是逐項風險的詳細紀錄;風險報告是彙總呈現整體曝險的高層文件;應變準備金因應已識別風險、屬於基準的一部分並由 PM 掌控;管理準備金則因應未預期風險、在基準之外且須經發起人核准,五者常在考題中互相混淆,須清楚分辨層級與掌控權。",
  },
  {
    id: "rsk-062",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Drag and match each agile practice to the description of how it supports risk management.",
      zh: "請將下列每一項敏捷實務,拖曳配對到其如何支持風險管理的描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Risk-adjusted backlog",
            zh: "風險調整式待辦清單",
          },
        },
        {
          id: "p2",
          text: {
            en: "Spike (in Scrum)",
            zh: "突刺(Spike)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Daily standup risk flag",
            zh: "每日站會風險提示",
          },
        },
        {
          id: "p4",
          text: {
            en: "Retrospective risk review",
            zh: "回顧會議風險檢視",
          },
        },
        {
          id: "p5",
          text: {
            en: "Definition of Done (DoD) risk criteria",
            zh: "完成的定義(DoD)風險準則",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Orders backlog items so higher-risk items are addressed earlier to reduce uncertainty sooner",
            zh: "排序待辦項目,讓高風險項目較早處理以及早降低不確定性",
          },
        },
        {
          id: "c2",
          text: {
            en: "A timeboxed research activity used to reduce uncertainty about a technical risk before committing to full implementation",
            zh: "一種限時的研究活動,在全面實作前先降低對某項技術風險的不確定性",
          },
        },
        {
          id: "c3",
          text: {
            en: "Surfaces emerging blockers or risks daily so the team can react quickly",
            zh: "每日浮現新出現的阻礙或風險,讓團隊能快速反應",
          },
        },
        {
          id: "c4",
          text: {
            en: "Reflects on realized risks and the effectiveness of past responses each iteration, adapting future practice",
            zh: "每次迭代檢視已發生的風險與過去回應措施的成效,並調整未來做法",
          },
        },
        {
          id: "c5",
          text: {
            en: "Ensures quality-related risk, such as untested code, does not silently accumulate as technical debt",
            zh: "確保如未經測試程式碼等品質相關風險,不會在未被察覺的情況下累積成技術債",
          },
        },
      ],
    },
    correctAnswer: {
      p1: "c1",
      p2: "c2",
      p3: "c3",
      p4: "c4",
      p5: "c5",
    },
    explanation: "敏捷團隊將風險意識融入既有儀式與實務中:風險調整式待辦清單優先處理高風險項目;突刺(Spike)以限時研究降低技術不確定性;每日站會即時浮現新風險;回顧會議檢視已發生風險與回應成效;完成的定義(DoD)則透過品質準則防止技術債悄悄累積,皆體現敏捷「持續、頻繁識別與因應風險」的精神。",
  },
  {
    id: "rsk-063",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "calculation",
    stem: {
      en: "A risk has a 45% probability of occurring and would cause a $20,000 loss if it does. The EMV of this risk is {{blank1}}. Since a fully-covering insurance policy costs a fixed premium of $9,500, which exceeds this EMV in magnitude, the PM should {{blank2}}.",
      zh: "某風險發生機率為 45%,一旦發生將造成 2 萬美金損失。此風險的 EMV 為 {{blank1}}。由於一份可完全涵蓋此風險的保單,固定保費為 9,500 美金,金額超過此 EMV,因此 PM 應該 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "-$9,000",
              zh: "-$9,000",
            },
          },
          {
            id: "b",
            text: {
              en: "-$20,000",
              zh: "-$20,000",
            },
          },
          {
            id: "c",
            text: {
              en: "-$4,500",
              zh: "-$4,500",
            },
          },
          {
            id: "d",
            text: {
              en: "$9,000",
              zh: "$9,000",
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
              en: "Accept the risk rather than purchase the insurance",
              zh: "接受風險,而非購買保險",
            },
          },
          {
            id: "b",
            text: {
              en: "Purchase the insurance rather than accept the risk",
              zh: "購買保險,而非接受風險",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "EMV = 45% × (-$20,000) = -$9,000,即預期損失 9,000 美金。保費 $9,500 高於此預期損失金額,代表購買保險的固定成本反而超過接受風險的期望成本,故此情況下 PM 應選擇接受風險而非購買保險,這與「保費低於 EMV 時應投保」的一般判斷方向相反,須依實際數字比較,不能一概而論。",
  },
  {
    id: "rsk-064",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "The specific person accountable for monitoring an assigned risk's triggers and executing its approved response is called the {{blank1}}. In contrast, a pre-defined, observable indicator that signals a risk is about to occur or has already begun to occur is called a {{blank2}}.",
      zh: "負責監控被指派風險之觸發徵兆、並執行其已核准回應措施的特定人員,稱為 {{blank1}}。相反地,一項預先定義、可觀察且用來提示風險即將發生或已經開始發生的指標,則稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Risk Owner",
              zh: "風險負責人(Risk Owner)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Trigger",
              zh: "風險觸發徵兆(Risk Trigger)",
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
              en: "Risk Owner",
              zh: "風險負責人(Risk Owner)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Trigger (Warning Sign)",
              zh: "風險觸發徵兆(Risk Trigger,警訊)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "Risk Owner(風險負責人)是被指派負責監控與執行特定風險回應的人員;Risk Trigger(觸發徵兆/警訊)則是預先定義的可觀察指標,用來提示風險即將或已經發生,兩者一個是「人」、一個是「訊號」,考題常會互相替換用詞來混淆考生。",
  },
  {
    id: "rsk-065",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The PM is comparing two software architecture options. Option A costs a fixed $175,000. Option B has a 65% chance of costing $130,000 and a 35% chance of costing $260,000, giving Option B an expected cost of {{blank1}}. Based on this comparison, the PM should choose {{blank2}} because it has the lower expected cost.",
      zh: "PM 正在比較兩個軟體架構方案。方案 A 固定成本為 17.5 萬美金。方案 B 有 65% 機率成本為 13 萬美金、35% 機率成本為 26 萬美金,其期望成本為 {{blank1}}。依此比較,PM 應選擇 {{blank2}},因為其期望成本較低。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "$175,500",
              zh: "$175,500",
            },
          },
          {
            id: "b",
            text: {
              en: "$130,000",
              zh: "$130,000",
            },
          },
          {
            id: "c",
            text: {
              en: "$195,000",
              zh: "$195,000",
            },
          },
          {
            id: "d",
            text: {
              en: "$260,000",
              zh: "$260,000",
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
              en: "Option A",
              zh: "方案 A",
            },
          },
          {
            id: "b",
            text: {
              en: "Option B",
              zh: "方案 B",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "方案 B 期望成本 = 65% × $130,000 + 35% × $260,000 = $84,500 + $91,000 = $175,500。方案 A 為固定成本 $175,000,僅比方案 B 低 $500,雖然差距很小,但方案 A 的期望成本仍然較低,故 PM 應選擇方案 A。此題訓練考生即使兩方案數字非常接近,仍須精確計算後再下判斷,不能單憑直覺。",
  },
  {
    id: "rsk-066",
    edition: "pmbok8",
    domain: "BusinessEnvironment",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "The organization states: \"We can tolerate a schedule slippage of up to plus or minus two weeks on any project without concern\" — this defines the organization's {{blank1}} for schedule. However, \"any slippage beyond six weeks requires immediate board notification\" defines the organization's {{blank2}}.",
      zh: "組織聲明:「任何專案的時程延誤在正負兩週以內,我們都能容忍且不需擔心」——這定義了組織在時程面向的 {{blank1}}。然而,「任何超過六週的延誤都須立即通報董事會」則定義了組織的 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Risk Tolerance",
              zh: "風險容忍度(Risk Tolerance)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Threshold",
              zh: "風險門檻(Risk Threshold)",
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
              en: "Risk Tolerance",
              zh: "風險容忍度(Risk Tolerance)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Threshold",
              zh: "風險門檻(Risk Threshold)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "「正負兩週以內可接受」描述的是特定面向(時程)上可接受的變動範圍,即風險容忍度(Risk Tolerance);「超過六週須立即通報董事會」則是明確可量化、一旦超過即觸發正式處理的界線,即風險門檻(Risk Threshold)。兩者皆與風險胃納(整體態度傾向)不同,考題常需依敘述精確度判斷。",
  },
  {
    id: "rsk-067",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "A formal, periodic examination of whether the project's overall risk management process itself is being followed effectively is called a {{blank1}}. Re-evaluating the probability, impact, and priority of previously identified risks — and identifying any new risks arising from recent changes — is called {{blank2}}.",
      zh: "對專案「整體風險管理流程本身」是否被有效遵循,所進行的正式、定期檢視,稱為 {{blank1}}。重新評估先前已識別風險的機率、衝擊與優先順序,並識別因近期變更而產生的任何新風險,則稱為 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Risk Audit",
              zh: "風險稽核(Risk Audit)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Reassessment",
              zh: "風險再評估(Risk Reassessment)",
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
              en: "Risk Audit",
              zh: "風險稽核(Risk Audit)",
            },
          },
          {
            id: "b",
            text: {
              en: "Risk Reassessment",
              zh: "風險再評估(Risk Reassessment)",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "b",
    },
    explanation: "Risk Audit(風險稽核)檢視的是整體風險管理流程本身是否有效、是否創造價值;Risk Reassessment(風險再評估)則是針對個別已識別風險重新評估機率、衝擊與優先順序,並識別新風險。兩者皆發生於 Monitor Risks 過程中,但層級與焦點不同。",
  },
  {
    id: "rsk-068",
    edition: "pmbok7",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "easy",
    timeCategory: "definition",
    stem: {
      en: "Below are four opportunity (positive risk) response strategy cards. Click the strategy where the team takes no proactive action and simply captures the benefit if the opportunity happens to occur on its own.",
      zh: "下方列出四種機會(正面風險)回應策略卡片,請點選「團隊不主動採取任何行動,僅在機會自然發生時順勢受益」的策略。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "Exploit",
          zh: "利用(Exploit)",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r2",
        label: {
          en: "Enhance",
          zh: "增強(Enhance)",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r3",
        label: {
          en: "Share",
          zh: "分享(Share)",
        },
        x: 51,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r4",
        label: {
          en: "Accept",
          zh: "接受(Accept)",
        },
        x: 74,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "r4",
    explanation: "Accept(接受)代表不主動採取任何行動來確保或提高機會發生的可能性,僅在機會自然發生時順勢受益;Exploit 是確保機會一定發生,Enhance 是提高發生機率或衝擊,Share 是與第三方合作共享收益,三者皆屬主動介入的策略,與此情境不符。",
  },
  {
    id: "rsk-069",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "Below are four identified risk cards showing probability and impact. Click the risk the PM should prioritize FIRST for response planning because it has the highest Expected Monetary Value (EMV) of loss.",
      zh: "下方列出四張已識別風險卡片,分別標示機率與衝擊。請點選 PM 應優先規劃回應措施的風險,因為它具有最高的期望貨幣價值(EMV)損失。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "50% probability, $40,000 impact",
          zh: "機率 50%,衝擊 4 萬美金",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r2",
        label: {
          en: "8% probability, $300,000 impact",
          zh: "機率 8%,衝擊 30 萬美金",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r3",
        label: {
          en: "20% probability, $90,000 impact",
          zh: "機率 20%,衝擊 9 萬美金",
        },
        x: 51,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r4",
        label: {
          en: "65% probability, $25,000 impact",
          zh: "機率 65%,衝擊 2.5 萬美金",
        },
        x: 74,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "r2",
    explanation: "分別計算四項風險的 EMV:r1 = 50% × $40,000 = $20,000;r2 = 8% × $300,000 = $24,000;r3 = 20% × $90,000 = $18,000;r4 = 65% × $25,000 = $16,250。r2 的 EMV 最高($24,000),故 PM 應優先針對 r2 規劃風險回應,即使其發生機率是四者中最低的,也不能僅憑機率高低判斷優先順序,而須以 EMV(機率 × 衝擊)綜合衡量。",
  },
  {
    id: "rsk-070",
    edition: "pmbok8",
    domain: "Process",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "calculation",
    stem: {
      en: "The diagram below is a decision tree. From the Start node, the PM can choose to Buy a Warranty Extension (fixed cost $25,000) or go with No Warranty. If No Warranty is chosen, there is a 72% chance of $0 additional repair cost and a 28% chance of a $95,000 repair cost. Click the node the PM should choose because it has the lower expected cost.",
      zh: "下圖為一決策樹:從起點(Start)節點,PM 可選擇「購買延長保固」(固定成本 2.5 萬美金)或「不購買保固」。若選擇不購買保固,有 72% 機率無須額外維修成本、28% 機率須支付 9.5 萬美金維修成本。請點選 PM 應選擇的節點,因為其期望成本較低。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Start",
          zh: "起點(Start)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Buy Warranty Extension: fixed $25,000",
          zh: "購買延長保固:固定成本 2.5 萬美金",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "No Warranty",
          zh: "不購買保固",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Outcome: 72% chance, $0",
          zh: "結果:72% 機率,成本 $0",
        },
        x: 55,
        y: 47.5,
        width: 20,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Outcome: 28% chance, $95,000",
          zh: "結果:28% 機率,成本 9.5 萬美金",
        },
        x: 77,
        y: 47.5,
        width: 20,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    edges: [
      {
        from: "n1",
        to: "n2",
      },
      {
        from: "n1",
        to: "n3",
      },
      {
        from: "n3",
        to: "n4",
      },
      {
        from: "n3",
        to: "n5",
      },
    ],
    explanation: "不購買保固的期望成本 = 72% × $0 + 28% × $95,000 = $0 + $26,600 = $26,600。購買延長保固為固定成本 $25,000,低於不購買保固的期望成本 $26,600,故 PM 應選擇「購買延長保固」節點,差額為 $1,600。此題其中一分支結果為 $0,考生須留意不能省略此分支,仍應完整代入計算。",
  },
  {
    id: "rsk-071",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Risk",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "Below are four risk communication practice cards. Click the one that best supports transparent, effective risk communication with stakeholders.",
      zh: "下方列出四種風險溝通實務卡片,請點選最能支持與利害關係人進行透明、有效風險溝通的做法。",
    },
    options: [
      {
        id: "r1",
        label: {
          en: "Report a risk only after it has fully materialized",
          zh: "僅在風險完全發生後才回報",
        },
        x: 5,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r2",
        label: {
          en: "Maintain a single, current risk register accessible to key stakeholders",
          zh: "維護一份單一、即時更新且對關鍵利害關係人開放的風險登錄表",
        },
        x: 28,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r3",
        label: {
          en: "Discuss risks only privately among select team members",
          zh: "僅在少數團隊成員間私下討論風險",
        },
        x: 51,
        y: 40,
        width: 20,
        height: 20,
      },
      {
        id: "r4",
        label: {
          en: "Omit high-severity risks from steering committee updates to avoid alarm",
          zh: "為避免引起恐慌,從指導委員會報告中省略高嚴重度風險",
        },
        x: 74,
        y: 40,
        width: 20,
        height: 20,
      },
    ],
    correctAnswer: "r2",
    explanation: "維護一份即時、透明且對關鍵利害關係人開放的風險登錄表,能確保資訊一致且可追溯,是有效風險溝通的核心做法;延後回報、私下討論或刻意省略高嚴重度風險,都會造成資訊不對稱,損害利害關係人對專案的信任,也可能使風險惡化到難以處理的地步。",
  }
]
