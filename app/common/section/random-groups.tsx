import { Stack } from "@mui/material";
import { BtnSize, BtnType, WoopBtn, WoopChip } from "../woop-ui";
import { VerticalCardProps } from "../woop-ui/cards/vertical-card";
import { ChipType } from "../woop-ui/woop-chip";
import { ImageSet, TextSet, TitleSet } from "./random-const";
import React from "react";

export const getTags = () => {
  const tagCount = Math.floor(Math.random() * 4);
  return (
    <Stack direction="row" gap={1} mb={0.5} flexWrap="wrap">
      {Array.from({ length: tagCount }, (_, index) => (
        <WoopChip
          key={index}
          label={`Tag ${index + 1}`}
          type={ChipType.Outlined}
        />
      ))}
    </Stack>
  );
};

export const getFooter = () => {
  const footerCount = Math.floor(Math.random() * 3);
  return (
    <Stack direction="row" gap={1} mb={0.5} flexWrap="wrap">
      {Array.from({ length: footerCount }, (_, index) => (
        <WoopBtn
          key={index}
          buttonText={`Button ${index + 1}`}
          type={index % 2 === 0 ? BtnType.Outlined : BtnType.Filled}
          size={BtnSize.S}
        />
      ))}
    </Stack>
  );
};

export const getVerticalCardGroups = () => {
  // 生成4-10之间的随机数作为卡片数量
  const groupCount = Math.floor(Math.random() * 7) + 4;

  const verticalCardGroups: VerticalCardProps[] = Array.from(
    { length: groupCount },
    () => ({
      // 随机选择一张图片
      image: ImageSet[Math.floor(Math.random() * ImageSet.length)],
      // 随机选择1-3段文本并拼接
      description: Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => TextSet[Math.floor(Math.random() * TextSet.length)]
      ).join(" "),
      // 随机选择一个标题
      title: TitleSet[Math.floor(Math.random() * TitleSet.length)],
      headerSlot: getTags(),
      footerSlot: getFooter(),
    })
  );

  return verticalCardGroups;
};
