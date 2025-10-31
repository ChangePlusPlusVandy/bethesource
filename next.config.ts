import { codeInspectorPlugin } from "code-inspector-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: "turbopack",
      hotKeys: ["altKey"],
    }),
  },
  webpack(config) {
    // Exclude .svg from Next's default file-loader so @svgr/webpack can handle them
    const rules = config.module.rules as Array<{
      test?: RegExp;
      [key: string]: unknown;
    }>;
    const fileLoaderRule = rules.find(
      (rule) => rule && rule.test instanceof RegExp && rule.test.test(".svg"),
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
