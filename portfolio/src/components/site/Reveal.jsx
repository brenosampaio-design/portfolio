"use client";

import { useEffect, useRef } from "react";

/*
 * Reveal — a discreet entrance. GSAP ScrollTrigger only *triggers* it; the
 * motion itself is CSS, so values stay in the design-system motion tokens.
 *
 * Variants:
 *   default        opacity + small translate (fade up)
 *   mask           text "rises" from behind a clip mask (editorial / Awwwards)
 *
 * No parallax. Fires once. Under prefers-reduced-motion the element is shown
 * immediately. No-JS visitors see it too (the hidden state is JS-gated).
 */
export function Reveal({ as: Tag = "div", mask = false, delay = 0, className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-in");
      return;
    }

    let st;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, stMod]) => {
      if (cancelled || !ref.current) return;
      const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
        const inner = el.firstElementChild;
        if (mask && inner) inner.style.transitionDelay = `${delay}ms`;
      }

      st = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => el.classList.add("is-in"),
      });

      if (window.__lenis) window.__lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      if (st) st.kill();
    };
  }, [delay, mask]);

  const cls = ["reveal", mask ? "reveal--mask" : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={cls} {...props}>
      {mask ? <span className="reveal__inner">{children}</span> : children}
    </Tag>
  );
}
