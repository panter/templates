import { Typography } from "@/components/ui/typography"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

export function TypographySection() {
  return (
    <SectionWrapper
      id="typography"
      title="Typography"
      description="Fluid typography scale with responsive sizing using clamp()."
    >
      <Subsection title="Headings">
        <div className="space-y-6">
          <div className="space-y-1">
            <Typography variant="h1">Heading 1</Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;h1&quot; · text-5xl · font-bold
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="h2">Heading 2</Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;h2&quot; · text-4xl · font-bold
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="h3">Heading 3</Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;h3&quot; · text-3xl · font-bold
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="h4">Heading 4</Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;h4&quot; · text-2xl · font-bold
            </p>
          </div>
        </div>
      </Subsection>

      <Subsection title="Body Text">
        <div className="space-y-6">
          <div className="space-y-1">
            <Typography variant="lead">
              Lead paragraph text for introductions and summaries. This text style is larger and
              uses muted foreground color.
            </Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;lead&quot; · text-xl · text-muted-foreground
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="body">
              Body text is the default paragraph style used throughout the interface. It provides
              comfortable reading at standard sizes with normal line height.
            </Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;body&quot; · text-base · leading-normal
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="small">
              Small text for secondary information and fine print.
            </Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;small&quot; · text-sm
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="caption">Caption text for labels and metadata</Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;caption&quot; · text-xs · text-muted-foreground
            </p>
          </div>
          <div className="space-y-1">
            <Typography variant="muted">Muted text for less prominent content.</Typography>
            <p className="text-muted-foreground font-mono text-xs">
              variant=&quot;muted&quot; · text-sm · text-muted-foreground
            </p>
          </div>
        </div>
      </Subsection>

      <Subsection title="Font Sizes Scale">
        <div className="space-y-3">
          {[
            { size: "text-xs", label: "--text-xs", px: "12px" },
            { size: "text-sm", label: "--text-sm", px: "14px" },
            { size: "text-base", label: "--text-base", px: "16px" },
            { size: "text-lg", label: "--text-lg", px: "18px" },
            { size: "text-xl", label: "--text-xl", px: "20px" },
            { size: "text-2xl", label: "--text-2xl", px: "24px" },
            { size: "text-3xl", label: "--text-3xl", px: "30px" },
            { size: "text-4xl", label: "--text-4xl", px: "36px" },
            { size: "text-5xl", label: "--text-5xl", px: "48px" },
            { size: "text-6xl", label: "--text-6xl", px: "60px" },
          ].map(({ size, label, px }) => (
            <div key={size} className="flex items-baseline gap-4">
              <span className={`${size} font-medium`}>Aa</span>
              <span className="text-muted-foreground font-mono text-xs">
                {label} ({px})
              </span>
            </div>
          ))}
        </div>
      </Subsection>
    </SectionWrapper>
  )
}
