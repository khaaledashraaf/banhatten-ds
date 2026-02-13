"use client";

import { Tooltip, TooltipProvider, Button } from "@banhatten/ui";
import { Section } from "./section";

export function TooltipDocumentation() {
  return (
    <TooltipProvider>
      <div className="space-y-16">
        {/* Overview */}
        <div>
          <p className="text-secondary text-sm leading-relaxed">
            Tooltips provide contextual information when users hover over or focus on an element. The
            component supports two sizes (small for single-line text, large for title + subtitle),
            two visual styles (dark and light), and four placement directions (top, bottom, left,
            right). Built on Radix UI primitives with full accessibility support including
            role=&quot;tooltip&quot; and aria-describedby attributes. The arrow automatically adjusts
            to point at the trigger element based on the chosen side.
          </p>
        </div>

        {/* Basic Usage */}
        <Section
          title="Basic Usage"
          description="Simple tooltips with single-line content. Wrap your app with TooltipProvider once."
        >
          <div className="flex flex-wrap items-center gap-10">
            <Tooltip content="More information">
              <Button>Hover me</Button>
            </Tooltip>
            <Tooltip content="This is a helpful tip" variant="light">
              <Button variant="secondary">Light tooltip</Button>
            </Tooltip>
            <Tooltip content="Disabled button" variant="dark">
              <Button disabled>Disabled</Button>
            </Tooltip>
          </div>
        </Section>

        {/* Placement */}
        <Section
          title="Placement"
          description="Control which side of the trigger the tooltip appears on. The arrow automatically rotates to point at the trigger."
        >
          <div className="flex flex-wrap items-center justify-center gap-10 py-8">
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Appears above" side="top">
                <Button>Top</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Top</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Appears below" side="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Bottom (default)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Appears left" side="left">
                <Button>Left</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Left</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Appears right" side="right">
                <Button>Right</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Right</span>
            </div>
          </div>
        </Section>

        {/* Placement with Variants */}
        <Section
          title="Placement + Variants"
          description="Placement works with both dark and light variants, including large size."
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="rounded-lg border border-default p-6">
              <h3 className="text-primary mb-5 text-sm font-semibold">Dark</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 py-4">
                <Tooltip content="Top dark" side="top" variant="dark">
                  <Button size="xs">Top</Button>
                </Tooltip>
                <Tooltip content="Right dark" side="right" variant="dark">
                  <Button size="xs">Right</Button>
                </Tooltip>
                <Tooltip content="Bottom dark" side="bottom" variant="dark">
                  <Button size="xs">Bottom</Button>
                </Tooltip>
                <Tooltip content="Left dark" side="left" variant="dark">
                  <Button size="xs">Left</Button>
                </Tooltip>
              </div>
            </div>
            <div className="rounded-lg border border-default p-6">
              <h3 className="text-primary mb-5 text-sm font-semibold">Light</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 py-4">
                <Tooltip content="Top light" side="top" variant="light">
                  <Button size="xs" variant="secondary">Top</Button>
                </Tooltip>
                <Tooltip content="Right light" side="right" variant="light">
                  <Button size="xs" variant="secondary">Right</Button>
                </Tooltip>
                <Tooltip content="Bottom light" side="bottom" variant="light">
                  <Button size="xs" variant="secondary">Bottom</Button>
                </Tooltip>
                <Tooltip content="Left light" side="left" variant="light">
                  <Button size="xs" variant="secondary">Left</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </Section>

        {/* Sizes */}
        <Section
          title="Sizes"
          description="Small displays a single line of text. Large displays a title and optional subtitle."
        >
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Single line tooltip" size="small">
                <Button>Small</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Small (single line)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip
                title="More information"
                subtitle="You may notice that we've made some updates to our look and feel."
                size="large"
              >
                <Button>Large</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Large (title + subtitle)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip
                title="Title only"
                size="large"
              >
                <Button>Title only</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Large (title only)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip
                subtitle="Subtitle only"
                size="large"
              >
                <Button>Subtitle only</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Large (subtitle only)</span>
            </div>
          </div>
        </Section>

        {/* Variants */}
        <Section
          title="Variants"
          description="Dark variant uses inverse colors (dark background, light text). Light variant uses primary colors with a shadow."
        >
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Dark tooltip" variant="dark">
                <Button>Dark (default)</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Dark</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip content="Light tooltip" variant="light">
                <Button variant="secondary">Light</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Light</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip
                title="Dark large"
                subtitle="With title and subtitle"
                size="large"
                variant="dark"
              >
                <Button>Dark Large</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Dark Large</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Tooltip
                title="Light large"
                subtitle="With title and subtitle"
                size="large"
                variant="light"
              >
                <Button variant="secondary">Light Large</Button>
              </Tooltip>
              <span className="text-secondary text-xs">Light Large</span>
            </div>
          </div>
        </Section>

        {/* With Different Triggers */}
        <Section
          title="With Different Triggers"
          description="Tooltips work with any focusable element. The trigger element receives the ref."
        >
          <div className="flex flex-wrap items-center gap-10">
            <Tooltip content="Button tooltip">
              <Button>Button</Button>
            </Tooltip>
            <Tooltip content="Link tooltip">
              <a
                href="#"
                className="text-brand underline-offset-4 hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Link
              </a>
            </Tooltip>
            <Tooltip content="Span tooltip">
              <span className="text-primary cursor-pointer underline">Span</span>
            </Tooltip>
            <Tooltip content="Icon button tooltip">
              <Button icon="info" aria-label="Information" />
            </Tooltip>
          </div>
        </Section>

        {/* All Variants Grid */}
        <Section
          title="All Variants"
          description="Combining size and variant options."
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="rounded-lg border border-default p-6">
              <h3 className="text-primary mb-5 text-sm font-semibold">Small Size</h3>
              <div className="flex flex-wrap gap-4">
                <Tooltip content="Dark small" variant="dark" size="small">
                  <Button size="xs">Dark</Button>
                </Tooltip>
                <Tooltip content="Light small" variant="light" size="small">
                  <Button size="xs" variant="secondary">Light</Button>
                </Tooltip>
              </div>
            </div>
            <div className="rounded-lg border border-default p-6">
              <h3 className="text-primary mb-5 text-sm font-semibold">Large Size</h3>
              <div className="flex flex-wrap gap-4">
                <Tooltip
                  title="Dark large"
                  subtitle="With subtitle text"
                  variant="dark"
                  size="large"
                >
                  <Button size="xs">Dark</Button>
                </Tooltip>
                <Tooltip
                  title="Light large"
                  subtitle="With subtitle text"
                  variant="light"
                  size="large"
                >
                  <Button size="xs" variant="secondary">Light</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </Section>

        {/* Usage */}
        <Section title="Usage">
          <div className="bg-secondary rounded-lg p-6">
            <pre className="text-primary overflow-x-auto text-sm leading-relaxed">
              <code>{`import { Tooltip, TooltipProvider } from "@banhatten/ui";

// Wrap your app (or a section) with TooltipProvider once
<TooltipProvider>
  {/* Small tooltip */}
  <Tooltip content="More information">
    <Button>Hover me</Button>
  </Tooltip>

  {/* Placement */}
  <Tooltip content="Above" side="top">
    <Button>Top</Button>
  </Tooltip>
  <Tooltip content="To the right" side="right" sideOffset={12}>
    <Button>Right</Button>
  </Tooltip>

  {/* Large tooltip with title and subtitle */}
  <Tooltip
    title="More information"
    subtitle="You may notice that we've made some updates."
  >
    <Button>Hover me</Button>
  </Tooltip>

  {/* Light variant */}
  <Tooltip content="Light tooltip" variant="light">
    <Button variant="secondary">Hover me</Button>
  </Tooltip>

  {/* Custom delay */}
  <Tooltip content="Delayed tooltip" delayDuration={500}>
    <Button>Hover me</Button>
  </Tooltip>
</TooltipProvider>

// Advanced: Use primitives directly for more control
import { TooltipTrigger, TooltipContent } from "@banhatten/ui";

<TooltipProvider>
  <TooltipTrigger asChild>
    <Button>Trigger</Button>
  </TooltipTrigger>
  <TooltipContent variant="dark" title="Title" subtitle="Subtitle" side="top">
    Fallback content
  </TooltipContent>
</TooltipProvider>`}</code>
            </pre>
          </div>
        </Section>

        {/* Props */}
        <Section title="Props">
          <div className="overflow-x-auto rounded-lg border border-default">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-default bg-secondary">
                  <th className="text-primary px-5 py-3.5 font-semibold">Prop</th>
                  <th className="text-primary px-5 py-3.5 font-semibold">Type</th>
                  <th className="text-primary px-5 py-3.5 font-semibold">Default</th>
                </tr>
              </thead>
              <tbody className="text-secondary">
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">content</td>
                  <td className="px-5 py-3.5 font-mono text-xs">React.ReactNode</td>
                  <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">title</td>
                  <td className="px-5 py-3.5 font-mono text-xs">string</td>
                  <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">subtitle</td>
                  <td className="px-5 py-3.5 font-mono text-xs">string</td>
                  <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">size</td>
                  <td className="px-5 py-3.5 font-mono text-xs">&quot;small&quot; | &quot;large&quot;</td>
                  <td className="px-5 py-3.5 font-mono text-xs">&quot;small&quot;</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">variant</td>
                  <td className="px-5 py-3.5 font-mono text-xs">&quot;dark&quot; | &quot;light&quot;</td>
                  <td className="px-5 py-3.5 font-mono text-xs">&quot;dark&quot;</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">side</td>
                  <td className="px-5 py-3.5 font-mono text-xs">&quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;</td>
                  <td className="px-5 py-3.5 font-mono text-xs">&quot;bottom&quot;</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">sideOffset</td>
                  <td className="px-5 py-3.5 font-mono text-xs">number</td>
                  <td className="px-5 py-3.5 font-mono text-xs">8</td>
                </tr>
                <tr className="border-b border-secondary">
                  <td className="px-5 py-3.5 font-mono text-xs">delayDuration</td>
                  <td className="px-5 py-3.5 font-mono text-xs">number</td>
                  <td className="px-5 py-3.5 font-mono text-xs">undefined</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-mono text-xs">children</td>
                  <td className="px-5 py-3.5 font-mono text-xs">React.ReactNode</td>
                  <td className="px-5 py-3.5 font-mono text-xs">required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-tertiary mt-5 text-xs">
            Tooltip also accepts all standard Radix Tooltip Root props (e.g., <code>defaultOpen</code>, <code>open</code>, <code>onOpenChange</code>).
            The trigger element (children) must accept a ref.
          </p>
        </Section>
      </div>
    </TooltipProvider>
  );
}
