import { getContentBody, type ContentRecord } from './content-model'

const siteOrigin = (
  import.meta.env.VITE_PARENT_SITE_URL ?? 'https://agentic-economy.ai'
).replace(/\/$/u, '')

const seoNavigation = [
  { label: 'Thesis', to: '/thesis' },
  { label: 'Atlas', to: '/atlas' },
  { label: 'Handshake', to: '/handshake' },
  { label: 'Writing', to: '/writing' },
  { label: 'Team', to: '/team' },
] as const

export const siteSeo = {
  name: 'The Agentic Economy',
  title: 'The Agentic Economy | AI Agents, Software Agency & Infrastructure',
  tagline: 'Infrastructure for Software that Acts',
  description:
    'The Agentic Economy studies how AI agents and software agency move through commerce, data, markets, institutions, infrastructure, and the physical world.',
  url: siteOrigin,
  image: '/og/agentic-economy.jpg',
  logo: '/brand/agentic-economy-logo.svg',
  mark: '/brand/agentic-economy-mark.svg',
  wordmark: '/brand/agentic-economy-wordmark.svg',
  locale: 'en_US',
  language: 'en',
  keywords: [
    'agentic economy',
    'AI agents',
    'software agency',
    'AI infrastructure',
    'agentic commerce',
    'agent authorization',
    'agent-to-agent interaction',
    'machine-callable services',
    'Handshake',
  ],
  robots:
    'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
} as const

type PageHeadInput = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  publishedAt?: number
  keywords?: ReadonlyArray<string>
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//u.test(path)) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteSeo.url}${normalized}`
}

export function pageHead({
  title,
  description,
  path,
  image = siteSeo.image,
  type = 'website',
  noindex = false,
  publishedAt,
  keywords = siteSeo.keywords,
}: PageHeadInput) {
  const fullTitle =
    title === siteSeo.name ? siteSeo.title : `${title} | ${siteSeo.name}`
  const canonical = path ? absoluteUrl(path) : siteSeo.url
  const imageUrl = absoluteUrl(image)

  const meta = [
    { title: fullTitle },
    { name: 'description', content: description },
    {
      name: 'robots',
      content: noindex ? 'noindex,nofollow' : siteSeo.robots,
    },
    { name: 'keywords', content: keywords.join(', ') },
    { property: 'og:site_name', content: siteSeo.name },
    { property: 'og:locale', content: siteSeo.locale },
    { property: 'og:type', content: type },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:alt', content: siteSeo.tagline },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
  ]

  if (publishedAt) {
    meta.push({
      property: 'article:published_time',
      content: new Date(publishedAt).toISOString(),
    })
  }

  if (type === 'article') {
    meta.push(
      { property: 'article:section', content: 'Agentic Economy' },
      ...keywords.map((keyword) => ({
        property: 'article:tag',
        content: keyword,
      })),
    )
  }

  return {
    meta,
    links: path ? [{ rel: 'canonical', href: canonical }] : [],
  }
}

export function articleJsonLd(record: ContentRecord) {
  const image = record.seo?.ogImage ?? record.heroImage?.src
  const canonical = absoluteUrl(`/writing/${record.slug}`)
  const keywords = [
    record.title,
    'agentic economy',
    'AI agents',
    'software agency',
    'AI infrastructure',
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': absoluteUrl(`/writing/${record.slug}#article`),
        headline: record.title,
        description: record.seo?.description ?? record.summary,
        image: image ? absoluteUrl(image) : undefined,
        datePublished: record.publishedAt
          ? new Date(record.publishedAt).toISOString()
          : undefined,
        author: {
          '@id': absoluteUrl('/team#person'),
        },
        publisher: {
          '@id': absoluteUrl('/#organization'),
        },
        isPartOf: {
          '@id': absoluteUrl('/writing#series'),
        },
        mainEntityOfPage: canonical,
        articleSection: 'Agentic Economy',
        keywords,
        wordCount: getWordCount(getContentBody(record)),
        about: [
          'software agency',
          'agentic economy',
          'AI infrastructure',
          'agent authorization',
          'agentic operations',
        ],
      },
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Writing', path: '/writing' },
        { name: record.title, path: `/writing/${record.slug}` },
      ]),
    ],
  }
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export const rootJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: siteSeo.name,
      url: siteSeo.url,
      logo: absoluteUrl(siteSeo.logo),
      image: absoluteUrl(siteSeo.image),
      description: siteSeo.description,
      slogan: siteSeo.tagline,
      founder: {
        '@id': absoluteUrl('/team#person'),
      },
      knowsAbout: [
        'agentic economy',
        'software agency',
        'AI infrastructure',
        'agent authorization',
        'agent-to-agent interaction',
        'machine-callable services',
        'business systems',
        'physical operations',
      ],
    },
    {
      '@type': 'Person',
      '@id': absoluteUrl('/team#person'),
      name: 'Joel Chan',
      url: absoluteUrl('/team'),
      image: absoluteUrl('/images/joel-chan.webp'),
      worksFor: {
        '@id': absoluteUrl('/#organization'),
      },
      knowsAbout: [
        'agentic economy',
        'AI agents',
        'software agency',
        'AI infrastructure',
        'agent authorization',
        'agentic commerce',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: siteSeo.name,
      url: siteSeo.url,
      description: siteSeo.description,
      inLanguage: siteSeo.language,
      publisher: {
        '@id': absoluteUrl('/#organization'),
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: absoluteUrl('/writing'),
      },
    },
    {
      '@type': 'CollectionPage',
      '@id': absoluteUrl('/writing#series'),
      name: 'Writing on AI Agents, Software Agency, and Infrastructure',
      url: absoluteUrl('/writing'),
      description:
        'Essays on AI agents, agentic commerce, software agency, authorization, and infrastructure for machine-callable services.',
      isPartOf: {
        '@id': absoluteUrl('/#website'),
      },
    },
    {
      '@type': 'ItemList',
      '@id': absoluteUrl('/#site-navigation'),
      name: 'Primary navigation',
      itemListElement: seoNavigation.map((item, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 1,
        name: item.label,
        url: absoluteUrl(item.to),
      })),
    },
  ],
}

function getWordCount(body: string) {
  return body
    .replace(/^import .+$/gmu, '')
    .replace(/<AgenticPayload>[\s\S]*?<\/AgenticPayload>/gmu, '')
    .replace(/```[\s\S]*?```/gmu, '')
    .replace(/^#+\s+/gmu, '')
    .replace(/^>\s?/gmu, '')
    .replace(/[*_`]/gu, '')
    .trim()
    .split(/\s+/u)
    .filter(Boolean).length
}
