import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/ui"

const skeletonVariants = cva("animate-pulse rounded-md bg-accent", {
  variants: {
    variant: {
      default: "",
      circular: "rounded-full",
      rectangular: "rounded-none",
    },
    size: {
      xs: "h-3",
      sm: "h-4",
      md: "h-6",
      lg: "h-8",
      xl: "h-12",
      "2xl": "h-16",
      full: "h-full w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type SkeletonProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonVariants> & {
    width?: string | number
    height?: string | number
  }

function Skeleton({ className, variant, size, width, height, style, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ variant, size }), className)}
      style={{
        width,
        height,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  )
}

export { Skeleton, skeletonVariants }
