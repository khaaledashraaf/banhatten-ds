import { Icon } from "banhatten-ui";
import { Section } from "./section";

export function IconDocumentation() {
  const variants = ["outlined", "rounded", "sharp"] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const sampleIcons = ["home", "settings", "search", "favorite", "star", "check_circle"];

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Icons use{" "}
          <a
            href="https://fonts.google.com/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline"
          >
            Google Material Symbols
          </a>{" "}
          as a variable font, self-hosted via the{" "}
          <code className="bg-secondary rounded px-1.5 py-0.5 text-xs">material-symbols</code>{" "}
          npm package. This provides pixel-perfect parity with Figma and full CSS control
          over fill, weight, and grade.
        </p>
      </div>

      {/* Variants */}
      <Section
        title="Variants"
        description="Three font families to match your design language: Outlined (default), Rounded, and Sharp."
      >
        <div className="flex flex-wrap items-center gap-8">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <Icon name="home" variant={variant} size="lg" />
              <span className="text-secondary text-xs capitalize">{variant}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Five sizes matching the design system tokens: xs (12px), sm (16px), md (20px), lg (24px), and xl (32px)."
      >
        <div className="flex flex-wrap items-end gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Icon name="star" size={size} />
              <span className="text-secondary text-xs">{size}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Fill State */}
      <Section
        title="Fill State"
        description="Toggle the filled variant for emphasis or active states."
      >
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Icon name="favorite" size="lg" />
            <span className="text-secondary text-xs">Unfilled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon name="favorite" size="lg" filled />
            <span className="text-secondary text-xs">Filled</span>
          </div>
        </div>
      </Section>

      {/* Weight */}
      <Section
        title="Weight"
        description="Adjust stroke weight from 100 (thin) to 700 (bold) for visual hierarchy."
      >
        <div className="flex flex-wrap items-center gap-6">
          {[100, 200, 300, 400, 500, 600, 700].map((weight) => (
            <div key={weight} className="flex flex-col items-center gap-2">
              <Icon name="search" size="lg" weight={weight} />
              <span className="text-secondary text-xs">{weight}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Sample Icons */}
      <Section
        title="Sample Icons"
        description="A few commonly used icons. Browse the full library at fonts.google.com/icons."
      >
        <div className="flex flex-wrap items-center gap-6">
          {sampleIcons.map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon name={name} size="lg" />
              <span className="text-secondary text-xs font-mono">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Icon } from "banhatten-ui";

<Icon name="home" />                              // Outlined, unfilled, 24px
<Icon name="home" filled />                       // Outlined, filled
<Icon name="home" variant="rounded" />            // Rounded, unfilled
<Icon name="home" variant="rounded" filled />     // Rounded, filled
<Icon name="settings" size="lg" weight={300} />   // Large, thin weight
<Icon name="search" label="Search" />             // Accessible (not aria-hidden)`}</code>
          </pre>
        </div>
      </Section>

      {/* Props */}
      <Section title="Props">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-default">
                <th className="text-primary pb-3 pr-4 font-semibold">Prop</th>
                <th className="text-primary pb-3 pr-4 font-semibold">Type</th>
                <th className="text-primary pb-3 pr-4 font-semibold">Default</th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">name</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">variant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;outlined&quot; | &quot;rounded&quot; | &quot;sharp&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;outlined&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">filled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">weight</td>
                <td className="py-3 pr-4 font-mono text-xs">number (100–700)</td>
                <td className="py-3 pr-4 font-mono text-xs">400</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">grade</td>
                <td className="py-3 pr-4 font-mono text-xs">number (−25 to 200)</td>
                <td className="py-3 pr-4 font-mono text-xs">0</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          When <code className="bg-secondary rounded px-1 py-0.5">label</code> is provided, the icon has
          <code className="bg-secondary rounded px-1 py-0.5">role=&quot;img&quot;</code> and
          <code className="bg-secondary rounded px-1 py-0.5">aria-label</code>. Otherwise, it is treated as decorative
          (<code className="bg-secondary rounded px-1 py-0.5">aria-hidden=&quot;true&quot;</code>).
        </p>
      </Section>

      {/* Font Loading Note */}
      <Section
        title="Font Loading (Consumers)"
        description="Apps consuming banhatten-ui must load the font CSS in their global styles."
      >
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`/* globals.css */
@import "material-symbols/outlined.css";
@import "material-symbols/rounded.css";
@import "material-symbols/sharp.css";`}</code>
          </pre>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Only import the styles you actually use. Each font file is ~300KB, so omit unused variants.
        </p>
      </Section>
    </div>
  );
}
