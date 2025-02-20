import { ButtonProps } from "@mui/material";
import React from "react";
import { BtnSize, BtnType, WoopBtnBase } from "./woop-btn-base";

export function WoopBtn({
  buttonText,
  size = BtnSize.L,
  type = BtnType.Primary,
  startIcon,
  endIcon,
  ...props
}: {
  buttonText: string;
  size?: BtnSize;
  type?: BtnType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  props?: ButtonProps;
}) {
  return (
    <WoopBtnBase
      size={size}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {buttonText}
    </WoopBtnBase>
  );
}
