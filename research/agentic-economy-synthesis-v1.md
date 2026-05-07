# Agentic Economy Synthesis V1

Date: 2026-05-06
Status: structured synthesis

## Purpose

This document is the first structured synthesis from the mapping framework. It
captures the core thesis, the reorganized economy, a market map, and early
business model canvases without turning the work into a prose essay.

Status labels:

- Observed: concrete evidence already seen.
- Interviewed: confirmed by a relevant buyer, operator, builder, or risk owner.
- Inferred: follows from the thought experiment and known market movement, but
  needs testing.
- Speculative: plausible but unvalidated.
- Falsified: evidence suggests the claim is wrong or weak.

## Core Thesis

### Thesis 1: Business Intent Becomes Executable

| Field             | Capture                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| Observation       | AI systems are moving from answer generation toward tool use, workflow execution, and delegated action. |
| Shift             | A business objective can increasingly become an operating instruction for software.                     |
| Consequence       | The firm starts to express work as intent, constraints, capabilities, exception paths, and records.     |
| Broken Assumption | A human is always present at the point where software creates consequence.                              |
| Primitive Need    | A way to bind software action to principal, intent, authority, limits, and record.                      |
| Evidence Status   | Inferred.                                                                                               |
| Falsifier         | Agents remain mostly advisory and do not receive authority to act across systems.                       |

### Thesis 2: The Dashboard Loses Centrality

| Field             | Capture                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Observation       | Business software has historically been organized around human users operating interfaces. |
| Shift             | Agents can call actions directly across APIs, tools, services, and systems of record.      |
| Consequence       | SaaS may become less of a destination and more of an action substrate.                     |
| Broken Assumption | The user interface is the primary place where business value is realized.                  |
| Primitive Need    | Agent-readable capability surfaces, policy, action records, and safe delegation.           |
| Evidence Status   | Inferred.                                                                                  |
| Falsifier         | Enterprises keep agents confined to copilots inside dashboards.                            |

### Thesis 3: Markets Form Around Callable Capabilities

| Field             | Capture                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| Observation       | Business functions are becoming easier to expose as APIs, services, workflows, or managed outcomes.                 |
| Shift             | Agents can discover, compare, call, and coordinate external capabilities.                                           |
| Consequence       | More markets may organize around outcomes: verify, underwrite, ship, inspect, reconcile, manufacture, file, settle. |
| Broken Assumption | Companies primarily buy software tools and then operate the function themselves.                                    |
| Primitive Need    | Terms, authority, payment or commitment, SLA, record, and liability that can travel with agentic action.            |
| Evidence Status   | Speculative to inferred, depending on market.                                                                       |
| Falsifier         | Outcome services remain human-procured and do not become machine-callable.                                          |

### Thesis 3A: Business-As-API Needs A Mandate Layer

| Field             | Capture                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Observation       | Business functions can become machine-callable endpoints with inputs, outputs, prices, service levels, penalties, and records.       |
| Shift             | Agents can invoke these endpoints on behalf of principals without a human operating each interface.                                  |
| Consequence       | Endpoints need to know whether an agent can bind a principal to an outcome, terms, data use, payment, reliance, and liability.       |
| Broken Assumption | A valid API call, payment method, or account is enough for a business to execute an outcome.                                         |
| Primitive Need    | A mandate layer: agent, principal, intent, authority, terms, policy match, settlement link, record, and revocation before execution. |
| Evidence Status   | Inferred.                                                                                                                            |
| Falsifier         | Businesses expose APIs for data and tools but do not expose outcome endpoints that agents can buy or negotiate.                      |

### Thesis 4: Approval Moves Before Consequence

| Field             | Capture                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Observation       | Existing systems can authenticate users, process payments, grant access, and log events.         |
| Shift             | Agentic action can create consequence before a human reviews the event.                          |
| Consequence       | Counterparties may need proof before accepting action, not only records afterward.               |
| Broken Assumption | Access plus audit is sufficient for consequential software action.                               |
| Primitive Need    | Pre-action proof of representation, intent, authority, limits, and record.                       |
| Evidence Status   | Inferred.                                                                                        |
| Falsifier         | Counterparties accept agentic action with ordinary identity, OAuth, API keys, payment, and logs. |

### Thesis 5: Human Work Moves Toward Judgment And Governance

