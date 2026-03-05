import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  defaultProps: {
    arrow: true,
    enterDelay: 200,
    placement: "bottom",
  },
  styleOverrides: {
    tooltip: {
      backgroundColor: resolve("{alias.bg-always-dark}"),
      color: resolve("{alias.text-on-color}"),
      fontSize: 12,
      lineHeight: "20px",
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      maxWidth: 300,
    },
    arrow: {
      color: resolve("{alias.bg-always-dark}"),
    },
  },
};
