import { tokens, resolve } from "../tokens";

export const JoyLink = {
  defaultProps: {
    underline: "hover" as const,
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

export const JoyTabs = {
  styleOverrides: {
    root: {},
  },
};

export const JoyTabList = {
  styleOverrides: {
    root: {},
  },
};

export const JoyTab = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      fontSize: "0.875rem",
      padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
      color: resolve("{alias.text-secondary}"),
      "&.Joy-selected": {
        color: resolve("{alias.text-brand}"),
      },
      "&:hover": {
        color: resolve("{alias.text-primary}"),
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      "&:focus-visible": {
        outlineOffset: -2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
    },
  },
};

export const JoyTable = {
  styleOverrides: {
    root: {
      "--TableCell-headBackground": resolve("{alias.bg-secondary}"),
      "--TableCell-height": "auto",
      "& thead th": {
        fontWeight: 500,
        fontSize: "0.75rem",
        color: resolve("{alias.text-secondary}"),
        borderBottomColor: resolve("{alias.border-default}"),
        padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
      },
      "& tbody td": {
        fontSize: "0.875rem",
        borderBottomColor: resolve("{alias.border-default}"),
        padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
        color: resolve("{alias.text-primary}"),
      },
      "& tbody tr:hover": {
        backgroundColor: resolve("{alias.bg-secondary}"),
      },
    },
  },
};

export const JoySkeleton = {
  styleOverrides: {
    root: {
      "--Skeleton-radius": tokens.radius.sm,
    },
  },
};

export const JoySnackbar = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      boxShadow: tokens.shadow.lg,
    },
  },
};

export const JoyList = {
  styleOverrides: {
    root: {},
  },
};

export const JoyListItem = {
  styleOverrides: {
    root: {},
  },
};

export const JoyListItemButton = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      gap: tokens.spacing.md,
      fontSize: "0.875rem",
      fontWeight: 500,
      color: resolve("{alias.text-primary}"),
      transition: "background-color 150ms",
      "&:hover": {
        backgroundColor: resolve("{alias.bg-tertiary}"),
      },
      "&.Joy-selected": {
        backgroundColor: resolve("{alias.bg-brand-tertiary}"),
        color: resolve("{alias.text-brand}"),
      },
      "&.Joy-disabled": {
        opacity: 0.5,
      },
      "&:focus-visible": {
        outlineOffset: -2,
        outline: `2px solid ${resolve("{alias.border-brand}")}`,
      },
    },
  },
};

export const JoyListDivider = {
  styleOverrides: {
    root: {
      "--Divider-lineColor": resolve("{alias.border-default}"),
    },
  },
};

export const JoyListSubheader = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: resolve("{alias.text-tertiary}"),
      paddingInline: tokens.spacing.md,
      paddingBlock: tokens.spacing.xs,
    },
  },
};
