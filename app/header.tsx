import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header(props: { slot?: React.ReactNode }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "64px" }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              Logo
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {props.slot}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
