"use client"

import { useEffect } from "react"

import { ErrorDisplay } from "@/components/feedback/error-display"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function PageError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Page error:", error)
  }, [error])

  return (
    <main className="container flex flex-1 items-center justify-center py-16">
      <ErrorDisplay
        size="full"
        error={error}
        onRetry={reset}
        title="Page error"
        description="There was an error loading this page. Please try again or return to the home page."
      />
    </main>
  )
}
