// PMP 模擬考題目 schema 定義
// 分類依據: docs:/pmbok-outline.md (PMBOK 7th / 8th 版對照文件)

/** ECO 三大領域 — 用於考試配分與成績統計,與版本無關 */
export const DOMAINS = ['People', 'Process', 'BusinessEnvironment']

/** 8th 版新制考試規格下的領域配分 (docs 第 0 節) */
export const DOMAIN_WEIGHTS = {
  People: 0.33,
  Process: 0.41,
  BusinessEnvironment: 0.26,
}

/** 題目標籤用版本 — 僅供標籤與成績分析,不影響考試模式(混合出題) */
export const EDITIONS = ['pmbok7', 'pmbok8']

/** PMBOK 7th 八大績效領域 (docs 1.2) */
export const PERFORMANCE_DOMAINS_PMBOK7 = [
  'Stakeholders',
  'Team',
  'Development Approach and Life Cycle',
  'Planning',
  'Project Work',
  'Delivery',
  'Measurement',
  'Uncertainty',
]

/** PMBOK 8th 七大績效領域 (docs 2.2) */
export const PERFORMANCE_DOMAINS_PMBOK8 = [
  'Governance',
  'Scope',
  'Schedule',
  'Finance',
  'Stakeholders',
  'Resources',
  'Risk',
]

export const PERFORMANCE_DOMAINS_BY_EDITION = {
  pmbok7: PERFORMANCE_DOMAINS_PMBOK7,
  pmbok8: PERFORMANCE_DOMAINS_PMBOK8,
}

/** 題型 (docs 第 4 節) */
export const QUESTION_TYPES = [
  'single_choice',
  'multiple_response',
  'matching',
  'hotspot',
  'dropdown',
  'case_set',
]

export const DIFFICULTIES = ['easy', 'medium', 'hard']

/**
 * 建議作答秒數分類 (依 docs:/test-time-recommand.md)。
 * 每題倒數以該分類的 max 秒數為起始值;剩餘時間低於 min 轉橘字警示,低於 0 轉紅字並開始倒數負值(視為超時)。
 */
export const TIME_CATEGORIES = ['definition', 'calculation', 'agile_scenario', 'predictive_scenario']

export const TIME_RECOMMENDATIONS = {
  definition: { min: 10, max: 20, labelZh: '概念/術語定義題' },
  calculation: { min: 60, max: 90, labelZh: '計算題' },
  agile_scenario: { min: 70, max: 80, labelZh: '敏捷/混合式情境題' },
  predictive_scenario: { min: 90, max: 120, labelZh: '預測型/瀑布式長情境題' },
}

export function getTimeRecommendation(timeCategory) {
  return TIME_RECOMMENDATIONS[timeCategory] || TIME_RECOMMENDATIONS.agile_scenario
}

