import { createFileRoute } from '@tanstack/react-router'
import { Check, FileCheck2, KeyRound, ShieldCheck } from 'lucide-react'
import { CheckoutButton } from '~/components/BillingActions'
import { pageHead } from '~/lib/seo'

export const Route = createFileRoute('/pricing')({
  component: Pricing,
  head: () =>
    pageHead({
      title: 'Handshake Access',
      description: 'Early subscription access for teams working with agents.',
      path: '/pricing',
      noindex: true,
    }),
})

function Pricing() {
  const assurances = [
    {
      icon: ShieldCheck,
      title: 'Access',
      copy: 'Product access opens after subscription confirmation.',
    },
    {
      icon: KeyRound,
      title: 'Account',
      copy: 'One account for billing and product access.',
    },
    {
      icon: FileCheck2,
      title: 'Handshake',
      copy: 'The boundary before an agent opens data, reserves supply, moves money, or changes a system.',
    },
  ] as const

  return (
    <main>
      <section className="pricing-layout">
        <div className="commerce-brief">
          <p className="eyebrow">Pricing</p>
          <h1>Handshake access</h1>
          <p className="lede">
            Early subscription access for teams working with agents.
          </p>
          <div className="assurance-list" aria-label="Subscription guarantees">
            {assurances.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="price-card">
          <span className="status-pill">Early access</span>
          <h2>Handshake</h2>
          <p className="price">Subscription access</p>
          <p>
            Current pricing is confirmed in checkout before any subscription is
            created.
          </p>
          <ul>
            {[
              'Handshake console access.',
              'One account for access and billing.',
              'Subscription confirmed before access opens.',
              'Billing management from the account hub.',
            ].map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <CheckoutButton />
        </aside>
      </section>
      <section className="checkout-brief" aria-labelledby="checkout-heading">
        <div>
          <p className="eyebrow">Access path</p>
          <h2 id="checkout-heading">Simple on purpose.</h2>
        </div>
        <ol>
          {[
            ['01', 'Sign in', 'Use one account for access and billing.'],
            ['02', 'Review', 'Confirm the current plan in checkout.'],
            [
              '03',
              'Open Handshake',
              'Product access appears after confirmation.',
            ],
          ].map(([step, title, copy]) => (
            <li key={step}>
              <span>{step}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
