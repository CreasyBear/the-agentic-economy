# Agentic Economy Field Map

Date: 2026-05-06
Status: working map

## Purpose

The Agentic Economy studies the world of software agency: how AI agents act,
coordinate, transact, access systems, represent principals, and create
consequence across organizations, markets, digital infrastructure, crypto
networks, and the physical world.

This is not a prediction document. It is a map for study, market selection,
writing, and product reasoning.

Handshake is one concrete expression of the map: a pre-action ceremony that
checks whether an agent represents a real principal and is allowed to take a
specific action under specific limits. It is not the whole field.

## The Core Change

The previous economy assumed a human at the point of decision. Software mostly
waited, displayed, recommended, routed, and recorded.

The agentic economy begins when software can act:

- It can perceive state.
- It can choose a path.
- It can call services.
- It can spend or commit resources.
- It can negotiate with another system.
- It can create consequence before a human sees the action.

The question is not only "what can agents do?" The sharper question is:

> What has to become legible before a counterparty accepts agentic action?

## Assumption Stack

### What Must Be True

1. Agents will act across boundaries, not only inside one controlled product.
2. Counterparties will need proof before accepting agentic action.
3. Identity alone will be insufficient.
4. Payment validity alone will be insufficient.
5. Internal IAM alone will not cover cross-party delegation.
6. Intent can become structured enough for policy matching.
7. The useful unit of control is the action, not the user session.
8. The record has value after the fact: audit, dispute, compliance, liability,
   insurance, governance, or recovery.

### What Must Not Be True

1. It must not be true that "valid card plus signed-in user" becomes accepted as
   sufficient approval for most agentic actions.
2. It must not be true that every important interaction stays inside a single
   platform's native policy system.
3. It must not be true that the first usable version requires universal
   standardization.
4. It must not be true that humans remain the mandatory synchronous approval
   step for every consequential action.

### What Is Known Enough

- Payments, commerce, identity, agent communication, tool access, and verifiable
  credential work are already moving toward agent-specific infrastructure.
- Current protocols solve important pieces, but mostly at the level of commerce,
  payment, identity, tool access, communication, or workload identity.
- Existing essays already identify the recurring institutional gaps: standing,
  judgment, scale, visibility, and anchoring.

### What Is Unknown

- Which buyer feels the pain first outside payments.
- Whether the first wedge should sell to agent builders, accepting
  counterparties, enterprises, payment platforms, API providers, or risk owners.
- How much ceremony the market will tolerate before it feels like friction.
- Whether the durable record needs to be cryptographic, contractual,
  compliance-grade, or merely operational in the first wedge.
- Whether large incumbents absorb this into identity, payments, API gateways,
  commerce protocols, or cloud IAM.

### Falsifiers

- Enterprises accept agents with ordinary OAuth scopes and normal logs.
- Payment networks successfully generalize authorization beyond commerce before
  an independent pre-action primitive emerges.
- Agent action remains mostly first-party and closed-platform.
- Buyers do not pay for pre-action proof even after real incidents.
- The ceremony cannot be made simple enough for developers to integrate.

## The Primitive: Pre-Action Proof

The primitive is an action envelope carried into an interaction.

Minimum fields:

- Principal: the person, team, organization, or institution represented.
- Agent: the software actor requesting the action.
- Binding: evidence that this agent may represent this principal.
- Intent: what the principal or supervising system is trying to do.
- Action: the specific operation requested.
- Counterparty: the service, endpoint, agent, vendor, platform, or institution
  being asked to accept it.
- Authority: what is allowed.
- Limits: amount, scope, duration, purpose, frequency, geography, data class,
  vendor, or operational boundary.
- Policy: rules from one or both sides.
- Decision: allow, ask, deny, escalate, or stop.
- Record: what remains after the ceremony.
- Revocation and expiry: how approval stops being valid.

This is different from adjacent primitives:

- Identity says who something is.
- Payment says value can move.
- IAM says a credential has rights in a system.
- Logs say what happened.
- The ceremony says this action is allowed before consequence.

## Organization Map

### Board and CEO

What changes:

- Strategy moves from software adoption to software agency adoption.
- The firm has to decide where agents can act, not only where AI can assist.
- Accountability becomes a design problem, not only a legal afterthought.

What breaks:

- Governance built around human approval cadence.
- Risk reports that assume decisions move at organizational speed.
- Strategy decks that treat AI as productivity tooling rather than delegated
  economic agency.

