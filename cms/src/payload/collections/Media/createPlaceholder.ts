import type { Media } from "@/payload-types"
import type { CollectionBeforeChangeHook } from "payload"
import { getPlaiceholder } from "plaiceholder"

export const createPlaceholder: CollectionBeforeChangeHook<Media> = async ({ data, req }) => {
  if (!req.file) return data

  req.payload.logger.info("creating placeholder")

  const { base64: placeholder } = await getPlaiceholder(req.file.data)

  req.payload.logger.info({ placeholder }, "placeholder created")

  return {
    ...data,
    placeholder,
  }
}
