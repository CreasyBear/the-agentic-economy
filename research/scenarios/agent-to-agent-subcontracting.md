# Scenario Simulation: Agent-To-Agent Subcontracting

Date: 2026-05-06
Status: structured simulation

## Business Intent

Complete a business objective by allowing one agent to delegate part of the work
to another agent, service, or capability without losing authority, record, or
liability.

## Principal

The first principal is the organization that assigned the original objective.

The second principal may be another organization, vendor, platform, contractor,
or service provider represented by a different agent.

## Starting State

An enterprise agent is executing a task but needs outside capability:

- Legal review.
- Data verification.
- Specialized analysis.
- Supplier inspection.
- Customer support fulfillment.
- Regulatory filing.
- Compute or model capacity.
- Physical-world execution.

The agent finds another agent or service that can complete a subtask.

In the old model, subcontracting is handled through vendor contracts, scopes of
work, procurement, and human coordination.

In the agentic model, delegation may happen dynamically.

## Systems Touched

| System                 | Why It Matters                                         |
| ---------------------- | ------------------------------------------------------ |
| Agent registry         | Discovers and identifies candidate agents or services. |
| Capability marketplace | Lists services, prices, terms, and outputs.            |
| Identity / credentials | Binds agents to principals.                            |
| Policy engine          | Checks whether delegation is allowed.                  |
| Payment / settlement   | Pays for the subtask or commits value.                 |
| Records / audit        | Preserves delegation and outcome evidence.             |
| Dispute / insurance    | Resolves failure or liability.                         |

## Counterparties

| Counterparty         | What They Need To Trust                                                |
| -------------------- | ---------------------------------------------------------------------- |
| Delegating principal | Its agent did not exceed delegation authority.                         |
| Performing principal | The incoming request is legitimate and payable.                        |
| Delegating agent     | The subcontractor is authorized and capable.                           |
| Performing agent     | The delegating agent represents a real principal with matching intent. |
| Resolver / auditor   | The chain of delegation and liability is reconstructable.              |

## Actions

Agent A:

1. Receives an objective from Principal X.
2. Determines that a subtask requires outside capability.
3. Discovers Agent B representing Principal Y.
4. Presents intent, authority, limits, and terms.
5. Receives matching acceptance from Agent B.
6. Delegates the subtask.
7. Pays, reserves, or commits value.
8. Receives output.
9. Incorporates result into the original workflow.
10. Records both the original and delegated action chain.

## Consequences

| Consequence Type | What Changes                                          |
| ---------------- | ----------------------------------------------------- |
| Delegation       | Authority passes from one agentic context to another. |
| Money            | One principal may pay another for work.               |
| Data             | Task data may move to a third party.                  |
| Liability        | Failure may involve multiple principals and agents.   |
| Quality          | Output from one agent affects another agent's result. |
| Recursion        | The subcontractor may need to delegate again.         |

## Existing Controls

| Control           | What It Covers            | What It Misses                                 |
| ----------------- | ------------------------- | ---------------------------------------------- |
| API contract      | Technical request format. | Business authority to delegate.                |
| Vendor terms      | General relationship.     | Dynamic task-specific authority and limits.    |
| Payment           | Compensation.             | Whether the subtask was allowed.               |
| Agent identity    | Which agent is involved.  | Principal representation and delegation scope. |
| Logs              | What happened.            | Bilateral pre-action agreement.                |
| Human procurement | Formal vendor approval.   | Runtime delegation at agent speed.             |

## Failure Point

Agent A may be authorized to act for Principal X. Agent B may be authorized to
act for Principal Y. That does not mean Agent A is authorized to delegate this
task, or that Agent B is authorized to accept it, or that the two intents and
limits match.

The failure becomes recursive when Agent B subcontracts to Agent C.

Without a structured delegation record, the economic chain becomes hard to
audit, dispute, insure, or govern.

## New Primitive

Agent-to-agent services need bilateral delegation proof.

Minimum proof object:

