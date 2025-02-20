import { useTheme } from "@mui/material";

export function useThemeMode() {
  const theme = useTheme();
  return theme.palette.mode;
}
