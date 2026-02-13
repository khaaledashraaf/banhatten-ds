"use client";

import { useState } from "react";
import { Radio, RadioCard } from "@banhatten/ui";
import { Section } from "./section";

export function RadioDocumentation() {
  const [groupSelected, setGroupSelected] = useState<string>("a");
  const [controlledSelected, setControlledSelected] = useState<string>("option1");
  const [cardSelected, setCardSelected] = useState<string>("plan1");

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Radio buttons allow users to select a single option from a set of mutually exclusive
          choices. Three levels of composition are provided: a base Radio, Radio with label, and
          RadioCard for rich selection UI. Radio buttons must be grouped using the same{" "}
          <code className="text-primary bg-secondary rounded px-1 py-0.5 text-xs">name</code>{" "}
          prop to ensure only one can be selected at a time.
        </p>
      </div>

      {/* Base States */}
      <Section
        title="Base Radio States"
        description="The core radio indicator supports unchecked, checked, and disabled states."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Radio name="demo-states" />
            <span className="text-secondary text-xs">Unchecked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Radio name="demo-states" defaultChecked />
            <span className="text-secondary text-xs">Checked</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Radio name="demo-states" disabled />
            <span className="text-secondary text-xs">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Radio name="demo-states" disabled defaultChecked />
            <span className="text-secondary text-xs">Disabled Checked</span>
          </div>
        </div>
      </Section>

      {/* With Label */}
      <Section
        title="Radio with Label"
        description="Add a label and optional support text. Clicking the label selects the radio."
      >
        <div className="flex flex-wrap items-start gap-8">
          <Radio name="demo-label" label="Option 1" />
          <Radio
            name="demo-label"
            label="Option 2"
            supportText="This option includes additional features."
          />
          <Radio name="demo-label" label="Disabled option" disabled />
          <Radio name="demo-label" label="Checked & disabled" defaultChecked disabled />
        </div>
      </Section>

      {/* Radio Position */}
      <Section
        title="Radio Position"
        description="The radio can be placed before (leading) or after (trailing) the label."
      >
        <div className="flex flex-wrap items-start gap-8">
          <Radio
            name="demo-position"
            label="Leading (default)"
            supportText="Radio appears first."
            radioPosition="leading"
          />
          <Radio
            name="demo-position"
            label="Trailing"
            supportText="Radio appears after the label."
            radioPosition="trailing"
          />
        </div>
      </Section>

      {/* Radio Group */}
      <Section
        title="Radio Group"
        description="Use the same name prop to group radios. Only one option can be selected at a time."
      >
        <div className="flex flex-col space-y-4">
          <Radio
            name="demo-group"
            label="Option A"
            value="a"
            checked={groupSelected === "a"}
            onChange={() => setGroupSelected("a")}
          />
          <Radio
            name="demo-group"
            label="Option B"
            value="b"
            checked={groupSelected === "b"}
            onChange={() => setGroupSelected("b")}
          />
          <Radio
            name="demo-group"
            label="Option C"
            value="c"
            checked={groupSelected === "c"}
            onChange={() => setGroupSelected("c")}
          />
          <p className="text-tertiary text-xs">
            Selected: <span className="font-mono">{groupSelected}</span>
          </p>
        </div>
      </Section>

      {/* Controlled */}
      <Section
        title="Controlled Radio"
        description="Control the selected value programmatically using checked and onChange props."
      >
        <div className="flex flex-col space-y-4">
          <Radio
            name="demo-controlled"
            label="Controlled option 1"
            value="option1"
            checked={controlledSelected === "option1"}
            onChange={() => setControlledSelected("option1")}
          />
          <Radio
            name="demo-controlled"
            label="Controlled option 2"
            value="option2"
            checked={controlledSelected === "option2"}
            onChange={() => setControlledSelected("option2")}
          />
          <p className="text-tertiary text-xs">
            Current selection: <span className="font-mono">{controlledSelected}</span>
          </p>
        </div>
      </Section>

      {/* RadioCard — Trailing */}
      <Section
        title="RadioCard"
        description="A rich selection card with optional icon and description. Comes in trailing (default) and leading radio positions."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <RadioCard
            name="demo-card"
            label="With Icon"
            description="Card with a leading icon, label, and description."
            icon="person"
            iconFilled
            value="with-icon"
            checked={cardSelected === "with-icon"}
            onChange={() => setCardSelected("with-icon")}
          />
          <RadioCard
            name="demo-card"
            label="Without Icon"
            description="Card with label and description only."
            value="without-icon"
            checked={cardSelected === "without-icon"}
            onChange={() => setCardSelected("without-icon")}
          />
          <RadioCard
            name="demo-card"
            label="Selected"
            description="This card is selected."
            icon="person"
            iconFilled
            value="selected"
            checked={cardSelected === "selected"}
            onChange={() => setCardSelected("selected")}
          />
          <RadioCard
            name="demo-card"
            label="Disabled"
            description="This card cannot be selected."
            icon="person"
            iconFilled
            disabled
            value="disabled"
          />
        </div>
      </Section>

      {/* RadioCard — Leading */}
      <Section
        title="RadioCard — Leading"
        description="Radio positioned on the left side of the card content."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <RadioCard
            name="demo-card-leading"
            label="Leading Radio"
            description="Radio on the left, text on the right."
            radioPosition="leading"
            value="leading1"
            checked={cardSelected === "leading1"}
            onChange={() => setCardSelected("leading1")}
          />
          <RadioCard
            name="demo-card-leading"
            label="Leading Selected"
            description="Selected with leading position."
            radioPosition="leading"
            value="leading2"
            checked={cardSelected === "leading2"}
            onChange={() => setCardSelected("leading2")}
          />
          <RadioCard
            name="demo-card-leading"
            label="Label Only"
            radioPosition="leading"
            value="leading3"
            checked={cardSelected === "leading3"}
            onChange={() => setCardSelected("leading3")}
          />
          <RadioCard
            name="demo-card-leading"
            label="Label Only Selected"
            radioPosition="leading"
            value="leading4"
            checked={cardSelected === "leading4"}
            onChange={() => setCardSelected("leading4")}
          />
        </div>
      </Section>

      {/* RadioCard — Disabled States */}
      <Section
        title="RadioCard — Disabled"
        description="Disabled cards in various configurations."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <RadioCard
            name="demo-card-disabled"
            label="Disabled Unchecked"
            description="Cannot interact with this card."
            disabled
            value="disabled-unchecked"
          />
          <RadioCard
            name="demo-card-disabled"
            label="Disabled Checked"
            description="Selected but locked."
            disabled
            defaultChecked
            value="disabled-checked"
          />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Radio, RadioCard } from "@banhatten/ui";
