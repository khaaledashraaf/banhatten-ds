import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbListItem,
  BreadcrumbSeparator,
} from "@banhatten/ui";
import { Section } from "./section";

export function BreadcrumbDocumentation() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div>
        <p className="text-secondary text-sm leading-relaxed">
          Breadcrumbs show the location and hierarchy of the current page. They consist of a series of
          links (BreadcrumbItem) with separators (BreadcrumbSeparator) between them. Use Breadcrumb as
          the nav wrapper, BreadcrumbList for the ordered list, BreadcrumbListItem for each segment,
          and BreadcrumbSeparator for slash or chevron dividers.
        </p>
      </div>

      {/* Basic usage */}
      <Section
        title="Basic usage"
        description="Default container (no border) with chevron separators. Each segment is a BreadcrumbListItem containing a BreadcrumbItem and an optional BreadcrumbSeparator (omit after the last item)."
      >
        <div className="space-y-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbListItem>
                <BreadcrumbItem variant="iconText" icon="home" href="#">
                  Home
                </BreadcrumbItem>
                <BreadcrumbSeparator separator="chevron" />
              </BreadcrumbListItem>
              <BreadcrumbListItem>
                <BreadcrumbItem variant="iconText" icon="folder" href="#">
                  Orders
                </BreadcrumbItem>
                <BreadcrumbSeparator separator="chevron" />
              </BreadcrumbListItem>
              <BreadcrumbListItem>
                <BreadcrumbItem variant="iconText" icon="folder" active>
                  Order #123
                </BreadcrumbItem>
              </BreadcrumbListItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </Section>

      {/* Container style: default vs withBackground */}
      <Section
        title="Container style"
        description="Two container styles: default (no border) and withBackground (border, light background, padding)."
      >
        <div className="space-y-8">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Default</p>
            <Breadcrumb>
              <BreadcrumbList containerStyle="default">
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="home" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator separator="chevron" />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" active>
                    Settings
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">With background</p>
            <Breadcrumb>
              <BreadcrumbList containerStyle="withBackground">
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="home" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator separator="chevron" />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" active>
                    Settings
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </Section>

      {/* Separator: slash vs chevron */}
      <Section
        title="Separator"
        description="Choose slash (/) or chevron (>) as the separator between items."
      >
        <div className="space-y-8">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Slash</p>
            <Breadcrumb>
              <BreadcrumbList containerStyle="withBackground">
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="home" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator separator="slash" />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" href="#">
                    Products
                  </BreadcrumbItem>
                  <BreadcrumbSeparator separator="slash" />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" active>
                    Detail
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Chevron</p>
            <Breadcrumb>
              <BreadcrumbList containerStyle="withBackground">
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="home" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator separator="chevron" />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" href="#">
                    Products
                  </BreadcrumbItem>
                  <BreadcrumbSeparator separator="chevron" />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" active>
                    Detail
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </Section>

      {/* BreadcrumbItem variants: iconText, iconOnly, overflow */}
      <Section
        title="BreadcrumbItem variants"
        description="Items can show icon + text (iconText), icon only (iconOnly), or overflow (ellipsis). Use active for the current page and disabled for non-navigable items."
      >
        <div className="space-y-6">
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Icon + text</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="home" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" active>
                    Current
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">Icon only</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconOnly" icon="home" href="#" aria-label="Home">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconOnly" icon="folder" href="#" aria-label="Folder">
                    Folder
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconOnly" icon="folder" active aria-label="Current">
                    Current
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-primary mb-2 text-sm font-medium">With overflow</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="home" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="overflow" href="#" aria-label="More">
                    More
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbListItem>
                <BreadcrumbListItem>
                  <BreadcrumbItem variant="iconText" icon="folder" active>
                    Current
                  </BreadcrumbItem>
                </BreadcrumbListItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <div className="bg-secondary rounded-lg p-4">
          <pre className="text-primary overflow-x-auto text-sm">
            <code>{`import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbListItem,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@banhatten/ui";

<Breadcrumb>
  <BreadcrumbList containerStyle="withBackground">
    <BreadcrumbListItem>
      <BreadcrumbItem variant="iconText" icon="home" href="/">Home</BreadcrumbItem>
      <BreadcrumbSeparator separator="chevron" />
    </BreadcrumbListItem>
    <BreadcrumbListItem>
      <BreadcrumbItem variant="iconText" icon="folder" href="/orders">Orders</BreadcrumbItem>
      <BreadcrumbSeparator separator="chevron" />
    </BreadcrumbListItem>
    <BreadcrumbListItem>
      <BreadcrumbItem variant="iconText" icon="folder" active>Order #123</BreadcrumbItem>
    </BreadcrumbListItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
          </pre>
        </div>
      </Section>

      {/* Props */}
      <Section title="Props">
        <div className="space-y-8">
          <div>
            <p className="text-primary mb-3 text-sm font-semibold">BreadcrumbList</p>
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
                    <td className="py-3 pr-4 font-mono text-xs">containerStyle</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot; | &quot;withBackground&quot;</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">className, ...</td>
                    <td className="py-3 pr-4 font-mono text-xs">OlHTMLAttributes</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-semibold">BreadcrumbSeparator</p>
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
                    <td className="py-3 pr-4 font-mono text-xs">separator</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;slash&quot; | &quot;chevron&quot;</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;chevron&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">className, ...</td>
                    <td className="py-3 pr-4 font-mono text-xs">HTMLAttributes</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-primary mb-3 text-sm font-semibold">BreadcrumbItem</p>
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
                    <td className="py-3 pr-4 font-mono text-xs">variant</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;iconText&quot; | &quot;iconOnly&quot; | &quot;overflow&quot;</td>
                    <td className="py-3 pr-4 font-mono text-xs">&quot;iconText&quot;</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">icon</td>
                    <td className="py-3 pr-4 font-mono text-xs">string (Material Symbol)</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">href</td>
                    <td className="py-3 pr-4 font-mono text-xs">string</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">active</td>
                    <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                    <td className="py-3 pr-4 font-mono text-xs">false</td>
                  </tr>
                  <tr className="border-b border-secondary">
                    <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                    <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                    <td className="py-3 pr-4 font-mono text-xs">false</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">children, className, ...</td>
                    <td className="py-3 pr-4 font-mono text-xs">Anchor/Span attributes</td>
                    <td className="py-3 pr-4 font-mono text-xs">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-tertiary mt-4 text-xs">
          Breadcrumb renders <code>&lt;nav aria-label=&quot;Breadcrumb&quot;&gt;</code>. BreadcrumbList is an{" "}
          <code>&lt;ol&gt;</code>; each segment should be a BreadcrumbListItem (<code>&lt;li&gt;</code>) containing one
          BreadcrumbItem and optionally a BreadcrumbSeparator. Separators use <code>role=&quot;presentation&quot;</code> and{" "}
          <code>aria-hidden</code>. Use <code>active</code> on the current page item (renders <code>aria-current=&quot;page&quot;</code>).
        </p>
      </Section>
    </div>
  );
}
