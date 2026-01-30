import type { Field } from "payload"

export const ICON_OPTIONS = [
  { label: "ArrowRight", value: "arrowRight" },
  { label: "Building", value: "building" },
  { label: "Building2", value: "building2" },
  { label: "Camera", value: "camera" },
  { label: "ChartColumn", value: "chartColumn" },
  { label: "CircleAlert", value: "circleAlert" },
  { label: "CircleCheck", value: "circleCheck" },
  { label: "Database", value: "database" },
  { label: "GitCompareArrows", value: "gitCompareArrows" },
  { label: "Globe", value: "globe" },
  { label: "Handshake", value: "handshake" },
  { label: "Layers", value: "layers" },
  { label: "Lightbulb", value: "lightbulb" },
  { label: "Plug", value: "plug" },
  { label: "Quote", value: "quote" },
  { label: "Recycle", value: "recycle" },
  { label: "Rocket", value: "rocket" },
  { label: "Shield", value: "shield" },
  { label: "ShoppingCart", value: "shoppingCart" },
  { label: "Sparkles", value: "sparkles" },
  { label: "Target", value: "target" },
  { label: "TrendingUp", value: "trendingUp" },
  { label: "Users", value: "users" },
  { label: "UsersRound", value: "usersRound" },
] as const

export type IconName = (typeof ICON_OPTIONS)[number]["value"]

export function iconSelect(overrides?: { name?: string }): Field {
  return {
    name: overrides?.name ?? "icon",
    type: "select",
    options: [...ICON_OPTIONS],
    defaultValue: "circleCheck",
  }
}
