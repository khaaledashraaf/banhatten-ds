# Banhatten Design System — Library Customization Rule

Use this rule to customize any UI library to match the Banhatten Design System.
Copy this file into your project's `.cursor/rules/` directory.

---

## Source of Truth

After running `npm install banhatten-ui`, two resources are available:

1. **Design Tokens** — `node_modules/banhatten-ui/dist/tokens/tokens.json`
2. **Component Specs** — `node_modules/banhatten-ui/dist/specs/<component>.json`

Always read these files before making styling decisions. They are the single source of truth.

---

## Token Resolution

`tokens.json` has four top-level sections:

| Section     | Purpose                                     | Example                                |
|-------------|---------------------------------------------|----------------------------------------|
| `brand`     | Raw color palette (hex values)              | `"primary-600": "#2563eb"`             |
| `alias`     | Semantic tokens referencing `brand`         | `"bg-brand": "{brand.primary-600}"`    |
| `shadow`    | Box-shadow CSS strings                      | `"md": "0px 1.75px 4px -1px ..."`     |
| `radius`    | Border-radius pixel values                  | `"sm": "8px"`                          |
| `spacing`   | Spacing values (rem or px)                  | `"lg": "1rem"`                         |

**Resolution chain:** Component specs reference `{alias.*}`, `{shadow.*}`, `{radius.*}`, and `{spacing.*}`. Alias tokens reference `{brand.*}` which holds the final hex value.

Example:
```
spec: "{alias.component-button-brand-bg}" → tokens alias: "{brand.primary-600}" → tokens brand: "#2563eb"
```

---

## Component Spec Schema

Each `<component>.json` in `specs/` follows this structure:

- **`base`** — Default CSS properties applied to every instance.
- **`variants`** — Named style presets (e.g. `primary`, `secondary`, `danger`). Each variant specifies `bg`, `text`, `border`, `hover`, `active` etc. using token references.
- **`sizes`** — Named size presets (e.g. `xs`, `md`, `lg`). Each size specifies `height`, `paddingX`, `paddingY`, `fontSize`, `borderRadius`, `gap` using token references or raw CSS values.
- **`states`** — `disabled`, `focus`, `error`, and other state styles.
- **`compoundVariants`** — Conditional overrides when multiple props match simultaneously.
- **`props`** — Component API: prop name, type, allowed values, and defaults.
- **`slots`** — Named sub-elements within the component (e.g. `leftIcon`, `rightIcon`).
- **`subComponents`** — Definitions for child components (e.g. `MenuItem` inside `Menu`).
- **`defaults`** — Default variant and size.
- **`accessibility`** — Required ARIA attributes and notes.

---

## Customization Process

### Step 1: Global Theme

Read `tokens.json` and configure your library's global theme:

1. **Colors** — Map every `alias.*` token to your library's color system. Resolve each alias through `brand` to get the final hex value. Create semantic color keys that match the alias names.
2. **Shadows** — Map `shadow.*` values directly as CSS box-shadow strings.
3. **Border Radius** — Map `radius.*` values to your library's radius/shape tokens.
4. **Spacing** — Map `spacing.*` values to your library's spacing scale.

### Step 2: Component Overrides

For each component your project uses:

1. Read the matching spec from `node_modules/banhatten-ui/dist/specs/<component>.json`.
2. Map **variants** to the library's variant/color system. Match backgrounds, text colors, borders, and hover/active/focus states exactly.
3. Map **sizes** to the library's size system. Match height, padding, font size, border radius, and gap exactly.
4. Map **states** (disabled opacity, focus rings) to the library's state styling.
5. Map **compound variants** as conditional overrides.
6. Ensure the component exposes the same **props** as the spec (or provide wrappers that do).

### Step 3: Missing Components

For components in the specs that do not exist in your library:

1. Create a custom component using your library's primitives and styling utilities.
2. Follow the spec exactly for all variants, sizes, states, and props.
3. Resolve all token references to final CSS values through `tokens.json`.
4. Implement the accessibility requirements from the spec's `accessibility` section.

---

## Available Component Specs

accordion, alert, avatar, avatar-group, avatar-profile, badge, breadcrumb, 
button, button-group, checkbox, checkbox-card, close-button, divider, 
dropdown, dropdown-input, featured-icon, icon, input, menu, progress-bar, 
radio, radio-card, sidebar, slider, tag, textarea, toggle, tooltip

---

## Rules

- Never hardcode hex colors — always resolve through `tokens.json` so themes stay updatable.
- Preserve the variant/size naming from specs (e.g. `primary`, `md`) in your theme configuration.
- When a spec uses `{alias.*}`, resolve it to the final value through `brand` only at the point of CSS output — keep semantic names in theme config.
- Match pixel-perfect dimensions: if the spec says `height: "40px"` and `paddingX: "{spacing.lg}"` (1rem), use those exact values.
- Focus rings must use `{alias.border-brand}` (resolved: `#2563eb`) with a 2px offset unless the spec says otherwise.
- Icon sizing follows the spec's `slots.*.iconSizeByButtonSize` mappings when present.
