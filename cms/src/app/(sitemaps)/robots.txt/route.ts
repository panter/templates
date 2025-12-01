import { getURL } from "@/utils/getURL"

export async function GET() {
  const baseUrl = getURL()

  return new Response(
    `User-agent: *
Disallow: /admin/*
Sitemap: ${baseUrl}/sitemap.xml
`,
  )
}
