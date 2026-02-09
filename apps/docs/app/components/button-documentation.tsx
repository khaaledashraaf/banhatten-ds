import { Button } from "@banhatten/ui";
import { Section } from "./section";

export function ButtonDocumentation() {
  const variants = ["primary", "secondary", "tertiary", "danger", "link", "link-brand"] as const;
  const sizes = ["xs", "md", "lg", "xl", "2xl"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Buttons are used to trigger actions or navigate. They support multiple
          variants and sizes to fit different contexts and visual hierarchies.
        </p>
      </div>

      {/* Variants */}
      <Section
        title="Variants"
        description="Six visual styles for different use cases: primary for main actions, secondary for alternative actions, tertiary for subtle actions, danger for destructive actions, and link variants for navigation."
      >
        <div className="flex flex-wrap items-center gap-4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Five sizes to accommodate different contexts: xs (36px), md (40px), lg (44px), xl (48px), and 2xl (56px)."
      >
        <div className="flex flex-wrap items-end gap-4">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              Size {size}
            </Button>
          ))}
        </div>
      </Section>

      {/* All Combinations */}
      <Section
        title="Variant × Size Matrix"
        description="All variant and size combinations for reference."
      >
        <div className="space-y-6">
          {variants.map((variant) => (
            <div key={variant}>
              <p className="text-primary mb-3 text-sm font-medium capitalize">
                {variant}
              </p>
              <div className="flex flex-wrap items-end gap-3">
                {sizes.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* States */}
      <Section
        title="States"
        description="Buttons have hover, active, focus, and disabled states built in."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Hover and active states are visible on interaction. Focus ring appears on keyboard navigation.
        </p>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Button } from "@banhatten/ui";

<Button>Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger" size="lg">Delete</Button>
<Button variant="link-brand">Learn more</Button>
<Button disabled>Disabled</Button>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;primary&quot; | &quot;secondary&quot; | &quot;tertiary&quot; | &quot;danger&quot; | &quot;link&quot; | &quot;link-brand&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;primary&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;xs&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
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
          Button also accepts all standard HTML button attributes (onClick, type, etc.).
        </p>
      </Section>
    </div>
  );
}
