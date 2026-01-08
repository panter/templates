import type { TaskConfig } from "payload"

export const processPaymentTask = {
  slug: "processPayment",
  retries: 4,
  inputSchema: [
    { name: "externalPaymentId", type: "text", required: true },
    { name: "orderId", type: "text", required: true },
  ],
  outputSchema: [],
  handler: async ({ input, req }) => {
    req.payload.logger.info({ input }, "processing payment (example task)")

    if (Math.random() < 0.2) {
      req.payload.logger.error({ input }, "payment gateway error (example task)")

      return {
        state: "failed",
        errorMessage: "payment gateway error",
      }
    }

    req.payload.logger.info({ input }, "payment processed successfully (example task)")

    return {
      output: null,
      state: "succeeded",
    }
  },
} satisfies TaskConfig<"processPayment">
