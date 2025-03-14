import React from "react";
import { Container, Typography, Stack, Grid2, Box } from "@mui/material";
import { HorizontalCard } from "@/app/common/woop-ui/cards/horizontal-card";
import { VerticalCard } from "@/app/common/woop-ui/cards/vertical-card";
import { WoopBtn } from "@/app/common/woop-ui/woop-btn";
import { sectionAProps } from "../reference/match-props";

export const SectionA = () => {
  const { title, subtitle, horizontalCard, verticalCards, buttonGroup } =
    sectionAProps;

  return (
    <Box py={8}>
      <Container>
        <Typography variant={title.variant} align="center" gutterBottom>
          {title.content}
        </Typography>
        <Typography
          variant={subtitle.variant}
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          {subtitle.content}
        </Typography>

        {/* Horizontal Card */}
        <Grid2 container spacing={4}>
          <HorizontalCard
            image={horizontalCard.image}
            pictureSize={horizontalCard.pictureSize}
            title={horizontalCard.title}
            headerSlot={horizontalCard.headerSlot}
            description={horizontalCard.description}
            footerSlot={horizontalCard.footerSlot}
          />
        </Grid2>

        {/* Vertical Cards Section */}
        <Box sx={{ py: 8 }}>
          <Grid2 container spacing={4}>
            {verticalCards.map((card, index) => (
              <Grid2 key={index} size={{ xs: 12, lg: 4, md: 6 }}>
                <VerticalCard
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                  {...card}
                />
              </Grid2>
            ))}
          </Grid2>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <WoopBtn
              buttonText={buttonGroup.first.buttonText}
              size={buttonGroup.first.size}
              type={buttonGroup.first.type}
            />
            <WoopBtn
              buttonText={buttonGroup.second.buttonText}
              size={buttonGroup.second.size}
              type={buttonGroup.second.type}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
