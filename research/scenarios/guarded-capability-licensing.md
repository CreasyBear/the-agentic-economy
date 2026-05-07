# Scenario Simulation: Guarded Capability Licensing

Date: 2026-05-06
Status: structured simulation

## Business Intent

Let agents use highly guarded knowledge, standards, models, tools, or skills
without losing control over licensing, jurisdiction, scope, redistribution,
liability, or downstream use.

## Principal

A standards authority, certification body, technical publisher, professional
body, insurer, data provider, model provider, device maker, or owner of a
regulated/proprietary capability.

The agent may represent a licensed enterprise, engineer, inspector, auditor,
contractor, supplier, or autonomous system.

## Starting State

An agent wants to use a protected capability:

- Interpret a paid standard.
- Apply a technical code.
- Use a certified inspection method.
- Invoke a proprietary engineering skill.
- Query licensed market, legal, medical, safety, or compliance knowledge.
- Run a model or tool whose output carries commercial or legal consequence.

In the human model, access is guarded through accounts, PDFs, licenses, named
users, enterprise subscriptions, watermarks, DRM, and contractual restrictions.

In the agentic model, the protected object may not be read by a human at all.
The capability is invoked by software and potentially embedded into another
workflow.

## Systems Touched

| System                           | Why It Matters                                                         |
| -------------------------------- | ---------------------------------------------------------------------- |
| License management               | Determines who may use the capability and under what terms.            |
| Standards / knowledge repository | Holds guarded technical or regulatory material.                        |
| Agent orchestration              | Decides when the capability is needed.                                 |
| Identity and principal binding   | Links agent, user, organization, and entitlement.                      |
| Policy engine                    | Checks jurisdiction, purpose, role, redistribution, and output limits. |
| Billing / metering               | Charges per seat, document, query, action, or outcome.                 |
| Record system                    | Preserves use, source, scope, and downstream reliance.                 |
| Certification / liability layer  | Determines whether output can be relied on professionally.             |

## Counterparties

| Counterparty        | What They Need To Trust                                                          |
| ------------------- | -------------------------------------------------------------------------------- |
| Standards authority | The agent is entitled to use guarded material and cannot freely redistribute it. |
| Licensed enterprise | The agent's use stays inside the enterprise license.                             |
| Professional user   | Output is grounded in the licensed source and within professional scope.         |
| Regulator / auditor | Reliance on standards or codes can be reconstructed.                             |
| Downstream customer | The capability was invoked under valid authority.                                |
| Insurer / certifier | The output is within covered or certified use.                                   |

## Actions

The agent:

1. Encounters a task requiring guarded technical or professional knowledge.
2. Identifies the applicable standard, code, model, method, or skill.
3. Presents its principal, role, purpose, jurisdiction, and requested use.
4. Proves license, entitlement, or authorization.
5. Receives only the allowed capability surface.
6. Applies the capability to the task.
7. Records source, scope, version, license, and reliance context.
8. Prevents unauthorized storage, redistribution, or downstream delegation.

## Consequences

| Consequence Type      | What Changes                                                                          |
| --------------------- | ------------------------------------------------------------------------------------- |
| Intellectual property | Protected material or methods may be consumed by software.                            |
| Licensing             | Use may count against an enterprise, professional, or per-action entitlement.         |
| Compliance            | Work may depend on a specific code, standard, or jurisdiction.                        |
| Liability             | Incorrect or unauthorized use may affect certification, insurance, or legal exposure. |
| Redistribution        | Agent outputs may leak protected content or encode guarded methods.                   |
| Market structure      | Standards and skills may become callable capabilities rather than static documents.   |

## Existing Controls

| Control                 | What It Covers                 | What It Misses                                           |
| ----------------------- | ------------------------------ | -------------------------------------------------------- |
| DRM-protected PDF       | Human document access.         | Agentic invocation and downstream use.                   |
| Named-user license      | Person or account entitlement. | Agent, principal, role, and purpose-bound use.           |
| Enterprise subscription | Organization-level access.     | Which agent can use which capability for which task.     |
| Watermark               | Leak deterrence.               | Real-time permission to invoke a capability.             |
| Terms of use            | Contractual limits.            | Runtime enforcement across agents and workflows.         |
| API key                 | Technical access.              | License, professional scope, jurisdiction, and reliance. |
| Audit log               | After-the-fact trace.          | Pre-use admission and downstream constraints.            |

## Failure Point

The old control object is the document, account, or API.

The new control object is the capability.

A protected PDF can be opened, summarized, embedded, retrieved, fine-tuned
against, converted into a tool, or invoked by an agent that never presents as a
human reader.

The authority does not only need to ask whether the user can access a file. It
needs to ask whether this agent is allowed to invoke this capability for this
principal, task, jurisdiction, and downstream use.

This is the deeper shift:

> As capabilities become callable, access control moves from systems to powers.

## New Primitive

Guarded capabilities need license-to-invoke.

Minimum proof object:

