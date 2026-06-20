# Breno Sampayo — Portfolio

Personal portfolio for Breno Sampayo, Product Designer with a technical edge.
Built on Breno's own design system as the real foundation — not a reskin.

Three pages: **Home**, a full **case study** (Service Operations Dashboard), and **About**.

---

## Run it

Requires Node.js 18.18+ (built and tested on Node 24).

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

---

## How the design system is wired

The brand is the source of truth, linked for real — not reinvented.

- **`design-system/`** is a copy of Breno's design-system package, kept intact.
- **`design-system/styles.css`** is imported once in `src/app/layout.jsx`. It pulls in
  every token file (color, type, spacing, motion) and the base reset. Every colour,
  font, space and easing in the site resolves to one of these CSS variables — no
  invented values.
- The 9 design-system components (`Button`, `Text`, `Tag`, `TextField`, `Status`,
  `Divider`, `QuoteBlock`, `ProjectCard`, `PrincipleCard`) were **rebuilt as clean
  React** in `src/components/ds/`, from the spec files in
  `design-system/components/`. The `_ds_bundle.js` runtime is **not** used.
- **Fonts.** The DS declares DM Sans + Cormorant Garamond via an `@import` in
  `design-system/tokens/fonts.css`. Bundlers strip nested remote `@import`s, so the
  exact same Google Fonts request is mirrored as a `<link>` in `layout.jsx` so the
  fonts actually load. The DS file stays canonical; the `<link>` is just a
  bundler-safe delivery of the same declaration.

### Typography rule held throughout
DM Sans for all text and UI. Cormorant Garamond italic **only** as an editorial
accent — headline words, the case opener, pull quotes. Never in body or UI. Mono
(system stack) for eyebrows, labels and metadata.

### One accent
Clay (`#8A6A4E`) is the only tint — actions, focus, eyebrows, dots. Alert
(`#C44A31`) appears once, on a genuine urgency state in the case. Everything else is
warm neutrals, Paper → Ink.

---

## Motion

- **Lenis** smooth scroll (`src/components/site/SmoothScroll.jsx`) — light, no
  parallax, no scroll-jacking. Fully disabled under `prefers-reduced-motion`.
- **GSAP ScrollTrigger** only *triggers* reveals (`src/components/site/Reveal.jsx`);
  the actual motion is CSS, so durations/easings stay in the motion tokens.
- Reveals are JS-gated: no-JS visitors get fully visible content; reduced-motion
  users get no transform/opacity animation. No layout-shift, nothing heavy.

---

## Content

All copy is real. There are **no invented clients, logos, or metrics** — the
reference mockups were used for layout only. Where there isn't real content yet, the
site shows an honest empty state (e.g. "more coming", labelled "— to add" frames in
the case) rather than filler.

- `src/lib/content.js` — profile, selected work, and Breno's design principles.
- `src/app/work/service-operations/page.jsx` — the case, built from
  `../case-content-service-operations.md`, with honest placeholder frames where
  screens aren't designed yet.

---

## Structure

```
design-system/                     # the brand — linked, not reinvented
src/
  app/
    layout.jsx                      # links styles.css + fonts, header/footer, motion
    globals.css                     # layout helpers only — all values are DS tokens
    page.jsx                        # Home
    about/page.jsx                  # About
    work/service-operations/page.jsx# Case study
  components/
    ds/                             # 9 DS components rebuilt as clean React
    site/                           # Header, Footer, SmoothScroll, Reveal, etc.
  lib/content.js                    # real content
```

---

## Stack

Next.js (App Router) · React · GSAP · Lenis. No WebGL — the weight is typographic
and editorial, which keeps it light and smooth on any machine.
