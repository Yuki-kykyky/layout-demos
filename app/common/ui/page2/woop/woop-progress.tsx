import { LinearProgress, linearProgressClasses } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import { ELevelType, getColor } from "@/app/common/styles/types";
export const WoopProgressBar = ({
  progress,
  type,
}: {
  progress: number;
  type: ELevelType;
}) => {
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
