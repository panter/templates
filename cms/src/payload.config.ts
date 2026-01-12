import { defaultLexical } from "@/payload/fields/defaultLexical"
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import path from "path"
import type { PayloadRequest } from "payload"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"
import { Media } from "./payload/collections/Media"
import { Pages } from "./payload/collections/Pages"
import { Footer } from "./payload/Footer/config"
import { Header } from "./payload/Header/config"
import { ALL_LOCALE_CODES, DEFAULT_LOCALE } from "./i18n/config"
import { plugins } from "./payload/plugins"
import { getURL } from "./utils/getURL"
import { processPaymentTask } from "./payload/tasks/processPayment"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      graphics: {
        Logo: "@/components/Logo#Logo",
        Icon: "@/components/LogoIcon#LogoIcon",
      },
    },
    dashboard: {
      // NOTE: example of a custom dashboard:
      defaultLayout: () => [
        { widgetSlug: "status-widget", width: "full" },
        { widgetSlug: "collections", width: "full" },
      ],
      widgets: [
        {
          ComponentPath: "@/components/Dashboard/StatusWidget",
          slug: "status-widget",
          label: "Status Widget (Example)",
        },
      ],
    },

    importMap: {
      baseDir: path.resolve(dirname),
    },

    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },

  // this configures global or default features that the other editors can inherit
  editor: defaultLexical,

  db: vercelPostgresAdapter({
    migrationDir: path.resolve(dirname, "payload/migrations"),
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
      max: 500,
    },
    // NOTE: setting to false to avoid accidental db schema changes in production
    // feel free to set to true in development with a local db or with your database branch
    push: false,
  }),

  localization: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...ALL_LOCALE_CODES],
  },

  collections: [Pages, Media],
  globals: [Header, Footer],

  serverURL: getURL(),
  cors: [getURL()],
  graphQL: {
    disable: true,
  },

  plugins: [
    ...plugins,
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],

  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  // NOTE: we use src/lib/email.ts for emailing
  email: undefined,

  jobs: {
    jobsCollectionOverrides: ({ defaultJobsCollection }) => {
      if (!defaultJobsCollection.admin) {
        defaultJobsCollection.admin = {}
      }

      defaultJobsCollection.admin.hidden = false
      defaultJobsCollection.admin.defaultColumns = [
        "id",
        "input",
        "taskSlug",
        "workflowSlug",
        "queue",
        "waitUntil",
        "processing",
        "totalTried",
        "error",
      ]
      return defaultJobsCollection
    },

    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get("authorization")
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },

    tasks: [processPaymentTask],
  },
})
