import { ChipType } from "@/app/common/ui/page2/woop/woop-chip";
import { HourglassBottom } from "@mui/icons-material";
import React from "react";
import { WoopChip } from "@/app/common/ui/page2/woop/woop-chip";
import { Stack } from "@mui/material";

export const ChipList = () => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
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
