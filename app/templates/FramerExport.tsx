import { Box, Stack } from "@mui/material";
import React from "react";
import { v7 } from "@/app/components/reference-const/v6";
import { HeaderTitle } from "@/app/common/components/titles";
import { BaseDescription } from "@/app/common/components/descriptions";
import { HorizontalCard } from "@/app/common/woop-ui/cards/horizontal-card";
import { VerticalCard } from "@/app/common/woop-ui/cards/vertical-card";
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
