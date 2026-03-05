import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

const r = tokens.radius;

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      fontWeight: 500,
      textTransform: "none",
      borderRadius: r.sm,
      transition: "background-color 150ms, color 150ms",
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${resolve("{alias.border-brand}")}`,
      },
      "&.Mui-disabled": {
        opacity: 0.5,
      },
    },
    sizeSmall: {
      height: 36,
      padding: `0 ${tokens.spacing.md}`,
      gap: 2,
      fontSize: 14,
    },
    sizeMedium: {
      height: 40,
      padding: `0 ${tokens.spacing.lg}`,
      gap: 4,
      fontSize: 14,
    },
    sizeLarge: {
      height: 44,
      padding: `0 ${tokens.spacing.xl}`,
      gap: 4,
      fontSize: 16,
    },
    containedPrimary: {
      backgroundColor: resolve("{alias.component-button-brand-bg}"),
      color: resolve("{alias.text-on-color}"),
      "&:hover": {
        backgroundColor: resolve("{alias.component-button-brand-bg-hover}"),
      },
      "&:active": {
        backgroundColor: resolve("{alias.bg-brand-strong}"),
      },
    },
    containedError: {
      backgroundColor: resolve("{alias.component-button-danger-bg}"),
      color: resolve("{alias.text-on-color}"),
      "&:hover": {
        backgroundColor: resolve("{alias.component-button-danger-bg-hover}"),
      },
      "&:active": {
        backgroundColor: resolve("{alias.bg-danger-strong}"),
      },
    },
    outlined: {
      backgroundColor: resolve("{alias.component-button-secondary-bg}"),
      color: resolve("{alias.component-button-secondary-fg}"),
      borderColor: resolve("{alias.border-strong}"),
      boxShadow: tokens.shadow.xs,
      "&:hover": {
        backgroundColor: resolve("{alias.component-button-secondary-bg-hover}"),
        borderColor: resolve("{alias.border-strong}"),
      },
      "&:active": {
        backgroundColor: resolve("{alias.bg-quarterary}"),
      },
    },
    text: {
      backgroundColor: "transparent",
      color: resolve("{alias.component-button-tertiary-color-fg}"),
      "&:hover": {
        backgroundColor: resolve("{alias.component-button-tertiary-bg-hover}"),
      },
      "&:active": {
        backgroundColor: resolve("{alias.bg-quarterary}"),
      },
    },
    startIcon: {
      marginRight: 4,
      marginLeft: 0,
    },
    endIcon: {
      marginLeft: 4,
      marginRight: 0,
    },
  },
  variants: [
    {
      props: { variant: "contained", size: "extraLarge" as any },
      style: {
        height: 48,
        padding: `0 ${tokens.spacing["2xl"]}`,
        gap: 4,
        fontSize: 16,
        borderRadius: r.sm,
      },
    },
    {
      props: { variant: "contained", size: "jumbo" as any },
      style: {
        height: 56,
        padding: `0 ${tokens.spacing["2xl"]}`,
        gap: 8,
        fontSize: 16,
        borderRadius: r.md,
      },
    },
    {
      props: { variant: "link" as any },
      style: {
        backgroundColor: "transparent",
        color: resolve("{alias.component-button-tertiary-color-fg}"),
        height: "auto",
        padding: 0,
        minWidth: "auto",
        borderRadius: 6,
        textUnderlineOffset: "4px",
        "&:hover": {
          backgroundColor: "transparent",
          textDecoration: "underline",
        },
      },
    },
    {
      props: { variant: "linkBrand" as any },
      style: {
        backgroundColor: "transparent",
        color: resolve("{alias.component-button-link-color-fg}"),
        height: "auto",
        padding: 0,
        minWidth: "auto",
        borderRadius: 6,
        textUnderlineOffset: "4px",
        "&:hover": {
          backgroundColor: "transparent",
          color: resolve("{alias.component-button-link-color-fg-hover}"),
        },
      },
    },
  ],
};

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      borderRadius: r.sm,
      transition: "background-color 150ms",
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${resolve("{alias.border-brand}")}`,
      },
      "&.Mui-disabled": {
        opacity: 0.5,
      },
    },
    sizeSmall: { width: 36, height: 36 },
    sizeMedium: { width: 40, height: 40 },
    sizeLarge: { width: 44, height: 44 },
  },
};
