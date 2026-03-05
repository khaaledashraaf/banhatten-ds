# banhatten-ui-joyui

Banhatten Design System theme for Joy UI. Drop it into any Joy UI project for an instant visual refresh — plug and play.

## Install

```bash
npm install banhatten-ui-joyui
```

**Peer dependencies** (you should already have these):

```bash
npm install @mui/joy @emotion/react @emotion/styled
```

## Quick Start

### Option A: Auto Setup (recommended)

```bash
npx banhatten-ui-joyui init
```

Detects your framework (Next.js, Vite, CRA), shows you the changes, and patches your entry file after confirmation.

### Option B: Manual Setup

Wrap your app with the provider:

```tsx
import { BanhattenJoyProvider } from "banhatten-ui-joyui";
import "banhatten-ui-joyui/css/tokens.css";

function App() {
  return (
    <BanhattenJoyProvider>
      {/* your app */}
    </BanhattenJoyProvider>
  );
}
```

That's it. Your Joy UI components now use the Banhatten design system.

## What's Included

### Theme

A complete Joy UI theme built with `extendTheme()`:

- **Color schemes** — primary, neutral, danger, success, warning with full 50-900 scales plus variant tokens (solidBg, softBg, outlinedBorder, etc.)
- **Typography** — Inter font family, refined heading/body/title scale
- **Shadows** — 6-level shadow system
- **Radius** — token-based border radius scale

### Component Overrides

50+ Joy UI components are styled to match the Banhatten spec:

| Category | Components |
|----------|-----------|
| **Inputs** | Button, IconButton, Input, Textarea, Select, Option, Checkbox, Radio, Switch, Slider |
| **Display** | Alert, Badge, Chip, Avatar, Tooltip, Divider, LinearProgress, CircularProgress |
| **Navigation** | Tabs, TabList, Tab, Breadcrumbs, List, ListItem, ListItemButton |
| **Surfaces** | Card, Sheet, Modal, ModalDialog, Drawer, Accordion |
| **Data** | Table |
| **Feedback** | Snackbar, Skeleton |
| **Form** | FormControl, FormLabel, FormHelperText |

### Custom Variants

The theme adds variants that Joy UI doesn't have out of the box:

```tsx
<Button variant="link">Link style</Button>
<Button variant="linkBrand">Brand link</Button>
<Button size="xl">Extra large</Button>
```

TypeScript types are included — no red squiggles.

### CSS Custom Properties

Import the token CSS file for access to design tokens outside Joy UI:

```css
@import "banhatten-ui-joyui/css/tokens.css";

.custom-element {
  background: var(--bh-bg-brand);
  color: var(--bh-text-on-color);
  border-radius: var(--bh-radius-sm);
  padding: var(--bh-spacing-md);
  box-shadow: var(--bh-shadow-sm);
}
```

## Advanced Usage

### Access the raw theme

```tsx
import { banhattenJoyTheme } from "banhatten-ui-joyui";

// Extend or merge with your own customizations
import { extendTheme } from "@mui/joy/styles";

const customTheme = extendTheme({
  ...banhattenJoyTheme,
  colorSchemes: {
    ...banhattenJoyTheme.colorSchemes,
    // your overrides
  },
});
```

### Individual exports

```tsx
import { colorSchemes, fontFamilyConfig, typographyConfig, components, tokens } from "banhatten-ui-joyui";
```

### Skip CssBaseline

```tsx
<BanhattenJoyProvider cssBaseline={false}>
  <App />
</BanhattenJoyProvider>
```

## Compatibility

- Joy UI v5 (beta)
- React 18 and 19
- Next.js (App Router & Pages Router), Vite, CRA

## License

ISC
