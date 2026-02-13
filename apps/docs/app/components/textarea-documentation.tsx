"use client";

import * as React from "react";
import { useState } from "react";
import { TextArea } from "@banhatten/ui";
import { Section } from "./section";

export function TextAreaDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Text areas are used to collect multi-line user-entered data. They support labels,
          helper text, error states, and custom row heights to accommodate different contexts
          and validation needs. Perfect for longer form inputs like descriptions, comments,
          or messages.
        </p>
      </div>

      {/* Interactive Playground */}
      <Section
        title="Interactive Playground"
        description="Customize the textarea component below by adjusting the controls. See how different combinations affect the textarea appearance and behavior."
      >
        <InteractiveTextAreaPlayground />
      </Section>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="A simple textarea with label and placeholder text."
      >
        <div className="w-[320px]">
          <TextArea
            label="Description"
            placeholder="Enter your description here"
            helperText="Provide a detailed description of your item."
          />
        </div>
      </Section>

      {/* States */}
      <Section
        title="States"
        description="Text areas have default, error, and disabled states built in."
      >
        <div className="w-[320px] space-y-4">
          <TextArea
            label="Default"
            placeholder="Type text here"
            helperText="This is a hint text"
          />
          <TextArea
            label="With Value"
            placeholder="Type text here"
            defaultValue="Our advanced inference infrastructure provides extremely short response."
            helperText="This is a hint text"
          />
          <TextArea
            label="Error State"
            placeholder="Type text here"
            errorMessage="Error message"
            defaultValue="Our advanced inference infrastructure provides extremely short response."
          />
          <TextArea
            label="Disabled"
            placeholder="Type text here"
            disabled
            defaultValue="Our advanced inference infrastructure provides extremely short response."
            helperText="This field is disabled"
          />
        </div>
      </Section>

      {/* Labels */}
      <Section
        title="Labels"
        description="Labels can include optional indicators with info icons and are properly associated with the textarea for accessibility."
      >
        <div className="w-[320px] space-y-4">
          <TextArea
            label="Required Field"
            placeholder="Enter text"
          />
          <TextArea
            label="Label *"
            optional
            placeholder="Type text here"
            helperText="This is a hint text"
          />
          <TextArea
            placeholder="No label"
            helperText="Textarea without a label"
          />
        </div>
      </Section>

      {/* Helper Text */}
      <Section
        title="Helper Text"
        description="Helper text provides additional context or instructions. It can include an icon for visual emphasis."
      >
        <div className="w-[320px] space-y-4">
          <TextArea
            label="Description"
            placeholder="Enter description"
            helperText="This is a hint text"
            helperTextIcon="info"
          />
          <TextArea
            label="Comments"
            placeholder="Add your comments"
            helperText="Your feedback helps us improve"
            helperTextIcon="feedback"
          />
          <TextArea
            label="Notes"
            placeholder="Add notes"
            helperText="Optional notes about this item"
            helperTextIcon="note"
          />
        </div>
      </Section>

      {/* Character Count */}
      <Section
        title="Character Count"
        description="Character counter displays outside the textarea, aligned with the top edge. It turns red in error states."
      >
        <div className="w-[320px] space-y-4">
          <TextArea
            label="Character Count"
            placeholder="Enter text"
            maxLength={100}
            defaultValue="Our advanced inference infrastructure provides extremely short response."
            helperText="Maximum 100 characters"
          />
          <TextArea
            label="With Counter"
            placeholder="Enter description"
            maxLength={50}
            defaultValue="Sample text"
            helperText="Maximum 50 characters"
          />
          <TextArea
            label="Error with Counter"
            placeholder="Enter text"
            maxLength={20}
            defaultValue="This text exceeds the limit"
            errorMessage="Error message"
          />
        </div>
      </Section>

      {/* Error States */}
      <Section
        title="Error States"
        description="Error messages override helper text and provide visual feedback with red borders and text. Character counters also turn red in error states."
      >
        <div className="w-[320px] space-y-4">
          <TextArea
            label="Description"
            placeholder="Enter description"
            errorMessage="Error message"
            defaultValue="Our advanced inference infrastructure provides extremely short response."
          />
          <TextArea
            label="Comments"
            placeholder="Add comments"
            errorMessage="Please provide valid comments"
            defaultValue="Invalid input"
          />
          <TextArea
            label="Required Field"
            errorMessage="This field is required"
            error
          />
          <TextArea
            label="With Counter"
            placeholder="Enter text"
            maxLength={10}
            defaultValue="This is too long"
            errorMessage="Error message"
          />
        </div>
      </Section>

      {/* Rows */}
      <Section
        title="Custom Rows"
        description="Control the initial height of the textarea by setting the rows prop. Default rows are based on size (sm: 3, md: 4, lg: 5)."
      >
        <div className="w-[320px] space-y-4">
          <TextArea
            label="Small (3 rows)"
            placeholder="Enter text"
            rows={3}
          />
          <TextArea
            label="Medium (5 rows)"
            placeholder="Enter text"
            rows={5}
          />
          <TextArea
            label="Large (8 rows)"
            placeholder="Enter text"
            rows={8}
          />
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { TextArea } from "@banhatten/ui";

