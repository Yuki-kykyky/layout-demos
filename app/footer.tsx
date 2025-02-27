import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Stack
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: (theme) => theme.palette.background.default,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        height: 64,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" color="text.primary">
        © 2024 Trek Travel Experience. All rights reserved.
      </Typography>
    </Stack>
  );
}
