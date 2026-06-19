import React from 'react';

/*
 * Divider — a hairline separator. Structural, never decorative.
 * kanso: present only when it clarifies; absent when it would decorate.
 *
 * Variants:
 *   hairline — 1px, no margin
 *   spaced   — 1px, 40px vertical margin
 *   labeled  — centered text label with hairlines either side
 */
export function Divider({ variant = 'hairline', label, style, ...props }) {
  if (variant === 'labeled' && label) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          ...style,
        }}
        {...props}
      >
        <div style={{ flex: 1, height: '1px', background: 'var(--mist)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--pebble)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--mist)' }} />
      </div>
    );
  }

  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--mist)',
        margin: variant === 'spaced' ? '40px 0' : '0',
        ...style,
      }}
      {...props}
    />
  );
}
