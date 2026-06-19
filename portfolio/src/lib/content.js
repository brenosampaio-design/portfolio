// Single source of real content. No invented clients, metrics, or logos.

export const profile = {
  name: "Breno Sampaio",
  role: "Product Designer with a technical edge",
  location: "Valencia, Spain",
  timezone: "Europe/Madrid",
  email: "hello@brenosampaio.com",
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Strong" },
    { name: "English", level: "Working" },
  ],
};

// Selected work — one real case, then honest placeholders for what's next.
export const projects = [
  {
    slug: "service-operations",
    category: "Concept case",
    title: "Service Operations Dashboard",
    problem:
      "One operational view of what's open at shift handover, so information stops getting lost between tools, paper and memory.",
    role: "Sole designer",
    year: "2026",
    href: "/work/service-operations",
  },
  {
    category: "In progress",
    title: "Next case",
    problem: "A second case study is being written up. One honest piece beats a padded grid.",
    role: "Documenting",
    upcoming: true,
  },
  {
    category: "Coming soon",
    title: "Operational work",
    problem: "Turning years of real service-operations work into proper case studies.",
    role: "Documenting",
    upcoming: true,
  },
  {
    category: "Coming soon",
    title: "Design systems",
    problem: "A systems-focused case is on the way — components, tokens and the rules between them.",
    role: "Documenting",
    upcoming: true,
  },
];

// Process — Breno's own working method (not the mockup's copy). Problem-first,
// systems-minded, build-aware. Six steps from discovery to handoff.
export const process = [
  {
    title: "Discover",
    description: "Understand the operation, the people, and the constraints before proposing anything.",
    items: ["Talk to the people doing the work", "Map where information lives", "Find the failure points", "Separate evidence from assumption"],
  },
  {
    title: "Frame",
    description: "Turn the mess into a clear problem worth solving, with explicit scope.",
    items: ["Define the real problem", "Set what's in and out of scope", "Name the constraints", "Decide what success looks like"],
  },
  {
    title: "Systems",
    description: "Design the structure before the screens — the rules that keep things consistent.",
    items: ["Information architecture", "Core flows", "States and rules", "Tokens and components"],
  },
  {
    title: "Interface",
    description: "Make it clear, fast, and honest — designed for the worst moment, not the demo.",
    items: ["Hierarchy and contrast", "Guided over free-form", "Every state, not just the happy path", "Plain language"],
  },
  {
    title: "Validate",
    description: "Test the assumptions with real people and iterate on what breaks.",
    items: ["Put it in front of real users", "Watch behaviour, not opinions", "Iterate on what breaks", "Keep what holds"],
  },
  {
    title: "Deliver",
    description: "Hand off so it ships as designed — build-aware, with the edge cases written down.",
    items: ["Build-aware specs", "Work with engineering", "Edge cases documented", "Support through implementation"],
  },
];

// Approach — how Breno works a project, step by step (mockup 4). His own voice.
export const approach = [
  {
    title: "Understand the work deeply",
    description:
      "I start inside the operation — behaviours, constraints, and where things actually break — before proposing anything.",
  },
  {
    title: "Anchor in real context",
    description:
      "I align every decision with how the business actually runs and what's feasible, not how it looks on a slide.",
  },
  {
    title: "Think in systems, not screens",
    description:
      "I design the structure first — information architecture, flows, states and rules — so it stays coherent as it grows.",
  },
  {
    title: "Design with clarity and restraint",
    description:
      "I simplify without dumbing down. Hierarchy, content and interaction over decoration — clear, not clever.",
  },
  {
    title: "Build with implementation in mind",
    description:
      "I design knowing it has to ship, and work with engineering through edge cases and handoff so it gets built right.",
  },
];

// Principles — Breno's guiding values (mockup 6). Compass, not rules.
export const principles = [
  {
    annotation: "間 ma",
    principle: "Clarity over noise",
    description: "I remove what's unnecessary so what matters can speak.",
  },
  {
    annotation: "",
    principle: "Usefulness first",
    description: "I design with purpose, solving real problems for real people.",
  },
  {
    annotation: "渋 shibui",
    principle: "Restraint with intention",
    description: "I choose less, but with precision — restraint is a feature, not a shortage.",
  },
  {
    annotation: "",
    principle: "Design for the worst moment",
    description: "The real test isn't the demo — it's a tired person at 3am. I design for them.",
  },
  {
    annotation: "",
    principle: "Systems thinking",
    description: "I see the whole, then design each part to belong and stay consistent.",
  },
  {
    annotation: "",
    principle: "Build-aware craft",
    description: "I care how it's built, because that's what decides whether it ships as designed.",
  },
];
