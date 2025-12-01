import RichText from "@/components/RichText"
import { cn } from "@/utils/ui"
import type { MediaBlock as MediaBlockProps } from "@/payload-types"
import { collectionOrNull } from "@/utils/collections"
import type { StaticImageData } from "next/image"
import { Media } from "../../components/Media"

export function MediaBlock({
  captionClassName,
  className,
  enableGutter = true,
  imgClassName,
  media,
  staticImage,
}: MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
}) {
  const caption = collectionOrNull(media)?.caption

  return (
    <div
      className={cn(
        "",
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn("border border-border rounded-[0.8rem]", imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div className={cn("mt-6", captionClassName)}>
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
