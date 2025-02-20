import { Button } from "@mui/material";
import React from "react";
import { WoopBtnStyles } from "./styles";

export enum BtnType {
  Primary = "Primary",
  Secondary = "Secondary",
  Tertiary = "Tertiary",
}
export enum BtnSize {
  L = "L",
  M = "M",
  S = "S",
  XS = "XS",
}

export function WoopBtn({
  buttonText,
  type = BtnType.Primary,
  size = BtnSize.L,
  startIcon,
  endIcon,
  disabled = false,
}: {
  buttonText: string;
  type?: BtnType;
  size?: BtnSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <Button
      disableRipple
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        ...WoopBtnStyles.baseStyles,
        ...WoopBtnStyles.typeStyles[type],
        ...WoopBtnStyles.sizeStyles[size],
        "&:hover": {
          ...WoopBtnStyles.typeStyles[type]["&:hover"],
        },
        "&:active": {
          ...WoopBtnStyles.typeStyles[type]["&:active"],
        },
      }}
      variant={
        WoopBtnStyles.typeStyles[type].variant as
          | "contained"
          | "outlined"
          | "text"
      }
    >
      {buttonText}
    </Button>
  );
}
