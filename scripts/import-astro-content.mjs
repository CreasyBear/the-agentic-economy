#!/usr/bin/env node
import { createHash } from 'node:crypto'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const sourceDir = process.argv[2]

if (!sourceDir) {
  console.error(
    'Usage: node scripts/import-astro-content.mjs <astro-content-dir-or-repo>',
  )
  process.exit(1)
}

const absoluteSource = path.resolve(sourceDir)
const candidates = [
  absoluteSource,
  path.join(absoluteSource, 'content'),
  path.join(absoluteSource, 'src', 'content'),
]

async function firstExistingDirectory(paths) {
  for (const candidate of paths) {
    try {
      const entries = await readdir(candidate)
      return { dir: candidate, entries }
    } catch {
      // Try the next conventional Astro content path.
    }
  }
  throw new Error(`No readable content directory found under ${absoluteSource}`)
}

function slugFromFilename(filename) {
  return filename
    .replace(/\.(md|mdx|astro)$/i, '')
    .replace(/^\d+[-_\s]*/, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return { data: {}, body: raw.trim() }

  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { data: {}, body: raw.trim() }

  const frontmatter = raw.slice(3, end).trim()
  const body = raw.slice(end + 4).trim()
  const data = Object.fromEntries(
    frontmatter
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(':')
        return [
          key.trim(),
          rest
            .join(':')
            .trim()
            .replace(/^['"]|['"]$/g, ''),
        ]
      }),
  )

  return { data, body }
}

function inferType(slug, data) {
  if (data.type) return data.type
  if (slug === 'handshake') return 'product'
  return 'essay'
}

function titleFrom(slug, data) {
  if (data.title) return data.title
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function canonicalPathFor(type, slug) {
  if (type === 'product') return `/products/${slug}`
  return `/writing/${slug}`
}

function timestampFrom(data) {
  if (data.date) return Date.parse(data.date)

  const order = Number(data.order)
  if (Number.isFinite(order)) return Date.UTC(2026, 2, 1 + order)

  return Date.now()
}

function checksum(raw) {
  return createHash('sha256').update(raw).digest('hex')
}

function maybeLegacySlugs(value) {
  if (!value) return undefined
  return value
    .split(',')
    .map((slug) => slug.trim())
    .filter(Boolean)
}

const { dir, entries } = await firstExistingDirectory(candidates)

const records = []
for (const entry of entries) {
  if (!/\.(md|mdx|astro)$/i.test(entry)) continue
  const raw = await readFile(path.join(dir, entry), 'utf8')
  const { data, body } = parseFrontmatter(raw)
  const slug = data.slug || slugFromFilename(entry)
  const type = inferType(slug, data)
  const title = titleFrom(slug, data)
  const summary =
    data.summary ??
    data.description ??
    body
      .replace(/[#*_`>\[\]()]/g, '')
      .split('\n')
      .find((line) => line.trim().length > 40)
      ?.trim()
      ?.slice(0, 220) ??
    title

  records.push({
    type,
    slug,
    legacySlugs: maybeLegacySlugs(data.legacySlugs),
    title,
    eyebrow: data.eyebrow,
    description: data.description,
    summary,
    bodyMdx: body,
    status: data.draft === 'true' ? 'draft' : 'published',
    publishedAt: timestampFrom(data),
    order: data.order ? Number(data.order) : undefined,
    seriesKey: type === 'essay' ? 'agentic-economy-canon' : undefined,
    collectionKey: type === 'essay' ? 'writing' : undefined,
    heroImage: data.heroImage
      ? {
          src: data.heroImage,
          alt: `${title} cover image`,
        }
      : undefined,
    seo: {
      title: data.seoTitle || title,
      description: data.seoDescription || summary,
      canonicalPath: data.canonicalPath ?? canonicalPathFor(type, slug),
      ogImage: data.ogImage,
    },
    productKey: slug === 'handshake' ? 'handshake' : undefined,
    sourcePath: path.relative(process.cwd(), path.join(dir, entry)),
    sourceChecksum: checksum(raw),
  })
}

process.stdout.write(`${JSON.stringify(records, null, 2)}\n`)
