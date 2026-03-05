import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiSlider: Components<Theme>["MuiSlider"] = {
  defaultProps: {
    disableSwap: true,
  },
  styleOverrides: {
    root: {
      color: resolve("{alias.bg-brand}"),
      height: 8,
    },
    track: {
      border: "none",
      borderRadius: tokens.radius.full,
    },
    rail: {
      backgroundColor: resolve("{alias.bg-tertiary}"),
      opacity: 1,
      borderRadius: tokens.radius.full,
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: resolve("{alias.bg-primary}"),
      border: `1px solid ${resolve("{alias.border-brand}")}`,
      boxShadow: tokens.shadow.sm,
      "&:hover": {
        backgroundColor: resolve("{alias.bg-brand-tertiary}"),
        boxShadow: tokens.shadow.sm,
      },
      "&.Mui-active": {
        backgroundColor: resolve("{alias.bg-brand-secondary}"),
        boxShadow: tokens.shadow.sm,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${resolve("{alias.border-brand}")}`,
      },
      "&::before": { display: "none" },
    },
    valueLabel: {
      backgroundColor: resolve("{alias.bg-primary}"),
      color: resolve("{alias.text-primary}"),
      borderRadius: tokens.radius.sm,
      border: `1px solid ${resolve("{alias.border-default}")}`,
      boxShadow: tokens.shadow.lg,
      fontSize: 12,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      "&::before": {
        display: "none",
      },
    },
    markLabel: {
      fontSize: 12,
      color: resolve("{alias.text-tertiary}"),
    },
  },
};
