ProjectCard — a case-study card that reads like a product: problem first, role explicit, tags honest.

```jsx
<ProjectCard
  title="Service Operations Dashboard"
  problem="Front-desk teams lose visibility when incidents scatter across tools."
  tags={['B2B', 'Service Ops', 'Design System']}
  role="Concept · Product Design, flows, UI · 2026"
/>
```

The preview area is an honest empty frame (mono `case preview` label) until a real screen exists — pass `previewSrc` to show one, never a faked screenshot. Hover lifts the card 2px with a soft shadow. Composes `Tag` for the meta row.
