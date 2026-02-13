"use client";

import { useState } from "react";
import { AlertDocumentation } from "./components/alert-documentation";
import { BadgeDocumentation } from "./components/badge-documentation";
import { ButtonDocumentation } from "./components/button-documentation";
import { DividerDocumentation } from "./components/divider-documentation";
import { IconDocumentation } from "./components/icon-documentation";
import { InputDocumentation } from "./components/input-documentation";
import { TextAreaDocumentation } from "./components/textarea-documentation";
import { CheckboxDocumentation } from "./components/checkbox-documentation";
import { RadioDocumentation } from "./components/radio-documentation";
import { TagDocumentation } from "./components/tag-documentation";
import { TokensDocumentation } from "./components/tokens-documentation";
import { ImplementationPlayground } from "./components/implementation-playground";
import { EcommerceLanding } from "./components/ecommerce-landing";
import { DashboardExample } from "./components/dashboard-example";

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
      { name: "Badge", href: "badge" },
      { name: "Button", href: "button" },
      { name: "Divider", href: "divider" },
      { name: "Input", href: "input" },
      { name: "Text Area", href: "textarea" },
      { name: "Checkbox", href: "checkbox" },
      { name: "Radio", href: "radio" },
      { name: "Tag", href: "tag" },
    ],
  },
  {
    title: "Examples",
    items: [
      { name: "Implementation Playground", href: "playground" },
      { name: "E-commerce Landing", href: "ecommerce" },
      { name: "Dashboard", href: "dashboard" },
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
      <div className="flex h-14 items-center border-b border-default px-6">
        <span className="text-primary font-semibold">Banhatten DS</span>
      </div>
      <nav className="h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
        {navigation.map((group) => (
          <div key={group.title} className="mb-6">
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-tertiary">
              {group.title}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => onNavigate(item.href)}
                    className={`w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                      activeSection === item.href
                        ? "bg-brand-tertiary text-brand font-medium"
                        : "text-secondary hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
    alert: {
      title: "Alert",
      description: "Contextual feedback messages with multiple types, emphasis levels, and expandable content.",
    },
    badge: {
      title: "Badge",
      description: "A small label component for highlighting status or metadata.",
    },
    button: {
      title: "Button",
      description: "Interactive element for triggering actions and navigation.",
    },
    divider: {
      title: "Divider",
      description: "Visual separator for organizing content into distinct sections.",
    },
    input: {
      title: "Input",
      description: "Text input component for collecting user-entered data with labels, validation, and icons.",
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
            {activeSection === "badge" && <BadgeDocumentation />}
            {activeSection === "button" && <ButtonDocumentation />}
            {activeSection === "divider" && <DividerDocumentation />}
            {activeSection === "input" && <InputDocumentation />}
            {activeSection === "textarea" && <TextAreaDocumentation />}
            {activeSection === "checkbox" && <CheckboxDocumentation />}
            {activeSection === "radio" && <RadioDocumentation />}
            {activeSection === "tag" && <TagDocumentation />}
          </div>
        )}
      </main>
    </div>
  );
}
