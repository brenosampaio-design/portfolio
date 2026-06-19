"use client";

import { useEffect, useRef } from "react";

/*
 * ToTop — appears once the reader has scrolled past the first viewport.
 * Uses Lenis when present for a smooth return; falls back to native scroll.
 */
export function ToTop() {
  const ref = useRef(null);

  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const show = (window.scrollY || 0) > window.innerHeight * 0.8;
      btn.classList.toggle("is-visible", show);
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.__lenis && !reduce) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.pushState(null, "", window.location.pathname);
  };

  return (
    <button ref={ref} type="button" className="to-top" onClick={toTop} aria-label="Back to top">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
