# banhatten-ui-mui

Banhatten Design System theme for Material UI. Drop it into any MUI project for an instant visual refresh — plug and play.

## Install

```bash
npm install banhatten-ui-mui
```

**Peer dependencies** (you should already have these):

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Quick Start

### Option A: Auto Setup (recommended)

```bash
npx banhatten-ui-mui init
```

Detects your framework (Next.js, Vite, CRA), shows you the changes, and patches your entry file after confirmation.

### Option B: Manual Setup

Wrap your app with the provider:

```tsx
import { BanhattenMuiProvider } from "banhatten-ui-mui";
import "banhatten-ui-mui/css/tokens.css";

function App() {
  return (
    <BanhattenMuiProvider>
      {/* your app */}
    </BanhattenMuiProvider>
  );
}
```

That's it. Your MUI components now use the Banhatten design system.

## What's Included

### Theme

A complete MUI theme with:

- **Palette** — primary, secondary, error, warning, success, info mapped from Banhatten tokens
- **Typography** — Inter font family, refined heading/body scale
- **Shadows** — 6-level shadow system replacing MUI's 25-level defaults
- **Shape** — 8px default border radius

### Component Overrides

40+ MUI components are styled to match the Banhatten spec:

| Category | Components |
|----------|-----------|
| **Inputs** | Button, IconButton, TextField, Select, Checkbox, Radio, Switch, Slider |
| **Display** | Alert, Badge, Chip, Avatar, Tooltip, Divider, LinearProgress, CircularProgress |
| **Navigation** | Tabs, Breadcrumbs, Menu, MenuItem, AppBar, Drawer |
| **Surfaces** | Card, Dialog, Paper, Accordion |
| **Data** | Table (Head, Cell, Row) |
| **Layout** | Snackbar, Skeleton, Toolbar, FormControlLabel |

### Custom Variants

The theme adds variants that MUI doesn't have out of the box:

```tsx
<Button variant="link">Link style</Button>
<Button variant="linkBrand">Brand link</Button>
<Button size="extraLarge">Extra large</Button>
<Button size="jumbo">Jumbo</Button>
```

TypeScript types are included — no red squiggles.

### CSS Custom Properties

Import the token CSS file for access to design tokens outside MUI:

```css
@import "banhatten-ui-mui/css/tokens.css";

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
import { banhattenTheme } from "banhatten-ui-mui";

// Extend or override
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme(banhattenTheme, {
  palette: {
    primary: { main: "#your-color" },
  },
});
```

### Individual exports

```tsx
import { palette, typography, shadows, components, tokens } from "banhatten-ui-mui";
```

### Skip CssBaseline

```tsx
<BanhattenMuiProvider cssBaseline={false}>
  <App />
</BanhattenMuiProvider>
```

## Compatibility

- MUI v5 and v6
- React 18 and 19
- Next.js (App Router & Pages Router), Vite, CRA

## License

ISC
