import { Section } from "./section";

export function IntroductionDocumentation() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Banhatten Design System is a React component library and design tokens
          published on npm as{" "}
          <a
            href="https://www.npmjs.com/package/banhatten-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            banhatten-ui
          </a>
          . The source lives in an npm workspaces monorepo. It is built for React 19+
          (Server Components compatible), TypeScript (strict mode), and Tailwind CSS v4.
        </p>
      </div>

      <Section
        title="Packages"
        description="Install from npm: banhatten-ui. The monorepo contains the package source and this docs app."
      >
        <ul className="text-secondary list-disc space-y-2 pl-6 text-sm">
          <li>
            <strong className="text-primary">banhatten-ui</strong> (npm) — The
            published package. Component library (buttons, inputs, menus, sidebars,
            avatars, alerts, sliders, tooltips, and more), design tokens (JSON +
            Tailwind preset), and <code>cn</code> utility. Exports named components and
            CVA variants (e.g. <code>buttonVariants</code>). Tokens and Tailwind config
            are included: <code>banhatten-ui/tokens</code>,{" "}
            <code>banhatten-ui/tokens/tailwind.config</code>.
          </li>
          <li>
            <strong className="text-primary">Monorepo</strong> —{" "}
            <code>packages/ui</code> (banhatten-ui source), <code>packages/tokens</code>{" "}
            (@banhatten/tokens, used in development), <code>apps/docs</code> (this
            documentation site).
          </li>
        </ul>
      </Section>

      <Section
        title="Tech stack"
        description="Technologies and conventions used across the design system."
      >
        <ul className="text-secondary list-disc space-y-2 pl-6 text-sm">
          <li>
            <strong className="text-primary">Framework:</strong> React 19+ (Server
            Components compatible).
          </li>
          <li>
            <strong className="text-primary">Language:</strong> TypeScript (strict
            mode).
          </li>
          <li>
            <strong className="text-primary">Styling:</strong> Tailwind CSS v4
            (utility-first) and <code>class-variance-authority</code> (CVA) for
            component variants.
          </li>
          <li>
            <strong className="text-primary">Icons:</strong> Material Symbols (variable
            font via the <code>material-symbols</code> npm package).
          </li>
          <li>
            <strong className="text-primary">Conventions:</strong> Functional
            components only; <code>forwardRef</code> where needed; props extend
            standard HTML attributes; named exports; <code>cn(...)</code> for class
            merging (Tailwind Merge + CLSX); accessibility (ARIA) required on interactive
            elements.
          </li>
        </ul>
      </Section>

      <Section
        title="What you get"
        description="Capabilities provided by the design system."
      >
        <ul className="text-secondary list-disc space-y-2 pl-6 text-sm">
          <li>Design tokens for colors, spacing, radius, and shadows.</li>
          <li>
            A full set of UI components: buttons, inputs, textareas, checkboxes,
            radios, toggles, tags, badges, avatars, menus, sidebars, alerts,
            accordions, sliders, progress bars, tooltips, dividers, and more.
          </li>
          <li>
            Consistent API: variants and sizes via props; optional icons (Material
            Symbols); support for labels, helper text, and error states where
            applicable.
          </li>
          <li>
            Accessibility built in: ARIA attributes, keyboard support, and semantic
            HTML.
          </li>
        </ul>
      </Section>
    </div>
  );
}
