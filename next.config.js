/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.REACT_APP_BASE_URL,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
