Button — one primary action per view; Deep Moss is the only tint, everything else recedes to neutral.

```jsx
<Button variant="primary">View selected work</Button>
<Button variant="secondary">Download CV</Button>
<Button variant="ghost">Contact</Button>
<Button variant="link">Next case →</Button>
<Button variant="primary" disabled>Sending…</Button>
```

Variants: `primary` (Moss fill, lifts with shadow on hover), `secondary` (Ivory + Stone hairline), `ghost` (transparent, Ivory wash on hover), `link` (underlined, no chrome). Press nudges down 1px (except link). Reserve `primary` for the single most important action on the view.
