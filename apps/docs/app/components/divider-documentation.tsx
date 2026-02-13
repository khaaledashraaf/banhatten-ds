import { Divider } from "@banhatten/ui";
import { Section } from "./section";

export function DividerDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Dividers are used to separate content sections visually. They support horizontal and vertical orientations, as well as solid and dashed line styles.
        </p>
      </div>

      {/* Orientation */}
      <Section
        title="Orientation"
        description="Dividers can be displayed horizontally or vertically to separate content in different layouts."
      >
        <div className="space-y-6">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Horizontal</p>
            <div className="space-y-4">
              <div>
                <p className="text-secondary mb-2 text-xs">Content above</p>
                <Divider orientation="horizontal" />
                <p className="text-secondary mt-2 text-xs">Content below</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Vertical</p>
            <div className="flex h-32 items-center gap-4">
              <span className="text-secondary text-sm">Left content</span>
              <Divider orientation="vertical" />
              <span className="text-secondary text-sm">Right content</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Variants */}
      <Section
        title="Variants"
        description="Two line styles: solid for standard separation and dashed for subtle or decorative separation."
      >
        <div className="space-y-6">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Solid</p>
            <div className="space-y-4">
              <div>
                <p className="text-secondary mb-2 text-xs">Content above</p>
                <Divider variant="solid" />
                <p className="text-secondary mt-2 text-xs">Content below</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Dashed</p>
            <div className="space-y-4">
              <div>
                <p className="text-secondary mb-2 text-xs">Content above</p>
                <Divider variant="dashed" />
                <p className="text-secondary mt-2 text-xs">Content below</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Combinations */}
      <Section
        title="Orientation × Variant"
        description="All combinations of orientation and variant styles."
      >
        <div className="space-y-8">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Horizontal Solid</p>
            <div className="space-y-4">
              <div>
                <p className="text-secondary mb-2 text-xs">Content above</p>
                <Divider orientation="horizontal" variant="solid" />
                <p className="text-secondary mt-2 text-xs">Content below</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Horizontal Dashed</p>
            <div className="space-y-4">
              <div>
                <p className="text-secondary mb-2 text-xs">Content above</p>
                <Divider orientation="horizontal" variant="dashed" />
                <p className="text-secondary mt-2 text-xs">Content below</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Vertical Solid</p>
            <div className="flex h-32 items-center gap-4">
              <span className="text-secondary text-sm">Left</span>
              <Divider orientation="vertical" variant="solid" />
              <span className="text-secondary text-sm">Right</span>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Vertical Dashed</p>
            <div className="flex h-32 items-center gap-4">
              <span className="text-secondary text-sm">Left</span>
              <Divider orientation="vertical" variant="dashed" />
              <span className="text-secondary text-sm">Right</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Divider } from "@banhatten/ui";

// Horizontal divider (default)
<Divider />

// Vertical divider
<Divider orientation="vertical" />

// Dashed style
<Divider variant="dashed" />

// Vertical dashed
<Divider orientation="vertical" variant="dashed" />

// With custom className
<Divider className="my-8" />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">orientation</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;horizontal&quot; | &quot;vertical&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;horizontal&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">variant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;solid&quot; | &quot;dashed&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;solid&quot;</td>
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
          Divider also accepts all standard HTML attributes. Horizontal dividers render as <code>&lt;hr&gt;</code> elements, while vertical dividers render as <code>&lt;div&gt;</code> elements. Both include <code>role=&quot;separator&quot;</code> and appropriate <code>aria-orientation</code> attributes for accessibility.
        </p>
      </Section>
    </div>
  );
}
