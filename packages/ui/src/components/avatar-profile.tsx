import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Avatar, type AvatarProps } from "./avatar";
import { Icon, type IconProps } from "./icon";

/** Ensures badge slot icons render filled (Material Symbols). */
function withFilledIcon(node: React.ReactNode): React.ReactNode {
  if (React.isValidElement(node) && node.type === Icon) {
    return React.cloneElement(node as React.ReactElement<IconProps>, {
      filled: true,
    });
  }
  return node;
}

const avatarProfileVariants = cva(
  "relative inline-flex shrink-0 border-2 border-subtract shadow-sm",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      shape: "circle",
    },
  }
);

/** Badge slot: Figma 4207-3135 — colored circle (bg-brand) + thin light ring (border-subtract) + white icon (text-on-color). */
const badgeSlotClasses =
  "absolute flex items-center justify-center rounded-full shrink-0 overflow-hidden z-10 box-border " +
  "border-2 border-subtract bg-brand text-on-color w-xl h-xl min-w-xl min-h-xl";

export type AvatarProfileProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarProfileVariants> & {
    /** Avatar size. Passed through to the inner Avatar. */
    size?: AvatarProps["size"];
    /** Initials to display in the inner Avatar. */
    initials?: AvatarProps["initials"];
    /** Optional content for the top-right badge (e.g. edit icon). Use Icon from @banhatten/ui (Material Symbols); icons are forced to filled. */
    topRight?: React.ReactNode;
    /** Optional content for the bottom-right badge (e.g. status or verified icon). Use Icon from @banhatten/ui (Material Symbols); icons are forced to filled. */
    bottomRight?: React.ReactNode;
  };

const AvatarProfile = React.forwardRef<HTMLDivElement, AvatarProfileProps>(
  (
    {
      className,
      shape,
      size = "md",
      initials,
      "aria-label": ariaLabel,
      topRight,
      bottomRight,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(avatarProfileVariants({ shape }), className)}
        {...props}
      >
        <Avatar
          shape={shape ?? "circle"}
          size={size}
          initials={initials}
          aria-label={ariaLabel}
          className="shrink-0"
        />
        {topRight != null && (
          <div
            className={cn(
              badgeSlotClasses,
              "top-0 right-0 translate-x-1/2 -translate-y-1/2"
            )}
            aria-hidden
          >
            {withFilledIcon(topRight)}
          </div>
        )}
        {bottomRight != null && (
          <div
            className={cn(
              badgeSlotClasses,
              "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
            )}
            aria-hidden
          >
            {withFilledIcon(bottomRight)}
          </div>
        )}
      </div>
    );
  }
);

AvatarProfile.displayName = "AvatarProfile";

export { AvatarProfile, avatarProfileVariants };
