import { Stack } from "@mui/material";
import React from "react";
import { CardH1, CardH2, CardH3 } from "../../common/ui/page2/horizontal-cards";

export function HorizontalCardList() {
  return (
    <Stack direction="row" spacing={3} alignItems="flex-start">
      <CardH1
        iconUrl="/goooose20.jpg"
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
      <CardH2
        time="12:00 PM"
        date="April, 08"
        headline="Headline 2"
        content="Please add your content here. Keep it short and simple. And smile :)"
        iconUrl="/goooose20.jpg"
      />
      <CardH3
        headline="Headline 3"
        content="Please add your content here. Keep it short and simple. And smile :)"
        iconUrl="/goooose20.jpg"
        colorCode="#3C3C43"
      />
    </Stack>
  );
}
