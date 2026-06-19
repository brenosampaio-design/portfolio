import React from 'react';

/*
 * QuoteBlock — editorial pull quote in Cormorant Garamond italic.
 * shibui: used sparingly, it carries weight. Used frequently, it loses it.
 *
 * Reserved for: case study openers, section punctuation, editorial accents.
 * Never for: UI labels, body text, captions, repeated content.
 */
export function QuoteBlock({ quote, attribution, context, size = 'md', style, ...props }) {
  const sizes = {
    sm: { fontSize: '20px', lineHeight: 1.45 },
    md: { fontSize: '26px', lineHeight: 1.4  },
    lg: { fontSize: '34px', lineHeight: 1.35 },
  };

  return (
    <figure
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        ...style,
      }}
      {...props}
    >
      <blockquote
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 400,
          fontStyle: 'italic',
          letterSpacing: 'var(--tracking-serif)',
          color: 'var(--graphite)',
          margin: 0,
          ...sizes[size],
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {(attribution || context) && (
        <figcaption style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {attribution && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: 'var(--ink)',
              }}
            >
              {attribution}
            </span>
          )}
          {context && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: 'var(--tracking-mono)',
                color: 'var(--stone)',
              }}
            >
              {context}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
