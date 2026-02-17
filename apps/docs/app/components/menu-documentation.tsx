import { Menu, MenuGroup, MenuHeading, MenuItem } from "banhatten-ui";
import { Section } from "./section";

export function MenuDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Menu is the top-level container for one or more Menu Groups. It renders a rounded panel
          with token-only styling (rounded-sm, bg-primary, py-md px-sm, shadow-sm) and automatically
          inserts a horizontal Divider with <code>my-sm</code> between each child group.
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Pass one or more MenuGroup as children. Dividers are inserted between groups."
      >
        <div className="max-w-[320px]">
          <Menu>
            <MenuGroup
              heading={<MenuHeading>Section header</MenuHeading>}
              headingId="demo-menu-g1"
            >
              <MenuItem onClick={() => {}}>Text item</MenuItem>
              <MenuItem onClick={() => {}}>Text item</MenuItem>
              <MenuItem onClick={() => {}}>Text item</MenuItem>
            </MenuGroup>
            <MenuGroup
              heading={<MenuHeading>Section header</MenuHeading>}
              headingId="demo-menu-g2"
            >
              <MenuItem onClick={() => {}}>Text item</MenuItem>
              <MenuItem onClick={() => {}}>Text item</MenuItem>
              <MenuItem onClick={() => {}}>Text item</MenuItem>
            </MenuGroup>
            <MenuGroup
              heading={<MenuHeading>Section header</MenuHeading>}
              headingId="demo-menu-g3"
            >
              <MenuItem onClick={() => {}}>Text item</MenuItem>
              <MenuItem onClick={() => {}}>Text item</MenuItem>
              <MenuItem onClick={() => {}}>Text item</MenuItem>
            </MenuGroup>
          </Menu>
        </div>
      </Section>

      {/* Single group */}
      <Section
        title="Single group"
        description="One MenuGroup: no divider is rendered (dividers only appear between children)."
      >
        <div className="max-w-[320px]">
          <Menu>
            <MenuGroup
              heading={<MenuHeading>Account</MenuHeading>}
              headingId="demo-menu-single"
            >
              <MenuItem onClick={() => {}}>Profile</MenuItem>
              <MenuItem onClick={() => {}}>Settings</MenuItem>
            </MenuGroup>
          </Menu>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { Menu, MenuGroup, MenuHeading, MenuItem } from "banhatten-ui";

// Multiple groups (dividers inserted between them)
<Menu>
  <MenuGroup
    heading={<MenuHeading>Section header</MenuHeading>}
    headingId="group-1"
  >
    <MenuItem onClick={...}>Text item</MenuItem>
    <MenuItem onClick={...}>Text item</MenuItem>
  </MenuGroup>
  <MenuGroup
    heading={<MenuHeading>Section header</MenuHeading>}
    headingId="group-2"
  >
    <MenuItem onClick={...}>Text item</MenuItem>
  </MenuGroup>
</Menu>

// Single group
<Menu>
  <MenuGroup heading={<MenuHeading>Account</MenuHeading>} headingId="account">
    <MenuItem onClick={...}>Profile</MenuItem>
    <MenuItem onClick={...}>Settings</MenuItem>
  </MenuGroup>
</Menu>`}</code>
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
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">children</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode (one or more MenuGroup)</td>
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
          Root is a <code>&lt;div&gt;</code>. A horizontal <code>Divider</code> with{" "}
          <code>className=&quot;my-sm&quot;</code> is inserted between each child. Parent can set{" "}
          <code>role=&quot;menu&quot;</code> when used in a dropdown.
        </p>
      </Section>
    </div>
  );
}
