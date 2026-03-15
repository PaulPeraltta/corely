/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|jsx|tsx)$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};


module.exports = nextConfig;
