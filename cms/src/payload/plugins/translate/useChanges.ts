import type { Locale } from "@/i18n"
import { useCallback, useSyncExternalStore } from "react"
import { changesStore } from "./changesStore"

type FullKey = `${Locale}.${string}`

export function useCellValue(key: FullKey): [string | undefined, (value: string | null) => void] {
  const subscribe = useCallback(
    (onStoreChange: () => void) => changesStore.subscribeToKey(key, onStoreChange),
    [key],
  )

  const getSnapshot = useCallback(() => changesStore.getValue(key), [key])

  const value = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const setValue = useCallback(
    (newValue: string | null) => {
      changesStore.setValue(key, newValue)
    },
    [key],
  )

  return [value, setValue]
}

export function useChangeCount(): number {
  const subscribe = useCallback(
    (onStoreChange: () => void) => changesStore.subscribe(onStoreChange),
    [],
  )

  const getSnapshot = useCallback(() => changesStore.getChangeCount(), [])

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

export function useAllChanges(): Record<FullKey, string> {
  const subscribe = useCallback(
    (onStoreChange: () => void) => changesStore.subscribe(onStoreChange),
    [],
  )

  const getSnapshot = useCallback(() => changesStore.getSnapshot(), [])

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

export function useResetChanges(): () => void {
  return useCallback(() => {
    changesStore.reset()
  }, [])
}
