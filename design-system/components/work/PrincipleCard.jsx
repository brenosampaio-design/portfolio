import React from 'react';

/*
 * PrincipleCard — one design or brand principle.
 * Used in: documentation boards, presentations, about pages.
 * annotation: optional concept label (e.g. '間 ma', 'kanso').
 * principle: the statement — concise, direct.
 * description: one or two plain sentences, no jargon.
 */
export function PrincipleCard({ annotation, principle, description, index, style, ...props }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '24px',
        background: 'var(--silk)',
        border: '1px solid var(--mist)',
        borderRadius: 'var(--radius-md)',
        ...style,
      }}
      {...props}
    >
      {/* Header row: index + annotation + hairline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {index != null && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.06em',
              color: 'var(--pebble)',
            }}
          >
            {String(index).padStart(2, '0')}
          </span>
        )}
        {annotation && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.05em',
              color: 'var(--clay)',
            }}
          >
            {annotation}
          </span>
        )}
        <div style={{ flex: 1, height: '1px', background: 'var(--mist)' }} />
      </div>

      {/* Principle name */}
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          fontWeight: 500,
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
          color: 'var(--ink)',
        }}
      >
        {principle}
      </div>

      {/* Description */}
      {description && (
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--stone)',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
