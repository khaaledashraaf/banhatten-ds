import { tokens, resolve } from "../tokens";

export const JoyCheckbox = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
    checkbox: {
      borderRadius: tokens.radius.xs,
      borderColor: resolve("{alias.border-strong}"),
      "&.Joy-checked": {
        backgroundColor: resolve("{alias.bg-brand}"),
        borderColor: resolve("{alias.bg-brand}"),
        "&:hover": {
          backgroundColor: resolve("{alias.bg-brand-hover}"),
          borderColor: resolve("{alias.bg-brand-hover}"),
        },
      },
      "&.Joy-disabled": {
        backgroundColor: resolve("{alias.bg-inactive-subtle}"),
        borderColor: resolve("{alias.border-inactive}"),
      },
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
    },
    label: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: "16px",
      color: resolve("{alias.text-primary}"),
      "&.Joy-disabled": {
        color: resolve("{alias.text-inactive}"),
      },
    },
  },
};
