import React from "react";
import { Container, Box, Stack } from "@mui/material";
import { DetailTitle } from "@/app/common/ui/titles";
import { InputButton } from "@/app/common/ui/buttons";
import { BaseDescription } from "@/app/common/ui/descriptions";
import { v4 } from "@/app/constants/v4";

export default function BannerSectionV4() {
  return (
    <Container maxWidth="lg">
      <Box
        data-layer="v4-banner-section-with-guidelines"
        sx={{
          position: "relative",
          py: 8,
        }}
      >
        <Stack
          data-layer="banner-section"
          direction="row"
          spacing={4}
          sx={{
            position: "relative",
          }}
        >
          {/* World Map Background */}
          <Box
            component="img"
            data-layer="world-map"
            src={v4.bannerSection.backgroundImageSrc}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.15,
              zIndex: -1,
            }}
          />

          {/* Content Section */}
          <Stack
            data-layer="sectionA"
            spacing={3}
            sx={{
              maxWidth: 422,
              p: 4,
            }}
          >
            <DetailTitle sx={{ fontSize: "48px" }}>
              {v4.bannerSection.detailTitle}{" "}
              <span style={{ color: "#797979" }}>
                {v4.bannerSection.detailTitleSpan}
              </span>
            </DetailTitle>

            <BaseDescription description={v4.bannerSection.baseDescription} />

            <InputButton buttonText={v4.bannerSection.inputButtonText} />
          </Stack>

          {/* Image Group - Keeping absolute positioning as per requirement */}
          <Box
            data-layer="image-group"
            sx={{
              position: "relative",
              width: 522,
              height: 532,
              ml: "auto",
            }}
          >
            <Box
              component="img"
              data-layer="image-1"
              src={v4.bannerSection.imageSrc}
              sx={{
                position: "absolute",
                width: 240,
                height: 300,
                left: 282,
                top: 0,
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              data-layer="image-2"
              src={v4.bannerSection.imageSrc}
              sx={{
                position: "absolute",
                width: 250,
                height: 400,
                left: 0,
                top: 48,
                objectFit: "cover",
              }}
            />
            <Box
              component="img"
              data-layer="image-3"
              src={v4.bannerSection.imageSrc}
              sx={{
                position: "absolute",
                width: 240,
                height: 200,
                left: 282,
                top: 332,
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
