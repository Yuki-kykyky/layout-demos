import { Badge, Box, styled, SxProps, Typography } from "@mui/material";
import React from "react";
import { ColorPalette } from "@/app/common/styles/color-palette";
import { WoopBadgeStyles } from "./styles";
import { AvatarSize } from "./woop-avatar";

export interface WoopBadgeBaseProps {
  content: React.ReactNode;
  width?: number;
  height?: number;
  size?: "M" | "S";
  color?: string;
  textColor?: string;
  outlined?: boolean;
  sx?: SxProps;
}

export interface StyledBadgeProps {
  size?: keyof typeof AvatarSize;
  rippling?: string;
  badgecolor?: string;
}

const StyledBadge = styled(Badge)<StyledBadgeProps>(
  ({
    theme,
    size = "M",
    rippling = "false",
    badgecolor = ColorPalette.SystemColors.successful,
  }) => ({
    "& .MuiBadge-badge": {
      width: size === "S" ? "8px" : AvatarSize[size] / 4,
      height: size === "S" ? "8px" : AvatarSize[size] / 4,
      borderRadius: "50%",
      backgroundColor: badgecolor,
      color: badgecolor,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        ...(rippling === "true" && {
          animation: "ripple 1.2s infinite ease-in-out",
          border: "1px solid currentColor",
          content: '""',
        }),
      },
    },
    ...(rippling === "true" && {
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(2.4)",
          opacity: 0,
        },
      },
    }),
  })
);
// 基础徽章组件
const WoopBadgeBase = ({
  content,
  width,
  height,
  size = "S",
  color = ColorPalette.AccentOrange.accent2Primary,
  textColor = ColorPalette.Greyscale.white,
  outlined = false,
  sx,
}: WoopBadgeBaseProps) => {
  const variant = outlined ? "outlined" : "filled";

  return (
    <Box
      sx={{
        ...WoopBadgeStyles.baseStyles,
        width: width || "fit-content",
        height: height || "fit-content",
        ...WoopBadgeStyles.variantStyles[variant](color, textColor),
        ...sx,
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

export { WoopBadge, WoopNumberBadge, StyledBadge };
