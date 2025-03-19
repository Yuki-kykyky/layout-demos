import { AspectRatio, Bathroom, Home, LocationCity } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";
import React from "react";

export interface PropertyCardProps {
  image: string;
  status: string;
  location: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  status,
  location,
  title,
  bedrooms,
  bathrooms,
  area,
}) => {
  return (
    <Box className="rounded-xl overflow-hidden shadow-md">
      <Box className="relative">
        <Box
          component="img"
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Box className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
          {status}
        </Box>
      </Box>
      <Stack spacing={2} p={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationCity className="h-4 w-4 text-gray-400" />
          <Typography variant="caption" color="text.secondary">
            {location}
          </Typography>
        </Stack>
        <Typography
          variant="h6"
          fontWeight="semibold"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Home className="h-4 w-4 text-gray-400" />
            <Typography variant="body2">{bedrooms}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Bathroom className="h-4 w-4 text-gray-400" />
            <Typography variant="body2">{bathrooms}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AspectRatio className="h-4 w-4 text-gray-400" />
            <Typography variant="body2">{area}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
