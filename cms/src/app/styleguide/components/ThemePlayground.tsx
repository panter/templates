"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Typography } from "@/components/ui/typography"
import { Paintbrush, RotateCcw } from "lucide-react"
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import { saveThemeValues } from "../actions"

export function ThemePlayground() {
  const hydrated = useHydrated()
  const storedValues = usePlaygroundValues()
  const [resetKey, setResetKey] = useState(0)
  const values = useDisplayValues(storedValues, hydrated, resetKey)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const persistValues = useCallback((newValues: Partial<PlaygroundValues>) => {
    const current = getStoredValues()
    const updated = { ...current, ...newValues }
    applyAllValues(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event("storage"))

    // Debounced auto-save to CSS file
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      saveThemeValues({
        primary: updated.primary ?? undefined,
        secondary: updated.secondary ?? undefined,
        accent: updated.accent ?? undefined,
        muted: updated.muted ?? undefined,
        textBaseMin: updated.textBaseMin ?? undefined,
        textBaseMax: updated.textBaseMax ?? undefined,
        headingWeight: updated.headingWeight ?? undefined,
        lineHeight: updated.lineHeight ?? undefined,
        spaceUnit: updated.spaceUnit ?? undefined,
        radius: updated.radius ?? undefined,
      })
    }, 500)
  }, [])

  const handleReset = useCallback(() => {
    applyAllValues(EMPTY_VALUES)
    localStorage.removeItem(STORAGE_KEY)
    window.dispatchEvent(new Event("storage"))
    setResetKey((k) => k + 1)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    applyAllValues(storedValues)
  }, [hydrated, storedValues])

  if (!hydrated) return null

  return (
    <div className="fixed right-4 bottom-20 z-50 lg:bottom-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full shadow-lg">
            <Paintbrush className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex w-80 flex-col"
          style={
            {
              "--space-unit": "0.25rem",
              "--text-base-min": "0.875rem",
              "--text-base-max": "1rem",
              "--text-base": "0.9375rem",
              "--text-xs": "0.6875rem",
              "--text-sm": "0.8125rem",
              "--text-lg": "1.0625rem",
              "--text-xl": "1.1875rem",
              "--text-2xl": "1.375rem",
              "--text-3xl": "1.625rem",
              "--radius": "0.625rem",
            } as React.CSSProperties
          }
        >
          <SheetHeader>
            <SheetTitle className="h3">Config</SheetTitle>
          </SheetHeader>

          <Separator />

          <div className="flex-1 space-y-6 overflow-y-auto py-4">
            <section className="px-4">
              <Typography
                variant="h3"
                className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase"
              >
                Colors
              </Typography>
              <div className="space-y-4">
                <ColorInput
                  label="Primary"
                  value={values.primary}
                  onChange={(v) => persistValues({ primary: v })}
                  cssVar="--primary"
                />
                <ColorInput
                  label="Secondary"
                  value={values.secondary}
                  onChange={(v) => persistValues({ secondary: v })}
                  cssVar="--secondary"
                />
                <ColorInput
                  label="Accent"
                  value={values.accent}
                  onChange={(v) => persistValues({ accent: v })}
                  cssVar="--accent"
                />
                <ColorInput
                  label="Muted"
                  value={values.muted}
                  onChange={(v) => persistValues({ muted: v })}
                  cssVar="--muted"
                />
              </div>
            </section>

            <Separator />

            <div className="px-4">
              <SizeSection
                title="Typography"
                inputs={[
                  {
                    label: "Base Size Min",
                    value: values.textBaseMin,
                    onChange: (v) => persistValues({ textBaseMin: v }),
                  },
                  {
                    label: "Base Size Max",
                    value: values.textBaseMax,
                    onChange: (v) => persistValues({ textBaseMax: v }),
                  },
                ]}
              />
              <div className="mt-4 space-y-3">
                <NumberInput
                  label="Heading Weight"
                  value={values.headingWeight}
                  onChange={(v) => persistValues({ headingWeight: v })}
                  min={400}
                  max={900}
                  step={100}
                />
                <NumberInput
                  label="Line Height"
                  value={values.lineHeight}
                  onChange={(v) => persistValues({ lineHeight: v })}
                  min={1.25}
                  max={2}
                  step={0.05}
                />
              </div>
            </div>

            <Separator />

            <div className="px-4">
              <SizeSection
                title="Spacing"
                inputs={[
                  {
                    label: "Space Unit",
                    value: values.spaceUnit,
                    onChange: (v) => persistValues({ spaceUnit: v }),
                    minRem: 0.0625,
                    maxRem: 1,
                  },
                  {
                    label: "Border Radius",
                    value: values.radius,
                    onChange: (v) => persistValues({ radius: v }),
                    minRem: 0,
                    maxRem: 4,
                  },
                ]}
              />
            </div>
          </div>

          <div className="border-border border-t p-4">
            <Button variant="outline" className="w-full" onClick={handleReset}>
              <RotateCcw className="mr-2 size-4" />
              Reset to Defaults
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const STORAGE_KEY = "styleguide-playground"

type OklchColor = {
  l: number
  c: number
  h: number
}

type PlaygroundValues = {
  primary: OklchColor | null
  secondary: OklchColor | null
  accent: OklchColor | null
  muted: OklchColor | null
  textBaseMin: number | null
  textBaseMax: number | null
  headingWeight: number | null
  lineHeight: number | null
  spaceUnit: number | null
  radius: number | null
}

const EMPTY_VALUES: PlaygroundValues = {
  primary: null,
  secondary: null,
  accent: null,
  muted: null,
  textBaseMin: null,
  textBaseMax: null,
  headingWeight: null,
  lineHeight: null,
  spaceUnit: null,
  radius: null,
}

function setCSSVariable(name: string, value: string | number | null, unit?: string) {
  if (value === null) {
    document.documentElement.style.removeProperty(name)
  } else {
    const cssValue = unit ? `${value}${unit}` : String(value)
    document.documentElement.style.setProperty(name, cssValue)
  }
}

function oklchToString(color: OklchColor): string {
  return `oklch(${color.l} ${color.c} ${color.h})`
}

function oklchToHex(color: OklchColor): string {
  const canvas = document.createElement("canvas")
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext("2d")
  if (!ctx) return "#000000"

  ctx.fillStyle = oklchToString(color)
  ctx.fillRect(0, 0, 1, 1)
  const data = ctx.getImageData(0, 0, 1, 1).data
  const r = data[0] ?? 0
  const g = data[1] ?? 0
  const b = data[2] ?? 0
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

function hexToOklch(hex: string): OklchColor {
  const canvas = document.createElement("canvas")
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext("2d")
  if (!ctx) return { l: 0.5, c: 0, h: 0 }

  ctx.fillStyle = hex
  ctx.fillRect(0, 0, 1, 1)
  const data = ctx.getImageData(0, 0, 1, 1).data
  const r = data[0] ?? 0
  const g = data[1] ?? 0
  const b = data[2] ?? 0

  const rLin = r / 255
  const gLin = g / 255
  const bLin = b / 255

  const l = 0.4122214708 * rLin + 0.5363325363 * gLin + 0.0514459929 * bLin
  const m = 0.2119034982 * rLin + 0.6806995451 * gLin + 0.1073969566 * bLin
  const s = 0.0883024619 * rLin + 0.2817188376 * gLin + 0.6299787005 * bLin

  const lRoot = Math.cbrt(l)
  const mRoot = Math.cbrt(m)
  const sRoot = Math.cbrt(s)

  const L = 0.2104542553 * lRoot + 0.793617785 * mRoot - 0.0040720468 * sRoot
  const a = 1.9779984951 * lRoot - 2.428592205 * mRoot + 0.4505937099 * sRoot
  const b_ = 0.0259040371 * lRoot + 0.7827717662 * mRoot - 0.808675766 * sRoot

  const C = Math.sqrt(a * a + b_ * b_)
  let H = (Math.atan2(b_, a) * 180) / Math.PI
  if (H < 0) H += 360

  return {
    l: Math.round(L * 1000) / 1000,
    c: Math.round(C * 1000) / 1000,
    h: Math.round(H * 10) / 10,
  }
}

function getForegroundColor(color: OklchColor): OklchColor {
  // Use light foreground for dark colors, dark foreground for light colors
  return color.l > 0.6 ? { l: 0.145, c: 0, h: 0 } : { l: 0.985, c: 0, h: 0 }
}

function applyColorWithForeground(baseVar: string, color: OklchColor | null) {
  setCSSVariable(baseVar, color ? oklchToString(color) : null)
  setCSSVariable(`${baseVar}-foreground`, color ? oklchToString(getForegroundColor(color)) : null)
}

function applyAllValues(values: PlaygroundValues) {
  applyColorWithForeground("--primary", values.primary)
  applyColorWithForeground("--secondary", values.secondary)
  applyColorWithForeground("--accent", values.accent)
  applyColorWithForeground("--muted", values.muted)
  setCSSVariable("--text-base-min", values.textBaseMin, "rem")
  setCSSVariable("--text-base-max", values.textBaseMax, "rem")
  setCSSVariable("--heading-weight", values.headingWeight)
  setCSSVariable("--leading-normal", values.lineHeight)
  setCSSVariable("--space-unit", values.spaceUnit, "rem")
  setCSSVariable("--radius", values.radius, "rem")
}

function parseOklch(value: string): OklchColor {
  const match = value.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/)
  if (match && match[1] && match[2] && match[3]) {
    return {
      l: parseFloat(match[1]),
      c: parseFloat(match[2]),
      h: parseFloat(match[3]),
    }
  }
  return { l: 0.5, c: 0, h: 0 }
}

function getComputedOklch(variable: string): OklchColor {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
  if (!value) return { l: 0.5, c: 0, h: 0 }
  return parseOklch(value)
}

function getComputedNumber(variable: string): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
  return parseFloat(value) || 0
}

