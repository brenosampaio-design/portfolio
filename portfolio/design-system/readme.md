# Breno Sampaio — Design System

Personal brand design system for Breno Sampaio, Product Designer.

**Aesthetic:** Japanese structural discipline (間 ma, 簡 kanso, 渋 shibui) combined with Apple-like product clarity and editorial precision.

---

## Foundations

| Token file | Purpose |
|---|---|
| `tokens/fonts.css` | DM Sans (primary) + Cormorant Garamond (editorial accent) |
| `tokens/colors.css` | Warm neutrals (Paper → Ink) + Clay accent + Alert |
| `tokens/typography.css` | Scale, weight, leading, tracking |
| `tokens/spacing.css` | 8px base, radius, elevation, layout |
| `tokens/motion.css` | Restrained easing + durations (80–640ms) |
| `tokens/base.css` | Global reset, body defaults, focus styles |

### Color tokens

| Name | Token | Value | Use |
|---|---|---|---|
| Paper | `--paper` | `#F9F7F3` | Page background |
| Silk | `--silk` | `#F0EDE7` | Card / input surfaces |
| Mist | `--mist` | `#DDD9D4` | Borders, hairlines |
| Pebble | `--pebble` | `#BCB8B3` | Disabled, placeholders |
| Stone | `--stone` | `#857F79` | Secondary text |
| Graphite | `--graphite` | `#3D3B38` | Strong surface text |
| Ink | `--ink` | `#1C1A18` | Primary text |
| Clay | `--clay` | `#8A6A4E` | Accent — the only tint |
| Clay Dark | `--clay-dark` | `#6A5038` | Hover / pressed |
| Alert | `--alert` | `#C44A31` | Errors only |

All old names (`--moss`, `--warm-grey`, `--ivory`, `--charcoal`, etc.) remain as backwards-compatible aliases.

### Typography

- **Primary:** DM Sans, weights 300 / 400 / 500 / 600
- **Editorial accent:** Cormorant Garamond italic — pull quotes, case study openers, select editorial moments **only**. Never for body text or UI.
- **Mono:** System stack (SF Mono, Menlo) — technical labels, eyebrows, metadata

---

## Components

| Component | Location | Description |
|---|---|---|
| `Button` | `components/core/` | Primary / secondary / ghost / link. Clay primary. |
| `Text` | `components/core/` | Full type scale including `serif-display` and `serif-quote` variants |
| `Tag` | `components/core/` | Invisible mono label for discipline/domain |
| `TextField` | `components/core/` | Labelled input, Clay focus ring, error state |
| `Status` | `components/core/` | Neutral / done / urgent status indicators |
| `Divider` | `components/core/` | Hairline / spaced / labeled separator |
| `QuoteBlock` | `components/core/` | Cormorant editorial quote — sm / md / lg |
| `ProjectCard` | `components/work/` | Problem-first card with hover lift |
| `PrincipleCard` | `components/work/` | Brand/design principle with annotation + index |

```js
const { Button, Text, Tag, TextField, Status, Divider, QuoteBlock, ProjectCard, PrincipleCard }
  = window.BrenoSampaioPortfolioDesignSystem_fd7625;
```

---

## Visual principles

1. **間 ma — Space as structure.** Negative space is intentional.
2. **簡 kanso — Clarity before decoration.** Remove until only what matters remains.
3. **Quiet hierarchy.** Scale, weight, and space communicate everything.
4. **渋 shibui — Restraint with intention.** Premium through discipline.
5. **Product thinking visible.** Clarity of form reveals clarity of process.
6. **Continuity across touchpoints.** One system, one feeling.

---

## Voice

Direct. Mature. Strategic. Useful. Sentence case always. Numbers over words. Active voice. Problem → solution → result. No buzzwords, no UX clichés, no exclamation marks.
