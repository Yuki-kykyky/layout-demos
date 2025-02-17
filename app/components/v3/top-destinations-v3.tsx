import { Container, Box, Stack } from "@mui/material";
import React from "react";
import { HeaderTitle } from "@/app/common/ui/titles";
import { SearchInput } from "@/app/common/ui/text-input";
import { ChipTag } from "@/app/common/ui/tags";
import { VerticalCard } from "@/app/common/ui/cards";

export default function TopDestinationsV3() {
  const destinations = [
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      detailInfo: "Golden Bridge, Da Nang",
    },
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      detailInfo: "Golden Bridge, Da Nang",
    },
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      detailInfo: "Golden Bridge, Da Nang",
    },
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      detailInfo: "Golden Bridge, Da Nang",
    },
  ];

  const categories = [
    "category A",
    "category B",
    "category C",
    "category D",
    "category E",
    "category F",
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 7, bgcolor: "white" }}>
        <HeaderTitle>Top Destinations</HeaderTitle>

        <Stack spacing={3} sx={{ mt: 4 }}>
          {/* Operations Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Chips */}
            <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
              {categories.map((category, index) => (
                <ChipTag key={index} label={category} />
              ))}
            </Stack>

            {/* Search */}
            <SearchInput placeholder="search destinations..." />
          </Box>

          {/* Destinations Grid */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "space-between",
            }}
          >
            {destinations.map((destination, index) => (
              <VerticalCard
                key={index}
                imgSrc={destination.imgSrc}
                title={destination.title}
                detailInfo={destination.detailInfo}
              />
            ))}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
