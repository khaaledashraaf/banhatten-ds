"use client";

import { SliderHandle, TooltipProvider } from "banhatten-ui";
import { Section } from "./section";

export function SliderHandleDocumentation() {
  return (
    <TooltipProvider>
      <div className="space-y-12">
        {/* Overview */}
        <div>
          <p className="text-secondary text-sm leading-relaxed">
            Slider Handle is the draggable circle used on the Slider track (24×24px per Figma). It
            has three visual states (default, hover, active) and can optionally show a value as a
            tooltip (on hover) or a simple label above or below the circle. Use the{" "}
            <code>state</code> prop to force a visual state for documentation. Typically used
            inside Slider; exported for custom compositions.
          </p>
        </div>

        {/* Basic: circle only */}
        <Section
          title="Basic"
          description="Circle only, no value label. 24×24px. Interactive hover/active styles."
        >
          <div className="flex flex-wrap items-center gap-6">
            <SliderHandle aria-label="Handle" />
          </div>
        </Section>

        {/* States (forced for docs) */}
        <Section
          title="States"
          description="Use the state prop to show default, hover, or active appearance without interaction."
        >
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="text-primary mb-2 text-sm font-medium">Default</p>
              <SliderHandle state="default" aria-label="Handle" />
            </div>
            <div>
              <p className="text-primary mb-2 text-sm font-medium">Hover</p>
              <SliderHandle state="hover" aria-label="Handle" />
            </div>
            <div>
              <p className="text-primary mb-2 text-sm font-medium">Active</p>
              <SliderHandle state="active" aria-label="Handle" />
            </div>
          </div>
        </Section>

        {/* Value: tooltip above/below */}
        <Section
          title="Value as tooltip"
          description="valueLabel + labelVariant='tooltip'. Tooltip appears on hover; position above or below."
        >
          <div className="flex flex-wrap items-end gap-8">
            <div>
              <p className="text-primary mb-2 text-sm font-medium">Tooltip below</p>
              <SliderHandle
                valueLabel="60%"
                labelVariant="tooltip"
                labelPosition="below"
                aria-hidden
              />
            </div>
            <div>
              <p className="text-primary mb-2 text-sm font-medium">Tooltip above</p>
              <SliderHandle
                valueLabel="60%"
                labelVariant="tooltip"
                labelPosition="above"
                aria-hidden
              />
            </div>
          </div>
        </Section>

        {/* Value: label above/below */}
        <Section
          title="Value as label"
          description="valueLabel + labelVariant='label'. Plain text always visible, above or below the circle."
        >
          <div className="flex flex-wrap items-end gap-8">
            <div>
              <p className="text-primary mb-9 text-sm font-medium">Label below</p>
              <SliderHandle
                valueLabel="75%"
                labelVariant="label"
                labelPosition="below"
                aria-hidden
              />
            </div>
            <div>
              <p className="text-primary mb-9 text-sm font-medium">Label above</p>
              <SliderHandle
                valueLabel="25%"
                labelVariant="label"
                labelPosition="above"
                aria-hidden
              />
            </div>
          </div>
        </Section>

        {/* Usage */}
        <Section title="Usage">
          <div className="bg-secondary rounded-lg p-4">
            <pre className="text-primary overflow-x-auto text-sm">
              <code>{`import { SliderHandle } from "banhatten-ui";

// Circle only (24×24px)
<SliderHandle aria-label="Slider handle" />

// Forced state (e.g. for docs)
<SliderHandle state="hover" aria-label="Handle" />

// Value as tooltip (wrap page/section in TooltipProvider)
<SliderHandle
  valueLabel="60%"
  labelVariant="tooltip"
  labelPosition="below"
  aria-hidden
/>

// Value as label
<SliderHandle
  valueLabel="75%"
  labelVariant="label"
  labelPosition="below"
  aria-hidden
/>`}</code>
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
                  <td className="py-3 pr-4 font-mono text-xs">valueLabel</td>
                  <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-3 pr-4 font-mono text-xs">—</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="py-3 pr-4 font-mono text-xs">labelVariant</td>
                  <td className="py-3 pr-4 font-mono text-xs">&quot;tooltip&quot; | &quot;label&quot;</td>
                  <td className="py-3 pr-4 font-mono text-xs">—</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="py-3 pr-4 font-mono text-xs">labelPosition</td>
                  <td className="py-3 pr-4 font-mono text-xs">&quot;above&quot; | &quot;below&quot;</td>
                  <td className="py-3 pr-4 font-mono text-xs">&quot;below&quot;</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="py-3 pr-4 font-mono text-xs">state</td>
                  <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot; | &quot;hover&quot; | &quot;active&quot;</td>
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
            When <code>valueLabel</code> is set, the circle is <code>aria-hidden</code> (value is
            communicated by label/tooltip). When no value label, provide <code>aria-label</code> for
            the handle. Use <code>state</code> only for static display (e.g. docs); omit for
            interactive hover/active.
          </p>
        </Section>
      </div>
    </TooltipProvider>
  );
}
