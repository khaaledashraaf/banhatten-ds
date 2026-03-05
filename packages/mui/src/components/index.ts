import type { Components, Theme } from "@mui/material/styles";

import { MuiButton, MuiIconButton } from "./button";
import {
  MuiTextField,
  MuiOutlinedInput,
  MuiInputLabel,
  MuiFormHelperText,
  MuiInputAdornment,
} from "./text-field";
import { MuiCheckbox } from "./checkbox";
import { MuiRadio } from "./radio";
import { MuiSwitch } from "./switch";
import { MuiAlert } from "./alert";
import { MuiChip } from "./chip";
import { MuiAvatar, MuiAvatarGroup } from "./avatar";
import { MuiTooltip } from "./tooltip";
import {
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
} from "./accordion";
import { MuiSlider } from "./slider";
import { MuiLinearProgress, MuiCircularProgress } from "./progress";
import { MuiDivider } from "./divider";
import { MuiSelect, MuiMenu, MuiMenuItem } from "./select";
import { MuiBreadcrumbs } from "./breadcrumbs";
import { MuiBadge } from "./badge";
import {
  MuiPaper,
  MuiCard,
  MuiCardContent,
  MuiCardHeader,
  MuiDialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  MuiDrawer,
} from "./surfaces";
import {
  MuiLink,
  MuiTabs,
  MuiTab,
  MuiSkeleton,
  MuiAppBar,
  MuiToolbar,
  MuiTableHead,
  MuiTableCell,
  MuiTableRow,
  MuiFormControlLabel,
  MuiSnackbar,
} from "./misc";

export const components: Components<Theme> = {
  MuiButton,
  MuiIconButton,
  MuiTextField,
  MuiOutlinedInput,
  MuiInputLabel,
  MuiFormHelperText,
  MuiInputAdornment,
  MuiCheckbox,
  MuiRadio,
  MuiSwitch,
  MuiAlert,
  MuiChip,
  MuiAvatar,
  MuiAvatarGroup,
  MuiTooltip,
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
  MuiSlider,
  MuiLinearProgress,
  MuiCircularProgress,
  MuiDivider,
  MuiSelect,
  MuiMenu,
  MuiMenuItem,
  MuiBreadcrumbs,
  MuiBadge,
  MuiPaper,
  MuiCard,
  MuiCardContent,
  MuiCardHeader,
  MuiDialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  MuiDrawer,
  MuiLink,
  MuiTabs,
  MuiTab,
  MuiSkeleton,
  MuiAppBar,
  MuiToolbar,
  MuiTableHead,
  MuiTableCell,
  MuiTableRow,
  MuiFormControlLabel,
  MuiSnackbar,
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarColor: "#c1c1c1 transparent",
        "&::-webkit-scrollbar": { width: 8 },
        "&::-webkit-scrollbar-thumb": { borderRadius: 4, backgroundColor: "#c1c1c1" },
      },
    },
  },
};
