"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Wordmark } from "./Wordmark";
import { useTheme, useLang } from "@/context/AppContext";
import { getT } from "@/lib/i18n";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="8" cy="8" r="2.8" />
      <line x1="8" y1="1" x2="8" y2="2.6" />
      <line x1="8" y1="13.4" x2="8" y2="15" />
      <line x1="1" y1="8" x2="2.6" y2="8" />
      <line x1="13.4" y1="8" x2="15" y2="8" />
      <line x1="3.2" y1="3.2" x2="4.3" y2="4.3" />
      <line x1="11.7" y1="11.7" x2="12.8" y2="12.8" />
      <line x1="12.8" y1="3.2" x2="11.7" y2="4.3" />
      <line x1="4.3" y1="11.7" x2="3.2" y2="12.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.5 10A6 6 0 1 1 6 3.5a4.5 4.5 0 0 0 6.5 6.5z" />
    </svg>
  );
}

export function Header() {
  const headerRef = useRef(null);
  const { theme, toggle } = useTheme();
  const { lang } = useLang();
  const t = getT(lang);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const darkEls = document.querySelectorAll("[data-nav-dark]");
    if (!darkEls.length) return;

    const intersecting = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) intersecting.add(e.target);
          else intersecting.delete(e.target);
        });
        header.classList.toggle("site-header--dark", intersecting.size > 0);
      },
      { rootMargin: "-24px 0px -88% 0px", threshold: 0 }
    );

    darkEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="dock">
        <Wordmark />

        <div className="dock__divider" aria-hidden="true" />

        <nav className="nav" aria-label="Primary">
          <Link href="/#work">{t.nav.work}</Link>
          <Link href="/#about">{t.nav.about}</Link>
          <Link href="/#approach" className="nav-hide-sm">{t.nav.approach}</Link>
        </nav>

        <div className="dock__divider dock__divider--mid" aria-hidden="true" />

        <div className="dock__actions">
          <span className="availability">
            <span className="dot" aria-hidden="true" />
            <span className="availability__text">{t.availability}</span>
          </span>
          <Link href="/#contact" className="header-contact">
            {t.nav.contact} <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="dock__divider" aria-hidden="true" />

        <div className="dock__controls">
          <button
            className="theme-btn"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

        </div>
      </div>
    </header>
  );
}
