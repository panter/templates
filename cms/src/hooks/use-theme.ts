import { useTheme as _useTheme } from "next-themes"
import { useCallback, useMemo } from "react"

export function useTheme() {
  const { setTheme, resolvedTheme } = _useTheme()

  const theme = useMemo(() => (resolvedTheme ?? "light") as "dark" | "light", [resolvedTheme])
  const oppositeTheme = useMemo(() => (theme === "dark" ? "light" : "dark"), [theme])

  const toggleTheme = useCallback(() => {
    setTheme(oppositeTheme)
  }, [setTheme, oppositeTheme])

  return {
    theme,
    toggleTheme,
  }
}
