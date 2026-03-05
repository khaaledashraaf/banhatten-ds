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

export const fontFamilyConfig = {
  body: fontFamily,
  display: fontFamily,
};

export const typographyConfig = {
  h1: {
    fontSize: "2.25rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "1.875rem",
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },
  "title-lg": {
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  "title-md": {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  "title-sm": {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
  },
  "body-lg": {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  "body-md": {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
  },
  "body-sm": {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  "body-xs": {
    fontSize: "0.6875rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
};
