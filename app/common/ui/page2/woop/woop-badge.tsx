import { Box, Typography } from "@mui/material";
import React from "react";
import { ColorPalette } from "@/app/common/styles/color-palette";
import { WoopBadgeStyles } from "./styles";

interface WoopBadgeBaseProps {
  content: React.ReactNode;
  width?: number;
  height?: number;
  size?: "M" | "S";
  color?: string;
  textColor?: string;
  outlined?: boolean;
}

// 基础徽章组件
const WoopBadgeBase = ({
  content,
  width,
  height,
  size = "S",
  color = ColorPalette.AccentOrange.accent2Primary,
  textColor = ColorPalette.Greyscale.white,
  outlined = false,
}: WoopBadgeBaseProps) => {
  const variant = outlined ? "outlined" : "filled";

  return (
    <Box
      sx={{
        ...WoopBadgeStyles.baseStyles,
        width: width || "fit-content",
        height: height || "fit-content",
        ...WoopBadgeStyles.variantStyles[variant](color, textColor),
      }}
    >
      <Typography
        sx={{
          ...WoopBadgeStyles.textStyles,
          ...WoopBadgeStyles.sizeStyles[size],
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

// 数字徽章组件
const WoopNumberBadge = ({
  number,
  maxNumber = 99,
  ...props
}: Omit<WoopBadgeBaseProps, "content"> & {
  number: number;
  maxNumber?: number;
}) => {
  const displayNumber =
    number > maxNumber ? `${maxNumber}+` : number.toString();
  return <WoopBadgeBase content={displayNumber} {...props} />;
};

// 文本徽章组件
const WoopBadge = ({ content, ...props }: WoopBadgeBaseProps) => (
  <WoopBadgeBase content={content} {...props} />
);

export { WoopBadge, WoopNumberBadge };
