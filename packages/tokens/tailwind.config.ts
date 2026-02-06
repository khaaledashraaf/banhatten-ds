import type { Config } from "tailwindcss";
import tokens from "./src/tokens.json";

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

const resolvedAlias = resolveAliases(tokens.alias, tokens.brand);

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: tokens.brand,
        alias: resolvedAlias,
      },
    },
  },
};

export default config;