| Field             | Capture                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| Observation       | Operators currently perform workflows, approvals, checks, escalations, and exception handling.              |
| Shift             | Agents can perform more routine execution while humans define boundaries and handle context.                |
| Consequence       | Human work shifts toward setting operating envelopes, reviewing exceptions, and governing delegated agency. |
| Broken Assumption | Human labor is required for every step in a cross-functional business workflow.                             |
| Primitive Need    | Policy tooling, thresholds, human re-entry, explainable records, and escalation paths.                      |
| Evidence Status   | Inferred.                                                                                                   |
| Falsifier         | Agentic execution does not reduce workflow operation or exception review burden.                            |

### Thesis 6: The Physical World Becomes Part Of The Software Surface

| Field             | Capture                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| Observation       | Logistics, manufacturing, robotics, labs, devices, and energy systems are increasingly software-addressable.   |
| Shift             | Agentic instructions can cause movement, custody transfer, production, access, testing, or operational change. |
| Consequence       | Digital authorization problems become physical risk problems.                                                  |
| Broken Assumption | Software actions are mostly informational or reversible.                                                       |
| Primitive Need    | Consequence-aware authorization, custody records, safety constraints, insurance evidence, and revocation.      |
| Evidence Status   | Inferred.                                                                                                      |
| Falsifier         | Physical operations remain closed to agentic control or always require synchronous human approval.             |

### Thesis 7: Access Control Moves From Systems To Powers

| Field             | Capture                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Observation       | Valuable capabilities are often protected as documents, accounts, APIs, seats, licenses, tools, models, or skills. |
| Shift             | Agents can invoke the capability itself, not merely open the system that contains it.                              |
| Consequence       | Rights holders need to govern use, purpose, scope, output rights, reliance, metering, and downstream delegation.   |
| Broken Assumption | Protecting the file, account, or API is enough to protect the economic power encoded inside it.                    |
| Primitive Need    | License-to-invoke: proof that an agent may use this capability for this principal, purpose, and scope.             |
| Evidence Status   | Inferred.                                                                                                          |
| Falsifier         | Guarded capabilities remain human-read documents or closed first-party tools rather than agent-callable surfaces.  |

### Thesis 8: Devices Become Counterparties

| Field             | Capture                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Observation       | Devices, machines, sensors, robots, and edge controllers are gaining local compute, identity, attestation, and policy.    |
| Shift             | A remote agent may ask a device to share data, run a model, unlock access, change state, or actuate the physical world.   |
| Consequence       | The device must decide whether to admit the agent, not merely whether a packet or app credential is valid.                |
| Broken Assumption | Device access is mediated only by humans, apps, accounts, pairing, or first-party clouds.                                 |
| Primitive Need    | Agentic admission control: proof of device, agent, principal, intent, local policy, safety envelope, and record.          |
| Evidence Status   | Inferred.                                                                                                                 |
| Falsifier         | Agent-to-device interaction remains fully mediated by closed cloud platforms or existing IoT authorization is sufficient. |

### Thesis 9: Scarcity Becomes Machine-Negotiable

| Field             | Capture                                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Observation       | Many valuable resources are bounded by time, space, capacity, safety, priority, or rights of use.                       |
| Shift             | Agents can declare intended use of a resource before occupying or consuming it.                                         |
| Consequence       | Resource coordination becomes a negotiation over intent: resource, location, time, purpose, authority, constraints.     |
| Broken Assumption | Booking, slots, schedules, calendars, and dispatch are separate domain workflows rather than a recurring primitive.     |
| Primitive Need    | Intent reservations: declarations that others can accept, plan around, price, revoke, compare to telemetry, or dispute. |
| Evidence Status   | Speculative to inferred, depending on domain.                                                                           |
| Falsifier         | Scarce resource coordination remains domain-specific and does not generalize across agentic systems.                    |

## Reorganized Economy Map

### Old Operating Model

| Layer          | Main Unit                     | Coordination Mode                         | Control Point                            | Record                                    |
| -------------- | ----------------------------- | ----------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| Firm           | Human teams                   | Meetings, workflows, tickets, emails.     | Manager approval.                        | Documents, systems of record, audit logs. |
| Software       | Applications                  | Human-operated dashboards.                | User account and permissions.            | App logs and database state.              |
| Market         | Vendors and contracts         | Procurement, sales, procurement portals.  | Contract and purchase order.             | Invoices, SLAs, receipts.                 |
| Infrastructure | APIs, payments, identity      | Integration and settlement rails.         | API key, OAuth, IAM, card, bank account. | Logs, receipts, ledger events.            |
| Physical world | Human operators and equipment | Work orders, dispatch, custody processes. | Operator authority.                      | Chain-of-custody, tickets, telemetry.     |

