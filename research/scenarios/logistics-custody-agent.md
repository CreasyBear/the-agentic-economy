# Scenario Simulation: Logistics Custody Agent

Date: 2026-05-06
Status: structured simulation

## Business Intent

Move goods to the right place at the right time while preserving margin,
customer promise, chain of custody, compliance, and risk limits.

## Principal

A shipper, merchant, manufacturer, distributor, marketplace, carrier, or
logistics provider.

The agent acts for the party with authority over booking, routing, release, or
custody decisions.

## Starting State

A shipment is at risk: demand changed, weather disrupted routes, a customer
promise is threatened, a port delay emerged, or inventory needs to be rerouted.

The agent can:

- Book freight.
- Reroute goods.
- Release inventory.
- Transfer custody.
- Change delivery windows.
- Split shipments.
- Trigger inspection or insurance workflows.

In the human model, logistics coordinators, carrier reps, warehouse operators,
and customer teams coordinate through portals, EDI, phone, email, and transport
management systems.

In the agentic model, software can make and transmit custody-affecting
instructions.

## Systems Touched

| System               | Why It Matters                                              |
| -------------------- | ----------------------------------------------------------- |
| TMS                  | Booking, routing, carrier selection, freight cost.          |
| WMS                  | Release, pick, pack, inventory allocation.                  |
| Carrier API / EDI    | Shipment status, tendering, pickup, routing.                |
| Customs / compliance | Trade documents, restricted goods, jurisdiction.            |
| Insurance            | Coverage, claims, liability, evidence.                      |
| ERP / order system   | Customer promise, inventory, financial impact.              |
| IoT / telemetry      | Location, condition, custody, temperature, damage evidence. |

## Counterparties

| Counterparty   | What They Need To Trust                                  |
| -------------- | -------------------------------------------------------- |
| Carrier        | The agent can tender, reroute, or modify shipment terms. |
| Warehouse      | The agent can release or prioritize goods.               |
| Customer       | The changed promise represents the merchant.             |
| Customs broker | Required documents and authority are valid.              |
| Insurer        | The chain of decisions and custody is reconstructable.   |
| Marketplace    | Seller, buyer, and logistics obligations remain aligned. |

## Actions

The agent:

1. Detects a delivery risk or routing opportunity.
2. Evaluates cost, SLA, customer priority, and risk.
3. Selects a carrier or route.
4. Books or changes shipment movement.
5. Releases or reallocates inventory.
6. Updates customer promise.
7. Triggers inspection or insurance evidence if needed.
8. Records custody-affecting decisions.

## Consequences

| Consequence Type     | What Changes                                                            |
| -------------------- | ----------------------------------------------------------------------- |
| Physical custody     | Goods may be released, transferred, rerouted, or delayed.               |
| Money                | Freight cost, surcharges, penalties, or claims exposure.                |
| Customer promise     | Delivery commitments change.                                            |
| Compliance           | Trade, hazardous goods, temperature, or regulated movement rules apply. |
| Insurance            | Coverage and liability depend on evidence and authorized action.        |
| Operational priority | Warehouse and carrier actions shift.                                    |

## Existing Controls

| Control                   | What It Covers             | What It Misses                                  |
| ------------------------- | -------------------------- | ----------------------------------------------- |
| Carrier account           | Commercial relationship.   | Whether this agent can alter this shipment now. |
| EDI message               | Structured instruction.    | Principal intent and delegated authority.       |
| TMS permission            | System access.             | Cross-party acceptance of authority.            |
| Bill of lading            | Shipment document.         | Agentic decision trail before changes.          |
| Warehouse release process | Local operational control. | Whether external software authority is valid.   |
| Telemetry                 | Location and condition.    | Why the action was authorized.                  |

## Failure Point

The carrier can receive a valid instruction. The warehouse can process a
release. The TMS can log a reroute.

What remains unclear is whether the software actor had authority to alter
physical custody, cost, customer promise, and liability for the principal at
that moment.

This is where software action visibly touches the physical world.

## New Primitive

Logistics agents need custody-aware authority.

Minimum proof object:

