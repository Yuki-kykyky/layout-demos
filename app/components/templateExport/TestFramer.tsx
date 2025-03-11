import { Box, Stack } from "@mui/material";
import { HeaderTitle } from "@/app/common/ui/page1/titles";
import { BaseDescription } from "@/app/common/ui/page1/descriptions";
import { HorizontalCard, VerticalCard } from "@/app/common/ui/page2/woop";
import React from "react";
import { v7 } from "@/app/constants/page2/v6";

export default function TestFramer() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        gap: 3,
      }}
    >
      <HeaderTitle>{v7.title}</HeaderTitle>
      <BaseDescription description={v7.description} />
      <Box sx={{ width: 1200 }}>
        <HorizontalCard {...v7.horizontalCards[0]} />
      </Box>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {v7.verticalCards.slice(0, 6).map((card, index) => (
          <VerticalCard key={index} {...card} />
        ))}
      </Stack>
    </Stack>
  );
}
