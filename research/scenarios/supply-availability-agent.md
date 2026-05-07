# Scenario Simulation: Supply Availability Agent

Date: 2026-05-06
Status: first structured simulation

## Business Intent

Protect revenue by keeping a product line available without breaking margin,
supplier risk, compliance, or working-capital limits.

## Principal

A mid-market manufacturer, retailer, distributor, or brand owner.

The agent acts for the operating company, not as an independent buyer.

## Starting State

Demand is rising faster than forecast. Inventory is falling. A stockout would
harm revenue, customer trust, and channel position. The company has several
possible interventions:

- Reserve more supply.
- Expedite freight.
- Shift production priority.
- Accept a higher-cost supplier.
- Delay lower-value demand.
- Adjust customer delivery promises.

In the human model, this becomes a cross-functional chain across operations,
procurement, finance, legal, logistics, sales, and ERP administration.

In the agentic model, software can coordinate those surfaces directly.

## Systems Touched

| System                  | Why It Matters                                                     |
| ----------------------- | ------------------------------------------------------------------ |
| ERP                     | Inventory, purchase orders, vendor records, financial commitments. |
| Demand planning         | Forecast signal and stockout risk.                                 |
| Supplier portals / APIs | Quotes, capacity, lead times, order placement.                     |
| Logistics APIs          | Freight booking, routing, custody, delivery promise.               |
| Finance systems         | Spend limits, working capital, approval thresholds.                |
| CRM / commerce          | Customer promises and delivery dates.                              |
| Contract repository     | Supplier terms, penalties, liability, compliance limits.           |
| Warehouse / WMS         | Allocation, release, picking, shipping priority.                   |

## Counterparties

| Counterparty            | What They Need To Trust                                              |
| ----------------------- | -------------------------------------------------------------------- |
| Supplier                | The agent represents the buyer and can reserve or purchase capacity. |
| Logistics provider      | The agent can book freight and alter custody or routing.             |
| Internal finance        | The commitment stays inside spend and working-capital policy.        |
| Sales / customer system | Customer promises can be changed under business rules.               |
| Warehouse operator      | Allocation changes are authorized.                                   |
| Insurer / auditor       | The chain of decisions can be reconstructed if something fails.      |

## Actions

The agent:

1. Detects projected stockout.
2. Compares revenue loss against expedited cost.
3. Queries approved suppliers for available capacity.
4. Selects a supplier inside risk policy.
5. Books priority freight within margin tolerance.
6. Updates purchase order and expected delivery.
7. Changes allocation priority in the warehouse.
8. Adjusts customer delivery promises.
9. Records the reasoning chain and constraints used.

## Consequences

| Consequence Type    | What Changes                                                                     |
| ------------------- | -------------------------------------------------------------------------------- |
| Data                | Forecast and inventory data leave internal systems or become visible to vendors. |
| Money               | The company incurs spend, deposits, freight charges, or cancellation exposure.   |
| Operations          | Production, allocation, routing, or warehouse priority changes.                  |
| Customer commitment | Delivery promises may change.                                                    |
| Legal / contract    | Supplier terms, penalties, and service obligations may be triggered.             |
| Physical world      | Goods may move differently because software acted.                               |

## Existing Controls

| Control                     | What It Covers            | What It Misses                                                    |
| --------------------------- | ------------------------- | ----------------------------------------------------------------- |
| ERP login / service account | System access.            | Whether this action is authorized under current business intent.  |
| Supplier account            | Buyer relationship.       | Whether this agent can commit this buyer at this amount and time. |
| Payment method              | Ability to pay.           | Approval for the commitment.                                      |
| Procurement policy          | Human purchasing process. | Runtime interpretation by an agent across changing conditions.    |
| Contract terms              | Legal relationship.       | Action-specific permission and delegation.                        |
| Audit log                   | After-the-fact record.    | Pre-action acceptance and counterparty confidence.                |

## Failure Point

The recurring break appears when a counterparty or internal system must decide
whether to accept the agent's action before consequence is created.

The supplier can authenticate the account, but cannot easily know whether this
agent is allowed to reserve capacity for this principal under current limits.

The finance system can see spend, but may not know whether the commitment was
created under a valid operating objective.

The logistics provider can book freight, but cannot know whether expedited cost
is authorized under the buyer's margin policy.

The warehouse can receive an instruction, but may not know whether allocation
priority was changed by an authorized business actor.

## New Primitive

This scenario suggests the need for action-level authority attached to business
intent.

Minimum proof object:

