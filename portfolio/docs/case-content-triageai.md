# TriageAI — Explainability Layer for AI-Powered Support Intake

**Multilingual support classification where the AI shows its work — and humans stay in control.**

---

## Snapshot

| | |
|---|---|
| **Role** | Independent technical-functional concept |
| **Timeline** | 6 weeks |
| **Tools** | Figma, AI-assisted research and copy review, Next.js / Tailwind |
| **Focus** | AI UX, explainability patterns, human-in-the-loop workflows |
| **Type** | Conceptual case — design decisions are real; product is not in production |

---

## 01 — Context & Problem

Customer support teams using AI classification tools face a quiet paradox: the system is fast, but when it's wrong, agents can't tell *why* — so they can't correct it efficiently, and they don't learn from it.

AI-assisted support routing can misclassify tickets at rates that compound significantly across languages. A model trained primarily on English data may perform well in English but degrade noticeably across French, Portuguese, or Arabic — without surfacing this gap to the agents relying on it. Industry research on AI trust in enterprise workflows consistently identifies this as a structural failure: not a model problem, but a *transparency* problem.

When an AI classifies a ticket and hands it to a human with a confidence score and no context, agents typically do one of three things:
- Accept it passively — even when their gut says it's wrong
- Override it manually with no data to justify the decision
- Escalate it to avoid accountability entirely

None of these outcomes serve the user or the organization. **TriageAI explores a different model:** an intake tool where every AI decision is legible — its confidence, its reasoning signals, its uncertainty — and where human override is frictionless, documented, and feeds back into the system.

### Why this matters in 2026

The volume of customer support interactions is growing faster than teams can scale. AI-assisted routing is becoming infrastructure, not a feature. But trust in these systems remains fragile — and trust doesn't come from higher accuracy alone. It comes from legibility: agents need to understand what the AI saw before they can meaningfully agree or disagree with it.

---

## 02 — Role, Scope & Constraints

**What I took on:**
- Define the information architecture of the intake queue
- Design the explainability layer — how confidence and reasoning signals are surfaced to agents
- Design the human override flow — how agents correct and document disagreements with the AI
- Design multilingual classification indicators — surfacing per-language model confidence, not just global accuracy
- Prototype the core decision moment: an agent reviewing and acting on an AI suggestion under time pressure

**Explicit scope boundaries:**
- Admin configuration of the AI model: out of scope
- Analytics and reporting dashboards: out of scope
- Mobile view (agent desktop workflow assumed): out of scope
- Email and ticket channel integrations: out of scope

**Constraints that shaped the design:**
- High-density environment — agents process dozens of tickets per shift; cognitive load matters
- Classification review happens in seconds — the UI cannot add friction to the review step
- Override must be one action — no form, no confirmation dialog, no friction that trains agents to avoid correcting errors
- Multilingual content — the interface must handle tickets written in languages the reviewing agent may not speak

---

## 03 — Process & Key Decisions

### Starting from failure modes, not happy paths

Before touching wireframes, I mapped the failure modes of AI-assisted triage. Three patterns emerged from case studies and published UX research on AI trust in enterprise contexts:

**Automation bias:** Agents defer to the AI even when they have a gut feeling something is wrong. This happens when the perceived cost of overriding (filling a form, justifying a correction) is higher than the perceived cost of accepting a wrong classification.

**Confidence theater:** Showing a percentage (e.g., "87% confident") creates false certainty. Agents treat it as a binary — high means correct, low means review — without understanding what drives the score. The number signals certainty without conveying meaning.

**Multilingual blind spots:** Accuracy metrics reported at the model level mask per-language degradation. An agent handling a Portuguese ticket has no way to know the model's Portuguese accuracy is significantly lower than its English accuracy — unless the interface surfaces it explicitly.

These patterns became design constraints, not just background research. Every decision that followed was a direct response to one of them.

### Key Decision 1 — Confidence is not a number

Early sketches surfaced AI confidence as a percentage. This was rejected in the first critique session.

A percentage trains agents to set thresholds ("above 80% means trust it") without engaging with the underlying signal. The design replaced the score with a **ConfidenceBadge** — four states: `high`, `medium`, `low`, `conflict` — paired with visible **SignalTags** showing what the model detected. Examples: "contains billing terminology," "language mismatch detected," "similar to 47 previous cases resolved as → Refund Request."

Agents see what the model saw. They can agree or disagree with the signal, not just with a number they can't interrogate.

### Key Decision 2 — Override must be zero-friction

The first override design included a dropdown and a "Reason for override" required field. It was removed immediately.

When corrective action has friction, agents avoid it — even when they know the classification is wrong. This isn't a behavior problem; it's a design problem. The friction itself is the anti-pattern.

The final design uses an **ApprovalBar** with three states: `locked` (AI suggestion pending review), `active` (agent reviewing), `confirmed` (approved or overridden). Override is a single tap on the current classification, followed by an inline re-selection. The correction is logged automatically. No form. No required field.

### Key Decision 3 — Language confidence is surfaced at the card level

Multilingual handling required a separate visual layer. The final design adds a language indicator and per-language model confidence directly on the **CaseCard** in the queue — visible before the agent opens the ticket.

This means an agent knows, before clicking into a ticket, whether the AI's classification confidence should be adjusted for the ticket's language. The indicator doesn't say "this might be wrong." It says "the model's confidence in French tickets is lower than its global average." The agent applies their own judgment from there.

### Key Decision 4 — Override closes the loop, not just the ticket

When an agent overrides, an **OverridePanel** slides in from the right showing two things: the AI's original classification with its signals, and the agent's selection. The agent confirms in one tap. The system logs the correction.

This isn't presented as a model-retraining feature — that's explicitly out of scope. But the architectural intent is transparent: the correction is data. It exists to be used, not just stored. The UI makes that intent visible.

---

## 04 — Design

*Screens in progress.*

*This section will document the final UI, the explainability layer at full fidelity, and all component states. To be completed once the visual production phase is done.*

---

## 05 — Outcome & Reflection

### What this case demonstrates

TriageAI is a conceptual case. The product is not in production. What it demonstrates is the ability to:

- Define a problem space that goes beyond the surface (AI trust, not just AI interface)
- Make non-obvious design decisions with explicit reasoning — confidence as signal rather than score, zero-friction override, language-aware indicators
- Design for a high-stakes, high-density environment where cognitive load and time pressure are real constraints
- Think in systems — the OverridePanel feeds model improvement; the language indicator changes agent behavior before the ticket is opened; the SignalTags surface reasoning without requiring explanation

**The honest hypotheses:** if deployed, agents who can see the model's reasoning signals — not just its classification — would make better override decisions, faster. Override volume would increase initially (which looks like a failure) and then stabilize as agents trust the system more (which looks like success). These are testable hypotheses. They are not tested results.

### What I would do differently

The scope boundary around mobile was defensible for a first pass, but brittle. Support agents increasingly work across devices. A complete version of this product would need to treat the triage queue as a responsive surface from the start, not a desktop-to-mobile port.

The ConfidenceBadge four-state model also needs real usability testing with working support agents. The hypothesis (signals beat scores) is well-supported in research on AI trust. The specific visual execution of the four states — what makes `conflict` feel different from `low` without adding noise — would need iteration from real usage.

### Workflow with AI

AI assistance supported problem framing, edge-case generation, assumption testing and early copy drafts. I reviewed every output and retained responsibility for the functional rules, system states and final language.

No screens were generated by AI. All technical-functional and interface decisions are mine.
