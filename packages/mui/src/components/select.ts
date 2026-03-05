import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiSelect: Components<Theme>["MuiSelect"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    icon: {
      color: resolve("{alias.icon-secondary}"),
    },
  },
};

export const MuiMenu: Components<Theme>["MuiMenu"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    paper: {
      borderRadius: tokens.radius.sm,
      backgroundColor: resolve("{alias.bg-primary}"),
      border: `1px solid ${resolve("{alias.border-default}")}`,
      boxShadow: tokens.shadow.lg,
      padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
      marginTop: 4,
    },
    list: {
      padding: 0,
    },
  },
};

export const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      gap: tokens.spacing.md,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "20px",
      color: resolve("{alias.text-primary}"),
      transition: "background-color 150ms",
      "&:hover": {
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      "&.Mui-selected": {
        backgroundColor: resolve("{alias.bg-brand-tertiary}"),
        color: resolve("{alias.text-brand}"),
        fontWeight: 500,
        "&:hover": {
          backgroundColor: resolve("{alias.bg-brand-tertiary}"),
        },
      },
      "&.Mui-disabled": {
        opacity: 0.5,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${resolve("{alias.border-brand}")}`,
        backgroundColor: "transparent",
      },
    },
  },
};
