"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"
import { ComponentPreview } from "../shared/ComponentPreview"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

export function FormsSection() {
  return (
    <SectionWrapper
      id="forms"
      title="Forms"
      description="Form components with consistent styling and accessibility."
    >
      <Subsection title="Text Inputs">
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="input">Label</Label>
  <Input id="input" placeholder="Enter text..." />
</div>

// Disabled
<Input placeholder="Disabled" disabled />

// Invalid
<Input placeholder="Invalid" aria-invalid="true" />`}
        >
          <div className="grid max-w-md gap-6">
            <div className="space-y-2">
              <Label htmlFor="input-default">Default Input</Label>
              <Input id="input-default" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-disabled">Disabled Input</Label>
              <Input id="input-disabled" placeholder="Disabled" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-invalid">Invalid Input</Label>
              <Input id="input-invalid" placeholder="Invalid" aria-invalid="true" />
              <p className="text-destructive text-xs">This field is required</p>
            </div>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Textarea">
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="textarea">Description</Label>
  <Textarea id="textarea" placeholder="Enter description..." rows={4} />
</div>`}
        >
          <div className="max-w-md space-y-2">
            <Label htmlFor="textarea">Description</Label>
            <Textarea id="textarea" placeholder="Enter description..." rows={4} />
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Select">
        <ComponentPreview
          code={`<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>

// Small size
<SelectTrigger size="sm">...</SelectTrigger>`}
        >
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <Label>Default Size</Label>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Small Size</Label>
              <Select>
                <SelectTrigger size="sm" className="w-48">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Checkbox">
        <ComponentPreview
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Checked by default
<Checkbox id="check" defaultChecked />

// Disabled
<Checkbox id="disabled" disabled />`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="check1" />
              <Label htmlFor="check1">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check2" defaultChecked />
              <Label htmlFor="check2">Checked by default</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check3" disabled />
              <Label htmlFor="check3" className="text-muted-foreground">
                Disabled checkbox
              </Label>
            </div>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Radio Group">
        <ComponentPreview
          code={`<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="option1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="radio1" />
              <Label htmlFor="radio1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="radio2" />
              <Label htmlFor="radio2">Option 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="radio3" />
              <Label htmlFor="radio3">Option 3</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Switch">
        <ComponentPreview
          code={`<div className="flex items-center gap-3">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>

// Checked by default
<Switch id="dark" defaultChecked />

// Disabled
<Switch id="disabled" disabled />`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch id="switch1" />
              <Label htmlFor="switch1">Enable notifications</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="switch3" disabled />
              <Label htmlFor="switch3" className="text-muted-foreground">
                Disabled
              </Label>
            </div>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Toggle">
        <ComponentPreview
          code={`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`}
        >
          <div className="flex flex-wrap gap-2">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Slider">
        <ComponentPreview
          code={`<Slider defaultValue={[50]} max={100} step={1} />

// Range slider
<Slider defaultValue={[25, 75]} max={100} step={1} />`}
        >
          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <Label>Range</Label>
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </div>
        </ComponentPreview>
      </Subsection>
    </SectionWrapper>
  )
}
