import { HorizontalCard } from "@/app/common/ui/page2/woop/cards/horizontal-card";
import { VerticalCard } from "@/app/common/ui/page2/woop/cards/vertical-card";
import { WoopBtn } from "@/app/common/ui/page2/woop/woop-btn";
import { BtnSize, BtnType } from "@/app/common/ui/page2/woop/woop-btn-base";
import { ChipType, WoopChip } from "@/app/common/ui/page2/woop/woop-chip";
import { AccessTime, FavoriteOutlined, Star } from "@mui/icons-material";
import { Divider, Stack, Typography, Box } from "@mui/material";
import React from "react";

export const floatIcon = (
  <FavoriteOutlined
    sx={{ color: (theme) => theme.palette.primary.contrastText }}
  />
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
    </Stack>
  );
};
