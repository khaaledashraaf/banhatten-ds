import { Section } from "./section";

export function IntroductionDocumentation() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Banhatten Design System is an npm workspaces monorepo that provides a shared
          component library and design tokens for building consistent, accessible UIs.
          It is built for React 19+ (Server Components compatible), TypeScript (strict
          mode), and Tailwind CSS v4.
        </p>
      </div>

      <Section
        title="Packages"
        description="The repo is split into apps and packages. Consuming apps typically depend on @banhatten/ui and optionally @banhatten/tokens for theming."
      >
        <ul className="text-secondary list-disc space-y-2 pl-6 text-sm">
          <li>
            <strong className="text-primary">@banhatten/ui</strong> — Component library.
            Buttons, inputs, menus, sidebars, avatars, alerts, sliders, tooltips, and
            more. All components use design tokens and support theming. Exports named
            components and CVA variants (e.g. <code>buttonVariants</code>) for custom
            composition.
          </li>
          <li>
            <strong className="text-primary">@banhatten/tokens</strong> — Design tokens
            (colors, spacing, radius, shadow) as JSON and a Tailwind preset. Used by
            the UI package and by apps for consistent styling. Exports{" "}
            <code>@banhatten/tokens</code> (tokens.json) and{" "}
            <code>@banhatten/tokens/tailwind.config</code> for Tailwind theme extension.
          </li>
          <li>
            <strong className="text-primary">apps/docs</strong> — This documentation
            site (Next.js). Demonstrates all components, tokens, and usage patterns.
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
