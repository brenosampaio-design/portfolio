import React from 'react';

/*
 * Text — the full type scale as a component.
 * DM Sans for all text; Cormorant Garamond for editorial serif moments.
 * Hierarchy from scale, weight, and space — almost never colour.
 *
 * New variants: 'serif-display', 'serif-quote' use Cormorant Garamond.
 * Use sparingly — pull quotes, case study openers, editorial accents only.
 */

const scale = {
  display: {
    tag: 'h1',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-display)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--ink)',
    },
  },
  h1: {
    tag: 'h1',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-h1)',
      color: 'var(--ink)',
    },
  },
  h2: {
    tag: 'h2',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-h2)',
      color: 'var(--ink)',
    },
  },
  h3: {
    tag: 'h3',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-h3)',
      color: 'var(--ink)',
    },
  },
  'body-lg': {
    tag: 'p',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-body)',
      letterSpacing: 'var(--tracking-body-lg)',
      color: 'var(--ink)',
    },
  },
  body: {
    tag: 'p',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-body)',
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--ink)',
    },
  },
  small: {
    tag: 'p',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.55,
      color: 'var(--stone)',
    },
  },
  caption: {
    tag: 'span',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.5,
      color: 'var(--stone)',
    },
  },
  mono: {
    tag: 'span',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--stone)',
    },
  },
  eyebrow: {
    tag: 'span',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--stone)',
    },
  },
  /* Cormorant Garamond — editorial moments only */
  'serif-display': {
    tag: 'h2',
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-serif-disp)',
      fontWeight: 300,
      fontStyle: 'italic',
      lineHeight: 1.1,
      letterSpacing: 'var(--tracking-serif)',
      color: 'var(--graphite)',
    },
  },
  'serif-quote': {
    tag: 'blockquote',
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-serif-quote)',
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 1.4,
      letterSpacing: 'var(--tracking-serif)',
      color: 'var(--graphite)',
      margin: 0,
    },
  },
};

export function Text({ variant = 'body', as, style, children, ...props }) {
  const def = scale[variant] || scale.body;
  const Tag = as || def.tag;
  return (
    <Tag style={{ ...def.style, ...style }} {...props}>
      {children}
    </Tag>
  );
}
