import { Shadows } from "@/app/common/styles/style-setting";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  SxProps,
} from "@mui/material";
import React from "react";

export const VerticalCard = ({
  image,
  headerSlot,
  title,
  description,
  footerSlot,
  floatIcon,
  pictureSize = 324,
  sx,
}: {
  image?: string;
  headerSlot?: React.ReactNode;
  title?: string;
  description?: string;
  footerSlot?: React.ReactNode;
  floatIcon?: React.ReactNode;
  pictureSize?: number;
  sx?: SxProps;
}) => {
  return (
    <Card
      sx={{
        pt: 2,
        px: 2,
        pb: 4,
        gap: 2,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        bgcolor: (theme) => theme.palette.background.default,
        boxShadow: Shadows.Z100.style,
        width: pictureSize + 32,
        borderRadius: 2,
        ...sx,
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 26,
          right: 26,
        }}
      >
        {floatIcon}
      </IconButton>
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
        sx={{
          height: pictureSize,
          borderRadius: 2,
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,

          justifyContent: "space-between",
        }}
        style={{
          padding: "0px",
        }}
      >
        {headerSlot}
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        {footerSlot}
      </CardContent>
    </Card>
  );
};
