"use client";

import { useEffect, useId, useState } from "react";

/*
 * Collapsible — progressive disclosure that is MOBILE-ONLY.
 *
 * On phones (≤700px) the header becomes a tap target and the body collapses to
 * zero height with a smooth grid-rows ease (same trick as the sequence steps),
 * turning a long section into a scannable list of titles a recruiter expands at
 * will. On desktop the body is always open and the toggle chrome disappears, so
 * the reading experience there is exactly as before — the accordion only exists
 * where the wall of text actually hurts.
 *
 * Content is never removed from the DOM, so it stays selectable, indexable, and
 * accessible. Scroll-reveal children are force-shown once their section opens so
 * nothing is ever stuck invisible behind a collapsed panel.
 */
export function Collapsible({ header, children, defaultOpen = false, className = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  const [isMobile, setIsMobile] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const expanded = !isMobile || open;
  const Head = isMobile ? "button" : "div";

  return (
    <div className={`collapsible${open ? " is-open" : ""}${className ? ` ${className}` : ""}`}>
      <Head
        className="collapsible__head"
        type={isMobile ? "button" : undefined}
        aria-expanded={isMobile ? open : undefined}
        aria-controls={isMobile ? panelId : undefined}
        onClick={isMobile ? () => setOpen((value) => !value) : undefined}
      >
        <div className="collapsible__headInner">{header}</div>
        <span className="collapsible__icon" aria-hidden="true" />
      </Head>
      <div
        className="collapsible__panel"
        id={panelId}
        aria-hidden={!expanded || undefined}
        inert={!expanded || undefined}
      >
        <div className="collapsible__panelInner">{children}</div>
      </div>
    </div>
  );
}
