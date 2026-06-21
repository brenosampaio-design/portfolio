"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Wordmark } from "./Wordmark";

export function Header() {
  const headerRef = useRef(null);

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
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#approach" className="nav-hide-sm">Approach</Link>
        </nav>

        <div className="dock__divider dock__divider--mid" aria-hidden="true" />

        <div className="dock__actions">
          <span className="availability">
            <span className="dot" aria-hidden="true" />
            <span className="availability__text">Available</span>
          </span>
          <Link href="/#contact" className="header-contact">
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
