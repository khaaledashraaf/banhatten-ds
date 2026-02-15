import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── CVA ──
 * Token-only: spacing (pl-xl, px-md, py-sm), radius (rounded-sm),
 * bg (hover:bg-tertiary, active:bg-brand-tertiary), text (text-primary, text-brand).
 * Nested item under SidebarMenuItem; visually indented, no leading icon.
 */

const sidebarSubmenuItemVariants = cva(
  "flex w-full items-center rounded-sm pl-xl pr-md py-sm text-secondary text-left text-sm font-regular leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  {
    variants: {
      disabled: {
        true:
          "cursor-default opacity-50 pointer-events-none [&_*]:pointer-events-none",
        false: "group cursor-pointer hover:bg-tertiary",
      },
      active: {
        true: "bg-brand-tertiary text-brand font-medium",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      active: false,
    },
  }
);

export interface SidebarSubmenuItemProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "children" | "type"
    >,
    Omit<VariantProps<typeof sidebarSubmenuItemVariants>, "disabled"> {
  /** When true, shows selected/current state. Sets aria-current="page". Default: false. */
  active?: boolean;
  /** Label (e.g. "Submenu Item"). */
  children?: React.ReactNode;
}

const SidebarSubmenuItem = React.forwardRef<
  HTMLButtonElement,
  SidebarSubmenuItemProps
>(({ className, disabled = false, active = false, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={cn(
        sidebarSubmenuItemVariants({ disabled, active }),
        className
      )}
      aria-disabled={disabled}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children != null && (
        <span
          className={cn(
            "min-w-0 truncate",
            disabled ? "text-inactive" : "group-hover:text-primary",
            !disabled && (active ? "text-brand" : "text-secondary")
          )}
        >
          {children}
        </span>
      )}
    </button>
  );
});

SidebarSubmenuItem.displayName = "SidebarSubmenuItem";

export { SidebarSubmenuItem, sidebarSubmenuItemVariants };
