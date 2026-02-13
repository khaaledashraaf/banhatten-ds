import * as React from "react";
import { cn } from "../lib/utils";
import { Icon, type IconProps } from "./icon";

/* ── Internal SVG Icons (shared with Checkbox) ── */

function CheckSvg({ className }: { className?: string }) {
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
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndeterminateSvg({ className }: { className?: string }) {
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
      <path
        d="M2.5 6H9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Props ── */

export interface CheckboxCardProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Label text displayed in the card */
  label: string;
  /** Description text displayed below the label */
  description?: string;
  /** Material Symbol name for the card icon (e.g. "person", "settings") */
  icon?: string;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of icon */
  iconFilled?: boolean;
  /** Position of the checkbox relative to the content. Default: "trailing" */
  checkboxPosition?: "leading" | "trailing";
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
}

/* ── Component ── */

const CheckboxCard = React.forwardRef<HTMLInputElement, CheckboxCardProps>(
  (
    {
      className,
      label,
      description,
      icon,
      iconVariant,
      iconFilled,
      checkboxPosition = "trailing",
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

    // Set indeterminate via DOM property
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

    // Icon color for check / indeterminate marks inside the checkbox indicator
    const checkIconColor = isDisabled
      ? "text-icon-inactive-subtle"
      : "text-icon-primary-inverse";

    // Checkbox indicator (card version — no internal focus ring)
    const checkboxIndicator = (
      <span className="relative size-5 shrink-0">
        <span
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-xs transition-colors",
            isDisabled
              ? "bg-inactive-subtle border border-inactive"
              : isActive
                ? "bg-brand"
                : "bg-primary border border-strong"
          )}
        />
        {isActive &&
          (indeterminate ? (
            <IndeterminateSvg className={checkIconColor} />
          ) : (
            <CheckSvg className={checkIconColor} />
          ))}
      </span>
    );

    // Icon element (Material Symbol)
    const iconElement = icon ? (
      <Icon
        name={icon}
        size="lg"
        variant={iconVariant}
        filled={iconFilled}
        className={isDisabled ? "text-icon-inactive" : "text-icon-secondary"}
        aria-hidden
      />
    ) : null;

    // Text content (label + optional description)
    const textContent = (
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col",
          description && "gap-xs"
        )}
      >
        <span
          className={cn(
            "font-medium",
            description
              ? "text-sm leading-4"
              : "text-base leading-5",
            isDisabled ? "text-inactive" : "text-primary"
          )}
        >
          {label}
        </span>
        {description && (
          <span
            className={cn(
              "text-sm leading-5",
              isDisabled ? "text-inactive" : "text-secondary"
            )}
          >
            {description}
          </span>
        )}
      </div>
    );

    // Card container classes
    const cardClasses = cn(
      "relative flex rounded-md p-lg border transition-colors",
      checkboxPosition === "leading" ? "gap-md" : "gap-lg",
      !description && checkboxPosition === "leading"
        ? "items-center"
        : "items-start",
      isDisabled
        ? "bg-inactive-subtle border-inactive-subtle cursor-default"
        : isActive
          ? "bg-primary border-brand cursor-pointer"
          : "bg-primary border-default hover:bg-highlight-hover cursor-pointer",
      className
    );

    return (
      <label className={cardClasses}>
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

        {/* Selection / focus ring overlay */}
        {(isActive || isFocused) && !isDisabled && (
          <span className="pointer-events-none absolute inset-[-1px] rounded-md border-2 border-focused" />
        )}

        {checkboxPosition === "leading" ? (
          <>
            {checkboxIndicator}
            {iconElement && (
              <div className="flex flex-1 items-start gap-md">
                {iconElement}
                {textContent}
              </div>
            )}
            {!iconElement && textContent}
          </>
        ) : (
          <>
            {iconElement ? (
              <div className="flex min-w-0 flex-1 items-start gap-md">
                {iconElement}
                {textContent}
              </div>
            ) : (
              textContent
            )}
            {checkboxIndicator}
          </>
        )}
      </label>
    );
  }
);

CheckboxCard.displayName = "CheckboxCard";

export { CheckboxCard };
