import { v } from 'convex/values'
import { components } from './_generated/api'
import { internalMutation, query } from './_generated/server'
import { normalizeStripeStatus, toAccessResult } from './lib/access'

const productKeyValidator = v.string()
const stripeComponent = components.stripe

export const getCurrentUserAccess = query({
  args: {
    productKey: productKeyValidator,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return {
        hasAccess: false,
        productKey: args.productKey,
        status: 'none' as const,
        reason: 'No signed-in Clerk session.',
      }
    }
    const userId = identity.tokenIdentifier

    const override = await ctx.db
      .query('entitlements')
      .withIndex('by_user_product', (q) =>
        q.eq('userId', userId).eq('productKey', args.productKey),
      )
      .unique()

    if (override && override.source === 'manual') {
      return toAccessResult(args.productKey, override.status)
    }

    const subscriptions = (await ctx.runQuery(
      stripeComponent.public.listSubscriptionsByUserId,
      { userId },
    )) as Array<{
      status?: string
      priceId?: string
      currentPeriodEnd?: number
      stripeCustomerId?: string
      stripeSubscriptionId?: string
      metadata?: Record<string, string>
    }>

    const expectedPriceId =
      args.productKey === 'handshake'
        ? process.env.STRIPE_HANDSHAKE_PRICE_ID
        : undefined

    const matching = subscriptions.find((subscription) => {
      if (subscription.metadata?.productKey === args.productKey) return true
      if (!expectedPriceId) return false
      return subscription.priceId === expectedPriceId
    })

    const derivedStatus = normalizeStripeStatus(matching?.status)
    if (override && override.source === 'stripe') {
      const overrideStatus = override.status
      if (overrideStatus !== derivedStatus && derivedStatus !== 'none') {
        return toAccessResult(args.productKey, derivedStatus)
      }
      return toAccessResult(args.productKey, overrideStatus)
    }

    return toAccessResult(args.productKey, derivedStatus)
  },
})

export const syncFromStripeSubscription = internalMutation({
  args: {
    userId: v.string(),
    productKey: v.string(),
    status: v.string(),
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
    currentPeriodEnd: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const status = normalizeStripeStatus(args.status)
    const existing = await ctx.db
      .query('entitlements')
      .withIndex('by_user_product', (q) =>
        q.eq('userId', args.userId).eq('productKey', args.productKey),
      )
      .unique()

    const entitlement = {
      userId: args.userId,
      productKey: args.productKey,
      status,
      source: 'stripe' as const,
      stripeCustomerId: args.stripeCustomerId,
      stripeSubscriptionId: args.stripeSubscriptionId,
      currentPeriodEnd: args.currentPeriodEnd,
      updatedAt: Date.now(),
    }

    if (existing) {
      await ctx.db.patch('entitlements', existing._id, entitlement)
      return existing._id
    }

    return await ctx.db.insert('entitlements', entitlement)
  },
})
