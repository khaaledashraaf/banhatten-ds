import { resolve } from "../tokens";

export const JoyDivider = {
  styleOverrides: {
    root: {
      "--Divider-lineColor": resolve("{alias.border-default}"),
    },
  },
};
