/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
