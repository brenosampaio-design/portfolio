"use client";

import { useState } from "react";
import Link from "next/link";

/*
 * ProjectCard — editorial work card (problem-first), matching the Selected Work
 * layout: tall preview, category eyebrow, title, one honest line, then a base
 * row with year · role · arrow. `upcoming` renders an honest, non-interactive
 * placeholder — no fake preview, no fake hover. Built on design-system tokens.
 */
export function ProjectCard({
  category,
  title,
  problem,
  role,
  year,
  href,
  previewSrc,
  previewLabel = "case preview",
  upcoming = false,
  style,
  ...props
}) {
  const [hover, setHover] = useState(false);
  const interactive = !!href && !upcoming;

  const card = (
    <div
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        transition: "transform var(--duration-md) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...props}
    >
      {/* Preview */}
      <div
        style={{
          aspectRatio: "4 / 3",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          border: "1px solid var(--mist)",
          background: upcoming ? "var(--clay-wash)" : "var(--silk)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hover ? "var(--shadow-card)" : "none",
          transition: "box-shadow var(--duration-md) var(--ease-out)",
        }}
      >
        {previewSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewSrc} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--pebble)",
            }}
          >
            {upcoming ? "more coming" : previewLabel}
          </span>
        )}
      </div>

      {/* Category eyebrow */}
      {category && (
        <span
          style={{
            marginTop: "var(--space-5)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: upcoming ? "var(--pebble)" : "var(--clay)",
          }}
        >
          {category}
        </span>
      )}

      {/* Title */}
      <span
        style={{
          marginTop: "var(--space-2)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-h3)",
          fontWeight: "var(--weight-medium)",
          letterSpacing: "var(--tracking-h3)",
          lineHeight: "var(--leading-tight)",
          color: upcoming ? "var(--stone)" : "var(--ink)",
        }}
      >
        {title}
      </span>

      {/* One honest line */}
      {problem && (
        <p
          style={{
            margin: "var(--space-3) 0 0",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-small)",
            lineHeight: 1.55,
            color: "var(--stone)",
          }}
        >
          {problem}
        </p>
      )}

      {/* Base row: year · role · arrow */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "var(--space-5)",
          marginBlockStart: "var(--space-5)",
          borderTop: "1px solid var(--mist)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            letterSpacing: "var(--tracking-mono)",
            color: "var(--stone)",
          }}
        >
          {year || (upcoming ? "Soon" : "")}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-small)",
              color: "var(--stone)",
            }}
          >
            {role}
          </span>
          {interactive && (
            <span
              aria-hidden="true"
              style={{
                color: hover ? "var(--ink)" : "var(--stone)",
                transform: hover ? "translate(2px, -2px)" : "none",
                transition: "transform var(--duration-sm) var(--ease-out), color var(--duration-sm) var(--ease)",
              }}
            >
              ↗
            </span>
          )}
        </span>
      </div>
    </div>
  );

  if (interactive) {
    return (
      <Link
        href={href}
        style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
        aria-label={`${title} — view case`}
      >
        {card}
      </Link>
    );
  }

  return card;
}
