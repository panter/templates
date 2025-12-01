import type { Plugin } from "payload"
import { seoPlugin } from "./seo"
import { authPlugin } from "./auth"

export const plugins: Plugin[] = [seoPlugin, authPlugin]
