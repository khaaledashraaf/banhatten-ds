import { tokens, resolve } from "../tokens";

export const JoySheet = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
    },
  },
};

export const JoyCard = {
  defaultProps: {
    variant: "outlined" as const,
  },
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
      "--Card-padding": tokens.spacing["2xl"],
      borderColor: resolve("{alias.border-default}"),
      boxShadow: "none",
    },
  },
};

export const JoyCardContent = {
  styleOverrides: {
    root: {},
  },
};

export const JoyCardOverflow = {
  styleOverrides: {
    root: {},
  },
};

export const JoyModal = {
  styleOverrides: {
    root: {},
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(4px)",
    },
  },
};

export const JoyModalDialog = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
      boxShadow: tokens.shadow.xl,
      "--ModalDialog-padding": tokens.spacing["2xl"],
    },
  },
};

export const JoyModalClose = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
    },
  },
};

export const JoyDrawer = {
  styleOverrides: {
    root: {},
    content: {
      borderColor: resolve("{alias.border-default}"),
    },
  },
};

export const JoyDialogTitle = {
  styleOverrides: {
    root: {
      fontSize: "1.125rem",
      fontWeight: 600,
      color: resolve("{alias.text-primary}"),
    },
  },
};

export const JoyDialogContent = {
  styleOverrides: {
    root: {
      color: resolve("{alias.text-secondary}"),
      fontSize: "0.875rem",
    },
  },
};

export const JoyDialogActions = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
  },
};
