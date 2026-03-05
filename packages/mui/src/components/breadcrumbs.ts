import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiBreadcrumbs: Components<Theme>["MuiBreadcrumbs"] = {
  styleOverrides: {
    root: {
      fontSize: 14,
    },
    separator: {
      color: resolve("{alias.text-inactive}"),
      marginLeft: tokens.spacing.xs,
      marginRight: tokens.spacing.xs,
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
          outline: "none",
          boxShadow: `0 0 0 2px ${resolve("{alias.border-brand}")}`,
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
