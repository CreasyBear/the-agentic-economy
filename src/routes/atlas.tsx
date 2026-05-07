import { createFileRoute } from '@tanstack/react-router'
import { atlasSeries, fieldCopy } from '~/lib/field-content'

export const Route = createFileRoute('/atlas')({
  component: AtlasPage,
  head: () => ({
    meta: [
      { title: 'Atlas | The Agentic Economy' },
      {
        name: 'description',
        content:
          'A field map of the systems, markets, and controls changing as agency moves into software.',
      },
    ],
  }),
})

function AtlasPage() {
  return (
    <main className="atlas-page">
      <h1 className="sr-only" id="atlas-heading">
        {fieldCopy.atlas.title}
      </h1>
      <section className="atlas-sequence" aria-labelledby="atlas-heading">
        {atlasSeries.map((item, index) => (
          <section
            aria-labelledby={`${item.id}-heading`}
            className="atlas-scroll-panel"
            key={item.plate}
          >
            <div className="atlas-scroll-statement">
              <p className="atlas-scroll-kicker">
                <span>{fieldCopy.atlas.eyebrow}</span>
                <span>
                  {String(index + 1).padStart(2, '0')} / {atlasSeries.length}
                </span>
              </p>
              <h2 id={`${item.id}-heading`}>{item.statement}</h2>
            </div>
            <div className="atlas-scroll-plate">
              <figure>
                <img
                  alt={item.alt}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  height="941"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  src={item.image}
                  width="1672"
                />
                <figcaption>
                  <span>{item.plate}</span>
                  <strong>{item.title}</strong>
                  <p>{index === 0 ? fieldCopy.atlas.statement : item.copy}</p>
                </figcaption>
              </figure>
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}
