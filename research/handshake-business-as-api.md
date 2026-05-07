# Handshake In A Business-As-API Economy

Date: 2026-05-06
Status: structured product/market memo

## Purpose

This memo asks what Handshake becomes if more businesses expose outcomes as
machine-callable endpoints.

The frame:

> When every business becomes an API, every endpoint needs to know whether an
> agent is allowed to bind a principal to an outcome.

## Starting Premise

Business functions are decomposing into callable capabilities:

- Quote.
- Underwrite.
- Validate.
- Ship.
- Manufacture.
- Inspect.
- Reconcile.
- File.
- Certify.
- Settle.
- Reserve.
- Support.
- Repair.

The endpoint does not sell seats. It sells an outcome with terms:

- Input.
- Output.
- Price.
- Time.
- SLA.
- Penalty.
- Data rules.
- Liability.
- Reliance.
- Evidence.
- Recourse.

Agents become the natural buyers and coordinators of these endpoints because
they can discover, compare, negotiate, invoke, verify, and compensate without a
human operating every interface.

## The Core Question

If a business endpoint receives a call from an agent, what must it know before
it accepts?

Not only:

- Is the API key valid?
- Is the card valid?
- Is the agent capable?
- Is the request syntactically correct?

But:

- Who does the agent represent?
- Is that principal real?
- Is the agent authorized to request this outcome?
- Is the agent allowed to share this input data?
- Is the agent allowed to accept this price?
- Is the agent allowed to accept this SLA and penalty?
- Is the principal allowed to rely on this output?
- Is the endpoint allowed to perform this work for this principal?
- Do both sides' policies match?
- What record survives if the outcome fails?

That is the Handshake surface.

## What Handshake Is Not

Handshake is not the endpoint.

It does not manufacture, ship, certify, underwrite, inspect, file, reconcile, or
settle.

Handshake is not the marketplace.

It does not need to own discovery, ranking, pricing, or liquidity.

Handshake is not the payment rail.

It may connect to payment, escrow, settlement, or collateral, but payment only
answers whether value can move.

Handshake is not identity alone.

Identity says who something is. The endpoint needs to know what the agent is
allowed to bind the principal to.

## What Handshake Becomes

Handshake becomes the pre-call acceptance ceremony for outcome endpoints.

It sits between:

```text
Agentic demand
    |
    v
Callable business endpoint
```

At that boundary, Handshake packages:

| Field           | Why It Matters                                                                        |
| --------------- | ------------------------------------------------------------------------------------- |
| Principal       | The buyer, seller, operator, owner, or institution being bound.                       |
| Agent           | The software actor initiating or accepting the call.                                  |
| Binding         | Proof that the agent represents the principal.                                        |
| Intent          | The business outcome being pursued.                                                   |
| Capability      | The endpoint or power being invoked.                                                  |
| Input Rights    | Whether the agent may share the data, file, specification, image, sample, or context. |
| Authority       | Whether the agent may request, offer, accept, reserve, delegate, or commit.           |
| Terms           | Price, SLA, penalty, output rights, liability, jurisdiction, expiry.                  |
| Policy Match    | Whether both sides' rules permit the interaction.                                     |
| Settlement Link | How payment, escrow, collateral, or penalty attaches if needed.                       |
| Record          | What survives for audit, dispute, insurance, compliance, or learning.                 |
| Revocation      | How the mandate narrows, expires, or stops.                                           |

This is more than approval.

It is a machine-readable mandate for an outcome interaction.

## The Endpoint View

A Business-as-API provider asks:

> Before I execute, can I trust this agent to bind its principal to these terms?

Examples:

| Endpoint                   | What It Needs Before Accepting                                                        |
| -------------------------- | ------------------------------------------------------------------------------------- |
| Engineering validation API | The agent can submit this design, buy this certification, and accept reliance limits. |
| Logistics API              | The agent can book, reroute, or transfer custody under this cost and liability.       |
| Legal filing API           | The agent can submit on behalf of this entity under regulated authority.              |
| Insurance claims API       | The agent can settle, dispute, or accept evidence requirements.                       |
| Manufacturing API          | The agent can order production and share specifications.                              |
| Standards API              | The agent can invoke this protected code or method under license.                     |
| Device API                 | The agent can access or actuate this local capability under owner policy.             |
| Resource API               | The agent can occupy this slot, dock, machine, corridor, or time window.              |

