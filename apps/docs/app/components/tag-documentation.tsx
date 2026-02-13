"use client";

import { useState } from "react";
import { Tag } from "@banhatten/ui";
import { Section } from "./section";

export function TagDocumentation() {
  const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3"]);

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Tags are compact labels used to categorize, filter, or mark items. They support multiple
          types (simple, with dot, with icon), states (default, focus, active, disabled), and can
          include a close button for removal. Hover styles activate automatically when hovering over
          tags. Tags use a unified color system with a primary background base and state-based neutral
          color variations.
        </p>
      </div>

      {/* Basic Usage */}
      <Section title="Basic Usage" description="Simple tags with default styling.">
        <div className="flex flex-wrap items-center gap-3">
          <Tag>Label</Tag>
          <Tag size="large">Large Tag</Tag>
        </div>
      </Section>

      {/* Types */}
      <Section
        title="Types"
        description="Three type variants: simple (text only), with-dot (status indicator), and with-icon (left icon)."
      >
        <div className="space-y-4">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Simple</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag type="simple">Simple Tag</Tag>
            </div>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">With Dot</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag type="with-dot">With Dot</Tag>
              <Tag type="with-dot" state="active">
                Active Dot
              </Tag>
            </div>
            <p className="text-tertiary mt-2 text-xs">
              The dot appears green in default and active states, and matches text color in focus
              and disabled states.
            </p>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">With Icon</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag type="with-icon">Calendar</Tag>
              <Tag type="with-icon" leftIcon="info">
                Info
              </Tag>
              <Tag type="with-icon" leftIcon="location_on">
                Location
              </Tag>
            </div>
            <p className="text-tertiary mt-2 text-xs">
              Icons use Material Symbols. Default icon is &quot;calendar_month&quot; when leftIcon is
              not provided.
            </p>
          </div>
        </div>
      </Section>

      {/* States */}
      <Section
        title="States"
        description="Four programmatic states: default (white bg, gray border), focus (blue border, blue text), active (light blue bg, blue text), and disabled (gray bg, gray text). Hover styles activate automatically on mouse hover."
      >
        <div className="space-y-4">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Default State</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag state="default">Default</Tag>
              <Tag type="with-dot" state="default">
                With Dot
              </Tag>
              <Tag type="with-icon" state="default">
                With Icon
              </Tag>
            </div>
            <p className="text-tertiary mt-2 text-xs">
              Hover over tags to see the hover effect (subtle black overlay with blue border).
            </p>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Focus State</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag state="focus">Focus</Tag>
              <Tag type="with-dot" state="focus">
                With Dot
              </Tag>
              <Tag type="with-icon" state="focus">
                With Icon
              </Tag>
            </div>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Active State</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag state="active">Active</Tag>
              <Tag type="with-dot" state="active">
                With Dot
              </Tag>
              <Tag type="with-icon" state="active">
                With Icon
              </Tag>
            </div>
            <p className="text-tertiary mt-2 text-xs">
              Active state uses light blue background. Dot remains green in active state.
            </p>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Disabled State</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag state="disabled">Disabled</Tag>
              <Tag type="with-dot" state="disabled">
                With Dot
              </Tag>
              <Tag type="with-icon" state="disabled">
                With Icon
              </Tag>
            </div>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes" description="Two sizes: small (24px) and large (28px).">
        <div className="space-y-4">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Small</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag size="small">Small</Tag>
              <Tag size="small" type="with-dot">
                With Dot
              </Tag>
              <Tag size="small" type="with-icon">
                With Icon
              </Tag>
              <Tag size="small" close onClose={() => {}}>
                With Close
              </Tag>
            </div>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Large</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag size="large">Large</Tag>
              <Tag size="large" type="with-dot">
                With Dot
              </Tag>
              <Tag size="large" type="with-icon">
                With Icon
              </Tag>
              <Tag size="large" close onClose={() => {}}>
                With Close
              </Tag>
            </div>
          </div>
        </div>
      </Section>

      {/* Close Button */}
      <Section
        title="Close Button"
        description="Tags can include a close button on the right for removal. The close button is clickable and respects the tag's disabled state."
      >
        <div className="space-y-4">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">With Close Button</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag close onClose={() => alert("Tag removed")}>
                Removable
              </Tag>
              <Tag type="with-dot" close onClose={() => alert("Tag removed")}>
                With Dot
              </Tag>
              <Tag type="with-icon" close onClose={() => alert("Tag removed")}>
                With Icon
              </Tag>
            </div>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Disabled with Close</p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag state="disabled" close onClose={() => {}}>
                Disabled
              </Tag>
            </div>
            <p className="text-tertiary mt-2 text-xs">
              Close button is disabled when tag state is &quot;disabled&quot;.
            </p>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Interactive Example</p>
            <div className="flex flex-wrap items-center gap-3">
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  close
                  onClose={() => {
                    setTags(tags.filter((_, i) => i !== index));
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </div>
            <p className="text-tertiary mt-2 text-xs">
              Click the close button to remove tags. {tags.length === 0 && "All tags removed!"}
            </p>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Tag } from "@banhatten/ui";

// Basic usage
<Tag>Label</Tag>
<Tag size="large">Large Tag</Tag>

// Types
<Tag type="simple">Simple</Tag>
<Tag type="with-dot">With Dot</Tag>
<Tag type="with-icon" leftIcon="info">With Icon</Tag>

// States (hover activates automatically on mouse hover)
<Tag state="default">Default</Tag>
<Tag state="focus">Focus</Tag>
<Tag state="active">Active</Tag>
<Tag state="disabled">Disabled</Tag>

// With close button
<Tag close onClose={(e) => console.log("Removed")}>
  Removable
</Tag>

// Combined
<Tag 
  type="with-icon" 
  leftIcon="calendar_month"
  state="active" 
  size="large"
  close
  onClose={() => handleRemove()}
>
  Event Tag
</Tag>`}</code>
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
                <th className="text-primary pb-3 pr-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">type</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;simple&quot; | &quot;with-dot&quot; | &quot;with-icon&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;simple&quot;</td>
                <td className="py-3 pr-4 text-xs">Visual type variant</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">state</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;default&quot; | &quot;focus&quot; | &quot;active&quot; | &quot;disabled&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot;</td>
                <td className="py-3 pr-4 text-xs">
                  Visual state variant. Hover styles activate automatically on mouse hover.
                </td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;small&quot; | &quot;large&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;small&quot;</td>
                <td className="py-3 pr-4 text-xs">Size variant (24px or 28px height)</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">leftIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  string
                  <span className="text-tertiary"> // Material Symbol name</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;calendar_month&quot;</td>
                <td className="py-3 pr-4 text-xs">
                  Icon name when type is &quot;with-icon&quot;
                </td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconVariant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;outlined&quot; | &quot;rounded&quot; | &quot;sharp&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;outlined&quot;</td>
                <td className="py-3 pr-4 text-xs">Icon style variant</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconFilled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
                <td className="py-3 pr-4 text-xs">Render filled variant of icons</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">close</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
                <td className="py-3 pr-4 text-xs">Show close button on the right</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">onClose</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  (event: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; void
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
                <td className="py-3 pr-4 text-xs">Callback fired when close button is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
