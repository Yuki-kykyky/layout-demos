import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";

const mainStory = {
  id: 1,
  title:
    "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
  date: "Jan 14, 2024",
  timeToRead: "5 min read",
  image: "/goooose30.jpg",
  description:
    "A guide for a California's incredible eats: from street food to upscale dining, discover the best LA has to offer.",
};

const sideStories = [
  {
    id: 1,
    title: "15 South London Markets You'll Love: Best Markets in South London",
    category: "Shopping",
    date: "Jan 15, 2024",
    timeToRead: "4 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 2,
    title:
      "30 incredible hotels around the world you can book with points in 2024",
    category: "Hotels",
    date: "Jan 14, 2024",
    timeToRead: "6 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 3,
    title:
      "30 incredible hotels around the world you can book with points in 2024",
    category: "Hotels",
    date: "Jan 14, 2024",
    timeToRead: "6 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 4,
    title:
      "30 incredible hotels around the world you can book with points in 2024",
    category: "Hotels",
    date: "Jan 14, 2024",
    timeToRead: "6 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 5,
    title:
      "30 incredible hotels around the world you can book with points in 2024",
    category: "Hotels",
    date: "Jan 14, 2024",
    timeToRead: "6 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 6,
    title:
      "30 incredible hotels around the world you can book with points in 2024",
    category: "Hotels",
    date: "Jan 14, 2024",
    timeToRead: "6 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 7,
    title: "Visiting Chicago on a Budget: Affordable Eats and Activities",
    category: "Travel Guide",
    date: "Jan 10, 2024",
    timeToRead: "4 min read",
    image: "/goooose30.jpg",
  },
  {
    id: 8,
    title: "Visiting Chicago on a Budget: Affordable Eats and Activities",
    category: "Travel Guide",
    date: "Jan 10, 2024",
    timeToRead: "4 min read",
    image: "/goooose30.jpg",
  },
];

export default function LatestStories() {
  const ITEM_HEIGHT = 160; // Height of each side item
  const TOTAL_HEIGHT = ITEM_HEIGHT * 3; // Total height equals 3 items

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Latest Stories
        </Typography>
        <Button variant="outlined" sx={{ borderRadius: "20px" }}>
          Read more articles
        </Button>
      </Box>

      {/* Content Section */}
      <Box sx={{ display: "flex", gap: 4, height: TOTAL_HEIGHT }}>
        {/* Left Content */}
        <Box
          sx={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image Section - Height of 2 items */}
          <Box sx={{ height: ITEM_HEIGHT * 2 }}>
            <Box
              component="img"
              src={mainStory.image}
              alt={mainStory.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Box>

          {/* Content Section - Height of 1 item */}
          <Box
            sx={{
              height: ITEM_HEIGHT,
              pt: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              {mainStory.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {mainStory.date} • {mainStory.timeToRead}
            </Typography>
            <Typography variant="body1">{mainStory.description}</Typography>
          </Box>
        </Box>

        {/* Right Content */}
        <Stack
          sx={{
            flex: "1 1 50%",
            height: TOTAL_HEIGHT + 24,
            overflow: "auto",
            pr: 2,
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
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
          spacing={2}
        >
          {sideStories.map((story) => (
            <Card
              key={story.id}
              sx={{
                display: "flex",
                borderRadius: "16px",
                cursor: "pointer",
                height: ITEM_HEIGHT,
                flexShrink: 0,
                "&:hover": { bgcolor: "grey.50" },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 160, height: "100%" }}
                image={story.image}
                alt={story.title}
              />
              <CardContent
                sx={{
                  flex: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    color="primary"
                    sx={{ fontWeight: 600, display: "block", mb: 1 }}
                  >
                    {story.category}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: 1.4,
                    }}
                  >
                    {story.title}
                  </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {story.date} • {story.timeToRead}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
