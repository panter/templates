declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URI: string
      VERCEL_PROJECT_PRODUCTION_URL: string
      BETTER_AUTH_SECRET: string
      RESEND_API_KEY: string
      EMAIL_FROM_ADDRESS: string
      EMAIL_FROM_NAME: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
