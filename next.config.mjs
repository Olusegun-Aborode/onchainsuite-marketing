/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — the site has no server runtime needs, so it ships as
  // plain static assets (ideal for Cloudflare Pages / Workers static assets).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
