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

- All projects are created with ours Vercel template by clicking on Deploy button: <https://github.com/panter/templates/tree/main/cms#readme>
- The template is **updated** on regular basis as a part of "Review of this Tech Manifesto"

### Reasons

- The template saves us lot of time when creating new projects and configures 95% of infra (Vercel)
- The template gives us conventions for free
- Many features are already properly configured in the template

## 3. Seeds

We do **NOT** create seeds.

Instead we either:

1. Create database branch in Neon and use it locally
2. Pull production db to local db with `scripts/db-pull-prod.sh`

When we are in development phase and we want to provide some production data, we push local state into production with `scripts/danger/db-push-local-to-prod.sh`. Other devs then can pull production data to their local db.

### Reasons

- Seeds get deprecated quickly -> increases maintenance efforts
- Their implementation requires effort
- Seed data does not reflect production state, using prod data gives more accurate results of new features testing
- Pulling production data is straightforward

## 5. Github for repo and project boards

All projects are deployed to Panter's github.

### Reasons

- Provides zero infrastructure overhead -> smooth connection with Vercel
- Provides tools for AI code reviews (Copilot)

## 6. Vercel for hosting

- We deploy projects to Vercel
- **We always use Vercel Template for new projects**
- We use database branching for preview environments (e.g. review branches)

### Reasons

- Using the template
- Vercel pipelines are fast (< 3 minutes)
- No pipeline configuration is required -> one click and "it just works"
- Regular project costs are $40/month. In development phase: `$20 + (number of devs) * $20` per month
- Next.js apps works best with Vercel
- Good UX for managing the hosting
- Database branching gives us production data on review branches

## 7. We don't reinvent the wheel

When we develop a feature and we identify that this feature might be useful for future projects, we add the implementation into the template either as a Payload plugin or just as a piece of code.

### Reasons

- Re-usability of features gives efficiency boost
- Continuously improving features by backporting improvements
- Consistent implementation of same features

## 8. Pull Requests

- We link issue with pull request
- We first ask automation tool (Claude, Code Rabbit, Copilot, ...) for a review and then we ask for human review
- We always request a review from a team member and inform them with a message "plz review"
- Reviewer tests the new feature in Preview environment
- When alone on project, we can ask for a review in Panter Solutions circle

### Reasons

- Project specific knowledge sharing
- Catching bugs before they happen
- "Eat your own dog food" in an environment with production data thanks to database branching

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

---

## Deploy Button Link

<details>

<summary>Customize button</summary>

```ts
const params = new URLSearchParams({
  "build-command": "pnpm run ci",
  "demo-description": "Panter Solution App starter",
  "demo-image":
    "//raw.githubusercontent.com/panter/templates/refs/heads/main/cms.png",
  "demo-title": "Payload Website Starter",
  "demo-url": "https://panter-solution-app-demo.vercel.app/",
  env: "PAYLOAD_SECRET,CRON_SECRET,PREVIEW_SECRET,BETTER_AUTH_SECRET,RESEND_API_KEY,EMAIL_FROM_NAME,EMAIL_FROM_ADDRESS",
  from: "templates/cms",
  "project-name": "Panter Solution App",
  "repository-name": "panter-solution-app",
  "repository-url": "https://github.com/panter/templates/tree/main/cms",
  "skippable-integrations": "0",
  stores: `[{"type":"integration","productSlug":"neon","integrationSlug":"neon"},{"type":"blob"}]`,
});

console.log(`https://vercel.com/new/clone?${params}`);
```

</details>

# This is still work in progress

![wait plz](https://www.meme-arsenal.com/memes/f35608196bd9e999253bef01413ae994.jpg)
