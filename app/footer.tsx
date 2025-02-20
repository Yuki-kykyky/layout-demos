import { Box, Typography } from "@mui/material";
import React from "react";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        pt: 8,
        pb: 0,
        mt: "auto",
        borderTop: 1,
        borderColor: "grey.200",
      }}
    >
      {/* Copyright */}
      <Box
        sx={{
          bgcolor: "black",
          mt: 6,
          py: 3,
          borderTop: 1,
          borderColor: "grey.200",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="white">
          © 2024 Trek Travel Experience. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
