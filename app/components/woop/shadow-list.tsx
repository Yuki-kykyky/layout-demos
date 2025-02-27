import { Shadows } from "../../common/styles/style-setting";
import { Stack } from "@mui/material";
import React from "react";
import StyleItem from "./style-item";

export function ShadowList() {
  const shadowCategories = Object.entries(Shadows);
  return (
    <Stack data-layer="shadow-list" direction="row" flexWrap="wrap" gap={2}>
      {shadowCategories.map(([shadowName, style]) => (
        <StyleItem name={shadowName} key={shadowName} defination={style} />
      ))}
    </Stack>
  );
}
