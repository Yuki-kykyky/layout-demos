import React from "react";
import { Container, Stack, Typography, Grid2, Box } from "@mui/material";
import { WoopBadge, WoopBtn, VerticalCard } from "@/app/common/woop-ui";
import { propertiesSectionMatchProps } from "../../reference/v2/match-props";
import { STCV2Routes } from "../../reference/route-reference";
import { useRouter } from "next/navigation";

export const PropertiesSection = () => {
  const { eyebrowBadge, title, button, verticalCards } =
    propertiesSectionMatchProps;
  const { properties } = STCV2Routes.routes.modules;

  const router = useRouter();

  const handleClick = () => {
    router.push(properties.cta_button.path);
  };

  const handleCardClick = (id: string) => {
    router.push(properties.card_item.dynamic_path.replace(":id", id));
  };

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <WoopBadge content={eyebrowBadge.content} />
            <Typography variant={title.variant} sx={{ mt: 1 }}>
              {title.content}
            </Typography>
          </Stack>
          <WoopBtn
            buttonText={button.buttonText}
            type={button.type}
            onClick={handleClick}
          />
        </Stack>

        <Grid2 container spacing={4} sx={{ mt: 6 }}>
          {verticalCards.map((card, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
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
