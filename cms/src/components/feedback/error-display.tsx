"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, RefreshCw, Home, ArrowLeft } from "lucide-react"
import { cn } from "@/utils/ui"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const errorDisplayVariants = cva("flex flex-col items-center justify-center text-center", {
  variants: {
    size: {
      sm: "gap-3 p-4",
      md: "gap-4 p-6",
      lg: "gap-6 p-8 md:p-12",
      full: "gap-6 p-8 md:p-12 min-h-[50vh]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

type ErrorDisplayProps = React.ComponentProps<"div"> &
  VariantProps<typeof errorDisplayVariants> & {
    title?: string
    description?: string
    error?: Error & { digest?: string }
    showIcon?: boolean
    showRetry?: boolean
    showHome?: boolean
    showBack?: boolean
    onRetry?: () => void
    onBack?: () => void
    retryLabel?: string
    homeLabel?: string
    backLabel?: string
  }

function ErrorDisplay({
  className,
  size,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  error,
  showIcon = true,
  showRetry = true,
  showHome = true,
  showBack = false,
  onRetry,
  onBack,
  retryLabel = "Try again",
  homeLabel = "Go home",
  backLabel = "Go back",
  ...props
}: ErrorDisplayProps) {
  return (
    <div
      data-slot="error-display"
      className={cn(errorDisplayVariants({ size }), className)}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      {showIcon && (
        <div className="bg-destructive/10 text-destructive flex size-12 items-center justify-center rounded-full">
          <AlertCircle className="size-6" />
        </div>
      )}

      <div className="flex max-w-md flex-col gap-2">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
        {error?.digest && (
          <p className="text-muted-foreground font-mono text-xs">Error ID: {error.digest}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {showBack && onBack && (
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft />
            {backLabel}
          </Button>
        )}
        {showRetry && onRetry && (
          <Button variant="outline" onClick={onRetry}>
            <RefreshCw />
            {retryLabel}
          </Button>
        )}
        {showHome && (
          <Button asChild>
            <Link href="/">
              <Home />
              {homeLabel}
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export { ErrorDisplay, errorDisplayVariants }
