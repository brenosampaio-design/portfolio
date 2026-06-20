import { Text } from "@/components/ds";

/*
 * Site footer — closing note, contact, social. Sentence case, no hype.
 * The closing line is the brand's: good design is quiet, but it leaves a mark.
 */
export function Footer() {
  const year = 2026;
  return (
    <footer className="site-footer" id="contact-footer">
      <div className="container site-footer__grid">
        <div className="stack" style={{ gap: "var(--space-2)" }}>
          <Text variant="small" style={{ color: "var(--ink)" }}>
            © {year} Breno Sampayo
          </Text>
          <Text variant="small">Valencia, Spain · working remotely</Text>
        </div>

        <div className="stack" style={{ gap: "var(--space-3)" }}>
          <span className="eyebrow">Elsewhere</span>
          <div className="footer-social">
            <a className="link-quiet" href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener">
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
              Good design is quiet, but it leaves a mark.
            </Text>
            <span className="footer-seal" aria-hidden="true">
              BS<span className="dot">.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
