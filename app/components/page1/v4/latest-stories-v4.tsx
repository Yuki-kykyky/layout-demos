import { Container, Stack, Box } from "@mui/material";
import React from "react";
import { v4 } from "@/app/constants/page1/v4";
import { HeaderTitle } from "@/app/common/ui/page1/titles";
import { HeaderButton } from "@/app/common/ui/page1/buttons";
import { InfoCard } from "@/app/common/ui/page1/cards";
import { DetailTitle } from "@/app/common/ui/page1/titles";
import {
  ItemDescription,
  BaseDescription,
} from "@/app/common/ui/page1/descriptions";

export default function LatestStoriesV4() {
  return (
    <Container maxWidth="lg">
      <Box p={6}>
        <Stack spacing={4}>
          {/* Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <HeaderTitle>{v4.latestStories.headerTitle}</HeaderTitle>
            <HeaderButton buttonText={v4.latestStories.headerButtonText} />
          </Stack>

          {/* Content */}
          <Stack direction="row" spacing={4}>
            {/* Left Section - Detail */}
            <Stack spacing={2} flex={1}>
              <Box
                component="img"
                src={v4.latestStories.details.imageSrc}
                sx={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
              <DetailTitle isTruncated lineClamp={2}>
                {v4.latestStories.details.detailTitle}
              </DetailTitle>
              <ItemDescription
                description={v4.latestStories.details.itemDescription}
                isTruncated
              />
              <BaseDescription
                description={v4.latestStories.details.baseDescription}
                isTruncated
                lineClamp={3}
              />
            </Stack>

            {/* Right Section - Info Cards */}
            <Stack
              spacing={3}
              flex={1}
              sx={{
                maxHeight: 536, // 与左侧图片高度保持一致
                overflowY: "auto",
                pr: 1,
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: "3px",
                },
              }}
            >
              {v4.latestStories.infoCards.map((card, index) => (
                <InfoCard
                  key={index}
                  imgSrc={card.imageSrc}
                  category={card.category}
                  title={card.title}
                  date={card.date}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
