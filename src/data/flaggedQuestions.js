// 此檔案由 `npm run import:flagged` 從 quiz/Quiz-w-Issue.md 自動產生,請直接修改
// quiz/Quiz-w-Issue.md 後重新匯入,不要手動編輯這個檔案 —— 下次匯入會整份覆蓋。
//
// 這些題目是稽核抽離、目前有爭議(內容依據不確定)的題目,不在正式抽題題庫內
// (sampleQuestions.js 不包含這些題目)。使用者在「題目問題回報」頁可以逐一檢視、
// 決定「加入題庫」「維持標記」「刪除」,決定會記錄在 localStorage,實際套用到
// quiz/*.md 檔案需要另外手動處理。

export const flaggedQuestions = [
  {
    id: "res-045",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A team member tells the project manager, \"Even if I work extra hard on this task, I doubt it will lead to a better performance review, and even if it did, I don't really care about the reward being offered.\" According to Vroom's Expectancy Theory, her motivation is low because she perceives a weak link between {{blank1}}, and she places low {{blank2}} on the reward itself.",
      zh: "一位團隊成員告訴專案經理:「就算我在這項任務上特別努力,我也懷疑會換來更好的績效考核,而且就算真的有,我也不太在乎目前提供的獎勵。」根據弗魯姆期望理論(Vroom's Expectancy Theory),她的動機低落是因為她認為 {{blank1}} 之間的連結薄弱,同時她對獎勵本身賦予的 {{blank2}} 也很低。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Effort, performance, and reward",
              zh: "努力、績效與獎勵",
            },
          },
          {
            id: "b",
            text: {
              en: "Seniority and job title",
              zh: "年資與職稱",
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
              en: "Valence (perceived value)",
              zh: "期望價值(Valence)",
            },
          },
          {
            id: "b",
            text: {
              en: "Attendance record",
              zh: "出勤紀錄",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "Vroom 的期望理論主張動機 = Expectancy(努力能帶來績效的期望)× Instrumentality(績效能換來獎勵的工具性)× Valence(對獎勵本身賦予的價值)三者相乘。本情境中該成員同時認為努力與績效、獎勵之間的連結薄弱,又不重視獎勵本身的價值,因此整體動機低落,這正是期望理論用來解釋動機強弱的核心邏輯。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-046",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "matching",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Drag and match each base of power to its description.",
      zh: "請將下列權力基礎拖曳配對到其描述。",
    },
    options: {
      prompts: [
        {
          id: "p1",
          text: {
            en: "Legitimate Power",
            zh: "法制權(Legitimate)",
          },
        },
        {
          id: "p2",
          text: {
            en: "Reward Power",
            zh: "獎賞權(Reward)",
          },
        },
        {
          id: "p3",
          text: {
            en: "Coercive Power",
            zh: "強制權(Coercive)",
          },
        },
        {
          id: "p4",
          text: {
            en: "Expert Power",
            zh: "專家權(Expert)",
          },
        },
        {
          id: "p5",
          text: {
            en: "Referent Power",
            zh: "參照權(Referent)",
          },
        },
      ],
      choices: [
        {
          id: "c1",
          text: {
            en: "Power derived from the formal position or title held within the organization",
            zh: "權力來自於組織內正式擔任的職位或頭銜",
          },
        },
        {
          id: "c2",
          text: {
            en: "Power derived from the ability to give bonuses, promotions, or other desirable incentives",
            zh: "權力來自於能提供獎金、升遷或其他令人渴望的誘因",
          },
        },
        {
          id: "c3",
          text: {
            en: "Power derived from the ability to impose penalties, discipline, or negative consequences",
            zh: "權力來自於能施加懲罰、紀律處分或負面後果",
          },
        },
        {
          id: "c4",
          text: {
            en: "Power derived from specialized knowledge or technical skill that others respect",
            zh: "權力來自於他人所敬重的專業知識或技術能力",
          },
        },
        {
          id: "c5",
          text: {
            en: "Power derived from the personal respect, trust, and admiration others feel toward the individual",
            zh: "權力來自於他人對該人個人的敬重、信任與仰慕",
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
    explanation: "法制權、獎賞權、強制權、專家權、參照權是常見的五種權力基礎分類。法制權來自正式職位;獎賞權與強制權分別來自給予誘因或施加懲罰的能力;專家權來自專業知識;參照權則來自他人對個人特質的敬重與信任。專案經理在正式職權有限的情況下,常需仰賴專家權與參照權來發揮影響力。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-047",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A newly assigned project manager notices that team members follow her instructions mainly because the project charter formally names her as the project manager, not because they particularly respect her skills or personality yet. This reflects {{blank1}}, and since relying on this alone tends to be less sustainable in a matrix organization, she should also work to {{blank2}}.",
      zh: "一位新上任的專案經理發現,團隊成員之所以聽從她的指示,主要是因為專案章程正式指定她為專案經理,而非目前特別敬重她的能力或人格特質。這反映了 {{blank1}},而由於單靠這種權力在矩陣型組織中往往較難長久維持,她也應該努力 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "Legitimate power based on her formally assigned position",
              zh: "法制權,來自於她被正式指派的職位",
            },
          },
          {
            id: "b",
            text: {
              en: "Referent power based on personal admiration",
              zh: "參照權,來自於他人對她個人的仰慕",
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
              en: "Build expert and referent power over time through demonstrated competence and trust",
              zh: "隨時間透過展現能力與建立信任,累積專家權與參照權",
            },
          },
          {
            id: "b",
            text: {
              en: "Rely exclusively on issuing formal directives and ignore relationship-building",
              zh: "完全仰賴發布正式指令,不理會關係經營",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "僅憑正式職位而來的法制權,在職權有限的矩陣型組織中往往不夠持久;專案經理應同時透過展現專業能力與建立信任關係,逐步累積更具持續影響力的專家權與參照權,而非僅依賴頭銜發號施令。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-048",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "definition",
    stem: {
      en: "Team members frequently seek out the project manager's technical guidance on complex architecture decisions specifically because of her deep, well-recognized subject-matter expertise in that domain — not because of her title. Click the base of power this illustrates.",
      zh: "團隊成員經常在複雜的架構決策上尋求專案經理的技術指引,主要是因為她在該領域擁有深厚且受廣泛肯定的專業知識,而非因為她的職稱。請點選這說明的是哪一種權力基礎。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Legitimate Power",
          zh: "法制權(Legitimate)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Reward Power",
          zh: "獎賞權(Reward)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Coercive Power",
          zh: "強制權(Coercive)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Expert Power",
          zh: "專家權(Expert)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Referent Power",
          zh: "參照權(Referent)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n4",
    explanation: "專家權(Expert Power)來自於個人在特定領域擁有他人所敬重的專業知識或技術能力,團隊成員因信任其專業判斷而主動尋求指引,與職位頭銜(法制權)、給予誘因(獎賞權)、施加懲罰(強制權)或個人魅力(參照權)並不相同。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-049",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "Even outside of official project meetings, team members often seek the project manager's opinion and willingly go along with his suggestions because they personally admire his integrity and genuinely trust him, quite apart from his formal role. Which base of power is being demonstrated here?",
      zh: "即使在正式專案會議之外,團隊成員也經常主動徵詢專案經理的意見,並樂於採納他的建議,原因是他們打從心底敬佩他的正直人格、真心信任他,這與他的正式職務無關。這展現的是哪一種權力基礎?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Legitimate power",
          zh: "法制權(Legitimate)",
        },
      },
      {
        id: "b",
        text: {
          en: "Coercive power",
          zh: "強制權(Coercive)",
        },
      },
      {
        id: "c",
        text: {
          en: "Referent power",
          zh: "參照權(Referent)",
        },
      },
      {
        id: "d",
        text: {
          en: "Reward power",
          zh: "獎賞權(Reward)",
        },
      },
    ],
    correctAnswer: "c",
    explanation: "參照權(Referent Power)源自他人對個人特質(如人格、誠信、可信賴度)的仰慕與信任,即使沒有正式職權或明確誘因,對方也願意主動追隨。這與依賴職位(法制權)、施加懲罰(強制權)或提供獎勵(獎賞權)的權力來源不同。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-050",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "multiple_response",
    difficulty: "hard",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager operating with limited formal authority in a weak matrix organization wants to build lasting influence and voluntary commitment from the team, rather than mere short-term compliance. Which three of the following bases of power are generally considered most effective and sustainable for this purpose? Select three.",
      zh: "一位在弱矩陣型組織中職權有限的專案經理,希望建立長久的影響力與團隊自願的投入,而非僅換取短期的服從。下列哪三種權力基礎通常被認為最能有效且長久地達成此目的?(選三項)",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Expert power",
          zh: "專家權(Expert)",
        },
      },
      {
        id: "b",
        text: {
          en: "Referent power",
          zh: "參照權(Referent)",
        },
      },
      {
        id: "c",
        text: {
          en: "Reward power",
          zh: "獎賞權(Reward)",
        },
      },
      {
        id: "d",
        text: {
          en: "Coercive power",
          zh: "強制權(Coercive)",
        },
      },
      {
        id: "e",
        text: {
          en: "Legitimate power",
          zh: "法制權(Legitimate)",
        },
      },
    ],
    correctAnswer: [
      "a",
      "b",
      "c",
    ],
    selectCount: 3,
    explanation: "專家權、參照權與獎賞權通常被認為較能建立長久且自願的投入——專家權與參照權源自受尊重的能力與人格特質,獎賞權則透過正向誘因驅動行為。強制權仰賴懲罰與恐懼,長期易損害信任與士氣;法制權僅來自職位本身,在職權有限的矩陣型組織中往往不足以單獨支撐長久的影響力,因此相對而言不如前三者理想。\n\n> ⚠️ 稽核備註:這題的「哪三種最有效」在一般 PMP 備考教材裡也不是鐵板一致的說法(常見共識是 Expert+Referent 最好,但 Reward 是否排第三見仁見智),就算確認這個主題要考,這題本身的用詞也建議加註「常見備考教材說法」再放回去。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-068",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "hotspot",
    difficulty: "medium",
    timeCategory: "predictive_scenario",
    stem: {
      en: "A project manager tells an underperforming team member, \"If your output doesn't improve by next week, I will document this in your performance review and recommend you be removed from the project.\" Click the base of power being used here.",
      zh: "專案經理對一位績效不佳的團隊成員說:「如果你下週產出還沒有改善,我會把這件事記錄在你的績效考核中,並建議把你調離這個專案。」請點選此處使用的是哪一種權力基礎。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Expert Power",
          zh: "專家權(Expert)",
        },
        x: 5,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Referent Power",
          zh: "參照權(Referent)",
        },
        x: 36.66666666666667,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Coercive Power",
          zh: "強制權(Coercive)",
        },
        x: 68.33333333333334,
        y: 5,
        width: 25,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Reward Power",
          zh: "獎賞權(Reward)",
        },
        x: 5,
        y: 47.5,
        width: 25,
        height: 35,
      },
      {
        id: "n5",
        label: {
          en: "Legitimate Power",
          zh: "法制權(Legitimate)",
        },
        x: 36.66666666666667,
        y: 47.5,
        width: 25,
        height: 35,
      },
    ],
    correctAnswer: "n3",
    explanation: "強制權(Coercive Power)是透過施加懲罰或負面後果(如負面績效記錄、調離專案)來促使對方改變行為,雖然短期內可能有效,但長期而言容易損害信任與士氣,通常被認為是較不理想的權力運用方式。這與依賴專業知識(專家權)、個人敬重(參照權)、正向誘因(獎賞權)或職位本身(法制權)明顯不同。",
    auditNote: "屬於「French & Raven 五種權力基礎 + Vroom's Expectancy Theory」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-059",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "single_choice",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A brand-new team member is highly enthusiastic about the assignment but has very little relevant technical skill or experience with the specific task. According to the Situational Leadership model (Hersey-Blanchard), which leadership style should the project manager primarily apply with this individual?",
      zh: "一位剛加入的團隊成員對這項任務充滿熱忱,但在該特定任務上幾乎沒有相關技術能力或經驗。根據情境領導模型(Situational Leadership, Hersey-Blanchard),專案經理對這位成員應主要採用哪一種領導風格?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Directing — providing close, specific guidance and instructions",
          zh: "指導型(Directing)——提供密切、具體的指引與指示",
        },
      },
      {
        id: "b",
        text: {
          en: "Delegating — handing over full autonomy with minimal oversight",
          zh: "授權型(Delegating)——交出完全自主權,極少監督",
        },
      },
      {
        id: "c",
        text: {
          en: "Supporting — facilitating and encouraging with minimal direction",
          zh: "支持型(Supporting)——以鼓勵與促進為主,極少指導",
        },
      },
      {
        id: "d",
        text: {
          en: "Laissez-faire — providing no involvement at all",
          zh: "放任型(Laissez-faire)——完全不介入",
        },
      },
    ],
    correctAnswer: "a",
    explanation: "情境領導模型主張領導風格應依團隊成員的能力(competence)與意願(commitment)調整。對於能力低、但意願/熱忱高的新成員,應採用 Directing(指導型)風格,提供密切且具體的指引;隨著能力逐漸提升,才逐步轉向 Coaching(教練型)、Supporting(支持型),最終在能力與意願皆高時採用 Delegating(授權型)。放任型並非情境領導模型中的正式風格,且完全不介入對新手而言風險過高。",
    auditNote: "屬於「Hersey-Blanchard 情境領導模型」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "res-060",
    edition: "pmbok7",
    domain: "People",
    performanceDomain: "Resources",
    questionType: "dropdown",
    difficulty: "medium",
    timeCategory: "agile_scenario",
    stem: {
      en: "A veteran team member has repeatedly demonstrated both strong technical competence and high commitment on similar tasks. Following the Situational Leadership model, the project manager should primarily adopt {{blank1}} with this individual, while reserving closer involvement for {{blank2}}.",
      zh: "一位資深團隊成員在類似任務上多次展現出高度的技術能力與投入意願。依循情境領導模型,專案經理對這位成員應主要採用 {{blank1}},並將較密切的介入保留給 {{blank2}}。",
    },
    blanks: [
      {
        id: "blank1",
        options: [
          {
            id: "a",
            text: {
              en: "A Delegating style, granting autonomy over how the work gets done",
              zh: "授權型(Delegating)風格,給予其自行決定如何完成工作的自主權",
            },
          },
          {
            id: "b",
            text: {
              en: "A Directing style, specifying each step in detail",
              zh: "指導型(Directing)風格,詳細規定每一個步驟",
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
              en: "Less experienced or less confident team members who need more guidance",
              zh: "經驗較淺或信心較不足、需要更多指引的團隊成員",
            },
          },
          {
            id: "b",
            text: {
              en: "Every team member equally, regardless of their skill or experience",
              zh: "無論技能或經驗高低,對每位成員一視同仁",
            },
          },
        ],
      },
    ],
    correctAnswer: {
      blank1: "a",
      blank2: "a",
    },
    explanation: "對於能力與意願皆高的資深成員,情境領導模型建議採用 Delegating(授權型)風格,給予高度自主權;較密切的指導與介入則應保留給能力或信心尚待建立的成員,而非不分對象一律採用同一種領導風格。",
    auditNote: "屬於「Hersey-Blanchard 情境領導模型」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  },
  {
    id: "stk-067",
    edition: "pmbok8",
    domain: "People",
    performanceDomain: "Stakeholders",
    questionType: "hotspot",
    difficulty: "hard",
    timeCategory: "definition",
    stem: {
      en: "Under Mitchell, Agle, and Wood's stakeholder typology (an extension of the Salience Model), a stakeholder possessing all three attributes — power, urgency, and legitimacy — simultaneously is classified as a \"Definitive\" stakeholder and should receive the highest priority. Click the card describing this \"Definitive\" stakeholder type.",
      zh: "依Mitchell、Agle與Wood提出的利害關係人類型學(顯著性模型的延伸),同時具備權力(Power)、急迫性(Urgency)、正當性(Legitimacy)三項屬性的利害關係人被歸類為「確定型(Definitive)」利害關係人,應獲得最高優先關注。請點選描述此「確定型(Definitive)」利害關係人類型的卡片。",
    },
    options: [
      {
        id: "n1",
        label: {
          en: "Possesses power and legitimacy, but lacks urgency",
          zh: "具備權力與正當性,但缺乏急迫性",
        },
        x: 5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n2",
        label: {
          en: "Possesses power, urgency, and legitimacy simultaneously",
          zh: "同時具備權力、急迫性與正當性",
        },
        x: 52.5,
        y: 5,
        width: 40,
        height: 35,
      },
      {
        id: "n3",
        label: {
          en: "Possesses urgency and legitimacy, but lacks power",
          zh: "具備急迫性與正當性,但缺乏權力",
        },
        x: 5,
        y: 47.5,
        width: 40,
        height: 35,
      },
      {
        id: "n4",
        label: {
          en: "Possesses power and urgency, but lacks legitimacy",
          zh: "具備權力與急迫性,但缺乏正當性",
        },
        x: 52.5,
        y: 47.5,
        width: 40,
        height: 35,
      },
    ],
    correctAnswer: "n2",
    explanation: "Mitchell等人提出的顯著性模型延伸類型學中,同時具備權力、急迫性、正當性三項屬性者稱為「確定型(Definitive)」利害關係人,應獲得PM最優先的關注與資源投入;僅具權力與正當性(缺急迫性)稱為「支配型(Dominant)」;僅具急迫性與正當性(缺權力)稱為「依賴型(Dependent)」;僅具權力與急迫性(缺正當性)稱為「危險型(Dangerous)」,因其可能運用權力採取急迫但未必正當的行動。",
    auditNote: "屬於「Mitchell/Agle/Wood 利害關係人類型學」這個主題 —— 2026/07/26 第三輪稽核時,子代理逐字搜尋課程筆記、對應領域摘要、pmbok-outline.md 三份參考資料,查不到這個主題的依據。內容本身沒有事實錯誤,只是不確定是否為你這次課程/考試範圍內的內容。",
  }
]
