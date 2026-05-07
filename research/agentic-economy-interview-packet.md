# Agentic Economy Interview Packet

Date: 2026-05-06
Status: ready for first interview cycle

## Purpose

This packet operationalizes `research/agentic-economy-validation-guide.md`.

Use it to run the first twelve interviews without turning the call into a
Handshake pitch. The objective is to find real refusal, risk, budget, and
workflow friction around agentic action.

## Research Posture

Lead with the field, not the product.

Bad opening:

> I am building Handshake, a protocol for agent authorization.

Better opening:

> I am studying where software agents are starting to act across business
> systems, and where existing approval, identity, and audit systems stop being
> enough.

The first half of the call is diagnosis. The second half can test the proof
object only if there is real pain.

## Outreach Lists

### Agent Builders

Find people building agents that can:

- Buy or subscribe.
- Call paid APIs.
- Change records in business systems.
- Use customer data.
- Trigger workflow actions.
- Delegate work to other agents or services.

Good titles:

- Founder.
- Head of Product.
- Developer platform lead.
- Agent infrastructure engineer.
- Applied AI lead.

### Accepting Counterparties

Find people whose systems may receive agentic action:

- Paid API providers.
- SaaS vendors exposing tool APIs.
- Marketplaces.
- Merchants testing agentic checkout.
- Platforms accepting automated account actions.

Good titles:

- Product lead.
- Platform PM.
- API product lead.
- Trust and safety lead.
- Fraud/risk lead.
- Developer relations lead.

### Enterprise Risk Owners

Find people responsible for allowing or controlling agents:

- CISO.
- CIO.
- CTO.
- CFO.
- General Counsel.
- Compliance lead.
- Procurement lead.
- Identity/security architect.

### Operators

Find people who currently approve consequential actions:

- Support operations.
- Finance operations.
- Revenue operations.
- IT administration.
- Cloud platform operations.
- Procurement operations.
- Logistics coordination.

## Outreach Messages

### Short Version

```text
Hi [Name],

I am studying where AI agents are starting to act across business systems, and
where existing identity, approval, and audit controls stop being enough.

I am not looking to pitch you. I am trying to understand where agents are being
accepted, refused, manually reviewed, or blocked.

Would you be open to a 25-minute research call?
```

### Agent Builder Version

```text
Hi [Name],

I am mapping where agent builders run into acceptance problems: paid APIs,
checkout, SaaS actions, enterprise approvals, data access, and other places
where an agent acts for a real user or organization.

I am not looking to pitch. I want to understand what proof counterparties ask
for before they accept agentic action.

Would you be open to a 25-minute research call?
```

### Enterprise Version

```text
Hi [Name],

I am studying how enterprises are preparing for AI agents that can act across
business systems: spending, accessing data, changing SaaS state, triggering
workflow, or coordinating with vendors.

I am especially interested in where existing identity, IAM, approval, and audit
systems are enough, and where they are not.

Would you be open to a 25-minute research call?
```

### Operator Version

```text
Hi [Name],

I am studying approval work inside businesses: the repeated decisions where a
person checks context, policy, authority, amount, customer status, or vendor
details before saying yes.

I am trying to understand which of those actions could be safely handled by
agents, and what proof an operator would need first.

Would you be open to a 25-minute research call?
```

## Call Structure

### 0-3 Minutes: Frame

Say:

> I am studying software agents as business actors. I am trying to learn where
> they can already act, where they get refused, and what proof a counterparty or
> organization needs before accepting the action. I am not here to sell you
> anything.

Ask permission:

> Is it okay if I ask about concrete workflows rather than general opinions?

### 3-12 Minutes: Current Behavior

Ask:

1. Where are agents or automated systems already acting in your world?
2. What actions create real consequence?
3. Which actions cross into another system, company, customer, vendor, or
   platform?
4. What approvals or checks happen today?
5. What breaks if the wrong action is accepted?

Listen for:

- Money movement.
- Data movement.
- Account state changes.
- Vendor/customer consequence.
- Legal or compliance exposure.
- Manual review.
- Approval rituals.
- Shadow automation.
- Shared credentials.
- Service account anxiety.

### 12-18 Minutes: Refusal And Proof

Ask:

1. What would you refuse an agent from doing today?
2. What proof would change that refusal into acceptance?
3. Is the missing proof identity, payment, consent, policy, approval, record, or
   something else?
4. Who needs to trust the proof?
5. Who bears the cost if the proof is wrong?

Use wedge sentences:

- A working card is not approval.
- A valid API key is not approval.
- A logged-in user is not approval.
- A service account is not approval.
- A valid signature is not approval.

Ask:

> Which of these sentences feels most true in your environment?

### 18-23 Minutes: Proof Object Test

Only run this if the interviewee named a real consequential action.

Say:

