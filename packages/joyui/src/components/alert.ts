import { tokens, resolve } from "../tokens";

export const JoyAlert = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
      fontSize: "0.875rem",
      lineHeight: "20px",
      alignItems: "center",
      gap: tokens.spacing.md,
      ...(ownerState.variant === "soft" &&
        ownerState.color === "primary" && {
          backgroundColor: resolve("{alias.bg-info-tertiary}"),
          color: resolve("{alias.text-info}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "success" && {
          backgroundColor: resolve("{alias.bg-success-tertiary}"),
          color: resolve("{alias.text-success}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "warning" && {
          backgroundColor: resolve("{alias.bg-warning-tertiary}"),
          color: resolve("{alias.text-warning}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "danger" && {
          backgroundColor: resolve("{alias.bg-danger-tertiary}"),
          color: resolve("{alias.text-danger}"),
        }),
      ...(ownerState.variant === "soft" &&
        ownerState.color === "neutral" && {
          backgroundColor: resolve("{alias.bg-secondary}"),
          color: resolve("{alias.text-primary}"),
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "primary" && {
          backgroundColor: resolve("{alias.bg-info}"),
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
      ...(ownerState.variant === "solid" &&
        ownerState.color === "danger" && {
          backgroundColor: resolve("{alias.bg-danger}"),
          color: resolve("{alias.text-on-color}"),
        }),
      ...(ownerState.variant === "outlined" && {
        backgroundColor: "transparent",
      }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "primary" && {
          borderColor: resolve("{alias.border-brand-secondary}"),
          color: resolve("{alias.text-info}"),
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "success" && {
          borderColor: resolve("{alias.border-success-secondary}"),
          color: resolve("{alias.text-success}"),
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "warning" && {
          borderColor: resolve("{alias.border-warning-secondary}"),
          color: resolve("{alias.text-warning}"),
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "danger" && {
          borderColor: resolve("{alias.border-danger-secondary}"),
          color: resolve("{alias.text-danger}"),
        }),
    }),
  },
};
