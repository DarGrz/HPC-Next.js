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
      "app.zymetric.pl",
      "www.technika-grzewcza-sklep.pl",
    ],
  },
};

module.exports = nextConfig;
