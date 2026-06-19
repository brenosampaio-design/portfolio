import React, { useState } from 'react';
import { Tag } from '../core/Tag.jsx';

/*
 * ProjectCard — problem first, role explicit, preview honest.
 * At rest: hairline card. On hover: lifts 3px, shadow appears.
 */
export function ProjectCard({
  title,
  problem,
  tags = [],
  role,
  previewSrc,
  previewLabel = 'case preview',
  style,
  ...props
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        overflow: 'hidden',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--stone)',
        background: 'var(--ivory)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hover ? 'var(--shadow-card)' : 'none',
        transition: [
          'transform var(--duration-md) var(--ease-out)',
          'box-shadow var(--duration-md) var(--ease-out)',
        ].join(', '),
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {/* Preview */}
      <div
        style={{
          height: '160px',
          borderBottom: '1px solid var(--stone)',
          background: 'var(--paper)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {previewSrc ? (
          <img
            src={previewSrc}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '68%',
              height: '60%',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--stone)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.04em',
                color: 'var(--muted-grey)',
              }}
            >
              {previewLabel}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px 24px' }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            lineHeight: 1.25,
          }}
        >
          {title}
        </div>

        {problem && (
          <p
            style={{
              margin: '8px 0 0',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              lineHeight: 1.55,
              color: 'var(--warm-grey)',
            }}
          >
            {problem}
          </p>
        )}

        {tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginTop: '16px',
            }}
          >
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        )}

        {role && (
          <div
            style={{
              marginTop: '14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.04em',
              color: 'var(--muted-grey)',
            }}
          >
            {role}
          </div>
        )}
      </div>
    </div>
  );
}
