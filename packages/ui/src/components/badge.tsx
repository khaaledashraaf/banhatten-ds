import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps, type IconSize } from "./icon";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium shrink-0 gap-1",
  {
    variants: {
      variant: {
        filled: "",
        light: "border",
        outlined: "border bg-transparent",
      },
      color: {
        brand: "",
        neutral: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
      },
      size: {
        sm: "h-6 px-sm text-xs leading-4",
        lg: "h-7 px-md text-sm leading-5",
      },
    },
    compoundVariants: [
      // Filled variants
      {
        variant: "filled",
        color: "brand",
        className: "bg-brand text-on-color",
      },
      {
        variant: "filled",
        color: "neutral",
        className: "bg-brand-neutral-700 text-on-color",
      },
      {
        variant: "filled",
        color: "success",
        className: "bg-success text-on-color",
      },
      {
        variant: "filled",
        color: "warning",
        className: "bg-warning text-on-color",
      },
      {
        variant: "filled",
        color: "danger",
        className: "bg-danger text-on-color",
      },
      {
        variant: "filled",
        color: "info",
        className: "bg-info text-on-color",
      },

      // Light variants
      {
        variant: "light",
        color: "brand",
        className: "bg-brand-tertiary border-brand-secondary text-brand",
      },
      {
        variant: "light",
        color: "neutral",
        className: "bg-secondary border-strong text-primary",
      },
      {
        variant: "light",
        color: "success",
        className: "bg-success-tertiary border-success-secondary text-success-strong",
      },
      {
        variant: "light",
        color: "warning",
        className: "bg-warning-tertiary border-warning-secondary text-warning-strong",
      },
      {
        variant: "light",
        color: "danger",
        className: "bg-danger-tertiary border-danger-secondary text-danger-strong",
      },
      {
        variant: "light",
        color: "info",
        className: "bg-info-tertiary border-info-subtle text-info-strong",
      },

      // Outlined variants
      {
        variant: "outlined",
        color: "brand",
        className: "border-brand text-brand",
      },
      {
        variant: "outlined",
        color: "neutral",
        className: "border-strong text-primary",
      },
      {
        variant: "outlined",
        color: "success",
        className: "border-success text-success",
      },
      {
        variant: "outlined",
        color: "warning",
        className: "border-warning text-warning-strong",
      },
      {
        variant: "outlined",
        color: "danger",
        className: "border-danger text-danger",
      },
      {
        variant: "outlined",
        color: "info",
        className: "border-info text-info",
      },
    ],
    defaultVariants: {
      variant: "light",
      color: "brand",
      size: "sm",
    },
  }
);

/** Maps badge size to appropriate icon size */
const badgeSizeToIconSize: Record<
  NonNullable<BadgeProps["size"]>,
  IconSize
> = {
  sm: "xs",
  lg: "sm",
};

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {
  /** Render a small status dot before the badge content */
  withDot?: boolean;
  /** Material Symbol name for left icon (e.g. "info", "check") */
  leftIcon?: string;
  /** Material Symbol name for right icon (e.g. "close", "chevron_right") */
  rightIcon?: string;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icons */
  iconFilled?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      color,
      size = "sm",
      withDot,
      leftIcon,
      rightIcon,
      iconVariant,
      iconFilled,
      children,
      ...props
    },
    ref
  ) => {
    const iconSize = badgeSizeToIconSize[size ?? "sm"];

    const dotElement = withDot ? (
      <span
        className="inline-block size-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
    ) : null;

    const leftIconElement = leftIcon ? (
      <Icon
        name={leftIcon}
        size={iconSize}
        variant={iconVariant}
        filled={iconFilled}
        aria-hidden
      />
    ) : null;

    const rightIconElement = rightIcon ? (
      <Icon
        name={rightIcon}
        size={iconSize}
        variant={iconVariant}
        filled={iconFilled}
        aria-hidden
      />
    ) : null;

    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, color, size }), className)}
        {...props}
      >
        {dotElement}
        {leftIconElement}
        {children}
        {rightIconElement}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
