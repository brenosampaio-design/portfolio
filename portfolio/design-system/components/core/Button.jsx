import React, { useState } from 'react';

/*
 * Button — one primary action per view; Clay is the only tint.
 * DM Sans 500 at 15px, 6px radius (restrained, not rounded).
 * Primary fills with Clay; secondary and ghost recede to neutral.
 */

const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7px',
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: '-0.01em',
  height: '44px',
  padding: '0 22px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid transparent',
  cursor: 'pointer',
  userSelect: 'none',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: [
    'background-color var(--duration-sm) var(--ease)',
    'color var(--duration-sm) var(--ease)',
    'border-color var(--duration-sm) var(--ease)',
    'box-shadow var(--duration-sm) var(--ease)',
    'transform var(--duration-sm) var(--ease)',
  ].join(', '),
};

const variants = {
  primary: {
    rest:  { background: 'var(--clay)',  color: 'var(--on-accent)', borderColor: 'transparent' },
    hover: { background: 'var(--clay-dark)', boxShadow: 'var(--shadow-card)' },
  },
  secondary: {
    rest:  { background: 'var(--silk)', color: 'var(--ink)', borderColor: 'var(--mist)' },
    hover: { background: 'var(--paper)', boxShadow: 'var(--shadow-subtle)', borderColor: 'var(--pebble)' },
  },
  ghost: {
    rest:  { background: 'transparent', color: 'var(--stone)', borderColor: 'transparent' },
    hover: { background: 'var(--silk)', color: 'var(--ink)' },
  },
  link: {
    rest: {
      background: 'transparent',
      border: 'none',
      padding: '0',
      height: 'auto',
      color: 'var(--ink)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationColor: 'var(--mist)',
      fontWeight: 400,
    },
    hover: { textDecorationColor: 'var(--ink)' },
  },
};

export function Button({
  variant = 'primary',
  disabled = false,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}) {
  const [hover, setHover]       = useState(false);
  const [pressed, setPressed]   = useState(false);
  const v = variants[variant] || variants.primary;

  const composed = {
    ...base,
    ...v.rest,
    ...(hover && !disabled ? v.hover : {}),
    ...(pressed && !disabled && variant !== 'link'
      ? { transform: 'scale(0.984)', boxShadow: 'none' }
      : {}),
    ...(disabled
      ? { opacity: 0.38, cursor: 'not-allowed', pointerEvents: 'none' }
      : {}),
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={composed}
      onMouseEnter={(e) => { setHover(true);    onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); setPressed(false); onMouseLeave?.(e); }}
      onMouseDown={(e)  => { setPressed(true);  onMouseDown?.(e); }}
      onMouseUp={(e)    => { setPressed(false); onMouseUp?.(e); }}
      {...props}
    >
      {children}
    </button>
  );
}
