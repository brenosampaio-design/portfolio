"use client";

import { useEffect, useRef } from "react";

/*
 * CountUp — a measurement number that counts from 0 to its value when it scrolls
 * into view. easeInOutQuart: slow to start, quick through the middle, soft to
 * settle — the Awwwards count-up feel. SSR renders the final value (no-JS and
 * crawlers see the real number); the client resets to 0 only once, off-screen,
 * so there's no flash. Respects reduced motion. Writes textContent directly to
 * avoid a re-render per frame.
 */
export function CountUp({ value, prefix = "", suffix = "", duration = 1900, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = (n) => { el.textContent = `${prefix}${n}${suffix}`; };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      set(value);
      return;
    }

    set(0);
    let raf;
    const ease = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(el);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            set(Math.round(value * ease(t)));
            if (t < 1) raf = requestAnimationFrame(tick);
            else set(value);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
