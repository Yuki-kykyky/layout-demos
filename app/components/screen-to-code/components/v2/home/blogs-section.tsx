"use client";
import React from "react";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { VerticalCard } from "@/app/common/woop-ui";
import { blogsSectionMatchProps } from "../../../reference/v2/match-props";

export const BlogsSection = () => {
  const { eyebrowBadge, title, verticalCards } = blogsSectionMatchProps;

  const router = useRouter();

  const handleCardClick = (post_id: string) => {
    router.push(`/blogs/${post_id}`);
  };

  return (
    <Box py={8}>
      <Container>
        <Stack>
          <Typography variant="body2" color="primary">
            {eyebrowBadge.content}
          </Typography>
          <Typography
            variant={title.variant}
            color="text.primary"
            fontWeight={600}
            mt={1}
          >
            {title.content}
          </Typography>
        </Stack>

        <Grid2 container spacing={4} mt={6}>
          {verticalCards.map((card) => (
            <Grid2 key={card.id} size={{ xs: 12, md: 4 }}>
              <Box
                onClick={() => handleCardClick(card.id)}
                sx={{ cursor: "pointer" }}
              >
                <VerticalCard {...card} />
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};
