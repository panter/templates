import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/ui"
import { Skeleton } from "@/components/ui/skeleton"

const skeletonImageVariants = cva("overflow-hidden", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "lg",
  },
})

type SkeletonImageProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonImageVariants> & {
    aspectRatio?: number | "square" | "video" | "portrait"
    width?: string | number
    height?: string | number
  }

function SkeletonImage({
  className,
  rounded,
  aspectRatio = "video",
  width,
  height,
  style,
  ...props
}: SkeletonImageProps) {
  const aspectRatioMap = {
    square: 1,
    video: 16 / 9,
    portrait: 3 / 4,
  }

  const computedAspectRatio =
    typeof aspectRatio === "string" ? aspectRatioMap[aspectRatio] : aspectRatio

  return (
    <Skeleton
      data-slot="skeleton-image"
      className={cn(skeletonImageVariants({ rounded }), className)}
      style={{
        width: width ?? "100%",
        height,
        aspectRatio: !height ? computedAspectRatio : undefined,
        ...style,
      }}
      role="status"
      aria-label="Loading image"
      {...props}
    />
  )
}

export { SkeletonImage, skeletonImageVariants }
