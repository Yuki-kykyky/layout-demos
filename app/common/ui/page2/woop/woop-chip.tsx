import { ColorPalette } from "@/app/common/styles/color-palette";
import CloseIcon from "@mui/icons-material/Close";
import { Chip, Stack } from "@mui/material";
import React from "react";
import { WoopChipStyles } from "./styles";

export enum ChipType {
  Primary = "Primary",
  Secondary = "Secondary",
}

export function WoopChip({
  label,
  type = ChipType.Primary,
  isClose = false,
  startIcon,
  endIcon,
  disabled = false,
  onClick,
}: {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: ChipType;
  isClose?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <Chip
      sx={{
        ...WoopChipStyles.baseStyles,
        ...WoopChipStyles.typeStyles[type],
        "&:hover": {
          ...WoopChipStyles.typeStyles[type]["&:hover"],
        },
        "&:active": {
          ...WoopChipStyles.typeStyles[type]["&:active"],
        },
        ...(isClose && {
          ...WoopChipStyles.typeStyles[type]["isClose"],
          ...(disabled && {
            border: `1px solid ${ColorPalette.Greyscale.disabledText}`,
          }),
        }),
        ...(disabled && WoopChipStyles.disabledStyles),
      }}
      onClick={disabled ? undefined : onClick}
      label={
        <Stack direction="row" alignItems="center" gap={1.5}>
          {startIcon}
          {label}
          {endIcon}
          {isClose && <CloseIcon />}
        </Stack>
      }
    />
  );
}