import { useState } from "react";

// Base radio
<Radio name="group1" />
<Radio name="group1" defaultChecked />

// With label & support text
<Radio name="group1" label="Option 1" />
<Radio name="group1" label="Option 2" supportText="Description." />

// Trailing position
<Radio name="group1" label="Option" radioPosition="trailing" />

// Controlled group
const [selected, setSelected] = useState("option1");
<Radio
  name="group1"
  label="Option 1"
  value="option1"
  checked={selected === "option1"}
  onChange={() => setSelected("option1")}
/>

// Radio card
<RadioCard name="plans" label="Plan A" description="Basic features." />
<RadioCard name="plans" label="Plan B" description="Pro features." icon="star" />
<RadioCard name="plans" label="Plan C" radioPosition="leading" />`}</code>
          </pre>
        </div>
      </Section>

      {/* Props — Radio */}
      <Section title="Props — Radio">
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
                <td className="py-3 pr-4 font-mono text-xs">radioPosition</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;leading&quot; | &quot;trailing&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;leading&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">name</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  <span className="text-tertiary">required for grouping</span>
                </td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">value</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
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

      {/* Props — RadioCard */}
      <Section title="Props — RadioCard">
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
                <td className="py-3 pr-4 font-mono text-xs">radioPosition</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;leading&quot; | &quot;trailing&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;trailing&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">name</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  <span className="text-tertiary">required for grouping</span>
                </td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">value</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
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
