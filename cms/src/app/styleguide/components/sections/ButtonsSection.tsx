import { Button } from "@/components/ui/button"
import { Loader2, Mail, Plus } from "lucide-react"
import Link from "next/link"
import { ComponentPreview } from "../shared/ComponentPreview"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

const variants = ["default", "secondary", "destructive", "outline", "ghost", "link"] as const
const sizes = ["sm", "default", "lg"] as const

export function ButtonsSection() {
  return (
    <SectionWrapper
      id="buttons"
      title="Buttons"
      description="Button component with multiple variants and sizes."
    >
      <Subsection title="Variants × Sizes Matrix">
        <ComponentPreview
          code={`<Button>Button</Button>
<Button variant="secondary" size="sm">Button</Button>
<Button variant="destructive" size="lg">Button</Button>
<Button variant="outline">Button</Button>
<Button variant="ghost">Button</Button>
<Button variant="link">Button</Button>`}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse [&_tbody_tr:hover]:bg-transparent">
              <thead>
                <tr>
                  <th className="text-muted-foreground p-2 text-left text-sm font-medium" />
                  {sizes.map((size) => (
                    <th
                      key={size}
                      className="text-muted-foreground p-2 text-center text-sm font-medium"
                    >
                      {size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {variants.map((variant) => (
                  <tr key={variant}>
                    <td className="p-2 font-mono text-sm">{variant}</td>
                    {sizes.map((size) => (
                      <td key={size} className="p-2 text-center">
                        <Button variant={variant} size={size}>
                          Button
                        </Button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Link as Button">
        <ComponentPreview
          code={`<Button asChild>
  <Link href="#">Link as Button</Link>
</Button>

<Button variant="outline" asChild>
  <Link href="#">Outline Link</Link>
</Button>

<Button variant="ghost" asChild>
  <Link href="#">Ghost Link</Link>
</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#">Link as Button</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Outline Link</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#">Ghost Link</Link>
            </Button>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="With Icons">
        <ComponentPreview
          code={`<Button>
  <Mail />
  Email
</Button>

<Button variant="secondary">
  <Plus />
  Add Item
</Button>

<Button variant="outline">
  <Mail />
  Send
</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail />
              Email
            </Button>
            <Button variant="secondary">
              <Plus />
              Add Item
            </Button>
            <Button variant="outline">
              <Mail />
              Send
            </Button>
            <Button variant="ghost">
              <Plus />
              Create
            </Button>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Icon Buttons">
        <ComponentPreview
          code={`<Button size="icon-sm">
  <Plus />
</Button>

<Button size="icon">
  <Plus />
</Button>

<Button size="icon-lg">
  <Plus />
</Button>

<Button variant="outline" size="icon">
  <Mail />
</Button>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="icon-sm">
              <Plus />
            </Button>
            <Button size="icon">
              <Plus />
            </Button>
            <Button size="icon-lg">
              <Plus />
            </Button>
            <Button variant="outline" size="icon">
              <Mail />
            </Button>
            <Button variant="ghost" size="icon">
              <Plus />
            </Button>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="States">
        <ComponentPreview
          code={`<Button>Default</Button>

<Button disabled>Disabled</Button>

<Button disabled>
  <Loader2 className="animate-spin" />
  Loading
</Button>`}
        >
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loader2 className="animate-spin" />
              Loading
            </Button>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Full Width">
        <ComponentPreview
          code={`<Button className="w-full">Full Width Button</Button>

<Button variant="outline" className="w-full">
  Full Width Outline
</Button>`}
          className="w-full"
        >
          <div className="space-y-2">
            <Button className="w-full">Full Width Button</Button>
            <Button variant="outline" className="w-full">
              Full Width Outline
            </Button>
          </div>
        </ComponentPreview>
      </Subsection>
    </SectionWrapper>
  )
}
