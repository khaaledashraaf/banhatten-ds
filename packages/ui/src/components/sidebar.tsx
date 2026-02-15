import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Divider } from "./divider";
import { Icon } from "./icon";

/* ── CVA ──
 * Token-only: padding (header/content/footer per Figma), radius (rounded-sm),
 * bg (bg-primary), shadow (shadow-sm). Three sections: header (logo), content (scrollable), footer.
 */

const sidebarVariants = cva(
  "flex h-full flex-col bg-primary shadow-sm transition-[width] duration-200 ease-out",
  {
    variants: {
      collapsed: {
        true: "w-16 min-w-16",
        false: "w-64 min-w-64",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
);

export interface SidebarContextValue {
  collapsed: boolean;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebarContext(): SidebarContextValue | null {
  return React.useContext(SidebarContext);
}

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  /** Header content (e.g. logo). Rendered at top; collapse toggle shown only when collapsible. */
  header?: React.ReactNode;
  /** Main content (SidebarMenuItem, SidebarSubmenuItem). Scrollable. */
  children?: React.ReactNode;
  /** Footer content (e.g. Settings, Help, SidebarAccountCard). Rendered at bottom. */
  footer?: React.ReactNode;
  /** When true, sidebar can be collapsed via header toggle. Default: false (expanded only, no button). */
  collapsible?: boolean;
  /** When true, sidebar is collapsed (icon-only). Only used when collapsible. Default: false. */
  collapsed?: boolean;
  /** Called when collapse toggle in header is clicked. Only used when collapsible. */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Default collapsed state when uncontrolled. Only used when collapsible. Default: false. */
  defaultCollapsed?: boolean;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      header,
      children,
      footer,
      collapsible = false,
      collapsed: collapsedProp,
      onCollapsedChange,
      defaultCollapsed = false,
      ...props
    },
    ref
  ) => {
    const [collapsedState, setCollapsedState] = React.useState(defaultCollapsed);
    const collapsed = collapsible
      ? (collapsedProp !== undefined ? collapsedProp : collapsedState)
      : false;
    const setCollapsed =
      collapsible && onCollapsedChange != null
        ? (value: boolean) => {
            setCollapsedState(value);
            onCollapsedChange(value);
          }
        : setCollapsedState;

    const contextValue = React.useMemo<SidebarContextValue>(
      () => ({ collapsed }),
      [collapsed]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <aside
          ref={ref}
          aria-label="Sidebar"
          className={cn(
            sidebarVariants({ collapsed }),
            "rounded-sm",
            className
          )}
          {...props}
        >
          {/* Header: logo + optional collapse toggle. Token padding: px-md py-md */}
          <div
            className={cn(
              "flex shrink-0 items-center gap-sm px-2xl py-2xl",
              collapsible ? "justify-between" : ""
            )}
          >
            <div className={collapsible ? "min-w-0 flex-1" : "min-w-0"}>{header}</div>
            {collapsible && (
              <button
                type="button"
                onClick={() => setCollapsed(!collapsed)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-icon-secondary transition-colors hover:bg-tertiary hover:text-icon-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <Icon
                  name={collapsed ? "chevron_right" : "chevron_left"}
                  size="sm"
                  aria-hidden
                />
              </button>
            )}
          </div>

          <Divider orientation="horizontal" className="shrink-0" />

          {/* Content: scrollable, scrollbar hidden. Token padding: px-sm py-md */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden px-xl py-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {children}
          </div>

          {/* Footer: token padding px-sm py-md pt-lg for separation from content */}
          {footer != null && (
            <div className="flex shrink-0 flex-col gap-xxs border-t border-secondary px-md py-md pt-lg">
              {footer}
            </div>
          )}
        </aside>
      </SidebarContext.Provider>
    );
  }
);

Sidebar.displayName = "Sidebar";

export {
  Sidebar,
  sidebarVariants,
  SidebarContext,
  useSidebarContext,
};
