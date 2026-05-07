# Scenario Simulation: Customer Exception Agent

Date: 2026-05-06
Status: structured simulation

## Business Intent

Protect customer trust and lifetime value by resolving account exceptions
without exceeding commercial discretion, fraud, policy, or finance limits.

## Principal

A merchant, financial services company, SaaS provider, marketplace, carrier, or
consumer business.

The agent acts for the company in customer-facing decisions.

## Starting State

A customer asks for a refund, fee waiver, credit, plan change, shipment
exception, account reinstatement, or goodwill adjustment.

In the old model, support agents follow policy, escalate edge cases, and receive
manager approval for commercial discretion.

In the agentic model, software can understand the request, inspect account
history, judge policy, issue the credit, update systems, and notify the
customer.

## Systems Touched

| System                | Why It Matters                                           |
| --------------------- | -------------------------------------------------------- |
| CRM                   | Customer history, ticket context, support workflow.      |
| Billing               | Refunds, credits, invoices, subscriptions.               |
| Payments              | Reversals, chargebacks, settlement impact.               |
| Fraud / risk          | Abuse patterns and account risk.                         |
| Policy knowledge base | Rules for refunds, credits, exceptions, and escalations. |
| Data warehouse        | Customer value, churn risk, prior exceptions.            |
| Communications        | Customer-facing promises and explanations.               |

## Counterparties

| Counterparty        | What They Need To Trust                          |
| ------------------- | ------------------------------------------------ |
| Customer            | The company stands behind the decision.          |
| Finance             | Credits and refunds are authorized.              |
| Risk / fraud        | The agent is not creating abuse exposure.        |
| Support leadership  | Policy is applied consistently.                  |
| Regulator / auditor | Records explain the customer-impacting decision. |

## Actions

The agent:

1. Reads the customer request.
2. Reviews account, transaction, and policy context.
3. Classifies the exception.
4. Determines whether action falls inside discretion.
5. Issues refund, credit, waiver, reinstatement, or denial.
6. Updates account and ticket records.
7. Communicates the decision.
8. Escalates if outside envelope.

## Consequences

| Consequence Type    | What Changes                                             |
| ------------------- | -------------------------------------------------------- |
| Money               | Refunds, credits, fee waivers, or revenue leakage.       |
| Customer obligation | Account state, service level, or entitlement may change. |
| Policy precedent    | Similar customers may expect similar treatment.          |
| Fraud exposure      | Bad actors can exploit automated discretion.             |
| Regulated treatment | Certain sectors need fair, explainable decisions.        |
| Brand trust         | The decision becomes the company's voice.                |

## Existing Controls

| Control           | What It Covers                    | What It Misses                                     |
| ----------------- | --------------------------------- | -------------------------------------------------- |
| CRM role          | Ability to edit or issue actions. | Whether this exception is commercially authorized. |
| Refund permission | System-level ability to refund.   | Business judgment and policy fit.                  |
| Support policy    | Human guidance.                   | Runtime enforcement and contextual limits.         |
| Manager approval  | Escalation for large cases.       | Machine-speed repeated small exceptions.           |
| Fraud tools       | Abuse detection.                  | Authority to grant discretion.                     |
| Ticket logs       | After-the-fact history.           | Pre-action authorization for the exception.        |

## Failure Point

The system can know that the agent has refund permission. It may not know
whether the agent should issue this refund to this customer under current
policy, value, fraud risk, and commercial limits.

The customer can receive an answer. The company still needs to know whether it
has acted consistently and with authority.

The risk is not one large refund only. It is repeated small discretion executed
at scale.

## New Primitive

Customer exception agents need bounded commercial discretion.

Minimum proof object:

| Field      | Needed Because                                                        |
| ---------- | --------------------------------------------------------------------- |
| Principal  | The company is making the customer-impacting decision.                |
| Agent      | The actor applying discretion is software.                            |
| Intent     | Preserve trust, retain customer, comply with policy, resolve issue.   |
| Action     | Refund, credit, waiver, reinstatement, denial, account change.        |
| Limits     | Amount, frequency, customer class, risk class, product, jurisdiction. |
| Policy     | The decision needs to cite the active rule or exception lane.         |
| Escalation | Humans re-enter when discretion exceeds envelope.                     |
| Record     | Finance, audit, support, and dispute teams need reconstruction.       |

## Human Re-entry

Humans should re-enter when:

- Refund or credit exceeds threshold.
- Customer is high-risk or regulated.
- Policy is ambiguous.
- The decision may create precedent.
- The customer threatens legal, public, or regulator escalation.
- The agent lacks enough context.

## Market Created

| Market                          | Why It Appears                                                      |
| ------------------------------- | ------------------------------------------------------------------- |
| Agentic support governance      | Companies need control over automated discretion.                   |
| Policy runtime for customer ops | Static support policies become executable boundaries.               |
| Exception record systems        | Decisions need to be explainable across finance, risk, and support. |
| Fraud-aware delegation          | Abuse risk rises when agents can issue credits at scale.            |
| Customer outcome controls       | Agents act as the company in moments customers remember.            |

## Business Model Canvas

| Canvas Block       | Capture                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Support-heavy businesses using agents for customer operations.                                           |
| Job To Be Done     | Let agents resolve exceptions while controlling policy, fraud, spend, and brand risk.                    |
| Current Substitute | CRM roles, refund permissions, support scripts, supervisor approval, QA review.                          |
| Trigger Event      | Agents begin issuing customer-impacting decisions without a human on each ticket.                        |
| Value Proposition  | Convert support discretion into bounded, auditable, revocable authority.                                 |
| Wedge              | Refunds, credits, fee waivers, and account changes below a threshold.                                    |
| Economic Buyer     | Support operations, CFO, risk, trust and safety.                                                         |
| User               | Support ops manager, policy owner, agent builder, QA lead.                                               |
| Distribution       | CRM, billing systems, support automation platforms, customer-agent vendors.                              |
| Revenue Model      | Per agent, per decision, per support volume, enterprise module.                                          |
| Moat               | Policy libraries, decision records, CRM integrations, risk feedback loop.                                |
| Risks              | Support platforms absorb it, low-value decisions do not justify new infrastructure, humans stay in loop. |
| Evidence Needed    | Customer ops teams delegating refunds, fraud incidents, QA gaps, finance concern.                        |

## Evidence Status

| Claim                                        | Status      | Needed Evidence                                                   |
| -------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| Agents will issue customer exceptions.       | Inferred    | Support automation product behavior and operator interviews.      |
| Existing CRM permissions are too coarse.     | Inferred    | Support and finance interviews.                                   |
| Bounded discretion is a recurring primitive. | Inferred    | Cases where action is permitted technically but not commercially. |
| This is an urgent wedge.                     | Speculative | Budget and adoption evidence.                                     |

## Product Implications

This wedge is operationally clear but may be absorbed by CRM and support
platforms. A standalone primitive becomes stronger if the same discretion object
must travel across billing, payments, CRM, fraud, and audit.

## Publishable Insight

> Agentic support does not merely answer customers faster. It moves commercial
> discretion into software, which means policy has to become executable before
> the customer-impacting action occurs.

## Falsifier

This scenario is weaker if:

- Agents only draft responses for humans.
- Support platforms solve discretion inside native workflows.
- Automated exceptions remain low-value and reversible.
- Finance and risk do not care until after review.
