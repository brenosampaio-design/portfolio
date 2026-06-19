TextField — labelled input with a non-negotiable visible focus ring (Moss, 3px tint).

```jsx
<TextField
  label="Email"
  type="email"
  placeholder="you@example.com"
  help="I read every message. Expect a reply within two days."
/>
```

Always has a visible label (wired to the input via `htmlFor`/`id`). On focus the border turns Moss and a 3px Moss-tint ring appears. Optional `help` renders below and is linked with `aria-describedby`.
