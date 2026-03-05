import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      width: 44,
      height: 28,
      padding: 0,
    },
    switchBase: {
      padding: 2,
      transitionDuration: "150ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        "& + .MuiSwitch-track": {
          backgroundColor: resolve("{alias.component-toggle-brand-bg}"),
          opacity: 1,
          border: 0,
        },
        "&:hover + .MuiSwitch-track": {
          backgroundColor: resolve("{alias.component-toggle-brand-bg-hover}"),
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: resolve("{alias.bg-primary}"),
        },
      },
      "&.Mui-disabled": {
        "& .MuiSwitch-thumb": {
          backgroundColor: resolve("{alias.bg-quarterary}"),
          boxShadow: "none",
        },
        "& + .MuiSwitch-track": {
          backgroundColor: resolve("{alias.bg-inactive-subtle}"),
          opacity: 1,
        },
      },
      "&:focus-visible": {
        outline: "none",
        "& + .MuiSwitch-track": {
          boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${resolve("{alias.border-brand}")}`,
        },
      },
    },
    thumb: {
      width: 20,
      height: 20,
      borderRadius: tokens.radius.full,
      backgroundColor: resolve("{alias.bg-primary}"),
      boxShadow: tokens.shadow.md,
      transition: "transform 150ms, background-color 150ms",
    },
    track: {
      borderRadius: tokens.radius.full,
      backgroundColor: resolve("{alias.bg-quarterary}"),
      opacity: 1,
      transition: "background-color 150ms",
    },
    sizeSmall: {
      width: 36,
      height: 24,
      "& .MuiSwitch-switchBase": {
        padding: 3,
        "&.Mui-checked": {
          transform: "translateX(12px)",
        },
      },
      "& .MuiSwitch-thumb": {
        width: 14,
        height: 14,
      },
    },
  },
};
