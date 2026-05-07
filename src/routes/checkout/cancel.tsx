import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, CircleSlash2 } from 'lucide-react'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
  head: () => ({
    meta: [
      { title: 'Checkout canceled | The Agentic Economy' },
      {
        name: 'description',
        content: 'Handshake checkout was canceled.',
      },
    ],
  }),
})

function CheckoutCancel() {
  return (
    <main className="page-shell checkout-status-page">
      <section className="checkout-panel">
        <span className="status-pill warn">No subscription created</span>
        <h1>Checkout canceled.</h1>
        <p className="lede">No access changed. Return when ready.</p>
        <div className="status-ledger" aria-label="Canceled checkout status">
          <div>
            <CircleSlash2 size={18} aria-hidden="true" />
            <strong>Billing</strong>
            <span>Unchanged</span>
          </div>
          <div>
            <CircleSlash2 size={18} aria-hidden="true" />
            <strong>Access</strong>
            <span>Unchanged</span>
          </div>
        </div>
        <Link to="/pricing" className="primary-action">
          <ArrowLeft size={18} aria-hidden="true" />
          Return to pricing
        </Link>
      </section>
    </main>
  )
}
