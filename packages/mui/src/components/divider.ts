import type { Components, Theme } from "@mui/material/styles";
import { resolve } from "../tokens";

export const MuiDivider: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: {
      borderColor: resolve("{alias.border-default}"),
    },
  },
};
