"use client";

import { useEffect } from "react";

/*
 * ProcessReveal — tells the process as a story, once, in reading order.
 * Discover's header appears, then its tasks appear AND emphasise one after
 * another; then Frame; and so on. Exactly ONE point is emphasised at a time
 * across the whole grid — no synchronised blinking, no infinite loop.
 *
 * Plays when the section scrolls into view; resets and replays if the reader
 * leaves and comes back. Fully shown (no animation) under reduced motion / no-JS.
 */
export function ProcessReveal({
  targetId = "process",
  headerStep = 80,   // gap between a column's number/title/description
  afterHeader = 150, // pause after a column header, before its tasks
  taskStep = 320,    // time each task stays the focus before the next
  colGap = 220,      // pause between finishing one column and starting the next
  startDelay = 250,  // small beat before the first column
}) {
  useEffect(() => {
    const section = document.getElementById(targetId);
    if (!section) return;

    const cols = Array.from(section.querySelectorAll(".process-col"));
    if (!cols.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scope strictly to the grid columns. The section heading (.process-head)
    // has its own <Reveal>, which fires once — this orchestrator must never
    // reset its is-in, or the heading can't recover after scrolling away.
    const allReveal = () => section.querySelectorAll(".process-col .reveal");
    const allTasks = () => section.querySelectorAll(".process-col__items li");

    const showAll = () => {
      allReveal().forEach((el) => el.classList.add("is-in"));
    };
    const reset = () => {
      allReveal().forEach((el) => el.classList.remove("is-in"));
      allTasks().forEach((li) => li.classList.remove("is-active"));
    };

    if (reduce) {
      showAll();
      return;
    }

    let timers = [];
    let playing = false;
    let done = false;
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

    const clearActive = () => {
      section.querySelectorAll(".process-col__items li.is-active").forEach((li) =>
        li.classList.remove("is-active")
      );
    };

    const play = () => {
      if (playing || done) return;
      playing = true;
      let t = startDelay;

      cols.forEach((col) => {
        const header = Array.from(col.children).filter(
          (el) => el.classList.contains("reveal")
        );
        header.forEach((h, i) => at(t + i * headerStep, () => h.classList.add("is-in")));
        t += header.length * headerStep + afterHeader;

        const tasks = Array.from(col.querySelectorAll(".process-col__items li"));
        tasks.forEach((task) => {
          at(t, () => {
            clearActive();
            task.classList.add("is-in");
            task.classList.add("is-active");
          });
          t += taskStep;
        });
        at(t, clearActive); // let the column settle before the next one
        t += colGap;
      });

      at(t + 60, () => {
        clearActive();
        done = true;
        playing = false;
      });
    };

    reset();

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && e.intersectionRatio >= 0.2) {
          if (!done) play();
        } else if (e.intersectionRatio === 0) {
          clearTimers();
          playing = false;
          done = false;
          reset();
        }
      },
      { threshold: [0, 0.2] }
    );
    io.observe(section);

    return () => {
      io.disconnect();
      clearTimers();
    };
  }, [targetId, headerStep, afterHeader, taskStep, colGap, startDelay]);

  return null;
}
