const KEYS = {
  PROGRESS: 'pmp_mock_exam_progress',
  HISTORY: 'pmp_mock_exam_history',
  ISSUE_REPORTS: 'pmp_mock_exam_issue_reports',
  AUDIT_DECISIONS: 'pmp_mock_exam_audit_decisions',
}

function safeParse(raw, fallback) {
  if (!raw) return fallback
  try {
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function saveProgress(session) {
  localStorage.setItem(KEYS.PROGRESS, JSON.stringify(session))
}

export function loadProgress() {
  return safeParse(localStorage.getItem(KEYS.PROGRESS), null)
}

export function clearProgress() {
  localStorage.removeItem(KEYS.PROGRESS)
}

export function loadHistory() {
  return safeParse(localStorage.getItem(KEYS.HISTORY), [])
}

export function saveResultToHistory(result) {
  const history = loadHistory()
  history.unshift(result)
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(history))
}

export function clearHistory() {
  localStorage.removeItem(KEYS.HISTORY)
}

/** 刪除單筆歷史紀錄(例如誤觸產生的無效紀錄) */
export function deleteHistoryEntry(examId) {
  const history = loadHistory().filter((r) => r.examId !== examId)
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(history))
  return history
}

/**
 * 匯出歷史成績為可下載的 JSON 檔,供使用者自行備份/搬到別的瀏覽器或裝置。
 * localStorage 綁定單一來源(origin),換瀏覽器、換裝置、或本機開發時 port 跑掉都讀不到舊資料,
 * 匯出/匯入是純前端架構下唯一能讓資料「跨」這些情況的方式。
 */
export function exportHistoryFile() {
  const payload = { exportedAt: new Date().toISOString(), history: loadHistory() }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `pmp-mock-exam-history-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

/** 匯入的紀錄依 examId 去重合併進現有歷史,不會覆蓋/刪除現有資料 */
export function importHistoryFromJson(jsonText) {
  const parsed = JSON.parse(jsonText)
  const imported = Array.isArray(parsed) ? parsed : parsed.history
  if (!Array.isArray(imported)) throw new Error('檔案格式不正確:找不到 history 陣列')

  const existing = loadHistory()
  const existingIds = new Set(existing.map((r) => r.examId))
  const toAdd = imported.filter((r) => r && r.examId && !existingIds.has(r.examId))

  const merged = [...toAdd, ...existing].sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(merged))
  return { addedCount: toAdd.length, totalCount: merged.length }
}

// ---------- 題庫問題回報(警鈴)----------
// 純前端架構寫不到本機檔案系統,回報一樣先存 localStorage,再由使用者「匯出」成
// Report-Issue.md,手動存到 quiz/ 資料夾(跟歷史成績備份走同一套模式)。

export function loadIssueReports() {
  return safeParse(localStorage.getItem(KEYS.ISSUE_REPORTS), [])
}

export function isQuestionReported(questionId) {
  return loadIssueReports().some((r) => r.questionId === questionId)
}

export function addIssueReport({ questionId, stem, note }) {
  const reports = loadIssueReports().filter((r) => r.questionId !== questionId)
  reports.unshift({ questionId, stem, note: note || '', reportedAt: new Date().toISOString() })
  localStorage.setItem(KEYS.ISSUE_REPORTS, JSON.stringify(reports))
  return reports
}

export function removeIssueReport(questionId) {
  const reports = loadIssueReports().filter((r) => r.questionId !== questionId)
  localStorage.setItem(KEYS.ISSUE_REPORTS, JSON.stringify(reports))
  return reports
}

export function clearIssueReports() {
  localStorage.removeItem(KEYS.ISSUE_REPORTS)
}

// ---------- 稽核複審(quiz/Quiz-w-Issue.md 有爭議題目)決定 ----------
// 這裡的「加入題庫」「刪除」都只是記錄使用者的決定,純前端架構無法直接改寫 quiz/*.md 檔案。
// 存下完整題目內容(而不只是 id),之後由開發者(Claude Code)讀取這裡的決定,
// 手動把 add 的題目搬回對應 quiz/<Domain>.md、把 delete 的題目從 Quiz-w-Issue.md 移除。

export function loadAuditDecisions() {
  return safeParse(localStorage.getItem(KEYS.AUDIT_DECISIONS), [])
}

export function getAuditDecision(questionId) {
  return loadAuditDecisions().find((d) => d.questionId === questionId) || null
}

/** decision: 'add' | 'delete'。同一題重複決定時,以最後一次為準。 */
export function saveAuditDecision({ questionId, decision, question }) {
  const decisions = loadAuditDecisions().filter((d) => d.questionId !== questionId)
  decisions.unshift({ questionId, decision, question, decidedAt: new Date().toISOString() })
  localStorage.setItem(KEYS.AUDIT_DECISIONS, JSON.stringify(decisions))
  return decisions
}

export function exportIssueReportsFile() {
  const reports = loadIssueReports()
  const lines = ['# 題庫問題回報', '', `> 匯出於 ${new Date().toLocaleString()},共 ${reports.length} 筆`, '']
  for (const r of reports) {
    lines.push(`## ${r.questionId}`)
    lines.push('')
    lines.push(`- 回報時間:${new Date(r.reportedAt).toLocaleString()}`)
    lines.push(`- 題幹:${r.stem}`)
    lines.push(`- 回報備註:${r.note || '(未填寫)'}`)
    lines.push('')
    lines.push('---')
    lines.push('')
  }
  const blob = new Blob([lines.join('\n')], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Report-Issue.md'
  a.click()
  URL.revokeObjectURL(url)
}
