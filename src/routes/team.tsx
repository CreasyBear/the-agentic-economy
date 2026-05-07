import { createFileRoute } from '@tanstack/react-router'
import { fieldCopy } from '~/lib/field-content'
import { pageHead } from '~/lib/seo'

export const Route = createFileRoute('/team')({
  component: TeamPage,
  head: () =>
    pageHead({
      title: 'Team',
      description: fieldCopy.team.description,
      path: '/team',
      image: '/og/team.jpg',
    }),
})

function TeamPage() {
  return (
    <main className="thesis-page team-page">
      <section className="thesis-hero team-hero" aria-labelledby="team-heading">
        <div className="thesis-hero-copy">
          <p className="eyebrow">{fieldCopy.team.eyebrow}</p>
          <h1 id="team-heading">{fieldCopy.team.title}</h1>
          <p>{fieldCopy.team.description}</p>
        </div>
        <figure className="team-profile">
          <img
            alt="Black-and-white portrait of Joel Chan seated against a plain studio background."
            src="/images/joel-chan.webp"
            width="1254"
            height="1254"
          />
          <figcaption>
            <strong>Joel Chan</strong>
            <span>The Agentic Economy</span>
          </figcaption>
        </figure>
      </section>
    </main>
  )
}
