"use client";

import { Link } from "next-view-transitions";
import { useState } from "react";
import { Sidebar, SidebarAccountCard, SidebarMenuItem, SidebarSubmenuItem } from "@banhatten/ui";
import { AccordionDocumentation } from "../components/accordion-documentation";
import { AlertDocumentation } from "../components/alert-documentation";
import { AvatarDocumentation } from "../components/avatar-documentation";
import { AvatarGroupDocumentation } from "../components/avatar-group-documentation";
import { AvatarProfileDocumentation } from "../components/avatar-profile-documentation";
import { BadgeDocumentation } from "../components/badge-documentation";
import { ButtonDocumentation } from "../components/button-documentation";
import { ButtonGroupDocumentation } from "../components/button-group-documentation";
import { CloseButtonDocumentation } from "../components/close-button-documentation";
import { DividerDocumentation } from "../components/divider-documentation";
import { FeaturedIconDocumentation } from "../components/featured-icon-documentation";
import { ProgressBarDocumentation } from "../components/progress-bar-documentation";
import { SliderDocumentation } from "../components/slider-documentation";
import { SliderHandleDocumentation } from "../components/slider-handle-documentation";
import { IconDocumentation } from "../components/icon-documentation";
import { InputDocumentation } from "../components/input-documentation";
import { MenuDocumentation } from "../components/menu-documentation";
import { MenuItemDocumentation } from "../components/menu-item-documentation";
import { SidebarDocumentation } from "../components/sidebar-documentation";
import { MenuHeadingDocumentation } from "../components/menu-heading-documentation";
import { MenuGroupDocumentation } from "../components/menu-group-documentation";
import { TextAreaDocumentation } from "../components/textarea-documentation";
import { CheckboxDocumentation } from "../components/checkbox-documentation";
import { RadioDocumentation } from "../components/radio-documentation";
import { TagDocumentation } from "../components/tag-documentation";
import { ToggleDocumentation } from "../components/toggle-documentation";
import { TooltipDocumentation } from "../components/tooltip-documentation";
import { TokensDocumentation } from "../components/tokens-documentation";
import { IntroductionDocumentation } from "../components/introduction-documentation";
import { HowToUseDocumentation } from "../components/how-to-use-documentation";
import { ImplementationPlayground } from "../components/implementation-playground";
import { EcommerceLanding } from "../components/ecommerce-landing";
import { DashboardExample } from "../components/dashboard-example";
import { WorkspaceSettingsExample } from "../components/workspace-settings-example";
import { SampleProfilePage } from "../components/sample-profile-page";

// ============================================================================
// Navigation Data
// ============================================================================
const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "introduction" },
      { name: "How to Use", href: "how-to-use" },
    ],
  },
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
      { name: "Slider", href: "slider" },
      { name: "Slider Handle", href: "slider-handle" },
      { name: "Input", href: "input" },
      { name: "Menu", href: "menu" },
      { name: "Menu Item", href: "menu-item" },
      { name: "Menu Heading", href: "menu-heading" },
      { name: "Menu Group", href: "menu-group" },
      { name: "Sidebar", href: "sidebar" },
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

const mainNavigation = navigation.slice(0, 3);
const examplesGroup = navigation[3];

// ============================================================================
// Docs sidebar nav (Foundation + Components)
// ============================================================================
function DocsSidebarNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  return (
    <nav className="flex flex-col gap-sm" aria-label="Documentation">
      {mainNavigation.map((group) => (
        <SidebarMenuItem
          key={group.title}
          defaultExpanded={true}
          submenu={
            <>
              {group.items.map((item) => (
                <SidebarSubmenuItem
                  key={item.href}
                  active={activeSection === item.href}
                  onClick={() => onNavigate(item.href)}
                >
                  {item.name}
                </SidebarSubmenuItem>
              ))}
            </>
          }
        >
          {group.title}
        </SidebarMenuItem>
      ))}
    </nav>
  );
}

