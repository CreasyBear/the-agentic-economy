# Agentic Economy Validation Guide

Date: 2026-05-06
Status: working validation instrument

## Purpose

This guide turns the Agentic Economy field map into a testable research
program.

The goal is to learn where agentic action creates real refusal, risk, budget,
and urgency. The goal is not to persuade interviewees that Handshake should
exist.

Core question:

> Where will a business refuse an agent unless it can prove who it represents,
> what it intends, what it is allowed to do, and what record remains?

## What We Are Testing

### Thesis

Software agency is moving through systems built for human users, static
software, internal permissions, and post-action logs. As agents act across
boundaries, counterparties will need pre-action proof before accepting
consequence.

### Handshake Hypothesis

Handshake is one possible primitive: a pre-action ceremony that proves an agent
represents a real principal and is authorized to take a specific action under
specific limits.

### Wedge Hypothesis

The best first market is where five things are simultaneously true:

1. Agents are already being deployed or evaluated.
2. The action crosses a boundary.
3. Unauthorized action creates real cost.
4. Current controls are insufficient.
5. A buyer can name who pays for reducing that risk.

## The Sentences To Test

Each wedge should be tested through a plain sentence. If the sentence does not
land, the wedge is probably weak.

| Wedge               | Sentence                                               |
| ------------------- | ------------------------------------------------------ |
| Payments            | A working card is not approval.                        |
| Paid APIs           | A valid API key is not approval.                       |
| SaaS admin          | A logged-in user is not approval.                      |
| Cloud operations    | A service account is not approval.                     |
| Crypto/onchain      | A valid signature is not approval.                     |
| Data access         | A verified identity is not approval.                   |
| Customer support    | A permitted user is not approval to issue this credit. |
| Agent-to-agent      | A capable agent is not authorized delegation.          |
| Physical operations | A valid instruction is not authority to move atoms.    |

The strongest wedge is where the buyer does not need a lecture after hearing
the sentence.

## Interview Tracks

### Track A: Agent Builders

Target roles:

- Founders building autonomous agents.
- Product leads adding agentic workflows.
- Developer platform teams exposing agent APIs.
- Engineers building paid or transactional agents.

What we need to learn:

- Where their agents are refused today.
- Which integrations require extra trust work.
- Whether acceptance is a growth blocker.
- Whether they would add a ceremony to improve acceptance.

Primary questions:

1. What actions can your agent take today that create real consequence?
2. Where does it cross into someone else's system?
3. Has any platform, API, merchant, or enterprise asked for stronger proof?
4. What do you currently show to prove the agent is acting for a real user or
   organization?
5. What would make your agent easier to accept?
6. If an accepting counterparty required an approval envelope, would you
   integrate it?
7. Who would pay: you, your customer, the accepting party, or the platform?

Evidence to listen for:

- Blocked integrations.
- Extra manual review.
- Rejected agent traffic.
- Custom approval flows.
- Enterprise security objections.
- "We had to build this ourselves."

Red flags:

- "No one has asked for this."
- "Our agent only acts inside our own app."
- "OAuth scopes are enough."
- "The user can always approve manually."

### Track B: Accepting Counterparties

Target roles:

- Paid API providers.
- SaaS vendors exposing tool APIs.
- Merchants considering agentic checkout.
- Marketplaces.
- Platforms accepting automated actions.
- Enterprise service providers.

What we need to learn:

- What proof they require before accepting agent action.
- Whether agent traffic is considered normal traffic, bot traffic, fraud risk,
  enterprise risk, or a new category.
- What actions they would allow, ask, deny, or stop.

Primary questions:

1. What agent actions would you accept today?
2. What agent actions would you refuse?
3. What proof would change a refusal into acceptance?
4. Do you need identity, payment, consent, policy, approval, record, or all of
   them?
5. What happens if an agent exceeds authority?
6. Who bears the cost when the wrong action is accepted?
7. Would you require a pre-action approval object before high-risk actions?

Evidence to listen for:

- "We would need to know who is behind the agent."
- "We need proof the user approved this."
- "We need a policy we can evaluate."
- "We need an audit trail before we can allow it."
- "Risk/fraud/compliance would block this."

Red flags:

- They already treat agents as normal authenticated users.
- No meaningful consequence exists.
- The action is reversible and low value.
- Their current API key model is considered sufficient.

### Track C: Enterprise Risk Owners

Target roles:

- CISO.
- CIO/CTO.
- CFO.
- General Counsel.
- Compliance lead.
- Procurement lead.
- Platform security lead.

What we need to learn:

