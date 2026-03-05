import { tokens, resolve } from "../tokens";

export const JoyAccordionGroup = {
  styleOverrides: {
    root: {},
  },
};

export const JoyAccordion = {
  styleOverrides: {
    root: {
      "&::before": { display: "none" },
    },
  },
};

export const JoyAccordionSummary = {
  styleOverrides: {
    root: {},
    button: {
      padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
      gap: tokens.spacing.md,
      color: resolve("{alias.text-primary}"),
      transition: "background-color 150ms",
      "&:hover": {
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      "&.Joy-disabled": {
        opacity: 1,
        color: resolve("{alias.text-inactive}"),
      },
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
        borderRadius: tokens.radius.xs,
      },
    },
    indicator: {
      color: resolve("{alias.icon-primary}"),
      transition: "transform 200ms",
    },
  },
};

export const JoyAccordionDetails = {
  styleOverrides: {
    content: {
      padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
      color: resolve("{alias.text-secondary}"),
      fontSize: "0.875rem",
    },
  },
};
