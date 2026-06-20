"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/*
 * Rail — a thin vertical timeline pinned to the left gutter. On first load
 * the line draws itself in from top to bottom; a dot per section then fades
 * in, and the dot for the section you're reading fills + pulses with its
 * label beside it. Informational; no parallax.
 */
export function ScrollProgress() {
  const sectionsRef = useRef([]);
  const [sections, setSections] = useState([]);
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  // Collect sections whenever the route changes
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("main section[id]"));
    sectionsRef.current = els;
    setSections(
      els.map((el) => ({
        id: el.id,
        label: el.dataset.label || el.getAttribute("aria-label") || el.id,
      }))
    );
    setActive(0);
  }, [pathname]);

  // Active section = last one whose top has crossed the viewport middle
  useEffect(() => {
    let ticking = false;
    let lastIdx = -1;

    const update = () => {
      ticking = false;
      const secs = sectionsRef.current;
      const threshold = window.innerHeight * 0.5;
      let idx = 0;
      for (let i = 0; i < secs.length; i += 1) {
        if (secs[i].getBoundingClientRect().top <= threshold) idx = i;
      }
      if (idx !== lastIdx) {
        lastIdx = idx;
        setActive(idx);
      }
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
  }, [pathname]);

  const n = sections.length;
  if (n === 0) return null;
  const posOf = (i) => (n > 1 ? (i / (n - 1)) * 100 : 0);

  return (
    <nav className="rail" aria-hidden="true">
      <span className="rail__line" />
      {sections.map((s, i) => (
        <span
          key={s.id}
          className={`rail__dot${i === active ? " is-active" : ""}`}
          style={{ top: `${posOf(i)}%`, animationDelay: `${1.6 + i * 0.06}s` }}
        />
      ))}
      <span className="rail__label" style={{ top: `${posOf(active)}%` }}>
        {sections[active]?.label}
      </span>
    </nav>
  );
}
