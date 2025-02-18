import {
  Container,
  Box,
  Typography,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function LayoutExerciseV3() {
  return (
    <Container maxWidth="lg">
      <Box
        data-layer="layout-exercise"
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 7,
          border: "2px solid black",
        }}
      >
        <Stack direction="row" spacing={6}>
          {/* Section A */}
          <Box data-layer="sectionA" sx={{ width: 400 }}>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ height: 64, lineHeight: "64px" }}
              >
                SECTION A TITLE
              </Typography>

              <Box sx={{ height: 720 }}>
                <Stack spacing={3} sx={{ height: 630 }}>
                  {[1, 2, 3].map((item) => (
                    <Box
                      key={item}
                      data-layer="sectionA-item"
                      sx={{ position: "relative", height: 192 }}
                    >
                      <Box
                        component="img"
                        src="/goooose20.jpg"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          width: 36,
                          height: 36,
                          bgcolor: "black",
                          "&:hover": { bgcolor: "black" },
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                      />
                    </Box>
                  ))}
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: 90 }}
                >
                  <IconButton>
                    <ArrowBackIosNewIcon />
                  </IconButton>

                  {[1, 2, 3, 4, 5].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "black",
                        borderRadius: 0,
                      }}
                    />
                  ))}

                  <IconButton>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Section B */}
          <Box data-layer="sectionB" sx={{ width: 400 }}>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ height: 64, lineHeight: "64px" }}
              >
                SECTION B TITLE
              </Typography>

              <Box sx={{ height: 720, overflowY: "auto" }}>
                <Stack spacing={3}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Paper
                      key={item}
                      elevation={0}
                      sx={{
                        display: "flex",
                        height: 120,
                      }}
                    >
                      <Box
                        component="img"
                        src="/goooose20.jpg"
                        sx={{
                          width: 120,
                          height: 120,
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <Box
                        sx={{
                          flex: 1,
                          p: 1.5,
                          ml: 1.5,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          noWrap
                        >
                          title set here, look at me...
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            mb: 1,
                            lineHeight: 1.2,
                          }}
                        >
                          normal description,normal description, abca, normal
                          description, normal description, normal description,
                          normal description, normal description,
                        </Typography>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ mt: "auto" }}
                        >
                          <Typography variant="caption">
                            detail info A
                          </Typography>
                          <Typography variant="caption">
                            detail info B
                          </Typography>
                        </Stack>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
