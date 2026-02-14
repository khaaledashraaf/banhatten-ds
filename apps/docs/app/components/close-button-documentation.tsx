import { CloseButton } from "@banhatten/ui";
import { Section } from "./section";

export function CloseButtonDocumentation() {
  const variants = ["ghost", "outlined"] as const;
  const sizes = ["sm", "md", "lg", "xl"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Close Button is a dedicated dismiss control with a close icon. It has two variants
          (ghost and outlined), four sizes, and states: default, hover, pressed, and disabled. All
          buttons are circular (<code>rounded-full</code>). Use ghost for inline contexts (alerts,
          tags) and outlined when you need a visible border (e.g. on overlays).
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Default is ghost variant, medium size. Override aria-label for context-specific announcements."
      >
        <div className="flex flex-wrap items-center gap-4">
          <CloseButton onClick={() => {}} />
          <CloseButton onClick={() => {}} aria-label="Close alert" />
          <CloseButton onClick={() => {}} aria-label="Remove tag" />
        </div>
      </Section>

      {/* Variants */}
      <Section
        title="Variants"
        description="Ghost: no border, transparent background; hover/pressed show a subtle fill. Outlined: circular border; hover/pressed darken the border and add background."
      >
        <div className="flex flex-wrap items-center gap-4">
          {variants.map((variant) => (
            <CloseButton
              key={variant}
              variant={variant}
              onClick={() => {}}
              aria-label={`Close (${variant})`}
            />
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Four sizes: sm (24px), md (32px), lg (40px), xl (48px). All are circular with a centered close icon."
      >
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map((size) => (
            <CloseButton
              key={size}
              size={size}
              onClick={() => {}}
              aria-label={`Close ${size}`}
            />
          ))}
        </div>
      </Section>

      {/* States */}
      <Section
        title="States"
        description="Default, hover, pressed (active), and disabled. Focus ring appears on keyboard focus."
      >
        <div className="flex flex-wrap items-center gap-4">
          <CloseButton onClick={() => {}} aria-label="Close" />
          <CloseButton onClick={() => {}} aria-label="Close" disabled />
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Hover and pressed states use token backgrounds (tertiary, quarterary). Disabled reduces
          opacity and blocks pointer events.
        </p>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { CloseButton } from "@banhatten/ui";

// Default (ghost, md, aria-label="Close")
<CloseButton onClick={onClose} />

// Context-specific label
<CloseButton onClick={onClose} aria-label="Close alert" />
<CloseButton onClick={onClose} aria-label="Remove tag" />

// Variant and size
<CloseButton variant="outlined" size="lg" onClick={onClose} />
<CloseButton variant="ghost" size="sm" onClick={onClose} aria-label="Close dialog" />

// Disabled
<CloseButton onClick={onClose} disabled aria-label="Close" />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">aria-label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;Close&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">variant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;ghost&quot; | &quot;outlined&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;ghost&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconVariant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;outlined&quot; | &quot;rounded&quot; | &quot;sharp&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconFilled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          CloseButton accepts standard HTML button attributes (<code>onClick</code>, <code>type</code>
          , etc.). Override <code>aria-label</code> for context (e.g. &quot;Close alert&quot;,
          &quot;Remove tag&quot;) so screen readers announce the right action.
        </p>
      </Section>
    </div>
  );
}
