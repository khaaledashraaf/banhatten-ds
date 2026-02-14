import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconSize } from "./icon";

const featuredIconVariants = cva(
  "inline-flex shrink-0 items-center justify-center",
  {
    variants: {
      variant: {
        "circle-light": "rounded-full",
        "square-light": "rounded-lg",
        "circle-pulse": "rounded-full",
        "solid-circle": "rounded-full",
        "solid-square": "rounded-lg",
      },
      type: {
        brand: "",
        success: "",
        danger: "",
        warning: "",
        neutral: "",
      },
      size: {
        sm: "p-sm",
        md: "p-md",
        lg: "p-lg",
      },
    },
    compoundVariants: [
      // Circle light + type (light bg, colored icon)
      { variant: "circle-light", type: "brand", className: "bg-brand-tertiary text-brand" },
      { variant: "circle-light", type: "success", className: "bg-success-tertiary text-success" },
      { variant: "circle-light", type: "danger", className: "bg-danger-tertiary text-danger" },
      { variant: "circle-light", type: "warning", className: "bg-warning-tertiary text-warning" },
      { variant: "circle-light", type: "neutral", className: "bg-tertiary text-secondary" },
      // Square light + type
      { variant: "square-light", type: "brand", className: "bg-brand-tertiary text-brand" },
      { variant: "square-light", type: "success", className: "bg-success-tertiary text-success" },
      { variant: "square-light", type: "danger", className: "bg-danger-tertiary text-danger" },
      { variant: "square-light", type: "warning", className: "bg-warning-tertiary text-warning" },
      { variant: "square-light", type: "neutral", className: "bg-tertiary text-secondary" },
      // Circle pulse + type (solid bg, on-color icon, glow, 8px border)
      { variant: "circle-pulse", type: "brand", className: "border-8 border-brand-tertiary bg-brand-secondary text-brand" },
      { variant: "circle-pulse", type: "success", className: "border-8 border-success-tertiary bg-success-secondary text-success" },
      { variant: "circle-pulse", type: "danger", className: "border-8 border-danger-tertiary bg-danger-secondary text-danger" },
      { variant: "circle-pulse", type: "warning", className: "border-8 border-warning-tertiary bg-warning-secondary text-warning" },
      { variant: "circle-pulse", type: "neutral", className: "border-8 border-secondary bg-quarterary text-secondary" },
      // Solid circle + type
      { variant: "solid-circle", type: "brand", className: "bg-brand text-on-color" },
      { variant: "solid-circle", type: "success", className: "bg-success text-on-color" },
      { variant: "solid-circle", type: "danger", className: "bg-danger text-on-color" },
      { variant: "solid-circle", type: "warning", className: "bg-warning text-on-color" },
      { variant: "solid-circle", type: "neutral", className: "bg-primary-inverse text-on-color" },
      // Solid square + type
      { variant: "solid-square", type: "brand", className: "bg-brand text-on-color" },
      { variant: "solid-square", type: "success", className: "bg-success text-on-color" },
      { variant: "solid-square", type: "danger", className: "bg-danger text-on-color" },
      { variant: "solid-square", type: "warning", className: "bg-warning text-on-color" },
      { variant: "solid-square", type: "neutral", className: "bg-primary-inverse text-on-color" },
    ],
    defaultVariants: {
      variant: "solid-circle",
      type: "brand",
      size: "md",
    },
  }
);

/** Featured icon size → icon size: sm→md, md→lg, lg→xl */
const featuredSizeToIconSize: Record<"sm" | "md" | "lg", IconSize> = {
  sm: "md",
  md: "lg",
  lg: "xl",
};

export interface FeaturedIconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof featuredIconVariants> {
  /** Material Symbol name in snake_case (e.g. "info", "check_circle", "warning") */
  name: string;
  /** Accessible label when the icon conveys meaning. If omitted, treated as decorative (aria-hidden). */
  label?: string;
}

const FeaturedIcon = React.forwardRef<HTMLSpanElement, FeaturedIconProps>(
  (
    {
      className,
      variant,
      type,
      size = "md",
      name,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          featuredIconVariants({ variant, type, size }),
          className
        )}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={!label}
        {...props}
      >
        <Icon name={name} size={featuredSizeToIconSize[size ?? "md"]} filled />
      </span>
    );
  }
);

FeaturedIcon.displayName = "FeaturedIcon";

export { FeaturedIcon, featuredIconVariants };
