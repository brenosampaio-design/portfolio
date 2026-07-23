"use client";
import Link from "next/link";
import { Text, Tag, Status, Button, Divider, QuoteBlock } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Scramble } from "@/components/site/Scramble";
import { Collapsible } from "@/components/site/Collapsible";
import { Icon } from "@/components/site/Icon";
import { DecisionsLedger } from "@/components/site/DecisionsLedger";
import { BrowserFrame } from "@/components/site/BrowserFrame";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import { Confidence } from "@/components/site/Confidence";
import { TriageInbox } from "@/components/site/TriageInbox";
import { ChannelScatter } from "@/components/site/ChannelScatter";
import { SystemFlow } from "@/components/site/SystemFlow";
import { TriageFlow } from "@/components/site/TriageFlow";
import { AnalysisPanel } from "@/components/site/AnalysisPanel";
import { CorrectionFlow } from "@/components/site/CorrectionFlow";
import { TriageStates } from "@/components/site/TriageStates";
import { TriageMobile } from "@/components/site/TriageMobile";
import { CountUp } from "@/components/site/CountUp";
import { useLang } from "@/context/AppContext";
import { getT } from "@/lib/i18n";

export function TriageAIContent() {
  const { lang } = useLang();
  const t = getT(lang);
  const c = t.cases;
  const s = t.cases.triageai;

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="container case-hero">
        <Reveal>
          <Link href="/#work" className="case-back">
            <span aria-hidden="true">←</span> {c.back}
          </Link>
        </Reveal>

        <div className="stack" style={{ gap: "var(--space-6)" }}>
          <Reveal>
            <div className="case-hero__meta">
              <Tag>{c.conceptCase}</Tag>
              <Tag>{s.tag}</Tag>
              <Tag>2026</Tag>
            </div>
          </Reveal>
          <Reveal mask delay={60}>
            <Text variant="display" className="case-hero__title">
              Multilingual <span className="accent">Support Triage</span>
            </Text>
          </Reveal>
          <Reveal delay={160}>
            <Text variant="body-lg" style={{ maxWidth: "60ch", color: "var(--graphite)" }}>
              {s.lead}
            </Text>
          </Reveal>
        </div>

        <Reveal delay={240} className="case-hero__visual">
          <BrowserFrame url="support.local/intake">
            <TriageInbox />
          </BrowserFrame>
        </Reveal>
      </header>

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
      <section id="sec-context" data-label="Context" className="container section case-section" aria-labelledby="ctx">
        <Collapsible
          defaultOpen
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text={c.sectionNums.context} />
              <Reveal mask>
                <Text variant="h2" id="ctx">{s.contextHeading}</Text>
              </Reveal>
            </div>
          }
        >
          <Reveal className="prose">
            {s.contextProse.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>

          <Reveal>
            <div className="evidence">
              <span className="evidence__label">{s.evidenceLabel}</span>
              <div className="evidence__grid">
                {s.evidence.map((e) => (
                  <div className="evidence-stat" key={e.num}>
                    <span className="evidence-stat__num">
                      <CountUp value={e.num} prefix={e.prefix} suffix={e.suffix} />
                    </span>
                    <span className="evidence-stat__desc">{e.desc}</span>
                  </div>
                ))}
              </div>
              <span className="evidence__src">{s.evidenceSrc}</span>
            </div>
          </Reveal>

          <Reveal>
            <ChannelScatter />
          </Reveal>

          <Reveal style={{ maxWidth: "var(--max-prose)", paddingBlock: "var(--space-6)" }}>
            <QuoteBlock size="md" quote={s.quote} />
          </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── Role, scope & constraints ────────────────────────── */}
      <section id="sec-scope" data-label="Scope" className="container section case-section" aria-labelledby="scope">
        <Collapsible
          defaultOpen
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text={c.sectionNums.scope} />
              <Reveal mask>
                <Text variant="h2" id="scope">{c.scopeHeading}</Text>
              </Reveal>
            </div>
          }
        >
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

          <Reveal>
            <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{s.sysGateHeading}</Text>
            <SystemFlow />
          </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── Process ──────────────────────────────────────────── */}
      <section id="sec-process" data-label="Process" className="container section case-section" aria-labelledby="process">
        <Collapsible
          defaultOpen
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text={c.sectionNums.process} />
              <Reveal mask>
                <Text variant="h2" id="process">{s.processHeading}</Text>
              </Reveal>
            </div>
          }
        >
          <Reveal className="prose">
            {s.processProse.map((item, i) => (
              <p key={i} className="muted">
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{item.label}</strong>{" "}
                {item.text}
              </p>
            ))}
          </Reveal>

          <Reveal>
            <TriageFlow />
          </Reveal>

          <Reveal>
            <Text variant="h3" style={{ marginBottom: "var(--space-8)" }}>{c.decisionsHeading}</Text>
          </Reveal>
          <DecisionsLedger decisions={s.decisions} />
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── The design & system ──────────────────────────────── */}
      <section id="sec-design" data-label="Design" className="container section case-section" aria-labelledby="design">
        <Collapsible
          defaultOpen
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text={c.sectionNums.design} />
              <Reveal mask>
                <Text variant="h2" id="design">{s.designHeading}</Text>
              </Reveal>
            </div>
          }
        >
          <Reveal className="prose">
            <p>{s.designProse[0]}</p>
            <p className="muted">
              {s.designProse[1]}{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{s.designEmphasis.low}</strong>{" "}
              {lang === "en" ? "and" : lang === "fr" ? "et" : "y"}{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{s.designEmphasis.caught}</strong>
            </p>
          </Reveal>

          <Reveal>
            <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{s.analysisPanelHeading}</Text>
            <BrowserFrame url="triageai.app/case/REQ-4488">
              <AnalysisPanel />
            </BrowserFrame>
          </Reveal>

          <Reveal>
            <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{s.correctionHeading}</Text>
            <CorrectionFlow />
          </Reveal>

          <Reveal>
            <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{s.dsSliceHeading}</Text>
            <div className="specimen">
              <div className="incident">
                <div className="incident__top">
                  <span className="incident__id">REQ-4471</span>
                  <Confidence level="low" />
                </div>
                <span className="incident__title">“No recibí el reembolso de mi reserva cancelada.”</span>
                <div className="incident__meta">
                  <Tag>ES</Tag>
                  <Tag>Refund</Tag>
                  <Status variant="urgent">Urgent</Status>
                </div>
                <div className="incident__fields">
                  <div className="incident__field">
                    <span className="incident__key">Channel</span>
                    <span className="incident__val">WhatsApp</span>
                  </div>
                  <div className="incident__field">
                    <span className="incident__key">Intent</span>
                    <span className="incident__val">Refund request</span>
                  </div>
                  <div className="incident__field">
                    <span className="incident__key">Missing</span>
                    <span className="incident__val">Booking reference</span>
                  </div>
                  <div className="incident__field">
                    <span className="incident__key">Action</span>
                    <span className="incident__val">Needs review</span>
                  </div>
                </div>
              </div>

              <div className="stack" style={{ gap: "var(--space-5)" }}>
                <div className="stack" style={{ gap: "var(--space-2)" }}>
                  <span className="incident__key">Confidence tokens</span>
                  <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                    <Confidence level="high" />
                    <Confidence level="review" />
                    <Confidence level="low" />
                  </div>
                </div>
                <div className="stack" style={{ gap: "var(--space-2)" }}>
                  <span className="incident__key">Tags — language · intent · urgency</span>
                  <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                    <Tag>ES</Tag>
                    <Tag>PT</Tag>
                    <Tag>FR</Tag>
                    <Tag>EN</Tag>
                    <Tag>Refund</Tag>
                    <Tag>Maintenance</Tag>
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
                <TriageMobile />
              </PhoneFrame>
              <div className="design-mobile__note prose">
                <p className="muted">{s.mobileProse}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Text variant="h3" style={{ marginBottom: "var(--space-6)" }}>{c.statesHeading}</Text>
            <TriageStates />
          </Reveal>
        </Collapsible>
      </section>

      <div className="container"><Divider /></div>

      {/* ── Outcome & reflection ─────────────────────────────── */}
      <section id="sec-outcome" data-label="Outcome" className="container section case-section" aria-labelledby="outcome">
        <Collapsible
          defaultOpen
          header={
            <div className="case-section__head">
              <Scramble className="eyebrow eyebrow--accent" text={c.sectionNums.outcome} />
              <Reveal mask>
                <Text variant="h2" id="outcome">{s.outcomeHeading}</Text>
              </Reveal>
            </div>
          }
        >
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
            {["tradeoffs", "reflection", "ai"].map((key) => (
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
        </Collapsible>
      </section>
    </article>
  );
}
