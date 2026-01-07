"use server"

import { readFile, writeFile } from "fs/promises"
import { join } from "path"

const GLOBALS_PATH = join(process.cwd(), "src/app/(frontend)/[locale]/globals.css")

type ThemeValues = {
  primary?: { l: number; c: number; h: number }
  secondary?: { l: number; c: number; h: number }
  accent?: { l: number; c: number; h: number }
  muted?: { l: number; c: number; h: number }
  textBaseMin?: number
  textBaseMax?: number
  headingWeight?: number
  lineHeight?: number
  spaceUnit?: number
  radius?: number
}

function oklchToString(color: { l: number; c: number; h: number }): string {
  return `oklch(${color.l} ${color.c} ${color.h})`
}

function getForegroundColor(color: { l: number; c: number; h: number }): {
  l: number
  c: number
  h: number
} {
  return color.l > 0.6 ? { l: 0.145, c: 0, h: 0 } : { l: 0.985, c: 0, h: 0 }
}

function replaceColorWithForeground(
  css: string,
  varName: string,
  color: { l: number; c: number; h: number },
): string {
  const foreground = getForegroundColor(color)
  css = css.replace(
    new RegExp(`${varName}:\\s*oklch\\([^)]+\\);`),
    `${varName}: ${oklchToString(color)};`,
  )
  css = css.replace(
    new RegExp(`${varName}-foreground:\\s*oklch\\([^)]+\\);`),
    `${varName}-foreground: ${oklchToString(foreground)};`,
  )
  return css
}

export async function saveThemeValues(values: ThemeValues) {
  // Disable file writes in production
  if (process.env.NODE_ENV === "production") {
    return { success: false, error: "Theme editing disabled in production" }
  }

  try {
    let css = await readFile(GLOBALS_PATH, "utf-8")

    if (values.primary) {
      css = replaceColorWithForeground(css, "--primary", values.primary)
    }

    if (values.secondary) {
      css = replaceColorWithForeground(css, "--secondary", values.secondary)
    }

    if (values.textBaseMin !== undefined) {
      css = css.replace(/--text-base-min:\s*[^;]+;/, `--text-base-min: ${values.textBaseMin}rem;`)
    }

    if (values.textBaseMax !== undefined) {
      css = css.replace(/--text-base-max:\s*[^;]+;/, `--text-base-max: ${values.textBaseMax}rem;`)
    }

    if (values.spaceUnit !== undefined) {
      css = css.replace(/--space-unit:\s*[^;]+;/, `--space-unit: ${values.spaceUnit}rem;`)
    }

    if (values.radius !== undefined) {
      css = css.replace(/--radius:\s*[^;]+;/, `--radius: ${values.radius}rem;`)
    }

    if (values.accent) {
      css = replaceColorWithForeground(css, "--accent", values.accent)
    }

    if (values.muted) {
      css = replaceColorWithForeground(css, "--muted", values.muted)
    }

    if (values.headingWeight !== undefined) {
      css = css.replace(/--heading-weight:\s*[^;]+;/, `--heading-weight: ${values.headingWeight};`)
    }

    if (values.lineHeight !== undefined) {
      css = css.replace(/--leading-normal:\s*[^;]+;/, `--leading-normal: ${values.lineHeight};`)
    }

    await writeFile(GLOBALS_PATH, css, "utf-8")
    return { success: true }
  } catch (error) {
    console.error("Failed to save theme values:", error)
    return { success: false, error: String(error) }
  }
}
