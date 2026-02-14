import { ProgressBar } from "@banhatten/ui";
import { Section } from "./section";

export function ProgressBarDocumentation() {
  const sizes = ["sm", "lg"] as const;
  const colors = ["brand", "success", "danger", "info", "neutral"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Progress Bar shows completion status of a task or process. It supports two sizes (small,
          large), five fill colors, and optional label, helper text, value display, and refresh
          action. Omit <code>value</code> for an indeterminate (loading) state.
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Default: small size, brand color. Pass value 0–100 for determinate progress."
      >
        <div className="space-y-6 max-w-[400px]">
          <ProgressBar value={40} aria-label="Progress" />
          <ProgressBar value={75} aria-label="Progress" />
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Small (4px height) and large (8px height). Both use token radius and track background."
      >
        <div className="space-y-6 max-w-[400px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Small (default)</p>
            <ProgressBar size="sm" value={40} aria-label="Progress" />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Large</p>
            <ProgressBar size="lg" value={40} aria-label="Progress" />
          </div>
        </div>
      </Section>

      {/* Colors */}
      <Section
        title="Colors"
        description="Fill color: brand, success, danger, info, neutral. Track is always tertiary background."
      >
        <div className="space-y-4 max-w-[400px]">
          {colors.map((color) => (
            <div key={color}>
              <p className="text-primary mb-2 text-sm font-medium capitalize">{color}</p>
              <ProgressBar color={color} value={50} aria-label={`Progress (${color})`} />
            </div>
          ))}
        </div>
      </Section>

      {/* With label, value, helper, refresh */}
      <Section
        title="Label, value, helper text, refresh"
        description="Optional label above the bar, numeric value and refresh icon beside the bar, and helper text below."
      >
        <div className="space-y-8 max-w-[400px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Full: label + info icon + value + refresh + helper</p>
            <ProgressBar
              label="Upload progress"
              showLabelInfoIcon
              value={40}
              showValue
              onRefresh={() => {}}
              helperText="Helper text"
              size="sm"
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Bar + helper only</p>
            <ProgressBar value={60} helperText="Helper text" size="sm" />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Large bar + value + refresh</p>
            <ProgressBar
              size="lg"
              value={40}
              showValue
              onRefresh={() => {}}
              aria-label="Progress"
            />
          </div>
        </div>
      </Section>

      {/* Indeterminate */}
      <Section
        title="Indeterminate"
        description="Omit value for loading state. The fill shows a pulsing segment; use aria-valuetext for screen readers."
      >
        <div className="max-w-[400px]">
          <ProgressBar aria-label="Loading" />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { ProgressBar } from "@banhatten/ui";

// Basic (value 0–100)
<ProgressBar value={40} aria-label="Progress" />

// Sizes and colors
<ProgressBar size="lg" color="success" value={75} aria-label="Progress" />

// With label, value, helper, refresh
<ProgressBar
  label="Upload progress"
  showLabelInfoIcon
  value={40}
  showValue
  onRefresh={() => {}}
  helperText="Helper text"
/>

// Indeterminate (omit value)
<ProgressBar aria-label="Loading" />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">value</td>
                <td className="py-3 pr-4 font-mono text-xs">number (0–100)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot; | &quot;lg&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">color</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;brand&quot; | &quot;success&quot; | &quot;danger&quot; | &quot;info&quot; | &quot;neutral&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;brand&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">showLabelInfoIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">helperText</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">showValue</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">onRefresh</td>
                <td className="py-3 pr-4 font-mono text-xs">() =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className, aria-label, etc.</td>
                <td className="py-3 pr-4 font-mono text-xs">HTMLDivElement</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          ProgressBar uses <code>role=&quot;progressbar&quot;</code> with <code>aria-valuenow</code>,{" "}
          <code>aria-valuemin</code>, <code>aria-valuemax</code>, and optional <code>aria-valuetext</code> for
          indeterminate. Provide <code>aria-label</code> when there is no visible label.
        </p>
      </Section>
    </div>
  );
}
