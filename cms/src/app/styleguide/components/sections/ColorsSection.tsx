import { SectionWrapper } from "../shared/SectionWrapper"
import { ColorSwatchGroup } from "../shared/ColorSwatch"

const baseColors = [
  { name: "Background", variable: "--background" },
  { name: "Foreground", variable: "--foreground" },
  { name: "Card", variable: "--card", showForeground: true },
  { name: "Popover", variable: "--popover", showForeground: true },
  { name: "Primary", variable: "--primary", showForeground: true },
  { name: "Secondary", variable: "--secondary", showForeground: true },
  { name: "Muted", variable: "--muted", showForeground: true },
  { name: "Accent", variable: "--accent", showForeground: true },
  { name: "Destructive", variable: "--destructive" },
]

const semanticColors = [
  { name: "Success", variable: "--success", showForeground: true },
  { name: "Warning", variable: "--warning", showForeground: true },
  { name: "Error", variable: "--error", showForeground: true },
  { name: "Info", variable: "--info", showForeground: true },
]

const utilityColors = [
  { name: "Border", variable: "--border" },
  { name: "Input", variable: "--input" },
  { name: "Ring", variable: "--ring" },
]

const chartColors = [
  { name: "Chart 1", variable: "--chart-1" },
  { name: "Chart 2", variable: "--chart-2" },
  { name: "Chart 3", variable: "--chart-3" },
  { name: "Chart 4", variable: "--chart-4" },
  { name: "Chart 5", variable: "--chart-5" },
]

const sidebarColors = [
  { name: "Sidebar", variable: "--sidebar", showForeground: true },
  { name: "Sidebar Primary", variable: "--sidebar-primary", showForeground: true },
  { name: "Sidebar Accent", variable: "--sidebar-accent", showForeground: true },
  { name: "Sidebar Border", variable: "--sidebar-border" },
  { name: "Sidebar Ring", variable: "--sidebar-ring" },
]

export function ColorsSection() {
  return (
    <SectionWrapper
      id="colors"
      title="Colors"
      description="Semantic color tokens using OKLCH color space. Adjust hue and chroma with the controls above."
    >
      <ColorSwatchGroup title="Base Colors" colors={baseColors} />
      <ColorSwatchGroup title="Semantic Status" colors={semanticColors} />
      <ColorSwatchGroup title="Utility Colors" colors={utilityColors} />
      <ColorSwatchGroup title="Chart Colors" colors={chartColors} />
      <ColorSwatchGroup title="Sidebar Colors" colors={sidebarColors} />
    </SectionWrapper>
  )
}
