# Agentic Economy Wedge Ranking V1

Date: 2026-05-06
Status: first structured ranking

## Purpose

This document ranks candidate wedges that emerged from the structured scenario
simulations.

It is not a final product strategy. It is a way to decide where the research
should look next, which interviews to prioritize, and where Handshake or any
similar infrastructure primitive might attach without reducing the agentic
economy to one product.

## Ranking Criteria

Score each wedge from 1 to 5.

| Criterion                | Question                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Consequence Severity     | Does unauthorized agentic action create meaningful financial, operational, legal, security, customer, or physical consequence? |
| Frequency                | Will the action happen often enough to matter?                                                                                 |
| Current-Control Weakness | Are identity, IAM, payment, API keys, contracts, and logs insufficient?                                                        |
| Buyer Urgency            | Can a buyer feel the pain before a major incident or universal standard arrives?                                               |
| Integration Feasibility  | Can this attach to existing systems without boiling the ocean?                                                                 |
| Counterparty Need        | Does another party need proof before accepting action?                                                                         |
| Handshake Adjacency      | Does a pre-action ceremony naturally solve the narrow moment?                                                                  |

Maximum score: 35.

## Ranked Wedges

| Rank | Wedge                                       | Score | Why It Ranks Here                                                                                                                                 |
| ---- | ------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Paid API authority                          | 29    | Narrow action unit, clear technical surface, recurring spend/data exposure, strong developer adjacency. Counterparty need still needs validation. |
| 2    | Agentic customer exception authority        | 28    | High frequency, clear business consequence, easy to understand. Risk is that support and CRM platforms absorb it natively.                        |
| 3    | Guarded capability licensing                | 27    | Strong category insight: rights holders must govern agentic invocation, not only document or account access. Buyer urgency needs validation.      |
| 4    | Cloud operations authority                  | 27    | High severity and clear insufficiency of broad IAM, but trust bar and integration burden are high.                                                |
| 5    | Supply availability / procurement authority | 26    | Strong C-suite and operations relevance, but multi-system complexity makes first wedge harder.                                                    |
| 6    | Logistics custody authority                 | 25    | Excellent physical-world proof of thesis, but fragmented integrations and slower adoption may make it harder early.                               |
| 7    | Agent-to-agent subcontracting               | 23    | Structurally central long-term, but timing is earlier and market behavior needs more proof.                                                       |

## Scoring Table

| Wedge                                       | Severity | Frequency | Control Weakness | Buyer Urgency | Feasibility | Counterparty Need | Handshake Adjacency | Total |
| ------------------------------------------- | -------- | --------- | ---------------- | ------------- | ----------- | ----------------- | ------------------- | ----- |
| Paid API authority                          | 3        | 5         | 4                | 3             | 5           | 4                 | 5                   | 29    |
| Customer exception authority                | 4        | 5         | 4                | 4             | 4           | 2                 | 5                   | 28    |
| Guarded capability licensing                | 4        | 3         | 5                | 3             | 3           | 5                 | 4                   | 27    |
| Cloud operations authority                  | 5        | 4         | 5                | 4             | 2           | 2                 | 5                   | 27    |
| Supply availability / procurement authority | 5        | 3         | 4                | 4             | 2           | 4                 | 4                   | 26    |
| Logistics custody authority                 | 5        | 3         | 4                | 3             | 2           | 5                 | 3                   | 25    |
| Agent-to-agent subcontracting               | 4        | 3         | 5                | 2             | 3           | 5                 | 1                   | 23    |

## Wedge Notes

### 1. Paid API Authority

Core sentence:

> A valid API key is not approval.

Why it is attractive:

- The action unit is small and repeatable.
- The integration surface is already API-shaped.
- Existing controls are recognizable: API keys, OAuth, billing, rate limits,
  logs.
- The gap can be expressed plainly: purpose, data, spend, and principal
  authority at call time.
- It connects to agent platforms, paid APIs, MCP servers, x402-style payments,
  and API gateways.

Weakness:

- The buyer may not feel urgency until spend, data sensitivity, or refusal is
  obvious.
- API providers may initially treat agents as normal clients.

Research priority:

- Interview paid API providers and agent builders.
- Ask where they expect agent calls to be refused.
- Test whether they would accept a purpose-bound approval envelope.

### 2. Customer Exception Authority

Core sentence:

> A permitted user is not approval to issue this credit.

Why it is attractive:

- The operator pain is concrete.
- High frequency creates repeated value.
- Finance, support, fraud, and policy all care.
- It demonstrates that agentic authority is not only about payments or APIs.

Weakness:

- Counterparty need is mostly internal unless the customer, regulator, or
  payment system must rely on the record.
- CRM and support platforms may absorb this as native agent governance.

Research priority:

- Interview support ops, finance ops, trust and safety, and AI support vendors.
- Look for cases where agents can issue refunds or credits, not only draft
  replies.

