# Agentic Economy Landscape Review

Date: 2026-05-06
Status: sourced working review

## Purpose

This review tests the working thesis from
`research/agentic-economy-field-map.md` against the current adjacent landscape.

The question is narrow:

> Who is already solving identity, payment, access, communication, credentials,
> or governance for agents, and where does a cross-domain pre-action ceremony
> remain uncovered?

This is not a full competitive review. It is a map of adjacent systems and
their relationship to the Handshake hypothesis.

## Working Claim

Many systems are moving toward agent-native infrastructure. The strongest
current efforts cluster around five layers:

1. Agent communication.
2. Tool and API access.
3. Agent identity and governance.
4. Agent payments and commerce.
5. Credentials, attestations, and workload identity.

The apparent gap is not "identity for agents" or "payments for agents."

The gap is broader:

> Before accepting an action, a counterparty needs to know whether this agent
> represents this principal and is allowed to perform this specific action,
> with this intent, under these limits, right now.

## Source Bias

This review uses primary or near-primary sources where possible: official
protocol docs, company docs, standards docs, and company announcements. It
should be treated as a current-state map, not proof that no private product
exists.

## Layer 1: Agent Communication

### A2A

The A2A protocol focuses on interoperability between agents: discovery,
capability description, task exchange, messages, and artifacts. It gives agents
a way to talk to each other across systems.

What it solves:

- Agent discovery.
- Agent cards and capability metadata.
- Task exchange.
- Multi-agent communication.

What it does not appear to fully solve:

- Whether the agent is allowed by a real principal to take a specific economic
  or operational action.
- Bilateral authority matching between two principals.
- A durable business approval record before consequence.

Handshake relationship:

- Substrate, not substitute.
- A2A can carry or discover agents. Handshake can decide whether an agentic
  action should proceed.

Sources:

- https://google-a2a.github.io/A2A/specification/
- https://github.com/a2aproject/A2A

## Layer 2: Tool and API Access

### MCP Authorization

The Model Context Protocol authorization spec uses OAuth-based patterns for MCP
clients and servers. This is important because it gives tool access a standard
security posture rather than ad hoc secrets.

What it solves:

- Client authorization to MCP servers.
- OAuth 2.1 style flows.
- Resource indicators.
- Access tokens for protected resources.

What it does not appear to fully solve:

- Business intent.
- Principal-agent binding beyond normal auth context.
- Counterparty policy matching.
- A signed action record before consequence.

Handshake relationship:

- Substrate.
- MCP can secure access to tools. Handshake can ask whether the tool action is
  approved.

Sources:

- https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
- https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices

### Paid APIs and HTTP-Native Payments

Coinbase x402 positions payments at the HTTP layer, including for APIs, AI
models, agents, and machine-to-machine use cases.

What it solves:

- Payment for HTTP resources.
- Direct charging for API/model/resource access.
- A potential payment primitive for machine-callable services.

What it does not appear to fully solve:

- Whether the paying agent is authorized by the principal to make that call.
- Whether the counterparty policy matches the principal's intent.
- Non-payment authority for data access, SaaS admin, or physical operations.

Handshake relationship:

- Strong substrate for paid APIs.
- A natural adjacent wedge: x402 can ask for payment, Handshake can prove the
  action is allowed.

Sources:

- https://www.coinbase.com/developer-platform/products/x402/
- https://docs.cdp.coinbase.com/x402/welcome

## Layer 3: Agent Identity and Governance

### Okta Agentic Enterprise

Okta is explicitly framing agents as identity-bearing enterprise entities that
need to be discovered, registered, governed, monitored, and revoked.

What it solves:

- Enterprise visibility over agents.
- Agent identity governance.
- Registration and lifecycle management.
- Access and revocation posture.

What it does not appear to fully solve:

- Cross-party action approval between an agent and an external counterparty.
- Intent matching for a specific economic action.
- A ceremony that an external merchant, API, agent, or service can require
  before accepting action.

Handshake relationship:

- Adjacent and possibly complementary.
- Okta can answer "which agents exist and what access should they have inside
  the enterprise?" Handshake asks "is this external action allowed right now?"

Sources:

- https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-New-Blueprint-for-the-Secure-Agentic-Enterprise/default.aspx
- https://www.okta.com/products/okta-ai/

### Microsoft Entra Agent ID

Microsoft is moving toward lifecycle and governance tooling for agents through
Entra Agent ID.

What it solves:

- Agent registration.
- Identity lifecycle.
- Enterprise governance for agents.
- Alignment with Microsoft identity systems.

What it does not appear to fully solve:

- Cross-domain, bilateral action ceremony.
- Counterparty-facing proof that an agent may take this specific action.
- Non-Microsoft ecosystem neutrality.

Handshake relationship:

- Adjacent/substrate.
- Enterprise agent IDs may become one input into a broader action ceremony.

Sources:

- https://learn.microsoft.com/en-us/entra/identity-platform/agent-id
- https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/agent-identity

### Auth0 Cross App Access

Auth0 has been developing Cross App Access around secure authorization for AI
agents interacting with applications and APIs on behalf of users.

