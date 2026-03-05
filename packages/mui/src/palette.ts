import type { PaletteOptions } from "@mui/material/styles";
import { tokens, resolve } from "./tokens";

const b = tokens.brand;

export const palette: PaletteOptions = {
  primary: {
    main: b["primary-600"],
    light: b["primary-400"],
    dark: b["primary-800"],
    contrastText: b["neutral-25"],
  },
  secondary: {
    main: b["neutral-600"],
    light: b["neutral-400"],
    dark: b["neutral-800"],
    contrastText: b["neutral-25"],
  },
  error: {
    main: b["danger-600"],
    light: b["danger-400"],
    dark: b["danger-800"],
    contrastText: b["neutral-25"],
  },
  warning: {
    main: b["warning-600"],
    light: b["warning-400"],
    dark: b["warning-800"],
    contrastText: b["neutral-25"],
  },
  success: {
    main: b["success-600"],
    light: b["success-400"],
    dark: b["success-800"],
    contrastText: b["neutral-25"],
  },
  info: {
    main: b["sky-600"],
    light: b["primary-400"],
    dark: b["sky-800"],
    contrastText: b["neutral-25"],
  },
  grey: {
    50: b["neutral-50"],
    100: b["neutral-100"],
    200: b["neutral-200"],
    300: b["neutral-300"],
    400: b["neutral-400"],
    500: b["neutral-500"],
    600: b["neutral-600"],
    700: b["neutral-700"],
    800: b["neutral-800"],
    900: b["neutral-900"],
  },
  text: {
    primary: resolve("{alias.text-primary}"),
    secondary: resolve("{alias.text-secondary}"),
    disabled: resolve("{alias.text-inactive}"),
  },
  divider: resolve("{alias.border-default}"),
  background: {
    default: resolve("{alias.bg-primary}"),
    paper: resolve("{alias.bg-primary}"),
  },
  action: {
    active: resolve("{alias.icon-secondary}"),
    hover: "rgba(0, 0, 0, 0.04)",
    selected: resolve("{alias.bg-brand-tertiary}"),
    disabled: resolve("{alias.text-inactive}"),
    disabledBackground: resolve("{alias.bg-inactive}"),
    focus: resolve("{alias.border-focused}"),
  },
};
