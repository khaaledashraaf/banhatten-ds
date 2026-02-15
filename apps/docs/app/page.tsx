"use client";

import { useState } from "react";
import { Menu, MenuGroup, MenuHeading, MenuItem } from "@banhatten/ui";
import { AccordionDocumentation } from "./components/accordion-documentation";
import { AlertDocumentation } from "./components/alert-documentation";
import { AvatarDocumentation } from "./components/avatar-documentation";
import { AvatarGroupDocumentation } from "./components/avatar-group-documentation";
import { AvatarProfileDocumentation } from "./components/avatar-profile-documentation";
import { BadgeDocumentation } from "./components/badge-documentation";
import { ButtonDocumentation } from "./components/button-documentation";
import { ButtonGroupDocumentation } from "./components/button-group-documentation";
import { CloseButtonDocumentation } from "./components/close-button-documentation";
import { DividerDocumentation } from "./components/divider-documentation";
import { FeaturedIconDocumentation } from "./components/featured-icon-documentation";
import { ProgressBarDocumentation } from "./components/progress-bar-documentation";
import { IconDocumentation } from "./components/icon-documentation";
import { InputDocumentation } from "./components/input-documentation";
import { MenuDocumentation } from "./components/menu-documentation";
import { MenuItemDocumentation } from "./components/menu-item-documentation";
import { MenuHeadingDocumentation } from "./components/menu-heading-documentation";
import { MenuGroupDocumentation } from "./components/menu-group-documentation";
import { TextAreaDocumentation } from "./components/textarea-documentation";
import { CheckboxDocumentation } from "./components/checkbox-documentation";
import { RadioDocumentation } from "./components/radio-documentation";
import { TagDocumentation } from "./components/tag-documentation";
import { ToggleDocumentation } from "./components/toggle-documentation";
import { TooltipDocumentation } from "./components/tooltip-documentation";
import { TokensDocumentation } from "./components/tokens-documentation";
import { ImplementationPlayground } from "./components/implementation-playground";
import { EcommerceLanding } from "./components/ecommerce-landing";
import { DashboardExample } from "./components/dashboard-example";
import { WorkspaceSettingsExample } from "./components/workspace-settings-example";
import { SampleProfilePage } from "./components/sample-profile-page";

// ============================================================================
// Navigation Data
// ============================================================================
const navigation = [
  {
    title: "Foundation",
    items: [
      { name: "Tokens", href: "tokens" },
      { name: "Icons", href: "icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Alert", href: "alert" },
      { name: "Accordion", href: "accordion" },
      { name: "Avatar", href: "avatar" },
      { name: "Avatar Group", href: "avatar-group" },
      { name: "Avatar Profile", href: "avatar-profile" },
      { name: "Badge", href: "badge" },
      { name: "Button", href: "button" },
      { name: "Button Group", href: "button-group" },
      { name: "Close Button", href: "close-button" },
      { name: "Divider", href: "divider" },
      { name: "Featured Icon", href: "featured-icon" },
      { name: "Progress Bar", href: "progress-bar" },
      { name: "Input", href: "input" },
      { name: "Menu", href: "menu" },
      { name: "Menu Item", href: "menu-item" },
      { name: "Menu Heading", href: "menu-heading" },
      { name: "Menu Group", href: "menu-group" },
      { name: "Text Area", href: "textarea" },
      { name: "Checkbox", href: "checkbox" },
      { name: "Radio", href: "radio" },
      { name: "Tag", href: "tag" },
      { name: "Toggle", href: "toggle" },
      { name: "Tooltip", href: "tooltip" },
    ],
  },
  {
    title: "Examples",
    items: [
      { name: "Implementation Playground", href: "playground" },
      { name: "E-commerce Landing", href: "ecommerce" },
      { name: "Dashboard", href: "dashboard" },
      { name: "AI Workspace Settings", href: "workspace-settings" },
      { name: "Sample Profile Page", href: "sample-profile" },
    ],
  },
];

