import { Container, Stack, Box } from "@mui/material";
import React from "react";
import { v4 } from "@/app/constants/v4";
import { HeaderTitle } from "@/app/common/ui/titles";
import { SearchInput } from "@/app/common/ui/text-input";
import { ChipTag } from "@/app/common/ui/tags";
import { VerticalCard } from "@/app/common/ui/cards";

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
          <Stack direction="row" spacing={4} justifyContent="center">
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
      </Box>
    </Container>
  );
}
