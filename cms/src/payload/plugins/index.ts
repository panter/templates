import type { Plugin } from "payload"
import { seoPlugin } from "./seo"
import { authPlugin } from "./auth"
import { mcp } from "./mcp"

export const plugins: Plugin[] = [seoPlugin, authPlugin, mcp]
