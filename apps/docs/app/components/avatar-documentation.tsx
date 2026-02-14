import { Avatar } from "@banhatten/ui";
import { Section } from "./section";

const avatarSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

export function AvatarDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Avatar represents a user with initials or a fallback person icon. It supports two shapes (circle and rounded square) and eight sizes. Optionally show <code className="rounded bg-secondary px-1 py-0.5 text-xs">username</code> and <code className="rounded bg-secondary px-1 py-0.5 text-xs">supportingText</code> beside the avatar. Use <code className="rounded bg-secondary px-1 py-0.5 text-xs">aria-label</code> when the avatar conveys meaning so screen readers can announce it.
        </p>
      </div>

      {/* Basic usage */}
      <Section
        title="Basic usage"
        description="Initials show up to two characters; when omitted, a person icon is shown."
      >
        <div className="flex flex-wrap items-end gap-4">
          <Avatar initials="AG" aria-label="Avatar user" />
          <Avatar initials="A" aria-label="Single initial" />
          <Avatar aria-label="User without initials" />
        </div>
      </Section>

      {/* Fallback icon */}
      <Section
        title="Fallback icon"
        description="When initials are not provided, the Avatar shows the Material Symbol person icon. Icon size scales with avatar size (e.g. xs/sm avatars use 12px icon, 4xl uses 24px)."
      >
        <div className="space-y-6">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">All sizes (circle)</p>
            <div className="flex flex-wrap items-end gap-4">
              {avatarSizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar size={size} aria-label={`User ${size}`} />
                  <span className="text-tertiary text-xs">{size}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Rounded</p>
            <div className="flex flex-wrap items-end gap-4">
              {avatarSizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar shape="rounded" size={size} aria-label={`User ${size}`} />
                  <span className="text-tertiary text-xs">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          The icon uses the <code>person</code> Material Symbol and <code>text-icon-secondary</code> for color. It is marked <code>aria-hidden</code> so only the avatar&apos;s <code>aria-label</code> is announced.
        </p>
      </Section>

      {/* With text */}
      <Section
        title="With text"
        description="Optional username and supporting text render beside the avatar (gap-md). Username uses text-primary and font-medium; supporting text uses text-secondary and text-xs."
      >
        <div className="flex flex-wrap items-end gap-6">
          <Avatar
            initials="AG"
            username="Ahmed Galal"
            aria-label="Ahmed Galal"
          />
          <Avatar
            initials="AG"
            username="Ahmed Galal"
            supportingText="View profile"
            aria-label="Ahmed Galal"
          />
          <Avatar
            size="lg"
            initials="MS"
            username="Mona Smith"
            supportingText="Product lead"
            aria-label="Mona Smith"
          />
        </div>
      </Section>

      {/* Shape */}
      <Section
        title="Shape"
        description="Circle (default) or rounded square."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar shape="circle" initials="AG" aria-label="Circle avatar" />
            <span className="text-tertiary text-xs">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar shape="rounded" initials="AG" aria-label="Rounded avatar" />
            <span className="text-tertiary text-xs">rounded</span>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Eight sizes from xs (24px) to 4xl (64px)."
      >
        <div className="flex flex-wrap items-end gap-4">
          {avatarSizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar size={size} initials="AG" aria-label={`Avatar ${size}`} />
              <span className="text-tertiary text-xs">{size}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Shape × Size */}
      <Section
        title="Shape × Size"
        description="Circle and rounded at each size."
      >
        <div className="space-y-8">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Circle</p>
            <div className="flex flex-wrap items-end gap-4">
              {avatarSizes.map((size) => (
                <Avatar
                  key={size}
                  shape="circle"
                  size={size}
                  initials={size === "xs" || size === "sm" ? "A" : "AG"}
                  aria-label={`Circle ${size}`}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Rounded</p>
            <div className="flex flex-wrap items-end gap-4">
              {avatarSizes.map((size) => (
                <Avatar
                  key={size}
                  shape="rounded"
                  size={size}
                  initials={size === "xs" || size === "sm" ? "A" : "AG"}
                  aria-label={`Rounded ${size}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Avatar } from "@banhatten/ui";

// With initials (recommend aria-label when meaningful)
<Avatar initials="AG" aria-label="Anna Green" />
<Avatar initials="A" aria-label="Alex" />

// Fallback person icon when no initials
<Avatar aria-label="User" />

// Shape and size
<Avatar shape="rounded" size="xl" initials="JD" aria-label="Jane Doe" />

// With username and supporting text
<Avatar initials="AG" username="Ahmed Galal" supportingText="View profile" aria-label="Ahmed Galal" />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">shape</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;circle&quot; | &quot;rounded&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;circle&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot; | &quot;3xl&quot; | &quot;4xl&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">initials</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">username</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">supportingText</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">aria-label</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          When <code>aria-label</code> is provided, the root gets <code>role=&quot;img&quot;</code>. When omitted, the avatar is treated as decorative. Avatar also accepts all standard <code>div</code> HTML attributes.
        </p>
      </Section>
    </div>
  );
}
