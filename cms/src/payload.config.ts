import { defaultLexical } from "@/fields/defaultLexical"
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import path from "path"
import type { PayloadRequest } from "payload"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"
import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Footer } from "./Footer/config"
import { Header } from "./Header/config"
import { ALL_LOCALE_CODES, DEFAULT_LOCALE } from "./i18n/config"
import { plugins } from "./plugins"
import { getURL } from "./utils/getURL"
import { resendAdapter } from "@payloadcms/email-resend"

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
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
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

  email: resendAdapter({
    apiKey: process.env.RESEND_API_KEY,
    defaultFromAddress: process.env.EMAIL_FROM_ADDRESS,
    defaultFromName: process.env.EMAIL_FROM_NAME,
  }),

  jobs: {
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

    tasks: [],
  },
})
