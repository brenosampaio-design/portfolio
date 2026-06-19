import Link from "next/link";
import { Text, Button, ProjectCard, Divider } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Cascade } from "@/components/site/Cascade";
import { ProcessHighlight } from "@/components/site/ProcessHighlight";
import { LocalTime } from "@/components/site/LocalTime";
import { profile, projects, approach, process, principles } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── 1 · Hero — copy left, editorial media right (mockup 5) ─ */}
      <section className="container hero" id="top" data-label="Intro" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal><span className="eyebrow eyebrow--accent">Product designer</span></Reveal>
            <Reveal mask delay={60}>
              <Text variant="display" id="hero-title" className="hero__title">
                Product designer with a <span className="accent">technical</span> edge.
              </Text>
            </Reveal>
            <Reveal delay={220}>
              <Text variant="body-lg" className="hero__lead" style={{ color: "var(--graphite)" }}>
                I turn messy operational reality into clear, usable products — and I care how
                they get built.
              </Text>
            </Reveal>
            <Reveal delay={320} className="hero__actions">
              <Button href="/work/service-operations" variant="primary">View selected work</Button>
              <Button href="#approach" variant="link">Learn about my approach</Button>
            </Reveal>
          </div>

          <Reveal delay={160} className="hero__media" aria-hidden="true">
            <span>Editorial image — to add</span>
          </Reveal>
        </div>

        <Reveal className="meta-strip" delay={120}>
          <div className="meta-strip__item">
            <span className="meta-strip__k">Operations → product</span>
            <span className="meta-strip__v">Designing from inside the work</span>
          </div>
          <div className="meta-strip__item">
            <span className="meta-strip__k">B2B · B2C</span>
            <span className="meta-strip__v">Service operations &amp; tools</span>
          </div>
          <div className="meta-strip__item">
            <span className="meta-strip__k">Discovery → handoff</span>
            <span className="meta-strip__v">Systems thinking, build-aware</span>
          </div>
          <div className="meta-strip__spacer" />
          <span className="scroll-cue">
            Scroll
            <span className="arrow" aria-hidden="true">↓</span>
          </span>
        </Reveal>
      </section>

      {/* ── 2 · Selected work — 4-up editorial row (mockup 3) ──── */}
      <section className="container section" id="work" data-label="Selected work" aria-labelledby="work-title">
        <div className="section-head">
          <Reveal><span className="eyebrow eyebrow--accent">Selected work</span></Reveal>
          <Reveal mask delay={60}><Text variant="h2" id="work-title">Selected work</Text></Reveal>
          <Reveal delay={140}>
            <Text variant="body" style={{ color: "var(--stone)", maxWidth: "48ch" }}>
              One case shown in full, problem first. The rest is coming as I document it — one
              honest piece beats a padded grid.
            </Text>
          </Reveal>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <Reveal key={p.slug || `upcoming-${i}`} delay={i * 90}>
              <ProjectCard
                category={p.category}
                title={p.title}
                problem={p.problem}
                role={p.role}
                year={p.year}
                href={p.href}
                upcoming={p.upcoming}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 3 · Approach — numbered editorial rows (mockup 4) ──── */}
      <section className="container section" id="approach" data-label="Approach" aria-labelledby="approach-title">
        <div className="approach">
          <div className="section-head">
            <Reveal><span className="eyebrow eyebrow--accent">Approach</span></Reveal>
            <Reveal mask delay={60}>
              <Text variant="h2" id="approach-title">
                Design with <span className="accent">purpose</span>, build with <span className="accent">perspective</span>.
              </Text>
            </Reveal>
            <Reveal delay={140}>
              <Text variant="body" style={{ color: "var(--stone)", maxWidth: "40ch" }}>
                My approach connects user needs, business goals and technical reality to create
                products that are useful, usable and built to last.
              </Text>
            </Reveal>
          </div>

          <div className="principle-list">
            {approach.map((a, i) => (
              <Cascade key={a.title} className="principle-row" base={i * 85} step={55}>
                <span className="principle-row__index reveal" data-cascade>{String(i + 1).padStart(2, "0")}</span>
                <div className="principle-row__name">
                  <span className="principle-row__title reveal" data-cascade>{a.title}</span>
                </div>
                <p className="principle-row__desc reveal" data-cascade>{a.description}</p>
              </Cascade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · Process — 6-column grid (mockup 1) ────────────── */}
      <section className="container section" id="process" data-label="Process" aria-labelledby="process-title">
        <div className="process-head">
          <div className="stack" style={{ gap: "var(--space-4)" }}>
            <Reveal><span className="eyebrow eyebrow--accent">Process</span></Reveal>
            <Reveal mask delay={60}>
              <Text variant="h2" id="process-title">
                A clear process. Built for <span className="accent">impact</span>.
              </Text>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Text variant="body" style={{ color: "var(--stone)" }}>
              A structured way to turn operational complexity into clarity. Each step builds on
              the last — useful, usable, and built to ship.
            </Text>
          </Reveal>
        </div>

        <div className="process-grid">
          {process.map((step, i) => (
            <Cascade key={step.title} className="process-col" base={i * 300} step={40}>
              <span className="process-col__index reveal" data-cascade>{String(i + 1).padStart(2, "0")}</span>
              <span className="process-col__title reveal" data-cascade>{step.title}</span>
              <span className="process-col__desc reveal" data-cascade>{step.description}</span>
              <ul className="process-col__items">
                {step.items.map((it) => (
                  <li className="reveal" data-cascade key={it}>{it}</li>
                ))}
              </ul>
            </Cascade>
          ))}
        </div>
        <ProcessHighlight targetId="process" steps={4} interval={1150} startDelay={2300} />
      </section>

      {/* ── 5 · Principles — numbered rows + annotation (mockup 6) ─ */}
      <section className="container section" id="principles" data-label="Principles" aria-labelledby="principles-title">
        <div className="approach">
          <div className="section-head">
            <Reveal><span className="eyebrow eyebrow--accent">Principles</span></Reveal>
            <Reveal mask delay={60}>
              <Text variant="h2" id="principles-title">
                Guiding choices. <span className="accent">Creating impact</span>.
              </Text>
            </Reveal>
            <Reveal delay={140}>
              <Text variant="body" style={{ color: "var(--stone)", maxWidth: "40ch" }}>
                These principles shape the way I think, design and collaborate. Not rules, but a
                compass for meaningful work.
              </Text>
            </Reveal>
          </div>

          <div className="principle-list">
            {principles.map((pr, i) => (
              <Cascade key={pr.principle} className="principle-row" base={i * 80} step={50}>
                <span className="principle-row__index reveal" data-cascade>{String(i + 1).padStart(2, "0")}</span>
                <div className="principle-row__name">
                  <span className="principle-row__title reveal" data-cascade>{pr.principle}</span>
                  {pr.annotation && <span className="principle-row__annotation reveal" data-cascade>{pr.annotation}</span>}
                </div>
                <p className="principle-row__desc reveal" data-cascade>{pr.description}</p>
              </Cascade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · About — copy · portrait · facts (mockup 2) ─────── */}
      <section className="container about-hero" id="about" data-label="About" aria-labelledby="about-title">
        <div className="about-hero__copy">
          <Reveal><span className="eyebrow eyebrow--accent">About Breno</span></Reveal>
          <Reveal mask delay={60}>
            <Text variant="h1" className="about-hero__title" id="about-title">
              Product designer with a <span className="accent">strategic</span> and{" "}
              <span className="accent">operational</span> mindset.
            </Text>
          </Reveal>
          <Reveal delay={160}>
            <Text variant="body-lg" style={{ maxWidth: "44ch", color: "var(--graphite)" }}>
              I help teams turn complexity into clarity and ideas into products that create value.
              My work sits at the intersection of strategy, experience and execution.
            </Text>
          </Reveal>
          <Reveal delay={240}>
            <Link href="/about" className="link-arrow">
              Read the full story
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="portrait" role="img" aria-label="Portrait of Breno Sampaio — photo to be added">
            <span>Portrait — to add</span>
          </div>
        </Reveal>

        <Reveal delay={200} className="about-facts">
          <div className="about-fact">
            <span className="about-fact__label">Based in</span>
            <span className="about-fact__value">{profile.location}</span>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">Working</span>
            <span className="about-fact__value">Remotely · global projects</span>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">Languages</span>
            <div className="stack" style={{ gap: "var(--space-2)", marginTop: "var(--space-1)" }}>
              {profile.languages.map((l) => (
                <span className="lang-row" key={l.name}>
                  <span className="about-fact__value">{l.name}</span>
                  <span className="lang-row__level">{l.level}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">Certification</span>
            <span className="about-fact__value">Google UX Design Certificate</span>
          </div>
        </Reveal>
      </section>

      <div className="container"><Divider /></div>

      {/* ── 7 · Contact (mockup 7) ────────────────────────────── */}
      <section className="container section" id="contact" data-label="Contact" aria-labelledby="contact-title">
        <div className="contact">
          <div className="stack" style={{ gap: "var(--space-6)" }}>
            <Reveal><span className="eyebrow eyebrow--accent">Let&rsquo;s connect</span></Reveal>
            <Reveal mask delay={60}>
              <Text variant="h1" id="contact-title" style={{ maxWidth: "16ch" }}>
                Let&rsquo;s create products with <span className="accent">clarity</span> and <span className="accent">purpose</span>.
              </Text>
            </Reveal>
            <Reveal delay={160}>
              <Text variant="body" style={{ color: "var(--stone)", maxWidth: "46ch" }}>
                I&rsquo;m currently available for new opportunities. If the problem is real,
                I&rsquo;d like to hear about it.
              </Text>
            </Reveal>
          </div>

          <Reveal className="contact-list" delay={120}>
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <span className="stack" style={{ gap: "var(--space-1)" }}>
                <span className="contact-row__label">Email</span>
                <span className="contact-row__value">{profile.email}</span>
              </span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <div className="contact-row">
              <span className="stack" style={{ gap: "var(--space-1)" }}>
                <span className="contact-row__label">Location</span>
                <span className="contact-row__value">{profile.location}</span>
              </span>
            </div>
            <div className="contact-row">
              <span className="stack" style={{ gap: "var(--space-1)" }}>
                <span className="contact-row__label">Local time</span>
                <span className="contact-row__value">
                  <LocalTime timeZone={profile.timezone} />
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
