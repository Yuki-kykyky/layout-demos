import { ColorPalette } from "@/app/common/styles/color-palette";
import { HorizontalCard } from "@/app/common/ui/page2/woop/cards/horizontal-card";
import { VerticalCard } from "@/app/common/ui/page2/woop/cards/vertical-card";
import { WoopBtn } from "@/app/common/ui/page2/woop/woop-btn";
import { BtnSize, BtnType } from "@/app/common/ui/page2/woop/woop-btn-base";
import { ChipType, WoopChip } from "@/app/common/ui/page2/woop/woop-chip";
import { WoopIconBtn } from "@/app/common/ui/page2/woop/woop-icon-btn";
import {
  AccessTime,
  DeleteOutline,
  EditOutlined,
  FavoriteOutlined,
  Star,
  CalendarMonthOutlined,
  CopyAll,
  Close,
} from "@mui/icons-material";
import { Divider, Stack, Typography, Box } from "@mui/material";
import React from "react";

export const floatIcon = (
  <FavoriteOutlined sx={{ color: (theme) => theme.palette.white }} />
);

export const tags = (
  <Stack direction="row" gap={1} mb={0.5} flexWrap="wrap">
    <WoopChip label="Tag 1" type={ChipType.Secondary} />
    <WoopChip label="Tag 2" type={ChipType.Secondary} />
    <WoopChip label="Tag 3" type={ChipType.Secondary} />
  </Stack>
);

export const getFooter = (type: "vertical" | "horizontal") => (
  <Stack
    direction="row"
    mt={0.5}
    justifyContent="space-between"
    flexDirection={type === "vertical" ? "row" : "row-reverse"}
  >
    <WoopBtn buttonText="2500" size={BtnSize.S} type={BtnType.Primary} />
    <Stack direction="row" spacing={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <AccessTime sx={{ color: "#2D5BFF" }} />
        <Typography variant="body1" color="text.secondary">
          4 years
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Star sx={{ color: "#F7D523" }} />
        <Typography variant="body1" color="text.secondary">
          4.9
        </Typography>
      </Stack>
    </Stack>
  </Stack>
);

const iconsAttachment = (
  <Stack gap={1}>
    <WoopIconBtn
      sx={{
        px: "10px",
      }}
      type={BtnType.Secondary}
      icon={<EditOutlined />}
      size={BtnSize.S}
    />
    <WoopIconBtn
      sx={{
        px: "10px",
      }}
      type={BtnType.Secondary}
      icon={<CalendarMonthOutlined />}
      size={BtnSize.S}
    />
    <WoopIconBtn
      sx={{
        p: 1,
        bgcolor: ColorPalette.SystemColors.errorTertiary,
        color: ColorPalette.SystemColors.error,
      }}
      type={BtnType.Secondary}
      icon={<DeleteOutline />}
      size={BtnSize.S}
    />
  </Stack>
);
const iconTextAttachment = (
  <Stack
    sx={{
      borderLeft: (theme) => `1px solid ${theme.palette.grey[200]}`,
      gap: 1,
    }}
  >
    <WoopBtn
      buttonText="Action"
      size={BtnSize.S}
      type={BtnType.Tertiary}
      startIcon={<CopyAll />}
    />
    <WoopBtn
      buttonText="Cancel"
      sx={{
        color: ColorPalette.SystemColors.error,
        "&:hover": {
          bgcolor: ColorPalette.Background.bgLight,
        },
        "&:active": {
          color: ColorPalette.SystemColors.error,
          bgcolor: ColorPalette.Background.bgLight,
        },
      }}
      size={BtnSize.S}
      type={BtnType.Tertiary}
      startIcon={<Close sx={{ color: ColorPalette.SystemColors.error }} />}
    />
  </Stack>
);
export const CardList = () => {
  const verticalCards = [
    { description: "just a card content" },
    {
      headerSlot: tags,
      description: "card content with header tags, with float icon",
      floatIcon,
    },
    {
      description: "card content with footer",
      footerSlot: getFooter("vertical"),
    },
    {
      floatIcon,
      headerSlot: tags,
      description: "card content with header tags and footer, with float icon",
      footerSlot: getFooter("vertical"),
    },
  ];

  const horizontalCards = [
    { description: "just a horizontal card content" },
    {
      floatIcon,
      headerSlot: tags,
      description: "horizontal card content with header tags, with float icon",
    },
    {
      description: "horizontal card content with footer",
      footerSlot: getFooter("horizontal"),
    },
    {
      floatIcon,
      headerSlot: tags,
      description:
        "horizontal card content with header tags and footer, with float icon",
      footerSlot: getFooter("horizontal"),
    },
  ];

  return (
    <Stack
      gap={2}
      direction="row"
      alignItems="flex-start"
      flexWrap="wrap"
      justifyContent="center"
    >
      {verticalCards.map((cardProps, index) => (
        <VerticalCard
          key={index}
          image="/goooose30.jpg"
          pictureSize={312}
          title="Card title"
          {...cardProps}
        />
      ))}
      <Divider sx={{ width: "100%", my: 2 }} />
      {horizontalCards.map((cardProps, index) => (
        <Box key={index}>
          <HorizontalCard
            key={index}
            image="/goooose30.jpg"
            pictureSize={180}
            title="Card title"
            {...cardProps}
          />
        </Box>
      ))}
      <Divider sx={{ width: "100%", my: 2 }} />
      <Box>
        <HorizontalCard
          image="/goooose30.jpg"
          pictureSize={180}
          headerSlot={tags}
          footerSlot={getFooter("horizontal")}
          title="Card title"
          description="Card description with right attached section here"
          rightAttachedSlot={iconsAttachment}
        />
      </Box>
      <Box>
        <HorizontalCard
          image="/goooose30.jpg"
          pictureSize={180}
          headerSlot={tags}
          footerSlot={getFooter("horizontal")}
          title="Card title"
          description="Card description"
          rightAttachedSlot={iconTextAttachment}
        />
      </Box>
    </Stack>
  );
};
