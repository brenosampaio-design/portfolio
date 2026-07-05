// ── Translations ─────────────────────────────────────────────────────────
// *word* inside a string = <span className="accent"> (italic serif).
// EN-only for now — es/fr were removed, unreachable with no language
// switcher in the UI. getT still takes a lang param so AppContext's lang
// plumbing keeps working if a switcher comes back later.

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
    factLabels: {
      role: "Role", type: "Type", platform: "Platform",
      stack: "Stack", status: "Status", delivered: "Delivered",
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
      lead: "At handover, what isn’t rebuilt from memory gets dropped — and what gets dropped becomes tomorrow’s complaint. This case is one operational view of what’s open, so information stops getting lost between PMS, chat, paper and memory.",
      contextHeading: "The day doesn’t end. It gets handed over.",
      processHeading: "Evidence I lived, assumptions to validate.",
      designHeading:  "Operational clarity before pretty reports.",
      outcomeHeading: "Hypotheses, not results.",
      snapshotProblem:   "On shift handover, operational information scatters across PMS, email, WhatsApp, notebooks and people’s memory — so the incoming shift can’t quickly see what’s open, what’s urgent, and what’s already resolved.",
      snapshotForWhom:   "Front-desk and service-operations teams — and everyone downstream: housekeeping, maintenance, shift leads, and ultimately the guest.",
      snapshotMyRole:    "Sole designer — problem framing from lived experience, flows, information architecture, system logic, and UI.",
      snapshotDelivered: "Core flows, key screens with real states, and a slice of the design system.",
      snapshotImpact:    "Less information lost at handover; faster context pickup for the incoming shift.",
      facts: {
        role:      "Sole designer — problem framing, IA, flows, system logic, UI",
        type:      "Internal web app · operational dashboard",
        platform:  "Desktop-first, mobile for quick logging",
        stack:     "Next.js · React · Tailwind (same as this site)",
        status:    "Concept case, based on lived experience",
        delivered: "Core flows, key screens with real states, DS slice",
      },
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

export const i18n = { en };
export function getT(lang) { return i18n[lang] || i18n.en; }
