import { v } from 'convex/values'
import { internalMutation, query } from './_generated/server'
import { contentRecord, contentType } from './lib/content'

const published = 'published' as const

export const listPublishedByType = query({
  args: {
    type: contentType,
    limit: v.optional(v.number()),
    sortBy: v.optional(v.union(v.literal('publishedAt'), v.literal('order'))),
  },
  handler: async (ctx, args) => {
    const limit = clampLimit(args.limit)

    if (args.sortBy === 'order') {
      return await ctx.db
        .query('content')
        .withIndex('by_type_status_order', (q) =>
          q.eq('type', args.type).eq('status', published),
        )
        .order('asc')
        .take(limit)
    }

    return await ctx.db
      .query('content')
      .withIndex('by_type_status_published', (q) =>
        q.eq('type', args.type).eq('status', published),
      )
      .order('desc')
      .take(limit)
  },
})

export const getPublishedBySlug = query({
  args: {
    type: contentType,
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    const rows = await ctx.db
      .query('content')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .take(32)

    const exact =
      rows.find(
        (row) =>
          row.type === args.type &&
          row.status === published &&
          row.slug === args.slug,
      ) ?? null

    if (exact) return exact

    const candidates = await ctx.db
      .query('content')
      .withIndex('by_type_status_order', (q) =>
        q.eq('type', args.type).eq('status', published),
      )
      .take(100)

    return (
      candidates.find((row) => row.legacySlugs?.includes(args.slug)) ?? null
    )
  },
})

export const listRedirects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('redirects').take(200)
  },
})

export const upsertImportedContent = internalMutation({
  args: {
    records: v.array(contentRecord),
  },
  handler: async (ctx, args) => {
    let changed = 0
    for (const record of args.records) {
      const existing = await ctx.db
        .query('content')
        .withIndex('by_slug', (q) => q.eq('slug', record.slug))
        .take(32)

      const exact = existing.find((row) => row.type === record.type)
      if (exact) {
        await ctx.db.patch('content', exact._id, record)
      } else {
        await ctx.db.insert('content', record)
      }
      changed += 1
    }

    return { changed }
  },
})

function clampLimit(limit: number | undefined) {
  if (limit === undefined) return 24
  return Math.min(Math.max(Math.trunc(limit), 1), 100)
}
