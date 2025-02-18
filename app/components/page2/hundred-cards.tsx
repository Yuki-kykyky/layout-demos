import { Box, Container } from "@mui/material";
import {
  CardV1,
  CardV2,
  CardV3,
  CardV4,
  CardV5,
  CardV6,
  CardV7,
  CardV8,
  CardV9,
  CardV10,
} from "@/app/common/ui/page2/vertical-cards";
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
      <CardV5
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        svgContent={
          <Box
            component="img"
            src="/goooose14.jpg"
            alt="Headline"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "24px",
            }}
          />
        }
      />
      <CardV6
        part="Part I"
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        buttons={[
          { label: "Button 2", variant: "outlined" },
          { label: "Button 1", variant: "contained" },
        ]}
      />
      <CardV7
        avatar="/goooose14.jpg"
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
        tags={["Tag 1", "Tag 2", "Tag 3"]}
      />
      <CardV8
        tagLabel="Tag"
        image="/goooose14.jpg"
        headline="Headline"
        content="Please add your content here. Keep it short and simple. And smile :)"
      />

      {/* HeaderCard 示例 */}
      <CardV9
        avatar="/goooose14.jpg"
        headline="Headline"
        subhead="Subhead"
        svgContent={
          <Box
            component="img"
            src="/goooose14.jpg"
            alt="Headline"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "24px",
            }}
          />
        }
        contents={["Content 1", "Content 2", "Content 3"]}
      />
      <CardV10
        headline="Headline"
        subhead="Subhead"
        contents={["Content 1", "Content 2", "Content 3"]}
      />
    </Container>
  );
}
