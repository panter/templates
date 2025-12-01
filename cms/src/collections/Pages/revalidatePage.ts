import { ALL_LOCALE_CODES } from "@/i18n/config"
import { revalidatePath, revalidateTag } from "next/cache"
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, Payload } from "payload"
import type { Page } from "../../payload-types"

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === "published") {
    revalidatePageCache(doc, payload)
  }

  if (previousDoc?._status === "published" && doc._status !== "published") {
    revalidatePageCache(previousDoc, payload)
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { payload } }) => {
  revalidatePageCache(doc, payload)

  return doc
}

function revalidatePageCache({ slug: pageSlug }: Pick<Page, "slug">, payload: Payload) {
  const slug = pageSlug ?? ""

  payload.logger.info({ slug }, "revalidating page")

  for (const locale of ALL_LOCALE_CODES) {
    const path = `/${locale}/${slug}`
    revalidatePath(path)
  }
  revalidateTag("pages-sitemap")
}
