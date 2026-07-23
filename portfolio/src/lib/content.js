// Single source of real content. No invented clients, metrics, or logos.

export const profile = {
  name: "Breno Sampaio",
  role: "Software implementation and application support",
  location: "Valencia, Spain",
  timezone: "Europe/Madrid",
  email: "hello@brenosampaio.com",
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Professional / Fluent" },
    { name: "English", level: "Professional working" },
  ],
};

// Selected work — one real case, then honest placeholders for what's next.
export const projects = [
  {
    slug: "service-operations",
    category: "Concept case",
    title: "Incident & Handover Workflow",
    problem:
      "An operational workflow for logging, assigning, escalating and handing over open incidents with clear status, ownership and history.",
    role: "Technical-functional concept",
    year: "2026",
    href: "/work/service-operations",
  },
  {
    slug: "triageai",
    category: "Concept case",
    title: "Multilingual Support Triage",
    problem:
      "A support intake workflow that structures, prioritises and routes multilingual requests while keeping every outgoing response under human approval.",
    role: "Technical-functional concept",
    year: "2026",
    href: "/work/triageai",
  },
];

// Process — Breno's own working method (not the mockup's copy). Problem-first,
// systems-minded, build-aware. Six steps from discovery to handoff.
export const process = [
  {
    title: "Discover",
    icon: "search",
    description: "Understand users, operations, current tools and failure points.",
    items: ["Interview the people doing the work", "Map where information lives", "Find operational gaps", "Separate evidence from assumption"],
  },
  {
    title: "Requirements",
    icon: "frame",
    description: "Define scope, functional needs, business rules and acceptance criteria.",
    items: ["Write functional requirements", "Name constraints and dependencies", "Define what is out of scope", "Agree what success means"],
  },
  {
    title: "Configure",
    icon: "sitemap",
    description: "Translate the workflow into data, states, permissions and routing.",
    items: ["Map required data", "Define states and transitions", "Set roles and permissions", "Document integration assumptions"],
  },
  {
    title: "Test",
    icon: "check-circle",
    description: "Verify normal flows, exceptions, validation and access.",
    items: ["Test the happy path", "Exercise error and recovery states", "Check permissions", "Prepare and support UAT"],
  },
  {
    title: "Onboard",
    icon: "layout",
    description: "Prepare documentation, training and handover for adoption.",
    items: ["Write practical guidance", "Train around real tasks", "Clarify ownership", "Track adoption questions"],
  },
  {
    title: "Support",
    icon: "send",
    description: "Reproduce issues, gather evidence and improve the process.",
    items: ["Capture steps and evidence", "Prioritise by impact", "Follow resolution clearly", "Feed recurring issues back"],
  },
];

// Approach — how Breno works a project, step by step (mockup 4). His own voice.
export const approach = [
  {
    title: "Understand the real workflow",
    description:
      "Start with users, current tools, constraints and the moments where information, ownership or service breaks.",
  },
  {
    title: "Map requirements and dependencies",
    description:
      "Turn the operational problem into explicit scope, functional requirements, constraints and acceptance criteria.",
  },
  {
    title: "Define data, states and responsibilities",
    description:
      "Make fields, status changes, permissions, routing rules and ownership clear before configuration begins.",
  },
  {
    title: "Test normal and failure paths",
    description:
      "Check the happy path, exceptions, validation, access, integrations and recovery — not only the demo flow.",
  },
  {
    title: "Document and support adoption",
    description:
      "Prepare users, hand over decisions clearly and keep learning from support issues after launch.",
  },
];

// Principles — Breno's guiding values (mockup 6). Compass, not rules.
export const principles = [
  {
    annotation: "",
    principle: "Clear communication",
    description: "State scope, decisions, risks and next actions in language each team can use.",
  },
  {
    annotation: "",
    principle: "Operational fit",
    description: "Configure around the real workflow, not an idealised process that disappears after launch.",
  },
  {
    annotation: "",
    principle: "Traceability",
    description: "Keep ownership, status changes, approvals and support evidence visible.",
  },
  {
    annotation: "",
    principle: "Human control",
    description: "Automate support work without hiding uncertainty or removing accountable review.",
  },
  {
    annotation: "",
    principle: "Multilingual context",
    description: "Treat language as an operational requirement across intake, documentation and support.",
  },
  {
    annotation: "",
    principle: "UX as a supporting layer",
    description: "Use clarity and restraint to reduce errors, training effort and cognitive load.",
  },
];
