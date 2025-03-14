import { Shadows } from "@/app/common/styles/style-setting";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const HorizontalCard = ({
  image,
  title,
  description,
  footerSlot,
  headerSlot,
  floatIcon,
  pictureSize = 240,
  rightAttachedSlot,
}: {
  image?: string;
  title?: string;
  description?: string;
  footerSlot?: React.ReactNode;
  headerSlot?: React.ReactNode;
  floatIcon?: React.ReactNode;
  pictureSize?: number;
  rightAttachedSlot?: React.ReactNode;
}) => {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 2,
        display: "flex",
        bgcolor: (theme) => theme.palette.background.default,
        boxShadow: Shadows.Z100.style,
        position: "relative",
        width: "100%",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 26,
          left: pictureSize - 34,
        }}
      >
        {floatIcon}
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardMedia
          sx={{
            width: pictureSize,
            height: pictureSize,
            borderRadius: 2,
            flexShrink: 0,
          }}
          component="img"
          image={image}
          alt="Card image"
        />

        <CardContent
          sx={{
            px: 4,
            maxHeight: pictureSize,
            gap: 1,
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
          }}
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {headerSlot}
          <Typography variant="subtitle2">{title}</Typography>
          <Typography
            variant="body1"
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
          {footerSlot && <Stack mt={1}>{footerSlot}</Stack>}
        </CardContent>
        {rightAttachedSlot}
      </Box>
    </Card>
  );
};