/**
 * LocalizedText — PMP 正式考試以英文為主,考生可選一個輔助語言(此專案固定為繁體中文),
 * 考試中每題可隨時切換。所有會顯示給考生看的文字欄位(題幹、選項文字等)一律用此結構。
 * @typedef {{en: string, zh: string}} LocalizedText
 *
 * 題目共用欄位 (JSDoc typedef,非執行期強制型別):
 *
 * @typedef {Object} Question
 * @property {string} id
 * @property {'pmbok7'|'pmbok8'} edition            - 僅作標籤與成績分析用,不影響考試模式
 * @property {'People'|'Process'|'BusinessEnvironment'} domain - ECO 配分領域
 * @property {string} performanceDomain             - 依 edition 對應 PERFORMANCE_DOMAINS_BY_EDITION
 * @property {'single_choice'|'multiple_response'|'matching'|'hotspot'|'dropdown'|'case_set'} questionType
 * @property {'easy'|'medium'|'hard'} difficulty
 * @property {'definition'|'calculation'|'agile_scenario'|'predictive_scenario'} timeCategory - 建議作答秒數分類,見 TIME_RECOMMENDATIONS
 * @property {LocalizedText} stem                   - 題幹。dropdown 題型可用 {{blankId}} 標記填空位置(兩語言都要標記)
 * @property {string} explanation                   - 詳解(僅供 PM 本人複習用,固定繁中,不隨考試語言切換)
 *
 * 依 questionType 而異的欄位:
 *
 * single_choice:
 * @property {{id: string, text: LocalizedText}[]} options
 * @property {string} correctAnswer                 - optionId
 *
 * multiple_response:
 * @property {{id: string, text: LocalizedText}[]} options
 * @property {string[]} correctAnswer               - optionId 陣列
 * @property {number} selectCount                   - 需選擇的選項數量(如「請選擇兩項」)
 *
 * matching (拖拉配對, 使用 dnd-kit):
 * @property {{prompts: {id: string, text: LocalizedText}[], choices: {id: string, text: LocalizedText}[]}} options
 * @property {Record<string, string>} correctAnswer - promptId -> choiceId
 *
 * hotspot (點擊熱區, 以百分比座標定義可點擊區塊,不依賴外部圖片素材):
 * @property {{id: string, label: LocalizedText, x: number, y: number, width: number, height: number}[]} options
 * @property {string} correctAnswer                 - optionId
 *
 * dropdown (下拉選單填空):
 * @property {{id: string, options: {id: string, text: LocalizedText}[]}[]} blanks
 * @property {Record<string, string>} correctAnswer - blankId -> optionId
 *
 * case_set (情境題組):
 * 第二階段規劃 — 透過 caseId / caseContext 將多題掛在同一組情境敘述下,
 * 沿用上述各單題型別,不另立資料結構。此階段骨架暫不實作對應渲染元件。
 */

/** 開發期輕量驗證,協助未來大量匯入題庫時抓出欄位缺漏 */
export function validateQuestion(q) {
  const errors = []
  if (!q.id) errors.push('缺少 id')
  if (!EDITIONS.includes(q.edition)) errors.push(`edition 不合法: ${q.edition}`)
  if (!DOMAINS.includes(q.domain)) errors.push(`domain 不合法: ${q.domain}`)
  const validPerfDomains = PERFORMANCE_DOMAINS_BY_EDITION[q.edition] || []
  if (!validPerfDomains.includes(q.performanceDomain)) {
    errors.push(`performanceDomain "${q.performanceDomain}" 不屬於 ${q.edition}`)
  }
  if (!QUESTION_TYPES.includes(q.questionType)) errors.push(`questionType 不合法: ${q.questionType}`)
  if (!DIFFICULTIES.includes(q.difficulty)) errors.push(`difficulty 不合法: ${q.difficulty}`)
  if (!TIME_CATEGORIES.includes(q.timeCategory)) errors.push(`timeCategory 不合法: ${q.timeCategory}`)
  if (!q.stem) errors.push('缺少 stem')
  if (!q.explanation) errors.push('缺少 explanation')

  switch (q.questionType) {
    case 'single_choice':
      if (!Array.isArray(q.options)) errors.push('single_choice 需要 options 陣列')
      if (typeof q.correctAnswer !== 'string') errors.push('single_choice 的 correctAnswer 需為 optionId 字串')
      break
    case 'multiple_response':
      if (!Array.isArray(q.options)) errors.push('multiple_response 需要 options 陣列')
      if (!Array.isArray(q.correctAnswer)) errors.push('multiple_response 的 correctAnswer 需為陣列')
      break
    case 'matching':
      if (!q.options?.prompts || !q.options?.choices) errors.push('matching 需要 options.prompts 與 options.choices')
      if (typeof q.correctAnswer !== 'object') errors.push('matching 的 correctAnswer 需為 promptId->choiceId 對照表')
      break
    case 'hotspot':
      if (!Array.isArray(q.options)) errors.push('hotspot 需要 options 陣列(含座標)')
      if (typeof q.correctAnswer !== 'string') errors.push('hotspot 的 correctAnswer 需為 optionId 字串')
      break
    case 'dropdown':
      if (!Array.isArray(q.blanks)) errors.push('dropdown 需要 blanks 陣列')
      if (typeof q.correctAnswer !== 'object') errors.push('dropdown 的 correctAnswer 需為 blankId->optionId 對照表')
      break
  }
  return errors
}
