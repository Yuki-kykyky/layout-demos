import { Stack, Typography } from "@mui/material";
import { BtnSize, BtnType, WoopAvatar, WoopBtn, WoopChip } from "../woop-ui";
import { VerticalCardProps } from "../woop-ui/cards/vertical-card";
import { ChipType } from "../woop-ui/woop-chip";
import {
  getRandomImage,
  getRandomName,
  getRandomJob,
  getRandomText,
  getRandomTitle,
  getRandomDate,
} from "./random-const";
import React from "react";

export const getRandomAvatarInfo = () => {
  const avatar = getRandomImage();
  const name = getRandomName();
  const job = getRandomJob();

  return (
    <Stack direction="row" spacing={2}>
      <WoopAvatar size="L" imgSrc={avatar} text={name} />
      <Stack>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{job}</Typography>
      </Stack>
    </Stack>
  );
};

export const getTags = () => {
  const tagCount = Math.floor(Math.random() * 4);

  return tagCount > 0 ? (
    <Stack direction="row" gap={1} mb={0.5} flexWrap="wrap">
      {Array.from({ length: tagCount }, (_, index) => (
        <WoopChip
          key={index}
          label={`Tag ${index + 1}`}
          type={ChipType.Outlined}
        />
      ))}
    </Stack>
  ) : null;
};

export const getBtnFooter = () => {
  const footerCount = Math.floor(Math.random() * 3);

  return footerCount > 0 ? (
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
  ) : null;
};

export const getVerticalCardGroups = () => {
  // 生成4-10之间的随机数作为卡片数量
  const groupCount = Math.floor(Math.random() * 7) + 4;

  const verticalCardGroups: VerticalCardProps[] = Array.from(
    { length: groupCount },
    () => ({
      image: getRandomImage(),
      description: getRandomText(),
      title: getRandomTitle(),
      headerSlot: getTags(),
      footerSlot: getBtnFooter(),
    })
  );

  return verticalCardGroups.map((item, index) => ({
    id: "vertical-card-" + index,
    ...item,
  }));
};

export const getVerticalCardWithoutImageGroups = () => {
  const groupCount = Math.floor(Math.random() * 12) + 4;

  const dates = Array.from({ length: groupCount }, () => getRandomDate()).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  const verticalCardGroups: VerticalCardProps[] = Array.from(
    { length: groupCount },
    (_, index) => ({
      description: getRandomText(),
      headerSlot: getRandomAvatarInfo(),
      isTruncated: false,
      footerSlot: (
        <Typography variant="body2" color="text.secondary">
          {dates[index]}
        </Typography>
      ),
    })
  );

  return verticalCardGroups;
};

export const getHorizontalCard = () => {
  return {
    image: getRandomImage(),
    pictureSize: 450,
    title: getRandomTitle(),
    headerSlot: getTags(),
    description: getRandomText(),
    footerSlot: getBtnFooter(),
  };
};
