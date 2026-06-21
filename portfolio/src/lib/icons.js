// Monoline icon set — hand-drawn on a 24×24 grid, stroke-only (no fills).
// Rendered with stroke: currentColor, stroke-width 1.5, round caps/joins, so
// every icon inherits its context colour and matches the rail / divider weight.
// Each entry is an array of path `d` strings (multi-path icons draw together).
// Paths carry pathLength="1" at render time, so the self-draw animation works
// regardless of a path's real length. Keep shapes simple and geometric.
export const ICON_PATHS = {
  // ── Process steps ───────────────────────────────────────────
  search: ["M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z", "M16.5 16.5 21 21"],
  frame: ["M5 8.5V5h3.5", "M15.5 5H19v3.5", "M19 15.5V19h-3.5", "M8.5 19H5v-3.5"],
  sitemap: ["M9.5 3.5h5v4h-5z", "M3.5 16.5h5v4h-5z", "M15.5 16.5h5v4h-5z", "M12 7.5v4", "M6 16.5v-3h12v3"],
  layout: ["M4.5 5h15v14h-15z", "M4.5 9.5h15", "M9.5 9.5V19"],
  "check-circle": ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M8.5 12.2l2.4 2.4 4.6-5"],
  send: ["M21.5 3.5 2.5 11l7 2.5 2.5 7L21.5 3.5Z", "M9.5 13.5 21.5 3.5"],

  // ── Snapshot / TL;DR ────────────────────────────────────────
  alert: ["M12 4 2.7 20h18.6L12 4Z", "M12 10.5v4.5", "M12 18h.01"],
  users: [
    "M9 11a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z",
    "M3 20a6 6 0 0 1 12 0",
    "M16 4.6a3.4 3.4 0 0 1 0 6.4",
    "M16.5 14.4A6 6 0 0 1 21 20",
  ],
  user: ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M4.5 21a7.5 7.5 0 0 1 15 0"],
  package: ["M12 3.5 20.5 8v8L12 20.5 3.5 16V8L12 3.5Z", "M3.5 8 12 12.5 20.5 8", "M12 12.5V20.5"],
  target: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z", "M12 12h.01"],

  // ── Constraints ─────────────────────────────────────────────
  globe: [
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
    "M3.5 12h17",
    "M12 3c2.8 2.7 2.8 15.3 0 18",
    "M12 3c-2.8 2.7-2.8 15.3 0 18",
  ],
  devices: ["M3.5 5.5h11v8h-11z", "M6.5 17h5", "M9 13.5v3.5", "M16.5 10h4v8.5h-4z"],
  moon: ["M20.5 13A8 8 0 1 1 11 3.5 6.3 6.3 0 0 0 20.5 13Z"],
  bolt: ["M13 3 4.5 13.5H11l-1 7.5 8.5-10.5H12l1-7.5Z"],
  wifi: ["M5 12.5a10 10 0 0 1 14 0", "M8 15.5a5.5 5.5 0 0 1 8 0", "M12 18.5h.01"],

  // ── About facts / contact ───────────────────────────────────
  "map-pin": [
    "M12 21s6.5-6 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15 12 21 12 21Z",
    "M12 12.5a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z",
  ],
  briefcase: ["M4.5 8h15v11h-15z", "M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2", "M4.5 13h15"],
  award: ["M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z", "M9 13.3 8 21l4-2 4 2-1-7.7"],
  mail: ["M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z", "M3.5 7 12 13l8.5-6"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 7.5V12l3 2"],
};
