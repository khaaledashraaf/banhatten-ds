import type { Components, Theme } from "@mui/material/styles";
import { tokens, resolve } from "../tokens";

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
    size: "medium",
  },
};

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      backgroundColor: resolve("{alias.component-input-bg}"),
      borderRadius: tokens.radius.sm,
      fontSize: 14,
      boxShadow: tokens.shadow.xs,
      transition: "border-color 150ms",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: resolve("{alias.border-strong}"),
        borderWidth: 1,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: resolve("{alias.border-strong}"),
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: resolve("{alias.border-brand}"),
        borderWidth: 1,
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused}")}`,
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: resolve("{alias.border-danger-secondary}"),
      },
      "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: resolve("{alias.border-danger}"),
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused-danger}")}`,
      },
      "&.Mui-disabled": {
        backgroundColor: resolve("{alias.bg-secondary}"),
        boxShadow: "none",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: resolve("{alias.border-inactive}"),
        },
      },
    },
    input: {
      padding: `${tokens.spacing.sm} ${tokens.spacing.sm}`,
      height: "auto",
      "&::placeholder": {
        color: resolve("{alias.text-placeholder}"),
        opacity: 1,
      },
    },
    inputSizeSmall: {
      padding: `${tokens.spacing.sm} ${tokens.spacing.sm}`,
    },
    multiline: {
      padding: 0,
    },
  },
};

export const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root: {
      fontSize: 14,
      fontWeight: 500,
      color: resolve("{alias.text-primary}"),
      transform: "none",
      position: "relative",
      marginBottom: tokens.spacing.sm,
      "&.Mui-focused": {
        color: resolve("{alias.text-primary}"),
      },
      "&.Mui-error": {
        color: resolve("{alias.text-primary}"),
      },
    },
  },
};

export const MuiFormHelperText: Components<Theme>["MuiFormHelperText"] = {
  styleOverrides: {
    root: {
      fontSize: 14,
      marginTop: tokens.spacing.sm,
      marginLeft: 0,
      marginRight: 0,
      color: resolve("{alias.text-secondary}"),
      "&.Mui-error": {
        color: resolve("{alias.text-error}"),
      },
    },
  },
};

export const MuiInputAdornment: Components<Theme>["MuiInputAdornment"] = {
  styleOverrides: {
    root: {
      color: resolve("{alias.text-tertiary}"),
      "& .MuiSvgIcon-root": {
        fontSize: 20,
      },
    },
  },
};