function getStoredValues(): PlaygroundValues {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return EMPTY_VALUES

  try {
    const parsed = JSON.parse(stored)
    return { ...EMPTY_VALUES, ...parsed }
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return EMPTY_VALUES
  }
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function usePlaygroundValues(): PlaygroundValues {
  const getSnapshot = useCallback(() => JSON.stringify(getStoredValues()), [])
  const getServerSnapshot = useCallback(() => JSON.stringify(EMPTY_VALUES), [])
  const snapshot = useSyncExternalStore(subscribeToStorage, getSnapshot, getServerSnapshot)
  // useMemo to avoid creating new object reference on every render
  const values = useMemo(() => JSON.parse(snapshot) as PlaygroundValues, [snapshot])
  return values
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

function useDisplayValues(stored: PlaygroundValues, hydrated: boolean, _resetKey: number) {
  if (!hydrated) {
    return {
      primary: { l: 0.5, c: 0, h: 0 },
      secondary: { l: 0.97, c: 0, h: 0 },
      accent: { l: 0.5, c: 0, h: 0 },
      muted: { l: 0.97, c: 0, h: 0 },
      textBaseMin: 0.875,
      textBaseMax: 1,
      headingWeight: 700,
      lineHeight: 1.5,
      spaceUnit: 0.25,
      radius: 0.625,
    }
  }

  return {
    primary: stored.primary ?? getComputedOklch("--primary"),
    secondary: stored.secondary ?? getComputedOklch("--secondary"),
    accent: stored.accent ?? getComputedOklch("--accent"),
    muted: stored.muted ?? getComputedOklch("--muted"),
    textBaseMin: stored.textBaseMin ?? getComputedNumber("--text-base-min"),
    textBaseMax: stored.textBaseMax ?? getComputedNumber("--text-base-max"),
    headingWeight: stored.headingWeight ?? getComputedNumber("--heading-weight"),
    lineHeight: stored.lineHeight ?? getComputedNumber("--leading-normal"),
    spaceUnit: stored.spaceUnit ?? getComputedNumber("--space-unit"),
    radius: stored.radius ?? getComputedNumber("--radius"),
  }
}

type ColorInputProps = {
  label: string
  value: OklchColor
  onChange: (value: OklchColor) => void
  cssVar: string
}

function ColorInput({ label, value, onChange, cssVar }: ColorInputProps) {
  const [useHex, setUseHex] = useState(false)
  const [committedHex, setCommittedHex] = useState<string | null>(null)
  const [editHex, setEditHex] = useState<string | null>(null)
  const [editOklch, setEditOklch] = useState<string | null>(null)

  const displayHex = editHex ?? committedHex ?? oklchToHex(value)
  const displayOklch = editOklch ?? oklchToString(value)
  const previewColor =
    editHex && /^#[0-9a-fA-F]{6}$/.test(editHex)
      ? editHex
      : editOklch && /oklch\(/.test(editOklch)
        ? editOklch
        : oklchToString(value)

  const foregroundVar = `${cssVar}-foreground`

  const setColorWithForeground = (color: OklchColor) => {
    document.documentElement.style.setProperty(cssVar, oklchToString(color))
    document.documentElement.style.setProperty(
      foregroundVar,
      oklchToString(getForegroundColor(color)),
    )
  }

  const handleHexDrag = (hex: string) => {
    setEditHex(hex)
    if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
      const oklch = hexToOklch(hex)
      setColorWithForeground(oklch)
    }
  }

  const handleHexCommit = (hex: string) => {
    if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
      const oklch = hexToOklch(hex)
      setColorWithForeground(oklch)
      onChange(oklch)
      setCommittedHex(hex)
    }
    setEditHex(null)
  }

  const handleOklchDrag = (str: string) => {
    setEditOklch(str)
    const parsed = parseOklch(str)
    if (parsed.l > 0 || parsed.c > 0 || parsed.h > 0) {
      setColorWithForeground(parsed)
    }
  }

  const handleOklchCommit = (str: string) => {
    const parsed = parseOklch(str)
    if (parsed.l > 0 || parsed.c > 0 || parsed.h > 0) {
      setColorWithForeground(parsed)
      onChange(parsed)
      setCommittedHex(null)
    }
    setEditOklch(null)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 shrink-0 rounded border"
            style={{ backgroundColor: previewColor }}
          />
          <Label className="text-sm font-medium">{label}</Label>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setUseHex(false)}
            className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
              !useHex
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            OKLCH
          </button>
          <button
            type="button"
            onClick={() => setUseHex(true)}
            className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
              useHex
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            HEX
          </button>
        </div>
      </div>

      {useHex ? (
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={displayHex}
            onChange={(e) => handleHexDrag(e.target.value)}
            onBlur={(e) => handleHexCommit(e.target.value)}
            className="h-8 w-8 cursor-pointer rounded border-0 bg-transparent p-0"
          />
          <Input
            type="text"
            value={displayHex}
            onChange={(e) => handleHexDrag(e.target.value)}
            onBlur={(e) => handleHexCommit(e.target.value)}
            className="h-8 flex-1 font-mono text-xs uppercase"
            placeholder="#000000"
          />
        </div>
      ) : (
        <Input
          type="text"
          value={displayOklch}
          onChange={(e) => handleOklchDrag(e.target.value)}
          onBlur={(e) => handleOklchCommit(e.target.value)}
          className="h-8 font-mono text-xs"
          placeholder="oklch(0.5 0.2 250)"
        />
      )}
    </div>
  )
}

