"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { Moon, Sun } from "lucide-react"
import { useSyncExternalStore } from "react"

export function ThemeControls() {
  const { theme, toggleTheme } = useTheme()
  const hydrated = useHydrated()

  if (!hydrated) {
    return <div className="h-9 w-9" />
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}
