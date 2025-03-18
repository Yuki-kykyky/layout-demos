import React from "react";
import { Container, Typography, Stack, Grid2, Box } from "@mui/material";
import { WoopBtn } from "@/app/common/woop-ui";
import { headerBannerProps } from "../../reference/match-props";

export const HeaderBanner = () => {
  const { title, subtitle, buttonGroup, image } = headerBannerProps;

  return (
    <Box className="relative pt-10 pb-20">
      <Container maxWidth="lg">
        <Grid2 container spacing={8}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack
              justifyContent="center"
              alignItems="flex-start"
              height="100%"
              spacing={3}
            >
              <Typography variant={title.variant} className="mb-4">
                {title.content}
              </Typography>
              <Typography
                variant={subtitle.variant}
                color="text.secondary"
                className="mb-6"
              >
                {subtitle.content}
              </Typography>
              <Stack direction="row" spacing={2}>
                <WoopBtn {...buttonGroup.first} />
                <WoopBtn {...buttonGroup.second} />
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg shadow-md"
              sx={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
