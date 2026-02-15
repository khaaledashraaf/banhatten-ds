import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
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
  /** Header content (e.g. logo). Rendered at top with collapse toggle. */
  header?: React.ReactNode;
  /** Main content (SidebarMenuItem, SidebarSubmenuItem). Scrollable. */
  children?: React.ReactNode;
  /** Footer content (e.g. Settings, Help, SidebarAccountCard). Rendered at bottom. */
  footer?: React.ReactNode;
  /** When true, sidebar is collapsed (icon-only). Default: false. */
  collapsed?: boolean;
  /** Called when collapse toggle in header is clicked. */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Default collapsed state when uncontrolled. Default: false. */
  defaultCollapsed?: boolean;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      header,
      children,
      footer,
      collapsed: collapsedProp,
      onCollapsedChange,
      defaultCollapsed = false,
      ...props
    },
    ref
  ) => {
    const [collapsedState, setCollapsedState] = React.useState(defaultCollapsed);
    const collapsed =
      collapsedProp !== undefined ? collapsedProp : collapsedState;
    const setCollapsed =
      onCollapsedChange != null
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
          {/* Header: logo + collapse toggle. Token padding: px-md py-md */}
          <div className="flex shrink-0 items-center justify-between gap-sm px-md py-md">
            <div className="min-w-0 flex-1">{header}</div>
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
          </div>

          {/* Content: scrollable. Token padding: px-sm py-md */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden px-sm py-md">
            {children}
          </div>

          {/* Footer: token padding px-sm py-md pt-lg for separation from content */}
          {footer != null && (
            <div className="flex shrink-0 flex-col gap-xxs border-t border-secondary px-sm py-md pt-lg">
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
