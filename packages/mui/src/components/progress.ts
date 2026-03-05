import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiLinearProgress: Components<Theme>["MuiLinearProgress"] = {
  styleOverrides: {
    root: {
      height: 4,
      borderRadius: tokens.radius.sm,
      backgroundColor: resolve("{alias.bg-tertiary}"),
    },
    bar: {
      borderRadius: tokens.radius.sm,
    },
    colorPrimary: {
      "& .MuiLinearProgress-bar": {
        backgroundColor: resolve("{alias.bg-brand}"),
      },
    },
    colorSecondary: {
      "& .MuiLinearProgress-bar": {
        backgroundColor: resolve("{alias.bg-quarterary}"),
      },
    },
  },
};

export const MuiCircularProgress: Components<Theme>["MuiCircularProgress"] = {
  styleOverrides: {
    colorPrimary: {
      color: resolve("{alias.bg-brand}"),
    },
  },
};
