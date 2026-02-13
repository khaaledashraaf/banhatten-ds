import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/**
 * Visual specifications (tokens from packages/tokens/src/tokens.json)
 *
 * ── Shared (all variants) ──
 * Rounding:  rounded-sm  → radius.sm  → 8px
 * Typography: text-xs, leading-5 (body copy)
 *
 * ── Variant: dark ──
 * Background:  bg-always-dark
 * Text:        text-on-color
 * Subtitle:    text-on-color        → alias → brand.neutral-25   → #ffffff
 * Arrow fill:  fill-primary-inverse
 *
 * ── Variant: light ──
 * Background:  bg-primary   → alias → brand.neutral-25  → #ffffff
 * Text:        text-primary → alias → brand.neutral-800 → #1f242e
 * Subtitle:    text-on-color-inverse → alias → brand.neutral-700 → #3a424d
 * Shadow:      shadow-sm    → shadow.sm
 * Arrow fill:  fill-white   → #ffffff
 *
 * ── Size: small ──
 * Padding: px-md py-sm  → spacing.md (0.75rem / 12px) horizontal, spacing.sm (0.5rem / 8px) vertical
 *
 * ── Size: large ──
 * Padding: px-md py-md  → spacing.md (0.75rem / 12px) horizontal, spacing.md (0.75rem / 12px) vertical
 * Gap (title ↔ subtitle): gap-xs → spacing.xs → 0.25rem / 4px
 */

/* ── CVA ── */

const tooltipContentVariants = cva(
  "rounded-sm text-xs leading-5 max-w-[var(--radix-tooltip-content-available-width)] z-50",
  {
    variants: {
      size: {
        small: "px-md py-sm",
        large: "px-md py-md flex flex-col gap-xs",
      },
      variant: {
        dark: "bg-always-dark text-on-color",
        light: "bg-primary text-primary shadow-sm",
      },
    },
    defaultVariants: {
      size: "small",
      variant: "dark",
    },
  }
);

/* ── Variant-keyed style maps ── */

const arrowClassMap = {
  dark: "fill-primary-inverse",
  light: "fill-white",
} as const;

const subtitleClassMap = {
  dark: "text-on-color",
  light: "text-on-color-inverse",
} as const;

/* ── TooltipContent ── */

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {
  /** Single-line content (size="small") */
  children?: React.ReactNode;
  /** Title text (size="large") */
  title?: string;
  /** Subtitle text (size="large") */
  subtitle?: string;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    {
      className,
      size: sizeProp,
      variant = "dark",
      title,
      subtitle,
      children,
      side = "bottom",
      sideOffset = 8,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = variant ?? "dark";
    const isLarge = sizeProp === "large" || (!sizeProp && (title != null || subtitle != null));
    const size = isLarge ? "large" : (sizeProp ?? "small");

    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          side={side}
          sideOffset={sideOffset}
          className={cn(tooltipContentVariants({ size, variant: resolvedVariant }), className)}
          {...props}
        >
          {isLarge ? (
            <>
              {title != null && (
                <span className="font-medium">{title}</span>
              )}
              {subtitle != null && (
                <span className={cn("font-regular", subtitleClassMap[resolvedVariant])}>
                  {subtitle}
                </span>
              )}
            </>
          ) : (
            children
          )}
          <TooltipPrimitive.Arrow
            className={arrowClassMap[resolvedVariant]}
            width={12}
            height={6}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    );
  }
);

TooltipContent.displayName = "TooltipContent";

/* ── Primitive re-exports ── */

const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipProvider = TooltipPrimitive.Provider;

/* ── Tooltip (convenience wrapper) ── */

export interface TooltipProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
    "content"
  > {
  /** Trigger element (must accept a ref) */
  children: React.ReactNode;
  /** Single-line content (size="small") */
  content?: React.ReactNode;
  /** Title text (size="large") */
  title?: string;
  /** Subtitle text (size="large") */
  subtitle?: string;
  /** Small: single text line. Large: title + subtitle. Auto-inferred from title/subtitle when omitted. */
  size?: "small" | "large";
  /** Dark: inverse bg/text. Light: primary bg/text + shadow. */
  variant?: "dark" | "light";
  /** Which side of the trigger the tooltip appears on. Arrow adjusts automatically. Default: "bottom". */
  side?: "top" | "bottom" | "left" | "right";
  /** Distance in px between the tooltip and the trigger. Default: 8. */
  sideOffset?: number;
  /** Delay in ms before showing. Default from provider. */
  delayDuration?: number;
}

function Tooltip({
  children,
  content,
  title,
  subtitle,
  size,
  variant = "dark",
  side = "bottom",
  sideOffset = 8,
  delayDuration,
  ...rootProps
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration} {...rootProps}>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipContent
        size={size}
        variant={variant}
        side={side}
        sideOffset={sideOffset}
        title={title}
        subtitle={subtitle}
      >
        {content}
      </TooltipContent>
    </TooltipPrimitive.Root>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  tooltipContentVariants,
};
