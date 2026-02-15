import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";
const basePath = isGitHubPages ? "/banhatten-ds" : "";

const nextConfig: NextConfig = {
  transpilePackages: ["@banhatten/ui", "@banhatten/tokens"],
  devIndicators: false,
  ...(isGitHubPages && {
    output: "export",
    basePath,
    assetPrefix: `${basePath}/`,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
