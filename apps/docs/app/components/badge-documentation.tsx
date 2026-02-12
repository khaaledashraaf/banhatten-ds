import { Badge } from "@banhatten/ui";
import { Section } from "./section";

export function BadgeDocumentation() {
  const variants = ["filled", "light", "outlined"] as const;
  const colors = ["brand", "neutral", "success", "warning", "danger", "info"] as const;
  const sizes = ["sm", "lg"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Badges are used to highlight an item&apos;s status for quick recognition.
          They support multiple variants, colors, and sizes.
        </p>
      </div>

      {/* Variants */}
      <Section title="Variants" description="Three visual styles: filled, light, and outlined.">
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="filled">Filled</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="outlined">Outlined</Badge>
        </div>
      </Section>

      {/* Colors */}
      <Section title="Colors" description="Six semantic colors for different contexts.">
        <div className="space-y-4">
          {variants.map((variant) => (
            <div key={variant}>
              <p className="text-primary mb-2 text-sm font-medium capitalize">{variant}</p>
              <div className="flex flex-wrap items-center gap-2">
                {colors.map((color) => (
                  <Badge key={color} variant={variant} color={color}>
                    {color}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Two sizes: sm (24px) and lg (28px).">
        <div className="flex items-center gap-4">
          {sizes.map((size) => (
            <Badge key={size} size={size}>
              Size {size}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Icons */}
      <Section
        title="Icons"
        description="Badges can render a Material Symbols icon either before or after the label. Spacing and icon sizes follow the badge size ramp."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge leftIcon="info" color="info">
            Info
          </Badge>
          <Badge rightIcon="close" variant="light" color="neutral">
            Dismiss
          </Badge>
          <Badge leftIcon="check_circle" variant="filled" color="success" size="lg">
            Success
          </Badge>
          <Badge
            rightIcon="arrow_forward"
            variant="outlined"
            color="brand"
            size="lg"
            iconVariant="rounded"
            iconFilled
          >
            Learn more
          </Badge>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Icon props expect Material Symbols names (e.g. <code>info</code>, <code>close</code>).
          Icons are decorative by default and sized at 12px for <code>sm</code> badges and 16px
          for <code>lg</code> badges.
        </p>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Badge } from "@banhatten/ui";

<Badge>Default</Badge>
<Badge variant="filled" color="success">Completed</Badge>
<Badge variant="outlined" color="danger" size="lg">Error</Badge>

// With icons
<Badge leftIcon="info" color="info">Info</Badge>
<Badge rightIcon="close" variant="light" color="neutral">Dismiss</Badge>
<Badge leftIcon="check_circle" variant="filled" color="success" size="lg">
  Success
</Badge>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">variant</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;filled&quot; | &quot;light&quot; | &quot;outlined&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;light&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">color</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;brand&quot; | &quot;neutral&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;danger&quot; | &quot;info&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;brand&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot; | &quot;lg&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">leftIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">rightIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconVariant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;outlined&quot; | &quot;rounded&quot; | &quot;sharp&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;outlined&quot;</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">iconFilled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
