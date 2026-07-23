// ── Translations ─────────────────────────────────────────────────────────
// *word* inside a string = <span className="accent"> (italic serif).
// EN-only for now — es/fr were removed, unreachable with no language
// switcher in the UI. getT still takes a lang param so AppContext's lang
// plumbing keeps working if a switcher comes back later.

const en = {
  nav: { work: "Work", about: "About", approach: "Approach", contact: "Contact" },
  availability: "Open to roles",

  hero: {
    title:  "Software implementation, grounded in *real operations*.",
    lead:   "I bring multilingual operations and UX/UI experience to SaaS onboarding, application support and technical-functional problem solving across PT, ES, FR and EN.",
    cta1:   "View implementation cases",
    cta2:   "See how I work",
  },

  work: {
    eyebrow:    "Implementation & support",
    heading:    "Implementation & support case studies.",
    subheading: "Two concepts translating operational problems into requirements, workflows, rules, testable states and support documentation.",
    more:       "No invented clients, integrations or outcomes.",
  },

  approach: {
    eyebrow:    "Approach",
    heading:    "From operational problem to *adopted system*.",
    subheading: "I connect users, operations and technical teams so requirements, exceptions and responsibilities stay clear in the real workflow.",
  },

  process: {
    eyebrow:    "Process",
    heading:    "A clear path from discovery to *support*.",
    subheading: "A cycle from requirements and configuration through testing, onboarding and support.",
  },

  principles: {
    eyebrow:    "Principles",
    heading:    "Principles for reliable *implementation*.",
    subheading: "Behaviours keeping software understandable, traceable and useful across teams, languages and handovers.",
  },

  about: {
    eyebrow: "About Breno",
    heading: "From frontline operations to *software implementation*.",
    lead:    "Service operations taught me where systems fail. UX/UI and technical foundations now help me connect users, workflows and technical teams.",
    cta:     "Read the full story",
    facts: {
      basedIn:       "Based in",
      working:       "Availability",
      workingValue:  "Hybrid · remote",
      languages:     "Languages",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
    },
  },

  contact: {
    eyebrow:   "Let's connect",
    heading:   "Let’s make software easier to *implement, adopt and support*.",
    body:      "I’m open to junior and associate roles in software implementation, SaaS onboarding, application support and technical-functional consulting.",
    email:     "Email",
    location:  "Location",
    localTime: "Local time",
  },

  footer: {
    location:  "Valencia, Spain · open to hybrid and remote roles",
    elsewhere: "Elsewhere",
    tagline:   "Clear systems help people do better work.",
  },

  aboutPage: {
    eyebrow:     "About Breno",
    heading:     "From frontline operations to *software implementation*.",
    lead:        "I learned software from the operational side first — where unclear ownership, fragmented information and poor handovers become real service problems.",
    downloadCv:  "Download CV",
    facts: {
      basedIn:       "Based in",
      working:       "Availability",
      workingValue:  "Hybrid · remote",
      languages:     "Languages",
      cert:          "Certification",
      certValue:     "Google UX Design Certificate",
      status:        "Status",
      statusValue:   "Open to implementation & support roles",
    },
    storyEyebrow: "The path",
    storyHeading: "Operations taught me what software must *actually do*.",
    story: [
      "Years in service operations, hotel reception and shift work showed me where systems fail in real life: information scattered across tools, unclear ownership, inconsistent processes and software that adds work instead of reducing it.",
      "That experience shaped the way I approach implementation and support. I start with the real workflow, translate it into requirements, states and responsibilities, test normal and failure paths, document decisions and help users adopt the system.",
      "My UX/UI background supports that work through clear interfaces and lower cognitive load. I am also building a practical technical foundation in SQL, relational data, APIs, HTTP/JSON, Postman, Git and troubleshooting — without presenting concept work as deployed software.",
      "I work across Portuguese, Spanish, French and English. Based in {location}, I’m open to junior and associate roles in software implementation, SaaS onboarding, application support and technical-functional consulting.",
    ],
    ctaWork:    "View implementation cases",
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
      title: "Incident & Handover Workflow",
      problem: "An operational workflow for logging, assigning, escalating and handing over open incidents with clear status, ownership and history.",
      role: "Technical-functional concept", year: "2026", href: "/work/service-operations",
    },
    {
      slug: "triageai", category: "Concept case", title: "Multilingual Support Triage",
      problem: "A support intake workflow that structures, prioritises and routes multilingual requests while keeping every outgoing response under human approval.",
      role: "Technical-functional concept", year: "2026", href: "/work/triageai",
    },
  ],

  approachItems: [
    { title: "Understand the real workflow", description: "Start with users, tools, constraints and where information, ownership or service breaks." },
    { title: "Map requirements and dependencies", description: "Turn the problem into explicit scope, requirements, constraints and acceptance criteria." },
    { title: "Define data, states and responsibilities", description: "Make fields, status changes, permissions, routing rules and ownership clear before configuration begins." },
    { title: "Test normal and failure paths", description: "Check the happy path, exceptions, validation, access, integrations and recovery — not only the demo flow." },
    { title: "Document and support adoption", description: "Prepare users, hand over decisions clearly and keep learning from support issues after launch." },
  ],

  processSteps: [
    { title: "Discover", icon: "search", description: "Understand users, operations, current tools and failure points.", items: ["Interview the people doing the work", "Map where information lives", "Find operational gaps", "Separate evidence from assumption"] },
    { title: "Requirements", icon: "frame", description: "Define scope, functional needs, business rules and acceptance criteria.", items: ["Write functional requirements", "Name constraints and dependencies", "Define what is out of scope", "Agree what success means"] },
    { title: "Configure", icon: "sitemap", description: "Translate the workflow into data, states, permissions and routing.", items: ["Map required data", "Define states and transitions", "Set roles and permissions", "Document integration assumptions"] },
    { title: "Test", icon: "check-circle", description: "Verify normal flows, exceptions, validation and access.", items: ["Test the happy path", "Exercise error and recovery states", "Check permissions", "Prepare and support UAT"] },
    { title: "Onboard", icon: "layout", description: "Prepare documentation, training and handover for adoption.", items: ["Write practical guidance", "Train around real tasks", "Clarify ownership", "Track adoption questions"] },
    { title: "Support", icon: "send", description: "Reproduce issues, gather evidence and improve the process.", items: ["Capture steps and evidence", "Prioritise by impact", "Follow resolution clearly", "Feed recurring issues back"] },
  ],

  principlesItems: [
    { annotation: "", principle: "Clear communication", description: "State scope, decisions, risks and next actions in language each team can use." },
    { annotation: "", principle: "Operational fit", description: "Configure around the real workflow, not an idealised process that disappears after launch." },
    { annotation: "", principle: "Traceability", description: "Keep ownership, status changes, approvals and support evidence visible." },
    { annotation: "", principle: "Human control", description: "Automate support work without hiding uncertainty or removing accountable review." },
    { annotation: "", principle: "Multilingual context", description: "Treat language as an operational requirement across intake, documentation and support." },
    { annotation: "", principle: "UX as a supporting layer", description: "Use clarity and restraint to reduce errors, training effort and cognitive load." },
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
    constraintsHeading: "Operational constraints",
    decisionsHeading:   "Functional decisions",
    measureHeading:     "What I'd measure next",
    statesHeading:      "System states and recovery",
    scopeHeading:       "A real problem, an honest proposal.",
    moreComing:  "Looking for implementation and support work grounded in real operations?",
    getInTouch:  "Start a conversation",

    serviceOps: {
      tag: "Incident & handover workflow",
      lead: "An implementation concept for logging, assigning, escalating and handing over incidents with clear status, ownership and history.",
      contextHeading: "The day doesn’t end. Responsibility changes hands.",
      processHeading: "From operational failure to testable requirements.",
      designHeading:  "A workflow defined by data, states and ownership.",
      outcomeHeading: "A pilot plan, not invented results.",
      snapshotProblem:   "At handover, information is split across PMS notes, email, messaging, paper and memory. The incoming team cannot reliably see what is open, urgent or owned.",
      snapshotForWhom:   "Reception, housekeeping, maintenance and supervisors who share responsibility for unresolved service incidents.",
      snapshotMyRole:    "Independent technical-functional concept — analysis, workflow and requirements definition, data and state modelling, interface design and validation planning.",
      snapshotDelivered: "Current-state map, functional workflow, field and status model, key screens, error states, acceptance criteria and pilot plan.",
      snapshotImpact:    "Faster context pickup, clearer ownership and fewer incidents lost between shifts — all hypotheses to validate.",
      facts: {
        role:      "Operational analysis · requirements · workflow · validation planning",
        type:      "Technical-functional concept · internal operations",
        platform:  "Desktop handover · mobile incident logging",
        stack:     "Interactive prototype in Next.js and React · no live integrations",
        status:    "First-hand operations concept",
        delivered: "Requirements · rules · states · prototype · acceptance criteria",
      },
      quote: "If ownership, status and next action are not explicit, the next shift has to rebuild the operation from fragments.",
      contextProse: [
        "A shift may end while the work continues. Reception can open an incident, other teams can act and a supervisor can decide whether to escalate.",
        "The failure is not missing notes. It is the absence of one dependable record with an owner, status, priority, next action and history. When these live across tools and memory, the next shift rebuilds context.",
        "This concept defines the smallest shared workflow to log, assign, update, escalate, resolve and hand over an incident without claiming live integrations.",
      ],
      roleText:   "Independent concept covering operational analysis, stakeholder mapping, requirements, business rules, data and state modelling, interface design and validation planning.",
      scopeText:  "The problem comes from first-hand service experience. The workflow is a proposal, not deployed software; integrations remain future assumptions.",
      effortText: "A concept developed across workflow mapping, requirements, system logic, prototype states and validation planning.",
      processProse: [
        { label: "Current-state analysis.", text: "Evidence from reception and shift work was separated from assumptions. The recurring failure was fragmented information and unclear ownership; adoption of a guided log and the effect of an “open now” view still require testing with a real team." },
        { label: "Functional model.", text: "Core entities are incident, user, team, location and activity entry. Required incident fields are category, location, priority, owner, status, description, next action and updated-at time." },
        { label: "Acceptance criteria.", text: "A user can log an incident with required-field validation; only permitted roles can reassign or close it; every status change creates history; failed saves keep the draft and offer retry; the handover view shows every open or escalated item with owner and next action." },
      ],
      dsSliceHeading: "Implementation specimen — incident record",
      dsSliceNote:    "The card exposes the minimum data another team needs to act: category, location, priority, owner, status and next action. Structured fields support filtering, routing and audit history.",
      mobileHeading:  "Mobile intake — required data without long forms",
      mobileProse:    "Guided choices keep mobile logging short while preserving the fields needed for assignment, escalation and handover. Free text adds context; it does not replace structured data.",
      designProse: [
        "The handover view answers four operational questions: what is still open, what is urgent, who owns it and what happens next. Filters and summaries are secondary to those decisions.",
        "The workflow covers draft, open, assigned, in progress, escalated, resolved and reopened states. Validation, permissions, save failure and retry are part of the specification, not edge cases left for implementation.",
      ],
      outcomeProse: {
        impact:     { label: "Expected impact — to validate.", text: "Clearer ownership, faster context pickup, fewer incidents dropped at handover and less rework between reception, housekeeping and maintenance. These are hypotheses, not measured outcomes." },
        tradeoffs:  { label: "Pilot and support plan.", text: "Start with one shift and the logging flow, then run UAT on assignment, escalation, closure and save recovery. Provide a one-page guide, train supervisors first, record support issues for two weeks and only then decide whether integrations or reporting are justified." },
        reflection: { label: "Implementation limit.", text: "The prototype demonstrates workflow and interface behaviour. It does not connect to a PMS, messaging platform or production database, and it should not be read as a deployed integration." },
        different:  { label: "What I’d test first.", text: "I would validate required fields and logging time before expanding the dashboard. If people avoid the intake flow under pressure, the handover view cannot become reliable." },
        ai:         { label: "AI-assisted workflow.", text: "AI supported drafting and edge-case review. The operational framing, requirements, rules, trade-offs and final decisions remained mine." },
      },
      constraints: [
        { icon: "globe", term: "Multilingual teams", desc: "Labels and status language must stay objective across Portuguese, Spanish, French and English." },
        { icon: "devices", term: "Two work contexts", desc: "Desktop supports handover and supervision; mobile supports quick logging away from the desk." },
        { icon: "moon", term: "Low attention", desc: "Night and end-of-shift work cannot depend on memory or interpretation." },
        { icon: "check-circle", term: "Role permissions", desc: "Agents can log and update; supervisors can reassign, escalate and close with an auditable reason." },
        { icon: "wifi", term: "Save reliability", desc: "A failed save must preserve the draft, show the failure and provide a clear retry path." },
      ],
      decisions: [
        { name: "Every open incident needs an owner and next action", problem: "A status without responsibility still leaves the incoming shift guessing.", decision: "Block handover-ready status until owner and next action are present.", tradeoff: "Adds two required fields, but prevents incomplete work from appearing ready." },
        { name: "Status transitions follow business rules", problem: "Free status changes make history unreliable and allow work to disappear.", decision: "Define permitted transitions and require a reason for escalation, reassignment, reopening and closure.", tradeoff: "Less flexibility in exchange for traceability." },
        { name: "Structured fields before free text", problem: "Unstructured notes cannot be routed, filtered or measured consistently.", decision: "Require category, location, priority, owner and status; keep a short description for context.", tradeoff: "Slightly more input effort for more reliable downstream use." },
        { name: "Supervisor actions remain auditable", problem: "Reassignment or closure without history makes support and accountability difficult.", decision: "Record actor, timestamp, previous value, new value and reason for privileged changes.", tradeoff: "More data to store, but enough evidence to investigate issues." },
        { name: "Save failure never discards work", problem: "A user under pressure will abandon a tool after losing an incident report once.", decision: "Keep the draft locally, state what failed and expose one retry action.", tradeoff: "Requires explicit recovery behaviour instead of a generic error." },
      ],
      measure: [
        { metric: "Incidents without owner or next action", reveals: "Whether required data is improving handover quality." },
        { metric: "Time to log an incident", reveals: "Whether the workflow is practical under shift pressure." },
        { metric: "Time to first ownership and resolution", reveals: "Whether routing leads to action, not only logging." },
        { metric: "Reopened incidents", reveals: "Whether closure criteria match operational reality." },
        { metric: "Failed saves and successful retries", reveals: "Whether recovery protects adoption." },
        { metric: "Incidents reported outside the workflow", reveals: "Whether the team has adopted the shared record." },
      ],
    },

    triageai: {
      tag: "Multilingual support intake",
      lead: "A technical-functional concept for structuring, prioritising and routing support requests across four languages — while keeping every outgoing response under human approval.",
      contextHeading:  "A message is not yet a support case.",
      processHeading:  "From raw intake to owned, traceable work.",
      designHeading:   "Routing rules, human approval and failure handling.",
      outcomeHeading:  "Support hypotheses and an onboarding plan.",
      sysGateHeading:  "The support flow, with ownership and approval marked",
      analysisPanelHeading: "Review the classification before the reply",
      correctionHeading:    "Correction, escalation and audit history",
      dsSliceHeading:  "Implementation specimen — structured support case",
      dsSliceNote:     "The case record exposes channel, language, intent, priority, missing data, confidence, owner and next action so routing and review are explicit.",
      mobileHeading:   "Mobile review — act without accidental sends",
      mobileProse:     "The mobile view keeps classification, missing information and confidence visible. Agents can approve or correct; sending still requires an intentional human action.",
      snapshotProblem:   "Requests arrive through email, messaging and web forms in Portuguese, Spanish, French and English without consistent priority, ownership or required data.",
      snapshotForWhom:   "Multilingual service and support teams that need to route inbound work, protect SLAs and keep customer-facing decisions accountable.",
      snapshotMyRole:    "Independent technical-functional concept — intake mapping, routing and escalation rules, permissions, failure states, interface design and validation planning.",
      snapshotDelivered: "Input schema, priority and routing rules, human approval flow, error handling, audit trail, key screens and support metrics.",
      snapshotImpact:    "Faster ownership of urgent work, fewer lost requests and more consistent replies — hypotheses to validate with a real team.",
      evidenceLabel: "Concept scope — concrete inputs, not market claims",
      evidenceSrc:   "The figures describe the proposed workflow only. They are not usage, performance or customer outcome data.",
      quote: "Support becomes manageable when every request has the data, priority, owner and next action needed to move.",
      contextProse: [
        "A message can arrive by email, messaging or web form in four languages. It may be missing an account reference, contain duplicate information or describe an urgent problem without using an obvious keyword.",
        "Before a team can respond, the message needs a case ID, detected language, channel, customer reference, intent, priority, SLA, owner, confidence level and list of missing fields. Without that structure, routing happens in someone’s head and urgent work competes with whatever arrived first.",
        "This concept uses automated classification to propose structure and a reply, but it does not allow unattended sending. An agent verifies the case; a supervisor handles escalation and policy exceptions; every correction and approval stays in the activity history.",
      ],
      roleText:   "Independent concept covering input mapping, functional requirements, routing and escalation rules, permissions, error handling, interface design and validation planning.",
      scopeText:  "TriageAI remains the internal concept name. The workflow is illustrated, not deployed; no production model, CRM, messaging or API integration is running behind the prototype.",
      effortText: "A focused concept developed across support workflow mapping, system rules, exception handling, prototype states and validation planning.",
      processProse: [
        { label: "Input contract.", text: "A simplified API payload would carry channel, received_at, customer_reference, subject, message and attachments. The system adds case_id, detected_language, intent, priority, SLA target, owner, confidence and missing_fields." },
        { label: "Routing and escalation.", text: "High-priority refund, access and safety cases move ahead of the queue. Low-confidence or incomplete cases require review; SLA risk or policy exceptions escalate to a supervisor; duplicates link to the original case instead of creating parallel work." },
        { label: "Failure handling.", text: "Invalid payloads enter a recoverable intake queue, unavailable integrations retry with visible status, missing required data creates a customer-information task and every manual override records actor, timestamp, old value, new value and reason." },
      ],
      designProse: [
        "The inbox prioritises work that needs attention now: SLA risk, high priority, low confidence, missing required data and failed routing. Each case shows the proposed classification and the evidence an agent needs to verify it.",
        "The review gate made the example testable:",
      ],
      designEmphasis: { low: "low confidence was visible", caught: "the proposed classification was corrected before anything reached the customer." },
      outcomeProse: {
        impact:     { label: "Expected impact — to validate.", text: "Faster ownership of urgent cases, fewer requests lost across channels, more consistent multilingual responses and fewer incorrect replies reaching customers. These are hypotheses, not results." },
        tradeoffs:  { label: "Pilot and onboarding plan.", text: "Begin with one channel and a narrow intent set. Run UAT on routing, missing data, duplicates, SLA escalation, correction and send approval. Train agents on the review queue, supervisors on overrides and support staff on integration-failure evidence before adding more automation." },
        reflection: { label: "Implementation limit.", text: "The prototype demonstrates workflow and interface behaviour. It is not a trained model, live API, CRM integration or production support system." },
        ai:         { label: "AI-assisted workflow.", text: "AI supported research organisation, drafting and edge-case review. The support model, routing rules, permissions, trade-offs and final decisions remained mine." },
      },
      constraints: [
        { icon: "alert", term: "Classification can be wrong", desc: "Low confidence, conflicting signals and manual corrections must be visible before approval." },
        { icon: "globe", term: "Four working languages", desc: "Portuguese, Spanish, French and English can arrive in the same queue; language and back-translation stay explicit." },
        { icon: "bolt", term: "SLA and priority", desc: "Urgent work must move ahead without letting an automated label silently decide the customer outcome." },
        { icon: "check-circle", term: "Two permission levels", desc: "Agents review and approve; supervisors override routing, escalation and policy-sensitive decisions." },
        { icon: "sitemap", term: "Integration failure", desc: "Unavailable channels, invalid payloads and duplicate cases need recoverable states, evidence and ownership." },
      ],
      decisions: [
        { name: "No response leaves without human approval", problem: "A wrong language, priority or answer can create a larger support incident.", decision: "Automation may propose classification and copy, but an agent must approve every outgoing response.", tradeoff: "Less automation speed in exchange for accountable customer communication." },
        { name: "Routing uses explicit rules and confidence", problem: "A single predicted label can misroute urgent or ambiguous work.", decision: "Combine intent, priority, SLA and confidence; low-confidence or conflicting cases enter manual review.", tradeoff: "More states to operate, but fewer silent routing failures." },
        { name: "Missing data creates a task, not a dead end", problem: "Support cases often arrive without the reference needed to act.", decision: "List missing fields, assign ownership and prepare a request for information before the case can progress.", tradeoff: "Slower completion for incomplete cases, but visible progress instead of hidden waiting." },
        { name: "Overrides require a reason", problem: "Unexplained changes make it impossible to improve routing or investigate mistakes.", decision: "Store actor, timestamp, previous value, new value and reason for every manual override.", tradeoff: "One extra action for supervisors in exchange for traceability." },
        { name: "Status never relies on colour alone", problem: "A support queue must communicate confidence and urgency to every reviewer.", decision: "Pair colour with text and icon, with contrast meeting WCAG 2.1 AA.", tradeoff: "More visual tokens to maintain, but more reliable interpretation." },
      ],
      evidence: [
        { num: 4, prefix: "", suffix: "", desc: "working languages in one support queue: PT, ES, FR and EN." },
        { num: 3, prefix: "", suffix: "", desc: "intake channels modelled: email, messaging and web form." },
        { num: 1, prefix: "", suffix: "", desc: "required human approval gate before any response is sent." },
      ],
      measure: [
        { metric: "Time to first ownership by priority", reveals: "Whether routing protects urgent SLAs." },
        { metric: "Manual override rate by intent and language", reveals: "Where classification or routing still needs work." },
        { metric: "Cases stalled by missing information", reveals: "Whether the intake contract captures actionable data." },
        { metric: "Duplicate and invalid payload rate", reveals: "Where channel integrations need correction." },
        { metric: "Approval time and replies per shift", reveals: "Whether human control remains operationally viable." },
        { metric: "Reopened and escalated cases", reveals: "Whether the proposed resolution and priority rules hold." },
      ],
    },
  },
};

export const i18n = { en };
export function getT(lang) { return i18n[lang] || i18n.en; }
