import { RenderBlocks } from "@/payload/blocks/RenderBlocks"
import { DraftIndicator } from "@/components/DraftIndicator"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { LandingFooterBlock } from "@/payload/globals/LandingFooter/Component"
import { RenderHero } from "@/payload/heros/RenderHero"
import type { Locale } from "@/i18n"
import { getLocaleFromParams } from "@/i18n"
import { generateMeta } from "@/utils/generateMeta"
import { getPayload } from "@/lib/getPayload"
import { getCachedGlobal } from "@/utils/globals"
import type { LandingFooter } from "@/payload-types"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { cache } from "react"

export default async function HomePage({ params }: HomePageProps) {
  const { isEnabled: draft } = await draftMode()
  const locale = await getLocaleFromParams(params)
  const page = await queryHomePage({ locale })

  if (!page) {
    return (
      <main>
        <p>No home page found. Create a page with an empty slug in the admin panel.</p>
      </main>
    )
  }

  const { hero, layout } = page
  const landingFooter = (await getCachedGlobal("landing-footer")) as LandingFooter

  return (
    <main>
      {draft && <LivePreviewListener />}
      {page._status === "draft" && <DraftIndicator />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
      {landingFooter && <LandingFooterBlock {...landingFooter} />}
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
