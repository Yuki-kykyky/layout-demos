import { HorizontalCard } from "@/app/common/ui/page2/woop/cards/horizontal-card";
import { VerticalCard } from "@/app/common/ui/page2/woop/cards/vertical-card";
import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { floatIcon, getFooter, iconsAttachment, iconTextAttachment, tags } from "@/app/common/section/common-section";

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
