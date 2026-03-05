import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiAvatar: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: {
      backgroundColor: resolve("{alias.bg-quarterary}"),
      color: resolve("{alias.text-secondary}"),
      fontWeight: 500,
      fontSize: 14,
      width: 32,
      height: 32,
    },
    rounded: {
      borderRadius: tokens.radius.md,
    },
    circular: {
      borderRadius: tokens.radius.full,
    },
  },
};

export const MuiAvatarGroup: Components<Theme>["MuiAvatarGroup"] = {
  styleOverrides: {
    root: {
      "& .MuiAvatar-root": {
        borderColor: resolve("{alias.bg-primary}"),
        borderWidth: 2,
      },
    },
  },
};
