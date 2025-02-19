import { Shadows } from "../../common/styles/shadows";
import { Stack } from "@mui/material";
import React from "react";
import ShadowItem from "./shadow-item";

export function ShadowList() {
  const shadowCategories = Object.entries(Shadows);
  return (
    <Stack data-layer="shadow-list" direction="row" flexWrap="wrap" gap={2}>
      {shadowCategories.map(([key, shadow]) => (
        <ShadowItem shadowName={key} key={key} shadow={shadow} />
      ))}
    </Stack>
  );
}
