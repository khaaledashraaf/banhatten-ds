"use client";

import * as React from "react";
import { useState } from "react";
import { Dropdown, DropdownItem, DropdownGroup, MenuHeading } from "banhatten-ui";
import { Section } from "./section";

const COUNTRY_OPTIONS = [
  { value: "us", label: "United States", leftIcon: "flag" },
  { value: "uk", label: "United Kingdom", leftIcon: "flag" },
  { value: "ca", label: "Canada", leftIcon: "flag" },
  { value: "au", label: "Australia", leftIcon: "flag" },
  { value: "de", label: "Germany", leftIcon: "flag" },
  { value: "fr", label: "France", leftIcon: "flag" },
];

const STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "inactive", label: "Inactive" },
  { value: "archived", label: "Archived", disabled: true },
];

const CATEGORY_OPTIONS = [
  { value: "electronics", label: "Electronics", leftIcon: "devices" },
  { value: "clothing", label: "Clothing", leftIcon: "checkroom" },
  { value: "books", label: "Books", leftIcon: "menu_book" },
  { value: "home", label: "Home & Garden", leftIcon: "home" },
  { value: "sports", label: "Sports", leftIcon: "sports_soccer" },
];

export function DropdownDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          The Dropdown component is a complete selection interface that combines a trigger,
          positioned popover, and menu. It supports single and multi-select modes, custom options,
          and grouped items. Uses Radix Popover for positioning and the existing Menu components internally.
        </p>
      </div>

      {/* Interactive Playground */}
      <Section
        title="Interactive Playground"
        description="Try the dropdown component with different configurations."
      >
        <InteractiveDropdownPlayground />
      </Section>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="A simple dropdown with an array of options."
      >
        <BasicDropdownExample />
      </Section>

      {/* Single Select */}
      <Section
        title="Single Select"
        description="Default mode - selecting an option closes the dropdown and updates the value."
      >
        <SingleSelectExample />
      </Section>

      {/* Multi Select */}
      <Section
        title="Multi Select"
        description="Enable multiple prop to allow selecting multiple options. The dropdown stays open for additional selections."
      >
        <MultiSelectExample />
      </Section>

      {/* With Icons */}
      <Section
        title="With Icons"
        description="Options can include left icons using Material Symbol names."
      >
        <IconsExample />
      </Section>

      {/* Custom Children */}
      <Section
        title="Custom Children"
        description="For advanced layouts, use DropdownItem and DropdownGroup as children instead of the options prop."
      >
        <CustomChildrenExample />
      </Section>

      {/* Grouped Options */}
      <Section
        title="Grouped Options"
        description="Group related options with headings using DropdownGroup."
      >
        <GroupedOptionsExample />
      </Section>

      {/* Disabled Options */}
      <Section
        title="Disabled Options"
        description="Individual options can be disabled while keeping others selectable."
      >
        <DisabledOptionsExample />
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Three trigger sizes: sm (36px), md (40px), and lg (44px)."
      >
        <SizesExample />
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Dropdown, DropdownItem, DropdownGroup, MenuHeading } from "banhatten-ui";

// Simple options array
const options = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
];

// Basic single select
const [country, setCountry] = useState<string>();
<Dropdown
  label="Country"
  placeholder="Select a country"
  options={options}
  value={country}
  onValueChange={(v) => setCountry(v as string)}
/>

// Multi-select
const [tags, setTags] = useState<string[]>([]);
<Dropdown
  label="Tags"
  placeholder="Select tags"
  options={tagOptions}
  value={tags}
  onValueChange={(v) => setTags(v as string[])}
  multiple
/>

// With icons
const optionsWithIcons = [
  { value: "electronics", label: "Electronics", leftIcon: "devices" },
  { value: "clothing", label: "Clothing", leftIcon: "checkroom" },
];
<Dropdown
  label="Category"
  options={optionsWithIcons}
  value={category}
  onValueChange={setCategory}
  leftIcon="category"
/>

// Custom children for advanced layouts
<Dropdown
  label="Actions"
  placeholder="Select action"
  value={action}
  onValueChange={setAction}
>
  <DropdownGroup heading={<MenuHeading>File</MenuHeading>}>
    <DropdownItem value="new">New File</DropdownItem>
    <DropdownItem value="open">Open...</DropdownItem>
    <DropdownItem value="save">Save</DropdownItem>
  </DropdownGroup>
  <DropdownGroup heading={<MenuHeading>Edit</MenuHeading>}>
    <DropdownItem value="undo">Undo</DropdownItem>
    <DropdownItem value="redo">Redo</DropdownItem>
  </DropdownGroup>
