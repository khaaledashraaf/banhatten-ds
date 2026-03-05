/* eslint-disable @typescript-eslint/no-empty-object-type */

import "@mui/joy/Button";

declare module "@mui/joy/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
    linkBrand: true;
  }

  interface ButtonPropsSizeOverrides {
    xl: true;
  }
}

export {};
