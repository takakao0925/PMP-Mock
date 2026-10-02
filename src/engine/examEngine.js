import { DOMAINS, DOMAIN_WEIGHTS, getTimeRecommendation } from '../schema/questionSchema.js'

// 固定考試規格 — 對應 8th 版新制格式 (docs 第 0 節)
// 題數依 docs-notes/20260824-PMP-course-note.md 開頭「180 questions, 240 min」校正(原本用的 185 是專案初期的舊數字)
// 分段題號依 docs-notes/pmi-exam-structure-20260902.md(PMI 2026/09/02 官方新制):
// Section 1 (1-40,案例題為主) → 休息 → Section 2 (41-100) → 休息 → Section 3 (101-180)
export const EXAM_SPEC = {
  mode: 'standard',
  totalQuestions: 180,
  durationMinutes: 240,
  domainWeights: DOMAIN_WEIGHTS,
  // 每個作答到第 N 題後,強制進入一次休息,同時也是「區段邊界」——過了這個邊界,
  // 邊界(含)以前的題目會被鎖定,不能再回去改答案(見 isQuestionLocked)
  breakAfterQuestions: [40, 100],
}

/** 小考模式:介面與計分邏輯跟標準模式完全相同,只是題數少、時間短,方便平常快速練習 */
export const QUICK_QUIZ_SPEC = {
  mode: 'quick',
  totalQuestions: 15,
  durationMinutes: 20,
  domainWeights: DOMAIN_WEIGHTS,
  breakAfterQuestions: [],
}

/**
 * 重點複習模式:題目來源不是完整題庫,而是使用者「目前仍算錯」的題目池(見 buildReviewPool),
 * 所以不需要 domain 配比(pool 本身就已經是篩選過的特定範圍),domainWeights 留著只是跟其他 spec 形狀一致。
 */
