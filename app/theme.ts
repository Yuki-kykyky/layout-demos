import { createTheme } from "@mui/material/styles";
import { ColorPalette, ColorPaletteDark } from "./common/styles/color-palette";

declare module "@mui/material/styles" {
  interface Palette {
    violet: Palette["primary"];
  }

  interface PaletteOptions {
    violet?: PaletteOptions["primary"];
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
    text: {
      primary: ColorPalette.Greyscale.textPrimary,
      secondary: ColorPalette.Greyscale.textSecondary,
    },
    primary: {
      main: ColorPalette.AccentViolet.accent1Primary,
      light: ColorPalette.AccentViolet.accent1Quaternary,
      dark: ColorPalette.AccentViolet.clickState,
      contrastText: ColorPalette.Greyscale.white,
    },
    violet: {
      main: ColorPalette.AccentViolet.hoverState,
      light: ColorPalette.AccentViolet.accent1Primary,
      dark: ColorPalette.AccentViolet.clickState,
      contrastText: ColorPalette.Greyscale.white,
    },
    secondary: {
      main: ColorPalette.AccentOrange.accent2Primary,
      light: ColorPalette.AccentOrange.accent2Quaternary,
      dark: ColorPalette.AccentOrange.accent2Tertiary,
      contrastText: ColorPalette.Greyscale.white,
    },
    error: {
      main: ColorPalette.SystemColors.error,
      light: ColorPalette.SystemColors.errorTertiary,
      dark: ColorPalette.SystemColors.errorHover,
      contrastText: ColorPalette.Greyscale.white,
    },
    success: {
      main: ColorPalette.SystemColors.successful,
      light: ColorPalette.SystemColors.successfulTertiary,
      dark: ColorPalette.SystemColors.successfulHover,
      contrastText: ColorPalette.Greyscale.white,
    },
  },
  typography: {
    fontFamily: "Inter",
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
    text: {
      primary: ColorPaletteDark.Greyscale.white,
      secondary: ColorPaletteDark.Greyscale.textSecondary,
    },
    primary: {
      main: ColorPaletteDark.AccentViolet.accent1Primary,
      light: ColorPaletteDark.AccentViolet.accent1Quaternary,
      dark: ColorPaletteDark.AccentViolet.clickState,
      contrastText: ColorPaletteDark.Greyscale.white,
    },
    violet: {
      main: ColorPaletteDark.AccentViolet.hoverState,
      light: ColorPaletteDark.AccentViolet.accent1Primary,
      dark: ColorPaletteDark.AccentViolet.clickState,
      contrastText: ColorPaletteDark.Greyscale.white,
    },
    secondary: {
      main: ColorPaletteDark.AccentOrange.accent2Primary,
      light: ColorPaletteDark.AccentOrange.accent2Quaternary,
      dark: ColorPaletteDark.AccentOrange.accent2Tertiary,
      contrastText: ColorPaletteDark.Greyscale.white,
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export { lightTheme, darkTheme };
