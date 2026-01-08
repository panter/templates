import { betterAuthPlugin } from "payload-auth/better-auth"
import { betterAuthPluginOptions } from "@/lib/auth/options"

export const authPlugin = betterAuthPlugin(betterAuthPluginOptions)