| Field            | Needed Because                                             |
| ---------------- | ---------------------------------------------------------- |
| Principal A      | Source of original authority.                              |
| Agent A          | Delegating software actor.                                 |
| Principal B      | Counterparty represented by performing agent.              |
| Agent B          | Performing software actor.                                 |
| Intent           | Shared understanding of the subtask.                       |
| Delegation Scope | What Agent A may outsource.                                |
| Acceptance Scope | What Agent B may perform.                                  |
| Data Limits      | What can be shared or retained.                            |
| Payment / Terms  | Who pays, when, and under what failure terms.              |
| Liability        | Who answers for failure, delay, misuse, or subcontracting. |
| Record           | The chain must survive for audit and dispute.              |

## Human Re-entry

Humans should re-enter when:

- New counterparties are introduced.
- Data sensitivity exceeds threshold.
- Liability cannot be assigned clearly.
- The subtask affects regulated, legal, financial, safety, or customer-critical outcomes.
- The agent proposes further subcontracting outside approved lanes.
- The price or terms deviate from policy.

## Market Created

| Market                        | Why It Appears                                                 |
| ----------------------------- | -------------------------------------------------------------- |
| Agent service marketplaces    | Agents can buy work from other agents or providers.            |
| Delegation infrastructure     | Authority must travel through subcontracted tasks.             |
| Agentic escrow / dispute      | Recursive failures require evidence and recourse.              |
| Capability certification      | Principals need to know which agents can perform trusted work. |
| Liability-aware orchestration | Subcontracting creates multi-party responsibility chains.      |

## Business Model Canvas

| Canvas Block       | Capture                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Agent platforms, enterprise agent builders, service providers exposing agent-callable work.                               |
| Job To Be Done     | Allow agents to delegate work to other agents without losing authority, limits, or liability.                             |
| Current Substitute | Vendor contracts, human procurement, API terms, logs, marketplace ratings.                                                |
| Trigger Event      | Agents begin dynamically subcontracting work across organizations.                                                        |
| Value Proposition  | Make recursive agentic delegation legible, bounded, payable, and disputable.                                              |
| Wedge              | One bilateral subtask between approved counterparties.                                                                    |
| Economic Buyer     | Agent platform, enterprise buyer, marketplace, service provider.                                                          |
| User               | Agent developer, platform operator, vendor manager, risk owner.                                                           |
| Distribution       | Agent marketplaces, orchestration frameworks, payment protocols, API platforms.                                           |
| Revenue Model      | Per delegation, marketplace take rate, verification fee, enterprise subscription.                                         |
| Moat               | Delegation graph, counterparty network, records, standards position, dispute workflows.                                   |
| Risks              | Market is too early, agents do not subcontract dynamically, platforms close the loop.                                     |
| Evidence Needed    | Agent builders needing outsourced capabilities, marketplaces requiring proof, disputes or refusal around delegated tasks. |

## Evidence Status

| Claim                                                         | Status                  | Needed Evidence                                          |
| ------------------------------------------------------------- | ----------------------- | -------------------------------------------------------- |
| Agents will subcontract work to other agents.                 | Speculative to inferred | Agent marketplaces and service-agent adoption.           |
| Delegation authority is distinct from access.                 | Inferred                | Interviews with enterprise risk, legal, platform owners. |
| Bilateral proof is needed before agent-to-agent transactions. | Inferred                | Counterparty refusal or standards requirements.          |
| This is a long-term market.                                   | Speculative             | Timing evidence and transaction volume.                  |

## Product Implications

This may be the most structurally important scenario, but not necessarily the
first wedge. It is more useful as the long-term map: if agentic services become
real markets, recursive authority and liability become unavoidable.

## Publishable Insight

> Agent-to-agent commerce is not just agents talking to agents. It is agents
> carrying authority, intent, payment, data limits, and liability across
> institutional boundaries.

## Falsifier

This scenario is weaker if:

- Agents stay inside first-party platforms.
- Subcontracting remains human-approved and contract-bound.
- Marketplaces solve trust through ratings, terms, and platform custody alone.
- Recursive delegation remains rare.
