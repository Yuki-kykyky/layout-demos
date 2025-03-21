import { Box } from "@mui/material";
import { Sidebar } from "./dashboard/Sidebar";
import { DashboardHeader } from "./dashboard/DashboardHeader";
import { OverviewSection } from "./dashboard/OverviewSection";
import { StatisticsSection } from "./dashboard/StatisticsSection";
import React from "react";

export const STCv4 = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f0f2f5" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 6, overflow: "auto" }}>
        <DashboardHeader />
        <OverviewSection />
        <StatisticsSection />
      </Box>
    </Box>
  );
};
