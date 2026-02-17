import { FeaturedIcon } from "banhatten-ui";
import { Section } from "./section";

const variants = [
  "circle-light",
  "square-light",
  "circle-pulse",
  "solid-circle",
  "solid-square",
] as const;
const types = ["brand", "success", "danger", "warning", "neutral"] as const;
const sizes = ["sm", "md", "lg"] as const;

export function FeaturedIconDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Featured Icon highlights or draws attention to content. It renders a Material Symbol
          (filled only) inside a colored container. Use it to emphasize key information, guide
          focus, or add visual hierarchy. Five variants (circle light, square light, circle pulse
          with 8px border, solid circle, solid square), five types (color), and three sizes. Icon
          size maps sm→md, md→lg, lg→xl.
        </p>
      </div>

      {/* Variants (Figma: circle light, with square, circle pulse, solid circle, solid square) */}
      <Section
        title="Variants"
        description="Five styles from Figma: circle light (soft circle), square light (soft rounded square), circle pulse (solid circle with glow and 8px border), solid circle, solid square."
      >
        <div className="space-y-6">
          {variants.map((variant) => (
            <div key={variant}>
              <p className="text-primary mb-2 text-sm font-medium">
                {variant.replace(/-/g, " ")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {types.map((type) => (
                  <FeaturedIcon
                    key={type}
                    name="info"
                    variant={variant}
                    type={type}
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Default: solid-circle, brand type, medium size. Pass a Material Symbol name in snake_case."
      >
        <div className="flex flex-wrap items-center gap-4">
          <FeaturedIcon name="info" />
          <FeaturedIcon name="check_circle" type="success" />
          <FeaturedIcon name="warning" type="warning" variant="circle-pulse" />
          <FeaturedIcon name="error" type="danger" variant="solid-square" />
        </div>
      </Section>

      {/* Types */}
      <Section
        title="Types (color)"
        description="Semantic color: brand, success, danger, warning, neutral. Light variants use soft bg + colored icon; solid/pulse use solid bg + white icon."
      >
        <div className="flex flex-wrap items-center gap-4">
          {types.map((type) => (
            <FeaturedIcon
              key={type}
              name="info"
              type={type}
              variant="solid-circle"
              aria-hidden
            />
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Small, medium, and large. Container uses p-sm/md/lg; icon size maps sm→md (20px), md→lg (24px), lg→xl (32px)."
      >
        <div className="flex flex-wrap items-end gap-6">
          {sizes.map((size) => (
            <div key={size}>
              <p className="text-primary mb-2 text-sm font-medium capitalize">{size}</p>
              <FeaturedIcon name="info" size={size} aria-hidden />
            </div>
          ))}
        </div>
      </Section>

      {/* Accessibility */}
      <Section
        title="Accessibility"
        description={'Pass label when the icon conveys meaning; the root gets role="img" and aria-label. Omit for decorative use (aria-hidden).'}
      >
        <div className="flex flex-wrap items-center gap-4">
          <FeaturedIcon name="check_circle" type="success" label="Success" />
          <FeaturedIcon name="error" type="danger" label="Error" />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { FeaturedIcon } from "banhatten-ui";

// Basic (solid-circle, brand, md)
<FeaturedIcon name="info" />

// Variant and type
<FeaturedIcon name="check_circle" variant="circle-light" type="success" />
<FeaturedIcon name="info" variant="solid-square" type="neutral" />

// Circle pulse (glow)
<FeaturedIcon name="warning" variant="circle-pulse" type="warning" size="lg" />

// With accessible label
<FeaturedIcon name="info" type="neutral" label="Information" />`}</code>
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
                  &quot;circle-light&quot; | &quot;square-light&quot; | &quot;circle-pulse&quot; | &quot;solid-circle&quot; | &quot;solid-square&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;solid-circle&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">type</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;brand&quot; | &quot;success&quot; | &quot;danger&quot; | &quot;warning&quot; | &quot;neutral&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;brand&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className, ...</td>
                <td className="py-3 pr-4 font-mono text-xs">HTMLSpanElement</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Icons are always rendered filled via the internal Icon component. Icon size is derived
          from featured icon size: sm→md, md→lg, lg→xl. Provide <code>label</code> when the icon
          conveys meaning so the root receives <code>role=&quot;img&quot;</code> and{" "}
          <code>aria-label</code>; otherwise it is <code>aria-hidden</code>.
        </p>
      </Section>
    </div>
  );
}