The endpoint does not want a lecture about agentic economy. It wants an
acceptance object.

## The Agent View

An agent asks:

> Can I prove enough authority to get the endpoint to accept the work without
> waking a human every time?

The agent needs a portable way to carry:

- Principal authority.
- Business intent.
- Data rights.
- Spend limits.
- Negotiation bounds.
- Delegation rights.
- Output reliance.
- Revocation.

Without that, every endpoint creates a custom trust flow.

## The Principal View

The principal asks:

> How do I let software buy outcomes without giving it unlimited power?

The principal needs to express:

- What the agent can buy.
- Which endpoints it can call.
- What data it can disclose.
- What terms it can accept.
- What outcomes it can rely on.
- What it must escalate.
- What record is required.

This is where human work moves from operation to governance.

## The Bigger Market Structure

If SaaS is tool access, Business-as-API is outcome access.

Handshake is not the outcome.

Handshake is the authority layer that lets outcome access happen safely.

```text
SaaS world:
Human -> App -> Workflow -> Result

Business-as-API world:
Principal -> Agent -> Handshake -> Outcome endpoint -> Result / liability record
```

The center of gravity moves:

| SaaS Era         | Business-as-API Era         |
| ---------------- | --------------------------- |
| Seat             | Principal / agent mandate   |
| Dashboard        | Endpoint                    |
| Feature          | Capability                  |
| Subscription     | Outcome / usage / guarantee |
| Login            | Representation              |
| Permission       | Authority                   |
| Terms of service | Machine-readable terms      |
| Audit log        | Action and outcome record   |
| Vendor review    | Endpoint acceptance         |

## The Key Thesis

When every business becomes an API, the missing layer is not another API.

It is the ceremony that makes an agentic API call acceptable.

Handshake becomes:

> the intent, authority, and terms layer for agents calling businesses.

Or more compactly:

> Handshake is the mandate layer for Business-as-API.

## The Wedges This Reframes

| Wedge                   | Business-as-API Interpretation                                                       |
| ----------------------- | ------------------------------------------------------------------------------------ |
| Paid APIs               | Agents buy capability calls under purpose, data, and spend limits.                   |
| Guarded capabilities    | Agents invoke protected standards, models, data, or methods under license-to-invoke. |
| Edge devices            | Agents request admission to local device powers under owner policy.                  |
| Scarce resources        | Agents declare intent to occupy bounded resources, spaces, or time windows.          |
| Procurement / supply    | Agents reserve, substitute, or buy outcomes from vendors.                            |
| Logistics custody       | Agents bind principals to movement, custody, SLA, and liability.                     |
| Customer exceptions     | Agents exercise bounded commercial discretion on behalf of the company.              |
| Agent-to-agent services | Agents subcontract outcomes while preserving authority and liability.                |

## What To Test

The question for interviews is not:

> Do you need Handshake?

The question is:

> When an agent calls your business endpoint, what proof would make you execute?

Follow-ups:

1. What outcomes would you expose to agents?
2. What would you refuse today?
3. What terms must the agent be allowed to accept?
4. What data must the agent be allowed to share?
5. Who is liable if the output fails?
6. What record do you need?
7. Would you require a pre-call mandate object?

## Product Boundary

Handshake should stay narrow.

It should not become:

- The full marketplace.
- The workflow engine.
- The orchestration layer.
- The endpoint runtime.
- The payment network.
- The legal system.
- The insurance product.

It should become the reusable ceremony that lets those systems trust agentic
calls.

## Publishable Insight

> Business-as-API needs a mandate layer.

Longer form:

> If businesses become machine-callable endpoints, the decisive question is not
> whether an agent can call the API. It is whether the endpoint can trust the
> agent to bind a real principal to the outcome, terms, evidence, and liability
> of the work.

## Falsifier

This frame is weaker if:

- Businesses do not expose outcome endpoints.
- Humans remain mandatory for every consequential endpoint invocation.
- Marketplaces or platforms fully absorb authority and terms.
- API keys, payment rails, and contracts are considered sufficient.
- Buyers do not care about pre-call mandate records until after failures.
