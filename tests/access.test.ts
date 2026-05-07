import { describe, expect, it } from 'vitest'
import {
  hasActiveAccess,
  normalizeStripeStatus,
  toAccessResult,
} from '../convex/lib/access'

describe('entitlement access contract', () => {
  it('allows active and trialing subscriptions', () => {
    expect(hasActiveAccess('active')).toBe(true)
    expect(hasActiveAccess('trialing')).toBe(true)
  })

  it('denies canceled and missing access with a reason', () => {
    expect(toAccessResult('handshake', 'canceled')).toEqual({
      hasAccess: false,
      productKey: 'handshake',
      status: 'canceled',
      reason: 'Subscription status is canceled.',
    })

    expect(toAccessResult('handshake', null)).toEqual({
      hasAccess: false,
      productKey: 'handshake',
      status: 'none',
      reason: 'No subscription is linked to this account.',
    })
  })

  it('normalizes unknown Stripe statuses to none', () => {
    expect(normalizeStripeStatus('active')).toBe('active')
    expect(normalizeStripeStatus('paused')).toBe('none')
  })
})
