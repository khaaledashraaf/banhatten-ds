import { tokens, resolve } from "../tokens";

export const JoyChip = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.sm,
      fontWeight: 400,
      transition: "background-color 150ms, border-color 150ms, color 150ms",
      ...(ownerState.size === "sm" && {
        "--Chip-minHeight": "24px",
        fontSize: "0.75rem",
        paddingInline: tokens.spacing.sm,
      }),
      ...(ownerState.size === "md" && {
        "--Chip-minHeight": "28px",
        fontSize: "0.875rem",
        paddingInline: tokens.spacing.md,
      }),
      ...(ownerState.variant === "outlined" && {
        backgroundColor: "transparent",
        borderColor: resolve("{alias.border-strong}"),
        color: resolve("{alias.text-primary}"),
      }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "primary" && {
          backgroundColor: resolve("{alias.bg-brand-tertiary}"),
          color: resolve("{alias.text-brand}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "success" && {
          backgroundColor: resolve("{alias.bg-success-tertiary}"),
          color: resolve("{alias.text-success-strong}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "danger" && {
          backgroundColor: resolve("{alias.bg-danger-tertiary}"),
          color: resolve("{alias.text-danger-strong}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "warning" && {
          backgroundColor: resolve("{alias.bg-warning-tertiary}"),
          color: resolve("{alias.text-warning-strong}"),
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "primary" && {
          backgroundColor: resolve("{alias.bg-brand}"),
          color: resolve("{alias.text-on-color}"),
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "danger" && {
          backgroundColor: resolve("{alias.bg-danger}"),
          color: resolve("{alias.text-on-color}"),
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "success" && {
          backgroundColor: resolve("{alias.bg-success}"),
          color: resolve("{alias.text-on-color}"),
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "warning" && {
          backgroundColor: resolve("{alias.bg-warning}"),
          color: resolve("{alias.text-on-color}"),
        }),
    }),
  },
};
