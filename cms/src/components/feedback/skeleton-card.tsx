import { cn } from "@/utils/ui"
import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonText } from "./skeleton-text"

type SkeletonCardProps = React.ComponentProps<"div"> & {
  showImage?: boolean
  imageAspectRatio?: number
  showHeader?: boolean
  showDescription?: boolean
  showFooter?: boolean
  descriptionLines?: number
}

function SkeletonCard({
  className,
  showImage = true,
  imageAspectRatio = 16 / 9,
  showHeader = true,
  showDescription = true,
  showFooter = false,
  descriptionLines = 2,
  ...props
}: SkeletonCardProps) {
  return (
    <div
      data-slot="skeleton-card"
      className={cn("bg-card flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)}
      role="status"
      aria-label="Loading card"
      {...props}
    >
      {showImage && (
        <div className="px-6">
          <Skeleton className="w-full rounded-lg" style={{ aspectRatio: imageAspectRatio }} />
        </div>
      )}

      {showHeader && (
        <div className="flex flex-col gap-2 px-6">
          <Skeleton size="lg" width="60%" />
          <Skeleton size="sm" width="40%" />
        </div>
      )}

      {showDescription && (
        <div className="px-6">
          <SkeletonText lines={descriptionLines} />
        </div>
      )}

      {showFooter && (
        <div className="flex items-center gap-2 px-6">
          <Skeleton size="lg" width={100} />
          <Skeleton size="lg" width={80} />
        </div>
      )}

      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { SkeletonCard }
