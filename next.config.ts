import { codeInspectorPlugin } from "code-inspector-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: "turbopack",
      hotKeys: ["altKey"],
    }),
  },
};

export default nextConfig;
