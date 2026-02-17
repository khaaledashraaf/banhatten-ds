"use client";

import { useState } from "react";
import {
  MenuItem,
  Avatar,
  Badge,
  Button,
} from "banhatten-ui";
import { Section } from "./section";

export function MenuItemDocumentation() {
  const [switchChecked, setSwitchChecked] = useState(true);

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Menu Item is the base row used to build menus. It supports four types (default, multiline,
          callToAction, progress), optional slots for icon left/right, avatar, badge, switch, text
          right, and CTA button. States: default, hover, disabled, active. All styling is token-only; slots
          use design-system components (Icon, Toggle, Badge, Avatar, Button, ProgressBar).
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Default type with primary label. Renders as a button with hover and focus styles."
      >
        <div className="flex flex-col gap-0 max-w-[320px] rounded-md border border-default overflow-hidden">
          <MenuItem onClick={() => {}}>Text item</MenuItem>
          <MenuItem leftIcon="add" onClick={() => {}}>
            Add item
          </MenuItem>
          <MenuItem leftIcon="settings" rightIcon="chevron_right" onClick={() => {}}>
            Settings
          </MenuItem>
        </div>
      </Section>

      {/* Types */}
      <Section
        title="Types"
        description="default: single line; multiline: primary + supporting text; callToAction: primary + supporting text + CTA button; progress: label + progress bar + value."
      >
        <div className="flex flex-col gap-0 max-w-[400px] rounded-md border border-default overflow-hidden">
          <MenuItem type="default" onClick={() => {}}>
            Default item
          </MenuItem>
          <MenuItem
            type="multiline"
            supportingText="Supporting text below"
            onClick={() => {}}
          >
            Multiline item
          </MenuItem>
          <MenuItem
            type="callToAction"
            supportingText="Upgrade to unlock."
            cta={<Button variant="secondary" size="xs">Upgrade</Button>}
            onClick={() => {}}
          >
            Call to action
          </MenuItem>
          <MenuItem
            type="progress"
            progressLabel="Storage"
            progressValue={40}
          />
        </div>
      </Section>

      {/* Slots: icon, avatar, badge, switch, text right */}
      <Section
        title="Slots (default type)"
        description="Optional left icon, avatar, badge, switch, and right text + icon. Use design-system components for avatar and badge."
      >
        <div className="flex flex-col gap-0 max-w-[400px] rounded-md border border-default overflow-hidden">
          <MenuItem
            leftIcon="add"
            avatar={<Avatar size="sm" initials="AG" aria-label="Avatar" />}
            badge={<Badge color="success" size="sm">Active</Badge>}
            showSwitch
            switchChecked={switchChecked}
            onSwitchChange={(e) => setSwitchChecked(e.target.checked)}
            textRight="View"
            rightIcon="chevron_right"
            onClick={() => {}}
          >
            Text item
          </MenuItem>
        </div>
      </Section>

      {/* Active */}
      <Section
        title="Active"
        description="Active state for the current selection (e.g. nav). Uses bg-brand-tertiary and text-brand; sets aria-current=&quot;page&quot; for accessibility."
      >
        <div className="flex flex-col gap-0 max-w-[320px] rounded-md border border-default overflow-hidden">
          <MenuItem onClick={() => {}}>Default item</MenuItem>
          <MenuItem active onClick={() => {}}>
            Active item
          </MenuItem>
          <MenuItem onClick={() => {}}>Default item</MenuItem>
        </div>
      </Section>

      {/* Disabled */}
      <Section
        title="Disabled"
        description="Disabled state: reduced opacity, no pointer events, cursor default."
      >
        <div className="flex flex-col gap-0 max-w-[320px] rounded-md border border-default overflow-hidden">
          <MenuItem disabled>Disabled item</MenuItem>
          <MenuItem
            type="multiline"
            supportingText="Supporting text"
            disabled
          >
            Disabled multiline
          </MenuItem>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { MenuItem, Avatar, Badge, Button } from "banhatten-ui";

// Basic
<MenuItem onClick={handleClick}>Text item</MenuItem>

// With icon and right chevron
<MenuItem leftIcon="settings" rightIcon="chevron_right" onClick={handleClick}>
  Settings
</MenuItem>

// Multiline
<MenuItem type="multiline" supportingText="Supporting text" onClick={handleClick}>
  Primary label
</MenuItem>

// Call to action (slot your Button)
<MenuItem
  type="callToAction"
  supportingText="Upgrade to unlock."
  cta={<Button variant="secondary" size="xs">Upgrade</Button>}
  onClick={handleClick}
>
  Feature name
</MenuItem>

// Progress (label + bar + value)
<MenuItem type="progress" progressLabel="Storage" progressValue={40} />

// With avatar, badge, switch (use Avatar/Badge from banhatten-ui)
<MenuItem
  leftIcon="add"
  avatar={<Avatar size="sm" initials="AG" aria-label="User" />}
  badge={<Badge color="success" size="sm">Active</Badge>}
  showSwitch
  switchChecked={checked}
  onSwitchChange={(e) => setChecked(e.target.checked)}
  textRight="View"
  rightIcon="chevron_right"
  onClick={handleClick}
>
  Text item
</MenuItem>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">type</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;default&quot; | &quot;multiline&quot; | &quot;callToAction&quot; | &quot;progress&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">active</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">children</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">supportingText</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">leftIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">string (Material Symbol name)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">rightIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">string (Material Symbol name)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">avatar</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">badge</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">showSwitch</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">switchChecked</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">onSwitchChange</td>
                <td className="py-3 pr-4 font-mono text-xs">(e: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">textRight</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">cta</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode (e.g. Button)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">progressLabel</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">progressValue</td>
                <td className="py-3 pr-4 font-mono text-xs">number (0–100)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">disabled, className, onClick, etc.</td>
                <td className="py-3 pr-4 font-mono text-xs">ButtonHTMLAttributes</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Root is a <code>&lt;button type=&quot;button&quot;&gt;</code> with <code>aria-disabled</code> when disabled.
          Focus-visible ring uses brand color. Switch clicks are stopped from propagating so the item does not activate when toggling.
        </p>
      </Section>
    </div>
  );
}
