# Project: CMS Template

## Tech Stack

- **Next.js 15** (App Router) with React 19
- **TypeScript 5.9** with strict mode
- **Payload CMS 3.x** with Vercel Postgres
- **Tailwind CSS 4** with CSS variables design system
- **shadcn/ui** components (Radix primitives + CVA)
- **next-intl** for internationalization

## Code Conventions

### TypeScript

- `strict: true` - Full type safety required
- Never use `any` - use proper types or `unknown`
- Prefer type inference, add explicit types for function params/returns
- Use `type` over `interface` for object types

### Components

- Use function declarations (not arrow functions for exports)
- CVA (class-variance-authority) for variant management
- `cn()` from `@/utils/ui` for class merging
- `data-slot` attributes for component identification
- Minimal comments in .tsx files

```tsx
// Good
function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

// Avoid
const Button: React.FC<ButtonProps> = (props) => { ... }
```

### File Organization

- `src/components/ui/` - Base UI components (shadcn/ui style)
- `src/components/feedback/` - Error, loading, empty states
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utility functions
- Never use barrel files (index.ts re-exports)

### Styling

- CSS variables defined in `globals.css` for design tokens
- Tailwind utilities mapped via `@theme inline`
- OKLCH color space for all colors
- Fluid typography with clamp()
- 4px (0.25rem) spacing base unit

### Patterns

- Server Components by default
- `"use client"` only when needed (hooks, browser APIs, event handlers)
- Suspense boundaries for data fetching
- Error boundaries at route level
- Always use `<Link>` from `next/link` instead of `<a>` for internal navigation

## Key Files

| File | Purpose |
|------|---------|
| `src/app/(frontend)/[locale]/globals.css` | Design system tokens |
| `src/payload.config.ts` | CMS configuration |
| `src/i18n/config.ts` | Internationalization setup |
| `src/components/ui/` | Component library |
| `src/components/feedback/` | Error/loading components |
| `src/utils/ui.ts` | cn() utility |
| `src/app/styleguide/` | Interactive component styleguide |

## Styleguide

Visit `/styleguide` to see all components with live examples. Features:
- **ThemePlayground** - Live config panel (bottom-right button) to adjust colors, typography, spacing
- Color changes auto-calculate foreground colors for proper contrast
- All changes persist to `globals.css` automatically

## Component Patterns

### CVA Variants

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/ui"

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "...",
      secondary: "...",
    },
    size: {
      sm: "...",
      md: "...",
      lg: "...",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

type ComponentProps = React.ComponentProps<"div"> &
  VariantProps<typeof componentVariants>

function Component({ className, variant, size, ...props }: ComponentProps) {
  return (
    <div
      data-slot="component"
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Component, componentVariants }
```

### Feedback Components

Located in `src/components/feedback/`:
- `error-display.tsx` - Error UI with retry/home buttons
- `error-boundary.tsx` - Client error boundary wrapper
- `loading-overlay.tsx` - Loading spinner overlay
- `skeleton-*.tsx` - Skeleton loaders (text, card, image, table, list, form)

### App Router Error/Loading

- `error.tsx` - Route-level error boundary (must be "use client")
- `global-error.tsx` - Root layout error boundary
- `loading.tsx` - Suspense fallback for route
- `not-found.tsx` - 404 page

## Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code with Prettier
pnpm generate:types  # Generate Payload types
```

## Design System

### Spacing Scale

Based on 8px unit (`--space-unit: 0.5rem`):
- `space-1`: 8px
- `space-2`: 16px
- `space-4`: 32px
- `space-6`: 48px
- `space-8`: 64px

### Spacing Guide

Use numeric scale with these guidelines:

| Utility | Value | Usage |
|---------|-------|-------|
| `gap-1` | 8px | Minimal (icons, badges) |
| `gap-2` | 16px | Tight (within components) |
| `gap-4` | 32px | Default (form fields, cards) |
| `gap-6` | 48px | Relaxed (between groups) |
| `gap-8` | 64px | Loose (section gaps) |
| `gap-12` | 96px | Large (major sections) |
| `gap-16` | 128px | Spacious (page sections) |

### Spacing Rules (IMPORTANT)

**NEVER use arbitrary spacing values:**
```tsx
// BAD - arbitrary values create inconsistency
<div className="p-[23px] gap-[15px] mt-[2rem]" />
<div className="w-[200px] h-[50px]" />
```

**ALWAYS use numeric scale:**
```tsx
// GOOD - use numeric utilities
<div className="p-4 gap-4 mt-6" />
<div className="gap-2 space-y-4" />
```

**Allowed exceptions (positioning only):**
- `top-[50%]`, `left-[50%]` - centering transforms
- `translate-x-[-50%]` - offset positioning
- `-top-px`, `-left-px` - 1px adjustments
- `calc()` expressions for dynamic layouts

### Colors

All colors use OKLCH for perceptual uniformity:
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--muted` / `--muted-foreground`
- `--accent` / `--accent-foreground`
- `--destructive`
- Semantic: `--success`, `--warning`, `--error`, `--info`

### Typography

**Always use the `Typography` component** instead of raw HTML elements (`<h1>`, `<h2>`, `<p>`, etc.):

```tsx
// Good
import { Typography } from "@/components/ui/typography"

<Typography variant="h1">Page Title</Typography>
<Typography variant="lead">Introductory text</Typography>
<Typography variant="muted">Secondary information</Typography>
<Typography>Paragraph</Typography>

// Avoid
<h1 className="...">Page Title</h1>
<p className="text-xl text-muted-foreground">Introductory text</p>
```

Available variants:
- `h1`, `h2`, `h3`, `h4` - Headings with proper semantic elements
- `lead` - Large introductory text
- `body` - Default paragraph text
- `small` - Smaller text
- `caption` - Extra small, muted
- `muted` - Secondary/helper text

Fluid sizing with clamp():
- `text-xs` through `text-6xl`
- Line heights: `leading-tight` (1.15) to `leading-loose` (2)
- Heading weight: `--heading-weight` (default 700, configurable via ThemePlayground)

## Accessibility

- ARIA attributes on interactive components
- `role="status"` with `aria-live` for loading states
- `role="alert"` for error messages
- Screen reader text via `sr-only` class
- Reduced motion support via `prefers-reduced-motion`
