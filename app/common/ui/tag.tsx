import { SxProps, Typography } from "@mui/material";
import React from "react";

export const InfoTag = ({ tag, sx }: { tag: string; sx?: SxProps }) => {
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
