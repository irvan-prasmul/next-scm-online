/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
