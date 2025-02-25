import { createTheme } from "@mui/material/styles";
import { ColorPalette, ColorPaletteDark } from "./common/styles/color-palette";

declare module "@mui/material/styles" {
  interface Palette {
    violet: Palette["primary"];
    disabled: Palette["divider"];
    white: Palette["divider"];
  }

  interface PaletteOptions {
    violet?: PaletteOptions["primary"];
    disabled?: PaletteOptions["divider"];
    white?: PaletteOptions["divider"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    violet: true;
  }
}

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: ColorPalette.Background.bgLight,
      paper: ColorPalette.Background.bgDarken,
    },
    divider: ColorPalette.Greyscale.dividers,
    disabled: ColorPalette.Greyscale.disabledText,
    white: ColorPalette.Greyscale.white,
    text: {
      primary: ColorPalette.Greyscale.textPrimary,
      secondary: ColorPalette.Greyscale.textSecondary,
    },
    primary: {
      main: ColorPalette.AccentViolet.accent1Primary,
      light: ColorPalette.AccentViolet.accent1Secondary,
      dark: ColorPalette.AccentViolet.clickState,
      contrastText: ColorPalette.AccentViolet.accent1Quaternary,
    },
    violet: {
      main: ColorPalette.AccentViolet.hoverState,
      light: ColorPalette.AccentViolet.accent1Primary,
      dark: ColorPalette.AccentViolet.clickState,
      contrastText: ColorPalette.AccentViolet.accent1Tertiary,
    },
    secondary: {
      main: ColorPalette.AccentOrange.accent2Primary,
      light: ColorPalette.AccentOrange.accent2Quaternary,
      dark: ColorPalette.AccentOrange.accent2Tertiary,
      contrastText: ColorPalette.Greyscale.white,
    },
    error: {
      main: ColorPalette.SystemColors.error,
      light: ColorPalette.SystemColors.errorSecondary,
      dark: ColorPalette.SystemColors.errorHover,
      contrastText: ColorPalette.SystemColors.errorTertiary,
    },
    success: {
      main: ColorPalette.SystemColors.successful,
      light: ColorPalette.SystemColors.successfulSecondary,
      dark: ColorPalette.SystemColors.successfulHover,
      contrastText: ColorPalette.SystemColors.successfulTertiary,
    },
  },
  typography: {
    fontFamily: "Inter",
    subtitle2: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 800,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 400,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ColorPaletteDark.Background.bgDarken,
      paper: ColorPaletteDark.Background.bgLight,
    },
    divider: ColorPaletteDark.Greyscale.dividers,
    disabled: ColorPaletteDark.Greyscale.disabledText,
    white: ColorPaletteDark.Greyscale.white,
    text: {
      primary: ColorPaletteDark.Greyscale.white,
      secondary: ColorPaletteDark.Greyscale.textSecondary,
    },
    primary: {
      main: ColorPaletteDark.AccentViolet.accent1Primary,
      light: ColorPaletteDark.AccentViolet.accent1Secondary,
      dark: ColorPaletteDark.AccentViolet.clickState,
      contrastText: ColorPaletteDark.AccentViolet.accent1Quaternary,
    },
    violet: {
      main: ColorPaletteDark.AccentViolet.hoverState,
      light: ColorPaletteDark.AccentViolet.accent1Primary,
      dark: ColorPaletteDark.AccentViolet.clickState,
      contrastText: ColorPaletteDark.AccentViolet.accent1Tertiary,
    },
    secondary: {
      main: ColorPaletteDark.AccentOrange.accent2Primary,
      light: ColorPaletteDark.AccentOrange.accent2Quaternary,
      dark: ColorPaletteDark.AccentOrange.accent2Tertiary,
      contrastText: ColorPaletteDark.Greyscale.white,
    },
    error: {
      main: ColorPaletteDark.SystemColors.error,
      light: ColorPaletteDark.SystemColors.errorSecondary,
      dark: ColorPaletteDark.SystemColors.errorHover,
      contrastText: ColorPaletteDark.SystemColors.errorTertiary,
    },
    success: {
      main: ColorPaletteDark.SystemColors.successful,
      light: ColorPaletteDark.SystemColors.successfulSecondary,
      dark: ColorPaletteDark.SystemColors.successfulHover,
      contrastText: ColorPaletteDark.SystemColors.successfulTertiary,
    },
  },
  typography: {
    fontFamily: "Inter",
    subtitle2: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 800,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 400,
    },
  },
});

export { lightTheme, darkTheme };
