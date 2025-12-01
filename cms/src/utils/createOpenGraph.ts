import type { Metadata } from "next"
import { getURL } from "./getURL"

// TODO: check this (seems not correct)
const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "An open-source website built with Payload and Next.js.",
  images: [
    {
      url: `${getURL()}/website-template-OG.webp`,
    },
  ],
  siteName: "Payload Website Template",
  title: "Payload Website Template",
}

export const createOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
