import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps, type IconSize } from "./icon";

const closeButtonVariants = cva(
  "inline-flex items-center justify-center shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost:
          "bg-transparent text-icon-primary hover:bg-tertiary active:bg-quarterary disabled:text-inactive",
        outlined:
          "bg-transparent border border-strong text-icon-primary hover:border-strong hover:bg-secondary active:bg-tertiary disabled:border-inactive-subtle disabled:bg-secondary disabled:text-inactive",
      },
      size: {
        sm: "size-6",
        md: "size-8",
        lg: "size-10",
        xl: "size-12",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  }
);

const closeButtonSizeToIconSize: Record<
  NonNullable<VariantProps<typeof closeButtonVariants>["size"]>,
  IconSize
> = {
  sm: "sm",
  md: "md",
  lg: "md",
  xl: "lg",
};

export type CloseButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> &
  VariantProps<typeof closeButtonVariants> & {
    /** Accessible name for the close action. Default: "Close" */
    "aria-label"?: string;
    /** Icon variant style. Default: "outlined" */
    iconVariant?: IconProps["variant"];
    /** Render filled variant of the icon */
    iconFilled?: boolean;
  };

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      className,
      variant,
      size = "md",
      "aria-label": ariaLabel = "Close",
      iconVariant,
      iconFilled,
      ...props
    },
    ref
  ) => {
    const iconSize = closeButtonSizeToIconSize[size ?? "md"];
    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn(closeButtonVariants({ variant, size }), className)}
        {...props}
      >
        <Icon
          name="close"
          size={iconSize}
          variant={iconVariant}
          filled={iconFilled}
          aria-hidden
        />
      </button>
    );
  }
);

CloseButton.displayName = "CloseButton";

export { CloseButton, closeButtonVariants };