Control surface:

- Agent operating policy.
- Delegation boundaries.
- Enterprise record of agentic action.
- Explicit risk ownership for agent-caused consequence.

### CFO

What changes:

- Spend authority becomes programmable.
- Procurement can shift from seats and vendors to actions and outcomes.
- Finance needs to distinguish valid payment from valid approval.

What breaks:

- Expense policy based on human cardholders.
- Procurement workflows that assume a person reads, compares, and approves.
- Audit trails that begin after the transaction.

Control surface:

- Spend mandates.
- Vendor-specific intent.
- Amount and frequency caps.
- Charge, refund, dispute, and exception records.

### COO

What changes:

- Operations become a portfolio of callable capabilities.
- Agents can coordinate vendors, logistics, support, claims, scheduling, and
  replenishment without building a matching human organization.

What breaks:

- Manual exception queues.
- Vendor coordination through email, portals, and people.
- SLA enforcement that depends on post-hoc review.

Control surface:

- Authorized operating lanes.
- Escalation rules.
- Chain-of-custody records.
- Evidence that a delegated action stayed within operating policy.

### CTO and CIO

What changes:

- Systems become action surfaces for agents.
- APIs, MCP servers, SaaS apps, and internal services need agent-readable
  authority and policy.

What breaks:

- User-centric integration models.
- Static API keys.
- Broad service accounts.
- Dashboards as the primary interface to business software.

Control surface:

- Agent registry.
- Tool registry.
- Scoped action grants.
- Runtime policy matching.
- Revocation.

### CISO

What changes:

- The threat model expands from users and workloads to non-deterministic
  delegated actors.
- The question shifts from "is this credential valid?" to "should this specific
  action be accepted right now?"

What breaks:

- Long-lived tokens.
- Shared bot accounts.
- Implicit trust between automation systems.
- Monitoring that catches abuse only after execution.

Control surface:

- Agent identity.
- Principal-agent binding.
- Action approval.
- Blast-radius limits.
- Kill switches.
- Signed records for investigation.

### General Counsel and Compliance

What changes:

- Consent, intent, authority, and liability need to be represented in systems.
- Legal review moves closer to policy templates, approval ceremonies, and
  durable evidence.

What breaks:

- Terms accepted by a human once and reused indefinitely.
- Policies that cannot be evaluated by software before an action.
- Legal records that cannot explain what an agent was allowed to do.

Control surface:

- Policy modules.
- Consent records.
- Approved action classes.
- Counterparty terms.
- Evidence packages for disputes.

### Business Unit Leaders

What changes:

- Teams can operate through smaller human groups coordinating larger agent and
  service networks.
- Outcomes matter more than software seats.

What breaks:

- Headcount as the default scaling unit.
- SaaS adoption as a proxy for operational maturity.
- Reporting that only shows what people did.

Control surface:

- Unit-specific delegation policies.
- Approved vendors and services.
- Agent performance and exception metrics.

### Operators

What changes:

- Operators become supervisors, exception handlers, policy authors, and
  investigators.
- Routine clicking gives way to reviewing intentions, thresholds, and failed
  ceremonies.

What breaks:

- Workflows that require a human to move information between systems.
- Approval queues where all actions look equal.
- Interfaces designed for constant human operation.

Control surface:

- Intent review.
- Approve, ask, deny, stop.
- Incident review.
- Policy adjustment.

### Agents

What changes:

- Agents become economic actors without legal personhood.
- They need a way to carry who they represent, what they intend, and what they
  are allowed to do.

What breaks:

- Treating an agent as just another app integration.
- Treating a tool call as a neutral technical event.

Control surface:

- Agent passport.
- Action envelope.
- Counterparty policy negotiation.
- Decision record.

## Economic Model Shift

The strong version is not "SaaS ends." The more useful frame is scenario-based.

### Scenario 1: SaaS Persists, Agents Operate It

Humans still buy SaaS. Agents become power users. Dashboards remain, but the
daily operator becomes software.

Implication:

- SaaS vendors need agent-safe APIs, delegated permissions, and approval gates.

### Scenario 2: SaaS Becomes Agent-Readable Infrastructure

The user interface becomes less central. The product's value shifts to systems
of record, policy, workflow state, and reliable action endpoints.

Implication:

- Pricing may shift from seats to usage, actions, outcomes, or managed
  capabilities.

### Scenario 3: Business-as-a-Service Emerges

Some vendors stop selling tools and start selling callable outcomes: verify an
invoice, underwrite a customer, file a document, resolve a support case, route a
shipment, certify a design.

Implication:

- The market needs contracts, proof, liability, service levels, and payment
  around atomic business actions.

### Scenario 4: Hybrid Market

Humans supervise high-impact decisions. Agents execute routine work. SaaS,
services, and protocols coexist.

Implication:

- The winning control systems route action by risk, context, and authority.

## Market Surface Map

| Domain                   | Agent action                                  | Current system                               | Gap                                                  | Who needs proof                    | Wedge quality             |
| ------------------------ | --------------------------------------------- | -------------------------------------------- | ---------------------------------------------------- | ---------------------------------- | ------------------------- |
| Payments and checkout    | Buy, subscribe, renew, refund                 | Cards, wallets, PSPs, commerce protocols     | Payment validity is not action approval              | Merchant, PSP, issuer, buyer       | High                      |
| Paid APIs                | Call data, model, compute, search, enrichment | API keys, subscriptions, x402-style payments | Per-call authority and intent are weak               | API provider, agent builder, buyer | High                      |
| SaaS admin               | Change settings, invite users, export data    | RBAC, audit logs, OAuth scopes               | Broad permissions lack action-specific approval      | SaaS vendor, enterprise admin      | High                      |
| Procurement              | Select vendor, request quote, issue PO        | Procurement suites, email, approval chains   | Agents can commit spend faster than review           | CFO, procurement, vendor           | High                      |
| Data rooms               | Access, share, summarize, export              | SSO, watermarking, logs                      | Identity does not prove permitted purpose            | Seller, buyer, legal, investor     | Medium-high               |
| Cloud operations         | Deploy, delete, scale, change network         | IAM, CI/CD, change management                | Valid credential can still make wrong change         | CTO, CISO, cloud provider          | High but enterprise-heavy |
| Legal/accounting filings | File, amend, certify, submit                  | Human professionals, portals                 | Authority and liability must be explicit             | Firm, regulator, client            | Medium-high               |
| Insurance claims         | Submit, approve, settle, dispute              | Claim systems, adjusters                     | Agent authority and evidence chain matter            | Insurer, claimant, regulator       | Medium-high               |
| Healthcare/labs          | Order tests, release data, schedule care      | EHR, portals, compliance workflows           | Consent and clinical authority are sensitive         | Provider, patient, lab             | High but regulated        |
| Logistics custody        | Book, release, transfer, reroute              | EDI, portals, manual ops                     | Physical custody needs pre-action authority          | Carrier, shipper, receiver         | Medium-high               |
| Manufacturing/robotics   | Order production, retool, inspect             | MES, ERP, robots, QC systems                 | Digital instruction causes physical consequence      | Plant, vendor, insurer             | Medium                    |
| Agent-to-agent services  | Subcontract work to another agent             | Ad hoc APIs and agreements                   | Recursive authority and liability are unclear        | Both principals                    | High long-term            |
| Crypto/onchain           | Sign, swap, bridge, stake, pay                | Wallets, smart contracts, policy wallets     | Signatures prove control, not business authorization | User, protocol, custodian          | High but noisy            |
| Customer support         | Refund, credit, waive fee, change account     | CRM, policy docs, human supervisors          | Agents need bounded authority                        | Merchant, customer, finance        | High                      |

## Crypto and Onchain View

Crypto helps when the problem is settlement, programmability, custody,
portable credentials, or public verification.

Crypto does not automatically solve:

- Whether the agent should have acted.
- Whether the action represented the principal's current intent.
- Whether the counterparty's policy accepted the action.
- Whether the action was within organizational authority.
- Whether a legal or operational record is sufficient.

Likely posture:

- Chain-agnostic authorization infrastructure.
- Crypto-compatible where settlement, credentials, attestations, or public
  verification matter.
- Offchain or hybrid for enterprise policy, privacy, legal context, and
  commercially sensitive records.

## Physical World View

The physical world matters because agentic action eventually crosses from
instruction to consequence.

Examples:

- A warehouse agent releases inventory.
- A logistics agent reroutes a shipment.
- A lab agent orders a test.
- A manufacturing agent schedules a production run.
- A field service agent dispatches a technician.
- An energy agent changes consumption or storage behavior.
- A healthcare agent schedules care or releases records.