### Agentic Operating Model

| Layer          | Main Unit                           | Coordination Mode                                                          | Control Point                                       | Record                                  |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------- |
| Firm           | Intent, policy, agents, exceptions. | Agents coordinate work across functions.                                   | Operating envelope and delegated authority.         | Action envelope plus consequence trail. |
| Software       | Callable capabilities.              | Agents call actions directly.                                              | Capability policy and scoped action grants.         | Agent action record.                    |
| Market         | Outcome endpoints.                  | Agents compare, negotiate, call, and settle.                               | Terms, authority, SLA, liability, acceptance proof. | Transaction plus authority record.      |
| Infrastructure | Agency plane.                       | Identity, intent, authority, settlement, record, revocation.               | Runtime policy and proof before consequence.        | Shared or verifiable evidence.          |
| Physical world | Software-addressable operations.    | Agentic instructions move goods, machines, custody, access, or production. | Consequence-aware authorization and human re-entry. | Custody, safety, insurance, telemetry.  |

## Market Map

| Market Surface     | Callable Capability                                            | First Consequence                                          | Existing Control                                       | Gap To Study                                                    | Likely Buyer                                       | Evidence Status          |
| ------------------ | -------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------- | -------------------------------------------------- | ------------------------ |
| Paid APIs          | Buy data, compute, enrichment, search, model calls.            | Spend, data exposure, dependency on external output.       | API keys, billing account, OAuth, rate limits.         | Purpose-bound authority and spend approval at call time.        | API provider, agent builder, platform, finance.    | Inferred.                |
| Procurement        | Quote, reserve, order, renew, substitute, commit.              | Vendor commitment and spend exposure.                      | Procurement suites, POs, approvals, contracts.         | Runtime authority for agent-created commitments.                | CFO, procurement, COO.                             | Inferred.                |
| Logistics          | Book, reroute, release, transfer custody.                      | Physical movement, cost, delay, liability.                 | EDI, portals, carrier accounts, contracts.             | Agent authority over custody and routing.                       | COO, logistics provider, insurer.                  | Inferred.                |
| Customer Support   | Refund, credit, waive, change account state.                   | Revenue leakage, customer obligation, policy precedent.    | CRM roles, policy docs, supervisor approval.           | Bounded commercial discretion.                                  | Support ops, finance, risk.                        | Inferred.                |
| Cloud Operations   | Provision, scale, modify, rotate, deploy, revoke.              | Security or uptime impact.                                 | IAM, service accounts, approvals, change management.   | Consequence-aware authority tied to objective and blast radius. | CTO, CISO, platform engineering.                   | Inferred.                |
| Data Release       | Share, transform, enrich, export, certify.                     | Privacy, commercial leakage, regulatory exposure.          | Data permissions, DLP, consent, contracts.             | Intent and consent that travel with agentic requests.           | CDO, legal, compliance, data platform.             | Inferred.                |
| Guarded Capability | Interpret, invoke, apply, certify, meter, license.             | IP leakage, unauthorized reliance, licensing breach.       | DRM PDFs, named users, seats, API keys, terms.         | License-to-invoke by purpose, role, jurisdiction, and output.   | Standards body, publisher, compliance, enterprise. | Inferred.                |
| Edge Devices       | Sense, compute, unlock, command, actuate, negotiate.           | Privacy, access, safety, local physical consequence.       | Pairing, device certs, app permissions, local network. | Agentic admission control at the device boundary.               | Device maker, facility, industrial platform.       | Inferred.                |
| Scarce Resources   | Reserve, occupy, use, release, transfer, price.                | Exclusion, congestion, priority, safety, opportunity cost. | Slots, calendars, dispatch, booking APIs, telemetry.   | Intent reservations for bounded resources.                      | Resource owner, coordinator, marketplace.          | Speculative to inferred. |
| Regulated Filings  | File, amend, certify, submit, respond.                         | Legal representation and liability.                        | Human professional, portal login, signature.           | Authority and record for software-created institutional acts.   | Legal, compliance, regulated service provider.     | Speculative.             |
| Insurance Claims   | Submit, approve, settle, dispute.                              | Economic transfer and liability.                           | Claims system, adjusters, policy rules.                | Delegated authority and evidence chain.                         | Insurer, claims ops, compliance.                   | Inferred.                |
| Healthcare / Labs  | Order, release, schedule, route, test.                         | Patient safety, data release, regulated action.            | EHR roles, consent, human clinicians, lab systems.     | Consent, clinical authority, and strict human re-entry.         | Provider, lab, compliance.                         | Speculative.             |
| Manufacturing      | Quote, produce, inspect, retool, allocate.                     | Physical production and quality exposure.                  | MES, ERP, operators, supplier contracts.               | Authority over production instructions and inspection records.  | COO, plant manager, supplier, insurer.             | Speculative.             |
| Agent Services     | Delegate research, audit, support, verification, legal review. | Recursive commitment and liability.                        | Terms, API call, invoice, logs.                        | Bilateral authority and subcontracting evidence.                | Agent builder, service provider, enterprise buyer. | Speculative to inferred. |
| Crypto / Onchain   | Settle, escrow, prove, sign, attest, transfer.                 | Irreversible or public economic state change.              | Wallet keys, signatures, smart contracts, credentials. | Valid signature is not necessarily business authority.          | Protocol, wallet, enterprise, compliance.          | Inferred.                |

