import type { Locale } from "@/i18n"
import canUseDOM from "@/utils/canUseDOM"

type FullKey = `${Locale}.${string}`
type Listener = () => void

const STORAGE_KEY = "_translateChanges"

let state: Record<FullKey, string> = loadFromStorage()

const globalListeners = new Set<Listener>()
const keyListeners = new Map<FullKey, Set<Listener>>()

function loadFromStorage(): Record<FullKey, string> {
  try {
    if (!canUseDOM) return {}
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return {}
    return JSON.parse(stored) as Record<FullKey, string>
  } catch (error) {
    console.error("Failed to load translate changes from localStorage:", error)
    return {}
  }
}

function persistToStorage() {
  if (!canUseDOM) return

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function notifyGlobal() {
  globalListeners.forEach((listener) => listener())
}

function notifyKey(key: FullKey) {
  const listeners = keyListeners.get(key)
  if (listeners) {
    listeners.forEach((listener) => listener())
  }
}

export const changesStore = {
  getValue(key: FullKey): string | undefined {
    return state[key]
  },

  setValue(key: FullKey, value: string | null) {
    const prevValue = state[key]

    if (value === null) {
      if (prevValue === undefined) return
      const { [key]: _, ...rest } = state
      state = rest as Record<FullKey, string>
    } else {
      if (prevValue === value) return
      state = { ...state, [key]: value }
    }

    notifyKey(key)
    notifyGlobal()
    persistToStorage()
  },

  getSnapshot(): Record<FullKey, string> {
    return state
  },

  getChangeCount(): number {
    return Object.keys(state).length
  },

  reset() {
    const prevKeys = Object.keys(state) as FullKey[]
    state = {}

    prevKeys.forEach((key) => notifyKey(key))
    notifyGlobal()
    persistToStorage()
  },

  subscribe(listener: Listener): () => void {
    globalListeners.add(listener)
    return () => {
      globalListeners.delete(listener)
    }
  },

  subscribeToKey(key: FullKey, listener: Listener): () => void {
    let listeners = keyListeners.get(key)
    if (!listeners) {
      listeners = new Set()
      keyListeners.set(key, listeners)
    }
    listeners.add(listener)

    return () => {
      listeners!.delete(listener)
      if (listeners!.size === 0) {
        keyListeners.delete(key)
      }
    }
  },
}
