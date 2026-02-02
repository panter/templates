import { RenderBlocks } from "@/payload/blocks/RenderBlocks"
import { DraftIndicator } from "@/components/DraftIndicator"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { RenderHero } from "@/payload/heros/RenderHero"
import type { Locale } from "@/i18n"
import { getLocaleFromParams } from "@/i18n"
import { generateMeta } from "@/utils/generateMeta"
import { getPayload } from "@/lib/getPayload"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { cache } from "react"
import { EmptyPage } from "@/components/EmptyPage"

export default async function HomePage({ params }: HomePageProps) {
  const { isEnabled: draft } = await draftMode()
  const locale = await getLocaleFromParams(params)
  const page = await queryHomePage({ locale })

  if (!page) {
    return <EmptyPage />
  }

  const { hero, layout } = page

  return (
    <main>
      <article className="container">
        {draft && <LivePreviewListener />}
        {page._status === "draft" && <DraftIndicator />}
        <RenderHero {...hero} />
        <RenderBlocks blocks={layout} />
      </article>
    </main>
  )
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const page = await queryHomePage({ locale })

  if (!page) {
    return {
      title: "Home",
    }
  }

  return generateMeta({ doc: page })
}

const queryHomePage = cache(async ({ locale }: { locale: Locale }) => {
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
        equals: "",
      },
    },
  })

  return result.docs?.[0] ?? null
})

type HomePageProps = {
  params: Promise<{
    locale: string
  }>
}
