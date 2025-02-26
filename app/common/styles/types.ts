import { Theme } from "@mui/material";

export enum ELevelType {
  Primary = "Primary",
  Secondary = "Secondary",
  Tertiary = "Tertiary",
}

export const getColor = (type: ELevelType) => {
  switch (type) {
    case ELevelType.Primary:
      return (theme: Theme) => theme.palette.primary.main;
    case ELevelType.Secondary:
      return (theme: Theme) => theme.palette.primary.light;
    default:
      return (theme: Theme) => theme.palette.violet.contrastText;
  }
};
