import type { TranslateConfig } from "@panter/translate"

export const DEFAULT_LOCALE = "en"
export const ALL_LOCALE_CODES = [DEFAULT_LOCALE, "de", "fr", "it"] as const

export const translateConfig: TranslateConfig = {
  messagesPath: "./src/i18n/messages",
  locales: [...ALL_LOCALE_CODES],
  project: "pan-template-cms",
  enabled: process.env.NODE_ENV !== "production",
}
