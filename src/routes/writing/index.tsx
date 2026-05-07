import { createFileRoute } from '@tanstack/react-router'
import { ContentIndex } from '~/components/ContentViews'
import { listPublished } from '~/lib/content-model'
import { siteContent } from '~/lib/site'
import { pageHead } from '~/lib/seo'

export const Route = createFileRoute('/writing/')({
  component: WritingIndex,
  head: () =>
    pageHead({
      title: 'Writing',
      description: 'Essays and insights from The Agentic Economy.',
      path: '/writing',
      image: '/og/writing.jpg',
    }),
})

function WritingIndex() {
  return (
    <ContentIndex
      eyebrow="Writing"
      title="Our Insights"
      records={listPublished(siteContent, 'essay')}
      basePath="/writing"
    />
  )
}
