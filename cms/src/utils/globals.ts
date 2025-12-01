import { revalidateTag, unstable_cacheTag } from "next/cache"
import type { GlobalSlug, Payload } from "payload"
import { getPayload } from "../lib/getPayload"

export async function getCachedGlobal(slug: GlobalSlug, depth = 0) {
  "use cache"
  unstable_cacheTag(`global-${slug}`)

  const payload = await getPayload()
  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

export function revalidateGlobal(slug: GlobalSlug, payload: Payload) {
  payload.logger.info({ slug }, "revalidating global")

  revalidateTag(`global-${slug}`)
}
