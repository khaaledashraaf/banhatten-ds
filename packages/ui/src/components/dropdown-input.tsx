import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps } from "./icon";

/* ── CVA ──
 * Token-only: spacing (px-sm, gap-sm), radius (rounded-sm), shadow (shadow-xs),
 * bg (bg-component-input-bg, bg-secondary), border (border-strong, border-brand, border-danger-secondary),
 * text (text-primary, text-placeholder, text-inactive).
 * Dropdown trigger button with label, helper text, and selection indicator.
 */

const dropdownTriggerVariants = cva(
  "flex w-full items-center border bg-component-input-bg rounded-sm transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-9 px-sm",
        md: "h-10 px-sm",
        lg: "h-11 px-sm",
      },
      error: {
        true: "",
        false: "",
      },
      disabled: {
        true: "bg-secondary border-inactive cursor-default pointer-events-none",
        false: "border-strong shadow-xs",
      },
      focused: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { focused: true, error: false, disabled: false, className: "border-brand" },
      { focused: true, error: true, disabled: false, className: "border-danger" },
      { error: true, disabled: false, focused: false, className: "border-danger-secondary" },
    ],
    defaultVariants: {
      size: "md",
      error: false,
      disabled: false,
      focused: false,
    },
  }
);

const focusRingVariants = cva(
  "pointer-events-none absolute inset-[-1px] rounded-sm border-4",
  {
    variants: {
      error: {
        true: "border-focused-danger",
        false: "border-focused",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export interface DropdownInputProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "value">,
    Omit<VariantProps<typeof dropdownTriggerVariants>, "disabled" | "focused" | "error"> {
  /** Label text displayed above the trigger */
  label?: string;
  /** Whether the field is optional (displays "(Optional)" next to label) */
  optional?: boolean;
  /** Helper text displayed below the trigger */
  helperText?: string;
  /** Error message displayed below the trigger (overrides helperText when present) */
  errorMessage?: string;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Selected value(s) — only used to derive placeholder vs filled styling */
  value?: string | string[];
  /** Display text for the selected value(s) */
  displayValue?: string;
  /** Whether the dropdown is open */
  open?: boolean;
  /** Callback when dropdown open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Show selection count badge */
  showIndicator?: boolean;
  /** Selection count for indicator badge */
  indicatorCount?: number;
  /** Material Symbol name for left icon (e.g., "account_circle", "search") */
  leftIcon?: string;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icons */
  iconFilled?: boolean;
  /** Render custom left element (overrides leftIcon) */
  leftElement?: React.ReactNode;
}

const DropdownInput = React.forwardRef<HTMLButtonElement, DropdownInputProps>(
  (
    {
      className,
      size = "md",
      label,
      optional,
      helperText,
      errorMessage,
      placeholder = "Select an option",
      value,
      displayValue,
      open = false,
      onOpenChange,
      showIndicator = false,
      indicatorCount,
      leftIcon,
      iconVariant,
      iconFilled,
      leftElement,
      id,
      disabled,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const triggerId = id || React.useId();
    const hasError = !!errorMessage;
    const isFocusVisible = isFocused || open;

    const hasValue = Array.isArray(value)
      ? value.length > 0
      : value !== undefined && value !== null && value !== "";

    const computedDisplayValue = displayValue
      ?? (hasValue
        ? Array.isArray(value)
          ? value.length === 1 ? value[0] : `${value.length} selected`
          : value
        : placeholder);

    const computedIndicatorCount = indicatorCount ?? (Array.isArray(value) ? value.length : 0);
    const showBadge = showIndicator && computedIndicatorCount > 0;

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onOpenChange?.(!open);
        onClick?.(e);
      },
      [onOpenChange, open, onClick]
    );

    const handleFocus = React.useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Escape" && open) {
          e.preventDefault();
          onOpenChange?.(false);
        }
        onKeyDown?.(e);
      },
      [onOpenChange, open, onKeyDown]
    );

    const leftIconElement = leftElement ?? (leftIcon ? (
      <span className="flex shrink-0 items-center pl-[4px]">
        <Icon
          name={leftIcon}
          size="md"
          variant={iconVariant}
          filled={iconFilled}
          className={disabled ? "text-inactive-subtle" : "text-tertiary"}
          aria-hidden
        />
      </span>
    ) : null);

    const indicatorElement = showBadge ? (
      <span className={cn("flex shrink-0 items-center pr-[4px]", disabled && "opacity-50")}>
        <span
          className={cn(
            "flex h-6 min-w-[16px] items-center justify-center rounded-full px-xs text-xs font-medium",
            disabled
              ? "bg-brand-neutral-600 text-on-color"
              : "bg-brand text-on-color"
          )}
        >
          {computedIndicatorCount}
        </span>
      </span>
    ) : null;

    const helperId = `${triggerId}-helper`;
    const errorId = `${triggerId}-error`;
    const describedBy = errorMessage ? errorId : helperText ? helperId : undefined;

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label
            htmlFor={triggerId}
            className="block text-sm font-medium text-primary mb-sm"
          >
            {label}
            {optional && (
              <span className="text-tertiary font-normal ml-1">(Optional)</span>
            )}
          </label>
        )}
        <button
          ref={ref}
          id={triggerId}
          type="button"
          disabled={disabled}
          className={cn(
            dropdownTriggerVariants({
              size,
              error: hasError,
              disabled: !!disabled,
              focused: isFocusVisible,
            }),
            "relative focus:outline-none"
          )}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          {...props}
        >
          {isFocusVisible && (
            <div className={focusRingVariants({ error: hasError })} />
          )}
          {leftIconElement}
          <span
            className={cn(
              "flex-1 min-w-0 text-left text-sm truncate px-sm",
              hasValue && !disabled
                ? "text-primary"
                : disabled
                  ? "text-inactive"
                  : "text-placeholder"
            )}
          >
            {computedDisplayValue}
          </span>
          {indicatorElement}
          <Icon
            name={open ? "expand_less" : "expand_more"}
            size="md"
            className={disabled ? "text-inactive-subtle" : "text-tertiary"}
            aria-hidden
          />
        </button>
        {(helperText || errorMessage) && (
          <p
            id={errorMessage ? errorId : helperId}
            className={cn(
              "mt-sm text-sm flex items-center gap-1",
              errorMessage ? "text-error" : "text-secondary"
            )}
          >
            {errorMessage && (
              <Icon
                name="error"
                size="sm"
                className="text-error shrink-0"
                aria-hidden
              />
            )}
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

DropdownInput.displayName = "DropdownInput";

export { DropdownInput, dropdownTriggerVariants, focusRingVariants as dropdownFocusRingVariants };
