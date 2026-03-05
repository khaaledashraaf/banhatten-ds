import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiLink: Components<Theme>["MuiLink"] = {
  defaultProps: {
    underline: "hover",
  },
  styleOverrides: {
    root: {
      color: resolve("{alias.component-button-link-color-fg}"),
      textUnderlineOffset: "4px",
      fontWeight: 500,
      "&:hover": {
        color: resolve("{alias.component-button-link-color-fg-hover}"),
      },
    },
  },
};

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    indicator: {
      backgroundColor: resolve("{alias.bg-brand}"),
      height: 2,
    },
  },
};

export const MuiTab: Components<Theme>["MuiTab"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: 14,
      color: resolve("{alias.text-secondary}"),
      padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
      minHeight: 44,
      "&.Mui-selected": {
        color: resolve("{alias.text-brand}"),
      },
      "&:hover": {
        color: resolve("{alias.text-primary}"),
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${resolve("{alias.border-brand}")}`,
      },
    },
  },
};

export const MuiSkeleton: Components<Theme>["MuiSkeleton"] = {
  styleOverrides: {
    root: {
      backgroundColor: resolve("{alias.bg-tertiary}"),
    },
    rounded: {
      borderRadius: tokens.radius.sm,
    },
  },
};

export const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  defaultProps: {
    elevation: 0,
    color: "default",
  },
  styleOverrides: {
    root: {
      backgroundColor: resolve("{alias.bg-primary}"),
      borderBottom: `1px solid ${resolve("{alias.border-default}")}`,
    },
    colorDefault: {
      backgroundColor: resolve("{alias.bg-primary}"),
      color: resolve("{alias.text-primary}"),
    },
  },
};

export const MuiToolbar: Components<Theme>["MuiToolbar"] = {
  styleOverrides: {
    root: {
      minHeight: "56px !important",
    },
  },
};

export const MuiTableHead: Components<Theme>["MuiTableHead"] = {
  styleOverrides: {
    root: {
      backgroundColor: resolve("{alias.bg-secondary}"),
      "& .MuiTableCell-root": {
        fontWeight: 500,
        fontSize: 12,
        color: resolve("{alias.text-secondary}"),
        borderBottomColor: resolve("{alias.border-default}"),
      },
    },
  },
};

export const MuiTableCell: Components<Theme>["MuiTableCell"] = {
  styleOverrides: {
    root: {
      fontSize: 14,
      borderBottomColor: resolve("{alias.border-default}"),
      padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
      color: resolve("{alias.text-primary}"),
    },
  },
};

export const MuiTableRow: Components<Theme>["MuiTableRow"] = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: `${resolve("{alias.bg-secondary}")} !important`,
      },
      "&.Mui-selected": {
        backgroundColor: resolve("{alias.bg-brand-tertiary}"),
        "&:hover": {
          backgroundColor: `${resolve("{alias.bg-brand-tertiary}")} !important`,
        },
      },
    },
  },
};

export const MuiFormControlLabel: Components<Theme>["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
      gap: tokens.spacing.md,
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "16px",
      color: resolve("{alias.text-primary}"),
      "&.Mui-disabled": {
        color: resolve("{alias.text-inactive}"),
      },
    },
  },
};

export const MuiSnackbar: Components<Theme>["MuiSnackbar"] = {
  styleOverrides: {
    root: {
      "& .MuiPaper-root": {
        borderRadius: tokens.radius.sm,
        boxShadow: tokens.shadow.lg,
      },
    },
  },
};
