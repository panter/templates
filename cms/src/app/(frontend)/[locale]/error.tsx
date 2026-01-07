"use client"

import { useEffect } from "react"

import { ErrorDisplay } from "@/components/feedback/error-display"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Route error:", error)
  }, [error])

  return (
    <main className="container flex flex-1 items-center justify-center py-16">
      <ErrorDisplay
        size="full"
        error={error}
        onRetry={reset}
        title="Something went wrong"
        description="We encountered an unexpected error. Please try again or return to the home page."
      />
    </main>
  )
}
