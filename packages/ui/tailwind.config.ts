import type { Config } from "tailwindcss";
import sharedConfig from "./src/tokens/tailwind.config";

const config: Config = {
  presets: [sharedConfig],
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
