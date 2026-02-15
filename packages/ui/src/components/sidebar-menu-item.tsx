import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";
import { useSidebarContext } from "./sidebar";

/* ── CVA ──
 * Token-only: spacing (px-md, py-sm, gap-md), radius (rounded-sm),
 * bg (hover:bg-tertiary, active:bg-brand-tertiary), text (text-primary, text-brand),
 * icon (text-icon-secondary, text-icon-brand), border (active: border-l-2 border-brand).
 * Side navigation item; supports expanded (icon + label) and collapsed (icon only) layout.
 * When submenu is provided, shows chevron and expand/collapse of submenu vertically.
 */

const sidebarMenuItemVariants = cva(
  "flex items-center w-full gap-md rounded-sm px-md py-sm text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  {
    variants: {
      disabled: {
        true:
          "cursor-default opacity-50 pointer-events-none [&_*]:pointer-events-none",
        false: "cursor-pointer hover:bg-tertiary",
      },
      active: {
        true: "border-l-2 border-brand bg-brand-tertiary text-brand",
        false: "",
      },
      collapsed: {
        true: "justify-center px-sm",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      active: false,
      collapsed: false,
    },
  }
);

export interface SidebarMenuItemProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "children" | "type"
    >,
    Omit<VariantProps<typeof sidebarMenuItemVariants>, "disabled"> {
  /** When true, shows selected/current state. Sets aria-current="page". Default: false. */
  active?: boolean;
  /** When true, shows icon only (for collapsed sidebar). Default: false. */
  collapsed?: boolean;
  /** Label (e.g. "Dashboard"). Omitted visually when collapsed; use aria-label when collapsed for accessibility. */
  children?: React.ReactNode;
  /** Material Symbol name for left icon (e.g. "dashboard"). */
  leftIcon: string;
  /** SidebarSubmenuItem children. When present, a chevron is shown and the item expands/collapses vertically. */
  submenu?: React.ReactNode;
  /** Controlled expanded state for submenu. */
  expanded?: boolean;
  /** Called when submenu expand/collapse is toggled (only when submenu is provided). */
  onExpandedChange?: (expanded: boolean) => void;
  /** Default expanded state for submenu when uncontrolled. Default: false. */
  defaultExpanded?: boolean;
}

const SidebarMenuItem = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuItemProps
>(
  (
    {
      className,
      disabled = false,
      active = false,
      collapsed = false,
      children,
      leftIcon,
      submenu,
      expanded: expandedProp,
      onExpandedChange,
      defaultExpanded = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const sidebarContext = useSidebarContext();
    const collapsedResolved =
      collapsed !== undefined ? collapsed : sidebarContext?.collapsed ?? false;
    const [expandedState, setExpandedState] = React.useState(defaultExpanded);
    const expanded =
      expandedProp !== undefined ? expandedProp : expandedState;
    const setExpanded =
      onExpandedChange != null
        ? (value: boolean) => {
            setExpandedState(value);
            onExpandedChange(value);
          }
        : setExpandedState;

    const hasSubmenu = submenu != null && React.Children.count(submenu) > 0;
    const submenuId = React.useId();
    const regionId = `${submenuId}-submenu`;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hasSubmenu) {
        e.preventDefault();
        setExpanded(!expanded);
      }
      onClick?.(e);
    };

    const trigger = (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          sidebarMenuItemVariants({
            disabled,
            active,
            collapsed: collapsedResolved,
          }),
          hasSubmenu && !collapsedResolved && "flex-1",
          !hasSubmenu && className
        )}
        aria-disabled={disabled}
        aria-current={active ? "page" : undefined}
        aria-label={
          collapsedResolved && typeof children === "string"
            ? children
            : undefined
        }
        aria-expanded={
          hasSubmenu && !collapsedResolved ? expanded : undefined
        }
        aria-controls={hasSubmenu && !collapsedResolved ? regionId : undefined}
        onClick={handleClick}
        {...props}
      >
        <Icon
          name={leftIcon}
          size="sm"
          className={
            disabled
              ? "text-icon-inactive-subtle"
              : active
                ? "text-icon-brand"
                : "text-icon-secondary"
          }
          aria-hidden
        />
        {!collapsedResolved && children != null && (
          <span
            className={cn(
              "min-w-0 truncate text-sm font-medium leading-5",
              disabled ? "text-inactive" : active ? "text-brand" : "text-primary"
            )}
          >
            {children}
          </span>
        )}
        {hasSubmenu && !collapsedResolved && (
          <Icon
            name={expanded ? "expand_less" : "expand_more"}
            size="sm"
            className={
              disabled
                ? "text-icon-inactive-subtle"
                : active
                  ? "text-icon-brand"
                  : "text-icon-secondary"
            }
            aria-hidden
          />
        )}
      </button>
    );

    if (!hasSubmenu || collapsedResolved) {
      return hasSubmenu && collapsedResolved ? (
        <div className={cn("flex flex-col", className)}>{trigger}</div>
      ) : (
        trigger
      );
    }

    return (
      <div className={cn("flex flex-col", className)}>
        {trigger}
        <div
          id={regionId}
          role="group"
          aria-label={typeof children === "string" ? `${children} submenu` : "Submenu"}
          className={cn(
            "flex flex-col overflow-hidden transition-[height] duration-200 ease-out",
            expanded ? "visible" : "hidden"
          )}
        >
          {submenu}
        </div>
      </div>
    );
  }
);

SidebarMenuItem.displayName = "SidebarMenuItem";

export { SidebarMenuItem, sidebarMenuItemVariants };
