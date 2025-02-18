import { Stack } from "@mui/material";
import React from "react";
import { CardH1 } from "../../common/ui/page2/horizontal-cards";

export function HorizontalCardList() {
  return (
    <Stack direction="row" spacing={3} alignItems="flex-start">
      <CardH1
        iconUrl="/goooose20.jpg"
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
    </Stack>
  );
}
