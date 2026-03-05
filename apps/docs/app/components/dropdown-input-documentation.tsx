"use client";

import * as React from "react";
import { useState } from "react";
import { DropdownInput } from "banhatten-ui";
import { Section } from "./section";

export function DropdownInputDocumentation() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Dropdown inputs are trigger components for selection interfaces. They display
          the current selection and toggle a dropdown menu. Supports labels, helper text,
          error states, selection indicators, and left icons.
        </p>
      </div>

      {/* Interactive Playground */}
      <Section
        title="Interactive Playground"
        description="Customize the dropdown input component below by adjusting the controls."
      >
        <InteractiveDropdownPlayground />
      </Section>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="A simple dropdown input with label and placeholder."
      >
        <div className="w-[320px]">
          <DropdownInput
            label="Country"
            placeholder="Select a country"
            helperText="Choose your country of residence."
          />
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Three sizes to accommodate different contexts: sm (36px), md (40px), and lg (44px)."
      >
        <div className="w-[320px] space-y-4">
          {sizes.map((size) => (
            <DropdownInput
              key={size}
              label={`Size ${size}`}
              placeholder="Select an option"
              size={size}
              leftIcon="category"
            />
          ))}
        </div>
      </Section>

      {/* States */}
      <Section
        title="States"
        description="Dropdown inputs have placeholder, filled, focus, disabled, and error states."
      >
        <div className="w-[320px] space-y-4">
          <DropdownInput
            label="Placeholder"
            placeholder="Select an option"
            helperText="This is helper text"
          />
          <DropdownInput
            label="Filled"
            placeholder="Select an option"
            value="United States"
            displayValue="United States"
            helperText="This is helper text"
          />
          <DropdownInput
            label="Focus State"
            placeholder="Select an option"
            open
            helperText="Showing focus ring"
          />
          <DropdownInput
            label="Disabled"
            placeholder="Select an option"
            disabled
            helperText="This field is disabled"
          />
          <DropdownInput
            label="Error State"
            placeholder="Select an option"
            errorMessage="Please select an option"
          />
        </div>
      </Section>

      {/* With Selection Indicator */}
      <Section
        title="Selection Indicator"
        description="Show a badge indicating how many items are selected. Useful for multi-select dropdowns."
      >
        <div className="w-[320px] space-y-4">
          <DropdownInput
            label="Single Selection"
            placeholder="Select users"
            value={["John"]}
            displayValue="John Doe"
            showIndicator
            indicatorCount={1}
            leftIcon="person"
          />
          <DropdownInput
            label="Multiple Selections"
            placeholder="Select users"
            value={["John", "Jane", "Bob"]}
            displayValue="3 users selected"
            showIndicator
            indicatorCount={3}
            leftIcon="group"
          />
          <DropdownInput
            label="Many Selections"
            placeholder="Select tags"
            value={["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10", "tag11", "tag12"]}
            displayValue="12 tags selected"
            showIndicator
            indicatorCount={12}
            leftIcon="label"
          />
        </div>
      </Section>

      {/* With Icons */}
      <Section
        title="Icons"
        description="Dropdown inputs can display a left icon using Material Symbols."
      >
        <div className="w-[320px] space-y-4">
          <DropdownInput
            label="Select User"
            placeholder="Choose a user"
            leftIcon="account_circle"
          />
          <DropdownInput
            label="Select Country"
            placeholder="Choose a country"
            leftIcon="public"
          />
          <DropdownInput
            label="Select Category"
            placeholder="Choose a category"
            leftIcon="category"
          />
          <DropdownInput
            label="Select Status"
            placeholder="Choose a status"
            leftIcon="radio_button_checked"
          />
        </div>
      </Section>

      {/* Labels */}
      <Section
        title="Labels"
        description="Labels can include optional indicators and are properly associated with the trigger for accessibility."
      >
        <div className="w-[320px] space-y-4">
          <DropdownInput
            label="Required Field"
            placeholder="Select an option"
          />
          <DropdownInput
            label="Optional Field"
            optional
            placeholder="Select an option"
          />
          <DropdownInput placeholder="No label" helperText="Dropdown without a label" />
        </div>
      </Section>

      {/* Error States */}
      <Section
        title="Error States"
        description="Error messages override helper text and provide visual feedback with red borders and text."
      >
        <div className="w-[320px] space-y-4">
          <DropdownInput
            label="Country"
            placeholder="Select a country"
            errorMessage="Please select a country"
          />
          <DropdownInput
            label="Category"
            placeholder="Select a category"
            value="invalid"
            displayValue="Invalid selection"
            errorMessage="This category is no longer available"
            leftIcon="category"
          />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { DropdownInput } from "banhatten-ui";

// Basic dropdown
<DropdownInput label="Country" placeholder="Select a country" />

// With helper text
<DropdownInput
  label="Category"
  placeholder="Select a category"
  helperText="Choose the most relevant category"
/>

// With value
<DropdownInput
  label="Status"
  placeholder="Select a status"
  value="active"
  displayValue="Active"
