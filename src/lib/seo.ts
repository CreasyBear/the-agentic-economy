import type { ContentRecord } from './content-model'

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
  title: 'The Agentic Economy',
  tagline: 'Infrastructure for Software that Acts',
  description:
    'The Agentic Economy studies software agency moving through data, markets, institutions, and the physical world.',
  url: siteOrigin,
  image: '/images/brand/hero-home-field.webp',
  locale: 'en_US',
  language: 'en',
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
} as const

type PageHeadInput = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  publishedAt?: number
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
}: PageHeadInput) {
  const fullTitle = title === siteSeo.name ? title : `${title} | ${siteSeo.name}`
  const canonical = path ? absoluteUrl(path) : siteSeo.url
  const imageUrl = absoluteUrl(image)

  const meta = [
    { title: fullTitle },
    { name: 'description', content: description },
    {
      name: 'robots',
      content: noindex ? 'noindex,nofollow' : siteSeo.robots,
    },
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

  return {
    meta,
    links: path ? [{ rel: 'canonical', href: canonical }] : [],
  }
}

export function articleJsonLd(record: ContentRecord) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': absoluteUrl(`/writing/${record.slug}#article`),
    headline: record.title,
    description: record.seo?.description ?? record.summary,
    image: record.heroImage ? absoluteUrl(record.heroImage.src) : undefined,
    datePublished: record.publishedAt
      ? new Date(record.publishedAt).toISOString()
      : undefined,
    author: {
      '@type': 'Person',
      name: 'Joel Chan',
      url: absoluteUrl('/team'),
    },
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
    mainEntityOfPage: absoluteUrl(`/writing/${record.slug}`),
    about: [
      'software agency',
      'agentic economy',
      'AI infrastructure',
      'agent authorization',
      'agentic operations',
    ],
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
      logo: absoluteUrl('/android-chrome-512x512.png'),
      description: siteSeo.description,
      slogan: siteSeo.tagline,
      founder: {
        '@type': 'Person',
        name: 'Joel Chan',
        url: absoluteUrl('/team'),
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
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: siteSeo.name,
      url: siteSeo.url,
      description: siteSeo.description,
      inLanguage: siteSeo.language,
      publisher: {
        '@id': absoluteUrl('/#organization'),
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
