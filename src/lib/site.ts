import { essayRecords } from './essay-content'
import type { ContentRecord } from './content-model'

export const productKey = 'handshake'

export const hasConvexClient = Boolean(import.meta.env.VITE_CONVEX_URL)

export const urls = {
  parent: import.meta.env.VITE_PARENT_SITE_URL ?? 'https://agentic-economy.ai',
  handshakeConsole:
    import.meta.env.VITE_HANDSHAKE_CONSOLE_URL ??
    'https://handshake.agentic-economy.ai/console',
  handshakePublic: 'https://handshake.agentic-economy.ai',
}

export const siteContent: Array<ContentRecord> = [
  ...essayRecords,
  {
    type: 'product',
    slug: 'handshake',
    title: 'Handshake',
    summary: 'Before agents act, authority has to travel with them.',
    body: 'Handshake attaches consent, intent, authority, and record to the action before it crosses.',
    status: 'published',
    publishedAt: Date.UTC(2026, 2, 10),
    productKey,
  },
]

export const fallbackContent = siteContent

export const navigation = [
  { label: 'Thesis', to: '/thesis' },
  { label: 'Atlas', to: '/atlas' },
  { label: 'Handshake', to: '/handshake' },
  { label: 'Writing', to: '/writing' },
  { label: 'Team', to: '/team' },
] as const
