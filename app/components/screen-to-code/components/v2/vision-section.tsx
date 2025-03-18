import React from "react";
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { visionSectionMatchProps } from "../../reference/v2/match-props";
import { STCV2Routes } from "../../reference/route-reference";

export const VisionSection = () => {
  const { eyebrowBadge, title, button, visions } = visionSectionMatchProps;
  const router = useRouter();

  const handleClick = () => {
    router.push(STCV2Routes.routes.modules.vision.cta_button.path);
  };

  return (
    <Box py={8} sx={{ backgroundColor: "grey.50" }}>
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
          <Box width={{ xs: "100%", md: "50%" }}>
            <Typography color="primary" variant="body2">
              {eyebrowBadge.content}
            </Typography>
            <Typography
              variant={title.variant}
              color="text.primary"
              fontWeight={600}
              mt={1}
            >
              {title.content}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: 28,
                bgcolor: "grey.900",
                "&:hover": { bgcolor: "grey.700" },
              }}
              onClick={handleClick}
            >
              {button.buttonText}
            </Button>
          </Box>

          <Box width={{ xs: "100%", md: "50%" }} mt={{ xs: 4, md: 0 }}>
            <Stack spacing={3}>
              {visions.map((vision, index) => (
                <Stack key={index} direction="row" alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "primary.50",
                      color: "primary.main",
                      borderRadius: "50%",
                      p: 1,
                      mr: 2,
                    }}
                  >
                    <i className="fas fa-star" />
                  </Box>
                  <Box>
                    <Typography
                      variant={vision.title.variant}
                      color="text.primary"
                      fontWeight={600}
                    >
                      {vision.title.content}
                    </Typography>
                    <Typography color="text.secondary">
                      {vision.content}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