| Field      | Needed Because                                                                        |
| ---------- | ------------------------------------------------------------------------------------- |
| Principal  | Counterparties need to know which company is being represented.                       |
| Agent      | The actor is software, not a human user.                                              |
| Binding    | The agent must be linked to the principal.                                            |
| Intent     | The action follows a business objective, not arbitrary automation.                    |
| Action     | The exact consequence must be named.                                                  |
| Limits     | Amount, vendor, duration, geography, margin, data exposure, and escalation threshold. |
| Policy     | Internal and counterparty rules must be checked.                                      |
| Record     | The company needs audit, dispute, insurance, and operational reconstruction.          |
| Revocation | Authority must narrow or expire as conditions change.                                 |

## Human Re-entry

Humans should re-enter when:

- Margin impact exceeds policy.
- Supplier risk changes materially.
- A new vendor is introduced.
- Customer commitments materially change.
- Data exposure crosses sensitivity thresholds.
- The agent has to trade off legal, brand, safety, or strategic risk.

The operator's role shifts from doing every step to governing the operating
envelope.

## Market Created

This scenario points to several possible markets:

| Market                             | Why It Appears                                                           |
| ---------------------------------- | ------------------------------------------------------------------------ |
| Agentic procurement control        | Agents can create vendor commitments faster than human approval chains.  |
| Callable logistics authorization   | Software needs authority to book, reroute, release, or transfer custody. |
| Supplier acceptance infrastructure | Vendors need proof before accepting agentic orders or reservations.      |
| Agentic operations record          | Firms need a durable record of why software changed operations.          |
| Policy-as-runtime                  | Operating policy moves from documents into executable constraints.       |

## Business Model Canvas

| Canvas Block       | Capture                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Operations-heavy firms adopting agents across procurement, logistics, and supply planning.                                              |
| Job To Be Done     | Allow agents to preserve availability while controlling spend, supplier risk, data exposure, and operational authority.                 |
| Current Substitute | Human approvals, ERP permissions, procurement policy, supplier contracts, service accounts, audit logs.                                 |
| Trigger Event      | Agents begin coordinating purchases, freight, allocation, or supplier interactions without synchronous human review.                    |
| Value Proposition  | Let software act inside explicit operating authority while giving counterparties and internal systems proof before acceptance.          |
| Wedge              | Supplier reservation or expedited freight booking under bounded spend and vendor policy.                                                |
| Economic Buyer     | COO, CFO, procurement leader, or risk owner depending on first consequence.                                                             |
| User               | Procurement operators, supply planners, platform teams, finance operations.                                                             |
| Distribution       | ERP integrations, procurement systems, supplier portals, logistics APIs, agent orchestration platforms.                                 |
| Revenue Model      | Per action, per agent, per principal, per counterparty, or enterprise subscription.                                                     |
| Moat               | Policy libraries, counterparty acceptance network, action records, integrations, risk data.                                             |
| Risks              | Existing procurement suites absorb it, buyers keep humans in loop, agent adoption remains internal, too much ceremony slows operations. |
| Evidence Needed    | Interviews with procurement, supply chain, logistics API providers, agent builders, and ERP platform teams.                             |

## Evidence Status

| Claim                                                                    | Status      | Needed Evidence                                                         |
| ------------------------------------------------------------------------ | ----------- | ----------------------------------------------------------------------- |
| Agents will coordinate supply actions across systems.                    | Inferred    | Pilots or products where agents modify procurement/logistics workflows. |
| Counterparties will require proof beyond account access.                 | Inferred    | Supplier, logistics, or marketplace interviews.                         |
| Existing procurement approval flows are too slow for agentic operations. | Inferred    | Operator interviews and workflow timing data.                           |
| Action-level authority is valuable before consequence.                   | Inferred    | Buyers naming budget, refusal, compliance risk, or incident pain.       |
| Supply/logistics can be a wedge beyond payments.                         | Speculative | Evidence of urgent adoption and willingness to integrate.               |

## Product Implications

Handshake, or any similar primitive, would need to remain small:

- Prove representation.
- Attach business intent.
- Bind action to limits.
- Let the counterparty verify before acceptance.
- Leave a record.

It should not try to become the procurement system, ERP, logistics platform, or
agent orchestrator.

## Publishable Insight

The first public insight is not "agents will buy things."

It is:

> When software can preserve availability by coordinating supply, freight,
> finance, and customer promises, the firm starts to expose operating judgment
> as policy. The missing question becomes what must be true before another
> institution accepts that action.

## Falsifier

This scenario is weaker if:

- Agents remain advisory in supply workflows.
- Existing procurement suites provide sufficient runtime approval.
- Suppliers accept agentic orders as normal account activity.
- Human approval remains mandatory for all meaningful supply decisions.
- The economic value of faster coordination is lower than the risk of delegated
  action.
