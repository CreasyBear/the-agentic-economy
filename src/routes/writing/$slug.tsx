import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArticleView } from '~/components/ContentViews'
import {
  getAdjacentPublished,
  getCanonicalPath,
  getPublishedBySlug,
} from '~/lib/content-model'
import { siteContent } from '~/lib/site'

export const Route = createFileRoute('/writing/$slug')({
  loader: ({ params }) => {
    const record = getPublishedBySlug(siteContent, 'essay', params.slug)
    if (!record) throw notFound()
    return {
      record,
      adjacent: getAdjacentPublished(siteContent, 'essay', record.slug),
    }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.record.title ?? 'Writing'} | The Agentic Economy`,
      },
      {
        name: 'description',
        content:
          loaderData?.record.seo?.description ??
          loaderData?.record.summary ??
          'Our insights from The Agentic Economy.',
      },
    ],
    links: loaderData?.record
      ? [{ rel: 'canonical', href: getCanonicalPath(loaderData.record) }]
      : [],
  }),
  component: WritingArticle,
})

function WritingArticle() {
  const { adjacent, record } = Route.useLoaderData()
  return <ArticleView adjacent={adjacent} record={record} />
}
