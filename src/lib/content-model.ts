export type ContentType = 'page' | 'product' | 'essay'
export type ContentStatus = 'draft' | 'published'

export type ContentImage = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export type ContentRecord = {
  type: ContentType
  slug: string
  legacySlugs?: Array<string>
  title: string
  eyebrow?: string
  description?: string
  summary: string
  body?: string
  bodyMdx?: string
  status: ContentStatus
  publishedAt?: number
  order?: number
  seriesKey?: string
  collectionKey?: string
  heroImage?: ContentImage
  seo?: {
    title?: string
    description?: string
    canonicalPath?: string
    ogImage?: string
  }
  productKey?: string
  sourcePath?: string
  sourceChecksum?: string
}

export function listPublished(
  records: Array<ContentRecord>,
  type: ContentType,
  limit = 24,
) {
  return records
    .filter((record) => record.type === type && record.status === 'published')
    .sort(sortPublishedRecords)
    .slice(0, limit)
}

export function getPublishedBySlug(
  records: Array<ContentRecord>,
  type: ContentType,
  slug: string,
) {
  return (
    records.find(
      (record) =>
        record.type === type &&
        record.status === 'published' &&
        (record.slug === slug || record.legacySlugs?.includes(slug)),
    ) ?? null
  )
}

export function getContentBody(record: ContentRecord) {
  return record.bodyMdx ?? record.body ?? ''
}

export function getCanonicalPath(record: ContentRecord) {
  if (record.seo?.canonicalPath) return record.seo.canonicalPath
  if (record.type === 'product') return `/${record.slug}`
  return `/writing/${record.slug}`
}

export function getAdjacentPublished(
  records: Array<ContentRecord>,
  type: ContentType,
  slug: string,
) {
  const published = listPublished(records, type)
  const index = published.findIndex(
    (record) => record.slug === slug || record.legacySlugs?.includes(slug),
  )

  return {
    previous: index > 0 ? toContentPreview(published[index - 1]) : null,
    next:
      index >= 0 && index < published.length - 1
        ? toContentPreview(published[index + 1])
        : null,
  }
}

export function toContentPreview(record: ContentRecord) {
  const { body: _body, bodyMdx: _bodyMdx, ...preview } = record
  return preview
}

function sortPublishedRecords(a: ContentRecord, b: ContentRecord) {
  if (typeof a.order === 'number' && typeof b.order === 'number') {
    return a.order - b.order
  }

  if (typeof a.order === 'number') return -1
  if (typeof b.order === 'number') return 1

  return (b.publishedAt ?? 0) - (a.publishedAt ?? 0)
}
