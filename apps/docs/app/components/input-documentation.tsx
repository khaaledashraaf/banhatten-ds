"use client";

import * as React from "react";
import { useState } from "react";
import { Input } from "banhatten-ui";
import { Section } from "./section";

export function InputDocumentation() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Text inputs are used to collect user-entered data. They support labels,
          helper text, error states, icons, and multiple sizes to accommodate
          different contexts and validation needs.
        </p>
      </div>

      {/* Interactive Playground */}
      <Section
        title="Interactive Playground"
        description="Customize the input component below by adjusting the controls. See how different combinations affect the input appearance and behavior."
      >
        <InteractiveInputPlayground />
      </Section>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="A simple input with label and placeholder text."
      >
        <div className="w-[320px]">
          <Input
            label="Email"
            placeholder="Enter your email"
            helperText="We'll never share your email with anyone else."
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
            <Input
              key={size}
              label={`Size ${size}`}
              placeholder="Enter text"
              size={size}
              leftIcon="search"
            />
          ))}
        </div>
      </Section>

      {/* States */}
      <Section
        title="States"
        description="Inputs have default, error, and disabled states built in."
      >
        <div className="w-[320px] space-y-4">
          <Input
            label="Default"
            placeholder="Enter text"
            helperText="This is helper text"
            leftIcon="edit"
          />
          <Input
            label="With Value"
            placeholder="Enter text"
            defaultValue="This is a test text"
            helperText="This is helper text"
            leftIcon="description"
          />
          <Input
            label="Error State"
            placeholder="Enter text"
            errorMessage="This is an error message"
            defaultValue="Invalid input"
            leftIcon="error"
          />
          <Input
            label="Disabled"
            placeholder="Enter text"
            disabled
            defaultValue="Disabled input"
            helperText="This field is disabled"
            leftIcon="lock"
          />
        </div>
      </Section>

      {/* Labels */}
      <Section
        title="Labels"
        description="Labels can include optional indicators and are properly associated with the input for accessibility."
      >
        <div className="w-[320px] space-y-4">
          <Input
            label="Required Field"
            placeholder="Enter text"
            leftIcon="star"
          />
          <Input
            label="Optional Field"
            optional
            placeholder="Enter text"
            leftIcon="info"
          />
          <Input
            placeholder="No label"
            helperText="Input without a label"
            leftIcon="help"
          />
        </div>
      </Section>

      {/* Icons */}
      <Section
        title="Icons"
        description="Inputs can render Material Symbols icons on the left, right, or both sides. Icon sizes are automatically mapped to the input size."
      >
        <div className="w-[320px] space-y-4">
          <Input
            label="Search"
            placeholder="Search..."
            leftIcon="search"
          />
          <Input
            label="Email"
            placeholder="your@email.com"
            leftIcon="email"
            helperText="Enter your email address"
          />
          <Input
            label="Phone"
            placeholder="+1 (555) 000-0000"
            leftIcon="phone"
            helperText="Enter your phone number"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            rightIcon="visibility"
            helperText="Must be at least 8 characters"
          />
          <Input
            label="Clearable Input"
            placeholder="Type to search"
            leftIcon="search"
            rightIcon="close"
            defaultValue="Sample text"
          />
          <Input
            label="Location"
            placeholder="Enter address"
            leftIcon="location_on"
            rightIcon="my_location"
            helperText="We'll use this for delivery"
          />
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Icon props expect Material Symbols names (e.g. <code>search</code>,{" "}
          <code>email</code>, <code>visibility</code>). Icons are decorative by
          default and sized at 16px for <code>sm</code> inputs and 20px for{" "}
          <code>md</code> and <code>lg</code> inputs.
        </p>
      </Section>

      {/* Presets */}
      <Section
        title="Presets"
        description="Presets provide common input configurations with appropriate icons and behaviors. They automatically set icons, input types, and enable behaviors like password visibility toggle and clear functionality."
      >
        <div className="w-[320px] space-y-4">
          <Input preset="user" label="User" placeholder="username" />
          <Input preset="email" label="Email Address" placeholder="Your-email@email.com" />
          <Input preset="password" label="Password" placeholder="Password" />
          <Input preset="date" label="Date" placeholder="DD/MM/YYYY" />
          <Input preset="amount" label="Amount" defaultValue="2,000" />
          <Input preset="description" label="Description" placeholder="Enter description..." />
          <Input preset="search" label="Search Input" placeholder="Search..." />
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Presets automatically configure icons and behaviors. You can override any preset property by providing explicit props. For example, <code>preset="email"</code> sets <code>leftIcon="email"</code> and <code>type="email"</code>, but you can override with <code>leftIcon="custom"</code> if needed.
        </p>
        <div className="bg-secondary rounded-lg mt-4 p-4">
          <p className="text-primary mb-2 text-sm font-medium">Available Presets:</p>
          <ul className="text-secondary space-y-1 text-sm list-disc list-inside">
            <li><code className="text-primary">user</code> - Account circle icon</li>
            <li><code className="text-primary">email</code> - Email icon with email input type</li>
            <li><code className="text-primary">password</code> - Lock icon with password toggle (eye icon)</li>
            <li><code className="text-primary">date</code> - Calendar icon with date input type</li>
            <li><code className="text-primary">amount</code> - Dollar sign icon with clear button</li>
            <li><code className="text-primary">description</code> - Description icon, optional label</li>
            <li><code className="text-primary">search</code> - Search icon with clear button, optional label</li>
          </ul>
        </div>
      </Section>

      {/* Character Count */}
      <Section
        title="Character Count"
        description="Character counter displays outside the input, aligned with the top edge. It turns red in error states."
      >
        <div className="w-[320px] space-y-4">
          <Input
            label="Character Count"
            placeholder="Enter text"
            maxLength={30}
            defaultValue="This is a test text"
            helperText="Maximum 30 characters"
          />
          <Input
            label="With Icon and Counter"
            placeholder="Enter description"
            leftIcon="description"
            maxLength={50}
            defaultValue="Sample text"
            helperText="Maximum 50 characters"
          />
          <Input
            label="Error with Counter"
            placeholder="Enter text"
            maxLength={20}
            defaultValue="This text exceeds the limit"
            errorMessage="Text exceeds maximum length"
          />
        </div>
      </Section>

      {/* Error States */}
      <Section
        title="Error States"
        description="Error messages override helper text and provide visual feedback with red borders and text. Character counters also turn red in error states."
      >
        <div className="w-[320px] space-y-4">
          <Input
            label="Email"
            placeholder="your@email.com"
            errorMessage="Please enter a valid email address"
            defaultValue="invalid-email"
            leftIcon="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            errorMessage="Password must be at least 8 characters"
            defaultValue="123"
            rightIcon="lock"
          />
          <Input
            label="Required Field"
            errorMessage="This field is required"
            error
            leftIcon="error"
          />
          <Input
            label="With Counter"
            placeholder="Enter text"
            maxLength={10}
            defaultValue="This is too long"
            errorMessage="Text exceeds maximum length"
            leftIcon="warning"
          />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Input } from "banhatten-ui";

