import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconSize } from "./icon";

const buttonGroupItemVariants = cva(
  "inline-flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      size: {
        small: "h-9 px-md gap-0.5 text-sm",
        medium: "h-10 px-lg gap-1 text-sm",
      },
      type: {
        textAndIcon: "",
        textOnly: "",
        iconOnly: "",
      },
      selected: {
        true: "bg-brand-tertiary text-brand",
        false:
          "bg-transparent text-primary hover:bg-tertiary disabled:text-inactive disabled:bg-inactive",
      },
    },
    compoundVariants: [
      {
        type: "iconOnly",
        size: "small",
        className: "w-9 px-0",
      },
      {
        type: "iconOnly",
        size: "medium",
        className: "w-10 px-0",
      },
    ],
    defaultVariants: {
      size: "medium",
      type: "textAndIcon",
      selected: false,
    },
  }
);

const sizeToIconSize: Record<"small" | "medium", IconSize> = {
  small: "sm",
  medium: "md",
};

export interface ButtonGroupItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonGroupItemVariants> {
  /** Material Symbol name for left icon (e.g. "add"). Used when type is "textAndIcon". */
  leftIcon?: string;
  /** Material Symbol name for right icon (e.g. "chevron_right"). Used when type is "textAndIcon". */
  rightIcon?: string;
  /** Material Symbol name for icon-only item. Used when type is "iconOnly". Requires aria-label for accessibility. */
  icon?: string;
  /** When true, shows selected state (bg-brand-tertiary, text-brand, border). Sets aria-current="true". */
  selected?: boolean;
  /** Position inside a ButtonGroup. Middle items get no border rounding when selected. Set by ButtonGroup automatically. */
  position?: "first" | "middle" | "last" | "only";
}

const ButtonGroupItem = React.forwardRef<
  HTMLButtonElement,
  ButtonGroupItemProps
>(
  (
    {
      className,
      size = "medium",
      type = "textAndIcon",
      selected = false,
      position,
      leftIcon,
      rightIcon,
      icon,
      children,
      disabled,
      "aria-current": ariaCurrent,
      ...props
    },
    ref
  ) => {
    const iconSize = sizeToIconSize[size ?? "medium"];
    /* Position drives rounding and the left-border divider between items */
    const positionClass =
      position === "first"
        ? "rounded-l-sm rounded-r-none"
        : position === "middle"
          ? "rounded-none border-l border-strong"
          : position === "last"
            ? "rounded-r-sm rounded-l-none border-l border-strong"
            : "rounded-sm";
    const iconColorClass = selected
      ? "text-icon-brand"
      : disabled
        ? "text-icon-inactive"
        : "text-icon-primary";

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          buttonGroupItemVariants({ size, type, selected }),
          positionClass,
          className
        )}
        disabled={disabled}
        aria-current={selected ? "true" : ariaCurrent}
        aria-disabled={disabled}
        {...props}
      >
        {type === "textAndIcon" && leftIcon && (
          <Icon name={leftIcon} size={iconSize} className={iconColorClass} aria-hidden />
        )}
        {type === "iconOnly" && icon && (
          <Icon name={icon} size={iconSize} className={iconColorClass} aria-hidden />
        )}
        {type !== "iconOnly" && (
          <span className="inline-grid [&>*]:col-start-1 [&>*]:row-start-1">
            {/* Invisible bold copy reserves width so font-medium on selected doesn't cause shift */}
            <span className="invisible font-medium" aria-hidden>
              {children}
            </span>
            <span className={selected ? "font-medium" : "font-normal"}>
              {children}
            </span>
          </span>
        )}
        {type === "textAndIcon" && rightIcon && (
          <Icon name={rightIcon} size={iconSize} className={iconColorClass} aria-hidden />
        )}
      </button>
    );
  }
);

ButtonGroupItem.displayName = "ButtonGroupItem";

export { ButtonGroupItem, buttonGroupItemVariants };
