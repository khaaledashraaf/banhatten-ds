import { AvatarGroup } from "@banhatten/ui";
import { Section } from "./section";

const sampleAvatars = [
  { initials: "AG", "aria-label": "User one" },
  { initials: "JD", "aria-label": "User two" },
  { initials: "MS", "aria-label": "User three" },
  { initials: "EK", "aria-label": "User four" },
];

const sampleAvatarsWithOverflow = [
  ...sampleAvatars,
  { initials: "LL", "aria-label": "User five" },
  { initials: "AM", "aria-label": "User six" },
  { initials: "RK", "aria-label": "User seven" },
];

const groupSizes = ["24", "32", "40"] as const;

export function AvatarGroupDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Avatar Group shows multiple avatars in an overlapping row. It supports three sizes (24, 32, 40 px), optional &quot;+N&quot; overflow indicator, and an optional Add More button. Use <code className="rounded bg-secondary px-1 py-0.5 text-xs">lastOnTop</code> to control which avatar is drawn on top.
        </p>
      </div>

      {/* Basic usage */}
      <Section
        title="Basic usage"
        description="Pass an array of avatars (initials and optional aria-label). Avatars overlap with negative margin."
      >
        <div className="flex flex-wrap items-end gap-6">
          <AvatarGroup avatars={sampleAvatars} size="32" />
          <AvatarGroup avatars={sampleAvatars.slice(0, 2)} size="40" />
          <AvatarGroup avatars={[{ initials: "A", "aria-label": "Solo" }]} size="24" />
        </div>
      </Section>

      {/* Sizes */}
      <Section
        title="Sizes"
        description="Three sizes: 24, 32, and 40 px (mapped to Avatar xs, md, xl)."
      >
        <div className="flex flex-wrap items-end gap-8">
          {groupSizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <AvatarGroup avatars={sampleAvatars} size={size} />
              <span className="text-tertiary text-xs">{size}px</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Last on top */}
      <Section
        title="Last on top"
        description="When true (default), the first (leftmost) avatar is drawn on top. When false, the last visible avatar is on top."
      >
        <div className="flex flex-wrap items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <AvatarGroup avatars={sampleAvatars} size="32" lastOnTop />
            <span className="text-tertiary text-xs">lastOnTop: true</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AvatarGroup avatars={sampleAvatars} size="32" lastOnTop={false} />
            <span className="text-tertiary text-xs">lastOnTop: false</span>
          </div>
        </div>
      </Section>

      {/* More avatars (+N) */}
      <Section
        title="More avatars"
        description={'When moreAvatars is true and there are more avatars than maxVisible, a "+N" overflow indicator is shown. Default maxVisible is 4.'}
      >
        <div className="flex flex-wrap items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <AvatarGroup
              avatars={sampleAvatarsWithOverflow}
              size="32"
              moreAvatars
              maxVisible={4}
            />
            <span className="text-tertiary text-xs">+3 overflow</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AvatarGroup
              avatars={sampleAvatarsWithOverflow}
              size="32"
              moreAvatars
              maxVisible={3}
            />
            <span className="text-tertiary text-xs">maxVisible: 3</span>
          </div>
        </div>
      </Section>

      {/* Add More */}
      <Section
        title="Add More"
        description="When addMore is true, an Add More button (filled plus icon) is shown after the avatars (and overflow indicator if present). Use onAddMore for the click handler."
      >
        <div className="flex flex-wrap items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <AvatarGroup
              avatars={sampleAvatars}
              size="32"
              addMore
              onAddMore={() => {}}
            />
            <span className="text-tertiary text-xs">Add only</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AvatarGroup
              avatars={sampleAvatarsWithOverflow}
              size="32"
              moreAvatars
              addMore
              onAddMore={() => {}}
            />
            <span className="text-tertiary text-xs">+N and Add</span>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { AvatarGroup } from "@banhatten/ui";

const avatars = [
  { initials: "AG", "aria-label": "Anna Green" },
  { initials: "JD", "aria-label": "Jane Doe" },
  { initials: "MS", "aria-label": "Mona Smith" },
];

// Basic
<AvatarGroup avatars={avatars} size="32" />

// With overflow and Add More
<AvatarGroup
  avatars={avatars}
  size="32"
  moreAvatars
  maxVisible={3}
  addMore
  onAddMore={() => console.log("Add")}
/>

// Last avatar on top
<AvatarGroup avatars={avatars} size="40" lastOnTop={false} />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">avatars</td>
                <td className="py-3 pr-4 font-mono text-xs">AvatarGroupItem[]</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;24&quot; | &quot;32&quot; | &quot;40&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;32&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">lastOnTop</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">true</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">moreAvatars</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">addMore</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">maxVisible</td>
                <td className="py-3 pr-4 font-mono text-xs">number</td>
                <td className="py-3 pr-4 font-mono text-xs">4</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">onAddMore</td>
                <td className="py-3 pr-4 font-mono text-xs">() =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">undefined</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          <code>AvatarGroupItem</code> is <code>{`{ initials?: string; "aria-label"?: string }`}</code>. Root has <code>role="group"</code> and optional <code>aria-label</code> (e.g. &quot;N members&quot;). Add More button has <code>aria-label="Add member"</code>. Overflow badge is <code>aria-hidden</code>.
        </p>
      </Section>
    </div>
  );
}
