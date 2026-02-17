"use client";

import { useState } from "react";
import { Checkbox, CheckboxCard } from "banhatten-ui";
import { Section } from "./section";

export function CheckboxDocumentation() {
  const [controlled, setControlled] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Checkboxes allow users to select one or more items from a set, or toggle a single
          option on/off. Three levels of composition are provided: a base Checkbox, Checkbox
          with label, and CheckboxCard for rich selection UI.
        </p>
      </div>

      {/* Base States */}
      <Section
        title="Base Checkbox States"
        description="The core checkbox indicator supports unchecked, checked, indeterminate, and disabled states."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Checkbox />
            <span className="text-secondary text-xs">Unchecked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox defaultChecked />
            <span className="text-secondary text-xs">Checked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox indeterminate checked onChange={() => {}} />
            <span className="text-secondary text-xs">Indeterminate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox disabled />
            <span className="text-secondary text-xs">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox disabled defaultChecked />
            <span className="text-secondary text-xs">Disabled Checked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Checkbox disabled indeterminate checked onChange={() => {}} />
            <span className="text-secondary text-xs">Disabled Indeterminate</span>
          </div>
        </div>
      </Section>

      {/* With Label */}
      <Section
        title="Checkbox with Label"
        description="Add a label and optional support text. Clicking the label toggles the checkbox."
      >
        <div className="flex flex-wrap items-start gap-8">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Subscribe to newsletter" supportText="We&apos;ll send you weekly updates." />
          <Checkbox label="Disabled option" disabled />
          <Checkbox label="Checked & disabled" defaultChecked disabled />
        </div>
      </Section>

      {/* Checkbox Position */}
      <Section
        title="Checkbox Position"
        description="The checkbox can be placed before (leading) or after (trailing) the label."
      >
        <div className="flex flex-wrap items-start gap-8">
          <Checkbox
            label="Leading (default)"
            supportText="Checkbox appears first."
            checkboxPosition="leading"
          />
          <Checkbox
            label="Trailing"
            supportText="Checkbox appears after the label."
            checkboxPosition="trailing"
          />
        </div>
      </Section>

      {/* Controlled / Indeterminate */}
      <Section
        title="Controlled & Indeterminate"
        description="Controlled mode with indeterminate toggle. Click to cycle through states."
      >
        <div className="space-y-4">
          <Checkbox
            label="Controlled checkbox"
            supportText={
              indeterminate
                ? "State: indeterminate"
                : controlled
                  ? "State: checked"
                  : "State: unchecked"
            }
            checked={controlled}
            indeterminate={indeterminate}
            onChange={() => {
              if (indeterminate) {
                setIndeterminate(false);
                setControlled(true);
              } else if (controlled) {
                setControlled(false);
              } else {
                setIndeterminate(true);
                setControlled(true);
              }
            }}
          />
          <p className="text-tertiary text-xs">
            Click to cycle: indeterminate → checked → unchecked → indeterminate
          </p>
        </div>
      </Section>

      {/* CheckboxCard — Trailing */}
      <Section
        title="CheckboxCard"
        description="A rich selection card with optional icon and description. Comes in trailing (default) and leading checkbox positions."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <CheckboxCard
            label="With Icon"
            description="Card with a leading icon, label, and description."
            icon="person"
            iconFilled
          />
          <CheckboxCard
            label="Without Icon"
            description="Card with label and description only."
          />
          <CheckboxCard
            label="Checked"
            description="This card is selected."
            icon="person"
            iconFilled
            defaultChecked
          />
          <CheckboxCard
            label="Disabled"
            description="This card cannot be selected."
            icon="person"
            iconFilled
            disabled
          />
        </div>
      </Section>

      {/* CheckboxCard — Leading */}
      <Section
        title="CheckboxCard — Leading"
        description="Checkbox positioned on the left side of the card content."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <CheckboxCard
            label="Leading Checkbox"
            description="Checkbox on the left, text on the right."
            checkboxPosition="leading"
          />
          <CheckboxCard
            label="Leading Checked"
            description="Selected with leading position."
            checkboxPosition="leading"
            defaultChecked
          />
          <CheckboxCard
            label="Label Only"
            checkboxPosition="leading"
          />
          <CheckboxCard
            label="Label Only Checked"
            checkboxPosition="leading"
            defaultChecked
          />
        </div>
      </Section>

      {/* CheckboxCard — Disabled States */}
      <Section
        title="CheckboxCard — Disabled"
        description="Disabled cards in various configurations."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <CheckboxCard
            label="Disabled Unchecked"
            description="Cannot interact with this card."
            disabled
          />
          <CheckboxCard
            label="Disabled Checked"
            description="Selected but locked."
            disabled
            defaultChecked
          />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Checkbox, CheckboxCard } from "banhatten-ui";

// Base checkbox
<Checkbox />
<Checkbox defaultChecked />
<Checkbox indeterminate checked onChange={handleChange} />

// With label & support text
<Checkbox label="Accept terms" />
<Checkbox label="Subscribe" supportText="Weekly updates." />

// Trailing position
<Checkbox label="Option" checkboxPosition="trailing" />

// Checkbox card
<CheckboxCard label="Plan A" description="Basic features." />
<CheckboxCard label="Plan B" description="Pro features." icon="star" />
<CheckboxCard label="Plan C" checkboxPosition="leading" />`}</code>
          </pre>
        </div>
      </Section>

      {/* Props — Checkbox */}
      <Section title="Props — Checkbox">
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
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">supportText</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">checkboxPosition</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;leading&quot; | &quot;trailing&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;leading&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">indeterminate</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">checked</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Props — CheckboxCard */}
      <Section title="Props — CheckboxCard">
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
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">required</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">description</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
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
                <td className="py-3 pr-4 font-mono text-xs">checkboxPosition</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;leading&quot; | &quot;trailing&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;trailing&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">indeterminate</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
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
