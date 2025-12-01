import { getRequestConfig } from "@panter/translate/next-intl/config"
import { getLocale } from "."
import { translateConfig } from "./config"

export default getRequestConfig(translateConfig, async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = getLocale(requested)

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
