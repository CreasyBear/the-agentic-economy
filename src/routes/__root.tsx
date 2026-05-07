import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { ClerkProvider, useAuth } from '@clerk/tanstack-react-start'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import type { ConvexReactClient } from 'convex/react'
import appCss from '~/styles/app.css?url'
import { Shell } from '~/components/Shell'
import { rootJsonLd, siteSeo } from '~/lib/seo'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  convexClient: ConvexReactClient | null
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'theme-color', content: '#eee9df' },
      { name: 'application-name', content: siteSeo.name },
      { name: 'apple-mobile-web-app-title', content: siteSeo.name },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'author', href: '/humans.txt' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: NotFoundPage,
  component: RootComponent,
})

function RootComponent() {
  const { convexClient } = Route.useRouteContext()

  return (
    <RootDocument>
      <AppProviders convexClient={convexClient}>
        <Shell>
          <Outlet />
        </Shell>
      </AppProviders>
    </RootDocument>
  )
}

function NotFoundPage() {
  return (
    <main className="page-shell checkout-status-page">
      <section className="checkout-panel">
        <span className="status-pill warn">Not found</span>
        <h1>Route not found.</h1>
        <p className="lede">This page is not part of the current site.</p>
        <Link to="/" className="primary-action">
          Return home
        </Link>
      </section>
    </main>
  )
}

function AppProviders({
  children,
  convexClient,
}: {
  children: React.ReactNode
  convexClient: ConvexReactClient | null
}) {
  if (!convexClient) {
    return <ClerkProvider>{children}</ClerkProvider>
  }

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteSeo.language}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
