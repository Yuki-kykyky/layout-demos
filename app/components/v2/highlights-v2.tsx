import {
  Container,
  Box,
  Typography,
  Avatar,
  Rating,
  Button,
  Stack,
} from "@mui/material";
import React from "react";

export default function HighlightsV2() {
  return (
    <Container maxWidth="lg">
      <Box
        data-layer="trekkers-highlights-section"
        sx={{
          height: "520px",
          bgcolor: "white",
        }}
      >
        <Typography variant="h2" fontWeight="bold" fontFamily="Inter" mb={6}>
          Trekker&apos;s Highlights
        </Typography>

        <Stack direction="row" spacing={3}>
          {/* 左侧用户信息区域 - flex: 4 */}
          <Box sx={{ flex: 4, alignContent: "center" }}>
            <Stack direction="row" spacing={2} mb={2}>
              <Avatar src="/goooose18.jpg" sx={{ width: 48, height: 48 }} />
              <Box>
                <Typography fontFamily="Inter" fontWeight="bold" fontSize={16}>
                  Maria Angelica
                </Typography>
                <Typography
                  color="text.secondary"
                  fontFamily="Inter"
                  fontSize={14}
                >
                  Kuala Lumpur
                </Typography>
              </Box>
            </Stack>

            <Rating value={5} readOnly sx={{ mb: 2 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              fontFamily="Inter"
              sx={{ mb: 2, lineHeight: 2 }}
            >
              An Unforgettable Journey Through Turkey
            </Typography>

            <Typography
              color="text.secondary"
              fontSize={14}
              fontFamily="Inter"
              sx={{ mb: 2 }}
            >
              Jan 15, 2024
            </Typography>

            <Typography
              fontFamily="Inter"
              sx={{
                lineHeight: 1.5,
                maxHeight: "100px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              From the historic streets to modern attractions, this guide covers
              everything you need to know about exploring Turkey. The exquisite
              culinary scene and local hospitality made this trip truly special.
            </Typography>
          </Box>

          {/* 中间图片区域 - flex: 3 */}
          <Box sx={{ flex: 3, position: "relative" }}>
            <Box
              component="img"
              src="/goooose18.jpg"
              sx={{
                width: "100%",
                height: 400,
                borderRadius: 4,
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                borderRadius: 4,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Street Food Paradise
              </Typography>
            </Box>
          </Box>

          {/* 右侧图片区域 - flex: 3 */}
          <Box sx={{ flex: 3, position: "relative" }}>
            <Box
              component="img"
              src="/goooose18.jpg"
              sx={{
                width: "100%",
                height: 200,
                borderRadius: 4,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <Typography
              fontFamily="Inter"
              fontWeight={600}
              fontSize={16}
              sx={{ mb: 1 }}
            >
              Sunset Over Singapore&apos;s Skyline
            </Typography>
            <Typography
              color="text.secondary"
              fontFamily="Inter"
              fontSize={14}
              sx={{ mb: 4 }}
            >
              Watch the most beautiful sunset views from Marina Bay Sands
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: 7,
                textTransform: "none",
                px: 2,
              }}
            >
              See more highlights
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
