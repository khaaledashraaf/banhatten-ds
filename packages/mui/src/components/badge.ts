import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiBadge: Components<Theme>["MuiBadge"] = {
  styleOverrides: {
    badge: {
      fontSize: 12,
      fontWeight: 500,
      minWidth: 18,
      height: 18,
      padding: "0 4px",
      borderRadius: tokens.radius.full,
    },
    colorPrimary: {
      backgroundColor: resolve("{alias.bg-brand}"),
      color: resolve("{alias.text-on-color}"),
    },
    colorError: {
      backgroundColor: resolve("{alias.bg-danger}"),
      color: resolve("{alias.text-on-color}"),
    },
    colorSuccess: {
      backgroundColor: resolve("{alias.bg-success}"),
      color: resolve("{alias.text-on-color}"),
    },
    colorWarning: {
      backgroundColor: resolve("{alias.bg-warning}"),
      color: resolve("{alias.text-on-color}"),
    },
    colorInfo: {
      backgroundColor: resolve("{alias.bg-info}"),
      color: resolve("{alias.text-on-color}"),
    },
  },
};
