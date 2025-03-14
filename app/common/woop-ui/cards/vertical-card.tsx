import { Shadows } from "@/app/common/styles/style-setting";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  SxProps,
  Stack,
} from "@mui/material";
import React from "react";

export type VerticalCardProps = {
  image?: string;
  headerSlot?: React.ReactNode;
  title?: string;
  description?: string;
  footerSlot?: React.ReactNode;
  floatIcon?: React.ReactNode;
  pictureSize?: number;
  sx?: SxProps;
};

export const VerticalCard = ({
  image,
  headerSlot,
  title,
  description,
  footerSlot,
  floatIcon,
  pictureSize = 324,
  sx,
}: VerticalCardProps) => {
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
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{
            height: pictureSize,
            borderRadius: 2,
          }}
        />
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          flex: 1,
          justifyContent: "flex-start",
        }}
        style={{
          padding: "0px",
        }}
      >
        {headerSlot}
        <Typography
          variant="subtitle2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
        {footerSlot && (
          <Stack sx={{ flex: 1, mt: 2 }} justifyContent="flex-end">
            {footerSlot}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
