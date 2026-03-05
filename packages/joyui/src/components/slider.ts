import { tokens, resolve } from "../tokens";

export const JoySlider = {
  styleOverrides: {
    root: {
      "--Slider-trackSize": "8px",
      "--Slider-thumbSize": "24px",
      "--Slider-thumbBackground": resolve("{alias.bg-primary}"),
    },
    track: {
      borderRadius: tokens.radius.full,
    },
    rail: {
      backgroundColor: resolve("{alias.bg-tertiary}"),
      opacity: 1,
      borderRadius: tokens.radius.full,
    },
    thumb: {
      backgroundColor: resolve("{alias.bg-primary}"),
      border: `1px solid ${resolve("{alias.border-brand}")}`,
      boxShadow: tokens.shadow.sm,
      "&:hover": {
        backgroundColor: resolve("{alias.bg-brand-tertiary}"),
      },
      "&:active, &.Joy-active": {
        backgroundColor: resolve("{alias.bg-brand-secondary}"),
      },
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
      "&::before": { display: "none" },
    },
    valueLabel: {
      backgroundColor: resolve("{alias.bg-primary}"),
      color: resolve("{alias.text-primary}"),
      borderRadius: tokens.radius.sm,
      border: `1px solid ${resolve("{alias.border-default}")}`,
      boxShadow: tokens.shadow.lg,
      fontSize: "0.75rem",
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    },
    markLabel: {
      fontSize: "0.75rem",
      color: resolve("{alias.text-tertiary}"),
    },
  },
};
