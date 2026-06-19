"use client";

import { useEffect } from "react";

/*
 * ProcessHighlight — once the Process section has revealed, gently walks a
 * point-by-point emphasis across every column's checklist (point 1 of each
 * phase, then point 2, …), looping. Shows the method "in motion".
 *
 * - Synchronised: the same row index lights up across all columns.
 * - Only runs while the section is on screen; first run waits for the entrance.
 * - Fully disabled under prefers-reduced-motion.
 */
export function ProcessHighlight({
  targetId = "process",
  steps = 4,
  interval = 1150,
  startDelay = 2300,
}) {
  useEffect(() => {
    const section = document.getElementById(targetId);
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const cols = Array.from(section.querySelectorAll(".process-col__items"));
    if (!cols.length) return;

    let idx = -1;
    let timer = null;
    let started = false;
    let visible = false;

    const clearAll = () => {
      cols.forEach((ul) => {
        Array.from(ul.children).forEach((li) => li.classList.remove("is-active"));
      });
    };

    const tick = () => {
      idx = (idx + 1) % steps;
      cols.forEach((ul) => {
        const lis = ul.children;
        for (let i = 0; i < lis.length; i += 1) {
          lis[i].classList.toggle("is-active", i === idx);
        }
      });
    };

    const start = () => {
      if (timer) return;
      tick();
      timer = setInterval(tick, interval);
    };
    const stop = () => {
      if (timer) { clearInterval(timer); timer = null; }
      clearAll();
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) {
          const delay = started ? 0 : startDelay;
          started = true;
          setTimeout(() => { if (visible) start(); }, delay);
        } else {
          stop();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(section);

    return () => {
      io.disconnect();
      stop();
    };
  }, [targetId, steps, interval, startDelay]);

  return null;
}
