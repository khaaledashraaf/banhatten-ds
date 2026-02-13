import * as React from "react";
import { cn } from "../lib/utils";

/* ── Internal Icons ── */

function RadioDot({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={cn(
        "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="3" fill="currentColor" />
    </svg>
  );
}

/* ── Props ── */

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Label text displayed next to the radio */
  label?: string;
  /** Support text displayed below the label */
  supportText?: string;
  /** Position of the radio relative to the label. Default: "leading" */
  radioPosition?: "leading" | "trailing";
}

/* ── Component ── */

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      supportText,
      radioPosition = "leading",
      checked,
      defaultChecked,
      disabled,
      onChange,
      onFocus,
      onBlur,
      id,
      name,
      value,
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

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? !!checked : internalChecked;
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

    // Icon color for radio dot
    const iconColor = isDisabled
      ? "text-icon-inactive-subtle"
      : "text-icon-primary-inverse";

    // Radio visual indicator
    const indicator = (
      <span className="relative size-5 shrink-0">
        {/* Focus ring (behind inner circle) */}
        {isFocused && !isDisabled && (
          <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-full border-2 border-focused" />
        )}
        {/* Outer circle */}
        <span
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-full transition-colors",
            isDisabled
              ? "bg-inactive-subtle border border-inactive"
              : isChecked
                ? "bg-brand group-hover/radio:bg-brand-hover"
                : cn(
                    "bg-primary border",
                    isFocused ? "border-brand" : "border-strong"
                  )
          )}
        />
        {/* Radio dot icon */}
        {isChecked && <RadioDot className={iconColor} />}
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
          "group/radio inline-flex gap-md",
          supportText ? "items-start" : "items-center",
          isDisabled ? "cursor-default" : "cursor-pointer",
          className
        )}
      >
        <input
          ref={mergedRef}
          id={inputId}
          type="radio"
          className="sr-only"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {radioPosition === "leading" ? (
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

Radio.displayName = "Radio";

export { Radio };
