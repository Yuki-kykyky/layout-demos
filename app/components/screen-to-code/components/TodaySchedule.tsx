"use client";

import { Box, Typography, Stack, Chip, Button } from "@mui/material";
import {
  Person,
  LocalHospital,
  Groups,
  KeyboardArrowDown,
} from "@mui/icons-material";
import React from "react";
const scheduleItems = [
  {
    time: "07:00",
    icon: <Person color="primary" />,
    title: "Emergency visit",
    location: "West camp, Room 312",
    duration: "07:00 - 07:30",
  },
  {
    time: "07:30",
    icon: <LocalHospital color="primary" />,
    title: "Diagnostic test",
    location: "East camp, Laboratory, floor 5",
    duration: "07:30 - 07:55",
  },
  {
    time: "08:12",
    icon: <Groups sx={{ color: "warning.main" }} />,
    title: "Team daily planning",
    location: "East camp, Room 200",
    participants: ["TY", "AB", "NR", "TY", "SS", "+3"],
    duration: "08:00 - 09:00",
  },
  {
    time: "09:00",
    icon: <Person color="primary" />,
    title: "Emergency visit",
    location: "West camp, Room 312",
  },
];

export const TodaySchedule = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          May 15
        </Typography>
        <Chip
          label="All"
          deleteIcon={<KeyboardArrowDown />}
          onDelete={() => {}}
          sx={{
            bgcolor: "grey.200",
            "& .MuiChip-deleteIcon": {
              margin: 0,
            },
          }}
        />
      </Stack>

      <Typography variant="body2" color="text.secondary">
        Time Today&apos;s timeline
      </Typography>

      <Stack spacing={3} mt={4}>
        {scheduleItems.map((item, index) => (
          <Stack key={index} direction="row" spacing={3}>
            <Typography variant="body2" color="text.secondary" width={40}>
              {item.time}
            </Typography>
            <Box>
              {item.icon}
              <Typography
                variant="subtitle2"
                fontWeight={500}
                color="text.primary"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.location}
              </Typography>
              {item.participants && (
                <>
                  <Typography variant="body2" color="text.secondary">
                    Participants
                  </Typography>
                  <Stack direction="row" spacing={0.5} mt={0.5}>
                    {item.participants.map((participant, i) => (
                      <Chip
                        key={i}
                        label={participant}
                        size="small"
                        sx={{ bgcolor: "grey.200" }}
                      />
                    ))}
                  </Stack>
                </>
              )}
              {item.duration && (
                <Typography variant="body2" color="text.secondary">
                  {item.duration}
                </Typography>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>

      <Button
        fullWidth
        variant="outlined"
        sx={{
          mt: 4,
          color: "text.primary",
          bgcolor: "grey.100",
          borderRadius: "9999px",
          border: "none",
          "&:hover": {
            bgcolor: "grey.200",
            border: "none",
          },
        }}
      >
        View all details
      </Button>
    </Box>
  );
}
