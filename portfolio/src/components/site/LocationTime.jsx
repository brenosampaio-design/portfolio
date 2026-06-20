"use client";

import { profile } from "@/lib/content";
import { LocalTime } from "@/components/site/LocalTime";

/*
 * LocationTime — a quiet "where I am / my time" readout for the hero: a small
 * globe whose meridian sweeps slowly (reads as a turning planet), the city, and
 * the live local time. Useful signal for remote/cross-timezone hiring, not just
 * decoration. The spin is CSS and disabled under reduced motion.
 */
export function LocationTime() {
  return (
    <span className="locus">
      <span className="locus__globe" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <ellipse className="locus__mer" cx="12" cy="12" rx="4.6" ry="9" />
        </svg>
      </span>
      <span className="locus__text">
        {profile.location} · <LocalTime timeZone={profile.timezone} />
      </span>
    </span>
  );
}
