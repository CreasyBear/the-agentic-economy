# The Agentic Economy Parent Site

Parent site, writing surface, billing surface, and account hub for
`agentic-economy.ai`.

This is the new parent website project. It is not the Handshake product app.

Stack:

- TanStack Start on Vercel
- Convex for content, Stripe sync, and entitlement contracts
- Clerk for cross-subdomain identity
- Stripe Hosted Checkout and Customer Portal

Core product boundary:

- Parent app owns public IA, pricing, checkout, subscription state, billing portal, and `/account`.
- Handshake remains a separate app at `handshake.agentic-economy.ai`.
- Handshake integration is deferred until the parent platform foundation is stable.

Public routes:

- `/`
- `/thesis`
- `/atlas`
- `/handshake`
- `/writing`
- `/writing/$slug`
- `/team`

Operational product routes:

- `/pricing`
- `/account`
- `/checkout/success`
- `/checkout/cancel`

Current build focus:

1. Keep the public route system minimal, quiet, and precise.
2. Present the site as thesis, atlas, primitive, writing, and team.
3. Use Atlas as a six-plate scroll sequence, not a research dump, blog index, or gallery.
4. Present Handshake as one concrete primitive inside the field.
5. Keep commerce and account routes operational but out of primary brand navigation.
6. Keep `handshake.agentic-economy.ai` as the external product destination.

Local setup:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Production deployment:

```bash
npm run build:vercel
```

Vercel is configured through `vercel.json` to use the Convex deploy wrapper.
Deployment variables, production gates, and Stripe webhook setup are documented
in `docs/deployment.md`.

Content migration:

```bash
node scripts/import-astro-content.mjs ../the-agentic-economy-github > convex/import-content.json
```

Canonical public essays live in `content/essays/*.mdx` and are parsed into typed
records by `src/lib/essay-content.ts`. Convex content imports should preserve
`sourcePath` and `sourceChecksum` rather than becoming the only public source of
truth.

Research artifacts:

Public research should flow through two surfaces:

- Atlas carries the visual plate series in `public/images/atlas/`.
- Writing carries longform arguments. Essay bodies are the canonical published
  text and should not be casually rewritten during page polish.

- `research/agentic-economy-mapping-framework.md` defines the systematic
  research operating framework for capturing the reorganized agentic economy as
  thesis objects, organizational maps, market maps, business model canvases,
  primitive maps, scenario simulations, evidence ledgers, and publishable
  insight.
- `research/agentic-economy-synthesis-v1.md` is the first structured synthesis
  using that framework: core thesis objects, a reorganized economy map, market
  map, early business model canvases, infrastructure stack, and presentable
  insight candidates.
- `research/agentic-economy-wedge-ranking-v1.md` ranks candidate wedges from
  the scenario workbench using consequence severity, frequency, current-control
  weakness, buyer urgency, integration feasibility, counterparty need, and
  Handshake adjacency.
- `research/agentic-economy-insight-brief-v1.md` turns the structured research
  into a concise presentable point of view for founders, investors, operators,
  enterprise leaders, and protocol/platform builders.
- `research/handshake-business-as-api.md` frames Handshake as the mandate layer
  for a Business-as-API economy: the pre-call ceremony that lets outcome
  endpoints trust agents binding principals to terms, evidence, and liability.
- `research/agentic-economy-field-map.md` maps the broader study surface across
  organizations, markets, infrastructure, crypto networks, physical operations,
  and Handshake as one concrete expression of the thesis.
- `research/agentic-economy-landscape-review.md` reviews current adjacent
  protocol and vendor work across agent communication, tool access, identity,
  payments, credentials, and the remaining pre-action authority gap.
- `research/agentic-economy-validation-guide.md` turns the research into an
  interview guide, wedge scorecard, proof-object test, and decision process for
  finding where pre-action authority is an urgent buyer problem.
- `research/agentic-economy-interview-packet.md` provides outreach copy, call
  scripts, note templates, scoring sheets, synthesis rules, and the first
  twelve target profiles for the validation cycle.
- `research/agentic-economy-editorial-roadmap.md` turns the research program
  into a publishable writing sequence with evidence gates, voice rules, website
  mapping, and first-piece priorities.
- `research/scenarios/supply-availability-agent.md` is the first structured
  scenario simulation using the mapping framework, tracing how a business intent
  to preserve supply availability reorganizes operations, markets, controls, and
  possible infrastructure needs.
- `research/scenarios/paid-api-agent.md`,
  `research/scenarios/customer-exception-agent.md`,
  `research/scenarios/cloud-operations-agent.md`,
  `research/scenarios/logistics-custody-agent.md`, and
  `research/scenarios/agent-to-agent-subcontracting.md` extend the scenario
  workbench across paid APIs, support discretion, cloud operations, physical
  custody, and recursive delegation.
- `research/scenarios/guarded-capability-licensing.md` captures the licensing
  and standards-body wedge: as capabilities become callable, access control
  moves from systems to powers.
- `research/scenarios/edge-device-admission.md` captures the IoT and edge
  device wedge: devices becoming counterparties that must admit or refuse agents
  under local owner policy, safety constraints, and records.
- `research/scenarios/atomized-resource-intent.md` captures declarations of
  intent over bounded resources, spaces, capacity, and time windows.
- `research/drafts/the-agentic-economy-is-not-a-payments-category.md` is the
  first research draft from the editorial roadmap. It is not yet published into
  the public essay content set.
- `research/drafts/agents-can-talk-that-does-not-mean-they-should-act.md`
  distinguishes agent communication and tool access from action-level authority.

Stripe webhook endpoint:

```text
https://<convex-deployment>.convex.site/stripe/webhook
```
