import { DOMAINS, DOMAIN_WEIGHTS, getTimeRecommendation } from '../schema/questionSchema.js'

// 固定考試規格 — 對應 8th 版新制格式 (docs 第 0 節)
// 題數依 docs:/20260824-PMP-course-note.md 開頭「180 questions, 240 min」校正(原本用的 185 是專案初期的舊數字)
export const EXAM_SPEC = {
  mode: 'standard',
  totalQuestions: 180,
  durationMinutes: 240,
  domainWeights: DOMAIN_WEIGHTS,
  // 每個作答到第 N 題後,強制進入一次休息(對應真實 PMP 考試的兩次選擇性休息,180 題平分三段每段 60 題)
  breakAfterQuestions: [60, 120],
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
 * 重點複習模式:題目來源不是完整題庫,而是使用者「目前仍算錯」的題目池(見 buildWrongQuestionPool),
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

  const byDomain = Object.fromEntries(DOMAINS.map((d) => [d, shuffle(pool.filter((q) => q.domain === d))]))

  const requestedTotal = Math.min(spec.totalQuestions, pool.length)
  const selected = []

  for (const domain of DOMAINS) {
    const target = Math.round(requestedTotal * spec.domainWeights[domain])
    const take = byDomain[domain].splice(0, Math.min(target, byDomain[domain].length))
    selected.push(...take)
  }

  // 若因無條件捨入或某 domain 題數不足而未達 requestedTotal,從剩餘題目補足
  const leftover = shuffle(DOMAINS.flatMap((d) => byDomain[d]))
  while (selected.length < requestedTotal && leftover.length > 0) {
    selected.push(leftover.shift())
  }

  const questions = shuffle(selected).map(shuffleQuestionOptions)

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

/**
 * 從歷史成績組出「目前仍算錯」的題目池,給重點複習模式抽題用。
 * `scoreExam()` 只有答錯、有標記、或超時的題目才會存進 reviewItems,所以同一題如果在較新一筆
 * 紀錄裡「又出現在 reviewItems 但這次是答對」(例如當時有標記或超時,但答案是對的),就代表這題
 * 目前已經會了,不該再收錄;只有「最新一次出現時仍是答錯」的題目才會進複習池。
 * 找不到題庫現有題目(id 已被移除或題庫改版)時,退而使用當時複習清單存的題目快照。
 */
export function buildWrongQuestionPool(history, questionPool) {
  const currentById = new Map(questionPool.map((q) => [q.id, q]))
  const sortedByTime = [...history].sort((a, b) => new Date(a.finishedAt) - new Date(b.finishedAt))

  const latestIsCorrectById = new Map()
  const latestSnapshotById = new Map()
  for (const record of sortedByTime) {
    for (const item of record.reviewItems || []) {
      latestIsCorrectById.set(item.id, item.isCorrect)
      latestSnapshotById.set(item.id, item)
    }
  }

  const wrongIds = [...latestIsCorrectById.entries()].filter(([, correct]) => !correct).map(([id]) => id)

  return wrongIds
    .map((id) => {
      if (currentById.has(id)) return currentById.get(id)
      // eslint-disable-next-line no-unused-vars
      const { userAnswer, isCorrect, flagged, timedOut, ...question } = latestSnapshotById.get(id) || {}
      return question.id ? question : null
    })
    .filter(Boolean)
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
    durationTakenSeconds: session.spec.durationMinutes * 60 - session.remainingSeconds,
    finishedAt: new Date().toISOString(),
  }
}
