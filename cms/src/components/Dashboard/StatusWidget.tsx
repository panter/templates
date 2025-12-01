import type { WidgetServerProps } from "payload"

export default async function StatusWidget({ req }: WidgetServerProps) {
  const { totalDocs } = await req.payload.count({
    collection: "pages",
  })

  return (
    <div>
      <h2>Status Widget</h2>
      <p>This is an example of custom dashboard widget</p>
      <p>
        Number of pages: <strong>{totalDocs}</strong>
      </p>
    </div>
  )
}
