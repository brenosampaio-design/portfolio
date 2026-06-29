"use client";

import { useEffect, useRef } from "react";

/*
 * FlowDiagram — the resolution, as information architecture. Before: the same
 * incident fragmented across tools. After: one operational view. Below, the
 * four core flows the product is built around, as a connected sequence.
 * Honest diagram, not a faked screen. Fires once; settles and stays.
 */
const flows = [
  "Log an incident",
  "Hand over a shift",
  "See what’s open now",
  "Resolve & update with history",
];

const before = ["PMS", "Chat", "Paper", "Memory"];

export function FlowDiagram() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="flow" ref={ref}>
      <div className="flow__ba">
        <div className="flow-state flow-state--before">
          <span className="flow-state__label">Before</span>
          <div className="flow-state__frags" aria-hidden="true">
            {before.map((b) => (
              <span className="flow-frag" key={b}>{b}</span>
            ))}
          </div>
        </div>
        <span className="flow__arrow" aria-hidden="true">→</span>
        <div className="flow-state flow-state--after">
          <span className="flow-state__label">After</span>
          <span className="flow-state__one">One operational view of what&rsquo;s open</span>
        </div>
      </div>

      <div className="flow__steps">
        {flows.map((f, i) => (
          <div className="flow-step" key={f} style={{ "--i": i }}>
            <span className="flow-step__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="flow-step__t">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
