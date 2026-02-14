import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Icon,
} from "@banhatten/ui";
import { Section } from "./section";

export function AccordionDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Accordion groups sections of related content that can be opened and closed. It reduces
          cognitive load by letting users choose which sections to view (e.g. FAQ). States: default,
          hover, and disabled. Supports optional left icon, optional divider between trigger and
          content when expanded, and single or multiple open items.
        </p>
      </div>

      {/* Basic Usage */}
      <Section
        title="Basic Usage"
        description="Accordion with one item. Click the trigger to expand or collapse the content."
      >
        <div className="max-w-[560px]">
          <Accordion defaultValue="egypt">
            <AccordionItem value="egypt">
              <AccordionTrigger>
                What are the must-see ancient sites in Egypt?
              </AccordionTrigger>
              <AccordionContent>
                Egypt is home to some of the world&apos;s most famous ancient sites, including the
                Pyramids of Giza, the Sphinx, Luxor&apos;s Karnak Temple, and the Valley of the
                Kings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Icon Left */}
      <Section
        title="Icon Left"
        description="Optional icon or element to the left of the heading. Use the iconLeft prop on AccordionTrigger."
      >
        <div className="max-w-[560px]">
          <Accordion defaultValue="info">
            <AccordionItem value="info">
              <AccordionTrigger
                iconLeft={<Icon name="info" size="sm" aria-hidden />}
              >
                What are the must-see ancient sites in Egypt?
              </AccordionTrigger>
              <AccordionContent>
                Egypt is home to some of the world&apos;s most famous ancient sites, including the
                Pyramids of Giza, the Sphinx, Luxor&apos;s Karnak Temple, and the Valley of the
                Kings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Show Divider */}
      <Section
        title="Show Divider"
        description="When showDivider is true on AccordionItem, a horizontal divider is shown between the trigger and content when expanded."
      >
        <div className="max-w-[560px]">
          <Accordion defaultValue="divider">
            <AccordionItem value="divider" showDivider>
              <AccordionTrigger>
                What are the must-see ancient sites in Egypt?
              </AccordionTrigger>
              <AccordionContent>
                Egypt is home to some of the world&apos;s most famous ancient sites, including the
                Pyramids of Giza, the Sphinx, Luxor&apos;s Karnak Temple, and the Valley of the
                Kings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Multiple items / type single vs multiple */}
      <Section
        title="Single vs multiple"
        description="Default type is single (one item open at a time). Use type='multiple' to allow several items to be open at once."
      >
        <div className="space-y-6 max-w-[560px]">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Single (default)</p>
            <Accordion defaultValue="a">
              <AccordionItem value="a">
                <AccordionTrigger>First question</AccordionTrigger>
                <AccordionContent>First answer.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Second question</AccordionTrigger>
                <AccordionContent>Second answer.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Multiple</p>
            <Accordion type="multiple" defaultValue={["a", "b"]}>
              <AccordionItem value="a">
                <AccordionTrigger>First question</AccordionTrigger>
                <AccordionContent>First answer.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Second question</AccordionTrigger>
                <AccordionContent>Second answer.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Disabled */}
      <Section
        title="Disabled"
        description="Set disabled on AccordionItem to prevent expansion and apply disabled styling (text-inactive, non-interactive)."
      >
        <div className="max-w-[560px]">
          <Accordion>
            <AccordionItem value="enabled">
              <AccordionTrigger>Enabled item</AccordionTrigger>
              <AccordionContent>This item can be toggled.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="disabled" disabled>
              <AccordionTrigger>Disabled item</AccordionTrigger>
              <AccordionContent>This content is not shown when disabled.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Icon,
} from "@banhatten/ui";

<Accordion defaultValue="a">
  <AccordionItem value="a" showDivider>
    <AccordionTrigger iconLeft={<Icon name="info" size="sm" aria-hidden />}>
      Question text
    </AccordionTrigger>
    <AccordionContent>Answer or description.</AccordionContent>
  </AccordionItem>
</Accordion>

// Controlled
<Accordion value={open} onValueChange={setOpen} type="multiple" />`}</code>
          </pre>
        </div>
      </Section>

      {/* Props */}
      <Section title="Props">
        <div className="space-y-8">
          <div>
            <p className="text-primary mb-3 text-sm font-medium">Accordion</p>
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
                    <td className="py-3 pr-4 font-mono text-xs">type</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;single&quot; | &quot;multiple&quot;</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;single&quot;</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">value</td>
                    <td className="py-3 pr-4 font-mono text-xs">string | string[]</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">defaultValue</td>
                    <td className="py-3 pr-4 font-mono text-xs">string | string[]</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">onValueChange</td>
                    <td className="py-3 pr-4 font-mono text-xs">(value: string | string[]) =&gt; void</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">AccordionItem</p>
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
                    <td className="py-3 pr-4 font-mono text-xs">value</td>
                    <td className="py-3 pr-4 font-mono text-xs">string</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                    <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                    <td className="py-3 pr-4 font-mono text-xs">false</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">showDivider</td>
                    <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                    <td className="py-3 pr-4 font-mono text-xs">false</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-medium">AccordionTrigger</p>
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
                    <td className="py-3 pr-4 font-mono text-xs">iconLeft</td>
                    <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">children</td>
                    <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Trigger has <code>aria-expanded</code>, <code>aria-controls</code>, and <code>aria-disabled</code>. Content
          uses <code>role=&quot;region&quot;</code> and <code>aria-labelledby</code> for accessibility.
        </p>
      </Section>
    </div>
  );
}
