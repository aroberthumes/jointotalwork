const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/jointotalwork' : '',
  assetPrefix: isProduction ? '/jointotalwork/' : '',
};
