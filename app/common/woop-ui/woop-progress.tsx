import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Stack,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import { ELevelType, getColor } from "@/app/common/styles/types";

export const WoopProgressBar = ({
  progress,
  type,
  color,
  showLabel = false,
  labelFontSize = 12,
  suffixLabel = "",
}: {
  progress: number;
  type: ELevelType;
  color?: string;
  showLabel?: boolean;
  labelFontSize?: number;
  suffixLabel?: string;
}) => {
  return (
    <Box>
      {showLabel && (
        <Stack direction="row" gap={1} alignItems="center">
          <Typography
            variant="body2"
            fontSize={labelFontSize}
            fontWeight="600"
            flexShrink={0}
            width={labelFontSize * 2}
            mr={1}
            sx={{
              color: color || getColor(type),
            }}
          >
            {Math.round(progress)}%
          </Typography>
          <Typography
            variant="body2"
            fontSize={labelFontSize * 0.6}
            fontWeight="600"
            sx={{
              color: color || getColor(type),
            }}
          >
            {suffixLabel}
          </Typography>
        </Stack>
      )}
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
            backgroundColor: color || getColor(type),
          },
        }}
      />
    </Box>
  );
};
