import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";

const breadcrumbItemVariants = cva(
  "inline-flex text-sm items-center gap-xs rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 [&_.breadcrumb-icon]:shrink-0",
  {
    variants: {
      variant: {
        iconText: "min-w-0",
        iconOnly: "",
        overflow: "min-w-0",
      },
      state: {
        default:
          "text-secondary [&_.breadcrumb-icon]:text-icon-secondary hover:text-tertiary-hover hover:[&_.breadcrumb-icon]:text-icon-tertiary-hover",
        active:
          "text-primary font-medium [&_.breadcrumb-icon]:text-icon-primary",
        disabled:
          "text-inactive [&_.breadcrumb-icon]:text-icon-inactive-subtle cursor-default pointer-events-none",
      },
      overflowHover: {
        true: "hover:bg-tertiary",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "overflow",
        overflowHover: true,
        state: "default",
        className:
          "hover:bg-tertiary hover:text-secondary-hover hover:[&_.breadcrumb-icon]:text-icon-secondary-hover",
      },
    ],
    defaultVariants: {
      variant: "iconText",
      state: "default",
      overflowHover: false,
    },
  }
);

export interface BreadcrumbItemProps
  extends Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement> &
        React.HTMLAttributes<HTMLSpanElement>,
      "children"
    >,
    VariantProps<typeof breadcrumbItemVariants> {
  /** Visual style: icon with label, icon only, or overflow (ellipsis). */
  variant?: "iconText" | "iconOnly" | "overflow";
  /** Current page / active state. Renders as span with aria-current="page". */
  active?: boolean;
  /** Disabled state. Renders as span with aria-disabled="true". */
  disabled?: boolean;
  /** Material Symbol name (e.g. "home", "folder"). Ignored when variant="overflow"; overflow uses "more_horiz". */
  icon?: string;
  /** Label text. Shown when variant is "iconText". */
  children?: React.ReactNode;
  /** When provided, item renders as <a href="...">. Omit for current page or overflow trigger. */
  href?: string;
}

const BreadcrumbItem = React.forwardRef<
  HTMLAnchorElement | HTMLSpanElement,
  BreadcrumbItemProps
>(
  (
    {
      className,
      variant: styleVariant = "iconText",
      state,
      overflowHover,
      active = false,
      disabled = false,
      icon,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const derivedState = state
      ? state
      : disabled
        ? "disabled"
        : active
          ? "active"
          : "default";

    const showOverflowHover =
      overflowHover ?? (styleVariant === "overflow" && derivedState === "default");

    const iconName =
      styleVariant === "overflow" ? "more_horiz" : icon ?? "home";

    const classes = cn(
      breadcrumbItemVariants({
        variant: styleVariant,
        state: derivedState,
        overflowHover: showOverflowHover,
      }),
      className
    );

    const iconElement =
      styleVariant !== "overflow" || iconName ? (
        <Icon
          name={iconName}
          size="sm"
          filled={derivedState === "active"}
          aria-hidden
          className="breadcrumb-icon"
        />
      ) : null;

    const labelContent =
      styleVariant === "iconText" && children != null ? (
        <span className="truncate">{children}</span>
      ) : (styleVariant === "iconOnly" || styleVariant === "overflow") &&
          children != null ? (
        <span className="sr-only">{children}</span>
      ) : null;

    if (disabled) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={classes}
          aria-disabled="true"
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {iconElement}
          {labelContent}
        </span>
      );
    }

    if (active || !href) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={classes}
          aria-current={active ? "page" : undefined}
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {iconElement}
          {labelContent}
        </span>
      );
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconElement}
        {labelContent}
      </a>
    );
  }
);

BreadcrumbItem.displayName = "BreadcrumbItem";

export { BreadcrumbItem, breadcrumbItemVariants };
