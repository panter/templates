import canUseDOM from "./canUseDOM"

/**
 * Returns the site's base URL without a trailing slash
 */
export const getURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ""}`
  }

  const hostname =
    process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_BRANCH_URL
      : process.env.VERCEL_PROJECT_PRODUCTION_URL

  return hostname ? `https://${hostname}` : "http://localhost:3000"
}
