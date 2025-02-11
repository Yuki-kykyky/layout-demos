import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";

export default function BannerSectionV2() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/world-map.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 6,
            flex: 1,
            position: "relative", // 确保内容在背景遮罩之上
            zIndex: 1,
          }}
        >
          <Box sx={{ maxWidth: "450px" }}>
            <Typography
              variant="h2"
              fontFamily="Inter"
              fontWeight="bold"
              sx={{
                mb: 3,
                lineHeight: "60px",
              }}
            >
              Discover the World&apos;s{" "}
              <Box
                component="span"
                sx={{ color: "#797979", display: "inline" }}
              >
                Hidden Wonders
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#797979",
                fontSize: "20px",
                fontFamily: "Inter",
                lineHeight: "28px",
                mb: 4,
              }}
            >
              Start an unforgettable journey and explore the world&apos;s most
              amazing hidden treasures
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                borderRadius: "32px",
                height: "64px",
                px: 4,
                fontSize: "20px",
                fontFamily: "Inter",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
            >
              START EXPLORING
            </Button>
          </Box>
        </Box>

        {/* Right Image Group */}
        <Box
          sx={{
            position: "relative",
            width: "522px",
            height: "532px",
            mt: "60px",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src="/goooose18.jpg"
            sx={{
              position: "absolute",
              width: "240px",
              height: "300px",
              right: 0,
              top: 0,
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
          <Box
            component="img"
            src="/goooose18.jpg"
            sx={{
              position: "absolute",
              width: "250px",
              height: "400px",
              left: 0,
              top: "48px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
          <Box
            component="img"
            src="/goooose18.jpg"
            sx={{
              position: "absolute",
              width: "240px",
              height: "200px",
              right: 0,
              top: "332px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