Physical-world ceremonies need:

- Proof of principal.
- Proof of authority.
- Time and location scope.
- Custody or safety constraints.
- Liability routing.
- Record for dispute, compliance, and insurance.

## Incumbent Landscape

This is a current-state map, not a full competitive review.

| System                                  | Solves                                                   | Does not fully solve                                 | Relationship                 |
| --------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------- | ---------------------------- |
| OpenAI/Stripe Agentic Commerce Protocol | ChatGPT checkout and merchant commerce integration       | General authorization outside commerce               | Adjacent/substrate           |
| Google AP2                              | Agent-led payment mandates and verifiable payment intent | Non-payment operations unless extended               | Adjacent/possible competitor |
| Coinbase x402                           | HTTP-native payments for APIs and agents                 | Principal authority and non-payment policy           | Substrate/partner            |
| A2A                                     | Agent communication and task collaboration               | Authorization ceremony for consequence               | Substrate                    |
| MCP authorization                       | Tool/server access using OAuth patterns                  | Business intent and cross-party action approval      | Substrate                    |
| OAuth/OIDC                              | Delegated access and identity federation                 | Action-specific intent and counterparty policy match | Substrate                    |
| IAM/RBAC/ABAC                           | Internal permissions                                     | Cross-boundary principal-agent-counterparty ceremony | Substrate                    |
| Verifiable Credentials                  | Portable, machine-verifiable claims                      | Runtime action approval by itself                    | Substrate                    |
| SPIFFE/SPIRE                            | Workload identity and attestation                        | Principal intent and business authorization          | Substrate                    |
| Payment networks                        | Payment authorization, fraud, dispute systems            | Non-payment agentic action                           | Adjacent                     |
| API gateways                            | Traffic control, auth, rate limits                       | Principal intent and bilateral authority             | Possible partner             |
| Audit/logging vendors                   | Post-action evidence                                     | Pre-action gating                                    | Partner/partial              |
| Procurement suites                      | Vendor approval and spend workflows                      | Agent-native atomic action approval                  | Partner/competitor           |

## Wedge Ranking

Scoring uses a 1-10 qualitative scale.

| Market                           | Pain | Frequency | Consequence | Pre-action need | Buyer clarity | Integration | Expansion | Total |
| -------------------------------- | ---: | --------: | ----------: | --------------: | ------------: | ----------: | --------: | ----: |
| Paid APIs                        |    8 |         9 |           7 |               8 |             8 |           8 |         9 |    57 |
| Payments and checkout            |    9 |         8 |           9 |               9 |             8 |           6 |         9 |    58 |
| SaaS admin actions               |    8 |         8 |           8 |               8 |             7 |           7 |         8 |    54 |
| Customer support refunds/credits |    8 |         9 |           7 |               8 |             8 |           7 |         7 |    54 |
| Cloud operations                 |    9 |         7 |          10 |               9 |             7 |           5 |         8 |    55 |
| Agent-to-agent services          |    7 |         6 |           8 |               9 |             5 |           5 |        10 |    50 |
| Procurement                      |    8 |         6 |           8 |               8 |             7 |           5 |         8 |    50 |
| Data rooms                       |    7 |         5 |           8 |               8 |             7 |           6 |         7 |    48 |
| Logistics custody                |    8 |         6 |           9 |               8 |             6 |           4 |         8 |    49 |
| Healthcare/labs                  |    9 |         6 |          10 |               9 |             6 |           3 |         8 |    51 |
| Crypto/onchain                   |    7 |         8 |           9 |               8 |             6 |           6 |         8 |    52 |

Initial interpretation:

- Best first wedge remains payments/checkout because consequence and buyer
  language are already legible.
- Best adjacent wedge may be paid APIs because it is closer to agents, easier to
  integrate, and less dominated by card-network behavior.
- Best enterprise wedge may be SaaS admin actions or customer support credits,
  where "valid credential is not approval" is easy to understand.
- Best long-term wedge is agent-to-agent services, but the market may be too
  early unless paired with paid APIs or enterprise automation.

## Research Agenda

### Immediate Questions

1. Where do businesses first refuse an agent because proof is insufficient?
2. Which actions are frequent enough and risky enough to justify ceremony?
3. Who is the first economic buyer: builder, counterparty, platform, risk owner,
   or enterprise admin?
