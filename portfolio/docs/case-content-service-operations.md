# Case content — Service Operations Dashboard
### Texto pronto pra substituir os `[colchetes]` no código. Tom teu, nada inventado. Concept case baseado em experiência real.

---

## BLOCO 0 — Snapshot / TL;DR

- **Problem:** On shift handover, operational information scatters across PMS, email, WhatsApp, notebooks and people's memory — so the incoming shift can't quickly see what's open, what's urgent, and what's already resolved.
- **For whom:** Front-desk and service-operations teams — and everyone downstream: housekeeping, maintenance, shift leads, and ultimately the guest.
- **My role:** Sole designer — problem framing from lived experience, flows, information architecture, system logic, and UI.
- **Delivered:** Core flows, key screens with real states, and a slice of the design system.
- **Expected impact — to validate:** Less information lost at handover; faster context pickup for the incoming shift. *(Hypotheses to test — no numbers until measured.)*
- **Type:** Concept case · 2026

---

## BLOCO 1 — Context & Problem

In a hotel front desk, the day doesn't end — it gets handed over. And the handover is where things quietly break.

The problem was never "logging an incident." It's that the information lives everywhere at once: the PMS, email, a WhatsApp group, a paper notebook, a spreadsheet, a post-it, a verbal "by the way," and — most fragile of all — in the head of whoever just left.

So on a typical night, small things slip: a guest who asked for something and never got it, a maintenance task left pending, a room with a special note, a charge to double-check, a no-show, a key, a late-checkout request, a complaint that started small and grows into a review.

The person taking over can't quickly see what's actually open, what's already resolved, what's urgent, and what was merely *mentioned* but never properly logged. They rebuild context from fragments — and what doesn't get rebuilt, gets dropped.

> *Pull-out:* The handover usually lives nowhere — half in a notebook, half in a chat, half in someone's memory.

---

## BLOCO 2 — Role, scope & constraints

- **Role:** Sole designer. Research from lived experience, flow mapping, information architecture, system logic, screens and UI.
- **Scope:** Concept case based on real operational experience in hotel reception, shift work and front/back office — not a product deployed in a real hotel. The problem is real; the solution is a proposal.
- **Effort:** A few weeks across research, framing the problem, flows, IA, wireframes, UI and refinement.

**Constraints I designed for:**
- **Multilingual teams.** Staff and guests may speak ES, PT, FR or EN — the interface has to stay simple, objective and unambiguous across languages.
- **Mobile + desktop.** Desktop at the counter; quick check on phone or tablet on the move.
- **Tired people on night shifts.** The interface can't rely on memory, patience, or interpretation.
- **Almost no time to log.** If logging an incident is slow, the team falls back to WhatsApp, paper, or "later."
- **Slow connection / heavy systems.** It has to be light, with clear saving — and not feel like *one more tool that adds work.* It has to reduce noise, not add it.

---

## BLOCO 3 — Process

**Research / evidence / assumptions.** Grounded in first-hand experience of reception, shift handover, guest service and hotel operations. What's *evidence*: the scattering of information and the failure points at handover — I lived those. What's *assumption to validate*: that a guided, fast log will actually be adopted under pressure, and that a single "open now" view changes handover behavior. These need testing with real teams.

**Flows / information architecture.** Before → after: from information scattered across tools and memory, to one operational view of what's open. Core flows: *log an incident · hand over a shift · see what's open now · resolve / update with history.*

**Key design decisions:**

**01 — Status and urgency before detail.**
- *Problem:* at handover the person is tired or rushed and can't read everything in depth.
- *Decision:* put status, priority, affected area and next action up front.
- *Trade-off:* gave up a visually cleaner screen — some information has to show fast, even if it takes space.

**02 — Guided logging, not a free-text box.**
- *Problem:* when everything is free text, everyone writes differently — later it's hard to read, filter, or chase resolution.
- *Decision:* simple structured fields — category, room, area, priority, owner, status, short description.
- *Trade-off:* gave up total freedom to write anything, because too much freedom becomes operational mess.

**03 — Designed for a tired shift, not for a pretty demo.**
- *Problem:* late at night or end of shift, there's no energy to interpret a complex interface.
- *Decision:* clear contrast, strong hierarchy, few steps, direct language.
- *Trade-off:* gave up sophisticated microinteractions and visual flourishes where they didn't help the real work.

---

## BLOCO 4 — The design & system

The main screen is an operational dashboard. On open, it shows what matters *now*: open incidents, urgent items, pending work by area, next actions, and a handover summary. Not pretty reports first — operational clarity first: *"what do I need to know to take over the shift without getting lost?"*

UI states designed (not just the happy path): **empty · loading · error · success · edge cases** — the states a tired user actually hits. Design-system slice: structured incident card, status/priority tokens, the fields used in guided logging — shown as a small specimen, because consistency here is what makes it implementable.

*(Honest empty frames where screens go: "flow: before → after — to add", "system map — to add", "decision states — to add".)*

---

## BLOCO 5 — Outcome & reflection

- **Expected impact — to validate:** less information lost at handover; faster context pickup for the incoming shift; less rework between reception, housekeeping and maintenance; small incidents not staying invisible until they become bigger complaints. *(Hypotheses, not results.)*
- **What I'd measure next:** incidents left open per shift, time to resolution, how many get reopened, how many are dropped at handover, which areas generate most pending work, and how long it takes to log one incident.
- **Trade-offs & next steps:** I kept this concept focused on the handover problem. Analytics, reporting and PMS integration were deliberately left out — they matter, but building them before validating the core flow would add complexity the product hasn't earned yet. The next step is testing the guided log and the "open now" view with a real shift, then deciding what to build around them.
- **Reflection:** designing for tired people at 3am taught me that UX isn't about making things pretty or modern. Sometimes the best design is the one that reduces mental effort, removes ambiguity, and helps a person do the right thing *even when they're at their limit.*
- **On AI-assisted workflow:** I used AI to move faster through research synthesis, structuring the case, and iterating on copy and layout. The problem framing, the design decisions and their trade-offs, and the judgment on what to leave out stayed mine. AI compressed the busywork — it didn't make the calls.

---

### O que ainda é seu (2 linhas, marquei acima)
1. Trade-offs & next steps — o que ficou fora de propósito.
2. A nota de AI-assisted — onde a IA ajudou e onde o julgamento foi teu.
