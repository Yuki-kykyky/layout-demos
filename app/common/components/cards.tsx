import { ItemDescription } from "@/app/common/components/descriptions";
import { InfoTag } from "@/app/common/components/tags";
import { ItemTitle } from "@/app/common/components/titles";
import { Box, Card } from "@mui/material";
import React from "react";

const InfoCard = (props: {
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
        <ItemTitle isTruncated>{props.title}</ItemTitle>
        <ItemDescription description={props.date} isTruncated />
      </Box>
    </Card>
  );
};

const VerticalCard = (props: {
  imgSrc: string;
  title: string;
  detailInfo: string;
}) => {
  return (
    <Card
      sx={{
        width: "234px",
        borderRadius: "16px",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={props.imgSrc}
        sx={{
          width: "100%",
          height: "324px",
          objectFit: "cover",
        }}
      />
      <Box sx={{ p: 1.5 }}>
        <ItemTitle isTruncated lineClamp={1}>
          {props.title}
        </ItemTitle>
        <ItemDescription description={props.detailInfo} isTruncated />
      </Box>
    </Card>
  );
};

export { InfoCard, VerticalCard };
