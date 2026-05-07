import { Link, createRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { ConvexQueryClient } from '@convex-dev/react-query'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const convexUrl = import.meta.env.VITE_CONVEX_URL
  const convexQueryClient = convexUrl ? new ConvexQueryClient(convexUrl) : null

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        ...(convexQueryClient
          ? {
              queryKeyHashFn: convexQueryClient.hashFn(),
              queryFn: convexQueryClient.queryFn(),
            }
          : {}),
        gcTime: 5000,
      },
    },
  })
  convexQueryClient?.connect(queryClient)

  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: 'intent',
      context: {
        queryClient,
        convexClient: convexQueryClient?.convexClient ?? null,
      },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      defaultErrorComponent: RouteErrorFallback,
      defaultNotFoundComponent: RouteNotFoundFallback,
    }),
    queryClient,
  )

  return router
}

function RouteErrorFallback() {
  return (
    <main className="page-shell checkout-status-page">
      <section className="checkout-panel">
        <span className="status-pill warn">Error</span>
        <h1>Something went wrong.</h1>
        <p className="lede">
          The page could not be rendered. Return home and try again.
        </p>
        <Link to="/" className="primary-action">
          Return home
        </Link>
      </section>
    </main>
  )
}

function RouteNotFoundFallback() {
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
