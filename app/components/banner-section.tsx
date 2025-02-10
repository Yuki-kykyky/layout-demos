import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";

export default function BannerSection() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 3fr" },
          gap: 8,
          alignItems: "center",
          minHeight: "400px",
          pt: { xs: 8, md: 0 },
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
        <Box sx={{ position: "relative", height: "100%", minHeight: "500px" }}>
          {/* Image Cards */}
          <Paper
            elevation={2}
            sx={{
              position: "absolute",
              top: "10%",
              left: "0%",
              width: "280px",
              height: "320px",
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
              right: "10%",
              width: "240px",
              height: "240px",
              borderRadius: "24px",
              overflow: "hidden",
              bgcolor: "grey.100",
            }}
          />
          <Paper
            elevation={2}
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "5%",
              width: "200px",
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
