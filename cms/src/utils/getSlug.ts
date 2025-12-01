export function getSlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug)
  return decodedSlug
}

export async function getSlugFromParams(params: Promise<{ slug?: string }>) {
  const { slug = "" } = await params
  return getSlug(slug)
}
