# Banhatten Design System

A **React 19+** component library with token-based theming, built as an npm workspaces monorepo. Built for consistency, accessibility, and theming via design tokens.

---

## Tech Stack

| Layer | Stack |
|-------|--------|
| **Framework** | React 19+ (Server Components compatible) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4 + CVA |
| **Icons** | Material Symbols (variable font) |
| **Docs** | Next.js 15 |

---

## Repository Structure

```
banhatten-ds/
├── apps/docs          → Next.js documentation site
├── packages/ui         → React component library (@banhatten/ui)
├── packages/tokens     → Design tokens + Tailwind theme (@banhatten/tokens)
└── package.json       → Root workspace
```

---

## Quick Start

**Install dependencies (from repo root):**

```bash
npm install
```

**Run the docs app:**

```bash
npm run dev --workspace=docs
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Using the Packages

### Design tokens (`@banhatten/tokens`)

- **Entry:** `tokens.json` and `tailwind.config.ts`
- Use in your app’s Tailwind config: extend theme from `@banhatten/tokens/tailwind.config`

### UI components (`@banhatten/ui`)

- **Entry:** `@banhatten/ui` (and `@banhatten/ui/lib/utils` for `cn()`)
- Peer deps: `react@^19`, `react-dom@^19`
- In a consuming app (that already uses Tailwind v4 and the token theme):

```tsx
import { Button, Input, Badge } from "@banhatten/ui";

export function Example() {
  return (
    <>
      <Button variant="primary" size="md">Submit</Button>
      <Input label="Email" preset="email" />
      <Badge variant="filled" color="brand">New</Badge>
    </>
  );
}
```

---

## Components

| Category | Component | Status |
|----------|-----------|--------|
| **Core** | Avatar | ✅ Built |
| **Core** | Avatar Group | ✅ Built |
| **Core** | Avatar Profile | ✅ Built |
| **Core** | Alert | ✅ Built |
| **Core** | Accordion | ✅ Built |
| **Core** | Badge | ✅ Built |
| **Core** | Button | ✅ Built |
| **Core** | Icon Button (via Button) | ✅ Built |
| **Core** | Close Button | ✅ Built |
| **Core** | Social Buttons | — Planned |
| **Core** | Button Group | ✅ Built |
| **Core** | Button Group Item | ✅ Built |
| **Core** | Checkbox / CheckboxCard | ✅ Built |
| **Core** | Divider | ✅ Built |
| **Core** | Menu | ✅ Built |
| **Core** | Menu Item | ✅ Built |
| **Core** | Menu Heading | ✅ Built |
| **Core** | Menu Group | ✅ Built |
| **Core** | Dropdown Input | — Planned |
| **Core** | Text Input | ✅ Built |
| **Core** | Text Area | ✅ Built |
| **Core** | Pagination | — Planned |
| **Core** | Progress Bar | ✅ Built |
| **Core** | Radio / RadioCard | ✅ Built |
| **Core** | Slider | ✅ Built |
| **Core** | Tag / Chip | ✅ Built |
| **Core** | Tooltip | ✅ Built |
| **Core** | Toggle | ✅ Built |
| **Product** | Top Bar Navigation | — Planned |
| **Product** | Sidebar Navigation | ✅ Built |
| **Product** | Tabs | — Planned |
| **Product** | Modal | — Planned |
| **Product** | Content Divider | — Planned |
| **Product** | Tables | — Planned |
| **Product** | Banner | — Planned |
| **Product** | Breadcrumbs | — Planned |
| **Product** | Chat | — Planned |
| **Product** | Section Header | — Planned |
| **Product** | Notification | — Planned |
| **Product** | Page Header | — Planned |
| **Product** | Cards | — Planned |
| **Product** | Credit Card Form | — Planned |
| **Product** | Feed | — Planned |
| **Product** | File Upload | — Planned |
| **Product** | Toolbar | — Planned |
| **Product** | Attributes | — Planned |
| **Product** | Steps | — Planned |
| **Product** | Chart | — Planned |
| **Product** | Slideout | — Planned |
| **Product** | Command Bar | — Planned |
| **Product** | Date Picker | — Planned |
| **Product** | Player | — Planned |
| **Utility** | Featured Icon | ✅ Built |
| **Utility** | Slider Handle | ✅ Built |
| **Utility** | File Icon | — Planned |
| **Utility** | Social Icon | — Planned |

Full specs and checklist: [COMPONENT_TRACKER.md](./COMPONENT_TRACKER.md). Built components use proper ARIA, `forwardRef`, and many support `asChild` via Radix Slot.

---

## Design Tokens

Tokens live in `packages/tokens/src/tokens.json` and are exposed to Tailwind:

- **Brand layer** — Color scales (e.g. `neutral-*`, `primary-*`, `success-*`, `danger-*`)
- **Alias layer** — Semantic roles: `bg-primary`, `text-brand`, `border-strong`, `icon-*`, component-specific (e.g. `component-button-brand-bg`)
- **Utility layer** — Spacing and radius scales used across components

Use token-derived Tailwind classes in your app for consistent theming.

---

## Links

- **Docs (local):** Run `npm run dev --workspace=docs` and open the dev server URL.
- **Docs (live):** [khaaledashraaf.github.io/banhatten-ds](https://khaaledashraaf.github.io/banhatten-ds/)
- **Issues:** [GitHub Issues](https://github.com/khaaledashraaf/banhatten-ds/issues)
- **Repo:** [github.com/khaaledashraaf/banhatten-ds](https://github.com/khaaledashraaf/banhatten-ds)

---

**License:** ISC
