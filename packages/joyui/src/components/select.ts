import { tokens, resolve } from "../tokens";

export const JoySelect = {
  styleOverrides: {
    root: {
      "--Select-radius": tokens.radius.sm,
      "--Select-focusedHighlight": resolve("{alias.border-brand}"),
      "--Select-focusedThickness": "1px",
      backgroundColor: resolve("{alias.component-input-bg}"),
      borderColor: resolve("{alias.border-strong}"),
      boxShadow: tokens.shadow.xs,
      fontSize: "0.875rem",
      "&.Joy-focused": {
        borderColor: resolve("{alias.border-brand}"),
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused}")}`,
      },
      "&.Joy-disabled": {
        backgroundColor: resolve("{alias.bg-secondary}"),
        borderColor: resolve("{alias.border-inactive}"),
        boxShadow: "none",
      },
    },
    indicator: {
      color: resolve("{alias.icon-secondary}"),
    },
    listbox: {
      borderRadius: tokens.radius.sm,
      backgroundColor: resolve("{alias.bg-primary}"),
      border: `1px solid ${resolve("{alias.border-default}")}`,
      boxShadow: tokens.shadow.lg,
      padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
    },
  },
};

export const JoyOption = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      gap: tokens.spacing.md,
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: "20px",
      color: resolve("{alias.text-primary}"),
      transition: "background-color 150ms",
      "&:hover": {
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      '&[aria-selected="true"]': {
        backgroundColor: resolve("{alias.bg-brand-tertiary}"),
        color: resolve("{alias.text-brand}"),
        fontWeight: 500,
      },
      "&.Joy-disabled": {
        opacity: 0.5,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${resolve("{alias.border-brand}")}`,
      },
    },
  },
};
