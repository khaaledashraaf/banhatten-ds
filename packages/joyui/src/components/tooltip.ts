import { tokens, resolve } from "../tokens";

export const JoyTooltip = {
  defaultProps: {
    arrow: true,
    enterDelay: 200,
    placement: "bottom" as const,
  },
  styleOverrides: {
    root: {
      "--Tooltip-arrowSize": "12px",
      backgroundColor: resolve("{alias.bg-always-dark}"),
      color: resolve("{alias.text-on-color}"),
      fontSize: "0.75rem",
      lineHeight: "20px",
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      maxWidth: 300,
    },
    arrow: {
      "&::before": {
        backgroundColor: resolve("{alias.bg-always-dark}"),
      },
    },
  },
};