// ============================================================================
// Sidebar footer: Examples + Account card
// ============================================================================
function DocsSidebarFooter({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  return (
    <>
      <SidebarMenuItem
        key={examplesGroup.title}
        defaultExpanded={false}
        submenu={
          <>
            {examplesGroup.items.map((item) => (
              <SidebarSubmenuItem
                key={item.href}
                active={activeSection === item.href}
                onClick={() => onNavigate(item.href)}
              >
                {item.name}
              </SidebarSubmenuItem>
            ))}
          </>
        }
      >
        {examplesGroup.title}
      </SidebarMenuItem>
      <SidebarAccountCard
        username="Khaled Ashraf"
        supportingText="kelmalih@noon.com"
        initials="KA"
        aria-label="Khaled Ashraf"
      />
    </>
  );
}

// ============================================================================
// Main Page Component
// ============================================================================
export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const pageMeta: Record<string, { title: string; description: string }> = {
    introduction: {
      title: "Introduction",
      description: "Overview of the Banhatten Design System: packages, tech stack, and what you get.",
    },
    "how-to-use": {
      title: "How to Use",
      description: "Installation, Tailwind setup, Material Symbols, and usage guide for @banhatten/ui and @banhatten/tokens.",
    },
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
    slider: {
      title: "Slider",
      description: "Single-node slider for selecting a value from a continuous range. Progress bar (large) as track, draggable handle, optional value on handle (tooltip or label), label and helper text, custom formatValue.",
    },
    "slider-handle": {
      title: "Slider Handle",
      description: "Draggable circle for Slider. States: default, hover, active. Sizes: sm, md, lg. Optional value as tooltip or label, above or below. Use state prop for static display.",
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
    sidebar: {
      title: "Sidebar",
      description: "Side navigation with header (logo + collapse toggle), scrollable content, and footer. SidebarMenuItem, SidebarSubmenuItem, and SidebarAccountCard receive collapsed state via context for icon-only layout.",
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

  const { title: pageTitle, description: pageDescription } = pageMeta[activeSection] || pageMeta.introduction;

  return (
    <div className="min-h-screen bg-primary">
      <div className="fixed left-0 top-0 z-30 hidden h-screen md:block">
        <Sidebar
          header={
            <Link href="/" className="block">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-full.svg`}
                alt="Banhatten DS"
                className="h-8 w-auto max-w-full object-contain"
              />
            </Link>
          }
          footer={
            <DocsSidebarFooter
              activeSection={activeSection}
              onNavigate={setActiveSection}
            />
          }
        >
          <DocsSidebarNav activeSection={activeSection} onNavigate={setActiveSection} />
        </Sidebar>
      </div>

      {/* Main Content */}
      <main className="md:pl-64">
        <div key={activeSection} className="animate-fade-in">
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
            {activeSection === "introduction" && <IntroductionDocumentation />}
            {activeSection === "how-to-use" && <HowToUseDocumentation />}
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
            {activeSection === "slider" && <SliderDocumentation />}
            {activeSection === "slider-handle" && <SliderHandleDocumentation />}
            {activeSection === "input" && <InputDocumentation />}
            {activeSection === "menu" && <MenuDocumentation />}
            {activeSection === "menu-item" && <MenuItemDocumentation />}
            {activeSection === "menu-heading" && <MenuHeadingDocumentation />}
            {activeSection === "menu-group" && <MenuGroupDocumentation />}
            {activeSection === "sidebar" && <SidebarDocumentation />}
            {activeSection === "textarea" && <TextAreaDocumentation />}
            {activeSection === "checkbox" && <CheckboxDocumentation />}
            {activeSection === "radio" && <RadioDocumentation />}
            {activeSection === "tag" && <TagDocumentation />}
            {activeSection === "toggle" && <ToggleDocumentation />}
            {activeSection === "tooltip" && <TooltipDocumentation />}
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
