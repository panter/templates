import { getLocale } from "@/i18n"
import type { CollectionSlug, PayloadRequest } from "payload"

const collectionPrefixMap = {
  pages: "",
} satisfies Partial<Record<CollectionSlug, string>>

export const generatePreviewPath = ({
  collection,
  slug,
  req,
}: {
  collection: keyof typeof collectionPrefixMap
  slug: string | null | undefined
  req: PayloadRequest
}) => {
  // empty string in slug "" is allowed (e.g. homepage), but null/undefined is not
  if (slug === undefined || slug === null) {
    return null
  }

  const locale = getLocale(req.locale)

  // Encode to support slugs with special characters
  const encodedSlug = encodeURIComponent(slug)

  const encodedParams = new URLSearchParams({
    slug: encodedSlug,
    collection,
    path: "/" + [locale, collectionPrefixMap[collection], encodedSlug].filter(Boolean).join("/"),
    previewSecret: process.env.PREVIEW_SECRET || "",
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
