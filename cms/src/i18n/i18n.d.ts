import type { ALL_LOCALE_CODES } from "@/i18n/config"
import type messages from "@/i18n/messages/en.json"

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof ALL_LOCALE_CODES)[number]
    Messages: typeof messages
  }
}
