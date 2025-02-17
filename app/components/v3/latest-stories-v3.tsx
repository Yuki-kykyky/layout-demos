import { Container, Box } from "@mui/material";
import React from "react";
import { HeaderTitle, DetailTitle } from "@/app/common/ui/titles";
import { HeaderButton } from "@/app/common/ui/buttons";
import { InfoCard } from "@/app/common/ui/cards";
import { BaseDescription, ItemDescription } from "@/app/common/ui/descriptions";

export default function LatestStoriesV3() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 7, bgcolor: "white" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 8 }}>
          <HeaderTitle>Latest Stories</HeaderTitle>
          <HeaderButton buttonText="READ MORE ARTICLES" />
        </Box>

        {/* Content */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* Featured Story */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src="/goooose9.jpg"
              sx={{
                width: "100%",
                height: 322,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <DetailTitle>
              Los Angeles food & drink guide: 10 things to try in Los Angeles,
              California
            </DetailTitle>
            <ItemDescription
              sx={{ mb: 1 }}
              description="Jan 14, 2024 • 5 min read"
            />
            <BaseDescription description="A guide for a California's incredible eats: from street food to upscale dining, discover the best LA has to offer." />
          </Box>

          {/* Story List */}
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}
          >
            {[1, 2, 3].map((_, index) => (
              <InfoCard
                key={index}
                imgSrc="/goooose9.jpg"
                category="shopping"
                title="15 South London Markets You'll Love: Best Markets in South London"
                date="Jan 14, 2024 • 5 min read"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
