/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel
  images: {
    domains: ['images.unsplash.com', 'www.shell-tube.com', 't4.ftcdn.net', 'b2694411.smushcdn.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
