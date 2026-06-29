"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/*
 * ScrollProgress — section navigation that adapts to the input.
 *
 * Desktop (hover): a thin vertical timeline pinned to the left gutter. The line
 * draws in, a dot per section fades in, the active dot fills + pulses with its
 * label, and each dot is an anchor (hover previews, click smooth-scrolls).
 *
 * Touch (no hover): the rail can't be hovered, so navigation moves to a compact
 * floating dock at the bottom — macOS-style. The pill stays small (just dots);
 * the active section's name floats above the active dot and slides to follow it.
 * The dock animates in on each route change and, like the header, its liquid
 * glass flips dark over dark content (same data-nav-dark technique, watching the
 * bottom band of the viewport where the dock sits). Respects reduced motion.
 */
export function ScrollProgress() {
  const sectionsRef = useRef([]);
  const pillRef = useRef(null);
  const nameRef = useRef(null);
  const activeRef = useRef(0);
  const [sections, setSections] = useState([]);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [entered, setEntered] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/");

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
    setHovered(null);
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

  // Dock entrance — replays its slide-up on every route change
  useEffect(() => {
    setEntered(false);
    const t = setTimeout(() => setEntered(true), 280);
    return () => clearTimeout(t);
  }, [pathname]);

  // Dock dark/light — same data-nav-dark intelligence as the header, but
  // watching the BOTTOM band of the viewport (where the dock floats).
  useEffect(() => {
    const darkEls = document.querySelectorAll("[data-nav-dark]");
    if (!darkEls.length) {
      setDark(false);
      return;
    }
    const intersecting = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) intersecting.add(e.target);
          else intersecting.delete(e.target);
        });
        setDark(intersecting.size > 0);
      },
      { rootMargin: "-86% 0px -8px 0px", threshold: 0 }
    );
    darkEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Float the section name above the active dot (and slide it to follow)
  useEffect(() => {
    const pill = pillRef.current;
    const name = nameRef.current;
    if (!pill || !name) return;
    const place = () => {
      const dot = pill.querySelectorAll(".case-dock__dot")[active];
      if (!dot) return;
      const pr = pill.getBoundingClientRect();
      const dr = dot.getBoundingClientRect();
      name.style.left = `${dr.left - pr.left + dr.width / 2}px`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active, sections, entered]);

  // Mirror the active index into a ref for the (non-React) swipe handlers.
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Swipe the dock left/right to step between sections. A left swipe goes to the
  // next section, right to the previous — reusing the exact tap path (a click on
  // the target dot, which the smooth-scroll handler picks up).
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;
    let sx = 0;
    let sy = 0;
    let tracking = false;
    const onStart = (e) => {
      const t = e.touches[0];
      sx = t.clientX;
      sy = t.clientY;
      tracking = true;
    };
    const onEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      // Must be a deliberate, mostly-horizontal swipe — otherwise it's a tap/scroll.
      if (Math.abs(dx) < 36 || Math.abs(dx) <= Math.abs(dy)) return;
      const dots = pill.querySelectorAll(".case-dock__dot");
      const dir = dx < 0 ? 1 : -1;
      const target = Math.min(Math.max(activeRef.current + dir, 0), dots.length - 1);
      if (target !== activeRef.current && dots[target]) dots[target].click();
    };
    pill.addEventListener("touchstart", onStart, { passive: true });
    pill.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      pill.removeEventListener("touchstart", onStart);
      pill.removeEventListener("touchend", onEnd);
    };
  }, [sections]);

  const n = sections.length;
  if (n === 0) return null;
  const posOf = (i) => (n > 1 ? (i / (n - 1)) * 100 : 0);
  const shown = hovered != null ? hovered : active;

  return (
    <>
      <nav className="rail" aria-hidden="true" style={isCaseStudy ? { display: "none" } : undefined}>
        <span className="rail__line" />
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            tabIndex={-1}
            className={`rail__dot${i === shown ? " is-active" : ""}`}
            style={{ top: `${posOf(i)}%`, animationDelay: `${1.6 + i * 0.06}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
        <span className="rail__label" style={{ top: `${posOf(shown)}%` }}>
          {sections[shown]?.label}
        </span>
      </nav>

      <div className="rail-mini" aria-hidden="true" style={isCaseStudy ? { display: "none" } : undefined}>
        <span className="rail-mini__dot" />
        <span className="rail-mini__label">{sections[active]?.label}</span>
      </div>

      <nav
        className={`case-dock${entered ? " is-in" : ""}${dark ? " case-dock--dark" : ""}${isCaseStudy ? " case-dock--case" : ""}`}
        aria-label="Sections"
      >
        <div className="case-dock__pill" ref={pillRef}>
          <span className="case-dock__name" ref={nameRef}>
            {sections[active]?.label}
          </span>
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`case-dock__dot${i === active ? " is-active" : ""}`}
              aria-label={s.label}
              aria-current={i === active ? "true" : undefined}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
