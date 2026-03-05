/* eslint-disable @typescript-eslint/no-empty-object-type */

import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
    linkBrand: true;
  }

  interface ButtonPropsSizeOverrides {
    extraLarge: true;
    jumbo: true;
  }
}

export {};
