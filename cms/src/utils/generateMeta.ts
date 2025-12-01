import type { Metadata } from "next"
import type { Media, Page } from "../payload-types"
import { createOpenGraph } from "./createOpenGraph"

export const generateMeta = async (args: { doc: Partial<Page> | null }): Promise<Metadata> => {
  const { doc } = args

  const ogImage = getImageURL(doc?.meta?.image)
  const title = doc?.meta?.title ?? ""

  return {
    description: doc?.meta?.description,
    openGraph: createOpenGraph({
      description: doc?.meta?.description || "",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: doc?.slug ?? "/",
    }),
    title,
  }
}

const getImageURL = (image?: Media | number | null) => {
  if (!image || typeof image === "number") {
    return null
  }

  return image.sizes?.og?.url || image?.url
}
