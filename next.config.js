/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external domains if you're using external images
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: { 
        fs: false, 
        path: false 
      }
    };
    return config;
  },
};

module.exports = nextConfig;
