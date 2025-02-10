import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";

export default function BannerSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: "url(/world-map.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.85)", // 添加半透明白色遮罩
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 8,
          alignItems: "center",
          minHeight: "80vh",
          pt: { xs: 8, md: 0 },
          position: "relative",
          zIndex: 2, // 确保内容在遮罩层之上
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
            Discover the World&apos;s{" "}
            <Box component="span" sx={{ color: "text.secondary" }}>
              Hidden Wonders
            </Box>
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Start an unforgettable journey and explore the world&apos;s most
            amazing hidden treasures
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "9999px",
              px: 4,
              py: 1.5,
              width: "fit-content",
              "&:hover": { bgcolor: "black" },
            }}
          >
            Start Exploring
          </Button>
        </Box>

        {/* Right Image Section */}
        <Box sx={{ position: "relative", height: "600px" }}>
          <Paper
            elevation={2}
            sx={{
              position: "absolute",
              top: "10%",
              left: "0%",
              width: "250px",
              height: "400px",
              borderRadius: "24px",
              overflow: "hidden",
              bgcolor: "grey.100",
            }}
          />
          <Paper
            elevation={2}
            sx={{
              position: "absolute",
              top: "5%",
              right: "0%",
              width: "240px",
              height: "300px",
              borderRadius: "24px",
              overflow: "hidden",
              bgcolor: "grey.100",
            }}
          />
          <Paper
            elevation={2}
            sx={{
              position: "absolute",
              bottom: "5%",
              right: "0%",
              width: "240px",
              height: "200px",
              borderRadius: "24px",
              overflow: "hidden",
              bgcolor: "grey.100",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
