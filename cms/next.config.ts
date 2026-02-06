import { translateConfig } from "@/i18n/config"
import { getURL } from "@/utils/getURL"
import { createNextIntlPlugin } from "@panter/translate/next-intl/plugin"
import { withPayload } from "@payloadcms/next/withPayload"
import withPlaiceholder from "@plaiceholder/next"
import type { NextConfig } from "next"

const SERVER_URL = new URL(getURL())

const nextConfig = {
  images: {
    remotePatterns: [SERVER_URL].map(({ protocol, hostname, port }) => ({
      protocol: protocol.slice(0, -1) as "http" | "https",
      hostname,
      port,
      pathname: "/**",
    })),
    qualities: [25, 50, 75, 100],
  },
  reactStrictMode: true,
  experimental: {
    useCache: true,
  },
} satisfies NextConfig

const withNextIntl = createNextIntlPlugin(translateConfig)

export default withPlaiceholder(
  withPayload(withNextIntl(nextConfig), { devBundleServerPackages: false }),
)
