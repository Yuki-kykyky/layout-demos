import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(8px)" }}
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

            {/* Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "32px" }}>
              <Button
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary" },
                }}
              >
                Destinations
              </Button>
              <Button
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary" },
                }}
              >
                Travel Tips
              </Button>
              <Button
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary" },
                }}
              >
                Explore
              </Button>
              <Button
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary" },
                }}
              >
                Blog
              </Button>
            </Box>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <IconButton color="default" aria-label="Search">
              <SearchIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                borderRadius: "9999px",
                "&:hover": { bgcolor: "black" },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
