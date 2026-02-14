import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── CVA ──
 * Token-only: spacing between heading and items (mb-sm = spacing.sm).
 * Groups one optional MenuHeading and one or more MenuItem children.
 */

const menuGroupVariants = cva("flex flex-col");

export interface MenuGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuGroupVariants> {
  /** Optional section label (e.g. <MenuHeading>Section header</MenuHeading>). At most one. */
  heading?: React.ReactNode;
  /** One or more menu items (e.g. MenuItem). */
  children: React.ReactNode;
  /** When provided with heading, set on the heading wrapper for role="group" aria-labelledby. */
  headingId?: string;
}

const MenuGroup = React.forwardRef<HTMLDivElement, MenuGroupProps>(
  ({ className, heading, children, headingId, ...props }, ref) => {
    const hasHeading = heading != null;

    return (
      <div
        ref={ref}
        role="group"
        className={cn(menuGroupVariants(), className)}
        aria-labelledby={hasHeading && headingId ? headingId : undefined}
        {...props}
      >
        {hasHeading && (
          <div
            className="mb-sm shrink-0"
            id={headingId}
          >
            {heading}
          </div>
        )}
        {children}
      </div>
    );
  }
);

MenuGroup.displayName = "MenuGroup";

export { MenuGroup, menuGroupVariants };
