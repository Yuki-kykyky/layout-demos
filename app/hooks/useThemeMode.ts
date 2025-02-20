import { PaletteMode, useTheme } from "@mui/material";
import { ColorPalette } from "@/app/common/styles/color-palette";
export function useThemeMode() {
  const theme = useTheme();
  return theme.palette.mode;
}
export function switchColor(themeMode: PaletteMode, lightColor: string) {
  return themeMode === "dark" ? ColorPalette.Greyscale.white : lightColor;
}
