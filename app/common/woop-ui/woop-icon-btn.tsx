import { ButtonProps, SxProps } from "@mui/material";
import React, { useState } from "react";
import { BtnSize, BtnType, WoopBtnBase } from "./woop-btn-base";

export function WoopIconBtn({
  type = BtnType.Filled,
  size = BtnSize.L,
  disabled = false,
  icon,
  activeIcon,
  sx,
  onClick,
  ...props
}: {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  type?: BtnType;
  size?: BtnSize;
  disabled?: boolean;
  sx?: SxProps;
  onClick?: () => void;
  props?: ButtonProps;
}) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  return (
    <WoopBtnBase
      disabled={disabled}
      size={size}
      type={type}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={sx}
      onClick={onClick}
      {...props}
    >
      {activeIcon && isActive ? activeIcon : icon}
    </WoopBtnBase>
  );
}
