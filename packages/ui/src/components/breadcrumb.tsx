import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Icon } from "./icon";

const breadcrumbListVariants = cva("flex flex-wrap items-center gap-xs", {
  variants: {
    containerStyle: {
      default: "",
      withBackground:
        "rounded-sm border border-default bg-primary p-md",
    },
  },
  defaultVariants: {
    containerStyle: "default",
  },
});

const breadcrumbSeparatorVariants = cva(
  "flex items-center shrink-0 text-inactive",
  {
    variants: {
      separator: {
        slash: "px-xs text-sm font-normal",
        chevron: "[&_.breadcrumb-sep-icon]:text-icon-inactive",
      },
    },
    defaultVariants: {
      separator: "chevron",
    },
  }
);

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement> {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
);
Breadcrumb.displayName = "Breadcrumb";

export interface BreadcrumbListProps
  extends React.OlHTMLAttributes<HTMLOListElement>,
    VariantProps<typeof breadcrumbListVariants> {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, containerStyle, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(breadcrumbListVariants({ containerStyle }), className)}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

export interface BreadcrumbListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {}

const BreadcrumbListItem = React.forwardRef<
  HTMLLIElement,
  BreadcrumbListItemProps
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-xs", className)}
    {...props}
  />
));
BreadcrumbListItem.displayName = "BreadcrumbListItem";

export interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof breadcrumbSeparatorVariants> {}

const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(({ className, separator = "chevron", ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden
    className={cn(breadcrumbSeparatorVariants({ separator }), className)}
    {...props}
  >
    {separator === "slash" ? (
      "/"
    ) : (
      <Icon
        name="chevron_right"
        size="sm"
        aria-hidden
        className="breadcrumb-sep-icon"
      />
    )}
  </span>
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbListItem,
  BreadcrumbSeparator,
  breadcrumbListVariants,
  breadcrumbSeparatorVariants,
};
