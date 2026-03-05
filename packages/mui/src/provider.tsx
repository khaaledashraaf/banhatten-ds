import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { banhattenTheme } from "./theme";

export interface BanhattenMuiProviderProps {
  children: React.ReactNode;
  /** Inject CssBaseline for global resets. Defaults to true. */
  cssBaseline?: boolean;
}

export function BanhattenMuiProvider({
  children,
  cssBaseline = true,
}: BanhattenMuiProviderProps) {
  return (
    <ThemeProvider theme={banhattenTheme}>
      {cssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
}
