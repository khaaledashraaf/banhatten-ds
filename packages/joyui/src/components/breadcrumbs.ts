import { tokens, resolve } from "../tokens";

export const JoyBreadcrumbs = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
    },
    separator: {
      color: resolve("{alias.text-inactive}"),
      marginInline: tokens.spacing.xs,
    },
    li: {
      "& a": {
        color: resolve("{alias.text-secondary}"),
        textDecoration: "none",
        borderRadius: tokens.radius.sm,
        transition: "color 150ms",
        "&:hover": {
          color: resolve("{alias.text-tertiary-hover}"),
        },
        "&:focus-visible": {
          outlineOffset: 2,
          outline: `2px solid ${resolve("{alias.border-brand}")}`,
        },
      },
      "&:last-child": {
        "& a, & p, & span": {
          color: resolve("{alias.text-primary}"),
          fontWeight: 500,
        },
      },
    },
  },
};