4. What is the smallest acceptable proof bundle?
5. Does the market call this approval, authorization, consent, mandate, policy,
   warrant, passport, or something else?

### Interviews

Talk to:

- Agent builders trying to monetize or transact.
- Paid API providers evaluating agent traffic.
- Merchants considering agentic checkout.
- SaaS vendors exposing agent/tool APIs.
- Enterprise security leaders managing agents.
- Procurement leaders thinking about delegated buying.
- Payment risk/fraud teams.
- Cloud/security teams managing service accounts.

### Experiments

1. Payments: verify approval before an agent completes checkout.
2. Paid API: attach intent and approval to a paid API call.
3. SaaS admin: gate one destructive admin action with an action envelope.
4. Support credits: allow or deny an agent-issued refund/credit.
5. Agent-to-agent: require both agents to present matching authority before
   delegation.

## Website and Writing Implications

Top-level site:

- Do not explain the whole map on the homepage.
- State the field with authority.
- Use About for the thesis.
- Use Writing for the map and consequences.
- Use Handshake as the first artifact, not the company definition.

Writing pipeline:

- The original five essays remain the intellectual spine.
- New writing should extend the map into domains:
  - The C-suite and software agency.
  - The operator after SaaS.
  - Paid APIs as the first non-commerce market.
  - The agentic firm.
  - Why identity is not approval.
  - Why payment validity is not approval.
  - The physical world as an endpoint.
  - Crypto as settlement, not authority.

## Source Notes

Current external signals to track:

- Google AP2 describes an open agent payments protocol that uses mandates and
  verifiable credentials for agent-led payments:
  https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
- AP2 documentation frames payments as an extension for agent protocols:
  https://ap2-protocol.org/
- OpenAI/Stripe Agentic Commerce Protocol supports Instant Checkout and merchant
  checkout integration:
  https://openai.com/index/buy-it-in-chatgpt/
- The ACP checkout spec keeps payment on merchant rails and defines checkout
  session flows:
  https://agentic-commerce-protocol.com/docs/commerce/specs/checkout
- Coinbase x402 frames HTTP-native payments for APIs, AI models, agents, and
  machine payments:
  https://www.coinbase.com/developer-platform/products/x402/
- A2A provides agent-to-agent communication and task collaboration:
  https://google-a2a.github.io/A2A/specification/
- MCP authorization defines transport-level OAuth-based access to MCP servers:
  https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
- W3C Verifiable Credentials 2.0 became a W3C standard in 2025:
  https://lists.w3.org/Archives/Public/w3c-news/2025AprJun/0000.html
- SPIFFE/SPIRE covers workload identity and attestation:
  https://spiffe.io/docs/latest/spire-about/spire-concepts/
- Okta is explicitly framing agents as identity-bearing enterprise entities:
  https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-New-Blueprint-for-the-Secure-Agentic-Enterprise/default.aspx
- Cloudflare has positioned NET Dollar for transactions in the agentic web:
  https://www.cloudflare.com/en-au/press/press-releases/2025/cloudflare-introduces-net-dollar-to-support-a-new-business-model-for-the-ai-driven-internet/

## Reusable Exploration Prompt

Use this prompt when expanding the map.

```text
Map the agentic economy as the world of software agency.

Do not assume the future is predetermined. Study how AI agents act,
coordinate, transact, access systems, represent principals, and create
consequence across organizations, markets, digital infrastructure, crypto
networks, and the physical world.

Treat Handshake as one concrete expression of the research: a pre-action
ceremony that proves an agent represents a real principal and is authorized to
take a specific action under specific limits. Do not reduce the agentic economy
to Handshake, payments, crypto, SaaS, or identity.

Analyze:

1. What must be true, not true, known, unknown, and falsifiable.
2. What changes from board/CEO level down to operator level.
3. How SaaS, APIs, services, and outcome-based business models evolve.
4. Where crypto helps and where it does not.
5. Where agentic action reaches the physical world.
6. Which markets require pre-action proof.
7. Which incumbents solve pieces of the problem.
8. Which wedges are most urgent, buyer-legible, and expandable.
9. What new primitives are required around approval, authority, intent, consent,
   delegation, accountability, record, liability, and trust.

Prefer clear maps, tables, confidence levels, and falsification tests over
manifesto language. Use current sources for market facts. Preserve uncertainty.
```
