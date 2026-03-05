import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiChip: Components<Theme>["MuiChip"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      fontWeight: 400,
      fontSize: 12,
      height: 24,
      transition: "background-color 150ms, border-color 150ms, color 150ms",
      borderColor: resolve("{alias.border-strong}"),
      color: resolve("{alias.text-primary}"),
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
    sizeMedium: {
      height: 28,
      fontSize: 14,
    },
    filled: {
      "&.MuiChip-colorPrimary": {
        backgroundColor: resolve("{alias.bg-brand}"),
        color: resolve("{alias.text-on-color}"),
      },
      "&.MuiChip-colorSuccess": {
        backgroundColor: resolve("{alias.bg-success}"),
        color: resolve("{alias.text-on-color}"),
      },
      "&.MuiChip-colorError": {
        backgroundColor: resolve("{alias.bg-danger}"),
        color: resolve("{alias.text-on-color}"),
      },
      "&.MuiChip-colorWarning": {
        backgroundColor: resolve("{alias.bg-warning}"),
        color: resolve("{alias.text-on-color}"),
      },
      "&.MuiChip-colorInfo": {
        backgroundColor: resolve("{alias.bg-info}"),
        color: resolve("{alias.text-on-color}"),
      },
    },
    outlined: {
      backgroundColor: "transparent",
      "&.MuiChip-colorPrimary": {
        borderColor: resolve("{alias.border-brand}"),
        color: resolve("{alias.text-brand}"),
      },
      "&.MuiChip-colorSuccess": {
        borderColor: resolve("{alias.border-success}"),
        color: resolve("{alias.text-success}"),
      },
      "&.MuiChip-colorError": {
        borderColor: resolve("{alias.border-danger}"),
        color: resolve("{alias.text-danger}"),
      },
      "&.MuiChip-colorWarning": {
        borderColor: resolve("{alias.border-warning}"),
        color: resolve("{alias.text-warning-strong}"),
      },
      "&.MuiChip-colorInfo": {
        borderColor: resolve("{alias.border-brand-secondary}"),
        color: resolve("{alias.text-info}"),
      },
    },
    deleteIcon: {
      fontSize: 16,
      margin: "0 4px 0 -2px",
      color: "inherit",
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
        color: "inherit",
      },
    },
    label: {
      padding: `0 ${tokens.spacing.sm}`,
    },
  },
};
