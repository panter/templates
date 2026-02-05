import type { Locale } from "@/i18n"
import { ALL_LOCALE_CODES } from "@/i18n/config"
import type { TranslateConfig } from "@panter/translate"
import { List } from "./List"

export default async function AdminView({ translateConfig }: { translateConfig: TranslateConfig }) {
  const jsonMessages = await getJsonMessages()
  const apiMessages = await getApiMessages(translateConfig)
  const currentMessages = {} as Record<`${Locale}.${string}`, string>

  for (const [locale, messages] of Object.entries(jsonMessages)) {
    for (const [key, message] of Object.entries(messages)) {
      currentMessages[`${locale as Locale}.${key}`] = message
    }
  }

  for (const [locale, messages] of Object.entries(apiMessages)) {
    for (const [key, message] of Object.entries(messages)) {
      currentMessages[`${locale as Locale}.${key}`] = message
    }
  }

  return (
    <List
      currentMessages={currentMessages}
      apiUrl={translateConfig.apiUrl ?? DEFAULT_API_URL}
      project={translateConfig.project}
    />
  )
}

async function getJsonMessages() {
  const jsonMessages = Object.fromEntries(
    (
      await Promise.all(
        ALL_LOCALE_CODES.map((locale) =>
          import(`@/i18n/messages/${locale}.json`).then((m) => ({
            locale,
            messages: flatten(m.default),
          })),
        ),
      )
    ).map(({ locale, messages }) => [locale, messages] as const),
  ) as Record<Locale, Record<string, string>>

  return jsonMessages
}

async function getApiMessages(translateConfig: TranslateConfig) {
  const messages = await getMessages(translateConfig.apiUrl ?? DEFAULT_API_URL, {
    project: translateConfig.project,
  }).then((res) => (res.success ? res.messages : {}))

  const result = Object.fromEntries(
    Object.entries(messages).map(([locale, messages]) => [locale, flatten(messages)] as const),
  ) as Record<Locale, Record<string, string>>

  return result
}

// TODO: expose in @panter/translate so we don't copy?
async function getMessages(apiUrl: string, data: { project: string }) {
  try {
    const params = new URLSearchParams(data)
    const response = await fetch(`${apiUrl}/api/messages/all?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      return { success: false as const }
    }

    return {
      success: true as const,
      messages: {
        ...((await response.json()) as TopLevelMessages),
      },
    }
  } catch (error) {
    console.error("error fetching messages:", error)
    return { success: false as const }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flatten(obj: any, parent: string = "", res: any = {}): Record<string, string> {
  for (const key in obj) {
    const propName = parent ? parent + "." + key : key
    if (typeof obj[key] == "object") {
      flatten(obj[key], propName, res)
    } else {
      res[propName] = obj[key]
    }
  }
  return res
}

// TODO: expose in @panter/translate so we don't copy?
type Messages = {
  [key: string]: string | Messages
}

// TODO: expose in @panter/translate so we don't copy?
type TopLevelMessages = {
  [locale: string]: Messages
}

// TODO: expose in @panter/translate so we don't copy?
const DEFAULT_API_URL = "https://translate.panter.ch"
