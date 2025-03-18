import { Box, Container, Typography } from "@mui/material";
import { VerticalCard } from "@/app/common/woop-ui";
import { HorizontalCard } from "@/app/common/woop-ui";
import React from "react";
import { sectionBProps } from "../../reference/v1/match-props";
import { useScreenSize } from "@/app/hooks/useScreenSize";
import { createColumnLayout } from "@/app/utils/layout-utils";

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

        {createColumnLayout({
          items: verticalCard,
          columnLength,
          renderItem: (card) => <VerticalCard {...card} />,
        })}
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