## Business Model Canvases

### Canvas A: Agentic Action Authority

| Canvas Block       | Capture                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Enterprises and platforms allowing agents to act across high-consequence systems.                                      |
| Job To Be Done     | Decide whether an agentic action should be accepted before consequence is created.                                     |
| Current Substitute | OAuth scopes, IAM, API keys, payment methods, human approval, logs, contracts.                                         |
| Trigger Event      | Agents begin creating spend, data movement, commitments, operational changes, or external reliance.                    |
| Value Proposition  | Make agentic action legible: who acts, for whom, why, under what authority, with what limits, and what record remains. |
| Wedge              | Payments, paid APIs, procurement, or cloud operations depending on earliest budget and integration urgency.            |
| Economic Buyer     | CFO, CISO, CTO, platform owner, or counterparty accepting the action.                                                  |
| User               | Developer, risk owner, platform engineer, operations admin.                                                            |
| Distribution       | Agent platforms, API gateways, payment protocols, identity providers, SaaS marketplaces, procurement platforms.        |
| Revenue Model      | Per action, per agent, per principal, per counterparty, enterprise subscription, or risk/transaction fee.              |
| Moat               | Accepted proof format, integration footprint, policy library, counterparty network, action record graph.               |
| Risks              | Incumbents absorb it, developers reject friction, buyer remains unclear, standards fragment.                           |
| Evidence Needed    | Refusals, incidents, compliance blockers, platform requirements, buyer budget, integration demand.                     |

### Canvas B: Callable Capability Market

| Canvas Block       | Capture                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Customer Segment   | Companies that want agents to procure outcomes rather than operate tools.                                                |
| Job To Be Done     | Let agents discover, compare, call, pay for, and verify external business capabilities.                                  |
| Current Substitute | SaaS subscriptions, service contracts, marketplaces, procurement, human vendor management.                               |
| Trigger Event      | Agent workflows need external execution: verification, logistics, compute, legal review, claims, manufacturing, support. |
| Value Proposition  | Turn business services into machine-callable endpoints with terms, price, authority, SLA, and evidence.                  |
| Wedge              | Narrow repeated service with clear input, output, price, failure mode, and buyer value.                                  |
| Economic Buyer     | Business owner buying the outcome, platform aggregating demand, or provider selling capacity.                            |
| User               | Agent builder, operations team, service provider.                                                                        |
| Distribution       | Agent marketplaces, vertical SaaS, API networks, procurement systems, protocol ecosystems.                               |
| Revenue Model      | Marketplace fee, per outcome, subscription, verification fee, risk fee, or take rate.                                    |
| Moat               | Liquidity, provider quality, verification records, SLA enforcement, vertical depth.                                      |
| Risks              | Demand remains custom, providers resist machine-callable terms, trust and liability unresolved.                          |
| Evidence Needed    | Repeated outcome demand, provider willingness, measurable outputs, willingness to pay.                                   |

### Canvas C: Agentic Operations Record

