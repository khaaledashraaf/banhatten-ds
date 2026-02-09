import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const iconVariants = cva("shrink-0 select-none", {
  variants: {
    variant: {
      outlined: "material-symbols-outlined",
      rounded: "material-symbols-rounded",
      sharp: "material-symbols-sharp",
    },
  },
  defaultVariants: {
    variant: "outlined",
  },
});

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export type IconSize = keyof typeof sizeMap;

export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof iconVariants> {
  /** Material Symbol name in snake_case (e.g. "home", "arrow_forward", "settings") */
  name: string;
  /** Size preset: xs (12px), sm (16px), md (20px), lg (24px), xl (32px). Default: md */
  size?: IconSize;
  /** Render the filled variant of the icon */
  filled?: boolean;
  /** Font weight: 100-700. Default: 400 */
  weight?: number;
  /** Grade: -25 to 200. Default: 0 */
  grade?: number;
  /** Accessible label. If omitted, the icon is treated as decorative (aria-hidden). */
  label?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      variant,
      size = "md",
      filled = false,
      weight = 400,
      grade = 0,
      label,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const fontSize = sizeMap[size];

    return (
      <span
        ref={ref}
        className={cn(iconVariants({ variant }), className)}
        style={{
          fontSize,
          fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}`,
          ...style,
        }}
        aria-hidden={!label}
        aria-label={label}
        role={label ? "img" : undefined}
        {...props}
      >
        {name}
      </span>
    );
  }
);

Icon.displayName = "Icon";

export { Icon, iconVariants };
