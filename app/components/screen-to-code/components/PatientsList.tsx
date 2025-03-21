"use client";

import {
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import {
  Person,
  LocalHospital,
  Videocam,
  Description,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
const patients = [
  {
    icon: <Person color="primary" />,
    name: "Taigo Wilkinson",
    type: "Emergency Visit",
    time: "09:15 AM",
  },
  {
    icon: <LocalHospital color="primary" />,
    name: "Samantha Williams",
    type: "Routine Check-Up",
    time: "09:15 AM",
  },
  {
    icon: <Videocam color="primary" />,
    name: "Amy White",
    type: "Video Consultation",
    time: "09:15 AM",
  },
  {
    icon: <Description color="primary" />,
    name: "Tyler Young",
    type: "Report",
    time: "09:45 AM",
  },
];

export const PatientsList = () => {
  return (
    <Box
      sx={{ bgcolor: "background.paper", borderRadius: 4, boxShadow: 1, p: 4 }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h6" fontWeight={600} color="text.primary">
          Patient&apos;s list
        </Typography>
        <Chip
          label="Today"
          deleteIcon={<KeyboardArrowDownIcon />}
          onDelete={() => {}}
          sx={{
            bgcolor: "grey.200",
            "& .MuiChip-deleteIcon": {
              margin: 0,
            },
          }}
        />
      </Stack>

      <List>
        {patients.map((patient) => (
          <ListItem
            key={patient.name}
            sx={{
              borderRadius: 1,
              mb: 1,
              "&:hover": { bgcolor: "grey.50" },
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{patient.icon}</ListItemIcon>
            <ListItemText
              primary={patient.name}
              secondary={patient.type}
              primaryTypographyProps={{
                fontWeight: 500,
                color: "text.primary",
              }}
              secondaryTypographyProps={{
                color: "text.secondary",
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {patient.time}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
