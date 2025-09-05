/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.pexels.com'], // allow remote images
    // no "unoptimized": true — Vercel will optimize images
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
