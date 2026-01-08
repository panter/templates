# work in progress

![wait plz](https://www.meme-arsenal.com/memes/f35608196bd9e999253bef01413ae994.jpg)

# Tech Manifesto for Panter Solutions

Tech Manifesto is a set of practices, guidelines, ways for achieving efficiency and satisfaction inside a group.

## Review of this Tech Manifesto

This Tech Manifesto is reviewed at minimum **every month** or when there is a need for it.

Everyone in this group can make changes which will be reviewed by others from the group. The review process is done like in a regular Pull Request:

1. Changes are presented - pull request is created by author
2. Reviewers adds their concerns (review comments)
3. Author discusses and/or adjust changes to remove the concerns
4. When the solution is "safe enough to try" we merge the changes
5. Old projects are NOT required to be altered to meet new changes although new features must follow new rules

# The Manifesto

## 1. Every project has a "Project Tech Lead"

Project Tech Lead role:

- Is assigned by voting in project team
- Everyone in the circle must be Project Tech Lead at some point -> same person must not be Project Tech Lead twice in a row
- Steers and invites to tech discussions in the project
- Share his approach as the last one in discussions -> lets everyone speak first
- Participatively involves everyone in project team discussions by asking questions which leads people to realization of overseen concerns/issues -> listen to people, involve teamwork, don't be one-man show
- Regularly checks if project aligns with Tech Manifesto
- Takes responsibility for tech decisions -> Can decline project teams' decisions / has last word in decisions.
- Is always set as member in Vercel project ($20/month)
- Changes all members in Vercel to Viewer Role when the project is finished to lower costs per seat
- Makes sure the Vercel project has <maa@panter.ch> as Billing member in the project
- Makes sure that "Dependabot security updates" and "Grouped security updates" are enabled on the repository

### Reasons

- When members of project team disagree, the tech lead will decide and take responsibility - clearer roles, responsibilities and decision making
- People have opportunity to grow in human skills (soft skills)

## 2. Project Setup

- All projects are created with ours Vercel template ...INSERT LINK....
- The template is **updated** on regular basis as a part of "Review of this Tech Manifesto"
- We do **NOT** create seeds.

### Reasons

- The template saves us lot of time when creating new projects and configures 95% of infra (Vercel)
- The template gives us conventions for free
- Many features are already properly configured in the template
  - Auth
  - i18n
  - UI framework
  - background jobs
  - date manipulation library
  - <https://resend.com/>
  - Email templates with React rendering

## 3. Seeds

We do **NOT** create seeds.

Instead we either:

1. Create database branch in Neon and use it locally
2. Pull production db to local db with `scripts/db-pull-prod.sh`

When we are in development phase and we want to provide some production data, we can push local state into production with `scripts/danger/db-push-local-to-prod.sh`. Other devs then can pull production data to their local db.

### Reasons

- Seeds get deprecated quickly -> increases maintenance efforts
- Their implementation requires effort
- Seed data does not reflect production state, using prod data gives more accurate results of new features testing
- Pulling production data is straightforward

## 3. Github for repo and project boards

All projects are deployed to Panter's github.

### Reasons

- Provides zero infrastructure overhead -> smooth connection with Vercel
- Provides tools for AI code reviews (Copilot)

## 4. Vercel for hosting

- We deploy projects to Vercel
- **We always use Vercel Template for new projects**
- We use database branching for preview environments (e.g. review branches)

### Reasons

- Vercel pipelines are fast (< 3 minutes)
- No pipeline configuration is required -> one click and "it just works"
- Regular project costs are $40/month. In development phase: `$20 + (number of devs) * $20` per month
- Next.js apps works best with Vercel
- Good UI/UX for managing the hosting
- Database branching gives us production data on review branches

# Notes

Ideas:

1. Create Vercel starter template
   - [x] add i18n (with @panter/translate)
   - [x] add shadcn/ui
   - [x] add day-js
   - [x] add draft mode for pages
   - [x] add SEO plugin
   - [x] add blurred placeholder images for media
   - [x] add sitemaps
   - [x] add emails
   - [ ] add few basic blocks
   - [x] add example of payload jobs
   - [x] add payload-better-auth
   - [x] light dark mode switcher
2. No seeds, if you need production data, create database branch and use it locally
3. OKRs:
   - Developer Satisfaction - "lowering number of FUCKs per day"
   - Deployment time < 5 mins
   - Consistent tech stack -> Minimizing onboarding times on Payload projects, "small project -> onboarding takes only few minutes"
4. Estimations are revisited after project is finished -> we will learn from under/over estimations. e.g. calendar export was estimated to 5days, we spent 8days -> why -> how do we improve this in future? is it a good idea for a plugin? etc.
5. We do mobile apps with WebView (PWA-like), no full native apps, limited app stores support
6. We create plugins from features that will be re-usable.

## Clone button and URL

### TODO: make custom buttons (cms, blank, ...)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?build-command=pnpm%20run%20ci&demo-description=A%20production-ready%20website%20built%20with%20Payload%2C%20the%20only%20Next.js-native%20CMS.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1EyBgbstPv4d6NMwzldDyY%2F58d07399ce2a2bb51341125fe4f51572%2Fpayloadwebsitetempate_vercel_thumbnail.jpg&demo-title=Payload%20Website%20Starter&demo-url=https%3A%2F%2Fpayload-vercel-website-demo.vercel.app%2F&env=PAYLOAD_SECRET%2CCRON_SECRET%2CPREVIEW_SECRET&from=templates&project-name=Payload%20Website%20Starter&repository-name=payload-website-starter&repository-url=https%3A%2F%2Fgithub.com%2Fpayloadcms%2Fpayload%2Ftree%2Fmain%2Ftemplates%2Fwith-vercel-website&skippable-integrations=1&stores=%255B%257B%2522type%2522%253A%2522integration%2522%252C%2522productSlug%2522%253A%2522neon%2522%252C%2522integrationSlug%2522%253A%2522neon%2522%257D%252C%257B%2522type%2522%253A%2522blob%2522%257D%255D)

```
https://vercel.com/new/clone?

build-command = pnpm run ci
demo-description = A production-ready website built with Payload, the only Next.js-native CMS.
demo-image = //images.ctfassets.net/e5382hct74si/1EyBgbstPv4d6NMwzldDyY/58d07399ce2a2bb51341125fe4f51572/payloadwebsitetempate_vercel_thumbnail.jpg
demo-title = Payload Website Starter
demo-url = https://payload-vercel-website-demo.vercel.app/
env = PAYLOAD_SECRET,CRON_SECRET,PREVIEW_SECRET
from = templates
project-name = Payload Website Starter
repository-name = payload-website-starter
repository-url = https://github.com/payloadcms/payload/tree/main/templates/with-vercel-website
skippable-integrations = 1
stores = [{"type":"integration","productSlug":"neon","integrationSlug":"neon"},{"type":"blob"}]

https://vercel.com/new/clone?build-command=pnpm%20run%20ci&demo-description=A%20production-ready%20website%20built%20with%20Payload%2C%20the%20only%20Next.js-native%20CMS.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1EyBgbstPv4d6NMwzldDyY%2F58d07399ce2a2bb51341125fe4f51572%2Fpayloadwebsitetempate_vercel_thumbnail.jpg&demo-title=Payload%20Website%20Starter&demo-url=https%3A%2F%2Fpayload-vercel-website-demo.vercel.app%2F&env=PAYLOAD_SECRET%2CCRON_SECRET%2CPREVIEW_SECRET&from=templates&project-name=Payload%20Website%20Starter&repository-name=payload-website-starter&repository-url=https%3A%2F%2Fgithub.com%2Fpayloadcms%2Fpayload%2Ftree%2Fmain%2Ftemplates%2Fyooooooooooo&skippable-integrations=1&stores=%255B%257B%2522type%2522%253A%2522integration%2522%252C%2522productSlug%2522%253A%2522neon%2522%252C%2522integrationSlug%2522%253A%2522neon%2522%257D%252C%257B%2522type%2522%253A%2522blob%2522%257D%255D
```

---

# Footgun Experiences

Here are our "shot myself into the foot" experiences as a knowledge sharing:

## Creating data in afterChange hook

You might experience errors while trying to create e.g. relation data inside `afterChange` hook. The error might be caused by trying to add relation data on a collection that is now being added in a DB transaction. In such case you want your `payload.create` call to be part of a current transaction which is bound to http request.

Usually you want to add your DB operation to current DB transaction by passing request to `req` parameter:

```tsx
const afterChange: CollectionAfterChangeHook = async ({ req }) => {
  await req.payload.create({
    req, // <-- this is important
    collection: "my-slug",
    data: {
      some: "data",
    },
  });
};
```

More info: <https://payloadcms.com/docs/database/transactions>

## Nested where through multiple relations

Use dot notation to filter by relation fields.

<https://payloadcms.com/docs/queries/overview#nested-properties>

```tsx
import type { Where } from "payload";

const query: Where = {
  "artists.featured": {
    // nested property name to filter on
    exists: true,
  },
};
```

## Do not name your collection export

The name of your collection ends up in generated db schema. And `export` is a reserved JS keyword.

```tsx
import { CollectionConfig } from "payload";

export const Export: CollectionConfig = {
  slug: "export",
  // ...
};
```

```ts
// payload-generated-schema.ts:
export const export = pgTable('export', {
//           ^ Parsing error: 'export' is not allowed as a variable declaration name.
```
