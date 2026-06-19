"use client";

import { useEffect, useRef } from "react";

/*
 * Cascade — reveals its inner items in sequence (by content, not all at once).
 * Mark the pieces you want staggered with `data-cascade` and the `reveal` class;
 * when the container scrolls into view they fade up one after another.
 *
 * `base`  — initial delay (ms), e.g. to offset a column left-to-right.
 * `step`  — gap between items (ms). Snappy by default, not slow.
 * Reduced motion / no-JS: everything is shown immediately.
 */
export function Cascade({ as: Tag = "div", base = 0, step = 55, className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll("[data-cascade]"));
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      items.forEach((it) => it.classList.add("is-in"));
      return;
    }

    let st;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, stMod]) => {
      if (cancelled || !ref.current) return;
      const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      st = ScrollTrigger.create({
        trigger: el,
        start: "top 86%",
        once: true,
        onEnter: () => {
          items.forEach((it, idx) => {
            it.style.transitionDelay = `${base + idx * step}ms`;
            it.classList.add("is-in");
          });
        },
      });

      if (window.__lenis) window.__lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      if (st) st.kill();
    };
  }, [base, step]);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
