import { Typography } from "@/components/ui/typography"
import { Link } from "lucide-react"
import type { PropsWithChildren } from "react"

interface SectionWrapperProps extends PropsWithChildren {
  id: string
  title: string
  description?: string
}

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <a
          href={`#${id}`}
          className="group flex items-center gap-2 no-underline"
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById(id)
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
              window.history.pushState(null, "", `#${id}`)
            }
          }}
        >
          <Typography variant="h2">{title}</Typography>
          <Link className="text-muted-foreground hover:text-foreground size-5 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        {description && <p className="text-muted-foreground mt-2">{description}</p>}
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  )
}

interface SubsectionProps extends PropsWithChildren {
  title: string
}

export function Subsection({ title, children }: SubsectionProps) {
  return (
    <div>
      <Typography variant="h3" className="mb-4">
        {title}
      </Typography>
      {children}
    </div>
  )
}
