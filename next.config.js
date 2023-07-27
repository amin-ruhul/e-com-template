/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6valley-aster.6amtech.com",
      },
    ],
  },
};

module.exports = nextConfig;