- Where agents create governance gaps.
- Which budget owner cares.
- Whether risk owners prefer identity governance, policy engines, logs, or
  pre-action gates.

Primary questions:

1. Where are agents already acting in your organization?
2. Which actions would you not allow without human approval today?
3. Which of those approvals could become policy-based?
4. How do you know an agent is acting within authority?
5. What record would you need for audit or dispute?
6. What would trigger legal, compliance, or security concern?
7. Which team owns the risk if an agent acts incorrectly?

Evidence to listen for:

- Service account anxiety.
- Shared credentials.
- Manual approval queues.
- Shadow automation.
- Data export restrictions.
- Procurement or expense policy gaps.
- Lack of agent inventory.

Red flags:

- The company has no near-term agent deployment.
- Existing IAM roadmap covers the issue.
- The risk is theoretical and unbudgeted.

### Track D: Operators

Target roles:

- Support operations.
- Revenue operations.
- Finance operations.
- IT administrators.
- Cloud platform engineers.
- Procurement operators.
- Logistics coordinators.

What we need to learn:

- Which workflows are moving from humans to agents.
- What approval actually means on the ground.
- Which actions operators would be comfortable delegating.

Primary questions:

1. What repetitive actions do you approve today?
2. Which approvals are automatic in practice?
3. Which approvals require judgment?
4. What information do you check before saying yes?
5. What happens when the wrong action is approved?
6. Which parts could a policy decide?
7. What would you want to see before trusting an agent to do it?

Evidence to listen for:

- Rubber-stamp approvals.
- Operators checking identity, amount, context, vendor, customer status, or
  policy.
- Delays from manual gates.
- Post-action cleanup.
- Existing spreadsheets or Slack approval rituals.

Red flags:

- No pain from current approval.
- Low-frequency actions.
- No clear consequence from mistakes.

## Wedge Scorecard

Score each market from 1 to 5.

| Dimension               | 1                        | 3                            | 5                                               |
| ----------------------- | ------------------------ | ---------------------------- | ----------------------------------------------- |
| Agent immediacy         | Mostly hypothetical      | Pilots or early usage        | Active deployment now                           |
| Boundary crossing       | Internal only            | Some external APIs           | Cross-party consequence                         |
| Consequence             | Low, reversible          | Moderate cost or delay       | Money, data, legal, safety, or operational risk |
| Current-control gap     | Existing controls enough | Workarounds exist            | Current controls visibly fail                   |
| Buyer pain              | Curiosity                | Concern                      | Active blocker or funded priority               |
| Buyer clarity           | No owner                 | Shared owner                 | Named budget owner                              |
| Ceremony fit            | Too much friction        | Useful for high-risk actions | Natural prerequisite                            |
| Integration feasibility | Heavy, slow              | Moderate                     | Can test in days/weeks                          |
| Expansion path          | Isolated use case        | Adjacent actions             | Broad action class                              |
| Incumbent risk          | Already owned            | Adjacent vendors             | Clear gap or partnership path                   |

Interpretation:

- 42-50: primary wedge candidate.
- 34-41: strong research target.
- 25-33: watch list.
- Below 25: avoid for now.

## Market-Specific Tests

### Payments and Checkout

Question:

> When an agent checks out, what proves the user or organization approved that
> purchase?

Positive signal:

- The buyer distinguishes payment validity from approval.
- Merchants, platforms, or PSPs can name actions they would gate.
- There is anxiety around chargebacks, fraud, disputes, or user intent.

Negative signal:

- AP2, ACP, wallet, or PSP roadmap is seen as sufficient.
- The merchant only cares whether payment clears.

### Paid APIs

Question:

> When an agent calls a paid API, what proves the principal approved that call
> under this scope?

Positive signal:

- API providers worry about automated spend, data use, model calls, scraping,
  resale, or unclear principal authority.
- Agent builders need acceptance by API providers.
- Per-call intent is valuable.

Negative signal:

- API keys, rate limits, and billing accounts are considered enough.

### SaaS Admin Actions

Question:

> When an agent changes account state, what proves the action was approved?

Positive signal:

- Admin actions are frequent, consequential, and currently over-permissioned.
- Vendors want agent-safe APIs.
- Enterprises want bounded delegation.

Negative signal:

- Existing RBAC and audit logs are considered complete.

### Customer Support Credits

Question:

> When an agent refunds, credits, or waives a fee, what proves it was allowed?

Positive signal:

- High-frequency actions.
- Clear policies.
- Mistakes have measurable cost.
- Operators already approve similar actions.

Negative signal:

