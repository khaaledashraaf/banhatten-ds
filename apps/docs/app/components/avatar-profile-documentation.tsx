import { AvatarProfile, Icon } from "banhatten-ui";
import { Section } from "./section";

const profileSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

export function AvatarProfileDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Avatar Profile composes Avatar with a border, shadow, and optional badge slots at the top-right (e.g. edit) and bottom-right (e.g. status or verified). Use <code className="rounded bg-secondary px-1 py-0.5 text-xs">aria-label</code> on the profile when it conveys meaning.
        </p>
      </div>

      {/* Basic usage */}
      <Section
        title="Basic usage"
        description="Border and shadow only; same size and shape options as Avatar."
      >
        <div className="flex flex-wrap items-end gap-4">
          <AvatarProfile initials="AG" aria-label="User profile" />
          <AvatarProfile initials="A" aria-label="User" />
          <AvatarProfile size="lg" initials="JD" aria-label="Jane Doe" />
          <AvatarProfile shape="rounded" initials="MS" aria-label="Mona Smith" />
        </div>
      </Section>

      {/* Shape */}
      <Section
        title="Shape"
        description="Circle (default) or rounded square, matching Avatar."
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <AvatarProfile shape="circle" initials="AG" aria-label="Circle profile" />
            <span className="text-tertiary text-xs">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AvatarProfile shape="rounded" initials="AG" aria-label="Rounded profile" />
            <span className="text-tertiary text-xs">rounded</span>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Sizes from xs to 4xl are passed through to the inner Avatar."
      >
        <div className="flex flex-wrap items-end gap-4">
          {profileSizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <AvatarProfile
                size={size}
                initials={size === "xs" || size === "sm" ? "A" : "AG"}
                aria-label={`Profile ${size}`}
              />
              <span className="text-tertiary text-xs">{size}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Badge slots */}
      <Section
        title="Badge slots"
        description="Optional topRight and bottomRight content (e.g. Icon). Badges use the Figma style: brand fill, thin white ring (border-subtract), and on-color (white) icon. Icons in badges are always rendered filled (Material Symbols). Mark decorative; use a button with aria-label if the slot is actionable."
      >
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <AvatarProfile
              size="2xl"
              initials="AG"
              bottomRight={<Icon name="check" size="xs" filled className="text-on-color" aria-hidden />}
              aria-label="Verified user"
            />
            <span className="text-tertiary text-xs">bottomRight (verified)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AvatarProfile
              size="2xl"
              initials="AG"
              topRight={<Icon name="edit" size="xs" filled className="text-on-color" aria-hidden />}
              aria-label="User profile"
            />
            <span className="text-tertiary text-xs">topRight (edit)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AvatarProfile
              size="2xl"
              initials="AG"
              topRight={<Icon name="edit" size="xs" filled className="text-on-color" aria-hidden />}
              bottomRight={<Icon name="check" size="xs" filled className="text-on-color" aria-hidden />}
              aria-label="Verified user profile"
            />
            <span className="text-tertiary text-xs">both</span>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { AvatarProfile, Icon } from "banhatten-ui";

// Basic
<AvatarProfile initials="AG" aria-label="User profile" />

// With status badge (bottom-right)
<AvatarProfile
  initials="AG"
  bottomRight=${"{"}${"<"}Icon name="check_circle" size="xs" filled className="text-on-color" aria-hidden ${"/>"}${"}"}
  aria-label="Verified user"
/>

// With edit badge (top-right)
<AvatarProfile
  initials="AG"
  topRight=${"{"}${"<"}Icon name="edit" size="xs" filled className="text-on-color" aria-hidden ${"/>"}${"}"}
  aria-label="User profile"
/>

// Shape and size
<AvatarProfile shape="rounded" size="xl" initials="JD" aria-label="Jane Doe" />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">topRight</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">bottomRight</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
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
          Badge slot wrappers are <code>aria-hidden</code>. The inner Avatar receives <code>aria-label</code> when provided. AvatarProfile also accepts all standard <code>div</code> HTML attributes.
        </p>
      </Section>
    </div>
  );
}
