import { getURL } from "@/utils/getURL"
import { seoPlugin as _seoPlugin } from "@payloadcms/plugin-seo"

export const seoPlugin = _seoPlugin({
  generateTitle: ({ doc }) =>
    doc?.title ? `${doc.title} | ${PAGE_TITLE_SUFFIX}` : PAGE_TITLE_SUFFIX,
  generateURL: ({ doc }) => (doc?.slug ? `${getURL()}/${doc.slug}` : getURL()),
})

const PAGE_TITLE_SUFFIX = "Panter Solutions"
