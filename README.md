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

## Components (summary)

| Category | Components |
|----------|------------|
| **Core** | Button, Badge, Icon, Avatar, AvatarGroup, AvatarProfile, Alert, Accordion, CloseButton, ButtonGroup, Divider, Tag, Toggle, Tooltip |
| **Forms** | Input, TextArea, Checkbox, CheckboxCard, Radio, RadioCard |
| **Layout / Menus** | Menu, MenuGroup, MenuHeading, MenuItem |
| **Feedback** | ProgressBar, Slider, SliderHandle, FeaturedIcon |
| **Utility** | ColorPalette |

More are tracked in [COMPONENT_TRACKER.md](./COMPONENT_TRACKER.md). All interactive components use proper ARIA and support `forwardRef`; many support `asChild` via Radix Slot.

---

## Design Tokens

Tokens live in `packages/tokens/src/tokens.json` and are exposed to Tailwind:

- **Brand layer** — Color scales (e.g. `neutral-*`, `primary-*`, `success-*`, `danger-*`)
- **Alias layer** — Semantic roles: `bg-primary`, `text-brand`, `border-strong`, `icon-*`, component-specific (e.g. `component-button-brand-bg`)
- **Utility layer** — Spacing and radius scales used across components

Use token-derived Tailwind classes in your app for consistent theming.

---

## Deploying the docs

### Option A: GitHub Pages (free, on GitHub)

1. In your repo: **Settings → Pages → Build and deployment**
2. Under **Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually: **Actions → Deploy docs to GitHub Pages → Run workflow**).

Docs will be available at:

**`https://<username>.github.io/banhatten-ds/`**

Replace `<username>` with your GitHub username (e.g. `khaaledashraaf`).

The workflow (`.github/workflows/deploy-docs.yml`) builds the docs as a static export and deploys the `apps/docs/out` folder. If your default branch is not `main`, edit the `on.push.branches` in that file.

### Option B: Vercel (one-click from GitHub)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New Project** → import `banhatten-ds`.
3. Set **Root Directory** to `apps/docs`. (If workspace dependencies are missing, set root to the repo and **Build Command** to `npm run build --workspace=docs` with **Install Command** `npm ci`.)
4. Deploy. You get a URL like `banhatten-ds.vercel.app` and previews for each push.

---

## Links

- **Docs (local):** Run `npm run dev --workspace=docs` and open the dev server URL.
- **Docs (live):** After deployment, use the GitHub Pages or Vercel URL above.
- **Issues:** [GitHub Issues](https://github.com/khaaledashraaf/banhatten-ds/issues)
- **Repo:** [github.com/khaaledashraaf/banhatten-ds](https://github.com/khaaledashraaf/banhatten-ds)

---

**License:** ISC
