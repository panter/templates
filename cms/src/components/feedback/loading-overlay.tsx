import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/ui"
import { Spinner } from "@/components/ui/spinner"

const loadingOverlayVariants = cva("flex flex-col items-center justify-center gap-4", {
  variants: {
    variant: {
      default: "",
      overlay: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
      inline: "py-12",
      fullscreen: "fixed inset-0 z-[9999] bg-background",
    },
  },
  defaultVariants: {
    variant: "inline",
  },
})

type LoadingOverlayProps = React.ComponentProps<"div"> &
  VariantProps<typeof loadingOverlayVariants> & {
    message?: string
    spinnerSize?: "sm" | "md" | "lg"
  }

function LoadingOverlay({
  className,
  variant,
  message,
  spinnerSize = "md",
  ...props
}: LoadingOverlayProps) {
  const spinnerSizeMap = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  }

  return (
    <div
      data-slot="loading-overlay"
      className={cn(loadingOverlayVariants({ variant }), className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
      {...props}
    >
      <Spinner className={spinnerSizeMap[spinnerSize]} />
      {message && <p className="text-muted-foreground text-sm">{message}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { LoadingOverlay, loadingOverlayVariants }
