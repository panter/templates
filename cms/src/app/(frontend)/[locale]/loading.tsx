import { LoadingOverlay } from "@/components/feedback/loading-overlay"

export default function Loading() {
  return (
    <main className="container flex flex-1 items-center justify-center py-16">
      <LoadingOverlay variant="inline" spinnerSize="lg" message="Loading..." />
    </main>
  )
}
