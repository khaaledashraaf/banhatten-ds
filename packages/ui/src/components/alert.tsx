import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconProps } from "./icon";
import { Button } from "./button";

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

const alertVariants = cva(
  "flex gap-md rounded-sm px-md py-md transition-colors",
  {
    variants: {
      type: {
        info: "",
        success: "",
        warning: "",
        danger: "",
        neutral: "",
      },
      emphasis: {
        // Low is identical across all types — no compound variant needed
        low: "bg-primary border border-strong text-primary",
        medium: "",
        // NOTE: "medium" and "moderate" are near-synonyms in English.
        // Consider renaming to "subtle" / "bold" in a future major version.
        moderate: "",
        high: "",
      },
    },
    compoundVariants: [
      // Medium emphasis — light pastel backgrounds with pastel borders
      { emphasis: "medium", type: "info", className: "bg-info-tertiary border border-info-subtle text-info" },
      { emphasis: "medium", type: "success", className: "bg-success-tertiary border border-success-secondary text-success" },
      { emphasis: "medium", type: "warning", className: "bg-warning-tertiary border border-warning-secondary text-warning-strong" },
      { emphasis: "medium", type: "danger", className: "bg-danger-tertiary border border-danger-secondary text-danger" },
      { emphasis: "medium", type: "neutral", className: "bg-secondary border border-strong" },
      // Moderate emphasis — secondary backgrounds with more saturated borders
      { emphasis: "moderate", type: "info", className: "bg-info-secondary border border-info-subtle text-info" },
      { emphasis: "moderate", type: "success", className: "bg-success-secondary border border-success-secondary text-success" },
      { emphasis: "moderate", type: "warning", className: "bg-warning-secondary border border-warning-secondary text-warning-strong" },
      { emphasis: "moderate", type: "danger", className: "bg-danger-secondary border border-danger-secondary text-danger" },
      { emphasis: "moderate", type: "neutral", className: "bg-tertiary border border-strong" },
      // High emphasis — saturated backgrounds with white text, no border
      { emphasis: "high", type: "info", className: "bg-info text-on-color" },
      { emphasis: "high", type: "success", className: "bg-success text-on-color" },
      { emphasis: "high", type: "warning", className: "bg-warning text-on-color" },
      { emphasis: "high", type: "danger", className: "bg-danger text-on-color" },
      { emphasis: "high", type: "neutral", className: "bg-quarterary text-primary" },
    ],
    defaultVariants: {
      type: "info",
      emphasis: "medium",
    },
  }
);

// ---------------------------------------------------------------------------
// Lookup maps — single source of truth for type → visual mapping
// ---------------------------------------------------------------------------

type AlertType = NonNullable<VariantProps<typeof alertVariants>["type"]>;

/** Maps alert type to its preset Material Symbol icon name */
const TYPE_ICON: Record<AlertType, string> = {
  danger: "error",
  success: "check_circle",
  warning: "warning",
  info: "info",
  neutral: "notifications",
};

/** Maps alert type to its semantic text color class */
const TYPE_COLOR: Record<AlertType, string> = {
  danger: "text-danger",
  success: "text-success",
  warning: "text-warning-strong",
  info: "text-info",
  neutral: "text-primary",
};

/** Maps alert type to its icon color class */
const TYPE_ICON_COLOR: Record<AlertType, string> = {
  danger: "text-danger",
  success: "text-success",
  warning: "text-warning-strong",
  info: "text-info",
  neutral: "text-icon-primary",
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AlertAction {
  /** Button label text */
  label: string;
  /** Click handler */
  onClick: () => void;
}

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertVariants> {
  /** Main title text displayed in the alert */
  title: string;
  /** Optional subtitle/description text (shown when expand=true) */
  description?: string;
  /** Action buttons (shown when expand=true). Rendered as link-style buttons. */
  actions?: AlertAction[];
  /** Callback fired when the close button is clicked */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Icon variant style. Default: "outlined" */
  iconVariant?: IconProps["variant"];
  /** Render filled variant of the status icon */
  iconFilled?: boolean;
  /** Expand to show description and action buttons */
  expand?: boolean;
  /** ARIA role. Default: "alert" for danger/warning, "status" for others */
  role?: "alert" | "status";
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      type = "info",
      emphasis = "medium",
      expand = false,
      title,
      description,
      actions,
      onClose,
      iconVariant,
      iconFilled,
      role,
      ...props
    },
    ref
  ) => {
    // Resolve nullable CVA variant props (VariantProps yields T | null | undefined)
    const t = type ?? "info";
    const e = emphasis ?? "medium";

    const isHigh = e === "high";
    // High-emphasis neutral has a light bg (bg-quarterary) unlike other high types
    const isHighContrast = isHigh && t !== "neutral";
    const iconSize = e === "low" ? "sm" : "md";
    const iconColor = isHighContrast ? "text-on-color" : TYPE_ICON_COLOR[t];
    const descriptionColor = isHighContrast ? "text-on-color" : "";

    const closeButtonColor =
      e === "low"
        ? "text-icon-secondary"
        : t === "neutral"
          ? isHigh
            ? "text-icon-primary"
            : "text-icon-secondary"
          : iconColor;

    const resolvedRole =
      role ?? (t === "danger" || t === "warning" ? "alert" : "status");
    const liveRegion =
      t === "danger" || t === "warning" ? "assertive" : "polite";

    return (
      <div
        ref={ref}
        role={resolvedRole}
        aria-live={liveRegion}
        className={cn(
          alertVariants({ type: t, emphasis: e }),
          expand ? "items-start" : "items-center",
          className
        )}
        {...props}
      >
        {/* Status icon */}
        <Icon
          name={TYPE_ICON[t]}
          size={iconSize}
          variant={iconVariant}
          filled={iconFilled}
          className={cn("shrink-0", iconColor)}
          aria-hidden
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div
            className={cn(
              "flex justify-between gap-md",
              expand ? "items-start" : "items-center"
            )}
          >
            <div className="flex-1 min-w-0">
              <div
                className={cn(
                  "text-sm leading-5",
                  expand && description ? "font-medium" : "font-regular"
                )}
              >
                {title}
              </div>
              {expand && description && (
                <div
                  className={cn("text-sm leading-5 mt-xs", descriptionColor)}
                >
                  {description}
                </div>
              )}
            </div>

            {/* Close button — intentionally does NOT inherit iconVariant/iconFilled */}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "inline-flex items-center justify-center shrink-0 p-0.5 rounded-xs transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
                  "cursor-pointer",
                  closeButtonColor
                )}
                aria-label="Close alert"
              >
                <Icon name="close" size={iconSize} aria-hidden />
              </button>
            )}
          </div>

          {/* Action buttons */}
          {expand && actions && actions.length > 0 && (
            <div className="flex items-center gap-md mt-sm">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="link-brand"
                  size="xs"
                  onClick={action.onClick}
                  className={
                    isHighContrast
                      ? "text-on-color"
                      : e === "low"
                        ? undefined
                        : TYPE_COLOR[t]
                  }
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants };
