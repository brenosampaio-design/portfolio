"use client";

import { useEffect } from "react";
import { SEQ_BEAT, SEQ_START } from "@/lib/motion";

/*
 * ProcessReveal — deals the process columns in left-to-right. When the grid
 * enters view each column lifts out of a blur in quick succession, so the six
 * steps land like a fast, satisfying cascade (same focus-in language as the
 * headings). Plays once; reduced motion / no-JS shows the grid in place.
 */
export function ProcessReveal({ targetId = "process", stagger = SEQ_BEAT, startDelay = SEQ_START }) {
  useEffect(() => {
    const section = document.getElementById(targetId);
    if (!section) return;
    const cols = Array.from(section.querySelectorAll(".process-col"));
    if (!cols.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      cols.forEach((c) => c.classList.add("is-in"));
      return;
    }

    let timers = [];
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      cols.forEach((c, i) => {
        timers.push(setTimeout(() => c.classList.add("is-in"), startDelay + i * stagger));
      });
    };

    const grid = section.querySelector(".process-grid") || section;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(grid);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [targetId, stagger, startDelay]);

  return null;
}
