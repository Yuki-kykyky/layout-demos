import { Container, Box, Stack, Rating } from "@mui/material";
import React from "react";
import { Title, SubTitle, ItemTitle } from "@/app/common/ui/title";
import { Description, ItemDescription } from "@/app/common/ui/description";
import AvatarInfo from "@/app/common/ui/avatar-info";
import { OperationButton } from "@/app/common/ui/buttons";

export default function HighlightsV3() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 4 }}>
        {/* 标题区域 */}
        <Title>Trekker&apos;s Highlights</Title>

        {/* 主要内容区域 */}
        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
          {/* Section A - 4份占比 */}
          <Box sx={{ flex: 4, alignContent: "center" }}>
            <AvatarInfo
              avatar="/goooose9.jpg"
              avatarTitle="Maria Angelica"
              avatarDescription="Kuala Lumpur"
            />
            <Rating value={5} readOnly sx={{ mb: 2 }} />
            <ItemTitle>An Unforgettable Journey Through Turkey</ItemTitle>
            <ItemDescription description="Jan 15, 2024" sx={{ mb: 2 }} />

            <Description description="From the historic streets to modern attractions, this guide covers everything you need to know about exploring Turkey. The exquisite culinary scene and local hospitality made this trip truly special." />
          </Box>

          {/* Section B - 3份占比 */}
          <Box sx={{ flex: 3, position: "relative" }}>
            <Box
              component="img"
              src="/goooose9.jpg"
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: 4,
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))",
                p: 2,
              }}
            >
              <SubTitle>Street Food Paradise</SubTitle>
            </Box>
          </Box>

          {/* Section C - 3份占比 */}
          <Stack sx={{ flex: 3, position: "relative" }} spacing={2}>
            <Box
              component="img"
              src="/goooose9.jpg"
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <Box>
              <ItemTitle>Sunset Over Singapore&apos;s Skyline</ItemTitle>
              <ItemDescription description="Watch the most beautiful sunset views from Marina Bay Sands" />
            </Box>
            <Box
              sx={{
                mt: "auto",
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              <OperationButton buttonText="See more highlights" />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
