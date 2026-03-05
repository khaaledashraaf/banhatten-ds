import type { Components, Theme } from "@mui/material/styles";
import { resolve } from "../tokens";

export const MuiCheckbox: Components<Theme>["MuiCheckbox"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      padding: 4,
      color: resolve("{alias.border-strong}"),
      borderRadius: 4,
      transition: "color 150ms",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-checked": {
        color: resolve("{alias.bg-brand}"),
        "&:hover": {
          color: resolve("{alias.bg-brand-hover}"),
        },
      },
      "&.MuiCheckbox-indeterminate": {
        color: resolve("{alias.bg-brand}"),
        "&:hover": {
          color: resolve("{alias.bg-brand-hover}"),
        },
      },
      "&.Mui-disabled": {
        color: resolve("{alias.border-inactive}"),
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px ${resolve("{alias.border-focused}")}, inset 0 0 0 1px ${resolve("{alias.border-brand}")}`,
      },
    },
  },
};
