import React from 'react';

/*
 * Status — neutral by default.
 * Vermilion is the one exception: a dot + red wash, only for genuine urgency.
 */

const themes = {
  default: {
    bg: 'transparent',
    border: 'var(--stone)',
    color: 'var(--warm-grey)',
    dot: 'var(--muted-grey)',
  },
  done: {
    bg: 'transparent',
    border: 'var(--stone)',
    color: 'var(--warm-grey)',
    dot: null,
  },
  urgent: {
    bg: 'var(--vermilion-wash)',
    border: 'var(--vermilion-border)',
    color: 'var(--vermilion)',
    dot: 'var(--vermilion)',
  },
};

export function Status({ variant = 'default', children, style, ...props }) {
  const t = themes[variant] || themes.default;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: 'var(--tracking-mono)',
        background: t.bg,
        color: t.color,
        border: `1px solid ${t.border}`,
        borderRadius: 'var(--radius-full)',
        padding: '4px 11px',
        ...style,
      }}
      {...props}
    >
      {variant === 'done' ? (
        <span style={{ fontSize: '10px', lineHeight: 1 }}>✓</span>
      ) : (
        <span
          aria-hidden="true"
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: t.dot,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
