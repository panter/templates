import { getTranslations } from "@panter/translate/next-intl/server"

export async function DraftIndicator() {
  const t = await getTranslations("draft")

  return <div className="border-warning bg-warning/50 rounded border p-4">{t("indicator")}</div>
}
