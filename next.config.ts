import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      '*.yml': {
        loaders: ['yaml-loader'],
        as: '*.js'
      },
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: '*.js'
      },
    },
  },
  webpack: (config, {isServer}) => {
    config.module.rules.push({
      test: /\.yml$/,
      use: 'yaml-loader'
    });
    config.module.rules.push({
      test: /\.yaml$/,
      use: 'yaml-loader'
    })

    return config;
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '1024mb'
    }
  }
};

export default nextConfig;
