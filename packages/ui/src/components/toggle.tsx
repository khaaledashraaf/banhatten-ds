import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";

/* ── CVA ── */

const toggleVariants = cva(
  "relative inline-flex shrink-0 rounded-full p-0.5 transition-colors",
  {
    variants: {
      size: {
        sm: "h-5 w-8",
        md: "h-6 w-10",
      },
      active: {
        true: "bg-component-toggle-brand-bg hover:bg-component-toggle-brand-bg-hover",
        false: "bg-quarterary hover:bg-quarterary/80",
      },
      disabled: {
        true: "bg-inactive-subtle hover:bg-inactive-subtle",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      active: false,
      disabled: false,
    },
  }
);

const thumbVariants = cva(
  "pointer-events-none absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-primary shadow-md transition-transform",
  {
    variants: {
      size: {
        sm: "left-0.5 size-3.5 data-[state=on]:translate-x-3",
        md: "left-0.5 size-5 data-[state=on]:translate-x-4",
      },
      disabled: {
        true: "bg-quarterary shadow-none",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

/* ── Props ── */

export interface ToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "children"
  > {
  /** Label text displayed next to the toggle */
  label?: string;
  /** Support text displayed below the label */
  supportText?: string;
  /** Position of the toggle relative to the label. Default: "trailing" */
  togglePosition?: "leading" | "trailing";
  /** Size of the toggle. Default: "md" */
  size?: "sm" | "md";
  /** When true, shows a check icon when on and a close icon when off */
  withIcon?: boolean;
}

/* ── Component ── */

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      label,
      supportText,
      togglePosition = "trailing",
      size = "md",
      withIcon = false,
      checked,
      defaultChecked,
      disabled,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false
    );
    const inputId = id || React.useId();

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? !!checked : internalChecked;
    const isDisabled = !!disabled;

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange]
    );

    const iconName = isChecked ? "check" : "close";
    const iconColor = isDisabled
      ? "text-icon-inactive-subtle"
      : isChecked
        ? "text-icon-primary-inverse"
        : "text-icon-secondary";

    const switchElement = (
      <span
        className={cn(
          toggleVariants({ size, active: isChecked, disabled: isDisabled }),
          "peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-2"
        )}
        aria-hidden
      >
        <span
          className={thumbVariants({ size, disabled: isDisabled })}
          data-state={isChecked ? "on" : "off"}
        >
          {withIcon && (
            <Icon
              name={iconName}
              size="xs"
              className={cn("pointer-events-none", iconColor)}
              aria-hidden
            />
          )}
        </span>
      </span>
    );

    const labelContent =
      label || supportText ? (
        <span className={cn("flex min-w-0 flex-col", supportText && "gap-xxs")}>
          {label && (
            <span
              className={cn(
                "text-sm font-medium leading-4",
                isDisabled ? "text-inactive" : "text-primary"
              )}
            >
              {label}
            </span>
          )}
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
          "group/toggle inline-flex gap-md",
          supportText ? "items-start" : "items-center",
          isDisabled ? "cursor-default" : "cursor-pointer",
          className
        )}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          role="switch"
          className="peer sr-only"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          aria-checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        {togglePosition === "leading" ? (
          <>
            {switchElement}
            {labelContent}
          </>
        ) : (
          <>
            {labelContent}
            {switchElement}
          </>
        )}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle, toggleVariants, thumbVariants };
