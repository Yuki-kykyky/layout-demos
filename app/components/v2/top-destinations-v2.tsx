import React from "react";
import {
  Container,
  Box,
  Typography,
  Chip,
  InputBase,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  "category A",
  "category B",
  "category C",
  "category D",
  "category E",
  "category F",
];
const destinations = [
  { title: "Golden Bridge, Da Nang", country: "Vietnam" },
  { title: "Golden Bridge, Da Nang", country: "Vietnam" },
  { title: "Golden Bridge, Da Nang", country: "Vietnam" },
  { title: "Golden Bridge, Da Nang", country: "Vietnam" },
  { title: "Golden Bridge, Da Nang", country: "Vietnam" },
  { title: "Golden Bridge, Da Nang", country: "Vietnam" },
];

export default function TopDestinationsV2() {
  return (
    <Container maxWidth="lg">
      <Box>
        {/* Header */}
        <Typography
          variant="h2"
          fontFamily="Inter"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Top Destinations
        </Typography>

        {/* Categories and Search */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          {/* Categories */}
          <Stack direction="row" spacing={1}>
            {categories.map((category, index) => (
              <Chip
                key={index}
                label={category}
                sx={{
                  bgcolor: "#E9E9E9",
                  borderRadius: "16px",
                  height: "32px",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              />
            ))}
          </Stack>

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#e8e8e8",
              borderRadius: "20px",
              width: "200px",
              height: "40px",
              px: 1.5,
            }}
          >
            <InputBase
              placeholder="search destinations......"
              sx={{
                flex: 1,
                fontFamily: "Inter",
                fontSize: "12px",
                color: "#4a4a4a",
              }}
            />
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Destinations Grid */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            overflowX: "auto",
            pb: 2,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#E0E0E0",
              borderRadius: "4px",
            },
          }}
        >
          {destinations.map((destination, index) => (
            <Card
              key={index}
              sx={{
                width: "264px",
                borderRadius: "16px",
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src="/goooose18.jpg"
                sx={{
                  width: "100%",
                  height: "324px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ p: 1.5 }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight={500}
                  sx={{ mb: 0.5 }}
                >
                  {destination.title}
                </Typography>
                <Typography
                  fontFamily="Inter"
                  fontSize="12px"
                  color="#7e7e7e"
                  fontWeight={500}
                >
                  {destination.country}
                </Typography>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
