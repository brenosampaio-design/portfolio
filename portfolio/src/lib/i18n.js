// ── Translations ─────────────────────────────────────────────────────────
// *word* inside a string = <span className="accent"> (italic serif).
// Japanese annotations (間, 渋) stay unchanged across languages.
import { createElement } from 'react';

const en = {
  nav: { work: "Work", about: "About", approach: "Approach", contact: "Contact" },
  availability: "Available",

  hero: {
    title:  "Product designer with a *technical* edge.",
    lead:   "I design operational tools for service teams — and I care how they get built.",
    cta1:   "View selected work",
    cta2:   "Learn about my approach",
  },

  work: {
    eyebrow:    "Selected work",
    heading:    "Selected work",
    subheading: "Two cases, shown in full — problem first.",
    more:       "More case studies in progress — honest pieces beat a padded grid.",
  },

  approach: {
    eyebrow:    "Approach",
    heading:    "Design with *purpose*, build with *perspective*.",
    subheading: "My approach connects user needs, business goals and technical reality to create products that are useful, usable and built to last.",
  },

  process: {
    eyebrow:    "Process",
    heading:    "A clear process. Built for *impact*.",
    subheading: "A structured way to turn operational complexity into clarity. Each step builds on the last — useful, usable, and built to ship.",
  },

  principles: {
    eyebrow:    "Principles",
    heading:    "Guiding choices. *Creating impact*.",
    subheading: "These principles shape the way I think, design and collaborate. Not rules, but a compass for meaningful work.",
  },

  about: {
    eyebrow: "About Breno",
    heading: "Product designer with a *strategic* and *operational* mindset.",
    lead:    "I help teams turn complexity into clarity and ideas into products that create value. My work sits at the intersection of strategy, experience and execution.",
    cta:     "Read the full story",
    facts: {
      basedIn:       "Based in",
      working:       "Working",
      workingValue:  "Remotely · global projects",
      languages:     "Languages",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Let's connect",
    heading:   "Let's create products with *clarity* and *purpose*.",
    body:      "I'm currently available for new opportunities. If the problem is real, I'd like to hear about it.",
    email:     "Email",
    location:  "Location",
    localTime: "Local time",
  },

  footer: {
    location:  "Valencia, Spain · working remotely",
    elsewhere: "Elsewhere",
    tagline:   "Good design is quiet, but it leaves a mark.",
  },

  aboutPage: {
    eyebrow:     "About Breno",
    heading:     "Product designer with a *strategic* and *operational* mindset.",
    lead:        "I came to design from inside the operation, not from the outside looking in — and that's still how I work.",
    downloadCv:  "Download CV",
    facts: {
      basedIn:       "Based in",
      working:       "Working",
      workingValue:  "Remotely · global projects",
      languages:     "Languages",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
      status:        "Status",
      statusValue:   "Open to new work · in transition",
    },
    storyEyebrow: "The path",
    storyHeading: "From running operations to *designing* them.",
    story: [
      "For years my job was the operation itself — service operations, hotel reception, shift work, the front and back office where things actually happen. I was the person taking over a shift with half the context missing, or handing one over hoping nothing would slip.",
      "That's where I learned what software does to people under pressure. A good tool disappears and lets you do the work. A bad one becomes one more thing to manage. I started designing because I wanted to build the first kind.",
      "Today I work as a product designer with an implementation sensibility: I think in systems, I build and use design systems, and I work AI-assisted to move faster through research, structure and iteration — while keeping the design judgment my own. I earned the Google UX Design Certificate along the way, but the foundation is the years I spent inside the problems I now design for.",
      "I read and work across Portuguese (native), Spanish (fluent), French (professional), Italian (intermediate) and English. I'm based in {location}, working remotely, and currently in transition — open to product roles and collaborations where the problems are real.",
    ],
    ctaWork:    "View selected work",
    ctaContact: "Get in touch",
  },

  labels: {
    intro:      "Intro",
    work:       "Work",
    approach:   "Approach",
    process:    "Process",
    principles: "Principles",
    about:      "About",
    contact:    "Contact",
    thePath:    "The path",
  },

  languageNames: {
    Portuguese: "Portuguese", Spanish: "Spanish", French: "French",
    Italian: "Italian", English: "English",
  },
  languageLevels: {
    "Native": "Native", "Fluent": "Fluent",
    "Professional / Fluent": "Professional", "Intermediate": "Intermediate",
    "Professional working": "Professional",
  },

  projects: [
    {
      slug: "service-operations", category: "Concept case",
      title: "Service Operations Dashboard",
      problem: "One operational view of what's open at shift handover, so information stops getting lost between tools, paper and memory.",
      role: "Sole designer", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Concept case", title: "TriageAI",
      problem: "Human-controlled AI intake for multilingual requests — AI structures and ranks, a human approves every reply that goes out.",
      role: "Sole designer", year: "2026", href: "/work/triageai",
    },
  ],

  approachItems: [
    { title: "Understand the work deeply", description: "I start inside the operation — behaviours, constraints, and where things actually break — before proposing anything." },
    { title: "Anchor in real context", description: "I align every decision with how the business actually runs and what's feasible, not how it looks on a slide." },
    { title: "Think in systems, not screens", description: "I design the structure first — information architecture, flows, states and rules — so it stays coherent as it grows." },
    { title: "Design with clarity and restraint", description: "I simplify without dumbing down. Hierarchy, content and interaction over decoration — clear, not clever." },
    { title: "Build with implementation in mind", description: "I design knowing it has to ship, and work with engineering through edge cases and handoff so it gets built right." },
  ],

  processSteps: [
    { title: "Discover", icon: "search", description: "Understand the operation, the people, and the constraints before proposing anything.", items: ["Talk to the people doing the work", "Map where information lives", "Find the failure points", "Separate evidence from assumption"] },
    { title: "Frame",   icon: "frame",  description: "Turn the mess into a clear problem worth solving, with explicit scope.", items: ["Define the real problem", "Set what's in and out of scope", "Name the constraints", "Decide what success looks like"] },
    { title: "Systems", icon: "sitemap", description: "Design the structure before the screens — the rules that keep things consistent.", items: ["Information architecture", "Core flows", "States and rules", "Tokens and components"] },
    { title: "Interface", icon: "layout", description: "Make it clear, fast, and honest — designed for the worst moment, not the demo.", items: ["Hierarchy and contrast", "Guided over free-form", "Every state, not just the happy path", "Plain language"] },
    { title: "Validate", icon: "check-circle", description: "Test the assumptions with real people and iterate on what breaks.", items: ["Put it in front of real users", "Watch behaviour, not opinions", "Iterate on what breaks", "Keep what holds"] },
    { title: "Deliver",  icon: "send",  description: "Hand off so it ships as designed — build-aware, with the edge cases written down.", items: ["Build-aware specs", "Work with engineering", "Edge cases documented", "Support through implementation"] },
  ],

  principlesItems: [
    { annotation: "間 ma",    principle: "Clarity over noise",          description: "I remove what's unnecessary so what matters can speak." },
    { annotation: "",         principle: "Usefulness first",            description: "I design with purpose, solving real problems for real people." },
    { annotation: "渋 shibui", principle: "Restraint with intention",    description: "I choose less, but with precision — restraint is a feature, not a shortage." },
    { annotation: "",         principle: "Design for the worst moment", description: "The real test isn't the demo — it's a tired person at 3am. I design for them." },
    { annotation: "",         principle: "Systems thinking",            description: "I see the whole, then design each part to belong and stay consistent." },
    { annotation: "",         principle: "Build-aware craft",           description: "I care how it's built, because that's what decides whether it ships as designed." },
  ],

  cases: {
    back:        "Selected work",
    conceptCase: "Concept case",
    snapshot: {
      problem: "Problem", forWhom: "For whom", myRole: "My role",
      delivered: "Delivered", impact: "Expected impact — to validate",
      hypotheses: "Hypotheses to test — no numbers until measured.",
    },
    sectionNums: {
      context: "01 — Context & problem",
      scope:   "02 — Role, scope & constraints",
      process: "03 — Process",
      design:  "04 — The design & system",
      outcome: "05 — Outcome & reflection",
    },
    roleLabel: "Role.", scopeLabel: "Scope.", effortLabel: "Effort.",
    constraintsHeading: "Constraints I designed for",
    decisionsHeading:   "Key design decisions",
    measureHeading:     "What I'd measure next",
    statesHeading:      "States I designed for",
    scopeHeading:       "A real problem, an honest proposal.",
    moreComing:  "More case studies coming as I document them.",
    getInTouch:  "Get in touch",

    serviceOps: {
      tag: "Service operations",
      lead: "One operational view of what’s open at shift handover — so information stops getting lost between PMS, chat, paper and memory.",
      contextHeading: "The day doesn’t end. It gets handed over.",
      processHeading: "Evidence I lived, assumptions to validate.",
      designHeading:  "Operational clarity before pretty reports.",
      outcomeHeading: "Hypotheses, not results.",
      snapshotProblem:   "On shift handover, operational information scatters across PMS, email, WhatsApp, notebooks and people’s memory — so the incoming shift can’t quickly see what’s open, what’s urgent, and what’s already resolved.",
      snapshotForWhom:   "Front-desk and service-operations teams — and everyone downstream: housekeeping, maintenance, shift leads, and ultimately the guest.",
      snapshotMyRole:    "Sole designer — problem framing from lived experience, flows, information architecture, system logic, and UI.",
      snapshotDelivered: "Core flows, key screens with real states, and a slice of the design system.",
      snapshotImpact:    "Less information lost at handover; faster context pickup for the incoming shift.",
      quote: "The handover usually lives nowhere — half in a notebook, half in a chat, half in someone’s memory.",
      contextProse: [
        "In a hotel front desk, the day doesn’t end — it gets handed over. And the handover is where things quietly break.",
        "The problem was never “logging an incident.” It’s that the information lives everywhere at once: the PMS, email, a WhatsApp group, a paper notebook, a spreadsheet, a post-it, a verbal “by the way,” and — most fragile of all — in the head of whoever just left.",
        "So on a typical night, small things slip: a guest who asked for something and never got it, a maintenance task left pending, a room with a special note, a charge to double-check, a no-show, a key, a late-checkout request, a complaint that started small and grows into a review.",
        "The person taking over can’t quickly see what’s actually open, what’s already resolved, what’s urgent, and what was merely mentioned but never properly logged. They rebuild context from fragments — and what doesn’t get rebuilt, gets dropped.",
      ],
      roleText:   "Sole designer. Research from lived experience, flow mapping, information architecture, system logic, screens and UI.",
      scopeText:  "Concept case based on real operational experience in hotel reception, shift work and front/back office — not a product deployed in a real hotel. The problem is real; the solution is a proposal.",
      effortText: "A few weeks across research, framing the problem, flows, IA, wireframes, UI and refinement.",
      processProse: [
        { label: "Research, evidence, assumptions.", text: "Grounded in first-hand experience of reception, shift handover, guest service and hotel operations. What’s evidence: the scattering of information and the failure points at handover — I lived those. What’s assumption to validate: that a guided, fast log will actually be adopted under pressure, and that a single “open now” view changes handover behavior. These need testing with real teams." },
        { label: "Flows, information architecture.", text: "Before → after: from information scattered across tools and memory, to one operational view of what’s open. Core flows: log an incident · hand over a shift · see what’s open now · resolve and update with history." },
      ],
      dsSliceHeading: "Design-system slice — incident card",
      dsSliceNote:    "A small specimen, shown on purpose: structured fields and a fixed set of states are what let the team log fast and read each other’s entries without guessing.",
      mobileHeading:  "On mobile — fast, guided logging",
      mobileProse:    "On the move, the same structured fields make logging a few taps, not a paragraph. Quick picks over free text — so an entry made in ten seconds is still readable by the next shift.",
      designProse: [
        "The main screen is an operational dashboard. On open, it shows what matters now: open incidents, urgent items, pending work by area, next actions, and a handover summary. Not pretty reports first — operational clarity first: what do I need to know to take over the shift without getting lost?",
        "UI states designed (not just the happy path): empty · loading · error · success · edge cases — the states a tired user actually hits. The design-system slice below shows the structured incident card, status and priority tokens, and the fields used in guided logging — because consistency here is what makes it implementable.",
      ],
      outcomeProse: {
        impact:     { label: "Expected impact — to validate.", text: "Less information lost at handover; faster context pickup for the incoming shift; less rework between reception, housekeeping and maintenance; small incidents not staying invisible until they become bigger complaints. Hypotheses, not results." },
        tradeoffs:  { label: "Trade-offs & next steps.", text: "I kept this concept focused on the handover problem. Analytics, reporting and PMS integration were deliberately left out — they matter, but building them before validating the core flow would add complexity the product hasn’t earned yet. The next step is testing the guided log and the “open now” view with a real shift, then deciding what to build around them." },
        reflection: { label: "Reflection.", text: "Designing for tired people at 3am taught me that UX isn’t about making things pretty or modern. Sometimes the best design is the one that reduces mental effort, removes ambiguity, and helps a person do the right thing even when they’re at their limit." },
        different:  { label: "What I’d do differently.", text: "If I were to redo this, I’d test the logging flow first, before investing in the dashboard — the dashboard assumes adoption that the log hasn’t proven yet. Starting with the smallest testable unit would validate the core behaviour earlier and inform whether the full view earns its complexity." },
        ai:         { label: "On AI-assisted workflow.", text: "I used Claude to move faster through structuring the case, iterating on copy, and refining how I described the problem. Specifically: drafting section text, iterating on the language of design decisions, and checking the framing of operational constraints. What stayed mine: the framing rooted in lived operational experience, the system logic and information architecture, the trade-off decisions on what was essential vs. what added complexity without earned benefit, and the judgment on what to cut. AI compressed the writing work — every design decision reflected here was mine." },
      },
      constraints: [
        { icon: "globe",    term: "Multilingual teams",           desc: "Staff and guests may speak ES, PT, FR or EN — the interface has to stay simple, objective and unambiguous across languages." },
        { icon: "devices",  term: "Mobile + desktop",             desc: "Desktop at the counter; a quick check on phone or tablet on the move." },
        { icon: "moon",     term: "Tired people on night shifts", desc: "The interface can’t rely on memory, patience, or interpretation." },
        { icon: "bolt",     term: "Almost no time to log",        desc: "If logging an incident is slow, the team falls back to WhatsApp, paper, or “later.”" },
        { icon: "wifi",     term: "Slow connection, heavy systems", desc: "It has to be light, with clear saving — and reduce noise, not add it. Not one more tool that adds work." },
      ],
      decisions: [
        { name: "Status and urgency before detail", problem: "At handover the person is tired or rushed and can’t read everything in depth.", decision: "Put status, priority, affected area and next action up front.", tradeoff: "Gave up a visually cleaner screen — some information has to show fast, even if it takes space." },
        { name: "Guided logging, not a free-text box", problem: "When everything is free text, everyone writes differently — later it’s hard to read, filter, or chase resolution.", decision: "Simple structured fields — category, room, area, priority, owner, status, short description.", tradeoff: "Gave up total freedom to write anything, because too much freedom becomes operational mess." },
        { name: "Designed for a tired shift, not for a pretty demo", problem: "Late at night or end of shift, there’s no energy to interpret a complex interface.", decision: "Clear contrast, strong hierarchy, few steps, direct language.", tradeoff: "Gave up sophisticated microinteractions and visual flourishes where they didn’t help the real work." },
      ],
      measure: [
        { metric: "Incidents left open per shift",          reveals: "Is the handover clearing work, or just carrying it forward?" },
        { metric: "Time to resolution",                    reveals: "Are things getting fixed, or only logged?" },
        { metric: "How many get reopened",                 reveals: "Did “resolved” really mean resolved?" },
        { metric: "How many are dropped at handover",      reveals: "The core failure — is it shrinking?" },
        { metric: "Which areas generate the most pending work", reveals: "Where the operation actually strains." },
        { metric: "How long it takes to log one incident", reveals: "If it’s slow, the team falls back to WhatsApp." },
      ],
    },

    triageai: {
      tag: "AI-native intake",
      lead: "Multilingual requests arrive from everywhere, unranked. TriageAI structures and prioritises them with AI — and keeps a human in control of every reply that goes out.",
      contextHeading:  "The message arrived. Now what?",
      processHeading:  "Evidence and assumptions, kept honest.",
      designHeading:   "Built to be checked, not just trusted.",
      outcomeHeading:  "Hypotheses, not results.",
      sysGateHeading:  "The system, with the human gate marked",
      analysisPanelHeading: "The analysis panel — verify, then approve",
      correctionHeading:    "When the AI is wrong — the correction",
      dsSliceHeading:  "Design-system slice — case card & confidence",
      dsSliceNote:     "The case card, confidence tokens and the analysis-panel pattern are the reusable spine: they put uncertainty in plain view so a human can verify fast and approve with their eyes open.",
      mobileHeading:   "On mobile — review on the go",
      mobileProse:     "The same control principle on a phone: confidence in plain view, the case readable at a glance, and the two actions that matter — approve or correct. Quick to act on, impossible to send by accident.",
      snapshotProblem:   "Inbound requests arrive across channels and languages (ES/PT/FR/EN), unstructured and unranked — so urgent items wait, context is lost, and replies go out inconsistent.",
      snapshotForWhom:   "Small service and support teams handling multilingual inbound at volume — and the customers waiting on the other side.",
      snapshotMyRole:    "Sole designer — problem framing, flows, information architecture, the human-AI interaction model, UI, and a design-system slice.",
      snapshotDelivered: "Core triage flow, key screens with real states (including when the AI is wrong), and a design-system slice.",
      snapshotImpact:    "Faster pickup of urgent cases; fewer items lost; more consistent multilingual replies; fewer wrong responses reaching customers.",
      evidenceLabel: "Why this matters — external market data, not TriageAI’s results",
      evidenceSrc:   "Sources: Salesforce, State of the Connected Customer · CSA Research · Lorikeet CX, 2026. Figures frame the market problem — they are not measured outcomes of this concept.",
      quote: "Speed and language stopped being service niceties — they decide whether the customer stays. But unattended AI doesn’t earn trust; a human still has to own the reply.",
      contextProse: [
        "A request can arrive by WhatsApp, email or a web form, in Spanish, Portuguese, French or English, at any hour. Each one lands unstructured — no priority, no category, no clear read on what the person actually needs.",
        "A small team reads every message, guesses the language, guesses the urgency, decides who owns it, and tries to keep replies consistent. Under volume the predictable failure follows: the urgent message sits behind ten trivial ones, the same question gets three different answers, and anything in a language nobody on shift reads well gets pushed to “later” — and later becomes never.",
        "The real problem isn’t replying. It’s that triage happens in someone’s head, under pressure, with no structure — so attention flows to whatever is loudest, not whatever matters most. And the obvious fix, “just automate it,” fails its own test: unattended automation doesn’t earn trust, it just moves the failure somewhere quieter.",
      ],
      roleText:   "Sole designer — problem framing, flows, information architecture, the human-AI interaction model, screens and UI.",
      scopeText:  "Concept case. The problem is real — multilingual inbound triage; the product is a proposal, not a deployed or trained system. AI behaviour is designed and illustrated, not live.",
      effortText: "A few weeks across framing, the AI interaction model, flows, UI, and refinement.",
      processProse: [
        { label: "Evidence vs. assumption.", text: "What I genuinely know: the multilingual service reality, inbound chaos, inconsistent replies across languages, the cost of a request slipping — plus the external market data above. What needs testing: that people trust and act on the confidence signals instead of rubber-stamping, that the explanation layer makes verification fast enough, and that approval-before-send is worth the speed cost at volume. Those are assumptions to validate with a real team." },
        { label: "Flows, information architecture.", text: "Before → after: from “read everything, triage in your head, reply inconsistently” to “AI structures and ranks, a human verifies and approves, replies stay consistent.” Core loop: message in → AI classifies → human reviews with confidence visible → approve or correct → send and logged." },
      ],
      designProse: [
        "The main screen is a triage inbox. On open, it surfaces what needs a human now: low-confidence flags, anything urgent, and anything missing the information needed to respond. Each case opens into an analysis panel — language, intent, urgency, missing info, and a proposed reply — with the confidence signal in plain view and, where languages differ, a back-translation for the reviewer.",
        "The human’s job isn’t to redo the work; it’s to verify, correct if needed, and approve.",
      ],
      designEmphasis: { low: "low confidence", caught: "the AI got it wrong and a human caught it." },
      outcomeProse: {
        impact:     { label: "Expected impact — to validate.", text: "Urgent cases picked up faster; fewer requests lost across channels and languages; more consistent replies; fewer wrong responses reaching customers, because low-confidence items are caught. Hypotheses, not results." },
        tradeoffs:  { label: "Trade-offs & next steps.", text: "I kept this focused on the triage-and-approve loop. Auto-resolution, analytics dashboards and CRM integration were left out on purpose — they matter, but automating further before proving people trust the confidence signals would build speed on an unverified foundation. Next: test the confidence signals and the approval gate with a real team, and check whether the explanation and back-translation layer actually makes verification faster." },
        reflection: { label: "Reflection.", text: "Designing AI well isn’t about making it look magical — it’s about keeping a human in control of decisions that reach real people, especially across languages where a wrong word lands differently. The honesty about when the AI is unsure is the design, not a flaw in it." },
        ai:         { label: "On AI-assisted workflow.", text: "I used Claude to move faster through research synthesis, structuring the case, and iterating on copy. Specifically: drafting the evidence framing, stress-testing the interaction model logic in writing, and iterating the language on each design decision. What stayed mine: the problem framing, the human-in-the-loop model itself, the trade-off calls on what to include vs. leave out, and the judgment on when the concept was done. AI compressed the writing work — it didn’t make the design calls." },
      },
      constraints: [
        { icon: "alert",        term: "The AI will be wrong sometimes", desc: "A triage tool that hides that is dangerous. Wrong classifications have to be visible and easy to catch, not buried under a confident UI." },
        { icon: "globe",        term: "Multilingual by default",        desc: "ES, PT, FR and EN arrive mixed. The system detects language so a reviewer is never asked to approve a reply they can’t read." },
        { icon: "bolt",         term: "Speed vs. control",              desc: "The point is saving time — but a human who has to re-read everything saves none. Verification has to be fast, not optional." },
        { icon: "check-circle", term: "Accountability",                 desc: "In service, someone answers for what was sent. Who approved what stays traceable." },
        { icon: "sitemap",      term: "Volume",                        desc: "Triage only matters when there’s too much to read. The interface has to scale attention, not just list items." },
      ],
      decisions: [
        { name: "The AI shows how sure it is — it never pretends to be certain.", problem: "Most AI tools present output as fact. People rubber-stamp it, and wrong classifications slip straight to the customer.", decision: "Every classification carries a confidence signal. Low-confidence items are flagged “needs review” and pulled to the top of attention, not blended in.", tradeoff: "Gave up the clean “it just works” magic. Admitting uncertainty is less impressive in a demo — but it’s what catches errors before they reach a customer." },
        { name: "Nothing leaves without a human. The default action is review, not send.", problem: "Full automation is faster, but a wrong auto-reply — wrong language, tone, or answer — is expensive and hard to walk back.", decision: "The AI drafts and proposes; it never sends. A human approves every outgoing reply. The primary action is review, not send.", tradeoff: "Gave up end-to-end automation speed for control and reversibility. One wrong send to a customer outweighs the seconds saved by automating it away." },
        { name: "The AI explains itself in a glance, so the human verifies instead of re-reading.", problem: "A human can’t approve what they can’t understand. A black box forces blind trust or a full re-read — which kills the time the tool was meant to save.", decision: "Each case shows why: detected language, intent, what triggered the urgency, and what’s still missing. Verification becomes a glance.", tradeoff: "Gave up screen simplicity for an explanation layer. More on screen — but it’s what makes fast, confident approval possible." },
        { name: "Language is detected and made explicit, and the reviewer can verify across it.", problem: "A reviewer may not read the customer’s language well. Approving a reply you can’t fully read is blind trust wearing a different hat.", decision: "Detect and label the language. Show the drafted reply in the customer’s language alongside a back-translation in the reviewer’s, so meaning and tone are verified before approval.", tradeoff: "More interface, more processing per case. But approving a message you can’t read defeats the whole human-control principle — so the cost is worth it." },
        { name: "Confidence signals are designed for color blindness — status is never communicated by color alone.", problem: "Confidence levels expressed only through color (yellow = low, green = high) are invisible to color-blind reviewers and fail WCAG 2.1 AA — a serious problem for a tool whose entire purpose is to catch errors before they reach a customer.", decision: "Each confidence signal pairs a text label and icon with a color token that meets 4.5:1 minimum contrast ratio on all background combinations. Status is always communicated through label + icon + color — never color alone.", tradeoff: "More tokens to keep consistent across the design system. Worth it: a triage tool the reviewer can’t reliably read defeats the whole point of surfacing AI uncertainty." },
      ],
      evidence: [
        { num: 65, prefix: "~", suffix: "%", desc: "of customers now expect faster responses than they did five years ago." },
        { num: 60, prefix: "~", suffix: "%", desc: "rarely or never buy from sources that aren’t in their own language." },
        { num: 14, prefix: "~", suffix: "%", desc: "of self-service interactions actually resolve — deflection without resolution fails the customer." },
      ],
      measure: [
        { metric: "Time to first response on urgent cases",              reveals: "Is triage moving urgent work up, or just relabeling it?" },
        { metric: "How often the human overrides the AI — and on what", reveals: "Shows exactly where the AI is still weak." },
        { metric: "How many low-confidence flags were genuinely wrong",   reveals: "Is the confidence signal calibrated, or just noise?" },
        { metric: "Replies handled per shift vs. the manual baseline",    reveals: "Does the approval gate cost more than it saves?" },
        { metric: "How many cases stalled waiting on missing information", reveals: "Is the system surfacing the gaps, or hiding them?" },
        { metric: "Consistency of replies to the same question across languages", reveals: "Does the back-translation actually hold meaning?" },
      ],
    },
  },
};

// ── Español ─────────────────────────────────────────────────────────────
const es = {
  nav: { work: "Trabajo", about: "Sobre mí", approach: "Enfoque", contact: "Contacto" },
  availability: "Disponible",

  hero: {
    title:  "Product designer con perspectiva *técnica*.",
    lead:   "Diseño herramientas operativas para equipos de servicio — y me importa cómo se construyen.",
    cta1:   "Ver trabajos seleccionados",
    cta2:   "Conocer mi enfoque",
  },

  work: {
    eyebrow:    "Trabajos seleccionados",
    heading:    "Trabajos seleccionados",
    subheading: "Dos casos completos — el problema primero.",
    more:       "Más casos de estudio en proceso — piezas honestas valen más que una galería rellena.",
  },

  approach: {
    eyebrow:    "Enfoque",
    heading:    "Diseñar con *propósito*, construir con *perspectiva*.",
    subheading: "Mi enfoque conecta las necesidades del usuario, los objetivos del negocio y la realidad técnica para crear productos útiles, usables y duraderos.",
  },

  process: {
    eyebrow:    "Proceso",
    heading:    "Un proceso claro. Construido para el *impacto*.",
    subheading: "Una forma estructurada de convertir la complejidad operativa en claridad. Cada paso se apoya en el anterior — útil, usable y listo para entregar.",
  },

  principles: {
    eyebrow:    "Principios",
    heading:    "Elecciones que guían. *Impacto real*.",
    subheading: "Estos principios dan forma a mi manera de pensar, diseñar y colaborar. No son reglas, sino una brújula para un trabajo con sentido.",
  },

  about: {
    eyebrow: "Sobre Breno",
    heading: "Product designer con mentalidad *estratégica* y *operativa*.",
    lead:    "Ayudo a equipos a convertir la complejidad en claridad e ideas en productos que crean valor. Mi trabajo está en la intersección de estrategia, experiencia y ejecución.",
    cta:     "Leer la historia completa",
    facts: {
      basedIn:       "Ubicación",
      working:       "Modalidad",
      workingValue:  "Remoto · proyectos globales",
      languages:     "Idiomas",
      cert:          "Certificación",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Conectemos",
    heading:   "Creemos productos con *claridad* y *propósito*.",
    body:      "Estoy disponible para nuevas oportunidades. Si el problema es real, me gustaría escucharlo.",
    email:     "Correo",
    location:  "Ubicación",
    localTime: "Hora local",
  },

  footer: {
    location:  "Valencia, España · trabajo remoto",
    elsewhere: "En otras redes",
    tagline:   "El buen diseño es silencioso, pero deja huella.",
  },

  aboutPage: {
    eyebrow:    "Sobre Breno",
    heading:    "Product designer con mentalidad *estratégica* y *operativa*.",
    lead:       "Llegué al diseño desde dentro de la operación, no desde fuera mirando hacia adentro — y así sigo trabajando.",
    downloadCv: "Descargar CV",
    facts: {
      basedIn:       "Ubicación",
      working:       "Modalidad",
      workingValue:  "Remoto · proyectos globales",
      languages:     "Idiomas",
      cert:          "Certificación",
      certValue:     "Google UX Design Certificate",
      status:        "Estado",
      statusValue:   "Abierto a nuevas oportunidades · en transición",
    },
    storyEyebrow: "El camino",
    storyHeading: "De gestionar operaciones a *diseñarlas*.",
    story: [
      "Durante años mi trabajo fue la operación en sí — operaciones de servicio, recepción de hotel, trabajo por turnos, el front y back office donde las cosas realmente pasan. Era la persona que tomaba un turno con la mitad del contexto faltando, o que lo entregaba esperando que nada se escapara.",
      "Ahí aprendí lo que el software le hace a las personas bajo presión. Una buena herramienta desaparece y te deja hacer el trabajo. Una mala se convierte en una cosa más que gestionar. Empecé a diseñar porque quería construir la primera.",
      "Hoy trabajo como product designer con sensibilidad hacia la implementación: pienso en sistemas, construyo y uso design systems, y trabajo con IA para avanzar más rápido en investigación, estructura e iteración — manteniendo mi propio criterio de diseño. Obtuve el Google UX Design Certificate por el camino, pero la base son los años que pasé dentro de los problemas que ahora diseño.",
      "Leo y trabajo en portugués (nativo), español (fluido), francés (profesional), italiano (intermedio) e inglés. Estoy basado en {location}, trabajando de forma remota, y actualmente en transición — abierto a roles de producto y colaboraciones donde los problemas son reales.",
    ],
    ctaWork:    "Ver trabajos seleccionados",
    ctaContact: "Escribir",
  },

  labels: {
    intro:      "Intro",
    work:       "Trabajo",
    approach:   "Enfoque",
    process:    "Proceso",
    principles: "Principios",
    about:      "Sobre mí",
    contact:    "Contacto",
    thePath:    "El camino",
  },

  languageNames: {
    Portuguese: "Portugués", Spanish: "Español", French: "Francés",
    Italian: "Italiano", English: "Inglés",
  },
  languageLevels: {
    "Native": "Nativo", "Fluent": "Fluido",
    "Professional / Fluent": "Profesional", "Intermediate": "Intermedio",
    "Professional working": "Profesional",
  },

  projects: [
    {
      slug: "service-operations", category: "Caso conceptual",
      title: "Service Operations Dashboard",
      problem: "Una vista operativa de lo que está abierto al cambio de turno, para que la información deje de perderse entre herramientas, papel y memoria.",
      role: "Diseñador en solitario", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Caso conceptual", title: "TriageAI",
      problem: "Gestión de solicitudes multilingüe controlada por personas — la IA estructura y prioriza, un humano aprueba cada respuesta antes de enviarla.",
      role: "Diseñador en solitario", year: "2026", href: "/work/triageai",
    },
  ],

  approachItems: [
    { title: "Entender el trabajo en profundidad", description: "Empiezo dentro de la operación — comportamientos, restricciones y dónde las cosas realmente fallan — antes de proponer nada." },
    { title: "Anclar en el contexto real", description: "Alineo cada decisión con cómo funciona realmente el negocio y qué es viable, no con cómo queda en una presentación." },
    { title: "Pensar en sistemas, no en pantallas", description: "Diseño la estructura primero — arquitectura de información, flujos, estados y reglas — para que se mantenga coherente a medida que crece." },
    { title: "Diseñar con claridad y contención", description: "Simplifico sin empobrecer. Jerarquía, contenido e interacción sobre decoración — claro, no ingenioso." },
    { title: "Construir pensando en la implementación", description: "Diseño sabiendo que tiene que funcionar, y trabajo con ingeniería en los casos límite y el handoff para que se construya bien." },
  ],

  processSteps: [
    { title: "Descubrir", icon: "search",       description: "Entender la operación, las personas y las restricciones antes de proponer nada.",         items: ["Hablar con quienes hacen el trabajo", "Mapear dónde vive la información", "Encontrar los puntos de fallo", "Separar evidencia de suposición"] },
    { title: "Definir",   icon: "frame",        description: "Convertir el caos en un problema claro que vale la pena resolver, con alcance explícito.", items: ["Definir el problema real", "Establecer qué entra y qué queda fuera", "Nombrar las restricciones", "Decidir cómo se ve el éxito"] },
    { title: "Sistemas",  icon: "sitemap",      description: "Diseñar la estructura antes que las pantallas — las reglas que mantienen la coherencia.",   items: ["Arquitectura de información", "Flujos principales", "Estados y reglas", "Tokens y componentes"] },
    { title: "Interfaz",  icon: "layout",       description: "Hacerlo claro, rápido y honesto — diseñado para el peor momento, no para la demo.",         items: ["Jerarquía y contraste", "Guiado, no libre", "Todos los estados, no solo el camino feliz", "Lenguaje claro"] },
    { title: "Validar",   icon: "check-circle", description: "Probar los supuestos con personas reales e iterar en lo que falla.",                        items: ["Mostrarlo a usuarios reales", "Observar comportamientos, no opiniones", "Iterar en lo que falla", "Mantener lo que funciona"] },
    { title: "Entregar",  icon: "send",         description: "Hacer el handoff para que se construya como se diseñó, con los casos límite documentados.",  items: ["Specs orientadas al build", "Trabajar con ingeniería", "Casos límite documentados", "Acompañar durante la implementación"] },
  ],

  principlesItems: [
    { annotation: "間 ma",    principle: "Claridad sobre ruido",          description: "Elimino lo innecesario para que lo que importa pueda hablar." },
    { annotation: "",         principle: "Utilidad primero",              description: "Diseño con propósito, resolviendo problemas reales para personas reales." },
    { annotation: "渋 shibui", principle: "Contención con intención",      description: "Elijo menos, pero con precisión — la contención es una característica, no una carencia." },
    { annotation: "",         principle: "Diseñar para el peor momento",  description: "La prueba real no es la demo — es una persona cansada a las 3am. Diseño para ellos." },
    { annotation: "",         principle: "Pensamiento sistémico",         description: "Veo el todo y diseño cada parte para que pertenezca y sea coherente." },
    { annotation: "",         principle: "Craft consciente de la implementación", description: "Me importa cómo se construye, porque eso decide si se entrega como fue diseñado." },
  ],

  cases: {
    back:        "Trabajos seleccionados",
    conceptCase: "Caso conceptual",
    snapshot: {
      problem: "Problema", forWhom: "Para quién", myRole: "Mi rol",
      delivered: "Entregado", impact: "Impacto esperado — por validar",
      hypotheses: "Hipótesis por comprobar — sin datos hasta que se mida.",
    },
    sectionNums: {
      context: "01 — Contexto y problema",
      scope:   "02 — Rol, alcance y restricciones",
      process: "03 — Proceso",
      design:  "04 — El diseño y el sistema",
      outcome: "05 — Resultado y reflexión",
    },
    roleLabel: "Rol.", scopeLabel: "Alcance.", effortLabel: "Esfuerzo.",
    constraintsHeading: "Restricciones que tuve en cuenta",
    decisionsHeading:   "Decisiones clave de diseño",
    measureHeading:     "Qué mediría a continuación",
    statesHeading:      "Estados para los que diseñé",
    scopeHeading:       "Un problema real, una propuesta honesta.",
    moreComing:  "Más casos de estudio en camino, a medida que los documento.",
    getInTouch:  "Escribir",

    serviceOps: {
      tag: "Operaciones de servicio",
      lead: "Una vista operativa de lo que está abierto al cambio de turno — para que la información deje de perderse entre el PMS, el chat, el papel y la memoria.",
      contextHeading: "El día no termina. Se entrega.",
      processHeading: "Evidencia vivida, supuestos por validar.",
      designHeading:  "Claridad operativa antes que informes bonitos.",
      outcomeHeading: "Hipótesis, no resultados.",
      snapshotProblem:   "En el cambio de turno, la información operativa se dispersa entre el PMS, el correo, WhatsApp, libretas y la memoria de las personas — así el turno entrante no puede ver rápidamente qué está abierto, qué es urgente y qué ya se resolvió.",
      snapshotForWhom:   "Equipos de recepción y operaciones de servicio — y todos los que dependen de ellos: housekeeping, mantenimiento, jefes de turno y, en última instancia, el huésped.",
      snapshotMyRole:    "Diseñador en solitario — definición del problema desde la experiencia vivida, flujos, arquitectura de información, lógica del sistema e interfaz.",
      snapshotDelivered: "Flujos principales, pantallas clave con estados reales y una muestra del sistema de diseño.",
      snapshotImpact:    "Menos información perdida en el traspaso; contexto más rápido para el turno entrante.",
      quote: "El traspaso suele no existir en ningún lugar — la mitad en una libreta, la mitad en un chat, la mitad en la memoria de alguien.",
      contextProse: [
        "En la recepción de un hotel, el día no termina — se entrega. Y el traspaso es donde las cosas se rompen en silencio.",
        "El problema nunca fue “registrar un incidente.” Es que la información vive en todas partes a la vez: el PMS, el correo, un grupo de WhatsApp, una libreta, una hoja de cálculo, un post-it, un “por cierto” de pasada y — lo más frágil de todo — en la cabeza de quien acaba de irse.",
        "Así que en una noche cualquiera, las cosas se escapan: un huésped que pidió algo y nunca lo recibió, una tarea de mantenimiento pendiente, una habitación con una nota especial, un cargo que verificar, un no-show, una llave, una solicitud de late checkout, una queja pequeña que crece hasta convertirse en una reseña.",
        "El turno entrante no puede ver rápidamente qué está realmente abierto, qué ya se resolvió, qué es urgente y qué se mencionó de pasada sin registrarse bien. Reconstruyen el contexto a partir de fragmentos — y lo que no se reconstruye, se pierde.",
      ],
      roleText:   "Diseñador en solitario. Investigación desde la experiencia propia, mapeo de flujos, arquitectura de información, lógica del sistema, pantallas e interfaz.",
      scopeText:  "Caso conceptual basado en experiencia operativa real en recepción de hotel, trabajo por turnos y front/back office — no es un producto desplegado en un hotel real. El problema es real; la solución es una propuesta.",
      effortText: "Varias semanas entre investigación, definición del problema, flujos, arquitectura, wireframes, interfaz y refinamiento.",
      processProse: [
        { label: "Investigación, evidencia, supuestos.", text: "Basado en experiencia de primera mano en recepción, traspaso de turno, atención al huésped y operaciones hoteleras. Lo que es evidencia: la dispersión de información y los puntos de fallo en el traspaso — los viví. Lo que es supuesto por validar: que un registro guiado y rápido se adoptará bajo presión, y que una vista única de “abierto ahora” cambia el comportamiento en el traspaso. Esto requiere pruebas con equipos reales." },
        { label: "Flujos, arquitectura de información.", text: "Antes → después: de información dispersa entre herramientas y memoria, a una vista operativa de lo que está abierto. Flujos principales: registrar un incidente · entregar un turno · ver qué está abierto ahora · resolver y actualizar con historial." },
      ],
      dsSliceHeading: "Muestra del sistema de diseño — tarjeta de incidente",
      dsSliceNote:    "Una muestra pequeña, mostrada con intención: los campos estructurados y un conjunto fijo de estados son lo que permite al equipo registrar rápido y leer las entradas de los demás sin adivinar.",
      mobileHeading:  "En móvil — registro guiado y rápido",
      mobileProse:    "En movimiento, los mismos campos estructurados hacen que registrar sea cuestión de unos toques, no de un párrafo. Selecciones rápidas sobre texto libre — para que una entrada hecha en diez segundos sea legible para el turno siguiente.",
      designProse: [
        "La pantalla principal es un dashboard operativo. Al abrirlo, muestra lo que importa ahora: incidentes abiertos, elementos urgentes, trabajo pendiente por área, próximas acciones y un resumen del traspaso. No primero informes bonitos — primero claridad operativa: ¿qué necesito saber para tomar el turno sin perderme?",
        "Estados de interfaz diseñados (no solo el camino feliz): vacío · cargando · error · éxito · casos límite — los estados que un usuario cansado realmente encuentra. La muestra del sistema de diseño muestra la tarjeta de incidente estructurada, los tokens de estado y prioridad, y los campos del registro guiado — porque la consistencia aquí es lo que hace que sea implementable.",
      ],
      outcomeProse: {
        impact:     { label: "Impacto esperado — por validar.", text: "Menos información perdida en el traspaso; contexto más rápido para el turno entrante; menos retrabajo entre recepción, housekeeping y mantenimiento; incidentes pequeños que no permanecen invisibles hasta convertirse en quejas mayores. Hipótesis, no resultados." },
        tradeoffs:  { label: "Compensaciones y próximos pasos.", text: "Mantuve este concepto centrado en el problema del traspaso. Los análisis, los informes y la integración con el PMS se dejaron fuera deliberadamente — importan, pero construirlos antes de validar el flujo principal añadiría complejidad que el producto aún no ha ganado. El siguiente paso es probar el registro guiado y la vista “abierto ahora” con un turno real, y luego decidir qué construir alrededor." },
        reflection: { label: "Reflexión.", text: "Diseñar para personas cansadas a las 3am me enseñó que la UX no consiste en hacer las cosas bonitas o modernas. A veces el mejor diseño es el que reduce el esfuerzo mental, elimina la ambigüedad y ayuda a alguien a hacer lo correcto incluso cuando está al límite." },
        different:  { label: "Qué haría diferente.", text: "Si lo rehiciese, probaría primero el flujo de registro, antes de invertir en el dashboard — el dashboard asume una adopción que el registro aún no ha demostrado. Empezar por la unidad más pequeña validable permitiría confirmar el comportamiento principal antes y determinar si la vista completa justifica su complejidad." },
        ai:         { label: "Sobre el flujo de trabajo asistido por IA.", text: "Usé IA para avanzar más rápido en la síntesis de investigación, la estructuración del caso y la iteración de textos y maquetación. La definición del problema, las decisiones de diseño y sus compensaciones, y el criterio sobre qué dejar fuera fueron míos. La IA comprimió el trabajo mecánico — no tomó las decisiones." },
      },
      constraints: [
        { icon: "globe",    term: "Equipos multilingües",          desc: "El personal y los huéspedes pueden hablar ES, PT, FR o EN — la interfaz tiene que ser simple, objetiva e inequívoca en todos los idiomas." },
        { icon: "devices",  term: "Móvil + escritorio",            desc: "Escritorio en el mostrador; una consulta rápida en el teléfono o tablet en movimiento." },
        { icon: "moon",     term: "Personas cansadas en turno nocturno", desc: "La interfaz no puede depender de memoria, paciencia o interpretación." },
        { icon: "bolt",     term: "Casi sin tiempo para registrar", desc: "Si registrar un incidente es lento, el equipo vuelve a WhatsApp, papel o “después.”" },
        { icon: "wifi",     term: "Conexión lenta, sistemas pesados", desc: "Tiene que ser ligera, con guardado claro — y reducir el ruido, no aumentarlo. No una herramienta más que añade trabajo." },
      ],
      decisions: [
        { name: "Estado y urgencia antes que detalle", problem: "En el traspaso la persona está cansada o con prisa y no puede leer todo en profundidad.", decision: "Estado, prioridad, área afectada y próxima acción visibles de inmediato.", tradeoff: "Renuncié a una pantalla visualmente más limpia — cierta información tiene que aparecer rápido, aunque ocupe espacio." },
        { name: "Registro guiado, no un campo de texto libre", problem: "Cuando todo es texto libre, cada uno escribe diferente — luego es difícil leer, filtrar o rastrear la resolución.", decision: "Campos estructurados simples — categoría, habitación, área, prioridad, responsable, estado, descripción breve.", tradeoff: "Renuncié a la libertad total de escribir cualquier cosa, porque demasiada libertad se convierte en caos operativo." },
        { name: "Diseñado para un turno cansado, no para una demo bonita", problem: "De madrugada o al final del turno, no hay energía para interpretar una interfaz compleja.", decision: "Contraste claro, jerarquía fuerte, pocos pasos, lenguaje directo.", tradeoff: "Renuncié a microinteracciones sofisticadas y efectos visuales donde no ayudaban al trabajo real." },
      ],
      measure: [
        { metric: "Incidentes abiertos por turno",                 reveals: "¿El traspaso está limpiando trabajo o solo cargándolo hacia adelante?" },
        { metric: "Tiempo hasta la resolución",                    reveals: "¿Las cosas se están arreglando o solo registrando?" },
        { metric: "Cuántos se reabren",                            reveals: "¿“Resuelto” realmente significaba resuelto?" },
        { metric: "Cuántos se pierden en el traspaso",             reveals: "El fallo principal — ¿está disminuyendo?" },
        { metric: "Qué áreas generan más trabajo pendiente",       reveals: "Dónde la operación realmente tiene tensión." },
        { metric: "Cuánto tarda registrar un incidente",           reveals: "Si es lento, el equipo vuelve a WhatsApp." },
      ],
    },

    triageai: {
      tag: "Gestión inteligente de solicitudes",
      lead: "Las solicitudes multilingües llegan de todas partes, sin orden. TriageAI las estructura y prioriza con IA — y mantiene a un humano en control de cada respuesta que sale.",
      contextHeading:  "El mensaje llegó. ¿Y ahora qué?",
      processHeading:  "Evidencia y supuestos, con honestidad.",
      designHeading:   "Diseñado para ser verificado, no solo confiado.",
      outcomeHeading:  "Hipótesis, no resultados.",
      sysGateHeading:  "El sistema, con la intervención humana marcada",
      analysisPanelHeading: "El panel de análisis — verificar y luego aprobar",
      correctionHeading:    "Cuando la IA se equivoca — la corrección",
      dsSliceHeading:  "Muestra del sistema de diseño — tarjeta de caso y confianza",
      dsSliceNote:     "La tarjeta de caso, los tokens de confianza y el patrón del panel de análisis son la columna vertebral reutilizable: ponen la incertidumbre a la vista para que un humano pueda verificar rápido y aprobar con los ojos abiertos.",
      mobileHeading:   "En móvil — revisión sobre la marcha",
      mobileProse:     "El mismo principio de control en el teléfono: la confianza a la vista, el caso legible de un vistazo y las dos acciones que importan — aprobar o corregir. Rápido de ejecutar, imposible de enviar por error.",
      snapshotProblem:   "Las solicitudes entrantes llegan por múltiples canales e idiomas (ES/PT/FR/EN), sin estructura ni orden — así los casos urgentes esperan, el contexto se pierde y las respuestas salen inconsistentes.",
      snapshotForWhom:   "Equipos pequeños de servicio y soporte que gestionan solicitudes multilingües en volumen — y los clientes que esperan al otro lado.",
      snapshotMyRole:    "Diseñador en solitario — definición del problema, flujos, arquitectura de información, el modelo de interacción humano-IA, interfaz y muestra del sistema de diseño.",
      snapshotDelivered: "Flujo principal de triaje, pantallas clave con estados reales (incluido cuando la IA se equivoca) y una muestra del sistema de diseño.",
      snapshotImpact:    "Atención más rápida a casos urgentes; menos solicitudes perdidas; respuestas multilingües más consistentes; menos respuestas erróneas que llegan al cliente.",
      evidenceLabel: "Por qué importa — datos de mercado externos, no resultados de TriageAI",
      evidenceSrc:   "Fuentes: Salesforce, State of the Connected Customer · CSA Research · Lorikeet CX, 2026. Las cifras enmarcan el problema de mercado — no son resultados medidos de este concepto.",
      quote: "La velocidad y el idioma dejaron de ser comodidades del servicio — deciden si el cliente se queda. Pero la IA sin supervisión no genera confianza; un humano tiene que ser dueño de la respuesta.",
      contextProse: [
        "Una solicitud puede llegar por WhatsApp, correo o formulario web, en español, portugués, francés o inglés, a cualquier hora. Cada una llega sin estructura — sin prioridad, sin categoría, sin una lectura clara de lo que la persona realmente necesita.",
        "Un equipo pequeño lee cada mensaje, adivina el idioma, adivina la urgencia, decide quién es responsable e intenta mantener las respuestas consistentes. Bajo volumen, el fallo predecible aparece: el mensaje urgente espera detrás de diez triviales, la misma pregunta recibe tres respuestas distintas, y cualquier cosa en un idioma que nadie en el turno domina bien se aplaza — y el aplazamiento se convierte en nunca.",
        "El problema real no es responder. Es que el triaje ocurre en la cabeza de alguien, bajo presión, sin estructura — así la atención fluye hacia lo más ruidoso, no hacia lo más importante. Y la solución obvia, “automatizarlo,” falla su propia prueba: la automatización sin supervisión no genera confianza, solo mueve el fallo a un lugar más silencioso.",
      ],
      roleText:   "Diseñador en solitario — definición del problema, flujos, arquitectura de información, el modelo de interacción humano-IA, pantallas e interfaz.",
      scopeText:  "Caso conceptual. El problema es real — triaje de solicitudes multilingües entrantes; el producto es una propuesta, no un sistema desplegado o entrenado. El comportamiento de la IA está diseñado e ilustrado, no en vivo.",
      effortText: "Varias semanas entre la definición, el modelo de interacción con IA, flujos, interfaz y refinamiento.",
      processProse: [
        { label: "Evidencia vs. supuesto.", text: "Lo que genuinamente sé: la realidad del servicio multilingüe, el caos de las solicitudes entrantes, las respuestas inconsistentes entre idiomas, el coste de que una solicitud se pierda — más los datos de mercado externos de arriba. Lo que hay que probar: que las personas confíen y actúen según las señales de confianza en lugar de aprobar sin leer, que la capa de explicación haga la verificación suficientemente rápida, y que aprobar antes de enviar valga el coste en velocidad a volumen. Esos son supuestos por validar con un equipo real." },
        { label: "Flujos, arquitectura de información.", text: "Antes → después: de “leer todo, hacer triaje mentalmente, responder de forma inconsistente” a “la IA estructura y ordena, un humano verifica y aprueba, las respuestas son consistentes.” Bucle principal: mensaje entra → la IA clasifica → el humano revisa con la confianza visible → aprobar o corregir → enviar y registrar." },
      ],
      designProse: [
        "La pantalla principal es una bandeja de triaje. Al abrirla, muestra lo que necesita atención humana ahora: indicadores de baja confianza, cualquier cosa urgente y todo lo que falta información para responder. Cada caso abre un panel de análisis — idioma, intención, urgencia, información faltante y una respuesta propuesta — con la señal de confianza a la vista y, cuando los idiomas difieren, una retrotraducción para quien revisa.",
        "El trabajo del humano no es rehacer el trabajo; es verificar, corregir si es necesario y aprobar.",
      ],
      designEmphasis: { low: "baja confianza", caught: "la IA se equivocó y un humano lo detectó." },
      outcomeProse: {
        impact:     { label: "Impacto esperado — por validar.", text: "Casos urgentes atendidos más rápido; menos solicitudes perdidas entre canales e idiomas; respuestas más consistentes; menos respuestas erróneas que llegan al cliente, porque los elementos de baja confianza se detectan. Hipótesis, no resultados." },
        tradeoffs:  { label: "Compensaciones y próximos pasos.", text: "Mantuve esto centrado en el bucle de triaje y aprobación. La resolución automática, los dashboards de análisis y la integración con CRM se dejaron fuera deliberadamente — importan, pero automatizar más antes de demostrar que las personas confían en las señales de confianza construiría velocidad sobre una base no verificada. Siguiente: probar las señales de confianza y la aprobación manual con un equipo real, y comprobar si la capa de explicación y retrotraducción realmente acelera la verificación." },
        reflection: { label: "Reflexión.", text: "Diseñar bien con IA no consiste en hacerla parecer mágica — consiste en mantener a un humano en control de decisiones que llegan a personas reales, especialmente entre idiomas donde una palabra equivocada tiene un impacto diferente. La honestidad sobre cuándo la IA no está segura es el diseño, no un defecto en él." },
        ai:         { label: "Sobre el flujo de trabajo asistido por IA.", text: "Usé IA para avanzar más rápido en la síntesis de investigación, la estructuración del caso y la iteración de textos y maquetación. La definición, el modelo de interacción, las compensaciones y lo que dejar fuera fueron míos. La IA comprimió el trabajo mecánico — no tomó las decisiones." },
      },
      constraints: [
        { icon: "alert",        term: "La IA se equivocará a veces",   desc: "Una herramienta de triaje que lo oculta es peligrosa. Las clasificaciones incorrectas tienen que ser visibles y fáciles de detectar, no enterradas bajo una interfaz segura." },
        { icon: "globe",        term: "Multilingüe por defecto",       desc: "ES, PT, FR y EN llegan mezclados. El sistema detecta el idioma para que quien revisa nunca tenga que aprobar una respuesta que no puede leer." },
        { icon: "bolt",         term: "Velocidad vs. control",         desc: "El objetivo es ahorrar tiempo — pero un humano que tiene que releer todo no ahorra nada. La verificación tiene que ser rápida, no opcional." },
        { icon: "check-circle", term: "Responsabilidad",               desc: "En el servicio, alguien responde por lo que se envió. Quién aprobó qué debe ser rastreable." },
        { icon: "sitemap",      term: "Volumen",                       desc: "El triaje solo importa cuando hay demasiado para leer. La interfaz tiene que escalar la atención, no solo listar elementos." },
      ],
      decisions: [
        { name: "La IA muestra su nivel de certeza — nunca finge estar segura.", problem: "La mayoría de herramientas de IA presentan el resultado como un hecho. Las personas aprueban sin leer y las clasificaciones incorrectas llegan directamente al cliente.", decision: "Cada clasificación lleva una señal de confianza. Los elementos de baja confianza se marcan como “necesita revisión” y se llevan al tope de la atención, no se mezclan.", tradeoff: "Renuncié a la magia de “simplemente funciona.” Admitir incertidumbre es menos impresionante en una demo — pero es lo que detecta errores antes de que lleguen al cliente." },
        { name: "Nada sale sin un humano. La acción por defecto es revisar, no enviar.", problem: "La automatización total es más rápida, pero una respuesta automática incorrecta — idioma, tono o respuesta equivocados — es costosa y difícil de revertir.", decision: "La IA redacta y propone; nunca envía. Un humano aprueba cada respuesta saliente. La acción principal es revisar, no enviar.", tradeoff: "Renuncié a la velocidad de la automatización completa por control y reversibilidad. Un envío incorrecto a un cliente supera el tiempo ahorrado automatizándolo." },
        { name: "La IA se explica de un vistazo, para que el humano verifique en lugar de releer.", problem: "Un humano no puede aprobar lo que no entiende. Una caja negra obliga a confiar ciegamente o releer todo — lo que elimina el tiempo que la herramienta iba a ahorrar.", decision: "Cada caso muestra el por qué: idioma detectado, intención, qué desencadenó la urgencia y qué falta. La verificación se convierte en un vistazo.", tradeoff: "Renuncié a la simplicidad de pantalla por una capa de explicación. Más en pantalla — pero es lo que hace posible una aprobación rápida y segura." },
        { name: "El idioma se detecta y se hace explícito, y quien revisa puede verificarlo.", problem: "Quien revisa puede no leer bien el idioma del cliente. Aprobar una respuesta que no puedes leer del todo es confiar ciegamente con otro nombre.", decision: "Detectar y etiquetar el idioma. Mostrar la respuesta redactada en el idioma del cliente junto a una retrotraducción al idioma de quien revisa, para que el significado y el tono se verifiquen antes de aprobar.", tradeoff: "Más interfaz, más procesamiento por caso. Pero aprobar un mensaje que no puedes leer contradice todo el principio de control humano — así que el coste vale la pena." },
      ],
      evidence: [
        { num: 65, prefix: "~", suffix: "%", desc: "de los clientes espera respuestas más rápidas que hace cinco años." },
        { num: 60, prefix: "~", suffix: "%", desc: "raramente o nunca compra en fuentes que no están en su propio idioma." },
        { num: 14, prefix: "~", suffix: "%", desc: "de las interacciones de autoservicio realmente se resuelven — la deflexión sin resolución falla al cliente." },
      ],
      measure: [
        { metric: "Tiempo hasta la primera respuesta en casos urgentes",          reveals: "¿El triaje está subiendo el trabajo urgente o solo reetiquetándolo?" },
        { metric: "Con qué frecuencia el humano corrige la IA — y en qué",        reveals: "Muestra exactamente dónde la IA sigue siendo débil." },
        { metric: "Cuántos indicadores de baja confianza eran realmente erróneos", reveals: "¿La señal de confianza está calibrada o es solo ruido?" },
        { metric: "Respuestas gestionadas por turno vs. la línea base manual",     reveals: "¿La aprobación manual cuesta más de lo que ahorra?" },
        { metric: "Cuántos casos se bloquearon esperando información faltante",    reveals: "¿El sistema está surfaceando los vacíos o escondiéndolos?" },
        { metric: "Consistencia de respuestas a la misma pregunta en distintos idiomas", reveals: "¿La retrotraducción realmente conserva el significado?" },
      ],
    },
  },
};

// ── Français ─────────────────────────────────────────────────────────────
const fr = {
  nav: { work: "Travaux", about: "À propos", approach: "Approche", contact: "Contact" },
  availability: "Disponible",

  hero: {
    title:  "Product designer avec une sensibilité *technique*.",
    lead:   "Je conçois des outils opérationnels pour les équipes de service — et je me soucie de la façon dont ils sont construits.",
    cta1:   "Voir les travaux",
    cta2:   "Découvrir mon approche",
  },

  work: {
    eyebrow:    "Travaux sélectionnés",
    heading:    "Travaux sélectionnés",
    subheading: "Deux études de cas complètes — le problème avant tout.",
    more:       "D'autres études de cas en cours — des pièces honnêtes valent mieux qu'une grille gonflée.",
  },

  approach: {
    eyebrow:    "Approche",
    heading:    "Concevoir avec *intention*, construire avec *perspective*.",
    subheading: "Mon approche relie les besoins des utilisateurs, les objectifs de l'entreprise et la réalité technique pour créer des produits utiles, utilisables et durables.",
  },

  process: {
    eyebrow:    "Processus",
    heading:    "Un processus clair. Pensé pour *l'impact*.",
    subheading: "Une façon structurée de transformer la complexité opérationnelle en clarté. Chaque étape s'appuie sur la précédente — utile, utilisable et prêt à livrer.",
  },

  principles: {
    eyebrow:    "Principes",
    heading:    "Des choix qui guident. *Un impact réel*.",
    subheading: "Ces principes façonnent ma façon de penser, de concevoir et de collaborer. Pas des règles, mais une boussole pour un travail qui a du sens.",
  },

  about: {
    eyebrow: "À propos de Breno",
    heading: "Product designer avec une vision *stratégique* et *opérationnelle*.",
    lead:    "J'aide les équipes à transformer la complexité en clarté et les idées en produits qui créent de la valeur. Mon travail se situe à l'intersection de la stratégie, de l'expérience et de l'exécution.",
    cta:     "Lire l'histoire complète",
    facts: {
      basedIn:       "Basé à",
      working:       "Mode de travail",
      workingValue:  "À distance · projets internationaux",
      languages:     "Langues",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Connectons-nous",
    heading:   "Créons des produits avec *clarté* et *intention*.",
    body:      "Je suis actuellement disponible pour de nouvelles opportunités. Si le problème est réel, j'aimerais en entendre parler.",
    email:     "E-mail",
    location:  "Localisation",
    localTime: "Heure locale",
  },

  footer: {
    location:  "Valence, Espagne · travail à distance",
    elsewhere: "Ailleurs",
    tagline:   "Le bon design est discret, mais il laisse une trace.",
  },

  aboutPage: {
    eyebrow:    "À propos de Breno",
    heading:    "Product designer avec une vision *stratégique* et *opérationnelle*.",
    lead:       "Je suis venu au design depuis l'intérieur des opérations, pas de l'extérieur — et c'est encore ainsi que je travaille.",
    downloadCv: "Télécharger le CV",
    facts: {
      basedIn:       "Basé à",
      working:       "Mode de travail",
      workingValue:  "À distance · projets internationaux",
      languages:     "Langues",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
      status:        "Statut",
      statusValue:   "Ouvert aux nouvelles opportunités · en transition",
    },
    storyEyebrow: "Le parcours",
    storyHeading: "De la gestion des opérations à leur *conception*.",
    story: [
      "Pendant des années, mon travail, c'était l'opération elle-même — la réception d'hôtel, le travail en équipe, les shifts, le front et back office là où les choses se passent vraiment. J'étais la personne qui prenait un shift avec la moitié du contexte manquant, ou qui le remettait en espérant que rien ne passe entre les mailles.",
      "C'est là que j'ai appris ce que le logiciel fait aux gens sous pression. Un bon outil disparaît et vous laisse faire le travail. Un mauvais devient une chose de plus à gérer. J'ai commencé à concevoir parce que je voulais construire le premier.",
      "Aujourd'hui, je travaille comme product designer avec une sensibilité à l'implémentation : je pense en systèmes, je construis et utilise des systèmes de design, et je travaille avec l'IA pour avancer plus vite dans la recherche, la structure et l'itération — tout en gardant le jugement design qui m'appartient. J'ai obtenu le Google UX Design Certificate en chemin, mais le fondement, c'est les années passées à l'intérieur des problèmes que je conçois maintenant.",
      "Je lis et travaille en portugais (langue maternelle), espagnol (courant), français (professionnel), italien (intermédiaire) et anglais. Je suis basé à {location}, en télétravail, et actuellement en transition — ouvert aux rôles produit et aux collaborations où les problèmes sont réels.",
    ],
    ctaWork:    "Voir les travaux",
    ctaContact: "Prendre contact",
  },

  labels: {
    intro:      "Intro",
    work:       "Travaux",
    approach:   "Approche",
    process:    "Processus",
    principles: "Principes",
    about:      "À propos",
    contact:    "Contact",
    thePath:    "Le parcours",
  },

  languageNames: {
    Portuguese: "Portugais", Spanish: "Espagnol", French: "Français",
    Italian: "Italien", English: "Anglais",
  },
  languageLevels: {
    "Native": "Langue maternelle", "Fluent": "Courant",
    "Professional / Fluent": "Professionnel", "Intermediate": "Intermédiaire",
    "Professional working": "Professionnel",
  },

  projects: [
    {
      slug: "service-operations", category: "Cas conceptuel",
      title: "Service Operations Dashboard",
      problem: "Une vue opérationnelle de ce qui est ouvert à la passation de poste, pour que l'information cesse de se perdre entre les outils, le papier et la mémoire.",
      role: "Seul designer", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Cas conceptuel", title: "TriageAI",
      problem: "Gestion multilingue des demandes avec contrôle humain — l'IA structure et priorise, un humain valide chaque réponse avant envoi.",
      role: "Seul designer", year: "2026", href: "/work/triageai",
    },
  ],

  approachItems: [
    { title: "Comprendre le travail en profondeur", description: "Je commence à l'intérieur de l'opération — comportements, contraintes et là où les choses cassent vraiment — avant de proposer quoi que ce soit." },
    { title: "Ancrer dans le contexte réel", description: "J'aligne chaque décision avec la façon dont l'entreprise fonctionne réellement et ce qui est faisable, pas sur ce que ça donne dans un slide." },
    { title: "Penser en systèmes, pas en écrans", description: "Je conçois la structure en premier — architecture de l'information, flux, états et règles — pour qu'elle reste cohérente à mesure qu'elle grandit." },
    { title: "Concevoir avec clarté et retenue", description: "Je simplifie sans appauvrir. Hiérarchie, contenu et interaction plutôt que décoration — clair, pas malin." },
    { title: "Construire avec l'implémentation en tête", description: "Je conçois en sachant que ça doit être livré, et je travaille avec l'ingénierie sur les cas limites et le handoff pour que ce soit bien construit." },
  ],

  processSteps: [
    { title: "Découvrir", icon: "search",       description: "Comprendre l'opération, les personnes et les contraintes avant de proposer quoi que ce soit.",            items: ["Parler aux gens qui font le travail", "Cartographier où vit l'information", "Trouver les points de rupture", "Séparer preuves et suppositions"] },
    { title: "Cadrer",    icon: "frame",        description: "Transformer le chaos en un problème clair qui vaut la peine d'être résolu, avec un périmètre explicite.", items: ["Définir le vrai problème", "Établir ce qui est dedans et dehors", "Nommer les contraintes", "Décider à quoi ressemble le succès"] },
    { title: "Systèmes",  icon: "sitemap",      description: "Concevoir la structure avant les écrans — les règles qui maintiennent la cohérence.",                     items: ["Architecture de l'information", "Flux principaux", "États et règles", "Tokens et composants"] },
    { title: "Interface", icon: "layout",       description: "Le rendre clair, rapide et honnête — conçu pour le pire moment, pas pour la démo.",                      items: ["Hiérarchie et contraste", "Guidé plutôt que libre", "Tous les états, pas seulement le bon chemin", "Langage simple"] },
    { title: "Valider",   icon: "check-circle", description: "Tester les hypothèses avec de vraies personnes et itérer sur ce qui casse.",                             items: ["Le mettre devant de vrais utilisateurs", "Observer les comportements, pas les opinions", "Itérer sur ce qui casse", "Garder ce qui tient"] },
    { title: "Livrer",    icon: "send",         description: "Faire le handoff pour que ça soit construit comme conçu, avec les cas limites documentés.",               items: ["Spécifications orientées build", "Travailler avec l'ingénierie", "Cas limites documentés", "Support pendant l'implémentation"] },
  ],

  principlesItems: [
    { annotation: "間 ma",    principle: "Clarté sur le bruit",           description: "J'enlève ce qui est inutile pour que ce qui compte puisse s'exprimer." },
    { annotation: "",         principle: "L'utilité avant tout",          description: "Je conçois avec un but, en résolvant de vrais problèmes pour de vraies personnes." },
    { annotation: "渋 shibui", principle: "Retenue avec intention",        description: "Je choisis moins, mais avec précision — la retenue est une qualité, pas un manque." },
    { annotation: "",         principle: "Concevoir pour le pire moment", description: "Le vrai test n'est pas la démo — c'est une personne fatiguée à 3h du matin. Je conçois pour elle." },
    { annotation: "",         principle: "Pensée systémique",             description: "Je vois l'ensemble, puis je conçois chaque partie pour qu'elle appartienne et reste cohérente." },
    { annotation: "",         principle: "Craft conscient de l'implémentation", description: "Je me soucie de la façon dont c'est construit, parce que c'est ce qui décide si c'est livré comme conçu." },
  ],

  cases: {
    back:        "Travaux sélectionnés",
    conceptCase: "Cas conceptuel",
    snapshot: {
      problem: "Problème", forWhom: "Pour qui", myRole: "Mon rôle",
      delivered: "Livré", impact: "Impact attendu — à valider",
      hypotheses: "Hypothèses à tester — pas de chiffres avant mesure.",
    },
    sectionNums: {
      context: "01 — Contexte et problème",
      scope:   "02 — Rôle, périmètre et contraintes",
      process: "03 — Processus",
      design:  "04 — Le design et le système",
      outcome: "05 — Résultat et réflexion",
    },
    roleLabel: "Rôle.", scopeLabel: "Périmètre.", effortLabel: "Effort.",
    constraintsHeading: "Contraintes que j'ai prises en compte",
    decisionsHeading:   "Décisions de design clés",
    measureHeading:     "Ce que je mesurerais ensuite",
    statesHeading:      "États pour lesquels j'ai conçu",
    scopeHeading:       "Un vrai problème, une proposition honnête.",
    moreComing:  "D'autres études de cas en chemin, au fil de leur documentation.",
    getInTouch:  "Prendre contact",

    serviceOps: {
      tag: "Opérations de service",
      lead: "Une vue opérationnelle de ce qui est ouvert à la passation de poste — pour que l'information cesse de se perdre entre le PMS, le chat, le papier et la mémoire.",
      contextHeading: "La journée ne finit pas. Elle se transmet.",
      processHeading: "Des preuves vécues, des hypothèses à valider.",
      designHeading:  "Clarté opérationnelle avant les beaux rapports.",
      outcomeHeading: "Hypothèses, pas résultats.",
      snapshotProblem:   "À la passation de poste, l'information opérationnelle se disperse entre le PMS, les e-mails, WhatsApp, les cahiers et la mémoire des gens — si bien que le poste entrant ne peut pas voir rapidement ce qui est ouvert, ce qui est urgent et ce qui est déjà résolu.",
      snapshotForWhom:   "Les équipes de réception et d'opérations de service — et tous ceux qui en dépendent : housekeeping, maintenance, chefs de poste et, in fine, le client.",
      snapshotMyRole:    "Seul designer — cadrage du problème depuis une expérience vécue, flux, architecture de l'information, logique du système et interface.",
      snapshotDelivered: "Flux principaux, écrans clés avec états réels et une tranche du système de design.",
      snapshotImpact:    "Moins d'information perdue à la passation ; prise de contexte plus rapide pour le poste entrant.",
      quote: "La passation n'existe généralement nulle part — la moitié dans un cahier, la moitié dans un chat, la moitié dans la tête de quelqu'un.",
      contextProse: [
        "À la réception d'un hôtel, la journée ne finit pas — elle se transmet. Et c'est à la passation que les choses se brisent en silence.",
        "Le problème n'a jamais été « enregistrer un incident ». C'est que l'information vit partout à la fois : le PMS, les e-mails, un groupe WhatsApp, un cahier, une feuille de calcul, un post-it, un « au fait » en passant et — le plus fragile de tout — dans la tête de celui qui vient de partir.",
        "Alors, une nuit ordinaire, des petites choses passent entre les mailles : un client qui avait demandé quelque chose et ne l'a jamais reçu, une tâche de maintenance en suspens, une chambre avec une note spéciale, un montant à vérifier, un no-show, une clé, une demande de late checkout, une plainte qui a commencé petit et finit en avis négatif.",
        "La personne qui prend le relais ne peut pas voir rapidement ce qui est réellement ouvert, ce qui est déjà résolu, ce qui est urgent et ce qui a seulement été mentionné sans être correctement enregistré. Elle reconstruit le contexte à partir de fragments — et ce qui n'est pas reconstruit est perdu.",
      ],
      roleText:   "Seul designer. Recherche depuis l'expérience vécue, cartographie des flux, architecture de l'information, logique du système, écrans et interface.",
      scopeText:  "Cas conceptuel basé sur une expérience opérationnelle réelle en réception hôtelière, travail posté et front/back office — pas un produit déployé dans un vrai hôtel. Le problème est réel ; la solution est une proposition.",
      effortText: "Quelques semaines entre la recherche, le cadrage du problème, les flux, l'architecture, les wireframes, l'interface et le raffinement.",
      processProse: [
        { label: "Recherche, preuves, hypothèses.", text: "Ancré dans une expérience de première main de la réception, de la passation de poste, du service client et des opérations hôtelières. Ce qui est prouvé : la dispersion de l'information et les points de défaillance à la passation — je les ai vécus. Ce qui est à valider : qu'un enregistrement guidé et rapide sera adopté sous pression, et qu'une vue unique « ouvert maintenant » modifie le comportement à la passation. Cela nécessite des tests avec de vraies équipes." },
        { label: "Flux, architecture de l'information.", text: "Avant → après : de l'information dispersée entre outils et mémoire, à une vue opérationnelle de ce qui est ouvert. Flux principaux : enregistrer un incident · transmettre un poste · voir ce qui est ouvert maintenant · résoudre et mettre à jour avec l'historique." },
      ],
      dsSliceHeading: "Tranche du système de design — carte d'incident",
      dsSliceNote:    "Un specimen volontairement petit : des champs structurés et un ensemble fixe d'états permettent à l'équipe d'enregistrer vite et de lire les entrées des autres sans avoir à deviner.",
      mobileHeading:  "Sur mobile — enregistrement guidé et rapide",
      mobileProse:    "En déplacement, les mêmes champs structurés font que l'enregistrement se résume à quelques touches, pas à un paragraphe. Des sélections rapides plutôt que du texte libre — pour qu'une entrée faite en dix secondes soit encore lisible par le prochain poste.",
      designProse: [
        "L'écran principal est un tableau de bord opérationnel. À l'ouverture, il montre ce qui compte maintenant : incidents ouverts, éléments urgents, travail en attente par zone, prochaines actions et résumé de passation. Pas d'abord des beaux rapports — d'abord la clarté opérationnelle : qu'est-ce que je dois savoir pour prendre le poste sans me perdre ?",
        "États d'interface conçus (pas seulement le bon chemin) : vide · chargement · erreur · succès · cas limites — les états qu'un utilisateur fatigué rencontre vraiment. La tranche du système de design montre la carte d'incident structurée, les tokens de statut et de priorité, et les champs utilisés dans l'enregistrement guidé — car la cohérence ici est ce qui rend le tout implémentable.",
      ],
      outcomeProse: {
        impact:     { label: "Impact attendu — à valider.", text: "Moins d'information perdue à la passation ; prise de contexte plus rapide pour le poste entrant ; moins de retravail entre la réception, le housekeeping et la maintenance ; des petits incidents qui ne restent plus invisibles jusqu'à devenir de plus grandes plaintes. Hypothèses, pas résultats." },
        tradeoffs:  { label: "Arbitrages et prochaines étapes.", text: "J'ai gardé ce concept centré sur le problème de la passation. Les analyses, les rapports et l'intégration PMS ont été délibérément laissés de côté — ils comptent, mais les construire avant de valider le flux principal ajouterait une complexité que le produit n'a pas encore méritée. La prochaine étape est de tester l'enregistrement guidé et la vue « ouvert maintenant » avec un vrai poste, puis de décider quoi construire autour." },
        reflection: { label: "Réflexion.", text: "Concevoir pour des gens fatigués à 3h du matin m'a appris que l'UX ne consiste pas à rendre les choses jolies ou modernes. Parfois le meilleur design est celui qui réduit l'effort mental, supprime l'ambiguïté et aide quelqu'un à faire ce qu'il faut même quand il est à bout." },
        different:  { label: "Ce que je ferais différemment.", text: "Si je devais tout refaire, je testerais d'abord le flux d'enregistrement, avant d'investir dans le tableau de bord — le tableau de bord suppose une adoption que le registre n'a pas encore prouvée. Commencer par la plus petite unité testable permettrait de valider le comportement principal plus tôt et de déterminer si la vue complète mérite sa complexité." },
        ai:         { label: "Sur le flux de travail assisté par IA.", text: "J'ai utilisé l'IA pour avancer plus vite dans la synthèse de recherche, la structuration du cas et l'itération sur les textes et la mise en page. Le cadrage du problème, les décisions de design et leurs arbitrages, et le jugement sur ce qu'il fallait laisser de côté sont restés les miens. L'IA a compressé le travail mécanique — elle n'a pas pris les décisions." },
      },
      constraints: [
        { icon: "globe",    term: "Équipes multilingues",              desc: "Le personnel et les clients peuvent parler ES, PT, FR ou EN — l'interface doit rester simple, objective et sans ambiguïté dans toutes les langues." },
        { icon: "devices",  term: "Mobile + bureau",                   desc: "Bureau au comptoir ; une vérification rapide sur téléphone ou tablette en déplacement." },
        { icon: "moon",     term: "Personnes fatiguées en poste de nuit", desc: "L'interface ne peut pas compter sur la mémoire, la patience ou l'interprétation." },
        { icon: "bolt",     term: "Presque pas de temps pour enregistrer", desc: "Si enregistrer un incident est lent, l'équipe revient à WhatsApp, au papier ou à « plus tard »." },
        { icon: "wifi",     term: "Connexion lente, systèmes lourds",  desc: "Il doit être léger, avec une sauvegarde claire — et réduire le bruit, pas l'augmenter. Pas un outil de plus qui ajoute du travail." },
      ],
      decisions: [
        { name: "Statut et urgence avant le détail", problem: "À la passation, la personne est fatiguée ou pressée et ne peut pas tout lire en profondeur.", decision: "Statut, priorité, zone concernée et prochaine action mis en avant.", tradeoff: "J'ai renoncé à un écran visuellement plus épuré — certaines informations doivent apparaître vite, même si elles prennent de la place." },
        { name: "Enregistrement guidé, pas une zone de texte libre", problem: "Quand tout est texte libre, chacun écrit différemment — ensuite c'est difficile à lire, filtrer ou suivre.", decision: "Champs structurés simples — catégorie, chambre, zone, priorité, responsable, statut, description courte.", tradeoff: "J'ai renoncé à la liberté totale d'écrire n'importe quoi, car trop de liberté devient un désordre opérationnel." },
        { name: "Conçu pour un poste épuisé, pas pour une belle démo", problem: "La nuit ou en fin de poste, il n'y a pas d'énergie pour interpréter une interface complexe.", decision: "Contraste clair, hiérarchie forte, peu d'étapes, langage direct.", tradeoff: "J'ai renoncé aux microinteractions sophistiquées et aux effets visuels là où ils n'aidaient pas le vrai travail." },
      ],
      measure: [
        { metric: "Incidents ouverts par poste",                reveals: "La passation dégage-t-elle du travail ou le reporte-t-elle ?" },
        { metric: "Temps jusqu'à la résolution",               reveals: "Les choses sont-elles réglées ou seulement enregistrées ?" },
        { metric: "Combien sont rouverts",                     reveals: "« Résolu » signifiait-il vraiment résolu ?" },
        { metric: "Combien se perdent à la passation",         reveals: "L'échec principal — diminue-t-il ?" },
        { metric: "Quelles zones génèrent le plus de travail en attente", reveals: "Où l'opération est réellement sous tension." },
        { metric: "Combien de temps pour enregistrer un incident", reveals: "Si c'est lent, l'équipe revient à WhatsApp." },
      ],
    },

    triageai: {
      tag: "Gestion intelligente des demandes",
      lead: "Les demandes multilingues arrivent de partout, sans ordre. TriageAI les structure et les priorise avec l'IA — et garde un humain en contrôle de chaque réponse qui sort.",
      contextHeading:  "Le message est arrivé. Et maintenant ?",
      processHeading:  "Preuves et hypothèses, en toute honnêteté.",
      designHeading:   "Conçu pour être vérifié, pas seulement fait confiance.",
      outcomeHeading:  "Hypothèses, pas résultats.",
      sysGateHeading:  "Le système, avec la validation humaine marquée",
      analysisPanelHeading: "Le panneau d'analyse — vérifier, puis approuver",
      correctionHeading:    "Quand l'IA se trompe — la correction",
      dsSliceHeading:  "Tranche du système de design — carte de cas et confiance",
      dsSliceNote:     "La carte de cas, les tokens de confiance et le pattern du panneau d'analyse forment la colonne vertébrale réutilisable : ils mettent l'incertitude en évidence pour qu'un humain puisse vérifier vite et approuver en connaissance de cause.",
      mobileHeading:   "Sur mobile — révision en déplacement",
      mobileProse:     "Le même principe de contrôle sur téléphone : la confiance en évidence, le cas lisible en un coup d'œil et les deux actions qui comptent — approuver ou corriger. Rapide à exécuter, impossible d'envoyer par accident.",
      snapshotProblem:   "Les demandes entrantes arrivent sur plusieurs canaux et langues (ES/PT/FR/EN), non structurées et non triées — ainsi les urgences attendent, le contexte se perd et les réponses partent inconsistantes.",
      snapshotForWhom:   "Petites équipes de service et de support gérant des demandes multilingues en volume — et les clients qui attendent de l'autre côté.",
      snapshotMyRole:    "Seul designer — cadrage du problème, flux, architecture de l'information, le modèle d'interaction humain-IA, interface et tranche du système de design.",
      snapshotDelivered: "Flux principal de triage, écrans clés avec états réels (y compris quand l'IA se trompe) et une tranche du système de design.",
      snapshotImpact:    "Traitement plus rapide des cas urgents ; moins de demandes perdues ; réponses multilingues plus cohérentes ; moins de mauvaises réponses qui atteignent le client.",
      evidenceLabel: "Pourquoi c'est important — données de marché externes, pas les résultats de TriageAI",
      evidenceSrc:   "Sources : Salesforce, State of the Connected Customer · CSA Research · Lorikeet CX, 2026. Les chiffres cadrent le problème de marché — ils ne sont pas des résultats mesurés de ce concept.",
      quote: "La rapidité et la langue ont cessé d'être des raffinements du service — elles décident si le client reste. Mais une IA sans surveillance ne génère pas de confiance ; un humain doit toujours être propriétaire de la réponse.",
      contextProse: [
        "Une demande peut arriver par WhatsApp, e-mail ou formulaire web, en espagnol, portugais, français ou anglais, à n'importe quelle heure. Chacune arrive non structurée — sans priorité, sans catégorie, sans lecture claire de ce que la personne a réellement besoin.",
        "Une petite équipe lit chaque message, devine la langue, devine l'urgence, décide qui en est responsable et essaie de maintenir des réponses cohérentes. Sous volume, l'échec prévisible arrive : le message urgent attend derrière dix trivialités, la même question reçoit trois réponses différentes, et tout ce qui est dans une langue que personne dans le poste ne maîtrise bien est reporté à « plus tard » — et plus tard devient jamais.",
        "Le vrai problème n'est pas de répondre. C'est que le triage se fait dans la tête de quelqu'un, sous pression, sans structure — donc l'attention va vers ce qui est le plus bruyant, pas vers ce qui compte le plus. Et la solution évidente, « automatiser ça », échoue à son propre test : l'automatisation sans surveillance ne génère pas de confiance, elle déplace juste l'échec vers un endroit plus silencieux.",
      ],
      roleText:   "Seul designer — cadrage du problème, flux, architecture de l'information, le modèle d'interaction humain-IA, écrans et interface.",
      scopeText:  "Cas conceptuel. Le problème est réel — triage de demandes multilingues entrantes ; le produit est une proposition, pas un système déployé ou entraîné. Le comportement de l'IA est conçu et illustré, pas en direct.",
      effortText: "Quelques semaines entre le cadrage, le modèle d'interaction IA, les flux, l'interface et le raffinement.",
      processProse: [
        { label: "Preuves vs. hypothèses.", text: "Ce que je sais vraiment : la réalité du service multilingue, le chaos des demandes entrantes, les réponses inconsistantes selon les langues, le coût d'une demande qui passe entre les mailles — plus les données de marché externes ci-dessus. Ce qui doit être testé : que les gens fassent confiance aux signaux de confiance et agissent en conséquence au lieu de valider sans lire, que la couche d'explication rende la vérification suffisamment rapide, et qu'approuver avant d'envoyer vaille le coût en vitesse à volume. Ce sont des hypothèses à valider avec une vraie équipe." },
        { label: "Flux, architecture de l'information.", text: "Avant → après : de « tout lire, trier dans sa tête, répondre de façon inconsistante » à « l'IA structure et classe, un humain vérifie et approuve, les réponses restent cohérentes. » Boucle principale : message entrant → l'IA classifie → le humain révise avec la confiance visible → approuver ou corriger → envoyer et enregistrer." },
      ],
      designProse: [
        "L'écran principal est une boîte de réception de triage. À l'ouverture, il met en avant ce qui a besoin d'un humain maintenant : les signaux de faible confiance, tout ce qui est urgent et tout ce pour quoi il manque l'information nécessaire pour répondre. Chaque cas s'ouvre sur un panneau d'analyse — langue, intention, urgence, info manquante et une réponse proposée — avec le signal de confiance bien visible et, quand les langues diffèrent, une rétrotraduction pour le réviseur.",
        "Le travail du humain n'est pas de refaire le travail ; c'est de vérifier, corriger si nécessaire et approuver.",
      ],
      designEmphasis: { low: "faible confiance", caught: "l'IA s'est trompée et un humain l'a rattrapée." },
      outcomeProse: {
        impact:     { label: "Impact attendu — à valider.", text: "Cas urgents traités plus vite ; moins de demandes perdues entre canaux et langues ; réponses plus cohérentes ; moins de mauvaises réponses qui atteignent le client, car les éléments à faible confiance sont détectés. Hypothèses, pas résultats." },
        tradeoffs:  { label: "Arbitrages et prochaines étapes.", text: "J'ai gardé ceci centré sur la boucle triage-approbation. La résolution automatique, les tableaux de bord analytiques et l'intégration CRM ont été délibérément laissés de côté — ils comptent, mais automatiser davantage avant de prouver que les gens font confiance aux signaux de confiance construirait de la vitesse sur une fondation non vérifiée. Étape suivante : tester les signaux de confiance et la validation manuelle avec une vraie équipe, et vérifier si la couche d'explication et de rétrotraduction accélère réellement la vérification." },
        reflection: { label: "Réflexion.", text: "Bien concevoir avec l'IA ne consiste pas à la faire paraître magique — il s'agit de garder un humain en contrôle des décisions qui touchent de vraies personnes, surtout entre langues où un mauvais mot atterrit différemment. L'honnêteté sur quand l'IA n'est pas sûre est le design, pas un défaut." },
        ai:         { label: "Sur le flux de travail assisté par IA.", text: "J'ai utilisé l'IA pour avancer plus vite dans la synthèse de recherche, la structuration du cas et l'itération sur les textes et la mise en page. Le cadrage, le modèle d'interaction, les arbitrages et ce qu'il fallait laisser de côté sont restés les miens. L'IA a compressé le travail mécanique — elle n'a pas pris les décisions." },
      },
      constraints: [
        { icon: "alert",        term: "L'IA se trompera parfois",      desc: "Un outil de triage qui le cache est dangereux. Les mauvaises classifications doivent être visibles et faciles à repérer, pas enterrées sous une interface sûre." },
        { icon: "globe",        term: "Multilingue par défaut",        desc: "ES, PT, FR et EN arrivent mélangés. Le système détecte la langue pour qu'un réviseur ne soit jamais invité à approuver une réponse qu'il ne peut pas lire." },
        { icon: "bolt",         term: "Vitesse vs. contrôle",          desc: "L'objectif est de gagner du temps — mais un humain qui doit tout relire n'en gagne aucun. La vérification doit être rapide, pas optionnelle." },
        { icon: "check-circle", term: "Responsabilité",                desc: "Dans le service, quelqu'un répond de ce qui a été envoyé. Qui a approuvé quoi doit rester traçable." },
        { icon: "sitemap",      term: "Volume",                        desc: "Le triage n'a d'intérêt que quand il y a trop à lire. L'interface doit mettre l'attention à l'échelle, pas seulement lister les éléments." },
      ],
      decisions: [
        { name: "L'IA montre son niveau de certitude — elle ne prétend jamais être sûre.", problem: "La plupart des outils IA présentent le résultat comme un fait. Les gens valident sans lire et les mauvaises classifications arrivent directement au client.", decision: "Chaque classification porte un signal de confiance. Les éléments à faible confiance sont marqués « à réviser » et remontés en tête d'attention, pas mélangés.", tradeoff: "J'ai renoncé à la magie du « ça marche tout seul ». Admettre l'incertitude est moins impressionnant en démo — mais c'est ce qui attrape les erreurs avant qu'elles atteignent un client." },
        { name: "Rien ne part sans un humain. L'action par défaut est de réviser, pas d'envoyer.", problem: "L'automatisation totale est plus rapide, mais une mauvaise réponse automatique — mauvaise langue, ton ou réponse — est coûteuse et difficile à corriger.", decision: "L'IA rédige et propose ; elle n'envoie jamais. Un humain approuve chaque réponse sortante. L'action principale est de réviser, pas d'envoyer.", tradeoff: "J'ai renoncé à la vitesse de l'automatisation bout en bout au profit du contrôle et de la réversibilité. Un mauvais envoi à un client dépasse le temps économisé en l'automatisant." },
        { name: "L'IA s'explique en un coup d'œil, pour que le humain vérifie plutôt que de tout relire.", problem: "Un humain ne peut pas approuver ce qu'il ne comprend pas. Une boîte noire force la confiance aveugle ou une relecture complète — ce qui annule le temps que l'outil était censé économiser.", decision: "Chaque cas montre le pourquoi : langue détectée, intention, ce qui a déclenché l'urgence et ce qui manque encore. La vérification devient un coup d'œil.", tradeoff: "J'ai renoncé à la simplicité d'écran pour une couche d'explication. Plus à l'écran — mais c'est ce qui rend possible une approbation rapide et confiante." },
        { name: "La langue est détectée et rendue explicite, et le réviseur peut la vérifier.", problem: "Un réviseur peut ne pas bien lire la langue du client. Approuver une réponse qu'on ne peut pas lire entièrement est une confiance aveugle sous un autre nom.", decision: "Détecter et étiqueter la langue. Montrer la réponse rédigée dans la langue du client avec une rétrotraduction dans celle du réviseur, pour que sens et ton soient vérifiés avant approbation.", tradeoff: "Plus d'interface, plus de traitement par cas. Mais approuver un message qu'on ne peut pas lire contredit tout le principe de contrôle humain — donc le coût en vaut la peine." },
      ],
      evidence: [
        { num: 65, prefix: "~", suffix: "%", desc: "des clients s'attendent désormais à des réponses plus rapides qu'il y a cinq ans." },
        { num: 60, prefix: "~", suffix: "%", desc: "achètent rarement ou jamais auprès de sources qui ne sont pas dans leur propre langue." },
        { num: 14, prefix: "~", suffix: "%", desc: "des interactions en libre-service aboutissent réellement — la déflexion sans résolution échoue le client." },
      ],
      measure: [
        { metric: "Délai avant la première réponse sur les cas urgents",          reveals: "Le triage fait-il remonter le travail urgent ou se contente-t-il de le reclasser ?" },
        { metric: "À quelle fréquence le humain corrige l'IA — et sur quoi",      reveals: "Montre exactement où l'IA est encore faible." },
        { metric: "Combien de signaux à faible confiance étaient vraiment faux",   reveals: "Le signal de confiance est-il calibré ou juste du bruit ?" },
        { metric: "Réponses traitées par poste vs. la ligne de base manuelle",     reveals: "La validation manuelle coûte-t-elle plus qu'elle n'économise ?" },
        { metric: "Combien de cas ont stagné en attente d'information manquante",  reveals: "Le système fait-il remonter les lacunes ou les cache-t-il ?" },
        { metric: "Cohérence des réponses à la même question dans différentes langues", reveals: "La rétrotraduction conserve-t-elle vraiment le sens ?" },
      ],
    },
  },
};

export const i18n = { en, es, fr };
export function getT(lang) { return i18n[lang] || i18n.en; }

export function renderTitle(str) {
  const parts = str.split(/\*([^*]+)\*/);
  return parts.map((p, i) =>
    i % 2 === 0 ? p : createElement('span', { key: i, className: 'accent' }, p)
  );
}
