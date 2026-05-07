import { SignInButton, UserButton, useAuth } from '@clerk/tanstack-react-start'
import { Link, useLocation } from '@tanstack/react-router'
import { ArrowRight, KeyRound } from 'lucide-react'
import { navigation } from '~/lib/site'

export function Shell({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const showsPublicAuth = isOperationalRoute(location.pathname)
  const shellClass = isHome
    ? 'ae-shell ae-shell--home'
    : 'ae-shell ae-shell--page'

  return (
    <div className={shellClass} data-route-surface="paper">
      <header className="site-header">
        <Link
          activeProps={{}}
          to="/"
          className="brand-mark"
          aria-label="The Agentic Economy"
        >
          <span className="brand-glyph">AE</span>
          <span>The Agentic Economy</span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = isActiveNavItem(location.pathname, item.to)

            return (
              <Link
                aria-current={isActive ? 'page' : undefined}
                activeProps={{}}
                className={isActive ? 'active' : undefined}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="header-actions">
          <HeaderAuth showPublicAuth={showsPublicAuth} />
        </div>
      </header>
      {children}
      {!isHome ? (
        <footer className="site-footer">
          <div>
            <strong>The Agentic Economy</strong>
            <span>Infrastructure for Software that Acts</span>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link activeProps={{}} to="/thesis" className="footer-link">
              Thesis <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link activeProps={{}} to="/atlas" className="footer-link">
              Atlas <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link activeProps={{}} to="/writing" className="footer-link">
              Writing <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </nav>
        </footer>
      ) : null}
    </div>
  )
}

function isActiveNavItem(pathname: string, target: string) {
  if (pathname === target || pathname.startsWith(`${target}/`)) return true
  if (target === '/writing') return pathname.startsWith('/writing')
  return false
}

function isOperationalRoute(pathname: string) {
  return (
    pathname === '/pricing' ||
    pathname === '/account' ||
    pathname.startsWith('/checkout/')
  )
}

function HeaderAuth({ showPublicAuth }: { showPublicAuth: boolean }) {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    if (!showPublicAuth) return null

    return (
      <button
        aria-label="Loading account"
        className="icon-text-button"
        type="button"
        disabled
      >
        <KeyRound size={16} aria-hidden="true" />
        Account
      </button>
    )
  }

  if (isSignedIn) {
    return <UserButton />
  }

  if (!showPublicAuth) return null

  return (
    <SignInButton mode="modal">
      <button className="icon-text-button" type="button">
        <KeyRound size={16} aria-hidden="true" />
        Sign in
      </button>
    </SignInButton>
  )
}
