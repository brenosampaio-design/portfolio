"use client";

import { useEffect, useRef, useState } from "react";
import { Scramble } from "@/components/site/Scramble";
import { TOOLKIT_ICONS } from "@/lib/toolkitIcons";

/*
 * Toolkit — a calm, static row of the tools that matter. The label decodes in
 * (same Scramble as the section eyebrows); then the logos resolve from a blur
 * one after another in a quick deal — same focus-in language as the rest of
 * the site, just a snappier stagger since they're small. Plays once; reduced
 * motion / no-JS shows them in place.
 */
export function Toolkit({ items = TOOLKIT_ICONS, stagger = 90 }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(0);
  const n = items.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOpen(n);
      return;
    }

    let timers = [];
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      for (let i = 0; i < n; i += 1) {
        timers.push(setTimeout(() => setOpen(i + 1), 300 + i * stagger));
      }
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [n, stagger]);

  return (
    <div className="toolkit" ref={ref}>
      <Scramble className="eyebrow eyebrow--accent toolkit__label" text="Toolkit" />
      <div className="toolkit__row">
        {items.map((it, i) => (
          <span key={it.name} className={`toolkit__item${i < open ? " is-in" : ""}`}>
            <svg viewBox="0 0 24 24" className="toolkit__logo" aria-hidden="true" focusable="false">
              <path d={it.path} />
            </svg>
            <span className="toolkit__name">{it.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
