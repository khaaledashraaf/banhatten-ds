import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { shadows } from "./shadows";
import { components } from "./components";
import { tokens } from "./tokens";

export const banhattenTheme = createTheme({
  palette,
  typography,
  shadows,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components,
  transitions: {
    duration: {
      shortest: 100,
      shorter: 150,
      short: 200,
      standard: 250,
      complex: 300,
      enteringScreen: 200,
      leavingScreen: 150,
    },
  },
});

export { tokens };
