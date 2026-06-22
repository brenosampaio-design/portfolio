"use client";

import { useEffect, useRef } from "react";

/*
 * DecisionsLedger — the design decisions as a full-width editorial ledger.
 * A large light index sits above each decision (no empty sticky column, no
 * dead space), an accent rule draws in, then Problem / Decision / Trade-off in
 * three columns. Trade-off is set in the accent colour on purpose: it's the
 * "what I gave up" — the senior signal a reader is scanning for.
 *
 * Each row reveals once as it enters the viewport (number rises, rule draws,
 * name clears, columns cascade), then settles and stays. Respects reduced
 * motion. No loop, no scroll-jacking.
 */
export function DecisionsLedger({ decisions }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".dl-item");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    items.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="decisions-ledger" ref={ref}>
      {decisions.map((d, i) => (
        <div className="dl-item" key={d.name}>
          <span className="dl-num">{String(i + 1).padStart(2, "0")}</span>
          <span className="dl-rule" aria-hidden="true" />
          <h4 className="dl-name">{d.name}</h4>
          <div className="dl-cols">
            <div className="dl-col">
              <span className="dl-tag">Problem</span>
              <p className="dl-text">{d.problem}</p>
            </div>
            <div className="dl-col">
              <span className="dl-tag">Decision</span>
              <p className="dl-text">{d.decision}</p>
            </div>
            <div className="dl-col dl-col--trade">
              <span className="dl-tag">Trade-off</span>
              <p className="dl-text">{d.tradeoff}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
