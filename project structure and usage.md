# Banhatten Design System — Project Context

> Use this document as context for AI agents working on this codebase.

---

## Project Overview

**Banhatten Design System** is a React component library built as a **Turborepo monorepo**. It provides reusable UI components with a token-based theming system, designed for React 19+ applications.

**Repository:** `github.com/khaaledashraaf/banhatten-ds`

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React (Server Components compatible) | 19+ |
| **Language** | TypeScript (Strict mode) | 5.0+ |
| **Styling** | Tailwind CSS | v4.x |
| **Variant Management** | class-variance-authority (CVA) | 0.7.x |
| **Build System** | Turborepo (npm workspaces) | - |
| **Docs App** | Next.js | 15+ |
| **Icons** | Material Symbols (variable font) | 0.40.x |

---

## Project Structure

```
banhatten-ds/
├── apps/
│   └── docs/                 # Next.js documentation site
│       ├── app/
│       │   ├── components/   # Documentation components
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── packages/
│   ├── tokens/               # Design tokens package
│   │   ├── src/
│   │   │   └── tokens.json   # Token definitions
│   │   ├── package.json
│   │   └── tailwind.config.ts
│   └── ui/                   # React component library
│       ├── src/
│       │   ├── components/   # Button, Badge, Icon, ColorPalette
│       │   ├── lib/
│       │   │   └── utils.ts  # cn() utility
│       │   └── index.ts      # Public exports
│       ├── package.json
│       └── tailwind.config.ts
├── .cursor/
│   ├── commands/             # AI scaffolding commands
│   └── rules/                # AI coding rules
├── COMPONENT_TRACKER.md      # Component implementation status
├── package.json              # Root workspace config
└── package-lock.json
```

---

## Core Dependencies

### `@banhatten/ui` (Component Library)

| Package | Version | Purpose |
|---------|---------|---------|
| `react` / `react-dom` | ^19.0.0 | Peer dependency |
| `class-variance-authority` | ^0.7.1 | Variant-based styling |
| `clsx` | ^2.1.1 | Conditional class names |
| `tailwind-merge` | ^3.4.0 | Merge Tailwind classes |
| `@radix-ui/react-slot` | ^1.2.4 | Polymorphic `asChild` pattern |
| `material-symbols` | ^0.40.2 | Icon font |
| `@banhatten/tokens` | workspace | Internal token package |

### `@banhatten/tokens` (Design Tokens)

- Exports `tokens.json` — raw token data
- Exports `tailwind.config.ts` — Tailwind theme extension
- Used by both `@banhatten/ui` and `apps/docs`

---

## Token Architecture (3-Tier)

Tokens are stored in `packages/tokens/src/tokens.json`:

### 1. Brand Layer — Raw Color Scales

Raw hex values organized by color family:

- `neutral-25` → `neutral-950`
- `primary-50` → `primary-950`
- `success-50` → `success-950`
- `danger-50` → `danger-950`
- `warning-50` → `warning-950`
- `info-50` → `info-950`
- Additional: `sky`, `teal`, `lime`, `indigo`, `purple`, `fuchsia`, `pink`, `rose`, `yellow`

### 2. Alias Layer — Semantic References

Uses `{brand.color-name}` syntax to reference brand tokens:

**Backgrounds:**
- `bg-primary`, `bg-secondary`, `bg-tertiary`, `bg-quarterary`
- `bg-brand`, `bg-brand-hover`, `bg-brand-secondary`
- `bg-success`, `bg-danger`, `bg-warning`, `bg-info`

**Text:**
- `text-primary`, `text-secondary`, `text-tertiary`
- `text-brand`, `text-success`, `text-danger`, `text-warning`, `text-info`

**Borders:**
- `border-default`, `border-secondary`, `border-strong`
- `border-brand`, `border-success`, `border-danger`, `border-warning`, `border-info`

**Icons:**
- `icon-primary`, `icon-secondary`, `icon-tertiary`
- `icon-brand`, `icon-success`, `icon-danger`, `icon-warning`, `icon-info`

**Component-Specific:**
- `component-button-brand-bg`, `component-button-brand-bg-hover`
- `component-button-secondary-bg`, `component-button-secondary-fg`
- `component-button-danger-bg`, `component-button-tertiary-bg-hover`
- `component-input-bg`, `component-toggle-brand-bg`

### 3. Utility Tokens — Spacing & Radius

**Spacing Scale:**
```
none: 0px
xxs: 0.125rem  |  xs: 0.25rem   |  sm: 0.5rem
md: 0.75rem    |  lg: 1rem      |  xl: 1.25rem
2xl: 1.5rem    |  3xl: 1.75rem  |  4xl: 2rem
5xl: 2.5rem    |  6xl: 3rem     |  7xl: 4rem
8xl: 5rem      |  9xl: 6rem     |  10xl: 8rem
11xl: 10rem    |  12xl: 12rem
```

**Border Radius Scale:**
```
none: 0px      |  xxs: 2px      |  xs: 4px
sm: 8px        |  md: 12px      |  lg: 16px
xl: 20px       |  2xl: 28px     |  full: 9999px
```

---

## Component Patterns

All components follow this pattern:

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// 1. Define variants with CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-component-button-brand-bg text-on-color hover:bg-component-button-brand-bg-hover",
        secondary: "bg-component-button-secondary-bg border border-strong text-component-button-secondary-fg",
        // ...more variants
      },
      size: {
        xs: "h-9 px-md gap-0.5 text-sm rounded-sm",
        md: "h-10 px-lg gap-1 text-sm rounded-sm",
        // ...more sizes
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// 2. Props extend HTML attributes + CVA variants
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3. Use forwardRef + Radix Slot for polymorphism
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// 4. Named exports only
export { Button, buttonVariants };
```

---

## Current Component Status

| Status | Components |
|--------|------------|
| **Built** | Button, Badge, Icon, ColorPalette |
| **Pending** | 53+ components (see `COMPONENT_TRACKER.md`) |

**Progress:** 2 / 57 core components tracked

---

## Key Files Reference

| Purpose | Path |
|---------|------|
| Design Tokens (JSON) | `packages/tokens/src/tokens.json` |
| Tailwind Token Config | `packages/tokens/tailwind.config.ts` |
| UI Components | `packages/ui/src/components/*.tsx` |
| Class Merge Utility | `packages/ui/src/lib/utils.ts` |
| Component Exports | `packages/ui/src/index.ts` |
| Component Tracker | `COMPONENT_TRACKER.md` |
| AI Coding Rules | `.cursor/rules/project-rules.mdc` |
| Token Rules | `.cursor/rules/tokens.mdc` |

---

## Usage Notes for AI Agents

1. **Always use CVA** for component variants — import from `class-variance-authority`
2. **Extend HTML attributes** in component props interfaces (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`)
3. **Use `cn()`** from `@banhatten/ui/lib/utils` for class merging — never concatenate classes manually
4. **Reference tokens** via Tailwind classes (e.g., `bg-brand`, `text-primary`, `border-strong`)
5. **Use `forwardRef`** for all components
6. **Named exports only** — no default exports
7. **Token values must use aliases** in the mapped layer — never hardcode hex values
8. **Icons use Material Symbols** via the `material-symbols` npm package
9. **Accessibility is mandatory** — all interactive elements must have proper ARIA attributes
10. **Support `asChild` prop** using `@radix-ui/react-slot` for polymorphic components
