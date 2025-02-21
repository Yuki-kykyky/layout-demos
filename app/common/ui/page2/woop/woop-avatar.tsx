import { ColorPalette } from "@/app/common/styles/color-palette";
import { Avatar, Typography } from "@mui/material";
import React from "react";
import { StyledBadge } from "./woop-badge";

export enum AvatarSize {
  S = 24,
  M = 32,
  L = 40,
  XL = 56,
}

export const WoopAvatar = ({
  size = "M",
  imgSrc,
  text,
  icon,
  bgColor = ColorPalette.Greyscale.disabledBg,
  contentColor = ColorPalette.Greyscale.disabledText,
  badged = false,
  badgecolor,
  rippling = false,
}: {
  size?: keyof typeof AvatarSize;
  imgSrc?: string;
  text?: string;
  icon?: React.ReactNode;
  bgColor?: string;
  contentColor?: string;
  badged?: boolean;
  badgecolor?: string;
  rippling?: boolean;
}) => {
  const getAvatarStyle = (
    size: keyof typeof AvatarSize,
    bgColor: string,
    contentColor: string
  ) => {
    return {
      width: AvatarSize[size],
      height: AvatarSize[size],
      bgcolor: bgColor,
      "& .MuiSvgIcon-root": {
        fontSize: AvatarSize[size] / 2,
        color: contentColor,
      },
    };
  };

  const renderAvatar = () => (
    <Avatar sx={getAvatarStyle(size, bgColor, contentColor)} src={imgSrc}>
      {text && (
        <Typography
          lineHeight={AvatarSize[size]}
          fontSize={AvatarSize[size] / 2}
          fontWeight={600}
          color={contentColor}
        >
          {text}
        </Typography>
      )}
      {icon && icon}
    </Avatar>
  );

  return (
    <>
      {badged ? (
        <StyledBadge
          size={size}
          rippling={rippling}
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
          badgecolor={badgecolor}
        >
          {renderAvatar()}
        </StyledBadge>
      ) : (
        renderAvatar()
      )}
    </>
  );
};
