import { cn } from "@/utils/ui"
import { Skeleton } from "@/components/ui/skeleton"

type FieldConfig = {
  type?: "input" | "textarea" | "select"
  width?: string | number
}

type SkeletonFormProps = React.ComponentProps<"div"> & {
  fields?: number | FieldConfig[]
  showLabels?: boolean
  showButton?: boolean
  buttonWidth?: string | number
}

function SkeletonForm({
  className,
  fields = 4,
  showLabels = true,
  showButton = true,
  buttonWidth = 120,
  ...props
}: SkeletonFormProps) {
  const fieldConfigs: FieldConfig[] =
    typeof fields === "number"
      ? Array.from({ length: fields }).map(() => ({ type: "input" }))
      : fields

  const getFieldHeight = (type: FieldConfig["type"]) => {
    switch (type) {
      case "textarea":
        return 80
      case "select":
      case "input":
      default:
        return 36
    }
  }

  return (
    <div
      data-slot="skeleton-form"
      className={cn("flex flex-col gap-4", className)}
      role="status"
      aria-label="Loading form"
      {...props}
    >
      {fieldConfigs.map((config, index) => (
        <div key={index} className="flex flex-col gap-2">
          {showLabels && <Skeleton size="sm" width="30%" />}
          <Skeleton
            className="rounded-md"
            width={config.width ?? "100%"}
            height={getFieldHeight(config.type)}
          />
        </div>
      ))}

      {showButton && (
        <div className="pt-2">
          <Skeleton size="lg" width={buttonWidth} className="rounded-md" />
        </div>
      )}

      <span className="sr-only">Loading form...</span>
    </div>
  )
}

export { SkeletonForm }
