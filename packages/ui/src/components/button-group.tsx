import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonGroupVariants = cva(
  "inline-flex flex-row items-stretch rounded-sm border border-strong bg-primary overflow-hidden"
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /** ButtonGroupItem components. */
  children: React.ReactNode;
}

function getPosition(index: number, total: number): "first" | "middle" | "last" | "only" {
  if (total <= 1) return "only";
  if (index === 0) return "first";
  if (index === total - 1) return "last";
  return "middle";
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, ...props }, ref) => {
    const items = React.Children.toArray(children).filter(Boolean);
    const total = items.length;

    return (
      <div
        ref={ref}
        role="group"
        className={cn(buttonGroupVariants(), className)}
        {...props}
      >
        {items.map((child, index) => {
          const position = getPosition(index, total);
          return React.isValidElement(child) && typeof child.type !== "string"
            ? React.cloneElement(
                child as React.ReactElement<{ position?: "first" | "middle" | "last" | "only" }>,
                { position }
              )
            : child;
        })}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup, buttonGroupVariants };
