import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/init.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@mui/joy",
    "@mui/joy/styles",
    "@mui/joy/CssBaseline",
    "@emotion/react",
    "@emotion/styled",
  ],
  outDir: "dist",
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  onSuccess: async () => {
    const { writeFileSync, mkdirSync } = await import("fs");
    const { join } = await import("path");

    const cssDir = join(process.cwd(), "dist", "css");
    mkdirSync(cssDir, { recursive: true });

    const tokens = {
      brand: {
        "neutral-950": "#000000", "neutral-900": "#131826", "neutral-800": "#1f242e",
        "neutral-700": "#3a424d", "neutral-600": "#4e5663", "neutral-500": "#686e7d",
        "neutral-400": "#9fa5b2", "neutral-300": "#d1d5de", "neutral-200": "#e9ebf0",
        "neutral-100": "#f1f3f7", "neutral-50": "#f9fafc", "neutral-25": "#ffffff",
        "primary-950": "#172554", "primary-900": "#1e3a8a", "primary-800": "#1e40af",
        "primary-700": "#1d4ed8", "primary-600": "#2563eb", "primary-500": "#3b82f6",
        "primary-400": "#73affa", "primary-300": "#93c5fd", "primary-200": "#bfdbfe",
        "primary-100": "#dbeafe", "primary-50": "#eff6ff",
        "success-600": "#059669", "success-800": "#065f46",
        "success-50": "#ecfdf5", "success-100": "#d1fae5", "success-300": "#6ee7b7",
        "warning-600": "#c89704", "warning-800": "#86660e",
        "warning-50": "#fefce8", "warning-100": "#fef3c7", "warning-300": "#fde047",
        "danger-600": "#dc2626", "danger-700": "#b91c1c", "danger-800": "#991b1b",
        "danger-50": "#fef2f2", "danger-100": "#fee2e2", "danger-300": "#fca5a5",
        "sky-600": "#0284c7", "sky-800": "#075985",
      },
      alias: {
        "bg-primary": "#ffffff", "bg-primary-inverse": "#131826",
        "bg-secondary": "#f9fafc", "bg-tertiary": "#f1f3f7", "bg-quarterary": "#e9ebf0",
        "bg-inactive": "#f1f3f7", "bg-inactive-subtle": "#f9fafc",
        "bg-always-dark": "#191b21",
        "bg-brand": "#2563eb", "bg-brand-hover": "#1d4ed8",
        "bg-brand-secondary": "#dbeafe", "bg-brand-tertiary": "#eff6ff",
        "bg-brand-tertiary-hover": "#dbeafe", "bg-brand-strong": "#1e40af",
        "bg-success": "#059669", "bg-success-secondary": "#d1fae5", "bg-success-tertiary": "#ecfdf5",
        "bg-danger": "#dc2626", "bg-danger-hover": "#b91c1c",
        "bg-danger-secondary": "#fee2e2", "bg-danger-tertiary": "#fef2f2", "bg-danger-strong": "#991b1b",
        "bg-warning": "#c89704", "bg-warning-secondary": "#fef3c7", "bg-warning-tertiary": "#fefce8",
        "bg-info": "#0284c7", "bg-info-tertiary": "#eff6ff",
        "border-default": "#e9ebf0", "border-strong": "#d1d5de",
        "border-inactive": "#d1d5de", "border-focused": "#d3e0fb",
        "border-focused-danger": "#fac7c7", "border-brand": "#2563eb",
        "border-brand-secondary": "#93c5fd",
        "border-danger": "#dc2626", "border-danger-secondary": "#fca5a5",
        "border-success": "#059669", "border-success-secondary": "#6ee7b7",
        "border-warning": "#c89704", "border-warning-secondary": "#fde047",
        "text-primary": "#1f242e", "text-primary-inverse": "#ffffff",
        "text-secondary": "#4e5663", "text-tertiary": "#686e7d",
        "text-inactive": "#686e7d", "text-placeholder": "#686e7d",
        "text-on-color": "#ffffff", "text-brand": "#2563eb", "text-brand-strong": "#1e40af",
        "text-success": "#059669", "text-success-strong": "#065f46",
        "text-danger": "#dc2626", "text-danger-strong": "#991b1b",
        "text-error": "#dc2626", "text-warning": "#c89704", "text-warning-strong": "#86660e",
        "text-info": "#075985",
        "icon-primary": "#1f242e", "icon-primary-inverse": "#ffffff",
        "icon-secondary": "#4e5663", "icon-tertiary": "#686e7d",
        "icon-inactive": "#9fa5b2", "icon-inactive-subtle": "#d1d5de",
        "icon-brand": "#2563eb",
        "component-button-brand-bg": "#2563eb", "component-button-brand-bg-hover": "#1d4ed8",
        "component-button-secondary-bg": "#ffffff", "component-button-secondary-bg-hover": "#f1f3f7",
        "component-button-secondary-fg": "#1f242e",
        "component-button-danger-bg": "#dc2626", "component-button-danger-bg-hover": "#b91c1c",
        "component-button-tertiary-bg-hover": "#f1f3f7",
        "component-button-tertiary-color-fg": "#1f242e",
        "component-button-link-color-fg": "#1d4ed8", "component-button-link-color-fg-hover": "#1e40af",
        "component-input-bg": "#ffffff", "component-input-bg-hover": "#f9fafc",
        "component-toggle-brand-bg": "#2563eb", "component-toggle-brand-bg-hover": "#1d4ed8",
      },
      shadow: {
        xs: "0px 1px 2px 0px rgba(15, 17, 20, 0.06)",
        sm: "0px 1px 3px 0px rgba(15, 17, 20, 0.10)",
        md: "0px 1.75px 4px -1px rgba(15, 17, 20, 0.10)",
        lg: "0px 10px 16px -3px rgba(15, 17, 20, 0.06), 0px 4px 6px -2px rgba(15, 17, 20, 0.04)",
        xl: "0px 20px 25px -5px rgba(15, 17, 20, 0.08), 0px 10px 10px -5px rgba(15, 17, 20, 0.06)",
        "2xl": "0px 25px 50px -12px rgba(15, 17, 20, 0.20)",
      },
      radius: {
        none: "0px", xxs: "2px", xs: "4px", sm: "8px", md: "12px",
        lg: "16px", xl: "20px", "2xl": "28px", full: "9999px",
      },
      spacing: {
        none: "0px", xxs: "0.125rem", xs: "0.25rem", sm: "0.5rem", md: "0.75rem",
        lg: "1rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "1.75rem", "4xl": "2rem",
      },
    };

    const lines: string[] = [
      "/* Banhatten Design System - CSS Custom Properties */",
      "/* Auto-generated at build time. Do not edit. */",
      "",
      ":root {",
    ];

    for (const [key, value] of Object.entries(tokens.brand)) {
      lines.push(`  --bh-brand-${key}: ${value};`);
    }
    lines.push("");
    for (const [key, value] of Object.entries(tokens.alias)) {
      lines.push(`  --bh-${key}: ${value};`);
    }
    lines.push("");
    for (const [key, value] of Object.entries(tokens.shadow)) {
      lines.push(`  --bh-shadow-${key}: ${value};`);
    }
    lines.push("");
    for (const [key, value] of Object.entries(tokens.radius)) {
      lines.push(`  --bh-radius-${key}: ${value};`);
    }
    lines.push("");
    for (const [key, value] of Object.entries(tokens.spacing)) {
      lines.push(`  --bh-spacing-${key}: ${value};`);
    }
    lines.push("}");
    lines.push("");

    writeFileSync(join(cssDir, "tokens.css"), lines.join("\n"));
  },
});
