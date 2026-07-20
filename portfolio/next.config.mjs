/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

// This is a public, statically rendered portfolio. Next.js emits inline
// bootstrap scripts for static App Router pages, so the framework's documented
// non-nonce policy is used here to preserve CDN caching without unsafe-eval in
// production. All executable scripts remain restricted to this origin.
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data:;
  font-src 'self' https://fonts.gstatic.com data:;
  connect-src 'self'${isDev ? ' ws: wss:' : ''};
  media-src 'self';
  object-src 'none';
  frame-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  ${isDev ? '' : 'upgrade-insecure-requests;'}
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  turbopack: {
    // Keep module resolution inside this monorepo package even when another
    // lockfile exists higher in the developer's home directory.
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  // Locally: this project lives on an exFAT-formatted external drive.
  // distDir can't point outside the project root — Next.js always resolves it
  // via path.join(projectDir, distDir), so a leading "/" here was silently
  // discarded, and exFAT doesn't support symlinks either, so there's no way
  // to redirect the cache onto the native filesystem. It stays inside the
  // project as `tmp/` (gitignored) — the best available option on this drive.
  // On Vercel: use the default .next output dir.
  ...(process.env.VERCEL ? {} : { distDir: 'tmp/portfolio-next-cache' }),
};

export default nextConfig;
