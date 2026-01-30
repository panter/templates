import { CallToActionBlock } from "@/payload/blocks/CallToAction/Component"
import { ContentBlock } from "@/payload/blocks/Content/Component"
import { MediaBlock } from "@/payload/blocks/MediaBlock/Component"
import { LandingHeroBlock } from "@/payload/blocks/LandingHero/Component"
import { LandingProblemBlock } from "@/payload/blocks/LandingProblem/Component"
import { LandingSolutionBlock } from "@/payload/blocks/LandingSolution/Component"
import { LandingHowItWorksBlock } from "@/payload/blocks/LandingHowItWorks/Component"
import { LandingAudienceBlock } from "@/payload/blocks/LandingAudience/Component"
import { LandingVisionBlock } from "@/payload/blocks/LandingVision/Component"
import { LandingImpactBlock } from "@/payload/blocks/LandingImpact/Component"
import { LandingCtaBlock } from "@/payload/blocks/LandingCta/Component"
import type { Page } from "@/payload-types"
import { Fragment } from "react"
import { BannerBlock } from "./Banner/Component"

export function RenderBlocks({ blocks }: { blocks: Page["layout"][0][] }) {
  return (
    <Fragment>
      {blocks.map((block, index) => {
        if (!(block.blockType in blockComponents)) {
          return null
        }

        const Block = blockComponents[block.blockType]

        return (
          <div key={index}>
            {/* @ts-expect-error block props should be correct at this point */}
            <Block {...block} />
          </div>
        )
      })}
    </Fragment>
  )
}

const blockComponents = {
  banner: BannerBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  mediaBlock: MediaBlock,
  landingHero: LandingHeroBlock,
  landingProblem: LandingProblemBlock,
  landingSolution: LandingSolutionBlock,
  landingHowItWorks: LandingHowItWorksBlock,
  landingAudience: LandingAudienceBlock,
  landingVision: LandingVisionBlock,
  landingImpact: LandingImpactBlock,
  landingCta: LandingCtaBlock,
}
