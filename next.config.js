/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  },
};

module.exports = nextConfig;
