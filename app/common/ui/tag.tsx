import { Chip, SxProps, Typography } from "@mui/material";
import React from "react";

const InfoTag = ({ tag, sx }: { tag: string; sx?: SxProps }) => {
  return (
    <Typography
      color="#1a59cd"
      fontSize="12px"
      fontWeight="bold"
      fontFamily="Inter"
      sx={{ mb: 1, ...sx }}
    >
      {tag}
    </Typography>
  );
};
const ChipTag = ({ label, sx }: { label: string; sx?: SxProps }) => {
  return (
    <Chip
      label={label}
      sx={{
        bgcolor: "#E9E9E9",
        borderRadius: "16px",
        height: "32px",
        fontFamily: "Inter",
        fontSize: "12px",
        ...sx,
      }}
    />
  );
};

export { InfoTag, ChipTag };
