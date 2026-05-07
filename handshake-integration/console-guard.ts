import { ConvexHttpClient } from 'convex/browser'

type AccessResult = {
  hasAccess: boolean
  status: string
  productKey: string
  reason?: string
}

type GuardResult =
  | { allow: true }
  | { allow: false; redirectTo: string; reason: string }

export async function resolveHandshakeConsoleAccess({
  convexUrl,
  convexToken,
  parentSiteUrl,
  getAccess,
}: {
  convexUrl: string
  convexToken: string | null
  parentSiteUrl: string
  getAccess?: (client: ConvexHttpClient) => Promise<AccessResult>
}): Promise<GuardResult> {
  if (!convexToken) {
    return {
      allow: false,
      redirectTo: `${parentSiteUrl}/account`,
      reason: 'No Clerk session.',
    }
  }

  const client = new ConvexHttpClient(convexUrl)
  client.setAuth(convexToken)

  const access = await getAccess?.(client)
  if (!access) {
    return {
      allow: false,
      redirectTo: `${parentSiteUrl}/pricing`,
      reason: 'Entitlement query is not wired in this app yet.',
    }
  }

  if (access.hasAccess) return { allow: true }

  return {
    allow: false,
    redirectTo: `${parentSiteUrl}/pricing?product=${access.productKey}`,
    reason: access.reason ?? `Subscription status is ${access.status}.`,
  }
}
