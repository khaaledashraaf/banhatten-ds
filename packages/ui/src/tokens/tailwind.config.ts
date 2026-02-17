import type { Config } from "tailwindcss";
import tokens from "./tokens.json";

type TokenValue = string;
type TokenObject = Record<string, TokenValue>;

/**
 * Resolves alias references in the format "{brand.color-name}" to their hex values.
 * Falls back to the original value if no reference pattern is found or lookup fails.
 */
function resolveAliases(
  aliases: TokenObject,
  brand: TokenObject
): TokenObject {
  const resolved: TokenObject = {};

  for (const [key, value] of Object.entries(aliases)) {
    const match = value.match(/^\{brand\.(.+)\}$/);

    if (match) {
      const brandKey = match[1];
      resolved[key] = brand[brandKey] ?? value;
    } else {
      // Direct hex value or unresolved reference
      resolved[key] = value;
    }
  }

  return resolved;
}

/**
 * Categorizes resolved aliases by their semantic prefix.
 * Strips the prefix so "bg-brand" becomes usable as `class="bg-brand"`.
 */
function categorizeAliases(resolved: TokenObject) {
  const backgroundColor: TokenObject = {};
  const textColor: TokenObject = {};
  const borderColor: TokenObject = {};
  const colors: TokenObject = {};

  for (const [key, value] of Object.entries(resolved)) {
    if (key.startsWith("bg-")) {
      backgroundColor[key.slice(3)] = value;
    } else if (key.startsWith("text-")) {
      textColor[key.slice(5)] = value;
    } else if (key.startsWith("border-")) {
      borderColor[key.slice(7)] = value;
    } else if (key.startsWith("icon-")) {
      // Icons use text color utilities
      textColor[key] = value;
    } else {
      colors[key] = value;
    }
  }

  return { backgroundColor, textColor, borderColor, colors };
}

const resolvedAlias = resolveAliases(tokens.alias, tokens.brand);
const categorized = categorizeAliases(resolvedAlias);

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: tokens.brand,
        ...categorized.colors,
      },
      backgroundColor: categorized.backgroundColor,
      textColor: categorized.textColor,
      borderColor: categorized.borderColor,
      boxShadow: tokens.shadow,
      borderRadius: tokens.radius,
      spacing: tokens.spacing,
    },
  },
};

export default config;
