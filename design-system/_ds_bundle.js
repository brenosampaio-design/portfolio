/* @ds-bundle: {"format":3,"namespace":"BrenoSampaioPortfolioDesignSystem_fd7625","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"QuoteBlock","sourcePath":"components/core/QuoteBlock.jsx"},{"name":"Status","sourcePath":"components/core/Status.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Text","sourcePath":"components/core/Text.jsx"},{"name":"TextField","sourcePath":"components/core/TextField.jsx"},{"name":"PrincipleCard","sourcePath":"components/work/PrincipleCard.jsx"},{"name":"ProjectCard","sourcePath":"components/work/ProjectCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"6f1e25757490","components/core/Divider.jsx":"234f3eb0069d","components/core/QuoteBlock.jsx":"bdba383cacd8","components/core/Status.jsx":"d601e369e26b","components/core/Tag.jsx":"d80bfc9d92ad","components/core/Text.jsx":"f0520321d091","components/core/TextField.jsx":"77fa103af4e2","components/work/PrincipleCard.jsx":"494d0f322e53","components/work/ProjectCard.jsx":"3868c45cf16d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrenoSampaioPortfolioDesignSystem_fd7625 = window.BrenoSampaioPortfolioDesignSystem_fd7625 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
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
  transition: ['background-color var(--duration-sm) var(--ease)', 'color var(--duration-sm) var(--ease)', 'border-color var(--duration-sm) var(--ease)', 'box-shadow var(--duration-sm) var(--ease)', 'transform var(--duration-sm) var(--ease)'].join(', ')
};
const variants = {
  primary: {
    rest: {
      background: 'var(--clay)',
      color: 'var(--on-accent)',
      borderColor: 'transparent'
    },
    hover: {
      background: 'var(--clay-dark)',
      boxShadow: 'var(--shadow-card)'
    }
  },
  secondary: {
    rest: {
      background: 'var(--silk)',
      color: 'var(--ink)',
      borderColor: 'var(--mist)'
    },
    hover: {
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-subtle)',
      borderColor: 'var(--pebble)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--stone)',
      borderColor: 'transparent'
    },
    hover: {
      background: 'var(--silk)',
      color: 'var(--ink)'
    }
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
      fontWeight: 400
    },
    hover: {
      textDecorationColor: 'var(--ink)'
    }
  }
};
function Button({
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
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const v = variants[variant] || variants.primary;
  const composed = {
    ...base,
    ...v.rest,
    ...(hover && !disabled ? v.hover : {}),
    ...(pressed && !disabled && variant !== 'link' ? {
      transform: 'scale(0.984)',
      boxShadow: 'none'
    } : {}),
    ...(disabled ? {
      opacity: 0.38,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: composed,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHover(false);
      setPressed(false);
      onMouseLeave?.(e);
    },
    onMouseDown: e => {
      setPressed(true);
      onMouseDown?.(e);
    },
    onMouseUp: e => {
      setPressed(false);
      onMouseUp?.(e);
    }
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Divider — a hairline separator. Structural, never decorative.
 * kanso: present only when it clarifies; absent when it would decorate.
 *
 * Variants:
 *   hairline — 1px, no margin
 *   spaced   — 1px, 40px vertical margin
 *   labeled  — centered text label with hairlines either side
 */
function Divider({
  variant = 'hairline',
  label,
  style,
  ...props
}) {
  if (variant === 'labeled' && label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        ...style
      }
    }, props), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--mist)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--pebble)',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--mist)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 'none',
      borderTop: '1px solid var(--mist)',
      margin: variant === 'spaced' ? '40px 0' : '0',
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * QuoteBlock — editorial pull quote in Cormorant Garamond italic.
 * shibui: used sparingly, it carries weight. Used frequently, it loses it.
 *
 * Reserved for: case study openers, section punctuation, editorial accents.
 * Never for: UI labels, body text, captions, repeated content.
 */
function QuoteBlock({
  quote,
  attribution,
  context,
  size = 'md',
  style,
  ...props
}) {
  const sizes = {
    sm: {
      fontSize: '20px',
      lineHeight: 1.45
    },
    md: {
      fontSize: '26px',
      lineHeight: 1.4
    },
    lg: {
      fontSize: '34px',
      lineHeight: 1.35
    }
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontStyle: 'italic',
      letterSpacing: 'var(--tracking-serif)',
      color: 'var(--graphite)',
      margin: 0,
      ...sizes[size]
    }
  }, "\u201C", quote, "\u201D"), (attribution || context) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, attribution && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, attribution), context && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--stone)'
    }
  }, context)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Status.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Status — neutral by default.
 * Vermilion is the one exception: a dot + red wash, only for genuine urgency.
 */

