"use client";

import { useState } from "react";
import { Slider, TooltipProvider } from "@banhatten/ui";
import { Section } from "./section";

export function SliderDocumentation() {
  const [value, setValue] = useState(60);
  const [range, setRange] = useState<[number, number]>([25, 75]);

  return (
    <TooltipProvider>
      <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Slider lets users select a value (or range) by moving one or two handles along a track.
          Variant <code>single</code> (default): one handle, fill from 0 to value; variant{" "}
          <code>double</code>: two handles, fill between start and end.
          Uses Progress Bar (large size) as the track. Supports controlled or uncontrolled mode,
          optional label and helper text, and optional value on each handle (tooltip or label, above
          or below). Use <code>formatValue</code> to customize display (default: rounded with &quot;%&quot;).
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Uncontrolled (defaultValue) or controlled (value + onChange). Default range 0–100."
      >
        <div className="space-y-6 max-w-[400px]">
          <Slider defaultValue={40} aria-label="Volume" />
          <Slider value={value} onChange={setValue} aria-label="Progress" />
          <p className="text-secondary text-sm">Controlled value: {value}</p>
        </div>
      </Section>

      {/* Value on handle: tooltip vs label, above vs below */}
      <Section
        title="Value on handle"
        description="Show the current value on the handle: tooltip (on hover) or label (always visible), above or below."
      >
        <div className="space-y-8 max-w-[400px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">No value on handle</p>
            <Slider defaultValue={30} aria-label="Slider" />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Tooltip below</p>
            <Slider
              defaultValue={60}
              valueLabelVariant="tooltip"
              valueLabelPosition="below"
              aria-label="Slider"
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Tooltip above</p>
            <Slider
              defaultValue={60}
              valueLabelVariant="tooltip"
              valueLabelPosition="above"
              aria-label="Slider"
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Label below</p>
            <Slider
              defaultValue={75}
              valueLabelVariant="label"
              valueLabelPosition="below"
              aria-label="Slider"
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Label above</p>
            <Slider
              defaultValue={25}
              valueLabelVariant="label"
              valueLabelPosition="above"
              aria-label="Slider"
            />
          </div>
        </div>
      </Section>

      {/* Label, helper, formatValue */}
      <Section
        title="Label, helper text, formatValue"
        description="Optional label above (with info icon), helper text below, and custom value formatter."
      >
        <div className="space-y-8 max-w-[400px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Label + helper</p>
            <Slider
              defaultValue={50}
              label="Volume"
              showLabelInfoIcon
              helperText="Adjust the volume level."
              aria-label="Volume"
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Custom format (e.g. dB)</p>
            <Slider
              defaultValue={0}
              min={-12}
              max={12}
              step={1}
              valueLabelVariant="label"
              valueLabelPosition="below"
              formatValue={(v) => `${v} dB`}
              aria-label="Gain"
            />
          </div>
        </div>
      </Section>

      {/* Double-node (range) */}
      <Section
        title="Double-node (range)"
        description="variant='double': two handles, value/defaultValue as [start, end], onChange([start, end]). Fill between handles; track click moves the nearer handle."
      >
        <div className="space-y-6 max-w-[400px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Uncontrolled range</p>
            <Slider
              variant="double"
              defaultValue={[25, 75]}
              aria-label="Range"
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Controlled range</p>
            <Slider
              variant="double"
              value={range}
              onChange={setRange}
              valueLabelVariant="label"
              valueLabelPosition="below"
              aria-label="Range"
            />
            <p className="text-secondary text-sm mt-2">Range: {range[0]}% – {range[1]}%</p>
          </div>
        </div>
      </Section>

      {/* Min, max, step */}
      <Section
        title="Min, max, step"
        description="Custom range and step. Default: min 0, max 100, step 1."
      >
        <div className="space-y-6 max-w-[400px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">0–10, step 1</p>
            <Slider defaultValue={5} min={0} max={10} aria-label="Rating" />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">0–100, step 10</p>
            <Slider defaultValue={50} min={0} max={100} step={10} aria-label="Percent" />
          </div>
        </div>
      </Section>

      {/* Disabled */}
      <Section title="Disabled" description="Disabled sliders are not interactive.">
        <div className="max-w-[400px]">
          <Slider defaultValue={60} disabled aria-label="Disabled" />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Slider } from "@banhatten/ui";

// Basic (uncontrolled, 0–100)
<Slider defaultValue={40} aria-label="Volume" />

// Controlled
<Slider value={value} onChange={setValue} aria-label="Progress" />

// Value on handle: tooltip or label, above/below
<Slider
  defaultValue={60}
  valueLabelVariant="tooltip"
  valueLabelPosition="below"
  aria-label="Slider"
/>

// Double-node range
<Slider
  variant="double"
  defaultValue={[25, 75]}
  value={range}
  onChange={setRange}
  aria-label="Range"
/>

// Label, helper, custom format
<Slider
  defaultValue={0}
  min={-12}
  max={12}
  formatValue={(v) => \`\${v} dB\`}
  label="Gain"
  helperText="Adjust gain."
  valueLabelVariant="label"
  aria-label="Gain"
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
                <td className="py-3 pr-4 font-mono text-xs">variant</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;single&quot; | &quot;double&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;single&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">value</td>
                <td className="py-3 pr-4 font-mono text-xs">number (single) | [number, number] (double)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">defaultValue</td>
                <td className="py-3 pr-4 font-mono text-xs">number (single) | [number, number] (double)</td>
                <td className="py-3 pr-4 font-mono text-xs">0 (single) / [min, max] (double)</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">onChange</td>
                <td className="py-3 pr-4 font-mono text-xs">(value: number) or (value: [number, number]) =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">min</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">0</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">max</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">100</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">step</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">1</td>
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
                <td className="py-3 pr-4 font-mono text-xs">valueLabelVariant</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;tooltip&quot; | &quot;label&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">valueLabelPosition</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;above&quot; | &quot;below&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;below&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">formatValue</td>
                <td className="py-3 pr-4 font-mono text-xs">(value: number) =&gt; string</td>
                <td className="py-3 pr-4 font-mono text-xs">round + &quot;%&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
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
          Single: one hidden <code>input type=&quot;range&quot;</code> for keyboard and track. Double: two sr-only
          range inputs for keyboard; pointer interaction via handles and track overlay. All use{" "}
          <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>,{" "}
          <code>aria-valuetext</code>. Provide <code>aria-label</code> when there is no visible label.
        </p>
      </Section>
      </div>
    </TooltipProvider>
  );
}
