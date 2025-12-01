import { defineRouting } from "next-intl/routing"
import { ALL_LOCALE_CODES, DEFAULT_LOCALE } from "./config"

export const routing = defineRouting({
  locales: ALL_LOCALE_CODES,
  defaultLocale: DEFAULT_LOCALE,
})
