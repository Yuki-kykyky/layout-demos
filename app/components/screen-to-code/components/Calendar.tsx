"use client";

import {
  Box,
  Typography,
  IconButton,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React from "react";

const weekDays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const calendarData = [
  ["", "", "1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10", "11", "12"],
  ["13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26"],
  ["27", "28", "29", "30", "31", "", ""],
];

export const Calendar = () => {
  return (
    <Box mb={6}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <IconButton size="small">
          <ChevronLeft />
        </IconButton>
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          May 2024
        </Typography>
        <IconButton size="small">
          <ChevronRight />
        </IconButton>
      </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            {weekDays.map((day) => (
              <TableCell
                key={day}
                align="center"
                sx={{
                  color: "text.secondary",
                  border: "none",
                  padding: 1,
                }}
              >
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {calendarData.map((week, weekIndex) => (
            <TableRow key={weekIndex}>
              {week.map((day, dayIndex) => (
                <TableCell
                  key={`${weekIndex}-${dayIndex}`}
                  align="center"
                  sx={{
                    border: "none",
                    padding: 1,
                    ...(day === "15" && {
                      bgcolor: "pink.200",
                      borderRadius: "50%",
                    }),
                  }}
                >
                  {day}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "grey.800",
          color: "common.white",
          borderRadius: "9999px",
          "&:hover": {
            bgcolor: "grey.900",
          },
        }}
      >
        Add event
      </Button>
    </Box>
  );
}
