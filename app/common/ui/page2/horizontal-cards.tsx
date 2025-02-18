import { Card, Box, Stack, Typography } from "@mui/material";
import React from "react";

const CardH1 = ({
  headline,
  content,
  iconUrl,
}: {
  headline: string;
  content: string;
  iconUrl?: string;
}) => {
  return (
    <Card
      sx={{
        width: 540,
        height: 128,
        padding: 3,
        background: "white",
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            background: "#DEDEDE",
            borderRadius: "50%",
            backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontSize: 18,
              fontFamily: "Source Code Pro",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            {headline}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: 380,
              color: "#3C3C43",
              fontSize: 14,
              fontFamily: "Source Code Pro",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            {content}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export { CardH1 };
