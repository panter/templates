import { Skeleton } from "@/components/ui/skeleton"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

type SkeletonEmptyProps = React.ComponentProps<typeof Empty> & {
  avatarCount?: number
  title?: string
  description?: string
}

function SkeletonEmpty({
  avatarCount = 3,
  title = "No items yet",
  description = "Items will appear here once they are added.",
  ...props
}: SkeletonEmptyProps) {
  return (
    <Empty {...props}>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2">
            {Array.from({ length: avatarCount }).map((_, index) => (
              <Skeleton key={index} variant="circular" className="ring-background size-12 ring-2" />
            ))}
          </div>
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export { SkeletonEmpty }
