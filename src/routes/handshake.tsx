import { createFileRoute } from '@tanstack/react-router'
import {
  ExternalLink,
  FileCheck2,
  KeyRound,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { fieldCopy } from '~/lib/field-content'
import { urls } from '~/lib/site'
import { pageHead } from '~/lib/seo'

export const Route = createFileRoute('/handshake')({
  component: HandshakePage,
  head: () =>
    pageHead({
      title: 'Handshake',
      description: fieldCopy.handshake.description,
      path: '/handshake',
      image: '/og/handshake.jpg',
    }),
})

function HandshakePage() {
  return (
    <main className="product-page handshake-page">
      <section className="product-hero handshake-hero">
        <div>
          <p className="eyebrow">{fieldCopy.handshake.eyebrow}</p>
          <h1>{fieldCopy.handshake.title}</h1>
          <p className="lede">{fieldCopy.handshake.description}</p>
          <p className="product-brief">
            A working credential is not authority.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={urls.handshakePublic}>
              Open Handshake <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure
          className="handshake-plate"
          aria-label="Handshake trust ceremony image showing authority moving toward a permission boundary."
        >
          <img
            alt="A cinematic trust ceremony image showing a mandate token crossing from a principal artifact toward a permission boundary."
            height="941"
            src="/images/handshake-trust-ceremony.webp"
            width="1672"
          />
          <figcaption className="sr-only">
            Handshake, before the action crosses.
          </figcaption>
        </figure>
      </section>
      <section
        className="handshake-ceremony"
        aria-labelledby="handshake-ceremony-heading"
      >
        <div>
          <p className="eyebrow">Ceremony</p>
          <h2 id="handshake-ceremony-heading">
            The action carries its mandate.
          </h2>
        </div>
        <div className="handshake-ceremony-copy">
          <p>
            A principal can be real. A key can be valid. An endpoint can be
            reachable. None of that proves this action was allowed.
          </p>
        </div>
      </section>
      <section className="feature-grid" aria-label="Handshake primitives">
        <article>
          <ShieldCheck size={22} aria-hidden="true" />
          <h2>Consent</h2>
          <p>Who approved it.</p>
        </article>
        <article>
          <Workflow size={22} aria-hidden="true" />
          <h2>Intent</h2>
          <p>What was approved.</p>
        </article>
        <article>
          <KeyRound size={22} aria-hidden="true" />
          <h2>Authority</h2>
          <p>What is still allowed.</p>
        </article>
        <article>
          <FileCheck2 size={22} aria-hidden="true" />
          <h2>Record</h2>
          <p>What remains after it happens.</p>
        </article>
      </section>
    </main>
  )
}
