import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon, type IconSize } from "./icon";

const avatarVariants = cva(
  "inline-flex items-center justify-center font-medium shrink-0 bg-quarterary text-secondary select-none overflow-hidden",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        rounded: "rounded-md",
      },
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-7 w-7 text-xs",
        md: "h-8 w-8 text-sm",
        lg: "h-9 w-9 text-sm",
        xl: "h-10 w-10 text-base",
        "2xl": "h-12 w-12 text-lg",
        "3xl": "h-14 w-14 text-xl",
        "4xl": "h-16 w-16 text-xl",
      },
    },
    defaultVariants: {
      shape: "circle",
      size: "md",
    },
  }
);

/** Maps avatar size to icon size for the fallback person icon */
const avatarSizeToIconSize: Record<
  NonNullable<VariantProps<typeof avatarVariants>["size"]>,
  IconSize
> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "sm",
  xl: "md",
  "2xl": "md",
  "3xl": "lg",
  "4xl": "lg",
};

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarVariants> & {
    /** Initials to show (e.g. "AG", "A"). When provided, renders initials instead of the fallback icon. */
    initials?: string;
    /** Accessible name for the avatar (e.g. user name). Used for role="img" and aria-label. Required when the avatar conveys meaning. */
    "aria-label"?: string;
    /** Optional username shown beside the avatar (e.g. "Ahmed Galal"). Renders as primary text when provided. */
    username?: string;
    /** Optional supporting line below username (e.g. "View profile"). Renders as secondary text. */
    supportingText?: string;
  };

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      shape,
      size = "md",
      initials,
      "aria-label": ariaLabel,
      username,
      supportingText,
      ...props
    },
    ref
  ) => {
    const iconSize = avatarSizeToIconSize[size ?? "md"];
    const trimmedInitials = initials?.trim() ?? "";
    const trimmedUsername = username?.trim() ?? "";
    const trimmedSupporting = supportingText?.trim() ?? "";
    const hasInitials = trimmedInitials !== "";
    const isDecorative = ariaLabel == null || ariaLabel.trim() === "";
    const hasText = trimmedUsername !== "" || trimmedSupporting !== "";

    const circle = (
      <div
        role={isDecorative ? undefined : "img"}
        aria-label={isDecorative ? undefined : ariaLabel}
        className={cn(avatarVariants({ shape, size }), !hasText && className)}
      >
        {hasInitials ? (
          <span className="shrink-0 leading-none">
            {trimmedInitials.slice(0, 2).toUpperCase()}
          </span>
        ) : (
          <Icon
            name="person"
            size={iconSize}
            className="text-icon-secondary"
            aria-hidden
          />
        )}
      </div>
    );

    if (hasText) {
      return (
        <div
          ref={ref}
          className={cn("inline-flex items-center gap-md min-w-0", className)}
          {...props}
        >
          {circle}
          <div className="flex min-w-0 flex-col justify-center">
            {trimmedUsername !== "" && (
              <span className="truncate text-sm font-medium text-primary">
                {trimmedUsername}
              </span>
            )}
            {trimmedSupporting !== "" && (
              <span className="truncate text-xs text-secondary">
                {trimmedSupporting}
              </span>
            )}
          </div>
        </div>
      );
    }

    return React.cloneElement(circle, {
      ref,
      className: cn(avatarVariants({ shape, size }), className),
      ...props,
    });
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