What it solves:

- User-authorized cross-app access.
- OAuth-oriented agent access patterns.
- A route away from password sharing and overbroad app access.

What it does not appear to fully solve:

- Organizational approval for business actions.
- Counterparty policy matching.
- Durable action-level business records.

Handshake relationship:

- Adjacent/substrate.
- Useful for user-to-app authorization, less complete for business-to-business
  agentic action.

Sources:

- https://auth0.com/ai-agents
- https://auth0.com/docs/authenticate/ai-agents

## Layer 4: Payments and Commerce

### Google AP2

Google's Agent Payments Protocol is one of the closest adjacent efforts because
it explicitly addresses agent-led payments, mandates, verifiable credentials,
and proof of user intent around payments.

What it solves:

- Agent-led payment flows.
- Mandates expressing user authorization.
- Verifiable credentials for payment context.
- A standard structure for payment intent and authorization.

What it does not appear to fully solve:

- General non-payment action authorization.
- SaaS admin action, cloud operation, physical operation, data access, or
  agent-to-agent subcontracting unless the pattern expands beyond payments.

Handshake relationship:

- Closest conceptual neighbor in payments.
- Potential competitor if generalized beyond payments.
- Potential proof that the market wants mandates and pre-action authorization.

Sources:

- https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
- https://ap2-protocol.org/
- https://github.com/google-agentic-commerce/AP2

### OpenAI and Stripe Agentic Commerce Protocol

The Agentic Commerce Protocol supports agentic checkout flows in ChatGPT and is
designed to integrate merchants while keeping payment processing on merchant
rails.

What it solves:

- Agent-assisted commerce.
- Merchant checkout session exchange.
- Integration between ChatGPT, merchants, and payment processors.
- Commerce-specific delegated payment handling.

What it does not appear to fully solve:

- General pre-action authority outside commerce.
- Enterprise delegation beyond a checkout flow.
- Agent-to-agent or non-payment actions.

Handshake relationship:

- Adjacent commerce rail.
- It validates the premise that commerce needs agent-native protocols, but it is
  narrower than arbitrary agentic operations.

Sources:

- https://openai.com/index/buy-it-in-chatgpt/
- https://stripe.com/newsroom/news/announcing-instant-checkout-in-chatgpt
- https://agentic-commerce-protocol.com/docs/commerce/specs/checkout

### FIDO Verifiable Intent and Mastercard

FIDO and Mastercard have discussed verifiable intent for AI commerce, combining
identity, instructions, and transaction details.

What it solves:

- Stronger commerce authorization.
- Intent verification in payment context.
- A bridge between identity, payment, and agentic purchase flows.

What it does not appear to fully solve:

- Non-commerce agentic action.
- Cross-domain policy matching outside payment context.
- Operational authority for SaaS, APIs, cloud, logistics, or physical-world
  actions.

Handshake relationship:

- Close conceptual neighbor inside payments.
- Evidence that "intent" is becoming a protocol-level object.

Sources:

- https://fidoalliance.org/fido-alliance-launches-payments-working-group-to-secure-agentic-commerce/
- https://www.mastercard.com/news/press/2025/october/mastercard-and-fido-alliance-advance-identity-standards-for-agentic-commerce/

### Cloudflare NET Dollar

Cloudflare positions NET Dollar as infrastructure for agentic web transactions.

What it solves:

- Settlement and transaction infrastructure for an AI-driven internet.
- Stablecoin-like payment posture connected to Cloudflare infrastructure.

What it does not appear to fully solve:

- Whether the action should be authorized.
- Whether an agent represents a principal.
- Counterparty policy and business intent.

Handshake relationship:

- Settlement-adjacent substrate.
- Useful if agentic services need payments at network edges, but not sufficient
  for approval.

Source:

- https://www.cloudflare.com/en-au/press/press-releases/2025/cloudflare-introduces-net-dollar-to-support-a-new-business-model-for-the-ai-driven-internet/

## Layer 5: Credentials, Attestations, and Workload Identity

### W3C Verifiable Credentials

Verifiable Credentials provide portable, machine-verifiable claims. They are a
major substrate for proving facts about entities, credentials, status, or
authorization claims.

What it solves:

- Portable claims.
- Cryptographic verification.
- Standards-based credential exchange.

What it does not solve by itself:

- Runtime action approval.
- Counterparty policy matching.
- Whether an intent is current and scoped.

Handshake relationship:

- Substrate.
- A ceremony can use credentials, but credentials do not themselves decide.

Sources:

- https://www.w3.org/TR/vc-data-model-2.0/
- https://lists.w3.org/Archives/Public/w3c-news/2025AprJun/0000.html

### SPIFFE and SPIRE

SPIFFE/SPIRE provide workload identity and attestation. This is highly relevant
for machine identity but not the same as business authorization.

What it solves:

- Workload identity.
- Attestation.
- Secure service-to-service identity.

What it does not solve by itself:

- Principal intent.
- Business policy.
- Cross-party economic authority.

Handshake relationship:

