import entryRaw from '../../content/essays/00-the-agentic-economy.mdx?raw'
import actorsRaw from '../../content/essays/01-actors-without-standing.mdx?raw'
import judgmentRaw from '../../content/essays/02-judgment-without-context.mdx?raw'
import scaleRaw from '../../content/essays/03-scale-without-organization.mdx?raw'
import riskRaw from '../../content/essays/04-risk-without-visibility.mdx?raw'
import hierarchyRaw from '../../content/essays/05-the-hierarchy-unanchored.mdx?raw'
import type { ContentRecord } from './content-model'

const essaySeriesKey = 'agentic-economy-canon'

const legacySlugsBySlug: Record<string, Array<string>> = {
  entry: ['the-agentic-economy'],
  'actors-without-standing': ['recognizing-agent-action'],
  'scale-without-organization': ['coordination-at-smaller-scale'],
  'risk-without-visibility': ['visible-records'],
  'the-hierarchy-unanchored': ['the-emerging-stack'],
}

const heroAltBySlug: Record<string, string> = {
  entry:
    'A glowing architectural atlas of stacked systems, markets, and data layers suspended over a dark field.',
  'actors-without-standing':
    'A gold-line plan of terrain, systems, and circuit paths where an action crosses an institutional boundary.',
  'judgment-without-context':
    'Gold vectors cutting through tangled circular paths, suggesting a clean instruction moving through messy context.',
  'scale-without-organization':
    'An hourglass of gears, institutions, and market signals narrowing into a glowing coordination layer.',
  'risk-without-visibility':
    'A dense network of glowing nodes and lines where signals branch and converge across invisible dependency chains.',
  'the-hierarchy-unanchored':
    'Transparent stacked geometric volumes connected by gold lines, forming an unanchored capability structure in space.',
}

const seoTitleBySlug: Record<string, string> = {
  entry: 'The Agentic Economy: AI Agents, Commerce and Infrastructure',
  'actors-without-standing':
    'Actors Without Standing: Agent Identity and Authorization',
  'judgment-without-context': 'Judgment Without Context: AI Agent Delegation',
  'scale-without-organization':
    'Scale Without Organization: Software Agency and Firms',
  'risk-without-visibility':
    'Risk Without Visibility: AI Agent Systems and Markets',
  'the-hierarchy-unanchored':
    'The Hierarchy Unanchored: Infrastructure for AI Agents',
}

const seoDescriptionBySlug: Record<string, string> = {
  entry:
    'A thesis on the agentic economy: how AI agents and software agency move through commerce, markets, institutions, infrastructure, and the physical world.',
  'actors-without-standing':
    'Analysis of AI agent identity, standing, liability, and authorization when software acts for people, companies, and institutions.',
  'judgment-without-context':
    'Analysis of AI agent delegation, context, judgment, and oversight as software turns goals into actions across business systems.',
  'scale-without-organization':
    'Analysis of software agency, coordination, firms, and AI infrastructure as agents reduce the cost of organizing economic work.',
  'risk-without-visibility':
    'Analysis of AI agent risk, visibility, dependency chains, market coordination, and the records institutions need when software acts.',
  'the-hierarchy-unanchored':
    'A synthesis on AI agent infrastructure, software agency, institutional anchoring, authorization, and the systems that make action legible.',
}

export const essaySources = [
  {
    sourcePath: 'content/essays/00-the-agentic-economy.mdx',
    raw: entryRaw,
  },
  {
    sourcePath: 'content/essays/01-actors-without-standing.mdx',
    raw: actorsRaw,
  },
  {
    sourcePath: 'content/essays/02-judgment-without-context.mdx',
    raw: judgmentRaw,
  },
  {
    sourcePath: 'content/essays/03-scale-without-organization.mdx',
    raw: scaleRaw,
  },
  {
    sourcePath: 'content/essays/04-risk-without-visibility.mdx',
    raw: riskRaw,
  },
  {
    sourcePath: 'content/essays/05-the-hierarchy-unanchored.mdx',
    raw: hierarchyRaw,
  },
] as const

export const essayRecords: Array<ContentRecord> = essaySources.map((source) =>
  toEssayRecord(source.raw, source.sourcePath),
)

export function getEssayWordCount(record: ContentRecord) {
  return extractReadableText(record.bodyMdx ?? record.body ?? '')
    .split(/\s+/)
    .filter(Boolean).length
}

export function hashEssaySource(raw: string) {
  let hash = 0x811c9dc5
  for (let index = 0; index < raw.length; index += 1) {
    hash ^= raw.charCodeAt(index)
    hash = Math.imul(hash, 0x01000193)
  }

  return (hash >>> 0).toString(16).padStart(8, '0')
}

function toEssayRecord(raw: string, sourcePath: string): ContentRecord {
  const { data, body } = parseFrontmatter(raw, sourcePath)
  const title = readString(data, 'title')
  const slug = readString(data, 'slug')
  const order = readNumber(data, 'order')
  const description = readString(data, 'description')
  const eyebrow = readString(data, 'eyebrow')
  const heroImage = readString(data, 'heroImage')

  return {
    type: 'essay',
    slug,
    legacySlugs: legacySlugsBySlug[slug],
    title,
    eyebrow,
    description,
    summary: description,
    bodyMdx: body.trim(),
    status: 'published',
    publishedAt: Date.UTC(2026, 2, 1 + order),
    order,
    seriesKey: essaySeriesKey,
    collectionKey: 'writing',
    heroImage: {
      src: heroImage,
      alt: heroAltBySlug[slug] ?? `${title} visual study`,
      width: 2400,
      height: 1309,
    },
    seo: {
      title: seoTitleBySlug[slug] ?? title,
      description: seoDescriptionBySlug[slug] ?? description,
      canonicalPath: `/writing/${slug}`,
      ogImage: toOgImagePath(heroImage),
    },
    sourcePath,
    sourceChecksum: hashEssaySource(raw),
  }
}

function parseFrontmatter(raw: string, sourcePath: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) {
    throw new Error(`Missing frontmatter in ${sourcePath}`)
  }

  const data: Record<string, string | number> = {}
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    const rawValue = line.slice(separator + 1).trim()
    data[key] = parseFrontmatterValue(rawValue)
  }

  return {
    data,
    body: raw.slice(match[0].length),
  }
}

function parseFrontmatterValue(value: string) {
  const unquoted = value.replace(/^["']|["']$/g, '')
  const numeric = Number(unquoted)
  return Number.isFinite(numeric) && unquoted !== '' ? numeric : unquoted
}

function readString(data: Record<string, string | number>, key: string) {
  const value = data[key]
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`Expected string frontmatter value for ${key}`)
  }
  return value
}

function readNumber(data: Record<string, string | number>, key: string) {
  const value = data[key]
  if (typeof value !== 'number') {
    throw new Error(`Expected number frontmatter value for ${key}`)
  }
  return value
}

function toOgImagePath(heroImage: string) {
  const filename = heroImage.split('/').pop()
  if (!filename) return undefined
  return `/og/${filename.replace(/\.webp$/u, '.jpg')}`
}

function extractReadableText(body: string) {
  return body
    .replace(/^import .+$/gmu, '')
    .replace(/<AgenticPayload>[\s\S]*?<\/AgenticPayload>/gmu, '')
    .replace(/```[\s\S]*?```/gmu, '')
    .replace(/^#+\s+/gmu, '')
    .replace(/^>\s?/gmu, '')
    .replace(/[*_`]/gu, '')
}
