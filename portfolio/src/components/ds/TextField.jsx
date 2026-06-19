"use client";

import { useId, useState } from "react";

/*
 * TextField — labelled input. Clay ring on focus; invisible at rest.
 * DM Sans for labels and input text; no decorative chrome.
 * Reconstructed from the design-system spec (components/core/TextField.jsx).
 */
export function TextField({
  label,
  help,
  error,
  id,
  style,
  containerStyle,
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const autoId = useId();
  const inputId = id || autoId;
  const helpId = help || error ? `${inputId}-desc` : undefined;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", ...containerStyle }}>
      <label
        htmlFor={inputId}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "-0.005em",
          color: "var(--ink)",
        }}
      >
        {label}
      </label>

      <input
        id={inputId}
        aria-describedby={helpId}
        aria-invalid={!!error}
        onFocus={(e) => { setFocused(true); onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); onBlur?.(e); }}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "16px",
          fontWeight: 400,
          color: "var(--ink)",
          background: "var(--silk)",
          border: `1px solid ${error ? "var(--alert)" : focused ? "var(--clay)" : "var(--mist)"}`,
          borderRadius: "var(--radius-sm)",
          padding: "11px 14px",
          outline: "none",
          boxShadow: focused
            ? error
              ? "0 0 0 3px var(--alert-wash)"
              : "0 0 0 3px var(--clay-ring)"
            : "none",
          transition: [
            "border-color var(--duration-sm) var(--ease)",
            "box-shadow var(--duration-sm) var(--ease)",
          ].join(", "),
          ...style,
        }}
        {...props}
      />

      {(help || error) && (
        <span
          id={helpId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: error ? "var(--alert)" : "var(--stone)",
          }}
        >
          {error || help}
        </span>
      )}
    </div>
  );
}
