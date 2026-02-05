export async function publish(
  apiUrl: string,
  data: {
    project: string
    messages: {
      key: string
      oldValue: string
      value: string
    }[]
  },
) {
  try {
    const response = await fetch(`${apiUrl}/api/publishes/draft`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      return { success: false as const }
    }

    return (await response.json()) as { success: true; url: string; token: string }
  } catch (e) {
    console.error("error publishing messages:", e)
    return { success: false as const }
  }
}
