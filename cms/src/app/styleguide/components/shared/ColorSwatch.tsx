import { Typography } from "@/components/ui/typography"
import { cn } from "@/utils/ui"

type ColorSwatchProps = {
  name: string
  variable: string
  className?: string
  showForeground?: boolean
}

export function ColorSwatch({ name, variable, className, showForeground }: ColorSwatchProps) {
  return (
    <div className="space-y-2">
      <div
        className={cn("border-border h-16 w-full rounded-lg border", className)}
        style={{ backgroundColor: `var(${variable})` }}
      >
        {showForeground && (
          <div
            className="flex h-full items-center justify-center text-sm font-medium"
            style={{ color: `var(${variable}-foreground)` }}
          >
            Aa
          </div>
        )}
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-muted-foreground font-mono text-xs">{variable}</p>
      </div>
    </div>
  )
}

type ColorSwatchGroupProps = {
  title: string
  colors: Array<{ name: string; variable: string; showForeground?: boolean }>
}

export function ColorSwatchGroup({ title, colors }: ColorSwatchGroupProps) {
  return (
    <div>
      <Typography
        variant="h4"
        className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase"
      >
        {title}
      </Typography>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {colors.map((color) => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </div>
    </div>
  )
}
