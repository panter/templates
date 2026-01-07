import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      lead: "lead",
      body: "", // <p> default
      small: "small",
      caption: "caption",
      muted: "muted",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label"

type VariantType = NonNullable<VariantProps<typeof typographyVariants>["variant"]>

const variantElementMap: Record<VariantType, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  lead: "p",
  body: "p",
  small: "p",
  caption: "span",
  muted: "p",
}

type TypographyProps = {
  as?: TypographyElement
  asChild?: boolean
  className?: string
  children?: React.ReactNode
} & VariantProps<typeof typographyVariants> &
  Omit<React.HTMLAttributes<HTMLElement>, "as">

function Typography({
  as,
  asChild = false,
  variant = "body",
  className,
  ...props
}: TypographyProps) {
  const defaultElement = variant ? variantElementMap[variant] : "p"
  const Comp = asChild ? Slot : (as ?? defaultElement)

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant }), className)}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    />
  )
}

export { Typography, typographyVariants }
