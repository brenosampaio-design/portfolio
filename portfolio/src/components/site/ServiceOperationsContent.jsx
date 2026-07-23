"use client";
import { Text, Tag, Status, Button, Divider, QuoteBlock } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { CaseHero } from "@/components/site/CaseHero";
import { CaseSnapshot } from "@/components/site/CaseSnapshot";
import { CaseSection } from "@/components/site/CaseSection";
import { DecisionsLedger } from "@/components/site/DecisionsLedger";
import { BrowserFrame } from "@/components/site/BrowserFrame";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { MobileLog } from "@/components/site/MobileLog";
import { StatesGrid } from "@/components/site/StatesGrid";
import { ScatterFragments } from "@/components/site/ScatterFragments";
import { FlowDiagram } from "@/components/site/FlowDiagram";
import { useLang } from "@/context/AppContext";
import { getT } from "@/lib/i18n";

const STATES = [
  { label: "Empty", variant: "empty", caption: "No open or escalated incidents in this view." },
  { label: "Loading", variant: "loading" },
  { label: "Error", variant: "error", caption: "Save failed. Draft kept locally — retry when ready." },
  { label: "Success", variant: "success", caption: "Incident logged with owner, status and history." },
];

export function ServiceOperationsContent() {
  const { lang } = useLang();
  const t = getT(lang);
  const c = t.cases;
  const s = t.cases.serviceOps;

  const factItems = [
    { label: c.factLabels.role, value: s.facts.role },
    { label: c.factLabels.type, value: s.facts.type },
    { label: c.factLabels.platform, value: s.facts.platform },
    { label: c.factLabels.stack, value: s.facts.stack },
    { label: c.factLabels.status, value: s.facts.status },
    { label: c.factLabels.delivered, value: s.facts.delivered },
  ];

  return (
    <article>
      <CaseHero
        backHref="/#work"
        backLabel={c.back}
        tags={[s.tag, "2026"]}
        title={<>Incident & <span className="accent">Handover Workflow</span></>}
        lead={s.lead}
        visual={
          <BrowserFrame url="operations.local/open-now">
            <DashboardPreview />
          </BrowserFrame>
        }
      >
        <CaseSnapshot items={factItems} />
      </CaseHero>

      {/* ── Snapshot / TL;DR ─────────────────────────────────── */}
      <section id="snapshot" data-label="Snapshot" className="container section--tight" aria-label="Snapshot">
        <Reveal className="snapshot">
          <div className="snapshot__row">
            <Icon name="alert" className="snapshot__icon" />
            <span className="snapshot__label">{c.snapshot.problem}</span>
            <span className="snapshot__value">{s.snapshotProblem}</span>
          </div>
          <div className="snapshot__row">
            <Icon name="users" className="snapshot__icon" />
            <span className="snapshot__label">{c.snapshot.forWhom}</span>
            <span className="snapshot__value">{s.snapshotForWhom}</span>
          </div>
          <div className="snapshot__row">
            <Icon name="user" className="snapshot__icon" />
            <span className="snapshot__label">{c.snapshot.myRole}</span>
            <span className="snapshot__value">{s.snapshotMyRole}</span>
          </div>
          <div className="snapshot__row">
            <Icon name="package" className="snapshot__icon" />
            <span className="snapshot__label">{c.snapshot.delivered}</span>
            <span className="snapshot__value">{s.snapshotDelivered}</span>
          </div>
          <div className="snapshot__row snapshot__row--wide">
            <Icon name="target" className="snapshot__icon" />
            <span className="snapshot__label">{c.snapshot.impact}</span>
            <span className="snapshot__value">
              {s.snapshotImpact}
              <span style={{ color: "var(--stone)" }}> {c.snapshot.hypotheses}</span>
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── Context & problem ────────────────────────────────── */}
      <CaseSection id="context" label="Context" number={c.sectionNums.context} heading={s.contextHeading}>
        <Reveal className="prose">
          {s.contextProse.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>

        <Reveal>
          <ScatterFragments />
        </Reveal>

        <Reveal style={{ maxWidth: "var(--max-prose)", paddingBlock: "var(--space-6)" }}>
          <QuoteBlock size="md" quote={s.quote} />
        </Reveal>
      </CaseSection>

      <div className="container"><Divider /></div>

      {/* ── Role, scope & constraints ────────────────────────── */}
      <CaseSection id="scope" label="Scope" number={c.sectionNums.scope} heading={c.scopeHeading}>
        <Reveal className="prose">
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{c.roleLabel}</strong>{" "}
            {s.roleText}
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{c.scopeLabel}</strong>{" "}
            {s.scopeText}
          </p>
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{c.effortLabel}</strong>{" "}
            {s.effortText}
          </p>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-2)" }}>{c.constraintsHeading}</Text>
          <div className="def-list def-list--icon">
            {s.constraints.map((c_) => (
              <div className="def-item" key={c_.term}>
                <Icon name={c_.icon} className="def-item__icon" />
                <span className="def-item__term">{c_.term}</span>
                <span className="def-item__desc">{c_.desc}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </CaseSection>

      <div className="container"><Divider /></div>

      {/* ── Process ──────────────────────────────────────────── */}
      <CaseSection id="process" label="Process" number={c.sectionNums.process} heading={s.processHeading}>
        <Reveal className="prose">
          {s.processProse.map((item, i) => (
            <p key={i} className="muted">
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{item.label}</strong>{" "}
              {item.text}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <FlowDiagram />
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-8)" }}>{c.decisionsHeading}</Text>
        </Reveal>
        <DecisionsLedger decisions={s.decisions} />
      </CaseSection>

      <div className="container"><Divider /></div>

      {/* ── The design & system ──────────────────────────────── */}
      <CaseSection id="design" label="Design" number={c.sectionNums.design} heading={s.designHeading}>
        <Reveal className="prose">
          <p>{s.designProse[0]}</p>
          <p className="muted">{s.designProse[1]}</p>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{s.dsSliceHeading}</Text>
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
              <Text variant="small">{s.dsSliceNote}</Text>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{s.mobileHeading}</Text>
          <div className="design-mobile">
            <PhoneFrame>
              <MobileLog />
            </PhoneFrame>
            <div className="design-mobile__note prose">
              <p className="muted">{s.mobileProse}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{c.statesHeading}</Text>
          <StatesGrid states={STATES} />
        </Reveal>
      </CaseSection>

      <div className="container"><Divider /></div>

      {/* ── Outcome & reflection ─────────────────────────────── */}
      <CaseSection id="outcome" label="Outcome" number={c.sectionNums.outcome} heading={s.outcomeHeading}>
        <Reveal className="prose">
          <p className="muted">
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{s.outcomeProse.impact.label}</strong>{" "}
            {s.outcomeProse.impact.text}
          </p>
        </Reveal>

        <Reveal>
          <Text variant="h3" style={{ marginBottom: "var(--space-2)" }}>{c.measureHeading}</Text>
          <div className="measure-list">
            {s.measure.map((m, i) => (
              <div className="measure-item" key={i}>
                <span className="measure-item__num">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="measure-item__metric">{m.metric}</span>
                  <span className="measure-item__reveals">{m.reveals}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="prose">
          {["tradeoffs", "reflection", "different", "ai"].map((key) => (
            <p key={key} className={key === "reflection" ? "" : "muted"}>
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{s.outcomeProse[key].label}</strong>{" "}
              {s.outcomeProse[key].text}
            </p>
          ))}
        </Reveal>

        <Reveal className="case-cta">
          <Text variant="body" style={{ color: "var(--stone)" }}>{c.moreComing}</Text>
          <Button href="/#contact" variant="secondary">{c.getInTouch}</Button>
        </Reveal>
      </CaseSection>
    </article>
  );
}
