# scaffold-component

# Scaffold Component

Description: Generates a React component from a Figma link using our architectural standards.

## Action Steps
1.  **Read Tokens**: Read `packages/tokens/src/tokens.json` before writing any code. Every color, spacing, border-radius, and shadow value used in the component **must** come from this file. No arbitrary or Tailwind-default values.
2.  **Analyze**: Read the provided Figma Component Link.
3.  **Map**:
    * Translate Figma Variants -> `cva` intent keys (e.g., `Type=Primary` -> `variant: "default"`).
    * Identify "Slot" usage (for polymorphic rendering) if applicable.
    * Match every Figma color, spacing, radius, and shadow value to its corresponding token.
4.  **Code Generation**:
    * Create `packages/ui/src/components/[name].tsx`.
    * **Imports**: `import { cva, type VariantProps } from "class-variance-authority";`
    * **Structure**: Export a named functional component with `forwardRef`.
    * **Icons**: Use the `Icon` component from `@banhatten/ui` (Material Symbols) if icons are present.
5.  **Verification**:
    * Ensure all colors use alias token classes, NEVER hex codes or raw brand tokens. Alias prefixes map directly to Tailwind utilities:
      - `bg-*` aliases -> `bg-{name}` (e.g., alias `bg-brand` -> class `bg-brand`)
      - `text-*` aliases -> `text-{name}` (e.g., alias `text-primary` -> class `text-primary`)
      - `border-*` aliases -> `border-{name}` (e.g., alias `border-default` -> class `border-default`)
      - `icon-*` aliases -> `text-icon-{name}` (e.g., alias `icon-brand` -> class `text-icon-brand`)
      - `component-*` aliases -> use via the `colors` scale (e.g., `bg-component-button-brand-bg`)
    * Ensure spacing uses token scale only: `p-sm`, `gap-md`, `px-lg`, etc. (from `spacing` in tokens.json).
    * Ensure border-radius uses token scale only: `rounded-sm`, `rounded-md`, `rounded-full`, etc. (from `radius` in tokens.json).
    * Ensure shadows use token scale only: `shadow-xs`, `shadow-sm`, `shadow-flat`, etc. (from `shadow` in tokens.json).
    * Ensure component is exported from `packages/ui/src/index.ts`.
    * Ensure accessibility attributes are considered.


This command will be available in chat with /scaffold-component
