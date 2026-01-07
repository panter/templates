import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/ui"
import { Skeleton } from "@/components/ui/skeleton"

const skeletonTextVariants = cva("flex flex-col", {
  variants: {
    spacing: {
      tight: "gap-1",
      normal: "gap-2",
      relaxed: "gap-3",
    },
  },
  defaultVariants: {
    spacing: "normal",
  },
})

type SkeletonTextProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonTextVariants> & {
    lines?: number
    lastLineWidth?: "full" | "3/4" | "1/2" | "1/4"
    lineHeight?: "xs" | "sm" | "md" | "lg"
  }

function SkeletonText({
  className,
  spacing,
  lines = 3,
  lastLineWidth = "3/4",
  lineHeight = "sm",
  ...props
}: SkeletonTextProps) {
  const widthMap = {
    full: "100%",
    "3/4": "75%",
    "1/2": "50%",
    "1/4": "25%",
  }

  return (
    <div
      data-slot="skeleton-text"
      className={cn(skeletonTextVariants({ spacing }), className)}
      role="status"
      aria-label="Loading text content"
      {...props}
    >
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          size={lineHeight}
          style={{
            width: index === lines - 1 ? widthMap[lastLineWidth] : "100%",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { SkeletonText, skeletonTextVariants }
