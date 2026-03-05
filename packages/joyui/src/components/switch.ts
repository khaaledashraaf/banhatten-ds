import { tokens, resolve } from "../tokens";

export const JoySwitch = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--Switch-trackRadius": tokens.radius.full,
      "--Switch-thumbRadius": tokens.radius.full,
      "--Switch-thumbShadow": tokens.shadow.md,
      ...(ownerState.size === "sm" && {
        "--Switch-trackWidth": "32px",
        "--Switch-trackHeight": "20px",
        "--Switch-thumbSize": "14px",
      }),
      ...(ownerState.size === "md" && {
        "--Switch-trackWidth": "40px",
        "--Switch-trackHeight": "24px",
        "--Switch-thumbSize": "20px",
      }),
      "&.Joy-disabled": {
        "--Switch-trackBackground": resolve("{alias.bg-inactive-subtle}"),
        "--Switch-thumbBackground": resolve("{alias.bg-quarterary}"),
        "--Switch-thumbShadow": "none",
      },
    }),
    track: {
      backgroundColor: resolve("{alias.bg-quarterary}"),
      transition: "background-color 150ms",
      ".Joy-checked &": {
        backgroundColor: resolve("{alias.component-toggle-brand-bg}"),
      },
      ".Joy-checked:hover &": {
        backgroundColor: resolve("{alias.component-toggle-brand-bg-hover}"),
      },
    },
    thumb: {
      backgroundColor: resolve("{alias.bg-primary}"),
      transition: "transform 150ms, background-color 150ms",
    },
  },
};