// Basic textarea
<TextArea label="Description" placeholder="Enter your description" />

// With helper text
<TextArea
  label="Comments"
  placeholder="Add your comments"
  helperText="Your feedback helps us improve"
/>

// Error state
<TextArea
  label="Description"
  placeholder="Enter description"
  errorMessage="Please enter a valid description"
/>

// Optional label with info icon
<TextArea
  label="Label *"
  optional
  placeholder="Type text here"
  helperText="This is a hint text"
/>

// With character counter
<TextArea
  label="Description"
  placeholder="Enter text"
  maxLength={100}
/>

// Custom rows
<TextArea
  label="Long Description"
  placeholder="Enter text"
  rows={8}
/>

// Disabled
<TextArea
  label="Description"
  placeholder="Enter text"
  disabled
  defaultValue="This field is disabled"
/>

// With helper text icon
<TextArea
  label="Feedback"
  placeholder="Enter feedback"
  helperText="We appreciate your input"
  helperTextIcon="info"
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
                <td className="py-3 pr-4 font-mono text-xs">rows</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  size === &quot;sm&quot; ? 3 : size === &quot;md&quot; ? 4 : 5
                </td>
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
                <td className="py-3 pr-4 font-mono text-xs">helperTextIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">errorMessage</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
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
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          TextArea also accepts all standard HTML textarea attributes (placeholder,
          value, onChange, rows, etc.).
        </p>
      </Section>
    </div>
  );
}

function InteractiveTextAreaPlayground() {
  const [state, setState] = useState<"placeholder" | "filled" | "focus" | "disabled">("placeholder");
  const [hasHelperText, setHasHelperText] = useState(false);
  const [hasOptional, setHasOptional] = useState(false);
  const [hasError, setHasError] = useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (state === "focus" && textareaRef.current) {
      // Small delay to ensure the textarea is rendered
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [state]);

  const textareaProps = {
    ref: textareaRef,
    label: "Description",
    placeholder: "Type text here",
    disabled: state === "disabled",
    optional: hasOptional,
    helperText: hasHelperText ? "This is a hint text" : undefined,
    helperTextIcon: hasHelperText ? "info" : undefined,
    errorMessage: hasError ? "Error message" : undefined,
    error: hasError,
    defaultValue: state === "filled" ? "Our advanced inference infrastructure provides extremely short response." : undefined,
  };

  return (
    <div className="space-y-8">
      {/* Preview */}
      <div className="bg-secondary rounded-lg p-6">
        <div className="w-full max-w-[400px]">
          <TextArea {...textareaProps} />
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Error Toggle */}
        <div className="space-y-3">
          <label className="text-primary flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={hasError}
              onChange={(e) => setHasError(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-brand"
            />
            <span>Error State</span>
          </label>
        </div>
      </div>

      {/* Focus State Note */}
      {state === "focus" && (
        <div className="bg-secondary rounded-lg border border-default p-4">
          <p className="text-secondary text-sm">
            <strong className="text-primary">Note:</strong> The textarea above is automatically focused to demonstrate the focus state. Click elsewhere to blur it, or click on it again to refocus.
          </p>
        </div>
      )}
    </div>
  );
}
