# Scenario Simulation: Paid API Agent

Date: 2026-05-06
Status: structured simulation

## Business Intent

Acquire the external data, compute, model output, or enrichment needed to
complete a business task without exceeding spend, data-use, compliance, or
vendor limits.

## Principal

An enterprise team, agent platform customer, developer organization, or business
unit whose agent needs to call external capabilities.

The agent is not buying for itself. It is spending authority and exposing data
on behalf of a principal.

## Starting State

An agent is working on a task that requires an external capability:

- Query a paid data source.
- Buy model inference.
- Run compute.
- Verify an entity.
- Enrich a customer or supplier record.
- Purchase access to a specialized API.

In the old model, a human chooses the provider, configures the API key, accepts
terms, and monitors usage after the fact.

In the agentic model, the agent may choose the best endpoint at runtime.

## Systems Touched

| System              | Why It Matters                                                  |
| ------------------- | --------------------------------------------------------------- |
| Agent orchestration | Chooses when an external capability is needed.                  |
| API gateway         | Enforces technical access, rate limits, and metering.           |
| Billing system      | Charges for calls, subscriptions, usage, or outcome fees.       |
| Data governance     | Controls what input data can leave the principal's environment. |
| Vendor terms        | Defines permitted use, retention, resale, and liability.        |
| Identity provider   | Binds user, organization, workload, or agent credentials.       |
| Observability       | Records call volume, latency, errors, and cost.                 |

## Counterparties

| Counterparty | What They Need To Trust                                        |
| ------------ | -------------------------------------------------------------- |
| API provider | The call represents a real customer and authorized use case.   |
| Principal    | The agent is spending and sharing data inside policy.          |
| Platform     | The agent is not abusing credentials or routing around limits. |
| Compliance   | Restricted data is not sent to an unapproved endpoint.         |
| Finance      | Usage and spend remain inside delegated limits.                |

## Actions

The agent:

1. Determines that an external call is required.
2. Selects a provider based on price, latency, quality, and terms.
3. Packages task context and input data.
4. Sends a paid API request.
5. Receives output and continues the workflow.
6. Records cost, provider, purpose, input class, and result.

## Consequences

| Consequence Type | What Changes                                                             |
| ---------------- | ------------------------------------------------------------------------ |
| Money            | Usage charges, subscriptions, or outcome fees accrue.                    |
| Data             | Internal or customer data may leave the principal's environment.         |
| Dependency       | The workflow relies on external output quality and availability.         |
| Compliance       | Data-use, retention, privacy, or licensing obligations may be triggered. |
| Vendor exposure  | The principal may accept terms or usage commitments indirectly.          |

## Existing Controls

| Control          | What It Covers             | What It Misses                                                 |
| ---------------- | -------------------------- | -------------------------------------------------------------- |
| API key          | Technical access.          | Whether this specific call is authorized for this purpose.     |
| OAuth scope      | Delegated access category. | Business intent, spend context, and data-use purpose.          |
| Billing account  | Ability to charge.         | Approval for this agent to incur this charge now.              |
| Rate limit       | Volume control.            | Whether the call should happen.                                |
| Terms of service | General rules.             | Runtime matching between action, data, purpose, and authority. |
| Logs             | After-the-fact record.     | Pre-call proof for acceptance and governance.                  |

## Failure Point

The API provider can know that a valid credential called the endpoint. It may
not know whether the call reflects an authorized business purpose.

The principal can see spend after the fact. It may not know whether the agent
was allowed to spend on that provider, with that data, for that task.

The governance system can approve a vendor. It may not approve every runtime
use of that vendor.

## New Primitive

Paid agentic APIs need purpose-bound authority at the moment of call.

Minimum proof object:

| Field         | Needed Because                                                               |
| ------------- | ---------------------------------------------------------------------------- |
| Principal     | The provider needs to know whose authority and billing relationship is used. |
| Agent         | The action was initiated by software.                                        |
| Intent        | The provider and principal need the business purpose.                        |
| Action        | The specific API call must be named.                                         |
| Data Class    | Data exposure changes the risk profile.                                      |
| Spend Limit   | Usage can accumulate at machine speed.                                       |
| Vendor Policy | Provider, jurisdiction, licensing, and retention rules matter.               |
| Record        | Cost, purpose, and output need to be reconstructable.                        |

## Human Re-entry

Humans should re-enter when:

- Spend exceeds dynamic thresholds.
- A new provider is selected.
- Sensitive or regulated data is included.
- The endpoint's terms conflict with the principal's policy.
- The result will be used in a high-consequence decision.

## Market Created

| Market                  | Why It Appears                                                    |
| ----------------------- | ----------------------------------------------------------------- |
| Agentic API acceptance  | Providers need a better reason to trust agent traffic.            |
| Purpose-bound billing   | Finance wants charge, task, principal, and authority linked.      |
| Data-use authorization  | Data owners need proof that a call is permitted for this purpose. |
| API policy marketplaces | Providers may compete on terms that agents can evaluate.          |
| Call-level records      | Auditors need more than credential and usage logs.                |

## Business Model Canvas

| Canvas Block       | Capture                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | API providers, agent platforms, enterprises using paid external APIs.                                                 |
| Job To Be Done     | Allow or govern paid API calls by agents under purpose, data, and spend constraints.                                  |
| Current Substitute | API keys, OAuth scopes, billing dashboards, vendor review, logs.                                                      |
| Trigger Event      | Agents choose and call external providers dynamically.                                                                |
| Value Proposition  | Make each paid call legible before it is accepted and charged.                                                        |
| Wedge              | High-value paid APIs where data sensitivity and usage cost matter.                                                    |
| Economic Buyer     | API platform, finance owner, data governance, agent builder.                                                          |
| User               | Developer, platform engineer, governance operator.                                                                    |
| Distribution       | API gateways, agent SDKs, MCP servers, paid API marketplaces.                                                         |
| Revenue Model      | Per call, per agent, per account, platform fee, verification fee.                                                     |
| Moat               | Provider network, call records, policy integrations, developer adoption.                                              |
| Risks              | Providers treat agent traffic as normal API usage, cost is too low, existing API gateways absorb it.                  |
| Evidence Needed    | API providers refusing agent calls, enterprises requiring purpose-bound usage, agent platforms seeking trust objects. |

## Evidence Status

| Claim                                                         | Status   | Needed Evidence                                   |
| ------------------------------------------------------------- | -------- | ------------------------------------------------- |
| Agents will choose and call paid APIs dynamically.            | Inferred | Agent platform roadmaps and developer interviews. |
| API keys are insufficient for high-consequence agentic calls. | Inferred | Provider or enterprise refusal evidence.          |
| Purpose-bound data use matters at call time.                  | Inferred | Data governance and compliance interviews.        |
| Paid APIs are a feasible wedge.                               | Inferred | Integration demand and willingness to pay.        |

## Product Implications

This is a clean adjacent surface for a pre-action ceremony because the unit is
already small: one HTTP call, one account, one provider, one charge, one data
payload, one record.

The hard part is not technical wrapping. It is making the proof object valuable
enough that providers or enterprises require it.

## Publishable Insight

> A valid API key tells a provider that a call can be made. It does not tell the
> provider whether an agent is allowed to make this call, for this principal,
> with this data, for this purpose, at this cost.

## Falsifier

This scenario is weaker if:

- Agentic API calls remain low-risk and low-cost.
- API providers do not distinguish agents from normal software clients.
- Enterprises solve the problem with internal gateways and vendor allowlists.
- The proof object adds more friction than value.
