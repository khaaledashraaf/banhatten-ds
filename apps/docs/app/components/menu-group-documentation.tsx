import { MenuGroup, MenuHeading, MenuItem } from "@banhatten/ui";
import { Section } from "./section";

export function MenuGroupDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Menu Group wraps one optional Menu Heading and one or more Menu Items. It applies
          token-only spacing (<code>mb-sm</code>) between the heading and the first item. Use{" "}
          <code>headingId</code> so the root <code>role=&quot;group&quot;</code> can set{" "}
          <code>aria-labelledby</code> for accessibility.
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="With heading: pass heading and children (menu items). Heading is wrapped with mb-sm for spacing."
      >
        <div className="max-w-[320px] rounded-md border border-default overflow-hidden p-0">
          <MenuGroup
            heading={<MenuHeading>Section header</MenuHeading>}
            headingId="demo-group-1"
          >
            <MenuItem onClick={() => {}}>Text item</MenuItem>
            <MenuItem onClick={() => {}}>Text item</MenuItem>
            <MenuItem onClick={() => {}}>Text item</MenuItem>
          </MenuGroup>
        </div>
      </Section>

      {/* Without heading */}
      <Section
        title="Without heading"
        description="Omit heading when the group has no section label. Children only (one or more menu items)."
      >
        <div className="max-w-[320px] rounded-md border border-default overflow-hidden p-0">
          <MenuGroup>
            <MenuItem onClick={() => {}}>Item one</MenuItem>
            <MenuItem onClick={() => {}}>Item two</MenuItem>
          </MenuGroup>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { MenuGroup, MenuHeading, MenuItem } from "@banhatten/ui";

// With heading and aria-labelledby
<MenuGroup
  heading={<MenuHeading>Section header</MenuHeading>}
  headingId="group-1"
>
  <MenuItem onClick={...}>Text item</MenuItem>
  <MenuItem onClick={...}>Text item</MenuItem>
</MenuGroup>

// Without heading
<MenuGroup>
  <MenuItem onClick={...}>Item one</MenuItem>
  <MenuItem onClick={...}>Item two</MenuItem>
</MenuGroup>

// With custom className
<MenuGroup className="border border-default rounded-md" heading={...}>
  ...
</MenuGroup>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">heading</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">children</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">headingId</td>
                <td className="py-3 pr-4 font-mono text-xs">string</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className, etc.</td>
                <td className="py-3 pr-4 font-mono text-xs">HTMLDivElement</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Root is a <code>&lt;div&gt;</code> with <code>role=&quot;group&quot;</code>. When{" "}
          <code>heading</code> and <code>headingId</code> are set, the heading wrapper gets that{" "}
          <code>id</code> and the root gets <code>aria-labelledby</code>.
        </p>
      </Section>
    </div>
  );
}
