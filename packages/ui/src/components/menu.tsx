import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Divider } from "./divider";

/* ── CVA ──
 * Token-only: padding (py-md px-sm), radius (rounded-sm), bg (bg-primary), shadow (shadow-sm).
 * Container for one or more MenuGroup; inserts Divider + spacing (my-sm) between groups.
 */

const menuVariants = cva(
  "flex flex-col rounded-sm bg-primary py-md px-sm shadow-sm"
);

export interface MenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuVariants> {
  /** One or more MenuGroup components. Dividers are inserted between each child. */
  children: React.ReactNode;
}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ className, children, ...props }, ref) => {
    const items = React.Children.toArray(children);

    return (
      <div
        ref={ref}
        className={cn(menuVariants(), className)}
        {...props}
      >
        {items.flatMap((child, index) =>
          index === 0
            ? [child]
            : [
                <Divider key={`menu-divider-${index}`} className="my-sm" />,
                child,
              ]
        )}
      </div>
    );
  }
);

Menu.displayName = "Menu";

export { Menu, menuVariants };
