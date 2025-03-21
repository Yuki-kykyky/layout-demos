import React from "react";
import { Box, Container } from "@mui/material";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Tabs } from "./components/Tabs";
import { DataCards } from "./components/DataCards";
import { Charts } from "./components/Charts";
import { SummaryCards } from "./components/SummaryCards";

export const Dashboard = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f0ff", p: 2 }}>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "white", borderRadius: 3, p: 3, boxShadow: 1 }}>
          <Header />

          <Box sx={{ display: "flex", gap: 3 }}>
            <Sidebar />

            <Box sx={{ flex: 1 }}>
              <Tabs />
              <SummaryCards />
              <DataCards />
              <Charts />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
