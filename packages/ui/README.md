# @banhatten/ui

Banhatten Design System - React component library with token-based theming.

## Installation

```bash
npm install @banhatten/ui
```

## Requirements

- React 19+ (`react@^19.0.0` and `react-dom@^19.0.0`)
- Tailwind CSS v4

## Setup

### 1. Configure Tailwind CSS

Add the Banhatten tokens to your `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import banhattenConfig from "@banhatten/ui/tokens/tailwind.config";

const config: Config = {
  presets: [banhattenConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@banhatten/ui/dist/**/*.{js,mjs}",
  ],
};

export default config;
```

### 2. Import Components

```tsx
import { Button, Input, Badge } from "@banhatten/ui";

export function MyComponent() {
  return (
    <>
      <Button variant="primary" size="md">Submit</Button>
      <Input label="Email" preset="email" />
      <Badge variant="filled" color="brand">New</Badge>
    </>
  );
}
```

## Exports

- **Components:** `import { Button, Input, ... } from "@banhatten/ui"`
- **Utils:** `import { cn } from "@banhatten/ui/lib/utils"`
- **Tokens JSON:** `import tokens from "@banhatten/ui/tokens"`
- **Tailwind Config:** `import config from "@banhatten/ui/tokens/tailwind.config"`

## Documentation

Visit the [documentation site](https://khaaledashraaf.github.io/banhatten-ds/) for component API reference and examples.