| Canvas Block       | Capture                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Regulated, operationally complex, or high-liability organizations deploying agents.                               |
| Job To Be Done     | Reconstruct why software acted, under whose authority, and with what consequences.                                |
| Current Substitute | App logs, audit logs, tickets, approvals, invoices, contracts, SIEM, GRC systems.                                 |
| Trigger Event      | Agent actions span multiple systems and post-hoc logs fail to explain intent and authority.                       |
| Value Proposition  | Provide a durable action record for audit, dispute, compliance, incident response, and insurance.                 |
| Wedge              | High-consequence workflows where audit and dispute are already painful.                                           |
| Economic Buyer     | Compliance, legal, CISO, operations risk, insurer.                                                                |
| User               | Risk operators, auditors, compliance teams, platform engineers.                                                   |
| Distribution       | GRC, SIEM, API gateway, agent platform, workflow orchestration, identity providers.                               |
| Revenue Model      | Enterprise subscription, per record volume, retention tier, compliance module.                                    |
| Moat               | Record schema, integrations, audit trust, evidence workflows, regulatory alignment.                               |
| Risks              | Logs are considered sufficient, record without pre-action authority has weaker value, incumbent GRC tools absorb. |
| Evidence Needed    | Audit failures, dispute examples, regulator concern, insurer requirements, agent incident reviews.                |

## Infrastructure Stack

| Layer             | Core Question                           | Current Substrate                                  | Open Gap                                                               |
| ----------------- | --------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| Actor Registry    | Which agents exist?                     | Agent platforms, identity systems, app registries. | Enterprise-wide visibility of software actors.                         |
| Principal Binding | Who does the agent represent?           | OAuth, service accounts, wallets, credentials.     | Legal and organizational representation across systems.                |
| Intent Layer      | What is the agent trying to accomplish? | Prompts, carts, workflow state, tasks.             | Portable, counterparty-readable intent.                                |
| Authority Layer   | What is it allowed to do?               | IAM, RBAC, scopes, approval workflows.             | Action-specific business authority.                                    |
| Policy Match      | Do both sides allow the action?         | Fraud, compliance, gateway rules.                  | Bilateral runtime comparison of intent and authority.                  |
| Settlement        | How does value move?                    | Cards, ACH, invoices, crypto, payment protocols.   | Linking settlement to prior authority.                                 |
| Record            | What survives?                          | Logs, receipts, ledgers, tickets.                  | Unified proof of actor, principal, intent, authority, and consequence. |
| Liability         | Who answers?                            | Contracts, chargebacks, insurance, legal process.  | Recourse tied to the agentic action chain.                             |
| Revocation        | How does authority stop?                | Expiry, key rotation, access removal.              | Revocation across delegated, in-flight, and cross-party actions.       |

## Strategic Questions

Use these to steer research and product judgment:

1. Which actions create enough consequence that counterparties refuse ordinary
   access?
2. Which buyer can name budget for accepting or controlling agentic action?
3. Which markets already have machine-readable inputs, outputs, price, and
   failure modes?
4. Which parts of the firm become policy, and which remain judgment?
5. Where is post-hoc audit too late?
6. Where does crypto provide useful settlement or shared record, and where does
   it fail to prove authority?
7. Where does the physical world force stricter proof?
8. Which primitive is narrow enough to build now but broad enough to recur?

## Presentable Insights

These are not final essays. They are insight candidates.

| Insight                                                                               | Use                                    |
| ------------------------------------------------------------------------------------- | -------------------------------------- |
| Business intent is becoming executable.                                               | Core category framing.                 |
| The firm is decomposing into intent, policy, capabilities, exceptions, and records.   | C-suite brief.                         |
| SaaS becomes an action substrate when agents can call the capability directly.        | Software market analysis.              |
| Business-as-API needs a mandate layer.                                                | Handshake product framing.             |
| A valid payment, login, signature, or API key is not the same as approval.            | Infrastructure wedge.                  |
| As capabilities become callable, access control moves from systems to powers.         | Licensing, standards, and DRM wedge.   |
| Devices are becoming counterparties.                                                  | IoT, edge, robotics, and local models. |
| Scarce resources become declarations of intent.                                       | Space-time and capacity coordination.  |
| The physical world turns software agency into custody, safety, and liability.         | Expansion beyond commerce.             |
| Agents do not remove human judgment; they move it into policy and exception design.   | Operator and enterprise adoption.      |
| Crypto may settle agentic activity, but authority has to be solved separately.        | Crypto positioning.                    |
| The market map is not "AI agents." It is every business capability becoming callable. | Investment and company formation lens. |

## Next Research Pass

The first six scenario simulations now exist in the scenario workbench. The next
research pass is validation, not more speculative expansion.

Re-rank wedges after interviews using:

- Consequence severity.
- Frequency.
- Current-control weakness.
- Buyer urgency.
- Integration feasibility.
- Counterparty need.
- Product adjacency to Handshake.

The goal is not to force one answer. The goal is to discover where the same
structural break keeps reappearing.
