import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── CVA ──
 * Token-only: spacing (px-md, py-xs), text (text-tertiary), typography (text-sm font-medium).
 * Non-interactive section label for menu groups.
 */

const menuHeadingVariants = cva(
  "px-md py-xs text-sm font-medium text-tertiary"
);

export interface MenuHeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuHeadingVariants> {
  /** Heading content (e.g. "Section header"). */
  children?: React.ReactNode;
}

const MenuHeading = React.forwardRef<HTMLDivElement, MenuHeadingProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(menuHeadingVariants(), className)}
      {...props}
    >
      {children}
    </div>
  )
);

MenuHeading.displayName = "MenuHeading";

export { MenuHeading, menuHeadingVariants };
