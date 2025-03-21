import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Charts = () => {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3 }}
    >
      {/* Costs Chart */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Costs
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Aug 21 - Sep 21
            </Typography>
            <IconButton size="small">
              <MoreHorizIcon sx={{ color: "grey.400" }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "primary.main",
              }}
            />
            <Typography variant="caption">Costs</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "primary.light",
              }}
            />
            <Typography variant="caption">Exps</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "warning.main",
              }}
            />
            <Typography variant="caption">Odds</Typography>
          </Box>
        </Box>

        <Box sx={{ height: 200, position: "relative" }}>
          <Box
            component="img"
            src="https://placehold.co/600x200/png?text=Line+Chart+with+multiple+series+showing+costs+trends"
            alt="Line chart showing costs, expenses, and odds trends over time"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              right: "25%",
              bgcolor: "primary.light",
              color: "primary.main",
              px: 1,
              py: 0.5,
              borderRadius: "9999px",
            }}
          >
            <Typography variant="caption">4.25%</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          {["24 Aug", "31 Aug", "7 Sep", "14 Sep", "21 Sep"].map((date) => (
            <Typography key={date} variant="caption" color="text.secondary">
              {date}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* ACoS vs TACoS */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            ACoS vs TACoS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Aug 21 - Sep 21
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "grey.300",
                  }}
                />
                <Typography variant="caption">Coasts</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "primary.light",
                  }}
                />
                <Typography variant="caption">Sell</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "grey.900",
                  }}
                />
                <Typography variant="caption">Sell</Typography>
              </Box>
            </Box>
            <IconButton size="small">
              <MoreHorizIcon sx={{ color: "grey.400" }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ height: 200, position: "relative" }}>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                pr: 1,
              }}
            >
              {[8, 6, 4, 2, 0].map((value) => (
                <Typography
                  key={value}
                  variant="caption"
                  color="text.secondary"
                >
                  {value}
                </Typography>
              ))}
            </Box>
            <Box sx={{ flex: 1, position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "25%",
                  bottom: "25%",
                  width: 64,
                  height: 128,
                  bgcolor: "primary.light",
                  borderRadius: "4px 4px 0 0",
                  opacity: 0.7,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: "25%",
                  bottom: "25%",
                  width: 64,
                  height: 128,
                  bgcolor: "primary.light",
                  borderRadius: "4px 4px 0 0",
                  opacity: 0.7,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  borderTop: "1px dashed",
                  borderColor: "grey.300",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: "25%",
                  bottom: "33%",
                  bgcolor: "black",
                  color: "white",
                  px: 1,
                  py: 0.5,
                  borderRadius: "9999px",
                }}
              >
                <Typography variant="caption">8.15%</Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: "25%",
                  top: "25%",
                  bgcolor: "black",
                  color: "white",
                  px: 1,
                  py: 0.5,
                  borderRadius: "9999px",
                }}
              >
                <Typography variant="caption">75.25%</Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    border: "2px solid",
                    borderColor: "black",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{ flex: 1, borderTop: "1px solid", borderColor: "black" }}
                />
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    border: "2px solid",
                    borderColor: "black",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Box />
          <Typography variant="caption" color="text.secondary">
            31 Aug
          </Typography>
          <Typography variant="caption" color="text.secondary">
            21 Sep
          </Typography>
          <Box />
        </Box>
      </Box>
    </Box>
  );
};
