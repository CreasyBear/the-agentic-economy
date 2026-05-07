export const activeAccessStatuses = ['active', 'trialing'] as const

export type EntitlementStatus =
  | 'none'
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'unpaid'

export type AccessResult = {
  hasAccess: boolean
  productKey: string
  status: EntitlementStatus
  reason?: string
}

export function hasActiveAccess(status: EntitlementStatus | null | undefined) {
  return status === 'active' || status === 'trialing'
}

export function toAccessResult(
  productKey: string,
  status: EntitlementStatus | null | undefined,
): AccessResult {
  const normalized = status ?? 'none'
  if (hasActiveAccess(normalized)) {
    return { hasAccess: true, productKey, status: normalized }
  }

  const reason =
    normalized === 'none'
      ? 'No subscription is linked to this account.'
      : `Subscription status is ${normalized}.`

  return { hasAccess: false, productKey, status: normalized, reason }
}

export function normalizeStripeStatus(
  status: string | null | undefined,
): EntitlementStatus {
  switch (status) {
    case 'active':
    case 'trialing':
    case 'past_due':
    case 'canceled':
    case 'incomplete':
    case 'incomplete_expired':
    case 'unpaid':
      return status
    default:
      return 'none'
  }
}
