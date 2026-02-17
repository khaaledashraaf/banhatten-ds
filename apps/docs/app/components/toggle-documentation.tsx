"use client";

import { useState } from "react";
import { Toggle } from "banhatten-ui";
import { Section } from "./section";

export function ToggleDocumentation() {
  const [controlled, setControlled] = useState(false);

  return (
    <div className="space-y-16">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Toggles allow users to switch between two states (on/off). The component combines both
          simple toggles and toggles with labels into a single flexible API. Supports two sizes (sm,
          md), optional icons on the thumb (check when on, close when off), and optional label with
          support text. The toggle uses role=&quot;switch&quot; for accessibility and supports both controlled
          and uncontrolled modes.
        </p>
      </div>

      {/* Base States */}
      <Section
        title="Base Toggle States"
        description="The core toggle supports on/off and disabled states."
      >
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <Toggle />
            <span className="text-secondary text-xs">Off (default)</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle defaultChecked />
            <span className="text-secondary text-xs">On</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle disabled />
            <span className="text-secondary text-xs">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle disabled defaultChecked />
            <span className="text-secondary text-xs">Disabled On</span>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Two size variants: sm (small) and md (medium, default)."
      >
        <div className="flex flex-wrap items-end gap-12">
          <div className="flex flex-col items-center gap-3">
            <Toggle size="sm" />
            <span className="text-secondary text-xs">Small (sm)</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle size="sm" defaultChecked />
            <span className="text-secondary text-xs">Small On</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle size="md" />
            <span className="text-secondary text-xs">Medium (md)</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle size="md" defaultChecked />
            <span className="text-secondary text-xs">Medium On</span>
          </div>
        </div>
      </Section>

      {/* With Icon */}
      <Section
        title="With Icon"
        description="When withIcon is true, the thumb displays a check icon when on and a close icon when off."
      >
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3">
            <Toggle withIcon />
            <span className="text-secondary text-xs">Off</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle withIcon defaultChecked />
            <span className="text-secondary text-xs">On</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle withIcon disabled />
            <span className="text-secondary text-xs">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle size="sm" withIcon />
            <span className="text-secondary text-xs">Small Off</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle size="sm" withIcon defaultChecked />
            <span className="text-secondary text-xs">Small On</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Toggle withIcon disabled defaultChecked />
            <span className="text-secondary text-xs">Disabled On</span>
          </div>
        </div>
      </Section>

      {/* With Label */}
      <Section
        title="Toggle with Label"
        description="Add a label and optional support text. Clicking the label toggles the switch. Default position is trailing (toggle appears after the label)."
      >
        <div className="space-y-6">
          <Toggle label="Enable notifications" />
          <Toggle
            label="Dark mode"
            supportText="Switch to dark theme."
          />
          <Toggle label="Disabled option" disabled />
          <Toggle label="Checked & disabled" defaultChecked disabled />
        </div>
      </Section>

      {/* Toggle Position */}
      <Section
        title="Toggle Position"
        description="The toggle can be placed before (leading) or after (trailing, default) the label."
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-default p-6">
            <p className="text-tertiary mb-4 text-xs font-medium uppercase tracking-wider">Trailing (default)</p>
            <Toggle
              label="Notifications"
              supportText="Toggle appears after the label."
              togglePosition="trailing"
            />
          </div>
          <div className="rounded-lg border border-default p-6">
            <p className="text-tertiary mb-4 text-xs font-medium uppercase tracking-wider">Leading</p>
            <Toggle
              label="Notifications"
              supportText="Toggle appears before the label."
              togglePosition="leading"
            />
          </div>
        </div>
      </Section>

      {/* Controlled */}
      <Section
        title="Controlled Mode"
        description="Use controlled mode to manage toggle state externally."
      >
        <div className="rounded-lg border border-default p-6">
          <Toggle
            label="Controlled toggle"
            supportText={`State: ${controlled ? "on" : "off"}`}
            checked={controlled}
            onChange={(e) => setControlled(e.target.checked)}
          />
          <p className="text-tertiary mt-4 text-xs">
            Click to toggle between on and off states.
          </p>
        </div>
      </Section>

      {/* All Variants Grid */}
      <Section
        title="All Variants"
        description="Combining size, icon, and label options."
      >
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="rounded-lg border border-default p-6">
            <h3 className="text-primary mb-5 text-sm font-semibold">Medium Size</h3>
            <div className="space-y-5">
              <Toggle size="md" label="Medium toggle" />
              <Toggle size="md" label="Medium with icon" withIcon />
              <Toggle size="md" label="Medium checked" defaultChecked />
              <Toggle
                size="md"
                label="Medium with support text"
                supportText="Additional context here."
              />
            </div>
          </div>
          <div className="rounded-lg border border-default p-6">
            <h3 className="text-primary mb-5 text-sm font-semibold">Small Size</h3>
            <div className="space-y-5">
              <Toggle size="sm" label="Small toggle" />
              <Toggle size="sm" label="Small with icon" withIcon />
              <Toggle size="sm" label="Small checked" defaultChecked />
              <Toggle
                size="sm"
                label="Small with support text"
                supportText="Additional context here."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-6">
          <pre className="text-primary overflow-x-auto text-sm leading-relaxed">
            <code>{`import { Toggle } from "banhatten-ui";

// Base toggle
<Toggle />
<Toggle defaultChecked />

// With label & support text
<Toggle label="Enable feature" />
<Toggle label="Dark mode" supportText="Switch theme." />

// Sizes
<Toggle size="sm" />
<Toggle size="md" />

// With icon
<Toggle withIcon />
<Toggle withIcon defaultChecked />

// Toggle position
<Toggle label="Option" togglePosition="leading" />
<Toggle label="Option" togglePosition="trailing" />

// Controlled
const [enabled, setEnabled] = useState(false);
<Toggle checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />`}</code>
          </pre>
        </div>
      </Section>

      {/* Props */}
      <Section title="Props">
        <div className="overflow-x-auto rounded-lg border border-default">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-default bg-secondary">
                <th className="text-primary px-5 py-3.5 font-semibold">Prop</th>
                <th className="text-primary px-5 py-3.5 font-semibold">Type</th>
                <th className="text-primary px-5 py-3.5 font-semibold">Default</th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">label</td>
                <td className="px-5 py-3.5 font-mono text-xs">string</td>
                <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">supportText</td>
                <td className="px-5 py-3.5 font-mono text-xs">string</td>
                <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">togglePosition</td>
                <td className="px-5 py-3.5 font-mono text-xs">&quot;leading&quot; | &quot;trailing&quot;</td>
                <td className="px-5 py-3.5 font-mono text-xs">&quot;trailing&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">size</td>
                <td className="px-5 py-3.5 font-mono text-xs">&quot;sm&quot; | &quot;md&quot;</td>
                <td className="px-5 py-3.5 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">withIcon</td>
                <td className="px-5 py-3.5 font-mono text-xs">boolean</td>
                <td className="px-5 py-3.5 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">checked</td>
                <td className="px-5 py-3.5 font-mono text-xs">boolean</td>
                <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="px-5 py-3.5 font-mono text-xs">defaultChecked</td>
                <td className="px-5 py-3.5 font-mono text-xs">boolean</td>
                <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-mono text-xs">disabled</td>
                <td className="px-5 py-3.5 font-mono text-xs">boolean</td>
                <td className="px-5 py-3.5 font-mono text-xs">false</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-5 text-xs">
          Toggle also accepts all standard HTML input attributes (except <code>size</code>, <code>type</code>, and <code>children</code>).
        </p>
      </Section>
    </div>
  );
}
