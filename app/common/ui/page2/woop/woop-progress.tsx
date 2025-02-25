import { LinearProgress, linearProgressClasses } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";

export enum ProgressBarType {
  Primary = "Primary",
  Secondary = "Secondary",
  Tertiary = "Tertiary",
}

export const WoopProgressBar = ({
  progress,
  type,
}: {
  progress: number;
  type: ProgressBarType;
}) => {
  const getColor = (type: ProgressBarType) => {
    switch (type) {
      case ProgressBarType.Primary:
        return (theme: Theme) => theme.palette.primary.main;
      case ProgressBarType.Secondary:
        return (theme: Theme) => theme.palette.primary.light;
      case ProgressBarType.Tertiary:
        return (theme: Theme) => theme.palette.violet.contrastText;
    }
  };

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 8,
        borderRadius: 4,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: (theme: Theme) => theme.palette.divider,
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 4,
          backgroundColor: getColor(type),
        },
      }}
    />
  );
};
