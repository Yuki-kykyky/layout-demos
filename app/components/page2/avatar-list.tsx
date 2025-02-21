import { ColorPalette } from "@/app/common/styles/color-palette";
import { AvatarSize, WoopAvatar } from "@/app/common/ui/page2/woop/woop-avatar";
import { AddBox } from "@mui/icons-material";
import { Divider, Stack } from "@mui/material";
import React from "react";

// 定义头像配置类型
interface AvatarConfig {
  size: keyof typeof AvatarSize;
  variants: {
    imgSrc?: string;
    text?: string;
    icon?: React.ReactNode;
    bgColor?: string;
    contentColor?: string;
  }[];
}
// 定义头像组配置
const avatarGroups: AvatarConfig[] = ["S", "M", "L", "XL"].map((size) => {
  return {
    size: size as keyof typeof AvatarSize,
    variants: [
      { imgSrc: "/goooose14.jpg" },
      { text: "HL" },
      {
        icon: <AddBox />,
        bgColor: ColorPalette.AccentViolet.accent1Primary,
        contentColor: ColorPalette.AccentViolet.accent1Quaternary,
      },
    ],
  };
});

// 分隔线组件
const VerticalDivider = () => (
  <Divider
    orientation="vertical"
    flexItem
    sx={{ width: 4, bgcolor: ColorPalette.Greyscale.dividers }}
  />
);

// 头像列表组件
export const AvatarList = () => {
  // 渲染单个头像组
  const renderAvatarGroup = (config: AvatarConfig, badged: boolean) => (
    <>
      {config.variants.map((variant, index) => (
        <WoopAvatar
          key={`${config.size}-${index}-${badged.toString()}`}
          size={config.size}
          badged={badged}
          {...variant}
        />
      ))}
      {config.size !== "XL" && <VerticalDivider />}
    </>
  );

  // 渲染所有头像组
  const renderAvatarGroups = (badged: boolean) => (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      borderBottom={`2px solid ${ColorPalette.Greyscale.dividers}`}
      pb={2}
    >
      {avatarGroups.map((group) => (
        <Stack direction="row" gap={2} key={group.size}>
          {renderAvatarGroup(group, badged)}
        </Stack>
      ))}
    </Stack>
  );
  return (
    <>
      {renderAvatarGroups(false)} {/* 无徽章版本 */}
      {renderAvatarGroups(true)} {/* 有徽章版本 */}
    </>
  );
};