</Dropdown>

// Disabled state
<Dropdown
  label="Locked"
  placeholder="Cannot change"
  options={options}
  disabled
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
                <td className="py-3 pr-4 font-mono text-xs">options</td>
                <td className="py-3 pr-4 font-mono text-xs">DropdownOption[]</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">value</td>
                <td className="py-3 pr-4 font-mono text-xs">string | string[]</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">onValueChange</td>
                <td className="py-3 pr-4 font-mono text-xs">(value: string | string[]) =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">multiple</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">children</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">displayValue</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">menuWidth</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;trigger&quot; | &quot;auto&quot; | number</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;trigger&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">maxHeight</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">300</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">align</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">sideOffset</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">4</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">placeholder</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;Select an option&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">helperText</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">errorMessage</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">leftIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
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
        <p className="text-tertiary mt-4 text-xs">
          Dropdown inherits all DropdownInput props except <code>value</code>, <code>open</code>,{" "}
          <code>onOpenChange</code>, <code>displayValue</code>, <code>showIndicator</code>, and <code>indicatorCount</code>.
        </p>
      </Section>

      {/* DropdownOption Type */}
      <Section title="DropdownOption Type">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`interface DropdownOption {
  value: string;      // Unique identifier
  label: string;      // Display text
  leftIcon?: string;  // Material Symbol name
  disabled?: boolean; // Disable this option
}`}</code>
          </pre>
        </div>
      </Section>

      {/* Subcomponents */}
      <Section title="Subcomponents">
        <div className="space-y-4">
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-primary mb-2 font-medium">DropdownItem</p>
            <p className="text-secondary text-sm mb-2">Individual selectable option for custom layouts.</p>
            <pre className="text-primary overflow-x-auto text-xs">
              <code>{`<DropdownItem
  value="option1"        // Required unique value
  selected={true}        // Whether selected
  onSelect={handleSelect}// Selection callback
  leftIcon="star"        // Material Symbol
  disabled={false}       // Disable option
  multiple={false}       // Shows checkbox if true
>
  Option Label
</DropdownItem>`}</code>
            </pre>
          </div>
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-primary mb-2 font-medium">DropdownGroup</p>
            <p className="text-secondary text-sm mb-2">Groups options with an optional heading.</p>
            <pre className="text-primary overflow-x-auto text-xs">
              <code>{`<DropdownGroup
  heading={<MenuHeading>Section</MenuHeading>}
  headingId="section-id" // For aria-labelledby
>
  <DropdownItem value="a">Option A</DropdownItem>
  <DropdownItem value="b">Option B</DropdownItem>
</DropdownGroup>`}</code>
            </pre>
          </div>
        </div>
      </Section>
    </div>
  );
}

