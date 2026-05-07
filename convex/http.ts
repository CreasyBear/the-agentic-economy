import { httpRouter } from 'convex/server'
import { registerRoutes } from '@convex-dev/stripe'
import { components, internal } from './_generated/api'
import type Stripe from 'stripe'

const http = httpRouter()
const stripeComponent = components.stripe

function subscriptionPayload(subscription: Stripe.Subscription) {
  const productKey = subscription.metadata.productKey || 'handshake'
  const userId = subscription.metadata.userId
  if (subscription.items.data.length === 0) return null

  const subscriptionItem = subscription.items.data[0]
  const priceId = subscriptionItem.price.id

  if (productKey === 'handshake') {
    const expectedPriceId = process.env.STRIPE_HANDSHAKE_PRICE_ID
    if (expectedPriceId && priceId !== expectedPriceId) {
      return null
    }
  }

  if (!userId) return null

  return {
    userId,
    productKey,
    status: subscription.status,
    stripeCustomerId:
      typeof subscription.customer === 'string'
        ? subscription.customer
        : subscription.customer.id,
    stripeSubscriptionId: subscription.id,
    currentPeriodEnd: subscriptionItem.current_period_end,
  }
}

registerRoutes(http, stripeComponent, {
  webhookPath: '/stripe/webhook',
  events: {
    'customer.subscription.created': async (ctx, event) => {
      const payload = subscriptionPayload(event.data.object)
      if (payload) {
        await ctx.runMutation(
          internal.entitlements.syncFromStripeSubscription,
          payload,
        )
      }
    },
    'customer.subscription.updated': async (ctx, event) => {
      const payload = subscriptionPayload(event.data.object)
      if (payload) {
        await ctx.runMutation(
          internal.entitlements.syncFromStripeSubscription,
          payload,
        )
      }
    },
    'customer.subscription.deleted': async (ctx, event) => {
      const payload = subscriptionPayload(event.data.object)
      if (payload) {
        await ctx.runMutation(
          internal.entitlements.syncFromStripeSubscription,
          payload,
        )
      }
    },
  },
})

export default http
