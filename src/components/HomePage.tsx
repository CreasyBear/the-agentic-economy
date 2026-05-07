import { Link } from '@tanstack/react-router'
import { fieldCopy, homeDoorways } from '~/lib/field-content'

export function HomePage() {
  return (
    <main className="home-main">
      <section
        className="home-page home-page--visual"
        aria-labelledby="home-heading"
      >
        <div className="home-copy">
          <p className="home-label">{fieldCopy.home.eyebrow}</p>
          <h1 id="home-heading">{fieldCopy.home.title}</h1>
        </div>
      </section>
      <section className="home-doorways" aria-label="Site sections">
        <div className="home-doorway-heading">
          <p className="eyebrow">Field map</p>
          <h2>AI agents, software agency, markets, and infrastructure.</h2>
        </div>
        <div className="home-doorway-list">
          {homeDoorways.map((item, index) => (
            <Link
              activeProps={{}}
              className="home-doorway-row"
              key={item.to}
              to={item.to}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
