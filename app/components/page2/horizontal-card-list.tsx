import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import {
  CardH1,
  CardH2,
  CardH3,
  CardH4,
  CardH5,
  CardH6,
  CardH7,
  CardH8,
  CardH9,
} from "../../common/ui/page2/horizontal-cards";

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
      <CardH4
        headline="Headline 4"
        content="Please add your content here. Keep it short and simple. And smile :)"
        tags={["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7"]}
        iconUrl="/goooose20.jpg"
      />
      <CardH5
        iconUrl="/goooose20.jpg"
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        time="12:00 PM"
      />
      <CardH6
        headline="Headline 6"
        content="Please add your content here. Keep it short and simple. And smile :)"
        iconUrl="/goooose20.jpg"
      />
      <CardH7
        tag="Tag or button"
        headline="Headline"
        dueDate="Due by 04/22"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
      <CardH7
        headline="Headline"
        dueDate="12:00 PM"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
      <CardH8
        tag="Tag or button"
        headline="Headline"
        dueDate="Due by 04/22"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
      <CardH9
        appendix={
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "rgba(102, 102, 102, 0.80)",
                fontSize: "12px",
                fontFamily: "Source Code Pro",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              Something here
            </Typography>
            <Typography
              sx={{
                textAlign: "right",
                color: "rgba(102, 102, 102, 0.80)",
                fontSize: "12px",
                fontFamily: "Source Code Pro",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              Due by 04/22
            </Typography>
          </Box>
        }
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
    </Stack>
  );
}
