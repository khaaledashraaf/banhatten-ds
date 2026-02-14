import * as React from "react";
import { cn } from "../lib/utils";
import type { AvatarProps } from "./avatar";
import { AvatarProfile } from "./avatar-profile";
import { Icon, type IconSize } from "./icon";

/** Group size options: pixel values matching Figma. */
type AvatarGroupSize = "24" | "32" | "40";

/** Group size maps to AvatarProfile size (24→xs, 32→md, 40→xl). */
const groupSizeToProfileSize: Record<
  AvatarGroupSize,
  NonNullable<AvatarProps["size"]>
> = {
  "24": "xs",
  "32": "md",
  "40": "xl",
};

/** Badge/Add icon size per group size. */
const groupSizeToIconSize: Record<AvatarGroupSize, IconSize> = {
  "24": "xs",
  "32": "sm",
  "40": "md",
};

/** Overlap offset: negative margin between avatars (token spacing). */
const overlapClass = "-ml-sm";

/** Badge and Add button: same height/width as avatar, circular, token styles (Figma: bg/tertiary, border/subtract). */
const badgeSizeClasses: Record<AvatarGroupSize, string> = {
  "24": "h-6 w-6 min-w-6 min-h-6 text-xs",
  "32": "h-8 w-8 min-w-8 min-h-8 text-sm",
  "40": "h-10 w-10 min-w-10 min-h-10 text-base",
};

export type AvatarGroupItem = {
  /** Initials for the avatar (e.g. "AG"). */
  initials?: string;
  /** Accessible name for the avatar. */
  "aria-label"?: string;
};

export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Group avatar size: 24, 32, or 40 px. Default 32. */
  size?: AvatarGroupSize;
  /** When true, the first (leftmost) avatar is drawn on top. Default true. */
  lastOnTop?: boolean;
  /** When true, show a "+N" overflow indicator after visible avatars. Default false. */
  moreAvatars?: boolean;
  /** When true, show an Add More button after avatars (and overflow). Default false. */
  addMore?: boolean;
  /** List of avatars to show (initials and optional aria-label). No image support. */
  avatars: AvatarGroupItem[];
  /** Max number of avatars to show before "+N". Used when moreAvatars is true. Default 4. */
  maxVisible?: number;
  /** Called when the Add More button is clicked. Only relevant when addMore is true. */
  onAddMore?: () => void;
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      lastOnTop = true,
      size = "32",
      moreAvatars = false,
      addMore = false,
      avatars,
      maxVisible = 4,
      onAddMore,
      ...props
    },
    ref
  ) => {
    const profileSize = groupSizeToProfileSize[size];
    const iconSize = groupSizeToIconSize[size];
    const badgeSize = badgeSizeClasses[size];
    const visible = avatars.slice(0, maxVisible);
    const overflowCount = avatars.length - visible.length;
    const showOverflow = moreAvatars && overflowCount > 0;

    return (
      <div
        ref={ref}
        role="group"
        aria-label={
          avatars.length > 0
            ? `${avatars.length} ${avatars.length === 1 ? "member" : "members"}`
            : undefined
        }
        className={cn("inline-flex items-center", className)}
        {...props}
      >
        {visible.map((item, index) => (
          <span
            key={index}
            className={cn("relative shrink-0", index === 0 ? "" : overlapClass)}
            style={{
              zIndex: lastOnTop ? visible.length - index : index + 1,
            }}
          >
            <AvatarProfile
              size={profileSize}
              shape="circle"
              initials={item.initials}
              aria-label={item["aria-label"]}
            />
          </span>
        ))}
        {showOverflow && (
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-full border-2 border-subtract bg-tertiary text-secondary font-medium shrink-0",
              overlapClass,
              badgeSize
            )}
            style={{ zIndex: 0 }}
            aria-hidden
          >
            +{overflowCount}
          </span>
        )}
        {addMore && (
          <button
            type="button"
            onClick={onAddMore}
            className={cn(
              "inline-flex items-center justify-center rounded-full border-2 border-dashed border-strong bg-transparent text-icon-tertiary shrink-0 transition-colors hover:bg-tertiary hover:border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
              overlapClass,
              badgeSize
            )}
            aria-label="Add member"
          >
            <Icon name="add" size={iconSize} filled aria-hidden />
          </button>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup, type AvatarGroupSize };
