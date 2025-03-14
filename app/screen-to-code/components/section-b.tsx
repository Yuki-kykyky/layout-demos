import { Box, Container, Grid2, Typography } from "@mui/material";
import { VerticalCard } from "@/app/common/woop-ui";
import { HorizontalCard } from "@/app/common/woop-ui";
import React from "react";
import { sectionBProps } from "../reference/match-props";

export const SectionB = () => {
  const { title, subtitle, verticalCard, horizontalCard } = sectionBProps;

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

        {/* Vertical Card Groups */}
        <Grid2 container spacing={4}>
          {verticalCard.map((card, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <VerticalCard {...card} />
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
