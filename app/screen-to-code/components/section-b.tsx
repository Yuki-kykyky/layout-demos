import { Box, Container, Grid2, Typography } from "@mui/material";
import { VerticalCard } from "@/app/common/woop-ui";
import { HorizontalCard } from "@/app/common/woop-ui";
import React from "react";
import { sectionBProps } from "../reference/match-props";
import { useScreenSize } from "@/app/hooks/useScreenSize";
export const SectionB = () => {
  const { title, subtitle, verticalCard, horizontalCard } = sectionBProps;
  const { isSmall, isMedium } = useScreenSize();
  const columnLength = isSmall ? 1 : isMedium ? 2 : 3;
  return (
    <Box py={8}>
      <Container>
        <Typography
          variant={title.variant}
          textAlign="center"
          color="text.primary"
          fontWeight={600}
          mb={1}
        >
          {title.content}
        </Typography>
        <Typography
          variant={subtitle.variant}
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          {subtitle.content}
        </Typography>
        <Grid2 container spacing={4} gap={3} flexWrap="wrap">
          {Array.from({ length: columnLength }).map((_, columnIndex) => (
            <Grid2 key={columnIndex} size={{ xs: 12, sm: 6, md: 4 }}>
              {verticalCard
                .filter((_, index) => index % columnLength === columnIndex)
                .map((card, index) => (
                  <VerticalCard
                    key={index}
                    {...card}
                    sx={{ mb: 2, width: "100%" }}
                  />
                ))}
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Horizontal Card */}
      <Box py={8}>
        <Container>
          <HorizontalCard {...horizontalCard} />
        </Container>
      </Box>
    </Box>
  );
};
