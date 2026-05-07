import { StripeSubscriptions } from '@convex-dev/stripe'
import { components } from './_generated/api'
import { action, query } from './_generated/server'

const stripeComponent = components.stripe
const stripeClient = new StripeSubscriptions(stripeComponent, {})

function siteUrl() {
  return process.env.SITE_URL ?? 'http://localhost:3000'
}

export const createHandshakeCheckout = action({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Sign in before starting checkout.')
    }
    const userId = identity.tokenIdentifier

    const priceId = process.env.STRIPE_HANDSHAKE_PRICE_ID
    if (!priceId) {
      throw new Error('STRIPE_HANDSHAKE_PRICE_ID is not configured.')
    }

    const customer = await stripeClient.getOrCreateCustomer(ctx, {
      userId,
      email: identity.email,
      name: identity.name,
    })

    return await stripeClient.createCheckoutSession(ctx, {
      priceId,
      customerId: customer.customerId,
      mode: 'subscription',
      successUrl: `${siteUrl()}/checkout/success?product=handshake`,
      cancelUrl: `${siteUrl()}/checkout/cancel?product=handshake`,
      metadata: {
        userId,
        productKey: 'handshake',
      },
      subscriptionMetadata: {
        userId,
        productKey: 'handshake',
      },
    })
  },
})

export const createCustomerPortal = action({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Sign in before opening billing.')
    }
    const userId = identity.tokenIdentifier

    const subscriptions = (await ctx.runQuery(
      stripeComponent.public.listSubscriptionsByUserId,
      { userId },
    )) as Array<{ stripeCustomerId?: string }>

    const stripeCustomerId = subscriptions.find(
      (subscription) => subscription.stripeCustomerId,
    )?.stripeCustomerId

    if (!stripeCustomerId) {
      throw new Error('No Stripe customer exists for this account.')
    }

    return await stripeClient.createCustomerPortalSession(ctx, {
      customerId: stripeCustomerId,
      returnUrl:
        process.env.STRIPE_CUSTOMER_PORTAL_RETURN_URL ?? `${siteUrl()}/account`,
    })
  },
})

export const listCurrentUserSubscriptions = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return []
    const userId = identity.tokenIdentifier

    return await ctx.runQuery(
      stripeComponent.public.listSubscriptionsByUserId,
      {
        userId,
      },
    )
  },
})
