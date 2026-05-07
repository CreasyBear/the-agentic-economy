import { createFileRoute } from '@tanstack/react-router'
import { AccountHub } from '~/components/BillingActions'
import { pageHead } from '~/lib/seo'

export const Route = createFileRoute('/account')({
  component: AccountHub,
  head: () =>
    pageHead({
      title: 'Account',
      description: 'Account access for The Agentic Economy.',
      path: '/account',
      noindex: true,
    }),
})
