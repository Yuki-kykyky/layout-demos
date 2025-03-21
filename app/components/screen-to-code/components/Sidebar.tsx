"use client";

import React from "react";
import { Box, IconButton } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";

export const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <IconButton sx={{ width: 48, height: 48, bgcolor: "grey.900" }}>
        <PieChartIcon sx={{ color: "warning.main" }} />
      </IconButton>

      <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
        <DashboardIcon />
      </IconButton>

      <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
        <EmailIcon />
      </IconButton>

      <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
        <ShoppingBasketIcon />
      </IconButton>

      <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
        <LocalOfferIcon />
      </IconButton>

      <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
        <BadgeIcon />
      </IconButton>

      <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
        <WorkIcon />
      </IconButton>

      <Box sx={{ mt: "auto" }}>
        <IconButton sx={{ width: 48, height: 48, color: "grey.600" }}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
