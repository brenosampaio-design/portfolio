"use client";

import { Fragment, useEffect, useRef } from "react";
import { SEQ_BEAT, SEQ_START } from "@/lib/motion";

/*
 * SystemFlow — the control principle, drawn as a pipeline: requests come in,
 * the AI structures and ranks them, but nothing reaches the customer without
 * passing the human approval gate. The gate is the marked node, not an
 * afterthought — it's the whole point.
 *
 * It plays as a signal travelling the pipeline: each card sits dim, then lights
 * up in turn (SEQ_BEAT apart, the site cadence), the connector fill draws toward
 * the next card at the half-beat, and the human gate is marked the moment it
 * lights. The sequence is orchestrated in JS (deterministic) rather than via CSS
 * transition-delays, so it always plays cleanly when the section comes into view.
 * Fires once, then settles. Respects reduced motion.
 */
const nodes = [
  { label: "Channels", sub: "WhatsApp · Email · Web", kind: "in" },
  { label: "AI triage", sub: "Language · intent · urgency", kind: "ai" },
  { label: "Human approval", sub: "Nothing sends without this", kind: "gate" },
  { label: "Response", sub: "Consistent across languages", kind: "out" },
];

export function SystemFlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".sysflow-node");
    const conns = el.querySelectorAll(".sysflow__conn");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((c) => c.classList.add("lit"));
      conns.forEach((c) => c.classList.add("drawn"));
      return;
    }

    const timers = [];
    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      cards.forEach((card, i) => {
        timers.push(setTimeout(() => card.classList.add("lit"), SEQ_START + i * SEQ_BEAT));
        if (i < conns.length) {
          timers.push(
            setTimeout(() => conns[i].classList.add("drawn"), SEQ_START + i * SEQ_BEAT + Math.round(SEQ_BEAT / 2))
          );
        }
      });
    };

    // If it's already comfortably in view on mount, play directly; otherwise
    // wait until it scrolls into view.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
      play();
      return () => timers.forEach(clearTimeout);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="sysflow" ref={ref}>
      {nodes.map((n, i) => (
        <Fragment key={n.label}>
          <div className={`sysflow-node sysflow-node--${n.kind}`}>
            <span className="sysflow-node__label">{n.label}</span>
            <span className="sysflow-node__sub">{n.sub}</span>
          </div>
          {i < nodes.length - 1 && <span className="sysflow__conn" aria-hidden="true" />}
        </Fragment>
      ))}
    </div>
  );
}