// ============================================================================
// Sidebar Component
// ============================================================================
function Sidebar({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 border-r border-default bg-primary md:block">
      <div className="flex h-14 items-center border-b border-default px-4">
        <span className="text-primary font-semibold">Banhatten DS</span>
      </div>
      <nav className="h-[calc(100vh-3.5rem)] overflow-y-auto" aria-label="Documentation">
        <Menu className="rounded-none border-0 bg-transparent p-0 shadow-none">
          {navigation.map((group, groupIndex) => (
            <MenuGroup
              key={group.title}
              heading={
                <MenuHeading>
                  {group.title}
                </MenuHeading>
              }
              headingId={`sidebar-nav-${groupIndex}`}
            >
              {group.items.map((item) => (
                <MenuItem
                  key={item.href}
                  active={activeSection === item.href}
                  onClick={() => onNavigate(item.href)}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuGroup>
          ))}
        </Menu>
      </nav>
    </aside>
  );
}

// ============================================================================
// Main Page Component
// ============================================================================
export default function Home() {
  const [activeSection, setActiveSection] = useState("tokens");

  const pageMeta: Record<string, { title: string; description: string }> = {
    tokens: {
      title: "Design Tokens",
      description: "Complete token documentation for colors, spacing, radius, and more.",
    },
    icons: {
      title: "Icons",
      description: "Material Symbols variable font for scalable, customizable icons.",
    },
    accordion: {
      title: "Accordion",
      description: "Collapsible sections of related content. States: default, hover, disabled. Optional icon left, divider, single or multiple open.",
    },
    alert: {
      title: "Alert",
      description: "Contextual feedback messages with multiple types, emphasis levels, and expandable content.",
    },
    avatar: {
      title: "Avatar",
      description: "User representation with initials or a fallback person icon. Supports circle and rounded shapes and eight sizes.",
    },
    "avatar-group": {
      title: "Avatar Group",
      description: "Overlapping row of avatars with optional +N overflow indicator and Add More button. Sizes 24, 32, 40 px.",
    },
    "avatar-profile": {
      title: "Avatar Profile",
      description: "Avatar with border, shadow, and optional top-right and bottom-right badge slots for edit or status icons.",
    },
    badge: {
      title: "Badge",
      description: "A small label component for highlighting status or metadata.",
    },
    button: {
      title: "Button",
      description: "Interactive element for triggering actions and navigation.",
    },
    "button-group": {
      title: "Button Group",
      description: "Horizontal container that groups related Button Group Items with a shared border, rounded corners, and dividers between items. Use for view toggles, filters, or mutually exclusive choices.",
    },
    "close-button": {
      title: "Close Button",
      description: "Dedicated dismiss control with close icon and default aria-label for alerts, modals, and tags.",
    },
    divider: {
      title: "Divider",
      description: "Visual separator for organizing content into distinct sections.",
    },
    "featured-icon": {
      title: "Featured Icon",
      description: "Icon in a colored container for emphasis and hierarchy. Variants: circle light, square light, circle pulse, solid circle, solid square. Types: brand, success, danger, warning, info, neutral. Sizes: sm, md, lg. Material Symbol filled only.",
    },
    "progress-bar": {
      title: "Progress Bar",
      description: "Visual indicator of task or process completion. Sizes sm/lg, five colors, optional label, value, helper text, and refresh action. Supports indeterminate state.",
    },
    input: {
      title: "Input",
      description: "Text input component for collecting user-entered data with labels, validation, and icons.",
    },
    menu: {
      title: "Menu",
      description: "Top-level container for one or more Menu Groups. Token-only panel (rounded-sm, bg-primary, py-md, shadow-sm). Inserts Divider between groups.",
    },
    "menu-item": {
      title: "Menu Item",
      description: "Base row for building menus. Types: default, multiline, callToAction, progress. Optional slots: icon left/right, avatar, badge, switch, text right, CTA button. Token-only.",
    },
    "menu-heading": {
      title: "Menu Heading",
      description: "Non-interactive section label for menu groups. Token-only styling (px-md py-xs, text-sm font-medium text-tertiary). Use with aria-labelledby for accessibility.",
    },
    "menu-group": {
      title: "Menu Group",
      description: "Groups one optional Menu Heading and one or more Menu Items. Token spacing (mb-sm) between heading and items. role=\"group\", optional headingId for aria-labelledby.",
    },
    textarea: {
      title: "Text Area",
      description: "Multi-line text input component for collecting longer user-entered data with labels, validation, and helper text.",
    },
    checkbox: {
      title: "Checkbox",
      description: "Selection control for toggling options on/off, with label, support text, and card variants.",
    },
    radio: {
      title: "Radio",
      description: "Selection control for choosing a single option from a group, with label, support text, and card variants.",
    },
    tag: {
      title: "Tag",
      description: "Compact labels for categorizing, filtering, or marking items. Supports multiple types, states, sizes, and optional close button.",
    },
    toggle: {
      title: "Toggle",
      description: "Switch component for toggling between on/off states. Supports two sizes, optional icons, and optional label with support text.",
    },
    tooltip: {
      title: "Tooltip",
      description: "Contextual information displayed on hover or focus. Supports two sizes (small single-line, large with title/subtitle), two visual styles (dark and light), and four placement directions (top, bottom, left, right).",
    },
  };

  const { title: pageTitle, description: pageDescription } = pageMeta[activeSection] || pageMeta.tokens;

  return (
    <div className="min-h-screen bg-primary">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Main Content */}
      <main className="md:pl-64">
        {activeSection === "playground" ? (
          <ImplementationPlayground />
        ) : activeSection === "ecommerce" ? (
          <EcommerceLanding />
        ) : activeSection === "dashboard" ? (
          <DashboardExample />
        ) : activeSection === "workspace-settings" ? (
          <WorkspaceSettingsExample />
        ) : activeSection === "sample-profile" ? (
          <SampleProfilePage />
        ) : (
          <div className="px-6 py-10 md:px-12 lg:px-16">
            {/* Header */}
            <header className="border-default mb-12 border-b pb-8">
              <h1 className="text-primary text-3xl font-bold tracking-tight md:text-4xl">
                {pageTitle}
              </h1>
              <p className="text-secondary mt-2 text-base">{pageDescription}</p>
            </header>

            {/* Content */}
            {activeSection === "tokens" && <TokensDocumentation />}
            {activeSection === "icons" && <IconDocumentation />}
            {activeSection === "alert" && <AlertDocumentation />}
            {activeSection === "accordion" && <AccordionDocumentation />}
            {activeSection === "avatar" && <AvatarDocumentation />}
            {activeSection === "avatar-group" && <AvatarGroupDocumentation />}
            {activeSection === "avatar-profile" && <AvatarProfileDocumentation />}
            {activeSection === "badge" && <BadgeDocumentation />}
            {activeSection === "button" && <ButtonDocumentation />}
            {activeSection === "button-group" && <ButtonGroupDocumentation />}
            {activeSection === "close-button" && <CloseButtonDocumentation />}
            {activeSection === "divider" && <DividerDocumentation />}
            {activeSection === "featured-icon" && <FeaturedIconDocumentation />}
            {activeSection === "progress-bar" && <ProgressBarDocumentation />}
            {activeSection === "input" && <InputDocumentation />}
            {activeSection === "menu" && <MenuDocumentation />}
            {activeSection === "menu-item" && <MenuItemDocumentation />}
            {activeSection === "menu-heading" && <MenuHeadingDocumentation />}
            {activeSection === "menu-group" && <MenuGroupDocumentation />}
            {activeSection === "textarea" && <TextAreaDocumentation />}
            {activeSection === "checkbox" && <CheckboxDocumentation />}
            {activeSection === "radio" && <RadioDocumentation />}
            {activeSection === "tag" && <TagDocumentation />}
            {activeSection === "toggle" && <ToggleDocumentation />}
            {activeSection === "tooltip" && <TooltipDocumentation />}
          </div>
        )}
      </main>
    </div>
  );
}
