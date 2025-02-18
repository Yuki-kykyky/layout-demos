"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Container,
  Menu,
  MenuItem,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const destinations = [
  {
    id: 1,
    name: "Golden Bridge, Da Nang",
    location: "Vietnam",
    image: "/goooose30.jpg",
  },
  { id: 2, name: "Indonesia", location: "Bali", image: "/goooose30.jpg" },
  {
    id: 3,
    name: "Ao Dai Batman Cappadocia",
    location: "Turkey",
    image: "/goooose30.jpg",
  },
  {
    id: 4,
    name: "Sydney Harbour Bridge",
    location: "Australia",
    image: "/goooose30.jpg",
  },
  {
    id: 5,
    name: "Machu Picchu",
    location: "Peru",
    image: "/goooose30.jpg",
  },
  {
    id: 6,
    name: "Santorini",
    location: "Greece",
    image: "/goooose30.jpg",
  },
  {
    id: 7,
    name: "Mount Fuji",
    location: "Japan",
    image: "/goooose30.jpg",
  },
  {
    id: 8,
    name: "Northern Lights",
    location: "Iceland",
    image: "/goooose30.jpg",
  },
];

const mainCategories = [
  "Popular",
  "USA",
  "Europe",
  "Asia",
  "Africa & Middle East",
  "Australia & The Pacific",
  "Canada",
];

const moreCategories = [
  "South America",
  "Caribbean",
  "Central America",
  "Antarctica",
  "Arctic",
];

export default function TopDestinations() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMoreClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Top Destinations
      </Typography>

      {/* Categories and Search */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flex: 1,
            overflow: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {mainCategories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              sx={{
                borderRadius: "16px",
                flexShrink: 0,
                "&:first-of-type": {
                  bgcolor: "black",
                  color: "white",
                  "&:hover": { bgcolor: "black" },
                },
              }}
            />
          ))}
          <Chip
            icon={<MoreHorizIcon />}
            label="More"
            clickable
            onClick={handleMoreClick}
            sx={{ borderRadius: "16px", flexShrink: 0 }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: 2,
                minWidth: 180,
              },
            }}
          >
            {moreCategories.map((category) => (
              <MenuItem key={category} onClick={handleClose} sx={{ py: 1 }}>
                {category}
              </MenuItem>
            ))}
          </Menu>
        </Stack>

        {/* Search Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "grey.100",
            borderRadius: "24px",
            px: 2,
            py: 0.5,
            minWidth: { xs: "120px", sm: "200px" },
          }}
        >
          <InputBase
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ ml: 1, flex: 1 }}
          />
          <IconButton type="button" sx={{ p: "4px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Destination Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          pb: 2,
        }}
      >
        {destinations
          .filter(
            (destination) =>
              destination.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              destination.location
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
          )
          .map((destination) => (
            <Card
              key={destination.id}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s",
                flexShrink: 0,
                width: "280px",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={destination.image}
                alt={destination.name}
                sx={{ bgcolor: "grey.100" }}
              />
              <CardContent>
                <Typography variant="h6" noWrap>
                  {destination.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {destination.location}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>
    </Container>
  );
}
