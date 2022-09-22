/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.hojero.pl",
      "fundacja-sprzymierzeni.pl",
      "8.allegroimg.com",
      "img.freepik.com",
    ],
  },
};

module.exports = nextConfig;
