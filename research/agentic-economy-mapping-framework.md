# Agentic Economy Mapping Framework

Date: 2026-05-06
Status: working operating framework

## Purpose

This framework is the capture system for studying the reorganized agentic
economy.

It is not an essay plan. It is a way to systematically map what changes when
software can hold intent, coordinate action, represent principals, cross
institutional boundaries, and create consequence in digital and physical
systems.

The goal is to produce structured insight:

- Core thesis.
- Business model canvases.
- Market maps.
- Organizational maps.
- Primitive maps.
- Scenario simulations.
- Evidence logs.
- Product implications.
- Public writing and presentation outputs.

Handshake is treated as one concrete expression of the research: a possible
pre-action ceremony for proving agent, principal, intent, authority, limits, and
record before consequence. It should not become the frame for the whole field.

## The Starting Premise

Start every inquiry from the same altered premise:

> Software can now hold intent, choose actions, coordinate across systems, and
> create consequence on behalf of a principal.

Then ask what reorganizes around that premise.

This avoids beginning with labels such as payments, SaaS, crypto, identity, or
Handshake. Those become domains inside the study.

## The Core Thesis Object

Every thesis entry should be captured in this structure:

| Field               | Question                                                              |
| ------------------- | --------------------------------------------------------------------- |
| Observation         | What is happening now?                                                |
| Shift               | What changes when software can act?                                   |
| Consequence         | What new economic, institutional, or operational behavior appears?    |
| Broken Assumption   | Which old assumption stops holding?                                   |
| Primitive Need      | What new control, record, market, or institution may be required?     |
| Evidence            | What would prove or disprove this?                                    |
| Domains             | Where does this show up: data, markets, institutions, physical world? |
| Product Implication | What infrastructure might need to exist?                              |
| Writing Implication | What public insight should this become?                               |

Example:

| Field               | Capture                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------- |
| Observation         | Companies are beginning to give agents operational goals, not only prompts.             |
| Shift               | Business intent becomes executable across tools, vendors, and systems.                  |
| Consequence         | The firm starts to decompose into policies, capabilities, exception paths, and records. |
| Broken Assumption   | The human user is no longer always the decision point.                                  |
| Primitive Need      | Action-level authority before consequence.                                              |
| Evidence            | Enterprises refusing agent actions without proof of representation and limits.          |
| Domains             | Procurement, logistics, support, paid APIs, cloud operations, regulated filings.        |
| Product Implication | A ceremony or control plane for agentic action may be needed.                           |
| Writing Implication | "The firm is becoming executable."                                                      |

## Five Core Lenses

Use these lenses to prevent the research from collapsing into one dimension.

### 1. Organizational Lens

Question:

> How does a company reorganize when software can act?

Capture:

| Role               | Old Model                                                    | Agentic Model                                                       | New Control Surface                                              | Open Questions                                                              |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| CEO / Board        | Strategy, governance, accountability through human chains.   | Decide which parts of the firm become executable.                   | Agent operating doctrine, risk ownership, delegation boundaries. | How much of the firm can be safely expressed as objectives and constraints? |
| CFO                | Approve budgets, spend, procurement, audit.                  | Govern software-created commitments before money moves.             | Spend envelopes, dynamic limits, commitment records.             | What counts as authorized economic exposure?                                |
| COO                | Coordinate workflows and vendors through people and systems. | Define operating envelopes for agents coordinating the business.    | Escalation paths, custody records, service boundaries.           | Which operational decisions stay human?                                     |
| CTO / CIO          | Integrate apps, APIs, and systems.                           | Expose action surfaces to agents while protecting critical systems. | Agent registry, capability registry, policy checks.              | What should be callable, and under what conditions?                         |
| CISO / Risk        | Secure users, workloads, credentials, and data.              | Limit the blast radius of delegated software agency.                | Runtime policy, anomaly detection, revocation.                   | How is agent authority monitored and stopped?                               |
| Legal / Compliance | Review contracts, filings, consent, liability.               | Reason about representation and authority at the moment of action.  | Delegation records, durable proof, dispute evidence.             | When has the organization legally acted?                                    |
| Operators          | Execute workflows and approvals.                             | Set thresholds, supervise exceptions, tune policy.                  | Human-in-loop boundaries and exception queues.                   | What does good operator judgment become?                                    |

