/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/',
  basePath: '',
  images: {
    unoptimized: true,
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