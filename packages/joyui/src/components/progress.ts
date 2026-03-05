import { tokens, resolve } from "../tokens";

export const JoyLinearProgress = {
  styleOverrides: {
    root: {
      "--LinearProgress-radius": tokens.radius.sm,
      "--LinearProgress-thickness": "4px",
      backgroundColor: resolve("{alias.bg-tertiary}"),
    },
  },
};

export const JoyCircularProgress = {
  styleOverrides: {
    root: {},
  },
};