### 2. Market Lens

Question:

> Which business functions become callable by agents?

Capture each market as a capability, not as a software category.

| Market Surface      | Callable Capability                             | Old Interface                               | Agentic Interface                                    | Consequence                                  | Missing Primitive                        | Buyer                                  |
| ------------------- | ----------------------------------------------- | ------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | ---------------------------------------- | -------------------------------------- |
| Data                | Query, enrich, verify, release.                 | Portal, analyst, API key.                   | Agent-requested data action with purpose and limits. | Data exposure, privacy, commercial leakage.  | Purpose-bound authority and consent.     | Data owner, platform, compliance.      |
| Money               | Pay, reserve, commit, refund, settle.           | Card, bank, AP workflow, checkout.          | Agent-created economic commitment.                   | Financial exposure.                          | Approval before payment or commitment.   | CFO, merchant, payment platform.       |
| Supply              | Quote, reserve, produce, ship, reroute.         | Email, EDI, ERP, procurement.               | Agent-coordinated capacity and custody.              | Physical movement and operational cost.      | Proof of authority and chain of custody. | COO, procurement, logistics provider.  |
| Systems             | Change config, provision access, update record. | Admin dashboard, IT ticket, API.            | Agent action against system of record.               | Operational or security state change.        | Scoped, revocable action authority.      | CIO, CISO, platform owner.             |
| Services            | Audit, legal, support, verification, claims.    | Human service engagement.                   | Agent-callable outcome service.                      | Liability, service quality, dispute.         | Delegation, record, SLA evidence.        | Business owner, service provider.      |
| Guarded Capability  | Interpret, invoke, apply, certify, meter.       | DRM file, seat, subscription, API key.      | Agent invokes protected knowledge, model, or skill.  | IP, licensing, reliance, leakage, liability. | License-to-invoke.                       | Standards body, publisher, enterprise. |
| Physical Operations | Move, inspect, manufacture, unlock, test.       | Human operator, device console, work order. | Software instruction into atoms.                     | Safety, custody, asset movement.             | Consequence-aware authorization.         | Operator, insurer, regulator.          |

### 3. Primitive Lens

Question:

> What must be true before an agentic action should be accepted?

Use this as the canonical primitive map:

| Primitive             | What It Answers                                                         | Existing Approximation                                    | Why It Is Not Enough                                                                      |
| --------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Identity              | Who or what is this?                                                    | OAuth, OIDC, DID, workload identity.                      | It does not prove action-specific authority.                                              |
| Principal Binding     | Who does this agent represent?                                          | Account login, API token, service account.                | It may not map cleanly to legal or organizational authority.                              |
| Intent                | What is the agent trying to accomplish?                                 | Prompt, cart, API request, workflow state.                | It is often implicit and not counterparty-readable.                                       |
| Authority             | What is the agent allowed to do?                                        | RBAC, OAuth scopes, IAM roles.                            | It is usually system-local and too coarse for business consequence.                       |
| Consent               | Who agreed to this action or class of actions?                          | Terms, checkout confirmation, user approval.              | It may not travel across agents, services, or time.                                       |
| License / Entitlement | Is this principal or agent allowed to invoke this protected capability? | Seats, subscriptions, DRM, API keys, enterprise licenses. | File or account access does not govern purpose, jurisdiction, output rights, or reliance. |
| Delegation            | How does authority pass through agents or subcontractors?               | Service contracts, internal delegation, tokens.           | It is weak across recursive agent-to-agent interactions.                                  |
| Policy Match          | Do both sides' rules allow this interaction?                            | Fraud checks, API gateway rules, compliance checks.       | They rarely compare bilateral intent and authority.                                       |
| Record                | What remains after action?                                              | Logs, receipts, invoices, event trails.                   | Often post-hoc, fragmented, and weak for disputes.                                        |
| Liability             | Who answers if the action fails?                                        | Contract terms, insurance, chargebacks.                   | It is not tied to the action envelope at execution time.                                  |
| Revocation            | How does authority stop?                                                | Session expiry, key rotation, access removal.             | It may not revoke already-delegated or in-flight intent.                                  |

