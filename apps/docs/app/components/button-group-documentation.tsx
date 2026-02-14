"use client";

import { useState } from "react";
import { ButtonGroup, ButtonGroupItem } from "@banhatten/ui";
import { Section } from "./section";

const initialSelected: Record<string, number> = {
  basic0: 1,
  basic1: 1,
  sizeSmall: 1,
  sizeMedium: 1,
  typeTextIcon: 1,
  typeTextOnly: 1,
  typeIconOnly: 1,
  states: 1,
};

export function ButtonGroupDocumentation() {
  const [selected, setSelected] = useState(initialSelected);

  const select = (group: string, index: number) =>
    setSelected((s) => ({ ...s, [group]: index }));

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Button Group is a horizontal container that groups related Button Group Item components
          into a single unit. The parent has rounded corners and a border; vertical dividers are
          inserted between items. Use it for mutually exclusive or related choices (e.g. view
          toggles, filters).
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Wrap two or more ButtonGroupItem children. The group adds a border, background, and dividers between items. Click an item to select it."
      >
        <div className="flex flex-wrap gap-8">
          <ButtonGroup aria-label="View options">
            <ButtonGroupItem selected={selected.basic0 === 0} onClick={() => select("basic0", 0)}>
              List
            </ButtonGroupItem>
            <ButtonGroupItem selected={selected.basic0 === 1} onClick={() => select("basic0", 1)}>
              Grid
            </ButtonGroupItem>
            <ButtonGroupItem selected={selected.basic0 === 2} onClick={() => select("basic0", 2)}>
              Map
            </ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup aria-label="Filters">
            <ButtonGroupItem leftIcon="filter_list" selected={selected.basic1 === 0} onClick={() => select("basic1", 0)}>
              All
            </ButtonGroupItem>
            <ButtonGroupItem leftIcon="filter_list" selected={selected.basic1 === 1} onClick={() => select("basic1", 1)}>
              Active
            </ButtonGroupItem>
            <ButtonGroupItem leftIcon="filter_list" selected={selected.basic1 === 2} onClick={() => select("basic1", 2)}>
              Done
            </ButtonGroupItem>
          </ButtonGroup>
        </div>
      </Section>

      {/* Item sizes */}
      <Section
        title="Item sizes"
        description="ButtonGroupItem supports small and medium. Use the same size for all items in a group for consistency."
      >
        <div className="flex flex-wrap items-end gap-8">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Small</p>
            <ButtonGroup aria-label="Size small">
              <ButtonGroupItem size="small" selected={selected.sizeSmall === 0} onClick={() => select("sizeSmall", 0)}>
                One
              </ButtonGroupItem>
              <ButtonGroupItem size="small" selected={selected.sizeSmall === 1} onClick={() => select("sizeSmall", 1)}>
                Two
              </ButtonGroupItem>
              <ButtonGroupItem size="small" selected={selected.sizeSmall === 2} onClick={() => select("sizeSmall", 2)}>
                Three
              </ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Medium</p>
            <ButtonGroup aria-label="Size medium">
              <ButtonGroupItem size="medium" selected={selected.sizeMedium === 0} onClick={() => select("sizeMedium", 0)}>
                One
              </ButtonGroupItem>
              <ButtonGroupItem size="medium" selected={selected.sizeMedium === 1} onClick={() => select("sizeMedium", 1)}>
                Two
              </ButtonGroupItem>
              <ButtonGroupItem size="medium" selected={selected.sizeMedium === 2} onClick={() => select("sizeMedium", 2)}>
                Three
              </ButtonGroupItem>
            </ButtonGroup>
          </div>
        </div>
      </Section>

      {/* Item type: textAndIcon, textOnly, iconOnly */}
      <Section
        title="Item content type"
        description="Items can show text and icon (textAndIcon), text only (textOnly), or icon only (iconOnly). Icon-only items require aria-label."
      >
        <div className="space-y-6 flex flex-wrap items-start gap-8">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Text + icon</p>
            <ButtonGroup aria-label="Text and icon">
              <ButtonGroupItem leftIcon="list" selected={selected.typeTextIcon === 0} onClick={() => select("typeTextIcon", 0)}>
                List
              </ButtonGroupItem>
              <ButtonGroupItem leftIcon="grid_view" selected={selected.typeTextIcon === 1} onClick={() => select("typeTextIcon", 1)}>
                Grid
              </ButtonGroupItem>
              <ButtonGroupItem rightIcon="map" selected={selected.typeTextIcon === 2} onClick={() => select("typeTextIcon", 2)}>
                Map
              </ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Text only</p>
            <ButtonGroup aria-label="Text only">
              <ButtonGroupItem type="textOnly" selected={selected.typeTextOnly === 0} onClick={() => select("typeTextOnly", 0)}>
                Day
              </ButtonGroupItem>
              <ButtonGroupItem type="textOnly" selected={selected.typeTextOnly === 1} onClick={() => select("typeTextOnly", 1)}>
                Week
              </ButtonGroupItem>
              <ButtonGroupItem type="textOnly" selected={selected.typeTextOnly === 2} onClick={() => select("typeTextOnly", 2)}>
                Month
              </ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Icon only</p>
            <ButtonGroup aria-label="Sort order">
              <ButtonGroupItem type="iconOnly" icon="arrow_upward" aria-label="Ascending" selected={selected.typeIconOnly === 0} onClick={() => select("typeIconOnly", 0)} />
              <ButtonGroupItem type="iconOnly" icon="arrow_downward" aria-label="Descending" selected={selected.typeIconOnly === 1} onClick={() => select("typeIconOnly", 1)} />
            </ButtonGroup>
          </div>
        </div>
      </Section>

      {/* States: disabled */}
      <Section
        title="Item states"
        description="Items support selected (aria-current) and disabled. The third item is disabled and cannot be selected."
      >
        <div className="flex flex-wrap items-start gap-8">
          <ButtonGroup aria-label="States">
            <ButtonGroupItem selected={selected.states === 0} onClick={() => select("states", 0)}>
              Default
            </ButtonGroupItem>
            <ButtonGroupItem selected={selected.states === 1} onClick={() => select("states", 1)}>
              Selected
            </ButtonGroupItem>
            <ButtonGroupItem disabled>Disabled</ButtonGroupItem>
          </ButtonGroup>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import { ButtonGroup, ButtonGroupItem } from "@banhatten/ui";

// Basic group (2–5 items typical)
<ButtonGroup aria-label="View options">
  <ButtonGroupItem>List</ButtonGroupItem>
  <ButtonGroupItem selected>Grid</ButtonGroupItem>
  <ButtonGroupItem>Map</ButtonGroupItem>
</ButtonGroup>

// With icons
<ButtonGroup aria-label="Filters">
  <ButtonGroupItem leftIcon="filter_list">All</ButtonGroupItem>
  <ButtonGroupItem selected leftIcon="filter_list">Active</ButtonGroupItem>
</ButtonGroup>

// Text only items
<ButtonGroup aria-label="Range">
  <ButtonGroupItem type="textOnly">Day</ButtonGroupItem>
  <ButtonGroupItem type="textOnly" selected>Week</ButtonGroupItem>
</ButtonGroup>

// Icon-only (aria-label required per item)
<ButtonGroup aria-label="Sort">
  <ButtonGroupItem type="iconOnly" icon="arrow_upward" aria-label="Ascending" />
  <ButtonGroupItem type="iconOnly" icon="arrow_downward" selected aria-label="Descending" />
</ButtonGroup>`}</code>
          </pre>
        </div>
      </Section>

      {/* Props: ButtonGroup */}
      <Section title="ButtonGroup props">
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
                <td className="py-3 pr-4 font-mono text-xs">children</td>
                <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className, ...</td>
                <td className="py-3 pr-4 font-mono text-xs">HTMLDivElement</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          ButtonGroup accepts all standard div attributes. Use <code>aria-label</code> to describe
          the group (e.g. &quot;View options&quot;, &quot;Filters&quot;). Root has{" "}
          <code>role=&quot;group&quot;</code>. Vertical dividers between children are decorative (
          <code>aria-hidden</code>).
        </p>
      </Section>

      {/* Props: ButtonGroupItem */}
      <Section title="ButtonGroupItem props">
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
                <td className="py-3 pr-4 font-mono text-xs">size</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;small&quot; | &quot;medium&quot;</td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;medium&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">type</td>
                <td className="py-3 pr-4 font-mono text-xs">
                  &quot;textAndIcon&quot; | &quot;textOnly&quot; | &quot;iconOnly&quot;
                </td>
                <td className="py-3 pr-4 font-mono text-xs">&quot;textAndIcon&quot;</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">selected</td>
                <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs">false</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">leftIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">string (Material Symbol name)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">rightIcon</td>
                <td className="py-3 pr-4 font-mono text-xs">string (Material Symbol name)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr className="border-b border-secondary">
                <td className="py-3 pr-4 font-mono text-xs">icon</td>
                <td className="py-3 pr-4 font-mono text-xs">string (for type=&quot;iconOnly&quot;)</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">className, disabled, ...</td>
                <td className="py-3 pr-4 font-mono text-xs">ButtonHTMLAttributes</td>
                <td className="py-3 pr-4 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          When <code>selected</code> is true, the item gets <code>aria-current=&quot;true&quot;</code>.
          Icon-only items must receive an <code>aria-label</code> (or ensure the button has an
          accessible name).
        </p>
      </Section>
    </div>
  );
}
