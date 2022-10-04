/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_ATLAS_URI:
      "mongodb+srv://zaff:zaff%40123@cluster0.bzoh4.mongodb.net/bookit?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