### 4. Business Model Lens

Question:

> Where does value accrue when business capabilities become agent-callable?

Use a canvas for each candidate market or company type.

| Canvas Block       | Prompt                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Which buyer or operator faces new pain when agents act?                                                    |
| Job To Be Done     | What agentic action are they trying to allow, refuse, or govern?                                           |
| Current Substitute | How do they solve it today with humans, SaaS, contracts, IAM, payments, logs, or policy?                   |
| Trigger Event      | What makes the old substitute insufficient?                                                                |
| Value Proposition  | What becomes possible or safer if this is solved?                                                          |
| Wedge              | What is the narrowest repeated action where the pain is urgent?                                            |
| Economic Buyer     | Who owns the budget or liability?                                                                          |
| User               | Who configures, reviews, or operates the system?                                                           |
| Distribution       | Which platform, protocol, or workflow does this attach to?                                                 |
| Revenue Model      | Per action, per agent, per principal, per counterparty, subscription, transaction fee, insurance/risk fee. |
| Moat               | Network, records, integrations, policy library, trust graph, risk data, standards position.                |
| Risks              | Incumbent absorption, low willingness to pay, too much friction, unclear liability, standards mismatch.    |
| Evidence Needed    | Interviews, pilots, refusals, incidents, compliance requirements, integration demand.                      |

This keeps the research tied to real company formation without forcing every
insight into product copy.

### 5. Infrastructure Lens

Question:

> What infrastructure must exist if agents coordinate economic activity?

Map the stack as capabilities:

| Layer        | Function                   | Existing World                          | Agentic Requirement                                         |
| ------------ | -------------------------- | --------------------------------------- | ----------------------------------------------------------- |
| Interface    | Humans operate software.   | Dashboards, forms, portals.             | Agents call capabilities directly.                          |
| Capability   | Business function exposed. | SaaS feature, API, human service.       | Callable outcome with terms and limits.                     |
| Authority    | Permission to act.         | IAM, approval chains, contracts.        | Action-specific authority and delegation.                   |
| Coordination | Multiple systems align.    | Workflow tools, email, human operators. | Agent-to-agent and agent-to-service negotiation.            |
| Settlement   | Value moves.               | Cards, ACH, invoices, crypto, ledgers.  | Machine-speed payment or commitment linked to authority.    |
| Record       | Evidence persists.         | Logs, receipts, tickets, contracts.     | Durable action envelope and consequence trail.              |
| Dispute      | Failure is resolved.       | Support, legal, chargebacks, insurance. | Evidence-driven liability and recourse.                     |
| Governance   | The system is controlled.  | Policies, audits, risk committees.      | Runtime policy, monitoring, revocation, exception handling. |

## Scenario Simulation Template

Every serious claim should be tested through a scenario, not only argued.

### Scenario Fields

| Field             | Prompt                                                                            |
| ----------------- | --------------------------------------------------------------------------------- |
| Business Intent   | What objective is the agent given?                                                |
| Principal         | Who does the agent represent?                                                     |
| Starting State    | What is happening in the business or market?                                      |
| Systems Touched   | Which SaaS apps, APIs, ledgers, devices, markets, or institutions are involved?   |
| Counterparties    | Who must accept or rely on the agentic action?                                    |
| Actions           | What does the agent actually do?                                                  |
| Consequences      | What changes in data, money, operations, commitments, records, or physical state? |
| Existing Controls | What identity, payment, IAM, contract, audit, or policy primitives exist today?   |
| Failure Point     | Where do existing controls become insufficient?                                   |
| New Primitive     | What needs to exist before the action is accepted?                                |
| Human Re-entry    | Where should humans remain in the loop?                                           |
| Market Created    | What new product, service, protocol, or institution could exist?                  |
| Falsifier         | What would make this scenario unimportant?                                        |

### Scenario Rule

Do not begin by naming the missing primitive.

First let the agent act, watch where a counterparty hesitates, then name the
gap.

## The Three Maps We Need

### 1. The Reorganized Firm Map

Output:

- What parts of the firm become executable.
- Which executives own the transition.
- Which operator workflows become policy and exception handling.
- Which records and controls are required.

Primary question:

> How much of the company can become software agency without losing control?

### 2. The Callable Markets Map

Output:

- A market atlas of business capabilities becoming agent-callable.
- Buyer, counterparty, consequence, and primitive gaps for each surface.
- Ranking of wedge opportunities.

Primary question:

> Which functions become markets when agents can call outcomes directly?

### 3. The Agentic Infrastructure Map

Output:

- The stack of identity, intent, authority, consent, delegation, settlement,
  records, liability, governance, and revocation.
- Incumbents and protocols by layer.
- Unsolved gaps where new infrastructure can be built.

Primary question:

> What has to become legible before software agency is accepted across boundaries?

## Capture Cadence

Use this cadence to keep the work systematic.

### Weekly

- Run 2-3 scenario simulations.
- Add or revise 5-10 thesis objects.
- Update one market canvas.
- Record falsifiers.
- Identify one insight worth publishing later.

### Monthly

- Refresh the market map.
- Re-rank wedge opportunities.
- Compare against new protocol/vendor moves.
- Turn strongest insight into a public note, deck, or website page.

### Quarterly

- Update the core thesis.
- Publish the state of the field.
- Decide which product bets still follow from the research.

## Evidence Ledger

Every claim should be tagged:

| Tag         | Meaning                                              |
| ----------- | ---------------------------------------------------- |
| Observed    | We have seen concrete evidence.                      |
| Interviewed | A relevant buyer, operator, or builder confirmed it. |
| Inferred    | The claim follows logically but needs testing.       |
| Speculative | Plausible future, not yet validated.                 |
| Falsified   | Evidence suggests this is wrong or weak.             |

This keeps the voice rigorous without pretending to know the future.

## Presentation System

The research should produce several types of public and private artifacts.

| Artifact              | Purpose                                       | Structure                                                         |
| --------------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| Field Thesis          | Establish the core perspective.               | Premise, changed assumption, consequences, open questions.        |
| Market Map            | Show where the economy is reorganizing.       | Capabilities, buyers, counterparties, consequences, primitives.   |
| Business Model Canvas | Turn an insight into company formation logic. | JTBD, buyer, wedge, revenue, moat, evidence.                      |
| Executive Brief       | Explain the transition to a C-suite reader.   | What changes, what breaks, what to govern, what to explore.       |
| Operator Brief        | Ground the transition in workflows.           | Current workflow, agentic workflow, new controls, human re-entry. |
| Product Memo          | Decide whether to build.                      | Scenario, pain, primitive, wedge, integration, risk.              |
| Public Essay          | Shape category understanding.                 | One changed assumption, one scenario, one implication.            |

## What To Avoid

- Starting with Handshake and looking for applications.
- Treating payments as the whole category.
- Treating crypto as a universal answer.
- Treating identity as sufficient.
- Writing only prose without canvases, maps, and falsifiers.
- Making definitive predictions when the field is still forming.
- Explaining the company before showing the world shift.
- Collapsing C-suite, operator, market, and infrastructure questions into one
  argument.

## Immediate Workbench

Start with six scenario simulations:

1. Supply availability agent: preserve revenue without violating margin, working
   capital, or supplier risk.
2. Paid API agent: buy data, compute, or model output under business purpose and
   spend limits.
3. Customer exception agent: issue refunds, credits, or account changes under
   commercial discretion.
4. Cloud operations agent: modify infrastructure state under safety and
   authorization constraints.
5. Logistics custody agent: book, reroute, release, or transfer goods.
6. Agent-to-agent subcontracting: delegate work to another agent or service
   while preserving authority and liability.
7. Guarded capability licensing: invoke protected standards, models, data,
   methods, or skills under license, scope, jurisdiction, and output limits.
8. Edge device admission: request local device data, compute, access, or
   actuation under owner policy and safety constraints.
9. Atomized resource intent: declare intended use of bounded resources, spaces,
   capacity, or time windows.

For each scenario, fill:

- Scenario simulation template.
- Market canvas.
- Primitive gaps.
- Evidence status.
- Product implications.
- Publishable insight.

## Working North Star

Agentic Economy studies how software agency moves through data, markets,
institutions, and the physical world.

The work is to make the transition legible before it becomes obvious.
