# The Liability Gap

**Part 2 of the Agentic Economy Series**

The first piece named the structural gap: software that transacts without legal standing. This piece examines the machinery of accountability and where it breaks.

Liability in the modern economy operates through several mechanisms: contract law, tort law, regulatory enforcement, and insurance. Each mechanism assumes a responsible party who can be identified, sued, fined, or denied coverage. Each mechanism assumes a causal chain that leads back to a human decision-maker.

Contract law binds parties to their agreements. But what constitutes an agreement when one party is software? The Restatement of Agency defines an agent as "a person authorized to act on behalf of another." The language assumes personhood. Software does not fit.

Courts will likely treat agent actions as imputed to the principal, on the theory that the principal authorized the agent's deployment. But this creates a gap between the principal's actual intent and the scope of liability. If an agent pursues a goal in ways the principal did not anticipate, the principal may be liable for decisions they did not make and could not have foreseen. Traditional agency law limits liability to actions within the scope of authority. But scope becomes murky when authority is expressed in natural language: "optimize my portfolio." What decisions fall within that scope? The agent's interpretation may diverge from the principal's intent. The law has no framework for resolving this divergence.

Tort law imposes liability for harm caused by negligence. But negligence requires a duty of care, a breach of that duty, and causation. What duty of care does a principal owe when deploying an agent? What standard of behavior constitutes reasonable oversight? The speed and opacity of agent decision-making makes traditional negligence frameworks difficult to apply. A human supervisor cannot review each decision in real time. The agent may make thousands of decisions between oversight moments. Which decisions count as supervised? Which count as negligent?

Regulatory enforcement faces similar gaps. Financial regulations require licensed individuals to exercise judgment over certain activities. When an agent executes trades, the licensed supervisor signs off, but the supervision is retrospective. The agent has already acted. The license holder may not understand the agent's reasoning. The regulator has no way to verify that meaningful supervision occurred. The compliance infrastructure assumes human decision-making at each checkpoint. It has no architecture for autonomous software that operates between checkpoints.

Insurance breaks down for the same reasons. Underwriting requires risk assessment. Risk assessment requires historical data and actuarial models. There is no historical data for agent liability because agents are new. There are no actuarial models because the risk profile is unknown. The insurance industry responds to uncertainty with either exclusion or pricing that makes coverage impractical. Most commercial general liability policies exclude coverage for "electronic data" and "professional services." Cyber policies cover data breaches, not economic decisions. Errors and omissions policies cover professional mistakes, but the definition of "professional" assumes a licensed human. Autonomous software does not fit.

The result is a liability vacuum. Agents can cause economic harm. The harmed party may have no clear path to recovery. The principal may be liable for decisions they did not make. The platform and model provider may have no liability at all. The insurance may not exist. The regulatory framework may not apply.

This vacuum will not persist indefinitely. Two paths are possible.

First, the legal system adapts. Courts extend existing doctrines to cover agent actions. Legislatures create new categories of liability. Regulators issue guidance on what constitutes reasonable agent oversight. Insurance products emerge with new underwriting standards. The adaptation is messy, uneven, and slow, but it eventually creates a framework.

Second, the liability vacuum shapes the structure of the agentic economy. Agents are deployed only in domains where the liability exposure is manageable. High-stakes decisions — medical, financial, legal — remain human-supervised or are avoided entirely. The agentic economy grows within the boundaries of the liability vacuum, constrained by the absence of accountability mechanisms.

Both paths may occur simultaneously. The legal system adapts in some domains while the economy evolves within the vacuum in others. The shape of the agentic economy will be determined, in part, by where liability frameworks develop and where they do not.

The infrastructure for agents to act is neutral with respect to liability. The same tools can be used in a well-governed domain or a liability vacuum. The difference is not technical. It is institutional.

The first dynamic — actors without standing — creates a gap. The liability gap determines whether that gap closes or shapes the economy that grows around it.

---

*This is the second in a series on the structural dynamics of the agentic economy. The next piece, "Identity for the Machine," examines the open questions for governance and what solutions might emerge.*
