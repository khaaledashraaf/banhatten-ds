"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarMenuItem,
  SidebarSubmenuItem,
  SidebarAccountCard,
  Icon,
} from "@banhatten/ui";
import { Section } from "./section";

export function SidebarDocumentation() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Sidebar is a side navigation container with three sections: header (logo + collapse
          toggle), scrollable content, and footer. It provides context so that SidebarMenuItem and
          SidebarAccountCard automatically switch to icon-only layout when collapsed. Built with
          token-only styling (rounded-sm, shadow-sm, bg-primary) and controlled or uncontrolled
          collapse state.
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Full sidebar with header, menu items (including one with submenu), and footer with account card. Use the chevron in the header to collapse or expand."
      >
        <div className="flex h-[420px] overflow-hidden rounded-lg border border-default">
          <Sidebar
            header={
              <div className="flex items-center gap-md min-w-0">
                <Icon name="star" size="sm" className="text-icon-brand shrink-0" aria-hidden />
                <span className="text-primary truncate text-sm font-semibold">Banhaten</span>
              </div>
            }
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
            footer={
              <>
                <SidebarMenuItem leftIcon="settings" onClick={() => {}}>
                  Settings
                </SidebarMenuItem>
                <SidebarMenuItem leftIcon="help" onClick={() => {}}>
                  Help
                </SidebarMenuItem>
                <SidebarAccountCard
                  username="Ahmed Galal"
                  supportingText="Free plan"
                  rightIcon="unfold_more"
                />
              </>
            }
          >
            <SidebarMenuItem leftIcon="dashboard" active onClick={() => {}}>
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem leftIcon="analytics" onClick={() => {}}>
              Analytics
            </SidebarMenuItem>
            <SidebarMenuItem leftIcon="grid_on" onClick={() => {}}>
              Creatives
            </SidebarMenuItem>
            <SidebarMenuItem
              leftIcon="edit"
              submenu={
                <>
                  <SidebarSubmenuItem onClick={() => {}}>Audience Launcher</SidebarSubmenuItem>
                  <SidebarSubmenuItem onClick={() => {}}>Automation Overview</SidebarSubmenuItem>
                  <SidebarSubmenuItem onClick={() => {}}>Budget Optimizer</SidebarSubmenuItem>
                  <SidebarSubmenuItem active onClick={() => {}}>
                    Audience Studio
                  </SidebarSubmenuItem>
                  <SidebarSubmenuItem onClick={() => {}}>Auto-Comment Tool</SidebarSubmenuItem>
                </>
              }
            >
              Advanced
            </SidebarMenuItem>
          </Sidebar>
        </div>
      </Section>

      {/* Variants: Expanded vs Collapsed */}
      <Section
        title="Expanded vs Collapsed"
        description="Sidebar supports two layout states. When collapsed, width is reduced and children (SidebarMenuItem, SidebarAccountCard) show icon-only; when expanded, full labels and submenus are visible."
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-secondary mb-3 text-sm font-medium">Expanded</p>
            <div className="flex h-64 overflow-hidden rounded-lg border border-default">
              <Sidebar
                collapsed={false}
                header={
                  <div className="flex items-center gap-md min-w-0">
                    <Icon name="star" size="sm" className="text-icon-brand shrink-0" aria-hidden />
                    <span className="text-primary truncate text-sm font-semibold">Banhaten</span>
                  </div>
                }
                footer={
                  <SidebarAccountCard
                    username="Ahmed Galal"
                    supportingText="Free plan"
                    rightIcon="unfold_more"
                  />
                }
              >
                <SidebarMenuItem leftIcon="dashboard" active onClick={() => {}}>
                  Dashboard
                </SidebarMenuItem>
                <SidebarMenuItem leftIcon="settings" onClick={() => {}}>
                  Settings
                </SidebarMenuItem>
              </Sidebar>
            </div>
          </div>
          <div>
            <p className="text-secondary mb-3 text-sm font-medium">Collapsed</p>
            <div className="flex h-64 overflow-hidden rounded-lg border border-default">
              <Sidebar
                collapsed={true}
                header={
                  <div className="flex items-center justify-center min-w-0">
                    <Icon name="star" size="sm" className="text-icon-brand shrink-0" aria-hidden />
                  </div>
                }
                footer={
                  <SidebarAccountCard
                    username="Ahmed Galal"
                    supportingText="Free plan"
                    rightIcon="unfold_more"
                  />
                }
              >
                <SidebarMenuItem leftIcon="dashboard" active onClick={() => {}}>
                  Dashboard
                </SidebarMenuItem>
                <SidebarMenuItem leftIcon="settings" onClick={() => {}}>
                  Settings
                </SidebarMenuItem>
              </Sidebar>
            </div>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import {
  Sidebar,
  SidebarMenuItem,
  SidebarSubmenuItem,
  SidebarAccountCard,
  Icon,
} from "@banhatten/ui";

<Sidebar
  header={<><Icon name="star" /> <span>Banhaten</span></>}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  footer={
    <>
      <SidebarMenuItem leftIcon="settings">Settings</SidebarMenuItem>
      <SidebarAccountCard
        username="Ahmed Galal"
        supportingText="Free plan"
        rightIcon="unfold_more"
      />
    </>
  }
>
  <SidebarMenuItem leftIcon="dashboard" active>Dashboard</SidebarMenuItem>
  <SidebarMenuItem
    leftIcon="advanced"
    submenu={
      <>
        <SidebarSubmenuItem>Audience Launcher</SidebarSubmenuItem>
        <SidebarSubmenuItem active>Audience Studio</SidebarSubmenuItem>
      </>
    }
  >
    Advanced
  </SidebarMenuItem>
</Sidebar>`}</code>
          </pre>
        </div>
      </Section>

      {/* Props */}
      <Section title="Sidebar Props">
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
                <td className="py-3 pr-4 font-mono text-xs">header</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">children</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode (content)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">footer</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">collapsed</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">onCollapsedChange</td>
                <td className="py-3 pr-4 font-mono text-xs">(collapsed: boolean) =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">defaultCollapsed</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
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
          Root is an <code>&lt;aside&gt;</code> with <code>aria-label=&quot;Sidebar&quot;</code>.
          Children (SidebarMenuItem, SidebarAccountCard) read <code>collapsed</code> from
          SidebarContext when not passed as a prop. Header includes a collapse toggle button with
          accessible label.
        </p>
      </Section>
    </div>
  );
}
