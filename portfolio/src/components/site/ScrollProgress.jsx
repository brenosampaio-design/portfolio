"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 88;

export function ScrollProgress() {
  const fillRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeLabel, setActiveLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("main section[id]"));
    sectionsRef.current = els;
    if (els[0]) {
      setActiveLabel(els[0].dataset.label || els[0].getAttribute("aria-label") || "");
    }
  }, [pathname]);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    let ticking = false;
    let lastIdx = -1;
    let lastVisible = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = (doc.scrollHeight || 0) - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      fill.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;

      const secs = sectionsRef.current;
      const threshold = window.innerHeight * 0.6;
      let idx = 0;
      for (let i = 0; i < secs.length; i++) {
        if (secs[i].getBoundingClientRect().top <= threshold) idx = i;
      }

      const shouldShow = y > window.innerHeight * 0.35;
      if (shouldShow !== lastVisible) {
        lastVisible = shouldShow;
        setVisible(shouldShow);
      }

      if (idx !== lastIdx) {
        lastIdx = idx;
        const sec = secs[idx];
        if (sec) setActiveLabel(sec.dataset.label || sec.getAttribute("aria-label") || "");
      }
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__fill" ref={fillRef} />
      </div>
      <div className={`section-dot${visible ? " is-visible" : ""}`} aria-hidden="true">
        <span className="section-dot__pulse" />
        <span className="section-dot__label">{activeLabel}</span>
      </div>
    </>
  );
}
