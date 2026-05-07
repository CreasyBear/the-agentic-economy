import { SignInButton, useAuth } from '@clerk/tanstack-react-start'
import { Link } from '@tanstack/react-router'
import { useAction, useQuery } from 'convex/react'
import { useState } from 'react'
import { ArrowRight, CreditCard, ExternalLink } from 'lucide-react'
import { api } from '../../convex/_generated/api'
import { hasConvexClient, urls } from '~/lib/site'

export function CheckoutButton() {
  const { isLoaded, isSignedIn } = useAuth()

  if (hasConvexClient && isLoaded && isSignedIn) {
    return <ConnectedCheckoutButton />
  }

  if (isLoaded && isSignedIn) {
    return (
      <button className="primary-action" type="button" disabled>
        Checkout unavailable <CreditCard size={18} aria-hidden="true" />
      </button>
    )
  }

  return (
    <SignInButton mode="modal">
      <button className="primary-action" type="button">
        Sign in <ArrowRight size={18} aria-hidden="true" />
      </button>
    </SignInButton>
  )
}

function ConnectedCheckoutButton() {
  const createCheckout = useAction(api.billing.createHandshakeCheckout)
  const [isStarting, setIsStarting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function startCheckout() {
    setIsStarting(true)
    setError(null)

    try {
      const session = await createCheckout({})
      if (session.url) window.location.href = session.url
    } catch {
      setError('Checkout could not start. Try again from pricing.')
      setIsStarting(false)
    }
  }

  return (
    <>
      <button
        className="primary-action"
        type="button"
        onClick={startCheckout}
        disabled={isStarting}
      >
        {isStarting ? 'Opening checkout' : 'Subscribe'}
        <CreditCard size={18} aria-hidden="true" />
      </button>
      {error ? (
        <p className="billing-error" role="alert">
          {error}
        </p>
      ) : null}
    </>
  )
}

export function AccountHub() {
  if (!hasConvexClient) {
    return <DisconnectedAccountHub />
  }

  return <ConnectedAccountHub />
}

function ConnectedAccountHub() {
  const { isLoaded, isSignedIn } = useAuth()
  const [portalError, setPortalError] = useState<string | null>(null)
  const [isOpeningPortal, setIsOpeningPortal] = useState(false)
  const queryArgs =
    isLoaded && isSignedIn ? ({ productKey: 'handshake' } as const) : 'skip'
  const access = useQuery(api.entitlements.getCurrentUserAccess, queryArgs)
  const subscriptions = useQuery(
    api.billing.listCurrentUserSubscriptions,
    isLoaded && isSignedIn ? {} : 'skip',
  )
  const createPortal = useAction(api.billing.createCustomerPortal)
  const hasAccess = Boolean(access?.hasAccess)

  async function openPortal() {
    setIsOpeningPortal(true)
    setPortalError(null)

    try {
      const portal = await createPortal({})
      window.location.href = portal.url
    } catch {
      setPortalError(
        'The billing portal is not available for this account yet.',
      )
      setIsOpeningPortal(false)
    }
  }

  return (
    <main>
      <section className="account-layout">
        <div>
          <p className="eyebrow">Account</p>
          <h1>Your access hub</h1>
          <p className="lede">Access and billing for Handshake.</p>
        </div>
        {!isLoaded || !isSignedIn ? (
          <div className="access-card">
            <h2>Sign in required</h2>
            <p>Sign in to manage access.</p>
            <SignInButton mode="modal">
              <button className="primary-action" type="button">
                Sign in
              </button>
            </SignInButton>
          </div>
        ) : (
          <div className="access-card">
            <span
              className={`status-pill ${access?.hasAccess ? 'good' : 'warn'}`}
            >
              {access?.status ?? 'loading'}
            </span>
            <h2>Handshake Console</h2>
            <p>
              {access?.reason ??
                'Active subscribers can open the protected Handshake console.'}
            </p>
            <dl className="access-facts" aria-label="Access facts">
              <div>
                <dt>Account</dt>
                <dd>Signed in</dd>
              </div>
              <div>
                <dt>Billing</dt>
                <dd>
                  {subscriptions === undefined
                    ? 'Loading'
                    : `${subscriptions.length} linked`}
                </dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>Handshake</dd>
              </div>
            </dl>
            <div className="action-row">
              {hasAccess ? (
                <a className="primary-action" href={urls.handshakeConsole}>
                  Open console <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : (
                <Link className="primary-action" to="/pricing">
                  View access <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
              <button
                className="secondary-action"
                type="button"
                onClick={openPortal}
                disabled={!subscriptions?.length || isOpeningPortal}
              >
                {isOpeningPortal ? 'Opening billing' : 'Manage billing'}
              </button>
            </div>
            {portalError ? (
              <p className="billing-error" role="alert">
                {portalError}
              </p>
            ) : null}
          </div>
        )}
      </section>
    </main>
  )
}

function DisconnectedAccountHub() {
  const { isLoaded, isSignedIn } = useAuth()

  return (
    <main>
      <section className="account-layout">
        <div>
          <p className="eyebrow">Account</p>
          <h1>Your access hub</h1>
          <p className="lede">Access and billing for Handshake.</p>
        </div>
        <div className="access-card">
          <span className="status-pill warn">Unavailable</span>
          <h2>Account access is not available.</h2>
          <p>
            Public pages remain available. Return to this account hub after
            access services are available.
          </p>
          <dl className="access-facts" aria-label="Pending integration facts">
            <div>
              <dt>Account</dt>
              <dd>Unavailable</dd>
            </div>
            <div>
              <dt>Access</dt>
              <dd>Paused</dd>
            </div>
            <div>
              <dt>Checkout</dt>
              <dd>Unavailable</dd>
            </div>
          </dl>
          <div className="action-row">
            <Link className="primary-action" to="/pricing">
              View access
            </Link>
            {!isLoaded || !isSignedIn ? (
              <SignInButton mode="modal">
                <button className="secondary-action" type="button">
                  Sign in
                </button>
              </SignInButton>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}
