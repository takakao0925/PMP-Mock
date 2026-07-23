// 題目可翻譯欄位一律使用 { en, zh } 結構。
// PMP 正式考試以英文為主,考生可選一個輔助語言,考試中每題都能切換 — 此處輔助語言固定為繁體中文。

export const DEFAULT_LANG = 'en'
export const SECONDARY_LANG = 'zh'

export function pickText(localized, lang) {
  if (localized == null) return ''
  if (typeof localized === 'string') return localized
  return localized[lang] ?? localized[DEFAULT_LANG] ?? localized[SECONDARY_LANG] ?? ''
}
