import React from "react";
import { Container, Stack, Typography, Grid2, Box } from "@mui/material";
import { WoopBadge, WoopBtn, PropertyCard } from "@/app/common/woop-ui";
import { propertiesSectionMatchProps } from "../../../reference/v2/match-props";
import { STCV2Routes } from "../../../reference/route-reference";
import { useRouter } from "next/navigation";

export const PropertiesSection = () => {
  const { eyebrowBadge, title, button, propertiesCards } =
    propertiesSectionMatchProps;
  const { properties } = STCV2Routes.routes.modules.home;

  const router = useRouter();

  const handleClick = () => {
    router.push(properties.cta_button.path);
  };

  const handleCardClick = (id: string | number) => {
    router.push(
      properties.card_item.dynamic_path.replace(":id", id.toString())
    );
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <WoopBadge {...eyebrowBadge} />
            <Typography variant={title.variant} sx={{ mt: 1, width: "70%" }}>
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
          {propertiesCards.map((card, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <Box
                onClick={() => handleCardClick(card.id)}
                sx={{ cursor: "pointer" }}
              >
                <PropertyCard {...card} />
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};
