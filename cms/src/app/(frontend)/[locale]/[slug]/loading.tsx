import { SkeletonText } from "@/components/feedback/skeleton-text"

export default function PageLoading() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <div className="bg-accent h-10 w-3/4 animate-pulse rounded-md" />
          <div className="bg-accent h-5 w-1/2 animate-pulse rounded-md" />
        </div>
        <SkeletonText lines={6} spacing="normal" />
        <SkeletonText lines={4} spacing="normal" />
        <SkeletonText lines={5} spacing="normal" />
      </div>
    </main>
  )
}
