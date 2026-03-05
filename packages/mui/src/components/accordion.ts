import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiAccordion: Components<Theme>["MuiAccordion"] = {
  defaultProps: {
    disableGutters: true,
    elevation: 0,
  },
  styleOverrides: {
    root: {
      "&::before": { display: "none" },
      "&.Mui-expanded": { margin: 0 },
    },
  },
};

export const MuiAccordionSummary: Components<Theme>["MuiAccordionSummary"] = {
  styleOverrides: {
    root: {
      padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
      minHeight: "auto",
      gap: tokens.spacing.md,
      color: resolve("{alias.text-primary}"),
      transition: "background-color 150ms",
      "&:hover": {
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      "&.Mui-expanded": {
        minHeight: "auto",
      },
      "&.Mui-disabled": {
        opacity: 1,
        color: resolve("{alias.text-inactive}"),
        "& .MuiAccordionSummary-expandIconWrapper": {
          color: resolve("{alias.icon-inactive}"),
        },
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px ${resolve("{alias.border-brand}")}`,
        borderRadius: tokens.radius.xs,
      },
    },
    content: {
      margin: 0,
      "&.Mui-expanded": { margin: 0 },
    },
    expandIconWrapper: {
      color: resolve("{alias.icon-primary}"),
      transition: "transform 200ms",
      "&.Mui-expanded": {
        transform: "rotate(180deg)",
      },
    },
  },
};

export const MuiAccordionDetails: Components<Theme>["MuiAccordionDetails"] = {
  styleOverrides: {
    root: {
      padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
      color: resolve("{alias.text-secondary}"),
      fontSize: 14,
    },
  },
};
