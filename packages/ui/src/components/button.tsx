import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps, type IconSize } from "./icon";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-component-button-brand-bg text-on-color hover:bg-component-button-brand-bg-hover active:bg-brand-strong",
        secondary:
          "bg-component-button-secondary-bg border border-strong text-component-button-secondary-fg shadow-xs hover:bg-component-button-secondary-bg-hover active:bg-quarterary",
        tertiary:
          "bg-transparent text-component-button-tertiary-color-fg hover:bg-component-button-tertiary-bg-hover active:bg-quarterary",
        danger:
          "bg-component-button-danger-bg text-on-color hover:bg-component-button-danger-bg-hover active:bg-danger-strong",
        link: "bg-transparent text-component-button-tertiary-color-fg underline-offset-4 hover:underline",
        "link-brand":
          "bg-transparent text-component-button-link-color-fg underline-offset-4 hover:text-component-button-link-color-fg-hover",
      },
      size: {
        xs: "h-9 px-md gap-0.5 text-sm rounded-sm",
        md: "h-10 px-lg gap-1 text-sm rounded-sm",
        lg: "h-11 px-xl gap-1 text-base rounded-sm",
        xl: "h-12 px-2xl gap-1 text-base rounded-sm",
        "2xl": "h-14 px-2xl gap-2 text-base rounded-md",
      },
    },
    compoundVariants: [
      // Link variants don't need height/padding
      {
        variant: "link",
        className: "h-auto px-0 py-0 rounded-[6px]",
      },
      {
        variant: "link-brand",
        className: "h-auto px-0 py-0 rounded-[6px]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/** Maps button size to appropriate icon size */
const buttonSizeToIconSize: Record<NonNullable<ButtonProps["size"]>, IconSize> =
  {
    xs: "md",
    md: "md",
    lg: "md",
    xl: "lg",
    "2xl": "lg",
  };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element instead of a `<button>`. Useful for Next.js `<Link>` or `<a>` tags. */
  asChild?: boolean;
  /** Material Symbol name for left icon (e.g. "arrow_back", "add") */
  leftIcon?: string;
  /** Material Symbol name for right icon (e.g. "arrow_forward", "chevron_right") */
  rightIcon?: string;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icons */
  iconFilled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "md",
      asChild = false,
      leftIcon,
      rightIcon,
      iconVariant,
      iconFilled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const iconSize = buttonSizeToIconSize[size ?? "md"];

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
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {leftIconElement}
        <Slottable>{children}</Slottable>
        {rightIconElement}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
