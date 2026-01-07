"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/utils/ui"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

type Section = {
  id: string
  label: string
}

type StyleguideNavProps = {
  sections: Section[]
}

export function StyleguideNav({ sections }: StyleguideNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${id}`)
      setIsOpen(false)
    }
  }

  const navContent = (
    <nav className="space-y-1">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={cn(
            "block w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
            activeSection === id
              ? "bg-accent text-accent-foreground font-medium"
              : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="lg:bg-background lg:border-border hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col lg:border-r">
        <div className="border-border flex h-16 items-center border-b px-6">
          <Typography variant="small" className="font-bold">
            Panter Solution Styleguide
          </Typography>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{navContent}</div>
      </aside>

      {/* Mobile menu button */}
      <div className="fixed right-4 bottom-4 z-50 lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="h-12 w-12 rounded-full shadow-lg">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Sections</SheetTitle>
            </SheetHeader>
            <div className="mt-4">{navContent}</div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
