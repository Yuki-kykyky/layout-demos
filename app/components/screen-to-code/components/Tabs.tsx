import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FolderIcon from "@mui/icons-material/Folder";
import AddIcon from "@mui/icons-material/Add";

export const Tabs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        {["Overview", "PPC", "Year to year...", "Customize"].map(
          (tab, index) => (
            <Box
              key={tab}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "9999px",
                bgcolor: "grey.100",
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "9999px",
                  bgcolor: "grey.300",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption">
                  {String(index + 1).padStart(2, "0")}
                </Typography>
              </Box>
              <Typography variant="body2">{tab}</Typography>
            </Box>
          )
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: "9999px",
            bgcolor: "grey.100",
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2">
            30 days Oct 16 / 21 - Nov 14 / 21
          </Typography>
          <AddIcon sx={{ fontSize: 16, transform: "rotate(90deg)" }} />
        </Box>

        <IconButton sx={{ bgcolor: "grey.100" }}>
          <FolderIcon />
        </IconButton>

        <IconButton sx={{ bgcolor: "black", color: "white" }}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
