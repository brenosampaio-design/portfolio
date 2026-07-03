/** @type {import('tailwindcss').Config} */

/*
  FieldOps Design System — Tailwind v4 config.
  Uses CSS variable references so tokens stay single-source-of-truth in tokens.css.
  Import tokens.css BEFORE this config in your entry CSS.
*/

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primitive ramps — use semantic aliases in components */
        terracota: {
          50:  "var(--fo-p-terracota-50)",
          100: "var(--fo-p-terracota-100)",
          200: "var(--fo-p-terracota-200)",
          300: "var(--fo-p-terracota-300)",
          400: "var(--fo-p-terracota-400)",
          500: "var(--fo-p-terracota-500)",
          600: "var(--fo-p-terracota-600)",
          700: "var(--fo-p-terracota-700)",
          800: "var(--fo-p-terracota-800)",
          900: "var(--fo-p-terracota-900)",
        },
        sand: {
          50:  "var(--fo-p-sand-50)",
          100: "var(--fo-p-sand-100)",
          200: "var(--fo-p-sand-200)",
          300: "var(--fo-p-sand-300)",
          400: "var(--fo-p-sand-400)",
          500: "var(--fo-p-sand-500)",
          600: "var(--fo-p-sand-600)",
          700: "var(--fo-p-sand-700)",
          800: "var(--fo-p-sand-800)",
          900: "var(--fo-p-sand-900)",
        },
        neutral: {
          50:  "var(--fo-p-neutral-50)",
          100: "var(--fo-p-neutral-100)",
          200: "var(--fo-p-neutral-200)",
          300: "var(--fo-p-neutral-300)",
          400: "var(--fo-p-neutral-400)",
          500: "var(--fo-p-neutral-500)",
          600: "var(--fo-p-neutral-600)",
          700: "var(--fo-p-neutral-700)",
          800: "var(--fo-p-neutral-800)",
          900: "var(--fo-p-neutral-900)",
        },
        sage: {
          50:  "var(--fo-p-sage-50)",
          500: "var(--fo-p-sage-500)",
          700: "var(--fo-p-sage-700)",
        },
        /* Semantic — use these in component classes */
        action: {
          DEFAULT:  "var(--fo-color-action-primary)",
          hover:    "var(--fo-color-action-primary-hover)",
          active:   "var(--fo-color-action-primary-active)",
          text:     "var(--fo-color-action-primary-text)",
          disabled: "var(--fo-color-action-disabled)",
        },
        surface: {
          page:    "var(--fo-color-surface-page)",
          field:   "var(--fo-color-surface-field)",
          elevated:"var(--fo-color-surface-elevated)",
          sunken:  "var(--fo-color-surface-sunken)",
        },
        "fo-text": {
          primary:   "var(--fo-color-text-primary)",
          secondary: "var(--fo-color-text-secondary)",
          tertiary:  "var(--fo-color-text-tertiary)",
          disabled:  "var(--fo-color-text-disabled)",
          inverse:   "var(--fo-color-text-inverse)",
        },
        border: {
          DEFAULT:  "var(--fo-color-border-default)",
          subtle:   "var(--fo-color-border-subtle)",
          strong:   "var(--fo-color-border-strong)",
          focus:    "var(--fo-color-border-focus)",
          error:    "var(--fo-color-border-error)",
        },
      },
      fontFamily: {
        sans:  "var(--fo-p-font-sans)",
        serif: "var(--fo-p-font-serif)",
        mono:  "var(--fo-p-font-mono)",
      },
      fontSize: {
        "2xs": ["var(--fo-p-text-11)", { lineHeight: "var(--fo-p-leading-normal)" }],
        xs:    ["var(--fo-p-text-12)", { lineHeight: "var(--fo-p-leading-normal)" }],
        sm:    ["var(--fo-p-text-14)", { lineHeight: "var(--fo-p-leading-normal)" }],
        base:  ["var(--fo-p-text-16)", { lineHeight: "var(--fo-p-leading-normal)" }],
        lg:    ["var(--fo-p-text-20)", { lineHeight: "var(--fo-p-leading-snug)" }],
        xl:    ["var(--fo-p-text-24)", { lineHeight: "var(--fo-p-leading-snug)" }],
        "2xl": ["var(--fo-p-text-32)", { lineHeight: "var(--fo-p-leading-tight)" }],
        "3xl": ["var(--fo-p-text-48)", { lineHeight: "var(--fo-p-leading-tight)" }],
        "4xl": ["var(--fo-p-text-96)", { lineHeight: "var(--fo-p-leading-none)" }],
      },
      fontWeight: {
        regular:  "var(--fo-p-weight-regular)",
        medium:   "var(--fo-p-weight-medium)",
        semibold: "var(--fo-p-weight-semibold)",
        bold:     "var(--fo-p-weight-bold)",
      },
      borderRadius: {
        none: "var(--fo-p-radius-none)",
        xs:   "var(--fo-p-radius-xs)",
        sm:   "var(--fo-p-radius-sm)",
        md:   "var(--fo-p-radius-md)",
        lg:   "var(--fo-p-radius-lg)",
        xl:   "var(--fo-p-radius-xl)",
        "2xl":"var(--fo-p-radius-2xl)",
        full: "var(--fo-p-radius-full)",
      },
      spacing: {
        1:  "var(--fo-p-space-1)",
        2:  "var(--fo-p-space-2)",
        3:  "var(--fo-p-space-3)",
        4:  "var(--fo-p-space-4)",
        5:  "var(--fo-p-space-5)",
        6:  "var(--fo-p-space-6)",
        8:  "var(--fo-p-space-8)",
        10: "var(--fo-p-space-10)",
        12: "var(--fo-p-space-12)",
        14: "var(--fo-p-space-14)",
        16: "var(--fo-p-space-16)",
        20: "var(--fo-p-space-20)",
        24: "var(--fo-p-space-24)",
      },
      boxShadow: {
        xs: "var(--fo-shadow-xs)",
        sm: "var(--fo-shadow-sm)",
        md: "var(--fo-shadow-md)",
        lg: "var(--fo-shadow-lg)",
        xl: "var(--fo-shadow-xl)",
      },
      minHeight: {
        tap:     "var(--fo-p-space-12)", /* 48px — field */
        "tap-sm":"var(--fo-p-space-10)", /* 40px — desktop */
      },
      minWidth: {
        tap:     "var(--fo-p-space-12)",
      },
    },
  },
  plugins: [],
}
