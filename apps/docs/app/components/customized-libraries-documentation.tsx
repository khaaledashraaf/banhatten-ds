"use client";

import { Section } from "./section";

export function CustomizedLibrariesDocumentation() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Banhatten Design System offers customized component libraries that wrap popular UI frameworks
          with our design tokens, theming, and conventions. These libraries provide a consistent look
          and feel while leveraging the ecosystem and features of established UI frameworks.
        </p>
      </div>

      <Section
        title="banhatten-ui-mui"
        description="Banhatten components built on top of Material UI (MUI)."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-default bg-secondary p-4">
            <h4 className="text-primary font-semibold mb-2">Why MUI?</h4>
            <ul className="text-secondary text-sm space-y-1 list-disc list-inside">
              <li>Comprehensive component library with advanced features (DataGrid, DatePicker, etc.)</li>
              <li>Strong TypeScript support and extensive documentation</li>
              <li>Large community and ecosystem of third-party integrations</li>
              <li>Ideal for enterprise applications requiring complex data components</li>
            </ul>
          </div>

          <div className="rounded-lg border border-default bg-secondary p-4">
            <h4 className="text-primary font-semibold mb-2">What We Did</h4>
            <ul className="text-secondary text-sm space-y-1 list-disc list-inside">
              <li>Applied Banhatten design tokens (colors, spacing, typography, shadows) to MUI's theme</li>
              <li>Customized component styles to match our design system's visual language</li>
              <li>Wrapped MUI components with our API patterns where needed</li>
              <li>Ensured accessibility standards are maintained</li>
            </ul>
          </div>

          <div className="rounded-lg border border-default p-4">
            <h4 className="text-primary font-semibold mb-2">Installation</h4>
            <pre className="bg-secondary rounded p-3 text-sm overflow-x-auto">
              <code>npm install banhatten-ui-mui @mui/material @emotion/react @emotion/styled</code>
            </pre>
          </div>

          <div className="rounded-lg border border-default p-4">
            <h4 className="text-primary font-semibold mb-2">Usage</h4>
            <pre className="bg-secondary rounded p-3 text-sm overflow-x-auto">
              <code>{`import { ThemeProvider, Button, DataGrid } from 'banhatten-ui-mui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="contained">Click me</Button>
      <DataGrid rows={rows} columns={columns} />
    </ThemeProvider>
  );
}`}</code>
            </pre>
          </div>

          <div className="flex gap-2">
            <a
              href="https://www.npmjs.com/package/banhatten-ui-mui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand text-sm hover:underline"
            >
              View on npm →
            </a>
          </div>
        </div>
      </Section>

      <Section
        title="banhatten-ui-joyui"
        description="Banhatten components built on top of Joy UI."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-default bg-secondary p-4">
            <h4 className="text-primary font-semibold mb-2">Why Joy UI?</h4>
            <ul className="text-secondary text-sm space-y-1 list-disc list-inside">
              <li>Modern, minimalist design philosophy that aligns well with Banhatten's aesthetics</li>
              <li>Built from the ground up for customization with CSS variables</li>
              <li>Lighter weight alternative to MUI with excellent DX</li>
              <li>Perfect for applications prioritizing clean, contemporary UI</li>
            </ul>
          </div>

          <div className="rounded-lg border border-default bg-secondary p-4">
            <h4 className="text-primary font-semibold mb-2">What We Did</h4>
            <ul className="text-secondary text-sm space-y-1 list-disc list-inside">
              <li>Mapped Banhatten design tokens to Joy UI's CSS variable system</li>
              <li>Extended Joy UI's theme with our color palette and semantic tokens</li>
              <li>Customized variant styles (solid, soft, outlined, plain) to match Banhatten</li>
              <li>Added our spacing and radius scales for consistent layouts</li>
            </ul>
          </div>

          <div className="rounded-lg border border-default p-4">
            <h4 className="text-primary font-semibold mb-2">Installation</h4>
            <pre className="bg-secondary rounded p-3 text-sm overflow-x-auto">
              <code>npm install banhatten-ui-joyui @mui/joy @emotion/react @emotion/styled</code>
            </pre>
          </div>

          <div className="rounded-lg border border-default p-4">
            <h4 className="text-primary font-semibold mb-2">Usage</h4>
            <pre className="bg-secondary rounded p-3 text-sm overflow-x-auto">
              <code>{`import { CssVarsProvider, Button, Sheet } from 'banhatten-ui-joyui';

function App() {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined" sx={{ p: 2 }}>
        <Button variant="solid">Click me</Button>
      </Sheet>
    </CssVarsProvider>
  );
}`}</code>
            </pre>
          </div>

          <div className="flex gap-2">
            <a
              href="https://www.npmjs.com/package/banhatten-ui-joyui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand text-sm hover:underline"
            >
              View on npm →
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
