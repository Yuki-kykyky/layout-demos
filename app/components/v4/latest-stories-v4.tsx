import { Container, Stack, Box } from "@mui/material";
import React from "react";
import { v4 } from "@/app/constants/v4";
import { HeaderTitle } from "@/app/common/ui/titles";
import { HeaderButton } from "@/app/common/ui/buttons";
import { InfoCard } from "@/app/common/ui/cards";
import { DetailTitle } from "@/app/common/ui/titles";
import { ItemDescription, BaseDescription } from "@/app/common/ui/descriptions";

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
                  borderRadius: 2,
                }}
              />
              <DetailTitle>{v4.latestStories.details.detailTitle}</DetailTitle>
              <ItemDescription
                description={v4.latestStories.details.itemDescription}
              />
<BaseDescription
                description={v4.latestStories.details.baseDescription}
              />

            </Stack>

            {/* Right Section - Info Cards */}
            <Stack spacing={3} flex={1}>
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
