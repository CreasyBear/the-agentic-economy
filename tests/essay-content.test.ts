import { describe, expect, it } from 'vitest'
import { getPublishedBySlug, listPublished } from '../src/lib/content-model'
import {
  essayRecords,
  essaySources,
  getEssayWordCount,
  hashEssaySource,
} from '../src/lib/essay-content'
import { siteContent } from '../src/lib/site'

const canonicalSlugs = [
  'entry',
  'actors-without-standing',
  'judgment-without-context',
  'scale-without-organization',
  'risk-without-visibility',
  'the-hierarchy-unanchored',
]

const canonicalTitles = [
  'The Agentic Economy',
  'Actors Without Standing',
  'Judgment Without Context',
  'Scale Without Organization',
  'Risk Without Visibility',
  'The Hierarchy Unanchored',
]

describe('canonical essay source', () => {
  it('publishes the original six-part series in source order', () => {
    expect(
      listPublished(essayRecords, 'essay').map((record) => record.slug),
    ).toEqual(canonicalSlugs)
    expect(essayRecords.map((record) => record.title)).toEqual(canonicalTitles)
  })

  it('keeps full essays rather than compressed summaries', () => {
    for (const record of essayRecords) {
      expect(getEssayWordCount(record)).toBeGreaterThan(700)
      expect(record.bodyMdx?.length).toBeGreaterThan(4_000)
    }
  })

  it('tracks source files, checksums, and imagery for drift detection', () => {
    for (const [index, record] of essayRecords.entries()) {
      const source = essaySources[index]
      expect(record.sourcePath).toBe(source.sourcePath)
      expect(record.sourceChecksum).toBe(hashEssaySource(source.raw))
      expect(record.heroImage?.src).toMatch(/^\/images\/.+\.webp$/u)
      expect(record.heroImage?.alt).not.toBe(`${record.title} cover image`)
      expect(record.heroImage?.alt?.length).toBeGreaterThan(72)
      expect(record.seo?.ogImage).toMatch(/^\/og\/.+\.jpg$/u)
    }
  })

  it('maps old public slugs onto the canonical essays', () => {
    expect(
      getPublishedBySlug(siteContent, 'essay', 'the-agentic-economy')?.slug,
    ).toBe('entry')
    expect(
      getPublishedBySlug(siteContent, 'essay', 'visible-records')?.slug,
    ).toBe('risk-without-visibility')
  })
})
