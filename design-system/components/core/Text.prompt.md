Text — the type scale as a component; size, weight and space carry hierarchy, almost never colour.

```jsx
<Text variant="display">Service clarity</Text>
<Text variant="h2">The problem, stated plainly</Text>
<Text variant="body">Front-desk teams lose time across disconnected tools.</Text>
<Text variant="mono">B2B · Service Operations · 2026</Text>
```

Variants: `display 56/600` · `h1 44/600` · `h2 32/600` · `h3 24/500` · `body-lg 20/400` · `body 16/400` · `small 14/400` (warm grey) · `mono 12` (uppercase, warm grey). Override the element with `as` (e.g. `<Text variant="display" as="h2">`).
