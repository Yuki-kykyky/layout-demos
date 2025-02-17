import { Container, Box, Stack } from "@mui/material";
import React from "react";
import { Title } from "@/app/common/ui/title";
import { SearchInput } from "@/app/common/ui/text-input";
import { ChipTag } from "@/app/common/ui/tag";
import { VerticalCard } from "@/app/common/ui/card";

export default function TopDestinationsV3() {
  const destinations = [
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      date: "Golden Bridge, Da Nang",
      category: "Asia",
    },
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      date: "Golden Bridge, Da Nang",
      category: "Asia",
    },
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      date: "Golden Bridge, Da Nang",
      category: "Asia",
    },
    {
      imgSrc: "/goooose9.jpg",
      title: "Vietnam",
      date: "Golden Bridge, Da Nang",
      category: "Asia",
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
        <Title>Top Destinations</Title>

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
                date={destination.date}
                category={destination.category}
              />
            ))}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
