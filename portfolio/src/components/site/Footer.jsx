"use client";
import { Text } from "@/components/ds";
import { Wordmark } from "./Wordmark";
import { useLang } from "@/context/AppContext";
import { getT } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  const t = getT(lang);
  const year = 2026;

  return (
    <footer className="site-footer" id="contact-footer">
      <div className="container site-footer__grid">
        <div className="stack" style={{ gap: "var(--space-2)" }}>
          <Text variant="small" style={{ color: "var(--ink)" }}>
            © {year} Breno Sampaio
          </Text>
          <Text variant="small">{t.footer.location}</Text>
        </div>

        <div className="stack" style={{ gap: "var(--space-3)" }}>
          <span className="eyebrow">{t.footer.elsewhere}</span>
          <div className="footer-social">
            <a className="link-quiet" href="https://www.linkedin.com/in/brenosampaio" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <span className="sep" aria-hidden="true">·</span>
            <a className="link-quiet" href="mailto:hello@brenosampaio.com">
              Email
            </a>
          </div>
        </div>

        <div className="stack" style={{ gap: "var(--space-3)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-6)" }}>
            <Text variant="small" style={{ maxWidth: "26ch" }}>
              {t.footer.tagline}
            </Text>
            <div className="footer-seal">
              <Wordmark />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
