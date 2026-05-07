import { Link } from '@tanstack/react-router'
import { RouteHero } from './LayoutPrimitives'
import type { ReactNode } from 'react'
import type { ContentRecord } from '~/lib/content-model'
import { getContentBody } from '~/lib/content-model'
import { formatDate } from '~/lib/format'

const contentFrames = {
  writing: {
    label: 'Writing',
    description: 'Essays from the edge where software begins to act.',
    rail: ['Standing', 'Judgment', 'Scale', 'Visibility', 'Anchoring'],
  },
} as const

type AdjacentRecords = {
  previous: ContentRecord | null
  next: ContentRecord | null
}

type MarkdownBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'rule' }
  | { type: 'payload'; code: string }

export function ContentIndex({
  title,
  eyebrow,
  records,
  basePath,
}: {
  title: string
  eyebrow: string
  records: Array<ContentRecord>
  basePath: '/writing'
}) {
  const frame = contentFrames.writing
  const featuredRecords = records.slice(0, 2)
  const remainingRecords = records.slice(2)

  return (
    <main className="content-index">
      <RouteHero
        className="writing-hero writing-hero--visual"
        eyebrow={eyebrow}
        title={title}
        description={frame.description}
        rail={{
          label: `${frame.label} frame`,
          meta: `${records.length.toString().padStart(2, '0')} insights`,
          items: frame.rail,
        }}
      />
      <section className="writing-editorial" aria-label="Featured writing">
        <div className="editorial-feature-grid">
          {featuredRecords.map((record) => (
            <Link
              className="editorial-feature-card"
              params={{ slug: record.slug }}
              to={`${basePath}/$slug`}
              key={record.slug}
            >
              {record.heroImage ? (
                <span className="editorial-card-media">
                  <img
                    alt={record.heroImage.alt ?? ''}
                    src={record.heroImage.src}
                    loading="eager"
                  />
                  <span className="editorial-card-overlay">
                    <span>{getRecordLabel(record.eyebrow)}</span>
                    <strong>Read</strong>
                  </span>
                </span>
              ) : null}
              <span className="editorial-card-copy">
                <small>{formatDate(record.publishedAt)}</small>
                <strong>{record.title}</strong>
                <span>{record.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="content-list">
        {remainingRecords.map((record, index) => (
          <Link
            key={record.slug}
            className="content-row"
            params={{ slug: record.slug }}
            to={`${basePath}/$slug`}
          >
            <span>{String(record.order ?? index + 3).padStart(2, '0')}</span>
            {record.heroImage ? (
              <img
                alt={record.heroImage.alt ?? ''}
                src={record.heroImage.src}
                loading={index > 1 ? 'lazy' : 'eager'}
              />
            ) : null}
            <div>
              <small>{record.eyebrow ?? formatDate(record.publishedAt)}</small>
              <strong>{record.title}</strong>
            </div>
            <p>{record.summary}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}

function getRecordLabel(eyebrow?: string) {
  return eyebrow?.replace('The Agentic Economy — ', '') ?? 'Essay'
}

export function ArticleView({
  adjacent,
  record,
}: {
  adjacent?: AdjacentRecords
  record: ContentRecord
}) {
  const frame = contentFrames.writing
  const body = getContentBody(record)
  const blocks = parseMarkdownBlocks(body)
  const readingMinutes = getReadingMinutes(body)
  const readingTime =
    readingMinutes === 1 ? '1-minute read' : `${readingMinutes}-minute read`

  return (
    <main className="article-shell">
      <section className="article-hero article-hero--visual">
        <div>
          <p className="eyebrow">{record.eyebrow ?? frame.label}</p>
          <h1>{record.title}</h1>
          <p className="lede">{record.summary}</p>
        </div>
        <aside className="article-docket" aria-label="Article docket">
          <span>{formatDate(record.publishedAt)}</span>
          <strong>{readingTime}</strong>
        </aside>
      </section>
      {record.heroImage ? (
        <figure className="article-cover">
          <img
            alt={record.heroImage.alt ?? ''}
            src={record.heroImage.src}
            fetchPriority="high"
          />
        </figure>
      ) : null}
      <section className="article-grid">
        <aside className="article-aside" aria-label="Reading frame">
          {frame.rail.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </aside>
        <div className="article-body">
          {blocks.map((block, index) => (
            <MarkdownBlockView block={block} key={`${block.type}-${index}`} />
          ))}
          <nav className="article-nav" aria-label="Essay navigation">
            {adjacent?.previous ? (
              <Link
                params={{ slug: adjacent.previous.slug }}
                to="/writing/$slug"
              >
                <span>Previous</span>
                <strong>{adjacent.previous.title}</strong>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {adjacent?.next ? (
              <Link params={{ slug: adjacent.next.slug }} to="/writing/$slug">
                <span>Next</span>
                <strong>{adjacent.next.title}</strong>
              </Link>
            ) : null}
          </nav>
        </div>
      </section>
    </main>
  )
}

function getReadingMinutes(body: string) {
  const words = body
    .replace(/^import .+$/gmu, '')
    .replace(/<AgenticPayload>[\s\S]*?<\/AgenticPayload>/gmu, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

function MarkdownBlockView({ block }: { block: MarkdownBlock }) {
  if (block.type === 'heading') {
    const Heading = block.level === 2 ? 'h2' : 'h3'
    return <Heading>{renderInline(block.text)}</Heading>
  }

  if (block.type === 'quote') {
    return <blockquote>{renderInline(block.text)}</blockquote>
  }

  if (block.type === 'rule') {
    return <hr />
  }

  if (block.type === 'payload') {
    return (
      <div className="agentic-payload">
        <span>payload</span>
        <pre>{block.code}</pre>
      </div>
    )
  }

  return <p>{renderInline(block.text)}</p>
}

function parseMarkdownBlocks(body: string) {
  const lines = body.replace(/\r\n/gu, '\n').split('\n')
  const blocks: Array<MarkdownBlock> = []
  let paragraph: Array<string> = []
  let index = 0

  const flushParagraph = () => {
    const text = paragraph.join(' ').trim()
    if (text) blocks.push({ type: 'paragraph', text })
    paragraph = []
  }

  while (index < lines.length) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      index += 1
      continue
    }

    if (line.startsWith('import ')) {
      index += 1
      continue
    }

    if (line === '<AgenticPayload>') {
      flushParagraph()
      const payloadLines: Array<string> = []
      index += 1

      while (
        index < lines.length &&
        lines[index].trim() !== '</AgenticPayload>'
      ) {
        payloadLines.push(lines[index])
        index += 1
      }

      const code = payloadLines
        .join('\n')
        .replace(/^```json\n?/u, '')
        .replace(/\n?```$/u, '')
        .trim()

      blocks.push({ type: 'payload', code })
      index += 1
      continue
    }

    if (line === '---') {
      flushParagraph()
      blocks.push({ type: 'rule' })
      index += 1
      continue
    }

    const heading = rawLine.match(/^(#{2,3})\s+(.+)$/u)
    if (heading) {
      flushParagraph()
      blocks.push({
        type: 'heading',
        level: heading[1].length === 2 ? 2 : 3,
        text: heading[2].trim(),
      })
      index += 1
      continue
    }

    if (line.startsWith('>')) {
      flushParagraph()
      const quoteLines: Array<string> = []

      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quoteLines.push(lines[index].replace(/^>\s?/u, '').trim())
        index += 1
      }

      blocks.push({ type: 'quote', text: quoteLines.join(' ') })
      continue
    }

    paragraph.push(rawLine.trim())
    index += 1
  }

  flushParagraph()
  return blocks
}

function renderInline(text: string) {
  const parts: Array<ReactNode> = []
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/gu
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text))) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index))

    const token = match[0]
    const key = `${token}-${match.index}`
    if (token.startsWith('**')) {
      parts.push(<strong key={key}>{token.slice(2, -2)}</strong>)
    } else if (token.startsWith('`')) {
      parts.push(<code key={key}>{token.slice(1, -1)}</code>)
    } else {
      parts.push(<em key={key}>{token.slice(1, -1)}</em>)
    }

    cursor = match.index + token.length
  }

  if (cursor < text.length) parts.push(text.slice(cursor))
  return parts
}
