import { MenuHeading, MenuItem } from "banhatten-ui";
import { Section } from "./section";

export function MenuHeadingDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Menu Heading is a non-interactive section label for grouping menu items. It uses token-only
          styling (px-md py-xs, text-sm font-medium text-tertiary). Use it above a list of Menu Items
          to label a section; the parent can use <code>aria-labelledby</code> with this element&apos;s{" "}
          <code>id</code> for accessibility.
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Pass the heading text as children. Renders as a div with muted tertiary text."
      >
        <div className="flex flex-col gap-0 max-w-[320px] rounded-md border border-default overflow-hidden p-0">
          <MenuHeading>Section header</MenuHeading>
          <MenuItem onClick={() => {}}>Item one</MenuItem>
          <MenuItem onClick={() => {}}>Item two</MenuItem>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { MenuHeading, MenuItem } from "banhatten-ui";

// Standalone heading
<MenuHeading>Section header</MenuHeading>

// With menu items (e.g. inside a menu group)
<MenuHeading id="group-1-label">Account</MenuHeading>
<MenuItem onClick={...}>Profile</MenuItem>
<MenuItem onClick={...}>Settings</MenuItem>

// With custom className
<MenuHeading className="mt-4">Another section</MenuHeading>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className, id, etc.</td>
                <td className="py-3 pr-4 font-mono text-xs">HTMLDivElement</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Root is a <code>&lt;div&gt;</code>. No role or ARIA by default; when used in a menu group,
          set <code>id</code> on the heading and use <code>aria-labelledby</code> on the group
          container.
        </p>
      </Section>
    </div>
  );
}
