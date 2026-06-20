"use client";

import { useEffect, useRef, useState } from "react";

/*
 * ApproachStepper — the Approach points as a scroll-driven timeline. As the
 * section moves up the viewport, one step opens after another (the previous
 * closes): its number grows, the title inks in, and the description resolves
 * from a blur. A fill runs down the rail to the active node.
 *
 * Desktop also lets you hover a step to jump straight to it. Under reduced
 * motion everything is shown open and still. Scoped to its own classes so the
 * Principles list (same source shape) is untouched.
 */
export function ApproachStepper({ items }) {
  const ref = useRef(null);
  const fillRef = useRef(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [reduced, setReduced] = useState(false);

  const n = items.length;
  const shown = hovered != null ? hovered : active;

  // Reduced-motion flag + one-time line draw-in when the section enters view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(reduce);
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Active step follows scroll position through the section.
  useEffect(() => {
    if (reduced) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.72; // top here → progress 0
      const end = vh * 0.28; // top here → progress 1
      const p = (start - r.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, p));
      // Even bands: each step owns an equal slice of the scroll range.
      const idx = Math.max(0, Math.min(n - 1, Math.floor(clamped * n)));
      setActive(idx);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced, n]);

  // Track the fill to the active number — re-measured per frame for ~0.7s so it
  // follows the node as the accordion eases the heights around.
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    const fillEl = fillRef.current;
    if (!el || !fillEl) return;
    const lineTop = parseFloat(getComputedStyle(fillEl).top) || 0;
    let raf;
    let begin;
    const tick = (t) => {
      if (begin == null) begin = t;
      const num = el.querySelectorAll(".ap-step__num")[shown];
      if (num) {
        const cRect = el.getBoundingClientRect();
        const nRect = num.getBoundingClientRect();
        const center = nRect.top + nRect.height / 2 - cRect.top;
        fillEl.style.height = `${Math.max(0, center - lineTop)}px`;
      }
      if (t - begin < 720) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, reduced]);

  return (
    <div className={`ap-stepper${reduced ? " is-static" : ""}`} ref={ref}>
      <span className="ap-stepper__line" aria-hidden="true" />
      <span className="ap-stepper__fill" ref={fillRef} aria-hidden="true" />
      {items.map((a, i) => (
        <div
          key={a.title}
          className={`ap-step${i === shown ? " is-active" : ""}`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <span className="ap-step__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <div className="ap-step__body">
            <span className="ap-step__title">{a.title}</span>
            <p className="ap-step__desc">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
