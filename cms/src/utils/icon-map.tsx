import {
  ArrowRight,
  Building,
  Building2,
  Camera,
  ChartColumn,
  CircleAlert,
  CircleCheck,
  Database,
  GitCompareArrows,
  Globe,
  Handshake,
  Layers,
  Lightbulb,
  Plug,
  Quote,
  Recycle,
  Rocket,
  Shield,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  arrowRight: ArrowRight,
  building: Building,
  building2: Building2,
  camera: Camera,
  chartColumn: ChartColumn,
  circleAlert: CircleAlert,
  circleCheck: CircleCheck,
  database: Database,
  gitCompareArrows: GitCompareArrows,
  globe: Globe,
  handshake: Handshake,
  layers: Layers,
  lightbulb: Lightbulb,
  plug: Plug,
  quote: Quote,
  recycle: Recycle,
  rocket: Rocket,
  shield: Shield,
  shoppingCart: ShoppingCart,
  sparkles: Sparkles,
  target: Target,
  trendingUp: TrendingUp,
  users: Users,
  usersRound: UsersRound,
}

export function IconComponent({
  name,
  className,
}: {
  name: string | null | undefined
  className?: string
}) {
  if (!name) return null
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}
