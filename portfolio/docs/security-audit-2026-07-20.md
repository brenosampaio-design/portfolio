# Security audit — 2026-07-20

## Executive summary

The portfolio is a statically rendered Next.js application with no API routes,
Server Actions, authentication, cookies, database, uploads, or user-controlled
HTML. No Critical, High, or Medium vulnerabilities were identified in the
reviewed code. The locked dependency tree reports zero known vulnerabilities,
and all installed packages with registry provenance data passed signature and
attestation verification.

The production baseline is appropriate for this threat model: restrictive
security headers, no public source maps, a reproducible lockfile install,
Dependabot, pinned GitHub Actions, lint/build/audit gates, and no secrets found
in the repository refs scanned locally.

## Critical findings

None.

## High findings

None.

## Medium findings

None.

## Low findings and accepted constraints

### SEC-01 — Static Next.js CSP permits inline scripts

- **Rule ID:** NEXT-CSP-001 / REACT-CSP-001
- **Severity:** Low for the current static, content-only threat model
- **Location:** `next.config.mjs:4-22`; `src/app/layout.jsx:57-60,79-98`
- **Evidence:** Production CSP restricts scripts to the same origin but includes
  `'unsafe-inline'`. The two explicit raw-script sites are a constant theme
  bootstrap and JSON-LD assembled from repository-owned profile data.
- **Impact:** If future work introduces attacker-controlled HTML or script text,
  `'unsafe-inline'` would reduce CSP's ability to contain that separate XSS bug.
- **Fix:** If the site becomes dynamic or accepts untrusted content, migrate to a
  request nonce or build-time script hashes and remove `'unsafe-inline'`.
- **Mitigation:** No untrusted content path exists today; React escaping remains
  intact, the JSON-LD escapes `<`, `unsafe-eval` is disabled in production, and
  `object-src`, `frame-src`, `base-uri`, `form-action`, and `frame-ancestors` are
  restricted.
- **False-positive notes:** A nonce would force dynamic rendering and remove the
  current static-CDN behavior. This is documented as an accepted constraint,
  not an exploitable vulnerability by itself.

### SEC-02 — Brand fonts are delivered by Google Fonts

- **Rule ID:** REACT-3P-001 / REACT-SRI-001
- **Severity:** Low
- **Location:** `src/app/layout.jsx:63-75`; `next.config.mjs:11-14`
- **Evidence:** CSS and font files are loaded from allowlisted Google Fonts
  origins. No third-party JavaScript is loaded.
- **Impact:** Availability and limited request-metadata exposure depend on a
  third party. SRI is not practical for the dynamic Google Fonts CSS response.
- **Fix:** Self-host the exact font files if the project later needs a stricter
  privacy or supply-chain posture.
- **Mitigation:** CSP limits the third party to stylesheet/font contexts and
  `Referrer-Policy: strict-origin-when-cross-origin` limits referrer detail.
- **False-positive notes:** This does not provide Google with script execution
  in the portfolio origin.

## Controls verified

- `npm audit --audit-level=high`: 0 vulnerabilities.
- `npm audit signatures`: 347 packages with verified registry signatures and
  75 packages with verified attestations.
- `npm ci`: reproducible install from `package-lock.json`.
- Local secret-pattern scan across reachable git refs: no private keys or
  recognized GitHub/AWS token formats found.
- High-signal code scan: no attacker-controlled raw HTML, eval/new Function,
  string timers, postMessage handlers, open redirects, credentialed cross-origin
  fetches, API routes, Server Actions, uploads, filesystem access, SQL, or shell
  execution paths.
- Runtime headers verified: CSP, `nosniff`, `DENY` framing, strict referrer
  policy, and a restrictive Permissions Policy.
- CI runs lint, production build, full dependency audit, and npm provenance
  verification; Dependabot covers npm and GitHub Actions weekly.

## Residual risk

The main residual risk is supply-chain or hosting-account compromise rather
than an application data breach: this is a public portfolio with no sensitive
server-side data. GitHub and Vercel accounts should keep MFA enabled and use
least-privilege tokens; those account settings are outside this repository
review.
