import { ItemDescription } from "@/app/common/ui/description";
import { ItemTitle } from "@/app/common/ui/title";
import { Box, Card } from "@mui/material";
import React from "react";
import { InfoTag } from "@/app/common/ui/tag";

export const InfoCard = (props: {
  imgSrc: string;
  category: string;
  title: string;
  date: string;
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        height: 160,
        borderRadius: "16px",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={props.imgSrc}
        sx={{
          width: 160,
          height: 160,
          objectFit: "cover",
        }}
      />
      <Box sx={{ p: 1.5, flex: 1 }}>
        <InfoTag tag={props.category} sx={{ my: 1 }} />
        <ItemTitle>{props.title}</ItemTitle>
        <ItemDescription description={props.date} />
      </Box>
    </Card>
  );
};
