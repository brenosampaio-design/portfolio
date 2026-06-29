/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Locally: redirect build cache off NTFS to avoid Turbopack path panics.
  // On Vercel: use default .next so the output is found correctly.
  ...(process.env.VERCEL ? {} : { distDir: '/tmp/portfolio-next-cache' }),
};

export default nextConfig;
