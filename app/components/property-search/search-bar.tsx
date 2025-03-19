import { Stack, Box, Typography, InputBase, IconButton } from "@mui/material";
import React from "react";

const SearchOption = ({ label }: { label: string }) => (
  <Stack direction="row" alignItems="center" px={2} py={1}>
    <Typography color="text.secondary" mr={0.5}>
      {label}
    </Typography>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </Stack>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const SearchBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      className="bg-white rounded-full p-1 max-w-3xl mx-auto"
    >
      <SearchOption label="Types" />
      <Box
        component="div"
        sx={{
          borderLeft: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <SearchOption label="Bedroom" />
      </Box>
      <Box
        component="div"
        sx={{
          borderLeft: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <SearchOption label="Category" />
      </Box>
      <InputBase
        placeholder="Search for home"
        sx={{
          flex: 1,
          px: 2,
          py: 1,
        }}
      />
      <IconButton
        sx={{
          bgcolor: "primary.main",
          color: "white",
          p: 1.5,
          borderRadius: "50%",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
