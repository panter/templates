"use client"

import { CupSodaIcon } from "lucide-react"
import { useCallback, useSyncExternalStore } from "react"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

const spacingScale = [
  { name: "0", variable: "--space-0" },
  { name: "px", variable: "--space-px" },
  { name: "0.5", variable: "--space-0\\.5" },
  { name: "1", variable: "--space-1" },
  { name: "2", variable: "--space-2" },
  { name: "3", variable: "--space-3" },
  { name: "4", variable: "--space-4" },
  { name: "5", variable: "--space-5" },
  { name: "6", variable: "--space-6" },
  { name: "8", variable: "--space-8" },
  { name: "10", variable: "--space-10" },
  { name: "12", variable: "--space-12" },
  { name: "16", variable: "--space-16" },
  { name: "20", variable: "--space-20" },
  { name: "24", variable: "--space-24" },
]

const semanticSpacing = [
  { name: "xs", variable: "--space-xs", maps: "space-1" },
  { name: "sm", variable: "--space-sm", maps: "space-2" },
  { name: "md", variable: "--space-md", maps: "space-4" },
  { name: "lg", variable: "--space-lg", maps: "space-6" },
  { name: "xl", variable: "--space-xl", maps: "space-8" },
  { name: "2xl", variable: "--space-2xl", maps: "space-12" },
  { name: "3xl", variable: "--space-3xl", maps: "space-16" },
]

const spacingUsage = [
  { num: "1", variable: "--space-1", usage: "Minimal (icons, badges)" },
  { num: "2", variable: "--space-2", usage: "Tight (within components)" },
  { num: "4", variable: "--space-4", usage: "Default (form fields, cards)" },
  { num: "6", variable: "--space-6", usage: "Relaxed (between groups)" },
  { num: "8", variable: "--space-8", usage: "Loose (section gaps)" },
  { num: "12", variable: "--space-12", usage: "Large (major sections)" },
  { num: "16", variable: "--space-16", usage: "Spacious (page sections)" },
]

const iconSizes = [
  { name: "xs", variable: "--icon-xs", value: "12px" },
  { name: "sm", variable: "--icon-sm", value: "16px" },
  { name: "md", variable: "--icon-md", value: "20px" },
  { name: "lg", variable: "--icon-lg", value: "24px" },
  { name: "xl", variable: "--icon-xl", value: "32px" },
  { name: "2xl", variable: "--icon-2xl", value: "40px" },
]

function getComputedValue(variable: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
  if (!value || value === "0") return "0"

  const tempEl = document.createElement("div")
  tempEl.style.position = "absolute"
  tempEl.style.visibility = "hidden"
  tempEl.style.width = value
  document.body.appendChild(tempEl)
  const pixels = tempEl.offsetWidth
  document.body.removeChild(tempEl)

  return `${pixels}px`
}

function subscribeToChanges(callback: () => void) {
  window.addEventListener("storage", callback)
  window.addEventListener("resize", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("resize", callback)
  }
}

function useComputedValues() {
  const getSnapshot = useCallback(() => {
    const values: Record<string, string> = {}
    for (const item of spacingScale) {
      values[item.variable] = getComputedValue(item.variable)
    }
    for (const item of semanticSpacing) {
      values[item.variable] = getComputedValue(item.variable)
    }
    for (const item of spacingUsage) {
      values[item.variable] = getComputedValue(item.variable)
    }
    for (const item of iconSizes) {
      values[item.variable] = getComputedValue(item.variable)
    }
    return JSON.stringify(values)
  }, [])

  const getServerSnapshot = useCallback(() => JSON.stringify({}), [])

  const snapshot = useSyncExternalStore(subscribeToChanges, getSnapshot, getServerSnapshot)
  return JSON.parse(snapshot) as Record<string, string>
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

export function SpacingSection() {
  const hydrated = useHydrated()
  const computedValues = useComputedValues()

  return (
    <SectionWrapper
      id="spacing"
      title="Spacing"
      description="Consistent spacing scale based on configurable base unit."
    >
      <Subsection title="Base Scale">
        <div className="space-y-2">
          {spacingScale.map(({ name, variable }) => (
            <div key={name} className="flex items-center gap-4">
              <div className="text-muted-foreground w-16 font-mono text-sm">{name}</div>
              <div className="bg-primary h-4 rounded" style={{ width: `var(${variable})` }} />
              <div className="text-muted-foreground font-mono text-xs">
                {hydrated ? computedValues[variable] || "—" : "—"}
              </div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Semantic Aliases">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {semanticSpacing.map(({ name, variable, maps }) => (
            <div key={name} className="border-border flex items-center gap-3 rounded-lg border p-3">
              <div
                className="bg-primary shrink-0 rounded"
                style={{
                  width: `var(${variable})`,
                  height: `var(${variable})`,
                }}
              />
              <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-muted-foreground font-mono text-xs">
                  {maps} ({hydrated ? computedValues[variable] || "—" : "—"})
                </p>
              </div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Spacing Usage Guide">
        <p className="text-muted-foreground mb-4 text-sm">
          Use numeric scale: <code className="text-xs">gap-4</code>,{" "}
          <code className="text-xs">space-y-6</code>, <code className="text-xs">p-8</code>
        </p>
        <div className="flex flex-col">
          {spacingUsage.map(({ num, variable, usage }, index) => (
            <div key={num}>
              {index > 0 && (
                <div
                  className="bg-primary/20 relative my-0 flex items-center justify-center"
                  style={{ height: `var(${variable})` }}
                >
                  <div className="border-primary absolute inset-x-0 top-1/2 border-t border-dashed" />
                  <span className="bg-background text-muted-foreground relative z-10 px-2 font-mono text-xs">
                    {hydrated ? computedValues[variable] || "—" : "—"}
                  </span>
                </div>
              )}
              <div className="border-border flex items-center gap-4 rounded-lg border p-4">
                <div
                  className="bg-primary shrink-0 rounded"
                  style={{ width: `var(${variable})`, height: `var(${variable})` }}
                />
                <div className="flex-1">
                  <p className="font-medium">gap-{num}</p>
                  <p className="text-muted-foreground text-sm">{usage}</p>
                </div>
                <code className="text-muted-foreground font-mono text-xs">
                  {hydrated ? computedValues[variable] || "—" : "—"}
                </code>
              </div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Icon Sizes">
        <p className="text-muted-foreground mb-4 text-sm">
          Consistent icon sizes that pair well with text. Use{" "}
          <code className="text-xs">size-icon-sm</code> or inline styles with variables.
        </p>
        <div className="flex flex-wrap items-end gap-6">
          {iconSizes.map(({ name, variable, value }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div
                className="text-foreground flex items-center justify-center"
                style={{ width: `var(${variable})`, height: `var(${variable})` }}
              >
                <CupSodaIcon style={{ width: `var(${variable})`, height: `var(${variable})` }} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-muted-foreground font-mono text-xs">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </Subsection>
    </SectionWrapper>
  )
}
