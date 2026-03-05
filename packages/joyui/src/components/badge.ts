import { tokens, resolve } from "../tokens";

export const JoyBadge = {
  styleOverrides: {
    root: {},
    badge: {
      fontSize: "0.75rem",
      fontWeight: 500,
      minWidth: 18,
      height: 18,
      padding: "0 4px",
      borderRadius: tokens.radius.full,
    },
  },
};
