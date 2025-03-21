"use client";

import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";

const conditions = ["Fever", "Caught", "Heart Burn"];

export const VisitDetails = () => {
  return (
    <Box
      sx={{ bgcolor: "background.paper", borderRadius: 4, boxShadow: 1, p: 4 }}
    >
      <Typography variant="h6" fontWeight={600} color="text.primary" mb={4}>
        Visit details
      </Typography>

      <Box>
        <Typography variant="subtitle1" fontWeight={500} color="text.primary">
          Taigo Wilkinson
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Male - 38 Years 5 Months
        </Typography>

        <Stack direction="row" spacing={1} mb={2}>
          {conditions.map((condition) => (
            <Chip
              key={condition}
              label={condition}
              size="small"
              sx={{ bgcolor: "grey.200" }}
            />
          ))}
        </Stack>

        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            Last Checked{" "}
            <Box component="span" fontWeight={500}>
              Dr Everly on 21 April 2021
            </Box>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Prescription{" "}
            <Box component="span" color="primary.main">
              #2.1983KTO
            </Box>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Observation{" "}
            <Box component="span" fontWeight={500}>
              High fever and cough at normal hemoglobin levels.
            </Box>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Prescription{" "}
            <Box component="span" fontWeight={500}>
              Paracetmol - 2 times a day
            </Box>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Box component="span" fontWeight={500}>
              Dizopam - Day and Night before meal
            </Box>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
