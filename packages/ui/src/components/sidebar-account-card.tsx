import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Avatar } from "./avatar";
import { Icon } from "./icon";
import { useSidebarContext } from "./sidebar";

/* ── CVA ──
 * Token-only: spacing (px-md, py-sm, gap-md), radius (rounded-sm),
 * bg (default: transparent, selected: bg-tertiary).
 * Uses Avatar (text variant) + right icon; padding from Figma applied to container.
 */

const sidebarAccountCardVariants = cva(
  "flex w-full items-center gap-md rounded-sm px-md py-sm min-w-0",
  {
    variants: {
      selected: {
        true: "bg-tertiary",
        false: "",
      },
      collapsed: {
        true: "justify-center px-0 py-sm",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      collapsed: false,
    },
  }
);

export interface SidebarAccountCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof sidebarAccountCardVariants>, "collapsed"> {
  /** User display name (e.g. "Ahmed Galal"). Passed to Avatar as username. */
  username: string;
  /** Supporting line below name (e.g. "Free plan"). Passed to Avatar as supportingText. */
  supportingText?: string;
  /** Initials for Avatar when no image (e.g. "AG"). Optional. */
  initials?: string;
  /** Accessible name for the avatar (e.g. user name). Passed to Avatar aria-label. */
  "aria-label"?: string;
  /** Material Symbol name for right icon (e.g. "unfold_more", "more_vert"). */
  rightIcon?: string;
  /** When true, shows selected/active state (light background). Default: false. */
  selected?: boolean;
  /** When true, shows avatar only (e.g. collapsed sidebar). Default from SidebarContext when inside Sidebar. */
  collapsed?: boolean;
}

const SidebarAccountCard = React.forwardRef<
  HTMLDivElement,
  SidebarAccountCardProps
>(
  (
    {
      className,
      username,
      supportingText,
      initials,
      "aria-label": ariaLabel,
      rightIcon,
      selected = false,
      collapsed: collapsedProp,
      ...props
    },
    ref
  ) => {
    const sidebarContext = useSidebarContext();
    const collapsed =
      collapsedProp ?? sidebarContext?.collapsed ?? false;

    return (
      <div
        ref={ref}
        className={cn(
          sidebarAccountCardVariants({ selected, collapsed }),
          className
        )}
        {...props}
      >
        <Avatar
          size="md"
          initials={initials}
          username={collapsed ? undefined : username}
          supportingText={collapsed ? undefined : supportingText}
          aria-label={ariaLabel ?? username}
          className={collapsed ? "shrink-0" : "min-w-0 flex-1"}
        />
        {!collapsed && rightIcon != null && (
          <Icon
            name={rightIcon}
            size="sm"
            className="shrink-0 text-icon-secondary"
            aria-hidden
          />
        )}
      </div>
    );
  }
);

SidebarAccountCard.displayName = "SidebarAccountCard";

export { SidebarAccountCard, sidebarAccountCardVariants };
