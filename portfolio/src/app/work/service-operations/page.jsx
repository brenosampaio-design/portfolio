import Link from "next/link";
import { Text, Tag, Status, Button, Divider, QuoteBlock } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Scramble } from "@/components/site/Scramble";
import { Collapsible } from "@/components/site/Collapsible";
import { Icon } from "@/components/site/Icon";

export const metadata = {
  title: "Service Operations Dashboard",
  description:
    "Concept case — one operational view of what's open at shift handover, so information stops getting lost between tools, paper and memory.",
};

const decisions = [
  {
    name: "Status and urgency before detail",
    problem: "At handover the person is tired or rushed and can't read everything in depth.",
    decision: "Put status, priority, affected area and next action up front.",
    tradeoff: "Gave up a visually cleaner screen — some information has to show fast, even if it takes space.",
  },
  {
    name: "Guided logging, not a free-text box",
    problem: "When everything is free text, everyone writes differently — later it's hard to read, filter, or chase resolution.",
    decision: "Simple structured fields — category, room, area, priority, owner, status, short description.",
    tradeoff: "Gave up total freedom to write anything, because too much freedom becomes operational mess.",
  },
  {
    name: "Designed for a tired shift, not for a pretty demo",
    problem: "Late at night or end of shift, there's no energy to interpret a complex interface.",
    decision: "Clear contrast, strong hierarchy, few steps, direct language.",
    tradeoff: "Gave up sophisticated microinteractions and visual flourishes where they didn't help the real work.",
  },
];

const constraints = [
  { icon: "globe", term: "Multilingual teams", desc: "Staff and guests may speak ES, PT, FR or EN — the interface has to stay simple, objective and unambiguous across languages." },
  { icon: "devices", term: "Mobile + desktop", desc: "Desktop at the counter; a quick check on phone or tablet on the move." },
  { icon: "moon", term: "Tired people on night shifts", desc: "The interface can't rely on memory, patience, or interpretation." },
  { icon: "bolt", term: "Almost no time to log", desc: "If logging an incident is slow, the team falls back to WhatsApp, paper, or “later.”" },
  { icon: "wifi", term: "Slow connection, heavy systems", desc: "It has to be light, with clear saving — and reduce noise, not add it. Not one more tool that adds work." },
];

const measure = [
  "Incidents left open per shift",
  "Time to resolution",
  "How many get reopened",
  "How many are dropped at handover",
  "Which areas generate the most pending work",
  "How long it takes to log one incident",
];

