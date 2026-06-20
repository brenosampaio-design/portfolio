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
 * When `mask` is set we upgrade — if SplitText is available — to a line-by-line
 * rise: each line clears its own mask and staggers in. This is the signature
 * editorial move. It degrades to the single-block mask (pure CSS) if SplitText
 * can't load, and to fully-visible text under reduced motion / no-JS.
 *
 * No parallax. Fires once. The split is reverted on completion so the heading
 * returns to clean, selectable, resize-safe markup.
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
    let split;
    let cancelled = false;

    // Non-mask reveals (and the mask fallback) only need ScrollTrigger.
    const runCssReveal = (gsap, ScrollTrigger) => {
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
    };

    const loaders = [import("gsap"), import("gsap/ScrollTrigger")];
    if (mask) loaders.push(import("gsap/SplitText"));

    Promise.all(loaders)
      .then(([{ gsap }, stMod, splitMod]) => {
        if (cancelled || !ref.current) return;
        const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
        gsap.registerPlugin(ScrollTrigger);

        const SplitText = splitMod && (splitMod.SplitText || splitMod.default);
        const inner = el.querySelector(".reveal__inner");

        // Either SplitText didn't load or there's no inner — use the CSS path.
        if (!mask || !SplitText || !inner) {
          runCssReveal(gsap, ScrollTrigger);
          return;
        }

        gsap.registerPlugin(SplitText);

        // Wait for webfonts so line breaks are measured against final metrics.
        const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
        fontsReady.then(() => {
          if (cancelled || !ref.current) return;

          split = new SplitText(inner, {
            type: "lines",
            linesClass: "reveal__line",
          });

          // Each line starts low, transparent and out of focus; neutralise the
          // block-level CSS mask so only the per-line motion shows.
          gsap.set(split.lines, { yPercent: 55, autoAlpha: 0, filter: "blur(12px)" });
          el.classList.add("reveal--split");

          st = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(split.lines, {
                yPercent: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 1.05,
                ease: "power3.out",
                stagger: 0.16,
                delay: delay / 1000,
                onComplete: () => {
                  if (split) {
                    split.revert();
                    split = null;
                  }
                  el.classList.remove("reveal--split");
                  el.classList.add("is-in");
                },
              });
            },
          });

          if (window.__lenis) window.__lenis.on("scroll", ScrollTrigger.update);
          ScrollTrigger.refresh();
        });
      })
      .catch(() => {
        // Last-resort: never leave the text hidden — reveal it immediately.
        if (!cancelled && ref.current) el.classList.add("is-in");
      });

    return () => {
      cancelled = true;
      if (split) split.revert();
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
