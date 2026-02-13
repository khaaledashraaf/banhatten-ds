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

      {/* Icons */}
      <Section
        title="Icons"
        description="Buttons can render Material Symbols icons on the left, right, or both sides of the label. Spacing and icon sizes are aligned with the button size ramp."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button leftIcon="chevron_left">Previous</Button>
          <Button rightIcon="chevron_right">Next</Button>
          <Button leftIcon="add" rightIcon="chevron_right" size="lg">
            Add to cart
          </Button>
          <Button
            leftIcon="favorite"
            variant="secondary"
            iconVariant="rounded"
            iconFilled
          >
            Save
          </Button>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Icon props expect Material Symbols names (e.g. <code>chevron_right</code>,{" "}
          <code>add</code>). Sizes map automatically from the button size to the icon size
          (20px icons for XS–LG, 24px for XL–2XL).
        </p>
      </Section>

      {/* Icon-Only Buttons */}
      <Section
        title="Icon-Only Buttons"
        description="Square icon-only buttons are perfect for compact actions like close, menu, or more options. Use the `icon` prop to create icon-only buttons. All variants and sizes are supported."
      >
        <div className="space-y-6">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Variants</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button icon="close" aria-label="Close" />
              <Button icon="close" variant="secondary" aria-label="Close" />
              <Button icon="more_vert" variant="tertiary" aria-label="More options" />
              <Button icon="delete" variant="danger" aria-label="Delete" />
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Sizes</p>
            <div className="flex flex-wrap items-center gap-4">
              {sizes.map((size) => (
                <Button
                  key={size}
                  icon="settings"
                  size={size}
                  aria-label={`Settings ${size}`}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Common Use Cases</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button icon="close" aria-label="Close dialog" />
              <Button icon="menu" variant="tertiary" aria-label="Open menu" />
              <Button icon="more_vert" variant="secondary" aria-label="More options" />
              <Button icon="favorite" iconFilled aria-label="Add to favorites" />
              <Button icon="search" variant="tertiary" aria-label="Search" />
            </div>
          </div>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          <strong>Accessibility:</strong> Icon-only buttons require an <code>aria-label</code> prop
          to provide context for screen readers. Icon-only mode is automatically detected when using
          the <code>icon</code> prop, or when only <code>leftIcon</code> or <code>rightIcon</code>{" "}
          is provided without children.
        </p>
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
<Button disabled>Disabled</Button>

// With icons
<Button leftIcon="add">Create</Button>
<Button rightIcon="arrow_forward">Continue</Button>
<Button leftIcon="shopping_cart" rightIcon="chevron_right">
  Checkout
</Button>

// Icon-only buttons
<Button icon="close" aria-label="Close" />
<Button icon="menu" variant="tertiary" aria-label="Menu" />
<Button icon="more_vert" variant="secondary" size="lg" aria-label="More options" />`}</code>
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
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">icon</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
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
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconFilled</td>
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
          Button also accepts all standard HTML button attributes (onClick, type, etc.). When using
          the <code>icon</code> prop for icon-only buttons, an <code>aria-label</code> is required
          for accessibility.
        </p>
      </Section>
    </div>
  );
}
