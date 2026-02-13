import * as React from "react";
import { cn } from "../lib/utils";
import { Icon } from "./icon";

/* ── Internal Icons ── */

function CheckSvg({ className }: { className?: string }) {
  return (
    <Icon
      name="check"
      size="xs"
      className={cn(
        "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
    />
  );
}

function IndeterminateSvg({ className }: { className?: string }) {
  return (
    <Icon
      name="remove"
      size="xs"
      className={cn(
        "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
    />
  );
}

/* ── Props ── */

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Support text displayed below the label */
  supportText?: string;
  /** Position of the checkbox relative to the label. Default: "leading" */
  checkboxPosition?: "leading" | "trailing";
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
}

/* ── Component ── */

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      supportText,
      checkboxPosition = "leading",
      indeterminate = false,
      checked,
      defaultChecked,
      disabled,
      onChange,
      onFocus,
      onBlur,
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false
    );
    const internalRef = React.useRef<HTMLInputElement>(null);
    const inputId = id || React.useId();

    // Merge forwarded ref with internal ref
    const mergedRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current =
            node;
        }
      },
      [ref]
    );

    // Set indeterminate via DOM property (not available as HTML attribute)
    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? !!checked : internalChecked;
    const isActive = indeterminate || isChecked;
    const isDisabled = !!disabled;

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
          setInternalChecked(e.target.checked);
        }
        onChange?.(e);
      },
      [isControlled, onChange]
    );

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

    // Icon color for check / indeterminate marks
    const iconColor = isDisabled
      ? "text-icon-inactive-subtle"
      : "text-icon-primary-inverse";

    // Checkbox visual indicator
    const indicator = (
      <span className="relative size-5 shrink-0">
        {/* Focus ring (behind inner box) */}
        {isFocused && !isDisabled && (
          <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-xs border-2 border-focused" />
        )}
        {/* Inner box */}
        <span
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-xs transition-colors",
            isDisabled
              ? "bg-inactive-subtle border border-inactive"
              : isActive
                ? "bg-brand group-hover/checkbox:bg-brand-hover"
                : cn(
                    "bg-primary border",
                    isFocused ? "border-brand" : "border-strong"
                  )
          )}
        />
        {/* Check or indeterminate icon */}
        {isActive &&
          (indeterminate ? (
            <IndeterminateSvg className={iconColor} />
          ) : (
            <CheckSvg className={iconColor} />
          ))}
      </span>
    );

    // Label + support text content
    const labelContent = label ? (
      <span
        className={cn("flex min-w-0 flex-col", supportText && "gap-xxs")}
      >
        <span
          className={cn(
            "text-sm font-medium leading-4",
            isDisabled ? "text-inactive" : "text-primary"
          )}
        >
          {label}
        </span>
        {supportText && (
          <span
            className={cn(
              "text-sm leading-5",
              isDisabled ? "text-inactive" : "text-secondary"
            )}
          >
            {supportText}
          </span>
        )}
      </span>
    ) : null;

    return (
      <label
        className={cn(
          "group/checkbox inline-flex gap-md",
          supportText ? "items-start" : "items-center",
          isDisabled ? "cursor-default" : "cursor-pointer",
          className
        )}
      >
        <input
          ref={mergedRef}
          id={inputId}
          type="checkbox"
          className="sr-only"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          aria-checked={indeterminate ? "mixed" : undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {checkboxPosition === "leading" ? (
          <>
            {indicator}
            {labelContent}
          </>
        ) : (
          <>
            {labelContent}
            {indicator}
          </>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