// Basic input
<Input label="Email" placeholder="Enter your email" />

// With helper text
<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  helperText="Must be at least 8 characters"
/>

// Error state
<Input
  label="Email"
  placeholder="your@email.com"
  errorMessage="Please enter a valid email address"
/>

// With icons
<Input
  label="Search"
  placeholder="Search..."
  leftIcon="search"
/>

<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  rightIcon="visibility"
/>

// With suffix
<Input
  label="Character Count"
  placeholder="Enter text"
  suffix="30"
/>

// Optional label
<Input
  label="Optional Field"
  optional
  placeholder="Enter text"
/>

// With character counter
<Input
  label="Description"
  placeholder="Enter text"
  maxLength={100}
/>

// Disabled
<Input
  label="Disabled"
  placeholder="Enter text"
  disabled
  leftIcon="lock"
/>

// Using presets
<Input preset="email" label="Email" placeholder="your@email.com" />
<Input preset="password" label="Password" placeholder="Enter password" />
<Input preset="search" label="Search" placeholder="Search..." />

// Presets can be overridden
<Input 
  preset="email" 
  label="Email" 
  leftIcon="mail" 
  placeholder="your@email.com" 
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
                <td className="py-3 pr-4 font-mono text-xs">error</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
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
                <td className="py-3 pr-4 font-mono text-xs">maxLength</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">characterCount</td>
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
                <td className="py-3 pr-4 font-mono text-xs">rightIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
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
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">preset</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;user&quot; | &quot;email&quot; | &quot;password&quot; | &quot;date&quot; | &quot;amount&quot; | &quot;description&quot; | &quot;search&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
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
          Input also accepts all standard HTML input attributes (type, placeholder,
          value, onChange, etc.).
        </p>
      </Section>
    </div>
  );
}

function InteractiveInputPlayground() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [state, setState] = useState<"placeholder" | "filled" | "focus" | "disabled">("placeholder");
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [hasRightIcon, setHasRightIcon] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(false);
  const [hasOptional, setHasOptional] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (state === "focus" && inputRef.current) {
      // Small delay to ensure the input is rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [state]);

  const inputProps = {
    ref: inputRef,
    label: "Email",
    placeholder: "Enter your email",
    size,
    disabled: state === "disabled",
    optional: hasOptional,
    leftIcon: hasLeftIcon ? "email" : undefined,
    rightIcon: hasRightIcon ? "visibility" : undefined,
    helperText: hasHelperText ? "We'll never share your email with anyone else." : undefined,
    helperTextIcon: hasHelperText ? "error" : undefined,
    defaultValue: state === "filled" ? "user@example.com" : undefined,
  };

  return (
    <div className="space-y-8">
      {/* Preview */}
      <div className="bg-secondary rounded-lg p-6">
        <div className="w-full max-w-[400px]">
          <Input {...inputProps} />
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
            onChange={(e) => {
              setState(e.target.value as typeof state);
            }}
            className="bg-component-input-bg border-strong text-primary w-full rounded-sm border px-3 py-2 text-sm focus:border-brand focus:outline-none"
          >
            <option value="placeholder">Placeholder</option>
            <option value="filled">Filled</option>
            <option value="focus">Focus</option>
            <option value="disabled">Disabled</option>
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

        {/* Right Icon Toggle */}
        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasRightIcon}
              onChange={(e) => setHasRightIcon(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Right Icon</span>
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

      {/* Focus State Note */}
      {state === "focus" && (
        <div className="bg-secondary rounded-lg border border-default p-4">
          <p className="text-secondary text-sm">
            <strong className="text-primary">Note:</strong> The input above is automatically focused to demonstrate the focus state. Click elsewhere to blur it, or click on it again to refocus.
          </p>
        </div>
      )}
    </div>
  );
}
