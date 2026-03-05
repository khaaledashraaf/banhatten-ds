import { tokens, resolve } from "../tokens";

export const JoyInput = {
  styleOverrides: {
    root: {
      "--Input-radius": tokens.radius.sm,
      "--Input-focusedHighlight": resolve("{alias.border-brand}"),
      "--Input-focusedThickness": "1px",
      backgroundColor: resolve("{alias.component-input-bg}"),
      borderColor: resolve("{alias.border-strong}"),
      boxShadow: tokens.shadow.xs,
      fontSize: "0.875rem",
      transition: "border-color 150ms",
      "&:hover": {
        borderColor: resolve("{alias.border-strong}"),
      },
      "&.Joy-focused": {
        borderColor: resolve("{alias.border-brand}"),
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused}")}`,
      },
      "&.Joy-error": {
        borderColor: resolve("{alias.border-danger-secondary}"),
      },
      "&.Joy-error.Joy-focused": {
        borderColor: resolve("{alias.border-danger}"),
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused-danger}")}`,
      },
      "&.Joy-disabled": {
        backgroundColor: resolve("{alias.bg-secondary}"),
        borderColor: resolve("{alias.border-inactive}"),
        boxShadow: "none",
      },
    },
    input: {
      "&::placeholder": {
        color: resolve("{alias.text-placeholder}"),
        opacity: 1,
      },
    },
  },
};

export const JoyTextarea = {
  styleOverrides: {
    root: {
      "--Textarea-radius": tokens.radius.sm,
      "--Textarea-focusedHighlight": resolve("{alias.border-brand}"),
      "--Textarea-focusedThickness": "1px",
      backgroundColor: resolve("{alias.component-input-bg}"),
      borderColor: resolve("{alias.border-strong}"),
      boxShadow: tokens.shadow.xs,
      fontSize: "0.875rem",
      minHeight: 88,
      transition: "border-color 150ms",
      "&.Joy-focused": {
        borderColor: resolve("{alias.border-brand}"),
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused}")}`,
      },
      "&.Joy-error": {
        borderColor: resolve("{alias.border-danger-secondary}"),
      },
      "&.Joy-error.Joy-focused": {
        borderColor: resolve("{alias.border-danger}"),
        boxShadow: `0 0 0 4px ${resolve("{alias.border-focused-danger}")}`,
      },
      "&.Joy-disabled": {
        backgroundColor: resolve("{alias.bg-secondary}"),
        borderColor: resolve("{alias.border-inactive}"),
        boxShadow: "none",
      },
    },
    textarea: {
      "&::placeholder": {
        color: resolve("{alias.text-placeholder}"),
        opacity: 1,
      },
    },
  },
};

export const JoyFormControl = {
  styleOverrides: {
    root: {
      "--FormLabel-margin": `0 0 ${tokens.spacing.sm} 0`,
    },
  },
};

export const JoyFormLabel = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: resolve("{alias.text-primary}"),
    },
  },
};

export const JoyFormHelperText = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
      marginTop: tokens.spacing.sm,
      color: resolve("{alias.text-secondary}"),
    },
  },
};