> Let me test the smallest possible object. Imagine an agent carries a record
> saying who it represents, what action it wants to take, why, what it is
> allowed to do, under what limits, and what decision was made before the action
> happened.

Ask:

1. Would that change whether you accept the action?
2. What is missing?
3. What is unnecessary?
4. Who would need to issue or sign it?
5. Where would this fit in your existing system?
6. What would make it too much friction?

### 23-25 Minutes: Buyer And Follow-Up

Ask:

1. If this problem became urgent, who would own it?
2. Is there an existing budget line it would come from?
3. Who else should I talk to who sees this more directly?
4. Can I follow up with a one-page version of what I heard?

## Interview Notes Template

```text
Date:
Interviewee:
Role:
Organization:
Track: Agent builder | Counterparty | Enterprise risk owner | Operator
Wedge:

Current agent usage:

Consequential actions:

Boundary crossed:

Current approval method:

Current control gap:

What they would refuse:

Proof requested:

Buyer named:

Budget signal:

Most resonant sentence:

Proof object reaction:

Integration path:

Strongest quote:

Score:
Confidence:

Follow-up:
```

## Scoring Sheet

Score each interview immediately after the call.

| Dimension               | Score | Evidence |
| ----------------------- | ----: | -------- |
| Agent immediacy         |       |          |
| Boundary crossing       |       |          |
| Consequence             |       |          |
| Current-control gap     |       |          |
| Buyer pain              |       |          |
| Buyer clarity           |       |          |
| Ceremony fit            |       |          |
| Integration feasibility |       |          |
| Expansion path          |       |          |
| Incumbent risk          |       |          |
| Total                   |       |          |

Do not average weak evidence into strength. If the interviewee cannot name a
real action, cap the total score at 25.

## Synthesis Protocol

After every four interviews:

1. List the actions named.
2. List the actions refused.
3. List the proof requested.
4. List who would pay.
5. List the strongest wedge sentence.
6. List what existing system was considered sufficient.
7. Decide whether to continue, narrow, or abandon that wedge.

After twelve interviews:

Produce:

- Top three wedge scores.
- Top five buyer phrases.
- Top five control gaps.
- Strongest proof object shape.
- Wedges to stop studying.
- Wedge for a ten-interview deep dive.

## Evidence Quality Rules

Strong evidence:

- A named workflow.
- A named failed or blocked action.
- A named budget owner.
- A current workaround.
- A real incident or near miss.
- A requirement from risk, legal, compliance, or security.
- A willingness to review a concrete proof object.

Weak evidence:

- "This is interesting."
- "We might need this later."
- "Agents will probably do this."
- "Everyone will need trust."
- "The ecosystem needs standards."

Disqualifying evidence:

- No current or near-term agent action.
- No consequence.
- Existing controls fully cover the workflow.
- No buyer.
- No integration path.

## Follow-Up Memo Template

Send within 24 hours.

```text
Thanks again for the time.

Here is what I heard:

1. The agentic action that matters is [action].
2. Today it is controlled by [current method].
3. The gap is [gap].
4. The proof you would need is [proof].
5. The likely owner is [owner].

The sentence that seemed closest was:

"[sentence]"

I am going to test this pattern with a few more people in adjacent roles. If I
draft a one-page proof object for this workflow, I would value your reaction.
```

## First Twelve Target Matrix

| Slot | Track         | Target profile                      | Primary wedge        |
| ---- | ------------- | ----------------------------------- | -------------------- |
| 1    | Agent builder | Paid or transactional agent founder | Paid APIs            |
| 2    | Agent builder | Agent platform product lead         | SaaS admin           |
| 3    | Agent builder | Agent infrastructure engineer       | Agent-to-agent       |
| 4    | Counterparty  | Paid API provider                   | Paid APIs            |
| 5    | Counterparty  | SaaS vendor exposing APIs           | SaaS admin           |
| 6    | Counterparty  | Merchant/platform risk lead         | Payments             |
| 7    | Enterprise    | CISO or identity architect          | SaaS admin           |
| 8    | Enterprise    | CFO or procurement lead             | Procurement/payments |
| 9    | Enterprise    | General Counsel or compliance lead  | Data access          |
| 10   | Operator      | Support operations lead             | Customer credits     |
| 11   | Operator      | Cloud platform engineer             | Cloud operations     |
| 12   | Operator      | Finance/procurement operator        | Procurement          |

## Stop Conditions

Stop studying a wedge when:

- Three relevant interviewees say existing controls are enough.
- No one can name a buyer.
- No one can name a refused or delayed action.
- The proof object is consistently seen as unnecessary friction.
- The wedge requires ecosystem-wide adoption before one party gets value.

Double down when:

- Multiple people independently use the same language.
- The wedge sentence lands without explanation.
- The proof object changes acceptance.
- A buyer asks to see a prototype or memo.
- A current workaround is expensive, manual, or risky.
