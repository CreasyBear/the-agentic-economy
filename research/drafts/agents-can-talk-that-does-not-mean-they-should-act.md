# Agents Can Talk. That Does Not Mean They Should Act.

Date: 2026-05-06
Status: research draft
Evidence gate: source-backed infrastructure framing; buyer-pain claims require
interviews before publication

## Working Thesis

Agent communication and tool access are necessary infrastructure for the
agentic economy. They let agents discover each other, exchange tasks, access
tools, and produce artifacts.

They do not, by themselves, answer the business question:

> Is this agent allowed to create this consequence?

## Draft

The agentic economy needs agents that can talk to each other.

That is the first layer. If agents are built by different companies, run on
different frameworks, and operate across different systems, they need a common
way to discover capabilities, exchange messages, manage tasks, and return
artifacts. Without that, agentic work stays trapped inside single products.

A2A is pointed at this problem. It gives independent agent systems a shared
interaction model: agent cards, task lifecycle, messages, artifacts, streaming
updates, push notifications, and protocol bindings. In plain terms, it helps
agents find each other and collaborate on work.

That is important.

But communication is not authority.

An agent can describe what it can do. It can receive a task. It can return a
result. It can reject or cancel a task. It can request additional input. It can
operate through a protocol with authentication and authorization concepts.

None of that necessarily proves that the action it is about to take is allowed
by the principal it claims to represent.

The same is true for tool access.

MCP gives agents a way to connect with tools and servers. Its authorization
specification applies OAuth-based patterns to MCP clients and protected MCP
servers. That matters because tool access cannot be built on shared secrets and
hope. Tokens need audience binding. Servers need to reject tokens meant for
other resources. Implementations need to avoid confused-deputy failures and
token passthrough.

This is serious infrastructure work.

But access is not authority.

A token can be valid. A scope can be present. A server can validate the client.
A tool call can be authenticated. The system can still be missing the business
question:

> Should this agent take this action for this principal, against this
> counterparty, under these limits, right now?

That question sits above communication and access.

It also sits above credentials.

Verifiable credentials can prove claims. Workload identity can prove that a
machine workload is what it says it is. Agent identity systems can register,
govern, monitor, and revoke agents inside an enterprise. These are all
necessary pieces of the emerging stack.

But a claim is not a decision.

An identity is not approval.

A credential is not intent.

A workload is not a principal.

The mistake would be to confuse the substrate for the ceremony.

The substrate lets systems recognize and reach one another. The ceremony decides
whether consequence should be accepted.

Consider a simple case. An enterprise agent asks a SaaS admin agent to export
customer data. A2A may let the agents communicate. MCP may let the requesting
agent access the relevant tool. Enterprise identity may prove the agent exists.
A credential may prove the organization relationship. A log may record the
event.

The accepting system still needs to know whether this export was allowed.

Allowed by whom?

For what purpose?

Under what data scope?

For how long?

Against which policy?

With what record if the action is challenged later?

That is not a transport question. It is not only an authentication question. It
is not only a credential question.

It is a pre-action authority question.

This distinction matters because the next phase of agentic infrastructure may
look deceptively complete. Agents will communicate. Tools will authorize
clients. Credentials will verify claims. Workloads will attest identity.
Payment protocols will carry mandates. Enterprise platforms will govern agent
lifecycles.

All of that can be true, and the economy can still lack a neutral way to answer
whether a specific agentic action should be accepted before it creates
consequence.

The action is the missing unit.

Communication protocols organize tasks.

Tool protocols organize access.

Identity systems organize entities.

Credential systems organize claims.

Payment systems organize value movement.

The agentic economy also needs a way to organize authority around the action
itself.

This does not mean every action needs ceremony. Most agent activity will be low
risk, internal, reversible, or already covered by existing controls. The useful
question is narrower:

> Which actions will a counterparty refuse unless the agent can prove authority
> before acting?

That question may first show up in payments. It may show up in paid APIs. It may
show up in SaaS admin actions, cloud operations, customer support credits, data
rooms, logistics, or agent-to-agent subcontracting.

Wherever it appears, the pattern is the same.

The agent can talk.

The agent can access the tool.

The agent can present identity.

The agent may still need to prove authority.

## Evidence Status

Source-backed:

- A2A is designed for interoperability, discovery, task exchange, messages, and
  artifacts between independent agent systems.
- MCP authorization applies OAuth-based access patterns to MCP clients and
  protected MCP servers.
- MCP security guidance highlights audience validation, confused-deputy risks,
  token passthrough, and scope minimization.
- Verifiable credentials and workload identity are relevant substrates for
  machine-verifiable claims and machine identity.

Needs interview evidence:

- Whether agent builders see A2A/MCP as sufficient for consequential actions.
- Whether accepting counterparties require proof beyond protocol-level
  authentication.
- Which action classes produce refusal rather than ordinary access control.
- Whether a separate pre-action authority object is seen as useful or
  unnecessary friction.

## Source Notes

- A2A specification:
  https://a2a-protocol.org/latest/specification/
- MCP authorization:
  https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
- MCP security best practices:
  https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices
- W3C Verifiable Credentials:
  https://www.w3.org/TR/vc-data-model-2.0/
- SPIFFE/SPIRE concepts:
  https://spiffe.io/docs/latest/spire-about/spire-concepts/
