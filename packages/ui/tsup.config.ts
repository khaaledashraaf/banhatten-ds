import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/lib/utils.ts", "src/tokens/tailwind.config.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  outDir: "dist",
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  onSuccess: async () => {
    // Copy tokens.json to dist
    const { copyFileSync, mkdirSync } = await import("fs");
    const { join } = await import("path");
    mkdirSync(join(process.cwd(), "dist", "tokens"), { recursive: true });
    copyFileSync(
      join(process.cwd(), "src", "tokens", "tokens.json"),
      join(process.cwd(), "dist", "tokens", "tokens.json")
    );
  },
});
