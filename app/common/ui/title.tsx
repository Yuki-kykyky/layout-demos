import { Typography } from "@mui/material";
import React from "react";
export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h4" fontWeight="bold" sx={{
      textAlign: "center",
    }}>
      {children}
    </Typography>
  );
}

