import { WoopProgressBar } from "@/app/common/ui/page2/woop/woop-progress";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ELevelType } from "@/app/common/styles/types";
import { ColorPalette } from "@/app/common/styles/color-palette";

export const WoopCircularProgress = ({
  value,
  size = 56,
  color,
}: {
  value: number;
  size?: number;
  color?: string;
}) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgressWithLabel
        value={value}
        size={size}
        displaycolor={color}
      />
    </Box>
  );
};

function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number;
    size?: number;
    displaycolor?: string;
  }
) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: props.size,
        height: props.size,
      }}
    >
      <CircularProgress
        size={props.size}
        thickness={props.size ? props.size / 12 : 5}
        variant="determinate"
        sx={{
          color: props.displaycolor,
        }}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          fontWeight="600"
          fontSize={props.size ? props.size / 4 : 12}
          sx={{
            color: (theme: Theme) =>
              props.displaycolor || theme.palette.primary.main,
          }}
        >
          {Math.round(props.value)}%
        </Typography>
      </Box>
    </Box>
  );
}

export const ProgressList = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [circleProgress, setCircleProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCircleProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Stack gap={2} sx={{ width: "200px" }}>
      <WoopProgressBar
        progress={progress}
        type={ELevelType.Primary}
        showLabel
        suffixLabel="something more here"
      />
      <WoopProgressBar progress={progress} type={ELevelType.Secondary} />
      <WoopProgressBar
        progress={progress}
        type={ELevelType.Tertiary}
        color={ColorPalette.SystemColors.error}
        showLabel
      />
      <Stack direction="row" gap={2}>
        <WoopCircularProgress
          value={circleProgress}
          size={48}
          color={ColorPalette.SystemColors.successful}
        />
        <WoopCircularProgress
          value={circleProgress}
          size={36}
          color={ColorPalette.SystemColors.error}
        />
        <WoopCircularProgress value={circleProgress} size={56} />
      </Stack>
    </Stack>
  );
};
