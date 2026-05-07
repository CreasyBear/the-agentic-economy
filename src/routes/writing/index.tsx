import { createFileRoute } from '@tanstack/react-router'
import { ContentIndex } from '~/components/ContentViews'
import { listPublished } from '~/lib/content-model'
import { siteContent } from '~/lib/site'

export const Route = createFileRoute('/writing/')({
  component: WritingIndex,
  head: () => ({
    meta: [
      { title: 'Writing | The Agentic Economy' },
      {
        name: 'description',
        content: 'Essays from the edge where software begins to act.',
      },
    ],
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
