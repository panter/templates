import { sendEmailVerification, sendInvite, sendResetPassword } from "@/emails"
import { getURL } from "@/utils/getURL"
import { nextCookies } from "better-auth/next-js"
import { admin, magicLink, multiSession } from "better-auth/plugins"
import type { BetterAuthPlugin as BetterAuthPluginType } from "better-auth/types"
import type { BetterAuthOptions, PayloadAuthOptions } from "payload-auth/better-auth"

export const betterAuthPlugins = [
  // NOTE: ... add/change your better auth plugins here ...

  magicLink({
    sendMagicLink: async () => {
      // NOTE: implement sending change email verification
      throw new Error("Magic link email not implemented")
    },
  }),
  admin(),
  multiSession(),
  nextCookies(),
] satisfies BetterAuthPluginType[]

export const betterAuthOptions = {
  advanced: {
    cookiePrefix: "auth",
  },
  appName: "app",
  baseURL: getURL(),
  trustedOrigins: [getURL()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    revokeSessionsOnPasswordReset: true,
    disableSignUp: false,
    autoSignIn: true,
    resetPasswordTokenExpiresIn: 60 * 60, // 1 hour
    sendResetPassword: async (args) => {
      await sendResetPassword(args)
    },
  },
  socialProviders: {
    // NOTE: ... add social providers here ...
    // e.g.:
    // google: {
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async (args) => {
      await sendEmailVerification(args)
    },
  },
  plugins: betterAuthPlugins,
  user: {
    changeEmail: {
      enabled: false,
      sendChangeEmailVerification: async () => {
        // NOTE: implement sending change email verification
        throw new Error("Change email verification not implemented")
      },
    },
    deleteUser: {
      enabled: false,
      sendDeleteAccountVerification: async () => {
        // NOTE: implement sending delete account verification
        throw new Error("Delete account verification not implemented")
      },
      beforeDelete: async () => {
        // Perform actions before user deletion
      },
      afterDelete: async () => {
        // Perform cleanup after user deletion
      },
    },
  },
  session: {
    cookieCache: {
      // NOTE: revoked session will still have access until cookie cache expires if enabled
      enabled: false,
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

// TODO: impersonate feature is not working: https://github.com/payload-auth/payload-auth/issues/128

export const betterAuthPluginOptions = {
  debug: {
    logTables: false,
    enableDebugLogs: false,
  },
  // NOTE: use passkey for admins to get additional security:
  // admin: {
  //   loginMethods: ["passkey"],
  // },
  disableDefaultPayloadAuth: true,
  hidePluginCollections: false,
  users: {
    slug: "users",
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
    sendInviteEmail: async ({ email, url }) => {
      const result = await sendInvite({ email, url })

      if (result.error) {
        return {
          success: false,
          message: result.error.message,
        }
      }

      return {
        success: true,
      }
    },
  },
  betterAuthOptions: betterAuthOptions,
} satisfies PayloadAuthOptions

export type ConstructedBetterAuthPluginOptions = typeof betterAuthPluginOptions
export type BetterAuthPlugins = typeof betterAuthPlugins
