"use client";

import { useEffect, useRef } from "react";

/*
 * ScrollProgress — a top hairline that fills as the reader descends, plus a
 * small "NN / total · label" indicator so progress through the page is legible.
 * One rAF-throttled scroll handler drives both. No parallax; informational only.
 */
const HEADER_OFFSET = 88;

export function ScrollProgress() {
  const fillRef = useRef(null);
  const indicatorRef = useRef(null);
  const numRef = useRef(null);
  const totalRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    const indicator = indicatorRef.current;
    if (!fill) return;

    let sections = [];
    const collect = () => {
      sections = Array.from(document.querySelectorAll("main section[id]"));
      if (totalRef.current) {
        totalRef.current.textContent = `/ ${String(sections.length).padStart(2, "0")}`;
      }
    };
    collect();

    let ticking = false;
    let lastIndex = -1;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = (doc.scrollHeight || 0) - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      fill.style.transform = `scaleX(${progress})`;

      // Active section = last one whose top has crossed below the header.
      let idx = 0;
      for (let i = 0; i < sections.length; i += 1) {
        if (sections[i].getBoundingClientRect().top <= HEADER_OFFSET + 4) idx = i;
      }
      if (indicator) {
        const show = y > window.innerHeight * 0.35;
        indicator.classList.toggle("is-visible", show);
        if (idx !== lastIndex) {
          lastIndex = idx;
          const sec = sections[idx];
          if (numRef.current) numRef.current.textContent = String(idx + 1).padStart(2, "0");
          if (labelRef.current && sec) {
            labelRef.current.textContent = sec.dataset.label || sec.getAttribute("aria-label") || "";
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => { collect(); onScroll(); }, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__fill" ref={fillRef} />
      </div>
      <div className="section-indicator" ref={indicatorRef} aria-hidden="true">
        <span className="section-indicator__num" ref={numRef}>01</span>
        <span className="section-indicator__total" ref={totalRef}>/ 07</span>
        <span className="section-indicator__label" ref={labelRef} />
      </div>
    </>
  );
}
