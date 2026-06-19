---
name: breno-sampaio-design
description: Use this skill to generate well-branded interfaces and assets for Breno Sampaio's Product Design portfolio, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping — a quiet, warm-neutral, Apple/Anthropic-calm system.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Surface:** Paper `#F7F5F0` page, Ivory `#FBFAF7` cards/inputs. Never cold white.
- **Text:** Ink `#111111`, secondary Warm Grey `#8A8781`, borders Stone `#E6E2D8`.
- **One accent:** Deep Moss `#465242` (actions + focus). Hover Moss Dark `#3A463A`.
- **Alert only:** Vermilion `#C84A31` — one genuine exception per view, never decoration.
- **Type:** Geist Sans (human text), Geist Mono (metadata, tags, numbers, labels).
  Hierarchy from size/weight/space, not colour. Tracking tightens as type grows.
- **Radius:** 10 buttons/inputs · 16–20 cards · 999 pills. Concentric nesting.
- **Spacing:** 4/8 scale. Content max-width 1080px.
- **Motion:** ≤220ms, ease-out, no parallax, respects reduced-motion.
- **Voice:** direct, mature, plain, confident. No hype, no emoji. Sentence case;
  UPPERCASE only in mono labels. Lead case studies with the problem.

## Files

- `styles.css` — the single stylesheet to link (imports all tokens + fonts).
- `tokens/` — colors, typography, spacing, motion, fonts, base.
- `components/` — Button, Tag, Status, Text, TextField (core), ProjectCard (work).
- `guidelines/` — foundation specimen cards.
- `ui_kits/portfolio/` — interactive full-site recreation.
- `templates/portfolio-home/` — copy-to-start portfolio home page.

Components are reachable at runtime via
`window.BrenoSampaioPortfolioDesignSystem_fd7625` after loading `_ds_bundle.js`.
