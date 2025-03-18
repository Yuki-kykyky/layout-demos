import { v6 } from "@/app/components/reference-const/v6";
import { Box, Stack } from "@mui/material";
import { HorizontalCard } from "@/app/common/woop-ui/cards/horizontal-card";
import { VerticalCard } from "@/app/common/woop-ui/cards/vertical-card";
import React from "react";

export default function TestFigma() {
  return (
    <Box
      data-layer="test-component-recognize"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Stack direction="row" spacing={4}>
        <Box
          data-layer="image"
          component="img"
          src={v6.image}
          sx={{
            width: "calc(50% - 16px)",
            height: "auto",
            aspectRatio: "1/1",
          }}
        />
        <Stack spacing={4} sx={{ width: "50%" }}>
          {v6.horizontalCards.slice(0, 2).map((card, index) => (
            <Box
              key={index}
              data-layer={`horizontal-card-${index}`}
              sx={{ width: "100%" }}
            >
              <HorizontalCard {...card} />
            </Box>
          ))}
        </Stack>
      </Stack>

      <Box data-layer="horizontal-card-2" sx={{ width: "100%" }}>
        <HorizontalCard {...v6.horizontalCards[2]} />
      </Box>

      <Stack direction="row" spacing={4}>
        {v6.verticalCards.map((card, index) => (
          <Box
            key={index}
            data-layer={`vertical-card-${index}`}
            sx={{
              width: `calc((100% - ${(v6.verticalCards.length - 1) * 32}px) / ${
                v6.verticalCards.length
              })`,
            }}
          >
            <VerticalCard {...card} pictureSize={316} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
