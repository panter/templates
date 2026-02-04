import type { ALL_LOCALE_CODES } from "@/i18n/config"
import type { CollectionSlug, GeneratedTypes } from "payload"

/**
 * Unwraps a PayloadCMS collection, ensuring it's populated (not just an ID).
 * @throws {Error} When collection is a number (ID of the collection)
 */
export function unwrapCollection<T extends GeneratedTypes["collections"][CollectionSlug]>(
  collection: T | number | null | undefined,
) {
  assertCollection(collection)
  return collection
}

/**
 * Asserts that a PayloadCMS collection is populated (not just an ID).
 * When unpopulated, PayloadCMS returns the document ID as a number instead of the full object.
 * @throws {Error} When collection is a number (unpopulated ID)
 */
export function assertCollection<T extends GeneratedTypes["collections"][CollectionSlug]>(
  collection: T | number | null | undefined,
): asserts collection is T | null | undefined {
  if (typeof collection === "number") {
    throw new Error("collection field is number")
  }
}

/**
 * Safely extracts a populated PayloadCMS collection.
 * Returns null if the collection is not populated, null, or undefined.
 */
export function collectionOrNull<T extends GeneratedTypes["collections"][CollectionSlug]>(
  collection: T | number | null | undefined,
) {
  if (collection === null || collection === undefined || typeof collection === "number") {
    return null
  }
  return collection
}

/**
 * Safely extracts a populated PayloadCMS collection list.
 * Returns empty array if the array is not populated, null, or undefined.
 */
export function collectionsOrEmpty<T extends GeneratedTypes["collections"][CollectionSlug]>(
  collections: (T | number | null | undefined)[] | null | undefined,
) {
  if (!collections) return []

  if (collectionOrNull(collections[0]) === null) {
    // If the first item is not populated, assume none are populated
    return []
  }

  return collections as T[]
}

export function asAllLocales(fieldWithAllLocales: unknown) {
  if (typeof fieldWithAllLocales !== "object" || fieldWithAllLocales === null) {
    return null
  }

  const translations = fieldWithAllLocales as Record<
    (typeof ALL_LOCALE_CODES)[number],
    string | null | undefined
  >
  return translations
}