| Field                | Needed Because                                                                 |
| -------------------- | ------------------------------------------------------------------------------ |
| Principal            | The license often belongs to an organization, professional, or institution.    |
| Agent                | The actor invoking the capability is software.                                 |
| Licensed User / Role | Some rights depend on professional standing or named users.                    |
| Capability           | The protected thing is a skill, standard, model, method, or action surface.    |
| Intent               | Purpose determines whether use is permitted.                                   |
| Jurisdiction         | Standards and regulated methods vary by place and context.                     |
| Scope                | Read, retrieve, apply, quote, generate, certify, store, or delegate.           |
| Output Rights        | What the agent may store, share, cite, or reuse.                               |
| Reliance             | Whether the output can support professional, regulatory, or insured decisions. |
| Metering             | Usage may be per query, per action, per project, or per outcome.               |
| Record               | Version, source, license, and reliance need reconstruction.                    |
| Revocation           | Entitlement must stop across agents, caches, and downstream tools.             |

## Human Re-entry

Humans should re-enter when:

- The action would certify, approve, or sign regulated work.
- The agent wants to quote, reproduce, or redistribute protected content.
- Jurisdiction or version is ambiguous.
- A professional license or qualified person is required.
- The task moves from advice to reliance.
- The agent wants to delegate the capability to another agent or tool.

## Market Created

| Market                       | Why It Appears                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| Capability rights management | Skills, standards, models, and tools need runtime licensing.                             |
| Agent-readable standards     | Standards bodies can expose controlled capability surfaces instead of static PDFs alone. |
| License-to-invoke APIs       | Entitlement attaches to action, purpose, role, jurisdiction, and output rights.          |
| Professional skill licensing | Guarded expert methods become callable under professional constraints.                   |
| Reliance records             | Certification, audit, insurance, and disputes need proof of valid use.                   |
| DRM-to-policy transition     | Protection shifts from document lockdown to governed invocation.                         |

## Business Model Canvas

| Canvas Block       | Capture                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Standards authorities, certification bodies, technical publishers, data/model providers, regulated capability owners.             |
| Job To Be Done     | Let agents invoke guarded capabilities without uncontrolled copying, misuse, or unauthorized reliance.                            |
| Current Substitute | DRM PDFs, named-user seats, enterprise subscriptions, API keys, terms, audits.                                                    |
| Trigger Event      | Agents consume or operationalize guarded knowledge faster than document-centric controls can govern.                              |
| Value Proposition  | Convert protected content and skills into governed, metered, agent-callable capability surfaces.                                  |
| Wedge              | Standards/code interpretation or licensed technical query under enterprise entitlement.                                           |
| Economic Buyer     | Standards authority, enterprise license owner, compliance leader, professional services platform.                                 |
| User               | Agent developer, engineer, compliance operator, standards product team.                                                           |
| Distribution       | Standards repositories, engineering software, compliance platforms, agent SDKs, API gateways.                                     |
| Revenue Model      | Per invocation, per licensed agent, per principal, per project, enterprise subscription, certification fee.                       |
| Moat               | Authoritative content rights, license graph, usage records, professional workflows, integration with relied-upon tools.           |
| Risks              | Rights holders resist agentic access, leakage fears block adoption, incumbents build closed products, law/policy remains unclear. |
| Evidence Needed    | Standards bodies exploring agent access, enterprises wanting governed use, leakage incidents, professional reliance requirements. |

## Evidence Status

| Claim                                                                     | Status      | Needed Evidence                                                                   |
| ------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------- |
| Guarded knowledge will become agent-callable.                             | Inferred    | Standards, data, model, and technical publisher interviews.                       |
| DRM-style document protection weakens when agents operationalize content. | Inferred    | Evidence from rights holders and enterprise AI workflows.                         |
| License-to-invoke is distinct from file access.                           | Inferred    | Cases where entitlement depends on purpose, role, jurisdiction, or output rights. |
| This can be a wedge for authority infrastructure.                         | Speculative | Buyer urgency and willingness to expose controlled APIs.                          |

## Product Implications

This scenario suggests a broader product category than payment approval:

> capability admission.

The ceremony does not only ask whether an agent can transact. It asks whether an
agent can invoke a protected power.

Handshake, or a related primitive, could attach to the moment before a guarded
capability is used:

- Prove the principal.
- Prove the agent.
- Prove the license or entitlement.
- Bind use to purpose, jurisdiction, role, and output rights.
- Meter the invocation.
- Leave a reliance record.

## Publishable Insight

> As capabilities become callable, access control moves from systems to powers.

The standards-body version:

> A protected PDF is a weak boundary when the economic object becomes the
> capability encoded inside it.

## Falsifier

This scenario is weaker if:

- Rights holders refuse to expose guarded capabilities to agents.
- Existing document licensing adapts cleanly to agentic use.
- Agents are only allowed to retrieve small excerpts under human supervision.
- Enterprises avoid relying on agent-applied standards or licensed skills.
- The market treats leakage prevention as more urgent than governed invocation.
