import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps } from "./icon";

const inputWrapperVariants = cva(
  "flex w-full items-center border bg-component-input-bg border-strong rounded-sm shadow-xs transition-colors",
  {
    variants: {
      size: {
        sm: "h-9 px-sm",
        md: "h-10 px-sm",
        lg: "h-11 px-sm",
      },
      error: {
        true: "border-danger-secondary",
        false: "",
      },
      disabled: {
        true: "bg-secondary border-inactive shadow-none pointer-events-none",
        false: "",
      },
      focused: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { focused: true, error: false, className: "border-brand" },
      { focused: true, error: true, className: "border-danger" },
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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    Omit<VariantProps<typeof inputWrapperVariants>, "disabled" | "focused"> {
  /** Label text displayed above the input */
  label?: string;
  /** Whether the field is optional (displays "(Optional)" next to label) */
  optional?: boolean;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed below the input (overrides helperText when present) */
  errorMessage?: string;
  /** Maximum character count (displays counter outside input, aligned with top) */
  maxLength?: number;
  /** Current character count (if not provided, calculated from value length) */
  characterCount?: number;
  /** Material Symbol name for left icon (e.g., "search", "email") */
  leftIcon?: string;
  /** Material Symbol name for right icon (e.g., "visibility", "close") */
  rightIcon?: string;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icons */
  iconFilled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = "md",
      error: errorProp,
      label,
      optional,
      helperText,
      errorMessage,
      maxLength,
      characterCount,
      leftIcon,
      rightIcon,
      iconVariant,
      iconFilled,
      id,
      disabled,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const inputId = id || React.useId();
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const hasError = errorProp || !!errorMessage;

    // Calculate character count
    const currentValue = value ?? defaultValue ?? "";
    const currentLength =
      characterCount !== undefined
        ? characterCount
        : typeof currentValue === "string"
          ? currentValue.length
          : 0;

    const handleFocus = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    const leftIconElement = leftIcon ? (
      <span
        className={cn(
          "flex shrink-0 items-center",
          size !== "sm" && "pl-[4px]"
        )}
      >
        <Icon
          name={leftIcon}
          size="md"
          variant={iconVariant}
          filled={iconFilled}
          className={disabled ? "text-inactive-subtle" : "text-tertiary"}
          aria-hidden
        />
      </span>
    ) : null;

    const rightIconElement = rightIcon ? (
      <span
        className={cn(
          "flex shrink-0 items-center",
          size === "sm" ? "pl-[2px]" : "px-[2px]"
        )}
      >
        <Icon
          name={rightIcon}
          size="md"
          variant={iconVariant}
          filled={iconFilled}
          className={disabled ? "text-inactive-subtle" : "text-tertiary"}
          aria-hidden
        />
      </span>
    ) : null;

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-primary mb-sm"
          >
            {label}
            {optional && (
              <span className="text-tertiary font-normal ml-1">
                (Optional)
              </span>
            )}
          </label>
        )}
        <div className="flex items-start gap-xs">
          <div
            className={cn(
              inputWrapperVariants({
                size,
                error: hasError,
                disabled: !!disabled,
                focused: isFocused,
              }),
              "relative flex-1"
            )}
          >
            {isFocused && (
              <div className={focusRingVariants({ error: hasError })} />
            )}
            {leftIconElement}
            <input
              ref={ref}
              id={inputId}
              className={cn(
                "flex-1 min-w-0 bg-transparent text-sm text-primary placeholder:text-placeholder focus:outline-none disabled:text-inactive pl-[6px] pr-[8px]",
                "leading-[20px]"
              )}
              disabled={disabled}
              value={value}
              defaultValue={defaultValue}
              maxLength={maxLength}
              aria-invalid={hasError}
              aria-describedby={
                errorMessage ? errorId : helperText ? helperId : undefined
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />
            {rightIconElement}
          </div>
          {maxLength !== undefined && (
            <span
              className={cn(
                "text-sm shrink-0",
                size === "sm" && "leading-9",
                size === "md" && "leading-10",
                size === "lg" && "leading-[44px]",
                hasError ? "text-error" : "text-tertiary"
              )}
            >
              {currentLength}
            </span>
          )}
        </div>
        {(helperText || errorMessage) && (
          <p
            id={errorMessage ? errorId : helperId}
            className={cn(
              "mt-sm text-sm",
              errorMessage ? "text-error" : "text-secondary"
            )}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputWrapperVariants as inputVariants };
