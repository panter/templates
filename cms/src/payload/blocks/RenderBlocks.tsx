import { CallToActionBlock } from "@/payload/blocks/CallToAction/Component"
import { ContentBlock } from "@/payload/blocks/Content/Component"
import { MediaBlock } from "@/payload/blocks/MediaBlock/Component"
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
          <div className="my-16" key={index}>
            {/* @ts-expect-error block props should be correct at this point */}
            <Block {...block} />
          </div>
        )
      })}
    </Fragment>
  )
}

const blockComponents = {
  // NOTE: add mapping of newly added block components here:
  banner: BannerBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  mediaBlock: MediaBlock,
}
