import localFont from "next/font/local"

/**
 * Primary sans-serif font for body text.
 *
 * To use your own fonts:
 * 1. Add your .woff2/.woff files to /public/fonts/
 * 2. Update the `src` array below with your font file paths and weights
 * 3. The font will automatically be applied via the --font-sans CSS variable
 *
 */
export const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans-variable",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

/**
 * Optional: Separate heading font if you want different typography for headings.
 * Uncomment and configure if needed.
 *
 * export const fontHeading = localFont({
 *   src: [
 *     { path: "../../public/fonts/heading-bold.woff2", weight: "700", style: "normal" },
 *   ],
 *   variable: "--font-heading-variable",
 *   display: "swap",
 *   fallback: ["system-ui", "sans-serif"],
 * })
 */
