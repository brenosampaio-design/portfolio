"use client";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Divider } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Scramble } from "@/components/site/Scramble";
import { profile } from "@/lib/content";
import { useLang } from "@/context/AppContext";
import { getT } from "@/lib/i18n";
import { renderTitle } from "@/lib/renderTitle";

export function AboutContent() {
  const { lang } = useLang();
  const t = getT(lang);
  const ta = t.aboutPage;

  return (
    <article>
      {/* ── Hero — copy · portrait · facts sidebar ──────────── */}
      <header className="container about-hero">
        <div className="about-hero__copy">
          <Scramble className="eyebrow eyebrow--accent" text={ta.eyebrow} delay={120} />
          <Reveal mask delay={60}>
            <Text variant="display" className="about-hero__title">
              {renderTitle(ta.heading)}
            </Text>
          </Reveal>
          <Reveal delay={220}>
            <Text variant="body-lg" style={{ maxWidth: "44ch", color: "var(--graphite)" }}>
              {ta.lead}
            </Text>
          </Reveal>
          <Reveal delay={300}>
            <Link href="/breno-sampaio-cv.pdf" className="link-arrow" style={{ marginTop: "var(--space-2)" }}>
              {ta.downloadCv}
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="portrait portrait--photo">
            <Image
              src="/images/breno-portrait.png"
              alt="Breno Sampaio"
              fill
              sizes="(max-width: 980px) 90vw, 360px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={160} className="about-facts">
          <div className="about-fact">
            <span className="about-fact__label">{ta.facts.basedIn}</span>
            <span className="about-fact__value">{profile.location}</span>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">{ta.facts.working}</span>
            <span className="about-fact__value">{ta.facts.workingValue}</span>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">{ta.facts.languages}</span>
            <div className="stack" style={{ gap: "var(--space-2)", marginTop: "var(--space-1)" }}>
              {profile.languages.map((l) => (
                <span className="lang-row" key={l.name}>
                  <span className="about-fact__value">{t.languageNames[l.name] || l.name}</span>
                  <span className="lang-row__level">{t.languageLevels[l.level] || l.level}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">{ta.facts.cert}</span>
            <span className="about-fact__value">{ta.facts.certValue}</span>
          </div>
          <div className="about-fact">
            <span className="about-fact__label">{ta.facts.status}</span>
            <span className="about-fact__value">{ta.facts.statusValue}</span>
          </div>
        </Reveal>
      </header>

      <div className="container"><Divider /></div>

      {/* ── Narrative ────────────────────────────────────────── */}
      <section className="container section about-body" aria-labelledby="story-title">
        <div className="section-head">
          <Scramble className="eyebrow eyebrow--accent" text={ta.storyEyebrow} />
          <Reveal mask>
            <Text variant="h2" id="story-title">
              {renderTitle(ta.storyHeading)}
            </Text>
          </Reveal>
        </div>

        <Reveal className="prose">
          {ta.story.map((para, i) => (
            <p key={i} className={i > 0 ? "muted" : undefined}>
              {para.replace("{location}", profile.location)}
            </p>
          ))}

          <div style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
            <Button href="/work/service-operations" variant="primary">{ta.ctaWork}</Button>
            <Link href="/#contact" className="link-arrow">
              {ta.ctaContact}
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
