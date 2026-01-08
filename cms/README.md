# Payload Website Template

This is Panter's [Payload Website Template](https://github.com/panter/templates/cms). Use it to power websites, blogs, or portfolios from small to enterprise. This repo includes a fully-working backend, enterprise-grade admin panel, and a beautifully designed, production-ready website.

Available features:

- i18n with `@panter/translate` and route based localization `/{locale}/...`
- `shadcn/ui` design system with configurable semantic tokens: <http://localhost:3000/styleguide>
- Authentication based on <https://www.better-auth.com/>
- `day-js` preconfigured
- Versioning of Pages and live preview editing
- Background Jobs
- SEO on Pages
- OpenGraph for Pages
- Sitemap.xml and robots.txt
- Placeholder images for uploaded Media
- Hooks by <https://www.usehooks.io/>
- Email templates with developer tools <http://localhost:3001/>
- Basic CMS blocks for Pages

To start using the template, deploy to Vercel with **one click**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?build-command=pnpm+run+ci&demo-description=Panter+Solution+App+Starter&demo-image=%2F%2Fraw.githubusercontent.com%2Fpanter%2Ftemplates%2Frefs%2Fheads%2Fmain%2Fcms.png&demo-title=Panter+Solution+App+Starter&demo-url=https%3A%2F%2Fpanter-solution-app-demo.vercel.app%2F&env=PAYLOAD_SECRET%2CCRON_SECRET%2CPREVIEW_SECRET%2CBETTER_AUTH_SECRET%2CRESEND_API_KEY%2CEMAIL_FROM_NAME%2CEMAIL_FROM_ADDRESS&from=templates%2Fcms&project-name=Panter+Solution+App&repository-name=panter-solution-app&repository-url=https%3A%2F%2Fgithub.com%2Fpanter%2Ftemplates%2Ftree%2Fmain%2Fcms&skippable-integrations=0&stores=%5B%7B%22type%22%3A%22integration%22%2C%22productSlug%22%3A%22neon%22%2C%22integrationSlug%22%3A%22neon%22%7D%2C%7B%22type%22%3A%22blob%22%7D%5D)

## Quick start – Deploying to Vercel

Click the 'Deploy' button to spin up this template directly into Vercel hosting. It will first prompt you save this template into your own Github repo so that you own the code and can make any changes you want to it. You will be prompted to set up the required services and secrets. Once the app is built and deployed, you can visit your site using the generated URL.

Set up the following services and secrets and then once the app has been built and deployed you will be able to visit your site at the generated URL.

### Services

This project uses the following services integrated into Vercel which you will need to click "Add" and "Connect" for:

Neon Database - Postgres-based cloud database used to host your data

Vercel Blob Storage - object storage used to host your files such as images and videos

The connection variables will automatically be setup for you on Vercel when these services are connected.

#### Secrets

You will be prompted to add the following secret values to your project. These should be long unguessable strong passwords, you can also use a password manager to generate one for these.

`CRON_SECRET` - used for running cron on Vercel

`PAYLOAD_SECRET` - used by Payload to sign secrets like JWT tokens

`PREVIEW_SECRET` - used by Payload for secured live previews of your content

`BETTER_AUTH_SECRET` - used by Better Auth integration

`RESEND_API_KEY` - TODO: try integration and describe how to

> secret keys can be generated with `openssl rand -base64 32`

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `RESEND_API_KEY` (TODO: test and adjust) from your Vercel project to your `.env`.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser
5. open `http://localhost:3001` to open email tools in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Pages

  All pages are layout builder enabled so you can generate unique layouts for each page using layout-building blocks, see [Layout Builder](#layout-builder) for more details. Pages are also draft-enabled so you can preview them before publishing them to your website, see [Draft Preview](#draft-preview) for more details.

- #### Media

  This is the uploads enabled collection used by pages to contain media like images, videos, downloads, and other assets. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Globals

See the [Globals](https://payloadcms.com/docs/configuration/globals) docs for details on how to extend this functionality.

- `Header`

  The data required by the header on your front-end like nav links.

- `Footer`

  Same as above but for the footer of your site.

## Access control

Basic access control is setup to limit access to various content based based on publishing status.

- `pages`: Everyone can access published pages, but only admins can create, update, or delete them.

For more details on how to extend this functionality, see the [Payload Access Control](https://payloadcms.com/docs/access-control/overview#access-control) docs.

## Layout Builder

Create unique page layouts for any type of content using a powerful layout builder. This template comes pre-configured with the following layout building blocks:

- Hero
- Content
- Media
- Call To Action

Each block is fully designed and built into the front-end website that comes with this template. See [Website](#website) for more details.

## Lexical editor

A deep editorial experience that allows complete freedom to focus just on writing content without breaking out of the flow with support for Payload blocks, media, links and other features provided out of the box. See [Lexical](https://payloadcms.com/docs/lexical/overview) docs.

## Draft Preview

All pages are draft-enabled so you can preview them before publishing them to your website. To do this, these collections use [Versions](https://payloadcms.com/docs/configuration/collections#versions) with `drafts` set to `true`. This means that when you create a new post, project, or page, it will be saved as a draft and will not be visible on your website until you publish it. This also means that you can preview your draft before publishing it to your website. To do this, we automatically format a custom URL which redirects to your front-end to securely fetch the draft version of your content.

Since the front-end of this template is statically generated, this also means that pages, posts, and projects will need to be regenerated as changes are made to published documents. To do this, we use an `afterChange` hook to regenerate the front-end when a document has changed and its `_status` is `published`.

For more details on how to extend this functionality, see the official [Draft Preview Example](https://github.com/payloadcms/payload/tree/examples/draft-preview).

## Live preview

In addition to draft previews you can also enable live preview to view your end resulting page as you're editing content with full support for SSR rendering. See [Live preview docs](https://payloadcms.com/docs/live-preview/overview) for more details.

## On-demand Revalidation

We've added hooks to collections and globals so that all of your pages, posts, footer, or header changes will automatically be updated in the frontend via on-demand revalidation supported by Nextjs.

> Note: if an image has been changed, for example it's been cropped, you will need to republish the page it's used on in order to be able to revalidate the Nextjs image cache.

## SEO

This template comes pre-configured with the official [Payload SEO Plugin](https://payloadcms.com/docs/plugins/seo) for complete SEO control from the admin panel. All SEO data is fully integrated into the front-end website that comes with this template. See [Website](#website) for more details.

## Jobs and Scheduled Publish

We have configured [Scheduled Publish](https://payloadcms.com/docs/versions/drafts#scheduled-publish) which uses the [jobs queue](https://payloadcms.com/docs/jobs-queue/jobs) in order to publish or unpublish your content on a scheduled time. The tasks are run on a cron schedule and can also be run as a separate instance if needed. How often are jobs executed can be configured in `vercel.json`.

#### Local development

Ideally we recommend running a local copy of your database so that schema updates are as fast as possible. By default the Postgres adapter has `push: true` for development environments. This will let you add, modify and remove fields and collections without needing to run any data migrations.

If your database is pointed to production you will want to set `push: false` otherwise you will risk losing data or having your migrations out of sync.

#### Migrations

[Migrations](https://payloadcms.com/docs/database/migrations) are essentially SQL code versions that keeps track of your schema. When deploy with Postgres you will need to make sure you create and then run your migrations.

Locally create a migration

```bash
pnpm payload migrate:create
```

This creates the migration files you will need to push alongside with your new configuration.

On the server after building and before running `pnpm start` you will want to run your migrations

```bash
pnpm payload migrate
```

This command will check for any migrations that have not yet been run and try to run them and it will keep a record of migrations that have been run in the database.
