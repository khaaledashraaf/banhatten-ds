"use client";

import { useState } from "react";
import { Alert, type AlertAction } from "banhatten-ui";
import { Section } from "./section";

export function AlertDocumentation() {
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set());

  const handleDismiss = (id: string) => {
    setDismissedAlerts((prev) => new Set(prev).add(id));
  };

  const types = ["info", "success", "warning", "danger", "neutral"] as const;
  const emphasisLevels = ["low", "medium", "moderate", "high"] as const;

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Alerts provide contextual feedback messages to users. They support five types (info, success,
          warning, danger, neutral), four emphasis levels (low, medium, moderate, high), and can be
          expanded to show additional description text and action buttons. Icons are preset based on the
          alert type and cannot be customized by developers. The title promotes to font-medium when a
          description is visible. High-emphasis neutral alerts use a light background with standard text
          colors (unlike other high-emphasis types which use dark backgrounds with white text).
        </p>
      </div>

      {/* Basic Usage */}
      <Section title="Basic Usage" description="Simple alerts with default styling (medium emphasis, info type).">
        <div className="space-y-4">
          <Alert title="Alert Title" />
          <Alert
            title="Alert with Close"
            onClose={() => alert("Alert dismissed")}
          />
        </div>
      </Section>

      {/* Types */}
      <Section
        title="Types"
        description="Five alert types determine the color scheme and preset icon. Icons are automatically assigned and cannot be customized."
      >
        <div className="space-y-4">
          {types.map((type) => (
            <Alert
              key={type}
              type={type}
              title={`${type.charAt(0).toUpperCase() + type.slice(1)} Alert`}
              onClose={() => {}}
            />
          ))}
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Icons are preset: <code>error</code> for danger, <code>check_circle</code> for success,{" "}
          <code>warning</code> for warning, <code>info</code> for info, and <code>notifications</code>{" "}
          for neutral.
        </p>
      </Section>

      {/* Emphasis Levels */}
      <Section
        title="Emphasis Levels"
        description="Four emphasis levels control the visual intensity: low (white backgrounds with subtle borders), medium (light pastel backgrounds with pastel borders), moderate (secondary backgrounds with more saturated borders), and high (saturated backgrounds with white text, except neutral which uses a light gray background with standard text colors)."
      >
        <div className="space-y-6">
          {types.map((type) => (
            <div key={type}>
              <p className="text-primary mb-3 text-sm font-medium capitalize">
                {type}
              </p>
              <div className="space-y-3">
                {emphasisLevels.map((emphasis) => (
                  <Alert
                    key={emphasis}
                    type={type}
                    emphasis={emphasis}
                    title={`${emphasis.charAt(0).toUpperCase() + emphasis.slice(1)} Emphasis`}
                    onClose={() => {}}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Expand State */}
      <Section
        title="Expand State"
        description="When expand=true, alerts show additional description text and action buttons below the title. The title promotes to font-medium when a description is visible. Description text uses secondary color styling (or text-on-color for high emphasis)."
      >
        <div className="space-y-4">
          <Alert
            type="info"
            title="Information Alert"
            expand
            description="This is additional description text that appears when the alert is expanded. It provides more context about the alert message."
            actions={[
              { label: "Learn More", onClick: () => alert("Learn more clicked") },
              { label: "Dismiss", onClick: () => alert("Dismiss clicked") },
            ]}
            onClose={() => {}}
          />
          <Alert
            type="success"
            emphasis="high"
            title="Success Alert"
            expand
            description="High emphasis alerts with expanded state show white text and action buttons with white text (text-on-color)."
            actions={[
              { label: "View Details", onClick: () => alert("View details clicked") },
            ]}
            onClose={() => {}}
          />
        </div>
      </Section>

      {/* Close Button */}
      <Section
        title="Close Button"
        description="Alerts can include a close button on the right side. Provide an onClose callback to handle dismissal."
      >
        <div className="space-y-4">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">With Close Button</p>
            <Alert
              title="Dismissible Alert"
              onClose={() => alert("Alert dismissed")}
            />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Without Close Button</p>
            <Alert title="Non-dismissible Alert" />
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Interactive Example</p>
            {!dismissedAlerts.has("example-1") && (
              <Alert
                title="Click the X to dismiss"
                onClose={() => handleDismiss("example-1")}
              />
            )}
            {dismissedAlerts.has("example-1") && (
              <p className="text-tertiary text-sm">Alert dismissed!</p>
            )}
          </div>
        </div>
      </Section>

      {/* Action Buttons */}
      <Section
        title="Action Buttons"
        description="Action buttons appear when expand=true and actions are provided. They render as link-brand buttons with type-matching text colors for low/medium/moderate emphasis, and as link-brand buttons with white text (text-on-color) for high emphasis (except neutral which uses standard text colors)."
      >
        <div className="space-y-4">
          <Alert
            type="info"
            emphasis="medium"
            title="Alert with Actions"
            expand
            description="These action buttons use link-brand styling."
            actions={[
              { label: "Primary Action", onClick: () => alert("Primary action") },
              { label: "Secondary Action", onClick: () => alert("Secondary action") },
            ]}
            onClose={() => {}}
          />
          <Alert
            type="success"
            emphasis="high"
            title="High Emphasis with Actions"
            expand
            description="High emphasis alerts show action buttons with white text (text-on-color)."
            actions={[
              { label: "View", onClick: () => alert("View clicked") },
              { label: "Edit", onClick: () => alert("Edit clicked") },
            ]}
            onClose={() => {}}
          />
        </div>
      </Section>

      {/* Type × Emphasis Matrix */}
      <Section
        title="Type × Emphasis Matrix"
        description="All combinations of type and emphasis levels for reference."
      >
        <div className="space-y-8">
          {types.map((type) => (
            <div key={type}>
              <p className="text-primary mb-4 text-sm font-medium capitalize">
                {type}
              </p>
              <div className="space-y-3">
                {emphasisLevels.map((emphasis) => (
                  <Alert
                    key={emphasis}
                    type={type}
                    emphasis={emphasis}
                    title={`${type.charAt(0).toUpperCase() + type.slice(1)} - ${emphasis.charAt(0).toUpperCase() + emphasis.slice(1)}`}
                    onClose={() => {}}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Expanded Type × Emphasis Matrix */}
      <Section
        title="Expanded Type × Emphasis Matrix"
        description="All combinations with expand=true showing description and action buttons."
      >
        <div className="space-y-8">
          {types.map((type) => (
            <div key={type}>
              <p className="text-primary mb-4 text-sm font-medium capitalize">
                {type}
              </p>
              <div className="space-y-3">
                {emphasisLevels.map((emphasis) => (
                  <Alert
                    key={emphasis}
                    type={type}
                    emphasis={emphasis}
                    expand
                    title={`${type.charAt(0).toUpperCase() + type.slice(1)} - ${emphasis.charAt(0).toUpperCase() + emphasis.slice(1)}`}
                    description="This is a description that appears when the alert is expanded. It provides additional context about the alert message."
                    actions={[
                      { label: "Action", onClick: () => {} },
                    ]}
                    onClose={() => {}}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Alert } from "banhatten-ui";

// Basic alert
<Alert title="Alert Title" />

// With close button
<Alert
  title="Dismissible Alert"
  onClose={() => handleClose()}
/>

// With type and emphasis
<Alert
  type="success"
  emphasis="high"
  title="Success Message"
  onClose={() => {}}
/>

// Expanded with description and actions
<Alert
  type="info"
  emphasis="medium"
  title="Information Alert"
  expand
  description="This is additional context about the alert."
  actions={[
    { label: "Learn More", onClick: () => {} },
    { label: "Dismiss", onClick: () => {} },
  ]}
  onClose={() => {}}
/>

// All types
<Alert type="info" title="Info" />
<Alert type="success" title="Success" />
<Alert type="warning" title="Warning" />
<Alert type="danger" title="Danger" />
<Alert type="neutral" title="Neutral" />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">title</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
                <td className="py-3 pr-4 text-xs">Main title text displayed in the alert</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">type</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;info&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;danger&quot; | &quot;neutral&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;info&quot;</td>
                <td className="py-3 pr-4 text-xs">Alert type (determines colors and preset icon)</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">emphasis</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;low&quot; | &quot;medium&quot; | &quot;moderate&quot; | &quot;high&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;medium&quot;</td>
                <td className="py-3 pr-4 text-xs">Visual intensity level</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">expand</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
                <td className="py-3 pr-4 text-xs">Show description and action buttons</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">description</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
                <td className="py-3 pr-4 text-xs">Optional description text (shown when expand=true)</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">actions</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  AlertAction[]
                  <span className="text-tertiary"> // {`{ label: string, onClick: () => void }[]`}</span>
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
                <td className="py-3 pr-4 text-xs">Action buttons (shown when expand=true)</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">onClose</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  (event: MouseEvent) =&gt; void
                </td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
                <td className="py-3 pr-4 text-xs">Callback fired when close button is clicked</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconVariant</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;outlined&quot; | &quot;rounded&quot; | &quot;sharp&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;outlined&quot;</td>
                <td className="py-3 pr-4 text-xs">Icon variant style</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">iconFilled</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
                <td className="py-3 pr-4 text-xs">Render filled variant of icons</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">role</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;alert&quot; | &quot;status&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;alert&quot; (danger/warning) | &quot;status&quot; (others)
                </td>
                <td className="py-3 pr-4 text-xs">ARIA role for accessibility</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
                <td className="py-3 pr-4 text-xs">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Alert also accepts all standard HTML div attributes. Icons are preset based on the type prop
          and cannot be customized. The component automatically sets appropriate ARIA roles and
          aria-live attributes for accessibility.
        </p>
      </Section>
    </div>
  );
}
