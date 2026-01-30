import { MCPClient } from "@mastra/mcp";

export const payloadMcpClient = new MCPClient({
  id: "payload-mcp-client",
  servers: {
    payload: {
      requestInit: {
        headers: {
          Authorization: `Bearer 74821881-5719-46a3-92d4-477e80784e57`,
        },
      },
      url: new URL(
        `http://localhost:3000/api/mcp`,
      ),
    },
  },
});
