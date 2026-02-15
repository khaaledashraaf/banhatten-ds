import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Tooltip } from "./tooltip";

/**
 * Slider Handle — Figma node 191:15504
 * Variants: State (default, hover, active) × Label (none, tooltip above/below, simple label above/below).
 * Tokens only: radius.full, border-brand, bg-primary, bg-brand-tertiary, bg-brand-secondary, spacing (size, gap), shadow (tooltip uses Tooltip component).
 */

/* ── CVA ── */

const stateClassMap = {
  default: "hover:bg-primary active:bg-primary",
  hover: "bg-brand-tertiary pointer-events-none",
  active: "bg-brand-secondary pointer-events-none",
} as const;

/** Fixed 24×24px per Figma; no size variant. */
const sliderHandleCircleVariants = cva(
  "size-2xl shrink-0 rounded-full border border-brand bg-primary transition-colors cursor-grab touch-none select-none hover:bg-brand-tertiary active:bg-brand-secondary active:cursor-grabbing shadow-sm"
);

/* ── Props ── */

export interface SliderHandleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Value to show as tooltip or label (e.g. "0%"). When set with labelVariant, shows above or below the handle. */
  valueLabel?: React.ReactNode;
  /** How to show the value: "tooltip" (hover) or "label" (always visible). Omitted when valueLabel is not set. */
  labelVariant?: "tooltip" | "label";
  /** Position of tooltip or label relative to the circle. Default: "below" */
  labelPosition?: "above" | "below";
  /** Force visual state for display (e.g. docs). Omit for interactive :hover/:active. */
  state?: "default" | "hover" | "active";
}

/* ── Component ── */

const SliderHandle = React.forwardRef<HTMLDivElement, SliderHandleProps>(
  (
    {
      className,
      state,
      valueLabel,
      labelVariant,
      labelPosition = "below",
      ...props
    },
    ref
  ) => {
    const circle = (
      <div
        ref={ref}
        role="img"
        {...(valueLabel != null && valueLabel !== ""
          ? { "aria-hidden": true }
          : { "aria-label": "Slider handle" })}
        className={cn(
          sliderHandleCircleVariants(),
          state && stateClassMap[state],
          className
        )}
        {...props}
      />
    );

    if (!valueLabel || valueLabel === "") return circle;

    const tooltipSide = labelPosition === "above" ? "top" : "bottom";

    const label =
      labelVariant === "label" ? (
        <span
          className={cn(
            "absolute left-1/2 -translate-x-1/2 text-xs text-primary whitespace-nowrap",
            labelPosition === "above"
              ? "bottom-[calc(100%+8px)]"
              : "top-[calc(100%+8px)]"
          )}
        >
          {valueLabel}
        </span>
      ) : null;

    const handle =
      labelVariant === "tooltip" ? (
        <Tooltip
          content={valueLabel}
          variant="light"
          side={tooltipSide}
          sideOffset={8}
          open
          showArrow={false}
        >
          {circle}
        </Tooltip>
      ) : (
        circle
      );

    return (
      <div className="relative inline-flex flex-col items-center">
        {label}
        {handle}
      </div>
    );
  }
);

SliderHandle.displayName = "SliderHandle";

export { SliderHandle, sliderHandleCircleVariants };
