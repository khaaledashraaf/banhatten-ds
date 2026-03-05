import { tokens, resolve } from "../tokens";

export const JoyAvatar = {
  styleOverrides: {
    root: {
      "--Avatar-radius": tokens.radius.full,
      backgroundColor: resolve("{alias.bg-quarterary}"),
      color: resolve("{alias.text-secondary}"),
      fontWeight: 500,
      fontSize: "0.875rem",
    },
  },
};

export const JoyAvatarGroup = {
  styleOverrides: {
    root: {
      "--AvatarGroup-gap": "-8px",
      "--Avatar-ringSize": "2px",
      "--Avatar-ring": resolve("{alias.bg-primary}"),
    },
  },
};
