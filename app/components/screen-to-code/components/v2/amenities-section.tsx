import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { WoopBadge } from "@/app/common/woop-ui";
import { amenitiesSectionMatchProps } from "../../reference/v2/match-props";

export const AmenitiesSection = () => {
  const { eyebrowBadge, title, image, including } = amenitiesSectionMatchProps;

  return (
    <Container maxWidth="lg">
      <Box py={8} mb={12}>
        <Stack direction="row" alignItems="center" mb={1}>
          <WoopBadge
            content={eyebrowBadge.content}
            size={eyebrowBadge.size}
            color={eyebrowBadge.color}
            textColor={eyebrowBadge.textColor}
          />
        </Stack>

        <Typography variant={title.variant} mb={6} sx={{ width: "70%" }}>
          {title.content}
        </Typography>

        <Box position="relative">
          <Box
            component="img"
            src={image}
            alt="Luxury modern home with infinity pool and spacious living area"
            sx={{
              width: "100%",
              height: 320,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "primary.main",
              color: "white",
              p: 4,
              borderRadius: 3,
              width: 256,
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold" mb={1}>
              Including
            </Typography>
            <Stack spacing={1}>
              {including.map((item, index) => (
                <Stack key={index} direction="row" alignItems="center">
                  {item.icon}
                  <Typography variant="body2" ml={1}>
                    {item.content}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
