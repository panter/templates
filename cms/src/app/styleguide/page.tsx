"use client"

import { Typography } from "@/components/ui/typography"
import { ThemeControls } from "./components/ThemeControls"
import { ThemePlayground } from "./components/ThemePlayground"
import { StyleguideNav } from "./components/StyleguideNav"
import { ColorsSection } from "./components/sections/ColorsSection"
import { TypographySection } from "./components/sections/TypographySection"
import { ElementsSection } from "./components/sections/ElementsSection"
import { SpacingSection } from "./components/sections/SpacingSection"
import { GridSection } from "./components/sections/GridSection"
import { ButtonsSection } from "./components/sections/ButtonsSection"
import { FormsSection } from "./components/sections/FormsSection"
import { CardsSection } from "./components/sections/CardsSection"
import { FeedbackSection } from "./components/sections/FeedbackSection"
import { OverlaysSection } from "./components/sections/OverlaysSection"
import { Separator } from "@/components/ui/separator"

const sections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "elements", label: "HTML Elements" },
  { id: "spacing", label: "Spacing" },
  { id: "grid", label: "Grid & Layout" },
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Forms" },
  { id: "cards", label: "Cards" },
  { id: "feedback", label: "Feedback" },
  { id: "overlays", label: "Overlays" },
]

export default function StyleguidePage() {
  return (
    <div className="flex min-h-screen">
      <StyleguideNav sections={sections} />

      <main className="flex-1 lg:pl-64">
        <div className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
          <div className="container py-3 md:py-4">
            <div className="flex items-center justify-between gap-4">
              <Typography variant="h1">Styleguide</Typography>
              <ThemeControls />
            </div>
          </div>
        </div>

        <div className="container space-y-12 py-6 md:space-y-16 md:py-8">
          <ColorsSection />
          <Separator />

          <TypographySection />
          <Separator />

          <ElementsSection />
          <Separator />

          <SpacingSection />
          <Separator />

          <GridSection />
          <Separator />

          <ButtonsSection />
          <Separator />

          <FormsSection />
          <Separator />

          <CardsSection />
          <Separator />

          <FeedbackSection />
          <Separator />

          <OverlaysSection />
        </div>
      </main>

      <ThemePlayground />
    </div>
  )
}
