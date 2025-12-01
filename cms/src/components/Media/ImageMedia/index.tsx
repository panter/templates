"use client"

import { cn } from "@/utils/ui"
import { getMediaUrl } from "@/utils/getMediaUrl"
import type { StaticImageData } from "next/image"
import NextImage from "next/image"
import type { Props as MediaProps } from ".."

export function ImageMedia({
  alt: altFromProps,
  fill,
  pictureClassName,
  imgClassName,
  priority,
  resource,
  size: sizeFromProps,
  src: srcFromProps,
  loading: loadingFromProps,
}: MediaProps) {
  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ""
  let placeholder: string | undefined

  if (!src && resource && typeof resource === "object") {
    const { alt: altFromResource, height: fullHeight, url, width: fullWidth } = resource

    width = fullWidth!
    height = fullHeight!
    alt = altFromResource || ""
    placeholder = resource.placeholder ?? undefined

    const cacheTag = resource.updatedAt

    src = getMediaUrl(url, cacheTag)
  }

  const loading = loadingFromProps || (!priority ? "lazy" : undefined)

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
        .join(", ")

  return (
    <picture className={cn(pictureClassName)}>
      <NextImage
        alt={alt || ""}
        className={cn(imgClassName)}
        fill={fill}
        height={!fill ? height : undefined}
        placeholder={placeholder ? "blur" : "empty"}
        blurDataURL={placeholder}
        priority={priority}
        quality={100}
        loading={loading}
        sizes={sizes}
        src={src}
        width={!fill ? width : undefined}
      />
    </picture>
  )
}

const breakpoints = {
  "3xl": 1920,
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
}
