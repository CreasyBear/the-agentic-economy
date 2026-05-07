import { cn } from '~/lib/utils'

export type RouteHeroRail = {
  label: string
  meta: string
  items: ReadonlyArray<string>
}

export type IndexedSectionItem = {
  kicker?: string
  title: string
  copy: string
  href?: string
  action?: string
}

export function RouteHero({
  eyebrow,
  title,
  description,
  rail,
  className,
}: {
  eyebrow: string
  title: string
  description: string
  rail: RouteHeroRail
  className?: string
}) {
  return (
    <section className={cn('content-hero', className)}>
      <div className="page-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="content-hero-copy">{description}</p>
      </div>
      <ContentRail rail={rail} />
    </section>
  )
}

export function ContentRail({ rail }: { rail: RouteHeroRail }) {
  return (
    <div className="content-rail" aria-label={rail.label}>
      <span>{rail.meta}</span>
      {rail.items.map((item) => (
        <strong key={item}>{item}</strong>
      ))}
    </div>
  )
}

export function IndexedSection({
  eyebrow,
  title,
  items,
  ariaLabel,
}: {
  eyebrow: string
  title: string
  items: ReadonlyArray<IndexedSectionItem>
  ariaLabel: string
}) {
  return (
    <section className="section-grid route-section" aria-label={ariaLabel}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="indexed-list">
        {items.map((item, index) => {
          const content = (
            <>
              <span>{item.kicker ?? String(index + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
              {item.action ? <em>{item.action}</em> : null}
            </>
          )

          return item.href ? (
            <a className="indexed-row" href={item.href} key={item.title}>
              {content}
            </a>
          ) : (
            <div className="indexed-row" key={item.title}>
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
