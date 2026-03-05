import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiAlert: Components<Theme>["MuiAlert"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
      fontSize: 14,
      lineHeight: "20px",
      alignItems: "center",
    },
    standardInfo: {
      backgroundColor: resolve("{alias.bg-info-tertiary}"),
      color: resolve("{alias.text-info}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-info}") },
    },
    standardSuccess: {
      backgroundColor: resolve("{alias.bg-success-tertiary}"),
      color: resolve("{alias.text-success}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-success}") },
    },
    standardWarning: {
      backgroundColor: resolve("{alias.bg-warning-tertiary}"),
      color: resolve("{alias.text-warning}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-warning}") },
    },
    standardError: {
      backgroundColor: resolve("{alias.bg-danger-tertiary}"),
      color: resolve("{alias.text-danger}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-danger}") },
    },
    outlinedInfo: {
      borderColor: resolve("{alias.border-brand-secondary}"),
      backgroundColor: resolve("{alias.bg-info-tertiary}"),
      color: resolve("{alias.text-info}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-info}") },
    },
    outlinedSuccess: {
      borderColor: resolve("{alias.border-success-secondary}"),
      backgroundColor: resolve("{alias.bg-success-tertiary}"),
      color: resolve("{alias.text-success}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-success}") },
    },
    outlinedWarning: {
      borderColor: resolve("{alias.border-warning-secondary}"),
      backgroundColor: resolve("{alias.bg-warning-tertiary}"),
      color: resolve("{alias.text-warning}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-warning}") },
    },
    outlinedError: {
      borderColor: resolve("{alias.border-danger-secondary}"),
      backgroundColor: resolve("{alias.bg-danger-tertiary}"),
      color: resolve("{alias.text-danger}"),
      "& .MuiAlert-icon": { color: resolve("{alias.text-danger}") },
    },
    filledInfo: {
      backgroundColor: resolve("{alias.bg-info}"),
      color: resolve("{alias.text-on-color}"),
    },
    filledSuccess: {
      backgroundColor: resolve("{alias.bg-success}"),
      color: resolve("{alias.text-on-color}"),
    },
    filledWarning: {
      backgroundColor: resolve("{alias.bg-warning}"),
      color: resolve("{alias.text-on-color}"),
    },
    filledError: {
      backgroundColor: resolve("{alias.bg-danger}"),
      color: resolve("{alias.text-on-color}"),
    },
    icon: {
      marginRight: tokens.spacing.md,
      padding: 0,
    },
    message: {
      padding: 0,
      fontWeight: 500,
    },
    action: {
      padding: 0,
      marginRight: 0,
    },
  },
};
