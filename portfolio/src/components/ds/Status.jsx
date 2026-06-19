/*
 * Status — neutral by default. Alert (vermilion) is the one exception:
 * a dot + red wash, only for genuine urgency. Reconstructed from spec.
 */

const themes = {
  default: {
    bg: "transparent",
    border: "var(--mist)",
    color: "var(--stone)",
    dot: "var(--pebble)",
  },
  done: {
    bg: "transparent",
    border: "var(--mist)",
    color: "var(--stone)",
    dot: null,
  },
  urgent: {
    bg: "var(--alert-wash)",
    border: "var(--alert-border)",
    color: "var(--alert)",
    dot: "var(--alert)",
  },
};

export function Status({ variant = "default", children, style, ...props }) {
  const t = themes[variant] || themes.default;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "var(--tracking-mono)",
        background: t.bg,
        color: t.color,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--radius-full)",
        padding: "4px 11px",
        ...style,
      }}
      {...props}
    >
      {variant === "done" ? (
        <span style={{ fontSize: "10px", lineHeight: 1 }} aria-hidden="true">✓</span>
      ) : (
        <span
          aria-hidden="true"
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: t.dot,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
