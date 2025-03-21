"use client";

import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  InputBase,
  Chip,
  Grid2,
} from "@mui/material";
import { Search, Notifications, Settings } from "@mui/icons-material";
import { Sidebar } from "./components/Sidebar";
import { PatientsList } from "./components/PatientsList";
import { VisitDetails } from "./components/VisitDetails";
import { Calendar } from "./components/Calendar";
import { TodaySchedule } from "./components/TodaySchedule";

export const STCv3 = () => {
  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box flex={1} p={8}>
        {/* Top Bar */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Stack direction="row" alignItems="center">
            <Box position="relative">
              <Search
                sx={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "text.disabled",
                }}
              />
              <InputBase
                placeholder="Lis"
                sx={{
                  pl: 5,
                  pr: 2,
                  py: 1,
                  borderRadius: 30,
                  bgcolor: "grey.100",
                }}
              />
            </Box>
            <Stack direction="row" alignItems="center" ml={4}>
              <Typography>In:</Typography>
              {["Patients", "Education", "Prescriptions", "Test results"].map(
                (label) => (
                  <Chip
                    key={label}
                    label={label}
                    sx={{
                      ml: 1,
                      bgcolor: "grey.200",
                      cursor: "pointer",
                      "&:hover": { bgcolor: "grey.300" },
                    }}
                  />
                )
              )}
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
          </Stack>
        </Stack>

        {/* Main Content Area */}
        <Box>
          <Typography variant="h4" fontWeight={600} color="text.primary" mb={1}>
            Good morning, Dr.Olivia
          </Typography>
          <Typography color="text.secondary" mb={6}>
            Intelly wishes you a good and productive day. 45 patients waiting
            for your treatment today. You also have one live event in your
            calendar today.
          </Typography>

          {/* Dashboard Cards */}
          <Grid2 container spacing={3} mb={3}>
            <Grid2 size={{ xs: 6 }}>
              <Box sx={{ bgcolor: "yellow.100", borderRadius: 4, p: 4 }}>
                {/* Patients Card Content */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography fontWeight={600} color="text.primary">
                    Patients:
                  </Typography>
                </Stack>
                {/* ... Rest of patients card content */}
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Box sx={{ bgcolor: "pink.100", borderRadius: 4, p: 4 }}>
                {/* Visits Summary Card Content */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography fontWeight={600} color="text.primary">
                    Visits summary:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ cursor: "pointer" }}
                  >
                    Show all ...
                  </Typography>
                </Stack>
                {/* ... Rest of visits summary card content */}
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Box sx={{ bgcolor: "green.100", borderRadius: 4, p: 4 }}>
                {/* By Condition Card Content */}
                <Typography fontWeight={600} color="text.primary" mb={2}>
                  By condition:
                </Typography>
                {/* ... Rest of by condition card content */}
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Box sx={{ bgcolor: "blue.100", borderRadius: 4, p: 4 }}>
                {/* Sessions Card Content */}
                <Typography fontWeight={600} color="text.primary" mb={2}>
                  Sessions:
                </Typography>
                {/* ... Rest of sessions card content */}
              </Box>
            </Grid2>
          </Grid2>

          {/* Patient's List and Visit Details */}
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 6 }}>
              <PatientsList />
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <VisitDetails />
            </Grid2>
          </Grid2>
        </Box>
      </Box>

      {/* Right Sidebar */}
      <Box width={320} sx={{ bgcolor: "background.paper", boxShadow: 1 }}>
        <Box p={4}>
          <Calendar />
          <TodaySchedule />
        </Box>
      </Box>
    </Stack>
  );
};
