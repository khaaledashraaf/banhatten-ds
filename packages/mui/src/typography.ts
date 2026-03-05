import type { TypographyOptions } from "@mui/material/styles/createTypography";
import { resolve } from "./tokens";

const fontFamily = [
  '"Inter"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
].join(",");

export const typography: TypographyOptions = {
  fontFamily,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "2.25rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    color: resolve("{alias.text-primary}"),
  },
  h2: {
    fontSize: "1.875rem",
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
    color: resolve("{alias.text-primary}"),
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.3,
    color: resolve("{alias.text-primary}"),
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.35,
    color: resolve("{alias.text-primary}"),
  },
  h5: {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.4,
    color: resolve("{alias.text-primary}"),
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
    color: resolve("{alias.text-primary}"),
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.5,
    color: resolve("{alias.text-primary}"),
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
    color: resolve("{alias.text-secondary}"),
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: resolve("{alias.text-primary}"),
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    color: resolve("{alias.text-secondary}"),
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: resolve("{alias.text-tertiary}"),
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: resolve("{alias.text-tertiary}"),
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
    textTransform: "none",
  },
};
