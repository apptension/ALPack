const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@alp/graphql-api', '@alp/api-client', '@alp/core', 'ramda'],
  experimental: {
    serverComponentsExternalPackages: ['typeorm'],
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
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
