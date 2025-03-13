import { ChipType } from "@/app/common/woop-ui/woop-chip";
import { HourglassBottom } from "@mui/icons-material";
import React from "react";
import { WoopChip } from "@/app/common/woop-ui/woop-chip";
import { Box, Stack } from "@mui/material";

export const ChipList = () => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
      <WoopChip
        label="Primary"
        startIcon={<HourglassBottom />}
        onClick={() => {
          console.log("clicked");
        }}
      />
      <WoopChip
        endIcon={<HourglassBottom />}
        label="Secondary"
        type={ChipType.Secondary}
        onClick={() => {
          console.log("clicked");
        }}
      />
      <WoopChip
        startIcon={
          <Box
            sx={{
              width: 18,
              height: 18,
              backgroundImage: `url(/goooose14.jpg)`,
              backgroundSize: "cover",
            }}
          />
        }
        label="Chip with Image"
        onClick={() => {
          console.log("clicked");
        }}
      />
      <WoopChip
        label="Primary Close"
        isClose
        onClick={() => {
          console.log("clicked");
        }}
      />
      <WoopChip
        label="Secondary Close"
        isClose
        type={ChipType.Secondary}
        onClick={() => {
          console.log("clicked");
        }}
      />
    </Stack>
  );
};
