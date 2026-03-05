import { tokens, resolve } from "./tokens";

export function generateTokensCss(): string {
  const lines: string[] = [
    "/* Banhatten Design System — CSS Custom Properties */",
    "/* Auto-generated. Do not edit manually. */",
    "",
    ":root {",
  ];

  for (const [key, value] of Object.entries(tokens.brand)) {
    lines.push(`  --bh-brand-${key}: ${value};`);
  }
  lines.push("");

  for (const [key, rawValue] of Object.entries(tokens.alias)) {
    const value = resolve(`{alias.${key}}`);
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

  return lines.join("\n");
}
