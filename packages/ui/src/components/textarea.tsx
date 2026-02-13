import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps } from "./icon";

const textareaWrapperVariants = cva(
  "flex w-full items-start border bg-component-input-bg border-strong rounded-sm shadow-xs transition-colors min-h-[88px] px-sm py-sm",
  {
    variants: {
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

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<VariantProps<typeof textareaWrapperVariants>, "disabled" | "focused"> {
  /** Label text displayed above the textarea */
  label?: string;
  /** Whether the field is optional (displays "(Optional)" next to label) */
  optional?: boolean;
  /** Helper text displayed below the textarea */
  helperText?: string;
  /** Material Symbol name for helper text icon (e.g., "error", "info") */
  helperTextIcon?: string;
  /** Error message displayed below the textarea (overrides helperText when present) */
  errorMessage?: string;
  /** Maximum character count (displays counter outside textarea, aligned with top) */
  maxLength?: number;
  /** Current character count (if not provided, calculated from value length) */
  characterCount?: number;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icons */
  iconFilled?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      error: errorProp,
      label,
      optional,
      helperText,
      helperTextIcon,
      errorMessage,
      maxLength,
      characterCount,
      iconVariant,
      iconFilled,
      id,
      disabled,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      rows,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    const textareaId = id || React.useId();
    
    // Merge forwarded ref with internal ref
    const textareaRef = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
        }
      },
      [ref]
    );
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
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
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-primary mb-sm"
          >
            {label}
            {optional && (
              <span className="text-tertiary font-normal ml-1">
                (Optional)
              </span>
            )}
            {optional && (
              <Icon
                name="info"
                size="sm"
                variant={iconVariant}
                filled={iconFilled}
                className="text-tertiary ml-1 inline-block align-middle"
                aria-hidden
              />
            )}
          </label>
        )}
        <div className="flex items-start gap-xs">
          <div
            className={cn(
              textareaWrapperVariants({
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
            <textarea
              ref={textareaRef}
              id={textareaId}
              className={cn(
                "flex-1 min-w-0 w-full bg-transparent text-sm text-primary placeholder:text-placeholder focus:outline-none disabled:text-inactive resize-none",
                "leading-[20px]"
              )}
              disabled={disabled}
              value={value}
              defaultValue={defaultValue}
              maxLength={maxLength}
              rows={rows ?? 4}
              aria-invalid={hasError}
              aria-describedby={
                errorMessage ? errorId : helperText ? helperId : undefined
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
              {...props}
            />
          </div>
          {maxLength !== undefined && (
            <span
              className={cn(
                "text-sm shrink-0 leading-[88px]",
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

TextArea.displayName = "TextArea";

export { TextArea, textareaWrapperVariants as textareaVariants };
