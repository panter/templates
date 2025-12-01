import { hasLocale as _hasLocale } from "next-intl"
import { ALL_LOCALE_CODES, DEFAULT_LOCALE } from "./config"

export type Locale = (typeof ALL_LOCALE_CODES)[number]

export function getLocale(possibleLocale: string | null | undefined) {
  if (!_hasLocale(ALL_LOCALE_CODES, possibleLocale)) {
    return DEFAULT_LOCALE
  }
  return possibleLocale
}

export function hasLocale(possibleLocale: string | null | undefined) {
  return _hasLocale(ALL_LOCALE_CODES, possibleLocale)
}

export async function getLocaleFromParams(params: Promise<{ locale: string | null | undefined }>) {
  const { locale: possibleLocale } = await params
  return getLocale(possibleLocale)
}
