import { cn } from "@/utils/ui"
import { Skeleton } from "@/components/ui/skeleton"

type SkeletonTableProps = React.ComponentProps<"div"> & {
  rows?: number
  columns?: number
  showHeader?: boolean
  columnWidths?: (string | number)[]
}

function SkeletonTable({
  className,
  rows = 5,
  columns = 4,
  showHeader = true,
  columnWidths,
  ...props
}: SkeletonTableProps) {
  const getColumnWidth = (index: number) => {
    if (columnWidths?.[index]) return columnWidths[index]
    if (index === 0) return "40%"
    return `${Math.floor(60 / (columns - 1))}%`
  }

  return (
    <div
      data-slot="skeleton-table"
      className={cn("relative w-full overflow-x-auto", className)}
      role="status"
      aria-label="Loading table"
      {...props}
    >
      <div className="w-full">
        {showHeader && (
          <div className="border-border flex border-b-2">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={`header-${colIndex}`}
                className="flex h-10 items-center px-2 py-2"
                style={{ width: getColumnWidth(colIndex) }}
              >
                <Skeleton size="sm" width="80%" />
              </div>
            ))}
          </div>
        )}

        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="border-border flex border-b">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className="flex items-center p-2"
                style={{ width: getColumnWidth(colIndex) }}
              >
                <Skeleton size="sm" width={colIndex === 0 ? "90%" : "70%"} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Loading table data...</span>
    </div>
  )
}

export { SkeletonTable }