const themes = {
  default: {
    bg: 'transparent',
    border: 'var(--stone)',
    color: 'var(--warm-grey)',
    dot: 'var(--muted-grey)'
  },
  done: {
    bg: 'transparent',
    border: 'var(--stone)',
    color: 'var(--warm-grey)',
    dot: null
  },
  urgent: {
    bg: 'var(--vermilion-wash)',
    border: 'var(--vermilion-border)',
    color: 'var(--vermilion)',
    dot: 'var(--vermilion)'
  }
};
function Status({
  variant = 'default',
  children,
  style,
  ...props
}) {
  const t = themes[variant] || themes.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, props), variant === 'done' ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      lineHeight: 1
    }
  }, "\u2713") : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Status });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Status.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Tag — a mono label for domain and discipline. Deliberately invisible:
 * near-page background, hairline border. Never carries colour.
 */
function Tag({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Text.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
      color: 'var(--ink)'
    }
  },
  h1: {
    tag: 'h1',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-h1)',
      color: 'var(--ink)'
    }
  },
  h2: {
    tag: 'h2',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-h2)',
      color: 'var(--ink)'
    }
  },
  h3: {
    tag: 'h3',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-h3)',
      color: 'var(--ink)'
    }
  },
  'body-lg': {
    tag: 'p',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-body)',
      letterSpacing: 'var(--tracking-body-lg)',
      color: 'var(--ink)'
    }
  },
  body: {
    tag: 'p',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-body)',
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--ink)'
    }
  },
  small: {
    tag: 'p',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.55,
      color: 'var(--stone)'
    }
  },
  caption: {
    tag: 'span',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1.5,
      color: 'var(--stone)'
    }
  },
  mono: {
    tag: 'span',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)',
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--stone)'
    }
  },
  eyebrow: {
    tag: 'span',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--stone)'
    }
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
      color: 'var(--graphite)'
    }
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
      margin: 0
    }
  }
};
function Text({
  variant = 'body',
  as,
  style,
  children,
  ...props
}) {
  const def = scale[variant] || scale.body;
  const Tag = as || def.tag;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...def.style,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Text.jsx", error: String((e && e.message) || e) }); }

// components/core/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/*
 * TextField — labelled input. Clay ring on focus; invisible at rest.
 * DM Sans for labels and input text; no decorative chrome.
 */
let _uid = 0;
function TextField({
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
  const [inputId] = useState(() => id || `tf-${++_uid}`);
  const helpId = help || error ? `${inputId}-desc` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...containerStyle
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '-0.005em',
      color: 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    "aria-describedby": helpId,
    "aria-invalid": !!error,
    onFocus: e => {
      setFocused(true);
      onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      onBlur?.(e);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      fontWeight: 400,
      color: 'var(--ink)',
      background: 'var(--silk)',
      border: `1px solid ${error ? 'var(--alert)' : focused ? 'var(--clay)' : 'var(--mist)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      outline: 'none',
      boxShadow: focused ? error ? '0 0 0 3px var(--alert-wash)' : '0 0 0 3px var(--clay-ring)' : 'none',
      transition: ['border-color var(--duration-sm) var(--ease)', 'box-shadow var(--duration-sm) var(--ease)'].join(', '),
      ...style
    }
  }, props)), (help || error) && /*#__PURE__*/React.createElement("span", {
    id: helpId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: error ? 'var(--alert)' : 'var(--stone)'
    }
  }, error || help));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextField.jsx", error: String((e && e.message) || e) }); }

// components/work/PrincipleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * PrincipleCard — one design or brand principle.
 * Used in: documentation boards, presentations, about pages.
 * annotation: optional concept label (e.g. '間 ma', 'kanso').
 * principle: the statement — concise, direct.
 * description: one or two plain sentences, no jargon.
 */
function PrincipleCard({
  annotation,
  principle,
  description,
  index,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '24px',
      background: 'var(--silk)',
      border: '1px solid var(--mist)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.06em',
      color: 'var(--pebble)'
    }
  }, String(index).padStart(2, '0')), annotation && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.05em',
      color: 'var(--clay)'
    }
  }, annotation), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--mist)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
      color: 'var(--ink)'
    }
  }, principle), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 1.6,
      color: 'var(--stone)'
    }
  }, description));
}
Object.assign(__ds_scope, { PrincipleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/PrincipleCard.jsx", error: String((e && e.message) || e) }); }

// components/work/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/*
 * ProjectCard — problem first, role explicit, preview honest.
 * At rest: hairline card. On hover: lifts 3px, shadow appears.
 */
function ProjectCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--stone)',
      background: 'var(--ivory)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      transition: ['transform var(--duration-md) var(--ease-out)', 'box-shadow var(--duration-md) var(--ease-out)'].join(', '),
      cursor: 'pointer',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '160px',
      borderBottom: '1px solid var(--stone)',
      background: 'var(--paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, previewSrc ? /*#__PURE__*/React.createElement("img", {
    src: previewSrc,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '68%',
      height: '60%',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid var(--stone)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.04em',
      color: 'var(--muted-grey)'
    }
  }, previewLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      lineHeight: 1.25
    }
  }, title), problem && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--warm-grey)'
    }
  }, problem), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '16px'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), role && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.04em',
      color: 'var(--muted-grey)'
    }
  }, role)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/ProjectCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.Status = __ds_scope.Status;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.PrincipleCard = __ds_scope.PrincipleCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
