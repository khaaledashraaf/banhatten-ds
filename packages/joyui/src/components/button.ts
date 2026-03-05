import { tokens, resolve } from "../tokens";

export const JoyButton = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any; theme: any }) => ({
      fontWeight: 500,
      textTransform: "none" as const,
      borderRadius: tokens.radius.sm,
      transition: "background-color 150ms, color 150ms",
      "--Button-gap": "4px",
      ...(ownerState.size === "sm" && {
        minHeight: 36,
        paddingInline: tokens.spacing.md,
        fontSize: "0.875rem",
        "--Button-gap": "2px",
      }),
      ...(ownerState.size === "md" && {
        minHeight: 40,
        paddingInline: tokens.spacing.lg,
        fontSize: "0.875rem",
      }),
      ...(ownerState.size === "lg" && {
        minHeight: 44,
        paddingInline: tokens.spacing.xl,
        fontSize: "1rem",
      }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "primary" && {
          "&:active": { backgroundColor: resolve("{alias.bg-brand-strong}") },
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "danger" && {
          "&:active": { backgroundColor: resolve("{alias.bg-danger-strong}") },
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "neutral" && {
          boxShadow: tokens.shadow.xs,
          "&:active": { backgroundColor: resolve("{alias.bg-quarterary}") },
        }),
      ...(ownerState.variant === "plain" &&
        ownerState.color === "neutral" && {
          "&:active": { backgroundColor: resolve("{alias.bg-quarterary}") },
        }),
      ...(ownerState.variant === "link" && {
        backgroundColor: "transparent",
        color: resolve("{alias.component-button-tertiary-color-fg}"),
        minHeight: "auto",
        paddingInline: 0,
        paddingBlock: 0,
        borderRadius: 6,
        textUnderlineOffset: "4px",
        "&:hover": {
          backgroundColor: "transparent",
          textDecoration: "underline",
        },
      }),
      ...(ownerState.variant === "linkBrand" && {
        backgroundColor: "transparent",
        color: resolve("{alias.component-button-link-color-fg}"),
        minHeight: "auto",
        paddingInline: 0,
        paddingBlock: 0,
        borderRadius: 6,
        textUnderlineOffset: "4px",
        "&:hover": {
          backgroundColor: "transparent",
          color: resolve("{alias.component-button-link-color-fg-hover}"),
        },
      }),
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};

export const JoyIconButton = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.sm,
      transition: "background-color 150ms",
      ...(ownerState.size === "sm" && { width: 36, height: 36 }),
      ...(ownerState.size === "md" && { width: 40, height: 40 }),
      ...(ownerState.size === "lg" && { width: 44, height: 44 }),
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};
