import { createFileRoute } from '@tanstack/react-router'
import { AccountHub } from '~/components/BillingActions'

export const Route = createFileRoute('/account')({
  component: AccountHub,
  head: () => ({
    meta: [{ title: 'Account | The Agentic Economy' }],
  }),
})
