import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function StyleItem({
  name,
  defination,
}: {
  name: string;
  defination?: { description: string; style: string };
}) {
  return (
    <Paper
      sx={{
        width: 280,
        display: "flex",
        alignItems: "center",
        padding: 2,
        gap: 2,
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      {/* 颜色显示块 */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          boxShadow: defination?.style,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          component="div"
          sx={{
            fontWeight: "700",
            fontFamily: "Mulish, sans-serif",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontWeight: "500",
            fontFamily: "Mulish, sans-serif",
          }}
        >
          {defination?.description}
        </Typography>
      </Box>
    </Paper>
  );
}
