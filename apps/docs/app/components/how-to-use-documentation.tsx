import { Section } from "./section";

export function HowToUseDocumentation() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          This guide covers installing the packages, configuring Tailwind with design
          tokens, and using the component library in your app.
        </p>
      </div>

      <Section
        title="Installation"
        description="Install from npm. React 19 and Tailwind v4 are required."
      >
        <div className="space-y-4">
          <p className="text-secondary text-sm">
            Install the design system and the Material Symbols font (for icon
            components):
          </p>
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`npm install banhatten-ui material-symbols
# or
yarn add banhatten-ui material-symbols
# or
pnpm add banhatten-ui material-symbols`}
          </pre>
          <p className="text-tertiary text-xs">
            <code>banhatten-ui</code> has peer dependencies on <code>react</code> and{" "}
            <code>react-dom</code> ^19.0.0. It includes design tokens and a Tailwind
            preset. Icons use the Material Symbols variable font — include its CSS in
            your app (see below).
          </p>
          <p className="text-secondary text-sm">
            In an npm workspaces monorepo (e.g. contributing to this repo), add
            workspace dependencies:
          </p>
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`// In your app's package.json
{
  "dependencies": {
    "banhatten-ui": "*",
    "material-symbols": "^0.40.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}`}
          </pre>
        </div>
      </Section>

      <Section
        title="Tailwind configuration"
        description="Use the preset from banhatten-ui so your app gets the same colors, spacing, radius, and shadows as the components."
      >
        <div className="space-y-4">
          <p className="text-secondary text-sm">
            In your app&apos;s Tailwind config, preset the tokens and include the UI
            package in <code>content</code> so component classes are generated:
          </p>
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`// tailwind.config.ts
import type { Config } from "tailwindcss";
import banhattenConfig from "banhatten-ui/tokens/tailwind.config";

const config: Config = {
  presets: [banhattenConfig],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/banhatten-ui/dist/**/*.{js,mjs}",
  ],
};

export default config;`}
          </pre>
          <p className="text-secondary text-sm">
            The preset adds theme extensions for <code>colors</code> (brand scales and
            semantic aliases like <code>bg-primary</code>, <code>text-secondary</code>
            ), <code>backgroundColor</code>, <code>textColor</code>,{" "}
            <code>borderColor</code>, <code>boxShadow</code>, <code>borderRadius</code>
            , and <code>spacing</code>. Use these utility classes in your app for
            consistency.
          </p>
        </div>
      </Section>

      <Section
        title="Material Symbols (icons)"
        description="Components that show icons expect the Material Symbols variable font to be loaded."
      >
        <div className="space-y-4">
          <p className="text-secondary text-sm">
            In your root layout or a global CSS file, import the font:
          </p>
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`// app/layout.tsx or styles/globals.css
import "material-symbols/outlined.css";
// or for variable font with multiple weights:
// import "material-symbols/variable.css";`}
          </pre>
          <p className="text-tertiary text-xs">
            Icon props on components (e.g. <code>leftIcon=&quot;chevron_right&quot;</code>
            ) use Material Symbols icon names. See the Icons section in the docs for the
            full set.
          </p>
        </div>
      </Section>

      <Section
        title="Using components"
        description="Import named components and optional variants from banhatten-ui."
      >
        <div className="space-y-4">
          <p className="text-secondary text-sm">
            All exports are named. Use the components directly or compose with the
            exported CVA variants (e.g. <code>buttonVariants</code>) for custom UIs:
          </p>
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`import {
  Button,
  buttonVariants,
  Input,
  Alert,
  Sidebar,
  SidebarMenuItem,
  SidebarSubmenuItem,
} from "banhatten-ui";

// Simple usage
<Button variant="primary" size="md">Save</Button>
<Input label="Email" placeholder="you@example.com" />

// With variants for custom elements
import { cn } from "banhatten-ui/lib/utils";
<a href="/dashboard" className={cn(buttonVariants({ variant: "link" }))}>
  Go to dashboard
</a>`}
          </pre>
          <p className="text-secondary text-sm">
            Components accept standard HTML attributes (e.g. <code>className</code>,{" "}
            <code>aria-*</code>) and extend the right element types (e.g.{" "}
            <code>Button</code> extends <code>React.ButtonHTMLAttributes</code>). Use{" "}
            <code>forwardRef</code> where you need to pass refs.
          </p>
        </div>
      </Section>

      <Section
        title="Utility: cn()"
        description="Merge Tailwind classes with clsx and tailwind-merge. Re-exported from the UI package for consistency."
      >
        <div className="space-y-4">
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`import { cn } from "banhatten-ui/lib/utils";

<div className={cn("base classes", condition && "conditional", className)} />`}
          </pre>
        </div>
      </Section>

      <Section
        title="Using tokens only"
        description="If you only need design tokens (no components), use the Tailwind preset and optionally import the raw tokens JSON from banhatten-ui."
      >
        <div className="space-y-4">
          <pre className="border-default bg-secondary-subtle overflow-x-auto rounded-md border p-4 font-mono text-sm">
{`import tokens from "banhatten-ui/tokens";
// tokens.brand, tokens.alias, tokens.spacing, tokens.radius, tokens.shadow, etc.`}
          </pre>
        </div>
      </Section>

      <Section
        title="Quick reference"
        description="Summary of banhatten-ui (npm) exports and entry points."
      >
        <ul className="text-secondary list-disc space-y-2 pl-6 text-sm">
          <li>
            <code>banhatten-ui</code> — Main entry: all components and types.{" "}
            <code>banhatten-ui/lib/utils</code> — <code>cn</code> only.
          </li>
          <li>
            <code>banhatten-ui/tokens</code> — Tokens JSON.{" "}
            <code>banhatten-ui/tokens/tailwind.config</code> — Tailwind preset.
          </li>
          <li>
            Components use semantic token classes (e.g. <code>text-primary</code>,{" "}
            <code>bg-primary</code>, <code>border-default</code>). Use the preset in
            your app so these resolve correctly.
          </li>
        </ul>
      </Section>
    </div>
  );
}
