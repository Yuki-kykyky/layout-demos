import { Button } from "@mui/material";
import React from "react";
import { WoopBtnStyles } from "./styles";

export function WoopBtn({
  buttonText,
  type = "Primary",
  size = "L",
  startIcon,
  endIcon,
  disabled = false,
}: {
  buttonText: string;
  type?: "Primary" | "Secondary" | "Tertiary";
  size?: "L" | "M" | "S" | "XS";
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
