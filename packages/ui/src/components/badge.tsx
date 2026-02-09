import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium shrink-0",
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

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, color, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, color, size }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