function InteractiveDropdownPlayground() {
  const [value, setValue] = useState<string | string[]>();
  const [multiple, setMultiple] = useState(false);
  const [hasIcon, setHasIcon] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const handleValueChange = (v: string | string[]) => {
    setValue(v);
  };

  const handleMultipleChange = (checked: boolean) => {
    setMultiple(checked);
    setValue(undefined);
  };

  return (
    <div className="space-y-8">
      <div className="bg-secondary rounded-lg p-6">
        <div className="w-full max-w-[320px]">
          <Dropdown
            label="Select Country"
            placeholder="Choose a country"
            options={COUNTRY_OPTIONS}
            value={value}
            onValueChange={handleValueChange}
            multiple={multiple}
            size={size}
            leftIcon={hasIcon ? "public" : undefined}
            helperText="Select your country of residence"
          />
        </div>
        {value && (
          <p className="text-secondary mt-4 text-sm">
            Selected: <code className="text-primary">{JSON.stringify(value)}</code>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <label className="text-primary block text-sm font-medium">Size</label>
          <div className="flex gap-3">
            {(["sm", "md", "lg"] as const).map((s) => (
              <label key={s} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="playground-size"
                  value={s}
                  checked={size === s}
                  onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")}
                  className="h-4 w-4 cursor-pointer accent-brand"
                />
                <span className="text-secondary text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={multiple}
              onChange={(e) => handleMultipleChange(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Multi-select</span>
          </label>
        </div>

        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasIcon}
              onChange={(e) => setHasIcon(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Left Icon</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function BasicDropdownExample() {
  const [value, setValue] = useState<string>();

  return (
    <div className="w-[320px]">
      <Dropdown
        label="Status"
        placeholder="Select a status"
        options={STATUS_OPTIONS.filter(o => !o.disabled)}
        value={value}
        onValueChange={(v) => setValue(v as string)}
        helperText="Choose the current status"
      />
    </div>
  );
}

function SingleSelectExample() {
  const [value, setValue] = useState<string>();

  return (
    <div className="w-[320px] space-y-4">
      <Dropdown
        label="Country"
        placeholder="Select a country"
        options={COUNTRY_OPTIONS}
        value={value}
        onValueChange={(v) => setValue(v as string)}
      />
      {value && (
        <p className="text-secondary text-sm">
          Selected: <code className="text-primary">{value}</code>
        </p>
      )}
    </div>
  );
}

function MultiSelectExample() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="w-[320px] space-y-4">
      <Dropdown
        label="Categories"
        placeholder="Select categories"
        options={CATEGORY_OPTIONS}
        value={values}
        onValueChange={(v) => setValues(v as string[])}
        multiple
      />
      {values.length > 0 && (
        <p className="text-secondary text-sm">
          Selected: <code className="text-primary">{JSON.stringify(values)}</code>
        </p>
      )}
    </div>
  );
}

function IconsExample() {
  const [value, setValue] = useState<string>();

  return (
    <div className="w-[320px]">
      <Dropdown
        label="Category"
        placeholder="Select a category"
        options={CATEGORY_OPTIONS}
        value={value}
        onValueChange={(v) => setValue(v as string)}
        leftIcon="category"
      />
    </div>
  );
}

function CustomChildrenExample() {
  const [value, setValue] = useState<string>();

  const handleSelect = (v: string) => {
    setValue(v);
  };

  return (
    <div className="w-[320px]">
      <Dropdown
        label="Action"
        placeholder="Select an action"
        value={value}
        onValueChange={(v) => setValue(v as string)}
      >
        <DropdownGroup>
          <DropdownItem
            value="new"
            selected={value === "new"}
            onSelect={handleSelect}
            leftIcon="add"
          >
            New File
          </DropdownItem>
          <DropdownItem
            value="open"
            selected={value === "open"}
            onSelect={handleSelect}
            leftIcon="folder_open"
          >
            Open...
          </DropdownItem>
          <DropdownItem
            value="save"
            selected={value === "save"}
            onSelect={handleSelect}
            leftIcon="save"
          >
            Save
          </DropdownItem>
          <DropdownItem
            value="export"
            selected={value === "export"}
            onSelect={handleSelect}
            leftIcon="download"
          >
            Export
          </DropdownItem>
        </DropdownGroup>
      </Dropdown>
    </div>
  );
}

function GroupedOptionsExample() {
  const [value, setValue] = useState<string>();

  const handleSelect = (v: string) => {
    setValue(v);
  };

  return (
    <div className="w-[320px]">
      <Dropdown
        label="Command"
        placeholder="Select a command"
        value={value}
        onValueChange={(v) => setValue(v as string)}
      >
        <DropdownGroup heading={<MenuHeading>File</MenuHeading>}>
          <DropdownItem value="new" selected={value === "new"} onSelect={handleSelect}>
            New
          </DropdownItem>
          <DropdownItem value="open" selected={value === "open"} onSelect={handleSelect}>
            Open
          </DropdownItem>
          <DropdownItem value="save" selected={value === "save"} onSelect={handleSelect}>
            Save
          </DropdownItem>
        </DropdownGroup>
        <DropdownGroup heading={<MenuHeading>Edit</MenuHeading>}>
          <DropdownItem value="undo" selected={value === "undo"} onSelect={handleSelect}>
            Undo
          </DropdownItem>
          <DropdownItem value="redo" selected={value === "redo"} onSelect={handleSelect}>
            Redo
          </DropdownItem>
          <DropdownItem value="cut" selected={value === "cut"} onSelect={handleSelect}>
            Cut
          </DropdownItem>
          <DropdownItem value="copy" selected={value === "copy"} onSelect={handleSelect}>
            Copy
          </DropdownItem>
        </DropdownGroup>
      </Dropdown>
    </div>
  );
}

function DisabledOptionsExample() {
  const [value, setValue] = useState<string>();

  return (
    <div className="w-[320px]">
      <Dropdown
        label="Status"
        placeholder="Select a status"
        options={STATUS_OPTIONS}
        value={value}
        onValueChange={(v) => setValue(v as string)}
        helperText="Archived is disabled"
      />
    </div>
  );
}

function SizesExample() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="w-[320px] space-y-4">
      {sizes.map((size) => (
        <Dropdown
          key={size}
          label={`Size ${size}`}
          placeholder="Select option"
          options={STATUS_OPTIONS.filter(o => !o.disabled)}
          size={size}
        />
      ))}
    </div>
  );
}
