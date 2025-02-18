import { Container, Box, Stack } from "@mui/material";
import { DetailTitle } from "@/app/common/ui/page1/titles";
import { BaseDescription } from "@/app/common/ui/page1/descriptions";
import { InputButton } from "@/app/common/ui/page1/buttons";
import React from "react";

export default function BannerSectionV3() {
  return (
    <Container maxWidth="lg">
      {/* Banner Section */}
      <Box sx={{ position: "relative" }}>
        {/* Background World Map */}
        <Box
          component="img"
          src="/world-map.jpg"
          sx={{
            width: "100%",
            height: "auto",
            opacity: 0.15,
          }}
        />

        {/* Image Group - Keeping absolute positioning as required */}
        <Box
          sx={{
            position: "absolute",
            right: "40px",
            top: "60px",
            width: "522px",
            height: "532px",
          }}
        >
          <Box
            component="img"
            src="/goooose9.jpg"
            sx={{
              position: "absolute",
              width: "240px",
              height: "300px",
              right: 0,
              top: 0,
              border: "1px solid black",
            }}
          />
          <Box
            component="img"
            src="/goooose9.jpg"
            sx={{
              position: "absolute",
              width: "250px",
              height: "400px",
              left: 0,
              top: "48px",
              border: "1px solid black",
            }}
          />
          <Box
            component="img"
            src="/goooose9.jpg"
            sx={{
              position: "absolute",
              width: "240px",
              height: "200px",
              right: 0,
              bottom: 0,
              border: "1px solid black",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            position: "absolute",
            left: "48px",
            top: "146px",
            maxWidth: "422px",
          }}
        >
          <Stack spacing={3}>
            <DetailTitle
              sx={{
                fontSize: "48px",
              }}
            >
              Discover the World&apos;s <br />
              <span style={{ color: "#797979" }}>Hidden Wonders</span>
            </DetailTitle>

            <BaseDescription
              sx={{
                fontSize: "20px",
                lineHeight: "28px",
                mb: 4,
              }}
              description="Start an unforgettable journey and explore the world's most amazing hidden treasures"
            />

            <InputButton
              buttonText="start exploring"
              sx={{
                width: "200px",
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
