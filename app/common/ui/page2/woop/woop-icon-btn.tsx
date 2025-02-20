import React, { useState } from "react";
import { BtnSize, BtnType, WoopBtnBase } from "./woop-btn-base";
import { ButtonProps, SxProps } from "@mui/material";

export function WoopIconBtn({
  type = BtnType.Primary,
  size = BtnSize.L,
  disabled = false,
  icon,
  activeIcon,
  sx,
  ...props
}: {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  type?: BtnType;
  size?: BtnSize;
  disabled?: boolean;
  props?: ButtonProps;
  sx?: SxProps;
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
      {...props}
    >
      {isActive ? activeIcon : icon}
    </WoopBtnBase>
  );
}
