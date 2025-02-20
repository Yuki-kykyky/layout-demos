import { createTheme } from "@mui/material/styles";
import { ColorPalette, ColorPaletteDark } from "./common/styles/color-palette";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: ColorPalette.Background.bgLight,
      paper: ColorPalette.Background.bgDarken,
    },
    text: {
      primary: ColorPalette.Greyscale.textPrimary,
      secondary: ColorPalette.Greyscale.textSecondary,
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
    text: {
      primary: ColorPaletteDark.Greyscale.white,
      secondary: ColorPaletteDark.Greyscale.textSecondary,
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export { lightTheme, darkTheme };
