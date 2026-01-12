import { CookieBanner } from "@/components/CookieBanner"
import { ConsentManagerDialog, ConsentManagerProvider } from "@c15t/nextjs"
import { baseTranslations } from "@c15t/translations"
import { getLocale } from "next-intl/server"
import type { PropsWithChildren } from "react"

export async function CookieConsentProvider({ children }: PropsWithChildren) {
  const currentLocale = await getLocale()

  return (
    <ConsentManagerProvider
      options={{
        consentCategories: [
          "necessary",
          "marketing",
          // "experience",
          // "functionality",
          // "measurement",
        ],
        translations: {
          defaultLanguage: currentLocale,
          disableAutoLanguageSwitch: true,
          translations: baseTranslations,
        },
        mode: "offline",
        // if you provide Google Tag Manager ID
        // it will automatically enable/disable GTM based on user's conset settings
        ...(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
          ? {
              unstable_googleTagManager: {
                id: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
              },
            }
          : {}),
      }}
    >
      <CookieBanner
        translations={{
          ...baseTranslations[currentLocale].cookieBanner,
          ...baseTranslations[currentLocale].common,
        }}
      />
      <ConsentManagerDialog />
      {children}
    </ConsentManagerProvider>
  )
}
