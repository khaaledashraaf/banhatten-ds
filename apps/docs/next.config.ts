import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  transpilePackages: ["@banhatten/ui", "@banhatten/tokens"],
  ...(isGitHubPages && {
    output: "export",
    basePath: "/banhatten-ds",
    assetPrefix: "/banhatten-ds/",
  }),
};

export default nextConfig;
