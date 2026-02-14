import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";
import { Toggle } from "./toggle";
import { ProgressBar } from "./progress-bar";

/* Slots use design-system components: Icon (left/right), Toggle (switch), Badge, Avatar, Button (CTA), ProgressBar — consumer passes as ReactNode where applicable. */

/* ── CVA ──
 * Token-only: spacing (px-md, py-sm, gap-md), radius (rounded-sm),
 * bg (hover:bg-tertiary), text (text-primary, text-secondary, text-inactive),
 * icon (text-icon-secondary, text-icon-inactive-subtle).
 */

const menuItemVariants = cva(
  "flex items-center w-full gap-md rounded-sm px-md py-sm text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  {
    variants: {
      disabled: {
        true: "cursor-default opacity-50 pointer-events-none [&_*]:pointer-events-none",
        false: "cursor-pointer hover:bg-tertiary",
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

/** Prevent switch interactions from triggering the parent button. */
const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();

export type MenuItemType = "default" | "multiline" | "callToAction" | "progress";

export interface MenuItemProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "type"
  >,
  Omit<VariantProps<typeof menuItemVariants>, "disabled"> {
  /** Menu item type. Default: "default". */
  type?: MenuItemType;
  /** When true, shows selected/current state (bg-brand-tertiary, text-brand). Sets aria-current="page". Default: false. */
  active?: boolean;
  /** Primary content (e.g. "Text item"). */
  children?: React.ReactNode;
  /** Supporting text below primary (multiline / callToAction). */
  supportingText?: React.ReactNode;
  /** Material Symbol name for left icon (e.g. "add"). */
  leftIcon?: string;
  /** Material Symbol name for right icon (e.g. "chevron_right"). */
  rightIcon?: string;
  /** Avatar slot (use Avatar component). */
  avatar?: React.ReactNode;
  /** Badge slot (use Badge component). */
  badge?: React.ReactNode;
  /** Show switch; use with switchChecked and onSwitchChange. */
  showSwitch?: boolean;
  /** Controlled switch state. */
  switchChecked?: boolean;
  /** Switch change handler. */
  onSwitchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Supporting text on the right (default / multiline). */
  textRight?: React.ReactNode;
  /** CTA button slot (use Button; for type="callToAction"). */
  cta?: React.ReactNode;
  /** Progress type: label above the bar. */
  progressLabel?: React.ReactNode;
  /** Progress type: value 0–100. */
  progressValue?: number;
}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className,
      type: typeVariant = "default",
      disabled = false,
      active = false,
      children,
      supportingText,
      leftIcon,
      rightIcon,
      avatar,
      badge,
      showSwitch = false,
      switchChecked,
      onSwitchChange,
      textRight,
      cta,
      progressLabel,
      progressValue,
      ...props
    },
    ref
  ) => {
    const isMultiline =
      typeVariant === "multiline" || typeVariant === "callToAction";
    const isProgress = typeVariant === "progress";

    /* ── Left section ── */

    const leftSection =
      leftIcon || avatar ? (
        <span className="flex shrink-0 items-center gap-md">
          {leftIcon && (
            <Icon
              name={leftIcon}
              size="sm"
              className={disabled ? "text-icon-inactive-subtle" : "text-icon-secondary"}
              aria-hidden
            />
          )}
          {avatar}
        </span>
      ) : null;

    /* ── Center section ── */

    const centerSection = isProgress ? (
      <span className="min-w-0 flex-1">
        <ProgressBar
          label={progressLabel}
          value={progressValue}
          showValue
          size="sm"
          className="mb-0"
        />
      </span>
    ) : (
      <span
        className={cn(
          "min-w-0 flex-1",
          isMultiline && "flex flex-col gap-xxs"
        )}
      >
        {children != null && (
          <span
            className={cn(
              "text-sm font-medium leading-5",
              disabled ? "text-inactive" : "text-primary"
            )}
          >
            {children}
          </span>
        )}
        {isMultiline && supportingText != null && (
          <span
            className={cn(
              "text-sm leading-5",
              disabled ? "text-inactive" : "text-secondary"
            )}
          >
            {supportingText}
          </span>
        )}
      </span>
    );

    /* ── Right section (never rendered for progress type) ── */

    const rightSection = isProgress ? null : (
      <>
        {badge}
        {showSwitch && (
          <span
            role="presentation"
            onPointerDown={stopPropagation}
            onClick={stopPropagation}
          >
            <Toggle
              size="sm"
              togglePosition="trailing"
              checked={switchChecked}
              onChange={onSwitchChange}
              disabled={disabled}
              aria-label={typeof children === "string" ? `Toggle ${children}` : "Toggle"}
            />
          </span>
        )}
        {textRight != null && (
          <span
            className={cn(
              "text-sm",
              disabled ? "text-inactive" : "text-secondary"
            )}
          >
            {textRight}
          </span>
        )}
        {rightIcon && (
          <Icon
            name={rightIcon}
            size="sm"
            className={disabled ? "text-icon-inactive-subtle" : "text-icon-secondary"}
            aria-hidden
          />
        )}
        {typeVariant === "callToAction" && cta}
      </>
    );

    const hasRightContent =
      rightSection !== null &&
      (!!badge || showSwitch || !!textRight || !!rightIcon || (typeVariant === "callToAction" && !!cta));

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(menuItemVariants({ disabled, active }), className)}
        aria-disabled={disabled}
        aria-current={active ? "page" : undefined}
        {...props}
      >
        {leftSection}
        {centerSection}
        {hasRightContent && (
          <span className="flex shrink-0 items-center gap-md">
            {rightSection}
          </span>
        )}
      </button>
    );
  }
);

MenuItem.displayName = "MenuItem";

export { MenuItem, menuItemVariants };
