import Link from "next/link";
import Image from "next/image";
import { Text, Button, Divider } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Scramble } from "@/components/site/Scramble";
import { profile } from "@/lib/content";

export const metadata = {
  title: "About",
  description:
    "From running service operations to designing them. Product designer with a technical edge, based in Valencia, Spain.",
};

export default function About() {
  return (
    <article>
      {/* ── Hero — copy · portrait · facts sidebar (mockup 2) ──── */}
      <header className="container about-hero">
        <div className="about-hero__copy">
          <Scramble className="eyebrow eyebrow--accent" text="About Breno" delay={120} />
          <Reveal mask delay={60}>
            <Text variant="display" className="about-hero__title">
              Product designer with a <span className="accent">strategic</span> and{" "}
              <span className="accent">operational</span> mindset.
            </Text>
          </Reveal>
          <Reveal delay={220}>
            <Text variant="body-lg" style={{ maxWidth: "44ch", color: "var(--graphite)" }}>
              I came to design from inside the operation, not from the outside looking in — and
              that&rsquo;s still how I work.
            </Text>
          </Reveal>
          <Reveal delay={300}>
            <Link href="/breno-sampaio-cv.pdf" className="link-arrow" style={{ marginTop: "var(--space-2)" }}>
              Download CV
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="portrait portrait--photo">
            <Image
              src="/images/breno-portrait.png"
              alt="Breno Sampayo"
              fill
              sizes="(max-width: 980px) 90vw, 360px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Reveal>

        <Reveal delay={160} className="about-facts">
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
          <div className="about-fact">
            <span className="about-fact__label">Status</span>
            <span className="about-fact__value">Open to new work · in transition</span>
          </div>
        </Reveal>
      </header>

      <div className="container"><Divider /></div>

      {/* ── Narrative ────────────────────────────────────────── */}
      <section className="container section about-body" aria-labelledby="story-title">
        <div className="section-head">
          <Scramble className="eyebrow eyebrow--accent" text="The path" />
          <Reveal mask>
            <Text variant="h2" id="story-title">
              From running operations to <span className="accent">designing</span> them.
            </Text>
          </Reveal>
        </div>

        <Reveal className="prose">
          <p>
            For years my job was the operation itself — service operations, hotel reception,
            shift work, the front and back office where things actually happen. I was the person
            taking over a shift with half the context missing, or handing one over hoping nothing
            would slip.
          </p>
          <p className="muted">
            That&rsquo;s where I learned what software does to people under pressure. A good tool
            disappears and lets you do the work. A bad one becomes one more thing to manage. I
            started designing because I wanted to build the first kind.
          </p>
          <p className="muted">
            Today I work as a product designer with an implementation sensibility: I think in
            systems, I build and use design systems, and I work AI-assisted to move faster through
            research, structure and iteration — while keeping the design judgment my own. I earned
            the Google UX Design Certificate along the way, but the foundation is the years I spent
            inside the problems I now design for.
          </p>
          <p className="muted">
            I read and work across Portuguese (native), Spanish (fluent), French (strong) and
            English (working). I&rsquo;m based in {profile.location}, working remotely, and
            currently in transition — open to product roles and collaborations where the problems
            are real.
          </p>

          <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
            <Button href="/work/service-operations" variant="primary">View selected work</Button>
            <Link href="/#contact" className="link-arrow">
              Get in touch
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
