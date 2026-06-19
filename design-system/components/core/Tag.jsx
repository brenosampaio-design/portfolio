import React from 'react';

/*
 * Tag — a mono label for domain and discipline. Deliberately invisible:
 * near-page background, hairline border. Never carries colour.
 */
export function Tag({ children, style, ...props }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: 'var(--tracking-mono)',
        background: 'var(--paper)',
        color: 'var(--warm-grey)',
        border: '1px solid var(--stone)',
        borderRadius: 'var(--radius-full)',
        padding: '4px 11px',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
