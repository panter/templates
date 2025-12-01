import { ALL_LOCALE_CODES } from "@/i18n/config"
import { getPayload } from "@/lib/getPayload"
import { getURL } from "@/utils/getURL"
import type { ISitemapField } from "next-sitemap"
import { getServerSideSitemap } from "next-sitemap"
import { unstable_cacheTag } from "next/cache"

export async function GET() {
  const defaultSitemap = [
    // ... add static routes here if needed ...
  ] satisfies ISitemapField[]

  const sitemapData = [await getPagesSitemap(), defaultSitemap].flat()

  return getServerSideSitemap(sitemapData)
}

async function getPagesSitemap() {
  "use cache"
  unstable_cacheTag("pages-sitemap")

  const payload = await getPayload()

  const results = await payload.find({
    collection: "pages",
    overrideAccess: false,
    draft: false,
    depth: 0,
    limit: 1000,
    pagination: false,
    where: {
      _status: {
        equals: "published",
      },
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  const baseUrl = getURL()

  return results.docs.map(
    (page) =>
      ({
        loc: [baseUrl, page?.slug].filter(Boolean).join("/"),
        lastmod: page.updatedAt,
        alternateRefs: ALL_LOCALE_CODES.map((locale) => ({
          href: [baseUrl, locale, page?.slug].filter(Boolean).join("/"),
          hreflang: locale,
        })),
      }) satisfies ISitemapField,
  )
}
