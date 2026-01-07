import "@panter/translate/style.css"
import "./globals.css"

import { Footer } from "@/Footer/Component"
import { Header } from "@/Header/Component"
import { ThemeProvider } from "@/components/theme-provider"
import { hasLocale } from "@/i18n"
import { ALL_LOCALE_CODES, translateConfig } from "@/i18n/config"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { createOpenGraph } from "@/utils/createOpenGraph"
import { getURL } from "@/utils/getURL"
import { NextIntlClientProvider } from "@panter/translate/next-intl/provider"
import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import type { PropsWithChildren } from "react"

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params

  if (!hasLocale(locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={cn(fontSans.variable, "flex min-h-screen flex-col font-sans antialiased")}>
        <ThemeProvider>
          <NextIntlClientProvider config={translateConfig}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return ALL_LOCALE_CODES.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  openGraph: createOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
}
