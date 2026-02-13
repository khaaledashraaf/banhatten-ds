import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps, type IconSize } from "./icon";

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-sm font-medium shrink-0 gap-1 border transition-colors",
  {
    variants: {
      type: {
        simple: "",
        "with-dot": "",
        "with-icon": "",
      },
      state: {
        default:
          "bg-primary border-strong text-primary hover:bg-highlight-hover",
        focus: "bg-primary border-brand text-brand",
        active: "bg-brand-tertiary border-brand text-primary",
        disabled:
          "bg-secondary border-inactive-subtle text-inactive pointer-events-none",
      },
      size: {
        small: "h-6 px-sm text-xs leading-4",
        large: "h-7 px-md text-sm leading-5",
      },
    },
    compoundVariants: [
      {
        state: "disabled",
        className: "hover:bg-secondary hover:border-inactive-subtle",
      },
      {
        state: "active",
        className: "hover:bg-brand-tertiary hover:border-brand",
      },
    ],
    defaultVariants: {
      type: "simple",
      state: "default",
      size: "small",
    },
  }
);

/** Maps tag size to appropriate icon size */
const tagSizeToIconSize: Record<
  NonNullable<TagProps["size"]>,
  IconSize
> = {
  small: "xs",
  large: "sm",
};

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof tagVariants> {
  /** Material Symbol name for left icon when type is "with-icon" (e.g. "calendar_month", "info"). Default: "calendar_month" */
  leftIcon?: string;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icons */
  iconFilled?: boolean;
  /** Whether to show a close button on the right */
  close?: boolean;
  /** Callback fired when the close button is clicked */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      type = "simple",
      state = "default",
      size = "small",
      leftIcon,
      iconVariant,
      iconFilled,
      close,
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    const iconSize = tagSizeToIconSize[size ?? "small"];
    const isDisabled = state === "disabled";
    const isActive = state === "active";
    const isDefault = state === "default" || !state;

    // Determine dot color: green (success) in default and active states, matches text in other states
    const dotColor =
      (isDefault || isActive) && !isDisabled ? "bg-success" : "bg-current";

    // Determine icon/text color based on state
    const iconColor = isDisabled
      ? "text-inactive"
      : isActive
        ? "text-brand"
        : state === "focus"
          ? "text-brand"
          : "text-primary";

    const dotElement =
      type === "with-dot" ? (
        <span
          className={cn(
            "inline-block size-1.5 rounded-full shrink-0",
            dotColor
          )}
          aria-hidden="true"
        />
      ) : null;

    const leftIconElement =
      type === "with-icon" ? (
        <Icon
          name={leftIcon || "calendar_month"}
          size={iconSize}
          variant={iconVariant}
          filled={iconFilled}
          className={iconColor}
          aria-hidden
        />
      ) : null;

    const handleCloseClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!isDisabled && onClose) {
          onClose(e);
        }
      },
      [isDisabled, onClose]
    );

    const closeButtonElement = close ? (
      <button
        type="button"
        onClick={handleCloseClick}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center shrink-0 p-0.5 rounded-xs transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
          isDisabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:bg-quarterary active:bg-tertiary",
          iconColor
        )}
        aria-label="Remove tag"
      >
        <Icon
          name="close"
          size={iconSize}
          variant={iconVariant}
          filled={iconFilled}
          aria-hidden
        />
      </button>
    ) : null;

    return (
      <span
        ref={ref}
        className={cn(tagVariants({ type, state, size }), className)}
        {...props}
      >
        {dotElement}
        {leftIconElement}
        {children}
        {closeButtonElement}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag, tagVariants };
