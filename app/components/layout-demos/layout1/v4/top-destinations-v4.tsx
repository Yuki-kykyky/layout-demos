import { Container, Stack, Box } from "@mui/material";
import React from "react";
import { v4 } from "@/app/reference-const/v4";
import { HeaderTitle } from "@/app/common/components/titles";
import { SearchInput } from "@/app/common/components/text-input";
import { ChipTag } from "@/app/common/components/tags";
import { VerticalCard } from "@/app/common/components/cards";

export default function TopDestinationsV4() {
  return (
    <Container maxWidth="lg">
      <Box p={6}>
        <Stack spacing={4}>
          {/* Header */}
          <HeaderTitle>{v4.topDestinations.headerTitle}</HeaderTitle>

          {/* Operations Bar */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Chips */}
            <Stack direction="row" spacing={2}>
              {v4.topDestinations.operationBar.chipLabels.map(
                (label, index) => (
                  <ChipTag key={index} label={label} />
                )
              )}
            </Stack>

            {/* Search */}
            <SearchInput
              placeholder={
                v4.topDestinations.operationBar.searchInputPlaceholder
              }
            />
          </Stack>

          {/* Cards */}
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            overflow="auto"
            sx={{
              pb: 2,
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#E0E0E0",
                borderRadius: "4px",
              },
            }}
          >
            <Stack direction="row" spacing={4}>
              {v4.topDestinations.verticalCards.map((card, index) => (
                <VerticalCard
                  key={index}
                  imgSrc={card.imageSrc}
                  title={card.title}
                  detailInfo={card.detailInfo}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
