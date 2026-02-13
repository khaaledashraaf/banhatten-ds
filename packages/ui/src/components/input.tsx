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

export type InputPreset =
  | "user"
  | "email"
  | "password"
  | "date"
  | "amount"
  | "description"
  | "search";

type PresetConfig = {
  leftIcon?: string;
  rightIcon?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  optional?: boolean;
  hasPasswordToggle?: boolean;
  hasClearBehavior?: boolean;
};

const presetConfig: Record<InputPreset, PresetConfig> = {
  user: {
    leftIcon: "account_circle",
  },
  email: {
    leftIcon: "email",
    type: "email",
  },
  password: {
    leftIcon: "lock",
    rightIcon: "visibility",
    type: "password",
    hasPasswordToggle: true,
  },
  date: {
    leftIcon: "calendar_month",
    type: "date",
  },
  amount: {
    leftIcon: "attach_money",
    rightIcon: "close",
    type: "number",
    hasClearBehavior: true,
  },
  description: {
    leftIcon: "description",
    optional: true,
  },
  search: {
    leftIcon: "search",
    rightIcon: "close",
    optional: true,
    hasClearBehavior: true,
  },
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    Omit<VariantProps<typeof inputWrapperVariants>, "disabled" | "focused"> {
  /** Label text displayed above the input */
  label?: string;
  /** Whether the field is optional (displays "(Optional)" next to label) */
  optional?: boolean;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Material Symbol name for helper text icon (e.g., "error", "info") */
  helperTextIcon?: string;
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
  /** Preset configuration that sets icons, type, and behaviors automatically */
  preset?: InputPreset;
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
      helperTextIcon,
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
      preset,
      type,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const internalRef = React.useRef<HTMLInputElement>(null);
    const inputId = id || React.useId();
    
    // Merge forwarded ref with internal ref
    const inputRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
      },
      [ref]
    );
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const hasError = errorProp || !!errorMessage;
    const isControlled = value !== undefined;

    // Merge preset config with explicit props (explicit props take priority)
    const presetData = preset ? presetConfig[preset] : null;
    const mergedLeftIcon = leftIcon ?? presetData?.leftIcon;
    const mergedRightIcon = rightIcon ?? presetData?.rightIcon;
    const mergedType = type ?? presetData?.type;
    const mergedOptional = optional ?? presetData?.optional;
    const hasPasswordToggle = presetData?.hasPasswordToggle ?? false;
    const hasClearBehavior = presetData?.hasClearBehavior ?? false;

    // Determine actual input type (password toggle affects this)
    const actualInputType =
      hasPasswordToggle && mergedType === "password"
        ? showPassword
          ? "text"
          : "password"
        : mergedType;

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

    const handlePasswordToggle = React.useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const handleClear = React.useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isControlled && onChange) {
          // Controlled input: trigger onChange
          const syntheticEvent = {
            target: { value: "" },
            currentTarget: { value: "" },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(syntheticEvent);
        } else if (internalRef.current) {
          // Uncontrolled input: directly set value
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          )?.set;
          nativeInputValueSetter?.call(internalRef.current, "");
          const event = new Event("input", { bubbles: true });
          internalRef.current.dispatchEvent(event);
        }
      },
      [isControlled, onChange]
    );

    const leftIconElement = mergedLeftIcon ? (
      <span
        className={cn(
          "flex shrink-0 items-center",
          size !== "sm" && "pl-[4px]"
        )}
      >
        <Icon
          name={mergedLeftIcon}
          size="md"
          variant={iconVariant}
          filled={iconFilled}
          className={disabled ? "text-inactive-subtle" : "text-tertiary"}
          aria-hidden
        />
      </span>
    ) : null;

    const rightIconElement = mergedRightIcon ? (
      <span
        className={cn(
          "flex shrink-0 items-center",
          size === "sm" ? "pl-[2px]" : "px-[2px]",
          (hasPasswordToggle || hasClearBehavior) &&
            !disabled &&
            "cursor-pointer"
        )}
        onClick={
          hasPasswordToggle
            ? handlePasswordToggle
            : hasClearBehavior
              ? handleClear
              : undefined
        }
        role={
          hasPasswordToggle || hasClearBehavior ? "button" : undefined
        }
        aria-label={
          hasPasswordToggle
            ? showPassword
              ? "Hide password"
              : "Show password"
            : hasClearBehavior
              ? "Clear input"
              : undefined
        }
        tabIndex={
          hasPasswordToggle || hasClearBehavior ? (disabled ? -1 : 0) : undefined
        }
        onKeyDown={
          hasPasswordToggle || hasClearBehavior
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (hasPasswordToggle) {
                    handlePasswordToggle();
                  } else if (hasClearBehavior) {
                    handleClear(e as unknown as React.MouseEvent);
                  }
                }
              }
            : undefined
        }
      >
        <Icon
          name={
            hasPasswordToggle && showPassword
              ? "visibility_off"
              : mergedRightIcon
          }
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
            {mergedOptional && (
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
              ref={inputRef}
              id={inputId}
              className={cn(
                "flex-1 min-w-0 bg-transparent text-sm text-primary placeholder:text-placeholder focus:outline-none disabled:text-inactive pl-[6px] pr-[8px]",
                "leading-[20px]"
              )}
              disabled={disabled}
              type={actualInputType}
              value={value}
              defaultValue={defaultValue}
              maxLength={maxLength}
              aria-invalid={hasError}
              aria-describedby={
                errorMessage ? errorId : helperText ? helperId : undefined
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
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
              "mt-sm text-sm flex items-center gap-1",
              errorMessage ? "text-error" : "text-secondary"
            )}
          >
            {helperTextIcon && !errorMessage && (
              <Icon
                name={helperTextIcon}
                size="sm"
                className="text-secondary shrink-0"
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

Input.displayName = "Input";

export { Input, inputWrapperVariants as inputVariants };
