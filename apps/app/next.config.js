const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ab/schema', '@ab/api-client', '@ab/core'],
  experimental: {
    serverComponentsExternalPackages: ['typeorm'],
  },
  webpack: (config, { isServer }) => {
    // fix for: Can't resolve 'pg-native' issue
    // https://github.com/vercel/next.js/issues/48223
    config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^pg-native|sqlite3$/ }));

    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
};

module.exports = nextConfig;
