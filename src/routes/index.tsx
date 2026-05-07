import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '~/components/HomePage'
import { pageHead, siteSeo } from '~/lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    pageHead({
      title: siteSeo.name,
      description: siteSeo.description,
      path: '/',
    }),
  component: Home,
})

function Home() {
  return <HomePage />
}