export default function ServiceOperationsCase() {
  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="container case-hero">
        <Reveal>
          <Link href="/#work" className="case-back">
            <span aria-hidden="true">←</span> Selected work
          </Link>
        </Reveal>

        <div className="stack" style={{ gap: "var(--space-6)" }}>
          <Reveal>
            <div className="case-hero__meta">
              <Tag>Concept case</Tag>
              <Tag>Service operations</Tag>
              <Tag>2026</Tag>
            </div>
          </Reveal>
          <Reveal mask delay={60}>
            <Text variant="display" className="case-hero__title">
              Service Operations <span className="accent">Dashboard</span>
            </Text>
          </Reveal>
          <Reveal delay={160}>
            <Text variant="body-lg" style={{ maxWidth: "60ch", color: "var(--graphite)" }}>
              One operational view of what&rsquo;s open at shift handover — so information stops
              getting lost between PMS, chat, paper and memory.
            </Text>
          </Reveal>
        </div>
      </header>

      {/* ── Snapshot / TL;DR ─────────────────────────────────── */}
      <section id="snapshot" data-label="Snapshot" className="container section--tight" aria-label="Snapshot">
        <Reveal className="snapshot">
          <div className="snapshot__row">
            <Icon name="alert" className="snapshot__icon" />
            <span className="snapshot__rowMain">
              <span className="snapshot__label">Problem</span>
              <span className="snapshot__value">
                On shift handover, operational information scatters across PMS, email, WhatsApp,
                notebooks and people&rsquo;s memory — so the incoming shift can&rsquo;t quickly see
                what&rsquo;s open, what&rsquo;s urgent, and what&rsquo;s already resolved.
              </span>
            </span>
          </div>
          <div className="snapshot__row">
            <Icon name="users" className="snapshot__icon" />
            <span className="snapshot__rowMain">
              <span className="snapshot__label">For whom</span>
              <span className="snapshot__value">
                Front-desk and service-operations teams — and everyone downstream: housekeeping,
                maintenance, shift leads, and ultimately the guest.
              </span>
            </span>
          </div>
          <div className="snapshot__row">
            <Icon name="user" className="snapshot__icon" />
            <span className="snapshot__rowMain">
              <span className="snapshot__label">My role</span>
              <span className="snapshot__value">
                Sole designer — problem framing from lived experience, flows, information
                architecture, system logic, and UI.
              </span>
            </span>
          </div>
          <div className="snapshot__row">
            <Icon name="package" className="snapshot__icon" />
            <span className="snapshot__rowMain">
              <span className="snapshot__label">Delivered</span>
              <span className="snapshot__value">
                Core flows, key screens with real states, and a slice of the design system.
              </span>
            </span>
          </div>
          <div className="snapshot__row snapshot__row--wide">
            <Icon name="target" className="snapshot__icon" />
            <span className="snapshot__rowMain">
              <span className="snapshot__label">Expected impact — to validate</span>
              <span className="snapshot__value">
                Less information lost at handover; faster context pickup for the incoming shift.
                <span style={{ color: "var(--stone)" }}> Hypotheses to test — no numbers until measured.</span>
              </span>
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── Context & problem ────────────────────────────────── */}
      <section id="sec-context" data-label="Context" className="container section case-section" aria-labelledby="ctx">
        <Collapsible
          defaultOpen
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text="01 — Context & problem" />
              <Reveal mask>
                <Text variant="h2" id="ctx">The day doesn&rsquo;t end. It gets handed over.</Text>
              </Reveal>
            </div>
          }
        >
        <Reveal className="prose">
          <p>
            In a hotel front desk, the day doesn&rsquo;t end — it gets handed over. And the
            handover is where things quietly break.
          </p>
          <p>
            The problem was never &ldquo;logging an incident.&rdquo; It&rsquo;s that the information
            lives everywhere at once: the PMS, email, a WhatsApp group, a paper notebook, a
            spreadsheet, a post-it, a verbal &ldquo;by the way,&rdquo; and — most fragile of all — in
            the head of whoever just left.
          </p>
          <p>
            So on a typical night, small things slip: a guest who asked for something and never
            got it, a maintenance task left pending, a room with a special note, a charge to
            double-check, a no-show, a key, a late-checkout request, a complaint that started
            small and grows into a review.
          </p>
          <p>
            The person taking over can&rsquo;t quickly see what&rsquo;s actually open, what&rsquo;s
            already resolved, what&rsquo;s urgent, and what was merely <em>mentioned</em> but never
            properly logged. They rebuild context from fragments — and what doesn&rsquo;t get
            rebuilt, gets dropped.
          </p>
        </Reveal>

        <Reveal style={{ maxWidth: "var(--max-prose)", paddingBlock: "var(--space-6)" }}>
          <QuoteBlock
            size="md"
            quote="The handover usually lives nowhere — half in a notebook, half in a chat, half in someone's memory."
          />
        </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── Role, scope & constraints ────────────────────────── */}
      <section id="sec-scope" data-label="Scope" className="container section case-section" aria-labelledby="scope">
        <Collapsible
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text="02 — Role, scope & constraints" />
              <Reveal mask>
                <Text variant="h2" id="scope">A real problem, an honest proposal.</Text>
              </Reveal>
            </div>
          }
        >
        <Reveal className="prose">
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Role.</strong> Sole designer.
            Research from lived experience, flow mapping, information architecture, system logic,
            screens and UI.
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Scope.</strong> Concept case
            based on real operational experience in hotel reception, shift work and front/back
            office — not a product deployed in a real hotel. The problem is real; the solution is a
            proposal.
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Effort.</strong> A few weeks
            across research, framing the problem, flows, IA, wireframes, UI and refinement.
          </p>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-2)" }}>Constraints I designed for</Text>
          <div className="def-list def-list--icon">
            {constraints.map((c) => (
              <div className="def-item" key={c.term}>
                <Icon name={c.icon} className="def-item__icon" />
                <span className="def-item__term">{c.term}</span>
                <span className="def-item__desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── Process ──────────────────────────────────────────── */}
      <section id="sec-process" data-label="Process" className="container section case-section" aria-labelledby="process">
        <Collapsible
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text="03 — Process" />
              <Reveal mask>
                <Text variant="h2" id="process">Evidence I lived, assumptions to validate.</Text>
              </Reveal>
            </div>
          }
        >
        <Reveal className="prose">
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Research, evidence, assumptions.</strong>{" "}
            Grounded in first-hand experience of reception, shift handover, guest service and hotel
            operations. What&rsquo;s <em>evidence</em>: the scattering of information and the failure
            points at handover — I lived those. What&rsquo;s <em>assumption to validate</em>: that a
            guided, fast log will actually be adopted under pressure, and that a single &ldquo;open
            now&rdquo; view changes handover behavior. These need testing with real teams.
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Flows, information architecture.</strong>{" "}
            Before → after: from information scattered across tools and memory, to one operational
            view of what&rsquo;s open. Core flows: log an incident · hand over a shift · see
            what&rsquo;s open now · resolve and update with history.
          </p>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>Key design decisions</Text>
          <div className="decision-grid">
            {decisions.map((d, i) => (
              <div className="decision" key={d.name}>
                <span className="decision__index">{String(i + 1).padStart(2, "0")}</span>
                <div className="decision__body">
                  <span className="decision__name">{d.name}</span>
                  <div className="decision__line">
                    <span className="decision__tag">Problem</span>
                    <span className="decision__text">{d.problem}</span>
                  </div>
                  <div className="decision__line">
                    <span className="decision__tag">Decision</span>
                    <span className="decision__text">{d.decision}</span>
                  </div>
                  <div className="decision__line">
                    <span className="decision__tag">Trade-off</span>
                    <span className="decision__text">{d.tradeoff}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── The design & system ──────────────────────────────── */}
      <section id="sec-design" data-label="Design" className="container section case-section" aria-labelledby="design">
        <Collapsible
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text="04 — The design & system" />
              <Reveal mask>
                <Text variant="h2" id="design">Operational clarity before pretty reports.</Text>
              </Reveal>
            </div>
          }
        >
        <Reveal className="prose">
          <p>
            The main screen is an operational dashboard. On open, it shows what matters <em>now</em>:
            open incidents, urgent items, pending work by area, next actions, and a handover summary.
            Not pretty reports first — operational clarity first: <em>what do I need to know to take
            over the shift without getting lost?</em>
          </p>
          <p className="muted">
            UI states designed (not just the happy path): empty · loading · error · success · edge
            cases — the states a tired user actually hits. The design-system slice below shows the
            structured incident card, status and priority tokens, and the fields used in guided
            logging — because consistency here is what makes it implementable.
          </p>
        </Reveal>

        {/* Design-system slice — the delivered specimen (real, not a fake screen) */}
        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>Design-system slice — incident card</Text>
          <div className="specimen">
            <div className="incident">
              <div className="incident__top">
                <span className="incident__id">INC-2041</span>
                <Status variant="urgent">Urgent</Status>
              </div>
              <span className="incident__title">Late checkout requested — room note pending</span>
              <div className="incident__meta">
                <Tag>Front desk</Tag>
                <Tag>Guest request</Tag>
              </div>
              <div className="incident__fields">
                <div className="incident__field">
                  <span className="incident__key">Category</span>
                  <span className="incident__val">Guest request</span>
                </div>
                <div className="incident__field">
                  <span className="incident__key">Room</span>
                  <span className="incident__val">412</span>
                </div>
                <div className="incident__field">
                  <span className="incident__key">Area</span>
                  <span className="incident__val">Reception</span>
                </div>
                <div className="incident__field">
                  <span className="incident__key">Owner</span>
                  <span className="incident__val">Night shift</span>
                </div>
              </div>
            </div>

            <div className="stack" style={{ gap: "var(--space-5)" }}>
              <div className="stack" style={{ gap: "var(--space-2)" }}>
                <span className="incident__key">Status tokens</span>
                <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                  <Status variant="default">Open</Status>
                  <Status variant="urgent">Urgent</Status>
                  <Status variant="done">Resolved</Status>
                </div>
              </div>
              <div className="stack" style={{ gap: "var(--space-2)" }}>
                <span className="incident__key">Guided fields</span>
                <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                  <Tag>Category</Tag>
                  <Tag>Room</Tag>
                  <Tag>Area</Tag>
                  <Tag>Priority</Tag>
                  <Tag>Owner</Tag>
                  <Tag>Status</Tag>
                </div>
              </div>
              <Text variant="small">
                A small specimen, shown on purpose: structured fields and a fixed set of states are
                what let the team log fast and read each other&rsquo;s entries without guessing.
              </Text>
            </div>
          </div>
        </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── Outcome & reflection ─────────────────────────────── */}
      <section id="sec-outcome" data-label="Outcome" className="container section case-section" aria-labelledby="outcome">
        <Collapsible
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text="05 — Outcome & reflection" />
              <Reveal mask>
                <Text variant="h2" id="outcome">Hypotheses, not results.</Text>
              </Reveal>
            </div>
          }
        >
        <Reveal className="prose">
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Expected impact — to validate.</strong>{" "}
            Less information lost at handover; faster context pickup for the incoming shift; less
            rework between reception, housekeeping and maintenance; small incidents not staying
            invisible until they become bigger complaints. Hypotheses, not results.
          </p>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-2)" }}>What I&rsquo;d measure next</Text>
          <div className="def-list">
            {measure.map((m, i) => (
              <div className="def-item" key={m}>
                <span className="def-item__term">{String(i + 1).padStart(2, "0")}</span>
                <span className="def-item__desc">{m}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="prose">
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Trade-offs &amp; next steps.</strong>{" "}
            I kept this concept focused on the handover problem. Analytics, reporting and PMS
            integration were deliberately left out — they matter, but building them before validating
            the core flow would add complexity the product hasn&rsquo;t earned yet. The next step is
            testing the guided log and the &ldquo;open now&rdquo; view with a real shift, then deciding
            what to build around them.
          </p>
          <p>
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Reflection.</strong> Designing for
            tired people at 3am taught me that UX isn&rsquo;t about making things pretty or modern.
            Sometimes the best design is the one that reduces mental effort, removes ambiguity, and
            helps a person do the right thing <em>even when they&rsquo;re at their limit.</em>
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>What I&rsquo;d do differently.</strong>{" "}
            If I were to redo this, I&rsquo;d test the logging flow first, before investing in the
            dashboard — the dashboard assumes adoption that the log hasn&rsquo;t proven yet. Starting
            with the smallest testable unit would validate the core behaviour earlier and inform
            whether the full view earns its complexity.
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>On AI-assisted workflow.</strong>{" "}
            I used AI to move faster through research synthesis, structuring the case, and iterating on
            copy and layout. The problem framing, the design decisions and their trade-offs, and the
            judgment on what to leave out stayed mine. AI compressed the busywork — it didn&rsquo;t
            make the calls.
          </p>
        </Reveal>

        <Reveal className="case-cta">
          <Text variant="body" style={{ color: "var(--stone)" }}>
            More case studies coming as I document them.
          </Text>
          <Button href="/#contact" variant="secondary">Get in touch</Button>
        </Reveal>
        </Collapsible>
      </section>
    </article>
  );
}
