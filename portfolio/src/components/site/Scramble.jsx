"use client";

import { useEffect, useRef } from "react";

/*
 * Scramble — a one-time "decode" entrance for a short label. Letters land in
 * scrambled, then resolve into the real text. Used sparingly (one accent per
 * view) so it reads as a deliberate, technical flourish — never a loop.
 *
 * The real text is rendered on the server, so no-JS and reduced-motion users
 * (and search engines) always see it. The scramble only plays once, when the
 * element first scrolls into view.
 */
export function Scramble({
  as: Tag = "span",
  text,
  className = "",
  delay = 0,
  duration = 0.9,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // server-rendered text stays as-is

    let tween;
    let st;
    let cancelled = false;

    Promise.all([
      import("gsap"),
      import("gsap/ScrambleTextPlugin"),
      import("gsap/ScrollTrigger"),
    ])
      .then(([{ gsap }, scrMod, stMod]) => {
        if (cancelled || !ref.current) return;
        const ScrambleTextPlugin = scrMod.ScrambleTextPlugin || scrMod.default;
        const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
        gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

        st = ScrollTrigger.create({
          trigger: el,
          start: "top 94%",
          once: true,
          onEnter: () => {
            tween = gsap.to(el, {
              duration,
              delay: delay / 1000,
              scrambleText: {
                text,
                chars: "upperCase",
                revealDelay: 0.15,
                speed: 0.7,
              },
            });
          },
        });

        if (window.__lenis) window.__lenis.on("scroll", ScrollTrigger.update);
      })
      .catch(() => {
        /* plugin unavailable — leave the plain text in place */
      });

    return () => {
      cancelled = true;
      if (tween) tween.kill();
      if (st) st.kill();
    };
  }, [text, delay, duration]);

  return (
    <Tag ref={ref} className={className} {...props}>
      {text}
    </Tag>
  );
}
