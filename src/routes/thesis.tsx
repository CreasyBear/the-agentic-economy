import { Link, createFileRoute } from '@tanstack/react-router'
import { fieldCopy, thesisThemes } from '~/lib/field-content'

export const Route = createFileRoute('/thesis')({
  component: ThesisPage,
  head: () => ({
    meta: [
      { title: 'Thesis | The Agentic Economy' },
      {
        name: 'description',
        content:
          'Agency now moves through data, markets, institutions, and the physical world.',
      },
    ],
  }),
})

function ThesisPage() {
  return (
    <main className="thesis-page">
      <section
        className="thesis-hero thesis-hero--visual"
        aria-labelledby="thesis-heading"
      >
        <div className="thesis-hero-copy">
          <p className="eyebrow">{fieldCopy.thesis.eyebrow}</p>
          <h1 id="thesis-heading">{fieldCopy.thesis.title}</h1>
          <p>{fieldCopy.thesis.description}</p>
        </div>
      </section>
      <section className="theme-section" aria-labelledby="theme-heading">
        <div className="theme-section-heading">
          <p className="eyebrow">Five questions</p>
          <h2 id="theme-heading">The first frame of the field.</h2>
        </div>
        <div className="theme-list">
          {thesisThemes.map((theme) => (
            <Link
              className="theme-row"
              key={theme.title}
              params={{ slug: theme.slug }}
              to="/writing/$slug"
            >
              <span>{theme.number}</span>
              <strong>
                {theme.title}
                <small>{theme.question}</small>
              </strong>
              <p>{theme.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
