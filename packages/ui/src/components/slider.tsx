import * as React from "react";
import { cn } from "../lib/utils";
import {
  progressBarTrackVariants,
  progressBarFillVariants,
} from "./progress-bar";
import { SliderHandle } from "./slider-handle";
import { Icon } from "./icon";

/**
 * Slider — Figma node 4306:225189
 * Single-node: one handle, fill from 0 to value.
 * Double-node: two handles, fill between start and end.
 * Progress bar (large size) as track. Tokens only.
 */

/* ── Types ── */

export type SliderVariant = "single" | "double";

export interface SliderPropsBase
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "children" | "onChange" | "defaultValue" | "value"
  > {
  variant?: SliderVariant;
  label?: React.ReactNode;
  showLabelInfoIcon?: boolean;
  helperText?: React.ReactNode;
  valueLabelVariant?: "tooltip" | "label";
  valueLabelPosition?: "above" | "below";
  formatValue?: (value: number) => string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  "aria-label"?: string;
}

export interface SliderSingleProps extends SliderPropsBase {
  variant?: "single";
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export interface SliderDoubleProps extends SliderPropsBase {
  variant: "double";
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
}

export type SliderProps = SliderSingleProps | SliderDoubleProps;

/* ── Helpers ── */

function clamp(v: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, v));
}

function snap(raw: number, min: number, max: number, step: number) {
  if (step <= 0) return raw;
  return clamp(Math.round((raw - min) / step) * step + min, min, max);
}

function toPct(v: number, min: number, max: number) {
  return max > min ? ((v - min) / (max - min)) * 100 : 0;
}

