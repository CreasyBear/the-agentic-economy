import { v } from 'convex/values'

export const contentStatus = v.union(v.literal('draft'), v.literal('published'))

export const contentType = v.union(
  v.literal('page'),
  v.literal('product'),
  v.literal('essay'),
)

export const contentImage = v.object({
  src: v.string(),
  alt: v.optional(v.string()),
  width: v.optional(v.number()),
  height: v.optional(v.number()),
})

export const seoFields = v.object({
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  canonicalPath: v.optional(v.string()),
  ogImage: v.optional(v.string()),
})

export const contentFields = {
  type: contentType,
  slug: v.string(),
  legacySlugs: v.optional(v.array(v.string())),
  title: v.string(),
  eyebrow: v.optional(v.string()),
  description: v.optional(v.string()),
  summary: v.string(),
  body: v.optional(v.string()),
  bodyMdx: v.optional(v.string()),
  status: contentStatus,
  publishedAt: v.optional(v.number()),
  order: v.optional(v.number()),
  seriesKey: v.optional(v.string()),
  collectionKey: v.optional(v.string()),
  heroImage: v.optional(contentImage),
  seo: v.optional(seoFields),
  productKey: v.optional(v.string()),
  sourcePath: v.optional(v.string()),
  sourceChecksum: v.optional(v.string()),
}

export const contentRecord = v.object(contentFields)
