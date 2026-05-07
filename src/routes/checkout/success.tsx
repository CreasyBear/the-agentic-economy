import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Clock3, FileCheck2 } from 'lucide-react'
import { pageHead } from '~/lib/seo'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
  head: () =>
    pageHead({
      title: 'Checkout Received',
      description: 'Handshake checkout has been received.',
      path: '/checkout/success',
      noindex: true,
    }),
})

function CheckoutSuccess() {
  return (
    <main className="page-shell checkout-status-page">
      <section className="checkout-panel">
        <span className="status-pill good">Checkout received</span>
        <h1>Checkout received.</h1>
        <p className="lede">
          Access appears after billing confirmation reaches the account hub.
        </p>
        <div className="status-ledger" aria-label="Checkout status">
          <div>
            <FileCheck2 size={18} aria-hidden="true" />
            <strong>Payment</strong>
            <span>Received</span>
          </div>
          <div>
            <Clock3 size={18} aria-hidden="true" />
            <strong>Access</strong>
            <span>Syncing</span>
          </div>
        </div>
        <Link to="/account" className="primary-action">
          Check account access <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  )
}
