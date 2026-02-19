import type { Locale } from "@/i18n"
import type { PrimitiveType } from "react-intl"
import { createIntl } from "react-intl"
import type messages from "../i18n/messages/de.json"

type EmailsKey = "emails"
type EmailMessages = (typeof messages)[EmailsKey]

type NamespaceKeys = keyof EmailMessages
type MessageKeys<NamespaceKey extends NamespaceKeys> = keyof EmailMessages[NamespaceKey]

export async function getEmailMessages<NamespaceKey extends NamespaceKeys>(
  locale: Locale,
  namespace: NamespaceKey,
) {
  const messages = await importMessages(locale, namespace)

  const { formatMessage } = createIntl({
    onError: (error) => {
      console.error(error)
    },
    locale,
    messages,
    defaultRichTextElements: {
      // NOTE: if you want to support more rich text elements, add them here
      strong: (chunks) => <strong>{chunks}</strong>,
    },
  })

  type Values = Record<string, PrimitiveType>

  return {
    t: (key: MessageKeys<NamespaceKey>, values?: Values) => {
      return formatMessage({ id: key as string }, values, { ignoreTag: false })
    },
  }
}

async function importMessages(locale: Locale, namespace: NamespaceKeys) {
  try {
    return await import(`../i18n/messages/${locale}.json`).then(
      (module) => module["emails"][namespace],
    )
  } catch {
    return {}
  }
}
