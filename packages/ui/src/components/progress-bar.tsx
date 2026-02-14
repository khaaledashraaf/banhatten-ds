import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";

const progressBarTrackVariants = cva(
  "w-full overflow-hidden rounded-sm bg-tertiary",
  {
    variants: {
      size: {
        sm: "h-1",
        lg: "h-2",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const progressBarFillVariants = cva("h-full rounded-sm shrink-0", {
  variants: {
    color: {
      brand: "bg-brand",
      success: "bg-success",
      danger: "bg-danger",
      info: "bg-info",
      neutral: "bg-quarterary",
    },
  },
  defaultVariants: {
    color: "brand",
  },
});

export interface ProgressBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "color">,
    VariantProps<typeof progressBarTrackVariants>,
    VariantProps<typeof progressBarFillVariants> {
  /** Progress value 0–100. Omit for indeterminate (animated) state. */
  value?: number;
  /** Optional label above the bar (e.g. "Label (Optional)"). */
  label?: React.ReactNode;
  /** Optional info icon shown next to the label. */
  showLabelInfoIcon?: boolean;
  /** Optional helper text below the bar. */
  helperText?: React.ReactNode;
  /** Whether to show the numeric value (e.g. "40%") beside the bar. */
  showValue?: boolean;
  /** Callback for the optional refresh icon button. When set, a refresh icon is shown next to the value. */
  onRefresh?: () => void;
  /** Accessible name for the progress bar when no visible label is provided. */
  "aria-label"?: string;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      size = "sm",
      color = "brand",
      value,
      label,
      showLabelInfoIcon = false,
      helperText,
      showValue = false,
      onRefresh,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const isIndeterminate = value === undefined;
    const clampedValue = isIndeterminate
      ? undefined
      : Math.min(100, Math.max(0, value));
    const valueText =
      clampedValue !== undefined ? `${Math.round(clampedValue)}%` : undefined;

    const barId = React.useId();
    const labelId = `${barId}-label`;
    const helperId = `${barId}-helper`;

    return (
      <div
        ref={ref}
        role="group"
        className={cn("flex min-w-0 flex-col", className)}
        aria-labelledby={label ? labelId : undefined}
        aria-describedby={helperText ? helperId : undefined}
        {...props}
      >
        {label && (
          <div
            id={labelId}
            className="flex items-center gap-xs text-sm font-medium text-primary mb-sm"
          >
            {label}
            {showLabelInfoIcon && (
              <Icon
                name="info"
                size="xs"
                className="text-icon-tertiary"
                aria-hidden
              />
            )}
          </div>
        )}

        <div
          id={barId}
          role="progressbar"
          aria-valuenow={isIndeterminate ? undefined : clampedValue}
          aria-valuemin={isIndeterminate ? undefined : 0}
          aria-valuemax={isIndeterminate ? undefined : 100}
          aria-valuetext={isIndeterminate ? "Loading" : valueText}
          aria-label={ariaLabel}
          className="flex min-w-0 items-center gap-md"
        >
          <div
            className={cn(
              "min-w-0 flex-1",
              progressBarTrackVariants({ size })
            )}
          >
            <div
              className={cn(
                progressBarFillVariants({ color }),
                isIndeterminate
                  ? "w-[40%] min-w-[40%] animate-pulse"
                  : "min-w-0"
              )}
              style={
                !isIndeterminate && clampedValue !== undefined
                  ? { width: `${clampedValue}%` }
                  : undefined
              }
            />
          </div>
          {showValue && !isIndeterminate && (
            <div className="flex items-center gap-1 text-sm text-secondary shrink-0">
              <span aria-hidden>{valueText}</span>
              {onRefresh && (
                <button
                  type="button"
                  onClick={onRefresh}
                  className="rounded-sm p-xxs text-icon-secondary hover:text-icon-primary hover:bg-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1"
                  aria-label="Refresh"
                >
                  <Icon name="refresh" size="xs" aria-hidden />
                </button>
              )}
            </div>
          )}
        </div>

        {helperText && (
          <p
            id={helperId}
            className="mt-sm text-sm text-secondary"
            role="status"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar, progressBarTrackVariants, progressBarFillVariants };
