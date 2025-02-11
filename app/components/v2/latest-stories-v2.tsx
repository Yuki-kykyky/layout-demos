import React from "react";
import { Container, Box, Typography, Button, Stack, Card } from "@mui/material";

export default function LatestStoriesV2() {
  return (
    <Container maxWidth="lg">
      <Box>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h2" fontFamily="Inter" fontWeight="bold">
            Latest Stories
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              height: "60px",
              px: 4,
              textTransform: "none",
              fontFamily: "Inter",
              fontWeight: 500,
            }}
          >
            READ MORE ARTICLES
          </Button>
        </Box>

        {/* Content Section */}
        <Stack direction="row" spacing={4}>
          {/* Featured Article */}
          <Box sx={{ flex: 1 }}>
            <Card elevation={0} sx={{ border: "none" }}>
              <Box
                component="img"
                src="/goooose18.jpg"
                sx={{
                  width: "100%",
                  height: 320,
                  borderRadius: "32px",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                fontFamily="Inter"
                fontWeight="bold"
                sx={{ mb: 2, lineHeight: 1.75 }}
              >
                Los Angeles food & drink guide: 10 things to try in Los Angeles,
                California
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mb: 2 }}
                fontFamily="Inter"
              >
                Jan 14, 2024 • 5 min read
              </Typography>
              <Typography fontFamily="Inter">
                A guide for a California&apos;s incredible eats: from street
                food to upscale dining, discover the best LA has to offer.
              </Typography>
            </Card>
          </Box>

          {/* Article List */}
          <Stack
            spacing={3}
            sx={{
              flex: 1,
              pr: 1.5,
              height: 528, // 确保总高度固定，等于3个卡片(160px)加上2个间距(24px)
              overflowY: "auto",
              // 自定义滚动条样式
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "3px",
                "&:hover": {
                  background: "#555",
                },
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                sx={{
                  display: "flex",
                  height: 160,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  flexShrink: 0, // 防止卡片被压缩
                }}
              >
                <Box
                  component="img"
                  src="/goooose18.jpg"
                  sx={{
                    width: 160,
                    height: 160,
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: 1.5, flex: 1 }}>
                  <Typography
                    color="#1a59cd"
                    fontSize="12px"
                    fontWeight="bold"
                    fontFamily="Inter"
                    sx={{ mb: 1 }}
                  >
                    shopping
                  </Typography>
                  <Typography
                    fontSize="14px"
                    fontWeight="bold"
                    fontFamily="Inter"
                    sx={{ mb: 1, lineHeight: "18px" }}
                  >
                    15 South London Markets You&apos;ll Love: Best Markets in
                    South London
                  </Typography>
                  <Typography
                    color="text.secondary"
                    fontSize="12px"
                    fontFamily="Inter"
                  >
                    Jan 14, 2024 • 5 min read
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
