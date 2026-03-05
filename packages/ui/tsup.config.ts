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
    const { copyFileSync, mkdirSync, readdirSync } = await import("fs");
    const { join } = await import("path");

    mkdirSync(join(process.cwd(), "dist", "tokens"), { recursive: true });
    copyFileSync(
      join(process.cwd(), "src", "tokens", "tokens.json"),
      join(process.cwd(), "dist", "tokens", "tokens.json")
    );

    const specsDir = join(process.cwd(), "src", "specs");
    const distSpecs = join(process.cwd(), "dist", "specs");
    mkdirSync(distSpecs, { recursive: true });
    for (const file of readdirSync(specsDir)) {
      if (file.endsWith(".json")) {
        copyFileSync(join(specsDir, file), join(distSpecs, file));
      }
    }

    copyFileSync(
      join(process.cwd(), "CURSOR_RULE.md"),
      join(process.cwd(), "dist", "CURSOR_RULE.md")
    );
  },
});
