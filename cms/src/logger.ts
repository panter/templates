import { pino } from "pino"
import { build } from "pino-pretty"

export function createLogger() {
  const isProd = process.env.NODE_ENV === "production"

  const loggerDestination = build({
    colorize: !isProd,
    ignore: "pid,hostname",
    translateTime: "SYS:HH:MM:ss",
    destination: 1, // stdout
    singleLine: isProd,
    sync: true,
  })

  return pino(loggerDestination)
}
