import type { Locale } from "@/i18n"
import type { PrimitiveType } from "react-intl"
import { createIntl } from "react-intl"
import type messages from "./messages/en.json"

type NamespaceKeys = keyof typeof messages
type MessageKeys<NamespaceKey extends NamespaceKeys> = keyof (typeof messages)[NamespaceKey]

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
    return await import(`./messages/${locale}.json`).then((module) => module[namespace])
  } catch {
    return {}
  }
}
