import { Button, ButtonProps } from "@mui/material";
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

export function WoopBtnBase({
  children,
  type = BtnType.Primary,
  size = BtnSize.L,
  disabled = false,
  startIcon,
  endIcon,
  onFocus,
  onBlur,
  ...props
}: {
  children: React.ReactNode;
  type?: BtnType;
  size?: BtnSize;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  props?: ButtonProps;
}) {
  return (
    <Button
      disableRipple
      disabled={disabled}
      {...props}
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
        "& .MuiSvgIcon-root": {
          ...WoopBtnStyles.iconBtnSizeStyles[size],
        },
      }}
      variant={
        WoopBtnStyles.typeStyles[type].variant as
          | "contained"
          | "outlined"
          | "text"
      }
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {startIcon && <span style={{ marginRight: "8px" }}>{startIcon}</span>}
      {children}
      {endIcon && <span style={{ marginLeft: "8px" }}>{endIcon}</span>}
    </Button>
  );
}