| Field         | Needed Because                                                                 |
| ------------- | ------------------------------------------------------------------------------ |
| Principal     | The shipment owner, merchant, carrier, or authorized party must be clear.      |
| Agent         | The actor issuing custody-affecting instruction is software.                   |
| Intent        | Preserve SLA, reduce cost, avoid disruption, comply with constraints.          |
| Action        | Book, reroute, release, transfer, inspect, or update promise.                  |
| Limits        | Shipment, route, carrier, cost, jurisdiction, time, condition, customer class. |
| Custody Scope | Physical control and liability shift.                                          |
| Policy        | Carrier, warehouse, customs, customer, and insurance rules.                    |
| Record        | Dispute, claims, customer support, and audit need reconstruction.              |

## Human Re-entry

Humans should re-enter when:

- Goods are regulated, hazardous, high-value, or temperature-sensitive.
- Custody transfer is irreversible or disputed.
- Cost exceeds threshold.
- Customer promise materially changes.
- Carrier substitution changes liability.
- Compliance documents are incomplete.

## Market Created

| Market                           | Why It Appears                                                             |
| -------------------------------- | -------------------------------------------------------------------------- |
| Agentic logistics authorization  | Carriers and warehouses need proof before acting on software instructions. |
| Custody action records           | Claims, disputes, and insurance need a decision chain.                     |
| Callable freight markets         | Agents can compare and book movement dynamically.                          |
| Exception logistics agents       | Software handles disruptions that currently require coordinators.          |
| Insurance-linked logistics proof | Coverage may depend on authorized, evidenced actions.                      |

## Business Model Canvas

| Canvas Block       | Capture                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| Customer Segment   | Shippers, carriers, logistics platforms, marketplaces, operations-heavy companies.                    |
| Job To Be Done     | Let agents book, reroute, release, or transfer goods under trusted authority.                         |
| Current Substitute | TMS, EDI, portals, carrier accounts, human coordinators, bills of lading.                             |
| Trigger Event      | Agents begin issuing logistics instructions that affect custody and liability.                        |
| Value Proposition  | Give counterparties proof before accepting custody-affecting software instructions.                   |
| Wedge              | Reroute or expedited booking for approved shipments and carriers.                                     |
| Economic Buyer     | COO, logistics platform, carrier, insurer, marketplace operations.                                    |
| User               | Logistics coordinator, platform engineer, claims operator, warehouse operator.                        |
| Distribution       | TMS, carrier APIs, EDI networks, marketplace logistics, insurance platforms.                          |
| Revenue Model      | Per shipment, per action, enterprise subscription, insurer or platform fee.                           |
| Moat               | Counterparty acceptance network, custody records, logistics integrations, claims evidence.            |
| Risks              | Incumbent logistics platforms absorb it, standards are fragmented, humans stay in loop.               |
| Evidence Needed    | Carrier acceptance concerns, shipper demand for agentic rerouting, claims disputes tied to authority. |

## Evidence Status

| Claim                                                             | Status      | Needed Evidence                               |
| ----------------------------------------------------------------- | ----------- | --------------------------------------------- |
| Agents will make logistics decisions.                             | Inferred    | Logistics automation and platform interviews. |
| Custody-affecting software actions need stronger proof.           | Inferred    | Carrier, warehouse, insurer interviews.       |
| Existing EDI/TMS controls are insufficient for agentic authority. | Inferred    | Operational examples and refusal cases.       |
| Logistics is a viable wedge.                                      | Speculative | Integration and buyer urgency evidence.       |

## Product Implications

This scenario is strong for the broader thesis because it moves beyond payments
and software into custody and liability. It may be too operationally fragmented
for a first wedge unless anchored through a platform, carrier network, or
insurance workflow.

## Publishable Insight

> When software can reroute goods, release inventory, or change custody, the
> agentic economy stops being a software-market story and becomes a physical
> operating problem.

## Falsifier

This scenario is weaker if:

- Agentic logistics remains advisory.
- Existing carrier and TMS authorization flows adapt quickly.
- Counterparties accept software instructions as ordinary EDI/API messages.
- Liability does not attach meaningfully to agent-created decisions.
