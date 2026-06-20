"use client";

import { useEffect, useRef, useState } from "react";
import { SEQ_BEAT, SEQ_START } from "@/lib/motion";

/*
 * SequenceSteps — a numbered timeline that discloses itself once, in order.
 * When the section enters view it opens one step after another (each stays
 * open): the row lifts out of a dim, its description resolves from a blur, and
 * a fill runs down the rail. By the end every step is open and readable.
 *
 * Driven by a timer on entry — never coupled to scroll position — so a small
 * wheel nudge can't flick several open at once. Reduced motion / no-JS shows
 * everything open and still. Used by both Approach and Principles.
 */
export function SequenceSteps({ items, interval = SEQ_BEAT }) {
  const ref = useRef(null);
  const fillRef = useRef(null);
  const [open, setOpen] = useState(0); // how many steps have opened so far
  const n = items.length;

  // Disclose in sequence when the section first scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-in");
      setOpen(n);
      return;
    }

    let timers = [];
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      el.classList.add("is-in");
      for (let i = 0; i < n; i += 1) {
        timers.push(setTimeout(() => setOpen(i + 1), SEQ_START + i * interval));
      }
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [n, interval]);

  // Ease the fill down to the most-recently-opened number (tracked live so it
  // stays glued while the accordion eases the rows around it).
  useEffect(() => {
    if (open === 0) return;
    const el = ref.current;
    const fillEl = fillRef.current;
    if (!el || !fillEl) return;
    const lineTop = parseFloat(getComputedStyle(fillEl).top) || 0;
    let raf;
    let cur = parseFloat(fillEl.style.height) || 0;
    const loop = () => {
      const num = el.querySelectorAll(".seq-step__num")[open - 1];
      let target = cur;
      if (num) {
        const c = el.getBoundingClientRect();
        const nr = num.getBoundingClientRect();
        target = Math.max(0, nr.top + nr.height / 2 - c.top - lineTop);
      }
      cur += (target - cur) * 0.16;
      fillEl.style.height = `${cur}px`;
      if (Math.abs(target - cur) > 0.4) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [open]);

  return (
    <div className="seq" ref={ref}>
      <span className="seq__line" aria-hidden="true" />
      <span className="seq__fill" ref={fillRef} aria-hidden="true" />
      {items.map((it, i) => (
        <div key={it.title} className={`seq-step${i < open ? " is-open" : ""}`}>
          <span className="seq-step__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <div className="seq-step__body">
            <span className="seq-step__title">{it.title}</span>
            {it.annotation ? <span className="seq-step__annotation">{it.annotation}</span> : null}
            <div className="seq-step__descwrap"><p className="seq-step__desc">{it.description}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}
