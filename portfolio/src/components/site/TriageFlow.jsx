"use client";

import { useEffect, useRef } from "react";

/*
 * TriageFlow — the resolution, as information architecture. Before: read
 * everything, triage in your head, reply inconsistently. After: AI structures
 * and ranks, a human verifies and approves, replies stay consistent across
 * languages. Below, the core loop the product is built around. Honest diagram,
 * not a faked screen. Reuses the shared .flow CSS; fires once and settles.
 */
const loop = [
  "Message in",
  "AI classifies — language · intent · urgency · missing info",
  "Human reviews, confidence visible — approve or correct",
  "Send & logged with who approved what",
];

const before = ["Read everything", "Guess the language", "Guess the urgency", "Reply inconsistently"];

export function TriageFlow() {
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
          <span className="flow-state__one">AI structures &amp; ranks, a human verifies &amp; approves</span>
        </div>
      </div>

      <div className="flow__steps">
        {loop.map((f, i) => (
          <div className="flow-step" key={f} style={{ "--i": i }}>
            <span className="flow-step__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="flow-step__t">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