/>

// Multi-select with indicator
<DropdownInput
  label="Tags"
  placeholder="Select tags"
  value={["tag1", "tag2", "tag3"]}
  displayValue="3 tags selected"
  showIndicator
  indicatorCount={3}
/>

// With left icon
<DropdownInput
  label="User"
  placeholder="Select a user"
  leftIcon="account_circle"
/>

// Error state
<DropdownInput
  label="Country"
  placeholder="Select a country"
  errorMessage="Please select a country"
/>

// Controlled open state
const [open, setOpen] = useState(false);
<DropdownInput
  label="Options"
  placeholder="Select an option"
  open={open}
  onOpenChange={setOpen}
/>

// Optional label
<DropdownInput
  label="Preferred Contact"
  optional
  placeholder="Select preferred contact method"
/>

// Disabled
<DropdownInput
  label="Locked Field"
  placeholder="Cannot be changed"
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
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">optional</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">placeholder</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;Select an option&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">value</td>
                <td className="py-3 pr-4 font-mono text-xs">string | string[]</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">displayValue</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">open</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">onOpenChange</td>
                <td className="py-3 pr-4 font-mono text-xs">(open: boolean) =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">showIndicator</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">indicatorCount</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
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
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">leftElement</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconVariant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;outlined&quot; | &quot;rounded&quot; | &quot;sharp&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconFilled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
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
          DropdownInput also accepts all standard HTML button attributes except{" "}
          <code>size</code> and <code>value</code>.
        </p>
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <div className="bg-secondary rounded-lg p-4">
          <ul className="text-secondary space-y-2 text-sm list-disc list-inside">
            <li>
              <code className="text-primary">aria-haspopup=&quot;listbox&quot;</code> indicates the trigger opens a selection menu
            </li>
            <li>
              <code className="text-primary">aria-expanded</code> reflects the open state
            </li>
            <li>
              <code className="text-primary">aria-invalid</code> is set when there&apos;s an error message
            </li>
            <li>
              <code className="text-primary">aria-describedby</code> links to helper text or error message
            </li>
            <li>Label is associated via <code className="text-primary">htmlFor</code></li>
            <li>Escape key closes the dropdown when open</li>
            <li>Enter/Space keys toggle the dropdown open state</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

function InteractiveDropdownPlayground() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [state, setState] = useState<"placeholder" | "filled" | "focus" | "disabled" | "error">("placeholder");
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [hasIndicator, setHasIndicator] = useState(false);
  const [hasOptional, setHasOptional] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(false);

  const dropdownProps = {
    label: "Select Option",
    placeholder: "Choose an option",
    size,
    disabled: state === "disabled",
    optional: hasOptional,
    leftIcon: hasLeftIcon ? "category" : undefined,
    showIndicator: hasIndicator,
    indicatorCount: hasIndicator ? 3 : undefined,
    helperText: hasHelperText && state !== "error" ? "This is helper text" : undefined,
    errorMessage: state === "error" ? "Please select an option" : undefined,
    open: state === "focus",
    value: state === "filled" ? "Option 1" : undefined,
    displayValue: state === "filled" ? "Option 1" : undefined,
  };

  return (
    <div className="space-y-8">
      {/* Preview */}
      <div className="bg-secondary rounded-lg p-6">
        <div className="w-full max-w-[400px]">
          <DropdownInput {...dropdownProps} />
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Size Selection */}
        <div className="space-y-3">
          <label className="text-primary block text-sm font-medium">Size</label>
          <div className="flex gap-3">
            {(["sm", "md", "lg"] as const).map((s) => (
              <label key={s} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")}
                  className="h-4 w-4 cursor-pointer accent-brand"
                />
                <span className="text-secondary text-sm capitalize">{s}</span>
              </label>
            ))}
          </div>
        </div>

        {/* State Selection */}
        <div className="space-y-3">
          <label className="text-primary block text-sm font-medium">State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value as typeof state)}
            className="bg-component-input-bg border-strong text-primary w-full rounded-sm border px-3 py-2 text-sm focus:border-brand focus:outline-none"
          >
            <option value="placeholder">Placeholder</option>
            <option value="filled">Filled</option>
            <option value="focus">Focus</option>
            <option value="disabled">Disabled</option>
            <option value="error">Error</option>
          </select>
        </div>

        {/* Left Icon Toggle */}
        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasLeftIcon}
              onChange={(e) => setHasLeftIcon(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Left Icon</span>
          </label>
        </div>

        {/* Indicator Toggle */}
        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasIndicator}
              onChange={(e) => setHasIndicator(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Selection Indicator</span>
          </label>
        </div>

        {/* Helper Text Toggle */}
        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasHelperText}
              onChange={(e) => setHasHelperText(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Helper Text</span>
          </label>
        </div>

        {/* Optional Label Toggle */}
        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasOptional}
              onChange={(e) => setHasOptional(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Optional Label</span>
          </label>
        </div>
      </div>
    </div>
  );
}
