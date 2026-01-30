import { mcpPlugin } from '@payloadcms/plugin-mcp'

export const mcp = mcpPlugin({
  collections: {
    pages: {
      enabled: true,
      description: `Pages collection with versioning, drafts, and scheduled publishing. Each page has a title (localized), slug (auto-generated), hero section, and a layout built from content blocks.

Hero section:
- type: "none" | "highImpact" | "mediumImpact" | "lowImpact" (default: lowImpact)
- richText: Lexical rich text (h1-h4)
- links: array of link objects (max 2). Each link has type ("reference" for internal pages or "custom" for external URL), label (required), newTab flag, and appearance ("default" | "outline")
- media: upload reference to media collection (required for highImpact/mediumImpact)

Layout blocks (12 types available):

1. "banner" — Alert/notification banner
   - style: "info" | "warning" | "error" | "success" (required, default: info)
   - content: rich text (required)

2. "cta" — Call to Action
   - richText: rich text (h1-h4)
   - links: array of links (max 2, appearances: default/outline)

3. "content" — Multi-column content
   - columns: array of { size: "oneThird" | "half" | "twoThirds" | "full", richText, enableLink, link }

4. "mediaBlock" — Single media display
   - media: upload reference (required)

5. "landingHero" — Landing page hero
   - badgeText (localized), heading (required, localized), headingAccent (localized)
   - links: array (max 3, appearances: default/outline)
   - stats: array (max 4) of { value, label } (both required, localized)

6. "landingProblem" — Problem statement section
   - heading (required, localized), subtitle (localized)
   - statCards: array (max 6) of { icon, value, label } (value/label required, localized)
   - bulletItems: array of { boldText, text } (text required, localized)

7. "landingSolution" — Solution/features section
   - badgeText, heading (required), subtitle (all localized)
   - featureCards: array (max 8) of { icon, title, description } (title/description required, localized)

8. "landingHowItWorks" — Process/steps section
   - heading (required), subtitle (both localized)
   - steps: array (max 6) of { icon, title, description } (title/description required, localized)
   - featureItems: array (max 4) of { icon, title, description } (title/description required, localized)

9. "landingAudience" — Target audience section
   - heading (required), subtitle (both localized)
   - audienceCards: array (max 6) of { icon, title, items: [{ text }], footer } (title required, localized)

10. "landingVision" — Vision/roadmap section
    - heading (required), subtitle, badgeText (all localized)
    - roadmapCards: array (max 6) of { icon, phase, badge, title, subtitle, items: [{ text }] } (phase/title required, localized)
    - pillarsHeading (localized)
    - pillars: array (max 6) of { title, description } (both required, localized)

11. "landingImpact" — Impact/metrics section
    - heading (required), subtitle (both localized)
    - metricCards: array (max 6) of { icon, value, title, description } (value/title required, localized)
    - testimonial: { quote, authorName, authorRole, organization } (all localized)
    - statusBoxes: array (max 6) of { label, text } (both required, localized)

12. "landingCta" — Final CTA section
    - heading (required), subtitle (both localized)
    - partnerCards: array (max 6) of { icon, title, description } (title required, localized)
    - ctaBox: { heading, description, links (max 3, appearances: default/outline) }
    - contactText (localized), email, phone

Icon options (used in icon fields): arrowRight, building, building2, camera, chartColumn, circleAlert, circleCheck, database, gitCompareArrows, globe, handshake, layers, lightbulb, plug, quote, recycle, rocket, shield, shoppingCart, sparkles, target, trendingUp, users, usersRound. Default: circleCheck.

Link structure: { type: "reference" | "custom", newTab: boolean, reference: page relationship (when type=reference), url: string (when type=custom), label: string (required), appearance: "default" | "outline" }`,
    },
  }
})