- The action is too low value or too easily reversed.

### Cloud Operations

Question:

> When an agent changes infrastructure, what proves it should be allowed now?

Positive signal:

- Clear incidents or near misses.
- Strong anxiety around service accounts and autonomous remediation.
- Existing change management is too slow.

Negative signal:

- IAM, CI/CD policy, and change management already cover the desired scope.
- Integration burden is too high for an early wedge.

### Agent-to-Agent Services

Question:

> When one agent delegates work to another, what proves both principals allowed
> the interaction?

Positive signal:

- Agent builders already subcontract to other agent services.
- Paid APIs and tool services look like early subcontractors.
- Liability chain matters.

Negative signal:

- The market is conceptually important but behaviorally too early.

### Physical Operations

Question:

> When software causes movement, release, dispatch, production, or custody
> transfer, what proves the instruction had authority?

Positive signal:

- The action creates physical, safety, custody, or insurance consequence.
- Operators already check authority before acting.
- Records are needed for disputes.

Negative signal:

- Integration and regulatory complexity swamp near-term learning.

## Evidence Log Template

Use one row per interview.

| Field                         | Notes |
| ----------------------------- | ----- |
| Date                          |       |
| Interviewee                   |       |
| Role                          |       |
| Organization type             |       |
| Wedge                         |       |
| Current agent usage           |       |
| Consequential action          |       |
| Current approval method       |       |
| Current failure or workaround |       |
| Proof requested               |       |
| Buyer named                   |       |
| Budget signal                 |       |
| Integration path              |       |
| Strongest quote               |       |
| Score                         |       |
| Confidence                    |       |
| Follow-up                     |       |

## Proof Object Test

After five interviews in a wedge, draft the smallest possible proof object and
show it back.

Minimum version:

```json
{
  "principal": "organization or user represented",
  "agent": "software actor",
  "action": "specific requested operation",
  "intent": "declared purpose",
  "authority": "allowed scope",
  "limits": {
    "amount": "optional",
    "duration": "optional",
    "data_scope": "optional",
    "counterparty": "optional"
  },
  "decision": "allow | ask | deny | stop",
  "record": "durable evidence reference"
}
```

Ask:

1. Is this enough to accept the action?
2. What field is missing?
3. Which field is unnecessary?
4. Who would sign or issue it?
5. Where would this live in your current system?
6. What would make this too much friction?

## Research Cadence

### Week 1: Broad Scan

- Three agent builders.
- Three accepting counterparties.
- Three enterprise risk owners.
- Three operators.

Output:

- Top three wedge scores.
- Top five phrases buyers use.
- List of current workarounds.

### Week 2: Wedge Deep Dive

- Ten interviews in the highest-scoring wedge.
- Five proof-object reviews.
- One integration-path sketch.

Output:

- Wedge decision.
- Buyer definition.
- First integration surface.
- Strongest objection.

### Week 3: Artifact Test

- Landing page or memo for the wedge.
- Demo of the ceremony object.
- Five buyer reviews.

Output:

- Keep, pivot, or narrow.

## Decision Rules

Choose a wedge when:

- At least five interviews identify the same refusal or control gap.
- At least three interviewees can name a budget owner.
- At least three agree the proof object would change acceptance.
- At least one credible integration path exists.
- The wedge scores 42 or higher.

Do not choose a wedge when:

- The pain is mostly speculative.
- Buyers say existing IAM/payment/identity systems are enough.
- The ceremony is seen as extra compliance rather than acceptance unlock.
- The only buyer is "the ecosystem."
- The integration requires universal protocol adoption.

## Research Questions For Writing

The validation process should also feed public writing.

Potential essays:

- A working card is not approval.
- A valid API key is not approval.
- The operator after SaaS.
- The agentic firm and the shrinking coordination layer.
- Why agent identity is not enough.
- What an agent must prove before it acts.
- The physical world as an endpoint.
- Crypto settles value; it does not grant authority.

## How This Feeds The Website

Homepage:

- Keep the statement broad and calm.
- Do not explain the ceremony.

About:

- The field map belongs here as thesis.

Writing:

- Publish the strongest researched concepts.

Handshake:

- Express only the first concrete artifact.
- Keep the language anchored in approval before action.

## Immediate Next Action

Run twelve interviews:

1. Three agent builders.
2. Three paid API or SaaS counterparties.
3. Three enterprise risk owners.
4. Three operators who approve consequential actions.

Do not pitch Handshake in the first half of the call. Ask where agentic action
is being refused, slowed, manually reviewed, or made unsafe by weak proof.
