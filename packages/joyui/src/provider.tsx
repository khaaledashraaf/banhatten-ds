import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { banhattenJoyTheme } from "./theme";

export interface BanhattenJoyProviderProps {
  children: React.ReactNode;
  /** Inject CssBaseline for global resets. Defaults to true. */
  cssBaseline?: boolean;
}

export function BanhattenJoyProvider({
  children,
  cssBaseline = true,
}: BanhattenJoyProviderProps) {
  return (
    <CssVarsProvider theme={banhattenJoyTheme}>
      {cssBaseline && <CssBaseline />}
      {children}
    </CssVarsProvider>
  );
}