- Substrate for machine identity.
- Useful for proving the workload is real, not for proving the action is
  allowed by a principal.

Sources:

- https://spiffe.io/docs/latest/spire-about/spire-concepts/
- https://spiffe.io/docs/latest/spiffe-about/overview/

## Gap Matrix

| Capability                | Identity vendors | Payment protocols       | A2A/MCP    | Credentials/workload identity | Handshake hypothesis |
| ------------------------- | ---------------- | ----------------------- | ---------- | ----------------------------- | -------------------- |
| Agent discovery           | Medium           | Low                     | High       | Low                           | Medium               |
| Agent identity            | High             | Medium                  | Medium     | High                          | High as input        |
| Principal binding         | Medium-high      | Medium                  | Low-medium | Medium                        | Core                 |
| Intent                    | Low-medium       | High in payments        | Low        | Low-medium                    | Core                 |
| Counterparty policy       | Medium           | Medium-high in commerce | Low-medium | Low                           | Core                 |
| Action-specific authority | Medium           | High in payments        | Medium     | Low-medium                    | Core                 |
| Non-payment operation     | Medium           | Low                     | Medium     | Medium                        | Core                 |
| Pre-action decision       | Medium           | High in payments        | Low-medium | Low                           | Core                 |
| Durable business record   | Medium           | Medium-high in commerce | Low        | Medium                        | Core                 |
| Physical-world authority  | Low              | Low                     | Low        | Medium                        | Long-term core       |

## Current Best Read

Confidence: 7/10.

There is strong evidence that the market is converging on agent-native
infrastructure. There is also strong evidence that payment-specific intent and
mandate protocols are emerging quickly.

The defensible opening is narrower and sharper:

> Cross-domain pre-action authority for agentic operations.

Not payments alone. Not identity alone. Not communication alone. The opening is
the ceremony before an accepting counterparty lets an agent create consequence.

## Market Implications

### Payments remain the clearest proof market

Payments are the first place where the sentence "a working card is not
approval" is immediately legible.

Risk:

- AP2, FIDO/Mastercard, ACP, card networks, wallets, and PSPs may absorb the
  payment-specific version quickly.

Implication:

- Use payments to prove the primitive, but do not let the company become
  trapped inside payment orchestration.

### Paid APIs may be the cleanest adjacent wedge

Paid APIs sit between commerce, machine-to-machine access, and agentic services.
The action is atomic, frequent, monetizable, and easier to integrate than
enterprise procurement or healthcare.

Good first questions:

- Would API providers reject paid agent calls without stronger authority?
- Would agent builders add a passport/ceremony if it improved acceptance?
- Can an API provider express policy simply enough?

### SaaS admin actions may be the strongest enterprise wedge

Changing settings, exporting data, inviting users, issuing credits, or changing
account state are all valid-agent problems.

The sentence becomes:

> A valid credential is not approval.

### Cloud operations are painful but heavy

Cloud operations have clear consequence and clear need for authorization, but
the buyer expectations, integration complexity, and incumbent IAM depth are
high.

This is more likely a later enterprise wedge or partnership route.

### Agent-to-agent services are the long-term map

If agents hire agents, every subcontracted action needs principal binding,
delegation limits, liability, and record. This is conceptually the most
important market, but it may need paid APIs or enterprise automation to exist
first.

## Research Tests

### Test 1: Is "approval before action" enough?

Interview target:

- Agent builders.
- API providers.
- SaaS vendors exposing agent tools.
- Payment risk teams.

Ask:

- Where would you refuse an agent today?
- What proof would make you accept it?
- Do you need identity, payment, policy, consent, or a record?

### Test 2: Which wedge owns the sentence?

Candidate sentences:

- A working card is not approval.
- A valid API key is not approval.
- A signed wallet transaction is not approval.
- A logged-in user is not approval.
- A service account is not approval.

The strongest wedge is the one where buyers immediately agree and can name a
real workflow.

### Test 3: Can the ceremony fit inside existing protocols?

For each candidate wedge, test:

- Can this ride inside OAuth scopes?
- Can this ride inside MCP metadata?
- Can this ride inside AP2-style mandates?
- Can this ride inside x402 headers?
- Can this ride inside an A2A task exchange?
- Does it need its own object and record?

### Test 4: Who pays?

Hypotheses:

1. The agent builder pays to make agents accepted.
2. The accepting counterparty pays to reduce risk.
3. The enterprise principal pays to control delegation.
4. The platform pays because it owns the interaction.
5. The payment/API/service provider pays as infrastructure.

## Bottom Line

The landscape is not empty. That is good.

The empty-market claim would be weak. The stronger claim is that the adjacent
systems are proving the category from different directions:

- A2A proves agents need to communicate.
- MCP proves agents need tool access.
- Identity vendors prove agents need lifecycle and governance.
- AP2, ACP, FIDO, and x402 prove payments need intent and mandates.
- Verifiable credentials and workload identity prove machine-verifiable claims
  matter.

The open question is whether the world also needs a neutral ceremony for
agentic action itself.

That is the Agentic Economy research question.
