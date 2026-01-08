import { RenderBlocks } from "@/blocks/RenderBlocks"
import { DraftIndicator } from "@/components/DraftIndicator"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { RenderHero } from "@/heros/RenderHero"
import type { Locale } from "@/i18n"
import { getLocaleFromParams } from "@/i18n"
import { getPayload } from "@/lib/getPayload"
import { generateMeta } from "@/utils/generateMeta"
import { getSlugFromParams } from "@/utils/getSlug"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { cache } from "react"

export default async function Page({ params }: PageProps) {
  const { isEnabled: draft } = await draftMode()
  const slug = await getSlugFromParams(params)
  const locale = await getLocaleFromParams(params)
  const page = await queryPageBySlug({ slug, locale })

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  return (
    <main className="py-4 md:py-8">
      <article className="container">
        {draft && <LivePreviewListener />}
        {page._status === "draft" && <DraftIndicator />}
        <h1>{page.title}</h1>
        <RenderHero {...hero} />
        <RenderBlocks blocks={layout} />
      </article>
    </main>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = await getSlugFromParams(params)
  const locale = await getLocaleFromParams(params)
  const page = await queryPageBySlug({ slug, locale })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale: Locale }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload()

  const result = await payload.find({
    collection: "pages",
    draft,
    limit: 1,
    locale,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] ?? null
})

export async function generateStaticParams() {
  // all pages will be statically generated (limit 1000)
  const payload = await getPayload()
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs.map(({ slug }) => ({ slug: slug ?? "" }))
  return params
}

type PageProps = {
  params: Promise<{
    slug?: string
    locale: string
  }>
}
