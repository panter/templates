import { MCPClient } from "@mastra/mcp"

export const payloadMcpClient = new MCPClient({
  id: "payload-mcp-client",
  servers: {
    payload: {
      requestInit: {
        headers: {
          Authorization: `Bearer 84ca0b7d-b2d3-4d2c-8ad8-cf675ae411cf`,
        },
      },
      url: new URL(`http://localhost:3000/api/mcp`),
    },
  },
})
