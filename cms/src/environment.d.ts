declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URI: string
      VERCEL_ENV: "production" | "preview" | "development"
      VERCEL_BRANCH_URL: string | undefined
      VERCEL_PROJECT_PRODUCTION_URL: string | undefined
      BETTER_AUTH_SECRET: string
      RESEND_API_KEY: string | undefined
      EMAIL_FROM_ADDRESS: string
      EMAIL_FROM_NAME: string
      NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: string | undefined
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
