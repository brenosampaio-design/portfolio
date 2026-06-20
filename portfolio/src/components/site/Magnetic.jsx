"use client";

import { useEffect, useRef } from "react";

/*
 * Magnetic — a quiet pull toward the cursor. The wrapped element eases a few
 * pixels in the direction of the pointer while hovered, then settles back.
 * Pointer-fine only (no touch), and fully inert under reduced motion — a
 * micro-interaction, not a parallax toy.
 */
export function Magnetic({
  as: Tag = "span",
  strength = 0.3,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let hovering = false;

    const loop = () => {
      tx += (cx - tx) * 0.18;
      ty += (cy - ty) * 0.18;
      el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
      if (hovering || Math.abs(tx) > 0.1 || Math.abs(ty) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        el.style.transform = "";
        raf = 0;
      }
    };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      cx = (e.clientX - (r.left + r.width / 2)) * strength;
      cy = (e.clientY - (r.top + r.height / 2)) * strength;
    };
    const onEnter = () => {
      hovering = true;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      hovering = false;
      cx = 0;
      cy = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [strength]);

  return (
    <Tag
      ref={ref}
      className={["magnetic", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
