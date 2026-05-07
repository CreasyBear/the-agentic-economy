# Deployment

This app deploys as a TanStack Start site on Vercel with Convex as the backend.
Vercel must build through Convex so the frontend is compiled against the correct
Convex deployment URL and the Convex functions are pushed with the same commit.

## Build Command

Vercel uses the committed `vercel.json` build command:

```bash
npm run build:vercel
```

That script expands to:

```bash
npx convex deploy --cmd-url-env-var-name VITE_CONVEX_URL --cmd 'npm run build:app'
```

Do not replace this with a plain `npm run build` in Vercel. A plain frontend
build can compile, but it will not deploy Convex functions or inject the
production `VITE_CONVEX_URL`.

## Vercel Environment Variables

Set these in Vercel:

```text
CONVEX_DEPLOY_KEY
VITE_CLERK_PUBLISHABLE_KEY
VITE_PARENT_SITE_URL
VITE_HANDSHAKE_CONSOLE_URL
```

`CONVEX_DEPLOY_KEY` should be scoped per environment. Use a production deploy
key for Production and a preview deploy key for Preview.

## Convex Environment Variables

Set these on the Convex deployment:

```text
CLERK_JWT_ISSUER_DOMAIN
SITE_URL
HANDSHAKE_CONSOLE_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
STRIPE_HANDSHAKE_PRICE_ID
STRIPE_CUSTOMER_PORTAL_RETURN_URL
```

Stripe should send billing webhooks to:

```text
https://<convex-deployment>.convex.site/stripe/webhook
```

## Production Gate

Run this before promoting a deployment:

```bash
npm run format:check
npm run quality
npm run audit:prod
```

For dependency triage, use `npm run audit:all` separately. Dev-only audit
findings should not block production unless they affect the build or CI
environment.
