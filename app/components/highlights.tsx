import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  Avatar,
  Box,
  Container,
  Rating,
  Typography,
  Button,
} from "@mui/material";

const highlightData = {
  mainReview: {
    avatar: "/goooose30.jpg",
    author: "Maria Angelica",
    location: "Kuala Lumpur",
    rating: 5,
    title: "An Unforgettable Journey Through Turkey",
    date: "Jan 15, 2024",
    description:
      "From the historic streets to modern attractions, this guide covers everything you need to know about exploring Turkey. The exquisite culinary scene and local hospitality made this trip truly special.",
  },
  imageSection: {
    image: "/goooose30.jpg",
    title: "Street Food Paradise",
  },
  videoSection: {
    thumbnail: "/goooose30.jpg",
    title: "Sunset Over Singapore's Skyline",
    description: "Watch the most beautiful sunset views from Marina Bay Sands",
    duration: "2:45",
  },
};

export default function Highlights() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Trekker&apos;s Highlights
      </Typography>

      <Box sx={{ display: "flex", gap: 3, height: 400 }}>
        {/* Review Section - 40% */}
        <Box
          sx={{
            flex: "4",
            bgcolor: "background.paper",
            borderRadius: 4,
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: "90%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                src={highlightData.mainReview.avatar}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {highlightData.mainReview.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {highlightData.mainReview.location}
                </Typography>
              </Box>
            </Box>

            <Rating
              value={highlightData.mainReview.rating}
              readOnly
              sx={{ mb: 3 }}
            />

            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {highlightData.mainReview.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {highlightData.mainReview.date}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {highlightData.mainReview.description}
            </Typography>
          </Box>
        </Box>

        {/* Image Section - 30% */}
        <Box
          sx={{
            flex: "3",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={highlightData.imageSection.image}
            alt={highlightData.imageSection.title}
            sx={{
              width: "100%",
              height: "100%",
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
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              {highlightData.imageSection.title}
            </Typography>
          </Box>
        </Box>

        {/* Video Section - 30% */}
        <Box
          sx={{
            flex: "3",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Thumbnail with Play Button */}
          <Box
            sx={{
              position: "relative",
              height: "50%",
              borderRadius: 4,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={highlightData.videoSection.thumbnail}
              alt={highlightData.videoSection.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <PlayCircleIcon
              className="playIcon"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: 48,
                color: "white",
                transition: "transform 0.2s",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              {highlightData.videoSection.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {highlightData.videoSection.description}
            </Typography>

            {/* Action Button */}
            <Box
              sx={{
                mt: "auto",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                }}
              >
                See more highlights
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
