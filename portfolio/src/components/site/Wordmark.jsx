"use client";
import Link from "next/link";
import { useRef } from "react";

export function Wordmark() {
  const ref = useRef(null);

  function replay() {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll(".wm-b, .wm-slash, .wm-s");
    spans.forEach(s => { s.style.animation = "none"; });
    void el.offsetWidth; // force reflow so the browser resets the animation
    spans.forEach(s => { s.style.animation = ""; });
  }

  return (
    <Link
      href="/"
      className="wordmark"
      aria-label="Breno Sampaio — home"
      ref={ref}
      onMouseEnter={replay}
    >
      <span className="wm-b">B</span>
      <span className="wm-slash">/</span>
      <span className="wm-s">S</span>
    </Link>
  );
}
