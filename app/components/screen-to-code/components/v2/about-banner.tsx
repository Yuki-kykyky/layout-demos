"use client";
import React from "react";
import { aboutBannerMatchProps } from "../../reference/v2/match-props";
import { WoopBadge, WoopBtn } from "@/app/common/woop-ui";
import { Container, Box, Stack, Typography, Grid2 } from "@mui/material";
import { useRouter } from "next/navigation";
import { STCV2Routes } from "../../reference/route-reference";

export const AboutBanner = () => {
  const { eyebrowBadge, title, imageGroup, expert, stat } =
    aboutBannerMatchProps;
  const { cta_button } = STCV2Routes.routes.modules.about.banner;

  const router = useRouter();

  const handleClick = () => {
    router.push(cta_button.path);
  };

  return (
    <Container maxWidth="lg">
      <Box py={8} textAlign="center">
        <Box mb={2} display={"flex"} justifyContent={"center"}>
          <WoopBadge {...eyebrowBadge} />
        </Box>
        <Typography variant={title.variant} fontWeight="bold" mb={2}>
          {title.content.split(title.emphasize).map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index === 0 && (
                <Typography
                  variant={title.variant}
                  component="span"
                  color="primary"
                >
                  {title.emphasize}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Typography>

        {/* Image Grid */}
        <Grid2 container spacing={4} mt={8} mb={12}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              borderRadius={3}
              overflow="hidden"
              sx={{
                position: "relative",
                width: "100%",
                height: "632px",
                "& img": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img
                src={imageGroup[0]}
                alt="Modern luxury home with sleek architecture and glass balcony"
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Box
                borderRadius={3}
                overflow="hidden"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  "& img": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
              >
                <img
                  src={imageGroup[1]}
                  alt="Luxury home interior with open concept living room and pool view"
                />
              </Box>
              <Box
                borderRadius={3}
                overflow="hidden"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  "& img": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
              >
                <img
                  src={imageGroup[2]}
                  alt="Real estate team discussing property details with clients around a laptop"
                />
              </Box>
            </Stack>
          </Grid2>
        </Grid2>

        {/* Expert Section */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={8} mb={12}>
          <Box flex={1} textAlign="left">
            <Typography variant={expert.title.variant} fontWeight="bold" mb={2}>
              {expert.title.content}
            </Typography>
          </Box>
          <Box flex={1} textAlign="left">
            <Typography variant="body1" color="text.secondary" mb={4}>
              {expert.content.description}
            </Typography>
            <WoopBtn
              buttonText={expert.content.button.buttonText}
              type={expert.content.button.type}
              onClick={handleClick}
            />
          </Box>
        </Stack>

        {/* Stats */}
        <Box bgcolor="grey.100" borderRadius={3} p={8} mb={12}>
          <Stack direction="row" justifyContent="space-between">
            {stat.map((item, index) => (
              <Box textAlign="center" key={index}>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {item.rate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
