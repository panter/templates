"use client"

import type { Locale } from "@/i18n"
import { ALL_LOCALE_CODES, DEFAULT_LOCALE } from "@/i18n/config"
import { Button, Gutter, SelectInput } from "@payloadcms/ui"
import { PlusIcon, XIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { publish } from "./publish"
import { TranslateRow } from "./TranslateRow"
import { useAllChanges, useChangeCount, useResetChanges } from "./useChanges"

import "./List.scss"

export function List({
  currentMessages,
  apiUrl,
  project,
}: {
  currentMessages: Record<`${Locale}.${string}`, string>
  apiUrl: string
  project: string
}) {
  const [columns, setColumns] = useState<ColumnConfig[]>(getDefaultColumns)
  const [isPublishing, setIsPublishing] = useState(false)

  const changeCount = useChangeCount()
  const allChanges = useAllChanges()
  const resetChanges = useResetChanges()

  const allKeys = useMemo(
    () => [
      ...new Set<string>(Object.keys(currentMessages).map((k) => k.split(".").slice(1).join("."))),
    ],
    [currentMessages],
  )

  // Get locales currently used in other columns
  const getUsedLocales = (excludeId: string): Locale[] => {
    return columns.filter((c) => c.id !== excludeId).map((c) => c.locale)
  }

  // Get available locales for a column (not used in other columns)
  const getAvailableLocales = (currentId: string): Locale[] => {
    const used = getUsedLocales(currentId)
    return ALL_LOCALE_CODES.filter((l) => !used.includes(l)) as Locale[]
  }

  const addColumn = () => {
    const usedLocales = columns.map((c) => c.locale)
    const availableLocale = ALL_LOCALE_CODES.find((l) => !usedLocales.includes(l))
    if (availableLocale) {
      setColumns((prev) => [...prev, { id: generateId(), locale: availableLocale }])
    }
  }

  const removeColumn = (id: string) => {
    if (columns.length > 1) {
      setColumns((prev) => prev.filter((c) => c.id !== id))
    }
  }

  const changeColumnLocale = (id: string, locale: Locale) => {
    setColumns((prev) => prev.map((c) => (c.id === id ? { ...c, locale } : c)))
  }

  const handlePublish = async () => {
    if (changeCount === 0 || isPublishing) return

    setIsPublishing(true)
    try {
      const messages = Object.entries(allChanges).map(([fullKey, value]) => {
        const [locale, ...keyParts] = fullKey.split(".")
        const key = `${locale}.${keyParts.join(".")}`
        const oldValue = currentMessages[fullKey as `${Locale}.${string}`] ?? ""

        return {
          key,
          oldValue,
          value,
        }
      })

      const result = await publish(apiUrl, { project, messages })

      if (result.success) {
        window.open(result.url, "_blank")
        resetChanges()
      } else {
        alert("Failed to publish changes")
      }
    } finally {
      setIsPublishing(false)
    }
  }

  const canAddColumn = columns.length < 4
  const canRemoveColumn = columns.length > 1

  return (
    <Gutter>
      <h1>Static Texts</h1>

      <div className="actions">
        <Button
          buttonStyle="primary"
          onClick={handlePublish}
          disabled={changeCount === 0 || isPublishing}
        >
          {isPublishing ? "Publishing..." : "Publish Changes"}
        </Button>

        <Button
          size="small"
          buttonStyle="subtle"
          onClick={resetChanges}
          disabled={changeCount === 0}
        >
          Reset All
        </Button>

        {changeCount > 0 && (
          <span>
            {changeCount} pending change{changeCount !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div className="table-wrap">
        <div className="table">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Key</th>
                {columns.map((column) => (
                  <th key={column.id}>
                    <div className="select-language">
                      <SelectInput
                        name=""
                        path=""
                        hasMany={false}
                        isClearable={false}
                        options={getAvailableLocales(column.id).map((locale) => ({
                          label: locale.toUpperCase(),
                          value: locale,
                        }))}
                        value={column.locale}
                        onChange={(option) =>
                          changeColumnLocale(column.id, (option as { value: Locale }).value)
                        }
                      />

                      <Button
                        size="xsmall"
                        buttonStyle="subtle"
                        onClick={() => removeColumn(column.id)}
                        disabled={!canRemoveColumn}
                      >
                        <XIcon size="12" />
                      </Button>
                    </div>
                  </th>
                ))}
                <th>
                  <Button
                    size="xsmall"
                    buttonStyle="primary"
                    onClick={addColumn}
                    disabled={!canAddColumn}
                  >
                    <PlusIcon size="12" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {allKeys.map((key) => (
                <TranslateRow
                  key={key}
                  messageKey={key}
                  columns={columns}
                  currentMessages={currentMessages}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Gutter>
  )
}

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

function getDefaultColumns(): ColumnConfig[] {
  const secondLocale = ALL_LOCALE_CODES.find((l) => l !== DEFAULT_LOCALE)
  return [
    { id: generateId(), locale: DEFAULT_LOCALE },
    ...(secondLocale ? [{ id: generateId(), locale: secondLocale }] : []),
  ]
}

type ColumnConfig = { id: string; locale: Locale }
