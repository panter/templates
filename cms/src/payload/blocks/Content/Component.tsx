import RichText from "@/components/RichText"
import { cn } from "@/utils/ui"
import type { ContentBlock as ContentBlockProps } from "@/payload-types"
import { CMSLink } from "../../../components/Link"

export function ContentBlock(props: ContentBlockProps) {
  const { columns } = props

  const colsSpanClasses = {
    full: "6",
    twoThirds: "4",
    half: "3",
    oneThird: "2",
  }

  return (
    <div className="my-8">
      <div className="grid grid-cols-6 gap-x-16 gap-y-8">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <div className={cn(`col-span-6 md:col-span-${colsSpanClasses[size!]}`)} key={index}>
                {richText && <RichText data={richText} enableGutter={false} />}
                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
