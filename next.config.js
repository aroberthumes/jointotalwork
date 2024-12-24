/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/totalwork-landing-page', // Replace with your GitHub repo name
  basePath: '/totalwork-landing-page',   // Replace with your GitHub repo name
  images: {
    unoptimized: true, // Necessary for static export
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
