# Plan: Customize Joy UI for Banhatten Design System

## Context

Engineers use Joy UI to implement Figma designs, but Banhatten's token names (e.g. `bg-brand`, `text-primary`) don't match Joy UI's naming conventions (`--joy-palette-primary-500`). This causes Figma MCP to produce inconsistent code since the design token names in Figma don't map to what's in the codebase. The goal is to rebuild `banhatten-ui` as a wrapper on top of Joy UI, themed with `tokens.json` as the single source of truth, so that:

- Developers install `banhatten-ui` and get pre-themed Joy UI components (plug-and-play)
- Figma MCP can map Figma token names directly to codebase tokens
- The existing component prop API is preserved (no migration needed for consumers)
- The architecture allows future migration from Joy UI to MUI Material if needed

### Decisions Made

- **Base library**: Joy UI (what the team currently uses), designed to be flexible enough to migrate to MUI Material later
- **Prop API**: Preserve the current Banhatten prop API (`variant="primary"`, `asChild`, `leftIcon`, etc.) — wrappers translate internally to Joy UI props
- **Dark mode**: Light mode only for now; Joy UI's CSS variable system makes dark mode straightforward to add later

---

## Phase 1: Theme Foundation

### 1.1 Create token resolver utility
**File:** `packages/ui/src/theme/token-resolver.ts`

- Port the `resolveAliases()` logic from `packages/ui/src/tokens/tailwind.config.ts`
- `resolveAlias(value, brandTokens)` — resolves `"{brand.neutral-900}"` → `"#131826"`
- `buildPalette(prefix, brandTokens)` — builds Joy UI's `{ 50, 100, ..., 900 }` palette object from brand tokens

### 1.2 Create the Banhatten Joy UI theme
**File:** `packages/ui/src/theme/banhatten-theme.ts`

Use `extendTheme()` to create a theme that maps tokens.json to Joy UI's structure:

**Color palettes** (1:1 mapping for Joy's 5 built-in palettes):

| Banhatten brand | Joy UI palette |
|---|---|
| `primary-*` | `palette.primary` |
| `neutral-*` | `palette.neutral` |
| `danger-*` | `palette.danger` |
| `success-*` | `palette.success` |
| `warning-*` | `palette.warning` |

**Register `info` as a custom palette** via module augmentation (Banhatten uses `info` heavily, Joy doesn't have it by default).

**Extra palettes** (`sky`, `teal`, `lime`, `indigo`, `purple`, `fuchsia`, `pink`, `rose`, `yellow`) — exposed as CSS custom properties (`--bh-sky-500`, etc.) and as a JS utility object, but NOT registered as full Joy palettes to avoid bloat.

**Semantic tokens from alias layer** — map to Joy's semantic slots:

| Banhatten alias token | Joy UI semantic slot |
|---|---|
| `bg-brand` | `palette.primary.solidBg` |
| `bg-brand-hover` | `palette.primary.solidHoverBg` |
| `text-brand` | `palette.primary.plainColor` |
| `border-brand` | `palette.primary.outlinedBorder` |
| `bg-primary` | `palette.background.body` |
| `bg-secondary` | `palette.background.level1` |
| `bg-tertiary` | `palette.background.level2` |
| `text-primary` | `palette.text.primary` |
| `text-secondary` | `palette.text.secondary` |
| `text-tertiary` | `palette.text.tertiary` |
| `border-default` | `palette.divider` |
| `border-focused` | `palette.focusVisible` |
| (similar mappings for danger, success, warning, info) | |

**Also inject ALL alias tokens as `--bh-*` CSS variables** so Figma token names match exactly:
- `--bh-bg-primary`, `--bh-text-brand`, `--bh-border-default`, etc.
- This creates a dual system: Joy UI's `--joy-palette-*` variables drive component internals, while `--bh-*` variables provide the exact Figma token names

**Shadows:**

| Banhatten | Joy UI | Value |
|---|---|---|
| `shadow.xs` | `shadow.xs` | `0px 1px 2px 0px rgba(15,17,20,0.06)` |
| `shadow.sm` | `shadow.sm` | `0px 1px 3px 0px rgba(15,17,20,0.10)` |
| `shadow.md` | `shadow.md` | `0px 1.75px 4px -1px rgba(15,17,20,0.10)` |
| `shadow.lg` | `shadow.lg` | `0px 10px 16px ...` |
| `shadow.xl` | `shadow.xl` | `0px 20px 25px ...` |
| `shadow.2xl` | `--bh-shadow-2xl` | Custom CSS variable |
| `shadow.flat` | `--bh-shadow-flat` | Custom CSS variable |
| `shadow.inner` | `--bh-shadow-inner` | Custom CSS variable |

**Radius:**

| Banhatten | Joy UI |
|---|---|
| `radius.xxs` (2px) | `radius.xs` |
| `radius.xs` (4px) | `radius.sm` |
| `radius.sm` (8px) | `radius.md` |
| `radius.md` (12px) | `radius.lg` |
| `radius.lg` (16px) | `radius.xl` |
| `radius.xl`+ | `--bh-radius-*` custom variables |

**Spacing:** Override Joy's spacing function to use rem-based scale. Inject all spacing tokens as `--bh-spacing-*`.

**Component-level overrides** in the theme (`components` key):
- `JoyButton`: border-radius, sizes, font-weight matching Banhatten's current button styles
- `JoyInput`: border-radius, shadow, focus ring matching current input styles
- `JoyCheckbox`, `JoyRadio`, `JoySwitch`, etc.

### 1.3 TypeScript augmentation
**File:** `packages/ui/src/theme/augment.d.ts`

- Register `info` as a custom color palette
- Extend `Theme` interface for any custom properties

---

## Phase 2: Provider & Package Setup

### 2.1 Create BanhattenProvider
**File:** `packages/ui/src/provider/BanhattenProvider.tsx`

```tsx
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { banhattenTheme } from '../theme/banhatten-theme';

export function BanhattenProvider({ children, disableBaseline, defaultMode = 'light' }) {
  return (
    <CssVarsProvider theme={banhattenTheme} defaultMode={defaultMode}>
      {!disableBaseline && <CssBaseline />}
      {children}
    </CssVarsProvider>
  );
}
```

**Consumer usage:**
```tsx
import { BanhattenProvider } from 'banhatten-ui';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <BanhattenProvider>{children}</BanhattenProvider>
      </body>
    </html>
  );
}
```

### 2.2 Update package.json dependencies

**Add:**
- `@mui/joy` (dependency)
- `@emotion/react`, `@emotion/styled` (dependencies)

**Keep:**
- `material-symbols` (Icon component stays custom)
- `@radix-ui/react-slot` (temporarily, for `asChild` compatibility)

**Remove (later, in Phase 4):**
- `class-variance-authority`, `clsx`, `tailwind-merge` — only after all components are migrated
- `lucide-react` — unused after migration

**Peer dependencies:** Keep `react ^19.0.0`, `react-dom ^19.0.0`

### 2.3 Update tsup.config.ts

- Add entry points: `src/provider/BanhattenProvider.tsx`, `src/theme/banhatten-theme.ts`
- Mark `@mui/joy`, `@emotion/*` as external
- Enable `splitting: true` for tree-shaking
- Keep tokens.json copy in onSuccess hook

### 2.4 Update package.json exports

Add:
- `"./provider"` → BanhattenProvider
- `"./theme"` → banhatten-theme

Keep existing exports for backward compatibility (deprecate `./tokens/tailwind.config` later).

---

## Phase 3: Component Wrappers

Each wrapper translates Banhatten's prop API to Joy UI's internally. The existing `ButtonProps`, `InputProps`, etc. interfaces stay the same — zero migration for consumers.

### Variant mapping (all components):
```
variant="primary"    → Joy: variant="solid",    color="primary"
variant="secondary"  → Joy: variant="outlined", color="neutral"
variant="tertiary"   → Joy: variant="plain",    color="neutral"
variant="danger"     → Joy: variant="solid",    color="danger"
variant="link"       → Joy: variant="plain",    color="neutral" + sx underline
variant="link-brand" → Joy: variant="plain",    color="primary" + sx underline
```

### Joy UI wrappers (direct equivalents — wrap Joy, translate props):

| Banhatten Component | Joy UI Base | Key Translations |
|---|---|---|
| Button | `Button` / `IconButton` | variant mapping above, `leftIcon` → `startDecorator`, `asChild` → `component` |
| Input | `Input` | Map size, error state, label wrapping |
| TextArea | `Textarea` | Same as Input |
| Checkbox | `Checkbox` | Direct wrap |
| Radio | `Radio` + `RadioGroup` | Direct wrap |
| Toggle | `Switch` | Map checked/onChange |
| Slider | `Slider` | Map value/onChange, custom handle |
| Tooltip | `Tooltip` | Map trigger/content pattern |
| Badge | `Chip` | Map type/emphasis to variant/color |
| Tag | `Chip` | Similar to Badge |
| Alert | `Alert` | Map type/emphasis |
| Avatar | `Avatar` | Direct wrap |
| AvatarGroup | `AvatarGroup` | Direct wrap |
| Divider | `Divider` | Direct wrap |
| ProgressBar | `LinearProgress` | Map value/variant |
| Breadcrumb | `Breadcrumbs` | Wrap with items |
| Accordion | `Accordion` / `AccordionGroup` | Map trigger/content |
| Menu / MenuItem | `Menu` / `MenuItem` | Wrap, map item types |
| ButtonGroup | `ButtonGroup` | Direct wrap |
| CloseButton | `IconButton` | Wrap with close icon |

### Custom components (no Joy equivalent — use Joy's `styled()` + primitives):

| Component | Approach |
|---|---|
| Icon | Keep as-is (Material Symbols, no Joy equivalent) |
| Sidebar, SidebarMenuItem, SidebarSubmenuItem, SidebarAccountCard | `styled()` + `Sheet` + `ListItemButton` |
| AvatarProfile | `styled()` + `Avatar` composite |
| CheckboxCard, RadioCard | `styled()` + `Sheet` + `Checkbox`/`Radio` |
| FeaturedIcon | `styled()` + `Box` |
| SliderHandle | Internal to Slider wrapper |
| ColorPalette | Keep as-is (dev utility) |

### Example: Button wrapper pattern
```tsx
// packages/ui/src/components/Button.tsx
import JoyButton from '@mui/joy/Button';
import JoyIconButton from '@mui/joy/IconButton';

function mapVariant(variant) {
  switch (variant) {
    case 'primary':   return { variant: 'solid', color: 'primary' };
    case 'secondary': return { variant: 'outlined', color: 'neutral' };
    case 'tertiary':  return { variant: 'plain', color: 'neutral' };
    case 'danger':    return { variant: 'solid', color: 'danger' };
    case 'link':      return { variant: 'plain', color: 'neutral' };
    case 'link-brand': return { variant: 'plain', color: 'primary' };
  }
}

// Props interface stays EXACTLY the same as current ButtonProps
// The wrapper translates internally to Joy UI
```

---

## Phase 4: Cleanup & Build

- Remove CVA variant exports (`buttonVariants`, `alertVariants`, etc.) — or keep as deprecated no-ops
- Remove Tailwind CSS dev dependency from `packages/ui`
- Remove `tailwind-merge`, `clsx` dependencies (keep `cn()` if custom components still use it)
- Mark `packages/ui/tailwind.config.ts` as deprecated
- Update `apps/docs` to use `<BanhattenProvider>` in layout.tsx

---

## Phase 5: Figma MCP Integration

After the rebuild, Figma MCP workflow improves significantly:

### Current problem
Figma designs use Banhatten tokens (`bg-brand`, `text-primary`). Figma MCP reads these but generates code with Tailwind classes that don't match Joy UI. The styling is embedded in opaque CVA variant strings, not prop-driven.

### After rebuild

1. **Token name alignment**: The theme injects `--bh-bg-brand`, `--bh-text-primary`, `--bh-border-default` CSS variables that match Figma token names exactly.

2. **Prop-driven components**: Figma MCP maps a "Primary / Large" button variant directly to `<Button variant="primary" size="lg">` instead of generating Tailwind classes.

3. **Code Connect setup**: Use Figma MCP's `get_code_connect_suggestions` + `send_code_connect_mappings` to create explicit links between Figma nodes and `packages/ui/src/components/*.tsx`.

4. **End-to-end workflow**: Designer creates in Figma with Banhatten tokens → Developer uses Figma MCP `get_design_context` → MCP returns code using `<Button variant="primary">` → Code matches what `banhatten-ui` exports → Consistent implementation.

---

## Implementation Order

| Phase | Scope | Priority |
|---|---|---|
| Phase 1 | Theme foundation (token-resolver, banhatten-theme, augment.d.ts) | Start here |
| Phase 2 | Provider + package setup (BanhattenProvider, deps, build config) | Depends on Phase 1 |
| Phase 3 | Component wrappers: Button → Input → Alert → Checkbox/Radio/Toggle → rest | Depends on Phase 2 |
| Phase 4 | Cleanup old deps, update docs app | After all components migrated |
| Phase 5 | Figma Code Connect mappings | After Phase 4 |

---

## Critical Files

| File | Role |
|---|---|
| `packages/tokens/src/tokens.json` | Source of truth for all design tokens |
| `packages/ui/src/tokens/tailwind.config.ts` | Has `resolveAliases()` logic to port |
| `packages/ui/src/components/button.tsx` | Reference for current prop API pattern |
| `packages/ui/src/index.ts` | Barrel exports to update |
| `packages/ui/tsup.config.ts` | Build config to update |
| `packages/ui/package.json` | Dependencies to change |
| `apps/docs/app/layout.tsx` | Needs BanhattenProvider wrapping |

---

## Verification Checkpoints

1. **After Phase 1-2**: Render a raw Joy UI `<Button>` inside `<BanhattenProvider>` — confirm it uses Banhatten colors
2. **After Phase 3**: Run docs app with all wrapped components — visual regression check against current design
3. **After Phase 5**: Use `get_design_context` on a Figma design — confirm returned code uses `banhatten-ui` component names and props

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Joy UI is still in beta | Pin version; wrapper layer abstracts Joy so switching to MUI Material is feasible |
| Bundle size increase (Emotion runtime) | Mark Joy/Emotion as external peer deps; enable tree-shaking |
| `asChild` pattern loss | Joy's `component` prop serves same purpose; translate in wrapper |
| Custom components need Emotion instead of Tailwind | Use Joy's `styled()` API — familiar pattern for MUI users |
| Figma token matching | `--bh-*` CSS variables mirror Figma token names 1:1 |
