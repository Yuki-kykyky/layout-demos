import { Container } from "@mui/material";
import {
  CardV1,
  CardV2,
  CardV3,
  CardV4,
} from "../common/ui/page2/vertical-cards";
import React from "react";

export function HundredCards() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "black",
        p: 2,
        gap: 2,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <CardV1
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        image="/goooose14.jpg"
      />
      <CardV2
        image="/goooose14.jpg"
        headline="Headline"
        subtitle="Subtitle"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />
      <CardV3
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        tag="Button"
      />
      <CardV4
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        icons={["/goooose14.jpg", "/goooose14.jpg", "/goooose14.jpg"]}
      />
    </Container>
  );
}
