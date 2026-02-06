"use client"

import type { Locale } from "@/i18n"
import { memo } from "react"
import { TranslateCell } from "./TranslateCell"

type FullKey = `${Locale}.${string}`

type ColumnConfig = { id: string; locale: Locale }

type TranslateRowProps = {
  messageKey: string
  columns: ColumnConfig[]
  currentMessages: Record<FullKey, string>
}

export const TranslateRow = memo(function TranslateRow({
  messageKey,
  columns,
  currentMessages,
}: TranslateRowProps) {
  return (
    <tr>
      <td>{messageKey}</td>
      {columns.map((column) => {
        const fullKey = `${column.locale}.${messageKey}` as FullKey
        const initialMessage = currentMessages[fullKey]

        return <TranslateCell key={column.id} fullKey={fullKey} initialMessage={initialMessage} />
      })}
      <td></td>
    </tr>
  )
})
