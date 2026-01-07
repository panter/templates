"use client"

import { useEffect } from "react"

import { ErrorDisplay } from "@/components/feedback/error-display"

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-background text-foreground flex min-h-screen items-center justify-center antialiased">
        <ErrorDisplay
          size="full"
          error={error}
          onRetry={reset}
          title="Critical error"
          description="A critical error occurred. Please refresh the page or return to the home page."
        />
      </body>
    </html>
  )
}
