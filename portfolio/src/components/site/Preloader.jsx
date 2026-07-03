"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SEEN_KEY = "preloader-seen";

export function Preloader() {
  const pathname = usePathname();
  // Server and first client render must agree, so the initial state can only
  // depend on pathname (identical on both) — never on sessionStorage, which
  // doesn't exist on the server and would cause a hydration mismatch.
  const onHome = pathname === "/";
  const [phase, setPhase] = useState(onHome ? "visible" : "done"); // visible → fading → done
  const logoRef = useRef(null);

  // Runs client-only, before paint: if this tab has already played the intro
  // this session, skip it silently with no visible flash.
  useLayoutEffect(() => {
    if (onHome && sessionStorage.getItem(SEEN_KEY)) setPhase("done");
  }, [onHome]);

  useEffect(() => {
    if (!onHome || phase !== "visible") return;
    sessionStorage.setItem(SEEN_KEY, "1");
    const wordmarkEl = document.querySelector(".wordmark");

    // After B/S animation completes, fly logo to header wordmark position
    const flyTimer = setTimeout(() => {
      const logoEl = logoRef.current;
      if (!logoEl || !wordmarkEl) { setPhase("fading"); return; }

      // Hide the header wordmark so only the flying logo is visible
      wordmarkEl.style.opacity = "0";

      const lr = logoEl.getBoundingClientRect();
      const wr = wordmarkEl.getBoundingClientRect();

      const scale = wr.height / lr.height;
      const tx = (wr.left + wr.width / 2) - (lr.left + lr.width / 2);
      const ty = (wr.top + wr.height / 2) - (lr.top + lr.height / 2);

      logoEl.style.transition = "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)";
      logoEl.style.transformOrigin = "50% 50%";
      logoEl.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;

      // Logo lands → start fading preloader
      setTimeout(() => setPhase("fading"), 700);
    }, 2350);

    // As preloader fades out, fade the wordmark back in
    const restoreTimer = setTimeout(() => {
      if (!wordmarkEl) return;
      wordmarkEl.style.transition = "opacity 0.2s ease";
      wordmarkEl.style.opacity = "1";
      setTimeout(() => {
        wordmarkEl.style.transition = "";
        wordmarkEl.style.opacity = "";
      }, 250);
    }, 3600);

    // Remove from DOM
    const doneTimer = setTimeout(() => setPhase("done"), 3800);

    return () => {
      clearTimeout(flyTimer);
      clearTimeout(restoreTimer);
      clearTimeout(doneTimer);
      if (wordmarkEl) { wordmarkEl.style.opacity = ""; wordmarkEl.style.transition = ""; }
    };
  }, [onHome, phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`preloader${phase === "fading" ? " preloader--out" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader__noise" />
      <div className="preloader__logo" ref={logoRef}>
        <span className="wm-b">B</span>
        <span className="wm-slash">/</span>
        <span className="wm-s">S</span>
      </div>
    </div>
  );
}