### 3. Guarded Capability Licensing

Core sentence:

> A protected PDF is not a protected capability.

Why it is attractive:

- It names a new control object: the capability, not the file, account, or API.
- Standards bodies, technical publishers, model providers, and professional
  skill owners have real IP, licensing, and reliance risk.
- The thesis is broader than DRM: agents need license-to-invoke for guarded
  powers.
- It gives the category a strong non-payments, non-identity wedge.

Weakness:

- Rights holders may resist agentic access instead of exposing controlled
  capability surfaces.
- Buyer urgency is unproven.
- The legal and licensing model may be slow to adapt.

Research priority:

- Interview standards authorities, technical publishers, compliance platforms,
  and enterprise license owners.
- Ask what happens when agents consume, apply, summarize, or operationalize
  protected standards and methods.

### 4. Cloud Operations Authority

Core sentence:

> A service account is not approval.

Why it is attractive:

- Severity is high.
- The gap between IAM permission and business authority is obvious to security
  leaders.
- Records matter for incident review, audit, and postmortems.

Weakness:

- The environment is sensitive.
- Buyers may avoid autonomy rather than buy ceremony.
- Cloud providers, IAM vendors, and security platforms may absorb the layer.

Research priority:

- Interview platform teams building autonomous remediation.
- Ask CISO and SRE leaders what an agent must prove before production change.

### 5. Supply Availability / Procurement Authority

Core sentence:

> A purchase order is not the whole decision.

Why it is attractive:

- It shows the firm becoming executable.
- It naturally maps CEO, CFO, COO, procurement, finance, legal, and operations.
- It connects digital action to supply, logistics, customer promise, and
  physical movement.

Weakness:

- Many systems and stakeholders.
- Harder to find a narrow first integration.
- Existing procurement and ERP suites may own the workflow.

Research priority:

- Interview procurement and supply chain operators adopting agents.
- Find the smallest repeated decision where software can commit or reserve.

### 6. Logistics Custody Authority

Core sentence:

> A valid instruction is not authority to move atoms.

Why it is attractive:

- It proves the broader thesis better than almost any other scenario.
- It shows physical consequence, custody, insurance, and liability.
- Counterparty need is strong: carriers, warehouses, insurers, customs, and
  marketplaces.

Weakness:

- Integration fragmentation is high.
- Timing may depend on logistics agents becoming real actors.
- Standards and counterparties are complex.

Research priority:

- Interview logistics platforms, carriers, marketplace logistics teams, and
  claims/insurance operators.
- Look for reroute, release, custody transfer, and expedited booking use cases.

### 7. Agent-To-Agent Subcontracting

Core sentence:

> A capable agent is not authorized delegation.

Why it is attractive:

- It may be the deepest long-term map.
- It captures recursive authority, liability, records, and multi-party trust.
- It is where markets for agent services become structurally different.

Weakness:

- The market may not exist at enough volume yet.
- The buyer and distribution path are less clear.
- It may depend on agent marketplaces emerging first.

Research priority:

- Track agent marketplaces, service agents, and protocol work.
- Interview agent builders about when they would outsource work to another
  agent.

## First Interview Order

1. Paid API providers and agent platform builders.
2. Support automation operators who allow agents to issue refunds, credits, or
   account changes.
3. Standards authorities, technical publishers, compliance platforms, and
   enterprise license owners.
4. Platform engineering and SRE teams testing autonomous remediation.
5. Procurement or supply chain teams evaluating agentic workflows.
6. Logistics platforms, carriers, and claims operators.
7. Agent marketplace builders and agent-service providers.

## What This Means For Handshake

Handshake should not be framed as a general answer to every scenario.

The useful product question is narrower:

> Where is there a repeated pre-action moment where one system needs proof that
> an agent represents a real principal and is authorized to create this specific
> consequence under these limits?

Paid API authority and customer exception authority currently look like the
cleanest early wedge tests.

Guarded capability licensing is the strongest new category-expansion wedge
because it shows that the object of control is moving from access to invocation.

Cloud operations and procurement are stronger enterprise-value stories but
heavier integration paths.

Logistics and agent-to-agent subcontracting are better as long-term category
proof than immediate wedge assumptions.

## What This Means For Agentic Economy

The broader field should not be reduced to this ranking.

The ranking helps decide where to learn first. The public insight remains
larger:

> As software agency moves through data, markets, institutions, and the physical
> world, the economy needs new ways to express intent, delegate authority, accept
> action, preserve records, and assign accountability.

## Next Validation Gates

Before building around any wedge, require evidence for:

1. A real agentic action, not only a copilot.
2. Consequence if the action is wrong.
3. A refusal, manual review, security concern, compliance concern, or buyer
   anxiety.
4. Current controls failing in a concrete way.
5. A named buyer or platform that would require a proof object.
6. A narrow integration point.
7. A reason the proof object must exist before action, not only in logs.
