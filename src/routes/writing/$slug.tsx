import { createFileRoute, notFound } from '@tanstack/react-router'
import { ArticleView } from '~/components/ContentViews'
import {
  getAdjacentPublished,
  getCanonicalPath,
  getPublishedBySlug,
} from '~/lib/content-model'
import { siteContent } from '~/lib/site'
import { pageHead } from '~/lib/seo'

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
    ...pageHead({
      title: loaderData?.record.title ?? 'Writing',
      description:
        loaderData?.record.seo?.description ??
        loaderData?.record.summary ??
        'Insights from The Agentic Economy.',
      path: loaderData?.record ? getCanonicalPath(loaderData.record) : '/writing',
      image: loaderData?.record.seo?.ogImage ?? loaderData?.record.heroImage?.src,
      type: 'article',
      publishedAt: loaderData?.record.publishedAt,
    }),
  }),
  component: WritingArticle,
})

function WritingArticle() {
  const { adjacent, record } = Route.useLoaderData()
  return <ArticleView adjacent={adjacent} record={record} />
}
