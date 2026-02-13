import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const dividerVariants = cva("border-default", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    { className, orientation = "horizontal", variant = "solid", ...props },
    ref
  ) => {
    const Component = orientation === "vertical" ? "div" : "hr";
    
    return (
      <Component
        ref={ref as any}
        className={cn(dividerVariants({ orientation, variant }), className)}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider, dividerVariants };
