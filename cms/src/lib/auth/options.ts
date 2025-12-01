import { getURL } from "@/utils/getURL"
import { nextCookies } from "better-auth/next-js"
import { admin, magicLink, multiSession } from "better-auth/plugins"
import type { BetterAuthPlugin as BetterAuthPluginType } from "better-auth/types"
import type { BetterAuthOptions, PayloadAuthOptions } from "payload-auth/better-auth"

export const betterAuthPlugins = [
  // ... add/change your better auth plugins here ...
  magicLink({
    sendMagicLink: async ({ email, token, url }, request) => {
      console.log("Send magic link for user: ", email, token, url)
    },
  }),
  admin(),
  multiSession(),
  nextCookies(),
] satisfies BetterAuthPluginType[]

export const betterAuthOptions = {
  appName: "app",
  baseURL: getURL(),
  trustedOrigins: [getURL()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
    async sendResetPassword({ user, url }) {
      console.log("Send reset password for user: ", user.id, "at url", url)
    },
  },
  socialProviders: {
    // ... add social providers here ...
    // e.g.:
    // google: {
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ user, url }) {
      console.log("Send verification email for user: ", url)
    },
  },
  plugins: betterAuthPlugins,
  user: {
    changeEmail: {
      enabled: true,
      sendChangeEmailVerification: async ({ user, newEmail, url, token }) => {
        console.log("Send change email verification for user: ", user, newEmail, url, token)
      },
    },
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async ({ user, url, token }) => {
        // Send delete account verification
      },
      beforeDelete: async (user) => {
        // Perform actions before user deletion
      },
      afterDelete: async (user) => {
        // Perform cleanup after user deletion
      },
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["email-password"],
    },
  },
} satisfies BetterAuthOptions

export type ConstructedBetterAuthOptions = typeof betterAuthOptions

// TODO: revoke all sessions does not work
// TODO: impersonate throws error

export const betterAuthPluginOptions = {
  debug: {
    logTables: false,
    enableDebugLogs: false,
  },
  // admin: {
  //   loginMethods: ["passkey"],
  // },
  disableDefaultPayloadAuth: true,
  hidePluginCollections: false,
  users: {
    slug: "users", // not required, this is the default anyways
    hidden: false,
    adminRoles: ["admin"],
    defaultRole: "user",
    defaultAdminRole: "admin",
    roles: ["user", "admin", "publisher"] as const,
    allowedFields: ["name"],
  },
  accounts: {
    slug: "accounts",
  },
  sessions: {
    slug: "sessions",
  },
  verifications: {
    slug: "verifications",
  },
  adminInvitations: {
    sendInviteEmail: async ({ payload, email, url }) => {
      console.log("Send admin invite: ", email, url)
      return {
        success: true,
      }
    },
  },
  betterAuthOptions: betterAuthOptions,
} satisfies PayloadAuthOptions

export type ConstructedBetterAuthPluginOptions = typeof betterAuthPluginOptions
export type BetterAuthPlugins = typeof betterAuthPlugins
