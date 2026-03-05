import { extendTheme } from "@mui/joy/styles";
import { colorSchemes } from "./palette";
import { fontFamilyConfig, typographyConfig } from "./typography";
import { components } from "./components";
import { tokens } from "./tokens";

export const banhattenJoyTheme = extendTheme({
  colorSchemes,
  fontFamily: fontFamilyConfig,
  typography: typographyConfig,
  radius: {
    xs: tokens.radius.xxs,
    sm: tokens.radius.xs,
    md: tokens.radius.sm,
    lg: tokens.radius.md,
    xl: tokens.radius.lg,
  },
  shadow: {
    xs: tokens.shadow.xs,
    sm: tokens.shadow.sm,
    md: tokens.shadow.md,
    lg: tokens.shadow.lg,
    xl: tokens.shadow.xl,
  },
  components,
});

export { tokens };
