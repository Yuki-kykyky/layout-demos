import { ButtonProps, SxProps } from "@mui/material";
import React from "react";
import { BtnSize, BtnType, WoopBtnBase } from "./woop-btn-base";

export interface WoopBtnProps {
  buttonText: string;
  size?: BtnSize;
  type?: BtnType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: SxProps;
  onClick?: () => void;
  props?: ButtonProps;
}

export function WoopBtn({
  buttonText,
  size = BtnSize.L,
  type = BtnType.Filled,
  startIcon,
  endIcon,
  sx,
  onClick,
  ...props
}: WoopBtnProps) {
  return (
    <WoopBtnBase
      size={size}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      onClick={onClick}
      {...props}
    >
      {buttonText}
    </WoopBtnBase>
  );
}
