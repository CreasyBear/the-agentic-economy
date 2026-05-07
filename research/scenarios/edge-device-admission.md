# Scenario Simulation: Edge Device Admission

Date: 2026-05-06
Status: structured simulation

## Business Intent

Let autonomous agents interact with devices, sensors, machines, local models, or
edge controllers without allowing unauthorized access to physical systems,
private environments, safety-critical operations, or owner-controlled
capabilities.

## Principal

The principal may be:

- The device owner.
- The facility owner.
- The operator responsible for the environment.
- The manufacturer or platform provider.
- The organization represented by the remote agent.
- A regulator, insurer, or safety authority relying on records.

The edge device may itself contain a small language model or local agent, but it
does not become the root of trust.

## Starting State

A remote agent wants to interact with a device:

- Ask a warehouse scanner for inventory state.
- Unlock a smart access point.
- Query a building controller.
- Request data from a medical or lab device.
- Ask a vehicle, drone, or robot to perform an action.
- Invoke a local model housed inside an appliance, machine, or field device.
- Change a device setting that affects safety, privacy, energy, access, or
  physical operations.

In the old model, a human or app owns the session. The device trusts an account,
pairing relationship, local network, app permission, device certificate, or
controller.

In the agentic model, another software actor arrives and asks the device to
cooperate.

## Systems Touched

| System                  | Why It Matters                                                    |
| ----------------------- | ----------------------------------------------------------------- |
| Device identity         | The device must prove what it is and who made or certified it.    |
| Remote agent identity   | The device must know which software actor is requesting access.   |
| Principal binding       | The agent must prove who it represents.                           |
| Device owner policy     | The owner defines what can happen locally.                        |
| Safety envelope         | Local constraints determine what the device may allow.            |
| Edge model / classifier | The device may interpret messy requests into structured actions.  |
| Authorization server    | A local or remote authority may issue scoped permission.          |
| Attestation             | Device state or software integrity may need proof.                |
| Record store            | Attempts, decisions, actions, and exceptions need reconstruction. |

## Counterparties

| Counterparty            | What They Need To Trust                                            |
| ----------------------- | ------------------------------------------------------------------ |
| Edge device             | The remote agent is allowed to ask, access, command, or negotiate. |
| Remote agent            | The device is genuine, safe, and operating under expected policy.  |
| Device owner            | Local rules are enforced before action.                            |
| Facility operator       | Physical state does not change without authority.                  |
| Manufacturer / platform | Certification, warranty, and safety assumptions are preserved.     |
| Insurer / auditor       | The action chain is reconstructable.                               |

## Actions

The remote agent:

1. Discovers or addresses a device.
2. Presents agent identity, principal, intent, requested action, and limits.
3. Presents license, role, location, task, or delegation proof where required.
4. Receives device challenge, policy requirements, or denial.
5. Provides proof or requests escalation.

The edge device:

1. Classifies the requested interaction.
2. Verifies device-owner policy and safety envelope.
3. Checks agent/principal authority.
4. Optionally verifies remote attestation or trust posture.
5. Allows, denies, degrades, rate-limits, or escalates.
6. Records the attempted or accepted interaction.

## Consequences

| Consequence Type | What Changes                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Privacy          | Local sensor data, occupancy, health, location, or operational state may be exposed.     |
| Access           | Doors, vehicles, devices, or facility systems may become usable.                         |
| Safety           | Machines, robots, energy systems, or medical/lab devices may change physical behavior.   |
| Cost             | Energy, wear, compute, bandwidth, or service usage may be consumed.                      |
| Liability        | Unauthorized local action may create owner, manufacturer, operator, or insurer exposure. |
| Trust            | The device becomes a negotiating counterparty, not only a passive endpoint.              |

## Existing Controls

| Control                 | What It Covers                                | What It Misses                                              |
| ----------------------- | --------------------------------------------- | ----------------------------------------------------------- |
| Device certificate      | The device is genuine or certified.           | Whether the remote agent may interact with it.              |
| Pairing / commissioning | A controller is allowed to manage the device. | Dynamic agent intent and principal authority.               |
| Local network access    | Device is reachable.                          | Whether reachability is permission.                         |
| App permission          | A human app has access.                       | Agent-to-device delegation and bounded purpose.             |
| OAuth / ACE token       | Scoped resource access.                       | Physical consequence, local owner policy, and agent intent. |
| Remote attestation      | Software or hardware state can be appraised.  | Whether the proposed action is authorized.                  |
| Logs                    | What happened afterward.                      | Pre-action admission and owner-controlled intent matching.  |

## Failure Point

The device can know it is talking to a credentialed client. The remote agent can
know the device is genuine. That still does not answer the harder question:

> Is this agent allowed to invoke this device capability here, now, for this
> principal, under this local policy and safety envelope?

This is where small local models become useful but dangerous. They can interpret
intent and map requests into action classes. They should not be the root of
trust. The root of trust should remain cryptographic identity, attestation,
local policy, owner authority, safety constraints, revocation, and durable
records.

## New Primitive

Edge devices need agentic admission control.

Minimum proof object:

| Field                      | Needed Because                                                            |
| -------------------------- | ------------------------------------------------------------------------- |
| Device Identity            | The device must prove what it is.                                         |
| Device State / Attestation | The requester may need to trust firmware, model, or safety posture.       |
| Device Owner               | Local authority belongs to an owner or operator.                          |
| Remote Agent               | The software actor must be identified.                                    |
| Remote Principal           | The agent represents someone.                                             |
| Intent                     | The device needs to understand why access is requested.                   |
| Action                     | Read, write, command, unlock, move, sense, compute, or negotiate.         |
| Location / Context         | Physical and local state changes the risk.                                |
| Limits                     | Duration, frequency, range, data class, actuation class, safety boundary. |
| Policy Match               | Remote authority and local device-owner rules must both allow the action. |
| Decision                   | Allow, deny, degrade, ask human, or stop.                                 |
| Record                     | Attempts and accepted actions must survive for audit and dispute.         |

## Human Re-entry

Humans should re-enter when:

- The action affects safety, access, physical movement, health, or regulated
  operations.
- The device cannot classify intent with confidence.
- The agent lacks sufficient principal or delegation proof.
- Local owner policy conflicts with remote principal policy.
- The device is in a sensitive location or abnormal state.
- The request exceeds normal usage patterns.

## Market Created

| Market                      | Why It Appears                                                             |
| --------------------------- | -------------------------------------------------------------------------- |
| Agent-to-device admission   | Devices need to decide whether to accept requests from software actors.    |
| Edge trust ceremony         | Device, agent, principal, owner policy, and local context must be matched. |
| Local policy runtimes       | Owner rules must execute on or near the device.                            |
| Device capability licensing | Some device functions become protected powers, not open APIs.              |
| Edge action records         | Physical-world disputes need local action evidence.                        |
| Mutual attestation services | Agents and devices may need to prove state to each other.                  |

## Business Model Canvas

| Canvas Block       | Capture                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Customer Segment   | Device makers, industrial IoT platforms, robotics companies, building systems, medical/lab device platforms, logistics operators.        |
| Job To Be Done     | Let devices safely accept or refuse requests from agents representing external principals.                                               |
| Current Substitute | Pairing, device certificates, local network trust, app permissions, cloud account permissions, logs.                                     |
| Trigger Event      | Agents begin requesting local data, access, actuation, model inference, or device coordination.                                          |
| Value Proposition  | Give edge devices a ceremony to verify agent, principal, intent, authority, local policy, and safety before action.                      |
| Wedge              | Read-only device data or low-risk command admission under owner policy.                                                                  |
| Economic Buyer     | Device platform, facility operator, industrial platform, insurer, regulated operator.                                                    |
| User               | Device engineer, platform security team, facility operator, agent developer.                                                             |
| Distribution       | IoT platforms, edge gateways, device SDKs, industrial automation platforms, robotics middleware.                                         |
| Revenue Model      | Per device, per principal, per action, platform subscription, safety/compliance module.                                                  |
| Moat               | Device integrations, local policy runtime, trust records, manufacturer relationships, safety certifications.                             |
| Risks              | Device ecosystems remain closed, existing IoT standards absorb the layer, edge devices lack compute, buyers avoid third-party admission. |
| Evidence Needed    | Device platforms receiving agent access requests, industrial operators deploying agents, safety/security refusal cases.                  |

## Evidence Status

| Claim                                                             | Status      | Needed Evidence                                                 |
| ----------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| Agents will request direct interaction with devices.              | Inferred    | IoT, robotics, building, logistics, and medical/lab interviews. |
| Existing device identity does not solve agent authority.          | Inferred    | Security and platform interviews.                               |
| Local models can classify intent but should not be root of trust. | Inferred    | Edge AI and safety architecture review.                         |
| Edge device admission is a viable wedge.                          | Speculative | Buyer urgency and integration feasibility.                      |

## Product Implications

This wedge expands Handshake from transaction approval to capability admission
at the edge.

The ceremony becomes:

> Before a device accepts a request from an agent, prove device, agent,
> principal, intent, authority, local policy, safety envelope, and record.

This is not a replacement for Matter, ACE-OAuth, RATS, or device certificates.
It is a layer above them: an action and intent ceremony for agentic access to
local powers.

## Publishable Insight

> Devices are becoming counterparties.

The sharper form:

> A genuine device and a credentialed agent still need to decide whether this
> local capability should be invoked.

## Falsifier

This scenario is weaker if:

- Agents only interact through cloud platforms that fully mediate device access.
- Device ecosystems keep all agent traffic inside first-party apps.
- Local actions remain low-risk and reversible.
- Existing IoT authorization standards cover agent intent and principal
  authority sufficiently.

## Source Parallels

- IETF ACE-OAuth adapts OAuth-style authorization for constrained IoT
  environments: https://www.ietf.org/rfc/rfc9200.html
- W3C Web of Things Thing Description models Things with machine-readable
  interaction affordances: https://www.w3.org/TR/wot-thing-description/
- Matter device attestation proves a device is genuine and certified during
  commissioning:
  https://developers.home.google.com/matter/primer/attestation
- IETF RATS provides an architecture for remote attestation, where evidence is
  appraised by verifiers and relying parties:
  https://www.ietf.org/rfc/rfc9334.html
