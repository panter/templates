import type { Plugin } from "payload"
import { seoPlugin } from "./seo"
import { authPlugin } from "./auth"
import { translatePlugin } from "./translate"

export const plugins: Plugin[] = [seoPlugin, authPlugin, translatePlugin]