export const REVIEW_SPEC = {
  mode: 'review',
  totalQuestions: 15,
  durationMinutes: 20,
  domainWeights: DOMAIN_WEIGHTS,
  breakAfterQuestions: [],
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * 題庫題數有限,同一題會被反覆抽到。若選項順序每次都一樣,容易變成靠選項排在第幾個
 * 背答案,而不是真的懂內容。這裡對每次抽到的題目「複製一份」並重新打亂選項順序
 * (id 對應不變,只是顯示順序不同),不會動到原始題庫資料,也不影響計分。
 */
function shuffleQuestionOptions(question) {
  const q = { ...question }
  switch (question.questionType) {
    case 'single_choice':
    case 'multiple_response':
      q.options = shuffle(question.options)
      break

    case 'hotspot': {
      // 圖面類題目(有 edges,例如網路圖依賴關係)有方向性的閱讀邏輯 —— 通常照左到右/上到下編排,
      // 打亂座標會讓箭頭連線的走向變得雜亂難懂,所以有 edges 的題目維持原始座標不打亂。
      // 沒有 edges 的純選項式熱區(例如卡片選擇題)才打亂座標,避免答案永遠出現在同一個角落。
      if (question.edges && question.edges.length > 0) {
        q.options = question.options
        break
      }
      const positions = question.options.map(({ x, y, width, height }) => ({ x, y, width, height }))
      const shuffledPositions = shuffle(positions)
      q.options = question.options.map((opt, i) => ({ ...opt, ...shuffledPositions[i] }))
      break
    }

    case 'matching':
      q.options = {
        prompts: shuffle(question.options.prompts),
        choices: shuffle(question.options.choices),
      }
      break

    case 'dropdown':
      q.blanks = question.blanks.map((b) => ({ ...b, options: shuffle(b.options) }))
      break
  }
  return q
}

// PMI 2026/09/02 新制 Section 1(前 N 題)以案例研究為主 —— 詳見 docs-notes/pmi-exam-structure-20260902.md。
// 題庫現在已經有真正的案例題組(quiz-md-parser 的「所屬案例」/caseId 分組),固定挑 3 組完整案例
// 塞進 Section 1 最前面;Section 1 剩餘名額(3 組用不完的部分)才用「情境類 timeCategory」近似
// 補滿,維持這段舊邏輯的向下相容(題庫案例題組數量還不夠多時,這個近似仍然有意義)。
const CASE_STUDY_LIKE_TIME_CATEGORIES = ['predictive_scenario', 'agile_scenario']
const TARGET_CASE_STUDY_COUNT = 3

/**
 * 把題庫池依 caseId 分組,抽出最多 count 組完整的案例題組(同一組的子題全部一起抽出,
 * 不會拆散、也不會讓「沒被抽到的那組」的子題脫離情境單獨出現在考卷裡)。
 * 回傳 { clusters, remainingPool }:clusters 是被抽中的案例題組陣列(每組內部保持原始題序,
 * 不洗牌,因為案例子題通常有邏輯先後,例如「上一題的變更被核准後,接下來...」);
 * remainingPool 是排除掉所有 caseId 題目(不論有沒有被抽中)後的一般題目池。
 */
function pickCaseStudyClusters(pool, count) {
  const byCaseId = new Map()
  for (const q of pool) {
    if (!q.caseId) continue
    if (!byCaseId.has(q.caseId)) byCaseId.set(q.caseId, [])
    byCaseId.get(q.caseId).push(q)
  }
  const chosenIds = shuffle([...byCaseId.keys()]).slice(0, count)
  const clusters = chosenIds.map((id) => byCaseId.get(id))
  const remainingPool = pool.filter((q) => !q.caseId)
  return { clusters, remainingPool }
}

/**
 * 把已經抽好的一般題目排序,讓「情境類」題目盡量集中在 Section 1 剩餘名額裡(案例題組用掉的
 * 名額之外),名額不夠時用其他題目補滿,不會擋住抽題;section1Size 沒有意義(0、undefined、
 * 或小於等於案例題組已用掉的題數)時退回單純洗牌,不做分段,但案例題組仍固定排在最前面。
 */
function orderWithCaseStudyFirstSection(caseStudyQuestions, standaloneSelected, section1Size) {
  const remainingSection1Slots = (section1Size || 0) - caseStudyQuestions.length
  if (remainingSection1Slots <= 0 || section1Size >= caseStudyQuestions.length + standaloneSelected.length) {
    return [...caseStudyQuestions, ...shuffle(standaloneSelected)]
  }
  const scenario = shuffle(standaloneSelected.filter((q) => CASE_STUDY_LIKE_TIME_CATEGORIES.includes(q.timeCategory)))
  const standard = shuffle(standaloneSelected.filter((q) => !CASE_STUDY_LIKE_TIME_CATEGORIES.includes(q.timeCategory)))

  const usedScenario = Math.min(scenario.length, remainingSection1Slots)
  const usedStandard = Math.max(0, remainingSection1Slots - usedScenario)
  const section1Filler = shuffle([...scenario.slice(0, usedScenario), ...standard.slice(0, usedStandard)])
  const rest = shuffle([...scenario.slice(usedScenario), ...standard.slice(usedStandard)])

  return [...caseStudyQuestions, ...section1Filler, ...rest]
}

/**
 * 依 domain 配分從題庫池抽題。骨架階段題庫量遠小於 185,
 * 此函式會依比例盡量抽取,不足時就地取用該 domain 全部題目,不會重複出題。
 */
export function buildExam(pool, spec = EXAM_SPEC) {
  // 重點複習模式:pool 已經是篩選過的錯題池,不需要再依 domain 配比抽,單純洗牌後取前 N 題即可
  if (spec.mode === 'review') {
    const shuffled = shuffle(pool)
    const questions = shuffled.slice(0, Math.min(spec.totalQuestions, pool.length)).map(shuffleQuestionOptions)
    return {
      questions,
      meta: {
        requestedTotal: spec.totalQuestions,
        actualTotal: questions.length,
        poolSize: pool.length,
        isDemoPool: questions.length < spec.totalQuestions,
      },
    }
  }

  // 只有標準模式才抽案例題組(小考/複習題數太少塞不下一整組,也不適合把使用者的錯題複習
  // 打散進一個共用情境裡),其餘模式一律把 caseId 題目排除在抽題池之外,不會單獨脫離情境出現。
  const { clusters, remainingPool } =
    spec.mode === 'standard' ? pickCaseStudyClusters(pool, TARGET_CASE_STUDY_COUNT) : { clusters: [], remainingPool: pool.filter((q) => !q.caseId) }
  const caseStudyQuestions = clusters.flat()

  const byDomain = Object.fromEntries(DOMAINS.map((d) => [d, shuffle(remainingPool.filter((q) => q.domain === d))]))

  const requestedTotal = Math.min(spec.totalQuestions, remainingPool.length + caseStudyQuestions.length)
  const standaloneTarget = Math.max(0, requestedTotal - caseStudyQuestions.length)
  const selected = []

  for (const domain of DOMAINS) {
    const target = Math.round(standaloneTarget * spec.domainWeights[domain])
    const take = byDomain[domain].splice(0, Math.min(target, byDomain[domain].length))
    selected.push(...take)
  }

  // 若因無條件捨入或某 domain 題數不足而未達 standaloneTarget,從剩餘題目補足
  const leftover = shuffle(DOMAINS.flatMap((d) => byDomain[d]))
  while (selected.length < standaloneTarget && leftover.length > 0) {
    selected.push(leftover.shift())
  }

  const ordered = orderWithCaseStudyFirstSection(caseStudyQuestions, selected, spec.breakAfterQuestions?.[0])
  const questions = ordered.map(shuffleQuestionOptions)

  return {
    questions,
    meta: {
      requestedTotal: spec.totalQuestions,
      actualTotal: questions.length,
      poolSize: pool.length,
      isDemoPool: questions.length < spec.totalQuestions,
      caseStudyCount: clusters.length,
    },
  }
}

/**
 * 組出重點複習模式的題目池,回傳 { pool, total }:
 * - pool:目前還沒「畢業」的題目;total:曾經進過池子的題目總數(畫面顯示成「剩餘 / 總數」)。
 *
 * 一題進池的來源有兩種:歷史成績裡答錯(或答對但有標記)的題目、以及 manualReviewIds 手動指定的題目。
 * 一題「畢業」(移出池子)的條件:依時間順序看它在歷史成績裡最新一次作答,是答對且沒有標記。
 * - `scoreExam()` 會把答錯 / 有標記 / 超時的題目存進 reviewItems,答對且無標記的題目則只記 id 到
 *   correctIds;兩者合起來才能得知每題最新一次的結果。
 * - 舊版歷史紀錄沒有 correctIds,這類紀錄裡「答對且無標記」的題目無從得知,只能維持原狀。
 * 找不到題庫現有題目(id 已被移除或題庫改版)時,退而使用當時複習清單存的題目快照。
 */
export function buildReviewPool(history, questionPool, manualIds = []) {
  const currentById = new Map(questionPool.map((q) => [q.id, q]))
  const sortedByTime = [...history].sort((a, b) => new Date(a.finishedAt) - new Date(b.finishedAt))

  const cleared = new Map()
  const everInPool = new Set()
  const latestSnapshotById = new Map()
  for (const record of sortedByTime) {
    for (const item of record.reviewItems || []) {
      const isCleared = item.isCorrect && !item.flagged
      cleared.set(item.id, isCleared)
      if (!isCleared) everInPool.add(item.id)
      latestSnapshotById.set(item.id, item)
    }
    for (const id of record.correctIds || []) cleared.set(id, true)
  }

  const poolIds = []
  for (const id of everInPool) if (!cleared.get(id)) poolIds.push(id)
  const manualInBank = manualIds.filter((id) => currentById.has(id))
  for (const id of manualInBank) {
    everInPool.add(id)
    if (!cleared.get(id) && !poolIds.includes(id)) poolIds.push(id)
  }

  const toQuestion = (id) => {
    if (currentById.has(id)) return currentById.get(id)
    // eslint-disable-next-line no-unused-vars
    const { userAnswer, isCorrect, flagged, timedOut, ...question } = latestSnapshotById.get(id) || {}
    return question.id ? question : null
  }

  return { pool: poolIds.map(toQuestion).filter(Boolean), total: everInPool.size }
}

/**
 * 重點複習模式的錯題池通常遠小於 spec.totalQuestions(15 題滿額),如果不管實際抽到幾題都固定給
 * spec.durationMinutes 的完整時間,每題可用時間會被拉得不成比例(例如池子只有 10 題,卻給到跟
 * 小考模式 15 題一樣的 20 分鐘)。這裡依「每題平均作答時間」跟小考模式維持一致的比例,依實際抽到
 * 的題數等比例換算作答時間;非複習模式、或題數剛好抽滿時,直接沿用 spec 原本的時間,不做調整。
 * HomePage 的卡片預覽跟 createExamSession() 都呼叫這個函式,確保畫面上看到的時間就是實際會拿到的時間。
 */
export function computeEffectiveDurationMinutes(spec, actualTotal) {
  if (spec.mode !== 'review' || actualTotal <= 0 || actualTotal === spec.totalQuestions) {
    return spec.durationMinutes
  }
  return Math.max(1, Math.round((spec.durationMinutes / spec.totalQuestions) * actualTotal))
}

export function createExamSession(pool, spec = EXAM_SPEC) {
  const { questions, meta } = buildExam(pool, spec)
  const durationMinutes = computeEffectiveDurationMinutes(spec, meta.actualTotal)
  const effectiveSpec = { ...spec, durationMinutes }
  return {
    id: `exam-${Date.now()}`,
    spec: effectiveSpec,
    meta,
    startedAt: new Date().toISOString(),
    questionIds: questions.map((q) => q.id),
    questions,
    answers: {},
    flags: {},
    currentIndex: 0,
    remainingSeconds: durationMinutes * 60,
    breaksTaken: [],
    onBreak: false,
    status: 'in_progress',
    // 每題累計已檢視秒數(跨多次造訪累加)與已超出建議作答時間的題目清單
    questionElapsedSeconds: {},
    timedOutQuestionIds: [],
  }
}

/** 每秒呼叫一次:累計目前題目的檢視秒數,並在超過建議時間時記入 timedOutQuestionIds */
export function tickQuestionTiming(session) {
  const currentQuestion = session.questions[session.currentIndex]
  const prevElapsed = session.questionElapsedSeconds[currentQuestion.id] || 0
  const elapsed = prevElapsed + 1
  const { max } = getTimeRecommendation(currentQuestion.timeCategory)

  const questionElapsedSeconds = { ...session.questionElapsedSeconds, [currentQuestion.id]: elapsed }
  let timedOutQuestionIds = session.timedOutQuestionIds
  if (elapsed > max && !timedOutQuestionIds.includes(currentQuestion.id)) {
    timedOutQuestionIds = [...timedOutQuestionIds, currentQuestion.id]
  }

  return { questionElapsedSeconds, timedOutQuestionIds }
}

export function shouldBreakAfter(questionNumber, session) {
  const { spec, breaksTaken } = session
  return spec.breakAfterQuestions.includes(questionNumber) && !breaksTaken.includes(questionNumber)
}

/**
 * PMI 2026/09/02 新制:區段一旦離開(=已經觸發過該邊界的休息,記錄在 breaksTaken),
 * 邊界(含)以前的題目就鎖定,不能再回去修改答案。鎖定範圍取 breaksTaken 目前為止的最大值,
 * 一路往後推進不會回退(進到 Section 3 後,Section 1、2 都算鎖定)。
 * questionNumber 為 1-indexed 題號(對應 UI 上顯示的「第 N 題」,不是陣列 index)。
 */
export function isQuestionLocked(questionNumber, session) {
  const breaksTaken = session?.breaksTaken || []
  if (breaksTaken.length === 0) return false
  const lockedUpTo = Math.max(...breaksTaken)
  return questionNumber <= lockedUpTo
}

/** 判斷單題作答是否正確,依 questionType 而異 */
export function isAnswerCorrect(question, userAnswer) {
  if (userAnswer === undefined || userAnswer === null) return false

  switch (question.questionType) {
    case 'single_choice':
    case 'hotspot':
      return userAnswer === question.correctAnswer

    case 'multiple_response': {
      const correct = question.correctAnswer
      if (!Array.isArray(userAnswer) || userAnswer.length !== correct.length) return false
      const a = [...userAnswer].sort()
      const b = [...correct].sort()
      return a.every((v, i) => v === b[i])
    }

    case 'matching': {
      const correct = question.correctAnswer
      const keys = Object.keys(correct)
      return keys.every((k) => userAnswer[k] === correct[k])
    }

    case 'dropdown': {
      const correct = question.correctAnswer
      const keys = Object.keys(correct)
      return keys.every((k) => userAnswer[k] === correct[k])
    }

    default:
      return false
  }
}

/** 交卷後統計:三大 domain 正確率 + 答對題目中 pmbok7/pmbok8 標籤分布 + 答錯/標記/超時題目複習清單 */
export function scoreExam(session) {
  const { questions, answers, flags, timedOutQuestionIds = [] } = session
  const domainStats = Object.fromEntries(DOMAINS.map((d) => [d, { correct: 0, total: 0 }]))
  const editionDistributionAmongCorrect = { pmbok7: 0, pmbok8: 0 }
  const reviewItems = []
  const correctIds = []
  let correctCount = 0

  for (const q of questions) {
    const stat = domainStats[q.domain]
    stat.total += 1

    const userAnswer = answers[q.id]
    const correct = isAnswerCorrect(q, userAnswer)
    const flagged = !!flags[q.id]
    const timedOut = timedOutQuestionIds.includes(q.id)

    if (correct) {
      stat.correct += 1
      correctCount += 1
      editionDistributionAmongCorrect[q.edition] += 1
    }

    // 交卷後複習清單保留答錯、有標記、或超出建議作答時間的題目,並完整保留當時的題目內容快照,
    // 之後題庫內容更新也不影響既有歷史成績的複習紀錄。
    if (!correct || flagged || timedOut) {
      reviewItems.push({ ...q, userAnswer: userAnswer ?? null, isCorrect: correct, flagged, timedOut })
    }
    if (correct && !flagged) correctIds.push(q.id)
  }

  const domainAccuracy = Object.fromEntries(
    DOMAINS.map((d) => {
      const { correct, total } = domainStats[d]
      return [d, { correct, total, accuracy: total > 0 ? correct / total : 0 }]
    }),
  )

  return {
    examId: session.id,
    mode: session.spec.mode || 'standard',
    totalQuestions: questions.length,
    correctCount,
    scorePercent: questions.length > 0 ? Math.round((correctCount / questions.length) * 1000) / 10 : 0,
    domainAccuracy,
    editionDistributionAmongCorrect,
    reviewItems,
    correctIds,
    durationTakenSeconds: session.spec.durationMinutes * 60 - session.remainingSeconds,
    finishedAt: new Date().toISOString(),
  }
}