const REM_TO_PX = 16

type SizeSectionProps = {
  title: string
  inputs: Array<{
    label: string
    value: number
    onChange: (value: number) => void
    minRem?: number
    maxRem?: number
  }>
}

function SizeSection({ title, inputs }: SizeSectionProps) {
  const [usePx, setUsePx] = useState(true)

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <Typography
          variant="h3"
          className="text-muted-foreground text-xs font-medium tracking-wider uppercase"
        >
          {title}
        </Typography>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setUsePx(false)}
            className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
              !usePx
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            REM
          </button>
          <button
            type="button"
            onClick={() => setUsePx(true)}
            className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
              usePx
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            PX
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {inputs.map((input) => (
          <SizeInput
            key={`${input.label}-${usePx}`}
            {...input}
            usePx={usePx}
            minRem={input.minRem ?? 0}
            maxRem={input.maxRem ?? 10}
          />
        ))}
      </div>
    </section>
  )
}

type SizeInputProps = {
  label: string
  value: number
  onChange: (value: number) => void
  minRem: number
  maxRem: number
  usePx: boolean
}

function SizeInput({ label, value, onChange, minRem, maxRem, usePx }: SizeInputProps) {
  const toDisplay = (rem: number) => (usePx ? Math.round(rem * REM_TO_PX) : rem)
  const fromDisplay = (val: number) => (usePx ? val / REM_TO_PX : val)
  const step = usePx ? 1 : 0.0625

  const [editValue, setEditValue] = useState<string | null>(null)
  const isEditing = editValue !== null

  const displayValue = isEditing ? editValue : String(toDisplay(value))

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditValue(e.target.value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setEditValue(inputValue)

    const num = parseFloat(inputValue)
    if (!isNaN(num)) {
      const remVal = Math.max(minRem, Math.min(maxRem, fromDisplay(num)))
      onChange(remVal)
    }
  }

  const handleBlur = () => {
    setEditValue(null)
  }

  return (
    <div className="flex items-center gap-3">
      <Label className="w-24 text-sm">{label}</Label>
      <div className="flex flex-1 items-center gap-2">
        <Input
          type="number"
          value={displayValue}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          min={toDisplay(minRem)}
          max={toDisplay(maxRem)}
          step={step}
          className="h-8 flex-1 font-mono text-xs"
        />
        <span className="text-muted-foreground w-8 text-xs">{usePx ? "px" : "rem"}</span>
      </div>
    </div>
  )
}

type NumberInputProps = {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
}

function NumberInput({ label, value, onChange, min, max, step }: NumberInputProps) {
  const [editValue, setEditValue] = useState<string | null>(null)
  const isEditing = editValue !== null

  const displayValue = isEditing ? editValue : String(value)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditValue(e.target.value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setEditValue(inputValue)

    const num = parseFloat(inputValue)
    if (!isNaN(num)) {
      const clamped = Math.max(min, Math.min(max, num))
      onChange(clamped)
    }
  }

  const handleBlur = () => {
    setEditValue(null)
  }

  return (
    <div className="flex items-center gap-3">
      <Label className="w-24 text-sm">{label}</Label>
      <Input
        type="number"
        value={displayValue}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        min={min}
        max={max}
        step={step}
        className="h-8 flex-1 font-mono text-xs"
      />
    </div>
  )
}
