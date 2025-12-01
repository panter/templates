import configPromise from "@payload-config"
import { getPayloadAuth } from "payload-auth/better-auth"
import { getPayload as _getPayload } from "payload"
import type { ConstructedBetterAuthPluginOptions } from "./auth/options"

export const getPayload = async () =>
  getPayloadAuth<ConstructedBetterAuthPluginOptions>(configPromise)
