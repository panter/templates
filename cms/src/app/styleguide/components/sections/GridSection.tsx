"use client"

import { useBreakpoint } from "@/hooks/use-breakpoint"
import { useEffect, useState } from "react"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

const containerSizes = [
  { name: "sm", variable: "--container-sm", value: "40rem (640px)" },
  { name: "md", variable: "--container-md", value: "48rem (768px)" },
  { name: "lg", variable: "--container-lg", value: "64rem (1024px)" },
  { name: "xl", variable: "--container-xl", value: "80rem (1280px)" },
  { name: "max-width", variable: "--container-max-width", value: "90rem (1440px)" },
  { name: "2xl", variable: "--container-2xl", value: "96rem (1536px)" },
]

const breakpoints = [
  { name: "sm", value: "640px" },
  { name: "md", value: "768px" },
  { name: "lg", value: "1024px" },
  { name: "xl", value: "1280px" },
  { name: "2xl", value: "1536px" },
]

export function GridSection() {
  const { breakpoint } = useBreakpoint()
  const [viewportWidth, setViewportWidth] = useState<number | null>(null)

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth)
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <SectionWrapper
      id="grid"
      title="Grid & Layout"
      description="12-column responsive grid system with container widths."
    >
      <Subsection title="Current Breakpoint">
        <div className="border-border bg-muted/30 flex items-center gap-4 rounded-lg border p-4">
          <div className="flex gap-2">
            {breakpoints.map(({ name }) => (
              <div
                key={name}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  breakpoint === name
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {name}
              </div>
            ))}
          </div>
          <span className="text-muted-foreground text-sm">
            Viewport: <span className="font-mono">{viewportWidth ?? "—"}px</span>
          </span>
        </div>
      </Subsection>

      <Subsection title="12-Column Grid">
        <div className="space-y-4">
          <div className="grid-layout">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-primary/10 col-span-1 flex h-12 items-center justify-center rounded font-mono text-xs"
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Column span examples:</p>
            <div className="grid-layout">
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs md:col-span-6">
                col-span-6
              </div>
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs md:col-span-6">
                col-span-6
              </div>
            </div>
            <div className="grid-layout">
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs">
                col-span-4
              </div>
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs">
                col-span-4
              </div>
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs">
                col-span-4
              </div>
            </div>
            <div className="grid-layout">
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs md:col-span-3">
                col-span-3
              </div>
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs md:col-span-6">
                col-span-6
              </div>
              <div className="bg-primary/10 col-span-4 flex h-12 items-center justify-center rounded text-xs md:col-span-3">
                col-span-3
              </div>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="Container Widths">
        <div className="space-y-3">
          {containerSizes.map(({ name, value }) => (
            <div key={name} className="flex items-center gap-4">
              <div className="w-24 font-mono text-sm">{name}</div>
              <div className="text-muted-foreground text-sm">{value}</div>
            </div>
          ))}
        </div>
      </Subsection>

      <Subsection title="Container">
        <div className="border-border rounded-lg border border-dashed p-4">
          <div className="bg-primary/10 container rounded-lg py-8 text-center">
            <p className="text-sm">.container</p>
            <p className="text-muted-foreground mt-1 text-xs">
              max-width: var(--container-max-width) with responsive padding
            </p>
          </div>
        </div>
      </Subsection>

      <Subsection title="Prose Container">
        <div className="border-border rounded-lg border border-dashed p-4">
          <div className="prose-container bg-primary/10 rounded-lg py-8 text-center">
            <p className="text-sm">.prose-container</p>
            <p className="text-muted-foreground mt-1 text-xs">
              max-width: 48rem for comfortable reading
            </p>
          </div>
        </div>
      </Subsection>
    </SectionWrapper>
  )
}
