"use client"

import type { Locale } from "@/i18n"
import { memo, useState } from "react"
import { useCellValue } from "./useChanges"

type FullKey = `${Locale}.${string}`

type TranslateCellProps = {
  fullKey: FullKey
  initialMessage: string | undefined
}

export const TranslateCell = memo(function TranslateCell({
  fullKey,
  initialMessage,
}: TranslateCellProps) {
  const [changedValue, setChangedValue] = useCellValue(fullKey)
  const [edit, setEdit] = useState(false)

  const currentValue = changedValue ?? initialMessage ?? ""
  const isChanged = changedValue !== undefined && changedValue !== initialMessage

  return (
    <td
      style={{
        ...(isChanged ? { background: "var(--theme-success-100)" } : {}),
        ...(!currentValue ? { background: "var(--theme-warning-100)" } : {}),
      }}
      onClick={() => setEdit(true)}
    >
      {edit ? (
        <textarea
          autoFocus
          style={{
            width: "100%",
            borderRadius: "calc(var(--base) * 0.25)",
            padding: "calc(var(--base) * 0.5)",
          }}
          rows={3}
          onBlur={() => setEdit((edit) => !edit)}
          value={currentValue}
          onChange={(e) => setChangedValue(e.target.value)}
        />
      ) : (
        <div>{currentValue}</div>
      )}
    </td>
  )
})
