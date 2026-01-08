import { RenderBlocks } from "@/payload/blocks/RenderBlocks"
import { DraftIndicator } from "@/components/DraftIndicator"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { Typography } from "@/components/ui/typography"
import { RenderHero } from "@/payload/heros/RenderHero"
import type { Locale } from "@/i18n"
import { getLocaleFromParams } from "@/i18n"
import { generateMeta } from "@/utils/generateMeta"
import { getPayload } from "@/lib/getPayload"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { cache } from "react"

export default async function HomePage({ params }: HomePageProps) {
  const { isEnabled: draft } = await draftMode()
  const locale = await getLocaleFromParams(params)
  const page = await queryHomePage({ locale })

  if (!page) {
    return (
      <main className="grid flex-1 place-content-center py-4 md:py-8">
        <article className="container">
          <div className="text-center">
            <Typography variant="h1" className="mb-4">
              Welcome!
            </Typography>
            <div className="max-w-md">
              <Typography variant="muted">No homepage has been created yet.</Typography>
              <Typography variant="muted">
                Create a page with an empty slug in the CMS to set up your homepage.
              </Typography>
            </div>
          </div>
        </article>
      </main>
    )
  }

  const { hero, layout } = page

  return (
    <main className="py-4 md:py-8">
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
