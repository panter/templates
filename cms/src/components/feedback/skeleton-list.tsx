import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/ui"
import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonText } from "./skeleton-text"

const skeletonListVariants = cva("flex flex-col", {
  variants: {
    spacing: {
      tight: "gap-2",
      normal: "gap-4",
      relaxed: "gap-6",
    },
  },
  defaultVariants: {
    spacing: "normal",
  },
})

type SkeletonListProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonListVariants> & {
    items?: number
    showAvatar?: boolean
    showDescription?: boolean
    avatarSize?: "sm" | "md" | "lg"
  }

function SkeletonList({
  className,
  spacing,
  items = 3,
  showAvatar = false,
  showDescription = true,
  avatarSize = "md",
  ...props
}: SkeletonListProps) {
  const avatarSizeMap = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
  }

  return (
    <div
      data-slot="skeleton-list"
      className={cn(skeletonListVariants({ spacing }), className)}
      role="status"
      aria-label="Loading list"
      {...props}
    >
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-start gap-3">
          {showAvatar && <Skeleton variant="circular" className={avatarSizeMap[avatarSize]} />}
          <div className="flex-1 space-y-2">
            <Skeleton size="md" width="60%" />
            {showDescription && <SkeletonText lines={2} lineHeight="xs" />}
          </div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { SkeletonList, skeletonListVariants }
