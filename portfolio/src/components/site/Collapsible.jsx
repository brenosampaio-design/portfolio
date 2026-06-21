"use client";

import { useId, useState } from "react";

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
  const panelId = useId();

  function toggle() {
    // Desktop keeps everything open — the toggle is inert above the breakpoint.
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 701px)").matches) return;
    setOpen((o) => !o);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  return (
    <div className={`collapsible${open ? " is-open" : ""}${className ? ` ${className}` : ""}`}>
      <div
        className="collapsible__head"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        <div className="collapsible__headInner">{header}</div>
        <span className="collapsible__icon" aria-hidden="true" />
      </div>
      <div className="collapsible__panel" id={panelId}>
        <div className="collapsible__panelInner">{children}</div>
      </div>
    </div>
  );
}
