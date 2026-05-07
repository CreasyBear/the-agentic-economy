import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'
import { contentFields } from './lib/content'

const entitlementStatus = v.union(
  v.literal('none'),
  v.literal('active'),
  v.literal('trialing'),
  v.literal('past_due'),
  v.literal('canceled'),
  v.literal('incomplete'),
  v.literal('incomplete_expired'),
  v.literal('unpaid'),
)

export default defineSchema({
  content: defineTable(contentFields)
    .index('by_slug', ['slug'])
    .index('by_type_status_published', ['type', 'status', 'publishedAt'])
    .index('by_type_status_order', ['type', 'status', 'order'])
    .index('by_product', ['productKey']),

  products: defineTable({
    key: v.string(),
    name: v.string(),
    summary: v.string(),
    publicUrl: v.string(),
    appUrl: v.string(),
    status: v.union(v.literal('active'), v.literal('draft')),
  }).index('by_key', ['key']),

  plans: defineTable({
    productKey: v.string(),
    name: v.string(),
    stripePriceId: v.string(),
    billingInterval: v.union(v.literal('month'), v.literal('year')),
    active: v.boolean(),
    cta: v.string(),
  })
    .index('by_product', ['productKey'])
    .index('by_price', ['stripePriceId']),

  entitlements: defineTable({
    userId: v.string(),
    productKey: v.string(),
    status: entitlementStatus,
    source: v.union(v.literal('stripe'), v.literal('manual')),
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
    currentPeriodEnd: v.optional(v.number()),
    updatedAt: v.number(),
  })
    .index('by_user_product', ['userId', 'productKey'])
    .index('by_subscription', ['stripeSubscriptionId'])
    .index('by_customer', ['stripeCustomerId']),

  redirects: defineTable({
    from: v.string(),
    to: v.string(),
    status: v.union(v.literal(301), v.literal(302)),
  }).index('by_from', ['from']),
})
