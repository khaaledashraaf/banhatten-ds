import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiPaper: Components<Theme>["MuiPaper"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      backgroundImage: "none",
    },
    rounded: {
      borderRadius: tokens.radius.sm,
    },
    outlined: {
      borderColor: resolve("{alias.border-default}"),
    },
  },
};

export const MuiCard: Components<Theme>["MuiCard"] = {
  defaultProps: {
    elevation: 0,
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
      borderColor: resolve("{alias.border-default}"),
    },
  },
};

export const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: {
      padding: tokens.spacing["2xl"],
      "&:last-child": {
        paddingBottom: tokens.spacing["2xl"],
      },
    },
  },
};

export const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  styleOverrides: {
    root: {
      padding: tokens.spacing["2xl"],
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
    },
    subheader: {
      fontSize: 14,
      color: resolve("{alias.text-secondary}"),
    },
  },
};

export const MuiDialog: Components<Theme>["MuiDialog"] = {
  styleOverrides: {
    paper: {
      borderRadius: tokens.radius.md,
      boxShadow: tokens.shadow.xl,
    },
  },
};

export const MuiDialogTitle: Components<Theme>["MuiDialogTitle"] = {
  styleOverrides: {
    root: {
      fontSize: 18,
      fontWeight: 600,
      padding: tokens.spacing["2xl"],
      color: resolve("{alias.text-primary}"),
    },
  },
};

export const MuiDialogContent: Components<Theme>["MuiDialogContent"] = {
  styleOverrides: {
    root: {
      padding: `0 ${tokens.spacing["2xl"]}`,
      color: resolve("{alias.text-secondary}"),
      fontSize: 14,
    },
  },
};

export const MuiDialogActions: Components<Theme>["MuiDialogActions"] = {
  styleOverrides: {
    root: {
      padding: tokens.spacing["2xl"],
      gap: tokens.spacing.md,
    },
  },
};

export const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    paper: {
      borderColor: resolve("{alias.border-default}"),
    },
  },
};