/* ── Component ── */

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      variant = "single",
      value: valueProp,
      defaultValue,
      onChange,
      label,
      showLabelInfoIcon = false,
      helperText,
      valueLabelVariant,
      valueLabelPosition = "below",
      formatValue,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const isSingle = variant === "single";
    const isControlled = valueProp !== undefined;
    const trackRef = React.useRef<HTMLDivElement>(null);

    /* ── State ── */

    const [internalSingle, setInternalSingle] = React.useState(
      () => (isSingle ? ((defaultValue as number | undefined) ?? 0) : 0)
    );
    const [internalRange, setInternalRange] = React.useState<[number, number]>(
      () => {
        if (isSingle) return [min, max];
        const [s, e] = (defaultValue as [number, number] | undefined) ?? [min, max];
        return [clamp(Math.min(s, e), min, max), clamp(Math.max(s, e), min, max)];
      }
    );

    /* ── Derived values ── */

    const singleVal = isSingle
      ? clamp(isControlled ? (valueProp as number) : internalSingle, min, max)
      : 0;
    const singlePct = toPct(singleVal, min, max);

    const rawRange = !isSingle
      ? (isControlled ? (valueProp as [number, number]) : internalRange)
      : ([min, max] as [number, number]);
    const rangeStart = clamp(Math.min(rawRange[0], rawRange[1]), min, max);
    const rangeEnd = clamp(Math.max(rawRange[0], rawRange[1]), min, max);
    const startPct = toPct(rangeStart, min, max);
    const endPct = toPct(rangeEnd, min, max);

    const format = formatValue ?? ((v: number) => `${Math.round(v)}%`);

    /* ── Refs for latest values (avoids stale closures during drag) ── */

    const latestRef = React.useRef({ rangeStart, rangeEnd });
    latestRef.current = { rangeStart, rangeEnd };

    /* ── Commit helpers ── */

    const commitSingle = React.useCallback(
      (next: number) => {
        const v = clamp(next, min, max);
        if (!isControlled) setInternalSingle(v);
        (onChange as ((v: number) => void) | undefined)?.(v);
      },
      [isControlled, min, max, onChange]
    );

    const commitRange = React.useCallback(
      (next: [number, number]) => {
        const ordered: [number, number] = [
          clamp(Math.min(next[0], next[1]), min, max),
          clamp(Math.max(next[0], next[1]), min, max),
        ];
        if (!isControlled) setInternalRange(ordered);
        (onChange as ((v: [number, number]) => void) | undefined)?.(ordered);
      },
      [isControlled, min, max, onChange]
    );

    /* ── ClientX → snapped value ── */

    const valueFromClientX = React.useCallback(
      (clientX: number): number => {
        const track = trackRef.current;
        if (!track) return min;
        const { left, width } = track.getBoundingClientRect();
        if (width <= 0) return min;
        return snap(min + clamp((clientX - left) / width, 0, 1) * (max - min), min, max, step);
      },
      [min, max, step]
    );

    /* ── Update refs (read latest range inside drag via ref) ── */

    const updateSingleRef = React.useRef((clientX: number) => {});
    updateSingleRef.current = (clientX: number) => {
      commitSingle(valueFromClientX(clientX));
    };

    const updateStartRef = React.useRef((clientX: number) => {});
    updateStartRef.current = (clientX: number) => {
      const v = valueFromClientX(clientX);
      const { rangeEnd: end } = latestRef.current;
      commitRange([Math.min(v, end), end]);
    };

    const updateEndRef = React.useRef((clientX: number) => {});
    updateEndRef.current = (clientX: number) => {
      const v = valueFromClientX(clientX);
      const { rangeStart: start } = latestRef.current;
      commitRange([start, Math.max(v, start)]);
    };

    /* ── Drag factory (single pattern for all three handlers) ── */

    const makeDrag = React.useCallback(
      (fnRef: React.MutableRefObject<(clientX: number) => void>) =>
        (e: React.PointerEvent) => {
          if (disabled) return;
          e.preventDefault();
          fnRef.current(e.clientX);
          const onMove = (ev: PointerEvent) => fnRef.current(ev.clientX);
          const onUp = () => {
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
          };
          document.addEventListener("pointermove", onMove);
          document.addEventListener("pointerup", onUp);
        },
      [disabled]
    );

    const onSingleDrag = makeDrag(updateSingleRef);
    const onStartDrag = makeDrag(updateStartRef);
    const onEndDrag = makeDrag(updateEndRef);

    /* ── Track click (double: move whichever handle is closer) ── */

    const onTrackClick = React.useCallback(
      (e: React.PointerEvent) => {
        if (disabled) return;
        e.preventDefault();
        const v = valueFromClientX(e.clientX);
        const { rangeStart: s, rangeEnd: en } = latestRef.current;
        const mid = (s + en) / 2;
        commitRange(v < mid ? [Math.min(v, en), en] : [s, Math.max(v, s)]);
      },
      [disabled, valueFromClientX, commitRange]
    );

    /* ── IDs ── */

    const barId = React.useId();
    const labelId = `${barId}-label`;
    const helperId = `${barId}-helper`;

    /* ── Handle renderer (DRY for single + double) ── */

    const renderHandle = (
      pct: number,
      text: string,
      onPointerDown: (e: React.PointerEvent) => void
    ) => (
      <div
        className="absolute top-1/2 z-20 overflow-visible"
        style={{ left: `${pct}%`, transform: "translate(-50%, -50%)" }}
        onPointerDown={disabled ? undefined : onPointerDown}
      >
        <SliderHandle
          valueLabel={valueLabelVariant ? text : undefined}
          labelVariant={valueLabelVariant}
          labelPosition={valueLabelPosition}
          aria-hidden
        />
      </div>
    );

    /* ── Render ── */

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

        <div id={barId} className="relative flex min-w-0 items-center overflow-visible">
          <div
            ref={trackRef}
            className={cn(
              "relative min-w-0 flex-1",
              progressBarTrackVariants({ size: "lg" }),
              "overflow-visible"
            )}
          >
            {/* Fill */}
            <div
              className={cn(
                progressBarFillVariants({ color: "brand" }),
                !isSingle && "absolute inset-y-0"
              )}
              style={
                isSingle
                  ? { width: `${singlePct}%` }
                  : { left: `${startPct}%`, width: `${endPct - startPct}%` }
              }
            />

            {isSingle ? (
              <>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={singleVal}
                  onChange={(e) => commitSingle(parseFloat(e.target.value))}
                  disabled={disabled}
                  aria-valuenow={singleVal}
                  aria-valuemin={min}
                  aria-valuemax={max}
                  aria-valuetext={format(singleVal)}
                  aria-label={ariaLabel}
                  className="absolute inset-0 w-full opacity-0 cursor-grab disabled:cursor-default z-10 disabled:pointer-events-none"
                />
                {renderHandle(singlePct, format(singleVal), onSingleDrag)}
              </>
            ) : (
              <>
                {/* Hidden inputs for keyboard a11y — pointer interaction via handles and track overlay */}
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={rangeStart}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    commitRange([Math.min(v, rangeEnd), rangeEnd]);
                  }}
                  disabled={disabled}
                  aria-valuenow={rangeStart}
                  aria-valuemin={min}
                  aria-valuemax={max}
                  aria-valuetext={format(rangeStart)}
                  aria-label={ariaLabel ? `${ariaLabel} (start)` : "Range start"}
                  className="sr-only"
                />
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={rangeEnd}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    commitRange([rangeStart, Math.max(v, rangeStart)]);
                  }}
                  disabled={disabled}
                  aria-valuenow={rangeEnd}
                  aria-valuemin={min}
                  aria-valuemax={max}
                  aria-valuetext={format(rangeEnd)}
                  aria-label={ariaLabel ? `${ariaLabel} (end)` : "Range end"}
                  className="sr-only"
                />
                {/* Track click overlay */}
                <div
                  role="presentation"
                  className="absolute inset-0 z-10"
                  style={{
                    cursor: disabled ? "default" : "grab",
                    pointerEvents: disabled ? "none" : undefined,
                  }}
                  onPointerDown={onTrackClick}
                />
                {renderHandle(startPct, format(rangeStart), onStartDrag)}
                {renderHandle(endPct, format(rangeEnd), onEndDrag)}
              </>
            )}
          </div>
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

Slider.displayName = "Slider";

export { Slider };
