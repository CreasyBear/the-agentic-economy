import { describe, expect, it } from 'vitest'
import {
  getCanonicalPath,
  getPublishedBySlug,
  listPublished,
} from '../src/lib/content-model'
import type { ContentRecord } from '../src/lib/content-model'

const records: Array<ContentRecord> = [
  {
    type: 'essay',
    slug: 'draft',
    title: 'Draft',
    summary: 'Hidden',
    body: 'Hidden',
    status: 'draft',
    publishedAt: 3,
  },
  {
    type: 'essay',
    slug: 'latest',
    legacySlugs: ['old-latest'],
    title: 'Latest',
    summary: 'Shown',
    body: 'Shown',
    status: 'published',
    publishedAt: 2,
    order: 2,
  },
  {
    type: 'essay',
    slug: 'older',
    title: 'Older',
    summary: 'Shown',
    body: 'Shown',
    status: 'published',
    publishedAt: 1,
    order: 1,
  },
  {
    type: 'product',
    slug: 'product-latest',
    title: 'Product Latest',
    summary: 'Shown',
    body: 'Shown',
    status: 'published',
    publishedAt: 9,
  },
  {
    type: 'product',
    slug: 'product-older',
    title: 'Product Older',
    summary: 'Shown',
    body: 'Shown',
    status: 'published',
    publishedAt: 8,
  },
]

describe('content model', () => {
  it('excludes drafts and sorts ordered essays by canonical sequence', () => {
    expect(
      listPublished(records, 'essay').map((record) => record.slug),
    ).toEqual(['older', 'latest'])
  })

  it('sorts unordered records newest first', () => {
    expect(
      listPublished(records, 'product').map((record) => record.slug),
    ).toEqual(['product-latest', 'product-older'])
  })

  it('finds only published canonical and legacy slugs', () => {
    expect(getPublishedBySlug(records, 'essay', 'latest')?.title).toBe('Latest')
    expect(getPublishedBySlug(records, 'essay', 'old-latest')?.slug).toBe(
      'latest',
    )
    expect(getPublishedBySlug(records, 'essay', 'draft')).toBeNull()
  })

  it('derives canonical public paths', () => {
    expect(getCanonicalPath(records[1])).toBe('/writing/latest')
  })
})
